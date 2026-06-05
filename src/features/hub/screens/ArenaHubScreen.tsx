import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import { Colors } from '../../../constants';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ArenaHub'>;
};

const QUEST_ICONS = [
  { bg: '#22C55E', emoji: '⚡', z: 3 },
  { bg: '#0D9488', emoji: '💧', z: 2 },
  { bg: '#7C3AED', emoji: '♻️', z: 1 },
];

export default function ArenaHubScreen({ navigation }: Props) {
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
        <TouchableOpacity style={styles.bellBtn} activeOpacity={0.7}>
          <Text style={styles.bellIcon}>🔔</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}>

        {/* ── Page title ─────────────────────── */}
        <Text style={styles.pageTitle}>Arena</Text>
        <Text style={styles.pageSub}>
          Compete, collaborate, and climb the ranks to make a real-world
          difference.
        </Text>

        {/* ── Challenges card ──────────────── */}
        <View style={styles.card}>
          <View style={styles.cardTopRow}>
            <View style={[styles.sectionIconCircle, { backgroundColor: '#D1FAE5' }]}>
              <Text style={styles.sectionIcon}>🏆</Text>
            </View>
            <View style={styles.hotBadge}>
              <Text style={styles.hotBadgeTxt}>Hot Now</Text>
            </View>
          </View>

          <Text style={styles.cardTitle}>Challenges</Text>
          <Text style={styles.cardDesc}>
            Join active quests and earn exclusive badges.
          </Text>

          <View style={styles.cardFooterRow}>
            {/* Overlapping quest circles */}
            <View style={styles.questIconsRow}>
              {QUEST_ICONS.map((q, i) => (
                <View
                  key={i}
                  style={[
                    styles.questCircle,
                    { backgroundColor: q.bg, zIndex: q.z, marginLeft: i === 0 ? 0 : -8 },
                  ]}>
                  <Text style={styles.questEmoji}>{q.emoji}</Text>
                </View>
              ))}
              <Text style={styles.activeQuestsTxt}>  3 Active Quests</Text>
            </View>
            <TouchableOpacity
              style={styles.arrowCircle}
              activeOpacity={0.7}
              onPress={() => navigation.navigate('ArenaChallenges')}>
              <Text style={styles.arrowTxt}>→</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ── School Campaigns card (gradient) ─ */}
        <TouchableOpacity
          style={styles.campaignCard}
          activeOpacity={0.9}
          onPress={() => navigation.navigate('Campaigns')}>
          {/* Gradient simulation using two color halves */}
          <View style={[StyleSheet.absoluteFillObject, { flexDirection: 'row', borderRadius: 18 }]}>
            <View style={{ flex: 1, backgroundColor: '#22C55E', borderTopLeftRadius: 18, borderBottomLeftRadius: 18 }} />
            <View style={{ flex: 1, backgroundColor: '#6366F1', borderTopRightRadius: 18, borderBottomRightRadius: 18 }} />
          </View>
          {/* Overlay tint for text readability */}
          <View style={[StyleSheet.absoluteFillObject, { backgroundColor: 'rgba(0,0,0,0.08)', borderRadius: 18 }]} />

          <View style={styles.campaignCardContent}>
            <View style={styles.campTopRow}>
              <View style={styles.campIconCircle}>
                <Text style={styles.campIcon}>👥</Text>
              </View>
              <Text style={styles.campArrow}>›</Text>
            </View>
            <Text style={styles.campTitle}>School Campaigns</Text>
            <Text style={styles.campDesc}>
              Collaborate with your school on major initiatives.
            </Text>

            <View style={styles.campProgressArea}>
              <View style={styles.campProgressMeta}>
                <Text style={styles.campProgressLabel}>Planting 500 Trees</Text>
                <Text style={styles.campProgressPct}>82%</Text>
              </View>
              <View style={styles.campProgressTrack}>
                <View style={[styles.campProgressFill, { width: '82%' }]} />
              </View>
            </View>
          </View>
        </TouchableOpacity>

        {/* ── Leaderboard card ─────────────── */}
        <View style={styles.card}>
          <View style={styles.cardTopRow}>
            <View style={[styles.sectionIconCircle, { backgroundColor: '#EEF2FF' }]}>
              <Text style={styles.sectionIcon}>📊</Text>
            </View>
          </View>

          <Text style={styles.cardTitle}>Leaderboard</Text>
          <Text style={styles.cardDesc}>
            See how you stack up against your peers.
          </Text>

          <View style={styles.cardFooterRow}>
            <View style={styles.leaderFooterLeft}>
              <View style={styles.rankBadge}>
                <Text style={styles.rankTxt}>#4</Text>
              </View>
              <Text style={styles.gradeTxt}>10th Grade</Text>
            </View>
            <TouchableOpacity style={styles.arrowCircle} activeOpacity={0.7}>
              <Text style={styles.arrowTxt}>↗</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ height: 32 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

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
  scroll: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },

  // Page title
  pageTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: Colors.text,
    marginBottom: 6,
  },
  pageSub: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 21,
    marginBottom: 24,
  },

  // Base card
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

  // Card top row
  cardTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  sectionIconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionIcon: { fontSize: 22 },

  // Hot Now badge
  hotBadge: {
    backgroundColor: '#D1FAE5',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  hotBadgeTxt: {
    fontSize: 12,
    fontWeight: '700',
    color: '#065F46',
  },

  // Card text
  cardTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: Colors.text,
    marginBottom: 6,
  },
  cardDesc: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 21,
    marginBottom: 16,
  },

  // Card footer row
  cardFooterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  questIconsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  questCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Colors.white,
  },
  questEmoji: { fontSize: 13 },
  activeQuestsTxt: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.text,
    marginLeft: 6,
  },
  arrowCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowTxt: {
    fontSize: 16,
    color: Colors.textSecondary,
    fontWeight: '600',
  },

  // Leaderboard footer
  leaderFooterLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flex: 1,
  },
  rankBadge: {
    backgroundColor: Colors.primaryDark,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  rankTxt: {
    fontSize: 13,
    fontWeight: '800',
    color: Colors.white,
  },
  gradeTxt: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.text,
  },

  // ── School Campaigns gradient card ────────────────────────────
  campaignCard: {
    borderRadius: 18,
    marginBottom: 14,
    overflow: 'hidden',
    minHeight: 180,
    shadowColor: Colors.primaryDark,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  campaignCardContent: {
    padding: 16,
  },
  campTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  campIconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255,255,255,0.25)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  campIcon: { fontSize: 22 },
  campArrow: {
    fontSize: 22,
    color: Colors.white,
    fontWeight: '600',
  },
  campTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: Colors.white,
    marginBottom: 6,
  },
  campDesc: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)',
    lineHeight: 21,
    marginBottom: 16,
  },
  campProgressArea: {
    marginTop: 4,
  },
  campProgressMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  campProgressLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: 'rgba(255,255,255,0.9)',
  },
  campProgressPct: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.white,
  },
  campProgressTrack: {
    height: 6,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 3,
    overflow: 'hidden',
  },
  campProgressFill: {
    height: '100%',
    backgroundColor: Colors.white,
    borderRadius: 3,
  },
});
