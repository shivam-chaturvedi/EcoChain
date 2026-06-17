import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import { Colors } from '../../../constants';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'AcademyOverview'>;
};

export default function AcademyOverviewScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.avatarCircle}>
            {/* Mock avatar */}
            <Text style={styles.avatarText}></Text>
          </View>
          <View>
            <Text style={styles.brandName}>ChonX</Text>
            <Text style={styles.academyName}>GREENWOOD ACADEMY</Text>
          </View>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconBtn}>
            <Text style={styles.headerIcon}>🔔</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <Text style={styles.headerIcon}>⚙️</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>

        {/* Title Section */}
        <Text style={styles.title}>Academy{'\n'}Overview</Text>
        <Text style={styles.subtitle}>
          Greenwood is leading the district in sustainability performance this quarter.
        </Text>

        {/* Metrics Cards */}
        {/* Total Hours */}
        <View style={styles.metricCard}>
          <View style={styles.metricHeader}>
            <Text style={styles.metricLabel}>TOTAL HOURS</Text>
            <Text style={styles.metricIcon}>⏱️</Text>
          </View>
          <View style={styles.metricRow}>
            <View style={styles.progressCircleContainer}>
              {/* Mock Circle */}
              <View style={styles.progressCircle}>
                <Text style={styles.progressCircleText}>76%</Text>
              </View>
            </View>
            <View>
              <Text style={styles.metricValue}>12,840 hrs</Text>
              <Text style={styles.metricSubtext}>↑ +8% subtext</Text>
            </View>
          </View>
        </View>

        {/* Total Activities */}
        <View style={styles.metricCard}>
          <View style={styles.metricHeader}>
            <Text style={styles.metricLabel}>TOTAL ACTIVITIES</Text>
            <Text style={styles.metricIcon}>🛡️</Text>
          </View>
          <Text style={styles.metricValue}>58,420</Text>
          {/* Mock Chart line */}
          <View style={styles.mockLineChart}>
            <Text style={styles.mockChartWave}>〰️〰️〰️</Text>
          </View>
        </View>

        {/* Active Users */}
        <View style={styles.metricCard}>
          <View style={styles.metricHeader}>
            <Text style={styles.metricLabel}>ACTIVE USERS</Text>
            <Text style={styles.metricIcon}>👥</Text>
          </View>
          <View style={styles.userRow}>
            <Text style={styles.userText}>840 Students</Text>
            <View style={styles.userBarTrack}>
              <View style={[styles.userBarFill, { width: '80%', backgroundColor: '#059669' }]} />
            </View>
          </View>
          <View style={styles.userRow}>
            <Text style={styles.userText}>42 Teachers</Text>
            <View style={styles.userBarTrack}>
              <View style={[styles.userBarFill, { width: '40%', backgroundColor: '#2563EB' }]} />
            </View>
          </View>
        </View>

        {/* Engagement Overview Card */}
        <View style={styles.engagementCard}>
          <Text style={styles.cardTitle}>Engagement Overview</Text>
          <Text style={styles.cardSubtitle}>
            Comparison of total activities and earned eco-credits
          </Text>
          
          <View style={styles.segmentedControl}>
            <View style={[styles.segment, styles.segmentActive]}>
              <Text style={[styles.segmentText, styles.segmentTextActive]}>Line</Text>
            </View>
            <View style={styles.segment}>
              <Text style={styles.segmentText}>Bar</Text>
            </View>
            <View style={styles.segment}>
              <Text style={styles.segmentText}>Pie</Text>
            </View>
          </View>

          {/* Mock Chart Graphic */}
          <View style={styles.mockChartGraphic}>
            <Text style={styles.mockChartLegend}>● ACTIVITIES   ● CREDITS</Text>
            <View style={styles.mockChartBars}>
               {/* Just a visual representation */}
               <View style={styles.mockBar} />
               <View style={styles.mockBarTall} />
               <View style={styles.mockBar} />
               <View style={styles.mockBarTall} />
               <View style={styles.mockBar} />
            </View>
          </View>
        </View>

        {/* Administrator Hub */}
        <Text style={styles.sectionLabel}>ADMINISTRATOR HUB</Text>
        
        <TouchableOpacity style={styles.hubBtn} onPress={() => navigation.navigate('FacultyOverview')}>
          <View style={styles.hubBtnIconCircle}>
            <Text style={styles.hubBtnIcon}>📁</Text>
          </View>
          <Text style={styles.hubBtnText}>Faculty Overview</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.hubBtn} onPress={() => navigation.navigate('StudentsOverview')}>
          <View style={[styles.hubBtnIconCircle, { backgroundColor: '#DBEAFE' }]}>
            <Text style={styles.hubBtnIcon}>📈</Text>
          </View>
          <Text style={styles.hubBtnText}>Student Overview</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.hubBtn} onPress={() => navigation.navigate('ClassroomManagement')}>
          <View style={[styles.hubBtnIconCircle, { backgroundColor: '#F3F4F6' }]}>
            <Text style={styles.hubBtnIcon}>🧑‍🤝‍🧑</Text>
          </View>
          <Text style={styles.hubBtnText}>Manage Students & Classes</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.hubBtn} onPress={() => navigation.navigate('SchoolCodeManagement')}>
          <View style={[styles.hubBtnIconCircle, { backgroundColor: '#D1FAE5' }]}>
            <Text style={styles.hubBtnIcon}>🔑</Text>
          </View>
          <Text style={styles.hubBtnText}>School Access Code Management</Text>
        </TouchableOpacity>

        {/* Live Activity Stream */}
        <View style={styles.streamHeader}>
          <Text style={styles.streamTitle}>Live Activity Stream</Text>
          <TouchableOpacity>
            <Text style={styles.streamLink}>View All History</Text>
          </TouchableOpacity>
        </View>

        {/* Stream Items */}
        <View style={styles.streamCard}>
          <View style={styles.streamItem}>
            <View style={styles.streamAvatar}>
              <Text style={styles.streamAvatarEmoji}>♻️</Text>
            </View>
            <View style={styles.streamContent}>
              <Text style={styles.streamItemTitle}>8A submitted 42 recycling activities</Text>
              <Text style={styles.streamItemSub}>Initiative: Greenwood Zero-Waste Drive</Text>
            </View>
            <View style={styles.streamRight}>
              <Text style={styles.streamXP}>+1,240 XP</Text>
              <Text style={styles.streamTime}>7 mins ago</Text>
            </View>
          </View>

          <View style={styles.streamItem}>
            <View style={styles.streamAvatar}>
              <Text style={styles.streamAvatarEmoji}>👨‍🏫</Text>
            </View>
            <View style={styles.streamContent}>
              <Text style={styles.streamItemTitle}>Mr. Henderson validated 15 tasks</Text>
              <Text style={styles.streamItemSub}>Class: 10B Environmental Science</Text>
            </View>
            <View style={styles.streamRight}>
              <Text style={[styles.streamXP, { color: '#0F766E' }]}>Verified</Text>
              <Text style={styles.streamTime}>14 mins ago</Text>
            </View>
          </View>

          <View style={[styles.streamItem, { borderBottomWidth: 0 }]}>
            <View style={styles.streamAvatar}>
              <Text style={styles.streamAvatarEmoji}>👩🏽</Text>
            </View>
            <View style={styles.streamContent}>
              <Text style={styles.streamItemTitle}>Maya Singh reached Level 12</Text>
              <Text style={styles.streamItemSub}>Achievement unlocked: Solar Pioneer</Text>
            </View>
            <View style={styles.streamRight}>
              <Text style={[styles.streamXP, { color: '#2563EB' }]}>Level Up</Text>
              <Text style={styles.streamTime}>45 mins ago</Text>
            </View>
          </View>
        </View>

        <View style={styles.bottomPad} />
      </ScrollView>

      {/* FAB */}
      <TouchableOpacity style={styles.fab}>
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('AcademyOverview')}>
          <View style={styles.navItemActiveBg}>
            <Text style={styles.navIcon}>📊</Text>
            <Text style={styles.navLabelActive}>Dashboard</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('SchoolCodeManagement')}>
          <Text style={styles.navIcon}>🛡️</Text>
          <Text style={styles.navLabel}>Initiatives</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('SchoolAnalytics')}>
          <Text style={styles.navIcon}>📈</Text>
          <Text style={styles.navLabel}>Analytics</Text>
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
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#002B20',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: {
    fontSize: 16,
  },
  brandName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#004D40',
  },
  academyName: {
    fontSize: 8,
    fontWeight: '800',
    color: '#64748B',
    letterSpacing: 0.5,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
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
    paddingBottom: 80, // for bottom nav and fab
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#002B36',
    lineHeight: 38,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 13,
    color: '#475569',
    lineHeight: 20,
    marginBottom: 24,
  },
  metricCard: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    shadowColor: Colors.cardShadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 10,
    elevation: 2,
  },
  metricHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  metricLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: '#64748B',
    letterSpacing: 0.5,
  },
  metricIcon: {
    fontSize: 16,
  },
  metricRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressCircleContainer: {
    marginRight: 16,
  },
  progressCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 5,
    borderColor: '#059669',
    borderRightColor: '#E2E8F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressCircleText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1E293B',
  },
  metricValue: {
    fontSize: 24,
    fontWeight: '800',
    color: '#002B36',
  },
  metricSubtext: {
    fontSize: 12,
    fontWeight: '600',
    color: '#059669',
    marginTop: 4,
  },
  mockLineChart: {
    marginTop: 10,
    alignItems: 'center',
  },
  mockChartWave: {
    fontSize: 24,
    color: '#059669',
    letterSpacing: -5,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  userText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#334155',
    width: 90,
  },
  userBarTrack: {
    flex: 1,
    height: 6,
    backgroundColor: '#E2E8F0',
    borderRadius: 3,
    overflow: 'hidden',
  },
  userBarFill: {
    height: '100%',
    borderRadius: 3,
  },
  engagementCard: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 20,
    marginBottom: 24,
    shadowColor: Colors.cardShadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 10,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#002B36',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 11,
    color: '#64748B',
    marginBottom: 16,
  },
  segmentedControl: {
    flexDirection: 'row',
    backgroundColor: '#F1F5F9',
    borderRadius: 8,
    padding: 4,
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  segment: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 6,
  },
  segmentActive: {
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  segmentText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#64748B',
  },
  segmentTextActive: {
    color: '#002B36',
  },
  mockChartGraphic: {
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    padding: 16,
    height: 120,
    justifyContent: 'space-between',
  },
  mockChartLegend: {
    fontSize: 9,
    fontWeight: '700',
    color: '#64748B',
    textAlign: 'center',
    marginBottom: 10,
  },
  mockChartBars: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    height: 60,
  },
  mockBar: {
    width: 8,
    height: '40%',
    backgroundColor: '#CBD5E1',
    borderRadius: 4,
  },
  mockBarTall: {
    width: 8,
    height: '90%',
    backgroundColor: '#059669',
    borderRadius: 4,
  },
  sectionLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: '#94A3B8',
    letterSpacing: 1,
    marginBottom: 12,
  },
  hubBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    shadowColor: Colors.cardShadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.02,
    shadowRadius: 4,
    elevation: 1,
  },
  hubBtnIconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#E0F2FE', // light blue by default
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  hubBtnIcon: {
    fontSize: 16,
  },
  hubBtnText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1E293B',
  },
  streamHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 20,
    marginBottom: 16,
  },
  streamTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#002B36',
  },
  streamLink: {
    fontSize: 12,
    fontWeight: '700',
    color: '#0F766E',
  },
  streamCard: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 16,
    shadowColor: Colors.cardShadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 10,
    elevation: 2,
  },
  streamItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  streamAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  streamAvatarEmoji: {
    fontSize: 20,
  },
  streamContent: {
    flex: 1,
    marginRight: 8,
  },
  streamItemTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 4,
  },
  streamItemSub: {
    fontSize: 11,
    color: '#64748B',
    lineHeight: 16,
  },
  streamRight: {
    alignItems: 'flex-end',
  },
  streamXP: {
    fontSize: 12,
    fontWeight: '800',
    color: '#059669',
    marginBottom: 4,
  },
  streamTime: {
    fontSize: 10,
    color: '#94A3B8',
  },
  bottomPad: {
    height: 60,
  },
  fab: {
    position: 'absolute',
    right: 24,
    bottom: 90,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#059669',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#059669',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 5,
  },
  fabIcon: {
    color: Colors.white,
    fontSize: 28,
    fontWeight: '400',
    marginTop: -2,
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
  },
  navLabel: {
    fontSize: 10,
    fontWeight: '600',
    color: '#64748B',
    marginTop: 4,
  },
  navLabelActive: {
    fontSize: 12,
    fontWeight: '700',
    color: '#064E3B',
    marginLeft: 6,
  },
});
