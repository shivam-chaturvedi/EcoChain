import React, { useState } from 'react';
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

type Tab = 'School' | 'Class';

const rankList = [
  { rank: 4, name: 'Elena', xp: '9,887' },
  { rank: 5, name: 'Aiden', xp: '9,442' },
  { rank: 6, name: 'Chloe', xp: '9,069' },
  { rank: 7, name: 'Marcus', xp: '9,045' },
];

export default function ArenaLeaderboardScreen({ navigation }: any) {
  const [activeTab, setActiveTab] = useState<Tab>('Class');

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.avatarContainer}>
            <Image
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlWGRh5U1o06BI99PqfJlUIgg3Y0zrCpIs-PDewrwimi4bbIlTq4FdxSLTF08dJ_Cozbxl1_QQhWV_cDnTEVAfBVGNB-QA3sRKMJY13UsFKggYXmVJ8g2xkZEMEqguES_peay4avFtEIgHWVzFmFZIPD4rNiAQ-z29GnEZpLRVjnKVnC2p6cR-HbNO2M5pr2dZuuinrYcpooLgNEAGOURwvkDtZHoQJMVDqL0rXc4WKhwfkxP8ltoRGrhWC0rgpmgftTzQm2XrZmpA' }}
              style={styles.avatarImg}
            />
          </View>
          <Text style={styles.logoText}>ChonX</Text>
        </View>
        <TouchableOpacity style={styles.notifBtn}>
          <Icon name="notifications" size={24} color="#006c49" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Tab Switcher */}
        <View style={styles.tabContainer}>
          <View style={styles.tabPill}>
            {(['School', 'Class'] as Tab[]).map((tab) => (
              <TouchableOpacity
                key={tab}
                style={[styles.tab, activeTab === tab && styles.tabActive]}
                onPress={() => setActiveTab(tab)}
              >
                <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Podium — Top 3 */}
        <View style={styles.podium}>
          {/* Rank 2 */}
          <View style={styles.podiumItem}>
            <View style={styles.podiumAvatarWrapper}>
              <View style={[styles.podiumAvatar, { borderColor: '#94a3b8' }]}>
                <Image
                  source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXb4lJdSNpT6QjBLNC_YgP8yBJHBXMKd3u3mxMmg5yfT2Lhzt6hXPdzjUsQYqcufqgh0CXrIhfDxWZVsKMRBDWKYtOdVsvjiNawLi92FCuoSfRsZQzvSbhCjoiXXXSQVCs9J6LfjpDTxr0l9Ln4QAMhiuwlc3OfFcV-nd8cx2kj0ZPJbUBKBjadqFuG3tRyG3goKnjX4oJ8Lv_q8_lWXR_0UdCMpX94LLEzaxCZtmqbcQkrTD-wIjSLj-0ilKOUY_nF1AJRuZKT0BP' }}
                  style={styles.podiumAvatarImg}
                />
              </View>
              <View style={[styles.rankBadge, { backgroundColor: '#94a3b8' }]}>
                <Text style={styles.rankBadgeText}>2</Text>
              </View>
            </View>
            <View style={[styles.podiumBar, { height: 128, backgroundColor: 'rgba(255,255,255,0.7)' }]}>
              <Text style={styles.podiumName}>Milo</Text>
              <Text style={styles.podiumXp}>12,450 XP</Text>
            </View>
          </View>

          {/* Rank 1 — Center, Tallest */}
          <View style={[styles.podiumItem, { flex: 1.2 }]}>
            <View style={styles.podiumAvatarWrapper}>
              <View style={styles.premiumBadge}>
                <Icon name="workspace-premium" size={32} color="#facc15" />
              </View>
              <View style={[styles.podiumAvatar, styles.podiumAvatarLarge, { borderColor: '#facc15' }]}>
                <Image
                  source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBI9Bznl0pvvCYwLAcdZx2sa2HM3pS4R1YfgdtUy-1Eqi0KSRur8xPlX9B8ZJNbW--TVvGUIKCqG6s1Nn7pbZa9twIg8GZbSwviYf-WY_Z8YpmNzkRqO_Ka4ZN4MDRx32U6UdvHbldmqhKHq_203FXzkY-r0xsoY5bwXcbg3hG1ErxB89KAv6LM2Bs4xypLw0K1d3h5oxrnWx3zA-V0RwhEvMFa2xsj7X8LKj134jjbWc9P-_y_pe71rR5wI4_WEs95ovkd14wv82u-' }}
                  style={styles.podiumAvatarImg}
                />
              </View>
              <View style={[styles.rankBadge, styles.rankBadgeLarge, { backgroundColor: '#facc15' }]}>
                <Text style={[styles.rankBadgeText, { fontSize: 14 }]}>1</Text>
              </View>
            </View>
            <View style={[styles.podiumBar, { height: 192, backgroundColor: '#10b981' }]}>
              <Text style={[styles.podiumName, { color: '#ffffff' }]}>Sarah</Text>
              <Text style={[styles.podiumXp, { color: '#6ffbbe' }]}>15,820 XP</Text>
            </View>
          </View>

          {/* Rank 3 */}
          <View style={styles.podiumItem}>
            <View style={styles.podiumAvatarWrapper}>
              <View style={[styles.podiumAvatar, { borderColor: '#b45309' }]}>
                <Image
                  source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8_fFdvWdMMMr15O1hEh4-a7l8FpTL7wvYcG8bRetb-7HpOVnu6JKzZeoD45JlozWHkxEkUCDBS1CP8_enFACEImmakqbTSP01zzBCteujD7gBGWUTKhJBSUwJM60DGriCtiBRIS5qAAnZSBh9ldRdNQVC4s9KxPaNMFUDvtas0ktSd-PEsh0MI1Fc3iNEse-SGwgdgyff_PsgIPb5smDg0WLqptnuL-PyQ_dHYlpeokCU9K_TQs45zUHb0jtA6sQIbet-ec7drd5c' }}
                  style={styles.podiumAvatarImg}
                />
              </View>
              <View style={[styles.rankBadge, { backgroundColor: '#b45309' }]}>
                <Text style={styles.rankBadgeText}>3</Text>
              </View>
            </View>
            <View style={[styles.podiumBar, { height: 112, backgroundColor: 'rgba(255,255,255,0.7)' }]}>
              <Text style={styles.podiumName}>Jordan</Text>
              <Text style={styles.podiumXp}>10,900 XP</Text>
            </View>
          </View>
        </View>

        {/* User's Own Rank (Highlighted) */}
        <View style={styles.userRankCard}>
          <Text style={styles.myRankNumber}>14</Text>
          <View style={styles.userAvatar}>
            <Image
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBp3m4_fiEU7wYJf-1O5VI7nydwuMHU9LIeOngexWpsdQjuLs-iC5k1mMPz_WJKoTl-Q1lE2_6PYgT7RUjp0HUZLofdN9KkBGKicDlAfgrue35DaZvNMMur_pNUKfCex5QqkaO5a2oEt5UpmrzeaQjt6GAUeqGb12_3RfdRs5mPJ2s3PIdJ68ZV4PpPZB0wV3ooDbi3ElWYJcG9J59ZALScp7tytiv3EcQqinWzfga3J6UfMciue4rMUdG-G2FCKO0MfEWnhMr7X_D' }}
              style={styles.podiumAvatarImg}
            />
          </View>
          <View style={styles.userRankInfo}>
            <Text style={styles.userRankName}>You (Felix)</Text>
            <Text style={styles.userRankHint}>Keep it up! 250 XP to next rank</Text>
          </View>
          <View style={styles.userXp}>
            <Text style={styles.userXpValue}>8,420</Text>
            <Text style={styles.userXpLabel}>XP</Text>
          </View>
        </View>

        {/* Rank List */}
        <View style={styles.rankList}>
          {rankList.map((item) => (
            <View key={item.rank} style={styles.rankItem}>
              <Text style={styles.rankNumber}>{item.rank}</Text>
              <View style={styles.rankAvatar} />
              <Text style={styles.rankName}>{item.name}</Text>
              <Text style={styles.rankXp}>{item.xp}</Text>
            </View>
          ))}
        </View>
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
          <Icon name="military-tech" size={24} color="#00422b" />
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
  avatarContainer: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#10b981', overflow: 'hidden', marginRight: 12 },
  avatarImg: { width: '100%', height: '100%' },
  logoText: { fontSize: 24, fontWeight: '800', color: '#006c49' },
  notifBtn: { padding: 8 },
  scrollContent: { paddingHorizontal: 24, paddingTop: 24, paddingBottom: 120 },
  tabContainer: { alignItems: 'center', marginBottom: 40 },
  tabPill: { flexDirection: 'row', backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: 40, padding: 6, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)' },
  tab: { paddingHorizontal: 24, paddingVertical: 10, borderRadius: 32 },
  tabActive: { backgroundColor: '#006c49', shadowColor: '#006c49', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 8 },
  tabText: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 0.5 },
  tabTextActive: { color: '#ffffff' },
  podium: { flexDirection: 'row', alignItems: 'flex-end', marginBottom: 32, gap: 12 },
  podiumItem: { flex: 1, alignItems: 'center' },
  podiumAvatarWrapper: { alignItems: 'center', marginBottom: 16, position: 'relative' },
  podiumAvatar: { width: 80, height: 80, borderRadius: 40, borderWidth: 4, overflow: 'hidden', backgroundColor: '#e1e3e4' },
  podiumAvatarLarge: { width: 96, height: 96, borderRadius: 48 },
  podiumAvatarImg: { width: '100%', height: '100%' },
  rankBadge: { position: 'absolute', bottom: -8, right: -4, width: 32, height: 32, borderRadius: 16, alignItems: 'center', justifyContent: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 4 },
  rankBadgeLarge: { width: 40, height: 40, borderRadius: 20 },
  rankBadgeText: { fontSize: 12, fontWeight: '700', color: '#ffffff' },
  premiumBadge: { position: 'absolute', top: -20, alignSelf: 'center', zIndex: 10 },
  podiumBar: { width: '100%', borderTopLeftRadius: 16, borderTopRightRadius: 16, alignItems: 'center', justifyContent: 'center', padding: 12 },
  podiumName: { fontSize: 24, fontWeight: '600', color: '#191c1d', textAlign: 'center' },
  podiumXp: { fontSize: 12, fontWeight: '700', color: '#006c49', letterSpacing: 0.5 },
  userRankCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: 16, padding: 24, borderWidth: 2, borderColor: 'rgba(0,108,73,0.2)', marginBottom: 16 },
  myRankNumber: { fontSize: 28, fontWeight: '700', color: '#006c49', width: 32, marginRight: 16 },
  userAvatar: { width: 48, height: 48, borderRadius: 24, backgroundColor: '#e1e3e4', overflow: 'hidden', marginRight: 16 },
  userRankInfo: { flex: 1 },
  userRankName: { fontSize: 24, fontWeight: '600', color: '#191c1d' },
  userRankHint: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 0.5 },
  userXp: { alignItems: 'flex-end' },
  userXpValue: { fontSize: 28, fontWeight: '700', color: '#006c49' },
  userXpLabel: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 0.5 },
  rankList: { gap: 12 },
  rankItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: 16, padding: 24, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)' },
  rankNumber: { fontSize: 28, fontWeight: '700', color: '#3c4a42', width: 32, marginRight: 16 },
  rankAvatar: { width: 48, height: 48, borderRadius: 24, backgroundColor: '#e1e3e4', marginRight: 16 },
  rankName: { flex: 1, fontSize: 24, fontWeight: '600', color: '#191c1d' },
  rankXp: { fontSize: 28, fontWeight: '700', color: '#191c1d' },
  bottomNav: { position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'rgba(248,249,250,0.9)', borderTopWidth: 1, borderTopColor: 'rgba(187,202,191,0.3)', paddingBottom: 20 },
  navItem: { alignItems: 'center', paddingHorizontal: 16 },
  navItemActive: { alignItems: 'center', paddingHorizontal: 16, paddingVertical: 6, backgroundColor: 'rgba(16,185,129,0.2)', borderRadius: 16 },
  navText: { fontSize: 12, fontWeight: '700', color: '#3c4a42', marginTop: 4 },
  navTextActive: { fontSize: 12, fontWeight: '700', color: '#00422b', marginTop: 4 },
});
