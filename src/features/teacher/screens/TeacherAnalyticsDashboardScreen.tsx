import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import { Colors } from '../../../constants';

const { width } = Dimensions.get('window');

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'TeacherAnalyticsDashboard'>;
};

// ── Bar chart data ──
const BAR_DATA = [
  { label: 'SEP 01', value: 0.35, color: '#A8DFC4' },
  { label: 'SEP 08', value: 0.50, color: '#88CDA8' },
  { label: 'SEP 15', value: 0.65, color: '#5DB88C' },
  { label: 'SEP 22', value: 0.82, color: '#3DA070' },
  { label: 'TODAY', value: 1.00, color: Colors.primaryDark },
];
const MAX_BAR_HEIGHT = 120;
const BAR_WIDTH = 38;

// ── Donut chart data ──
const DONUT_SIZE = 156;
const DONUT_HOLE = 100;
const DONUT_SEGMENTS = [
  { color: Colors.primaryDark, pct: 0.40, label: 'Recycling', pctLabel: '40%' },
  { color: '#3B6FD4', pct: 0.35, label: 'Energy Savings', pctLabel: '35%' },
  { color: Colors.primaryLight, pct: 0.25, label: 'Community Projects', pctLabel: '25%' },
];

// ── Pie wedge renderer (pure RN, no SVG) ──
function PieWedge({
  startDeg,
  sweepDeg,
  color,
  size,
}: {
  startDeg: number;
  sweepDeg: number;
  color: string;
  size: number;
}) {
  const half = size / 2;
  if (sweepDeg <= 0) return null;

  if (sweepDeg > 180) {
    return (
      <>
        <PieWedge startDeg={startDeg} sweepDeg={180} color={color} size={size} />
        <PieWedge startDeg={startDeg + 180} sweepDeg={sweepDeg - 180} color={color} size={size} />
      </>
    );
  }

  // For sweep <= 180: single half-circle rotated into the correct arc
  const innerRot = 180 - sweepDeg;
  return (
    <View
      style={{
        position: 'absolute',
        width: size,
        height: size,
        transform: [{ rotate: `${startDeg}deg` }],
      }}>
      <View
        style={{
          position: 'absolute',
          left: half,
          width: half,
          height: size,
          overflow: 'hidden',
        }}>
        <View
          style={{
            position: 'absolute',
            right: 0,
            width: size,
            height: size,
            borderRadius: half,
            backgroundColor: color,
            transform: [{ rotate: `${innerRot}deg` }],
          }}
        />
      </View>
    </View>
  );
}

function DonutChart() {
  const holeOffset = (DONUT_SIZE - DONUT_HOLE) / 2;
  let angle = -90;

  return (
    <View style={{ width: DONUT_SIZE, height: DONUT_SIZE }}>
      {/* Background disk */}
      <View
        style={{
          position: 'absolute',
          width: DONUT_SIZE,
          height: DONUT_SIZE,
          borderRadius: DONUT_SIZE / 2,
          backgroundColor: '#E5E7EB',
        }}
      />
      {/* Pie segments */}
      {DONUT_SEGMENTS.map(seg => {
        const start = angle;
        const sweep = seg.pct * 360;
        angle += sweep;
        return (
          <PieWedge
            key={seg.label}
            startDeg={start}
            sweepDeg={sweep}
            color={seg.color}
            size={DONUT_SIZE}
          />
        );
      })}
      {/* Center hole */}
      <View
        style={{
          position: 'absolute',
          top: holeOffset,
          left: holeOffset,
          width: DONUT_HOLE,
          height: DONUT_HOLE,
          borderRadius: DONUT_HOLE / 2,
          backgroundColor: Colors.surface,
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
        }}>
        <Text style={donutStyles.centerValue}>124k</Text>
        <Text style={donutStyles.centerLabel}>TOTAL XP</Text>
      </View>
    </View>
  );
}

const donutStyles = StyleSheet.create({
  centerValue: { fontSize: 20, fontWeight: '800', color: Colors.text },
  centerLabel: { fontSize: 9, fontWeight: '600', color: Colors.textSecondary, letterSpacing: 0.6 },
});

// ── Stat card data ──
const STATS = [
  {
    label: 'Total Class XP',
    value: '124,502',
    change: '↗12%',
    changeColor: '#22C55E',
  },
  {
    label: 'Avg. Weekly Activity',
    value: '4.8h',
    change: '↗8%',
    changeColor: '#22C55E',
  },
  {
    label: 'Active Students',
    value: '31/32',
    change: '↘2%',
    changeColor: '#EF4444',
  },
  {
    label: 'Eco-Milestones',
    value: '14',
    change: '+3',
    changeColor: '#22C55E',
  },
];

const TABS = ['STUDENTS', 'LEADERBOARD', 'CALENDAR'];
const CHIPS = ['IMPACT XP', 'LEVELS', 'BADGES'];

export default function TeacherAnalyticsDashboardScreen({ navigation }: Props) {
  const [activeTab, setActiveTab] = useState(0);
  const [activeChip, setActiveChip] = useState(0);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.surface} />

      {/* ── Header ── */}
      <View style={styles.header}>
        <View style={styles.avatarCircle}>
          <Text style={styles.avatarEmoji}>👩‍🏫</Text>
        </View>
        <Text style={styles.brand}>ChonX</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconBtn} activeOpacity={0.7}>
            <Text style={styles.iconBtnText}>🔔</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn} activeOpacity={0.7}>
            <Text style={styles.iconBtnText}>⚙️</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}>

        {/* ── Breadcrumb ── */}
        <View style={styles.breadcrumb}>
          <Text style={styles.breadcrumbBase}>Classes  </Text>
          <Text style={styles.breadcrumbSep}>›  </Text>
          <Text style={styles.breadcrumbCurrent}>Class 10A</Text>
        </View>

        {/* ── Title Row ── */}
        <Text style={styles.pageTitle}>Analytics Dashboard</Text>

        {/* ── Avatars + Export ── */}
        <View style={styles.exportRow}>
          <View style={styles.avatarStack}>
            {['#FF8C69', '#6DB6FF', '#8BC34A'].map((c, i) => (
              <View
                key={i}
                style={[
                  styles.stackAvatar,
                  { backgroundColor: c, marginLeft: i === 0 ? 0 : -10 },
                ]}>
                <Text style={styles.stackAvatarText}>👤</Text>
              </View>
            ))}
            <View style={[styles.stackAvatar, { backgroundColor: Colors.primaryDark, marginLeft: -10 }]}>
              <Text style={styles.stackCountText}>+28</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.exportBtn} activeOpacity={0.8}>
            <Text style={styles.exportIcon}>↓</Text>
            <Text style={styles.exportText}>EXPORT REPORT</Text>
          </TouchableOpacity>
        </View>

        {/* ── Tabs ── */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabsScroll}
          style={styles.tabsContainer}>
          {TABS.map((tab, i) => (
            <TouchableOpacity
              key={tab}
              style={[styles.tab, activeTab === i && styles.tabActive]}
              onPress={() => {
                setActiveTab(i);
                if (i === 1) navigation.navigate('TeacherLeaderboard');
                if (i === 2) navigation.navigate('TeacherCalendar');
              }}
              activeOpacity={0.7}>
              <Text style={[styles.tabText, activeTab === i && styles.tabTextActive]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* ── Filter Dropdowns ── */}
        <View style={styles.filterRow}>
          <TouchableOpacity style={styles.filterDropdown} activeOpacity={0.7}>
            <Text style={styles.filterDropdownText}>Time Range (Last 30 Days)  ∨</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterDropdown} activeOpacity={0.7}>
            <Text style={styles.filterDropdownText} numberOfLines={1}>Category (</Text>
          </TouchableOpacity>
        </View>

        {/* ── Filter Chips ── */}
        <View style={styles.chipsRow}>
          {CHIPS.map((chip, i) => (
            <TouchableOpacity
              key={chip}
              style={[styles.chip, activeChip === i && styles.chipActive]}
              onPress={() => setActiveChip(i)}
              activeOpacity={0.75}>
              <Text style={[styles.chipText, activeChip === i && styles.chipTextActive]}>
                {chip}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* ── Stat Cards ── */}
        <View style={styles.statList}>
          {STATS.map(stat => (
            <View key={stat.label} style={styles.statCard}>
              <View style={styles.statLeft}>
                <Text style={styles.statLabel}>{stat.label}</Text>
                <Text style={styles.statValue}>{stat.value}</Text>
              </View>
              <Text style={[styles.statChange, { color: stat.changeColor }]}>
                {stat.change}
              </Text>
            </View>
          ))}
        </View>

        {/* ── Impact Over Time ── */}
        <View style={styles.chartSection}>
          <View style={styles.chartTitleRow}>
            <Text style={styles.chartTitle}>Impact over{'\n'}Time</Text>
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: Colors.primaryDark }]} />
              <Text style={styles.legendText}>Class XP{'\n'}Growth</Text>
            </View>
          </View>

          {/* Bar Chart */}
          <View style={styles.barChart}>
            {BAR_DATA.map(bar => (
              <View key={bar.label} style={styles.barCol}>
                <View style={styles.barWrapper}>
                  <View
                    style={[
                      styles.bar,
                      {
                        height: bar.value * MAX_BAR_HEIGHT,
                        backgroundColor: bar.color,
                        width: BAR_WIDTH,
                      },
                    ]}
                  />
                </View>
                <Text
                  style={[
                    styles.barLabel,
                    bar.label === 'TODAY' && styles.barLabelToday,
                  ]}>
                  {bar.label}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* ── Category Breakdown ── */}
        <View style={styles.chartSection}>
          <Text style={styles.chartTitle}>Category Breakdown</Text>
          <View style={styles.donutRow}>
            <DonutChart />
            <View style={styles.donutLegend}>
              {DONUT_SEGMENTS.map(seg => (
                <View key={seg.label} style={styles.donutLegendItem}>
                  <View style={[styles.donutLegendDot, { backgroundColor: seg.color }]} />
                  <Text style={styles.donutLegendLabel}>{seg.label}</Text>
                  <Text style={styles.donutLegendPct}>{seg.pctLabel}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Colors.surface,
  },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: Colors.surface,
    gap: 8,
  },
  avatarCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#D1E8D8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarEmoji: { fontSize: 18 },
  brand: {
    flex: 1,
    fontSize: 18,
    fontWeight: '800',
    color: Colors.primaryDark,
    letterSpacing: -0.3,
  },
  headerRight: {
    flexDirection: 'row',
    gap: 4,
  },
  iconBtn: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBtnText: { fontSize: 17 },

  // Scroll
  scroll: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },

  // Breadcrumb
  breadcrumb: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  breadcrumbBase: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  breadcrumbSep: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  breadcrumbCurrent: {
    fontSize: 12,
    color: Colors.primaryDark,
    fontWeight: '600',
  },

  // Page title
  pageTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: Colors.text,
    marginBottom: 14,
    letterSpacing: -0.4,
  },

  // Export row
  exportRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  avatarStack: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stackAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Colors.surface,
  },
  stackAvatarText: { fontSize: 13 },
  stackCountText: { fontSize: 9, fontWeight: '700', color: Colors.white },
  exportBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: Colors.primaryDark,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },
  exportIcon: { fontSize: 13, color: Colors.white, fontWeight: '700' },
  exportText: {
    fontSize: 11,
    fontWeight: '700',
    color: Colors.white,
    letterSpacing: 0.5,
  },

  // Tabs
  tabsContainer: { marginBottom: 14 },
  tabsScroll: { gap: 4, paddingRight: 4 },
  tab: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  tabActive: {
    borderBottomColor: Colors.primaryDark,
  },
  tabText: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.textSecondary,
    letterSpacing: 0.5,
  },
  tabTextActive: {
    color: Colors.primaryDark,
  },

  // Filter dropdowns
  filterRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
  },
  filterDropdown: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.border,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  filterDropdownText: {
    fontSize: 11,
    color: Colors.text,
    fontWeight: '500',
  },

  // Chips
  chipsRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 18,
  },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: Colors.border,
    backgroundColor: Colors.white,
  },
  chipActive: {
    backgroundColor: Colors.primaryDark,
    borderColor: Colors.primaryDark,
  },
  chipText: {
    fontSize: 11,
    fontWeight: '700',
    color: Colors.textSecondary,
    letterSpacing: 0.4,
  },
  chipTextActive: {
    color: Colors.white,
  },

  // Stat cards
  statList: {
    gap: 10,
    marginBottom: 24,
  },
  statCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: Colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 1,
  },
  statLeft: {
    gap: 3,
  },
  statLabel: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  statValue: {
    fontSize: 22,
    fontWeight: '800',
    color: Colors.text,
    letterSpacing: -0.5,
  },
  statChange: {
    fontSize: 13,
    fontWeight: '700',
  },

  // Chart section
  chartSection: {
    backgroundColor: Colors.white,
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: Colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 1,
  },
  chartTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: Colors.text,
    letterSpacing: -0.3,
    lineHeight: 24,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 6,
  },
  legendDot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    marginTop: 3,
  },
  legendText: {
    fontSize: 11,
    color: Colors.textSecondary,
    lineHeight: 16,
  },

  // Bar chart
  barChart: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
    height: MAX_BAR_HEIGHT + 28,
  },
  barCol: {
    alignItems: 'center',
    gap: 6,
  },
  barWrapper: {
    justifyContent: 'flex-end',
    height: MAX_BAR_HEIGHT,
  },
  bar: {
    borderTopLeftRadius: BAR_WIDTH / 2,
    borderTopRightRadius: BAR_WIDTH / 2,
  },
  barLabel: {
    fontSize: 9,
    fontWeight: '600',
    color: Colors.textSecondary,
    letterSpacing: 0.3,
  },
  barLabelToday: {
    color: Colors.primaryDark,
    fontWeight: '700',
  },

  // Donut chart section
  donutRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
    gap: 12,
  },
  donutLegend: {
    flex: 1,
    gap: 14,
  },
  donutLegendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  donutLegendDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  donutLegendLabel: {
    flex: 1,
    fontSize: 13,
    color: Colors.text,
  },
  donutLegendPct: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.textSecondary,
  },
});
