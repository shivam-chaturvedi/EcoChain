import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
  Switch,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function SettingsNotificationsScreen({ navigation }: any) {
  const [pushEnabled, setPushEnabled] = useState(true);
  const [emailEnabled, setEmailEnabled] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.avatarWrapperSmall}>
            <Image 
              source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPGGgbDSajF46Zhx8OPpxF1dJxEmW6sYmhB8_byKvN1AjUy5qO9vGZcs2Sc0EtKtX-1AI2acgxLLTNDIigalstN68DZhmwrOs-9OLgjGPIFuh5GqIyWb090SDR9fYnX79CLOT5Y6AjMbp4_C58HepV08hljHj1hYg6jkkRLd7YA-Tj0zLGYhxbCrhakV2bR2Peq9unWk78WXV5Gx7emzb_Z7JgAAUuSLbbP9xoIio3X6hCiP2JZFIBMP5Y3Q6YK6dhpHTAmgiupsL7'}}
              style={styles.avatarImage}
            />
          </View>
          <Text style={styles.logoText}>ChonX</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconBtn}>
            <Icon name="notifications" size={24} color="#006c49" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.grid}>
          {/* Left Column: Settings Navigation & Profile */}
          <View style={styles.leftCol}>
            <Text style={styles.pageTitle}>Settings</Text>
            
            <View style={styles.profileCard}>
              <View style={styles.profileInfo}>
                <View style={styles.avatarWrapperLarge}>
                  <Image 
                    source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPDqxhmZjD569Ehwd8fYFFnbRqcozUilu3NGTYkG6-zexFeOmt1tgMdk7tuQCe_GpwzQmO2QAgJgiqTO-1_F7JPViiaOZQjT8EK-ZBG-MLIDnOQtmr-_4rOjLOkHrVXOInQEhoVpihX37wt3oVznIK1ZARKn2IOAPT2zenK4vu_HF4XsB6CR4Pjrspx0K-95NpRSfGW-MOBO1rTI-Nqz8_o6l4v_xa_K9GvNVSQ_lwYLaikMoIlCPY5gYLw5YtE1Upn-juiibspqqa'}}
                    style={styles.avatarImage}
                  />
                  <View style={styles.levelBadge}>
                    <Text style={styles.levelBadgeText}>LVL 24</Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.userName}>Alex Rivera</Text>
                  <Text style={styles.userEmail}>alex.rivera@chonx.eco</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.editBtn}>
                <Icon name="edit" size={18} color="#00422b" />
                <Text style={styles.editBtnText}>Edit Profile</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.settingsList}>
              <TouchableOpacity style={styles.settingItem}>
                <View style={styles.settingItemLeft}>
                  <Icon name="lock" size={24} color="#006c49" />
                  <Text style={styles.settingItemText}>Privacy & Security</Text>
                </View>
                <Icon name="chevron-right" size={24} color="#6c7a71" />
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.settingItem}>
                <View style={styles.settingItemLeft}>
                  <Icon name="translate" size={24} color="#006c49" />
                  <Text style={styles.settingItemText}>Language Switcher</Text>
                </View>
                <View style={styles.settingItemRight}>
                  <Text style={styles.settingValue}>English</Text>
                  <Icon name="chevron-right" size={24} color="#6c7a71" />
                </View>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.settingItem}>
                <View style={styles.settingItemLeft}>
                  <Icon name="palette" size={24} color="#006c49" />
                  <Text style={styles.settingItemText}>App Theme</Text>
                </View>
                <View style={styles.themeToggle}>
                  <TouchableOpacity style={styles.themeBtnActive}>
                    <Icon name="light-mode" size={18} color="#006c49" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.themeBtn}>
                    <Icon name="dark-mode" size={18} color="#bbcabf" />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.togglesSection}>
              <Text style={styles.togglesLabel}>GLOBAL TOGGLES</Text>
              <View style={styles.togglesList}>
                <View style={styles.toggleRow}>
                  <View>
                    <Text style={styles.toggleTitle}>Push Notifications</Text>
                    <Text style={styles.toggleDesc}>Real-time impact alerts</Text>
                  </View>
                  <Switch 
                    value={pushEnabled}
                    onValueChange={setPushEnabled}
                    trackColor={{ false: '#e1e3e4', true: '#10b981' }}
                    thumbColor={'#fff'}
                  />
                </View>
                <View style={styles.toggleRow}>
                  <View>
                    <Text style={styles.toggleTitle}>Email Summaries</Text>
                    <Text style={styles.toggleDesc}>Weekly eco-performance</Text>
                  </View>
                  <Switch 
                    value={emailEnabled}
                    onValueChange={setEmailEnabled}
                    trackColor={{ false: '#e1e3e4', true: '#10b981' }}
                    thumbColor={'#fff'}
                  />
                </View>
              </View>
            </View>
          </View>

          {/* Right Column: Notifications Feed */}
          <View style={styles.rightCol}>
            <View style={styles.notificationsHeader}>
              <Text style={styles.pageTitle}>Notifications</Text>
              <TouchableOpacity>
                <Text style={styles.markAllText}>MARK ALL READ</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.notificationsList}>
              <TouchableOpacity style={styles.notificationCard}>
                <View style={[styles.indicator, { backgroundColor: '#006c49' }]} />
                <View style={[styles.notifIconBg, { backgroundColor: 'rgba(16,185,129,0.2)' }]}>
                  <Icon name="military-tech" size={28} color="#006c49" />
                </View>
                <View style={styles.notifContent}>
                  <View style={styles.notifHeaderRow}>
                    <Text style={styles.notifTitle}>New Arena Milestone!</Text>
                    <Text style={styles.notifTime}>2 MIN AGO</Text>
                  </View>
                  <Text style={styles.notifDesc}>You've reached Level 24! Your impact on carbon reduction has increased by 12% this week. Keep going, Champion!</Text>
                </View>
                <View style={styles.unreadDot} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.notificationCard}>
                <View style={[styles.indicator, { backgroundColor: '#006c49' }]} />
                <View style={[styles.notifIconBg, { backgroundColor: 'rgba(109,245,225,0.2)' }]}>
                  <Icon name="eco" size={28} color="#006b5f" />
                </View>
                <View style={styles.notifContent}>
                  <View style={styles.notifHeaderRow}>
                    <Text style={styles.notifTitle}>Tree Planting Confirmed</Text>
                    <Text style={styles.notifTime}>1 HOUR AGO</Text>
                  </View>
                  <Text style={styles.notifDesc}>Your contribution of 500 XP has funded a mangrove planting in the Amazon basin. View your certificate now.</Text>
                </View>
                <View style={styles.unreadDot} />
              </TouchableOpacity>

              <TouchableOpacity style={[styles.notificationCard, styles.notificationCardRead]}>
                <View style={[styles.notifIconBg, { backgroundColor: 'rgba(113,161,255,0.2)' }]}>
                  <Icon name="groups" size={28} color="#005ac2" />
                </View>
                <View style={styles.notifContent}>
                  <View style={styles.notifHeaderRow}>
                    <Text style={styles.notifTitle}>Team Challenge Updated</Text>
                    <Text style={styles.notifTime}>YESTERDAY</Text>
                  </View>
                  <Text style={styles.notifDesc}>The 'City Greenery' challenge ends in 24 hours. Your team is currently in 3rd place. One final push!</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.notificationCard, styles.notificationCardRead]}>
                <View style={[styles.notifIconBg, { backgroundColor: 'rgba(16,185,129,0.1)' }]}>
                  <Icon name="settings" size={28} color="#6c7a71" />
                </View>
                <View style={styles.notifContent}>
                  <View style={styles.notifHeaderRow}>
                    <Text style={styles.notifTitle}>Security Update</Text>
                    <Text style={styles.notifTime}>3 DAYS AGO</Text>
                  </View>
                  <Text style={styles.notifDesc}>We've updated our Privacy Policy to better protect your data. You can review the changes in the Privacy tab.</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.loadMoreBtn}>
                <Text style={styles.loadMoreText}>Load Older Notifications</Text>
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
  header: { height: 64, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 24, backgroundColor: 'rgba(248, 249, 250, 0.8)', borderBottomWidth: 1, borderBottomColor: 'rgba(187, 202, 191, 0.3)' },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  avatarWrapperSmall: { width: 40, height: 40, borderRadius: 20, overflow: 'hidden', backgroundColor: '#e7e8e9' },
  logoText: { fontSize: 24, fontWeight: '800', color: '#006c49', letterSpacing: -0.5 },
  headerRight: { flexDirection: 'row', alignItems: 'center' },
  iconBtn: { padding: 8, borderRadius: 20, backgroundColor: 'rgba(16,185,129,0.1)' },
  avatarImage: { width: '100%', height: '100%', resizeMode: 'cover' },
  scrollContent: { padding: 24, paddingBottom: 100 },
  grid: { flexDirection: 'column', gap: 40 },
  leftCol: { gap: 24 },
  pageTitle: { fontSize: 32, fontWeight: '700', color: '#191c1d' },
  profileCard: { backgroundColor: 'rgba(255,255,255,0.8)', padding: 24, borderRadius: 16, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)' },
  profileInfo: { flexDirection: 'row', alignItems: 'center', gap: 24, marginBottom: 24 },
  avatarWrapperLarge: { position: 'relative' },
  levelBadge: { position: 'absolute', bottom: -4, right: -4, backgroundColor: '#006c49', paddingHorizontal: 4, paddingVertical: 2, borderRadius: 8 },
  levelBadgeText: { color: '#fff', fontSize: 10, fontWeight: '700' },
  userName: { fontSize: 24, fontWeight: '600', color: '#191c1d' },
  userEmail: { fontSize: 16, color: '#3c4a42' },
  editBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 4, backgroundColor: '#10b981', paddingVertical: 12, borderRadius: 8, elevation: 2 },
  editBtnText: { fontSize: 16, fontWeight: '600', color: '#00422b' },
  settingsList: { gap: 4 },
  settingItem: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 24, borderRadius: 8, backgroundColor: 'rgba(229,231,235,0.2)' },
  settingItemLeft: { flexDirection: 'row', alignItems: 'center', gap: 24 },
  settingItemText: { fontSize: 24, fontWeight: '600', color: '#191c1d' },
  settingItemRight: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  settingValue: { fontSize: 16, color: '#3c4a42' },
  themeToggle: { flexDirection: 'row', backgroundColor: '#edeeef', padding: 4, borderRadius: 20, borderWidth: 1, borderColor: '#bbcabf' },
  themeBtnActive: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', elevation: 1 },
  themeBtn: { width: 32, height: 32, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  togglesSection: { marginTop: 24, padding: 24 },
  togglesLabel: { fontSize: 12, fontWeight: '700', color: '#6c7a71', marginBottom: 24, letterSpacing: 1 },
  togglesList: { gap: 24 },
  toggleRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  toggleTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d' },
  toggleDesc: { fontSize: 16, color: '#3c4a42' },
  rightCol: { gap: 24 },
  notificationsHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 },
  markAllText: { fontSize: 12, fontWeight: '700', color: '#006c49' },
  notificationsList: { gap: 24 },
  notificationCard: { backgroundColor: 'rgba(255,255,255,0.8)', padding: 24, borderRadius: 8, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)', flexDirection: 'row', gap: 24, overflow: 'hidden', position: 'relative' },
  notificationCardRead: { backgroundColor: '#f3f4f5', borderColor: 'rgba(187,202,191,0.2)' },
  indicator: { position: 'absolute', left: 0, top: 0, bottom: 0, width: 4 },
  notifIconBg: { width: 48, height: 48, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  notifContent: { flex: 1 },
  notifHeaderRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 },
  notifTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d' },
  notifTime: { fontSize: 12, fontWeight: '700', color: '#6c7a71' },
  notifDesc: { fontSize: 16, color: '#3c4a42' },
  unreadDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#006c49', marginTop: 8 },
  loadMoreBtn: { paddingVertical: 24, borderWidth: 1, borderColor: 'rgba(0,108,73,0.2)', borderRadius: 8, alignItems: 'center', marginTop: 12 },
  loadMoreText: { fontSize: 24, fontWeight: '600', color: '#006c49' },
});
