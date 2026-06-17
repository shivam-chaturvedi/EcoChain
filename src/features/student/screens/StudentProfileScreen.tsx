import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
  ScrollView, Dimensions, StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import { Colors } from '../../../constants';

const { width: W } = Dimensions.get('window');

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'StudentProfile'>;
};

const STATS = [
  { id: 'grade',  icon: '🎓', label: 'GRADE',  value: '10th',      color: Colors.primaryDark, borderColor: '#34D399' },
  { id: 'school', icon: '🏢', label: 'SCHOOL',  value: 'Greenview', color: '#2563EB',           borderColor: '#60A5FA' },
  { id: 'badges', icon: '🏆', label: 'BADGES',  value: '18',        color: Colors.primaryDark, borderColor: '#34D399' },
  { id: 'points', icon: '⚡', label: 'POINTS',  value: '4,820',     color: '#059669',           borderColor: '#34D399' },
];

const ACHIEVEMENTS = [
  { id: '1', label: 'Eco Pioneer',    bg: '#5ECFA0',          icon: '🍃', locked: false },
  { id: '2', label: 'Waste\nWarrior', bg: Colors.primaryDark, icon: '♻️', locked: false },
  { id: '3', label: 'Aqua Saver',    bg: '#818CF8',          icon: '💧', locked: false },
  { id: '4', label: 'Power Pro',     bg: '#6EE7B7',          icon: '⚡', locked: false },
  { id: '5', label: 'Tree Planter',  bg: '#D1D5DB',          icon: '🌳', locked: true  },
  { id: '6', label: 'Soil Master',   bg: '#D1D5DB',          icon: '🌱', locked: true  },
];

const BADGE_ITEM_W = Math.floor((W - 32) / 4);

// ─── Community rank gauge (24 tick-mark ring) ─────────────────────────────────
const CG_D    = 60;
const CG_TICKS = 24;
const CG_OR   = 28;
const CG_IR   = 18;
const CG_PCT  = 0.75;

function CommunityGauge() {
  const cx = CG_D / 2;
  const cy = CG_D / 2;
  const ticks = Array.from({ length: CG_TICKS }, (_, i) => {
    const angle = (i / CG_TICKS) * 360 - 90;
    const rad   = (angle * Math.PI) / 180;
    const midR  = (CG_OR + CG_IR) / 2;
    const x     = cx + midR * Math.cos(rad);
    const y     = cy + midR * Math.sin(rad);
    const tH    = CG_OR - CG_IR;
    return { x, y, angle, tH, filled: i / CG_TICKS < CG_PCT };
  });
  return (
    <View style={{ width: CG_D, height: CG_D }}>
      {ticks.map((t, i) => (
        <View key={i} style={{
          position: 'absolute',
          left: t.x - 1.5, top: t.y - t.tH / 2,
          width: 3, height: t.tH, borderRadius: 1.5,
          backgroundColor: t.filled ? Colors.primaryDark : '#E5E7EB',
          transform: [{ rotate: `${t.angle + 90}deg` }],
        }} />
      ))}
      {/* Center label */}
      <View style={{
        position: 'absolute',
        top: cy - CG_IR + 1, left: cx - CG_IR + 1,
        width: (CG_IR - 1) * 2, height: (CG_IR - 1) * 2,
        borderRadius: CG_IR - 1,
        alignItems: 'center', justifyContent: 'center',
      }}>
        <Text style={{ fontSize: 11, fontWeight: '800', color: Colors.primaryDark }}>75%</Text>
      </View>
    </View>
  );
}

// ─── Screen ──────────────────────────────────────────────────────────────────
export default function StudentProfileScreen({ navigation }: Props) {
  const [tab, setTab] = useState<'impact' | 'friends'>('impact');

  return (
    <SafeAreaView style={s.safe} edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* ── Header ─────────────────────────── */}
      <View style={s.header}>
        <View style={s.headerLeft}>
          <View style={s.headerAvatar}>
            <Text style={s.headerAvatarEmoji}>🧑</Text>
          </View>
          <Text style={s.brand}>ChonX</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')} activeOpacity={0.7}>
          <Text style={{ fontSize: 24 }}>⚙️</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={s.scroll} showsVerticalScrollIndicator={false}>

        {/* ── Profile hero ──────────────────── */}
        <View style={s.heroSection}>
          <View style={s.avatarWrap}>
            <View style={s.avatarRing}>
              <View style={s.avatarCircle}>
                <Text style={{ fontSize: 58 }}>👨</Text>
              </View>
            </View>
            <View style={s.editBadge}>
              <Text style={{ fontSize: 10, color: '#fff' }}>✏</Text>
            </View>
          </View>
          <Text style={s.profileName}>Alex Rivera</Text>
          <Text style={s.profileSub}>Aspiring Climate Hero • Level 24</Text>
        </View>

        {/* ── Stats 2×2 ─────────────────────── */}
        <View style={s.statsGrid}>
          {STATS.map((st) => (
            <View key={st.id} style={[s.statCard, { borderColor: st.borderColor }]}>
              <Text style={s.statIcon}>{st.icon}</Text>
              <Text style={s.statLabel}>{st.label}</Text>
              <Text style={[s.statValue, { color: st.color }]} numberOfLines={1}>
                {st.value}
              </Text>
            </View>
          ))}
        </View>

        {/* ── Achievements ──────────────────── */}
        <View style={s.sectionRow}>
          <Text style={s.sectionTitle}>Achievements</Text>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={s.viewAll}>VIEW ALL</Text>
          </TouchableOpacity>
        </View>
        <View style={s.badgeGrid}>
          {ACHIEVEMENTS.map((a) => (
            <View key={a.id} style={s.badgeItem}>
              <View style={[s.badgeCircle, { backgroundColor: a.bg }, a.locked && s.badgeLocked]}>
                <Text style={s.badgeEmoji}>{a.icon}</Text>
              </View>
              <Text style={[s.badgeName, a.locked && { color: Colors.textLight }]} numberOfLines={2}>
                {a.label}
              </Text>
            </View>
          ))}
        </View>

        {/* ── Tabs ──────────────────────────── */}
        <View style={s.tabRow}>
          {(['impact', 'friends'] as const).map((t) => (
            <TouchableOpacity key={t} style={s.tabBtn} onPress={() => setTab(t)} activeOpacity={0.7}>
              <Text style={[s.tabTxt, tab === t && s.tabTxtActive]}>
                {t === 'impact' ? 'IMPACT STATS' : 'FRIENDS'}
              </Text>
              {tab === t && <View style={s.tabUnderline} />}
            </TouchableOpacity>
          ))}
        </View>

        {/* ── Impact Stats content ─────────── */}
        {tab === 'impact' && (
          <>
            <View style={s.impactCard}>
              <View style={s.impactCardHeader}>
                <Text style={{ fontSize: 20 }}>📊</Text>
                <Text style={s.impactCardTitle}>Weekly Impact</Text>
              </View>

              <View style={s.metricRow}>
                <Text style={s.metricLabel}>CO2 SAVED</Text>
                <Text style={s.metricPct}>82% of Goal</Text>
              </View>
              <View style={s.progressTrack}>
                <View style={[s.progressFill, { width: '82%', backgroundColor: Colors.primaryDark }]} />
              </View>

              <View style={{ height: 14 }} />

              <View style={s.metricRow}>
                <Text style={s.metricLabel}>WATER CONSERVED</Text>
                <Text style={s.metricPct}>45% of Goal</Text>
              </View>
              <View style={s.progressTrack}>
                <View style={[s.progressFill, { width: '45%', backgroundColor: '#6366F1' }]} />
              </View>
            </View>

            <View style={s.rankCard}>
              <CommunityGauge />
              <View style={{ flex: 1 }}>
                <Text style={s.rankTitle}>Community Rank</Text>
                <Text style={s.rankDesc}>
                  You are in the top 25% of students in Greenview School!
                </Text>
              </View>
            </View>
          </>
        )}

        {tab === 'friends' && (
          <View style={s.emptyTab}>
            <Text style={s.emptyTabTxt}>Friends coming soon...</Text>
          </View>
        )}

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

// ─── Styles ──────────────────────────────────────────────────────────────────
const CARD_W = (W - 32 - 10) / 2;

const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F2F5F3' },

  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 16, paddingVertical: 10, backgroundColor: '#fff',
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  headerAvatar: {
    width: 34, height: 34, borderRadius: 17,
    backgroundColor: '#1A3D2E', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
  },
  headerAvatarEmoji: { fontSize: 18 },
  brand: { fontSize: 18, fontWeight: '800', color: Colors.primaryDark },

  scroll: { paddingHorizontal: 16, paddingTop: 24 },

  heroSection: { alignItems: 'center', marginBottom: 24 },
  avatarWrap: { position: 'relative', width: 118, height: 118, marginBottom: 14 },
  avatarRing: {
    width: 118, height: 118, borderRadius: 59,
    borderWidth: 3, borderColor: '#3B82F6',
    alignItems: 'center', justifyContent: 'center',
  },
  avatarCircle: {
    width: 108, height: 108, borderRadius: 54,
    backgroundColor: '#1A3D2E', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
  },
  editBadge: {
    position: 'absolute', bottom: 2, right: 2,
    width: 26, height: 26, borderRadius: 13,
    backgroundColor: '#22C55E', alignItems: 'center', justifyContent: 'center',
    borderWidth: 2, borderColor: '#fff',
  },
  profileName: { fontSize: 26, fontWeight: '800', color: Colors.text, marginBottom: 5 },
  profileSub: { fontSize: 13, color: Colors.textSecondary },

  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 24 },
  statCard: {
    width: CARD_W, backgroundColor: '#fff', borderRadius: 16, borderWidth: 1.5,
    padding: 16, alignItems: 'flex-start',
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05, shadowRadius: 6, elevation: 1,
  },
  statIcon: { fontSize: 18, marginBottom: 6 },
  statLabel: {
    fontSize: 10, fontWeight: '700', color: Colors.textSecondary,
    letterSpacing: 0.8, marginBottom: 4,
  },
  statValue: { fontSize: 22, fontWeight: '800', lineHeight: 26 },

  sectionRow: {
    flexDirection: 'row', justifyContent: 'space-between',
    alignItems: 'center', marginBottom: 14,
  },
  sectionTitle: { fontSize: 18, fontWeight: '800', color: Colors.text },
  viewAll: { fontSize: 12, fontWeight: '700', color: Colors.primary },

  badgeGrid: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 20 },
  badgeItem: { width: BADGE_ITEM_W, alignItems: 'center', paddingBottom: 14 },
  badgeCircle: {
    width: 60, height: 60, borderRadius: 30,
    alignItems: 'center', justifyContent: 'center', marginBottom: 6,
  },
  badgeLocked: { opacity: 0.5 },
  badgeEmoji: { fontSize: 26 },
  badgeName: {
    fontSize: 11, fontWeight: '600', color: Colors.textSecondary,
    textAlign: 'center', lineHeight: 15,
  },

  tabRow: { flexDirection: 'row', borderBottomWidth: 1, borderColor: '#E5E7EB', marginBottom: 18 },
  tabBtn: { flex: 1, alignItems: 'center', paddingBottom: 10, position: 'relative' },
  tabTxt: { fontSize: 12, fontWeight: '700', color: Colors.textSecondary, letterSpacing: 0.6 },
  tabTxtActive: { color: Colors.primaryDark },
  tabUnderline: {
    position: 'absolute', bottom: -1, left: 0, right: 0,
    height: 2, backgroundColor: Colors.primaryDark, borderRadius: 1,
  },

  impactCard: {
    backgroundColor: '#fff', borderRadius: 18, borderWidth: 1.5,
    borderColor: '#34D399', padding: 18, marginBottom: 14,
  },
  impactCardHeader: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 16 },
  impactCardTitle: { fontSize: 16, fontWeight: '800', color: Colors.text },
  metricRow: {
    flexDirection: 'row', justifyContent: 'space-between',
    alignItems: 'center', marginBottom: 8,
  },
  metricLabel: { fontSize: 11, fontWeight: '700', color: Colors.textSecondary, letterSpacing: 0.5 },
  metricPct: { fontSize: 11, fontWeight: '600', color: Colors.textSecondary },
  progressTrack: { height: 8, backgroundColor: '#E5E7EB', borderRadius: 4, overflow: 'hidden' },
  progressFill: { height: '100%', borderRadius: 4 },

  rankCard: {
    flexDirection: 'row', alignItems: 'center', gap: 16,
    backgroundColor: '#fff', borderRadius: 18, padding: 18,
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06, shadowRadius: 8, elevation: 2,
    marginBottom: 16,
  },
  rankTitle: { fontSize: 15, fontWeight: '800', color: Colors.text, marginBottom: 5 },
  rankDesc: { fontSize: 12, color: Colors.textSecondary, lineHeight: 18 },

  emptyTab: { paddingVertical: 48, alignItems: 'center' },
  emptyTabTxt: { fontSize: 14, color: Colors.textSecondary },
});
