import React, { useState } from 'react';
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

export default function StudentProfileScreen({ navigation }: any) {
  const [activeTab, setActiveTab] = useState('stats');

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.avatarWrapperSmall}>
            <Image 
              source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0NFJ4jBEXGXq5xH8AGTK2GLThCsN92JuX4aY2PpDxK0siZU3IrxvPQ1aqzhhgKVmR9FezauE08dZihgR0MN7QQ81ur6QxUZIk3IA3YG7gcMJxaOOVcEnDU82n2CNbyMJL4Hmqrf1pGNgWipsdW87PVKXaur75JNFXitO35rTU4u3Lu9WNAcSQEWDPScsitWZRMl-ex10msWhdw7uwh8YnL_Tw4i9cNdakrtWkpH2DNXjyVpJl93DZSaDBOOqgj8jLGXZe5igxu_9t'}}
              style={styles.avatarImage}
            />
          </View>
          <Text style={styles.logoText}>ChonX</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconBtn}>
            <Icon name="settings" size={24} color="#006c49" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.avatarContainerLarge}>
            <LinearGradient colors={['#10b981', '#71a1ff']} style={styles.avatarGradient}>
              <View style={styles.avatarInnerBorder}>
                <Image 
                  source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfLXSkBpQpPraD413Etvwpk4RqO6pYKmzFLODqPMPwS4Q0CQ5hZYYUqwj-OveIWhKGePqFPuKj3f_ZZl6GbMzReQFN6ezccRUP-RDEgBw2wfVUEEtmhiU004WygUlbldcnbwPH48cry-DxD_5Rt7pnA8UOZ-wWxkPuX1USpEo68Ibw0Agky8UaFnOOGGnOPv7FuGAHGSmR0LbN_fkp1yYynEBE_R1RX91Lwn22bQfWPPdoYSbuEIBOk0grazlTNj-kp0t1xyzfF_gd'}}
                  style={styles.avatarImage}
                />
              </View>
            </LinearGradient>
            <TouchableOpacity style={styles.editBtn}>
              <Icon name="edit" size={16} color="#fff" />
            </TouchableOpacity>
          </View>
          <Text style={styles.profileName}>Alex Rivera</Text>
          <Text style={styles.profileSub}>Aspiring Climate Hero • Level 24</Text>
        </View>

        {/* Stats Grid */}
        <View style={styles.statsGrid}>
          <View style={[styles.statCard, { borderBottomColor: '#006c49' }]}>
            <Icon name="school" size={32} color="#006c49" />
            <Text style={styles.statLabel}>GRADE</Text>
            <Text style={[styles.statValue, { color: '#006c49' }]}>10th</Text>
          </View>
          <View style={[styles.statCard, { borderBottomColor: '#005ac2' }]}>
            <Icon name="apartment" size={32} color="#005ac2" />
            <Text style={styles.statLabel}>SCHOOL</Text>
            <Text style={[styles.statValue, { color: '#005ac2' }]}>Greenview</Text>
          </View>
          <View style={[styles.statCard, { borderBottomColor: '#006b5f' }]}>
            <Icon name="workspace-premium" size={32} color="#006b5f" />
            <Text style={styles.statLabel}>BADGES</Text>
            <Text style={[styles.statValue, { color: '#006b5f' }]}>18</Text>
          </View>
          <View style={[styles.statCard, { borderBottomColor: '#10b981' }]}>
            <Icon name="bolt" size={32} color="#10b981" />
            <Text style={styles.statLabel}>POINTS</Text>
            <Text style={[styles.statValue, { color: '#10b981' }]}>4,820</Text>
          </View>
        </View>

        {/* Achievements Grid */}
        <View style={styles.achievementsSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Achievements</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>VIEW ALL</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.achievementsGrid}>
            <View style={styles.achievementItem}>
              <View style={[styles.achievementIconBg, { backgroundColor: '#6df5e1' }]}>
                <Icon name="eco" size={32} color="#006f64" />
              </View>
              <Text style={styles.achievementName}>Eco Pioneer</Text>
            </View>
            <View style={styles.achievementItem}>
              <View style={[styles.achievementIconBg, { backgroundColor: '#10b981' }]}>
                <Icon name="recycling" size={32} color="#00422b" />
              </View>
              <Text style={styles.achievementName}>Waste Warrior</Text>
            </View>
            <View style={styles.achievementItem}>
              <View style={[styles.achievementIconBg, { backgroundColor: '#71a1ff' }]}>
                <Icon name="water-drop" size={32} color="#00367a" />
              </View>
              <Text style={styles.achievementName}>Aqua Saver</Text>
            </View>
            <View style={styles.achievementItem}>
              <View style={[styles.achievementIconBg, { backgroundColor: '#6df5e1' }]}>
                <Icon name="energy-savings-leaf" size={32} color="#006f64" />
              </View>
              <Text style={styles.achievementName}>Power Pro</Text>
            </View>
            <View style={[styles.achievementItem, styles.achievementItemLocked]}>
              <View style={[styles.achievementIconBg, { backgroundColor: '#e1e3e4' }]}>
                <Icon name="forest" size={32} color="#3c4a42" />
              </View>
              <Text style={styles.achievementName}>Tree planter</Text>
            </View>
            <View style={[styles.achievementItem, styles.achievementItemLocked]}>
              <View style={[styles.achievementIconBg, { backgroundColor: '#e1e3e4' }]}>
                <Icon name="compost" size={32} color="#3c4a42" />
              </View>
              <Text style={styles.achievementName}>Soil Master</Text>
            </View>
          </View>
        </View>

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'stats' && styles.tabActive]}
            onPress={() => setActiveTab('stats')}
          >
            <Text style={[styles.tabText, activeTab === 'stats' && styles.tabTextActive]}>IMPACT STATS</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'friends' && styles.tabActive]}
            onPress={() => setActiveTab('friends')}
          >
            <Text style={[styles.tabText, activeTab === 'friends' && styles.tabTextActive]}>FRIENDS</Text>
          </TouchableOpacity>
        </View>

        {activeTab === 'stats' ? (
          <View style={styles.tabContentRow}>
            <View style={styles.impactCard}>
              <LinearGradient colors={['#10b981', '#005ac2']} style={styles.gradientBorder}>
                <View style={styles.impactInner}>
                  <View style={styles.impactHeader}>
                    <Icon name="analytics" size={24} color="#006c49" />
                    <Text style={styles.impactTitle}>Weekly Impact</Text>
                  </View>
                  <View style={styles.impactBars}>
                    <View style={styles.barContainer}>
                      <View style={styles.barHeader}>
                        <Text style={styles.barLabel}>CO2 SAVED</Text>
                        <Text style={styles.barPercent}>82% of Goal</Text>
                      </View>
                      <View style={styles.barBg}>
                        <LinearGradient colors={['#006c49', '#10b981']} style={[styles.barFill, { width: '82%' }]} />
                      </View>
                    </View>
                    <View style={styles.barContainer}>
                      <View style={styles.barHeader}>
                        <Text style={styles.barLabel}>WATER CONSERVED</Text>
                        <Text style={styles.barPercent}>45% of Goal</Text>
                      </View>
                      <View style={styles.barBg}>
                        <LinearGradient colors={['#005ac2', '#71a1ff']} style={[styles.barFill, { width: '45%' }]} />
                      </View>
                    </View>
                  </View>
                </View>
              </LinearGradient>
            </View>
            <View style={styles.rankCard}>
              <View style={styles.rankContent}>
                <View style={styles.rankCircleWrapper}>
                  <View style={styles.rankCircle}>
                    <Text style={styles.rankPercent}>75%</Text>
                  </View>
                </View>
                <View style={styles.rankInfo}>
                  <Text style={styles.rankTitle}>Community Rank</Text>
                  <Text style={styles.rankDesc}>You are in the top 25% of students in Greenview School!</Text>
                </View>
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.friendsList}>
            <View style={styles.friendCard}>
              <View style={styles.friendInfo}>
                <View style={styles.friendAvatarWrapper}>
                  <Image source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhiyDI4n8h1rn9-PVFa8Jp5m960LzWhvdD9oGp1hFIVxusYuaYqVzGi8kl6DeaYMC1DlWsIJiMG7jRxoGSx1HE7306n0ECXP07MsGWIxtyXiMxGvPnURDOEL5BuBSQxA8k-ozxsjPX_CnXuDC7nu1uJCRfd7Teu-KOV8dTmN0kvXn4vphl4iHsHRgnT4wcaWF_1b3Ev3zhgVPkXmViv2JtXSEduX1QfgLIWVxwtrzVODIteZBX0KLxH11b2g-LORSKZiMG8wdSbk7V'}} style={styles.avatarImage} />
                </View>
                <View>
                  <Text style={styles.friendName}>Maya Chen</Text>
                  <Text style={styles.friendMeta}>Level 28 • Master Recycler</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.chatBtn}>
                <Icon name="chat-bubble" size={24} color="#10b981" />
              </TouchableOpacity>
            </View>
            <View style={styles.friendCard}>
              <View style={styles.friendInfo}>
                <View style={styles.friendAvatarWrapper}>
                  <Image source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2Nkg0wlEePOg3-FCW7j8cI73RQrpiNSYlo_2yc3YMRrkHt4pg6P8UIZZtRXLgfUn9-40ErIehPTc7z8VfnOlU2VgjZANNOTmzhGN2Mz8GV3XnOSwi_kwb602ApdYJMtITMffV3jo-yzc5CAMs-eT8KhycUjwkAoSOrI45o9jXGH45ugdSXQS-dQk3p4CdAjDGXNny0exSZeWdrPF0KJLPRtJy19reot2i5P9J8CBq3swdIlKGvkKi55Fau_6qyK4-Syucgjt5xQRH'}} style={styles.avatarImage} />
                </View>
                <View>
                  <Text style={styles.friendName}>Liam Smith</Text>
                  <Text style={styles.friendMeta}>Level 21 • Energy Saver</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.chatBtn}>
                <Icon name="chat-bubble" size={24} color="#10b981" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <View style={styles.navItem}>
          <Icon name="home" size={24} color="#3c4a42" />
          <Text style={styles.navText}>Home</Text>
        </View>
        <View style={styles.navItem}>
          <Icon name="eco" size={24} color="#3c4a42" />
          <Text style={styles.navText}>Impact</Text>
        </View>
        <View style={styles.navItem}>
          <Icon name="military-tech" size={24} color="#3c4a42" />
          <Text style={styles.navText}>Arena</Text>
        </View>
        <View style={styles.navItemActive}>
          <Icon name="person" size={24} color="#00422b" />
          <Text style={styles.navTextActive}>Profile</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { height: 64, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 24, backgroundColor: 'rgba(248, 249, 250, 0.8)', shadowColor: '#006c49', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.05, shadowRadius: 8 },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  avatarWrapperSmall: { width: 40, height: 40, borderRadius: 20, borderWidth: 2, borderColor: '#10b981', overflow: 'hidden' },
  avatarImage: { width: '100%', height: '100%', resizeMode: 'cover' },
  logoText: { fontSize: 24, fontWeight: '800', color: '#006c49' },
  headerRight: { flexDirection: 'row', alignItems: 'center' },
  iconBtn: { padding: 8, borderRadius: 20 },
  scrollContent: { padding: 24, paddingBottom: 100 },
  profileHeader: { alignItems: 'center', marginBottom: 24 },
  avatarContainerLarge: { position: 'relative', marginBottom: 16 },
  avatarGradient: { width: 160, height: 160, borderRadius: 80, padding: 4, elevation: 8, shadowColor: '#006c49', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 16 },
  avatarInnerBorder: { flex: 1, borderRadius: 76, borderWidth: 4, borderColor: '#f8f9fa', overflow: 'hidden' },
  editBtn: { position: 'absolute', bottom: 4, right: 4, backgroundColor: '#006c49', padding: 8, borderRadius: 20, elevation: 4 },
  profileName: { fontSize: 32, fontWeight: '700', color: '#191c1d' },
  profileSub: { fontSize: 18, color: '#3c4a42' },
  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 24, marginBottom: 40 },
  statCard: { flex: 1, minWidth: '20%', backgroundColor: 'rgba(255,255,255,0.8)', padding: 24, borderRadius: 16, alignItems: 'center', justifyContent: 'center', borderBottomWidth: 4, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)' },
  statLabel: { fontSize: 12, fontWeight: '700', color: '#3c4a42', marginTop: 8 },
  statValue: { fontSize: 28, fontWeight: '700', marginTop: 4 },
  achievementsSection: { marginBottom: 40 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  sectionTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d' },
  viewAllText: { fontSize: 12, fontWeight: '700', color: '#006c49' },
  achievementsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 16 },
  achievementItem: { width: '15%', minWidth: 80, alignItems: 'center', gap: 4 },
  achievementIconBg: { width: 64, height: 64, borderRadius: 32, alignItems: 'center', justifyContent: 'center', elevation: 4 },
  achievementName: { fontSize: 10, fontWeight: '700', textAlign: 'center' },
  achievementItemLocked: { opacity: 0.4 },
  tabsContainer: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#bbcabf', marginBottom: 24 },
  tab: { paddingVertical: 8, paddingHorizontal: 16, borderBottomWidth: 2, borderBottomColor: 'transparent' },
  tabActive: { borderBottomColor: '#006c49' },
  tabText: { fontSize: 12, fontWeight: '700', color: '#3c4a42' },
  tabTextActive: { color: '#006c49' },
  tabContentRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 24 },
  impactCard: { flex: 1, minWidth: 300 },
  gradientBorder: { borderRadius: 24, padding: 2 },
  impactInner: { backgroundColor: '#f8f9fa', borderRadius: 22, padding: 24, minHeight: 200 },
  impactHeader: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 24 },
  impactTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d' },
  impactBars: { gap: 24 },
  barContainer: { gap: 4 },
  barHeader: { flexDirection: 'row', justifyContent: 'space-between' },
  barLabel: { fontSize: 12, color: '#3c4a42' },
  barPercent: { fontSize: 12, color: '#3c4a42' },
  barBg: { height: 12, backgroundColor: '#edeeef', borderRadius: 6 },
  barFill: { height: '100%', borderRadius: 6 },
  rankCard: { flex: 1, minWidth: 300, backgroundColor: 'rgba(255,255,255,0.8)', padding: 24, borderRadius: 16, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)', justifyContent: 'center' },
  rankContent: { flexDirection: 'row', alignItems: 'center', gap: 24 },
  rankCircleWrapper: { width: 96, height: 96 },
  rankCircle: { width: '100%', height: '100%', borderRadius: 48, borderWidth: 4, borderColor: '#006c49', alignItems: 'center', justifyContent: 'center' },
  rankPercent: { fontSize: 24, fontWeight: '700', color: '#006c49' },
  rankInfo: { flex: 1 },
  rankTitle: { fontSize: 16, fontWeight: '700', color: '#191c1d' },
  rankDesc: { fontSize: 16, color: '#3c4a42' },
  friendsList: { flexDirection: 'row', flexWrap: 'wrap', gap: 24 },
  friendCard: { flex: 1, minWidth: 300, backgroundColor: 'rgba(255,255,255,0.8)', padding: 12, borderRadius: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)' },
  friendInfo: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  friendAvatarWrapper: { width: 48, height: 48, borderRadius: 24, overflow: 'hidden' },
  friendName: { fontSize: 16, fontWeight: '700', color: '#191c1d' },
  friendMeta: { fontSize: 12, color: '#3c4a42' },
  chatBtn: { padding: 8, borderRadius: 20 },
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
