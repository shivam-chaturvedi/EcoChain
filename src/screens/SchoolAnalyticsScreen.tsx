import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function SchoolAnalyticsScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.logoWrapper}>
            <Image 
              source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnbCgwU8JVkHPjXdzsB1je_HtudwcHaxQybg6x7Zu68HDb2RYHqQQIra0k4lpB7v3KN2zHPOtCkXiw6h7DNu97wv0S0HDs6UD0nvc3vUTJrTFbua0buOZzZRcjj0qE8-P7N1Ufc-hU2gw_Ku_pAI3CloXcVP9f1LORpVhComZBdfzbOMz0y4i_sZRNFgxuw_RjzIlxmMk-CvMKFd_vqv90ESEitbo1BUmdvxEPjwWhsGccnZ4ef3ZCbegwZ9lZgwLNdL2fnXA5yCR6'}}
              style={styles.logoImg}
            />
          </View>
          <Text style={styles.logoText}>ChonX</Text>
        </View>
        <TouchableOpacity style={styles.settingsBtn}>
          <Icon name="settings" size={24} color="#3c4a42" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.pageHeader}>
          <View>
            <Text style={styles.pageTitle}>School Analytics</Text>
            <Text style={styles.pageSubtitle}>Real-time insights into your campus sustainability impact.</Text>
          </View>
          <TouchableOpacity style={styles.refreshBtn}>
            <Icon name="refresh" size={18} color="#fff" />
            <Text style={styles.refreshBtnText}>Refresh</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.metricsGrid}>
          <View style={styles.metricCard}>
            <View style={styles.metricHeader}>
              <View style={[styles.metricIconBg, { backgroundColor: 'rgba(16, 185, 129, 0.2)' }]}>
                <Icon name="eco" size={24} color="#10b981" />
              </View>
              <View style={[styles.metricBadge, { backgroundColor: 'rgba(109, 245, 225, 0.2)' }]}>
                <Text style={[styles.metricBadgeText, { color: '#006b5f' }]}>+12%</Text>
              </View>
            </View>
            <Text style={styles.metricLabel}>Total Activities</Text>
            <Text style={styles.metricValue}>1,284</Text>
          </View>

          <View style={styles.metricCard}>
            <View style={styles.metricHeader}>
              <View style={[styles.metricIconBg, { backgroundColor: 'rgba(113, 161, 255, 0.2)' }]}>
                <Icon name="schedule" size={24} color="#005ac2" />
              </View>
              <View style={[styles.metricBadge, { backgroundColor: '#e1e3e4' }]}>
                <Text style={[styles.metricBadgeText, { color: '#3c4a42' }]}>Stable</Text>
              </View>
            </View>
            <Text style={styles.metricLabel}>Impact Hours</Text>
            <Text style={styles.metricValue}>3,520</Text>
          </View>

          <View style={styles.metricCard}>
            <View style={styles.metricHeader}>
              <View style={[styles.metricIconBg, { backgroundColor: 'rgba(109, 245, 225, 0.2)' }]}>
                <Icon name="stars" size={24} color="#006b5f" />
              </View>
              <View style={[styles.metricBadge, { backgroundColor: 'rgba(16, 185, 129, 0.2)' }]}>
                <Text style={[styles.metricBadgeText, { color: '#006c49' }]}>+450 XP</Text>
              </View>
            </View>
            <Text style={styles.metricLabel}>Eco-Credits</Text>
            <Text style={styles.metricValue}>42.5k</Text>
          </View>

          <View style={styles.metricCard}>
            <View style={styles.metricHeader}>
              <View style={[styles.metricIconBg, { backgroundColor: '#e1e3e4' }]}>
                <Icon name="group" size={24} color="#3c4a42" />
              </View>
              <View style={[styles.metricBadge, { backgroundColor: 'rgba(186, 26, 26, 0.2)' }]}>
                <Text style={[styles.metricBadgeText, { color: '#ba1a1a' }]}>-2%</Text>
              </View>
            </View>
            <Text style={styles.metricLabel}>Active Students</Text>
            <Text style={styles.metricValue}>892</Text>
          </View>
        </View>

        <View style={styles.chartCard}>
          <Text style={styles.chartTitle}>Activity Trends</Text>
          <View style={styles.chartArea}>
            <View style={styles.barCol}>
              <View style={[styles.bar, { height: '40%' }]} />
            </View>
            <View style={styles.barCol}>
              <View style={[styles.bar, { height: '60%' }]} />
            </View>
            <View style={styles.barCol}>
              <View style={[styles.bar, { height: '45%' }]} />
            </View>
            <View style={styles.barCol}>
              <View style={[styles.bar, { height: '85%' }]} />
            </View>
            <View style={styles.barCol}>
              <View style={[styles.bar, { height: '70%' }]} />
            </View>
            <View style={styles.barCol}>
              <View style={[styles.bar, { height: '90%' }]} />
            </View>
            <View style={styles.barCol}>
              <View style={[styles.bar, { height: '65%' }]} />
            </View>
          </View>
        </View>

        <View style={styles.chartCard}>
          <Text style={styles.chartTitle}>Top Performing Classes</Text>
          <View style={styles.classRow}>
            <View style={styles.classHeader}>
              <Text style={styles.className}>Grade 12-B • Ms. Sarah Johnson</Text>
              <Text style={styles.classActivities}>342 Activities</Text>
            </View>
            <View style={styles.classBarBg}>
              <View style={[styles.classBarFill, { width: '92%' }]} />
            </View>
          </View>
          <View style={styles.classRow}>
            <View style={styles.classHeader}>
              <Text style={styles.className}>Grade 9-A • Mr. Robert Chen</Text>
              <Text style={styles.classActivities}>285 Activities</Text>
            </View>
            <View style={styles.classBarBg}>
              <View style={[styles.classBarFill, { width: '75%' }]} />
            </View>
          </View>
          <View style={styles.classRow}>
            <View style={styles.classHeader}>
              <Text style={styles.className}>Grade 10-D • Ms. Emily Davis</Text>
              <Text style={styles.classActivities}>210 Activities</Text>
            </View>
            <View style={styles.classBarBg}>
              <View style={[styles.classBarFill, { width: '58%' }]} />
            </View>
          </View>
        </View>

      </ScrollView>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <View style={styles.navItem}>
          <Icon name="dashboard" size={24} color="#3c4a42" />
          <Text style={styles.navText}>Dashboard</Text>
        </View>
        <View style={styles.navItem}>
          <Icon name="eco" size={24} color="#3c4a42" />
          <Text style={styles.navText}>Initiatives</Text>
        </View>
        <View style={styles.navItemActive}>
          <Icon name="analytics" size={24} color="#006c49" />
          <Text style={styles.navTextActive}>Analytics</Text>
        </View>
      </View>
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
    borderBottomColor: 'rgba(187, 202, 191, 0.2)',
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  logoWrapper: { width: 40, height: 40, borderRadius: 20, overflow: 'hidden' },
  logoImg: { width: '100%', height: '100%' },
  logoText: { fontSize: 24, fontWeight: '800', color: '#006c49' },
  settingsBtn: { padding: 8 },
  scrollContent: { padding: 24, paddingBottom: 100 },
  pageHeader: { marginBottom: 40, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16 },
  pageTitle: { fontSize: 32, fontWeight: '700', color: '#191c1d', marginBottom: 8 },
  pageSubtitle: { fontSize: 16, color: '#3c4a42' },
  refreshBtn: { flexDirection: 'row', alignItems: 'center', gap: 8, backgroundColor: '#006c49', paddingHorizontal: 24, paddingVertical: 12, borderRadius: 8, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 2 },
  refreshBtnText: { color: '#fff', fontSize: 12, fontWeight: '700' },
  metricsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 24, marginBottom: 40 },
  metricCard: { width: '45%', backgroundColor: 'rgba(255,255,255,0.7)', padding: 24, borderRadius: 16, borderWidth: 1, borderColor: 'rgba(229, 231, 235, 0.5)' },
  metricHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 },
  metricIconBg: { padding: 12, borderRadius: 12 },
  metricBadge: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 16 },
  metricBadgeText: { fontSize: 12, fontWeight: '700' },
  metricLabel: { fontSize: 12, fontWeight: '700', color: '#3c4a42', marginBottom: 4 },
  metricValue: { fontSize: 28, fontWeight: '700', color: '#191c1d' },
  chartCard: { backgroundColor: 'rgba(255,255,255,0.7)', padding: 24, borderRadius: 16, borderWidth: 1, borderColor: 'rgba(229, 231, 235, 0.5)', marginBottom: 24 },
  chartTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d', marginBottom: 24 },
  chartArea: { height: 256, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-end', backgroundColor: 'rgba(243, 244, 245, 0.3)', borderRadius: 8, paddingBottom: 16 },
  barCol: { flex: 1, alignItems: 'center', justifyContent: 'flex-end', height: '100%' },
  bar: { width: '40%', backgroundColor: 'rgba(0, 108, 73, 0.2)', borderTopLeftRadius: 8, borderTopRightRadius: 8 },
  classRow: { marginBottom: 24 },
  classHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  className: { fontSize: 12, fontWeight: '700', color: '#191c1d' },
  classActivities: { fontSize: 12, fontWeight: '700', color: '#006c49' },
  classBarBg: { height: 16, backgroundColor: '#edeeef', borderRadius: 8, overflow: 'hidden' },
  classBarFill: { height: '100%', backgroundColor: '#006c49', borderRadius: 8 },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: 'rgba(248, 249, 250, 0.9)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(108, 122, 113, 0.2)',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 20,
  },
  navItem: {
    alignItems: 'center',
    padding: 8,
  },
  navItemActive: {
    alignItems: 'center',
    padding: 8,
    backgroundColor: 'rgba(16, 185, 129, 0.2)',
    borderRadius: 16,
    paddingHorizontal: 16,
  },
  navText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#3c4a42',
    marginTop: 4,
  },
  navTextActive: {
    fontSize: 12,
    fontWeight: '700',
    color: '#006c49',
    marginTop: 4,
  },
});
