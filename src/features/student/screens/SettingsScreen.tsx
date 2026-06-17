import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
  ScrollView, StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import { Colors } from '../../../constants';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Settings'>;
};

// ─── Custom Switch ────────────────────────────────────────────────────────────
function CustomSwitch({ value, onToggle }: { value: boolean; onToggle: () => void }) {
  return (
    <TouchableOpacity style={[sw.track, value && sw.trackOn]} onPress={onToggle} activeOpacity={0.8}>
      <View style={[sw.thumb, value && sw.thumbRight]}>
        {value && <Text style={sw.check}>✓</Text>}
      </View>
    </TouchableOpacity>
  );
}
const sw = StyleSheet.create({
  track: {
    width: 52, height: 30, borderRadius: 15,
    backgroundColor: '#D1D5DB', justifyContent: 'center', paddingHorizontal: 2,
  },
  trackOn: { backgroundColor: '#22C55E' },
  thumb: {
    width: 26, height: 26, borderRadius: 13,
    backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',
    alignSelf: 'flex-start',
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15, shadowRadius: 2, elevation: 2,
  },
  thumbRight: { alignSelf: 'flex-end' },
  check: { fontSize: 13, color: '#22C55E', fontWeight: '800' },
});

// ─── Theme Toggle ─────────────────────────────────────────────────────────────
function ThemeToggle() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  return (
    <TouchableOpacity
      style={th.wrap}
      onPress={() => setMode(m => m === 'light' ? 'dark' : 'light')}
      activeOpacity={0.8}>
      {(['light', 'dark'] as const).map(m => (
        <View key={m} style={[th.option, mode === m && th.optionActive]}>
          <Text style={th.icon}>{m === 'light' ? '☀️' : '🌙'}</Text>
        </View>
      ))}
    </TouchableOpacity>
  );
}
const th = StyleSheet.create({
  wrap: { flexDirection: 'row', backgroundColor: '#F0F0F0', borderRadius: 20, padding: 3, gap: 2 },
  option: { width: 30, height: 26, borderRadius: 13, alignItems: 'center', justifyContent: 'center' },
  optionActive: {
    backgroundColor: '#fff',
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1, shadowRadius: 2, elevation: 1,
  },
  icon: { fontSize: 13 },
});

// ─── Notification data ────────────────────────────────────────────────────────
const NOTIFS = [
  {
    id: '1', unread: true, icon: '🏆', iconBg: '#B2F5D4',
    title: 'New Arena Milestone!', time: '2 MIN AGO',
    body: "You've reached Level 24! Your impact on carbon reduction has increased by 12% this week. Keep going, Champion!",
  },
  {
    id: '2', unread: true, icon: '🌿', iconBg: '#D1FAE5',
    title: 'Tree Planting Confirmed', time: '1 HOUR AGO',
    body: 'Your contribution of 500 XP has funded a mangrove planting in the Amazon basin. View your certificate now.',
  },
  {
    id: '3', unread: false, icon: '👥', iconBg: '#E8F4FD',
    title: 'Team Challenge Updated', time: 'YESTERDAY',
    body: "The 'City Greenery' challenge ends in 24 hours. Your team is currently in 3rd place. One final push!",
  },
  {
    id: '4', unread: false, icon: '⚙️', iconBg: '#F3F4F6',
    title: 'Security Update', time: '3 DAYS AGO',
    body: "We've updated our Privacy Policy to better protect your data. You can review the changes in the Privacy tab.",
  },
];

// ─── Screen ──────────────────────────────────────────────────────────────────
export default function SettingsScreen({ navigation: _nav }: Props) {
  const [pushOn, setPushOn]   = useState(true);
  const [emailOn, setEmailOn] = useState(false);

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* ── Header ─────────────────────────── */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.headerAvatar}>
            <Text style={styles.headerAvatarEmoji}>🧑</Text>
          </View>
          <Text style={styles.brand}>ChonX</Text>
        </View>
        <TouchableOpacity style={styles.bellBtn} activeOpacity={0.7}>
          <Text>🔔</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>

        {/* ── Page title ─────────────────────── */}
        <Text style={styles.pageTitle}>Settings</Text>

        {/* ── Profile card ───────────────────── */}
        <View style={styles.profileCard}>
          <View style={styles.profileRow}>
            <View style={styles.avatarWrap}>
              <View style={styles.bigAvatar}>
                <Text style={styles.bigAvatarEmoji}>👩</Text>
              </View>
              <View style={styles.lvlBadge}>
                <Text style={styles.lvlTxt}>LVL 24</Text>
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.profileName}>Alex Rivera</Text>
              <Text style={styles.profileEmail}>alex.rivera@chonx.eco</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.editBtn} activeOpacity={0.8}>
            <Text style={styles.editBtnTxt}>✏  Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* ── Settings rows ──────────────────── */}
        <View style={styles.block}>
          <TouchableOpacity style={styles.settingRow} activeOpacity={0.7}>
            <View style={[styles.rowIcon, { backgroundColor: '#E8F5EE' }]}>
              <Text style={styles.rowIconEmoji}>🔒</Text>
            </View>
            <Text style={styles.rowLabel}>Privacy & Security</Text>
            <Text style={styles.rowChevron}>›</Text>
          </TouchableOpacity>

          <View style={styles.sep} />

          <TouchableOpacity style={styles.settingRow} activeOpacity={0.7}>
            <View style={[styles.rowIcon, { backgroundColor: '#EEF2FF' }]}>
              <Text style={styles.rowIconEmoji}>🔤</Text>
            </View>
            <Text style={styles.rowLabel}>Language Switcher</Text>
            <Text style={styles.rowRight}>English ›</Text>
          </TouchableOpacity>

          <View style={styles.sep} />

          <View style={styles.settingRow}>
            <View style={[styles.rowIcon, { backgroundColor: '#FEF3C7' }]}>
              <Text style={styles.rowIconEmoji}>🎨</Text>
            </View>
            <Text style={styles.rowLabel}>App Theme</Text>
            <ThemeToggle />
          </View>
        </View>

        {/* ── Global Toggles ─────────────────── */}
        <Text style={styles.sectionCap}>GLOBAL TOGGLES</Text>
        <View style={styles.block}>
          <View style={styles.toggleRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.toggleLabel}>Push Notifications</Text>
              <Text style={styles.toggleSub}>Real-time impact alerts</Text>
            </View>
            <CustomSwitch value={pushOn} onToggle={() => setPushOn(v => !v)} />
          </View>
          <View style={styles.sep} />
          <View style={styles.toggleRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.toggleLabel}>Email Summaries</Text>
              <Text style={styles.toggleSub}>Weekly eco-performance</Text>
            </View>
            <CustomSwitch value={emailOn} onToggle={() => setEmailOn(v => !v)} />
          </View>
        </View>

        {/* ── Notifications section ───────────── */}
        <View style={styles.notifHeaderRow}>
          <Text style={styles.notifTitle}>Notifications</Text>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.markRead}>MARK ALL READ</Text>
          </TouchableOpacity>
        </View>

        {NOTIFS.map((n, i) => (
          <View
            key={n.id}
            style={[styles.notifCard, n.unread && styles.notifCardUnread, i > 0 && { marginTop: 8 }]}>
            {n.unread && <View style={styles.notifAccent} />}
            <View style={[styles.notifIconCircle, { backgroundColor: n.iconBg }]}>
              <Text style={styles.notifIconEmoji}>{n.icon}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <View style={styles.notifTopRow}>
                <Text style={styles.notifItemTitle} numberOfLines={1}>{n.title}</Text>
                <Text style={styles.notifTime}>{n.time}</Text>
                {n.unread && <View style={styles.unreadDot} />}
              </View>
              <Text style={styles.notifBody}>{n.body}</Text>
            </View>
          </View>
        ))}

        {/* ── Load Older ─────────────────────── */}
        <TouchableOpacity style={styles.loadOlderBtn} activeOpacity={0.7}>
          <Text style={styles.loadOlderTxt}>Load Older Notifications</Text>
        </TouchableOpacity>

        <View style={{ height: 32 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

// ─── Styles ──────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F3F4F2' },

  header: {
    flexDirection: 'row', alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16, paddingVertical: 10,
    backgroundColor: '#fff',
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  headerAvatar: {
    width: 36, height: 36, borderRadius: 18,
    backgroundColor: '#1A3D2E', alignItems: 'center', justifyContent: 'center',
  },
  headerAvatarEmoji: { fontSize: 18 },
  brand: { fontSize: 17, fontWeight: '700', color: Colors.primaryDark },
  bellBtn: { padding: 4 },

  scroll: { paddingHorizontal: 16, paddingTop: 20 },

  pageTitle: { fontSize: 32, fontWeight: '800', color: Colors.text, marginBottom: 20 },

  // Profile card
  profileCard: {
    backgroundColor: '#fff', borderRadius: 18, padding: 16, marginBottom: 24,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06, shadowRadius: 10, elevation: 2,
  },
  profileRow: { flexDirection: 'row', alignItems: 'center', gap: 14, marginBottom: 16 },
  avatarWrap: { width: 62, height: 62 },
  bigAvatar: {
    width: 62, height: 62, borderRadius: 31,
    backgroundColor: '#D8EFE2',
    borderWidth: 2, borderColor: Colors.primary,
    alignItems: 'center', justifyContent: 'center',
  },
  bigAvatarEmoji: { fontSize: 32 },
  lvlBadge: {
    position: 'absolute', bottom: -2, left: -4,
    backgroundColor: Colors.primaryDark,
    borderRadius: 8, paddingHorizontal: 5, paddingVertical: 2,
    borderWidth: 1.5, borderColor: '#fff',
  },
  lvlTxt: { fontSize: 8, fontWeight: '800', color: '#fff', letterSpacing: 0.3 },
  profileName: { fontSize: 16, fontWeight: '800', color: Colors.text, marginBottom: 3 },
  profileEmail: { fontSize: 13, color: Colors.textSecondary },
  editBtn: {
    backgroundColor: Colors.primaryDark,
    borderRadius: 10, paddingVertical: 12, alignItems: 'center',
  },
  editBtnTxt: { fontSize: 14, fontWeight: '700', color: '#fff' },

  // Settings block
  block: {
    backgroundColor: '#fff', borderRadius: 16, overflow: 'hidden', marginBottom: 8,
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04, shadowRadius: 6, elevation: 1,
  },
  settingRow: {
    flexDirection: 'row', alignItems: 'center',
    paddingHorizontal: 16, paddingVertical: 14, gap: 12,
  },
  rowIcon: { width: 36, height: 36, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
  rowIconEmoji: { fontSize: 18 },
  rowLabel: { flex: 1, fontSize: 15, fontWeight: '600', color: Colors.text },
  rowChevron: { fontSize: 22, color: Colors.textSecondary },
  rowRight: { fontSize: 14, color: Colors.textSecondary, fontWeight: '500' },
  sep: { height: 1, backgroundColor: '#F3F4F6', marginLeft: 64 },

  // Global toggles
  sectionCap: {
    fontSize: 11, fontWeight: '700', color: Colors.textSecondary,
    letterSpacing: 1, marginTop: 16, marginBottom: 8,
  },
  toggleRow: {
    flexDirection: 'row', alignItems: 'center',
    paddingHorizontal: 16, paddingVertical: 14, gap: 12,
  },
  toggleLabel: { fontSize: 15, fontWeight: '600', color: Colors.text, marginBottom: 2 },
  toggleSub: { fontSize: 12, color: Colors.textSecondary },

  // Notifications
  notifHeaderRow: {
    flexDirection: 'row', alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 24, marginBottom: 14,
  },
  notifTitle: { fontSize: 22, fontWeight: '800', color: Colors.text },
  markRead: { fontSize: 12, fontWeight: '800', color: Colors.primary, letterSpacing: 0.3 },

  notifCard: {
    backgroundColor: '#fff', borderRadius: 14,
    flexDirection: 'row', alignItems: 'flex-start',
    padding: 14, gap: 12,
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04, shadowRadius: 6, elevation: 1,
    overflow: 'hidden',
  },
  notifCardUnread: { backgroundColor: '#F0FAF5' },
  notifAccent: {
    position: 'absolute', left: 0, top: 0, bottom: 0,
    width: 4, backgroundColor: Colors.primaryDark,
  },
  notifIconCircle: {
    width: 44, height: 44, borderRadius: 22,
    alignItems: 'center', justifyContent: 'center', flexShrink: 0,
  },
  notifIconEmoji: { fontSize: 20 },
  notifTopRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 5 },
  notifItemTitle: { fontSize: 14, fontWeight: '800', color: Colors.text, flex: 1 },
  notifTime: { fontSize: 10, fontWeight: '600', color: Colors.textLight, flexShrink: 0 },
  unreadDot: { width: 7, height: 7, borderRadius: 3.5, backgroundColor: Colors.primaryDark, flexShrink: 0 },
  notifBody: { fontSize: 12, color: Colors.textSecondary, lineHeight: 18 },

  // Load older
  loadOlderBtn: {
    marginTop: 14, borderRadius: 16, paddingVertical: 14,
    alignItems: 'center', backgroundColor: '#fff',
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04, shadowRadius: 4, elevation: 1,
  },
  loadOlderTxt: { fontSize: 14, fontWeight: '700', color: Colors.primary },
});
