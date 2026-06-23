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

export default function SchoolDashboardScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.logoWrapper}>
            <Image 
              source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeBDvk4WH8iohHaNBxUVKmO7214Z0x30GiB3uHZNTXrPDpf3wUU9I1U1bbIiQGkdzG73ThLKKCv95q6nuoewYZ_r3ore4vTZhX8iAFjMLU4OS45-cbdLpz0FTzpK01PXBnq4KenhLkGJMTuumE9n2aDtIMFv3eG-Qql1zyrhqF_A7rIvWs16lSQ7ukIFhfF5eDbfcTfoOPsZUj9ZDvNs96Ewitgnm3LGxnQX9xGrJyjQJ50hSl9l9FX-1O0FnYEV1AXL5Y37zuxRKJ'}}
              style={styles.logoImage}
            />
          </View>
          <View>
            <Text style={styles.logoText}>ChonX</Text>
            <Text style={styles.schoolName}>Greenwood Academy</Text>
          </View>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconBtn}>
            <Icon name="notifications" size={24} color="#3c4a42" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <Icon name="settings" size={24} color="#3c4a42" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.heroSection}>
          <Text style={styles.heroTitle}>Academy Overview</Text>
          <Text style={styles.heroSubtitle}>Greenwood is leading the district in sustainability performance this quarter.</Text>
        </View>

        <View style={styles.statsGrid}>
          {/* Total Hours */}
          <View style={[styles.statCard, { overflow: 'hidden' }]}>
            <View style={styles.blob1} />
            <View style={styles.statHeader}>
              <Text style={styles.statLabel}>TOTAL HOURS</Text>
              <Icon name="schedule" size={24} color="#006c49" />
            </View>
            <View style={styles.statContentRow}>
              <View style={styles.progressCircle}>
                <Text style={styles.progressText}>78%</Text>
              </View>
              <View>
                <Text style={styles.statValue}>12,840 hrs</Text>
                <View style={styles.trendRow}>
                  <Icon name="arrow-upward" size={14} color="#006c49" />
                  <Text style={styles.trendText}>+8% subtext</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Total Activities */}
          <View style={styles.statCard}>
            <View style={styles.statHeader}>
              <Text style={styles.statLabel}>TOTAL ACTIVITIES</Text>
              <Icon name="eco" size={24} color="#006b5f" />
            </View>
            <Text style={styles.statValue}>58,420</Text>
            <View style={styles.sparklinePlaceholder}>
              <View style={styles.sparklinePath} />
            </View>
          </View>

          {/* Active Users */}
          <View style={styles.statCard}>
            <View style={styles.statHeader}>
              <Text style={styles.statLabel}>ACTIVE USERS</Text>
              <Icon name="groups" size={24} color="#005ac2" />
            </View>
            <View style={styles.userStats}>
              <View style={styles.userStatRow}>
                <Text style={styles.userStatLabel}>840 Students</Text>
                <View style={styles.userProgressBarBg}>
                  <View style={[styles.userProgressBarFill, { width: '85%', backgroundColor: '#006c49' }]} />
                </View>
              </View>
              <View style={styles.userStatRow}>
                <Text style={styles.userStatLabel}>42 Teachers</Text>
                <View style={styles.userProgressBarBg}>
                  <View style={[styles.userProgressBarFill, { width: '95%', backgroundColor: '#005ac2' }]} />
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.engagementSection}>
          <View style={styles.engagementHeader}>
            <View>
              <Text style={styles.sectionTitle}>Engagement Overview</Text>
              <Text style={styles.sectionSubtitle}>Comparison of total activities and earned eco-credits</Text>
            </View>
            <View style={styles.chartToggle}>
              <Text style={styles.chartToggleActive}>Line</Text>
              <Text style={styles.chartToggleText}>Bar</Text>
              <Text style={styles.chartToggleText}>Pie</Text>
            </View>
          </View>
          <View style={styles.chartPlaceholder}>
            <View style={styles.chartLegend}>
              <View style={styles.legendItem}>
                <View style={[styles.legendDot, { backgroundColor: '#006c49' }]} />
                <Text style={styles.legendText}>ACTIVITIES</Text>
              </View>
              <View style={styles.legendItem}>
                <View style={[styles.legendDot, { backgroundColor: '#005ac2' }]} />
                <Text style={styles.legendText}>CREDITS</Text>
              </View>
            </View>
            {/* Simple representation of chart */}
            <View style={styles.chartBars}>
              {[40, 60, 45, 80, 55, 70, 90, 65, 40].map((h, i) => (
                <View key={i} style={[styles.chartBar, { height: `${h}%`, opacity: i % 3 === 0 ? 1 : 0.4 }]} />
              ))}
            </View>
          </View>
        </View>

        <View style={styles.actionsSection}>
          <Text style={styles.actionsLabel}>ADMINISTRATOR HUB</Text>
          <View style={styles.actionsGrid}>
            <TouchableOpacity style={styles.actionCard}>
              <View style={[styles.actionIconBg, { backgroundColor: 'rgba(109,245,225,0.3)' }]}>
                <Icon name="folder-open" size={24} color="#006b5f" />
              </View>
              <Text style={styles.actionText}>Faculty Overview</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionCard}>
              <View style={[styles.actionIconBg, { backgroundColor: 'rgba(113,161,255,0.3)' }]}>
                <Icon name="monitoring" size={24} color="#005ac2" />
              </View>
              <Text style={styles.actionText}>Student Overview</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionCard}>
              <View style={[styles.actionIconBg, { backgroundColor: 'rgba(187,202,191,0.3)' }]}>
                <Icon name="manage-accounts" size={24} color="#3c4a42" />
              </View>
              <Text style={styles.actionText}>Manage Students & Classes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionCard}>
              <View style={[styles.actionIconBg, { backgroundColor: 'rgba(16,185,129,0.3)' }]}>
                <Icon name="key" size={24} color="#006c49" />
              </View>
              <Text style={styles.actionText}>School Access Code Management</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.feedSection}>
          <View style={styles.feedHeaderRow}>
            <Text style={styles.sectionTitle}>Live Activity Stream</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All History</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.feedContainer}>
            <View style={styles.feedItem}>
              <View style={styles.feedItemLeft}>
                <View style={[styles.feedAvatarWrapper, { borderColor: 'rgba(0,108,73,0.2)' }]}>
                  <Image source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYo-Y0NJTnGeTIjJV-w65ZEt68wOIm_rhCnjXJDL7QJ8L7LKFLso6bSvX65T9WrgeBFF-zn0NcvLx30B9v650c6bbXZb8bShIYkQH2kBV_d7X4Mt6H6b2fACtLHHDi-43Jbg-Mfu1VyUotgrU6_u2bnOk6xOllOzHE09z_oduIcK8dOdUfG8h1yKmtLGkTgTJ6y0mxAb-hCB39pJbDshWVBi3h79_wlw3GVcCRe7M5C6cJ6rwmv7yshc0YPDfXfXCSFPExPMcg305i'}} style={styles.feedAvatar} />
                </View>
                <View>
                  <Text style={styles.feedItemTitle}>8A submitted 42 recycling activities</Text>
                  <Text style={styles.feedItemSub}>Initiative: Greenwood Zero-Waste Drive</Text>
                </View>
              </View>
              <View style={styles.feedItemRight}>
                <Text style={[styles.feedItemStatus, { color: '#006c49' }]}>+1,240 XP</Text>
                <Text style={styles.feedItemTime}>2 mins ago</Text>
              </View>
            </View>

            <View style={styles.feedItem}>
              <View style={styles.feedItemLeft}>
                <View style={[styles.feedAvatarWrapper, { borderColor: 'rgba(0,107,95,0.2)' }]}>
                  <Image source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbNTKqab1lfN98EZqrrAVOalTmlAFMxjxFIuRCKjyUbUAc0Nku82H-VimFEF1EIPOQJX_xFiWpz6jBMllEVl7VXom3VPUwKrfy9syRLPM4Ws_jfdFOGcZgLoTfS3UkC1kV79LuQzHaZXR2MtpYXk53hQTDsJiI9FaNloUzp91uPC0d00sZX4kzbRgaRco7H2HncXR25tns7G9h5XUVDWRBt2tSqDYnGoJ0qFKXu3HQHfS4DDsOlj3IjMuKcuPQlEtc9Y0zvx4rV1dA'}} style={styles.feedAvatar} />
                </View>
                <View>
                  <Text style={styles.feedItemTitle}>Mr. Henderson validated 15 tasks</Text>
                  <Text style={styles.feedItemSub}>Class: 10B Environmental Science</Text>
                </View>
              </View>
              <View style={styles.feedItemRight}>
                <Text style={[styles.feedItemStatus, { color: '#006b5f' }]}>Verified</Text>
                <Text style={styles.feedItemTime}>14 mins ago</Text>
              </View>
            </View>

            <View style={styles.feedItem}>
              <View style={styles.feedItemLeft}>
                <View style={[styles.feedAvatarWrapper, { borderColor: 'rgba(0,90,194,0.2)' }]}>
                  <Image source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUIr4CH5U9iKMf80HqPQElp0jT9iY_5zme5XGfG49mGsjO5Hb1vn1j36sHEqrORs8OmG7j9xprj3xiUcrT1H_bf4mSq6wwlaR8djcYPTIQXCk-dRm3XTeP4sFNWM1Z-ii775cAoQUUVESO3hO2EZzrA7t3G0QJw52Gaweye2gI9MjNllgR0GmEd3atN7sogMkY3LpJ1yKQ-EZB-babYbTMDfwjP_nvumkFbS9mg5QYOP3Ys3jSqigNondl03vqEJZlpwgX9ZBEXahP'}} style={styles.feedAvatar} />
                </View>
                <View>
                  <Text style={styles.feedItemTitle}>Maya Singh reached Level 12</Text>
                  <Text style={styles.feedItemSub}>Achievement unlocked: Solar Pioneer</Text>
                </View>
              </View>
              <View style={styles.feedItemRight}>
                <Text style={[styles.feedItemStatus, { color: '#005ac2' }]}>Level Up</Text>
                <Text style={styles.feedItemTime}>45 mins ago</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* FAB */}
      <TouchableOpacity style={styles.fab}>
        <Icon name="add" size={32} color="#fff" />
      </TouchableOpacity>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <View style={styles.navItemActive}>
          <Icon name="dashboard" size={24} color="#00422b" />
          <Text style={styles.navTextActive}>Dashboard</Text>
        </View>
        <View style={styles.navItem}>
          <Icon name="eco" size={24} color="#3c4a42" />
          <Text style={styles.navText}>Initiatives</Text>
        </View>
        <View style={styles.navItem}>
          <Icon name="analytics" size={24} color="#3c4a42" />
          <Text style={styles.navText}>Analytics</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  header: {
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    backgroundColor: 'rgba(248, 249, 250, 0.8)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(187, 202, 191, 0.2)',
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  logoWrapper: { width: 40, height: 40, borderRadius: 20, overflow: 'hidden', backgroundColor: '#10b981' },
  logoImage: { width: '100%', height: '100%' },
  logoText: { fontSize: 24, fontWeight: '800', color: '#006c49', lineHeight: 24 },
  schoolName: { fontSize: 10, fontWeight: '700', color: '#3c4a42', textTransform: 'uppercase', letterSpacing: 1 },
  headerRight: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  iconBtn: { width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  scrollContent: { padding: 24, paddingBottom: 100 },
  heroSection: { marginBottom: 32 },
  heroTitle: { fontSize: 48, fontWeight: '800', color: '#191c1d', marginBottom: 8, letterSpacing: -1 },
  heroSubtitle: { fontSize: 18, color: '#3c4a42' },
  statsGrid: { gap: 24, marginBottom: 32 },
  statCard: { backgroundColor: 'rgba(255,255,255,0.8)', padding: 24, borderRadius: 16, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)', minHeight: 160, justifyContent: 'space-between' },
  blob1: { position: 'absolute', top: -16, right: -16, width: 96, height: 96, borderRadius: 48, backgroundColor: 'rgba(16,185,129,0.1)' },
  statHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 },
  statLabel: { fontSize: 12, fontWeight: '700', color: '#3c4a42', textTransform: 'uppercase' },
  statContentRow: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  progressCircle: { width: 64, height: 64, borderRadius: 32, borderWidth: 6, borderColor: '#006c49', borderLeftColor: 'rgba(0,108,73,0.1)', alignItems: 'center', justifyContent: 'center', transform: [{rotate: '45deg'}] },
  progressText: { transform: [{rotate: '-45deg'}], fontSize: 10, fontWeight: '700', color: '#006c49' },
  statValue: { fontSize: 28, fontWeight: '700', color: '#191c1d' },
  trendRow: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  trendText: { fontSize: 12, fontWeight: '700', color: '#006c49' },
  sparklinePlaceholder: { height: 48, marginTop: 8, backgroundColor: 'rgba(0,107,95,0.1)', borderRadius: 8 },
  sparklinePath: { position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, backgroundColor: '#006b5f' },
  userStats: { gap: 12 },
  userStatRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  userStatLabel: { fontSize: 16, color: '#3c4a42' },
  userProgressBarBg: { width: 96, height: 8, backgroundColor: '#e1e3e4', borderRadius: 4, overflow: 'hidden' },
  userProgressBarFill: { height: '100%', borderRadius: 4 },
  engagementSection: { marginBottom: 32, backgroundColor: 'rgba(255,255,255,0.8)', padding: 24, borderRadius: 16, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)' },
  engagementHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 },
  sectionTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d' },
  sectionSubtitle: { fontSize: 14, color: '#3c4a42', marginTop: 4 },
  chartToggle: { flexDirection: 'row', backgroundColor: '#edeeef', borderRadius: 8, padding: 4 },
  chartToggleActive: { fontSize: 12, fontWeight: '700', color: '#006c49', backgroundColor: '#fff', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 6, elevation: 1 },
  chartToggleText: { fontSize: 12, fontWeight: '700', color: '#3c4a42', paddingHorizontal: 12, paddingVertical: 6 },
  chartPlaceholder: { height: 200, backgroundColor: '#f3f4f5', borderRadius: 8, overflow: 'hidden', position: 'relative' },
  chartLegend: { position: 'absolute', top: 16, right: 16, flexDirection: 'row', gap: 16 },
  legendItem: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  legendDot: { width: 12, height: 12, borderRadius: 6 },
  legendText: { fontSize: 10, fontWeight: '700', color: '#3c4a42', textTransform: 'uppercase', letterSpacing: 1 },
  chartBars: { position: 'absolute', bottom: 0, left: 24, right: 24, height: '80%', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' },
  chartBar: { width: 8, backgroundColor: '#006c49', borderTopLeftRadius: 4, borderTopRightRadius: 4 },
  actionsSection: { marginBottom: 40 },
  actionsLabel: { fontSize: 12, fontWeight: '700', color: '#3c4a42', paddingHorizontal: 8, marginBottom: 8, letterSpacing: 1 },
  actionsGrid: { gap: 12 },
  actionCard: { flexDirection: 'row', alignItems: 'center', gap: 16, backgroundColor: 'rgba(255,255,255,0.8)', padding: 16, borderRadius: 8, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)' },
  actionIconBg: { width: 40, height: 40, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  actionText: { fontSize: 14, fontWeight: '700', color: '#191c1d' },
  feedSection: { marginBottom: 32 },
  feedHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 24 },
  viewAllText: { fontSize: 14, fontWeight: '700', color: '#006c49' },
  feedContainer: { backgroundColor: 'rgba(255,255,255,0.8)', borderRadius: 8, overflow: 'hidden', borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)' },
  feedItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 24, borderBottomWidth: 1, borderBottomColor: 'rgba(187,202,191,0.1)' },
  feedItemLeft: { flexDirection: 'row', alignItems: 'center', gap: 16, flex: 1 },
  feedAvatarWrapper: { width: 48, height: 48, borderRadius: 24, borderWidth: 2, overflow: 'hidden' },
  feedAvatar: { width: '100%', height: '100%', resizeMode: 'cover' },
  feedItemTitle: { fontSize: 15, fontWeight: '700', color: '#191c1d' },
  feedItemSub: { fontSize: 12, color: '#3c4a42' },
  feedItemRight: { alignItems: 'flex-end' },
  feedItemStatus: { fontSize: 12, fontWeight: '700' },
  feedItemTime: { fontSize: 11, color: '#3c4a42' },
  fab: { position: 'absolute', bottom: 100, right: 24, width: 56, height: 56, borderRadius: 28, backgroundColor: '#006c49', alignItems: 'center', justifyContent: 'center', elevation: 8, shadowColor: '#006c49', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8 },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: 'rgba(248, 249, 250, 0.9)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(108, 122, 113, 0.2)',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 20,
  },
  navItem: {
    alignItems: 'center',
    padding: 8,
  },
  navItemActive: {
    alignItems: 'center',
    padding: 8,
    backgroundColor: 'rgba(16, 185, 129, 0.2)',
    borderRadius: 16,
    paddingHorizontal: 16,
  },
  navText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#3c4a42',
    marginTop: 4,
  },
  navTextActive: {
    fontSize: 12,
    fontWeight: '700',
    color: '#00422b',
    marginTop: 4,
  },
});
