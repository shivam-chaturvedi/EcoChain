import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TextInput,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function TeachersOverviewScreen({ navigation }: any) {
  const teachers = [
    {
      name: 'Dr. Sarah Jenkins',
      subjects: 'Advanced Ecology • Environmental Law',
      engagement: 94,
      level: 12,
      classes: 4,
      approvals: 42,
      students: 186,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZuPsLNq2gMB_u7Nr9E_Ac3nXw_BfM9ZoFX_o5_7G5SgHWFr2FxeEwPOjNN4SpkmxTtj8futjBGB-M4bMbM3K0It7fOT3K4hbZcKpvvV4udY6nwBGhl552cMd9hqEK5-fNWUEg80AJ7bcliHR9asaUML6jYysxRpXIk2_4bC8_LvfC9Jygb7qMBEA8yhxvPwMQA5eb-uVnfBk__ReRQqXCTL6Hv3_mj86iD6x4mEqHeqteZ50nbjS6FoXBkE8bJzbvbAxF_dPbUSKz',
      status: 'active'
    },
    {
      name: 'Markus Aurelius',
      subjects: 'Sustainable Design • Urban Planning',
      engagement: 78,
      level: 8,
      classes: 2,
      approvals: 15,
      students: 112,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxkzQduq0xDraRssK8j8rYkNA3a86g5huiFAQ0Ys0s8X4liTKDQSF5s56iqwJGF0p9vZAi5b1EfvGdnqKDODVnKNCz3vxD-DgM637We1I6ZCTekusQOCEO9BylJ2y7NrzHr7OTvt21CjmQkiaFdaGWGmfvXtcLsWLMxxC9DItpGHtB9ZbdCNadDXwcZ3ObPW9s1IZVPsRbduN-ytNcW9BvybUqOf1EimUYFmQC3_SzQZD7iHdBos3nusiflPfZ1p18VsBHBohZ7RYY',
      status: 'warning'
    },
    {
      name: 'Elena Rodriguez',
      subjects: 'Circular Economics • Ethics',
      engagement: 98,
      level: 15,
      classes: 5,
      approvals: 89,
      students: 245,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDP8kc-xMZNd3UBjLwZvpDaVouHYx7OEU748NBwgnIhZWjIkfzwiDQ8IBMHlw6v3CZqjUWfgvxterMlEFHp3obH8at964mhRShFf26QsLTjM1zy2YcuhBgqvASNOZNABciAl932QQqJrgtBVQYVHGI-4zuNR2oEdB-laxqsfV5Zoekw6yueLFOBuX28_zTRMATpPJIJi_zpy9KJ8mhWriOKpOdV_XelvexJ5GlraCWsYcBYAjjY_No0WUjXdtDQuEC66nTVCzvhNQgo',
      status: 'star'
    }
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} color="#006c49" />
          </TouchableOpacity>
          <View style={styles.logoBadge}>
            <Icon name="school" size={20} color="#fff" />
          </View>
          <Text style={styles.headerTitle}>ChonX</Text>
        </View>
        <View style={styles.headerNav}>
          <Text style={styles.navLink}>Dashboard</Text>
          <Text style={styles.navLink}>Initiatives</Text>
          <Text style={styles.navLinkActive}>Overview</Text>
          <Text style={styles.navLink}>Analytics</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Page Title & Search */}
        <View style={styles.pageHeader}>
          <View>
            <Text style={styles.pageTitle}>Faculty Overview</Text>
            <Text style={styles.pageSubtitle}>School Coordinator Portal • Managing 128 active faculty members.</Text>
          </View>
          <View style={styles.searchWrapper}>
            <Icon name="search" size={24} color="#6c7a71" style={styles.searchIcon} />
            <TextInput style={styles.searchInput} placeholder="Search by name, class..." placeholderTextColor="rgba(60, 74, 66, 0.5)" />
          </View>
        </View>

        {/* Stats Cards */}
        <View style={styles.statsGrid}>
          {/* Approvals */}
          <View style={styles.statCard}>
            <View style={styles.statIconRow}>
              <View style={[styles.iconBox, { backgroundColor: 'rgba(109,245,225,0.3)' }]}>
                <Icon name="verified-user" size={20} color="#006b5f" />
              </View>
              <Text style={styles.statLabel}>APPROVALS PENDING</Text>
            </View>
            <Text style={styles.statValue}>14</Text>
            <View style={styles.progressTrack}>
              <View style={[styles.progressFill, { width: '65%', backgroundColor: '#006b5f' }]} />
            </View>
          </View>
          
          {/* Engagement */}
          <View style={styles.statCard}>
            <View style={styles.statIconRow}>
              <View style={[styles.iconBox, { backgroundColor: 'rgba(16,185,129,0.3)' }]}>
                <Icon name="trending-up" size={20} color="#006c49" />
              </View>
              <Text style={styles.statLabel}>AVERAGE ENGAGEMENT</Text>
            </View>
            <Text style={styles.statValue}>82<Text style={{fontSize: 16, fontWeight: 'normal', color: '#6c7a71'}}>/100</Text></Text>
            <View style={styles.barChartRow}>
              <View style={styles.barFill} />
              <View style={styles.barFill} />
              <View style={styles.barFill} />
              <View style={styles.barFill} />
              <View style={styles.barEmpty} />
            </View>
          </View>

          {/* Students */}
          <View style={styles.statCard}>
            <View style={styles.statIconRow}>
              <View style={[styles.iconBox, { backgroundColor: 'rgba(113,161,255,0.3)' }]}>
                <Icon name="diversity-3" size={20} color="#005ac2" />
              </View>
              <Text style={styles.statLabel}>TOTAL STUDENTS</Text>
            </View>
            <Text style={styles.statValue}>3,240</Text>
            <Text style={styles.statSubText}>+12% from last semester</Text>
          </View>
        </View>

        {/* Teacher Cards */}
        <View style={styles.teachersGrid}>
          {teachers.map((teacher, idx) => (
            <View key={idx} style={styles.teacherCard}>
              <View style={styles.teacherTopRow}>
                <View style={styles.avatarContainer}>
                  <Image source={{uri: teacher.img}} style={styles.teacherAvatar} />
                  <View style={[styles.levelBadge, teacher.status === 'warning' ? {backgroundColor: '#006b5f'} : {backgroundColor: '#006c49'}]}>
                    <Text style={styles.levelBadgeText}>LEVEL {teacher.level}</Text>
                  </View>
                </View>
                <View style={styles.teacherInfo}>
                  <Text style={styles.teacherName}>{teacher.name}</Text>
                  <Text style={styles.teacherSubjects}>{teacher.subjects}</Text>
                </View>
                <View style={styles.engagementBox}>
                  <Text style={styles.engagementValue}>{teacher.engagement}%</Text>
                  <Text style={styles.engagementLabel}>ENGAGEMENT</Text>
                </View>
              </View>

              <View style={styles.statsRow}>
                <View style={styles.miniStatBox}>
                  <Text style={styles.miniStatVal}>{teacher.classes}</Text>
                  <Text style={styles.miniStatLabel}>CLASSES</Text>
                </View>
                <View style={styles.miniStatBox}>
                  <Text style={styles.miniStatVal}>{teacher.approvals}</Text>
                  <Text style={styles.miniStatLabel}>APPROVALS</Text>
                </View>
                <View style={styles.miniStatBox}>
                  <Text style={styles.miniStatVal}>{teacher.students}</Text>
                  <Text style={styles.miniStatLabel}>STUDENTS</Text>
                </View>
              </View>

              <View style={styles.teacherBottomRow}>
                <View style={styles.statusDisplay}>
                  {teacher.status === 'warning' && (
                    <View style={styles.warningBox}>
                      <Icon name="warning" size={16} color="#ba1a1a" />
                      <Text style={styles.warningText}>3 Approvals Pending</Text>
                    </View>
                  )}
                  {teacher.status === 'star' && (
                    <View style={styles.starBox}>
                      <Icon name="star" size={16} color="#006b5f" />
                      <Text style={styles.starText}>Top Performer</Text>
                    </View>
                  )}
                  {teacher.status === 'active' && (
                    <View style={styles.avatarStack}>
                       <View style={styles.miniAv} />
                       <View style={styles.miniAv} />
                       <View style={styles.miniAv} />
                       <View style={styles.miniAvTextWrapper}><Text style={styles.miniAvText}>+12</Text></View>
                    </View>
                  )}
                </View>
                <TouchableOpacity style={styles.viewProfileBtn}>
                  <Text style={styles.viewProfileText}>View Profile</Text>
                  <Icon name="chevron-right" size={16} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        {/* Load More */}
        <TouchableOpacity style={styles.loadMoreBtn}>
          <Text style={styles.loadMoreText}>Load More Teachers (124 remaining)</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { height: 80, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 24, backgroundColor: 'rgba(248, 249, 250, 0.8)', borderBottomWidth: 1, borderBottomColor: 'rgba(187, 202, 191, 0.3)' },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  backBtn: { padding: 8, marginLeft: -8 },
  logoBadge: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#10b981', alignItems: 'center', justifyContent: 'center' },
  headerTitle: { fontSize: 28, fontWeight: '800', color: '#006c49', letterSpacing: -1 },
  headerNav: { flexDirection: 'row', gap: 40, display: 'none' }, // Desktop only in original
  navLink: { fontSize: 16, color: '#3c4a42' },
  navLinkActive: { fontSize: 16, fontWeight: '600', color: '#006c49', paddingHorizontal: 16, paddingVertical: 8, backgroundColor: 'rgba(16,185,129,0.2)', borderRadius: 20 },
  scrollContent: { padding: 24, paddingBottom: 64 },
  pageHeader: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, marginBottom: 40 },
  pageTitle: { fontSize: 32, fontWeight: '700', color: '#191c1d', marginBottom: 4 },
  pageSubtitle: { fontSize: 16, color: '#3c4a42' },
  searchWrapper: { relative: true, width: '100%', maxWidth: 384 },
  searchIcon: { position: 'absolute', left: 16, top: 16, zIndex: 1 },
  searchInput: { backgroundColor: '#f3f4f5', borderRadius: 8, paddingLeft: 48, paddingRight: 16, height: 56, fontSize: 16, color: '#191c1d' },
  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 24, marginBottom: 40 },
  statCard: { flex: 1, minWidth: 250, backgroundColor: '#fff', borderRadius: 8, padding: 24, borderWidth: 1, borderColor: 'rgba(187,202,191,0.3)', elevation: 1 },
  statIconRow: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 12 },
  iconBox: { padding: 8, borderRadius: 20 },
  statLabel: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 1 },
  statValue: { fontSize: 28, fontWeight: '700', color: '#191c1d', marginBottom: 16 },
  progressTrack: { height: 8, backgroundColor: '#edeeef', borderRadius: 4, overflow: 'hidden' },
  progressFill: { height: '100%', borderRadius: 4 },
  barChartRow: { flexDirection: 'row', gap: 4, height: 8 },
  barFill: { flex: 1, backgroundColor: '#006c49', borderRadius: 4 },
  barEmpty: { flex: 1, backgroundColor: '#edeeef', borderRadius: 4 },
  statSubText: { fontSize: 14, color: '#3c4a42' },
  teachersGrid: { gap: 24, marginBottom: 40 },
  teacherCard: { backgroundColor: '#fff', borderRadius: 8, padding: 24, borderWidth: 1, borderColor: 'rgba(187,202,191,0.3)', elevation: 1 },
  teacherTopRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 16, marginBottom: 16 },
  avatarContainer: { relative: true },
  teacherAvatar: { width: 96, height: 96, borderRadius: 8, borderWidth: 2, borderColor: '#e1e3e4' },
  levelBadge: { position: 'absolute', bottom: -8, right: -8, paddingHorizontal: 8, paddingVertical: 4, borderRadius: 12, borderWidth: 2, borderColor: '#fff' },
  levelBadgeText: { fontSize: 10, fontWeight: 'bold', color: '#fff' },
  teacherInfo: { flex: 1, minWidth: 150 },
  teacherName: { fontSize: 24, fontWeight: '600', color: '#191c1d', marginBottom: 4 },
  teacherSubjects: { fontSize: 14, fontWeight: '600', color: '#006c49' },
  engagementBox: { alignItems: 'flex-end' },
  engagementValue: { fontSize: 20, fontWeight: '700', color: '#006b5f' },
  engagementLabel: { fontSize: 10, fontWeight: '700', color: '#6c7a71', letterSpacing: 1 },
  statsRow: { flexDirection: 'row', gap: 12, marginBottom: 24 },
  miniStatBox: { flex: 1, backgroundColor: '#f3f4f5', padding: 8, borderRadius: 8, alignItems: 'center' },
  miniStatVal: { fontSize: 16, fontWeight: 'bold', color: '#191c1d' },
  miniStatLabel: { fontSize: 10, color: '#3c4a42', textTransform: 'uppercase' },
  teacherBottomRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  statusDisplay: { flex: 1 },
  warningBox: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  warningText: { fontSize: 12, fontWeight: '600', color: '#ba1a1a' },
  starBox: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  starText: { fontSize: 12, fontWeight: '600', color: '#006b5f' },
  avatarStack: { flexDirection: 'row', alignItems: 'center', marginLeft: 8 },
  miniAv: { width: 24, height: 24, borderRadius: 12, backgroundColor: '#edeeef', borderWidth: 2, borderColor: '#fff', marginLeft: -8 },
  miniAvTextWrapper: { width: 24, height: 24, borderRadius: 12, backgroundColor: '#bbcabf', borderWidth: 2, borderColor: '#fff', marginLeft: -8, alignItems: 'center', justifyContent: 'center' },
  miniAvText: { fontSize: 8, fontWeight: 'bold', color: '#fff' },
  viewProfileBtn: { backgroundColor: '#006c49', flexDirection: 'row', alignItems: 'center', gap: 4, paddingHorizontal: 24, paddingVertical: 8, borderRadius: 20 },
  viewProfileText: { fontSize: 14, fontWeight: '600', color: '#fff' },
  loadMoreBtn: { alignSelf: 'center', backgroundColor: '#e1e3e4', paddingHorizontal: 32, paddingVertical: 16, borderRadius: 32 },
  loadMoreText: { fontSize: 16, fontWeight: '700', color: '#191c1d' },
});
