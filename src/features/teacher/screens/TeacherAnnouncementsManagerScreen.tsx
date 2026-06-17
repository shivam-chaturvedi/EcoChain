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
  navigation: NativeStackNavigationProp<RootStackParamList, 'TeacherAnnouncementsManager'>;
};

type FilterTab = 'All Posts' | 'Scheduled' | 'Drafts' | 'Sent';

type TagChip = { label: string; textColor: string; bgColor: string };

type Announcement = {
  id: string;
  typeLabel: string;
  typeLabelColor: string;
  title: string;
  titleMuted?: boolean;
  dateIcon: string;
  dateText: string;
  audienceChip: TagChip;
  audienceIcon: string;
  description: string;
  descriptionFull?: boolean;
  primaryBtn: { label: string; textColor: string; bgColor: string };
  hasImage?: boolean;
  imageBg?: string;
  urgencyChips?: TagChip[];
};

const ANNOUNCEMENTS: Announcement[] = [
  {
    id: '1',
    typeLabel: 'GLOBAL UPDATE',
    typeLabelColor: Colors.primaryDark,
    title: 'Annual Science Fair 2024',
    dateIcon: '📅',
    dateText: 'Sent Oct 12, 2023',
    audienceChip: { label: 'ALL GRADES', textColor: Colors.primaryDark, bgColor: '#DDF5EA' },
    audienceIcon: '',
    description: 'Get ready for the most exciting scientific discovery event of the yea...',
    primaryBtn: { label: 'RESEND', textColor: Colors.primaryDark, bgColor: '#A8D5C8' },
  },
  {
    id: '2',
    typeLabel: 'EVENT ALERT',
    typeLabelColor: '#2563EB',
    title: 'Community Tree Planting Day',
    dateIcon: '🕐',
    dateText: 'Scheduled: Oct 20, 2023',
    audienceChip: { label: 'GRADE 10-12', textColor: '#1D4ED8', bgColor: '#DBEAFE' },
    audienceIcon: '📍',
    description: 'Join us this Saturday as we partner with the City Council to plant 500...',
    primaryBtn: { label: 'RESEND', textColor: Colors.primaryDark, bgColor: '#A8D5C8' },
  },
  {
    id: '3',
    typeLabel: '',
    typeLabelColor: Colors.primaryDark,
    title: 'New Sustainability Lab Opening',
    dateIcon: '📅',
    dateText: 'Sent Sep 30, 2023',
    audienceChip: { label: 'FACULTY & STUDENTS', textColor: Colors.primaryDark, bgColor: '#DDF5EA' },
    audienceIcon: '👥',
    description:
      'We are proud to unveil our new carbon-neutral research facility. This space will be open 24/7 for student-led research in renewable energy and biodiversity studies starting next Monday.',
    descriptionFull: true,
    primaryBtn: { label: 'RESEND', textColor: Colors.white, bgColor: Colors.primaryDark },
    hasImage: true,
    imageBg: '#0D2B1A',
    urgencyChips: [
      { label: 'URGENT', textColor: Colors.white, bgColor: '#F97316' },
      { label: 'INFRASTRUCTURE', textColor: Colors.white, bgColor: '#6B7280' },
    ],
  },
  {
    id: '4',
    typeLabel: 'DRAFT',
    typeLabelColor: Colors.textLight,
    title: 'End of Term Picnic',
    titleMuted: true,
    dateIcon: '🕐',
    dateText: 'Last modified 2h ago',
    audienceChip: { label: 'ALL GRADES', textColor: Colors.textSecondary, bgColor: '#F3F4F6' },
    audienceIcon: '📍',
    description: 'Mark your calendars for a day of fun, food, and eco-games at the end of t...',
    primaryBtn: { label: 'PUBLISH NOW', textColor: Colors.white, bgColor: Colors.primaryLight },
  },
];

const TABS: FilterTab[] = ['All Posts', 'Scheduled', 'Drafts', 'Sent'];

export default function TeacherAnnouncementsManagerScreen({ navigation }: Props) {
  const [activeTab, setActiveTab] = useState<FilterTab>('All Posts');

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />

      {/* ── Header ── */}
      <View style={styles.header}>
        <View style={styles.brandRow}>
          <View style={styles.logoCircle}>
            <Text style={styles.logoEmoji}>🍃</Text>
          </View>
          <Text style={styles.brandText}>ChonX</Text>
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

        {/* ── Title block ── */}
        <View style={styles.titleBlock}>
          <Text style={styles.pageTitle}>Announcements{'\n'}Manager</Text>
          <Text style={styles.pageSubtitle}>
            Manage and broadcast school-wide updates, grade-specific news, and urgent alerts to the
            ChonX community.
          </Text>
        </View>

        {/* ── Create button ── */}
        <TouchableOpacity
          style={styles.createBtn}
          activeOpacity={0.85}
          onPress={() => navigation.navigate('TeacherCreateAnnouncement')}>
          <Text style={styles.createBtnText}>+  Create</Text>
        </TouchableOpacity>

        {/* ── Filter tabs ── */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabsRow}>
          {TABS.map(tab => (
            <TouchableOpacity
              key={tab}
              style={[styles.tabPill, activeTab === tab && styles.tabPillActive]}
              onPress={() => setActiveTab(tab)}
              activeOpacity={0.75}>
              <Text style={[styles.tabPillText, activeTab === tab && styles.tabPillTextActive]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* ── Announcement cards ── */}
        <View style={styles.cards}>
          {ANNOUNCEMENTS.map(a => (
            <AnnouncementCard key={a.id} item={a} />
          ))}
        </View>

        <View style={{ height: 32 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

function AnnouncementCard({ item: a }: { item: Announcement }) {
  return (
    <View style={cardStyles.card}>
      {/* Optional top image */}
      {a.hasImage && (
        <View style={[cardStyles.topImage, { backgroundColor: a.imageBg }]}>
          <Text style={cardStyles.topImageEmoji}>🌿</Text>
          <View style={cardStyles.topImageOverlay} />
        </View>
      )}

      <View style={cardStyles.body}>
        {/* Type label + edit/delete row */}
        <View style={cardStyles.labelRow}>
          <View style={cardStyles.labelLeft}>
            {a.urgencyChips
              ? a.urgencyChips.map(chip => (
                  <View key={chip.label} style={[cardStyles.chip, { backgroundColor: chip.bgColor }]}>
                    <Text style={[cardStyles.chipText, { color: chip.textColor }]}>{chip.label}</Text>
                  </View>
                ))
              : a.typeLabel
              ? (
                  <Text style={[cardStyles.typeLabel, { color: a.typeLabelColor }]}>
                    {a.typeLabel}
                  </Text>
                )
              : null}
          </View>
          <View style={cardStyles.iconRow}>
            <TouchableOpacity style={cardStyles.iconBtn} activeOpacity={0.7}>
              <Text style={cardStyles.editIcon}>✏️</Text>
            </TouchableOpacity>
            <TouchableOpacity style={cardStyles.iconBtn} activeOpacity={0.7}>
              <Text style={cardStyles.deleteIcon}>🗑️</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Title */}
        <Text style={[cardStyles.title, a.titleMuted && cardStyles.titleMuted]}>{a.title}</Text>

        {/* Date */}
        <View style={cardStyles.metaRow}>
          <Text style={cardStyles.metaIcon}>{a.dateIcon}</Text>
          <Text style={cardStyles.metaText}>{a.dateText}</Text>
          {/* Inline audience chip (for cards 1 & 4) */}
          {!a.audienceIcon && (
            <View style={[cardStyles.audienceChip, { backgroundColor: a.audienceChip.bgColor }]}>
              <Text style={[cardStyles.audienceChipText, { color: a.audienceChip.textColor }]}>
                {a.audienceChip.label}
              </Text>
            </View>
          )}
        </View>

        {/* Separate audience row (for cards with icon) */}
        {!!a.audienceIcon && (
          <View style={[cardStyles.metaRow, { marginTop: 4 }]}>
            <Text style={cardStyles.metaIcon}>{a.audienceIcon}</Text>
            <View style={[cardStyles.audienceChip, { backgroundColor: a.audienceChip.bgColor }]}>
              <Text style={[cardStyles.audienceChipText, { color: a.audienceChip.textColor }]}>
                {a.audienceChip.label}
              </Text>
            </View>
          </View>
        )}

        {/* Description */}
        <Text
          style={cardStyles.description}
          numberOfLines={a.descriptionFull ? undefined : 2}>
          {a.description}
        </Text>

        {/* Action buttons */}
        <View style={cardStyles.actionsRow}>
          <TouchableOpacity style={cardStyles.duplicateBtn} activeOpacity={0.75}>
            <Text style={cardStyles.duplicateBtnText}>DUPLICATE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[cardStyles.primaryBtn, { backgroundColor: a.primaryBtn.bgColor }]}
            activeOpacity={0.85}>
            <Text style={[cardStyles.primaryBtnText, { color: a.primaryBtn.textColor }]}>
              {a.primaryBtn.label}
            </Text>
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
    paddingVertical: 12,
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
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#DDF5EA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoEmoji: { fontSize: 15 },
  brandText: {
    fontSize: 18,
    fontWeight: '900',
    color: Colors.primaryDark,
    letterSpacing: -0.4,
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
  scroll: { paddingBottom: 24 },

  // Title
  titleBlock: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: '900',
    color: Colors.text,
    letterSpacing: -0.7,
    lineHeight: 34,
    marginBottom: 8,
  },
  pageSubtitle: {
    fontSize: 13,
    color: Colors.textSecondary,
    lineHeight: 20,
  },

  // Create button
  createBtn: {
    marginHorizontal: 16,
    backgroundColor: Colors.primaryDark,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 16,
  },
  createBtnText: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.white,
    letterSpacing: 0.3,
  },

  // Filter tabs
  tabsRow: {
    paddingHorizontal: 16,
    gap: 8,
    marginBottom: 16,
  },
  tabPill: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  tabPillActive: {
    backgroundColor: Colors.primaryDark,
    borderColor: Colors.primaryDark,
  },
  tabPillText: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.textSecondary,
  },
  tabPillTextActive: {
    color: Colors.white,
  },

  // Cards
  cards: {
    paddingHorizontal: 16,
    gap: 14,
  },
});

const cardStyles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: 18,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 1,
    borderWidth: 1,
    borderColor: Colors.border,
  },

  // Top image
  topImage: {
    width: '100%',
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topImageEmoji: {
    fontSize: 72,
    opacity: 0.35,
  },
  topImageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,30,10,0.5)',
  },

  // Body
  body: {
    padding: 14,
    gap: 8,
  },

  // Label row
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  labelLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    flexWrap: 'wrap',
  },
  typeLabel: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  chip: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
  },
  chipText: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  iconRow: {
    flexDirection: 'row',
    gap: 4,
  },
  iconBtn: {
    padding: 4,
  },
  editIcon: { fontSize: 14 },
  deleteIcon: { fontSize: 14 },

  // Title
  title: {
    fontSize: 18,
    fontWeight: '800',
    color: Colors.text,
    letterSpacing: -0.3,
    lineHeight: 24,
  },
  titleMuted: {
    color: '#9CA3AF',
  },

  // Meta row
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  metaIcon: { fontSize: 13 },
  metaText: {
    fontSize: 12,
    color: Colors.textSecondary,
    flex: 1,
  },
  audienceChip: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
  },
  audienceChipText: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.5,
  },

  // Description
  description: {
    fontSize: 13,
    color: Colors.textSecondary,
    lineHeight: 19,
  },

  // Buttons
  actionsRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 4,
  },
  duplicateBtn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  duplicateBtnText: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.textSecondary,
    letterSpacing: 0.5,
  },
  primaryBtn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  primaryBtnText: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});
