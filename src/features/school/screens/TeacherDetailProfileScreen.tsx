import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppIcon from '../../../components/AppIcon';
import SchoolScreenHeader from '../../../components/SchoolScreenHeader';
import SchoolBottomNav, { BOTTOM_NAV_HEIGHT } from '../../../components/SchoolBottomNav';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import { Colors } from '../../../constants';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'TeacherDetailProfile'>;
};

export default function TeacherDetailProfileScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />

      <SchoolScreenHeader navigation={navigation} showNotifications showSettings />

      <ScrollView
        contentContainerStyle={[styles.scrollContent, { paddingBottom: BOTTOM_NAV_HEIGHT + 20 }]}
        showsVerticalScrollIndicator={false}>

        {/* Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatarCircle}>
              <AppIcon name="person" size={40} color="#64748B" />
            </View>
            <View style={styles.levelBadge}>
              <Text style={styles.levelBadgeText}>LEVEL 42</Text>
            </View>
          </View>
          
          <Text style={styles.teacherName}>Dr. Elena Rodriguez</Text>
          <Text style={styles.teacherSubtext}>
            Senior Environmental Sciences Lead •{'\n'}elena.rodriguez@chonx-academy.edu
          </Text>

          <View style={styles.pillsContainer}>
            <View style={styles.pill}>
              <Text style={styles.pillText}>Class 9A (Biology)</Text>
            </View>
            <View style={styles.pill}>
              <Text style={styles.pillText}>Class 10C (Ecology)</Text>
            </View>
            <View style={styles.pill}>
              <Text style={styles.pillText}>Class 12B (Advanced Bio)</Text>
            </View>
          </View>
        </View>

        {/* Performance Analytics Title */}
        <Text style={styles.sectionTitle}>Performance Analytics</Text>

        {/* Stat Cards */}
        <View style={styles.statCard}>
          <View style={styles.statIconCircleTopLeft}>
            <Text style={styles.statIconSmall}>✅</Text>
          </View>
          <Text style={styles.statLabel}>TOTAL APPROVALS</Text>
          <Text style={styles.statValue}>1,306</Text>
          <Text style={styles.statTrendGreen}>↗ 12% this month</Text>
        </View>

        <View style={styles.statCard}>
          <View style={[styles.statIconCircleTopLeft, { backgroundColor: '#E2E8F0' }]}>
            <Text style={styles.statIconSmall}>🕒</Text>
          </View>
          <Text style={styles.statLabel}>STUDENT HOURS</Text>
          <Text style={styles.statValue}>4,520h</Text>
          <Text style={styles.statTrendGray}>Top 5% school-wide</Text>
        </View>

        {/* Active Classes Card */}
        <View style={styles.cardBox}>
          <View style={styles.cardHeaderRow}>
            <Text style={styles.cardTitle}>Active Classes</Text>
            <TouchableOpacity>
              <Text style={styles.downloadLink}>Download CSV</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.tableHeader}>
            <Text style={[styles.tableCol, { flex: 2 }]}>CLASS NAME</Text>
            <Text style={[styles.tableCol, { flex: 1, textAlign: 'center' }]}>STUDENTS</Text>
            <Text style={[styles.tableCol, { flex: 1, textAlign: 'right' }]}>LOGS</Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={[styles.tableCellMain, { flex: 2 }]}>Biology{'\n'}9A</Text>
            <Text style={[styles.tableCell, { flex: 1, textAlign: 'center' }]}>28</Text>
            <Text style={[styles.tableCell, { flex: 1, textAlign: 'right' }]}>412</Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={[styles.tableCellMain, { flex: 2 }]}>Ecology{'\n'}10C</Text>
            <Text style={[styles.tableCell, { flex: 1, textAlign: 'center' }]}>32</Text>
            <Text style={[styles.tableCell, { flex: 1, textAlign: 'right' }]}>856</Text>
          </View>

          <View style={[styles.tableRow, { borderBottomWidth: 0 }]}>
            <Text style={[styles.tableCellMain, { flex: 2 }]}>Adv.{'\n'}Bio 12B</Text>
            <Text style={[styles.tableCell, { flex: 1, textAlign: 'center' }]}>15</Text>
            <Text style={[styles.tableCell, { flex: 1, textAlign: 'right' }]}>216</Text>
          </View>
        </View>

        {/* Recent Activity Card */}
        <View style={styles.cardBox}>
          <Text style={[styles.cardTitle, { marginBottom: 20 }]}>Recent Activity</Text>

          {/* Timeline Item 1 */}
          <View style={styles.timelineItem}>
            <View style={styles.timelineLine} />
            <View style={[styles.timelineIconContainer, { backgroundColor: '#10B981' }]}>
              <Text style={styles.timelineIcon}>✓</Text>
            </View>
            <View style={styles.timelineContent}>
              <Text style={styles.timelineTitle}>Approved 12 logs</Text>
              <Text style={styles.timelineSub}>Community Garden Program • 2h ago</Text>
            </View>
          </View>

          {/* Timeline Item 2 */}
          <View style={styles.timelineItem}>
            <View style={styles.timelineLine} />
            <View style={[styles.timelineIconContainer, { backgroundColor: '#2DD4BF' }]}>
              <Text style={styles.timelineIcon}>🏆</Text>
            </View>
            <View style={styles.timelineContent}>
              <Text style={styles.timelineTitle}>Class 9A reached 1,200 hours</Text>
              <Text style={styles.timelineSub}>Milestone achieved • 5h ago</Text>
            </View>
          </View>

          {/* Timeline Item 3 */}
          <View style={styles.timelineItem}>
            <View style={styles.timelineLine} />
            <View style={[styles.timelineIconContainer, { backgroundColor: '#3B82F6' }]}>
              <Text style={styles.timelineIcon}>▶</Text>
            </View>
            <View style={styles.timelineContent}>
              <Text style={styles.timelineTitle}>Started New Initiative</Text>
              <Text style={styles.timelineSub}>'Urban Forest' project live • Yesterday</Text>
            </View>
          </View>

          {/* Timeline Item 4 */}
          <View style={styles.timelineItem}>
            <View style={[styles.timelineIconContainer, { backgroundColor: '#E2E8F0' }]}>
              <Text style={styles.timelineIcon}>👥</Text>
            </View>
            <View style={styles.timelineContent}>
              <Text style={styles.timelineTitle}>Onboarded 4 new students</Text>
              <Text style={styles.timelineSub}>Advanced Biology 12B • 2 days ago</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.viewAllBtn}>
            <Text style={styles.viewAllText}>View All Activities</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>

      <SchoolBottomNav navigation={navigation} activeRoute="TeacherDetailProfile" />
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
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: '#F8FAFC',
  },
  backBtn: {
    padding: 8,
  },
  backIcon: {
    fontSize: 24,
    color: '#006D5B',
  },
  headerBrand: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  headerLogoBg: {
    backgroundColor: '#002B20',
    width: 28,
    height: 28,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerLogoEmoji: {
    fontSize: 14,
  },
  brandName: {
    fontSize: 20,
    fontWeight: '800',
    color: '#004D40',
  },
  iconBtn: {
    padding: 8,
  },
  headerIcon: {
    fontSize: 20,
    color: '#334155',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  profileCard: {
    backgroundColor: Colors.white,
    borderRadius: 24,
    paddingVertical: 32,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 32,
    borderWidth: 1,
    borderColor: '#E0F2FE', // Light blue border matching design
    shadowColor: Colors.cardShadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  avatarCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E2E8F0',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#059669', // Green ring
  },
  avatarEmoji: {
    fontSize: 48,
  },
  levelBadge: {
    position: 'absolute',
    bottom: -8,
    alignSelf: 'center',
    backgroundColor: '#059669',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: Colors.white,
  },
  levelBadgeText: {
    fontSize: 9,
    fontWeight: '800',
    color: Colors.white,
    letterSpacing: 0.5,
  },
  teacherName: {
    fontSize: 22,
    fontWeight: '800',
    color: '#002B36',
    marginBottom: 8,
  },
  teacherSubtext: {
    fontSize: 12,
    color: '#475569',
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 20,
  },
  pillsContainer: {
    alignItems: 'center',
    gap: 8,
  },
  pill: {
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 16,
  },
  pillText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#475569',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#002B36',
    marginBottom: 16,
  },
  statCard: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 24,
    marginBottom: 16,
    shadowColor: Colors.cardShadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.03,
    shadowRadius: 10,
    elevation: 2,
  },
  statIconCircleTopLeft: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#E8F5ED',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  statIconSmall: {
    fontSize: 14,
  },
  statLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: '#64748B',
    letterSpacing: 1,
    marginBottom: 8,
  },
  statValue: {
    fontSize: 32,
    fontWeight: '800',
    color: '#002B36',
    marginBottom: 8,
  },
  statTrendGreen: {
    fontSize: 12,
    fontWeight: '700',
    color: '#059669',
  },
  statTrendGray: {
    fontSize: 12,
    fontWeight: '600',
    color: '#64748B',
  },
  cardBox: {
    backgroundColor: Colors.white,
    borderRadius: 24,
    padding: 24,
    marginBottom: 20,
    shadowColor: Colors.cardShadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.03,
    shadowRadius: 12,
    elevation: 2,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#002B36',
  },
  downloadLink: {
    fontSize: 12,
    fontWeight: '700',
    color: '#059669',
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
    paddingBottom: 12,
    marginBottom: 8,
  },
  tableCol: {
    fontSize: 9,
    fontWeight: '800',
    color: '#94A3B8',
    letterSpacing: 1,
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F8FAFC',
  },
  tableCellMain: {
    fontSize: 13,
    fontWeight: '800',
    color: '#1E293B',
    lineHeight: 18,
  },
  tableCell: {
    fontSize: 14,
    color: '#475569',
  },
  timelineItem: {
    flexDirection: 'row',
    marginBottom: 24,
    position: 'relative',
  },
  timelineLine: {
    position: 'absolute',
    left: 15,
    top: 32,
    bottom: -24,
    width: 2,
    backgroundColor: '#F1F5F9',
  },
  timelineIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
    zIndex: 1,
  },
  timelineIcon: {
    color: Colors.white,
    fontSize: 12,
  },
  timelineContent: {
    flex: 1,
    paddingTop: 4,
  },
  timelineTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 4,
  },
  timelineSub: {
    fontSize: 11,
    color: '#64748B',
  },
  viewAllBtn: {
    marginTop: 8,
    alignItems: 'center',
    paddingVertical: 12,
  },
  viewAllText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#475569',
  },
  bottomPad: {
    height: 40,
  },
});
