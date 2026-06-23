import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  Switch,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function CompleteTeacherProfileSettingsScreen() {
  const [approvalsNotif, setApprovalsNotif] = useState(true);
  const [newStudentNotif, setNewStudentNotif] = useState(true);
  const [newChallengeNotif, setNewChallengeNotif] = useState(false);
  const [announcementsNotif, setAnnouncementsNotif] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.headerAvatar}>
            <Image
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3cHt27eAb9jAlulLIJOCFjiSY7aXuTSw9wWet_th9Pwib9aExZjFXYKFBD6gZn02VvNRA11RwbiCh2-XRB6fpjTR2ANvFCYxyDnuf3KN6NM50a03P_hQG8eOctFzDQ3DkEvBAXZxUJq07x5HzmscycDFYiqkbmz3eE0srIKxBUTVG2iCZ0E-9Uvp-3j1Hr8YCn5QSd9Rh0rRhsWUA62_Rf4Cu4MNFciJf6Z0qBuk0VHyMxohUbpL0Oo6h3BEsSBvuBCQMaW6sOBXe' }}
              style={styles.avatarImg}
            />
          </View>
          <Text style={styles.logoText}>ChonX</Text>
        </View>
        <TouchableOpacity style={styles.iconBtn}>
          <Icon name="notifications" size={24} color="#006b5f" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.profileAvatarBox}>
            <View style={styles.profileAvatarBorder}>
              <Image
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAU_5ZSMFMd3mS0R1OlR5USH8qoXWEJehZCd_rFEpZRKNU7dWQHgZU99KKAlOO-bb8LQveCyCw50B__-L2ok-_WSVw7OjdMfA8HCizq0Jr5ohNSddcAfuen9ShSuKenrodFfUs5EjKnVSulfS7ZbMcYS6TPcUEPBP4BxKReix5JUUIGzL4wtK5sq_MD0pJYx-hVptccQzNQonfvYXZHBpViTEvRn5Jve9Tc9vD_EJwJr2lC1S1TVDhWWKsPoi1s-axa22vf4C2ikd0D' }}
                style={styles.avatarImgLg}
              />
            </View>
            <TouchableOpacity style={styles.editAvatarBtn}>
              <Icon name="edit" size={20} color="#ffffff" />
            </TouchableOpacity>
          </View>
          <View style={styles.profileInfo}>
            <View style={styles.nameRow}>
              <Text style={styles.profileName}>Ms. Aisha Rahman</Text>
              <View style={styles.roleBadge}><Text style={styles.roleText}>TEACHER</Text></View>
            </View>
            <Text style={styles.schoolText}>Greenwood International School</Text>
            <View style={styles.schoolCode}>
              <Icon name="school" size={14} color="#6c7a71" />
              <Text style={styles.schoolCodeText}>CODE: GSIA-8214</Text>
            </View>
          </View>
        </View>

        {/* Stats Grid */}
        <View style={styles.statsGrid}>
          <TouchableOpacity style={[styles.statCard, { backgroundColor: 'rgba(16,185,129,0.1)', borderColor: 'rgba(0,108,73,0.2)' }]}>
            <View style={styles.statHeader}>
              <Icon name="timer" size={24} color="#006c49" />
              <Icon name="arrow-forward" size={24} color="#006c49" style={{ opacity: 0.5 }} />
            </View>
            <View>
              <Text style={[styles.statVal, { color: '#00422b' }]}>12 Pending</Text>
              <Text style={[styles.statLabel, { color: '#006c49' }]}>Pending Approvals</Text>
            </View>
          </TouchableOpacity>
          
          <View style={styles.statCard}>
            <View style={styles.statHeader}>
              <Icon name="verified" size={24} color="#006b5f" />
            </View>
            <View>
              <Text style={styles.statVal}>148 Approved</Text>
              <Text style={styles.statLabel}>Reviewed Activities</Text>
            </View>
          </View>

          <View style={styles.statCard}>
            <View style={styles.statHeader}>
              <Icon name="eco" size={24} color="#005ac2" />
            </View>
            <View>
              <Text style={styles.statVal}>237.4 kg CO₂</Text>
              <Text style={styles.statLabel}>School Savings</Text>
            </View>
          </View>
        </View>

        {/* Personal Information */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Icon name="person" size={24} color="#006c49" />
            <Text style={styles.sectionTitle}>Personal Information</Text>
          </View>
          <View style={styles.cardGroup}>
            <View style={styles.fieldRow}>
              <View style={styles.fieldContent}>
                <Text style={styles.fieldLabel}>FULL NAME</Text>
                <TextInput style={styles.fieldInput} value="Aisha Rahman" />
              </View>
              <Icon name="edit" size={20} color="#6c7a71" style={{ opacity: 0.5 }} />
            </View>
            <View style={styles.fieldRow}>
              <View style={styles.fieldContent}>
                <Text style={styles.fieldLabel}>EMAIL ADDRESS</Text>
                <TextInput style={styles.fieldInput} value="a.rahman@greenwood.edu" keyboardType="email-address" />
              </View>
              <Icon name="edit" size={20} color="#6c7a71" style={{ opacity: 0.5 }} />
            </View>
            <View style={styles.fieldRow}>
              <View style={styles.fieldContent}>
                <Text style={styles.fieldLabel}>MOBILE NUMBER</Text>
                <TextInput style={styles.fieldInput} value="+1 (555) 012-3456" keyboardType="phone-pad" />
              </View>
              <Icon name="edit" size={20} color="#6c7a71" style={{ opacity: 0.5 }} />
            </View>
            <View style={styles.fieldRow}>
              <View style={styles.fieldContent}>
                <Text style={styles.fieldLabel}>DEPARTMENT</Text>
                <TextInput style={styles.fieldInput} value="Science & Sustainability" />
              </View>
              <Icon name="edit" size={20} color="#6c7a71" style={{ opacity: 0.5 }} />
            </View>
            <View style={styles.fieldRow}>
              <View style={styles.fieldContent}>
                <Text style={styles.fieldLabel}>SUBJECTS HANDLED</Text>
                <TextInput style={styles.fieldInput} value="Biology, Environmental Science" />
              </View>
              <Icon name="edit" size={20} color="#6c7a71" style={{ opacity: 0.5 }} />
            </View>
            <View style={styles.fieldRow}>
              <View style={styles.fieldContent}>
                <Text style={styles.fieldLabel}>CLASS GROUPS</Text>
                <TextInput style={styles.fieldInput} value="Grade 9-B, Grade 11-A" />
              </View>
              <Icon name="edit" size={20} color="#6c7a71" style={{ opacity: 0.5 }} />
            </View>
            <View style={[styles.fieldRow, { backgroundColor: 'rgba(243,244,245,0.3)' }]}>
              <View style={styles.fieldContent}>
                <Text style={styles.fieldLabel}>TEACHER ID</Text>
                <Text style={styles.fieldReadOnly}>T-992-ARC</Text>
              </View>
              <Icon name="lock" size={20} color="#6c7a71" style={{ opacity: 0.3 }} />
            </View>
            <View style={[styles.fieldRow, { backgroundColor: 'rgba(243,244,245,0.3)', borderBottomWidth: 0 }]}>
              <View style={styles.fieldContent}>
                <Text style={styles.fieldLabel}>SCHOOL CODE</Text>
                <Text style={styles.fieldReadOnly}>GSIA-8214</Text>
              </View>
              <Icon name="lock" size={20} color="#6c7a71" style={{ opacity: 0.3 }} />
            </View>
          </View>
        </View>

        {/* App Settings */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Icon name="settings" size={24} color="#006c49" />
            <Text style={styles.sectionTitle}>App Settings</Text>
          </View>
          <View style={styles.cardGroup}>
            <View style={styles.toggleRow}>
              <Text style={styles.toggleLabel}>Approvals Notifications</Text>
              <Switch value={approvalsNotif} onValueChange={setApprovalsNotif} trackColor={{ true: '#10b981', false: '#e1e3e4' }} />
            </View>
            <View style={styles.toggleRow}>
              <Text style={styles.toggleLabel}>New Student Joined</Text>
              <Switch value={newStudentNotif} onValueChange={setNewStudentNotif} trackColor={{ true: '#10b981', false: '#e1e3e4' }} />
            </View>
            <View style={styles.toggleRow}>
              <Text style={styles.toggleLabel}>New Challenge Created</Text>
              <Switch value={newChallengeNotif} onValueChange={setNewChallengeNotif} trackColor={{ true: '#10b981', false: '#e1e3e4' }} />
            </View>
            <View style={styles.toggleRow}>
              <Text style={styles.toggleLabel}>School Announcements</Text>
              <Switch value={announcementsNotif} onValueChange={setAnnouncementsNotif} trackColor={{ true: '#10b981', false: '#e1e3e4' }} />
            </View>
            <View style={styles.toggleRow}>
              <Text style={styles.toggleLabel}>Dark Mode</Text>
              <Switch value={darkMode} onValueChange={setDarkMode} trackColor={{ true: '#10b981', false: '#e1e3e4' }} />
            </View>
            <TouchableOpacity style={[styles.toggleRow, { borderBottomWidth: 0 }]}>
              <Text style={styles.toggleLabel}>Language</Text>
              <Text style={styles.actionText}>English (US)</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Privacy & Security */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Icon name="security" size={24} color="#006c49" />
            <Text style={styles.sectionTitle}>Privacy & Security</Text>
          </View>
          <View style={styles.cardGroup}>
            <TouchableOpacity style={styles.actionRow}>
              <Text style={styles.toggleLabel}>Change Password</Text>
              <Icon name="chevron-right" size={24} color="#6c7a71" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionRow}>
              <View>
                <Text style={styles.toggleLabel}>Profile Visibility</Text>
                <Text style={styles.actionDesc}>Students can see: name + avatar only</Text>
              </View>
              <Icon name="chevron-right" size={24} color="#6c7a71" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionRow}>
              <Text style={styles.toggleLabel}>Download My Data</Text>
              <Icon name="download" size={24} color="#6c7a71" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.actionRow, { borderBottomWidth: 0 }]}>
              <Text style={[styles.toggleLabel, { color: '#ba1a1a' }]}>Delete Account</Text>
              <Icon name="delete" size={24} color="#ba1a1a" style={{ opacity: 0.5 }} />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.logoutBtn}>
          <Icon name="logout" size={24} color="#ffffff" />
          <Text style={styles.logoutBtnText}>Log Out</Text>
        </TouchableOpacity>
        <Text style={styles.versionText}>Version 2.4.1 (Build 822)</Text>
      </ScrollView>

      {/* Bottom Nav Placeholder */}
      <View style={styles.bottomNav}>
        <View style={styles.navItem}><Icon name="grid-view" size={24} color="#3c4a42" /><Text style={styles.navText}>Home</Text></View>
        <View style={styles.navItem}><Icon name="analytics" size={24} color="#3c4a42" /><Text style={styles.navText}>Verify</Text></View>
        <View style={styles.navItem}><Icon name="emoji-events" size={24} color="#3c4a42" /><Text style={styles.navText}>Arena</Text></View>
        <View style={[styles.navItem, styles.navItemActive]}><Icon name="person" size={24} color="#006f64" /><Text style={[styles.navText, { color: '#006f64' }]}>Profile</Text></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, height: 64, backgroundColor: 'rgba(248,249,250,0.8)', borderBottomWidth: 1, borderBottomColor: 'rgba(187,202,191,0.3)' },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  headerAvatar: { width: 32, height: 32, borderRadius: 16, overflow: 'hidden', backgroundColor: '#10b981' },
  avatarImg: { width: '100%', height: '100%' },
  logoText: { fontSize: 24, fontWeight: '600', color: '#006c49' },
  iconBtn: { width: 40, height: 40, alignItems: 'center', justifyContent: 'center' },
  scrollContent: { paddingHorizontal: 24, paddingTop: 24, paddingBottom: 100 },
  
  profileHeader: { flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', gap: 24, marginBottom: 40 },
  profileAvatarBox: { position: 'relative' },
  profileAvatarBorder: { width: 128, height: 128, borderRadius: 64, borderWidth: 4, borderColor: '#ffffff', overflow: 'hidden', shadowColor: '#006c49', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 8 },
  avatarImgLg: { width: '100%', height: '100%' },
  editAvatarBtn: { position: 'absolute', bottom: 4, right: 4, width: 40, height: 40, borderRadius: 20, backgroundColor: '#006c49', borderWidth: 2, borderColor: '#ffffff', alignItems: 'center', justifyContent: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 4 },
  profileInfo: { flex: 1, minWidth: 200 },
  nameRow: { flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', gap: 12, marginBottom: 8 },
  profileName: { fontSize: 32, fontWeight: '700', color: '#191c1d' },
  roleBadge: { backgroundColor: '#6df5e1', paddingHorizontal: 16, paddingVertical: 4, borderRadius: 16 },
  roleText: { fontSize: 12, fontWeight: '700', color: '#006f64', letterSpacing: 1 },
  schoolText: { fontSize: 18, color: '#3c4a42', marginBottom: 8 },
  schoolCode: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  schoolCodeText: { fontSize: 11, fontWeight: '700', color: '#6c7a71', letterSpacing: 1 },

  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 24, marginBottom: 40 },
  statCard: { flex: 1, minWidth: 200, backgroundColor: '#ffffff', padding: 24, borderRadius: 16, borderWidth: 1, borderColor: 'rgba(187,202,191,0.3)', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 8, justifyContent: 'space-between' },
  statHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  statVal: { fontSize: 28, fontWeight: '700', color: '#191c1d' },
  statLabel: { fontSize: 12, fontWeight: '700', color: '#6c7a71', textTransform: 'uppercase', letterSpacing: 1 },

  section: { marginBottom: 32 },
  sectionHeader: { flexDirection: 'row', alignItems: 'center', gap: 8, paddingHorizontal: 8, marginBottom: 16 },
  sectionTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d' },
  cardGroup: { backgroundColor: '#ffffff', borderRadius: 16, borderWidth: 1, borderColor: 'rgba(187,202,191,0.3)', overflow: 'hidden' },
  
  fieldRow: { flexDirection: 'row', alignItems: 'center', padding: 24, borderBottomWidth: 1, borderBottomColor: 'rgba(187,202,191,0.2)' },
  fieldContent: { flex: 1 },
  fieldLabel: { fontSize: 11, fontWeight: '700', color: '#6c7a71', letterSpacing: 1, marginBottom: 8 },
  fieldInput: { fontSize: 16, fontWeight: '600', color: '#191c1d', padding: 0 },
  fieldReadOnly: { fontSize: 16, fontWeight: '600', color: '#3c4a42' },

  toggleRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 24, borderBottomWidth: 1, borderBottomColor: 'rgba(187,202,191,0.2)' },
  toggleLabel: { fontSize: 16, fontWeight: '500', color: '#191c1d' },
  actionText: { fontSize: 16, fontWeight: '600', color: '#006c49' },

  actionRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 24, borderBottomWidth: 1, borderBottomColor: 'rgba(187,202,191,0.2)' },
  actionDesc: { fontSize: 14, color: '#6c7a71', marginTop: 4 },

  logoutBtn: { backgroundColor: '#ba1a1a', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, paddingVertical: 16, borderRadius: 16, marginTop: 16, shadowColor: '#ba1a1a', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 8 },
  logoutBtnText: { fontSize: 18, fontWeight: '700', color: '#ffffff' },
  versionText: { textAlign: 'center', fontSize: 12, color: '#6c7a71', marginTop: 16 },

  bottomNav: { position: 'absolute', bottom: 0, left: 0, right: 0, flexDirection: 'row', backgroundColor: 'rgba(248,249,250,0.9)', paddingBottom: 32, paddingTop: 8, borderTopWidth: 1, borderTopColor: 'rgba(187,202,191,0.2)', justifyContent: 'space-around' },
  navItem: { alignItems: 'center', paddingHorizontal: 16, paddingVertical: 8 },
  navItemActive: { backgroundColor: '#6df5e1', borderRadius: 16 },
  navText: { fontSize: 12, fontWeight: '700', color: '#3c4a42', marginTop: 4 },
});
