import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TextInput,
  Image,
  Switch,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function SchoolSettingsProfileScreen({ navigation }: any) {
  const [activeTab, setActiveTab] = useState('general');
  const [alertsEnabled, setAlertsEnabled] = useState(true);
  const [digestEnabled, setDigestEnabled] = useState(true);
  const [feedbackEnabled, setFeedbackEnabled] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Icon name="eco" size={28} color="#006c49" />
          <Text style={styles.logoText}>EcoSchools Admin</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconBtn}>
            <Icon name="notifications" size={24} color="#3c4a42" />
          </TouchableOpacity>
          <View style={styles.avatarWrapper}>
            <Image 
              source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWKqNXYo2IKXsz0RJR-ZgQh86h5Qq796wC6qkEa-mYQe25fpI_dBIVsSxsH2yA7w_kNL_RXGYi98iWUPONn9gjrGc8xpigffHP0haQrVaH2gzdzff631f2CaNTVD723nNFjcPCclodsBso32AV_9z3XAxHVx08alY8LcqP4ONI-n9fsEFQcmgM9Yk0RnRE0KnVkkmODIHL9Qr3fOFyf14CDc03MtK5fT9PTr7wUtu9HdNmxAOZg12QzTnf2ea6XkWxtMF7lxJNzh9F'}}
              style={styles.avatarImage}
            />
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.pageHeader}>
          <Text style={styles.pageTitle}>School Profile</Text>
          <Text style={styles.pageSubtitle}>Manage your institution's identity, branding, and security preferences.</Text>
        </View>

        <View style={styles.tabsWrapper}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabsScroll}>
            <TouchableOpacity 
              style={[styles.tab, activeTab === 'general' && styles.tabActive]}
              onPress={() => setActiveTab('general')}
            >
              <Text style={[styles.tabText, activeTab === 'general' && styles.tabTextActive]}>GENERAL INFO</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.tab, activeTab === 'notifications' && styles.tabActive]}
              onPress={() => setActiveTab('notifications')}
            >
              <Text style={[styles.tabText, activeTab === 'notifications' && styles.tabTextActive]}>NOTIFICATIONS</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.tab, activeTab === 'security' && styles.tabActive]}
              onPress={() => setActiveTab('security')}
            >
              <Text style={[styles.tabText, activeTab === 'security' && styles.tabTextActive]}>SECURITY</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {activeTab === 'general' && (
          <View style={styles.tabContent}>
            <View style={styles.mainCard}>
              <Text style={styles.cardTitle}>Institutional Details</Text>
              
              <View style={styles.formGrid}>
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>SCHOOL NAME</Text>
                  <TextInput style={styles.input} value="Oakwood Academy of Sustainability" />
                </View>
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>INSTITUTION ID</Text>
                  <TextInput style={[styles.input, styles.inputDisabled]} value="OAK-2024-SYS-01" editable={false} />
                </View>
                <View style={[styles.inputGroup, { width: '100%' }]}>
                  <Text style={styles.label}>PHYSICAL ADDRESS</Text>
                  <TextInput style={[styles.input, { height: 100, textAlignVertical: 'top', paddingTop: 16 }]} multiline value="1221 Forest Canopy Way,\nGreen Valley, CA 90210\nUnited States" />
                </View>
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>PRIMARY CONTACT EMAIL</Text>
                  <TextInput style={styles.input} value="admin@oakwoodacademy.edu" keyboardType="email-address" />
                </View>
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>PHONE NUMBER</Text>
                  <TextInput style={styles.input} value="+1 (555) 890-2341" keyboardType="phone-pad" />
                </View>
              </View>

              <View style={styles.cardFooter}>
                <TouchableOpacity style={styles.saveBtn}>
                  <Text style={styles.saveBtnText}>SAVE CHANGES</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.statsCard}>
              <Text style={styles.statsLabel}>QUICK STATS</Text>
              <View style={styles.statRow}>
                <Text style={styles.statText}>Active Students</Text>
                <Text style={styles.statValue}>1,240</Text>
              </View>
              <View style={styles.statRow}>
                <Text style={styles.statText}>Faculty Members</Text>
                <Text style={styles.statValue}>86</Text>
              </View>
            </View>
          </View>
        )}

        {activeTab === 'notifications' && (
          <View style={styles.tabContent}>
            <View style={styles.mainCard}>
              <Text style={styles.cardTitle}>Communication Preferences</Text>
              
              <View style={styles.settingRow}>
                <View style={styles.settingInfo}>
                  <Text style={styles.settingTitle}>Environmental Alerts</Text>
                  <Text style={styles.settingDesc}>Real-time alerts for local environmental milestones.</Text>
                </View>
                <Switch 
                  value={alertsEnabled}
                  onValueChange={setAlertsEnabled}
                  trackColor={{ false: '#e1e3e4', true: '#006c49' }}
                  thumbColor={'#fff'}
                />
              </View>

              <View style={styles.settingRow}>
                <View style={styles.settingInfo}>
                  <Text style={styles.settingTitle}>Weekly Sustainability Digest</Text>
                  <Text style={styles.settingDesc}>Email summary of school performance and leaderboards.</Text>
                </View>
                <Switch 
                  value={digestEnabled}
                  onValueChange={setDigestEnabled}
                  trackColor={{ false: '#e1e3e4', true: '#006c49' }}
                  thumbColor={'#fff'}
                />
              </View>

              <View style={styles.settingRow}>
                <View style={styles.settingInfo}>
                  <Text style={styles.settingTitle}>Teacher Feedback Notifications</Text>
                  <Text style={styles.settingDesc}>Push notifications when faculty submit initiative reports.</Text>
                </View>
                <Switch 
                  value={feedbackEnabled}
                  onValueChange={setFeedbackEnabled}
                  trackColor={{ false: '#e1e3e4', true: '#006c49' }}
                  thumbColor={'#fff'}
                />
              </View>

              <View style={[styles.settingRow, { borderBottomWidth: 0 }]}>
                <View style={styles.settingInfo}>
                  <Text style={styles.settingTitle}>Security & Login Alerts</Text>
                  <Text style={styles.settingDesc}>Mandatory security notifications for account safety.</Text>
                </View>
                <View style={styles.alwaysOnBadge}>
                  <Text style={styles.alwaysOnText}>ALWAYS ON</Text>
                </View>
              </View>

            </View>
          </View>
        )}

        {activeTab === 'security' && (
          <View style={styles.tabContent}>
            <View style={styles.mainCard}>
              <Text style={styles.cardTitle}>Password Reset</Text>
              
              <View style={styles.formGridSingle}>
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>CURRENT PASSWORD</Text>
                  <TextInput style={styles.input} secureTextEntry placeholder="••••••••" />
                </View>
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>NEW PASSWORD</Text>
                  <TextInput style={styles.input} secureTextEntry placeholder="••••••••" />
                </View>
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>CONFIRM NEW PASSWORD</Text>
                  <TextInput style={styles.input} secureTextEntry placeholder="••••••••" />
                </View>
                <TouchableOpacity style={styles.fullWidthBtn}>
                  <Text style={styles.fullWidthBtnText}>UPDATE PASSWORD</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.mainCard}>
              <Text style={styles.cardTitleSmall}>Two-Factor Auth</Text>
              <Text style={styles.cardDesc}>Add an extra layer of security to your administrative account by requiring a code from your phone.</Text>
              <TouchableOpacity style={styles.outlineBtn}>
                <Icon name="add-moderator" size={20} color="#3c4a42" />
                <Text style={styles.outlineBtnText}>ENABLE 2FA</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.dangerCard}>
              <Text style={styles.dangerTitle}>Danger Zone</Text>
              <Text style={styles.dangerDesc}>Permanently delete school data and administrator access. This action is irreversible.</Text>
              <TouchableOpacity>
                <Text style={styles.dangerLink}>DEACTIVATE INSTITUTION ACCOUNT</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { height: 64, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 24, backgroundColor: 'rgba(248, 249, 250, 0.8)', borderBottomWidth: 1, borderBottomColor: 'rgba(187, 202, 191, 0.3)' },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  logoText: { fontSize: 24, fontWeight: '800', color: '#006c49', letterSpacing: -0.5 },
  headerRight: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  iconBtn: { padding: 8 },
  avatarWrapper: { width: 40, height: 40, borderRadius: 20, borderWidth: 2, borderColor: '#10b981', overflow: 'hidden' },
  avatarImage: { width: '100%', height: '100%', resizeMode: 'cover' },
  scrollContent: { padding: 24, paddingBottom: 40 },
  pageHeader: { marginBottom: 32 },
  pageTitle: { fontSize: 32, fontWeight: '700', color: '#191c1d', marginBottom: 8 },
  pageSubtitle: { fontSize: 18, color: '#3c4a42' },
  tabsWrapper: { marginBottom: 32 },
  tabsScroll: { flexDirection: 'row', gap: 12 },
  tab: { paddingHorizontal: 24, paddingVertical: 12, borderRadius: 24, backgroundColor: 'transparent' },
  tabActive: { backgroundColor: '#006c49', elevation: 4, shadowColor: '#006c49', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8 },
  tabText: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 0.5 },
  tabTextActive: { color: '#fff' },
  tabContent: { gap: 24 },
  mainCard: { backgroundColor: '#fff', padding: 24, borderRadius: 16, borderWidth: 1, borderColor: 'rgba(187,202,191,0.3)', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 8, elevation: 2 },
  cardTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d', marginBottom: 24 },
  formGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 24 },
  formGridSingle: { gap: 24 },
  inputGroup: { flex: 1, minWidth: '45%', gap: 8 },
  label: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 0.5 },
  input: { height: 48, backgroundColor: '#f8f9fa', borderRadius: 8, borderWidth: 1, borderColor: '#bbcabf', paddingHorizontal: 16, fontSize: 16, color: '#191c1d' },
  inputDisabled: { backgroundColor: '#edeeef', color: '#3c4a42' },
  cardFooter: { marginTop: 32, paddingTop: 24, borderTopWidth: 1, borderTopColor: 'rgba(187,202,191,0.3)', alignItems: 'flex-end' },
  saveBtn: { backgroundColor: '#006c49', paddingHorizontal: 32, paddingVertical: 12, borderRadius: 24, elevation: 4, shadowColor: '#006c49', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8 },
  saveBtnText: { color: '#fff', fontSize: 12, fontWeight: '700', letterSpacing: 0.5 },
  statsCard: { backgroundColor: '#fff', padding: 24, borderRadius: 16, borderWidth: 1, borderColor: 'rgba(187,202,191,0.3)', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 8, elevation: 2 },
  statsLabel: { fontSize: 12, fontWeight: '700', color: '#3c4a42', marginBottom: 16, letterSpacing: 0.5 },
  statRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  statText: { fontSize: 16, color: '#191c1d' },
  statValue: { fontSize: 28, fontWeight: '700', color: '#006c49' },
  settingRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: 'rgba(187,202,191,0.3)' },
  settingInfo: { flex: 1, paddingRight: 16 },
  settingTitle: { fontSize: 16, fontWeight: '700', color: '#191c1d', marginBottom: 4 },
  settingDesc: { fontSize: 14, color: '#3c4a42' },
  alwaysOnBadge: { backgroundColor: '#edeeef', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 16 },
  alwaysOnText: { fontSize: 10, fontWeight: '700', color: '#3c4a42', letterSpacing: 0.5 },
  fullWidthBtn: { backgroundColor: '#006c49', width: '100%', paddingVertical: 14, borderRadius: 24, alignItems: 'center', marginTop: 8, elevation: 4, shadowColor: '#006c49', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8 },
  fullWidthBtnText: { color: '#fff', fontSize: 12, fontWeight: '700', letterSpacing: 0.5 },
  cardTitleSmall: { fontSize: 20, fontWeight: '600', color: '#191c1d', marginBottom: 8 },
  cardDesc: { fontSize: 14, color: '#3c4a42', marginBottom: 24 },
  outlineBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, width: '100%', paddingVertical: 14, borderRadius: 8, borderWidth: 2, borderColor: '#bbcabf', borderStyle: 'dashed' },
  outlineBtnText: { fontSize: 14, fontWeight: '700', color: '#3c4a42' },
  dangerCard: { backgroundColor: 'rgba(255,218,214,0.3)', padding: 24, borderRadius: 16, borderWidth: 1, borderColor: 'rgba(186,26,26,0.2)' },
  dangerTitle: { fontSize: 24, fontWeight: '600', color: '#ba1a1a', marginBottom: 8 },
  dangerDesc: { fontSize: 14, color: '#93000a', marginBottom: 24 },
  dangerLink: { fontSize: 12, fontWeight: '700', color: '#ba1a1a', textDecorationLine: 'underline', letterSpacing: 0.5 },
});
