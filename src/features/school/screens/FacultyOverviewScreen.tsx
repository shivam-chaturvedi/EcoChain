import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppIcon from '../../../components/AppIcon';
import SchoolScreenHeader from '../../../components/SchoolScreenHeader';
import SchoolBottomNav, { BOTTOM_NAV_HEIGHT } from '../../../components/SchoolBottomNav';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import { Colors } from '../../../constants';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'FacultyOverview'>;
};

type Teacher = {
  name: string;
  subjects: string;
  level: number;
  engagement: number;
  classes: number;
  approvals: number;
  students: number;
  footerType: 'students' | 'alert' | 'topPerformer' | 'login';
  footerValue?: string;
};

const TEACHERS: Teacher[] = [
  {
    name: 'Dr. Sarah Jenkins',
    subjects: 'Advanced Ecology • Environmental Law',
    level: 10, engagement: 94, classes: 4, approvals: 42, students: 186,
    footerType: 'topPerformer',
  },
  {
    name: 'Markus Aurelius',
    subjects: 'Sustainable Design • Urban Planning',
    level: 8, engagement: 78, classes: 2, approvals: 15, students: 112,
    footerType: 'alert', footerValue: '3 Approvals Pending',
  },
  {
    name: 'Elena Rodriguez',
    subjects: 'Circular Economics • Ethics',
    level: 15, engagement: 98, classes: 5, approvals: 82, students: 245,
    footerType: 'topPerformer',
  },
  {
    name: 'James Wilson',
    subjects: 'Hydrology • Water Management',
    level: 5, engagement: 64, classes: 2, approvals: 0, students: 65,
    footerType: 'login', footerValue: 'Recent Login: 2h ago',
  },
];

export default function FacultyOverviewScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />

      <SchoolScreenHeader navigation={navigation} showNotifications />

      <ScrollView
        contentContainerStyle={[styles.scrollContent, { paddingBottom: BOTTOM_NAV_HEIGHT + 20 }]}
        showsVerticalScrollIndicator={false}>

        <Text style={styles.title}>Faculty Overview</Text>
        <Text style={styles.subtitle}>
          School Coordinator Portal • Managing 128 active faculty members.
        </Text>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <AppIcon name="search" size={18} color="#94A3B8" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search by name, class, or status..."
            placeholderTextColor="#94A3B8"
          />
        </View>

        {/* Summary Cards */}
        <View style={styles.summaryCard}>
          <View style={styles.summaryTopRow}>
            <View style={[styles.summaryIconCircle, { backgroundColor: '#FEE2E2' }]}>
              <AppIcon name="pending-actions" size={16} color="#DC2626" />
            </View>
            <Text style={styles.summaryLabel}>APPROVALS PENDING</Text>
          </View>
          <Text style={styles.summaryValue}>14</Text>
          <View style={styles.progressBarBg}>
            <View style={[styles.progressBarFill, { width: '40%' }]} />
          </View>
        </View>

        <View style={styles.summaryCard}>
          <View style={styles.summaryTopRow}>
            <View style={[styles.summaryIconCircle, { backgroundColor: '#D1FAE5' }]}>
              <AppIcon name="trending-up" size={16} color="#059669" />
            </View>
            <Text style={styles.summaryLabel}>AVERAGE ENGAGEMENT</Text>
          </View>
          <Text style={styles.summaryValue}>
            82 <Text style={styles.summaryValueSub}>/100</Text>
          </Text>
          <View style={styles.segmentsRow}>
            <View style={styles.segmentActive} />
            <View style={styles.segmentActive} />
            <View style={styles.segmentActive} />
            <View style={styles.segmentActive} />
            <View style={styles.segmentInactive} />
          </View>
        </View>

        <View style={styles.summaryCard}>
          <View style={styles.summaryTopRow}>
            <View style={[styles.summaryIconCircle, { backgroundColor: '#E0F2FE' }]}>
              <AppIcon name="group" size={16} color="#0284C7" />
            </View>
            <Text style={styles.summaryLabel}>TOTAL STUDENTS</Text>
          </View>
          <Text style={styles.summaryValue}>3,240</Text>
          <Text style={styles.summaryChangeText}>+12% from last semester</Text>
        </View>

        {/* Teacher Cards */}
        {TEACHERS.map(t => (
          <View key={t.name} style={styles.teacherCard}>
            <View style={styles.teacherHeaderRow}>
              <View style={styles.avatarLarge}>
                <AppIcon name="person" size={32} color="#64748B" />
              </View>
              <View style={styles.levelBadge}>
                <Text style={styles.levelBadgeText}>LEVEL {t.level}</Text>
              </View>
            </View>

            <View style={styles.nameEngRow}>
              <Text style={styles.teacherName}>{t.name}</Text>
              <View style={styles.engScoreBox}>
                <Text style={styles.engScoreValue}>{t.engagement}%</Text>
                <Text style={styles.engScoreLabel}>ENGAGEMENT</Text>
              </View>
            </View>

            <Text style={styles.subjectsText}>{t.subjects}</Text>

            <View style={styles.statsRow}>
              <View style={styles.statPill}>
                <Text style={styles.statPillValue}>{t.classes}</Text>
                <Text style={styles.statPillLabel}>CLASSES</Text>
              </View>
              <View style={styles.statPill}>
                <Text style={styles.statPillValue}>{t.approvals}</Text>
                <Text style={styles.statPillLabel}>APPROVALS</Text>
              </View>
              <View style={styles.statPill}>
                <Text style={styles.statPillValue}>{t.students}</Text>
                <Text style={styles.statPillLabel}>STUDENTS</Text>
              </View>
            </View>

            <View style={styles.teacherFooterRow}>
              {t.footerType === 'topPerformer' && (
                <View style={styles.badgeRow}>
                  <AppIcon name="star" size={14} color="#D97706" />
                  <Text style={styles.performerText}> Top Performer</Text>
                </View>
              )}
              {t.footerType === 'alert' && (
                <View style={styles.badgeRow}>
                  <AppIcon name="warning" size={14} color="#DC2626" />
                  <Text style={styles.alertText}> {t.footerValue}</Text>
                </View>
              )}
              {t.footerType === 'login' && (
                <View style={styles.badgeRow}>
                  <AppIcon name="access-time" size={14} color="#64748B" />
                  <Text style={styles.loginText}> {t.footerValue}</Text>
                </View>
              )}
              {t.footerType === 'students' && <View />}
              <TouchableOpacity
                style={styles.viewProfileBtn}
                onPress={() => navigation.navigate('TeacherDetailProfile')}>
                <Text style={styles.viewProfileBtnText}>View Profile</Text>
                <AppIcon name="chevron-right" size={16} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        ))}

        <TouchableOpacity style={styles.loadMoreBtn}>
          <Text style={styles.loadMoreText}>Load More Teachers (124 remaining)</Text>
        </TouchableOpacity>
      </ScrollView>

      <SchoolBottomNav navigation={navigation} activeRoute="AcademyOverview" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F8FAFC' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  backBtn: { padding: 4 },
  headerBrand: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  headerLogoBg: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#059669',
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandName: { fontSize: 18, fontWeight: '700', color: '#004D40' },
  headerIconBtn: { padding: 4 },
  scrollContent: { paddingHorizontal: 20, paddingTop: 20 },
  title: { fontSize: 28, fontWeight: '800', color: '#002B36', marginBottom: 8 },
  subtitle: { fontSize: 13, color: '#475569', lineHeight: 20, marginBottom: 20 },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 24,
    paddingHorizontal: 16,
    height: 48,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    gap: 8,
  },
  searchInput: { flex: 1, fontSize: 14, color: '#1E293B', height: '100%' },
  summaryCard: {
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
  summaryTopRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  summaryIconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#E8F5ED',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  summaryLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: '#64748B',
    letterSpacing: 1,
  },
  summaryValue: { fontSize: 26, fontWeight: '800', color: '#002B36', marginBottom: 12 },
  summaryValueSub: { fontSize: 14, fontWeight: '600', color: '#94A3B8' },
  progressBarBg: { height: 4, backgroundColor: '#E2E8F0', borderRadius: 2 },
  progressBarFill: { height: '100%', backgroundColor: '#059669', borderRadius: 2 },
  segmentsRow: { flexDirection: 'row', gap: 4, height: 4 },
  segmentActive: { flex: 1, backgroundColor: '#059669', borderRadius: 2 },
  segmentInactive: { flex: 1, backgroundColor: '#E2E8F0', borderRadius: 2 },
  summaryChangeText: { fontSize: 11, fontWeight: '600', color: '#64748B' },
  teacherCard: {
    backgroundColor: Colors.white,
    borderRadius: 24,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  teacherHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  avatarLarge: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  levelBadge: {
    backgroundColor: '#059669',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  levelBadgeText: {
    fontSize: 9,
    fontWeight: '800',
    color: Colors.white,
    letterSpacing: 0.5,
  },
  nameEngRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  teacherName: { fontSize: 17, fontWeight: '800', color: '#1E293B', flex: 1 },
  engScoreBox: { alignItems: 'flex-end' },
  engScoreValue: { fontSize: 15, fontWeight: '800', color: '#0F766E' },
  engScoreLabel: {
    fontSize: 8,
    fontWeight: '700',
    color: '#94A3B8',
    letterSpacing: 0.5,
  },
  subjectsText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#0F766E',
    marginBottom: 20,
  },
  statsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  statPill: {
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 16,
    flex: 1,
    marginHorizontal: 4,
  },
  statPillValue: { fontSize: 16, fontWeight: '800', color: '#1E293B', marginBottom: 2 },
  statPillLabel: {
    fontSize: 8,
    fontWeight: '700',
    color: '#64748B',
    letterSpacing: 0.5,
  },
  teacherFooterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  badgeRow: { flexDirection: 'row', alignItems: 'center' },
  performerText: { fontSize: 11, fontWeight: '700', color: '#059669' },
  alertText: { fontSize: 11, fontWeight: '700', color: '#DC2626' },
  loginText: { fontSize: 10, fontWeight: '600', color: '#64748B' },
  viewProfileBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#004D40',
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 20,
    gap: 2,
  },
  viewProfileBtnText: { color: Colors.white, fontSize: 12, fontWeight: '700' },
  loadMoreBtn: {
    backgroundColor: '#E2E8F0',
    paddingVertical: 16,
    borderRadius: 24,
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 16,
  },
  loadMoreText: { fontSize: 13, fontWeight: '700', color: '#1E293B' },
});
