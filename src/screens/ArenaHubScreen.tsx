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

export default function ArenaHubScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.avatarContainer}>
            <Image
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6uMb_oKl2G3e0utSn5jhCbkvS8ut4WqstDbexakx7eoXIQtP9euGE4TCYoPqzrLKq0sGZij9KvUrCaHJDLI3JlpDotYR0B8cXLdgLMldcHMpoR8AiLbVTJv4rTI1XURPJ-i_MzPZfMDyf06iEm6J3moNlVkmBrNcxadgCouAhwXII-6qKrdSNzsu1XY8FjSn99eqDd9YHiEk39Oc7fgsa2ipEu70h-Wt3CYverTojJvsV31-v211xddI44pw2cCSSmDOHsV7EfHCR' }}
              style={styles.avatarImg}
            />
          </View>
          <Text style={styles.logoText}>EcoLoom</Text>
        </View>
        <TouchableOpacity style={styles.notifBtn}>
          <Icon name="notifications" size={24} color="#006c49" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header Section */}
        <View style={styles.pageHeader}>
          <Text style={styles.pageTitle}>Arena</Text>
          <Text style={styles.pageSubtitle}>
            Compete, collaborate, and climb the ranks to make a real-world difference.
          </Text>
        </View>

        {/* Challenges Tile */}
        <TouchableOpacity
          style={styles.glassTile}
          activeOpacity={0.9}
          onPress={() => navigation.navigate('ArenaChallenges')}
        >
          <View style={styles.tileTopRow}>
            <View style={[styles.tileIcon, { backgroundColor: 'rgba(16,185,129,0.15)' }]}>
              <Icon name="emoji-events" size={32} color="#006c49" />
            </View>
            <View style={styles.hotNowBadge}>
              <Text style={styles.hotNowText}>Hot Now</Text>
            </View>
          </View>
          <Text style={styles.tileTitle}>Challenges</Text>
          <Text style={styles.tileSubtitle}>Join active quests and earn exclusive badges.</Text>

          {/* Preview module */}
          <View style={styles.questPreview}>
            <View style={styles.questIcons}>
              <View style={[styles.questIconCircle, { backgroundColor: '#10b981' }]}>
                <Icon name="bolt" size={14} color="#ffffff" />
              </View>
              <View style={[styles.questIconCircle, { backgroundColor: '#6df5e1', marginLeft: -8 }]}>
                <Icon name="water-drop" size={14} color="#006f64" />
              </View>
              <View style={[styles.questIconCircle, { backgroundColor: '#71a1ff', marginLeft: -8 }]}>
                <Icon name="recycling" size={14} color="#00367a" />
              </View>
            </View>
            <Text style={styles.questCountText}>3 Active Quests</Text>
          </View>
          {/* Decorative background icon */}
          <View style={styles.decorativeIcon}>
            <Icon name="emoji-events" size={120} color="rgba(0,108,73,0.03)" />
          </View>
        </TouchableOpacity>

        {/* School Campaigns Tile (Premium Featured) */}
        <TouchableOpacity
          style={styles.premiumTile}
          activeOpacity={0.9}
          onPress={() => navigation.navigate('Campaigns')}
        >
          <View style={styles.tileTopRow}>
            <View style={[styles.tileIcon, { backgroundColor: '#10b981' }]}>
              <Icon name="groups" size={32} color="#ffffff" />
            </View>
            <Icon name="double-arrow" size={20} color="#10b981" />
          </View>
          <Text style={styles.tileTitle}>School Campaigns</Text>
          <Text style={styles.tileSubtitle}>Collaborate with your school on major initiatives.</Text>

          {/* Campaign Progress Preview */}
          <View style={styles.campaignProgress}>
            <View style={styles.progressLabelRow}>
              <Text style={styles.progressLabel}>Planting 500 Trees</Text>
              <Text style={styles.progressValue}>82%</Text>
            </View>
            <View style={styles.progressTrack}>
              <View style={styles.progressFill} />
            </View>
          </View>
        </TouchableOpacity>

        {/* Leaderboard Tile */}
        <TouchableOpacity
          style={styles.glassTile}
          activeOpacity={0.9}
          onPress={() => navigation.navigate('ArenaLeaderboard')}
        >
          <View style={styles.tileTopRow}>
            <View style={[styles.tileIcon, { backgroundColor: 'rgba(113,161,255,0.15)' }]}>
              <Icon name="leaderboard" size={32} color="#005ac2" />
            </View>
          </View>
          <Text style={styles.tileTitle}>Leaderboard</Text>
          <Text style={styles.tileSubtitle}>See how you stack up against your peers.</Text>

          {/* Rank Preview */}
          <View style={styles.rankPreview}>
            <View style={styles.rankLeft}>
              <View style={styles.rankCircle}>
                <Text style={styles.rankText}>#4</Text>
              </View>
              <Text style={styles.rankGrade}>10th Grade</Text>
            </View>
            <Icon name="trending-up" size={24} color="#005ac2" />
          </View>
          <View style={styles.decorativeIcon}>
            <Icon name="stars" size={120} color="rgba(0,90,194,0.03)" />
          </View>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('StudentHome')}>
          <Icon name="home" size={24} color="#3c4a42" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('ImpactHub')}>
          <Icon name="eco" size={24} color="#3c4a42" />
          <Text style={styles.navText}>Impact</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItemActive}>
          <Icon name="emoji-events" size={24} color="#00422b" />
          <Text style={styles.navTextActive}>Arena</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('StudentProfile')}>
          <Icon name="person" size={24} color="#3c4a42" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, height: 64, backgroundColor: 'rgba(248,249,250,0.8)', borderBottomWidth: 1, borderBottomColor: 'rgba(187,202,191,0.2)' },
  headerLeft: { flexDirection: 'row', alignItems: 'center' },
  avatarContainer: { width: 40, height: 40, borderRadius: 20, borderWidth: 1, borderColor: 'rgba(16,185,129,0.1)', overflow: 'hidden', marginRight: 12, backgroundColor: 'rgba(16,185,129,0.2)' },
  avatarImg: { width: '100%', height: '100%' },
  logoText: { fontSize: 24, fontWeight: '800', color: '#006c49' },
  notifBtn: { padding: 8, borderRadius: 20 },
  scrollContent: { paddingHorizontal: 24, paddingTop: 24, paddingBottom: 120 },
  pageHeader: { marginBottom: 32 },
  pageTitle: { fontSize: 24, fontWeight: '700', color: '#191c1d', marginBottom: 6 },
  pageSubtitle: { fontSize: 16, color: '#3c4a42', lineHeight: 24, maxWidth: 300 },
  glassTile: { backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: 16, padding: 24, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)', marginBottom: 16, overflow: 'hidden', position: 'relative' },
  premiumTile: { backgroundColor: '#ffffff', borderRadius: 32, padding: 24, marginBottom: 16, shadowColor: '#006c49', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.1, shadowRadius: 16, elevation: 6, borderWidth: 2, borderColor: 'rgba(16,185,129,0.2)', overflow: 'hidden' },
  tileTopRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 },
  tileIcon: { width: 56, height: 56, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  hotNowBadge: { backgroundColor: 'rgba(0,108,73,0.1)', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 20 },
  hotNowText: { fontSize: 12, fontWeight: '700', color: '#006c49', letterSpacing: 0.5 },
  tileTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d', marginBottom: 8 },
  tileSubtitle: { fontSize: 16, color: '#3c4a42', lineHeight: 24, marginBottom: 32 },
  questPreview: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f3f4f5', borderRadius: 12, padding: 12, borderWidth: 1, borderColor: 'rgba(187,202,191,0.1)' },
  questIcons: { flexDirection: 'row', marginRight: 12 },
  questIconCircle: { width: 32, height: 32, borderRadius: 16, alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: '#f8f9fa' },
  questCountText: { fontSize: 12, fontWeight: '700', color: '#006c49', letterSpacing: 0.5 },
  campaignProgress: { gap: 8 },
  progressLabelRow: { flexDirection: 'row', justifyContent: 'space-between' },
  progressLabel: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 0.5 },
  progressValue: { fontSize: 12, fontWeight: '700', color: '#006c49' },
  progressTrack: { height: 12, backgroundColor: '#e7e8e9', borderRadius: 6, overflow: 'hidden' },
  progressFill: { width: '82%', height: '100%', borderRadius: 6, backgroundColor: '#006c49' },
  rankPreview: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f3f4f5', borderRadius: 12, padding: 12 },
  rankLeft: { flexDirection: 'row', alignItems: 'center' },
  rankCircle: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#71a1ff', alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  rankText: { fontSize: 14, fontWeight: '700', color: '#00367a' },
  rankGrade: { fontSize: 24, fontWeight: '600', color: '#191c1d' },
  decorativeIcon: { position: 'absolute', right: -20, bottom: -20, opacity: 0.3 },
  bottomNav: { position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'rgba(248,249,250,0.9)', borderTopWidth: 1, borderTopColor: 'rgba(187,202,191,0.2)', paddingBottom: 20 },
  navItem: { alignItems: 'center', paddingHorizontal: 16 },
  navItemActive: { alignItems: 'center', paddingHorizontal: 16, paddingVertical: 6, backgroundColor: 'rgba(16,185,129,0.2)', borderRadius: 16 },
  navText: { fontSize: 12, fontWeight: '700', color: '#3c4a42', marginTop: 4 },
  navTextActive: { fontSize: 12, fontWeight: '700', color: '#00422b', marginTop: 4 },
});
