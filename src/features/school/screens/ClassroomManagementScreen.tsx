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
  navigation: NativeStackNavigationProp<RootStackParamList, 'ClassroomManagement'>;
};

export default function ClassroomManagementScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />
      
      <SchoolScreenHeader navigation={navigation} showNotifications />

      <ScrollView
        contentContainerStyle={[styles.scrollContent, { paddingBottom: BOTTOM_NAV_HEIGHT + 20 }]}
        showsVerticalScrollIndicator={false}>

        {/* Title Section */}
        <Text style={styles.title}>Classroom{'\n'}Management</Text>
        <Text style={styles.subtitle}>
          Oversee teacher assignments and monitor real-time class engagement.
        </Text>

        {/* Action Buttons */}
        <View style={styles.actionsRow}>
          <TouchableOpacity style={styles.primaryActionBtn}>
            <Text style={styles.primaryActionIcon}>+</Text>
            <Text style={styles.primaryActionText}>Create New Class</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryActionBtn}>
            <Text style={styles.secondaryActionIcon}>⇄</Text>
            <Text style={styles.secondaryActionText}>Move Students</Text>
          </TouchableOpacity>
        </View>

        {/* Class Analytics Card */}
        <View style={styles.analyticsCard}>
          <View style={styles.analyticsHeader}>
            <Text style={styles.analyticsTitle}>Class Analytics</Text>
            <AppIcon name="bar-chart" size={18} color="#64748B" />
          </View>

          <View style={styles.chartContainer}>
            <View style={styles.donutMock}>
              <View style={styles.donutSegmentActive} />
              <View style={styles.donutInnerCircle}>
                <Text style={styles.donutValueText}>75%</Text>
                <Text style={styles.donutLabelText}>Participation</Text>
              </View>
            </View>
          </View>

          <View style={styles.avgCompletionRow}>
            <Text style={styles.avgCompletionLabel}>Avg. Initiative Completion</Text>
            <Text style={styles.avgCompletionValue}>82%</Text>
          </View>
          <View style={styles.progressBarBg}>
            <View style={[styles.progressBarFill, { width: '82%', backgroundColor: '#2563EB' }]} />
          </View>

          <TouchableOpacity style={styles.viewReportsBtn}>
            <Text style={styles.viewReportsText}>View Detailed Reports</Text>
          </TouchableOpacity>
        </View>

        {/* Class Cards List */}
        
        {/* Class 1 */}
        <View style={styles.classCard}>
          <View style={styles.classCardHeader}>
            <View style={styles.badgeActive}>
              <Text style={styles.badgeTextActive}>Active</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.threeDots}>⋮</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.className}>Grade 9-A</Text>
          
          <View style={styles.teacherInfoRow}>
            <View style={styles.teacherAvatar}>
              <AppIcon name="person" size={18} color="#334155" />
            </View>
            <View>
               <Text style={styles.teacherLabel}>TEACHER ASSIGNED</Text>
               <Text style={styles.teacherName}>Ms. Elena Rivera</Text>
            </View>
          </View>

          <View style={styles.classFooterRow}>
            <View style={styles.studentCountRow}>
              <AppIcon name="group" size={14} color="#64748B" />
              <Text style={styles.studentCountText}>28 Students</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.assignLink}>Assign Teacher</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Class 2 (Top Performer) */}
        <View style={[styles.classCard, styles.classCardHighlight]}>
          <View style={styles.classCardHeader}>
            <View style={styles.badgeTop}>
              <Text style={styles.badgeTextTop}>Top Performer</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.threeDots}>⋮</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.className}>Grade 10-B</Text>
          
          <View style={styles.teacherInfoRow}>
            <View style={styles.teacherAvatar}>
              <AppIcon name="person" size={18} color="#334155" />
            </View>
            <View>
               <Text style={styles.teacherLabel}>TEACHER ASSIGNED</Text>
               <Text style={styles.teacherName}>Mr. David Chen</Text>
            </View>
          </View>

          <View style={styles.classFooterRow}>
            <View style={styles.studentCountRow}>
              <AppIcon name="group" size={14} color="#64748B" />
              <Text style={styles.studentCountText}>32 Students</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.assignLink}>Assign Teacher</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Class 3 (Pending Assign) */}
        <View style={styles.classCard}>
          <View style={styles.classCardHeader}>
            <View style={styles.badgePending}>
              <Text style={styles.badgeTextPending}>Pending Assign.</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.threeDots}>⋮</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.className}>Grade 11-C</Text>
          
          <View style={styles.teacherInfoRow}>
            <View style={styles.teacherAvatarMissing}>
              <AppIcon name="person-off" size={16} color="#EF4444" />
            </View>
            <View>
               <Text style={styles.teacherLabel}>TEACHER ASSIGNED</Text>
               <Text style={styles.teacherNameMissing}>No teacher assigned</Text>
            </View>
          </View>

          <View style={styles.classFooterRow}>
            <View style={styles.studentCountRow}>
              <AppIcon name="group" size={14} color="#64748B" />
              <Text style={styles.studentCountText}>24 Students</Text>
            </View>
            <TouchableOpacity style={styles.assignNowBtn}>
              <Text style={styles.assignNowText}>Assign Now</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Class 4 */}
        <View style={styles.classCard}>
          <View style={styles.classCardHeader}>
            <View style={styles.badgeActive}>
              <Text style={styles.badgeTextActive}>Active</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.threeDots}>⋮</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.className}>Grade 12-A</Text>
          
          <View style={styles.teacherInfoRow}>
            <View style={styles.teacherAvatar}>
              <AppIcon name="person" size={18} color="#334155" />
            </View>
            <View>
               <Text style={styles.teacherLabel}>TEACHER ASSIGNED</Text>
               <Text style={styles.teacherName}>Dr. Sarah Mensah</Text>
            </View>
          </View>

          <View style={styles.classFooterRow}>
            <View style={styles.studentCountRow}>
              <AppIcon name="group" size={14} color="#64748B" />
              <Text style={styles.studentCountText}>19 Students</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.assignLink}>Assign Teacher</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bottomPad} />
      </ScrollView>

      <SchoolBottomNav navigation={navigation} activeRoute="ClassroomManagement" />
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
  headerBrand: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerBrandCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#059669',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  brandName: {
    fontSize: 16,
    fontWeight: '800',
    color: '#004D40',
  },
  iconBtn: {
    padding: 8,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 80, // For bottom nav
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#002B36',
    lineHeight: 34,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 12,
    color: '#475569',
    lineHeight: 18,
    marginBottom: 20,
  },
  actionsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  primaryActionBtn: {
    backgroundColor: '#059669',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 24,
  },
  primaryActionIcon: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '800',
    marginRight: 6,
  },
  primaryActionText: {
    color: Colors.white,
    fontSize: 11,
    fontWeight: '700',
  },
  secondaryActionBtn: {
    backgroundColor: '#F1F5F9',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 24,
  },
  secondaryActionIcon: {
    color: '#1E293B',
    fontSize: 14,
    fontWeight: '800',
    marginRight: 6,
  },
  secondaryActionText: {
    color: '#1E293B',
    fontSize: 11,
    fontWeight: '700',
  },
  analyticsCard: {
    backgroundColor: Colors.white,
    borderRadius: 24,
    padding: 24,
    marginBottom: 24,
    shadowColor: Colors.cardShadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.03,
    shadowRadius: 10,
    elevation: 2,
  },
  analyticsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  analyticsTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#1E293B',
  },
  analyticsIcon: {
    fontSize: 16,
    color: '#3B82F6',
  },
  chartContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  donutMock: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 10,
    borderColor: '#E2E8F0', // light track
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  donutSegmentActive: {
    position: 'absolute',
    top: -10,
    left: -10,
    right: -10,
    height: 70, // visually covering half+ of the donut
    borderTopWidth: 10,
    borderRightWidth: 10,
    borderLeftWidth: 10,
    borderColor: '#059669',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
  },
  donutInnerCircle: {
    alignItems: 'center',
  },
  donutValueText: {
    fontSize: 22,
    fontWeight: '800',
    color: '#002B36',
  },
  donutLabelText: {
    fontSize: 9,
    fontWeight: '600',
    color: '#64748B',
  },
  avgCompletionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  avgCompletionLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: '#475569',
  },
  avgCompletionValue: {
    fontSize: 12,
    fontWeight: '800',
    color: '#1E293B',
  },
  progressBarBg: {
    height: 6,
    backgroundColor: '#F1F5F9',
    borderRadius: 3,
    marginBottom: 20,
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 3,
  },
  viewReportsBtn: {
    alignItems: 'center',
  },
  viewReportsText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#059669',
  },
  classCard: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    shadowColor: Colors.cardShadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.03,
    shadowRadius: 10,
    elevation: 2,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  classCardHighlight: {
    borderColor: '#3B82F6', // Blue border for top performer
  },
  classCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  badgeActive: {
    backgroundColor: '#10B981',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeTextActive: {
    fontSize: 9,
    fontWeight: '800',
    color: Colors.white,
    letterSpacing: 0.5,
  },
  badgeTop: {
    backgroundColor: '#3B82F6',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeTextTop: {
    fontSize: 9,
    fontWeight: '800',
    color: Colors.white,
    letterSpacing: 0.5,
  },
  badgePending: {
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeTextPending: {
    fontSize: 9,
    fontWeight: '800',
    color: '#64748B',
    letterSpacing: 0.5,
  },
  threeDots: {
    fontSize: 18,
    color: '#94A3B8',
    fontWeight: '900',
  },
  className: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1E293B',
    marginBottom: 16,
  },
  teacherInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  teacherAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#E2E8F0',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  teacherAvatarEmoji: {
    fontSize: 20,
  },
  teacherAvatarMissing: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  missingIcon: {
    fontSize: 14,
    color: '#94A3B8',
  },
  teacherLabel: {
    fontSize: 8,
    fontWeight: '800',
    color: '#64748B',
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  teacherName: {
    fontSize: 13,
    fontWeight: '800',
    color: '#1E293B',
  },
  teacherNameMissing: {
    fontSize: 13,
    fontWeight: '600',
    fontStyle: 'italic',
    color: '#94A3B8',
  },
  classFooterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  studentCountRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  studentCountIcon: {
    fontSize: 14,
    marginRight: 6,
  },
  studentCountText: {
    fontSize: 11,
    color: '#475569',
    fontWeight: '600',
  },
  assignLink: {
    fontSize: 12,
    fontWeight: '700',
    color: '#3B82F6', // Blue link
  },
  assignNowBtn: {
    backgroundColor: '#059669',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
  },
  assignNowText: {
    color: Colors.white,
    fontSize: 11,
    fontWeight: '700',
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
    backgroundColor: '#10B981', // green background for active icon
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
    color: Colors.white,
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
    color: '#004D40', // dark green label
    marginLeft: 6,
  },
});
