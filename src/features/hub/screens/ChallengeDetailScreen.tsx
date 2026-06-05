import React, { useState, useMemo } from 'react';
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

const { width: SCREEN_W } = Dimensions.get('window');

// ─── Calendar constants ───────────────────────────────────────────────────────
const OUTER_PAD  = 16;
const CARD_PAD   = 14;
const CELL       = Math.floor((SCREEN_W - OUTER_PAD * 2 - CARD_PAD * 2) / 7);
const CIRCLE     = Math.min(Math.floor(CELL * 0.8), 38);

const DAY_LABELS  = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
const MONTH_NAMES = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December',
];
const MAX_DAYS = 5;

// ─── Calendar utilities ───────────────────────────────────────────────────────
function daysInMonth(y: number, m: number) {
  return new Date(y, m + 1, 0).getDate();
}
// Returns Monday-indexed first weekday (0=Mon … 6=Sun)
function firstWeekday(y: number, m: number) {
  return (new Date(y, m, 1).getDay() + 6) % 7;
}

interface Cell {
  day: number | null;
  year: number;
  month: number;
  mainMonth: boolean;
  key: string;
}

function buildCells(startY: number, startM: number, numMonths = 3): Cell[] {
  const cells: Cell[] = [];

  // Leading padding for the first week
  const offset = firstWeekday(startY, startM);
  for (let i = 0; i < offset; i++) {
    cells.push({ day: null, year: startY, month: startM, mainMonth: false, key: `pre${i}` });
  }

  // Populate months
  for (let n = 0; n < numMonths; n++) {
    const absMonth = startM + n;
    const y  = startY + Math.floor(absMonth / 12);
    const m  = absMonth % 12;
    const d  = daysInMonth(y, m);
    for (let day = 1; day <= d; day++) {
      cells.push({ day, year: y, month: m, mainMonth: n === 0, key: `${y}_${m}_${day}` });
    }
  }

  // Trailing padding to complete last week
  const rem = cells.length % 7;
  if (rem !== 0) {
    for (let i = 0; i < 7 - rem; i++) {
      cells.push({ day: null, year: startY, month: startM, mainMonth: false, key: `post${i}` });
    }
  }

  return cells;
}

function intoRows(cells: Cell[]): Cell[][] {
  const rows: Cell[][] = [];
  for (let i = 0; i < cells.length; i += 7) rows.push(cells.slice(i, i + 7));
  return rows;
}

// ─── Screen ───────────────────────────────────────────────────────────────────
type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ChallengeDetail'>;
};

export default function ChallengeDetailScreen({ navigation }: Props) {
  const [viewYear,  setViewYear]  = useState(2024);
  const [viewMonth, setViewMonth] = useState(9); // October
  const [selected,  setSelected]  = useState(new Set<string>());

  const cells = useMemo(() => buildCells(viewYear, viewMonth), [viewYear, viewMonth]);
  const rows  = useMemo(() => intoRows(cells), [cells]);

  const prevMonth = () => {
    if (viewMonth === 0) { setViewYear(y => y - 1); setViewMonth(11); }
    else setViewMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewYear(y => y + 1); setViewMonth(0); }
    else setViewMonth(m => m + 1);
  };

  const toggleDay = (cell: Cell) => {
    if (!cell.day) return;
    const next = new Set(selected);
    if (next.has(cell.key)) {
      next.delete(cell.key);
    } else if (next.size < MAX_DAYS) {
      next.add(cell.key);
    }
    setSelected(next);
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
      <StatusBar barStyle="dark-content" backgroundColor={styles.safe.backgroundColor} />

      {/* ── Header ─────────────────────────── */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>

        <Text style={styles.brand}>ChonX</Text>

        <View style={styles.avatarCircle}>
          <Text style={styles.avatarEmoji}>🌻</Text>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}>

        {/* ── Title + description ────────────── */}
        <Text style={styles.challengeTitle}>The Green Commuter</Text>
        <Text style={styles.challengeDesc}>
          Reduce your carbon footprint by choosing eco-friendly travel options.
          Select 5 days this month to bike, walk, or use public transport to school.
        </Text>

        {/* ── Reward badges ─────────────────── */}
        <View style={styles.badgeRow}>
          <View style={styles.badge}>
            <Text style={styles.badgeValue}>500</Text>
            <Text style={styles.badgeUnit}>XP</Text>
          </View>
          <View style={styles.badge}>
            <View style={styles.badgeLeafRow}>
              <Text style={styles.leafEmoji}>🍃</Text>
              <Text style={styles.badgeValue}>150</Text>
            </View>
            <Text style={styles.badgeUnit}>EcoPoints</Text>
          </View>
        </View>

        {/* ── Calendar card ─────────────────── */}
        <View style={styles.calCard}>

          {/* Calendar top row: title + month navigator */}
          <View style={styles.calTopRow}>
            <Text style={styles.commitTitle}>
              Commit{'\n'}to your{'\n'}days
            </Text>

            <View style={styles.monthNav}>
              <TouchableOpacity onPress={prevMonth} style={styles.navBtn} activeOpacity={0.7}>
                <Text style={styles.navChevron}>‹</Text>
              </TouchableOpacity>
              <View style={styles.monthLabel}>
                <Text style={styles.monthName}>{MONTH_NAMES[viewMonth]}</Text>
                <Text style={styles.yearTxt}>{viewYear}</Text>
              </View>
              <TouchableOpacity onPress={nextMonth} style={styles.navBtn} activeOpacity={0.7}>
                <Text style={styles.navChevron}>›</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Day-of-week headers */}
          <View style={styles.dayHeaderRow}>
            {DAY_LABELS.map(d => (
              <View key={d} style={styles.headerCell}>
                <Text style={styles.dayHeaderTxt}>{d}</Text>
              </View>
            ))}
          </View>

          {/* Week rows */}
          {rows.map((row, ri) => (
            <View key={ri} style={styles.weekRow}>
              {row.map(cell => {
                const isSel = cell.key ? selected.has(cell.key) : false;
                return (
                  <TouchableOpacity
                    key={cell.key}
                    style={styles.dayCell}
                    onPress={() => toggleDay(cell)}
                    activeOpacity={cell.day ? 0.75 : 1}
                    disabled={!cell.day}>
                    {cell.day ? (
                      <View
                        style={[
                          styles.dayCircle,
                          isSel && styles.dayCircleSel,
                        ]}>
                        <Text
                          style={[
                            styles.dayNum,
                            !cell.mainMonth && styles.dayNumOther,
                            isSel && styles.dayNumSel,
                          ]}>
                          {cell.day}
                        </Text>
                      </View>
                    ) : null}
                  </TouchableOpacity>
                );
              })}
            </View>
          ))}
        </View>

        {/* ── Confirm button (shown when days selected) ── */}
        {selected.size > 0 && (
          <TouchableOpacity style={styles.confirmBtn} activeOpacity={0.85}>
            <Text style={styles.confirmTxt}>
              Confirm {selected.size} / {MAX_DAYS} Day
              {selected.size !== 1 ? 's' : ''} Selected
            </Text>
          </TouchableOpacity>
        )}

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
    justifyContent: 'space-between',
    paddingHorizontal: OUTER_PAD,
    paddingVertical: 12,
  },
  backBtn: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backArrow: {
    fontSize: 22,
    color: Colors.text,
    fontWeight: '600',
  },
  brand: {
    fontSize: 20,
    fontWeight: '800',
    color: Colors.primaryDark,
  },
  avatarCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#D8EFE2',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  avatarEmoji: { fontSize: 20 },

  // Scroll
  scroll: {
    paddingHorizontal: OUTER_PAD,
    paddingTop: 8,
  },

  // Title + desc
  challengeTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: Colors.text,
    marginBottom: 10,
    lineHeight: 32,
  },
  challengeDesc: {
    fontSize: 15,
    color: Colors.textSecondary,
    lineHeight: 23,
    marginBottom: 22,
  },

  // Reward badges
  badgeRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 22,
  },
  badge: {
    flex: 1,
    backgroundColor: '#CCF0E4',
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 14,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  badgeLeafRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  leafEmoji: { fontSize: 15 },
  badgeValue: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0D6A5C',
    lineHeight: 26,
  },
  badgeUnit: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0D6A5C',
    marginTop: 1,
  },

  // Calendar card
  calCard: {
    backgroundColor: Colors.white,
    borderRadius: 18,
    padding: CARD_PAD,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 10,
    elevation: 3,
    marginBottom: 16,
  },

  // Calendar top row
  calTopRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  commitTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: Colors.text,
    lineHeight: 26,
    flex: 1,
  },
  monthNav: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  navBtn: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navChevron: {
    fontSize: 20,
    color: Colors.text,
    fontWeight: '600',
    lineHeight: 24,
  },
  monthLabel: {
    alignItems: 'center',
    minWidth: 72,
  },
  monthName: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.text,
    lineHeight: 18,
  },
  yearTxt: {
    fontSize: 13,
    fontWeight: '500',
    color: Colors.textSecondary,
    lineHeight: 17,
  },

  // Day headers row
  dayHeaderRow: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  headerCell: {
    width: CELL,
    alignItems: 'center',
    paddingVertical: 4,
  },
  dayHeaderTxt: {
    fontSize: 10,
    fontWeight: '700',
    color: Colors.textLight,
    letterSpacing: 0.4,
  },

  // Week row
  weekRow: {
    flexDirection: 'row',
  },

  // Day cell (touch area)
  dayCell: {
    width: CELL,
    height: CELL,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Day circle
  dayCircle: {
    width: CIRCLE,
    height: CIRCLE,
    borderRadius: CIRCLE / 2,
    backgroundColor: '#EDEEED',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayCircleSel: {
    backgroundColor: Colors.primaryDark,
  },

  // Day number text
  dayNum: {
    fontSize: Math.min(13, CIRCLE * 0.38),
    fontWeight: '700',
    color: Colors.text,
  },
  dayNumOther: {
    color: '#BBBFBB',
    fontWeight: '500',
  },
  dayNumSel: {
    color: Colors.white,
  },

  // Confirm button
  confirmBtn: {
    height: 54,
    backgroundColor: Colors.buttonPrimary,
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.primaryDark,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  confirmTxt: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.white,
    letterSpacing: 0.3,
  },
});
