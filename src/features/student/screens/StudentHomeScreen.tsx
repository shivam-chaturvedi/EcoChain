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

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'StudentHome'>;
};

// ─── Static data ─────────────────────────────────────────────────────────────
const QUICK_ACTIONS = [
  { id: 'log',    emoji: '✅', label: 'Log Activity',  bg: '#E8F5EE', route: 'ActivityFeed' as const },
  { id: 'rew',    emoji: '🏅', label: 'View Rewards',  bg: '#E8F5EE', route: null },
  { id: 'cal',    emoji: '📅', label: 'Calendar',      bg: '#EEF2FF', route: 'StudentCalendar' as const },
  { id: 'lead',   emoji: '📊', label: 'Leaderboard',   bg: '#FEF3C7', route: 'ArenaHub' as const },
];

const ACTIVITIES = [
  { id: '1', emoji: '🚶', bg: '#E8F5EE', title: 'Walked to School',   points: 'Earned 15 EcoPoints', time: '2h ago' },
  { id: '2', emoji: '♻️', bg: '#E8F5EE', title: 'Plastic Sorting',    points: 'Earned 20 EcoPoints', time: 'Yesterday' },
  { id: '3', emoji: '⚡', bg: '#EEF2FF', title: 'Energy Quiz Master', points: 'Earned 50 EcoPoints', time: '2d ago' },
];

function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return 'Good Morning';
  if (h < 17) return 'Good Afternoon';
  return 'Good Evening';
}

// ─── Screen ───────────────────────────────────────────────────────────────────
export default function StudentHomeScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />

      {/* ── Header ─────────────────────────── */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarEmoji}>🌻</Text>
          </View>
          <Text style={styles.brand}>ChonX</Text>
        </View>
        <TouchableOpacity style={styles.bellBtn} activeOpacity={0.7}>
          <Text style={styles.bellIcon}>🔔</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}>

        {/* ── Greeting ───────────────────────── */}
        <View style={styles.greetRow}>
          <Text style={styles.greetTitle}>
            {getGreeting()}, Aisha {'🌅'}
          </Text>
          <Text style={styles.greetSub}>Let's save the planet today.</Text>
        </View>

        {/* ── Carbon Footprint Card ──────────── */}
        <View style={styles.carbonCard}>
          {/* Left content */}
          <View style={styles.carbonLeft}>
            <Text style={styles.carbonLabel}>CARBON FOOTPRINT SUMMARY</Text>
            <Text style={styles.carbonTitle}>
              Today's Footprint:{'\n'}4.7 kg CO₂
            </Text>
            <Text style={styles.carbonDesc}>
              You're 12% lower than your weekly average. Great job, Aisha!
            </Text>
            <TouchableOpacity style={styles.viewDetailsBtn} activeOpacity={0.8}>
              <Text style={styles.viewDetailsTxt}>VIEW DETAILS</Text>
            </TouchableOpacity>
          </View>

          {/* Right gauge */}
          <View style={styles.carbonRight}>
            <View style={styles.gaugeCircle}>
              {/* Dot indicator */}
              <View style={styles.gaugeDot} />
              <Text style={styles.gaugePercent}>-12%</Text>
              <Text style={styles.gaugeSaved}>SAVED</Text>
            </View>
          </View>
        </View>

        {/* ── Rewards Card ───────────────────── */}
        <View style={styles.rewardsCard}>
          <View style={[styles.topCircle, { backgroundColor: '#22C55E' }]}>
            <Text style={styles.topCircleEmoji}>⭐</Text>
          </View>
          <Text style={styles.rewardsLabel}>YOUR REWARDS</Text>
          <Text style={styles.rewardsCount}>590</Text>
          <Text style={styles.rewardsSub}>ECOPOINTS</Text>
          <TouchableOpacity style={styles.redeemBtn} activeOpacity={0.8}>
            <Text style={styles.redeemTxt}>REDEEM POINTS</Text>
          </TouchableOpacity>
        </View>

        {/* ── Current Challenge ──────────────── */}
        <View style={styles.challengeCard}>
          <View style={[styles.topCircle, { backgroundColor: '#D1FAE5' }]}>
            <Text style={styles.topCircleEmoji}>⚡</Text>
          </View>

          <View style={styles.challengeTitleRow}>
            <Text style={styles.challengeTitle}>
              Current Challenge:{'\n'}Plastic-Free Week
            </Text>
            <View style={styles.daysBadge}>
              <Text style={styles.daysBadgeTop}>3/7</Text>
              <Text style={styles.daysBadgeBot}>DAYS</Text>
            </View>
          </View>

          <View style={styles.challengeProgressTrack}>
            <View style={[styles.challengeProgressFill, { width: '43%' }]} />
          </View>

          <Text style={styles.challengeDesc}>
            Avoid single-use plastics to earn a 'Green Warrior' badge.
          </Text>
        </View>

        {/* ── Quick Actions ──────────────────── */}
        <View style={styles.actionsGrid}>
          <View style={styles.actionsRow}>
            {QUICK_ACTIONS.slice(0, 2).map(a => (
              <TouchableOpacity
                key={a.id} style={styles.actionCell} activeOpacity={0.8}
                onPress={() => a.route && navigation.navigate(a.route as any)}>
                <View style={[styles.actionCircle, { backgroundColor: a.bg }]}>
                  <Text style={styles.actionEmoji}>{a.emoji}</Text>
                </View>
                <Text style={styles.actionLabel}>{a.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.actionsRow}>
            {QUICK_ACTIONS.slice(2, 4).map(a => (
              <TouchableOpacity
                key={a.id} style={styles.actionCell} activeOpacity={0.8}
                onPress={() => a.route && navigation.navigate(a.route as any)}>
                <View style={[styles.actionCircle, { backgroundColor: a.bg }]}>
                  <Text style={styles.actionEmoji}>{a.emoji}</Text>
                </View>
                <Text style={styles.actionLabel}>{a.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* ── Recent Activities ─────────────── */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Activities</Text>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.seeAll}>SEE ALL</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.activitiesList}>
          {ACTIVITIES.map(a => (
            <View key={a.id} style={styles.activityRow}>
              <View style={[styles.activityIcon, { backgroundColor: a.bg }]}>
                <Text style={styles.activityEmoji}>{a.emoji}</Text>
              </View>
              <View style={styles.activityInfo}>
                <Text style={styles.activityTitle}>{a.title}</Text>
                <Text style={styles.activityPoints}>{a.points}</Text>
              </View>
              <Text style={styles.activityTime}>{a.time}</Text>
            </View>
          ))}
        </View>

        {/* ── Event Card ─────────────────────── */}
        <View style={styles.eventCard}>
          <Text style={styles.eventTitle}>Annual School Eco-Fair</Text>
          <Text style={styles.eventSub}>
            Riverside Academy Main Hall  •  09:00 AM
          </Text>
          <TouchableOpacity style={styles.reminderBtn} activeOpacity={0.85}>
            <Text style={styles.reminderTxt}>SET REMINDER</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 90 }} />
      </ScrollView>

      {/* ── FAB ────────────────────────────── */}
      <TouchableOpacity style={styles.fab} activeOpacity={0.85}>
        <Text style={styles.fabIcon}>📋</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
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
  brand: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.primaryDark,
  },
  bellBtn: { padding: 4 },
  bellIcon: { fontSize: 22 },

  // Scroll
  scroll: { paddingHorizontal: 16, paddingTop: 4 },

  // Greeting
  greetRow: { marginBottom: 16 },
  greetTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 3,
  },
  greetSub: {
    fontSize: 13,
    color: Colors.textSecondary,
  },

  // ── Carbon Card ──────────────────────────────
  carbonCard: {
    backgroundColor: Colors.primaryDark,
    borderRadius: 18,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
    overflow: 'hidden',
  },
  carbonLeft: { flex: 1.55, paddingRight: 8 },
  carbonLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: '#A7F3D0',
    letterSpacing: 0.8,
    marginBottom: 6,
  },
  carbonTitle: {
    fontSize: 19,
    fontWeight: '800',
    color: Colors.white,
    lineHeight: 25,
    marginBottom: 8,
  },
  carbonDesc: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.85)',
    lineHeight: 18,
    marginBottom: 12,
  },
  viewDetailsBtn: {
    alignSelf: 'flex-start',
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.55)',
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  viewDetailsTxt: {
    color: Colors.white,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.6,
  },
  carbonRight: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeCircle: {
    width: 88,
    height: 88,
    borderRadius: 44,
    borderWidth: 2.5,
    borderColor: 'rgba(255,255,255,0.38)',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  gaugeDot: {
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.white,
    left: -5,
    top: 38,
  },
  gaugePercent: {
    fontSize: 22,
    fontWeight: '800',
    color: Colors.white,
    lineHeight: 26,
  },
  gaugeSaved: {
    fontSize: 9,
    fontWeight: '700',
    color: 'rgba(255,255,255,0.7)',
    letterSpacing: 1,
  },

  // ── Rewards Card ─────────────────────────────
  rewardsCard: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    paddingTop: 28,
    paddingBottom: 16,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginBottom: 14,
    borderWidth: 1,
    borderColor: Colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  topCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  topCircleEmoji: { fontSize: 22 },
  rewardsLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: Colors.textLight,
    letterSpacing: 0.8,
    marginBottom: 2,
  },
  rewardsCount: {
    fontSize: 42,
    fontWeight: '800',
    color: Colors.primaryDark,
    lineHeight: 50,
  },
  rewardsSub: {
    fontSize: 11,
    fontWeight: '600',
    color: Colors.textLight,
    letterSpacing: 0.8,
    marginBottom: 14,
  },
  redeemBtn: {
    backgroundColor: '#F3F4F6',
    borderRadius: 20,
    paddingHorizontal: 24,
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  redeemTxt: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.textSecondary,
    letterSpacing: 0.8,
  },

  // ── Current Challenge Card ────────────────────
  challengeCard: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    paddingTop: 24,
    paddingBottom: 16,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: Colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  challengeTitleRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: 10,
    gap: 8,
  },
  challengeTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.text,
    flex: 1,
    lineHeight: 22,
  },
  daysBadge: {
    backgroundColor: Colors.primaryDark,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignItems: 'center',
  },
  daysBadgeTop: {
    fontSize: 13,
    fontWeight: '800',
    color: Colors.white,
    lineHeight: 16,
  },
  daysBadgeBot: {
    fontSize: 8,
    fontWeight: '700',
    color: 'rgba(255,255,255,0.85)',
    letterSpacing: 0.5,
  },
  challengeProgressTrack: {
    width: '100%',
    height: 5,
    backgroundColor: '#E5E7EB',
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 10,
  },
  challengeProgressFill: {
    height: '100%',
    backgroundColor: '#22C55E',
    borderRadius: 3,
  },
  challengeDesc: {
    fontSize: 13,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 19,
    width: '100%',
  },

  // ── Quick Actions ─────────────────────────────
  actionsGrid: { marginBottom: 20 },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 12,
  },
  actionCell: {
    flex: 1,
    alignItems: 'center',
  },
  actionCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  actionEmoji: { fontSize: 22 },
  actionLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.text,
    textAlign: 'center',
  },

  // ── Recent Activities ──────────────────────────
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: Colors.text,
  },
  seeAll: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.primary,
  },
  activitiesList: { marginBottom: 16 },
  activityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
    gap: 12,
  },
  activityIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  activityEmoji: { fontSize: 18 },
  activityInfo: { flex: 1 },
  activityTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 2,
  },
  activityPoints: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  activityTime: {
    fontSize: 12,
    color: Colors.textLight,
    flexShrink: 0,
  },

  // ── Event Card ────────────────────────────────
  eventCard: {
    borderWidth: 2,
    borderColor: Colors.primaryDark,
    borderRadius: 16,
    padding: 16,
    marginBottom: 8,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 4,
  },
  eventSub: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginBottom: 14,
    lineHeight: 19,
  },
  reminderBtn: {
    height: 48,
    backgroundColor: Colors.primaryDark,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  reminderTxt: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.white,
    letterSpacing: 0.8,
  },

  // ── FAB ───────────────────────────────────────
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 16,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: Colors.primaryDark,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.primaryDark,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 7,
  },
  fabIcon: { fontSize: 22 },
});
