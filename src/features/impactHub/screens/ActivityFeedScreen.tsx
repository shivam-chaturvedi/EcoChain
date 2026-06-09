import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import { Colors } from '../../../constants';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ActivityFeed'>;
};

// ─── Data ──────────────────────────────────────────────────────────────────────
interface Activity {
  id: string;
  title: string;
  time: string;
  status: 'Verified' | 'Pending';
  xp: number;
  iconBg: string;
  iconEmoji: string;
  showEmoji: boolean;
}

const TODAY: Activity[] = [
  {
    id: 't1', title: 'Recycled Plastic Bottles', time: '4:12 PM',
    status: 'Verified', xp: 25,
    iconBg: '#B2F5EA', iconEmoji: '♻️', showEmoji: false,
  },
  {
    id: 't2', title: 'Reduced Shower Time', time: '2:30 PM',
    status: 'Pending', xp: 15,
    iconBg: '#C4B5FD', iconEmoji: '🚿', showEmoji: false,
  },
  {
    id: 't3', title: 'Smart Lighting Mode', time: '10:15 AM',
    status: 'Verified', xp: 40,
    iconBg: '#2DD4BF', iconEmoji: '⚡', showEmoji: true,
  },
];

const YESTERDAY: Activity[] = [
  {
    id: 'y1', title: 'Biked to School', time: 'Yesterday, 8:45 AM',
    status: 'Verified', xp: 50,
    iconBg: '#2DD4BF', iconEmoji: '🚴', showEmoji: true,
  },
  {
    id: 'y2', title: 'Optimized AC Settings', time: 'Yesterday, 2:10 PM',
    status: 'Verified', xp: 20,
    iconBg: '#A7F3D0', iconEmoji: '❄️', showEmoji: false,
  },
];

// ─── Sub-components ────────────────────────────────────────────────────────────
function StatusBadge({ status }: { status: 'Verified' | 'Pending' }) {
  const isVerified = status === 'Verified';
  return (
    <View style={styles.statusRow}>
      <Text style={isVerified ? styles.verifiedIcon : styles.pendingIcon}>
        {isVerified ? '✅' : '⏰'}
      </Text>
      <Text style={isVerified ? styles.verifiedTxt : styles.pendingTxt}>
        {status}
      </Text>
    </View>
  );
}

function ActivityCard({ item }: { item: Activity }) {
  return (
    <View style={styles.card}>
      {/* White content area */}
      <View style={styles.cardLeft}>
        <View style={[styles.iconCircle, { backgroundColor: item.iconBg }]}>
          {item.showEmoji && (
            <Text style={styles.iconEmoji}>{item.iconEmoji}</Text>
          )}
        </View>
        <View style={styles.cardText}>
          <Text style={styles.activityTitle} numberOfLines={2}>
            {item.title}
          </Text>
          <View style={styles.metaRow}>
            <Text style={styles.timeTxt}>{item.time}</Text>
            <Text style={styles.bullet}> • </Text>
            <StatusBadge status={item.status} />
          </View>
        </View>
      </View>

      {/* Pink XP area */}
      <View style={styles.xpArea}>
        <View style={styles.xpBadge}>
          <Text style={styles.xpNum}>+{item.xp}</Text>
          <Text style={styles.xpUnit}>XP</Text>
        </View>
      </View>
    </View>
  );
}

// ─── Screen ────────────────────────────────────────────────────────────────────
export default function ActivityFeedScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerAvatar}>
          <Text style={styles.headerAvatarEmoji}>🌻</Text>
        </View>
        <Text style={styles.headerTitle}>Activity Feed</Text>
        <TouchableOpacity style={styles.filterBtn} activeOpacity={0.7}>
          <Text style={styles.filterIcon}>≡</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}>

        {/* TODAY section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionLabel}>TODAY</Text>
          <Text style={styles.sectionCount}>{TODAY.length} entries</Text>
        </View>
        {TODAY.map(item => <ActivityCard key={item.id} item={item} />)}

        {/* YESTERDAY section */}
        <View style={[styles.sectionHeader, { marginTop: 20 }]}>
          <Text style={styles.sectionLabel}>YESTERDAY</Text>
          <Text style={styles.sectionCount}>{YESTERDAY.length} entries</Text>
        </View>
        {YESTERDAY.map(item => <ActivityCard key={item.id} item={item} />)}

        <View style={{ height: 88 }} />
      </ScrollView>

      {/* FAB */}
      <TouchableOpacity style={styles.fab} activeOpacity={0.85} onPress={() => navigation.navigate('LogActivity')}>
        <Text style={styles.fabPlus}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// ─── Styles ────────────────────────────────────────────────────────────────────
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
    paddingVertical: 10,
  },
  headerAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#D8EFE2',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  headerAvatarEmoji: { fontSize: 18 },
  headerTitle: {
    flex: 1,
    fontSize: 22,
    fontWeight: '800',
    color: Colors.primaryDark,
  },
  filterBtn: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterIcon: {
    fontSize: 22,
    color: Colors.text,
    fontWeight: '600',
  },

  // Scroll
  scroll: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },

  // Section header
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: Colors.textLight,
    letterSpacing: 1,
  },
  sectionCount: {
    fontSize: 11,
    fontWeight: '500',
    color: Colors.textLight,
  },

  // Activity card
  card: {
    flexDirection: 'row',
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: Colors.white,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 6,
    elevation: 3,
  },

  // Card left (white area)
  cardLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    gap: 12,
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  iconEmoji: { fontSize: 22 },
  cardText: { flex: 1 },
  activityTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 5,
    lineHeight: 20,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  timeTxt: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  bullet: {
    fontSize: 12,
    color: Colors.textLight,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  verifiedIcon: { fontSize: 11 },
  pendingIcon: { fontSize: 11 },
  verifiedTxt: {
    fontSize: 12,
    fontWeight: '600',
    color: '#22C55E',
  },
  pendingTxt: {
    fontSize: 12,
    fontWeight: '600',
    color: '#3B82F6',
  },

  // Card right (pink XP area)
  xpArea: {
    width: 72,
    backgroundColor: '#FFF0F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  xpBadge: {
    backgroundColor: '#FFD6D6',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    alignItems: 'center',
    minWidth: 52,
  },
  xpNum: {
    fontSize: 15,
    fontWeight: '800',
    color: '#C0392B',
    lineHeight: 18,
  },
  xpUnit: {
    fontSize: 10,
    fontWeight: '700',
    color: '#C0392B',
  },

  // FAB
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 16,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: Colors.primaryDark,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.primaryDark,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 7,
  },
  fabPlus: {
    fontSize: 28,
    fontWeight: '300',
    color: Colors.white,
    lineHeight: 32,
  },
});
