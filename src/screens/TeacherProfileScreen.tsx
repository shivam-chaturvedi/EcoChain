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

export default function TeacherProfileScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.headerAvatar}>
            <Image source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3cHt27eAb9jAlulLIJOCFjiSY7aXuTSw9wWet_th9Pwib9aExZjFXYKFBD6gZn02VvNRA11RwbiCh2-XRB6fpjTR2ANvFCYxyDnuf3KN6NM50a03P_hQG8eOctFzDQ3DkEvBAXZxUJq07x5HzmscycDFYiqkbmz3eE0srIKxBUTVG2iCZ0E-9Uvp-3j1Hr8YCn5QSd9Rh0rRhsWUA62_Rf4Cu4MNFciJf6Z0qBuk0VHyMxohUbpL0Oo6h3BEsSBvuBCQMaW6sOBXe'}} style={styles.imageFull} />
          </View>
          <Text style={styles.logoText}>ChonX</Text>
        </View>
        <TouchableOpacity style={styles.iconBtn}>
          <Icon name="notifications" size={24} color="#006b5f" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Profile Hero */}
        <View style={styles.heroSection}>
          <View style={styles.heroImageContainer}>
            <Image source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAU_5ZSMFMd3mS0R1OlR5USH8qoXWEJehZCd_rFEpZRKNU7dWQHgZU99KKAlOO-bb8LQveCyCw50B__-L2ok-_WSVw7OjdMfA8HCizq0Jr5ohNSddcAfuen9ShSuKenrodFfUs5EjKnVSulfS7ZbMcYS6TPcUEPBP4BxKReix5JUUIGzL4wtK5sq_MD0pJYx-hVptccQzNQonfvYXZHBpViTEvRn5Jve9Tc9vD_EJwJr2lC1S1TVDhWWKsPoi1s-axa22vf4C2ikd0D'}} style={styles.imageFull} />
            <TouchableOpacity style={styles.editBtn}>
              <Icon name="edit" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
          <View style={styles.heroText}>
            <View style={styles.heroNameRow}>
              <Text style={styles.heroName}>Ms. Aisha Rahman</Text>
              <View style={styles.roleBadge}>
                <Text style={styles.roleBadgeText}>TEACHER</Text>
              </View>
            </View>
            <Text style={styles.heroSchool}>Greenwood International School</Text>
            <View style={styles.codeRow}>
              <Icon name="school" size={14} color="#6c7a71" />
              <Text style={styles.codeText}>CODE: GSIA-8214</Text>
            </View>
          </View>
        </View>

        {/* Stats Grid */}
        <View style={styles.statsGrid}>
          {/* Pending */}
          <TouchableOpacity style={[styles.statCard, { backgroundColor: 'rgba(16,185,129,0.1)', borderColor: 'rgba(0,108,73,0.2)' }]}>
            <View style={styles.statIconRow}>
              <Icon name="timer" size={24} color="#006c49" />
              <Icon name="arrow-forward" size={24} color="#006c49" style={{opacity: 0.5}} />
            </View>
            <View>
              <Text style={[styles.statValue, { color: '#00422b' }]}>12 Pending</Text>
              <Text style={[styles.statLabel, { color: 'rgba(0,108,73,0.8)' }]}>PENDING APPROVALS</Text>
            </View>
          </TouchableOpacity>

          {/* Reviewed */}
          <View style={styles.statCard}>
            <View style={styles.statIconRow}>
              <Icon name="verified" size={24} color="#006b5f" />
            </View>
            <View>
              <Text style={styles.statValue}>148 Approved</Text>
              <Text style={styles.statLabel}>REVIEWED ACTIVITIES</Text>
            </View>
          </View>

          {/* Savings */}
          <View style={styles.statCard}>
            <View style={styles.statIconRow}>
              <Icon name="eco" size={24} color="#005ac2" />
            </View>
            <View>
              <Text style={styles.statValue}>237.4 kg CO₂</Text>
              <Text style={styles.statLabel}>SCHOOL SAVINGS</Text>
            </View>
          </View>
        </View>

        {/* Upcoming Review Sessions */}
        <View style={styles.sessionsSection}>
          <Text style={styles.sectionTitle}>Upcoming Review Sessions</Text>
          <View style={styles.sessionList}>
            {/* Session 1 */}
            <View style={styles.sessionCard}>
              <View style={[styles.sessionIconBox, { backgroundColor: 'rgba(109,245,225,0.5)' }]}>
                <Icon name="recycling" size={24} color="#006f64" />
              </View>
              <View style={styles.sessionText}>
                <Text style={styles.sessionTitleText}>Campus Composting</Text>
                <Text style={styles.sessionSubText}>4 submissions waiting • Grade 9-B</Text>
              </View>
              <TouchableOpacity style={styles.chevronBtn}>
                <Icon name="chevron-right" size={24} color="#191c1d" />
              </TouchableOpacity>
            </View>
            {/* Session 2 */}
            <View style={styles.sessionCard}>
              <View style={[styles.sessionIconBox, { backgroundColor: 'rgba(16,185,129,0.5)' }]}>
                <Icon name="energy-savings-leaf" size={24} color="#00422b" />
              </View>
              <View style={styles.sessionText}>
                <Text style={styles.sessionTitleText}>Solar Grid Monitor</Text>
                <Text style={styles.sessionSubText}>8 submissions waiting • Grade 11-A</Text>
              </View>
              <TouchableOpacity style={styles.chevronBtn}>
                <Icon name="chevron-right" size={24} color="#191c1d" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="grid-view" size={24} color="#3c4a42" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="analytics" size={24} color="#3c4a42" />
          <Text style={styles.navText}>Impact</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="emoji-events" size={24} color="#3c4a42" />
          <Text style={styles.navText}>Arena</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItemActive}>
          <Icon name="person" size={24} color="#006f64" />
          <Text style={styles.navTextActive}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { height: 64, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 24, backgroundColor: 'rgba(248, 249, 250, 0.8)', borderBottomWidth: 1, borderBottomColor: 'rgba(187, 202, 191, 0.3)' },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  headerAvatar: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#10b981', overflow: 'hidden' },
  imageFull: { width: '100%', height: '100%', resizeMode: 'cover' },
  logoText: { fontSize: 24, fontWeight: '600', color: '#006c49', letterSpacing: -1 },
  iconBtn: { width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  scrollContent: { padding: 24, paddingBottom: 100 },
  heroSection: { flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', gap: 24, marginBottom: 40 },
  heroImageContainer: { width: 128, height: 128, borderRadius: 64, borderWidth: 4, borderColor: '#fff', elevation: 4, overflow: 'hidden', alignSelf: 'center' },
  editBtn: { position: 'absolute', bottom: 4, right: 4, width: 40, height: 40, borderRadius: 20, backgroundColor: '#006c49', borderWidth: 2, borderColor: '#fff', alignItems: 'center', justifyContent: 'center', elevation: 2 },
  heroText: { flex: 1, minWidth: 250, alignItems: 'center' }, // center on mobile
  heroNameRow: { flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 4 },
  heroName: { fontSize: 24, fontWeight: '700', color: '#191c1d' },
  roleBadge: { backgroundColor: '#6df5e1', paddingHorizontal: 16, paddingVertical: 4, borderRadius: 16 },
  roleBadgeText: { fontSize: 12, fontWeight: '700', color: '#006f64' },
  heroSchool: { fontSize: 18, color: '#3c4a42', marginBottom: 8, textAlign: 'center' },
  codeRow: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  codeText: { fontSize: 11, fontWeight: '700', color: '#6c7a71', letterSpacing: 1 },
  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 24, marginBottom: 64 },
  statCard: { flex: 1, minWidth: 250, backgroundColor: '#fff', borderRadius: 8, padding: 24, borderWidth: 1, borderColor: 'rgba(187,202,191,0.3)', elevation: 1, justifyContent: 'space-between', minHeight: 140 },
  statIconRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 },
  statValue: { fontSize: 28, fontWeight: '700', color: '#191c1d', marginBottom: 4 },
  statLabel: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 1 },
  sessionsSection: { marginBottom: 40 },
  sectionTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d', marginBottom: 16, paddingHorizontal: 4 },
  sessionList: { gap: 12 },
  sessionCard: { backgroundColor: 'rgba(248,249,250,0.8)', borderRadius: 8, padding: 24, borderWidth: 1, borderColor: 'rgba(255,255,255,0.4)', flexDirection: 'row', alignItems: 'center', gap: 24 },
  sessionIconBox: { width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center' },
  sessionText: { flex: 1 },
  sessionTitleText: { fontSize: 16, fontWeight: '700', color: '#191c1d', marginBottom: 2 },
  sessionSubText: { fontSize: 14, color: '#3c4a42' },
  chevronBtn: { padding: 8, borderRadius: 20 },
  bottomNav: { position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, backgroundColor: 'rgba(248,249,250,0.9)', borderTopWidth: 1, borderTopColor: 'rgba(187,202,191,0.2)', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingHorizontal: 16 },
  navItem: { alignItems: 'center', paddingVertical: 8, paddingHorizontal: 16 },
  navText: { fontSize: 12, fontWeight: '700', color: '#3c4a42', marginTop: 4 },
  navItemActive: { alignItems: 'center', paddingVertical: 8, paddingHorizontal: 16, backgroundColor: '#6df5e1', borderRadius: 16 },
  navTextActive: { fontSize: 12, fontWeight: '700', color: '#006f64', marginTop: 4 },
});
