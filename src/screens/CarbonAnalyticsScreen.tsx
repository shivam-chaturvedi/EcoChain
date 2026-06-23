import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const weekBars = [
  { day: 'Mon', height: 45, active: true },
  { day: 'Tue', height: 65, active: true },
  { day: 'Wed', height: 30, active: true },
  { day: 'Thu', height: 85, active: false },
  { day: 'Fri', height: 50, active: true },
  { day: 'Sat', height: 40, active: true },
  { day: 'Sun', height: 20, active: true },
];

const tips = [
  {
    icon: 'restaurant',
    color: '#10b981',
    bgColor: 'rgba(16,185,129,0.15)',
    title: 'Switch to Plant-based',
    desc: 'Reducing meat intake for just 3 days a week can save 40kg of CO2 monthly.',
    cta: 'START CHALLENGE',
    ctaColor: '#006c49',
  },
  {
    icon: 'commute',
    color: '#006b5f',
    bgColor: '#6df5e1',
    title: 'Opt for Public Transit',
    desc: 'Swap your car commute for a bus or train to earn +150 XP this week.',
    cta: 'VIEW ROUTES',
    ctaColor: '#006b5f',
  },
  {
    icon: 'lightbulb',
    color: '#004395',
    bgColor: '#d8e2ff',
    title: 'Optimize Home Energy',
    desc: 'Switch to LED bulbs and lower your thermostat by 1 degree to save 5%.',
    cta: 'ENERGY AUDIT',
    ctaColor: '#005ac2',
  },
];

export default function CarbonAnalyticsScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.avatarContainer}>
            <Image
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPZ1dv_Wt69ShrpC64hHWMal8D9PO1w98kK_uKFBWARgNFGnrfqTWhqM30Gd8Ju3HQ65MML4-16qMybfydO0M3vVI4RbvLlhuQA6pQBJSGAP4-terp3Is13UWRNwQrzsIxhbczx0qF8FsvPmSud_5HCza6UVTI4ij9jBvcFbdGKXG7ebDmaM02XZpGVANo9WykOXUaO7r7dpb0kJnwXL6uy0IMZvhQ3kDc1VNjiQxGW8atzUgnORiRFVKN1ec4Tbv9NtrDSushLbJ3' }}
              style={styles.avatarImg}
            />
          </View>
          <Text style={styles.logoText}>ChonX</Text>
        </View>
        <TouchableOpacity style={styles.notifBtn}>
          <Icon name="notifications" size={24} color="#006c49" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Hero — Monthly Footprint */}
        <View style={styles.heroCard}>
          <View style={styles.heroLeft}>
            <Text style={styles.heroLabel}>MONTHLY FOOTPRINT</Text>
            <Text style={styles.heroValue}>
              0.82 <Text style={styles.heroUnit}>tonnes CO2e</Text>
            </Text>
            <View style={styles.trendBadge}>
              <Icon name="trending-down" size={18} color="#00422b" />
              <Text style={styles.trendText}>12% lower than last month</Text>
            </View>
          </View>
          {/* Circular progress (visual placeholder) */}
          <View style={styles.circleContainer}>
            <View style={styles.circleBg}>
              <View style={styles.circleInner}>
                <Text style={styles.circleValue}>74</Text>
                <Text style={styles.circleLabel}>XP RANK</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Weekly Emissions Bar Chart */}
        <View style={styles.glassCard}>
          <View style={styles.chartHeader}>
            <View>
              <Text style={styles.chartTitle}>Weekly Emissions</Text>
              <Text style={styles.chartSubtitle}>Daily CO2e tracked this week</Text>
            </View>
          </View>
          <View style={styles.barChart}>
            {weekBars.map((bar, i) => (
              <View key={i} style={styles.barColumn}>
                <View
                  style={[
                    styles.bar,
                    { height: `${bar.height}%` as any, backgroundColor: bar.active ? '#006c49' : '#6df5e1' },
                  ]}
                />
                <Text style={styles.barLabel}>{bar.day}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Source Breakdown */}
        <View style={styles.glassCard}>
          <Text style={styles.chartTitle}>Source Breakdown</Text>
          <View style={styles.donutSection}>
            {/* Simplified visual donut */}
            <View style={styles.donutOuter}>
              <View style={styles.donutInner}>
                <Icon name="eco" size={28} color="#006c49" />
              </View>
            </View>
            <View style={styles.donutLegend}>
              {[
                { color: '#006c49', label: 'Diet', pct: '45%' },
                { color: '#6df5e1', label: 'Home', pct: '30%' },
                { color: '#005ac2', label: 'Travel', pct: '25%' },
              ].map((item, i) => (
                <View key={i} style={styles.legendRow}>
                  <View style={[styles.legendDot, { backgroundColor: item.color }]} />
                  <Text style={styles.legendLabel}>{item.label}</Text>
                  <Text style={styles.legendPct}>{item.pct}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Emission Trend Chart */}
        <View style={styles.glassCard}>
          <View style={styles.chartHeader}>
            <Text style={styles.chartTitle}>Emission Trend</Text>
            <View style={styles.periodBadge}>
              <Text style={styles.periodText}>Last 6 Months</Text>
            </View>
          </View>
          {/* Simplified trend bars */}
          <View style={styles.trendChart}>
            {[180, 160, 100, 120, 60, 80, 40].map((h, i) => (
              <View key={i} style={[styles.trendBar, { height: h / 2, backgroundColor: i === 0 ? '#10b981' : 'rgba(16,185,129,0.3)' }]} />
            ))}
          </View>
          <View style={styles.trendMonths}>
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((m) => (
              <Text key={m} style={styles.trendMonth}>{m}</Text>
            ))}
          </View>
        </View>

        {/* Tips to Improve */}
        <Text style={[styles.chartTitle, { marginBottom: 16 }]}>Tips to improve</Text>
        {tips.map((tip, i) => (
          <View key={i} style={[styles.tipCard, i < tips.length - 1 && { marginBottom: 16 }]}>
            <View style={[styles.tipIconCircle, { backgroundColor: tip.bgColor }]}>
              <Icon name={tip.icon} size={24} color={tip.color} />
            </View>
            <Text style={styles.tipTitle}>{tip.title}</Text>
            <Text style={styles.tipDesc}>{tip.desc}</Text>
            <TouchableOpacity style={styles.tipCta}>
              <Text style={[styles.tipCtaText, { color: tip.ctaColor }]}>{tip.cta}</Text>
              <Icon name="chevron-right" size={20} color={tip.ctaColor} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('StudentHome')}>
          <Icon name="home" size={24} color="#3c4a42" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItemActive}>
          <Icon name="eco" size={24} color="#00422b" />
          <Text style={styles.navTextActive}>Impact</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('ArenaHub')}>
          <Icon name="military-tech" size={24} color="#3c4a42" />
          <Text style={styles.navText}>Arena</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('StudentProfile')}>
          <Icon name="person" size={24} color="#3c4a42" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, height: 64, backgroundColor: 'rgba(248,249,250,0.8)', borderBottomWidth: 1, borderBottomColor: 'rgba(187,202,191,0.2)' },
  headerLeft: { flexDirection: 'row', alignItems: 'center' },
  avatarContainer: { width: 40, height: 40, borderRadius: 20, borderWidth: 2, borderColor: '#10b981', overflow: 'hidden', marginRight: 12 },
  avatarImg: { width: '100%', height: '100%' },
  logoText: { fontSize: 24, fontWeight: '800', color: '#006c49' },
  notifBtn: { padding: 8 },
  scrollContent: { paddingHorizontal: 24, paddingTop: 24, paddingBottom: 120 },
  heroCard: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#10b981', borderRadius: 16, padding: 32, marginBottom: 24, shadowColor: '#10b981', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.2, shadowRadius: 16 },
  heroLeft: { flex: 1 },
  heroLabel: { fontSize: 12, fontWeight: '700', color: 'rgba(0,66,43,0.9)', letterSpacing: 0.5, marginBottom: 8 },
  heroValue: { fontSize: 48, fontWeight: '800', color: '#00422b', letterSpacing: -1.5, marginBottom: 16 },
  heroUnit: { fontSize: 24, fontWeight: '600', letterSpacing: 0 },
  trendBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(0,66,43,0.2)', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, gap: 6, alignSelf: 'flex-start' },
  trendText: { fontSize: 12, fontWeight: '700', color: '#00422b', letterSpacing: 0.3 },
  circleContainer: { marginLeft: 16 },
  circleBg: { width: 120, height: 120, borderRadius: 60, borderWidth: 8, borderColor: 'rgba(0,66,43,0.3)', alignItems: 'center', justifyContent: 'center' },
  circleInner: { alignItems: 'center' },
  circleValue: { fontSize: 24, fontWeight: '600', color: '#ffffff' },
  circleLabel: { fontSize: 10, fontWeight: '700', color: 'rgba(255,255,255,0.8)', letterSpacing: 0.5 },
  glassCard: { backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: 16, padding: 24, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)', marginBottom: 24, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 8 },
  chartHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 24 },
  chartTitle: { fontSize: 24, fontWeight: '600', color: '#006c49' },
  chartSubtitle: { fontSize: 16, color: '#3c4a42', marginTop: 4 },
  barChart: { flexDirection: 'row', alignItems: 'flex-end', height: 160, gap: 8 },
  barColumn: { flex: 1, alignItems: 'center', height: '100%', justifyContent: 'flex-end' },
  bar: { width: '80%', borderTopLeftRadius: 6, borderTopRightRadius: 6 },
  barLabel: { fontSize: 10, fontWeight: '700', color: '#3c4a42', marginTop: 8, letterSpacing: 0.5 },
  donutSection: { flexDirection: 'row', alignItems: 'center', gap: 24 },
  donutOuter: { width: 120, height: 120, borderRadius: 60, borderWidth: 16, borderColor: '#006c49', alignItems: 'center', justifyContent: 'center' },
  donutInner: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#f8f9fa', alignItems: 'center', justifyContent: 'center' },
  donutLegend: { flex: 1, gap: 8 },
  legendRow: { flexDirection: 'row', alignItems: 'center' },
  legendDot: { width: 8, height: 8, borderRadius: 4, marginRight: 8 },
  legendLabel: { flex: 1, fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 0.5 },
  legendPct: { fontSize: 12, fontWeight: '700', color: '#191c1d' },
  periodBadge: { backgroundColor: '#f3f4f5', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20 },
  periodText: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 0.5 },
  trendChart: { flexDirection: 'row', alignItems: 'flex-end', height: 80, gap: 4, marginBottom: 8 },
  trendBar: { flex: 1, borderTopLeftRadius: 4, borderTopRightRadius: 4 },
  trendMonths: { flexDirection: 'row', justifyContent: 'space-between' },
  trendMonth: { fontSize: 10, fontWeight: '700', color: '#3c4a42', letterSpacing: 0.5 },
  tipCard: { backgroundColor: '#ffffff', borderRadius: 16, padding: 24, borderWidth: 1, borderColor: 'rgba(187,202,191,0.3)', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.04, shadowRadius: 8 },
  tipIconCircle: { width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center', marginBottom: 16 },
  tipTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d', marginBottom: 8 },
  tipDesc: { fontSize: 16, color: '#3c4a42', lineHeight: 24, marginBottom: 16 },
  tipCta: { flexDirection: 'row', alignItems: 'center' },
  tipCtaText: { fontSize: 12, fontWeight: '700', letterSpacing: 0.5 },
  bottomNav: { position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'rgba(248,249,250,0.9)', borderTopWidth: 1, borderTopColor: 'rgba(187,202,191,0.3)', paddingBottom: 20 },
  navItem: { alignItems: 'center', paddingHorizontal: 16 },
  navItemActive: { alignItems: 'center', paddingHorizontal: 16, paddingVertical: 6, backgroundColor: 'rgba(16,185,129,0.2)', borderRadius: 16 },
  navText: { fontSize: 12, fontWeight: '700', color: '#3c4a42', marginTop: 4 },
  navTextActive: { fontSize: 12, fontWeight: '700', color: '#00422b', marginTop: 4 },
});
