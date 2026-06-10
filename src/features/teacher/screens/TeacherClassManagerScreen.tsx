import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
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
  navigation: NativeStackNavigationProp<RootStackParamList, 'TeacherClassManager'>;
};

type ClassData = {
  id: string;
  grade: string;
  subject: string;
  name: string;
  participation: number;
  accentColor: string;
  badgeBg: string;
  badgeText: string;
  barColor: string;
  avatarColors: string[];
  extraStudents: number;
  xpToday: string;
};

const CLASSES: ClassData[] = [
  {
    id: '1',
    grade: '10A',
    subject: 'Biology Honors',
    name: 'Advanced Eco-Lab',
    participation: 92,
    accentColor: Colors.primaryDark,
    badgeBg: '#DDF5EA',
    badgeText: Colors.primaryDark,
    barColor: Colors.primaryDark,
    avatarColors: ['#FF8C69', '#6DB6FF', '#8BC34A'],
    extraStudents: 24,
    xpToday: '1,240 XP Today',
  },
  {
    id: '2',
    grade: '9B',
    subject: 'General Science',
    name: 'Impact Studies',
    participation: 78,
    accentColor: '#3B6FD4',
    badgeBg: '#DCEAFF',
    badgeText: '#2563EB',
    barColor: '#3B6FD4',
    avatarColors: ['#FFB347'],
    extraStudents: 18,
    xpToday: '850 XP Today',
  },
];

export default function TeacherClassManagerScreen({ navigation }: Props) {
  const [search, setSearch] = useState('');

  const filtered = CLASSES.filter(
    c =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.grade.toLowerCase().includes(search.toLowerCase()) ||
      c.subject.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.surface} />

      {/* ── Header ── */}
      <View style={styles.header}>
        <Text style={styles.brand}>ChonX</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconBtn} activeOpacity={0.7}>
            <Text style={styles.iconBtnText}>🔔</Text>
          </TouchableOpacity>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarEmoji}>🧑‍🏫</Text>
          </View>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}>

        {/* ── Title ── */}
        <Text style={styles.title}>Class Manager</Text>
        <Text style={styles.subtitle}>
          Empower your students and track environmental impact.
        </Text>

        {/* ── Search ── */}
        <View style={styles.searchBar}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search classes..."
            placeholderTextColor={Colors.inputPlaceholder}
            value={search}
            onChangeText={setSearch}
          />
        </View>

        {/* ── Class Cards ── */}
        {filtered.map(cls => (
          <TouchableOpacity
            key={cls.id}
            style={styles.classCard}
            onPress={() => navigation.navigate('TeacherAnalyticsDashboard')}
            activeOpacity={0.85}>

            {/* Card Header */}
            <View style={styles.cardHeader}>
              <View style={[styles.gradeBadge, { backgroundColor: cls.badgeBg }]}>
                <Text style={[styles.gradeText, { color: cls.badgeText }]}>{cls.grade}</Text>
              </View>
              <View style={styles.cardTitleGroup}>
                <Text style={styles.subjectLabel}>{cls.subject}</Text>
                <Text style={styles.className}>{cls.name}</Text>
              </View>
              <TouchableOpacity style={styles.moreBtn} activeOpacity={0.6}>
                <Text style={styles.moreBtnText}>⋮</Text>
              </TouchableOpacity>
            </View>

            {/* Participation Rate */}
            <View style={styles.participationRow}>
              <Text style={styles.participationLabel}>Participation Rate</Text>
              <Text style={[styles.participationPct, { color: cls.barColor }]}>
                {cls.participation}%
              </Text>
            </View>
            <View style={styles.progressTrack}>
              <View
                style={[
                  styles.progressFill,
                  { width: `${cls.participation}%`, backgroundColor: cls.barColor },
                ]}
              />
            </View>

            {/* Footer */}
            <View style={styles.cardFooter}>
              <View style={styles.avatarRow}>
                {cls.avatarColors.map((color, i) => (
                  <View
                    key={i}
                    style={[
                      styles.miniAvatar,
                      { backgroundColor: color, marginLeft: i === 0 ? 0 : -8 },
                    ]}>
                    <Text style={styles.miniAvatarText}>👤</Text>
                  </View>
                ))}
                <View style={styles.extraBadge}>
                  <Text style={styles.extraBadgeText}>+{cls.extraStudents}</Text>
                </View>
              </View>
              <Text style={styles.xpTodayText}>{cls.xpToday}</Text>
            </View>

          </TouchableOpacity>
        ))}

        {/* ── Add New Class ── */}
        <TouchableOpacity style={styles.addCard} activeOpacity={0.7}>
          <View style={styles.addCircle}>
            <Text style={styles.addPlus}>+</Text>
          </View>
          <Text style={styles.addText}>Add New Class</Text>
        </TouchableOpacity>

      </ScrollView>

      {/* ── FAB ── */}
      <TouchableOpacity style={styles.fab} activeOpacity={0.85}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>

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
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: Colors.surface,
  },
  brand: {
    fontSize: 20,
    fontWeight: '800',
    color: Colors.primaryDark,
    letterSpacing: -0.3,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  iconBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBtnText: {
    fontSize: 18,
  },
  avatarCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#D1E8D8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarEmoji: {
    fontSize: 18,
  },

  // Scroll
  scroll: {
    paddingHorizontal: 20,
    paddingTop: 4,
    paddingBottom: 100,
  },

  // Title
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: Colors.text,
    marginBottom: 6,
    letterSpacing: -0.4,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 21,
    marginBottom: 20,
  },

  // Search
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    gap: 8,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: Colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  searchIcon: {
    fontSize: 15,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: Colors.text,
    padding: 0,
  },

  // Class Card
  classCard: {
    backgroundColor: Colors.white,
    borderRadius: 18,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: Colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
    gap: 12,
  },
  gradeBadge: {
    width: 56,
    height: 56,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  gradeText: {
    fontSize: 17,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  cardTitleGroup: {
    flex: 1,
  },
  subjectLabel: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginBottom: 3,
  },
  className: {
    fontSize: 20,
    fontWeight: '800',
    color: Colors.text,
    letterSpacing: -0.3,
  },
  moreBtn: {
    padding: 4,
  },
  moreBtnText: {
    fontSize: 20,
    color: Colors.textSecondary,
    lineHeight: 24,
  },

  // Participation
  participationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  participationLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: Colors.textSecondary,
  },
  participationPct: {
    fontSize: 12,
    fontWeight: '700',
  },
  progressTrack: {
    height: 6,
    backgroundColor: '#F1F5F9',
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 14,
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
  },

  // Card Footer
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatarRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  miniAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Colors.white,
  },
  miniAvatarText: {
    fontSize: 12,
  },
  extraBadge: {
    marginLeft: 6,
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 10,
  },
  extraBadgeText: {
    fontSize: 11,
    fontWeight: '600',
    color: Colors.textSecondary,
  },
  xpTodayText: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.textSecondary,
  },

  // Add New Class
  addCard: {
    borderWidth: 1.5,
    borderColor: Colors.border,
    borderStyle: 'dashed',
    borderRadius: 18,
    paddingVertical: 28,
    alignItems: 'center',
    backgroundColor: Colors.white,
    gap: 10,
    marginBottom: 8,
  },
  addCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPlus: {
    fontSize: 24,
    color: Colors.textSecondary,
    lineHeight: 28,
    fontWeight: '300',
  },
  addText: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.text,
  },

  // FAB
  fab: {
    position: 'absolute',
    bottom: 28,
    right: 20,
    width: 52,
    height: 52,
    borderRadius: 26,
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
    fontSize: 24,
    fontWeight: '300',
    color: Colors.white,
    lineHeight: 28,
    marginTop: -2,
  },
});
