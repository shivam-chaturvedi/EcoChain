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

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SchoolReviewQueue'>;
};

type SubmissionStatus = 'AWAITING_REVIEW' | 'APPROVED' | 'REJECTED';

type Submission = {
  id: string;
  category: string;
  categoryColor: string;
  title: string;
  submittedBy: string;
  grade: string;
  status: SubmissionStatus;
};

const SUBMISSIONS: Submission[] = [
  {
    id: '1',
    category: 'RECYCLING',
    categoryColor: '#52B788',
    title: 'School Recycling Drive',
    submittedBy: 'Leo Chen',
    grade: 'Grade 11',
    status: 'AWAITING_REVIEW',
  },
  {
    id: '2',
    category: 'TREE PLANTING',
    categoryColor: Colors.primaryDark,
    title: 'Campus Tree Initiative',
    submittedBy: 'Aisha Patel',
    grade: 'Grade 10',
    status: 'AWAITING_REVIEW',
  },
  {
    id: '3',
    category: 'ENERGY',
    categoryColor: '#B45309',
    title: 'Solar Lab Audit',
    submittedBy: 'Marcus Kim',
    grade: 'Grade 12',
    status: 'AWAITING_REVIEW',
  },
];

const STATUS_META: Record<SubmissionStatus, { label: string; color: string; bgColor: string }> = {
  AWAITING_REVIEW: { label: 'AWAITING REVIEW', color: Colors.primaryLight, bgColor: '#DDF5EA' },
  APPROVED: { label: 'APPROVED', color: Colors.primaryDark, bgColor: '#DDF5EA' },
  REJECTED: { label: 'REJECTED', color: '#EF4444', bgColor: '#FEE2E2' },
};

const { width } = Dimensions.get('window');

export default function SchoolReviewQueueScreen({ navigation }: Props) {
  const [statuses, setStatuses] = useState<Record<string, SubmissionStatus>>(
    Object.fromEntries(SUBMISSIONS.map(s => [s.id, s.status]))
  );

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#F0F7F2" />

      {/* ── Header ── */}
      <View style={styles.header}>
        <Text style={styles.brandText}>ChonX</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconBtn} activeOpacity={0.7}>
            <Text style={styles.bellText}>🔔</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.avatarBtn} activeOpacity={0.8}>
            <Text style={styles.avatarBtnText}>👤</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>

        {/* ── Title block ── */}
        <View style={styles.titleBlock}>
          <Text style={styles.title}>Review Queue</Text>
          <Text style={styles.subtitle}>
            Pending eco-action submissions from{'\n'}Emerald Academy.
          </Text>
        </View>

        {/* ── Cards ── */}
        <View style={styles.cards}>
          {SUBMISSIONS.map(sub => {
            const currentStatus = statuses[sub.id];
            const meta = STATUS_META[currentStatus];
            return (
              <View key={sub.id} style={styles.card}>
                {/* Image area */}
                <View style={styles.cardImageArea}>
                  <Text style={styles.imgLabel}>img</Text>
                  <View style={[styles.categoryBadge, { backgroundColor: sub.categoryColor }]}>
                    <Text style={styles.categoryBadgeText}>{sub.category}</Text>
                  </View>
                </View>

                {/* Card body */}
                <View style={styles.cardBody}>
                  <Text style={styles.cardTitle}>{sub.title}</Text>
                  <Text style={styles.cardSubtitle}>
                    Submitted by {sub.submittedBy} • {sub.grade}
                  </Text>

                  {/* Status row */}
                  <View style={styles.statusRow}>
                    <View style={[styles.statusIconCircle, { backgroundColor: meta.bgColor }]}>
                      <Text style={styles.statusIconEmoji}>🍃</Text>
                    </View>
                    <Text style={[styles.statusText, { color: meta.color }]}>{meta.label}</Text>
                  </View>
                </View>
              </View>
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
    backgroundColor: '#F0F7F2',
  },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: '#F0F7F2',
  },
  brandText: {
    flex: 1,
    fontSize: 22,
    fontWeight: '900',
    color: Colors.primaryDark,
    letterSpacing: -0.5,
    fontStyle: 'italic',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  iconBtn: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bellText: { fontSize: 20 },
  avatarBtn: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: Colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarBtnText: { fontSize: 18 },

  // Scroll
  scroll: {
    paddingBottom: 24,
  },

  // Title block
  titleBlock: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 24,
  },
  title: {
    fontSize: 36,
    fontWeight: '900',
    color: Colors.primaryDark,
    letterSpacing: -1,
    lineHeight: 40,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 20,
  },

  // Cards
  cards: {
    paddingHorizontal: 16,
    gap: 16,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 2,
  },

  // Card image
  cardImageArea: {
    width: '100%',
    height: 190,
    backgroundColor: '#CBCBCB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgLabel: {
    fontSize: 13,
    color: '#A0A0A0',
    fontWeight: '500',
  },
  categoryBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
  },
  categoryBadgeText: {
    fontSize: 11,
    fontWeight: '800',
    color: Colors.white,
    letterSpacing: 0.5,
  },

  // Card body
  cardBody: {
    padding: 16,
    gap: 6,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: Colors.text,
    letterSpacing: -0.3,
  },
  cardSubtitle: {
    fontSize: 13,
    color: Colors.textSecondary,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 4,
  },
  statusIconCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusIconEmoji: { fontSize: 14 },
  statusText: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
});
