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
  navigation: NativeStackNavigationProp<RootStackParamList, 'FacultyOverview'>;
};

export default function FacultyOverviewScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <View style={styles.headerBrand}>
          <View style={styles.headerLogoBg}>
             <Text style={styles.headerLogoEmoji}>🌿</Text>
          </View>
          <Text style={styles.brandName}>ChonX</Text>
        </View>
        <View style={{ width: 40 }} /> {/* Spacer */}
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>

        {/* Title Section */}
        <Text style={styles.title}>Faculty Overview</Text>
        <Text style={styles.subtitle}>
          School Coordinator Portal • Managing 128 active faculty members.
        </Text>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search by name, class, or status..."
            placeholderTextColor="#94A3B8"
          />
        </View>

        {/* Summary Cards */}
        <View style={styles.summaryCard}>
          <View style={styles.summaryTopRow}>
             <View style={styles.summaryIconCircle}>
                <Text style={styles.summaryIcon}>🛡️</Text>
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
                <Text style={styles.summaryIcon}>📈</Text>
             </View>
             <Text style={styles.summaryLabel}>AVERAGE ENGAGEMENT</Text>
          </View>
          <Text style={styles.summaryValue}>82 <Text style={styles.summaryValueSub}>/100</Text></Text>
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
                <Text style={styles.summaryIcon}>👥</Text>
             </View>
             <Text style={styles.summaryLabel}>TOTAL STUDENTS</Text>
          </View>
          <Text style={styles.summaryValue}>3,240</Text>
          <Text style={styles.summaryChangeText}>+12% from last semester</Text>
        </View>

        {/* List of Teachers */}
        {/* Teacher 1 */}
        <View style={styles.teacherCard}>
          <View style={styles.teacherHeaderRow}>
             <View style={styles.avatarLarge}>
               <Text style={styles.avatarEmoji}>👩🏾‍🏫</Text>
             </View>
             <View style={styles.levelBadge}>
               <Text style={styles.levelBadgeText}>LEVEL 10</Text>
             </View>
          </View>
          
          <View style={styles.nameEngRow}>
             <Text style={styles.teacherName}>Dr. Sarah Jenkins</Text>
             <View style={styles.engScoreBox}>
               <Text style={styles.engScoreValue}>94%</Text>
               <Text style={styles.engScoreLabel}>ENGAGEMENT</Text>
             </View>
          </View>
          
          <Text style={styles.subjectsText}>Advanced Ecology • Environmental Law</Text>
          
          <View style={styles.statsRow}>
            <View style={styles.statPill}>
              <Text style={styles.statPillValue}>4</Text>
              <Text style={styles.statPillLabel}>CLASSES</Text>
            </View>
            <View style={styles.statPill}>
              <Text style={styles.statPillValue}>42</Text>
              <Text style={styles.statPillLabel}>APPROVALS</Text>
            </View>
            <View style={styles.statPill}>
              <Text style={styles.statPillValue}>186</Text>
              <Text style={styles.statPillLabel}>STUDENTS</Text>
            </View>
          </View>
          
          <View style={styles.teacherFooterRow}>
             <View style={styles.mockAvatarsRow}>
               <View style={[styles.mockSmallAvatar, { backgroundColor: '#CBD5E1' }]} />
               <View style={[styles.mockSmallAvatar, { backgroundColor: '#94A3B8', marginLeft: -8 }]} />
               <View style={[styles.mockSmallAvatar, { backgroundColor: '#64748B', marginLeft: -8 }]} />
               <View style={[styles.mockSmallAvatarPlus, { marginLeft: -8 }]}>
                 <Text style={styles.mockSmallAvatarPlusText}>+</Text>
               </View>
             </View>
             <TouchableOpacity style={styles.viewProfileBtn}>
               <Text style={styles.viewProfileBtnText}>View Profile ></Text>
             </TouchableOpacity>
          </View>
        </View>

        {/* Teacher 2 */}
        <View style={styles.teacherCard}>
          <View style={styles.teacherHeaderRow}>
             <View style={styles.avatarLarge}>
               <Text style={styles.avatarEmoji}>👨🏻‍💼</Text>
             </View>
             <View style={styles.levelBadge}>
               <Text style={styles.levelBadgeText}>LEVEL 8</Text>
             </View>
          </View>
          
          <View style={styles.nameEngRow}>
             <Text style={styles.teacherName}>Markus Aurelius</Text>
             <View style={styles.engScoreBox}>
               <Text style={styles.engScoreValue}>78%</Text>
               <Text style={styles.engScoreLabel}>ENGAGEMENT</Text>
             </View>
          </View>
          
          <Text style={styles.subjectsText}>Sustainable Design • Urban Planning</Text>
          
          <View style={styles.statsRow}>
            <View style={styles.statPill}>
              <Text style={styles.statPillValue}>2</Text>
              <Text style={styles.statPillLabel}>CLASSES</Text>
            </View>
            <View style={styles.statPill}>
              <Text style={styles.statPillValue}>15</Text>
              <Text style={styles.statPillLabel}>APPROVALS</Text>
            </View>
            <View style={styles.statPill}>
              <Text style={styles.statPillValue}>112</Text>
              <Text style={styles.statPillLabel}>STUDENTS</Text>
            </View>
          </View>
          
          <View style={styles.teacherFooterRow}>
             <View style={styles.alertRow}>
               <Text style={styles.alertIcon}>⚠️</Text>
               <Text style={styles.alertText}>3 Approvals Pending</Text>
             </View>
             <TouchableOpacity style={styles.viewProfileBtn}>
               <Text style={styles.viewProfileBtnText}>View Profile ></Text>
             </TouchableOpacity>
          </View>
        </View>

        {/* Teacher 3 */}
        <View style={styles.teacherCard}>
          <View style={styles.teacherHeaderRow}>
             <View style={styles.avatarLarge}>
               <Text style={styles.avatarEmoji}>👩🏽‍🏫</Text>
             </View>
             <View style={styles.levelBadge}>
               <Text style={styles.levelBadgeText}>LEVEL 15</Text>
             </View>
          </View>
          
          <View style={styles.nameEngRow}>
             <Text style={styles.teacherName}>Elena Rodriguez</Text>
             <View style={styles.engScoreBox}>
               <Text style={styles.engScoreValue}>98%</Text>
               <Text style={styles.engScoreLabel}>ENGAGEMENT</Text>
             </View>
          </View>
          
          <Text style={styles.subjectsText}>Circular Economics • Ethics</Text>
          
          <View style={styles.statsRow}>
            <View style={styles.statPill}>
              <Text style={styles.statPillValue}>5</Text>
              <Text style={styles.statPillLabel}>CLASSES</Text>
            </View>
            <View style={styles.statPill}>
              <Text style={styles.statPillValue}>82</Text>
              <Text style={styles.statPillLabel}>APPROVALS</Text>
            </View>
            <View style={styles.statPill}>
              <Text style={styles.statPillValue}>245</Text>
              <Text style={styles.statPillLabel}>STUDENTS</Text>
            </View>
          </View>
          
          <View style={styles.teacherFooterRow}>
             <View style={styles.performerRow}>
               <Text style={styles.performerIcon}>⭐</Text>
               <Text style={styles.performerText}>Top Performer</Text>
             </View>
             <TouchableOpacity style={styles.viewProfileBtn}>
               <Text style={styles.viewProfileBtnText}>View Profile ></Text>
             </TouchableOpacity>
          </View>
        </View>

        {/* Teacher 4 */}
        <View style={styles.teacherCard}>
          <View style={styles.teacherHeaderRow}>
             <View style={styles.avatarLarge}>
               <Text style={styles.avatarEmoji}>👨🏽‍🏫</Text>
             </View>
             <View style={styles.levelBadge}>
               <Text style={styles.levelBadgeText}>LEVEL 5</Text>
             </View>
          </View>
          
          <View style={styles.nameEngRow}>
             <Text style={styles.teacherName}>James Wilson</Text>
             <View style={styles.engScoreBox}>
               <Text style={styles.engScoreValue}>64%</Text>
               <Text style={styles.engScoreLabel}>ENGAGEMENT</Text>
             </View>
          </View>
          
          <Text style={styles.subjectsText}>Hydrology • Water Management</Text>
          
          <View style={styles.statsRow}>
            <View style={styles.statPill}>
              <Text style={styles.statPillValue}>2</Text>
              <Text style={styles.statPillLabel}>CLASSES</Text>
            </View>
            <View style={styles.statPill}>
              <Text style={styles.statPillValue}>0</Text>
              <Text style={styles.statPillLabel}>APPROVALS</Text>
            </View>
            <View style={styles.statPill}>
              <Text style={styles.statPillValue}>65</Text>
              <Text style={styles.statPillLabel}>STUDENTS</Text>
            </View>
          </View>
          
          <View style={styles.teacherFooterRow}>
             <View style={styles.loginRow}>
               <Text style={styles.loginIcon}>🕒</Text>
               <Text style={styles.loginText}>Recent Login: 2h ago</Text>
             </View>
             <TouchableOpacity style={styles.viewProfileBtn}>
               <Text style={styles.viewProfileBtnText}>View Profile ></Text>
             </TouchableOpacity>
          </View>
        </View>

        {/* Load More */}
        <TouchableOpacity style={styles.loadMoreBtn}>
          <Text style={styles.loadMoreText}>Load More Teachers (124 remaining)</Text>
        </TouchableOpacity>

        <View style={styles.bottomPad} />
      </ScrollView>
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
    width: 32,
    height: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerLogoEmoji: {
    fontSize: 16,
  },
  brandName: {
    fontSize: 20,
    fontWeight: '800',
    color: '#004D40',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
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
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 24,
    paddingHorizontal: 16,
    height: 48,
    marginBottom: 24,
    shadowColor: Colors.cardShadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#1E293B',
    height: '100%',
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
  summaryTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  summaryIconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#E8F5ED',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  summaryIcon: {
    fontSize: 14,
  },
  summaryLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: '#64748B',
    letterSpacing: 1,
  },
  summaryValue: {
    fontSize: 26,
    fontWeight: '800',
    color: '#002B36',
    marginBottom: 12,
  },
  summaryValueSub: {
    fontSize: 14,
    fontWeight: '600',
    color: '#94A3B8',
  },
  progressBarBg: {
    height: 4,
    backgroundColor: '#E2E8F0',
    borderRadius: 2,
    width: '100%',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#059669',
    borderRadius: 2,
  },
  segmentsRow: {
    flexDirection: 'row',
    gap: 4,
    height: 4,
  },
  segmentActive: {
    flex: 1,
    backgroundColor: '#059669',
    borderRadius: 2,
  },
  segmentInactive: {
    flex: 1,
    backgroundColor: '#E2E8F0',
    borderRadius: 2,
  },
  summaryChangeText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#64748B',
  },
  teacherCard: {
    backgroundColor: Colors.white,
    borderRadius: 24,
    padding: 20,
    marginBottom: 16,
    shadowColor: Colors.cardShadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
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
  avatarEmoji: {
    fontSize: 40,
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
  teacherName: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1E293B',
    flex: 1,
  },
  engScoreBox: {
    alignItems: 'flex-end',
  },
  engScoreValue: {
    fontSize: 16,
    fontWeight: '800',
    color: '#0F766E',
  },
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
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  statPill: {
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 16,
    flex: 1,
    marginHorizontal: 4,
  },
  statPillValue: {
    fontSize: 16,
    fontWeight: '800',
    color: '#1E293B',
    marginBottom: 2,
  },
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
  mockAvatarsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mockSmallAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: Colors.white,
  },
  mockSmallAvatarPlus: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#F1F5F9',
    borderWidth: 2,
    borderColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mockSmallAvatarPlusText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#64748B',
  },
  alertRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  alertIcon: {
    fontSize: 12,
    marginRight: 6,
  },
  alertText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#DC2626',
  },
  performerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  performerIcon: {
    fontSize: 12,
    marginRight: 6,
  },
  performerText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#059669',
  },
  loginRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginIcon: {
    fontSize: 12,
    marginRight: 6,
    color: '#64748B',
  },
  loginText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#64748B',
  },
  viewProfileBtn: {
    backgroundColor: '#004D40',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
  },
  viewProfileBtnText: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: '700',
  },
  loadMoreBtn: {
    backgroundColor: '#E2E8F0',
    paddingVertical: 16,
    borderRadius: 24,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 20,
  },
  loadMoreText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1E293B',
  },
  bottomPad: {
    height: 40,
  },
});
