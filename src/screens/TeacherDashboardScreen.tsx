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

export default function TeacherDashboardScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.avatarWrapper}>
            <Image source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1QJn9t-UKh2c31j92SLjXYB6SEKPsescqMxBGZP7rPVMqCOezdPZuKUDda8OagEj6bjyJKc8jMibho3PgWAGCcqHj1MhSOFFUnmgT2rrcitzptW7cQPUWiAgOt_1oC_BP2QMZ3BJt_LOBEY_L1YVQokbyK7Giyg80-gAKepIJIDaCx8SHUhwG7wn9a4R-U21DsEkRotJmvonrNS1mT95sHyuA6seOhd5OohfwAWL5w98ojFayNhmvQFG6g4SXpW4orruwWTE95lHc'}} style={styles.avatarImage} />
          </View>
        </View>
        <Text style={styles.headerTitle}>Teacher Dashboard</Text>
        <TouchableOpacity style={styles.headerRight}>
          <Icon name="notifications" size={24} color="#006c49" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Welcome */}
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeTitle}>Hello, Prof. Green 🍃</Text>
          <View style={styles.verifyBadge}>
            <Icon name="verified" size={20} color="#006c49" />
            <Text style={styles.verifyBadgeText}>You have 12 submissions to verify</Text>
          </View>
        </View>

        {/* Class Snapshot */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>CLASS SNAPSHOT</Text>
          <TouchableOpacity><Text style={styles.viewAllText}>View All</Text></TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.snapshotScroll} contentContainerStyle={styles.snapshotScrollContent}>
          <View style={[styles.snapshotCard, { borderLeftColor: '#006c49' }]}>
            <View style={styles.snapshotCardTop}>
              <View style={[styles.iconBox, { backgroundColor: 'rgba(16,185,129,0.2)' }]}>
                <Icon name="school" size={20} color="#006c49" />
              </View>
              <Text style={[styles.snapshotCardTag, { color: '#006c49' }]}>Live</Text>
            </View>
            <View style={styles.snapshotCardMid}>
              <Text style={styles.snapshotCardLabel}>TOP CLASS</Text>
              <Text style={styles.snapshotCardValue}>10A</Text>
            </View>
            <View style={styles.progressBarWrapper}>
              <View style={[styles.progressBar, { width: '85%' }]} />
            </View>
          </View>

          <View style={[styles.snapshotCard, { borderLeftColor: '#005ac2' }]}>
            <View style={styles.snapshotCardTop}>
              <View style={[styles.iconBox, { backgroundColor: 'rgba(113,161,255,0.2)' }]}>
                <Icon name="pending-actions" size={20} color="#005ac2" />
              </View>
              <Text style={[styles.snapshotCardTag, { color: '#005ac2' }]}>Priority</Text>
            </View>
            <View style={styles.snapshotCardMid}>
              <Text style={styles.snapshotCardLabel}>PENDING</Text>
              <Text style={styles.snapshotCardValue}>12</Text>
            </View>
            <Text style={styles.snapshotCardDesc}>Require Action</Text>
          </View>

          <View style={[styles.snapshotCard, { borderLeftColor: '#006b5f' }]}>
            <View style={styles.snapshotCardTop}>
              <View style={[styles.iconBox, { backgroundColor: 'rgba(109,245,225,0.2)' }]}>
                <Icon name="event" size={20} color="#006b5f" />
              </View>
              <Text style={[styles.snapshotCardTag, { color: '#006b5f' }]}>Tomorrow</Text>
            </View>
            <View style={styles.snapshotCardMid}>
              <Text style={styles.snapshotCardLabel}>UPCOMING</Text>
              <Text style={styles.snapshotCardValue}>Tree Planting</Text>
            </View>
            <View style={styles.avatarStack}>
              <View style={styles.stackAvatar}><Icon name="person" size={16} color="#6c7a71" /></View>
              <View style={[styles.stackAvatar, { left: -8 }]}><Icon name="person" size={16} color="#6c7a71" /></View>
              <View style={[styles.stackAvatar, { left: -16 }]}><Icon name="person" size={16} color="#6c7a71" /></View>
              <View style={[styles.stackAvatarTextWrapper, { left: -24 }]}>
                <Text style={styles.stackAvatarText}>+24</Text>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* Control Panel */}
        <Text style={[styles.sectionTitle, { marginBottom: 16 }]}>CONTROL PANEL</Text>
        <View style={styles.controlGrid}>
          {/* Review Submissions */}
          <TouchableOpacity style={styles.fullWidthCard}>
            <LinearGradient colors={['#006c49', '#10b981']} style={styles.fullWidthGradient} start={{x: 0, y: 0}} end={{x: 1, y: 1}}>
              <View style={styles.bgIconWrapper}>
                <Icon name="fact-check" size={120} color="rgba(255,255,255,0.2)" />
              </View>
              <View style={styles.whiteIconWrapper}>
                <Icon name="check" size={32} color="#006c49" />
              </View>
              <View style={styles.fullWidthCardText}>
                <Text style={styles.fullWidthTitle}>Review Submissions</Text>
                <Text style={styles.fullWidthDesc}>12 pending verification</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>

          <View style={styles.halfGrid}>
            {/* Manage Challenges */}
            <TouchableOpacity style={styles.halfCard}>
              <View style={[styles.halfCardIcon, { backgroundColor: 'rgba(109,245,225,0.3)' }]}>
                <Icon name="flag" size={24} color="#006b5f" />
              </View>
              <View>
                <Text style={styles.halfCardTitle}>Manage Challenges</Text>
                <Text style={styles.halfCardDesc}>Update goals</Text>
              </View>
            </TouchableOpacity>

            {/* Class Manager */}
            <TouchableOpacity style={styles.halfCard}>
              <View style={[styles.halfCardIcon, { backgroundColor: 'rgba(113,161,255,0.3)' }]}>
                <Icon name="groups" size={24} color="#005ac2" />
              </View>
              <View>
                <Text style={styles.halfCardTitle}>Class Manager</Text>
                <Text style={styles.halfCardDesc}>Manage 4 active classrooms</Text>
              </View>
            </TouchableOpacity>

            {/* Announcement */}
            <TouchableOpacity style={styles.halfCard}>
              <View style={[styles.halfCardIcon, { backgroundColor: 'rgba(255,237,213,1)' }]}>
                <Icon name="campaign" size={24} color="#ea580c" />
              </View>
              <View>
                <Text style={styles.halfCardTitle}>Announcement</Text>
                <Text style={styles.halfCardDesc}>Broadcast message</Text>
              </View>
            </TouchableOpacity>

            {/* New Event */}
            <TouchableOpacity style={styles.halfCard}>
              <View style={[styles.halfCardIcon, { backgroundColor: 'rgba(224,231,255,1)' }]}>
                <Icon name="star" size={24} color="#4f46e5" />
              </View>
              <View>
                <Text style={styles.halfCardTitle}>New Event</Text>
                <Text style={styles.halfCardDesc}>Setup campaign</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItemActive}>
          <Icon name="home" size={24} color="#00422b" />
          <Text style={styles.navItemTextActive}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="eco" size={24} color="#3c4a42" />
          <Text style={styles.navItemText}>Verify</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="military-tech" size={24} color="#3c4a42" />
          <Text style={styles.navItemText}>Arena</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="person" size={24} color="#3c4a42" />
          <Text style={styles.navItemText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { height: 64, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 24, backgroundColor: 'rgba(248, 249, 250, 0.8)', borderBottomWidth: 1, borderBottomColor: 'rgba(187, 202, 191, 0.3)' },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  avatarWrapper: { width: 40, height: 40, borderRadius: 20, borderWidth: 2, borderColor: '#10b981', overflow: 'hidden' },
  avatarImage: { width: '100%', height: '100%', resizeMode: 'cover' },
  headerTitle: { fontSize: 24, fontWeight: '800', color: '#006c49' },
  headerRight: { padding: 8 },
  scrollContent: { padding: 24, paddingBottom: 120 },
  welcomeSection: { marginBottom: 32 },
  welcomeTitle: { fontSize: 32, fontWeight: '700', color: '#191c1d', marginBottom: 8 },
  verifyBadge: { flexDirection: 'row', alignItems: 'center', gap: 8, backgroundColor: 'rgba(16,185,129,0.1)', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20, alignSelf: 'flex-start', borderWidth: 1, borderColor: 'rgba(16,185,129,0.2)' },
  verifyBadgeText: { fontSize: 12, fontWeight: '700', color: '#00422b', textTransform: 'uppercase' },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 16 },
  sectionTitle: { fontSize: 12, fontWeight: '700', color: '#6c7a71', letterSpacing: 1 },
  viewAllText: { fontSize: 12, fontWeight: '700', color: '#006c49' },
  snapshotScroll: { marginHorizontal: -24, marginBottom: 32 },
  snapshotScrollContent: { paddingHorizontal: 24, gap: 16 },
  snapshotCard: { width: 256, backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: 8, padding: 24, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)', borderLeftWidth: 4, elevation: 1 },
  snapshotCardTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 },
  iconBox: { padding: 8, borderRadius: 8 },
  snapshotCardTag: { fontSize: 12, fontWeight: '700' },
  snapshotCardMid: { marginBottom: 16 },
  snapshotCardLabel: { fontSize: 12, fontWeight: '700', color: '#6c7a71', marginBottom: 4 },
  snapshotCardValue: { fontSize: 24, fontWeight: '600', color: '#191c1d' },
  progressBarWrapper: { height: 6, backgroundColor: '#e1e3e4', borderRadius: 3, overflow: 'hidden' },
  progressBar: { height: '100%', backgroundColor: '#006c49' },
  snapshotCardDesc: { fontSize: 16, fontStyle: 'italic', color: '#3c4a42' },
  avatarStack: { flexDirection: 'row', alignItems: 'center' },
  stackAvatar: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#e1e3e4', borderWidth: 2, borderColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  stackAvatarTextWrapper: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#10b981', borderWidth: 2, borderColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  stackAvatarText: { fontSize: 10, fontWeight: '700', color: '#00422b' },
  controlGrid: { gap: 16 },
  fullWidthCard: { borderRadius: 8, overflow: 'hidden', elevation: 4 },
  fullWidthGradient: { minHeight: 160, padding: 24, justifyContent: 'space-between' },
  bgIconWrapper: { position: 'absolute', top: -20, right: 0, opacity: 0.5 },
  whiteIconWrapper: { width: 48, height: 48, borderRadius: 16, backgroundColor: 'rgba(255,255,255,0.2)', alignItems: 'center', justifyContent: 'center', marginBottom: 16 },
  fullWidthCardText: {},
  fullWidthTitle: { fontSize: 24, fontWeight: '600', color: '#fff', marginBottom: 4 },
  fullWidthDesc: { fontSize: 16, color: '#fff', opacity: 0.9 },
  halfGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 16 },
  halfCard: { width: '47%', backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: 8, padding: 24, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)', elevation: 1 },
  halfCardIcon: { width: 48, height: 48, borderRadius: 12, alignItems: 'center', justifyContent: 'center', marginBottom: 16 },
  halfCardTitle: { fontSize: 16, fontWeight: '700', color: '#191c1d', marginBottom: 4 },
  halfCardDesc: { fontSize: 12, color: '#3c4a42' },
  bottomNav: { position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, backgroundColor: 'rgba(248, 249, 250, 0.9)', borderTopWidth: 1, borderTopColor: 'rgba(187, 202, 191, 0.3)', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingHorizontal: 16 },
  navItem: { alignItems: 'center', justifyContent: 'center', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 12 },
  navItemActive: { alignItems: 'center', justifyContent: 'center', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 12, backgroundColor: '#10b981' },
  navItemText: { fontSize: 12, fontWeight: '700', color: '#3c4a42', marginTop: 4 },
  navItemTextActive: { fontSize: 12, fontWeight: '700', color: '#00422b', marginTop: 4 },
});
