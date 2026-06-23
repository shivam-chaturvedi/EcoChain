import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

export default function StudentDetailProfileScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.iconBtn}>
            <Icon name="arrow-back" size={24} color="#006c49" />
          </TouchableOpacity>
          <View style={styles.logoWrapper}>
            <Image 
              source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2olezrH87YssMYHwR4XHvFw81CAIP9VfOquOhUxURj4ai637YLSJrmgUYYmdKteP7a9gaJdz7jB1eLzvbXAMf6z9rbkLHItYAuecz15PEzJ7nUuaLZ4L6pw7YY4h-KpsoqL465WaRf0MqpDu2uobxtE0K891oZtaJx8LRGLhhIIfYcFWpX9tGTDrlmPG9sVI_nVFSAK2Zh5WR3vj11HIPNZdd-LGXlT-DiMXluu42KAiFClAGLl_aBBw19uZhaIgHhdUqvrlhj7fC'}}
              style={styles.logoImage}
            />
          </View>
          <Text style={styles.logoText}>ChonX</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconBtn}>
            <Icon name="notifications" size={24} color="#006c49" />
          </TouchableOpacity>
          <View style={styles.adminAvatarWrapper}>
            <Image 
              source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0SBnUbmhlZ9vmeyqn02S0biclWNfugKmvg00H185aoPz-xUZC-sr1u7FOyOSW8YQapQ7z03eUeZHLYJQNznjSXSf5D7cTSEAGjkKyN3LMAKLb_YuJtaFAReJNbppcngZoYc3RB81rRlDp7o6BT5Ye1SS-68Qz9Bzjj45EiDMkUXtDyqQR6IrZdtGjb1r_LI4dxzkBgC1JzX1Ku3fX7DFlzgU4tsuG8HwubUzAw5IlH5v7CaKbul9bdQHnOMgqzZTqUb7xwoEJdnBD'}}
              style={styles.adminAvatar}
            />
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.grid}>
          {/* Left Sidebar */}
          <View style={styles.sidebar}>
            {/* Profile Card */}
            <View style={styles.profileCard}>
              <View style={styles.avatarContainer}>
                <View style={styles.avatarBorder}>
                  <Image 
                    source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCr4C9VHWchE8nZ8gR-G_IjVUO0MfEW0yQ8by-5ocFKaxd_0kB_Uem8J-06pMIhOHt-QkeRct9YHR-HrqaWznD9yTBZ3XSpYY3UqwFzkC1g0AuqNXhSCuhW9TdIzKRRk3gqkcwxlI352Tm7yDXuhsHlVoaJc3WI-56iACdsIYpC-iU0vgypCTyEAvNGfdNHwQPHIBADq8ey_aNq4ASMcIAYrHHkJ8TWkqd_I9MXjiaeoTa2-YrEqMg_MZtotk4mgWneWdhcwhR3P70v'}}
                    style={styles.avatar}
                  />
                </View>
                <View style={styles.levelBadge}>
                  <Text style={styles.levelBadgeText}>LEVEL 12</Text>
                </View>
              </View>
              <Text style={styles.studentName}>Alex Thompson</Text>
              <Text style={styles.studentInfo}>Class 10-A • Senior Student</Text>
              
              <View style={styles.joinDateRow}>
                <View>
                  <Text style={styles.joinDateLabel}>JOINED DATE</Text>
                  <Text style={styles.joinDateValue}>Sept 12, 2023</Text>
                </View>
                <View style={styles.joinDateIconBg}>
                  <Icon name="calendar-month" size={20} color="#4edea3" />
                </View>
              </View>
            </View>

            {/* Quick Stats Grid */}
            <View style={styles.statsGrid}>
              <View style={styles.statCard}>
                <Icon name="assignment" size={24} color="#006c49" />
                <Text style={[styles.statValue, { color: '#006c49' }]}>48</Text>
                <Text style={styles.statLabel}>ACTIVITIES</Text>
              </View>
              <View style={styles.statCard}>
                <Icon name="schedule" size={24} color="#006b5f" />
                <Text style={[styles.statValue, { color: '#006b5f' }]}>124</Text>
                <Text style={styles.statLabel}>HOURS</Text>
              </View>
              <View style={styles.statCard}>
                <Icon name="eco" size={24} color="#005ac2" />
                <Text style={[styles.statValue, { color: '#005ac2' }]}>2,450</Text>
                <Text style={styles.statLabel}>ECO-CREDITS</Text>
              </View>
              <View style={styles.statCard}>
                <Icon name="military-tech" size={24} color="#10b981" />
                <Text style={[styles.statValue, { color: '#10b981' }]}>14</Text>
                <Text style={styles.statLabel}>BADGES</Text>
              </View>
            </View>

            {/* Analytics */}
            <View style={styles.analyticsCard}>
              <View style={styles.analyticsHeader}>
                <Text style={styles.analyticsTitle}>ANALYTICS BREAKDOWN</Text>
                <Icon name="info" size={16} color="#6c7a71" />
              </View>
              <View style={styles.analyticsBars}>
                <View style={styles.barItem}>
                  <View style={styles.barHeader}>
                    <Text style={styles.barLabel}>Recycling</Text>
                    <Text style={[styles.barPercent, { color: '#006c49' }]}>65%</Text>
                  </View>
                  <View style={styles.barBg}>
                    <View style={[styles.barFill, { width: '65%', backgroundColor: '#006c49' }]} />
                  </View>
                </View>
                <View style={styles.barItem}>
                  <View style={styles.barHeader}>
                    <Text style={styles.barLabel}>Conservation</Text>
                    <Text style={[styles.barPercent, { color: '#006b5f' }]}>25%</Text>
                  </View>
                  <View style={styles.barBg}>
                    <View style={[styles.barFill, { width: '25%', backgroundColor: '#006b5f' }]} />
                  </View>
                </View>
                <View style={styles.barItem}>
                  <View style={styles.barHeader}>
                    <Text style={styles.barLabel}>Community</Text>
                    <Text style={[styles.barPercent, { color: '#005ac2' }]}>10%</Text>
                  </View>
                  <View style={styles.barBg}>
                    <View style={[styles.barFill, { width: '10%', backgroundColor: '#005ac2' }]} />
                  </View>
                </View>
              </View>
              
              <View style={styles.streakRow}>
                <LinearGradient colors={['#10b981', '#006c49']} style={styles.streakIconBg}>
                  <Icon name="local-fire-department" size={24} color="#fff" />
                </LinearGradient>
                <View>
                  <Text style={styles.streakDays}>12 Days</Text>
                  <Text style={styles.streakLabel}>CURRENT ACTIVITY STREAK</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Main Content Area */}
          <View style={styles.mainContent}>
            <View style={styles.timelineCard}>
              <View style={styles.timelineHeader}>
                <View style={styles.timelineHeaderLeft}>
                  <Icon name="history" size={24} color="#006c49" />
                  <Text style={styles.timelineTitle}>Activity Timeline</Text>
                </View>
                <View style={styles.filterBtn}>
                  <Text style={styles.filterText}>All Categories</Text>
                </View>
              </View>

              <View style={styles.timelineList}>
                <View style={styles.timelineItem}>
                  <View style={[styles.timelineIconBg, { backgroundColor: 'rgba(0,108,73,0.1)' }]}>
                    <Icon name="recycling" size={24} color="#006c49" />
                  </View>
                  <View style={styles.timelineContent}>
                    <View style={styles.timelineItemHeader}>
                      <Text style={styles.timelineItemTitle}>Plastic Waste Collection Drive</Text>
                      <View style={styles.approvedBadge}>
                        <Text style={styles.approvedBadgeText}>APPROVED</Text>
                      </View>
                    </View>
                    <View style={styles.timelineMeta}>
                      <Icon name="calendar-today" size={16} color="#3c4a42" />
                      <Text style={styles.timelineMetaText}>Oct 24, 2023</Text>
                      <Icon name="schedule" size={16} color="#3c4a42" style={{ marginLeft: 8 }} />
                      <Text style={styles.timelineMetaText}>2.5 Hrs</Text>
                    </View>
                  </View>
                  <Text style={styles.timelineScore}>+50 Credits</Text>
                </View>

                <View style={styles.timelineItem}>
                  <View style={[styles.timelineIconBg, { backgroundColor: 'rgba(0,107,95,0.1)' }]}>
                    <Icon name="potted-plant" size={24} color="#006b5f" />
                  </View>
                  <View style={styles.timelineContent}>
                    <View style={styles.timelineItemHeader}>
                      <Text style={styles.timelineItemTitle}>School Garden Reforestation</Text>
                      <View style={styles.approvedBadge}>
                        <Text style={styles.approvedBadgeText}>APPROVED</Text>
                      </View>
                    </View>
                    <View style={styles.timelineMeta}>
                      <Icon name="calendar-today" size={16} color="#3c4a42" />
                      <Text style={styles.timelineMetaText}>Oct 20, 2023</Text>
                      <Icon name="schedule" size={16} color="#3c4a42" style={{ marginLeft: 8 }} />
                      <Text style={styles.timelineMetaText}>4.0 Hrs</Text>
                    </View>
                  </View>
                  <Text style={styles.timelineScore}>+120 Credits</Text>
                </View>

                <View style={styles.timelineItem}>
                  <View style={[styles.timelineIconBg, { backgroundColor: 'rgba(0,90,194,0.1)' }]}>
                    <Icon name="lightbulb" size={24} color="#005ac2" />
                  </View>
                  <View style={styles.timelineContent}>
                    <View style={styles.timelineItemHeader}>
                      <Text style={styles.timelineItemTitle}>Energy Saving Workshop</Text>
                      <View style={styles.approvedBadge}>
                        <Text style={styles.approvedBadgeText}>APPROVED</Text>
                      </View>
                    </View>
                    <View style={styles.timelineMeta}>
                      <Icon name="calendar-today" size={16} color="#3c4a42" />
                      <Text style={styles.timelineMetaText}>Oct 15, 2023</Text>
                      <Icon name="schedule" size={16} color="#3c4a42" style={{ marginLeft: 8 }} />
                      <Text style={styles.timelineMetaText}>1.5 Hrs</Text>
                    </View>
                  </View>
                  <Text style={styles.timelineScore}>+30 Credits</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.loadOlderBtn}>
                <Text style={styles.loadOlderText}>Load Older Activities</Text>
              </TouchableOpacity>
            </View>

            <LinearGradient colors={['#10b981', '#006c49']} style={styles.downloadCard}>
              <View style={styles.downloadContent}>
                <Text style={styles.downloadTitle}>Impact Summary Report</Text>
                <Text style={styles.downloadDesc}>Generate a detailed PDF performance report for Alex Thompson's eco-initiatives this semester.</Text>
              </View>
              <TouchableOpacity style={styles.downloadBtn}>
                <Icon name="download" size={24} color="#006c49" />
                <Text style={styles.downloadBtnText}>Download Report</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </ScrollView>

      {/* FAB Actions */}
      <View style={styles.fabContainer}>
        <TouchableOpacity style={styles.fabEdit}>
          <Icon name="edit" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.fabAssign}>
          <Icon name="add-task" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { height: 64, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 24, backgroundColor: 'rgba(248, 249, 250, 0.8)', borderBottomWidth: 1, borderBottomColor: 'rgba(187, 202, 191, 0.3)' },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  iconBtn: { padding: 8, borderRadius: 20 },
  logoWrapper: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#10b981', overflow: 'hidden' },
  logoImage: { width: '100%', height: '100%', resizeMode: 'cover' },
  logoText: { fontSize: 28, fontWeight: '800', color: '#006c49', letterSpacing: -0.5 },
  headerRight: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  adminAvatarWrapper: { width: 40, height: 40, borderRadius: 20, borderWidth: 1, borderColor: 'rgba(187,202,191,0.3)', overflow: 'hidden' },
  adminAvatar: { width: '100%', height: '100%', resizeMode: 'cover' },
  scrollContent: { padding: 24, paddingBottom: 100 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 24 },
  sidebar: { flex: 1, minWidth: 300, gap: 24 },
  profileCard: { backgroundColor: 'rgba(255,255,255,0.8)', padding: 24, borderRadius: 16, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)', alignItems: 'center' },
  avatarContainer: { position: 'relative', marginBottom: 16 },
  avatarBorder: { width: 128, height: 128, borderRadius: 64, borderWidth: 4, borderColor: '#10b981', padding: 4, backgroundColor: '#f8f9fa' },
  avatar: { width: '100%', height: '100%', borderRadius: 60 },
  levelBadge: { position: 'absolute', bottom: 4, right: 4, backgroundColor: '#006c49', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 12 },
  levelBadgeText: { color: '#fff', fontSize: 10, fontWeight: '700' },
  studentName: { fontSize: 24, fontWeight: '600', color: '#191c1d' },
  studentInfo: { fontSize: 16, color: '#3c4a42', fontWeight: '500', marginBottom: 16 },
  joinDateRow: { width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderTopWidth: 1, borderTopColor: 'rgba(187,202,191,0.3)', paddingTop: 16, paddingHorizontal: 12 },
  joinDateLabel: { fontSize: 10, fontWeight: '700', color: '#6c7a71', letterSpacing: 1 },
  joinDateValue: { fontSize: 14, fontWeight: '600', color: '#006c49' },
  joinDateIconBg: { backgroundColor: 'rgba(0,108,73,0.1)', padding: 8, borderRadius: 16 },
  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  statCard: { width: '48%', backgroundColor: 'rgba(255,255,255,0.8)', padding: 12, borderRadius: 8, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)' },
  statValue: { fontSize: 28, fontWeight: '700', marginVertical: 4 },
  statLabel: { fontSize: 12, fontWeight: '700', color: '#3c4a42' },
  analyticsCard: { backgroundColor: 'rgba(255,255,255,0.8)', padding: 24, borderRadius: 16, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)', gap: 24 },
  analyticsHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  analyticsTitle: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 1 },
  analyticsBars: { gap: 12 },
  barItem: { gap: 4 },
  barHeader: { flexDirection: 'row', justifyContent: 'space-between' },
  barLabel: { fontSize: 12, fontWeight: '600', color: '#191c1d' },
  barPercent: { fontSize: 12, fontWeight: '600' },
  barBg: { height: 8, backgroundColor: '#edeeef', borderRadius: 4 },
  barFill: { height: '100%', borderRadius: 4 },
  streakRow: { backgroundColor: 'rgba(0,108,73,0.05)', padding: 12, borderRadius: 8, flexDirection: 'row', alignItems: 'center', gap: 16 },
  streakIconBg: { width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center' },
  streakDays: { fontSize: 20, fontWeight: '700', color: '#006c49' },
  streakLabel: { fontSize: 11, fontWeight: '700', color: '#3c4a42', letterSpacing: -0.5 },
  mainContent: { flex: 2, minWidth: 400, gap: 24 },
  timelineCard: { backgroundColor: 'rgba(255,255,255,0.8)', padding: 24, borderRadius: 16, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)' },
  timelineHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 },
  timelineHeaderLeft: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  timelineTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d' },
  filterBtn: { backgroundColor: '#f8f9fa', paddingHorizontal: 16, paddingVertical: 4, borderRadius: 16, borderWidth: 1, borderColor: 'rgba(187,202,191,0.3)' },
  filterText: { fontSize: 12, fontWeight: '600', color: '#191c1d' },
  timelineList: { gap: 16 },
  timelineItem: { flexDirection: 'row', alignItems: 'flex-start', gap: 16, padding: 16, backgroundColor: '#f3f4f5', borderRadius: 8 },
  timelineIconBg: { width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center' },
  timelineContent: { flex: 1 },
  timelineItemHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 },
  timelineItemTitle: { fontSize: 16, fontWeight: '700', color: '#191c1d' },
  approvedBadge: { backgroundColor: 'rgba(109,245,225,0.3)', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 12 },
  approvedBadgeText: { fontSize: 10, fontWeight: '700', color: '#006f64' },
  timelineMeta: { flexDirection: 'row', alignItems: 'center' },
  timelineMetaText: { fontSize: 14, color: '#3c4a42', marginLeft: 4 },
  timelineScore: { fontSize: 16, fontWeight: '700', color: '#006c49' },
  loadOlderBtn: { marginTop: 24, alignItems: 'center' },
  loadOlderText: { fontSize: 14, fontWeight: '700', color: '#006c49' },
  downloadCard: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 40, borderRadius: 8, flexWrap: 'wrap', gap: 24 },
  downloadContent: { flex: 1, minWidth: 250 },
  downloadTitle: { fontSize: 24, fontWeight: '600', color: '#fff', marginBottom: 8 },
  downloadDesc: { fontSize: 16, color: 'rgba(255,255,255,0.9)' },
  downloadBtn: { backgroundColor: '#fff', flexDirection: 'row', alignItems: 'center', gap: 8, paddingHorizontal: 24, paddingVertical: 12, borderRadius: 24, elevation: 8 },
  downloadBtnText: { fontSize: 16, fontWeight: '700', color: '#006c49' },
  fabContainer: { position: 'absolute', bottom: 48, right: 24, gap: 12 },
  fabEdit: { width: 56, height: 56, borderRadius: 28, backgroundColor: '#10b981', alignItems: 'center', justifyContent: 'center', elevation: 8 },
  fabAssign: { width: 56, height: 56, borderRadius: 28, backgroundColor: '#006b5f', alignItems: 'center', justifyContent: 'center', elevation: 8 },
});
