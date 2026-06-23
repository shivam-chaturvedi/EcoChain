import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Svg, { Circle } from 'react-native-svg';

export default function ClassroomManagementScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Icon name="eco" size={24} color="#006c49" />
          <Text style={styles.logoText}>EcoSchools Admin</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.navLink}><Text style={[styles.navLinkText, { color: '#006c49' }]}>Dashboard</Text></TouchableOpacity>
          <TouchableOpacity style={styles.navLink}><Text style={styles.navLinkText}>Initiatives</Text></TouchableOpacity>
          <TouchableOpacity style={styles.navLink}><Text style={styles.navLinkText}>Teachers</Text></TouchableOpacity>
          <TouchableOpacity style={styles.navLink}><Text style={styles.navLinkText}>Analytics</Text></TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}><Icon name="notifications" size={24} color="#3c4a42" /></TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <View style={styles.heroLeft}>
            <Text style={styles.heroTitle}>Classroom Management</Text>
            <Text style={styles.heroSubtitle}>Oversee teacher assignments and monitor real-time class engagement.</Text>
          </View>
          <View style={styles.heroRight}>
            <TouchableOpacity style={styles.primaryBtn}>
              <Icon name="add" size={16} color="#ffffff" />
              <Text style={styles.primaryBtnText}>CREATE NEW CLASS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryBtn}>
              <Icon name="swap-horiz" size={16} color="#191c1d" />
              <Text style={styles.secondaryBtnText}>MOVE STUDENTS</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Content Layout */}
        <View style={styles.mainLayout}>
          {/* Analytics Card */}
          <View style={styles.analyticsCard}>
            <View style={styles.acHeader}>
              <Text style={styles.acTitle}>Class Analytics</Text>
              <Icon name="monitoring" size={24} color="#005ac2" />
            </View>
            <View style={styles.acRingWrap}>
              <Svg width="160" height="160" viewBox="0 0 160 160" style={{ transform: [{ rotate: '-90deg' }] }}>
                <Circle cx="80" cy="80" r="75" stroke="rgba(0,108,73,0.1)" strokeWidth="12" fill="transparent" />
                <Circle cx="80" cy="80" r="75" stroke="#006c49" strokeWidth="12" strokeDasharray="471" strokeDashoffset="118" strokeLinecap="round" fill="transparent" />
              </Svg>
              <View style={styles.acRingCenter}>
                <Text style={styles.acRingVal}>75%</Text>
                <Text style={styles.acRingLabel}>Participation</Text>
              </View>
            </View>
            <View style={styles.acStats}>
              <View style={styles.acStatRow}>
                <Text style={styles.acStatLabel}>Avg. Initiative Completion</Text>
                <Text style={styles.acStatVal}>82%</Text>
              </View>
              <View style={styles.acProgressBg}>
                <View style={[styles.acProgressFill, { width: '82%' }]} />
              </View>
            </View>
            <TouchableOpacity style={styles.acBtn}>
              <Text style={styles.acBtnText}>View Detailed Reports</Text>
            </TouchableOpacity>
          </View>

          {/* Classes Grid */}
          <View style={styles.classesGrid}>
            {/* Card 1 */}
            <View style={styles.classCard}>
              <View style={styles.ccHeader}>
                <View>
                  <View style={[styles.statusBadge, { backgroundColor: '#10b981' }]}><Text style={styles.statusText}>Active</Text></View>
                  <Text style={styles.ccTitle}>Grade 9-A</Text>
                </View>
                <Icon name="more-vert" size={24} color="#3c4a42" />
              </View>
              <View style={styles.teacherRow}>
                <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6pE3pRzJpMCPrceKXBf_Yy7bLo8-r5ZeF_mJyw3ctgi18UgHaeJvVuME4-FxPGCS57_GyPNVp6HjpAbrRrJ2Zy8RJivzmN68omDAOREq7JrV09iO48uy1x1G6JOmn7W9e7fotptAQTWRjvZN2HT7j32bkyWzmSyR_Q5ryen5_tH_tAsOcRCZ9lC9pTJQj3wcKX6tJ7h-fOCcVfNU0z5q2alby4F-Sk4sQ_TtnLzxmUUfNt90kt2ljH8a5n04EMRusiGpHSvTLkIWu' }} style={styles.teacherAvatar} />
                <View>
                  <Text style={styles.teacherLabel}>TEACHER ASSIGNED</Text>
                  <Text style={styles.teacherName}>Ms. Elena Rivera</Text>
                </View>
              </View>
              <View style={styles.ccFooter}>
                <View style={styles.studentCount}>
                  <Icon name="group" size={20} color="#3c4a42" />
                  <Text style={styles.studentCountText}>28 Students</Text>
                </View>
                <TouchableOpacity style={styles.assignBtn}><Text style={styles.assignBtnText}>Assign Teacher</Text></TouchableOpacity>
              </View>
            </View>

            {/* Card 2 */}
            <View style={[styles.classCard, { borderColor: '#10b981', borderWidth: 2, backgroundColor: '#ffffff' }]}>
              <View style={styles.ccHeader}>
                <View>
                  <View style={[styles.statusBadge, { backgroundColor: '#71a1ff' }]}><Text style={[styles.statusText, { color: '#00367a' }]}>Top Performer</Text></View>
                  <Text style={styles.ccTitle}>Grade 10-B</Text>
                </View>
                <Icon name="more-vert" size={24} color="#3c4a42" />
              </View>
              <View style={styles.teacherRow}>
                <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrsiwFebjlpA5mtvjNLEc6jTRMmWkwYKwShG7noWMBtI0KvrhJkydwiuqjJ7WYtvZtV1T7D_qfQyCpYhxDb1Ou7GQPD17mkHKt6heIPrc-MI5wsyzDv0nVJlWgZSPxIIN5z0tDjSeYC_1i9fs7xbOuFmZAsuA_AjdLP1UBsvK6RFutqeLDm4wzW28LgndkSjUpBX8vKRYbi1dyQ7XVJaOpq0yqYPRZ6dAC9hrxVAHQVSMDuib_WUVVltNbbhY6B_P3mDF8hdrT_SaO' }} style={styles.teacherAvatar} />
                <View>
                  <Text style={styles.teacherLabel}>TEACHER ASSIGNED</Text>
                  <Text style={styles.teacherName}>Mr. David Chen</Text>
                </View>
              </View>
              <View style={styles.ccFooter}>
                <View style={styles.studentCount}>
                  <Icon name="group" size={20} color="#3c4a42" />
                  <Text style={styles.studentCountText}>32 Students</Text>
                </View>
                <TouchableOpacity style={styles.assignBtn}><Text style={styles.assignBtnText}>Assign Teacher</Text></TouchableOpacity>
              </View>
            </View>

            {/* Card 3 */}
            <View style={styles.classCard}>
              <View style={styles.ccHeader}>
                <View>
                  <View style={[styles.statusBadge, { backgroundColor: '#e7e8e9' }]}><Text style={[styles.statusText, { color: '#3c4a42' }]}>Pending Assign.</Text></View>
                  <Text style={styles.ccTitle}>Grade 11-C</Text>
                </View>
                <Icon name="more-vert" size={24} color="#3c4a42" />
              </View>
              <View style={[styles.teacherRow, { opacity: 0.6 }]}>
                <View style={[styles.teacherAvatar, { backgroundColor: '#edeeef', alignItems: 'center', justifyContent: 'center' }]}>
                  <Icon name="person-off" size={20} color="#6c7a71" />
                </View>
                <View>
                  <Text style={styles.teacherLabel}>TEACHER ASSIGNED</Text>
                  <Text style={[styles.teacherName, { fontStyle: 'italic' }]}>No teacher assigned</Text>
                </View>
              </View>
              <View style={styles.ccFooter}>
                <View style={styles.studentCount}>
                  <Icon name="group" size={20} color="#3c4a42" />
                  <Text style={styles.studentCountText}>24 Students</Text>
                </View>
                <TouchableOpacity style={styles.assignNowBtn}><Text style={styles.assignNowBtnText}>Assign Now</Text></TouchableOpacity>
              </View>
            </View>

            {/* Card 4 */}
            <View style={styles.classCard}>
              <View style={styles.ccHeader}>
                <View>
                  <View style={[styles.statusBadge, { backgroundColor: '#10b981' }]}><Text style={styles.statusText}>Active</Text></View>
                  <Text style={styles.ccTitle}>Grade 12-A</Text>
                </View>
                <Icon name="more-vert" size={24} color="#3c4a42" />
              </View>
              <View style={styles.teacherRow}>
                <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwIp_-nL7RL4IaYSjSWPjACOzd7fMtJnepHCNEPkds4-9zVW-BQZb9bGKCL4MAdlx9g6slvmXiEtQmRdUpn45bq4ejcOQN2M2WmkQBRmwDzF_lqfa_BS0V1JEbmx94XEryN1S56RCt0BrkrrFdDoyCcWcppOsCji6zmlIQmR6s4dzLyBx67-abCGWUogpxnsdxTJQgx2sCeA1lZ9wAJNaxGbhKH_yeLuqQdXDO506_rt2xfZ7tsPwQyn8CP5fG3LW6XbecY1xHHSQ5' }} style={styles.teacherAvatar} />
                <View>
                  <Text style={styles.teacherLabel}>TEACHER ASSIGNED</Text>
                  <Text style={styles.teacherName}>Dr. Sarah Mensah</Text>
                </View>
              </View>
              <View style={styles.ccFooter}>
                <View style={styles.studentCount}>
                  <Icon name="group" size={20} color="#3c4a42" />
                  <Text style={styles.studentCountText}>19 Students</Text>
                </View>
                <TouchableOpacity style={styles.assignBtn}><Text style={styles.assignBtnText}>Assign Teacher</Text></TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, height: 64, backgroundColor: 'rgba(248,249,250,0.8)', borderBottomWidth: 1, borderBottomColor: 'rgba(187,202,191,0.3)' },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  logoText: { fontSize: 24, fontWeight: '800', color: '#006c49', letterSpacing: -0.5 },
  headerRight: { flexDirection: 'row', alignItems: 'center', gap: 24 },
  navLink: {},
  navLinkText: { fontSize: 16, fontWeight: '700', color: '#3c4a42' },
  iconBtn: { padding: 4 },
  scrollContent: { paddingHorizontal: 24, paddingTop: 64, paddingBottom: 100 },
  
  heroSection: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 24, marginBottom: 40 },
  heroLeft: {},
  heroTitle: { fontSize: 32, fontWeight: '700', color: '#191c1d' },
  heroSubtitle: { fontSize: 18, color: '#3c4a42', marginTop: 8 },
  heroRight: { flexDirection: 'row', gap: 8, flexWrap: 'wrap' },
  primaryBtn: { flexDirection: 'row', alignItems: 'center', gap: 4, backgroundColor: '#006c49', paddingHorizontal: 24, paddingVertical: 12, borderRadius: 24, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4 },
  primaryBtnText: { fontSize: 12, fontWeight: '700', color: '#ffffff', letterSpacing: 0.5 },
  secondaryBtn: { flexDirection: 'row', alignItems: 'center', gap: 4, backgroundColor: '#edeeef', paddingHorizontal: 24, paddingVertical: 12, borderRadius: 24, borderWidth: 1, borderColor: 'rgba(187,202,191,0.3)' },
  secondaryBtnText: { fontSize: 12, fontWeight: '700', color: '#191c1d', letterSpacing: 0.5 },

  mainLayout: { flexDirection: 'row', flexWrap: 'wrap', gap: 24 },
  
  analyticsCard: { flex: 1, minWidth: 300, backgroundColor: 'rgba(255,255,255,0.7)', padding: 24, borderRadius: 16, borderWidth: 1, borderColor: 'rgba(255,255,255,0.3)', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 8 },
  acHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  acTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d' },
  acRingWrap: { alignItems: 'center', justifyContent: 'center', paddingVertical: 32 },
  acRingCenter: { position: 'absolute', alignItems: 'center', justifyContent: 'center' },
  acRingVal: { fontSize: 28, fontWeight: '700', color: '#006c49' },
  acRingLabel: { fontSize: 12, fontWeight: '700', color: '#3c4a42', textTransform: 'uppercase' },
  acStats: { marginBottom: 24 },
  acStatRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  acStatLabel: { fontSize: 16, color: '#3c4a42' },
  acStatVal: { fontSize: 16, fontWeight: '700', color: '#191c1d' },
  acProgressBg: { width: '100%', height: 8, backgroundColor: '#edeeef', borderRadius: 4, overflow: 'hidden' },
  acProgressFill: { height: '100%', backgroundColor: '#005ac2', borderRadius: 4 },
  acBtn: { paddingVertical: 12, alignItems: 'center' },
  acBtnText: { fontSize: 16, fontWeight: '700', color: '#006c49' },

  classesGrid: { flex: 2, minWidth: 300, flexDirection: 'row', flexWrap: 'wrap', gap: 24 },
  classCard: { flex: 1, minWidth: 280, backgroundColor: 'rgba(255,255,255,0.7)', padding: 24, borderRadius: 16, borderWidth: 1, borderColor: 'rgba(187,202,191,0.2)', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 8 },
  ccHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 },
  statusBadge: { alignSelf: 'flex-start', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 12, marginBottom: 8 },
  statusText: { fontSize: 12, fontWeight: '700', color: '#ffffff', textTransform: 'uppercase' },
  ccTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d' },
  teacherRow: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 12, borderTopWidth: 1, borderBottomWidth: 1, borderColor: 'rgba(187,202,191,0.1)', marginVertical: 16 },
  teacherAvatar: { width: 40, height: 40, borderRadius: 20 },
  teacherLabel: { fontSize: 10, fontWeight: '700', color: '#3c4a42', textTransform: 'uppercase', letterSpacing: 1 },
  teacherName: { fontSize: 16, fontWeight: '700', color: '#191c1d' },
  ccFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  studentCount: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  studentCountText: { fontSize: 16, color: '#3c4a42' },
  assignBtn: { paddingHorizontal: 12, paddingVertical: 6 },
  assignBtnText: { fontSize: 16, fontWeight: '700', color: '#005ac2' },
  assignNowBtn: { backgroundColor: '#006c49', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2 },
  assignNowBtnText: { fontSize: 12, fontWeight: '700', color: '#ffffff' },
});
