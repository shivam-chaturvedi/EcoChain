import React from 'react';
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
  navigation: NativeStackNavigationProp<RootStackParamList, 'EcoWallet'>;
};

// ─── Level ring (tick-mark arc) ───────────────────────────────────────────────
const GAUGE_D    = 122;
const TICK_COUNT = 48;
const OUTER_R    = 56;
const INNER_R    = 42;
const LEVEL_PCT  = 0.75;

function LevelRing() {
  const ticks = Array.from({ length: TICK_COUNT }, (_, i) => {
    const angle = (i / TICK_COUNT) * 360 - 90;
    const rad   = (angle * Math.PI) / 180;
    const midR  = (OUTER_R + INNER_R) / 2;
    const cx    = GAUGE_D / 2;
    const cy    = GAUGE_D / 2;
    const x     = cx + midR * Math.cos(rad);
    const y     = cy + midR * Math.sin(rad);
    const tH    = OUTER_R - INNER_R;
    const tW    = 4;
    return { x, y, angle, tH, tW, filled: i / TICK_COUNT < LEVEL_PCT };
  });

  return (
    <View style={{ width: GAUGE_D, height: GAUGE_D, alignSelf: 'center' }}>
      {ticks.map((t, i) => (
        <View
          key={i}
          style={{
            position: 'absolute',
            left: t.x - t.tW / 2,
            top:  t.y - t.tH / 2,
            width:  t.tW,
            height: t.tH,
            borderRadius: t.tW / 2,
            backgroundColor: t.filled ? Colors.primaryDark : '#E5E7EB',
            transform: [{ rotate: `${t.angle + 90}deg` }],
          }}
        />
      ))}
      {/* Center label */}
      <View style={{
        position: 'absolute',
        top:  GAUGE_D / 2 - INNER_R + 2,
        left: GAUGE_D / 2 - INNER_R + 2,
        width:  (INNER_R - 2) * 2,
        height: (INNER_R - 2) * 2,
        borderRadius: INNER_R - 2,
        alignItems: 'center', justifyContent: 'center',
      }}>
        <Text style={gauge.levelLbl}>LEVEL</Text>
        <Text style={gauge.levelNum}>14</Text>
      </View>
    </View>
  );
}
const gauge = StyleSheet.create({
  levelLbl: { fontSize: 10, fontWeight: '700', color: Colors.textSecondary, letterSpacing: 0.8 },
  levelNum: { fontSize: 30, fontWeight: '800', color: Colors.text, lineHeight: 36 },
});

// ─── Bar chart data ───────────────────────────────────────────────────────────
const BARS = [
  { day: 'MON', pct: 30 }, { day: 'TUE', pct: 48 },
  { day: 'WED', pct: 38 }, { day: 'THU', pct: 20 },
  { day: 'FRI', pct: 55 }, { day: 'SAT', pct: 72 },
  { day: 'SUN', pct: 8  },
];
const ACTIVE_DAY = 'SAT';
const CHART_H = 90;

// ─── Transactions ─────────────────────────────────────────────────────────────
const TRANSACTIONS = [
  { id: '1', title: 'Arena Win',     sub: '2 hours ago',   amount: +40,  iconBg: '#C6F6D5', emoji: '🏆' },
  { id: '2', title: 'Daily Recycle', sub: 'Yesterday',     amount: +15,  iconBg: '#CFFAFE', emoji: '♻️' },
  { id: '3', title: 'Tree Planting', sub: 'Oct 24, 2023',  amount: -200, iconBg: '#E0F2FE', emoji: '🌳' },
  { id: '4', title: 'Weekly Streak', sub: 'Oct 22, 2023',  amount: +100, iconBg: '#D1FAE5', emoji: '🔥' },
];

// ─── Screen ──────────────────────────────────────────────────────────────────
export default function EcoWalletScreen({ navigation: _nav }: Props) {
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* ── Header ─────────────────────────── */}
      <View style={styles.header}>
        <Text style={styles.brand}>ChonX</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.bellBtn} activeOpacity={0.7}>
            <Text style={styles.bellIcon}>🔔</Text>
          </TouchableOpacity>
          <View style={styles.headerAvatar}>
            <Text style={styles.headerAvatarEmoji}>🧑</Text>
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>

        {/* ── Balance card ───────────────────── */}
        <View style={styles.balanceCard}>
          {/* Decorative highlight circle */}
          <View style={styles.balanceHighlight} />
          {/* Decorative leaf */}
          <Text style={styles.balanceLeaf}>🍃</Text>
          <Text style={styles.balanceLbl}>TOTAL BALANCE</Text>
          <View style={styles.balanceRow}>
            <Text style={styles.balanceAmt}>590</Text>
            <Text style={styles.balanceCur}> EcoPoints</Text>
          </View>
        </View>

        {/* ── Level ring card ─────────────────── */}
        <View style={styles.card}>
          <LevelRing />
          <Text style={styles.levelTitle}>Earth Guardian</Text>
          <Text style={styles.levelSub}>120 XP to Level 15</Text>
        </View>

        {/* ── Weekly Impact card ─────────────── */}
        <View style={styles.card}>
          <View style={styles.weeklyHeader}>
            <View style={{ flex: 1 }}>
              <Text style={styles.weeklyTitle}>Weekly Impact</Text>
              <Text style={styles.weeklySub}>Points earned over the last{'\n'}7 days</Text>
            </View>
            <View style={styles.currentWeekBadge}>
              <Text style={styles.currentWeekTxt}>CURRENT{'\n'}WEEK</Text>
            </View>
          </View>

          {/* Bar chart */}
          <View style={{ height: CHART_H, position: 'relative', marginBottom: 8 }}>
            {/* Reference lines */}
            <View style={[styles.refLine, { top: CHART_H * 0.33 }]} />
            <View style={[styles.refLine, { top: CHART_H * 0.66 }]} />
            {/* Bars */}
            <View style={styles.barsRow}>
              {BARS.map((b) => (
                <View key={b.day} style={styles.barCol}>
                  <View style={styles.barTrack}>
                    <View style={[
                      styles.barFill,
                      {
                        height: `${b.pct}%`,
                        backgroundColor: b.day === ACTIVE_DAY ? Colors.primaryDark : '#D1FAE5',
                      },
                    ]} />
                  </View>
                </View>
              ))}
            </View>
          </View>

          {/* Day labels */}
          <View style={styles.dayRow}>
            {BARS.map((b) => (
              <Text
                key={b.day}
                style={[styles.dayLabel, b.day === ACTIVE_DAY && styles.dayLabelActive]}>
                {b.day}
              </Text>
            ))}
          </View>
        </View>

        {/* ── Recent section ─────────────────── */}
        <View style={styles.recentHeader}>
          <Text style={styles.recentTitle}>Recent</Text>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.seeAll}>SEE ALL</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          {TRANSACTIONS.map((t, i) => (
            <View key={t.id}>
              {i > 0 && <View style={styles.txDivider} />}
              <View style={styles.txRow}>
                <View style={[styles.txIcon, { backgroundColor: t.iconBg }]}>
                  <Text style={styles.txEmoji}>{t.emoji}</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.txTitle}>{t.title}</Text>
                  <Text style={styles.txSub}>{t.sub}</Text>
                </View>
                <Text style={[
                  styles.txAmount,
                  { color: t.amount > 0 ? Colors.primaryDark : '#EF4444' },
                ]}>
                  {t.amount > 0 ? `+${t.amount}` : `${t.amount}`}
                </Text>
              </View>
            </View>
          ))}
        </View>

        <View style={{ height: 32 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

// ─── Styles ──────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F2F5F3' },

  // Header
  header: {
    flexDirection: 'row', alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16, paddingVertical: 10,
    backgroundColor: '#fff',
  },
  brand: { fontSize: 18, fontWeight: '800', color: Colors.primaryDark },
  headerRight: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  bellBtn: { padding: 4 },
  bellIcon: { fontSize: 22 },
  headerAvatar: {
    width: 36, height: 36, borderRadius: 18,
    backgroundColor: '#1A3D2E', alignItems: 'center', justifyContent: 'center',
    overflow: 'hidden',
  },
  headerAvatarEmoji: { fontSize: 20 },

  scroll: { padding: 16, gap: 14 },

  // Balance card
  balanceCard: {
    height: 124,
    borderRadius: 20,
    backgroundColor: '#1A6644',
    overflow: 'hidden',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  balanceHighlight: {
    position: 'absolute', top: -35, right: -35,
    width: 110, height: 110, borderRadius: 55,
    backgroundColor: '#4ADE80', opacity: 0.18,
  },
  balanceLeaf: {
    position: 'absolute', right: 14, top: 10,
    fontSize: 64, opacity: 0.22,
    transform: [{ rotate: '-10deg' }],
  },
  balanceLbl: {
    fontSize: 11, fontWeight: '700', color: 'rgba(255,255,255,0.7)',
    letterSpacing: 1, marginBottom: 8,
  },
  balanceRow: { flexDirection: 'row', alignItems: 'baseline' },
  balanceAmt: { fontSize: 46, fontWeight: '900', color: '#fff', lineHeight: 52 },
  balanceCur: { fontSize: 20, fontWeight: '700', color: 'rgba(255,255,255,0.9)' },

  // Card
  card: {
    backgroundColor: '#fff', borderRadius: 18, padding: 20,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06, shadowRadius: 10, elevation: 2,
  },

  // Level
  levelTitle: {
    fontSize: 20, fontWeight: '800', color: Colors.text,
    textAlign: 'center', marginTop: 14, marginBottom: 4,
  },
  levelSub: { fontSize: 13, color: Colors.textSecondary, textAlign: 'center' },

  // Weekly
  weeklyHeader: {
    flexDirection: 'row', justifyContent: 'space-between',
    alignItems: 'flex-start', marginBottom: 20,
  },
  weeklyTitle: { fontSize: 18, fontWeight: '800', color: Colors.text, marginBottom: 4 },
  weeklySub: { fontSize: 12, color: Colors.textSecondary, lineHeight: 17 },
  currentWeekBadge: {
    backgroundColor: '#D1FAE5', borderRadius: 10,
    paddingHorizontal: 8, paddingVertical: 5,
  },
  currentWeekTxt: {
    fontSize: 9, fontWeight: '800', color: '#065F46',
    letterSpacing: 0.4, textAlign: 'center',
  },
  refLine: {
    position: 'absolute', left: 0, right: 0, height: 1,
    backgroundColor: '#E5E7EB',
  },
  barsRow: {
    position: 'absolute', top: 0, bottom: 0, left: 0, right: 0,
    flexDirection: 'row', alignItems: 'flex-end',
  },
  barCol: { flex: 1, height: '100%', justifyContent: 'flex-end', paddingHorizontal: 3 },
  barTrack: { width: '100%', height: '100%', justifyContent: 'flex-end' },
  barFill: { width: '100%', borderRadius: 3 },
  dayRow: { flexDirection: 'row' },
  dayLabel: {
    flex: 1, textAlign: 'center',
    fontSize: 9, fontWeight: '700', color: Colors.textLight, letterSpacing: 0.3,
  },
  dayLabelActive: { color: Colors.primaryDark },

  // Recent
  recentHeader: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
  },
  recentTitle: { fontSize: 22, fontWeight: '800', color: Colors.text },
  seeAll: { fontSize: 13, fontWeight: '700', color: Colors.primary },

  // Transactions
  txDivider: { height: 1, backgroundColor: '#F3F4F6', marginVertical: 12 },
  txRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  txIcon: { width: 44, height: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center' },
  txEmoji: { fontSize: 20 },
  txTitle: { fontSize: 15, fontWeight: '700', color: Colors.text, marginBottom: 2 },
  txSub: { fontSize: 12, color: Colors.textSecondary },
  txAmount: { fontSize: 17, fontWeight: '800' },
});
