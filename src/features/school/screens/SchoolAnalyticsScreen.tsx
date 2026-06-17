import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import { Colors } from '../../../constants';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SchoolAnalytics'>;
};

export default function SchoolAnalyticsScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarText}>⚙️</Text>
          </View>
          <Text style={styles.brandName}>ChonX</Text>
        </View>
        <TouchableOpacity style={styles.iconBtn}>
          <Text style={styles.headerIcon}>⚙️</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>

        {/* Title Section */}
        <Text style={styles.title}>School Analytics</Text>
        <Text style={styles.subtitle}>
          Real-time insights into your campus sustainability impact.
        </Text>

        {/* Filters */}
        <View style={styles.filtersRow}>
          <View style={styles.dropdownBtn}>
            <Text style={styles.dropdownText}>Last 30 days</Text>
            <Text style={styles.dropdownIcon}>∨</Text>
          </View>
          <View style={styles.dropdownBtn}>
            <Text style={styles.dropdownText}>All classes</Text>
            <Text style={styles.dropdownIcon}>∨</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.refreshBtn}>
          <Text style={styles.refreshIcon}>↻</Text>
          <Text style={styles.refreshText}>Refresh</Text>
        </TouchableOpacity>

        {/* Stat Cards */}
        <View style={styles.statCard}>
          <View style={styles.statTopRow}>
            <View style={[styles.statIconCircle, { backgroundColor: '#E8F5ED' }]}>
              <Text style={styles.statIcon}>🛡️</Text>
            </View>
            <View style={[styles.badge, { backgroundColor: '#E8F5ED' }]}>
              <Text style={[styles.badgeText, { color: '#059669' }]}>+12%</Text>
            </View>
          </View>
          <Text style={styles.statLabel}>Total Activities</Text>
          <Text style={styles.statValue}>1,284</Text>
        </View>

        <View style={styles.statCard}>
          <View style={styles.statTopRow}>
            <View style={[styles.statIconCircle, { backgroundColor: '#DBEAFE' }]}>
              <Text style={styles.statIcon}>⏱️</Text>
            </View>
            <View style={[styles.badge, { backgroundColor: '#F1F5F9' }]}>
              <Text style={[styles.badgeText, { color: '#64748B' }]}>Stable</Text>
            </View>
          </View>
          <Text style={styles.statLabel}>Impact Hours</Text>
          <Text style={styles.statValue}>3,520</Text>
        </View>

        <View style={styles.statCard}>
          <View style={styles.statTopRow}>
            <View style={[styles.statIconCircle, { backgroundColor: '#E0F2FE' }]}>
              <Text style={styles.statIcon}>⭐</Text>
            </View>
            <View style={[styles.badge, { backgroundColor: '#D1FAE5' }]}>
              <Text style={[styles.badgeText, { color: '#059669' }]}>+850 XP</Text>
            </View>
          </View>
          <Text style={styles.statLabel}>Eco-Credits</Text>
          <Text style={styles.statValue}>42.5k</Text>
        </View>

        <View style={styles.statCard}>
          <View style={styles.statTopRow}>
            <View style={[styles.statIconCircle, { backgroundColor: '#F1F5F9' }]}>
              <Text style={styles.statIcon}>👥</Text>
            </View>
            <View style={[styles.badge, { backgroundColor: '#FEE2E2' }]}>
              <Text style={[styles.badgeText, { color: '#DC2626' }]}>-2%</Text>
            </View>
          </View>
          <Text style={styles.statLabel}>Active Students</Text>
          <Text style={styles.statValue}>892</Text>
        </View>

        {/* Activity Trends */}
        <View style={styles.chartCard}>
          <View style={styles.chartHeader}>
            <Text style={styles.chartTitle}>Activity{'\n'}Trends</Text>
            <View style={styles.chartLegend}>
              <View style={styles.legendItem}>
                <View style={[styles.legendDot, { backgroundColor: '#059669' }]} />
                <Text style={styles.legendText}>completed</Text>
              </View>
              <View style={styles.legendItem}>
                <View style={[styles.legendDot, { backgroundColor: '#2563EB' }]} />
                <Text style={styles.legendText}>ongoing</Text>
              </View>
            </View>
          </View>
          
          <View style={styles.mockBarChartContainer}>
            <View style={styles.yAxis}>
              <Text style={styles.yAxisText}>100%</Text>
              <Text style={styles.yAxisText}>75%</Text>
              <Text style={styles.yAxisText}>50%</Text>
              <Text style={styles.yAxisText}>25%</Text>
              <Text style={styles.yAxisText}>0%</Text>
            </View>
            <View style={styles.barsContainer}>
              <View style={[styles.bar, { height: '30%' }]} />
              <View style={[styles.bar, { height: '50%' }]} />
              <View style={[styles.bar, { height: '40%' }]} />
              <View style={[styles.bar, { height: '80%' }]} />
              <View style={[styles.bar, { height: '60%' }]} />
              <View style={[styles.bar, { height: '90%' }]} />
              <View style={[styles.bar, { height: '50%' }]} />
            </View>
          </View>
        </View>

        {/* Impact Distribution */}
        <View style={styles.chartCard}>
          <Text style={[styles.chartTitle, { marginBottom: 24 }]}>Impact Distribution</Text>
          
          <View style={styles.donutContainer}>
            <View style={styles.donutMock}>
              {/* Outer ring segmented mock */}
              <View style={styles.donutSegmentGreen} />
              <View style={styles.donutSegmentBlue} />
              
              <View style={styles.donutInnerCircle}>
                <Text style={styles.donutPercent}>72%</Text>
                <Text style={styles.donutLabel}>Waste Reduction</Text>
              </View>
            </View>
          </View>

          <View style={styles.distributionLegend}>
            <View style={styles.distLegendItem}>
              <View style={[styles.distDot, { backgroundColor: '#059669' }]} />
              <Text style={styles.distLabel}>Recycling</Text>
              <Text style={styles.distValue}>42%</Text>
            </View>
            <View style={styles.distLegendItem}>
              <View style={[styles.distDot, { backgroundColor: '#2563EB' }]} />
              <Text style={styles.distLabel}>Water</Text>
              <Text style={styles.distValue}>28%</Text>
            </View>
            <View style={styles.distLegendItem}>
              <View style={[styles.distDot, { backgroundColor: '#38BDF8' }]} />
              <Text style={styles.distLabel}>Energy</Text>
              <Text style={styles.distValue}>18%</Text>
            </View>
            <View style={styles.distLegendItem}>
              <View style={[styles.distDot, { backgroundColor: '#E2E8F0' }]} />
              <Text style={styles.distLabel}>Other</Text>
              <Text style={styles.distValue}>12%</Text>
            </View>
          </View>
        </View>

        {/* Top Performing Classes */}
        <View style={styles.chartCard}>
          <View style={styles.topClassesHeader}>
            <Text style={styles.chartTitle}>Top{'\n'}Performing{'\n'}Classes</Text>
            <View style={styles.topClassesColumns}>
              <Text style={[styles.columnLabel, { color: '#059669', fontWeight: '700' }]}>Activities</Text>
              <Text style={styles.columnLabel}>Hours</Text>
              <Text style={styles.columnLabel}>Credits</Text>
            </View>
          </View>

          {/* Class 1 */}
          <View style={styles.classItem}>
            <View style={styles.classTextRow}>
              <Text style={styles.classNameText}>Grade 12-A - Ms. Sarah Johnson</Text>
              <Text style={styles.classActivitiesText}>342 Activities</Text>
            </View>
            <View style={styles.classBarBg}>
              <View style={[styles.classBarFill, { width: '100%' }]} />
            </View>
          </View>

          {/* Class 2 */}
          <View style={styles.classItem}>
            <View style={styles.classTextRow}>
              <Text style={styles.classNameText}>Grade 9-A - Mr. Robert Chen</Text>
              <Text style={styles.classActivitiesText}>285 Activities</Text>
            </View>
            <View style={styles.classBarBg}>
              <View style={[styles.classBarFill, { width: '80%' }]} />
            </View>
          </View>

          {/* Class 3 */}
          <View style={styles.classItem}>
            <View style={styles.classTextRow}>
              <Text style={styles.classNameText}>Grade 10-D - Ms. Emily Davis</Text>
              <Text style={styles.classActivitiesText}>210 Activities</Text>
            </View>
            <View style={styles.classBarBg}>
              <View style={[styles.classBarFill, { width: '60%' }]} />
            </View>
          </View>
        </View>

        {/* Detailed Class Reports */}
        <View style={styles.reportsCard}>
          <Text style={styles.reportsTitle}>Detailed Class Reports</Text>
          <Text style={styles.reportsSubtitle}>Complete breakdown of all participating sections.</Text>
          
          <View style={styles.tableHeader}>
            <Text style={[styles.tableCol, { flex: 2 }]}>Class</Text>
            <Text style={[styles.tableCol, { flex: 1, textAlign: 'center' }]}>Students</Text>
            <Text style={[styles.tableCol, { flex: 1, textAlign: 'right' }]}>Activities</Text>
          </View>

          {/* Table Row */}
          <View style={styles.tableRow}>
            <View style={{ flex: 2 }}>
              <Text style={styles.tableGradeText}>Grade 12-A</Text>
              <Text style={styles.tableTeacherText}>Sarah Johnson</Text>
            </View>
            <Text style={[styles.tableValueText, { flex: 1, textAlign: 'center' }]}>28</Text>
            <Text style={[styles.tableValueText, { flex: 1, textAlign: 'right' }]}>342</Text>
          </View>
          
          {/* Table Row */}
          <View style={styles.tableRow}>
            <View style={{ flex: 2 }}>
              <Text style={styles.tableGradeText}>Grade 9-A</Text>
              <Text style={styles.tableTeacherText}>Robert Chen</Text>
            </View>
            <Text style={[styles.tableValueText, { flex: 1, textAlign: 'center' }]}>32</Text>
            <Text style={[styles.tableValueText, { flex: 1, textAlign: 'right' }]}>285</Text>
          </View>

          {/* Table Row */}
          <View style={styles.tableRow}>
            <View style={{ flex: 2 }}>
              <Text style={styles.tableGradeText}>Grade 10-D</Text>
              <Text style={styles.tableTeacherText}>Emily Davis</Text>
            </View>
            <Text style={[styles.tableValueText, { flex: 1, textAlign: 'center' }]}>30</Text>
            <Text style={[styles.tableValueText, { flex: 1, textAlign: 'right' }]}>210</Text>
          </View>

          {/* Table Row */}
          <View style={[styles.tableRow, { borderBottomWidth: 0 }]}>
            <View style={{ flex: 2 }}>
              <Text style={styles.tableGradeText}>Grade 11-C</Text>
              <Text style={styles.tableTeacherText}>Rachel Lee</Text>
            </View>
            <Text style={[styles.tableValueText, { flex: 1, textAlign: 'center' }]}>25</Text>
            <Text style={[styles.tableValueText, { flex: 1, textAlign: 'right' }]}>152</Text>
          </View>

          <TouchableOpacity style={styles.viewAllBtn}>
            <Text style={styles.viewAllText}>View all 24 classes</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomPad} />
      </ScrollView>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('AcademyOverview')}>
          <Text style={styles.navIcon}>📊</Text>
          <Text style={styles.navLabel}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('SchoolCodeManagement')}>
          <Text style={styles.navIcon}>🛡️</Text>
          <Text style={styles.navLabel}>Initiatives</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('SchoolAnalytics')}>
          <View style={styles.navItemActiveBg}>
            <Text style={styles.navIconActive}>📈</Text>
            <Text style={styles.navLabelActive}>Analytics</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#F8FAFC',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#059669',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  avatarText: {
    fontSize: 12,
  },
  brandName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#059669',
  },
  iconBtn: {
    padding: 4,
  },
  headerIcon: {
    fontSize: 20,
    color: '#334155',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 80, // for bottom nav
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#002B36',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 13,
    color: '#006D5B', // Teal tint
    lineHeight: 20,
    marginBottom: 20,
  },
  filtersRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  dropdownBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  dropdownText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1E293B',
  },
  dropdownIcon: {
    fontSize: 10,
    color: '#64748B',
  },
  refreshBtn: {
    backgroundColor: '#059669',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 12,
    marginBottom: 24,
    width: 100, // as shown in design
  },
  refreshIcon: {
    color: Colors.white,
    marginRight: 6,
    fontSize: 12,
  },
  refreshText: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: '700',
  },
  statCard: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    shadowColor: Colors.cardShadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.03,
    shadowRadius: 10,
    elevation: 2,
  },
  statTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  statIconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statIcon: {
    fontSize: 18,
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  statLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: '#64748B',
    marginBottom: 4,
  },
  statValue: {
    fontSize: 28,
    fontWeight: '800',
    color: '#002B36',
  },
  chartCard: {
    backgroundColor: Colors.white,
    borderRadius: 24,
    padding: 24,
    marginBottom: 20,
    shadowColor: Colors.cardShadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.03,
    shadowRadius: 10,
    elevation: 2,
  },
  chartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#002B36',
    lineHeight: 22,
  },
  chartLegend: {
    flexDirection: 'row',
    gap: 12,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 6,
  },
  legendText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#64748B',
  },
  mockBarChartContainer: {
    flexDirection: 'row',
    height: 120,
  },
  yAxis: {
    justifyContent: 'space-between',
    paddingVertical: 10,
    marginRight: 10,
  },
  yAxisText: {
    fontSize: 8,
    color: '#94A3B8',
    fontWeight: '600',
  },
  barsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  bar: {
    width: 6,
    backgroundColor: '#C8EDD8',
    borderRadius: 3,
  },
  donutContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  donutMock: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 12,
    borderColor: '#059669',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  donutSegmentBlue: {
    position: 'absolute',
    top: -12,
    right: -12,
    width: 70,
    height: 70,
    borderTopWidth: 12,
    borderRightWidth: 12,
    borderColor: '#2563EB',
    borderTopRightRadius: 70,
  },
  donutSegmentGreen: {
    position: 'absolute',
  },
  donutInnerCircle: {
    alignItems: 'center',
  },
  donutPercent: {
    fontSize: 24,
    fontWeight: '800',
    color: '#002B36',
  },
  donutLabel: {
    fontSize: 8,
    fontWeight: '600',
    color: '#64748B',
    marginTop: 2,
  },
  distributionLegend: {
    marginTop: 10,
  },
  distLegendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  distDot: {
    width: 8,
    height: 8,
    borderRadius: 2,
    marginRight: 10,
  },
  distLabel: {
    flex: 1,
    fontSize: 12,
    fontWeight: '600',
    color: '#475569',
  },
  distValue: {
    fontSize: 12,
    fontWeight: '800',
    color: '#002B36',
  },
  topClassesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  topClassesColumns: {
    flexDirection: 'row',
    gap: 12,
    paddingBottom: 4,
  },
  columnLabel: {
    fontSize: 8,
    fontWeight: '600',
    color: '#94A3B8',
  },
  classItem: {
    marginBottom: 16,
  },
  classTextRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  classNameText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#1E293B',
    flex: 1,
  },
  classActivitiesText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#059669',
  },
  classBarBg: {
    height: 6,
    backgroundColor: '#F1F5F9',
    borderRadius: 3,
  },
  classBarFill: {
    height: '100%',
    backgroundColor: '#059669',
    borderRadius: 3,
  },
  reportsCard: {
    backgroundColor: Colors.white,
    borderRadius: 24,
    paddingTop: 24,
    paddingHorizontal: 20,
    paddingBottom: 20,
    marginBottom: 20,
  },
  reportsTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#002B36',
    marginBottom: 4,
  },
  reportsSubtitle: {
    fontSize: 12,
    color: '#64748B',
    marginBottom: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
    paddingBottom: 10,
    marginBottom: 12,
  },
  tableCol: {
    fontSize: 9,
    fontWeight: '800',
    color: '#94A3B8',
    letterSpacing: 0.5,
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F8FAFC',
  },
  tableGradeText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#1E293B',
    marginBottom: 2,
  },
  tableTeacherText: {
    fontSize: 10,
    color: '#64748B',
  },
  tableValueText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#002B36',
  },
  viewAllBtn: {
    marginTop: 20,
    alignItems: 'center',
  },
  viewAllText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#059669',
  },
  bottomPad: {
    height: 40,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  navItemActiveBg: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D1FAE5',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  navIcon: {
    fontSize: 20,
    color: '#94A3B8',
  },
  navIconActive: {
    fontSize: 20,
  },
  navLabel: {
    fontSize: 10,
    fontWeight: '600',
    color: '#94A3B8',
    marginTop: 4,
  },
  navLabelActive: {
    fontSize: 12,
    fontWeight: '700',
    color: '#064E3B',
    marginLeft: 6,
  },
});
