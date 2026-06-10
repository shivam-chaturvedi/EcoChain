import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Switch,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import { Colors } from '../../../constants';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'TeacherProfile'>;
};

const INFO_FIELDS = [
  { id: 'name', label: 'FULL NAME', value: 'Aisha Rahman', locked: false },
  { id: 'email', label: 'EMAIL ADDRESS', value: 'a.rahman@greenwood.edu', locked: false },
  { id: 'phone', label: 'MOBILE NUMBER', value: '+1 (555) 012-3456', locked: false },
  { id: 'dept', label: 'DEPARTMENT', value: 'Science & Sustainability', locked: false },
  { id: 'subjects', label: 'SUBJECTS HANDLED', value: 'Biology, Environmental Science', locked: false },
  { id: 'classes', label: 'CLASS GROUPS', value: 'Grade 9-B, Grade 11-A', locked: false },
  { id: 'tid', label: 'TEACHER ID', value: 'T-992-ARC', locked: true },
  { id: 'code', label: 'SCHOOL CODE', value: 'GSIA-8214', locked: true },
];

export default function TeacherProfileScreen({ navigation }: Props) {
  const [settings, setSettings] = useState({
    approvals: true,
    newStudent: true,
    newChallenge: false,
    announcements: true,
    darkMode: false,
  });

  function toggle(key: keyof typeof settings) {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  }

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />

      {/* ── Header ── */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.headerAvatar}>
            <Text style={styles.headerAvatarEmoji}>👩‍🏫</Text>
          </View>
          <Text style={styles.brandText}>ChonX</Text>
        </View>
        <TouchableOpacity style={styles.bellBtn} activeOpacity={0.7}>
          <Text style={styles.bellText}>🔔</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>

        {/* ── Profile hero ── */}
        <View style={styles.profileHero}>
          <View style={styles.avatarWrap}>
            <View style={styles.bigAvatar}>
              <Text style={styles.bigAvatarEmoji}>👩</Text>
            </View>
            <TouchableOpacity style={styles.editAvatarBtn} activeOpacity={0.8}>
              <Text style={styles.editAvatarBtnText}>✏️</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.profileName}>Ms. Aisha Rahman</Text>
          <View style={styles.roleBadge}>
            <Text style={styles.roleBadgeText}>TEACHER</Text>
          </View>
          <Text style={styles.schoolName}>Greenwood International School</Text>
          <View style={styles.codeRow}>
            <Text style={styles.codeIcon}>🔑</Text>
            <Text style={styles.codeText}>CODE: GSIA-8214</Text>
          </View>
        </View>

        {/* ── Pending card (mint) ── */}
        <View style={styles.pendingCard}>
          <Text style={styles.pendingIcon}>🕐</Text>
          <View>
            <Text style={styles.pendingValue}>12 Pending</Text>
            <Text style={styles.pendingLabel}>PENDING APPROVALS</Text>
          </View>
        </View>

        {/* ── Approved card ── */}
        <View style={styles.statCard}>
          <Text style={styles.statValue}>148 Approved</Text>
          <Text style={styles.statLabel}>REVIEWED ACTIVITIES</Text>
        </View>

        {/* ── CO₂ card ── */}
        <View style={styles.statCard}>
          <View style={styles.co2Row}>
            <Text style={styles.co2Leaf}>🍃</Text>
            <Text style={styles.statValue}>237.4 kg CO₂</Text>
          </View>
          <Text style={styles.statLabel}>SCHOOL SAVINGS</Text>
        </View>

        {/* ── Personal Information ── */}
        <SectionHeader icon="👤" title="Personal Information" />
        <View style={styles.sectionCard}>
          {INFO_FIELDS.map((field, idx) => (
            <View key={field.id}>
              {idx > 0 && <View style={styles.fieldDivider} />}
              <View style={styles.fieldRow}>
                <View style={styles.fieldContent}>
                  <Text style={styles.fieldLabel}>{field.label}</Text>
                  <Text style={styles.fieldValue}>{field.value}</Text>
                </View>
                <TouchableOpacity style={styles.fieldAction} activeOpacity={0.6}>
                  <Text style={styles.fieldActionIcon}>{field.locked ? '🔒' : '✏️'}</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        {/* ── App Settings ── */}
        <SectionHeader icon="⚙️" title="App Settings" />
        <View style={styles.sectionCard}>
          <ToggleRow
            label="Approvals Notifications"
            value={settings.approvals}
            onToggle={() => toggle('approvals')}
          />
          <View style={styles.fieldDivider} />
          <ToggleRow
            label="New Student Joined"
            value={settings.newStudent}
            onToggle={() => toggle('newStudent')}
          />
          <View style={styles.fieldDivider} />
          <ToggleRow
            label="New Challenge Created"
            value={settings.newChallenge}
            onToggle={() => toggle('newChallenge')}
          />
          <View style={styles.fieldDivider} />
          <ToggleRow
            label="School Announcements"
            value={settings.announcements}
            onToggle={() => toggle('announcements')}
          />
          <View style={styles.fieldDivider} />
          <ToggleRow
            label="Dark Mode"
            value={settings.darkMode}
            onToggle={() => toggle('darkMode')}
          />
          <View style={styles.fieldDivider} />
          <View style={styles.settingRow}>
            <Text style={styles.settingLabel}>Language</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.languageValue}>English (US)</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ── Privacy & Security ── */}
        <SectionHeader icon="🔐" title="Privacy & Security" />
        <View style={styles.sectionCard}>
          <TouchableOpacity style={styles.privacyRow} activeOpacity={0.7}>
            <Text style={styles.privacyLabel}>Change Password</Text>
            <Text style={styles.chevron}>›</Text>
          </TouchableOpacity>

          <View style={styles.fieldDivider} />

          <TouchableOpacity style={styles.privacyRow} activeOpacity={0.7}>
            <View style={{ flex: 1 }}>
              <Text style={styles.privacyLabel}>Profile Visibility</Text>
              <Text style={styles.privacySubtitle}>Students can see: name + avatar only</Text>
            </View>
            <Text style={styles.chevron}>›</Text>
          </TouchableOpacity>

          <View style={styles.fieldDivider} />

          <TouchableOpacity style={styles.privacyRow} activeOpacity={0.7}>
            <Text style={styles.privacyLabel}>Download My Data</Text>
            <Text style={styles.downloadIcon}>⬇</Text>
          </TouchableOpacity>

          <View style={styles.fieldDivider} />

          <TouchableOpacity style={styles.privacyRow} activeOpacity={0.7}>
            <Text style={[styles.privacyLabel, { color: '#EF4444' }]}>Delete Account</Text>
            <Text style={styles.deleteIcon}>🗑️</Text>
          </TouchableOpacity>
        </View>

        {/* ── Log Out ── */}
        <TouchableOpacity style={styles.logoutBtn} activeOpacity={0.85}>
          <Text style={styles.logoutBtnText}>↪  Log Out</Text>
        </TouchableOpacity>

        <Text style={styles.versionText}>Version 2.4.1 (Build 822)</Text>

        <View style={{ height: 32 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

function SectionHeader({ icon, title }: { icon: string; title: string }) {
  return (
    <View style={sectionHeaderStyles.row}>
      <Text style={sectionHeaderStyles.icon}>{icon}</Text>
      <Text style={sectionHeaderStyles.title}>{title}</Text>
    </View>
  );
}

function ToggleRow({
  label,
  value,
  onToggle,
}: {
  label: string;
  value: boolean;
  onToggle: () => void;
}) {
  return (
    <View style={toggleStyles.row}>
      <Text style={toggleStyles.label}>{label}</Text>
      <Switch
        value={value}
        onValueChange={onToggle}
        trackColor={{ false: '#E5E7EB', true: Colors.primaryLight }}
        thumbColor={Colors.white}
        ios_backgroundColor="#E5E7EB"
      />
    </View>
  );
}

const sectionHeaderStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 10,
    gap: 8,
  },
  icon: { fontSize: 16 },
  title: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.text,
    letterSpacing: -0.1,
  },
});

const toggleStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
  },
  label: {
    flex: 1,
    fontSize: 14,
    color: Colors.text,
    fontWeight: '500',
  },
});

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Colors.surface,
  },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  headerLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  headerAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#C7DFD0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerAvatarEmoji: { fontSize: 18 },
  brandText: {
    fontSize: 18,
    fontWeight: '900',
    color: Colors.primaryDark,
    letterSpacing: -0.4,
  },
  bellBtn: { padding: 4 },
  bellText: { fontSize: 20 },

  // Scroll
  scroll: { paddingBottom: 24 },

  // Profile hero
  profileHero: {
    alignItems: 'center',
    paddingVertical: 24,
    backgroundColor: Colors.white,
    marginBottom: 12,
    gap: 6,
  },
  avatarWrap: {
    position: 'relative',
    marginBottom: 8,
  },
  bigAvatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#B2D8CC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigAvatarEmoji: { fontSize: 48 },
  editAvatarBtn: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: Colors.primaryDark,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Colors.white,
  },
  editAvatarBtnText: { fontSize: 12 },
  profileName: {
    fontSize: 20,
    fontWeight: '900',
    color: Colors.text,
    letterSpacing: -0.3,
  },
  roleBadge: {
    backgroundColor: Colors.primaryDark,
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 20,
  },
  roleBadgeText: {
    fontSize: 11,
    fontWeight: '800',
    color: Colors.white,
    letterSpacing: 1,
  },
  schoolName: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  codeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  codeIcon: { fontSize: 12 },
  codeText: {
    fontSize: 12,
    color: Colors.primaryDark,
    fontWeight: '600',
  },

  // Stats
  pendingCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#DDF5EA',
    borderRadius: 14,
    marginHorizontal: 16,
    marginBottom: 10,
    paddingVertical: 16,
    paddingHorizontal: 18,
  },
  pendingIcon: { fontSize: 20 },
  pendingValue: {
    fontSize: 22,
    fontWeight: '900',
    color: Colors.text,
    letterSpacing: -0.5,
  },
  pendingLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: Colors.primaryDark,
    letterSpacing: 1,
    marginTop: 1,
  },
  statCard: {
    backgroundColor: Colors.white,
    borderRadius: 14,
    marginHorizontal: 16,
    marginBottom: 10,
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  statValue: {
    fontSize: 22,
    fontWeight: '900',
    color: Colors.text,
    letterSpacing: -0.5,
  },
  statLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: Colors.textSecondary,
    letterSpacing: 1,
    marginTop: 2,
  },
  co2Row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  co2Leaf: { fontSize: 16 },

  // Section card
  sectionCard: {
    backgroundColor: Colors.white,
    borderRadius: 14,
    marginHorizontal: 16,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  fieldDivider: {
    height: 1,
    backgroundColor: Colors.border,
  },
  fieldRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    gap: 8,
  },
  fieldContent: { flex: 1, gap: 2 },
  fieldLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: Colors.textSecondary,
    letterSpacing: 0.8,
  },
  fieldValue: {
    fontSize: 14,
    color: Colors.text,
    fontWeight: '500',
  },
  fieldAction: { padding: 4 },
  fieldActionIcon: { fontSize: 14 },

  // Settings
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
  },
  settingLabel: {
    flex: 1,
    fontSize: 14,
    color: Colors.text,
    fontWeight: '500',
  },
  languageValue: {
    fontSize: 14,
    color: Colors.primaryDark,
    fontWeight: '600',
  },

  // Privacy
  privacyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    gap: 8,
  },
  privacyLabel: {
    flex: 1,
    fontSize: 14,
    color: Colors.text,
    fontWeight: '500',
  },
  privacySubtitle: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  chevron: {
    fontSize: 20,
    color: Colors.textSecondary,
    fontWeight: '300',
  },
  downloadIcon: {
    fontSize: 16,
    color: Colors.textSecondary,
  },
  deleteIcon: {
    fontSize: 16,
  },

  // Log out
  logoutBtn: {
    marginHorizontal: 16,
    marginTop: 20,
    backgroundColor: '#EF4444',
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: '#EF4444',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  logoutBtnText: {
    fontSize: 16,
    fontWeight: '800',
    color: Colors.white,
    letterSpacing: 0.2,
  },

  // Version
  versionText: {
    textAlign: 'center',
    fontSize: 12,
    color: Colors.textLight,
    marginTop: 14,
  },
});
