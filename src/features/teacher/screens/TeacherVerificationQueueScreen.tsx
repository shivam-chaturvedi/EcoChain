import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
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
  navigation: NativeStackNavigationProp<RootStackParamList, 'TeacherVerificationQueue'>;
};

type Submission = {
  id: string;
  category: string;
  categoryColor: string;
  studentName: string;
  description: string;
  imageBg: string;
  imageBg2: string;
  imageEmoji: string;
};

const SUBMISSIONS: Submission[] = [
  {
    id: '1',
    category: 'Tree Planting',
    categoryColor: Colors.primaryDark,
    studentName: 'Liam Carter',
    description:
      'Planted 3 native oak saplings in the community park. Used recycled compost for the base...',
    imageBg: '#1B4332',
    imageBg2: '#2D6A4F',
    imageEmoji: '🌱',
  },
  {
    id: '2',
    category: 'Waste Management',
    categoryColor: '#1D4ED8',
    studentName: 'Sophia Martinez',
    description:
      'Implemented a new 3-tier recycling system at home and recorded 5kg of diverted waste...',
    imageBg: '#1E3A5F',
    imageBg2: '#334155',
    imageEmoji: '♻️',
  },
  {
    id: '3',
    category: 'Energy Saving',
    categoryColor: '#B45309',
    studentName: 'Jordan Wei',
    description:
      'Replaced all desk lamps with high-efficiency LED bulbs and installed a solar power bank...',
    imageBg: '#78350F',
    imageBg2: '#92400E',
    imageEmoji: '⚡',
  },
];

const FILTER_CLASS_OPTIONS = ['All Classes', 'Class 10A', 'Class 9B'];
const CATEGORY_OPTIONS = ['All', 'Tree Planting', 'Waste Management', 'Energy Saving'];
const SORT_OPTIONS = ['Newest First', 'Oldest First', 'Pending First'];

export default function TeacherVerificationQueueScreen({ navigation }: Props) {
  const [search, setSearch] = useState('');
  const [filterClass, setFilterClass] = useState('Filter: Class');
  const [category, setCategory] = useState('Category');
  const [sort, setSort] = useState('Newest First');
  const [approved, setApproved] = useState<Set<string>>(new Set());
  const [rejected, setRejected] = useState<Set<string>>(new Set());

  const visibleSubmissions = SUBMISSIONS.filter(s => {
    if (approved.has(s.id) || rejected.has(s.id)) return false;
    if (search.trim()) {
      return s.studentName.toLowerCase().includes(search.toLowerCase());
    }
    return true;
  });

  function handleApprove(id: string) {
    setApproved(prev => new Set([...prev, id]));
  }
  function handleReject(id: string) {
    setRejected(prev => new Set([...prev, id]));
  }

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />

      {/* ── Header ── */}
      <View style={styles.header}>
        <View style={styles.brandRow}>
          <View style={styles.leafCircle}>
            <Text style={styles.leafEmoji}>🍃</Text>
          </View>
          <Text style={styles.brandTitle}>ChonX</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconBtn} activeOpacity={0.7}>
            <Text style={styles.bellText}>🔔</Text>
          </TouchableOpacity>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarEmoji}>👩‍🏫</Text>
          </View>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>

        {/* ── Page header ── */}
        <View style={styles.pageHeader}>
          <Text style={styles.dashboardLabel}>TEACHER DASHBOARD</Text>
          <Text style={styles.pageTitle}>Verification Queue</Text>
          <Text style={styles.pageSubtitle}>
            Review and validate student environmental impact submissions. Your feedback drives the
            classroom leaderboard.
          </Text>
        </View>

        {/* ── Stats row ── */}
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>Pending</Text>
            <Text style={styles.statValue}>24</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>Today's Goal</Text>
            <Text style={styles.statValue}>15/50</Text>
          </View>
        </View>

        {/* ── Search bar ── */}
        <View style={styles.searchBar}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            value={search}
            onChangeText={setSearch}
            placeholder="Search student name or project..."
            placeholderTextColor={Colors.textSecondary}
          />
        </View>

        {/* ── Filter row ── */}
        <View style={styles.filterRow}>
          <TouchableOpacity style={styles.filterPill} activeOpacity={0.75}>
            <Text style={styles.filterPillText}>{filterClass}</Text>
            <Text style={styles.filterChevron}>∨</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterPill} activeOpacity={0.75}>
            <Text style={styles.filterPillText}>{category}</Text>
            <Text style={styles.filterChevron}>∨</Text>
          </TouchableOpacity>
        </View>

        {/* ── Sort pill ── */}
        <TouchableOpacity style={styles.sortPill} activeOpacity={0.75}>
          <Text style={styles.sortPillText}>Sort: {sort}</Text>
          <Text style={styles.sortIcon}>≡</Text>
        </TouchableOpacity>

        {/* ── Submission cards ── */}
        <View style={styles.cards}>
          {visibleSubmissions.map(s => (
            <SubmissionCard
              key={s.id}
              submission={s}
              onApprove={() => handleApprove(s.id)}
              onReject={() => handleReject(s.id)}
            />
          ))}

          {visibleSubmissions.length === 0 && (
            <View style={styles.emptyState}>
              <Text style={styles.emptyStateEmoji}>✅</Text>
              <Text style={styles.emptyStateText}>All caught up!</Text>
              <Text style={styles.emptyStateSubtext}>No pending submissions to review.</Text>
            </View>
          )}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

function SubmissionCard({
  submission: s,
  onApprove,
  onReject,
}: {
  submission: Submission;
  onApprove: () => void;
  onReject: () => void;
}) {
  return (
    <View style={cardStyles.card}>
      {/* Image area */}
      <View style={[cardStyles.imageArea, { backgroundColor: s.imageBg }]}>
        {/* Subtle depth layer */}
        <View style={[cardStyles.imageLayer, { backgroundColor: s.imageBg2 }]} />
        {/* Emoji overlay */}
        <Text style={cardStyles.imageEmoji}>{s.imageEmoji}</Text>
        {/* Category badge */}
        <View style={[cardStyles.categoryBadge, { backgroundColor: s.categoryColor }]}>
          <Text style={cardStyles.categoryBadgeText}>{s.category}</Text>
        </View>
        {/* Gallery icon */}
        <View style={cardStyles.galleryIconWrap}>
          <Text style={cardStyles.galleryIcon}>▦</Text>
        </View>
      </View>

      {/* Card body */}
      <View style={cardStyles.body}>
        {/* Student name row */}
        <View style={cardStyles.studentRow}>
          <View style={cardStyles.studentAvatar}>
            <Text style={cardStyles.studentAvatarEmoji}>🌿</Text>
          </View>
          <Text style={cardStyles.studentName}>{s.studentName}</Text>
        </View>

        {/* Description */}
        <Text style={cardStyles.description} numberOfLines={2}>
          {s.description}
        </Text>

        {/* Action buttons */}
        <View style={cardStyles.actionsRow}>
          <TouchableOpacity style={cardStyles.approveBtn} onPress={onApprove} activeOpacity={0.85}>
            <Text style={cardStyles.approveBtnIcon}>✓</Text>
            <Text style={cardStyles.approveBtnText}>Approve</Text>
          </TouchableOpacity>
          <TouchableOpacity style={cardStyles.rejectBtn} onPress={onReject} activeOpacity={0.8}>
            <Text style={cardStyles.rejectBtnIcon}>⊗</Text>
            <Text style={cardStyles.rejectBtnText}>Reject</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  brandRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  leafCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#DDF5EA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leafEmoji: { fontSize: 15 },
  brandTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: Colors.primaryDark,
    letterSpacing: -0.5,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  iconBtn: {
    width: 34,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bellText: { fontSize: 18 },
  avatarCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#C7DFD0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarEmoji: { fontSize: 18 },

  // Scroll
  scroll: {
    paddingBottom: 32,
  },

  // Page header
  pageHeader: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
  },
  dashboardLabel: {
    fontSize: 11,
    fontWeight: '800',
    color: Colors.primaryDark,
    letterSpacing: 1.5,
    marginBottom: 4,
  },
  pageTitle: {
    fontSize: 26,
    fontWeight: '900',
    color: Colors.text,
    letterSpacing: -0.5,
    marginBottom: 8,
  },
  pageSubtitle: {
    fontSize: 13,
    color: Colors.textSecondary,
    lineHeight: 20,
  },

  // Stats
  statsRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 12,
    marginBottom: 16,
  },
  statCard: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: Colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  statLabel: {
    fontSize: 12,
    color: Colors.textSecondary,
    fontWeight: '500',
    marginBottom: 2,
  },
  statValue: {
    fontSize: 24,
    fontWeight: '900',
    color: Colors.text,
    letterSpacing: -0.5,
  },

  // Search bar
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    backgroundColor: '#F3F4F6',
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 8,
    marginBottom: 12,
  },
  searchIcon: { fontSize: 16 },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: Colors.text,
  },

  // Filter row
  filterRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 10,
    marginBottom: 10,
  },
  filterPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
    gap: 6,
  },
  filterPillText: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.text,
  },
  filterChevron: {
    fontSize: 12,
    color: Colors.textSecondary,
  },

  // Sort pill
  sortPill: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    backgroundColor: '#DDF5EA',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 18,
  },
  sortPillText: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.primaryDark,
  },
  sortIcon: {
    fontSize: 16,
    color: Colors.primaryDark,
    fontWeight: '700',
  },

  // Cards container
  cards: {
    paddingHorizontal: 16,
    gap: 16,
  },

  // Empty state
  emptyState: {
    alignItems: 'center',
    paddingVertical: 48,
    gap: 8,
  },
  emptyStateEmoji: { fontSize: 40 },
  emptyStateText: {
    fontSize: 18,
    fontWeight: '800',
    color: Colors.text,
  },
  emptyStateSubtext: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
});

const cardStyles = StyleSheet.create({
  card: {
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

  // Image area
  imageArea: {
    width: '100%',
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  imageLayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.5,
  },
  imageEmoji: {
    fontSize: 72,
    opacity: 0.7,
  },
  categoryBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  categoryBadgeText: {
    fontSize: 11,
    fontWeight: '800',
    color: Colors.white,
    letterSpacing: 0.3,
  },
  galleryIconWrap: {
    position: 'absolute',
    bottom: 10,
    right: 12,
    width: 28,
    height: 28,
    borderRadius: 6,
    backgroundColor: 'rgba(255,255,255,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  galleryIcon: {
    fontSize: 14,
    color: Colors.white,
  },

  // Body
  body: {
    padding: 14,
    gap: 10,
  },
  studentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  studentAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#DDF5EA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  studentAvatarEmoji: { fontSize: 13 },
  studentName: {
    fontSize: 15,
    fontWeight: '800',
    color: Colors.text,
  },
  description: {
    fontSize: 13,
    color: Colors.textSecondary,
    lineHeight: 19,
  },

  // Action buttons
  actionsRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 2,
  },
  approveBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primaryDark,
    borderRadius: 24,
    paddingVertical: 11,
    gap: 6,
  },
  approveBtnIcon: {
    fontSize: 14,
    color: Colors.white,
    fontWeight: '800',
  },
  approveBtnText: {
    fontSize: 14,
    fontWeight: '800',
    color: Colors.white,
  },
  rejectBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderWidth: 1.5,
    borderColor: '#EF4444',
    borderRadius: 24,
    paddingVertical: 11,
    gap: 6,
  },
  rejectBtnIcon: {
    fontSize: 14,
    color: '#EF4444',
    fontWeight: '800',
  },
  rejectBtnText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#EF4444',
  },
});
