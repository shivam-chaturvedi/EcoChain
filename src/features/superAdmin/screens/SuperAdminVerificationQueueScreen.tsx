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
  navigation: NativeStackNavigationProp<RootStackParamList, 'SuperAdminVerificationQueue'>;
};

type QueueItem = {
  id: string;
  emoji: string;
  emojiBg: string;
  title: string;
  classLabel: string;
  school: string;
  status: 'Pending' | 'Approved' | 'Rejected';
};

const QUEUE_ITEMS: QueueItem[] = [
  {
    id: '1',
    emoji: '♻️',
    emojiBg: '#C8EAD8',
    title: 'Compost Batch A4',
    classLabel: 'Class 12-B',
    school: 'Oakridge High',
    status: 'Pending',
  },
  {
    id: '2',
    emoji: '⚡',
    emojiBg: '#C8EAD8',
    title: 'Energy Audit',
    classLabel: 'Class 10-A',
    school: 'Northshore Tech',
    status: 'Pending',
  },
  {
    id: '3',
    emoji: '💧',
    emojiBg: '#C8EAD8',
    title: 'Rainwater Collection',
    classLabel: 'Class 11-C',
    school: 'Riverside Academy',
    status: 'Pending',
  },
  {
    id: '4',
    emoji: '🌱',
    emojiBg: '#C8EAD8',
    title: 'Rooftop Garden Project',
    classLabel: 'Class 9-A',
    school: 'Greenfield Institute',
    status: 'Pending',
  },
];

const STATUS_STYLE: Record<QueueItem['status'], { bg: string; textColor: string }> = {
  Pending: { bg: '#F3F4F6', textColor: Colors.textSecondary },
  Approved: { bg: '#DDF5EA', textColor: Colors.primaryDark },
  Rejected: { bg: '#FEE2E2', textColor: '#DC2626' },
};

export default function SuperAdminVerificationQueueScreen({ navigation }: Props) {
  const [items, setItems] = useState<QueueItem[]>(QUEUE_ITEMS);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.surface} />

      {/* ── Header ── */}
      <View style={styles.header}>
        <View style={styles.brandRow}>
          <View style={styles.logoCircle}>
            <Text style={styles.logoEmoji}>🍃</Text>
          </View>
          <Text style={styles.brandText}>ChonX</Text>
        </View>
        <TouchableOpacity style={styles.personBtn} activeOpacity={0.7}>
          <Text style={styles.personEmoji}>👤</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>

        {/* ── Title block ── */}
        <View style={styles.titleBlock}>
          <Text style={styles.title}>Verification Queue</Text>
          <Text style={styles.subtitle}>
            Verify student climate actions to unlock{'\n'}community rewards.
          </Text>
        </View>

        {/* ── Queue cards ── */}
        <View style={styles.cards}>
          {items.map(item => {
            const statusStyle = STATUS_STYLE[item.status];
            return (
              <TouchableOpacity key={item.id} style={styles.card} activeOpacity={0.7}>
                {/* Top row: icon + status badge */}
                <View style={styles.cardTopRow}>
                  <View style={[styles.iconCircle, { backgroundColor: item.emojiBg }]}>
                    <Text style={styles.iconEmoji}>{item.emoji}</Text>
                  </View>
                  <View style={[styles.statusBadge, { backgroundColor: statusStyle.bg }]}>
                    <Text style={[styles.statusBadgeText, { color: statusStyle.textColor }]}>
                      {item.status}
                    </Text>
                  </View>
                </View>

                {/* Title + subtitle */}
                <View style={styles.cardTextBlock}>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <Text style={styles.cardSubtitle}>
                    {item.classLabel} • {item.school}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={{ height: 32 }} />
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
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  brandRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logoCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#DDF5EA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoEmoji: { fontSize: 16 },
  brandText: {
    fontSize: 18,
    fontWeight: '900',
    color: Colors.primaryDark,
    letterSpacing: -0.4,
  },
  personBtn: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  personEmoji: { fontSize: 16 },

  // Scroll
  scroll: {
    paddingBottom: 24,
  },

  // Title block
  titleBlock: {
    paddingHorizontal: 20,
    paddingTop: 28,
    paddingBottom: 24,
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
    color: Colors.text,
    letterSpacing: -0.8,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 21,
  },

  // Cards
  cards: {
    paddingHorizontal: 16,
    gap: 14,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 1,
    borderWidth: 1,
    borderColor: Colors.border,
    gap: 20,
  },

  // Card top row
  cardTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconEmoji: {
    fontSize: 22,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
  },
  statusBadgeText: {
    fontSize: 12,
    fontWeight: '600',
  },

  // Card text
  cardTextBlock: {
    gap: 5,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#555',
    letterSpacing: -0.3,
  },
  cardSubtitle: {
    fontSize: 13,
    color: Colors.textLight,
  },
});
