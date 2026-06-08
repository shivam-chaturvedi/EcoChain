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
  navigation: NativeStackNavigationProp<RootStackParamList, 'StudentDetailProfile'>;
};

export default function StudentDetailProfileScreen({ navigation }: Props) {
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

        {/* Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatarCircle}>
              <Text style={styles.avatarEmoji}>🧑🏾</Text>
            </View>
            <View style={styles.levelBadge}>
              <Text style={styles.levelBadgeText}>LEVEL 12</Text>
            </View>
          </View>
          
          <Text style={styles.studentName}>Alex Thompson</Text>
          <Text style={styles.studentSubtext}>Class 10-A • Senior Student</Text>

          <View style={styles.joinDateContainer}>
            <View>
              <Text style={styles.joinDateLabel}>JOINED DATE</Text>
              <Text style={styles.joinDateValue}>Sept 12, 2023</Text>
            </View>
            <View style={styles.calendarIconBg}>
              <Text style={styles.calendarIcon}>📅</Text>
            </View>
          </View>
        </View>

        {/* Stats Grid */}
        <View style={styles.statsGrid}>
          <View style={styles.statBox}>
            <Text style={styles.statIconTop}>📋</Text>
            <Text style={styles.statBoxValue}>48</Text>
            <Text style={styles.statBoxLabel}>ACTIVITIES</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statIconTop}>🕒</Text>
            <Text style={styles.statBoxValue}>124</Text>
            <Text style={styles.statBoxLabel}>HOURS</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statIconTop}>✨</Text>
            <Text style={styles.statBoxValue}>2,450</Text>
            <Text style={styles.statBoxLabel}>ECO-CREDITS</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statIconTop}>🎖️</Text>
            <Text style={styles.statBoxValue}>14</Text>
            <Text style={styles.statBoxLabel}>BADGES</Text>
          </View>
        </View>

        {/* Analytics Breakdown */}
        <View style={styles.cardBox}>
          <View style={styles.cardHeaderRow}>
            <Text style={styles.analyticsLabel}>ANALYTICS BREAKDOWN</Text>
            <Text style={styles.pieIcon}>🥧</Text>
          </View>

          {/* Progress Bars */}
          <View style={styles.progressRow}>
            <View style={styles.progressTextRow}>
              <Text style={styles.progressTitle}>Recycling</Text>
              <Text style={[styles.progressTitle, { color: '#059669' }]}>45%</Text>
            </View>
            <View style={styles.progressBarBg}>
              <View style={[styles.progressBarFill, { width: '45%', backgroundColor: '#059669' }]} />
            </View>
          </View>

          <View style={styles.progressRow}>
            <View style={styles.progressTextRow}>
              <Text style={styles.progressTitle}>Conservation</Text>
              <Text style={[styles.progressTitle, { color: '#0F766E' }]}>35%</Text>
            </View>
            <View style={styles.progressBarBg}>
              <View style={[styles.progressBarFill, { width: '35%', backgroundColor: '#0F766E' }]} />
            </View>
          </View>

          <View style={styles.progressRow}>
            <View style={styles.progressTextRow}>
              <Text style={styles.progressTitle}>Community</Text>
              <Text style={[styles.progressTitle, { color: '#2563EB' }]}>10%</Text>
            </View>
            <View style={styles.progressBarBg}>
              <View style={[styles.progressBarFill, { width: '10%', backgroundColor: '#2563EB' }]} />
            </View>
          </View>

          {/* Streak Pill */}
          <View style={styles.streakPill}>
            <View style={styles.streakIconCircle}>
              <Text style={styles.streakIcon}>🔥</Text>
            </View>
            <View>
              <Text style={styles.streakValueText}>12 Days</Text>
              <Text style={styles.streakSubText}>CURRENT ACTIVITY STREAK</Text>
            </View>
          </View>
        </View>

        {/* Activity Timeline */}
        <View style={styles.cardBox}>
          <View style={styles.timelineHeaderRow}>
            <View style={styles.timelineTitleRow}>
              <Text style={styles.timelineTitleIcon}>⏱️</Text>
              <Text style={styles.cardTitle}>Activity{'\n'}Timeline</Text>
            </View>
            <TouchableOpacity style={styles.filterPillBtn}>
              <Text style={styles.filterPillText}>All Categories ∨</Text>
            </TouchableOpacity>
          </View>

          {/* Item 1 */}
          <View style={styles.activityItem}>
            <View style={styles.timelineLine} />
            <View style={styles.actIconCircle}>
              <Text style={styles.actIcon}>♻️</Text>
            </View>
            <View style={styles.actContent}>
              <View style={styles.actTopRow}>
                <Text style={styles.actTitle}>Plastic Waste Collection Drive</Text>
                <Text style={styles.actCredits}>+50{'\n'}Credits</Text>
              </View>
              <View style={styles.approvedBadge}>
                <Text style={styles.approvedText}>APPROVED</Text>
              </View>
              <View style={styles.actMetaRow}>
                <Text style={styles.actMetaText}>📅 Oct 24, 2023</Text>
                <Text style={styles.actMetaText}>🕒 2.5 Hrs</Text>
              </View>
            </View>
          </View>

          {/* Item 2 */}
          <View style={styles.activityItem}>
            <View style={styles.timelineLine} />
            <View style={styles.actIconCircle}>
              <Text style={styles.actIcon}>🌱</Text>
            </View>
            <View style={styles.actContent}>
              <View style={styles.actTopRow}>
                <Text style={styles.actTitle}>School Garden Reforestation</Text>
                <Text style={styles.actCredits}>+120{'\n'}Credits</Text>
              </View>
              <View style={styles.approvedBadge}>
                <Text style={styles.approvedText}>APPROVED</Text>
              </View>
              <View style={styles.actMetaRow}>
                <Text style={styles.actMetaText}>📅 Oct 20, 2023</Text>
                <Text style={styles.actMetaText}>🕒 4.0 Hrs</Text>
              </View>
            </View>
          </View>

          {/* Item 3 */}
          <View style={styles.activityItem}>
            <View style={styles.timelineLine} />
            <View style={styles.actIconCircle}>
              <Text style={styles.actIcon}>💡</Text>
            </View>
            <View style={styles.actContent}>
              <View style={styles.actTopRow}>
                <Text style={styles.actTitle}>Energy Saving Workshop</Text>
                <Text style={styles.actCredits}>+30{'\n'}Credits</Text>
              </View>
              <View style={styles.approvedBadge}>
                <Text style={styles.approvedText}>APPROVED</Text>
              </View>
              <View style={styles.actMetaRow}>
                <Text style={styles.actMetaText}>📅 Oct 15, 2023</Text>
                <Text style={styles.actMetaText}>🕒 1.5 Hrs</Text>
              </View>
            </View>
          </View>

          {/* Item 4 */}
          <View style={styles.activityItem}>
            <View style={styles.actIconCircle}>
              <Text style={styles.actIcon}>💧</Text>
            </View>
            <View style={styles.actContent}>
              <View style={styles.actTopRow}>
                <Text style={styles.actTitle}>Water Conservation Seminar</Text>
                <Text style={styles.actCredits}>+40{'\n'}Credits</Text>
              </View>
              <View style={styles.approvedBadge}>
                <Text style={styles.approvedText}>APPROVED</Text>
              </View>
              <View style={styles.actMetaRow}>
                <Text style={styles.actMetaText}>📅 Oct 12, 2023</Text>
                <Text style={styles.actMetaText}>🕒 2.0 Hrs</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.loadOlderBtn}>
            <Text style={styles.loadOlderText}>Load Older Activities</Text>
          </TouchableOpacity>
        </View>

        {/* Impact Summary Report Card */}
        <View style={styles.reportCard}>
          <Text style={styles.reportTitle}>Impact Summary{'\n'}Report</Text>
          <Text style={styles.reportSub}>
            Generate a detailed PDF performance report for Alex Thompson's eco-initiatives this semester.
          </Text>
          
          <TouchableOpacity style={styles.downloadBtn}>
            <Text style={styles.downloadIcon}>📥</Text>
            <Text style={styles.downloadText}>Download Report</Text>
          </TouchableOpacity>

          {/* Decorative Elements */}
          <View style={styles.decoCircle1}>
            <Text style={styles.decoIcon}>✏️</Text>
          </View>
          <View style={styles.decoCircle2}>
            <Text style={styles.decoIcon}>📄</Text>
          </View>
        </View>

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
  },
  profileCard: {
    backgroundColor: Colors.white,
    borderRadius: 24,
    paddingVertical: 32,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: Colors.cardShadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.03,
    shadowRadius: 10,
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
    borderColor: '#059669',
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
  studentName: {
    fontSize: 22,
    fontWeight: '800',
    color: '#002B36',
    marginBottom: 4,
  },
  studentSubtext: {
    fontSize: 12,
    color: '#64748B',
    marginBottom: 24,
  },
  joinDateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 16,
  },
  joinDateLabel: {
    fontSize: 8,
    fontWeight: '800',
    color: '#94A3B8',
    letterSpacing: 1,
    marginBottom: 4,
  },
  joinDateValue: {
    fontSize: 13,
    fontWeight: '800',
    color: '#059669',
  },
  calendarIconBg: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#E8F5ED',
    alignItems: 'center',
    justifyContent: 'center',
  },
  calendarIcon: {
    fontSize: 14,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    marginBottom: 20,
  },
  statBox: {
    width: '47%',
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: Colors.cardShadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.03,
    shadowRadius: 10,
    elevation: 2,
  },
  statIconTop: {
    fontSize: 16,
    marginBottom: 12,
  },
  statBoxValue: {
    fontSize: 24,
    fontWeight: '800',
    color: '#059669',
    marginBottom: 4,
  },
  statBoxLabel: {
    fontSize: 9,
    fontWeight: '800',
    color: '#64748B',
    letterSpacing: 1,
  },
  cardBox: {
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
  cardHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  analyticsLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: '#94A3B8',
    letterSpacing: 1,
  },
  pieIcon: {
    fontSize: 14,
  },
  progressRow: {
    marginBottom: 16,
  },
  progressTextRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  progressTitle: {
    fontSize: 11,
    fontWeight: '700',
    color: '#1E293B',
  },
  progressBarBg: {
    height: 6,
    backgroundColor: '#F1F5F9',
    borderRadius: 3,
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 3,
  },
  streakPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F5ED',
    borderRadius: 24,
    padding: 12,
    marginTop: 8,
  },
  streakIconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#059669',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  streakIcon: {
    fontSize: 18,
  },
  streakValueText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#059669',
    marginBottom: 2,
  },
  streakSubText: {
    fontSize: 9,
    fontWeight: '800',
    color: '#004D40',
    letterSpacing: 0.5,
  },
  timelineHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  timelineTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timelineTitleIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#002B36',
    lineHeight: 20,
  },
  filterPillBtn: {
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  filterPillText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#475569',
  },
  activityItem: {
    flexDirection: 'row',
    marginBottom: 24,
    position: 'relative',
  },
  timelineLine: {
    position: 'absolute',
    left: 17,
    top: 40,
    bottom: -24,
    width: 2,
    backgroundColor: '#F1F5F9',
  },
  actIconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
    zIndex: 1,
  },
  actIcon: {
    fontSize: 16,
  },
  actContent: {
    flex: 1,
  },
  actTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  actTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: '#1E293B',
    flex: 1,
    lineHeight: 18,
  },
  actCredits: {
    fontSize: 11,
    fontWeight: '800',
    color: '#059669',
    textAlign: 'right',
  },
  approvedBadge: {
    backgroundColor: '#D1FAE5',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
    marginTop: 6,
    marginBottom: 10,
  },
  approvedText: {
    fontSize: 8,
    fontWeight: '800',
    color: '#059669',
    letterSpacing: 0.5,
  },
  actMetaRow: {
    flexDirection: 'row',
    gap: 16,
  },
  actMetaText: {
    fontSize: 10,
    color: '#64748B',
  },
  loadOlderBtn: {
    alignItems: 'center',
    marginTop: 8,
  },
  loadOlderText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#059669',
  },
  reportCard: {
    backgroundColor: '#059669',
    borderRadius: 24,
    padding: 24,
    position: 'relative',
    overflow: 'hidden',
    shadowColor: '#059669',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 4,
  },
  reportTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: Colors.white,
    lineHeight: 28,
    marginBottom: 12,
  },
  reportSub: {
    fontSize: 12,
    color: '#D1FAE5',
    lineHeight: 18,
    marginBottom: 24,
    width: '80%',
  },
  downloadBtn: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 24,
    alignSelf: 'flex-start',
  },
  downloadIcon: {
    fontSize: 14,
    marginRight: 8,
  },
  downloadText: {
    fontSize: 13,
    fontWeight: '800',
    color: '#059669',
  },
  decoCircle1: {
    position: 'absolute',
    right: 20,
    top: 40,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#10B981',
    alignItems: 'center',
    justifyContent: 'center',
  },
  decoCircle2: {
    position: 'absolute',
    right: 10,
    bottom: 30,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#006D5B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  decoIcon: {
    fontSize: 16,
  },
  bottomPad: {
    height: 40,
  },
});
