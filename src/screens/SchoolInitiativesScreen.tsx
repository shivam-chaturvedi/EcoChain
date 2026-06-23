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

export default function SchoolInitiativesScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.logoWrapper}>
            <Image 
              source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCywzvpZWvBhBOYyj3pFvoKhsSIX7SusI2dV5UivIuULXA3NLd7uqlj6l-pm4_HFUn5sDBF14kQkIIX90sOHzRiMTcHCHFPsjPks3WFRMgGWRs4SvPWBJSRRumDPRoO88U8PLl-LVeUzqu1xXMPTFTYEN3d3f3aO8DGv0F-crhaut8fw200DX9Hf9EmN5od0ZEZeSf5SU71iWRHy8IV-PhM6JE_714JcUKKAeFAtLuvrn4iwrMR2hua8xgOxtE_eSQlFBqH6XQsfcnS'}}
              style={styles.logoImage}
            />
          </View>
          <Text style={styles.logoText}>ChonX</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconBtn}>
            <Icon name="search" size={24} color="#006c49" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <Icon name="settings" size={24} color="#006c49" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.heroSection}>
          <View>
            <Text style={styles.heroTitle}>Initiatives</Text>
            <Text style={styles.heroSubtitle}>Drive environmental impact through collaborative student-led projects across the campus.</Text>
          </View>
          <TouchableOpacity style={styles.createBtn}>
            <Icon name="add" size={20} color="#fff" />
            <Text style={styles.createBtnText}>Create Initiative</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.tabsContainer}>
          <View style={styles.tabsBg}>
            <TouchableOpacity style={styles.tabActive}>
              <Text style={styles.tabTextActive}>Active Initiatives</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}>
              <Text style={styles.tabText}>Completed Initiatives</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.grid}>
          {/* Initiative 1 */}
          <View style={styles.card}>
            <View style={styles.cardImageWrapper}>
              <Image 
                source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdltq0SD6_gJI5vLIci7rxlYkCBBKG14q2PjklexMDEBHNaB9AS_pZrAyS0hwO0q7tO2LOfrOMmJXWiI4N3vXlNSk_Tt77fim-xaQo82bI8trKMtQMldJjRjJlYpb1yGkAcGZQ1omQouw_YbtjktOqMnG6iTeKYP8tM51PgC4R_T_7d1C1xiEPcRxfVaMzU1TPKRspF0XeGA5EHZCJ-BQOMZJxHY8IjLjyQM1JptZwebdpLNvxPXJJ_H4iR9F6H7edAoO_QxVBrdrS'}}
                style={styles.cardImage}
              />
              <View style={styles.badge}>
                <Text style={styles.badgeText}>Active</Text>
              </View>
            </View>
            <View style={styles.cardContent}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>Campus Reforestation</Text>
                <View style={styles.ecoScore}>
                  <Icon name="eco" size={18} color="#006c49" />
                  <Text style={styles.ecoScoreText}>450</Text>
                </View>
              </View>
              <Text style={styles.cardDesc} numberOfLines={2}>Planting 200 native tree species across the north quad to enhance local biodiversity and provide natural shade.</Text>
              
              <View style={styles.statsGrid}>
                <View style={styles.statBox}>
                  <Icon name="groups" size={20} color="#6c7a71" />
                  <View>
                    <Text style={styles.statLabel}>CLASSES</Text>
                    <Text style={styles.statValue}>12 Participating</Text>
                  </View>
                </View>
                <View style={styles.statBox}>
                  <Icon name="schedule" size={20} color="#6c7a71" />
                  <View>
                    <Text style={styles.statLabel}>TOTAL HOURS</Text>
                    <Text style={styles.statValue}>1,240 hrs</Text>
                  </View>
                </View>
              </View>

              <View style={styles.cardFooter}>
                <View style={styles.progressHeader}>
                  <Text style={styles.progressLabel}>Progress</Text>
                  <Text style={styles.progressValue}>62%</Text>
                </View>
                <View style={styles.progressBarBg}>
                  <View style={[styles.progressBarFill, { width: '62%' }]} />
                </View>
                <TouchableOpacity style={styles.outlineBtn}>
                  <Text style={styles.outlineBtnText}>View Details</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Initiative 2 */}
          <View style={styles.card}>
            <View style={styles.cardImageWrapper}>
              <Image 
                source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDonFPYVrt2G2xwjOi0i5AiWYjdGGz6ewA5vOZG8vE3De0KxU4xsQoy9LbUhrAj5wJ_3ymi53JZ8Nrp40rJ2fmUPTZYi9nyc_2JhcHhAAVsFPT2_XIQy1GJSm98UjYGmeRFNWBQ2qKbwCI9VIs_8R3GdSrCmZSXSvkhhY6FYAuerveNJcFdDCK3JCmkBNnYjz0eI-j8J7u-WY4dyBgk3ANcedckbrRf76xXorlc2P3WEpG7tArsas1vvdxfX4l2K2iidsoMhgp9ih2o'}}
                style={styles.cardImage}
              />
              <View style={styles.badge}>
                <Text style={styles.badgeText}>Active</Text>
              </View>
            </View>
            <View style={styles.cardContent}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>Zero Waste Cafeteria</Text>
                <View style={styles.ecoScore}>
                  <Icon name="eco" size={18} color="#006c49" />
                  <Text style={styles.ecoScoreText}>820</Text>
                </View>
              </View>
              <Text style={styles.cardDesc} numberOfLines={2}>Implementing a full-scale composting system and eliminating single-use plastics from student lunch services.</Text>
              
              <View style={styles.statsGrid}>
                <View style={styles.statBox}>
                  <Icon name="groups" size={20} color="#6c7a71" />
                  <View>
                    <Text style={styles.statLabel}>CLASSES</Text>
                    <Text style={styles.statValue}>8 Participating</Text>
                  </View>
                </View>
                <View style={styles.statBox}>
                  <Icon name="schedule" size={20} color="#6c7a71" />
                  <View>
                    <Text style={styles.statLabel}>TOTAL HOURS</Text>
                    <Text style={styles.statValue}>890 hrs</Text>
                  </View>
                </View>
              </View>

              <View style={styles.cardFooter}>
                <View style={styles.progressHeader}>
                  <Text style={styles.progressLabel}>Progress</Text>
                  <Text style={styles.progressValue}>45%</Text>
                </View>
                <View style={styles.progressBarBg}>
                  <View style={[styles.progressBarFill, { width: '45%' }]} />
                </View>
                <TouchableOpacity style={styles.outlineBtn}>
                  <Text style={styles.outlineBtnText}>View Details</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.activitySection}>
          <Text style={styles.sectionTitle}>Recent Activity Log</Text>
          <View style={styles.activityList}>
            <View style={styles.activityItem}>
              <View style={[styles.activityIcon, { backgroundColor: '#6df5e1' }]}>
                <Icon name="psychology" size={24} color="#006f64" />
              </View>
              <View style={styles.activityContent}>
                <Text style={styles.activityTitle}>Grade 10 Biology - Soil Testing</Text>
                <Text style={styles.activityDesc}>Logged 45 hours for Campus Reforestation</Text>
              </View>
              <View style={styles.activityRight}>
                <Text style={styles.activityScore}>+150 Credits</Text>
                <Text style={styles.activityTime}>2 hours ago</Text>
              </View>
            </View>

            <View style={styles.activityItem}>
              <View style={[styles.activityIcon, { backgroundColor: '#71a1ff' }]}>
                <Icon name="science" size={24} color="#00367a" />
              </View>
              <View style={styles.activityContent}>
                <Text style={styles.activityTitle}>Grade 12 Physics - Inverter Analysis</Text>
                <Text style={styles.activityDesc}>Logged 22 hours for Solar Roof Project</Text>
              </View>
              <View style={styles.activityRight}>
                <Text style={styles.activityScore}>+80 Credits</Text>
                <Text style={styles.activityTime}>5 hours ago</Text>
              </View>
            </View>
          </View>
        </View>

      </ScrollView>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <View style={styles.navItem}>
          <Icon name="dashboard" size={24} color="#3c4a42" />
          <Text style={styles.navText}>Dashboard</Text>
        </View>
        <View style={styles.navItemActive}>
          <Icon name="eco" size={24} color="#00422b" />
          <Text style={styles.navTextActive}>Initiatives</Text>
        </View>
        <View style={styles.navItem}>
          <Icon name="groups" size={24} color="#3c4a42" />
          <Text style={styles.navText}>Teachers</Text>
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
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  logoWrapper: { width: 40, height: 40, borderRadius: 20, overflow: 'hidden', backgroundColor: '#10b981' },
  logoImage: { width: '100%', height: '100%' },
  logoText: { fontSize: 24, fontWeight: '800', color: '#006c49', lineHeight: 24 },
  headerRight: { flexDirection: 'row', gap: 8 },
  iconBtn: { padding: 8 },
  scrollContent: { padding: 24, paddingBottom: 100 },
  heroSection: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, marginBottom: 24 },
  heroTitle: { fontSize: 32, fontWeight: '700', color: '#191c1d', marginBottom: 8 },
  heroSubtitle: { fontSize: 18, color: '#3c4a42', maxWidth: 600 },
  createBtn: { flexDirection: 'row', alignItems: 'center', gap: 8, backgroundColor: '#006c49', paddingHorizontal: 24, paddingVertical: 12, borderRadius: 24 },
  createBtnText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  tabsContainer: { marginBottom: 24 },
  tabsBg: { flexDirection: 'row', backgroundColor: '#f3f4f5', padding: 4, borderRadius: 12, alignSelf: 'flex-start' },
  tabActive: { backgroundColor: '#fff', paddingHorizontal: 24, paddingVertical: 10, borderRadius: 8, elevation: 1 },
  tabTextActive: { fontSize: 14, fontWeight: '600', color: '#006c49' },
  tab: { paddingHorizontal: 24, paddingVertical: 10 },
  tabText: { fontSize: 14, color: '#3c4a42' },
  grid: { gap: 24, marginBottom: 40 },
  card: { backgroundColor: '#fff', borderRadius: 16, overflow: 'hidden', borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)', elevation: 2 },
  cardImageWrapper: { height: 192, position: 'relative' },
  cardImage: { width: '100%', height: '100%', resizeMode: 'cover' },
  badge: { position: 'absolute', top: 16, right: 16, backgroundColor: 'rgba(16,185,129,0.9)', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 16 },
  badgeText: { fontSize: 12, fontWeight: '700', color: '#00422b' },
  cardContent: { padding: 24 },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 },
  cardTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d', flex: 1 },
  ecoScore: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  ecoScoreText: { fontSize: 16, fontWeight: '700', color: '#006c49' },
  cardDesc: { fontSize: 16, color: '#3c4a42', marginBottom: 24 },
  statsGrid: { flexDirection: 'row', gap: 16, marginBottom: 24 },
  statBox: { flex: 1, flexDirection: 'row', alignItems: 'center', gap: 8 },
  statLabel: { fontSize: 11, fontWeight: '700', color: '#6c7a71', letterSpacing: 1 },
  statValue: { fontSize: 16, fontWeight: '600', color: '#191c1d' },
  cardFooter: { marginTop: 'auto' },
  progressHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  progressLabel: { fontSize: 12, fontWeight: '700', color: '#3c4a42' },
  progressValue: { fontSize: 16, fontWeight: '700', color: '#006c49' },
  progressBarBg: { height: 10, backgroundColor: 'rgba(16,185,129,0.1)', borderRadius: 5, marginBottom: 24 },
  progressBarFill: { height: '100%', backgroundColor: '#10b981', borderRadius: 5 },
  outlineBtn: { borderWidth: 1, borderColor: 'rgba(0,108,73,0.2)', borderRadius: 8, paddingVertical: 12, alignItems: 'center' },
  outlineBtnText: { fontSize: 16, fontWeight: '600', color: '#006c49' },
  activitySection: { marginTop: 16 },
  sectionTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d', marginBottom: 24 },
  activityList: { backgroundColor: '#f3f4f5', borderRadius: 16, padding: 24, gap: 16 },
  activityItem: { flexDirection: 'row', alignItems: 'center', gap: 16, backgroundColor: '#fff', padding: 16, borderRadius: 12, borderWidth: 1, borderColor: 'rgba(187,202,191,0.1)' },
  activityIcon: { width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center' },
  activityContent: { flex: 1 },
  activityTitle: { fontSize: 16, fontWeight: '600', color: '#191c1d' },
  activityDesc: { fontSize: 14, color: '#3c4a42' },
  activityRight: { alignItems: 'flex-end' },
  activityScore: { fontSize: 14, fontWeight: '700', color: '#006c49' },
  activityTime: { fontSize: 12, color: '#6c7a71' },
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
