import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import { Colors } from '../../../constants';

const { width: W } = Dimensions.get('window');

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Leaderboard'>;
};

// ─── Data ─────────────────────────────────────────────────────────────────────
// Ordered: [#2, #1, #3] → left, center, right display
const PODIUM = [
  { rank: 2, name: 'Milo',   xp: '12,450', initial: 'M', initBg: '#DBEAFE', ringColor: '#9CA3AF', cardH: 108 },
  { rank: 1, name: 'Sarah',  xp: '15,820', initial: 'S', initBg: '#FEF9C3', ringColor: '#F59E0B', cardH: 148 },
  { rank: 3, name: 'Jordan', xp: '10,900', initial: 'J', initBg: '#FCE7F3', ringColor: '#B45309', cardH: 122 },
];

const OTHERS = [
  { rank: 4, name: 'Elena',  xp: '9,887', initial: 'E', initBg: '#D1FAE5' },
  { rank: 5, name: 'Aiden',  xp: '9,442', initial: 'A', initBg: '#DBEAFE' },
  { rank: 6, name: 'Chloe',  xp: '9,069', initial: 'C', initBg: '#FCE7F3' },
  { rank: 7, name: 'Marcus', xp: '9,045', initial: 'M', initBg: '#EDE9FE' },
];

const AVATAR_D = 70;
const AVATAR_1 = 80; // slightly larger for #1
const BADGE_D  = 24;

// ─── Screen ──────────────────────────────────────────────────────────────────
export default function LeaderboardScreen({ navigation: _navigation }: Props) {
  const [tab, setTab] = useState<'school' | 'class'>('class');

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
          <Text style={styles.bellIcon}>🔔</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>

        {/* ── Tab switcher ───────────────────── */}
        <View style={styles.tabOuter}>
          {(['school', 'class'] as const).map((t) => (
            <TouchableOpacity
              key={t}
              style={[styles.tabBtn, tab === t && styles.tabBtnActive]}
              onPress={() => setTab(t)}
              activeOpacity={0.8}>
              <Text style={[styles.tabTxt, tab === t && styles.tabTxtActive]}>
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* ── Podium ─────────────────────────── */}
        <View style={styles.podiumRow}>
          {PODIUM.map((p) => {
            const isFirst = p.rank === 1;
            const aD = isFirst ? AVATAR_1 : AVATAR_D;
            return (
              <View key={p.rank} style={styles.podiumCol}>
                {/* Avatar + rank badge */}
                <View style={styles.avatarWrapper}>
                  <View style={[
                    styles.podiumAvatar,
                    {
                      width: aD, height: aD, borderRadius: aD / 2,
                      borderColor: p.ringColor,
                      backgroundColor: p.initBg,
                      borderWidth: isFirst ? 4 : 3,
                    },
                  ]}>
                    <Text style={[styles.podiumInitial, { fontSize: isFirst ? 28 : 24 }]}>
                      {p.initial}
                    </Text>
                  </View>
                  <View style={[styles.rankBadge, { backgroundColor: p.ringColor }]}>
                    <Text style={styles.rankBadgeTxt}>{p.rank}</Text>
                  </View>
                </View>

                {/* Name card */}
                <View style={[
                  styles.podiumCard,
                  {
                    height: p.cardH,
                    backgroundColor: isFirst ? Colors.primaryDark : '#fff',
                  },
                ]}>
                  <Text
                    style={[styles.podiumName, isFirst && styles.podiumNameWhite]}
                    numberOfLines={1}>
                    {p.name}
                  </Text>
                  <Text style={[styles.podiumXPVal, isFirst && styles.podiumXPValWhite]}>
                    {p.xp}
                  </Text>
                  <Text style={[styles.podiumXPLbl, isFirst && styles.podiumXPLblWhite]}>
                    XP
                  </Text>
                </View>
              </View>
            );
          })}
        </View>

        {/* ── Your position ──────────────────── */}
        <View style={styles.myCard}>
          <Text style={styles.myRank}>14</Text>
          <View style={styles.myAvatar}>
            <Text style={styles.myAvatarEmoji}>🧑</Text>
          </View>
          <View style={styles.myInfo}>
            <Text style={styles.myName}>You (Felix)</Text>
            <Text style={styles.mySub}>Keep it up! 250 XP to next rank</Text>
          </View>
          <View style={styles.myXPCol}>
            <Text style={styles.myXPVal}>8,420</Text>
            <Text style={styles.myXPLbl}>XP</Text>
          </View>
        </View>

        {/* ── List rows ─────────────────────── */}
        {OTHERS.map((p) => (
          <View key={p.rank} style={styles.listRow}>
            <Text style={styles.listRank}>{p.rank}</Text>
            <View style={[styles.listAvatar, { backgroundColor: p.initBg }]}>
              <Text style={styles.listInitial}>{p.initial}</Text>
            </View>
            <Text style={styles.listName}>{p.name}</Text>
            <Text style={styles.listXP}>{p.xp}</Text>
          </View>
        ))}

        <View style={{ height: 32 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

// ─── Styles ──────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F2F5F3' },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  headerAvatar: {
    width: 36, height: 36, borderRadius: 18,
    backgroundColor: '#D8EFE2',
    alignItems: 'center', justifyContent: 'center',
  },
  headerAvatarEmoji: { fontSize: 18 },
  brand: { fontSize: 17, fontWeight: '700', color: Colors.primaryDark },
  bellBtn: { padding: 4 },
  bellIcon: { fontSize: 22 },

  scroll: { paddingBottom: 16 },

  // Tab
  tabOuter: {
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 30,
    padding: 4,
    marginTop: 18,
    marginBottom: 24,
  },
  tabBtn: {
    paddingHorizontal: 28,
    paddingVertical: 9,
    borderRadius: 26,
  },
  tabBtnActive: { backgroundColor: Colors.primaryDark },
  tabTxt: { fontSize: 14, fontWeight: '700', color: Colors.textSecondary },
  tabTxtActive: { color: '#fff' },

  // Podium row
  podiumRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 16,
    gap: 8,
    marginBottom: 20,
  },
  podiumCol: {
    flex: 1,
    alignItems: 'center',
  },

  // Avatar + badge
  avatarWrapper: {
    alignItems: 'center',
    zIndex: 2,
  },
  podiumAvatar: {
    alignItems: 'center', justifyContent: 'center',
  },
  podiumInitial: {
    fontWeight: '800', color: Colors.primaryDark,
  },
  rankBadge: {
    width: BADGE_D, height: BADGE_D, borderRadius: BADGE_D / 2,
    alignItems: 'center', justifyContent: 'center',
    marginTop: -10,
    borderWidth: 2, borderColor: '#fff',
    zIndex: 3,
  },
  rankBadgeTxt: { fontSize: 11, fontWeight: '800', color: '#fff' },

  // Podium card
  podiumCard: {
    width: '100%',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 14,
    paddingTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 8,
    elevation: 2,
  },
  podiumName: {
    fontSize: 14, fontWeight: '800', color: Colors.text, marginBottom: 2,
  },
  podiumNameWhite: { color: '#fff' },
  podiumXPVal: {
    fontSize: 13, fontWeight: '800', color: Colors.primary,
  },
  podiumXPValWhite: { color: '#A7F3D0' },
  podiumXPLbl: {
    fontSize: 10, fontWeight: '600', color: Colors.textLight,
  },
  podiumXPLblWhite: { color: 'rgba(255,255,255,0.55)' },

  // My position card
  myCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    marginHorizontal: 16,
    marginBottom: 12,
    padding: 14,
    borderWidth: 2,
    borderColor: '#34D399',
    gap: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  myRank: {
    fontSize: 22, fontWeight: '800', color: Colors.primaryDark,
    minWidth: 28,
  },
  myAvatar: {
    width: 44, height: 44, borderRadius: 22,
    backgroundColor: '#1A3D2E',
    alignItems: 'center', justifyContent: 'center',
  },
  myAvatarEmoji: { fontSize: 22 },
  myInfo: { flex: 1 },
  myName: { fontSize: 14, fontWeight: '800', color: Colors.text, marginBottom: 2 },
  mySub: { fontSize: 11, color: Colors.textSecondary, lineHeight: 15 },
  myXPCol: { alignItems: 'flex-end' },
  myXPVal: { fontSize: 18, fontWeight: '800', color: Colors.primaryDark },
  myXPLbl: { fontSize: 11, fontWeight: '600', color: Colors.textLight },

  // List rows
  listRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 14,
    marginHorizontal: 16,
    marginBottom: 8,
    paddingHorizontal: 16,
    paddingVertical: 14,
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  listRank: {
    fontSize: 17, fontWeight: '700', color: Colors.text,
    minWidth: 22,
  },
  listAvatar: {
    width: 46, height: 46, borderRadius: 23,
    alignItems: 'center', justifyContent: 'center',
  },
  listInitial: { fontSize: 19, fontWeight: '800', color: Colors.primaryDark },
  listName: { flex: 1, fontSize: 16, fontWeight: '700', color: Colors.text },
  listXP: { fontSize: 19, fontWeight: '800', color: Colors.text },
});
