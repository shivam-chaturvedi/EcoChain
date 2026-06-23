import React from 'react';
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
const HERO_H     = Math.round(W * 0.55);
const CAL_PAD    = 14;
const CAL_CELL   = Math.floor((W - 32 - CAL_PAD * 2) / 7);

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'CampaignDetail'>;
};

// ─── Schedule data ────────────────────────────────────────────────────────────
const DAY_LABELS = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

const SCHEDULE_WEEKS: (number | null)[][] = [
  [17, 18, 19, 20, 21, 22, 23],
  [24, 25, 26, null, null, null, null],
];

const CAMPAIGN_DATES = new Set([20, 21, 22, 23, 24, 25]);

// ─── Screen ───────────────────────────────────────────────────────────────────
export default function CampaignDetailScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.safe} edges={['bottom']}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}>

        {/* ── Hero image ──────────────────────── */}
        <View style={[styles.heroImage]}>
          {/* Simulated nature photo layers */}
          <View style={[StyleSheet.absoluteFill, { backgroundColor: '#0D2A15' }]} />
          <View style={[StyleSheet.absoluteFill, { backgroundColor: '#1A4D26', opacity: 0.7 }]} />
          <View style={styles.heroBottomFade} />
          <Text style={styles.heroEmoji}>🌱</Text>

          {/* Back button */}
          <TouchableOpacity
            style={[styles.heroBtn, styles.heroBtnLeft]}
            onPress={() => navigation.goBack()}
            activeOpacity={0.8}>
            <Text style={styles.heroBtnArrow}>←</Text>
          </TouchableOpacity>

          {/* Share button */}
          <TouchableOpacity style={[styles.heroBtn, styles.heroBtnRight]} activeOpacity={0.8}>
            <Text style={styles.heroBtnShare}>⬆</Text>
          </TouchableOpacity>
        </View>

        {/* ── Main info card (overlaps hero) ──── */}
        <View style={styles.mainCard}>

          {/* Community Initiative badge */}
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryTxt}>Community Initiative</Text>
          </View>

          {/* Title */}
          <Text style={styles.campaignTitle}>Reforest City</Text>

          {/* Lead + date row */}
          <View style={styles.metaRow}>
            <View style={styles.leadArea}>
              <View style={styles.leadAvatar}>
                <Text style={styles.leadAvatarEmoji}>👩</Text>
              </View>
              <View>
                <Text style={styles.leadBy}>Lead by:</Text>
                <Text style={styles.leadName}>Ms. Elena Rivera</Text>
              </View>
            </View>

            <View style={styles.metaDivider} />

            <View style={styles.dateArea}>
              <Text style={styles.calIcon}>📅</Text>
              <Text style={styles.dateTxt}>Oct 20 – Oct{'\n'}25, 2024</Text>
            </View>
          </View>

          {/* Metrics row */}
          <View style={styles.metricsRow}>
            <View style={styles.metricBox}>
              <Text style={styles.metricLabel}>XP VALUE</Text>
              <Text style={styles.metricValue}>450</Text>
            </View>
            <View style={styles.metricBox}>
              <Text style={styles.metricLabel}>DURATION</Text>
              <Text style={styles.metricValue}>6 Days</Text>
            </View>
          </View>
        </View>

        {/* ── Mission Description card ──────────── */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionTitleRow}>
            <Text style={styles.sectionIcon}>🚩</Text>
            <Text style={styles.sectionTitle}>Mission Description</Text>
          </View>
          <Text style={styles.missionText}>
            Help us plant 500 native trees in the downtown district to improve
            local air quality and create new green spaces for the community. This
            urban reforestation project is designed to tackle urban heat islands
            while fostering a sense of environmental stewardship among students.
          </Text>
        </View>

        {/* ── Campaign Schedule card ────────────── */}
        <View style={styles.sectionCard}>
          {/* Card title row */}
          <View style={styles.scheduleHeaderRow}>
            <View style={styles.scheduleLeft}>
              <View style={styles.calCircle}>
                <Text style={styles.calCircleEmoji}>📅</Text>
              </View>
              <Text style={styles.sectionTitle}>Campaign{'\n'}Schedule</Text>
            </View>
            <View style={styles.monthBadge}>
              <View style={styles.monthBadgeInner}>
                <Text style={styles.shieldEmoji}>🛡</Text>
                <View>
                  <Text style={styles.monthBadgeTxt}>OCTOBER</Text>
                  <Text style={styles.monthBadgeTxt}>2024</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Day headers */}
          <View style={styles.dayHeaderRow}>
            {DAY_LABELS.map(d => (
              <View key={d} style={[styles.headerCell, { width: CAL_CELL }]}>
                <Text style={styles.dayHeaderTxt}>{d}</Text>
              </View>
            ))}
          </View>

          {/* Schedule weeks */}
          {SCHEDULE_WEEKS.map((week, wi) => (
            <View key={wi} style={styles.calWeekRow}>
              {week.map((date, di) => {
                if (date === null) {
                  return <View key={di} style={{ width: CAL_CELL }} />;
                }
                const isCampaign = CAMPAIGN_DATES.has(date);
                return (
                  <View
                    key={di}
                    style={[
                      styles.calCell,
                      { width: CAL_CELL },
                    ]}>
                    {isCampaign ? (
                      <View style={styles.campaignCircle}>
                        <Text style={styles.campMonthTxt}>OCT</Text>
                        <Text style={styles.campDateNum}>{date}</Text>
                      </View>
                    ) : (
                      <Text style={styles.regularDateNum}>{date}</Text>
                    )}
                  </View>
                );
              })}
            </View>
          ))}

          {/* Info note */}
          <View style={styles.infoNote}>
            <View style={styles.infoIconCircle}>
              <Text style={styles.infoIconTxt}>i</Text>
            </View>
            <Text style={styles.infoText}>
              Joining this campaign will automatically block these dates in your{' '}
              <Text style={styles.infoHighlight}>Eco Calendar</Text>.
              {' '}Reminders will be sent 24 hours before each event begins.
            </Text>
          </View>
        </View>

        {/* Bottom padding so button doesn't cover content */}
        <View style={{ height: 24 }} />
      </ScrollView>

      {/* ── Sticky join button ────────────────── */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.joinBtn} activeOpacity={0.85}>
          <Text style={styles.joinBtnTxt}>Join Campaign  →</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// ─── Styles ──────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F2F6F3',
  },
  scroll: {
    paddingBottom: 20,
  },

  // ── Hero ──────────────────────────────────────────────────────────────────────
  heroImage: {
    width: W,
    height: HERO_H,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  heroBottomFade: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  heroEmoji: {
    fontSize: 72,
    opacity: 0.6,
    zIndex: 1,
  },
  heroBtn: {
    position: 'absolute',
    top: 48,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.9)',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
    zIndex: 5,
  },
  heroBtnLeft: { left: 16 },
  heroBtnRight: { right: 16 },
  heroBtnArrow: {
    fontSize: 16,
    color: Colors.text,
    fontWeight: '600',
  },
  heroBtnShare: {
    fontSize: 16,
    color: Colors.text,
    fontWeight: '700',
  },

  // ── Main info card ────────────────────────────────────────────────────────────
  mainCard: {
    backgroundColor: Colors.white,
    marginTop: -24,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 4,
    marginBottom: 14,
  },

  // Category badge
  categoryBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#D1FAE5',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginBottom: 12,
  },
  categoryTxt: {
    fontSize: 12,
    fontWeight: '700',
    color: '#065F46',
  },

  // Campaign title
  campaignTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: Colors.text,
    marginBottom: 14,
    lineHeight: 34,
  },

  // Meta row
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 10,
  },
  leadArea: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flex: 1,
  },
  leadAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#FFE4B5',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  leadAvatarEmoji: { fontSize: 14 },
  leadBy: {
    fontSize: 11,
    color: Colors.textSecondary,
  },
  leadName: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.primary,
  },
  metaDivider: {
    width: 1,
    height: 32,
    backgroundColor: Colors.border,
  },
  dateArea: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  calIcon: { fontSize: 16 },
  dateTxt: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.text,
    lineHeight: 17,
  },

  // Metrics
  metricsRow: {
    flexDirection: 'row',
    gap: 12,
  },
  metricBox: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
    alignItems: 'center',
  },
  metricLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: Colors.textLight,
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  metricValue: {
    fontSize: 22,
    fontWeight: '800',
    color: Colors.primaryDark,
  },

  // ── Section cards ─────────────────────────────────────────────────────────────
  sectionCard: {
    backgroundColor: Colors.white,
    borderRadius: 18,
    padding: 18,
    marginHorizontal: 16,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 14,
  },
  sectionIcon: { fontSize: 18 },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: Colors.text,
    lineHeight: 25,
  },
  missionText: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 23,
  },

  // ── Schedule ──────────────────────────────────────────────────────────────────
  scheduleHeaderRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  scheduleLeft: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    flex: 1,
  },
  calCircle: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: '#D1FAE5',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  calCircleEmoji: { fontSize: 18 },
  monthBadge: {
    borderWidth: 1.5,
    borderColor: '#0D9488',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  monthBadgeInner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  shieldEmoji: { fontSize: 12 },
  monthBadgeTxt: {
    fontSize: 9,
    fontWeight: '800',
    color: '#0D9488',
    letterSpacing: 0.4,
    lineHeight: 12,
  },

  // Day headers
  dayHeaderRow: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  headerCell: {
    alignItems: 'center',
    paddingVertical: 4,
  },
  dayHeaderTxt: {
    fontSize: 9,
    fontWeight: '700',
    color: Colors.textLight,
    letterSpacing: 0.3,
  },

  // Calendar rows
  calWeekRow: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  calCell: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 52,
  },

  // Campaign date circle
  campaignCircle: {
    width: Math.min(CAL_CELL - 4, 44),
    height: Math.min(CAL_CELL - 4, 44),
    borderRadius: Math.min(CAL_CELL - 4, 44) / 2,
    backgroundColor: Colors.primaryDark,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 2,
  },
  campMonthTxt: {
    fontSize: 7,
    fontWeight: '800',
    color: 'rgba(255,255,255,0.8)',
    letterSpacing: 0.4,
    lineHeight: 9,
  },
  campDateNum: {
    fontSize: 15,
    fontWeight: '800',
    color: Colors.white,
    lineHeight: 18,
  },

  // Regular (non-campaign) date
  regularDateNum: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.textLight,
  },

  // Info note
  infoNote: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#EFF6FF',
    borderRadius: 12,
    padding: 12,
    marginTop: 14,
    gap: 10,
  },
  infoIconCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#BFDBFE',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  infoIconTxt: {
    fontSize: 13,
    fontWeight: '800',
    color: '#1D4ED8',
    lineHeight: 17,
  },
  infoText: {
    flex: 1,
    fontSize: 13,
    color: Colors.textSecondary,
    lineHeight: 20,
  },
  infoHighlight: {
    fontWeight: '700',
    color: Colors.primary,
  },

  // ── Bottom bar ────────────────────────────────────────────────────────────────
  bottomBar: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 12,
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  joinBtn: {
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
  joinBtnTxt: {
    fontSize: 17,
    fontWeight: '700',
    color: Colors.white,
    letterSpacing: 0.3,
  },
});
