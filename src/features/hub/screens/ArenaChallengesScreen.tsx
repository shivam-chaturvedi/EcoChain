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
const CARD_W = W - 32;
const IMG_H  = Math.round(CARD_W * 0.46);

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ArenaChallenges'>;
};

type Tab = 'Ongoing' | 'Recommended' | 'Completed';

// ─── Challenge card data types ────────────────────────────────────────────────
type ProgressChallenge = {
  kind: 'progress';
  id: string;
  xpBadge: string;
  daysBadge: string;
  imgBg: string;
  imgLayer: string;
  imgEmoji: string;
  title: string;
  icon: string;
  desc: string;
  progressLabel: string;
  progressPct: number;
};

type JoinChallenge = {
  kind: 'join';
  id: string;
  xpBadge: string;
  imgBg: string;
  imgLayer: string;
  imgEmoji: string;
  title: string;
  icon: string;
  desc: string;
};

type NewChallenge = {
  kind: 'new';
  id: string;
  xpBadge: string;
  xpPremium: boolean;
  imgBg: string;
  imgLayer: string;
  imgEmoji: string;
  title: string;
  icon: string;
  desc: string;
  missionLabel: string;
  missionPct: string;
};

type Challenge = ProgressChallenge | JoinChallenge | NewChallenge;

const CHALLENGES: Challenge[] = [
  {
    kind: 'progress',
    id: 'c1',
    xpBadge: '+150 XP',
    daysBadge: '7 DAYS',
    imgBg: '#2A7A50',
    imgLayer: '#1A5C38',
    imgEmoji: '🍱',
    title: 'Zero-Waste Lunchbox',
    icon: '🍃',
    desc: 'Reduce single-use plastic by preparing your own waste-free lunch every day this week.',
    progressLabel: 'Day 2 of 7',
    progressPct: 28,
  },
  {
    kind: 'join',
    id: 'c2',
    xpBadge: '+300 XP',
    imgBg: '#1C4B2C',
    imgLayer: '#2E6B45',
    imgEmoji: '🚲',
    title: 'The Green Commuter',
    icon: '🚴',
    desc: 'Swap your car for a bike or public transit for 5 consecutive work days.',
  },
  {
    kind: 'new',
    id: 'c3',
    xpBadge: '+500 XP',
    xpPremium: true,
    imgBg: '#0C3A5E',
    imgLayer: '#1B5E8C',
    imgEmoji: '☀️',
    title: 'Solar Pioneer',
    icon: '🌟',
    desc: 'Monitor and optimize your household energy consumption for 30 days.',
    missionLabel: 'New Mission',
    missionPct: '0/30',
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────
function ImagePlaceholder({
  bg,
  layer,
  emoji,
  xpBadge,
  daysBadge,
  premium,
}: {
  bg: string;
  layer: string;
  emoji: string;
  xpBadge: string;
  daysBadge?: string;
  premium?: boolean;
}) {
  return (
    <View style={[styles.cardImage, { backgroundColor: bg }]}>
      {/* decorative layers */}
      <View style={[styles.imgLayerTop, { backgroundColor: layer }]} />
      <View style={styles.imgLayerBot} />
      <Text style={styles.imgEmoji}>{emoji}</Text>

      {/* XP badge top-right */}
      <View style={[styles.xpBadge, premium && styles.xpBadgePremium]}>
        <Text style={styles.xpBadgeTxt}>
          {premium ? `PREMIUM ${xpBadge}` : xpBadge}
        </Text>
      </View>

      {/* Days badge bottom-left (optional) */}
      {daysBadge && (
        <View style={styles.daysBadge}>
          <Text style={styles.daysBadgeTxt}>{daysBadge}</Text>
        </View>
      )}
    </View>
  );
}

// ─── Screen ───────────────────────────────────────────────────────────────────
export default function ArenaChallengesScreen({ navigation }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>('Ongoing');

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor={styles.safeArea.backgroundColor} />

      {/* ── Header ────────────────────────── */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarEmoji}>🌱</Text>
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

        {/* ── Title ─────────────────────────── */}
        <Text style={styles.screenTitle}>Arena Challenges</Text>
        <Text style={styles.screenSub}>
          Join global missions and earn XP to level up your eco-impact.
        </Text>

        {/* ── Tabs ──────────────────────────── */}
        <View style={styles.tabBar}>
          {(['Ongoing', 'Recommended', 'Completed'] as Tab[]).map(tab => (
            <TouchableOpacity
              key={tab}
              style={[styles.tab, activeTab === tab && styles.tabActive]}
              onPress={() => setActiveTab(tab)}
              activeOpacity={0.8}>
              <Text style={[styles.tabTxt, activeTab === tab && styles.tabTxtActive]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* ── Challenge Cards ─────────────────── */}
        <View style={styles.cardList}>
          {CHALLENGES.map(ch => (
            <View key={ch.id} style={styles.challengeCard}>
              {/* Image */}
              <ImagePlaceholder
                bg={ch.imgBg}
                layer={ch.imgLayer}
                emoji={ch.imgEmoji}
                xpBadge={ch.xpBadge}
                daysBadge={ch.kind === 'progress' ? ch.daysBadge : undefined}
                premium={ch.kind === 'new' && ch.xpPremium}
              />

              {/* Content */}
              <View style={styles.cardContent}>
                {/* Title row */}
                <View style={styles.titleRow}>
                  <Text style={styles.challengeTitle}>{ch.title}</Text>
                  <Text style={styles.titleIcon}>{ch.icon}</Text>
                </View>

                <Text style={styles.challengeDesc}>{ch.desc}</Text>

                {/* Progress card */}
                {ch.kind === 'progress' && (
                  <View>
                    <View style={styles.progressMeta}>
                      <Text style={styles.progressLabel}>{ch.progressLabel}</Text>
                      <Text style={styles.progressPct}>{ch.progressPct}%</Text>
                    </View>
                    <View style={styles.progressTrack}>
                      <View
                        style={[
                          styles.progressFill,
                          { width: `${ch.progressPct}%` },
                        ]}
                      />
                    </View>
                  </View>
                )}

                {/* Join button */}
                {ch.kind === 'join' && (
                  <TouchableOpacity
                    style={styles.joinBtn}
                    activeOpacity={0.85}
                    onPress={() => navigation.navigate('ChallengeDetail')}>
                    <Text style={styles.joinBtnTxt}>Join Challenge</Text>
                  </TouchableOpacity>
                )}

                {/* New mission row */}
                {ch.kind === 'new' && (
                  <View style={styles.newMissionRow}>
                    <Text style={styles.newMissionLabel}>{ch.missionLabel}</Text>
                    <Text style={styles.newMissionPct}>{ch.missionPct}</Text>
                  </View>
                )}
              </View>
            </View>
          ))}
        </View>

        <View style={{ height: 90 }} />
      </ScrollView>

      {/* ── FAB ─────────────────────────────── */}
      <TouchableOpacity style={styles.fab} activeOpacity={0.85}>
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// ─── Styles ──────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F4F7F4',
  },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#F4F7F4',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  avatarCircle: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: '#1A3D2E',
    alignItems: 'center',
    justifyContent: 'center',
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
  scroll: { paddingHorizontal: 16, paddingTop: 8 },

  // Title
  screenTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: Colors.text,
    marginBottom: 6,
  },
  screenSub: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 21,
    marginBottom: 18,
  },

  // Tabs
  tabBar: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    marginBottom: 20,
  },
  tab: {
    paddingBottom: 10,
    marginRight: 24,
  },
  tabActive: {
    borderBottomWidth: 2.5,
    borderBottomColor: Colors.primaryDark,
  },
  tabTxt: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.textLight,
  },
  tabTxtActive: {
    color: Colors.primaryDark,
    fontWeight: '700',
  },

  // Card list
  cardList: { gap: 16 },

  // Challenge card
  challengeCard: {
    backgroundColor: Colors.white,
    borderRadius: 18,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },

  // Image area
  cardImage: {
    height: IMG_H,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  imgLayerTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '50%',
    opacity: 0.6,
  },
  imgLayerBot: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '35%',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  imgEmoji: {
    fontSize: 64,
    zIndex: 1,
  },

  // XP badge
  xpBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#0D9488',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  xpBadgePremium: {
    backgroundColor: '#0F766E',
  },
  xpBadgeTxt: {
    fontSize: 11,
    fontWeight: '700',
    color: Colors.white,
    letterSpacing: 0.2,
  },

  // Days badge
  daysBadge: {
    position: 'absolute',
    bottom: 12,
    left: 12,
    backgroundColor: 'rgba(30,30,30,0.8)',
    borderRadius: 8,
    paddingHorizontal: 9,
    paddingVertical: 4,
  },
  daysBadgeTxt: {
    fontSize: 11,
    fontWeight: '700',
    color: Colors.white,
    letterSpacing: 0.4,
  },

  // Card content
  cardContent: {
    padding: 16,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  challengeTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: Colors.text,
    flex: 1,
    paddingRight: 8,
  },
  titleIcon: {
    fontSize: 20,
  },
  challengeDesc: {
    fontSize: 13,
    color: Colors.textSecondary,
    lineHeight: 20,
    marginBottom: 12,
  },

  // Progress
  progressMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  progressLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.textSecondary,
  },
  progressPct: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.textSecondary,
  },
  progressTrack: {
    height: 5,
    backgroundColor: '#E5E7EB',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#22C55E',
    borderRadius: 3,
  },

  // Join button
  joinBtn: {
    height: 48,
    backgroundColor: Colors.primaryDark,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  joinBtnTxt: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.white,
  },

  // New mission row
  newMissionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  newMissionLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.primary,
  },
  newMissionPct: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.textLight,
  },

  // FAB
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
  fabIcon: {
    fontSize: 28,
    fontWeight: '300',
    color: Colors.white,
    lineHeight: 32,
  },
});
