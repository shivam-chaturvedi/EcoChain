import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import { Colors } from '../../../constants';

const { width } = Dimensions.get('window');

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'TeacherLeaderboard'>;
};

type TopStudent = {
  rank: 1 | 2 | 3;
  name: string;
  xp: string;
  avatarBg: string;
  avatarEmoji: string;
  badgeColor: string;
};

type ListStudent = {
  rank: number;
  name: string;
  level: number;
  badge: string;
  progress: number;
  xp: number;
  avatarBg: string;
  avatarEmoji: string;
};

const TOP_THREE: TopStudent[] = [
  { rank: 2, name: 'Mia S.', xp: '2,840 XP', avatarBg: '#3B6FD4', avatarEmoji: '👩', badgeColor: '#6C63FF' },
  { rank: 1, name: 'Leo Chen', xp: '3,120 XP', avatarBg: '#F5A623', avatarEmoji: '👨', badgeColor: '#F5A623' },
  { rank: 3, name: 'Safa K.', xp: '2,710 XP', avatarBg: '#8BC34A', avatarEmoji: '👩', badgeColor: '#F5A623' },
];

const LIST_STUDENTS: ListStudent[] = [
  { rank: 4, name: 'Alex Rivera', level: 12, badge: 'Recycling Expert', progress: 0.72, xp: 2550, avatarBg: '#A8D8C0', avatarEmoji: '👨' },
  { rank: 5, name: 'Jordan P.', level: 11, badge: 'Carbon Neutral', progress: 0.58, xp: 2410, avatarBg: '#C4A882', avatarEmoji: '👩' },
  { rank: 6, name: 'David Okafor', level: 10, badge: 'Energy Saver', progress: 0.44, xp: 2280, avatarBg: '#6B8E6B', avatarEmoji: '👨' },
  { rank: 7, name: 'Elena G.', level: 10, badge: 'Tree Planter', progress: 0.36, xp: 2150, avatarBg: '#C47A7A', avatarEmoji: '👩' },
];

const TABS = ['Students', 'Leaderboard', 'Calendar', 'Analytics'];

const RANK_BADGE_COLORS: Record<number, string> = {
  1: '#F5A623',
  2: '#6C63FF',
  3: '#F5A623',
};

export default function TeacherLeaderboardScreen({ navigation }: Props) {
  const [period, setPeriod] = useState<'weekly' | 'total'>('weekly');
  const [activeTab, setActiveTab] = useState(1); // Leaderboard tab

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.surface} />

      {/* ── Header ── */}
      <View style={styles.header}>
        <View style={styles.avatarCircle}>
          <Text style={styles.avatarEmoji}>🧑‍🏫</Text>
        </View>
        <Text style={styles.brand}>ChonX</Text>
        <TouchableOpacity style={styles.bellBtn} activeOpacity={0.7}>
          <Text style={styles.bellIcon}>🔔</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>

        {/* ── Class Label ── */}
        <View style={styles.classRow}>
          <Text style={styles.classIcon}>🎓</Text>
          <Text style={styles.classLabel}>CLASS 10A</Text>
        </View>

        {/* ── Title ── */}
        <Text style={styles.pageTitle}>Green Guardians{'\n'}Leaderboard</Text>

        {/* ── Tabs ── */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabsScroll}
          style={styles.tabsBar}>
          {TABS.map((tab, i) => (
            <TouchableOpacity
              key={tab}
              style={[styles.tab, activeTab === i && styles.tabActive]}
              onPress={() => {
                setActiveTab(i);
                if (i === 2) navigation.navigate('TeacherCalendar');
              }}
              activeOpacity={0.7}>
              <Text style={[styles.tabText, activeTab === i && styles.tabTextActive]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* ── Period Toggle ── */}
        <View style={styles.toggleWrap}>
          <View style={styles.toggle}>
            <TouchableOpacity
              style={[styles.toggleBtn, period === 'weekly' && styles.toggleBtnActive]}
              onPress={() => setPeriod('weekly')}
              activeOpacity={0.75}>
              <Text style={[styles.toggleText, period === 'weekly' && styles.toggleTextActive]}>
                Weekly
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.toggleBtn, period === 'total' && styles.toggleBtnActive]}
              onPress={() => setPeriod('total')}
              activeOpacity={0.75}>
              <Text style={[styles.toggleText, period === 'total' && styles.toggleTextActive]}>
                Total
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ── Top 3 Podium ── */}
        <View style={styles.podiumCard}>
          <View style={styles.podiumRow}>
            {TOP_THREE.map(s => (
              <View
                key={s.rank}
                style={[
                  styles.podiumItem,
                  s.rank === 1 && styles.podiumItemCenter,
                ]}>
                {/* Avatar with rank badge */}
                <View style={styles.podiumAvatarWrap}>
                  <View
                    style={[
                      styles.podiumAvatar,
                      s.rank === 1 ? styles.podiumAvatarLarge : styles.podiumAvatarSmall,
                      { borderColor: s.badgeColor },
                    ]}>
                    <Text
                      style={[
                        styles.podiumAvatarEmoji,
                        s.rank === 1 && styles.podiumAvatarEmojiLarge,
                      ]}>
                      {s.avatarEmoji}
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.rankBadge,
                      { backgroundColor: RANK_BADGE_COLORS[s.rank] },
                    ]}>
                    <Text style={styles.rankBadgeText}>{s.rank}</Text>
                  </View>
                </View>

                {/* Name + XP */}
                <Text
                  style={[
                    styles.podiumName,
                    s.rank === 1 && styles.podiumNameLarge,
                  ]}>
                  {s.name}
                </Text>
                <Text
                  style={[
                    styles.podiumXp,
                    s.rank === 1 && styles.podiumXpLarge,
                  ]}>
                  {s.xp}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* ── List Header ── */}
        <View style={styles.listHeader}>
          <Text style={[styles.listHeaderText, { width: 40 }]}>RANK</Text>
          <Text style={[styles.listHeaderText, { flex: 1 }]}>STUDENT</Text>
          <Text style={[styles.listHeaderText, { width: 80 }]}>PROGRESS</Text>
          <Text style={[styles.listHeaderText, { width: 64, textAlign: 'right' }]}>POINTS</Text>
        </View>

        {/* ── Student Rows ── */}
        {LIST_STUDENTS.map((s, idx) => (
          <View
            key={s.rank}
            style={[styles.listRow, idx < LIST_STUDENTS.length - 1 && styles.listRowBorder]}>
            {/* Rank */}
            <Text style={styles.listRank}>{s.rank}</Text>
            {/* Avatar */}
            <View style={[styles.listAvatar, { backgroundColor: s.avatarBg }]}>
              <Text style={styles.listAvatarEmoji}>{s.avatarEmoji}</Text>
            </View>
            {/* Info */}
            <View style={styles.listInfo}>
              <Text style={styles.listName}>{s.name}</Text>
              <Text style={styles.listLevel}>
                Level {s.level}{'  •  '}{s.badge}
              </Text>
            </View>
            {/* Progress */}
            <View style={styles.listProgressWrap}>
              <View style={styles.listProgressTrack}>
                <View
                  style={[styles.listProgressFill, { width: `${s.progress * 100}%` }]}
                />
              </View>
            </View>
            {/* XP */}
            <View style={styles.listXpWrap}>
              <Text style={styles.listXpNum}>{s.xp.toLocaleString()}</Text>
              <Text style={styles.listXpSuffix}> XP</Text>
            </View>
          </View>
        ))}

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
    paddingVertical: 12,
    gap: 8,
  },
  avatarCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#D1E8D8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarEmoji: { fontSize: 19 },
  brand: {
    flex: 1,
    fontSize: 18,
    fontWeight: '800',
    color: Colors.primaryDark,
    letterSpacing: -0.3,
  },
  bellBtn: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bellIcon: { fontSize: 18 },

  // Scroll
  scroll: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },

  // Class label
  classRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 8,
  },
  classIcon: { fontSize: 14 },
  classLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: Colors.textSecondary,
    letterSpacing: 1.0,
  },

  // Title
  pageTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: Colors.text,
    lineHeight: 32,
    marginBottom: 16,
    letterSpacing: -0.4,
  },

  // Tabs
  tabsBar: { marginBottom: 20 },
  tabsScroll: { gap: 0 },
  tab: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  tabActive: { borderBottomColor: Colors.primaryDark },
  tabText: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.textSecondary,
  },
  tabTextActive: {
    color: Colors.primaryDark,
    fontWeight: '700',
  },

  // Period toggle
  toggleWrap: {
    alignItems: 'center',
    marginBottom: 20,
  },
  toggle: {
    flexDirection: 'row',
    backgroundColor: '#E8F0EC',
    borderRadius: 22,
    padding: 3,
  },
  toggleBtn: {
    paddingHorizontal: 28,
    paddingVertical: 8,
    borderRadius: 19,
  },
  toggleBtnActive: {
    backgroundColor: Colors.white,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  toggleText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.textSecondary,
  },
  toggleTextActive: {
    color: Colors.text,
    fontWeight: '700',
  },

  // Podium card
  podiumCard: {
    backgroundColor: '#E4F5EC',
    borderRadius: 20,
    paddingVertical: 24,
    paddingHorizontal: 12,
    marginBottom: 20,
  },
  podiumRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    gap: 0,
  },
  podiumItem: {
    flex: 1,
    alignItems: 'center',
    gap: 6,
  },
  podiumItemCenter: {
    flex: 1.2,
    marginTop: -16,
  },
  podiumAvatarWrap: {
    position: 'relative',
    marginBottom: 4,
  },
  podiumAvatar: {
    borderWidth: 3,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C8E6C9',
  },
  podiumAvatarLarge: {
    width: 72,
    height: 72,
  },
  podiumAvatarSmall: {
    width: 54,
    height: 54,
  },
  podiumAvatarEmoji: {
    fontSize: 28,
  },
  podiumAvatarEmojiLarge: {
    fontSize: 36,
  },
  rankBadge: {
    position: 'absolute',
    bottom: -4,
    right: -4,
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Colors.white,
  },
  rankBadgeText: {
    fontSize: 11,
    fontWeight: '800',
    color: Colors.white,
  },
  podiumName: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.text,
    textAlign: 'center',
  },
  podiumNameLarge: {
    fontSize: 18,
    fontWeight: '800',
  },
  podiumXp: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.textSecondary,
    textAlign: 'center',
  },
  podiumXpLarge: {
    fontSize: 18,
    fontWeight: '800',
    color: Colors.primaryDark,
  },

  // List header
  listHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
    marginBottom: 4,
  },
  listHeaderText: {
    fontSize: 10,
    fontWeight: '700',
    color: Colors.textSecondary,
    letterSpacing: 0.5,
  },

  // Student row
  listRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    gap: 10,
  },
  listRowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  listRank: {
    width: 28,
    fontSize: 15,
    fontWeight: '700',
    color: Colors.textSecondary,
    textAlign: 'center',
  },
  listAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  listAvatarEmoji: { fontSize: 20 },
  listInfo: {
    flex: 1,
    gap: 2,
  },
  listName: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.text,
    lineHeight: 19,
  },
  listLevel: {
    fontSize: 11,
    color: Colors.textSecondary,
    lineHeight: 16,
  },
  listProgressWrap: {
    width: 72,
    justifyContent: 'center',
  },
  listProgressTrack: {
    height: 5,
    backgroundColor: '#E5E7EB',
    borderRadius: 3,
    overflow: 'hidden',
  },
  listProgressFill: {
    height: '100%',
    backgroundColor: Colors.primaryDark,
    borderRadius: 3,
  },
  listXpWrap: {
    flexDirection: 'row',
    alignItems: 'baseline',
    width: 64,
    justifyContent: 'flex-end',
  },
  listXpNum: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.text,
  },
  listXpSuffix: {
    fontSize: 11,
    fontWeight: '600',
    color: Colors.textSecondary,
  },
});
