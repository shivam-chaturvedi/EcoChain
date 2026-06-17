import React from 'react';
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
  navigation: NativeStackNavigationProp<RootStackParamList, 'TeacherDashboard'>;
};

const SNAPSHOT_CARDS = [
  {
    id: 'top',
    accentColor: Colors.primaryDark,
    iconBg: '#C8F0DF',
    icon: '🎓',
    badge: 'Live',
    badgeColor: Colors.primaryDark,
    label: 'TOP CLASS',
    value: '10A',
    showProgress: true,
    progress: 0.75,
    sub: null,
  },
  {
    id: 'pending',
    accentColor: '#3B6FD4',
    iconBg: '#DDE8FB',
    icon: '📋',
    badge: null,
    badgeColor: null,
    label: 'PENDING',
    value: '12',
    showProgress: false,
    progress: 0,
    sub: 'Requires Review',
  },
];

const CONTROL_GRID = [
  {
    id: 'challenges',
    iconBg: '#C8F5E4',
    icon: '🚩',
    title: 'Manage\nChallenges',
    sub: 'Update goals',
  },
  {
    id: 'classes',
    iconBg: '#DDE4FB',
    icon: '👥',
    title: 'Class\nManager',
    sub: 'Manage 4 active classrooms',
  },
  {
    id: 'announcement',
    iconBg: '#FFE8D6',
    icon: '📡',
    title: 'Announcement',
    sub: 'Broadcast message',
  },
  {
    id: 'event',
    iconBg: '#EEE0FF',
    icon: '⭐',
    title: 'New Event',
    sub: 'Setup campaign',
  },
];

export default function TeacherDashboardScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.surface} />

      {/* ── Header ── */}
      <View style={styles.header}>
        <View style={styles.avatarWrap}>
          <Text style={styles.avatarEmoji}>🧑‍🏫</Text>
        </View>
        <Text style={styles.headerTitle}>Teacher Dashboard</Text>
        <TouchableOpacity style={styles.bellBtn} activeOpacity={0.7}>
          <Text style={styles.bellIcon}>🔔</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}>

        {/* ── Greeting ── */}
        <View style={styles.greetRow}>
          <Text style={styles.greeting}>Hello, Prof. Green </Text>
          <Text style={styles.greetingLeaf}>🍃</Text>
        </View>

        {/* ── Submission Badge ── */}
        <View style={styles.submissionBadge}>
          <Text style={styles.submissionText}>You have 12 submissions to verify</Text>
        </View>

        {/* ── Class Snapshot ── */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Class Snapshot</Text>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.snapshotScroll}>
          {SNAPSHOT_CARDS.map(card => (
            <View
              key={card.id}
              style={[styles.snapshotCard, { borderColor: card.accentColor }]}>
              <View style={styles.snapshotTop}>
                <View style={[styles.snapshotIconCircle, { backgroundColor: card.iconBg }]}>
                  <Text style={styles.snapshotIcon}>{card.icon}</Text>
                </View>
                {card.badge && (
                  <View style={[styles.liveBadge, { backgroundColor: card.badgeColor! }]}>
                    <Text style={styles.liveBadgeText}>{card.badge}</Text>
                  </View>
                )}
              </View>
              <Text style={styles.snapshotLabel}>{card.label}</Text>
              <Text style={styles.snapshotValue}>{card.value}</Text>
              {card.showProgress && (
                <View style={styles.snapshotProgressTrack}>
                  <View
                    style={[
                      styles.snapshotProgressFill,
                      { width: `${card.progress * 100}%`, backgroundColor: card.accentColor },
                    ]}
                  />
                </View>
              )}
              {card.sub && (
                <Text style={styles.snapshotSub}>{card.sub}</Text>
              )}
            </View>
          ))}
        </ScrollView>

        {/* ── Control Panel ── */}
        <Text style={[styles.sectionTitle, { marginBottom: 12 }]}>Control Panel</Text>

        {/* Review Submissions Banner */}
        <TouchableOpacity style={styles.reviewBanner} activeOpacity={0.85}>
          <View style={styles.reviewLeft}>
            <View style={styles.reviewCheckBox}>
              <Text style={styles.reviewCheckText}>✓</Text>
            </View>
            <View>
              <Text style={styles.reviewTitle}>Review Submissions</Text>
              <Text style={styles.reviewSub}>12 pending verification</Text>
            </View>
          </View>
          <View style={styles.reviewDecoIcon}>
            <Text style={styles.reviewDecoEmoji}>📑</Text>
          </View>
        </TouchableOpacity>

        {/* 2×2 Action Grid */}
        <View style={styles.grid}>
          {CONTROL_GRID.map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.gridCard}
              activeOpacity={0.75}
              onPress={() => {
                if (item.id === 'classes') navigation.navigate('TeacherClassManager');
                if (item.id === 'challenges') navigation.navigate('TeacherAnalyticsDashboard');
              }}>
              <View style={[styles.gridIconCircle, { backgroundColor: item.iconBg }]}>
                <Text style={styles.gridIcon}>{item.icon}</Text>
              </View>
              <Text style={styles.gridTitle}>{item.title}</Text>
              <Text style={styles.gridSub}>{item.sub}</Text>
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const CARD_WIDTH = width * 0.48;
const GRID_CARD = (width - 52) / 2;

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
    backgroundColor: Colors.surface,
  },
  avatarWrap: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#D1E8D8',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  avatarEmoji: {
    fontSize: 20,
  },
  headerTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '800',
    color: Colors.primaryDark,
    letterSpacing: -0.3,
  },
  bellBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  bellIcon: {
    fontSize: 17,
  },

  // Scroll
  scroll: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 32,
  },

  // Greeting
  greetRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  greeting: {
    fontSize: 24,
    fontWeight: '800',
    color: Colors.text,
    letterSpacing: -0.4,
  },
  greetingLeaf: {
    fontSize: 22,
  },

  // Submission badge
  submissionBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#DDF5EA',
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 20,
    marginBottom: 22,
  },
  submissionText: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.primaryDark,
  },

  // Section header
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.textSecondary,
    letterSpacing: 0.1,
  },
  viewAll: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.primaryDark,
  },

  // Snapshot horizontal scroll
  snapshotScroll: {
    paddingRight: 16,
    gap: 12,
    marginBottom: 24,
  },

  // Snapshot card
  snapshotCard: {
    width: CARD_WIDTH,
    backgroundColor: Colors.white,
    borderRadius: 16,
    borderWidth: 1.5,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  snapshotTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 14,
  },
  snapshotIconCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
  },
  snapshotIcon: {
    fontSize: 20,
  },
  liveBadge: {
    paddingHorizontal: 9,
    paddingVertical: 3,
    borderRadius: 10,
  },
  liveBadgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: Colors.white,
  },
  snapshotLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: Colors.textSecondary,
    letterSpacing: 0.8,
    marginBottom: 4,
  },
  snapshotValue: {
    fontSize: 28,
    fontWeight: '800',
    color: Colors.text,
    letterSpacing: -0.5,
    marginBottom: 10,
  },
  snapshotProgressTrack: {
    height: 5,
    backgroundColor: '#E5E7EB',
    borderRadius: 3,
    overflow: 'hidden',
  },
  snapshotProgressFill: {
    height: '100%',
    borderRadius: 3,
  },
  snapshotSub: {
    fontSize: 12,
    fontStyle: 'italic',
    color: Colors.textSecondary,
    marginTop: 4,
  },

  // Review banner
  reviewBanner: {
    backgroundColor: Colors.primaryDark,
    borderRadius: 20,
    paddingVertical: 22,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
    overflow: 'hidden',
    position: 'relative',
    shadowColor: Colors.primaryDark,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
  },
  reviewLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  reviewCheckBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.18)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  reviewCheckText: {
    fontSize: 20,
    color: Colors.white,
    fontWeight: '700',
  },
  reviewTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: Colors.white,
    letterSpacing: -0.2,
  },
  reviewSub: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.75)',
    marginTop: 2,
  },
  reviewDecoIcon: {
    opacity: 0.25,
  },
  reviewDecoEmoji: {
    fontSize: 44,
    color: Colors.white,
  },

  // Grid
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  gridCard: {
    width: GRID_CARD,
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  gridIconCircle: {
    width: 46,
    height: 46,
    borderRadius: 23,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  gridIcon: {
    fontSize: 22,
  },
  gridTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 4,
    lineHeight: 20,
  },
  gridSub: {
    fontSize: 12,
    color: Colors.textSecondary,
    lineHeight: 16,
  },
});
