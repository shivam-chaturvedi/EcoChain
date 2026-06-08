import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TextInput,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import { Colors } from '../../../constants';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'StudentsOverview'>;
};

export default function StudentsOverviewScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Text style={styles.backIcon}>←</Text>
          </TouchableOpacity>
          <View style={styles.headerLogoBg}>
             <Text style={styles.headerLogoEmoji}>🌿</Text>
          </View>
          <Text style={styles.brandName}>ChonX</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconBtn}>
            <Text style={styles.headerIcon}>🔔</Text>
          </TouchableOpacity>
          <View style={styles.profileCircle}>
            <Text style={styles.profileIcon}>👤</Text>
          </View>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>

        {/* Title Section */}
        <Text style={styles.title}>Students Overview</Text>
        <Text style={styles.subtitle}>
          Manage and monitor student engagement in sustainable initiatives across the school.
        </Text>

        {/* Search & Filter */}
        <View style={styles.searchRow}>
          <View style={styles.searchContainer}>
            <Text style={styles.searchIcon}>🔍</Text>
            <TextInput
              style={styles.searchInput}
              placeholder="Search by name or cl..."
              placeholderTextColor="#94A3B8"
            />
          </View>
          <TouchableOpacity style={styles.filterBtn}>
            <Text style={styles.filterIcon}>≡</Text>
            <Text style={styles.filterText}>Filter</Text>
          </TouchableOpacity>
        </View>

        {/* Summary Cards */}
        <View style={styles.summaryCard}>
          <Text style={styles.summaryLabel}>TOTAL STUDENTS</Text>
          <View style={styles.summaryValueRow}>
            <Text style={styles.summaryValue}>1,284</Text>
            <Text style={styles.trendGreen}>↗+4%</Text>
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
            <Text style={styles.trendBlue}>Live Now</Text>
          </View>
        </View>

        {/* Students Table */}
        <View style={styles.tableCard}>
          <View style={styles.tableHeader}>
            <Text style={[styles.tableColHeader, { flex: 2.5 }]}>STUDENT</Text>
            <Text style={[styles.tableColHeader, { flex: 1.5 }]}>CLASS</Text>
            <Text style={[styles.tableColHeader, { flex: 1, textAlign: 'center' }]}>ACTIVITIES</Text>
          </View>

          {/* Row 1 */}
          <View style={styles.tableRow}>
            <View style={[styles.studentCell, { flex: 2.5 }]}>
              <View style={styles.studentAvatar}>
                <Text style={styles.studentAvatarEmoji}>🧑🏽</Text>
              </View>
              <View>
                <Text style={styles.studentName}>Alex Rivera</Text>
                <Text style={styles.studentId}>ID: #STU-9283</Text>
              </View>
            </View>
            <View style={{ flex: 1.5, justifyContent: 'center' }}>
              <Text style={styles.classText}>Grade 11-B</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={styles.activityText}>42</Text>
            </View>
          </View>

          {/* Row 2 */}
          <View style={styles.tableRow}>
            <View style={[styles.studentCell, { flex: 2.5 }]}>
              <View style={styles.studentAvatar}>
                <Text style={styles.studentAvatarEmoji}>👱🏼‍♀️</Text>
              </View>
              <View>
                <Text style={styles.studentName}>Sarah Jenkins</Text>
                <Text style={styles.studentId}>ID: #STU-8472</Text>
              </View>
            </View>
            <View style={{ flex: 1.5, justifyContent: 'center' }}>
              <Text style={styles.classText}>Grade 12-A</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={styles.activityText}>28</Text>
            </View>
          </View>

          {/* Row 3 */}
          <View style={styles.tableRow}>
            <View style={[styles.studentCell, { flex: 2.5 }]}>
              <View style={styles.studentAvatar}>
                <Text style={styles.studentAvatarEmoji}>👨🏻</Text>
              </View>
              <View>
                <Text style={styles.studentName}>Marcus Chen</Text>
                <Text style={styles.studentId}>ID: #STU-3321</Text>
              </View>
            </View>
            <View style={{ flex: 1.5, justifyContent: 'center' }}>
              <Text style={styles.classText}>Grade 10-C</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={styles.activityText}>15</Text>
            </View>
          </View>

          {/* Row 4 */}
          <View style={[styles.tableRow, { borderBottomWidth: 0 }]}>
            <View style={[styles.studentCell, { flex: 2.5 }]}>
              <View style={styles.studentAvatar}>
                <Text style={styles.studentAvatarEmoji}>👩🏾</Text>
              </View>
              <View>
                <Text style={styles.studentName}>Elena Vogt</Text>
                <Text style={styles.studentId}>ID: #STU-1104</Text>
              </View>
            </View>
            <View style={{ flex: 1.5, justifyContent: 'center' }}>
              <Text style={styles.classText}>Grade 12-B</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={styles.activityText}>88</Text>
            </View>
          </View>

          {/* Pagination */}
          <View style={styles.paginationRow}>
            <Text style={styles.paginationText}>Showing 1 to 10 of 1,284 students</Text>
            <View style={styles.paginationControls}>
              <TouchableOpacity style={styles.pageBtn}><Text style={styles.pageBtnText}>{'<'}</Text></TouchableOpacity>
              <TouchableOpacity style={[styles.pageBtn, styles.pageBtnActive]}><Text style={[styles.pageBtnText, styles.pageBtnTextActive]}>1</Text></TouchableOpacity>
              <TouchableOpacity style={styles.pageBtn}><Text style={styles.pageBtnText}>2</Text></TouchableOpacity>
              <TouchableOpacity style={styles.pageBtn}><Text style={styles.pageBtnText}>3</Text></TouchableOpacity>
              <TouchableOpacity style={styles.pageBtn}><Text style={styles.pageBtnText}>{'>'}</Text></TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.bottomPad} />
      </ScrollView>

      {/* FAB */}
      <TouchableOpacity style={styles.fab}>
        <Text style={styles.fabIcon}>👤→</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC', // Very light background
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: '#F8FAFC',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  backBtn: {
    padding: 4,
  },
  backIcon: {
    fontSize: 20,
    color: '#006D5B',
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
  profileCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#E2E8F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileIcon: {
    fontSize: 14,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#002B36',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 13,
    color: '#475569',
    lineHeight: 20,
    marginBottom: 24,
  },
  searchRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 20,
    paddingHorizontal: 16,
    height: 44,
    shadowColor: Colors.cardShadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  searchIcon: {
    fontSize: 14,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 13,
    color: '#1E293B',
    height: '100%',
  },
  filterBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F1F5F9',
    borderRadius: 20,
    paddingHorizontal: 16,
    height: 44,
  },
  filterIcon: {
    fontSize: 14,
    color: '#475569',
    marginRight: 6,
  },
  filterText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#475569',
  },
  summaryCard: {
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
  summaryLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: '#64748B',
    letterSpacing: 1,
    marginBottom: 8,
  },
  summaryValueRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 12,
  },
  summaryValue: {
    fontSize: 28,
    fontWeight: '800',
    color: '#002B36',
  },
  trendGreen: {
    fontSize: 12,
    fontWeight: '700',
    color: '#059669',
  },
  trendTeal: {
    fontSize: 12,
    fontWeight: '700',
    color: '#0F766E',
  },
  trendBlue: {
    fontSize: 12,
    fontWeight: '700',
    color: '#2563EB',
  },
  tableCard: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 20,
    marginTop: 8,
    shadowColor: Colors.cardShadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.03,
    shadowRadius: 10,
    elevation: 2,
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
    paddingBottom: 12,
    marginBottom: 8,
  },
  tableColHeader: {
    fontSize: 9,
    fontWeight: '800',
    color: '#94A3B8',
    letterSpacing: 1,
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F8FAFC',
  },
  studentCell: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 8,
  },
  studentAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#E0F2FE',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  studentAvatarEmoji: {
    fontSize: 18,
  },
  studentName: {
    fontSize: 13,
    fontWeight: '800',
    color: '#1E293B',
    marginBottom: 2,
  },
  studentId: {
    fontSize: 9,
    color: '#64748B',
    fontWeight: '600',
  },
  classText: {
    fontSize: 12,
    color: '#475569',
  },
  activityText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1E293B',
  },
  paginationRow: {
    marginTop: 20,
    alignItems: 'center',
  },
  paginationText: {
    fontSize: 10,
    color: '#94A3B8',
    marginBottom: 12,
  },
  paginationControls: {
    flexDirection: 'row',
    gap: 8,
  },
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
  pageBtnActive: {
    backgroundColor: '#004D40',
    borderColor: '#004D40',
  },
  pageBtnText: {
    fontSize: 12,
    color: '#475569',
    fontWeight: '600',
  },
  pageBtnTextActive: {
    color: Colors.white,
  },
  bottomPad: {
    height: 60,
  },
  fab: {
    position: 'absolute',
    right: 24,
    bottom: 24,
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
    fontSize: 20,
    fontWeight: 'bold',
  },
});
