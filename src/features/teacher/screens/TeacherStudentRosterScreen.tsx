import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import { Colors } from '../../../constants';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'TeacherStudentRoster'>;
};

type BadgeType = 'ECO_WARRIOR' | 'PIONEER' | 'SEEDLING' | 'GUARDIAN' | 'EXPLORER';

type Student = {
  id: string;
  name: string;
  badge: BadgeType;
  avatarBg: string;
  avatarEmoji: string;
};

const BADGE_META: Record<BadgeType, { icon: string; label: string; color: string }> = {
  ECO_WARRIOR: { icon: '🌿', label: 'ECO WARRIOR', color: Colors.primaryDark },
  PIONEER: { icon: '⭐', label: 'PIONEER', color: '#2563EB' },
  SEEDLING: { icon: '', label: 'SEEDLING', color: Colors.textSecondary },
  GUARDIAN: { icon: '🛡️', label: 'GUARDIAN', color: '#7C3AED' },
  EXPLORER: { icon: '🔭', label: 'EXPLORER', color: '#EA580C' },
};

const STUDENTS: Student[] = [
  { id: '1', name: 'Alex Johnson', badge: 'ECO_WARRIOR', avatarBg: '#A8D8C0', avatarEmoji: '👨' },
  { id: '2', name: 'Beatrix Wang', badge: 'PIONEER', avatarBg: '#F5C07A', avatarEmoji: '👩' },
  { id: '3', name: 'Charlie Davids', badge: 'SEEDLING', avatarBg: '#C4A882', avatarEmoji: '🧑' },
  { id: '4', name: 'Daisy Lane', badge: 'ECO_WARRIOR', avatarBg: '#A8D8C0', avatarEmoji: '👩' },
];

const TABS = ['Students', 'Leaderboard', 'Calendar'];

export default function TeacherStudentRosterScreen({ navigation }: Props) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.surface} />

      {/* ── Header ── */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn} activeOpacity={0.7}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Class 10A</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconBtn} activeOpacity={0.7}>
            <Text style={styles.iconBtnText}>🔔</Text>
          </TouchableOpacity>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarEmoji}>👩‍🏫</Text>
          </View>
        </View>
      </View>

      {/* ── Pill Tabs ── */}
      <View style={styles.tabsRow}>
        {TABS.map((tab, i) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tabPill, activeTab === i && styles.tabPillActive]}
            onPress={() => {
              setActiveTab(i);
              if (i === 1) navigation.navigate('TeacherLeaderboard');
              if (i === 2) navigation.navigate('TeacherCalendar');
            }}
            activeOpacity={0.75}>
            <Text style={[styles.tabPillText, activeTab === i && styles.tabPillTextActive]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}>

        {/* ── Roster Header ── */}
        <View style={styles.rosterHeader}>
          <View>
            <Text style={styles.rosterTitle}>Active Roster</Text>
            <Text style={styles.rosterCount}>24 Students Enrolled</Text>
          </View>
          <TouchableOpacity style={styles.addBtn} activeOpacity={0.85}>
            <Text style={styles.addBtnText}>+  Add Student</Text>
          </TouchableOpacity>
        </View>

        {/* ── Student Cards ── */}
        <View style={styles.studentList}>
          {STUDENTS.map(s => {
            const badge = BADGE_META[s.badge];
            return (
              <TouchableOpacity key={s.id} style={styles.studentCard} activeOpacity={0.75}>
                {/* Avatar */}
                <View style={[styles.avatarWrap, { borderColor: Colors.primaryLight }]}>
                  <View style={[styles.studentAvatar, { backgroundColor: s.avatarBg }]}>
                    <Text style={styles.studentAvatarEmoji}>{s.avatarEmoji}</Text>
                  </View>
                </View>

                {/* Info */}
                <View style={styles.studentInfo}>
                  <Text style={styles.studentName}>{s.name}</Text>
                  <View style={styles.badgeRow}>
                    {badge.icon ? (
                      <Text style={styles.badgeIcon}>{badge.icon}</Text>
                    ) : null}
                    <Text style={[styles.badgeText, { color: badge.color }]}>
                      {badge.label}
                    </Text>
                  </View>
                </View>

                {/* 3-dot menu */}
                <TouchableOpacity style={styles.moreBtn} activeOpacity={0.6}>
                  <Text style={styles.moreBtnText}>⋮</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            );
          })}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

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
    paddingVertical: 14,
    gap: 8,
  },
  backBtn: {
    padding: 4,
  },
  backArrow: {
    fontSize: 20,
    color: Colors.primaryDark,
    fontWeight: '600',
  },
  headerTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '800',
    color: Colors.primaryDark,
    letterSpacing: -0.3,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  iconBtn: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBtnText: { fontSize: 18 },
  avatarCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#D1E8D8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarEmoji: { fontSize: 18 },

  // Tabs
  tabsRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 8,
    marginBottom: 20,
  },
  tabPill: {
    paddingHorizontal: 16,
    paddingVertical: 7,
    borderRadius: 20,
  },
  tabPillActive: {
    backgroundColor: '#DDF5EA',
  },
  tabPillText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.textSecondary,
  },
  tabPillTextActive: {
    color: Colors.primaryDark,
    fontWeight: '700',
  },

  // Scroll
  scroll: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },

  // Roster header
  rosterHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  rosterTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: Colors.text,
    letterSpacing: -0.3,
  },
  rosterCount: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  addBtn: {
    backgroundColor: Colors.primaryDark,
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderRadius: 20,
    shadowColor: Colors.primaryDark,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  addBtnText: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.white,
  },

  // Student list
  studentList: {
    gap: 10,
  },

  // Student card
  studentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 14,
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 1,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  avatarWrap: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    padding: 2,
    flexShrink: 0,
  },
  studentAvatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
  },
  studentAvatarEmoji: { fontSize: 22 },
  studentInfo: {
    flex: 1,
    gap: 3,
  },
  studentName: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.text,
  },
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  badgeIcon: {
    fontSize: 11,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  moreBtn: {
    padding: 6,
  },
  moreBtnText: {
    fontSize: 18,
    color: Colors.textSecondary,
    lineHeight: 22,
  },
});
