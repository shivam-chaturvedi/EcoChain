import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import { Colors } from '../../../constants';

const { width: W } = Dimensions.get('window');

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'StudentCalendar'>;
};

// ─── Calendar constants ───────────────────────────────────────────────────────
const DAY_HEADERS = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
const TODAY_COL   = 6; // SUN column (0-indexed)
const TODAY_DATE  = 4;
const SELECTED    = 4;

// Weeks to display (Mon-indexed, null = overflow from prev/next month)
const WEEKS: (number | null)[][] = [
  [28, 29, 30, 1, 2, 3, 4],
  [5,  6,  7,  8, 9, 10, 11],
  [12, 13, 14, 15, 16, 17, 18],
];

// Overflow dates (from previous month)
const PREV_MONTH_DATES = new Set([28, 29, 30]);

// Activity dot colors per date
const DOTS: Record<number, string[]> = {
  1:  ['#3B82F6'],
  2:  ['#3B82F6'],
  3:  ['#EF4444'],
  4:  ['#0D9488', '#0D9488'],
  6:  ['#F59E0B'],
  8:  ['#22C55E'],
  14: ['#3B82F6'],
};

const CELL_SIZE = Math.floor((W - 32 - 24) / 7); // (screen - outer pad - card pad) / 7

// ─── Screen ───────────────────────────────────────────────────────────────────
export default function StudentCalendarScreen({ navigation }: Props) {
  const [selected, setSelected] = useState<number>(SELECTED);

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor={styles.safe.backgroundColor} />

      {/* ── Header ─────────────────────────── */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarEmoji}>🌻</Text>
          </View>
          <Text style={styles.brand}>ChonX</Text>
        </View>
        <View style={styles.xpBadge}>
          <Text style={styles.xpIcon}>⚡</Text>
          <Text style={styles.xpText}>2,450 XP</Text>
        </View>
        <TouchableOpacity style={styles.bellBtn} activeOpacity={0.7}>
          <Text style={styles.bellIcon}>🔔</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}>

        {/* ── Streak card ───────────────────── */}
        <View style={styles.streakCard}>
          {/* Orange icon */}
          <View style={styles.streakIconWrapper}>
            <View style={styles.streakIcon}>
              <Text style={styles.streakEmoji}>🔥</Text>
            </View>
          </View>

          <Text style={styles.streakTitle}>Current Streak: 4 days</Text>

          <View style={styles.streakMetaRow}>
            <Text style={styles.streakDesc}>
              You're on fire! Keep logging actions to grow your impact.
            </Text>
            <Text style={styles.longestText}>Longest:{'\n'}12 days</Text>
          </View>

          {/* Progress bar (4/12 ≈ 33%) */}
          <View style={styles.streakTrack}>
            <View style={[styles.streakFill, { width: '33%' }]} />
          </View>
        </View>

        {/* ── Calendar card ─────────────────── */}
        <View style={styles.calCard}>
          {/* Day headers */}
          <View style={styles.dayHeaderRow}>
            {DAY_HEADERS.map((d, i) => (
              <View key={d} style={[styles.headerCell, { width: CELL_SIZE }]}>
                <Text
                  style={[
                    styles.dayHeaderTxt,
                    i >= 5 && styles.dayHeaderWeekend,
                  ]}>
                  {d}
                </Text>
              </View>
            ))}
          </View>

          {/* Week rows */}
          {WEEKS.map((week, wi) => (
            <View key={wi} style={styles.weekRow}>
              {week.map((date, di) => {
                const isOverflow = date !== null && PREV_MONTH_DATES.has(date) && wi === 0;
                const isSelected = date === selected && !isOverflow;
                const isToday    = date === TODAY_DATE && di === TODAY_COL;
                const dots       = date !== null && !isOverflow ? DOTS[date] ?? [] : [];

                return (
                  <TouchableOpacity
                    key={`${wi}-${di}`}
                    style={[styles.dayCell, { width: CELL_SIZE, height: CELL_SIZE + 14 }]}
                    onPress={() => date !== null && !isOverflow && setSelected(date)}
                    activeOpacity={date !== null && !isOverflow ? 0.7 : 1}
                    disabled={date === null || isOverflow}>
                    <View
                      style={[
                        styles.dateBubble,
                        isSelected && styles.dateBubbleSelected,
                        isToday && !isSelected && styles.dateBubbleToday,
                      ]}>
                      <Text
                        style={[
                          styles.dateNum,
                          isOverflow && styles.dateNumOverflow,
                          isSelected && styles.dateNumSelected,
                          !isOverflow && di >= 5 && styles.dateNumWeekend,
                        ]}>
                        {date ?? ''}
                      </Text>
                    </View>

                    {/* Activity dots */}
                    {dots.length > 0 && (
                      <View style={styles.dotsRow}>
                        {dots.map((color, di2) => (
                          <View
                            key={di2}
                            style={[styles.dot, { backgroundColor: color }]}
                          />
                        ))}
                      </View>
                    )}
                  </TouchableOpacity>
                );
              })}
            </View>
          ))}

          {/* Divider accent */}
          <View style={styles.calDivider} />
        </View>

        {/* ── Today's Logs card ─────────────── */}
        <View style={styles.logsCard}>
          <View style={styles.logsHeader}>
            <Text style={styles.logsTitle}>Today's Logs</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('ActivityFeed')}
              activeOpacity={0.7}>
              <Text style={styles.viewAll}>VIEW ALL</Text>
            </TouchableOpacity>
          </View>

          {/* Log item 1 */}
          <View style={styles.logItem}>
            <View style={[styles.logIconCircle, { backgroundColor: '#D1FAE5' }]}>
              <Text style={styles.logEmoji}>🌿</Text>
            </View>
            <View style={styles.logText}>
              <Text style={styles.logTitle}>Carbon Footprint Logged</Text>
              <Text style={styles.logSub}>Transportation Activity</Text>
            </View>
            <Text style={styles.logXp}>+25{'\n'}XP</Text>
          </View>

          {/* Log item 2 */}
          <View style={styles.logItem}>
            <View style={[styles.logIconSquare, { backgroundColor: '#EEF2FF' }]}>
              <Text style={styles.logEmoji}>📅</Text>
            </View>
            <View style={styles.logText}>
              <Text style={styles.logTitle}>Community Clean-up</Text>
              <Text style={styles.logSub}>Starts in 2 hours</Text>
            </View>
            <View style={styles.logArrowCircle}>
              <Text style={styles.logArrow}>›</Text>
            </View>
          </View>
        </View>

        <View style={{ height: 32 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

// ─── Styles ──────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F2F6F3',
  },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 8,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    flex: 1,
  },
  avatarCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#D8EFE2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarEmoji: { fontSize: 18 },
  brand: {
    fontSize: 17,
    fontWeight: '700',
    color: Colors.primaryDark,
  },
  xpBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0D9488',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    gap: 4,
  },
  xpIcon: { fontSize: 12 },
  xpText: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.white,
  },
  bellBtn: { padding: 4 },
  bellIcon: { fontSize: 22 },

  // Scroll
  scroll: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },

  // ── Streak card ──────────────────────────────────────────────────────────────
  streakCard: {
    backgroundColor: Colors.white,
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
    alignItems: 'center',
  },
  streakIconWrapper: {
    marginBottom: 12,
  },
  streakIcon: {
    width: 60,
    height: 60,
    borderRadius: 14,
    backgroundColor: '#F97316',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#F97316',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 4,
  },
  streakEmoji: { fontSize: 30 },
  streakTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: Colors.text,
    alignSelf: 'flex-start',
    marginBottom: 6,
  },
  streakMetaRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
    width: '100%',
  },
  streakDesc: {
    fontSize: 13,
    color: Colors.textSecondary,
    lineHeight: 19,
    flex: 1,
    paddingRight: 8,
  },
  longestText: {
    fontSize: 11,
    fontWeight: '700',
    color: Colors.text,
    textAlign: 'right',
    lineHeight: 15,
    flexShrink: 0,
  },
  streakTrack: {
    width: '100%',
    height: 6,
    backgroundColor: '#E5E7EB',
    borderRadius: 3,
    overflow: 'hidden',
  },
  streakFill: {
    height: '100%',
    backgroundColor: Colors.primaryDark,
    borderRadius: 3,
  },

  // ── Calendar card ─────────────────────────────────────────────────────────────
  calCard: {
    backgroundColor: Colors.white,
    borderRadius: 18,
    paddingHorizontal: 12,
    paddingTop: 14,
    paddingBottom: 8,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },

  // Day headers
  dayHeaderRow: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  headerCell: {
    alignItems: 'center',
    paddingVertical: 4,
  },
  dayHeaderTxt: {
    fontSize: 10,
    fontWeight: '700',
    color: Colors.textLight,
    letterSpacing: 0.3,
  },
  dayHeaderWeekend: {
    color: Colors.primaryDark,
  },

  // Week row
  weekRow: {
    flexDirection: 'row',
    marginBottom: 2,
  },

  // Day cell (touch area)
  dayCell: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 3,
  },

  // Date bubble
  dateBubble: {
    width: Math.min(CELL_SIZE - 6, 34),
    height: Math.min(CELL_SIZE - 6, 34),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateBubbleSelected: {
    borderWidth: 2,
    borderColor: '#0D9488',
  },
  dateBubbleToday: {
    backgroundColor: '#0D9488',
    borderRadius: 17,
  },
  dateNum: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.text,
  },
  dateNumOverflow: {
    color: '#D1D5DB',
  },
  dateNumSelected: {
    color: Colors.primaryDark,
    fontWeight: '800',
  },
  dateNumWeekend: {
    color: Colors.primaryDark,
  },

  // Dots row
  dotsRow: {
    flexDirection: 'row',
    gap: 3,
    marginTop: 3,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
  },

  // Divider
  calDivider: {
    height: 3,
    width: 40,
    backgroundColor: '#22C55E',
    borderRadius: 2,
    alignSelf: 'center',
    marginTop: 8,
    marginBottom: 4,
  },

  // ── Today's Logs card ──────────────────────────────────────────────────────────
  logsCard: {
    backgroundColor: Colors.white,
    borderRadius: 18,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  logsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  logsTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: Colors.text,
  },
  viewAll: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.primary,
  },

  // Log item
  logItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 14,
    padding: 12,
    marginBottom: 10,
    gap: 12,
  },
  logIconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  logIconSquare: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  logEmoji: { fontSize: 20 },
  logText: { flex: 1 },
  logTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 2,
    lineHeight: 19,
  },
  logSub: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  logXp: {
    fontSize: 16,
    fontWeight: '800',
    color: '#22C55E',
    textAlign: 'center',
    lineHeight: 20,
    flexShrink: 0,
  },
  logArrowCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#E5E7EB',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  logArrow: {
    fontSize: 18,
    color: Colors.textSecondary,
    fontWeight: '600',
    lineHeight: 22,
  },
});
