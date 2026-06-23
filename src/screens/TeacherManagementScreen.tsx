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

export default function TeacherManagementScreen({ navigation }: any) {
  const teachers = [
    {
      name: 'Sarah Jenkins',
      email: 's.jenkins@school.edu',
      subject: 'Science',
      status: 'Active',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvmj3SwsLnnv_OITqs_pdnj1bfNKu0MDC-AzlhWcratjANYRppmXoKEALXEhDzfS1YdUEJSvyx6iT35HJvOPkF8g0qFJSxxN1tgAuWSBa5Dl9yPfZMzjpICeftrORXwNccRLfK3cD0-h1BhiQCPIbVGEsJAcQ9A6wmxuwZR_6KeHm-uSDjeNbBrL9FGVOFY-JC8skYk_lyCuw1CKzZsTnFbmUgnMu2VZ7gY3ZlqO1DCyHfPHlxton9_AtLDxnoA73UoPbqP6A_Vt2d'
    },
    {
      name: 'David Miller',
      email: 'd.miller@school.edu',
      subject: 'Mathematics',
      status: 'Active',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUcRELUD4jPcXX3xaxmbVrG3RPR0w1bRqRmYJvZERe6DdYQWJ2UIQLVUNBp9mCcL8HoGTTbqQTsoMP_sr4iAnul4xh_6F76aIEFSSWwQslJ3YzVADqin7UEa0MvJRDhPD8dn5RKVAlZCrQq5v0-p5jmfwNotmwGlYWg2-YKNddvGozAr7fiTQyYID3Z-h2fcmsv_XWqCDGWoEPFhtH6q3_5_qhxNTg8mHdoRIE5hJJ0hlGs4dcFu99pS3K9djaYNRpVSkarg3UGK1j'
    }
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Icon name="eco" size={32} color="#006c49" />
          <Text style={styles.headerTitle}>ChonX</Text>
        </View>
        <View style={styles.headerNav}>
          <Text style={styles.navLink}>Dashboard</Text>
          <Text style={styles.navLinkActive}>Teachers</Text>
          <Text style={styles.navLink}>Settings</Text>
        </View>
        <TouchableOpacity style={styles.iconBtn}>
          <Icon name="notifications" size={24} color="#3c4a42" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header Area */}
        <View style={styles.pageHeader}>
          <View style={{flex: 1, minWidth: 300}}>
            <Text style={styles.pageTitle}>Teacher Management</Text>
            <Text style={styles.pageSubtitle}>Organize your faculty members and assign academic roles to drive the school's sustainability initiatives.</Text>
          </View>
          <TouchableOpacity style={styles.addBtn}>
            <LinearGradient colors={['#10b981', '#006c49']} start={{x: 0, y: 0}} end={{x: 1, y: 1}} style={styles.addBtnGradient}>
              <Icon name="add" size={24} color="#fff" />
              <Text style={styles.addBtnText}>Add Teacher</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Stats */}
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <View style={[styles.statIconWrapper, { backgroundColor: 'rgba(16,185,129,0.2)' }]}>
              <Icon name="groups" size={24} color="#006c49" />
            </View>
            <View>
              <Text style={styles.statLabel}>TOTAL TEACHERS</Text>
              <Text style={styles.statValue}>24</Text>
            </View>
          </View>
          <View style={styles.statCard}>
            <View style={[styles.statIconWrapper, { backgroundColor: 'rgba(109,245,225,0.2)' }]}>
              <Icon name="school" size={24} color="#006b5f" />
            </View>
            <View>
              <Text style={styles.statLabel}>DEPARTMENTS</Text>
              <Text style={styles.statValue}>8</Text>
            </View>
          </View>
        </View>

        {/* Table (Card list for mobile) */}
        <View style={styles.listContainer}>
          <View style={styles.listHeader}>
            <Text style={[styles.th, { flex: 2 }]}>NAME</Text>
            <Text style={[styles.th, { flex: 2 }]}>EMAIL</Text>
            <Text style={[styles.th, { flex: 1.5 }]}>SUBJECT</Text>
            <Text style={[styles.th, { flex: 1 }]}>STATUS</Text>
            <Text style={[styles.th, { width: 40 }]}></Text>
          </View>
          
          {teachers.map((teacher, index) => (
            <View key={index} style={styles.tr}>
              <View style={[styles.td, { flex: 2, flexDirection: 'row', alignItems: 'center', gap: 12 }]}>
                <Image source={{uri: teacher.img}} style={styles.avatar} />
                <Text style={styles.tdName}>{teacher.name}</Text>
              </View>
              <Text style={[styles.td, { flex: 2, color: '#3c4a42' }]}>{teacher.email}</Text>
              <View style={[styles.td, { flex: 1.5, alignItems: 'flex-start' }]}>
                <View style={teacher.subject === 'Science' ? styles.badgeScience : styles.badgeMath}>
                  <Text style={teacher.subject === 'Science' ? styles.badgeScienceText : styles.badgeMathText}>{teacher.subject}</Text>
                </View>
              </View>
              <View style={[styles.td, { flex: 1, flexDirection: 'row', alignItems: 'center', gap: 4 }]}>
                <View style={styles.statusDot} />
                <Text style={styles.tdStatus}>{teacher.status}</Text>
              </View>
              <TouchableOpacity style={[styles.td, { width: 40, alignItems: 'flex-end' }]}>
                <Icon name="more-vert" size={24} color="#3c4a42" />
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Bottom Actions */}
        <View style={styles.bottomActions}>
          <TouchableOpacity>
            <Text style={styles.skipText}>Skip for now</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { height: 80, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 24, backgroundColor: 'rgba(248, 249, 250, 0.8)', borderBottomWidth: 1, borderBottomColor: 'rgba(187, 202, 191, 0.3)' },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  headerTitle: { fontSize: 24, fontWeight: '600', color: '#006c49' },
  headerNav: { flexDirection: 'row', gap: 40, display: 'none' }, // Usually hidden on mobile
  navLink: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 1 },
  navLinkActive: { fontSize: 12, fontWeight: '700', color: '#006c49', letterSpacing: 1 },
  iconBtn: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#e7e8e9', alignItems: 'center', justifyContent: 'center' },
  scrollContent: { padding: 24, paddingBottom: 160 },
  pageHeader: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, marginBottom: 40 },
  pageTitle: { fontSize: 48, fontWeight: '800', color: '#191c1d', letterSpacing: -1, marginBottom: 4 },
  pageSubtitle: { fontSize: 18, color: '#3c4a42' },
  addBtn: { borderRadius: 8, elevation: 4 },
  addBtnGradient: { flexDirection: 'row', alignItems: 'center', gap: 8, paddingHorizontal: 40, paddingVertical: 24, borderRadius: 8 },
  addBtnText: { fontSize: 16, fontWeight: '700', color: '#fff' },
  statsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 24, marginBottom: 40 },
  statCard: { flex: 1, minWidth: 200, backgroundColor: '#fff', borderRadius: 8, padding: 24, borderWidth: 1, borderColor: 'rgba(187,202,191,0.3)', flexDirection: 'row', alignItems: 'center', gap: 24 },
  statIconWrapper: { width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center' },
  statLabel: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 1, marginBottom: 4 },
  statValue: { fontSize: 28, fontWeight: '700', color: '#191c1d' },
  listContainer: { backgroundColor: '#fff', borderRadius: 8, borderWidth: 1, borderColor: 'rgba(187,202,191,0.3)', overflow: 'hidden' },
  listHeader: { flexDirection: 'row', backgroundColor: '#f3f4f5', paddingVertical: 16, paddingHorizontal: 24, borderBottomWidth: 1, borderBottomColor: 'rgba(187,202,191,0.2)' },
  th: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 1 },
  tr: { flexDirection: 'row', alignItems: 'center', paddingVertical: 16, paddingHorizontal: 24, borderBottomWidth: 1, borderBottomColor: 'rgba(187,202,191,0.1)' },
  td: {},
  avatar: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#e7e8e9' },
  tdName: { fontSize: 16, fontWeight: '600', color: '#191c1d' },
  badgeScience: { backgroundColor: 'rgba(109,245,225,0.2)', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 16 },
  badgeScienceText: { fontSize: 10, fontWeight: '700', color: '#006f64', textTransform: 'uppercase', letterSpacing: 1 },
  badgeMath: { backgroundColor: 'rgba(113,161,255,0.2)', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 16 },
  badgeMathText: { fontSize: 10, fontWeight: '700', color: '#00367a', textTransform: 'uppercase', letterSpacing: 1 },
  statusDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#10b981' },
  tdStatus: { fontSize: 16, color: '#3c4a42' },
  bottomActions: { marginTop: 64, alignItems: 'center' },
  skipText: { fontSize: 16, color: '#3c4a42', textDecorationLine: 'underline' },
});
