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
import SchoolBottomNav, { BOTTOM_NAV_HEIGHT } from '../../../components/SchoolBottomNav';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import { Colors } from '../../../constants';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'StudentsOverview'>;
};

type Student = { name: string; id: string; grade: string; activities: number };

const STUDENTS: Student[] = [
  { name: 'Alex Rivera', id: '#STU-9283', grade: 'Grade 11-B', activities: 42 },
  { name: 'Sarah Jenkins', id: '#STU-8472', grade: 'Grade 12-A', activities: 28 },
  { name: 'Marcus Chen', id: '#STU-3321', grade: 'Grade 10-C', activities: 15 },
  { name: 'Elena Vogt', id: '#STU-1104', grade: 'Grade 12-B', activities: 88 },
];

export default function StudentsOverviewScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <AppIcon name="arrow-back" size={22} color="#006D5B" />
          </TouchableOpacity>
          <View style={styles.headerLogoBg}>
            <AppIcon name="eco" size={16} color="#fff" />
          </View>
          <Text style={styles.brandName}>EcoChain</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity
            style={styles.iconBtn}
            onPress={() => navigation.navigate('NotificationCenter')}>
            <AppIcon name="notifications" size={22} color="#334155" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.profileCircle}
            onPress={() => navigation.navigate('SchoolSettingsProfile')}>
            <AppIcon name="person" size={18} color="#334155" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={[styles.scrollContent, { paddingBottom: BOTTOM_NAV_HEIGHT + 20 }]}
        showsVerticalScrollIndicator={false}>

        <Text style={styles.title}>Students Overview</Text>
        <Text style={styles.subtitle}>
          Manage and monitor student engagement in sustainable initiatives across the school.
        </Text>

        {/* Search & Filter */}
        <View style={styles.searchRow}>
          <View style={styles.searchContainer}>
            <AppIcon name="search" size={16} color="#94A3B8" />
            <TextInput
              style={styles.searchInput}
              placeholder="Search by name or class..."
              placeholderTextColor="#94A3B8"
            />
          </View>
          <TouchableOpacity style={styles.filterBtn}>
            <AppIcon name="filter-list" size={16} color="#475569" />
            <Text style={styles.filterText}>Filter</Text>
          </TouchableOpacity>
        </View>

        {/* Summary Cards */}
        <View style={styles.summaryCard}>
          <Text style={styles.summaryLabel}>TOTAL STUDENTS</Text>
          <View style={styles.summaryValueRow}>
            <Text style={styles.summaryValue}>1,284</Text>
            <View style={styles.trendBadge}>
              <AppIcon name="trending-up" size={12} color="#059669" />
              <Text style={styles.trendGreen}> +4%</Text>
            </View>
          </View>
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryLabel}>AVG. ECO-CREDITS</Text>
          <View style={styles.summaryValueRow}>
            <Text style={styles.summaryValue}>842</Text>
            <Text style={styles.trendTeal}>Top 10%</Text>
          </View>
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryLabel}>ACTIVE INITIATIVES</Text>
          <View style={styles.summaryValueRow}>
            <Text style={styles.summaryValue}>12</Text>
            <View style={styles.liveChip}>
              <View style={styles.liveDot} />
              <Text style={styles.liveText}>Live Now</Text>
            </View>
          </View>
        </View>

        {/* Students Table */}
        <View style={styles.tableCard}>
          <View style={styles.tableHeader}>
            <Text style={[styles.tableColHeader, { flex: 2.5 }]}>STUDENT</Text>
            <Text style={[styles.tableColHeader, { flex: 1.5 }]}>CLASS</Text>
            <Text style={[styles.tableColHeader, { flex: 1, textAlign: 'right' }]}>ACTIVITIES</Text>
          </View>

          {STUDENTS.map((s, i) => (
            <TouchableOpacity
              key={s.id}
              style={[styles.tableRow, i === STUDENTS.length - 1 && { borderBottomWidth: 0 }]}
              onPress={() => navigation.navigate('StudentDetailProfile')}
              activeOpacity={0.7}>
              <View style={[styles.studentCell, { flex: 2.5 }]}>
                <View style={styles.studentAvatar}>
                  <AppIcon name="person" size={18} color="#64748B" />
                </View>
                <View>
                  <Text style={styles.studentName}>{s.name}</Text>
                  <Text style={styles.studentId}>ID: {s.id}</Text>
                </View>
              </View>
              <View style={{ flex: 1.5, justifyContent: 'center' }}>
                <Text style={styles.classText}>{s.grade}</Text>
              </View>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                <Text style={styles.activityText}>{s.activities}</Text>
              </View>
            </TouchableOpacity>
          ))}

          {/* Pagination */}
          <View style={styles.paginationRow}>
            <Text style={styles.paginationText}>Showing 1 to 10 of 1,284 students</Text>
            <View style={styles.paginationControls}>
              {['<', '1', '2', '3', '>'].map((p, i) => (
                <TouchableOpacity key={i} style={[styles.pageBtn, p === '1' && styles.pageBtnActive]}>
                  <Text style={[styles.pageBtnText, p === '1' && styles.pageBtnTextActive]}>{p}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
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
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  backBtn: { padding: 4 },
  headerLogoBg: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#059669',
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandName: { fontSize: 18, fontWeight: '700', color: '#004D40' },
  headerRight: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  iconBtn: { padding: 4 },
  profileCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#E2E8F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContent: { paddingHorizontal: 20, paddingTop: 20 },
  title: { fontSize: 28, fontWeight: '800', color: '#002B36', marginBottom: 8 },
  subtitle: { fontSize: 13, color: '#475569', lineHeight: 20, marginBottom: 24 },
  searchRow: { flexDirection: 'row', gap: 12, marginBottom: 24 },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 20,
    paddingHorizontal: 14,
    height: 44,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    gap: 8,
  },
  searchInput: { flex: 1, fontSize: 13, color: '#1E293B', height: '100%' },
  filterBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F1F5F9',
    borderRadius: 20,
    paddingHorizontal: 16,
    height: 44,
    gap: 6,
  },
  filterText: { fontSize: 13, fontWeight: '600', color: '#475569' },
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
  summaryLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: '#64748B',
    letterSpacing: 1,
    marginBottom: 8,
  },
  summaryValueRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  summaryValue: { fontSize: 28, fontWeight: '800', color: '#002B36' },
  trendBadge: { flexDirection: 'row', alignItems: 'center' },
  trendGreen: { fontSize: 12, fontWeight: '700', color: '#059669' },
  trendTeal: { fontSize: 12, fontWeight: '700', color: '#0F766E' },
  liveChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DBEAFE',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    gap: 5,
  },
  liveDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#2563EB' },
  liveText: { fontSize: 11, fontWeight: '700', color: '#2563EB' },
  tableCard: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
    paddingBottom: 12,
    marginBottom: 4,
  },
  tableColHeader: { fontSize: 9, fontWeight: '800', color: '#94A3B8', letterSpacing: 1 },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F8FAFC',
  },
  studentCell: { flexDirection: 'row', alignItems: 'center', paddingRight: 8 },
  studentAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#E2E8F0',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  studentName: { fontSize: 13, fontWeight: '700', color: '#1E293B', marginBottom: 2 },
  studentId: { fontSize: 9, color: '#64748B', fontWeight: '600' },
  classText: { fontSize: 12, color: '#475569' },
  activityText: { fontSize: 14, fontWeight: '700', color: '#1E293B' },
  paginationRow: { marginTop: 20, alignItems: 'center' },
  paginationText: { fontSize: 10, color: '#94A3B8', marginBottom: 12 },
  paginationControls: { flexDirection: 'row', gap: 8 },
  pageBtn: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageBtnActive: { backgroundColor: '#004D40', borderColor: '#004D40' },
  pageBtnText: { fontSize: 12, color: '#475569', fontWeight: '600' },
  pageBtnTextActive: { color: Colors.white },
});
