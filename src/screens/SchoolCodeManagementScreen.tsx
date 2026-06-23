import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

export default function SchoolCodeManagementScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Icon name="eco" size={24} color="#006c49" />
          <Text style={styles.logoText}>EcoSchools Admin</Text>
        </View>
        <TouchableOpacity style={styles.notifBtn}>
          <Icon name="notifications" size={24} color="#3c4a42" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.pageHeader}>
          <Text style={styles.pageTitle}>School Access Management</Text>
          <Text style={styles.pageSubtitle}>Control how students and teachers join your school ecosystem.</Text>
        </View>

        <View style={styles.layout}>
          {/* Main Card */}
          <View style={styles.mainCard}>
            <View style={styles.blob1} />
            <View style={styles.blob2} />
            
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Active Join Code</Text>
            </View>

            <TouchableOpacity style={styles.codeWrapper}>
              <Text style={styles.codeText}>GSIA-8214</Text>
              <Icon name="content-copy" size={32} color="#006c49" style={styles.copyIcon} />
            </TouchableOpacity>

            <Text style={styles.cardDesc}>Share this unique code with students and faculty members during onboarding. This code validates their association with Green Valley High.</Text>

            <View style={styles.actionRow}>
              <TouchableOpacity style={styles.primaryBtn}>
                <LinearGradient colors={['#006c49', '#006b5f']} start={{x:0,y:0}} end={{x:1,y:0}} style={styles.primaryBtnGradient}>
                  <Icon name="refresh" size={20} color="#fff" />
                  <Text style={styles.primaryBtnText}>Generate New Code</Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity style={styles.secondaryBtn}>
                <Icon name="share" size={20} color="#006c49" />
                <Text style={styles.secondaryBtnText}>Share Code</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.statusIndicator}>
              <View style={styles.pulseDot} />
              <Text style={styles.statusText}>Expires in: <Text style={styles.statusTextBold}>14 Days, 3 Hours</Text></Text>
            </View>
          </View>

          {/* Sidebar */}
          <View style={styles.sidebar}>
            <View style={styles.sidebarCard}>
              <Text style={styles.sidebarTitle}>Usage Overview</Text>
              <View style={styles.statRow}>
                <Text style={styles.statLabel}>Active Uses</Text>
                <Text style={styles.statValue}>142</Text>
              </View>
              <View style={styles.progressBg}>
                <View style={[styles.progressFill, { width: '70%' }]} />
              </View>
              <View style={styles.statRow}>
                <Text style={styles.statLabel}>Remaining Capacity</Text>
                <Text style={[styles.statValue, { color: '#191c1d' }]}>58</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.tableSection}>
          <Text style={styles.tableTitle}>Recent Code Activity</Text>
          <View style={styles.tableContainer}>
            <View style={styles.tableHeader}>
              <Text style={[styles.tableCol, { flex: 2 }]}>User Identity</Text>
              <Text style={styles.tableCol}>Role</Text>
              <Text style={styles.tableCol}>Time Joined</Text>
              <Text style={styles.tableCol}>Status</Text>
            </View>
            
            <View style={styles.tableRow}>
              <View style={[styles.tableCell, { flex: 2, flexDirection: 'row', alignItems: 'center', gap: 12 }]}>
                <View style={[styles.avatar, { backgroundColor: 'rgba(187,202,191,0.4)' }]}>
                  <Text style={[styles.avatarText, { color: '#191c1d' }]}>JD</Text>
                </View>
                <View>
                  <Text style={styles.cellTitle}>Julianne Devis</Text>
                  <Text style={styles.cellSub}>Grade 11 Student</Text>
                </View>
              </View>
              <View style={styles.tableCell}>
                <View style={[styles.roleBadge, { backgroundColor: 'rgba(0,108,73,0.1)' }]}>
                  <Text style={[styles.roleBadgeText, { color: '#006c49' }]}>Student</Text>
                </View>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.cellSub}>2 mins ago</Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={[styles.cellTitle, { color: '#006c49' }]}>Verified</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={[styles.tableCell, { flex: 2, flexDirection: 'row', alignItems: 'center', gap: 12 }]}>
                <View style={[styles.avatar, { backgroundColor: 'rgba(109,245,225,0.4)' }]}>
                  <Text style={[styles.avatarText, { color: '#006f64' }]}>MW</Text>
                </View>
                <View>
                  <Text style={styles.cellTitle}>Marcus Wright</Text>
                  <Text style={styles.cellSub}>Science Department</Text>
                </View>
              </View>
              <View style={styles.tableCell}>
                <View style={[styles.roleBadge, { backgroundColor: 'rgba(0,107,95,0.1)' }]}>
                  <Text style={[styles.roleBadgeText, { color: '#006b5f' }]}>Teacher</Text>
                </View>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.cellSub}>14 mins ago</Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={[styles.cellTitle, { color: '#006c49' }]}>Verified</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <View style={styles.navItemActive}>
          <Icon name="dashboard" size={24} color="#00422b" />
          <Text style={styles.navTextActive}>Dashboard</Text>
        </View>
        <View style={styles.navItem}>
          <Icon name="potted-plant" size={24} color="#3c4a42" />
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
    borderBottomColor: 'rgba(187, 202, 191, 0.3)',
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  logoText: { fontSize: 24, fontWeight: '800', color: '#006c49' },
  notifBtn: { padding: 8 },
  scrollContent: { padding: 24, paddingBottom: 100 },
  pageHeader: { marginBottom: 40 },
  pageTitle: { fontSize: 32, fontWeight: '800', color: '#191c1d', marginBottom: 4 },
  pageSubtitle: { fontSize: 18, color: '#3c4a42' },
  layout: { gap: 24, marginBottom: 40 },
  mainCard: { backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: 16, padding: 40, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)', alignItems: 'center', position: 'relative', overflow: 'hidden', shadowColor: '#10b981', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.15, shadowRadius: 20, elevation: 4 },
  blob1: { position: 'absolute', top: -80, right: -80, width: 256, height: 256, borderRadius: 128, backgroundColor: 'rgba(16,185,129,0.1)', transform: [{ scale: 1.5 }] },
  blob2: { position: 'absolute', bottom: -80, left: -80, width: 192, height: 192, borderRadius: 96, backgroundColor: 'rgba(109,245,225,0.1)', transform: [{ scale: 1.5 }] },
  badge: { backgroundColor: 'rgba(0,108,73,0.1)', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 16, marginBottom: 24 },
  badgeText: { fontSize: 12, fontWeight: '700', color: '#006c49' },
  codeWrapper: { flexDirection: 'row', alignItems: 'center', gap: 16, marginBottom: 24 },
  codeText: { fontSize: 48, fontWeight: '800', color: '#191c1d', letterSpacing: -1 },
  copyIcon: { opacity: 0.8 },
  cardDesc: { fontSize: 16, color: '#3c4a42', textAlign: 'center', maxWidth: 400, marginBottom: 40 },
  actionRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 24, justifyContent: 'center', marginBottom: 40 },
  primaryBtn: { borderRadius: 24, overflow: 'hidden', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 2 },
  primaryBtnGradient: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 40, paddingVertical: 12 },
  primaryBtnText: { color: '#fff', fontSize: 12, fontWeight: '700' },
  secondaryBtn: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 40, paddingVertical: 12, borderRadius: 24, borderWidth: 2, borderColor: '#006c49' },
  secondaryBtnText: { color: '#006c49', fontSize: 12, fontWeight: '700' },
  statusIndicator: { flexDirection: 'row', alignItems: 'center', gap: 8, backgroundColor: '#edeeef', paddingHorizontal: 24, paddingVertical: 12, borderRadius: 24 },
  pulseDot: { width: 12, height: 12, borderRadius: 6, backgroundColor: '#006c49' },
  statusText: { fontSize: 12, color: '#3c4a42' },
  statusTextBold: { fontWeight: '700', color: '#191c1d' },
  sidebar: { flex: 1 },
  sidebarCard: { backgroundColor: '#e7e8e9', borderRadius: 16, padding: 24 },
  sidebarTitle: { fontSize: 12, fontWeight: '700', color: '#3c4a42', marginBottom: 24 },
  statRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  statLabel: { fontSize: 16, color: '#3c4a42' },
  statValue: { fontSize: 28, fontWeight: '700', color: '#006c49' },
  progressBg: { height: 8, backgroundColor: 'rgba(187,202,191,0.3)', borderRadius: 4, overflow: 'hidden', marginBottom: 16 },
  progressFill: { height: '100%', backgroundColor: '#006c49', borderRadius: 4 },
  tableSection: { marginTop: 40 },
  tableTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d', marginBottom: 24 },
  tableContainer: { backgroundColor: '#fff', borderRadius: 16, overflow: 'hidden', borderWidth: 1, borderColor: 'rgba(187,202,191,0.3)' },
  tableHeader: { flexDirection: 'row', backgroundColor: '#edeeef', paddingVertical: 12, paddingHorizontal: 24 },
  tableCol: { flex: 1, fontSize: 12, fontWeight: '700', color: '#3c4a42' },
  tableRow: { flexDirection: 'row', paddingVertical: 16, paddingHorizontal: 24, borderTopWidth: 1, borderTopColor: 'rgba(187,202,191,0.2)' },
  tableCell: { flex: 1, justifyContent: 'center' },
  avatar: { width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  avatarText: { fontSize: 14, fontWeight: '700' },
  cellTitle: { fontSize: 16, fontWeight: '700', color: '#191c1d' },
  cellSub: { fontSize: 12, color: '#3c4a42' },
  roleBadge: { alignSelf: 'flex-start', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 16 },
  roleBadgeText: { fontSize: 12, fontWeight: '700' },
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
