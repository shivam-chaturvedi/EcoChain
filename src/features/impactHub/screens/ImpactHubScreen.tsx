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
  navigation: NativeStackNavigationProp<RootStackParamList, 'ImpactHub'>;
};

// ─── Static data ──────────────────────────────────────────────────────────────
const WEEK_DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
const WEEK_DATES = [14, 15, 16, 17, 18, 19, 20];
const TODAY_DATE = 15;
const TODAY_ACTIVITY = 16; // extra highlighted day (logged activity)

const FEED_ITEMS = [
  {
    id: 'f1',
    bg: '#1A3D2E',
    emoji: '🌱',
    title: 'Oak High planted 50 trees!',
    desc: 'The whole community joined the spring initiative...',
    time: '2 HOURS AGO',
  },
  {
    id: 'f2',
    bg: '#1A3D2E',
    emoji: '🏆',
    title: "New Badge Earned: 'Eco-Warrior'",
    desc: "You've recycled 100kg of plastic this month.",
    time: '5 HOURS AGO',
  },
  {
    id: 'f3',
    bg: '#1A3D2E',
    emoji: '📋',
    title: 'Sarah shared a new guide',
    desc: '"5 ways to reduce energy at school without..."',
    time: 'YESTERDAY',
  },
];

// ─── Bottom Tab Bar ───────────────────────────────────────────────────────────
function BottomTabBar({
  navigation,
}: {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ImpactHub'>;
}) {
  const tabs = [
    { label: 'Home',    emoji: '🏠', route: 'StudentHome' as const },
    { label: 'Impact',  emoji: '🌿', route: 'ImpactHub'   as const, active: true },
    { label: 'Arena',   emoji: '🏟️', route: 'ArenaHub' as const },
    { label: 'Profile', emoji: '👤', route: 'StudentProfile' as const },
  ];

  return (
    <View style={tabStyles.bar}>
      {tabs.map(t => (
        <TouchableOpacity
          key={t.label}
          style={[tabStyles.tab, t.active && tabStyles.tabActive]}
          activeOpacity={0.7}
          onPress={() => t.route && navigation.navigate(t.route as any)}>
          <Text style={tabStyles.tabEmoji}>{t.emoji}</Text>
          <Text style={[tabStyles.tabLabel, t.active && tabStyles.tabLabelActive]}>
            {t.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const tabStyles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    paddingBottom: 20,
    paddingTop: 8,
    paddingHorizontal: 8,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 6,
    borderRadius: 24,
  },
  tabActive: {
    backgroundColor: '#22C55E',
  },
  tabEmoji: {
    fontSize: 20,
    marginBottom: 2,
  },
  tabLabel: {
    fontSize: 11,
    fontWeight: '500',
    color: Colors.textLight,
  },
  tabLabelActive: {
    color: Colors.white,
    fontWeight: '700',
  },
});

// ─── Screen ───────────────────────────────────────────────────────────────────
export default function ImpactHubScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor={styles.safe.backgroundColor} />

      {/* ── Header ─────────────────────────── */}
      <View style={styles.header}>
        <View style={styles.brandRow}>
          <View style={styles.brandIcon}>
            <Text style={styles.brandLeaf}>🌿</Text>
          </View>
          <Text style={styles.brand}>ChonX</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.bellBtn} activeOpacity={0.7}>
            <Text style={styles.bellIcon}>🔔</Text>
          </TouchableOpacity>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarEmoji}>🌻</Text>
          </View>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}>

        {/* ── Hero title ─────────────────────── */}
        <Text style={styles.heroTitle}>Impact</Text>
        <Text style={styles.heroSub}>
          Track your sustainable footprint and stay connected with the ChonX
          community.
        </Text>

        {/* ── Calendar card ──────────────────── */}
        <View style={styles.card}>
          {/* Calendar header */}
          <View style={styles.calHeader}>
            <View style={styles.calIconCircle}>
              <Text style={styles.calIcon}>📅</Text>
            </View>
            <Text style={styles.calTitle}>Calendar</Text>
            <View style={styles.streakBadge}>
              <Text style={styles.streakIcon}>🌿</Text>
              <Text style={styles.streakTxt}>12 DAY{'\n'}STREAK</Text>
            </View>
          </View>

          {/* Week row */}
          <View style={styles.weekRow}>
            {WEEK_DAYS.map((d, i) => {
              const date = WEEK_DATES[i];
              const isToday   = date === TODAY_DATE;
              const isActive  = date === TODAY_ACTIVITY;
              return (
                <View key={i} style={styles.weekCell}>
                  <Text style={styles.weekDayLbl}>{d}</Text>
                  <View
                    style={[
                      styles.weekCircle,
                      isToday  && styles.weekCircleToday,
                      isActive && styles.weekCircleActive,
                    ]}>
                    <Text
                      style={[
                        styles.weekDate,
                        isToday  && styles.weekDateToday,
                        isActive && styles.weekDateActive,
                      ]}>
                      {date}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>

          <Text style={styles.milestone}>
            Next Milestone: Campus Clean-up this Thursday.
          </Text>
        </View>

        {/* ── My Wallet card ─────────────────── */}
        <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate('EcoWallet')}>
        <View style={styles.walletCard}>
          {/* Wallet icon */}
          <View style={styles.walletIconCircle}>
            <Text style={styles.walletIcon}>🪙</Text>
          </View>
          <Text style={styles.walletLabel}>MY WALLET</Text>
          <View style={styles.walletXpRow}>
            <Text style={styles.walletXp}>12,450</Text>
            <Text style={styles.walletXpUnit}> XP</Text>
          </View>

          {/* Progress */}
          <View style={styles.levelRow}>
            <Text style={styles.levelLabel}>LEVEL 8</Text>
            <Text style={styles.levelPct}>75%</Text>
          </View>
          <View style={styles.progressTrack}>
            <View style={styles.progressFill} />
          </View>
        </View>
        </TouchableOpacity>

        {/* ── Activity Feed preview ──────────── */}
        <View style={styles.feedSection}>
          <View style={styles.feedHeader}>
            <View style={styles.feedIconCircle}>
              <Text style={styles.feedIcon}>📡</Text>
            </View>
            <Text style={styles.feedTitle}>Activity Feed</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('ActivityFeed')}
              activeOpacity={0.7}>
              <Text style={styles.seeAll}>SEE ALL ›</Text>
            </TouchableOpacity>
          </View>

          {FEED_ITEMS.map(item => (
            <View key={item.id} style={styles.feedItem}>
              <View style={[styles.feedThumb, { backgroundColor: item.bg }]}>
                <Text style={styles.feedThumbEmoji}>{item.emoji}</Text>
              </View>
              <View style={styles.feedText}>
                <Text style={styles.feedItemTitle}>{item.title}</Text>
                <Text style={styles.feedItemDesc} numberOfLines={2}>
                  {item.desc}
                </Text>
                <Text style={styles.feedTime}>{item.time}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={{ height: 16 }} />
      </ScrollView>

      {/* FAB */}
      <TouchableOpacity style={styles.fab} activeOpacity={0.85}>
        <Text style={styles.fabPlus}>+</Text>
      </TouchableOpacity>

      {/* Bottom Tab Bar */}
      <BottomTabBar navigation={navigation} />
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
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#F2F6F3',
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  brandIcon: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: Colors.primaryDark,
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandLeaf: { fontSize: 18 },
  brand: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.primaryDark,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  bellBtn: { padding: 4 },
  bellIcon: { fontSize: 22 },
  avatarCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#D8EFE2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarEmoji: { fontSize: 18 },

  // Scroll
  scroll: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  // Hero
  heroTitle: {
    fontSize: 40,
    fontWeight: '900',
    color: Colors.text,
    textAlign: 'center',
    marginBottom: 8,
  },
  heroSub: {
    fontSize: 14,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 24,
    paddingHorizontal: 8,
  },

  // Shared card
  card: {
    backgroundColor: Colors.white,
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },

  // Calendar card
  calHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 14,
  },
  calIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#22C55E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  calIcon: { fontSize: 18 },
  calTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: Colors.text,
    flex: 1,
  },
  streakBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D1FAE5',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 5,
    gap: 3,
  },
  streakIcon: { fontSize: 12 },
  streakTxt: {
    fontSize: 9,
    fontWeight: '800',
    color: '#047857',
    letterSpacing: 0.3,
    lineHeight: 12,
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  weekCell: {
    alignItems: 'center',
    flex: 1,
  },
  weekDayLbl: {
    fontSize: 11,
    fontWeight: '600',
    color: Colors.textLight,
    marginBottom: 4,
  },
  weekCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  weekCircleToday: {
    backgroundColor: Colors.primaryDark,
  },
  weekCircleActive: {
    backgroundColor: '#A7F3D0',
  },
  weekDate: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.textSecondary,
  },
  weekDateToday: {
    color: Colors.white,
    fontWeight: '800',
  },
  weekDateActive: {
    color: Colors.primaryDark,
    fontWeight: '700',
  },
  milestone: {
    fontSize: 13,
    color: Colors.textSecondary,
    lineHeight: 19,
  },

  // My Wallet card
  walletCard: {
    backgroundColor: Colors.white,
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#6EE7B7',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  walletIconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.primaryDark,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  walletIcon: { fontSize: 28 },
  walletLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: Colors.textLight,
    letterSpacing: 1,
    marginBottom: 4,
  },
  walletXpRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 12,
  },
  walletXp: {
    fontSize: 32,
    fontWeight: '800',
    color: Colors.text,
    lineHeight: 38,
  },
  walletXpUnit: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.textSecondary,
    marginBottom: 3,
  },
  levelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 6,
  },
  levelLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.text,
    letterSpacing: 0.5,
  },
  levelPct: {
    fontSize: 12,
    fontWeight: '700',
    color: '#22C55E',
  },
  progressTrack: {
    width: '100%',
    height: 6,
    backgroundColor: '#E5E7EB',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    width: '75%',
    height: '100%',
    backgroundColor: '#22C55E',
    borderRadius: 3,
  },

  // Feed section
  feedSection: {
    backgroundColor: Colors.white,
    borderRadius: 18,
    padding: 16,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  feedHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  feedIconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#D1FAE5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  feedIcon: { fontSize: 16 },
  feedTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.text,
    flex: 1,
  },
  seeAll: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.primary,
  },
  feedItem: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  feedThumb: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  feedThumbEmoji: { fontSize: 22 },
  feedText: { flex: 1 },
  feedItemTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 3,
    lineHeight: 19,
  },
  feedItemDesc: {
    fontSize: 13,
    color: Colors.textSecondary,
    lineHeight: 18,
    marginBottom: 5,
  },
  feedTime: {
    fontSize: 10,
    fontWeight: '600',
    color: Colors.textLight,
    letterSpacing: 0.4,
  },

  // FAB
  fab: {
    position: 'absolute',
    bottom: 90,
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
    zIndex: 10,
  },
  fabPlus: {
    fontSize: 28,
    fontWeight: '300',
    color: Colors.white,
    lineHeight: 32,
  },
});
