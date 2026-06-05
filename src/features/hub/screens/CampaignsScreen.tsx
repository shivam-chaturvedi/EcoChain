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
const CARD_W = W - 32;
const IMG_H = Math.round(CARD_W * 0.5);

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Campaigns'>;
};

// ─── Progress Bar ─────────────────────────────────────────────────────────────
function ProgressBar({ pct, color = '#22C55E' }: { pct: number; color?: string }) {
  return (
    <View style={pbar.track}>
      <View style={[pbar.fill, { width: `${pct}%`, backgroundColor: color }]} />
    </View>
  );
}
const pbar = StyleSheet.create({
  track: { height: 6, backgroundColor: '#E5E7EB', borderRadius: 3, overflow: 'hidden' },
  fill:  { height: '100%', borderRadius: 3 },
});

// ─── Screen ───────────────────────────────────────────────────────────────────
export default function CampaignsScreen({ navigation }: Props) {
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
        <Text style={styles.activeLabel}>ACTIVE IMPACT</Text>
        <Text style={styles.pageTitle}>Community Campaigns</Text>
        <Text style={styles.pageSub}>
          Join your peers in school-wide challenges to drive sustainable change.
          Track your individual contribution against our collective goals.
        </Text>

        {/* ── Campaign 1: Science Club ────────── */}
        <View style={styles.campaignCard}>
          {/* Image area */}
          <View style={[styles.imageArea, { backgroundColor: '#1A3D2E' }]}>
            {/* Background layers */}
            <View style={[StyleSheet.absoluteFillObject, { backgroundColor: '#0D5C38', opacity: 0.7 }]} />
            <Text style={styles.imageEmoji}>🌱</Text>

            {/* SCHOOL-WIDE badge */}
            <View style={styles.schoolWideBadge}>
              <Text style={styles.schoolWideTxt}>SCHOOL-WIDE</Text>
            </View>

            {/* Bottom overlay with text */}
            <View style={styles.imageOverlay}>
              <Text style={styles.campaignTitle}>Science Club Campaign</Text>
              <Text style={styles.campaignDate}>Oct 1 – Oct 15  •</Text>
              <View style={styles.imageCampRow}>
                <Text style={styles.campaignFocus}>Renewable Energy Focus</Text>
                <TouchableOpacity style={styles.joinedBtn} activeOpacity={0.8}>
                  <Text style={styles.joinedBtnTxt}>JOINED  ✓</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Card body */}
          <View style={styles.cardBody}>
            <View style={styles.progressMeta}>
              <Text style={styles.progressMetaLabel}>SCHOOL PROGRESS</Text>
              <Text style={styles.progressMetaPct}>74% COMPLETE</Text>
            </View>
            <ProgressBar pct={74} />

            {/* Stats row */}
            <View style={styles.statsRow}>
              <View style={styles.statCell}>
                <Text style={styles.statLabel}>MEMBERS</Text>
                <Text style={[styles.statValue, { color: Colors.text }]}>1,204</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statCell}>
                <Text style={styles.statLabel}>XP POOL</Text>
                <Text style={[styles.statValue, { color: '#3B82F6' }]}>25.5k</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statCell}>
                <Text style={styles.statLabel}>IMPACT</Text>
                <Text style={[styles.statValue, { color: '#0EA5E9' }]}>3.2t</Text>
                <Text style={[styles.statValueSub, { color: '#0EA5E9' }]}>CO₂</Text>
              </View>
            </View>
          </View>
        </View>

        {/* ── Campaign 2: Blue Horizon ─────────── */}
        <View style={styles.campaignCard}>
          {/* Image area */}
          <View style={[styles.imageArea, { backgroundColor: '#0A3D55', height: IMG_H * 0.85 }]}>
            <View style={[StyleSheet.absoluteFillObject, { backgroundColor: '#0E6B8A', opacity: 0.6 }]} />
            <Text style={styles.imageEmoji}>🌊</Text>

            {/* Bottom text overlay */}
            <View style={styles.imageOverlay}>
              <Text style={styles.campaignTitle}>Blue Horizon</Text>
            </View>
          </View>

          {/* Card body */}
          <View style={styles.cardBody}>
            <Text style={styles.teacherLabel}>TEACHER-LED  •  GRADE 11</Text>
            <Text style={styles.horizonDesc}>
              Protecting local marine life through reduction of single-use plastics
              in the...
            </Text>
            <ProgressBar pct={32} />
            <Text style={styles.goalReached}>32% GOAL REACHED</Text>
          </View>
        </View>

        {/* ── Upcoming Challenges ──────────────── */}
        <Text style={styles.sectionTitle}>Upcoming Challenges</Text>

        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.navigate('CampaignDetail')}>
        <View style={styles.upcomingCard}>
          {/* Image */}
          <View style={[styles.upcomingImage, { backgroundColor: '#2D1A0A' }]}>
            <View style={[StyleSheet.absoluteFillObject, { backgroundColor: '#3D2A10', opacity: 0.6 }]} />
            <Text style={styles.upcomingEmoji}>🌱</Text>
          </View>

          {/* Text area */}
          <View style={styles.upcomingBody}>
            <Text style={styles.startsLabel}>STARTS OCT 20</Text>
            <Text style={styles.upcomingTitle}>Reforest City</Text>
            <Text style={styles.upcomingDesc}>
              Planting 500 trees in the downtown district.
            </Text>
          </View>
        </View>
        </TouchableOpacity>

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
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  avatarCircle: {
    width: 36, height: 36, borderRadius: 18,
    backgroundColor: '#D8EFE2', alignItems: 'center', justifyContent: 'center',
  },
  avatarEmoji: { fontSize: 18 },
  brand: { fontSize: 17, fontWeight: '700', color: Colors.primaryDark },
  bellBtn: { padding: 4 },
  bellIcon: { fontSize: 22 },

  // Scroll
  scroll: { paddingHorizontal: 16, paddingTop: 8 },

  // Page title
  activeLabel: {
    fontSize: 11, fontWeight: '700', color: Colors.primary,
    letterSpacing: 1, marginBottom: 6,
  },
  pageTitle: {
    fontSize: 26, fontWeight: '800', color: Colors.text, marginBottom: 10,
  },
  pageSub: {
    fontSize: 14, color: Colors.textSecondary, lineHeight: 22, marginBottom: 24,
  },

  // Campaign cards
  campaignCard: {
    backgroundColor: Colors.white,
    borderRadius: 18,
    overflow: 'hidden',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 8,
    elevation: 3,
  },

  // Image area
  imageArea: {
    width: '100%',
    height: IMG_H,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  imageEmoji: {
    fontSize: 60,
    zIndex: 1,
    opacity: 0.5,
  },

  // SCHOOL-WIDE badge
  schoolWideBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: 'rgba(255,255,255,0.92)',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 5,
    zIndex: 3,
  },
  schoolWideTxt: {
    fontSize: 11,
    fontWeight: '800',
    color: Colors.text,
    letterSpacing: 0.5,
  },

  // Image overlay (bottom gradient area)
  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 14,
    paddingBottom: 12,
    paddingTop: 20,
    backgroundColor: 'rgba(10,30,20,0.65)',
    zIndex: 2,
  },
  campaignTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: Colors.white,
    marginBottom: 2,
  },
  campaignDate: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.85)',
    marginBottom: 6,
  },
  imageCampRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  campaignFocus: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.85)',
    flex: 1,
    marginRight: 8,
  },
  joinedBtn: {
    backgroundColor: '#22C55E',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  joinedBtnTxt: {
    fontSize: 12,
    fontWeight: '800',
    color: Colors.white,
    letterSpacing: 0.3,
  },

  // Card body
  cardBody: {
    padding: 14,
  },
  progressMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  progressMetaLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: Colors.textLight,
    letterSpacing: 0.5,
  },
  progressMetaPct: {
    fontSize: 10,
    fontWeight: '700',
    color: Colors.textSecondary,
    letterSpacing: 0.5,
  },

  // Stats
  statsRow: {
    flexDirection: 'row',
    marginTop: 12,
    backgroundColor: '#F9FAFB',
    borderRadius: 10,
    padding: 12,
  },
  statCell: {
    flex: 1,
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 9,
    fontWeight: '700',
    color: Colors.textLight,
    letterSpacing: 0.5,
    marginBottom: 3,
  },
  statValue: {
    fontSize: 18,
    fontWeight: '800',
    lineHeight: 22,
  },
  statValueSub: {
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 14,
  },
  statDivider: {
    width: 1,
    backgroundColor: Colors.border,
    marginHorizontal: 4,
  },

  // Blue Horizon specific
  teacherLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: Colors.primary,
    letterSpacing: 0.5,
    marginBottom: 6,
  },
  horizonDesc: {
    fontSize: 13,
    color: Colors.textSecondary,
    lineHeight: 20,
    marginBottom: 10,
  },
  goalReached: {
    fontSize: 11,
    fontWeight: '600',
    color: Colors.textLight,
    marginTop: 6,
    letterSpacing: 0.3,
  },

  // Upcoming section
  sectionTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: Colors.text,
    marginBottom: 14,
  },
  upcomingCard: {
    backgroundColor: Colors.white,
    borderRadius: 18,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  upcomingImage: {
    width: '100%',
    height: Math.round(IMG_H * 0.65),
    alignItems: 'center',
    justifyContent: 'center',
  },
  upcomingEmoji: {
    fontSize: 48,
    zIndex: 1,
    opacity: 0.6,
  },
  upcomingBody: {
    padding: 14,
  },
  startsLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: '#0EA5E9',
    letterSpacing: 0.5,
    marginBottom: 5,
  },
  upcomingTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: Colors.text,
    marginBottom: 5,
  },
  upcomingDesc: {
    fontSize: 13,
    color: Colors.textSecondary,
    lineHeight: 20,
  },
});
