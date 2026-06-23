import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

const RECENT_TXS = [
  { id: 1, title: 'Arena Win', time: '2 hours ago', pts: '+40', icon: 'military-tech', color: '#10b981', bg: 'rgba(16, 185, 129, 0.1)' },
  { id: 2, title: 'Daily Recycle', time: 'Yesterday', pts: '+15', icon: 'recycling', color: '#006b5f', bg: 'rgba(109, 245, 225, 0.2)' },
  { id: 3, title: 'Tree Planting', time: 'Oct 24, 2023', pts: '-200', icon: 'shopping-bag', color: '#005ac2', bg: 'rgba(113, 161, 255, 0.1)', isNegative: true },
  { id: 4, title: 'Weekly Streak', time: 'Oct 22, 2023', pts: '+100', icon: 'auto-awesome', color: '#10b981', bg: 'rgba(16, 185, 129, 0.1)' },
];

export default function MyWalletScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.logoText}>ChonX</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.notifBtn}>
            <Icon name="notifications" size={24} color="#006c49" />
          </TouchableOpacity>
          <View style={styles.avatarBorder}>
            <Image 
              source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARKTHc3f-TYhdO6pbjrwPtmcf-y-LdtLrZgHhwVczzeVW1bmYvfp4ODtA4a5VSPJG61IZgkp6nbh5EgK11wnaO5-XEtx_BkA01tk-atWlQ5PvV4FEpLLs5oyPVW3tVcNr4e7aUS27KiUT5pGWiZeeitl7H7MKCet5XmXbXkijWFeuyrHOiFTifO2_0Vk0a1SI7JDhz9mDQ_C-16dN6CIvyD463ZzPMxgEnyHMlCeWlBAkaq_77AXR9hLQEd2UsvH5ndNAnhqolrWiU'}}
              style={styles.avatar}
            />
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.topSection}>
          <LinearGradient
            colors={['#10b981', '#006c49']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.balanceCard}
          >
            <Text style={styles.balanceLabel}>TOTAL BALANCE</Text>
            <View style={styles.balanceRow}>
              <Text style={styles.balanceAmount}>590</Text>
              <Text style={styles.balanceUnit}>EcoPoints</Text>
            </View>
            <Icon name="eco" size={120} color="rgba(255,255,255,0.2)" style={styles.bgLeaf} />
          </LinearGradient>

          <View style={styles.levelCard}>
            <View style={styles.progressRingWrapper}>
              <Icon name="donut-large" size={100} color="#006c49" />
              <View style={styles.progressRingInner}>
                <Text style={styles.levelLabel}>LEVEL</Text>
                <Text style={styles.levelValue}>14</Text>
              </View>
            </View>
            <Text style={styles.levelTitle}>Earth Guardian</Text>
            <Text style={styles.levelDesc}>120 XP to Level 15</Text>
          </View>
        </View>

        <View style={styles.chartCard}>
          <View style={styles.chartHeader}>
            <View>
              <Text style={styles.chartTitle}>Weekly Impact</Text>
              <Text style={styles.chartDesc}>Points earned over the last 7 days</Text>
            </View>
            <View style={styles.currentWeekBadge}>
              <Text style={styles.currentWeekText}>CURRENT WEEK</Text>
            </View>
          </View>

          <View style={styles.chartArea}>
            <View style={styles.chartBars}>
              {[0.4, 0.65, 0.55, 0.9, 0.45, 0.7, 0.3].map((h, i) => (
                <View key={i} style={styles.barCol}>
                  <View style={[styles.bar, { height: `${h * 100}%` }, i === 5 && styles.barActive]} />
                  <Text style={[styles.barLabel, i === 5 && styles.barLabelActive]}>
                    {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'][i]}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        <View style={styles.recentCard}>
          <View style={styles.recentHeader}>
            <Text style={styles.recentTitle}>Recent</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>SEE ALL</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.txList}>
            {RECENT_TXS.map(tx => (
              <View key={tx.id} style={styles.txItem}>
                <View style={styles.txLeft}>
                  <View style={[styles.txIconBg, { backgroundColor: tx.bg }]}>
                    <Icon name={tx.icon} size={24} color={tx.color} />
                  </View>
                  <View>
                    <Text style={styles.txTitle}>{tx.title}</Text>
                    <Text style={styles.txTime}>{tx.time}</Text>
                  </View>
                </View>
                <Text style={[styles.txPts, tx.isNegative && styles.txPtsNeg]}>{tx.pts}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  header: {
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    backgroundColor: 'rgba(248, 249, 250, 0.8)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(108, 122, 113, 0.1)',
  },
  logoText: {
    fontSize: 24,
    fontWeight: '800',
    color: '#006c49',
  },
  headerRight: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  notifBtn: { padding: 8 },
  avatarBorder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#10b981',
    overflow: 'hidden',
  },
  avatar: { width: '100%', height: '100%' },
  scrollContent: { padding: 24, paddingBottom: 100 },
  topSection: { flexDirection: 'column', gap: 24, marginBottom: 24 },
  balanceCard: {
    borderRadius: 16,
    padding: 32,
    overflow: 'hidden',
    position: 'relative',
    minHeight: 240,
    justifyContent: 'space-between',
  },
  balanceLabel: { color: 'rgba(255,255,255,0.8)', fontSize: 12, fontWeight: '700', letterSpacing: 1 },
  balanceRow: { flexDirection: 'row', alignItems: 'baseline', gap: 8, marginTop: 8 },
  balanceAmount: { fontSize: 48, fontWeight: '800', color: '#fff' },
  balanceUnit: { fontSize: 24, fontWeight: '600', color: 'rgba(255,255,255,0.9)' },
  bgLeaf: { position: 'absolute', right: 8, top: 8, opacity: 0.2 },
  levelCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(229, 231, 235, 0.5)',
  },
  progressRingWrapper: { position: 'relative', width: 128, height: 128, alignItems: 'center', justifyContent: 'center', marginBottom: 16 },
  progressRingInner: { position: 'absolute', alignItems: 'center' },
  levelLabel: { fontSize: 12, fontWeight: '700', color: '#006c49' },
  levelValue: { fontSize: 32, fontWeight: '700', color: '#191c1d' },
  levelTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d', marginTop: 8 },
  levelDesc: { fontSize: 16, color: '#3c4a42', marginTop: 8 },
  chartCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: 'rgba(229, 231, 235, 0.5)',
  },
  chartHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 },
  chartTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d', marginBottom: 4 },
  chartDesc: { fontSize: 16, color: '#3c4a42' },
  currentWeekBadge: {
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  currentWeekText: { color: '#006c49', fontSize: 10, fontWeight: '700' },
  chartArea: { height: 256, flexDirection: 'row', alignItems: 'flex-end', paddingTop: 16 },
  chartBars: { flex: 1, flexDirection: 'row', justifyContent: 'space-between', height: '100%' },
  barCol: { flex: 1, alignItems: 'center', justifyContent: 'flex-end', gap: 8 },
  bar: { width: '80%', backgroundColor: 'rgba(16, 185, 129, 0.2)', borderTopLeftRadius: 8, borderTopRightRadius: 8 },
  barActive: { backgroundColor: '#10b981', shadowColor: '#10b981', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.5, shadowRadius: 10, elevation: 4 },
  barLabel: { fontSize: 10, fontWeight: '700', color: '#3c4a42' },
  barLabelActive: { color: '#006c49' },
  recentCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(229, 231, 235, 0.5)',
  },
  recentHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 },
  recentTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d' },
  seeAllText: { fontSize: 12, fontWeight: '700', color: '#006c49' },
  txList: { gap: 16 },
  txItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 12, backgroundColor: 'rgba(237, 238, 239, 0.5)', borderRadius: 12 },
  txLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  txIconBg: { width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  txTitle: { fontSize: 16, fontWeight: '700', color: '#191c1d', marginBottom: 2 },
  txTime: { fontSize: 12, color: '#3c4a42' },
  txPts: { fontSize: 24, fontWeight: '700', color: '#006c49' },
  txPtsNeg: { color: '#ba1a1a' },
});
