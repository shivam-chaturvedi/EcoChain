import React, { useState } from 'react';
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
import SchoolBottomNav from '../../../components/SchoolBottomNav';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import { Colors } from '../../../constants';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'AcademyOverview'>;
};

type ChartType = 'Line' | 'Bar' | 'Pie';

const CHART_DATA = [0.4, 0.7, 0.5, 0.9, 0.6, 0.8, 0.45, 0.75, 0.55, 0.85];
const PIE_SEGMENTS = [
  { label: 'Activities', value: 58, color: '#059669' },
  { label: 'Credits', value: 28, color: '#2563EB' },
  { label: 'Other', value: 14, color: '#E2E8F0' },
];

export default function AcademyOverviewScreen({ navigation }: Props) {
  const [activeChart, setActiveChart] = useState<ChartType>('Bar');

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.avatarCircle}>
            <AppIcon name="school" size={18} color="#fff" />
          </View>
          <View>
            <Text style={styles.brandName}>EcoChain</Text>
            <Text style={styles.academyName}>GREENWOOD ACADEMY</Text>
          </View>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity
            style={styles.iconBtn}
            onPress={() => navigation.navigate('NotificationCenter')}>
            <AppIcon name="notifications" size={22} color="#334155" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconBtn}
            onPress={() => navigation.navigate('SchoolSettingsProfile')}>
            <AppIcon name="settings" size={22} color="#334155" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>

        <Text style={styles.title}>Academy{'\n'}Overview</Text>
        <Text style={styles.subtitle}>
          Greenwood is leading the district in sustainability performance this quarter.
        </Text>

        {/* Total Hours */}
        <View style={styles.metricCard}>
          <View style={styles.metricHeader}>
            <Text style={styles.metricLabel}>TOTAL HOURS</Text>
            <AppIcon name="timer" size={18} color="#64748B" />
          </View>
          <View style={styles.metricRow}>
            <View style={styles.progressCircleContainer}>
              <View style={styles.progressCircle}>
                <Text style={styles.progressCircleText}>76%</Text>
              </View>
            </View>
            <View>
              <Text style={styles.metricValue}>12,840 hrs</Text>
              <Text style={styles.metricSubtext}>↑ +8% vs last month</Text>
            </View>
          </View>
        </View>

        {/* Total Activities */}
        <View style={styles.metricCard}>
          <View style={styles.metricHeader}>
            <Text style={styles.metricLabel}>TOTAL ACTIVITIES</Text>
            <AppIcon name="eco" size={18} color="#64748B" />
          </View>
          <Text style={styles.metricValue}>58,420</Text>
          <View style={styles.miniBarChart}>
            {CHART_DATA.map((h, i) => (
              <View
                key={i}
                style={[
                  styles.miniBar,
                  { height: h * 36, backgroundColor: i % 2 === 0 ? '#059669' : '#86EFAC' },
                ]}
              />
            ))}
          </View>
        </View>

        {/* Active Users */}
        <View style={styles.metricCard}>
          <View style={styles.metricHeader}>
            <Text style={styles.metricLabel}>ACTIVE USERS</Text>
            <AppIcon name="group" size={18} color="#64748B" />
          </View>
          <View style={styles.userRow}>
            <Text style={styles.userText}>840 Students</Text>
            <View style={styles.userBarTrack}>
              <View style={[styles.userBarFill, { width: '80%', backgroundColor: '#059669' }]} />
            </View>
          </View>
          <View style={[styles.userRow, { marginBottom: 0 }]}>
            <Text style={styles.userText}>42 Teachers</Text>
            <View style={styles.userBarTrack}>
              <View style={[styles.userBarFill, { width: '40%', backgroundColor: '#2563EB' }]} />
            </View>
          </View>
        </View>

        {/* Engagement Overview */}
        <View style={styles.engagementCard}>
          <Text style={styles.cardTitle}>Engagement Overview</Text>
          <Text style={styles.cardSubtitle}>Comparison of total activities and earned eco-credits</Text>

          <View style={styles.segmentedControl}>
            {(['Line', 'Bar', 'Pie'] as ChartType[]).map(type => (
              <TouchableOpacity
                key={type}
                style={[styles.segment, activeChart === type && styles.segmentActive]}
                onPress={() => setActiveChart(type)}
                activeOpacity={0.7}>
                <Text style={[styles.segmentText, activeChart === type && styles.segmentTextActive]}>
                  {type}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.chartArea}>
            <View style={styles.chartLegendRow}>
              <View style={styles.legendItem}>
                <View style={[styles.legendDot, { backgroundColor: '#059669' }]} />
                <Text style={styles.legendText}>Activities</Text>
              </View>
              <View style={styles.legendItem}>
                <View style={[styles.legendDot, { backgroundColor: '#2563EB' }]} />
                <Text style={styles.legendText}>Credits</Text>
              </View>
            </View>

            {activeChart === 'Bar' && (
              <View style={styles.barChartContainer}>
                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month, i) => {
                  const acts = [0.5, 0.7, 0.55, 0.9, 0.65, 0.8][i];
                  const creds = [0.3, 0.5, 0.4, 0.6, 0.45, 0.7][i];
                  return (
                    <View key={month} style={styles.barGroup}>
                      <View style={styles.barPair}>
                        <View style={[styles.chartBar, { height: acts * 80, backgroundColor: '#059669' }]} />
                        <View style={[styles.chartBar, { height: creds * 80, backgroundColor: '#2563EB' }]} />
                      </View>
                      <Text style={styles.barLabel}>{month}</Text>
                    </View>
                  );
                })}
              </View>
            )}

            {activeChart === 'Line' && (
              <View style={styles.lineChartContainer}>
                {[0.5, 0.7, 0.55, 0.9, 0.65, 0.8, 0.6, 0.75].map((v, i) => (
                  <View key={i} style={styles.linePointWrapper}>
                    <View
                      style={[
                        styles.linePoint,
                        {
                          marginTop: (1 - v) * 72,
                          backgroundColor: '#059669',
                        },
                      ]}
                    />
                    {i < 7 && <View style={[styles.lineConnector, { top: (1 - v) * 72 + 5 }]} />}
                  </View>
                ))}
              </View>
            )}

            {activeChart === 'Pie' && (
              <View style={styles.pieContainer}>
                {PIE_SEGMENTS.map((seg, i) => (
                  <View key={i} style={styles.pieRow}>
                    <View style={styles.pieBarTrack}>
                      <View
                        style={[
                          styles.pieBarFill,
                          { width: `${seg.value}%`, backgroundColor: seg.color },
                        ]}
                      />
                    </View>
                    <Text style={styles.pieLabel}>{seg.label}</Text>
                    <Text style={styles.pieValue}>{seg.value}%</Text>
                  </View>
                ))}
              </View>
            )}
          </View>
        </View>

        {/* Administrator Hub */}
        <Text style={styles.sectionLabel}>ADMINISTRATOR HUB</Text>

        <TouchableOpacity
          style={styles.hubBtn}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('FacultyOverview')}>
          <View style={[styles.hubBtnIconCircle, { backgroundColor: '#E0F2FE' }]}>
            <AppIcon name="people" size={20} color="#0369A1" />
          </View>
          <Text style={styles.hubBtnText}>Faculty Overview</Text>
          <AppIcon name="chevron-right" size={20} color="#94A3B8" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.hubBtn}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('StudentsOverview')}>
          <View style={[styles.hubBtnIconCircle, { backgroundColor: '#DBEAFE' }]}>
            <AppIcon name="school" size={20} color="#1D4ED8" />
          </View>
          <Text style={styles.hubBtnText}>Student Overview</Text>
          <AppIcon name="chevron-right" size={20} color="#94A3B8" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.hubBtn}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('ClassroomManagement')}>
          <View style={[styles.hubBtnIconCircle, { backgroundColor: '#F3F4F6' }]}>
            <AppIcon name="class" size={20} color="#374151" />
          </View>
          <Text style={styles.hubBtnText}>Manage Students & Classes</Text>
          <AppIcon name="chevron-right" size={20} color="#94A3B8" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.hubBtn}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('SchoolCodeManagement')}>
          <View style={[styles.hubBtnIconCircle, { backgroundColor: '#D1FAE5' }]}>
            <AppIcon name="vpn-key" size={20} color="#065F46" />
          </View>
          <Text style={styles.hubBtnText}>School Access Code Management</Text>
          <AppIcon name="chevron-right" size={20} color="#94A3B8" />
        </TouchableOpacity>

        {/* Live Activity Stream */}
        <View style={styles.streamHeader}>
          <Text style={styles.streamTitle}>Live Activity Stream</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SchoolReviewQueue')}>
            <Text style={styles.streamLink}>View All History</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.streamCard}>
          {[
            { icon: 'recycling', color: '#059669', bg: '#D1FAE5', title: '8A submitted 42 recycling activities', sub: 'Initiative: Greenwood Zero-Waste Drive', tag: '+1,240 XP', tagColor: '#059669' },
            { icon: 'verified', color: '#0F766E', bg: '#CCFBF1', title: 'Mr. Henderson validated 15 tasks', sub: 'Class: 10B Environmental Science', tag: 'Verified', tagColor: '#0F766E' },
            { icon: 'star', color: '#2563EB', bg: '#DBEAFE', title: 'Maya Singh reached Level 12', sub: 'Achievement unlocked: Solar Pioneer', tag: 'Level Up', tagColor: '#2563EB' },
          ].map((item, i, arr) => (
            <View key={i} style={[styles.streamItem, i === arr.length - 1 && { borderBottomWidth: 0 }]}>
              <View style={[styles.streamAvatar, { backgroundColor: item.bg }]}>
                <AppIcon name={item.icon} size={18} color={item.color} />
              </View>
              <View style={styles.streamContent}>
                <Text style={styles.streamItemTitle}>{item.title}</Text>
                <Text style={styles.streamItemSub}>{item.sub}</Text>
              </View>
              <View style={styles.streamRight}>
                <Text style={[styles.streamXP, { color: item.tagColor }]}>{item.tag}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.bottomPad} />
      </ScrollView>

      {/* FAB */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('SchoolPendingSubmissions')}>
        <AppIcon name="add" size={28} color="#fff" />
      </TouchableOpacity>

      <SchoolBottomNav navigation={navigation} activeRoute="AcademyOverview" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F8FAFC' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#F8FAFC',
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center' },
  avatarCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#065F46',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  brandName: { fontSize: 14, fontWeight: '700', color: '#004D40' },
  academyName: { fontSize: 8, fontWeight: '800', color: '#64748B', letterSpacing: 0.5 },
  headerRight: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  iconBtn: { padding: 4 },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 90,
  },
  title: { fontSize: 32, fontWeight: '800', color: '#002B36', lineHeight: 38, marginBottom: 8 },
  subtitle: { fontSize: 13, color: '#475569', lineHeight: 20, marginBottom: 24 },
  metricCard: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  metricHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  metricLabel: { fontSize: 10, fontWeight: '800', color: '#64748B', letterSpacing: 0.5 },
  metricRow: { flexDirection: 'row', alignItems: 'center' },
  progressCircleContainer: { marginRight: 16 },
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
  progressCircleText: { fontSize: 12, fontWeight: '700', color: '#1E293B' },
  metricValue: { fontSize: 24, fontWeight: '800', color: '#002B36' },
  metricSubtext: { fontSize: 12, fontWeight: '600', color: '#059669', marginTop: 4 },
  miniBarChart: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 4,
    marginTop: 12,
    height: 40,
  },
  miniBar: { flex: 1, borderRadius: 3, minHeight: 4 },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  userText: { fontSize: 13, fontWeight: '600', color: '#334155', width: 90 },
  userBarTrack: { flex: 1, height: 6, backgroundColor: '#E2E8F0', borderRadius: 3, overflow: 'hidden' },
  userBarFill: { height: '100%', borderRadius: 3 },
  engagementCard: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 20,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  cardTitle: { fontSize: 16, fontWeight: '800', color: '#002B36', marginBottom: 4 },
  cardSubtitle: { fontSize: 11, color: '#64748B', marginBottom: 16 },
  segmentedControl: {
    flexDirection: 'row',
    backgroundColor: '#F1F5F9',
    borderRadius: 10,
    padding: 4,
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  segment: { paddingHorizontal: 18, paddingVertical: 7, borderRadius: 8 },
  segmentActive: {
    backgroundColor: Colors.white,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 1,
  },
  segmentText: { fontSize: 12, fontWeight: '600', color: '#64748B' },
  segmentTextActive: { color: '#002B36' },
  chartArea: {
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    padding: 16,
    minHeight: 120,
  },
  chartLegendRow: { flexDirection: 'row', gap: 16, marginBottom: 12 },
  legendItem: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  legendDot: { width: 8, height: 8, borderRadius: 4 },
  legendText: { fontSize: 10, fontWeight: '600', color: '#64748B' },
  barChartContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 90,
  },
  barGroup: { alignItems: 'center', flex: 1 },
  barPair: { flexDirection: 'row', alignItems: 'flex-end', gap: 3 },
  chartBar: { width: 8, borderRadius: 4, minHeight: 4 },
  barLabel: { fontSize: 9, color: '#94A3B8', marginTop: 4 },
  lineChartContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    height: 90,
    position: 'relative',
  },
  linePointWrapper: { flex: 1, alignItems: 'center', height: 90 },
  linePoint: { width: 8, height: 8, borderRadius: 4 },
  lineConnector: {
    position: 'absolute',
    right: 0,
    width: '100%',
    height: 2,
    backgroundColor: '#059669',
    opacity: 0.4,
  },
  pieContainer: { gap: 12 },
  pieRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  pieBarTrack: { flex: 1, height: 12, backgroundColor: '#E2E8F0', borderRadius: 6, overflow: 'hidden' },
  pieBarFill: { height: '100%', borderRadius: 6 },
  pieLabel: { fontSize: 11, fontWeight: '600', color: '#334155', width: 60 },
  pieValue: { fontSize: 12, fontWeight: '700', color: '#002B36', width: 32, textAlign: 'right' },
  sectionLabel: {
    fontSize: 10, fontWeight: '800', color: '#94A3B8', letterSpacing: 1, marginBottom: 12,
  },
  hubBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: 16,
    borderRadius: 16,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 1,
  },
  hubBtnIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  hubBtnText: { flex: 1, fontSize: 14, fontWeight: '600', color: '#1E293B' },
  streamHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 20,
    marginBottom: 16,
  },
  streamTitle: { fontSize: 16, fontWeight: '800', color: '#002B36' },
  streamLink: { fontSize: 12, fontWeight: '700', color: '#0F766E' },
  streamCard: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  streamItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  streamAvatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  streamContent: { flex: 1, marginRight: 8 },
  streamItemTitle: { fontSize: 13, fontWeight: '700', color: '#1E293B', marginBottom: 3 },
  streamItemSub: { fontSize: 11, color: '#64748B', lineHeight: 16 },
  streamRight: { alignItems: 'flex-end', justifyContent: 'center' },
  streamXP: { fontSize: 12, fontWeight: '800' },
  bottomPad: { height: 20 },
  fab: {
    position: 'absolute',
    right: 24,
    bottom: 90,
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#059669',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#059669',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 5,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 72,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 8,
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
  },
  navItem: { alignItems: 'center', justifyContent: 'center', flex: 1, paddingVertical: 4 },
  navItemActiveBg: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D1FAE5',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  navLabel: { fontSize: 10, fontWeight: '600', color: '#64748B', marginTop: 3 },
});
