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
import CircularProgress from '../../../components/CircularProgress';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'TeacherChallengeArena'>;
};

const { width } = Dimensions.get('window');

type ChallengeTab = 'ONGOING' | 'UPCOMING' | 'COMPLETED';

type Challenge = {
  id: string;
  title: string;
  target: string;
  daysLeft: number;
  progress: number;
  imageBg: string;
  imageEmoji: string;
};

const CHALLENGES: Record<ChallengeTab, Challenge[]> = {
  ONGOING: [
    {
      id: '1',
      title: 'Green Commute Week',
      target: '50 Students',
      daysLeft: 5,
      progress: 75,
      imageBg: '#A8D8C0',
      imageEmoji: '🚲',
    },
    {
      id: '2',
      title: 'Zero Waste Lunch',
      target: '30 Students',
      daysLeft: 3,
      progress: 32,
      imageBg: '#FAE3A5',
      imageEmoji: '♻️',
    },
  ],
  UPCOMING: [],
  COMPLETED: [],
};

const TABS: ChallengeTab[] = ['ONGOING', 'UPCOMING', 'COMPLETED'];

export default function TeacherChallengeArenaScreen({ navigation }: Props) {
  const [activeTab, setActiveTab] = useState<ChallengeTab>('ONGOING');
  const challenges = CHALLENGES[activeTab];

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.surface} />

      {/* ── Header ── */}
      <View style={styles.header}>
        <View style={styles.avatarCircle}>
          <Text style={styles.avatarEmoji}>👩‍🏫</Text>
        </View>
        <Text style={styles.brandTitle}>ChonX</Text>
        <TouchableOpacity style={styles.bellBtn} activeOpacity={0.7}>
          <Text style={styles.bellText}>🔔</Text>
        </TouchableOpacity>
      </View>

      {/* ── Page title ── */}
      <View style={styles.pageTitle}>
        <Text style={styles.pageTitleText}>Challenge Arena</Text>
        <Text style={styles.pageSubtitle}>Manage & track class challenges</Text>
      </View>

      {/* ── Pill Tabs ── */}
      <View style={styles.tabsRow}>
        {TABS.map(t => (
          <TouchableOpacity
            key={t}
            style={[styles.tabPill, activeTab === t && styles.tabPillActive]}
            onPress={() => setActiveTab(t)}
            activeOpacity={0.75}>
            <Text style={[styles.tabPillText, activeTab === t && styles.tabPillTextActive]}>
              {t}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}>

        {/* ── Challenge cards ── */}
        {challenges.map(c => (
          <ChallengeCard key={c.id} challenge={c} />
        ))}

        {/* ── New Challenge dashed card ── */}
        <TouchableOpacity style={styles.newChallengeCard} activeOpacity={0.75}>
          <View style={styles.newChallengeCircle}>
            <Text style={styles.newChallengePlus}>+</Text>
          </View>
          <Text style={styles.newChallengeTitle}>New Challenge</Text>
          <Text style={styles.newChallengeSubtitle}>Create a new eco challenge for your class</Text>
        </TouchableOpacity>

        <View style={{ height: 80 }} />
      </ScrollView>

      {/* ── FAB ── */}
      <TouchableOpacity style={styles.fab} activeOpacity={0.85}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

function ChallengeCard({ challenge: c }: { challenge: Challenge }) {
  return (
    <View style={styles.challengeCard}>
      {/* Image placeholder + ACTIVE badge */}
      <View style={[styles.cardImage, { backgroundColor: c.imageBg }]}>
        <Text style={styles.cardImageEmoji}>{c.imageEmoji}</Text>
        <View style={styles.activeBadge}>
          <Text style={styles.activeBadgeText}>ACTIVE</Text>
        </View>
      </View>

      {/* Card body */}
      <View style={styles.cardBody}>
        {/* Title row */}
        <View style={styles.cardTitleRow}>
          <View style={{ flex: 1 }}>
            <Text style={styles.cardTitle}>{c.title}</Text>
            <Text style={styles.cardMeta}>
              Target: {c.target}  •  {c.daysLeft} Days Left
            </Text>
          </View>
          {/* Circular progress */}
          <CircularProgress
            percent={c.progress}
            size={56}
            strokeWidth={5}
            color={Colors.primaryDark}
            trackColor="#E5E7EB"
            centerBg={Colors.white}
            showLabel={true}
            fontSize={11}
          />
        </View>

        {/* Actions row */}
        <View style={styles.cardActions}>
          <TouchableOpacity style={styles.manageBtn} activeOpacity={0.8}>
            <Text style={styles.manageBtnText}>Manage</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.insightsBtn} activeOpacity={0.85}>
            <Text style={styles.insightsBtnText}>Insights</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.editBtn} activeOpacity={0.7}>
            <Text style={styles.editBtnText}>✏️</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
    paddingTop: 14,
    paddingBottom: 8,
    gap: 10,
  },
  avatarCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#D1E8D8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarEmoji: { fontSize: 20 },
  brandTitle: {
    flex: 1,
    fontSize: 20,
    fontWeight: '900',
    color: Colors.primaryDark,
    letterSpacing: -0.5,
  },
  bellBtn: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bellText: { fontSize: 18 },

  // Page title
  pageTitle: {
    paddingHorizontal: 16,
    paddingTop: 4,
    paddingBottom: 16,
  },
  pageTitleText: {
    fontSize: 24,
    fontWeight: '900',
    color: Colors.text,
    letterSpacing: -0.5,
  },
  pageSubtitle: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginTop: 2,
  },

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
    backgroundColor: Colors.primaryDark,
  },
  tabPillText: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.textSecondary,
    letterSpacing: 0.5,
  },
  tabPillTextActive: {
    color: Colors.white,
  },

  // Scroll
  scroll: {
    paddingHorizontal: 16,
    paddingBottom: 24,
    gap: 14,
  },

  // Challenge card
  challengeCard: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 10,
    elevation: 2,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  cardImage: {
    width: '100%',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardImageEmoji: {
    fontSize: 56,
  },
  activeBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: Colors.primaryDark,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  activeBadgeText: {
    fontSize: 10,
    fontWeight: '800',
    color: Colors.white,
    letterSpacing: 1,
  },
  cardBody: {
    padding: 16,
    gap: 14,
  },
  cardTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: Colors.text,
    letterSpacing: -0.2,
  },
  cardMeta: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginTop: 4,
  },

  // Action buttons
  cardActions: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  manageBtn: {
    flex: 1,
    paddingVertical: 9,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: Colors.primaryDark,
    alignItems: 'center',
  },
  manageBtnText: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.primaryDark,
  },
  insightsBtn: {
    flex: 1,
    paddingVertical: 9,
    borderRadius: 10,
    backgroundColor: Colors.primaryDark,
    alignItems: 'center',
  },
  insightsBtnText: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.white,
  },
  editBtn: {
    width: 38,
    height: 38,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: Colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editBtnText: { fontSize: 15 },

  // New challenge dashed card
  newChallengeCard: {
    borderWidth: 1.5,
    borderStyle: 'dashed',
    borderColor: Colors.primaryLight,
    borderRadius: 20,
    paddingVertical: 28,
    paddingHorizontal: 20,
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#F0FAF4',
  },
  newChallengeCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#DDF5EA',
    borderWidth: 1.5,
    borderColor: Colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  newChallengePlus: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.primaryDark,
    lineHeight: 26,
  },
  newChallengeTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: Colors.primaryDark,
  },
  newChallengeSubtitle: {
    fontSize: 12,
    color: Colors.textSecondary,
    textAlign: 'center',
  },

  // FAB
  fab: {
    position: 'absolute',
    bottom: 28,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: Colors.primaryDark,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.primaryDark,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 8,
  },
  fabText: {
    fontSize: 28,
    color: Colors.white,
    fontWeight: '300',
    lineHeight: 32,
  },
});
