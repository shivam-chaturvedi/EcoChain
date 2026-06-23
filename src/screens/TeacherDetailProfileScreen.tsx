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

export default function TeacherDetailProfileScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} color="#3c4a42" />
          </TouchableOpacity>
          <View style={styles.logoWrapper}>
            <Image source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPYsatcc3Sh2s8sYp5KVNUsa-zSflKD9e2iMuMTCtC9-ifjQqXSVCgOByus5812cdG_dIkjvQPCWGEftjglj5k7Tg9g_S47mIFfUY0q-W_f5-f7c0sIZBfzvauvWhzh79Ztw8M_aL0g1BHeIpw0iQXBp5kcSdh2K6nABKc2GJKKtLJDzRvhRDdi8cX0GlJQ2sgPGmMhzwFK8vg02MFqfwdEZgOCiJqj0a9CbdLR0P4Dsn2rOuGmhs98l09hx9FUD1qh6ui5k7Y5OsZ'}} style={styles.logoImage} />
          </View>
          <Text style={styles.headerTitle}>ChonX</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconBtn}>
            <Icon name="notifications" size={24} color="#3c4a42" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Hero Section */}
        <View style={styles.heroWrapper}>
          <LinearGradient colors={['#10b981', '#005ac2']} start={{x: 0, y: 0}} end={{x: 1, y: 1}} style={styles.heroGradient}>
            <View style={styles.heroInner}>
              <View style={styles.avatarContainer}>
                <Image source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpZTeb1QEDOtH-ry7R1p02E-IG59mXhrlLv1HuUA5jXttI4lguiY2_ewxjIjTX_CJkCmV-SnE0xcl7T5kXoR5BtW7JZ117HAAXz_6EJeh2fClupdeSKTziM2UdMDJulljxsm0Lmc6nsQXd4CUViIAPRFBsFydmKxpA63MGrOeaVitOPr0NHUojWzgvAeN6hy53TDfM5sGmQ4f0yGXMhGr70qn03mvKm2HVaYOfx6Vq2vhLQWVRumOCj0pesMMa-qGsPVxGO_nrUoQh'}} style={styles.avatarImage} />
                <View style={styles.levelBadge}>
                  <Text style={styles.levelText}>LEVEL 42</Text>
                </View>
              </View>
              <View style={styles.heroTextContainer}>
                <Text style={styles.heroName}>Dr. Elena Rodriguez</Text>
                <Text style={styles.heroTitle}>Senior Environmental Sciences Lead • elena.rodriguez@chonx-academy.edu</Text>
                <View style={styles.tagsContainer}>
                  <View style={styles.tag}><Text style={styles.tagText}>Class 9A (Biology)</Text></View>
                  <View style={styles.tag}><Text style={styles.tagText}>Class 10C (Ecology)</Text></View>
                  <View style={styles.tag}><Text style={styles.tagText}>Class 12B (Advanced Bio)</Text></View>
                </View>
              </View>
            </View>
          </LinearGradient>
        </View>

        {/* Stats */}
        <Text style={styles.sectionTitle}>Performance Analytics</Text>
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Icon name="verified" size={32} color="#006c49" style={styles.statIcon} />
            <Text style={styles.statLabel}>TOTAL APPROVALS</Text>
            <Text style={styles.statValue}>1,287</Text>
            <View style={styles.statTrend}>
              <Icon name="trending-up" size={16} color="#059669" />
              <Text style={styles.statTrendText}>12% this month</Text>
            </View>
          </View>
          <View style={styles.statCard}>
            <Icon name="schedule" size={32} color="#005ac2" style={styles.statIcon} />
            <Text style={styles.statLabel}>STUDENT HOURS</Text>
            <Text style={styles.statValue}>4,520h</Text>
            <Text style={styles.statSubText}><Text style={{fontWeight: 'bold'}}>Top 5%</Text> school-wide</Text>
          </View>
        </View>

        <View style={styles.mainGrid}>
          {/* Active Classes Table (Simplified for mobile) */}
          <View style={styles.leftCol}>
            <View style={styles.card}>
              <View style={styles.cardHeaderRow}>
                <Text style={styles.cardTitle}>Active Classes</Text>
                <TouchableOpacity><Text style={styles.downloadText}>Download CSV</Text></TouchableOpacity>
              </View>
              
              <View style={styles.tableHeader}>
                <Text style={[styles.th, { flex: 2 }]}>CLASS NAME</Text>
                <Text style={[styles.th, { flex: 1, textAlign: 'center' }]}>HOURS</Text>
                <Text style={[styles.th, { flex: 1.5, textAlign: 'right' }]}>ECO-CREDITS</Text>
              </View>
              
              {[
                { name: 'Biology 9A', hours: '1,240h', credits: '12.5k' },
                { name: 'Ecology 10C', hours: '2,110h', credits: '24.2k' },
                { name: 'Adv. Bio 12B', hours: '1,170h', credits: '9.8k' },
              ].map((row, i) => (
                <View key={i} style={styles.tr}>
                  <Text style={[styles.td, { flex: 2, fontWeight: 'bold', color: '#191c1d' }]}>{row.name}</Text>
                  <Text style={[styles.td, { flex: 1, textAlign: 'center', fontWeight: '600' }]}>{row.hours}</Text>
                  <View style={[styles.td, { flex: 1.5, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', gap: 4 }]}>
                    <Text style={{fontWeight: 'bold', color: '#059669'}}>{row.credits}</Text>
                    <Icon name="eco" size={16} color="#059669" />
                  </View>
                </View>
              ))}
            </View>
          </View>

          {/* Timeline Feed */}
          <View style={styles.rightCol}>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Recent Activity</Text>
              <View style={styles.timeline}>
                <View style={styles.timelineLine} />
                
                {[
                  { icon: 'check-circle', color: '#10b981', title: 'Approved 12 logs', sub: 'Community Garden Program • 2h ago' },
                  { icon: 'military-tech', color: '#6df5e1', title: 'Class 9A reached 1,200 hours', sub: 'Milestone achieved • 5h ago' },
                  { icon: 'campaign', color: '#71a1ff', title: 'Started New Initiative', sub: '\'Urban Forest\' project live • Yesterday' },
                  { icon: 'person-add', color: '#e1e3e4', title: 'Onboarded 4 new students', sub: 'Advanced Biology 12B • 2 days ago' },
                ].map((item, i) => (
                  <View key={i} style={styles.timelineItem}>
                    <View style={[styles.timelineIconWrapper, { backgroundColor: item.color }]}>
                      <Icon name={item.icon} size={16} color={item.icon === 'person-add' ? '#3c4a42' : '#00422b'} />
                    </View>
                    <View style={styles.timelineContent}>
                      <Text style={styles.timelineTitle}>{item.title}</Text>
                      <Text style={styles.timelineSub}>{item.sub}</Text>
                    </View>
                  </View>
                ))}
              </View>
              <TouchableOpacity style={styles.viewAllBtn}>
                <Text style={styles.viewAllBtnText}>View All Activities</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { height: 80, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 24, backgroundColor: 'rgba(248, 249, 250, 0.8)', borderBottomWidth: 1, borderBottomColor: 'rgba(187, 202, 191, 0.3)' },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  backBtn: { padding: 8, marginLeft: -8 },
  logoWrapper: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#10b981', overflow: 'hidden' },
  logoImage: { width: '100%', height: '100%', resizeMode: 'cover' },
  headerTitle: { fontSize: 28, fontWeight: '800', color: '#006c49', letterSpacing: -1 },
  headerRight: {},
  iconBtn: { padding: 8 },
  scrollContent: { padding: 24, paddingBottom: 100 },
  heroWrapper: { borderRadius: 24, padding: 1, marginBottom: 64 }, // using border-radius here is tricky with gradients, padding 1px simulates border
  heroGradient: { borderRadius: 24, padding: 2 },
  heroInner: { backgroundColor: '#fff', borderRadius: 22, padding: 24, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', gap: 32 },
  avatarContainer: { alignSelf: 'center', marginBottom: 16 }, // center on mobile
  avatarImage: { width: 128, height: 128, borderRadius: 64, borderWidth: 4, borderColor: '#10b981' },
  levelBadge: { position: 'absolute', bottom: 8, right: 8, backgroundColor: '#006b5f', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 16, elevation: 4 },
  levelText: { fontSize: 12, fontWeight: '700', color: '#fff' },
  heroTextContainer: { flex: 1, minWidth: 250, alignItems: 'center' }, // center on mobile
  heroName: { fontSize: 32, fontWeight: '700', color: '#191c1d', marginBottom: 4, textAlign: 'center' },
  heroTitle: { fontSize: 18, color: '#3c4a42', marginBottom: 16, textAlign: 'center' },
  tagsContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, justifyContent: 'center' },
  tag: { backgroundColor: '#e7e8e9', paddingHorizontal: 16, paddingVertical: 6, borderRadius: 16, borderWidth: 1, borderColor: 'rgba(187,202,191,0.3)' },
  tagText: { fontSize: 14, fontWeight: '600', color: '#191c1d' },
  sectionTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d', marginBottom: 24, paddingHorizontal: 8 },
  statsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 24, marginBottom: 64 },
  statCard: { flex: 1, minWidth: 250, backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: 8, padding: 24, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)', elevation: 1 },
  statIcon: { marginBottom: 16 },
  statLabel: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 1, marginBottom: 4 },
  statValue: { fontSize: 28, fontWeight: '700', color: '#191c1d' },
  statTrend: { flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 16 },
  statTrendText: { fontSize: 14, fontWeight: '700', color: '#059669' },
  statSubText: { fontSize: 14, color: '#3c4a42', marginTop: 16 },
  mainGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 40 },
  leftCol: { flex: 2, minWidth: 300 },
  rightCol: { flex: 1, minWidth: 250 },
  card: { backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: 8, padding: 24, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)', elevation: 1 },
  cardHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, borderBottomWidth: 1, borderBottomColor: 'rgba(187,202,191,0.3)', paddingBottom: 16 },
  cardTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d' },
  downloadText: { fontSize: 14, fontWeight: '700', color: '#006c49' },
  tableHeader: { flexDirection: 'row', backgroundColor: '#f3f4f5', paddingVertical: 12, paddingHorizontal: 8, borderTopLeftRadius: 8, borderTopRightRadius: 8 },
  th: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 1 },
  tr: { flexDirection: 'row', paddingVertical: 16, paddingHorizontal: 8, borderBottomWidth: 1, borderBottomColor: 'rgba(187,202,191,0.2)' },
  td: { fontSize: 16, color: '#3c4a42' },
  timeline: { paddingVertical: 16, paddingLeft: 16 },
  timelineLine: { position: 'absolute', left: 31, top: 24, bottom: 24, width: 2, backgroundColor: 'rgba(187,202,191,0.3)' },
  timelineItem: { flexDirection: 'row', gap: 16, marginBottom: 24 },
  timelineIconWrapper: { width: 32, height: 32, borderRadius: 16, alignItems: 'center', justifyContent: 'center', zIndex: 10 },
  timelineContent: { flex: 1, paddingTop: 4 },
  timelineTitle: { fontSize: 14, fontWeight: '600', color: '#191c1d' },
  timelineSub: { fontSize: 12, color: '#3c4a42' },
  viewAllBtn: { marginTop: 16, borderTopWidth: 1, borderTopColor: 'rgba(187,202,191,0.3)', paddingTop: 16, alignItems: 'center' },
  viewAllBtnText: { fontSize: 14, fontWeight: '700', color: '#3c4a42' },
});
