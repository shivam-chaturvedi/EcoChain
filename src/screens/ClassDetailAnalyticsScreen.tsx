import React, { useState } from 'react';
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
import Svg, { Circle } from 'react-native-svg';

export default function ClassDetailAnalyticsScreen({ navigation }: any) {
  const [activeTab, setActiveTab] = useState('ANALYTICS');

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.avatar}>
            <Image
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBHMvUPssakRGZleRUPNFFFT0dyBXgNuDQQe_691keOEfFiPOGD-ENUWCGQqMKUKrKWQ0EgqhOZMpFMuO6za6iWT0eGKq59ubvLizMcWWzCdF6rVxAFqrgWR_inuQcYR6rUNbPHvkZ_mXnk0O9eQDfnZoN1EwZ-XsvJHasBupuooW83c1bbZPHeSZDdRt0OAvSOW1RqkTJtDrr5adryQ6beh9LW6k4pW3GJ3WZtjKbIJALADCJw6ECJQx8TXzyAgPDeZ-Yfbnxtz6E' }}
              style={styles.avatarImg}
            />
          </View>
          <Text style={styles.logoText}>ChonX</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity><Icon name="notifications" size={24} color="#3c4a42" /></TouchableOpacity>
          <TouchableOpacity><Icon name="settings" size={24} color="#3c4a42" /></TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Class Header */}
        <View style={styles.classHeader}>
          <View>
            <View style={styles.breadcrumb}>
              <Text style={styles.breadcrumbText}>Classes</Text>
              <Icon name="chevron-right" size={16} color="#3c4a42" />
              <Text style={[styles.breadcrumbText, { color: '#006c49' }]}>Class 10A</Text>
            </View>
            <Text style={styles.pageTitle}>Analytics Dashboard</Text>
          </View>
          <View style={styles.classActions}>
            <View style={styles.studentAvatars}>
              <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHM3Y1H_y8s5b7a1ke622XKqAaMzSppG3S-dqJQ0mGWb7hQNUr6AdsghWgcUNSC5hySvwo7iqLPrMBpIPo2LOgoCHWvEcLFpHRKGVr-QrthhDvf2cAp2ye3cL8FshDLse1XxgNAHx5efCjNK-E0dRJV6QTNdRjlNTTwsmOQphx4aQpjOtFk3867OoJ44jjDpudmyVpyKdaWK1GyVMDA3hhj9x_BHS0Lu_UcBfi5GdAL-ZyoKvHbNucKiC-AfilQIFcS19H50Oz6gXA' }} style={styles.smallAvatar} />
              <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6V-upgowUyx7X5pv1AD7s6zXx7jJNm9-yu6XP56WW1oWmBc245us8z4aaGS81Rx8y8GiH1064FmzQchVsEc7iBfBqMbHAJur6kXSN6ntkO9ek0-deiiD-k7Hfs9o1IW7Ai4R8R6vSS9MNxZMFTBaNtrk4k89WvI0lobr9bpf5CIPar6dd-YRGWlI9rH4FlkOi34ZO_gzK2-P84-FyBJzEYg3yVACn-Cq1OSe1iIKtiMwoBAbI3dqviXat6ZxoZdL6QP2yUo4gLJYO' }} style={[styles.smallAvatar, { marginLeft: -12 }]} />
              <View style={[styles.smallAvatar, styles.moreAvatar, { marginLeft: -12 }]}>
                <Text style={styles.moreAvatarText}>+28</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.exportBtn}>
              <Icon name="file-download" size={18} color="#ffffff" />
              <Text style={styles.exportBtnText}>EXPORT REPORT</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Tab Bar */}
        <View style={styles.tabsContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {['STUDENTS', 'LEADERBOARD', 'CALENDAR', 'ANALYTICS'].map((tab) => (
              <TouchableOpacity
                key={tab}
                style={[styles.tab, activeTab === tab && styles.tabActive]}
                onPress={() => setActiveTab(tab)}
              >
                <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>{tab}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Analytics Grid */}
        <View style={styles.grid}>
          {/* Key Metrics */}
          <View style={styles.metricsRow}>
            <View style={styles.metricCard}>
              <Text style={styles.metricLabel}>Total Class XP</Text>
              <View style={styles.metricBottom}>
                <Text style={[styles.metricValue, { color: '#006c49' }]}>124,502</Text>
                <View style={styles.metricTrend}>
                  <Icon name="trending-up" size={18} color="#006c49" />
                  <Text style={[styles.metricTrendText, { color: '#006c49' }]}>12%</Text>
                </View>
              </View>
            </View>
            <View style={styles.metricCard}>
              <Text style={styles.metricLabel}>Avg. Weekly Activity</Text>
              <View style={styles.metricBottom}>
                <Text style={[styles.metricValue, { color: '#006b5f' }]}>4.8h</Text>
                <View style={styles.metricTrend}>
                  <Icon name="trending-up" size={18} color="#006c49" />
                  <Text style={[styles.metricTrendText, { color: '#006c49' }]}>8%</Text>
                </View>
              </View>
            </View>
            <View style={styles.metricCard}>
              <Text style={styles.metricLabel}>Active Students</Text>
              <View style={styles.metricBottom}>
                <Text style={[styles.metricValue, { color: '#191c1d' }]}>31/32</Text>
                <View style={styles.metricTrend}>
                  <Icon name="trending-down" size={18} color="#ba1a1a" />
                  <Text style={[styles.metricTrendText, { color: '#ba1a1a' }]}>2%</Text>
                </View>
              </View>
            </View>
            <View style={styles.metricCard}>
              <Text style={styles.metricLabel}>Eco-Milestones</Text>
              <View style={styles.metricBottom}>
                <Text style={[styles.metricValue, { color: '#005ac2' }]}>14</Text>
                <View style={styles.metricTrend}>
                  <Icon name="add" size={18} color="#006c49" />
                  <Text style={[styles.metricTrendText, { color: '#006c49' }]}>3</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Category Breakdown Donut */}
          <View style={styles.donutCard}>
            <Text style={styles.donutTitle}>Category Breakdown</Text>
            <View style={styles.donutContainer}>
              <Svg width="192" height="192" viewBox="0 0 100 100" style={{ transform: [{ rotate: '-90deg' }] }}>
                <Circle cx="50" cy="50" r="40" stroke="#edeeef" strokeWidth="12" fill="transparent" />
                <Circle cx="50" cy="50" r="40" stroke="#006c49" strokeWidth="12" strokeDasharray="251.2" strokeDashoffset="100.48" fill="transparent" />
                <Circle cx="50" cy="50" r="40" stroke="#005ac2" strokeWidth="12" strokeDasharray="251.2" strokeDashoffset="200.96" fill="transparent" />
                <Circle cx="50" cy="50" r="40" stroke="#6df5e1" strokeWidth="12" strokeDasharray="251.2" strokeDashoffset="226.08" fill="transparent" />
              </Svg>
              <View style={styles.donutCenter}>
                <Text style={styles.donutCenterValue}>124k</Text>
                <Text style={styles.donutCenterLabel}>TOTAL XP</Text>
              </View>
            </View>
            
            <View style={styles.legend}>
              <View style={styles.legendItem}>
                <View style={styles.legendLeft}>
                  <View style={[styles.legendDot, { backgroundColor: '#006c49' }]} />
                  <Text style={styles.legendText}>Recycling</Text>
                </View>
                <Text style={styles.legendPercent}>40%</Text>
              </View>
              <View style={styles.legendItem}>
                <View style={styles.legendLeft}>
                  <View style={[styles.legendDot, { backgroundColor: '#005ac2' }]} />
                  <Text style={styles.legendText}>Energy Savings</Text>
                </View>
                <Text style={styles.legendPercent}>35%</Text>
              </View>
              <View style={styles.legendItem}>
                <View style={styles.legendLeft}>
                  <View style={[styles.legendDot, { backgroundColor: '#6df5e1' }]} />
                  <Text style={styles.legendText}>Community Projects</Text>
                </View>
                <Text style={styles.legendPercent}>25%</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, height: 64, backgroundColor: 'rgba(248,249,250,0.8)', borderBottomWidth: 1, borderBottomColor: 'rgba(187,202,191,0.2)' },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  avatar: { width: 40, height: 40, borderRadius: 20, overflow: 'hidden', borderWidth: 2, borderColor: '#10b981' },
  avatarImg: { width: '100%', height: '100%' },
  logoText: { fontSize: 24, fontWeight: '800', color: '#006c49' },
  headerRight: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  scrollContent: { paddingHorizontal: 24, paddingTop: 24, paddingBottom: 100 },
  classHeader: { flexDirection: 'column', gap: 16, marginBottom: 32 },
  breadcrumb: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 8 },
  breadcrumbText: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 0.5 },
  pageTitle: { fontSize: 32, fontWeight: '700', color: '#191c1d' },
  classActions: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 8 },
  studentAvatars: { flexDirection: 'row', alignItems: 'center' },
  smallAvatar: { width: 32, height: 32, borderRadius: 16, borderWidth: 2, borderColor: '#f8f9fa' },
  moreAvatar: { backgroundColor: '#10b981', alignItems: 'center', justifyContent: 'center' },
  moreAvatarText: { fontSize: 10, fontWeight: '700', color: '#00422b' },
  exportBtn: { flexDirection: 'row', alignItems: 'center', gap: 8, backgroundColor: '#006c49', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 8, marginLeft: 8 },
  exportBtnText: { fontSize: 12, fontWeight: '700', color: '#ffffff' },
  tabsContainer: { borderBottomWidth: 1, borderBottomColor: 'rgba(187,202,191,0.3)', marginBottom: 32 },
  tab: { paddingHorizontal: 24, paddingVertical: 12, borderBottomWidth: 2, borderBottomColor: 'transparent' },
  tabActive: { borderBottomColor: '#006c49', backgroundColor: 'rgba(16,185,129,0.1)' },
  tabText: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 0.5 },
  tabTextActive: { color: '#006c49' },
  grid: { gap: 24 },
  metricsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 16 },
  metricCard: { width: '47%', backgroundColor: 'rgba(255,255,255,0.7)', padding: 24, borderRadius: 8, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)' },
  metricLabel: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 0.5, marginBottom: 8 },
  metricBottom: { flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' },
  metricValue: { fontSize: 28, fontWeight: '700' },
  metricTrend: { flexDirection: 'row', alignItems: 'center' },
  metricTrendText: { fontSize: 14, fontWeight: '700', marginLeft: 4 },
  donutCard: { backgroundColor: 'rgba(255,255,255,0.7)', padding: 24, borderRadius: 8, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)' },
  donutTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d', marginBottom: 32 },
  donutContainer: { position: 'relative', alignItems: 'center', justifyContent: 'center' },
  donutCenter: { position: 'absolute', alignItems: 'center', justifyContent: 'center' },
  donutCenterValue: { fontSize: 28, fontWeight: '700', color: '#191c1d' },
  donutCenterLabel: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 0.5 },
  legend: { marginTop: 32, gap: 12 },
  legendItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  legendLeft: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  legendDot: { width: 10, height: 10, borderRadius: 5 },
  legendText: { fontSize: 16, color: '#191c1d' },
  legendPercent: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 0.5 },
});
