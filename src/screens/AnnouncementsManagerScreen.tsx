import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

type FilterTab = 'All Posts' | 'Scheduled' | 'Drafts' | 'Sent';

const FILTERS: FilterTab[] = ['All Posts', 'Scheduled', 'Drafts', 'Sent'];

const announcements = [
  {
    id: '1',
    type: 'Global Update',
    typeColor: '#006b5f',
    title: 'Annual Science Fair 2024',
    date: 'Sent Oct 12, 2023',
    dateIcon: 'calendar-today',
    audience: 'All Grades',
    audienceBg: 'rgba(16,185,129,0.2)',
    audienceColor: '#00422b',
    desc: 'Get ready for the most exciting scientific discovery event of the year! Students from all disciplines are invited to showcase their environmental projects...',
    urgent: false,
    draft: false,
  },
  {
    id: '2',
    type: 'Event Alert',
    typeColor: '#005ac2',
    title: 'Community Tree Planting Day',
    date: 'Scheduled: Oct 20, 2023',
    dateIcon: 'schedule',
    audience: 'Grade 10-12',
    audienceBg: 'rgba(113,161,255,0.2)',
    audienceColor: '#00367a',
    desc: 'Join us this Saturday as we partner with the City Council to plant 500 indigenous trees across the suburban park system.',
    urgent: false,
    draft: false,
  },
  {
    id: '3',
    type: 'Infrastructure',
    typeColor: '#006c49',
    title: 'New Sustainability Lab Opening',
    date: 'Sent Sep 30, 2023',
    dateIcon: 'calendar-month',
    audience: 'Faculty & Students',
    audienceBg: 'rgba(16,185,129,0.2)',
    audienceColor: '#00422b',
    desc: 'We are proud to unveil our new carbon-neutral research facility. This space will be open 24/7 for student-led research in renewable energy and biodiversity studies starting next Monday.',
    urgent: true,
    draft: false,
    featured: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkK8sYM29rI16yU-ibEg1X60eTE8owkvEjnIHDDwXn2m5bAK_IQ6H9os9P3QZFGzTdfaQhJO3Fyc4Fg4IAC4bbhvtkSQwb7SLJ8CSvjfSxWj3IuHi1HvjUn-SUAB_WNQSCSwy-luYgyr7L1nS0Jc38sZd4SBzYB5gQX82tvGyfTFxu_vOe_0DwDCN9vRvKT8xS5VsL8epOeCbzjUW58rbhZhkmlsiid_2sO3EABX-7Zrl50OpOK8D4Cc-yvDCpb3xU_WKHLdyv3Yms',
  },
  {
    id: '4',
    type: 'Draft',
    typeColor: 'rgba(60,74,66,0.4)',
    title: 'End of Term Picnic',
    date: 'Last modified 2h ago',
    dateIcon: 'edit-note',
    audience: 'All Grades',
    audienceBg: '#e7e8e9',
    audienceColor: 'rgba(60,74,66,0.6)',
    desc: "Mark your calendars for a day of fun, food, and eco-games at the end of the semester celebration. Don't forget your reusable water bottles!",
    urgent: false,
    draft: true,
  },
];

export default function AnnouncementsManagerScreen({ navigation }: any) {
  const [activeFilter, setActiveFilter] = useState<FilterTab>('All Posts');

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Icon name="eco" size={24} color="#006c49" />
          <Text style={styles.logoText}>ChonX</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.notifBtn}>
            <Icon name="notifications" size={24} color="#006c49" />
          </TouchableOpacity>
          <View style={styles.avatarContainer}>
            <Image
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvu8FHzJPoOkbQhRj_7FH5VvUlm8dPdA-b-j4uHHewlYjvzpByZhBW9Ccy1dusMhe4MVL44T4_NvocxDZ0jo9fGA-KW6zX2jDTrFTV-rfe3efdiwDOFtoRc2EUb3lblkVPayhZf52hnEF13ROoKfbfDzcZkdymGr7JcXdgFdlnS9lVUJjH0TF9FrEAgVGk5uiCKRQz8GwUHnsCYUeT1FqLBIim49MceEVyLI4h7enIpMzK4PVizU28EAJ7N8qxKIbDDEsbLjf8b1fY' }}
              style={styles.avatarImg}
            />
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header Section */}
        <View style={styles.pageHeaderRow}>
          <View style={styles.pageHeaderText}>
            <Text style={styles.pageTitle}>Announcements Manager</Text>
            <Text style={styles.pageSubtitle}>Manage and broadcast school-wide updates, grade-specific news, and urgent alerts to the ChonX community.</Text>
          </View>
          <TouchableOpacity style={styles.createBtn}>
            <Icon name="add" size={20} color="#ffffff" />
            <Text style={styles.createBtnText}>Create</Text>
          </TouchableOpacity>
        </View>

        {/* Filter Bar */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterBar}>
          {FILTERS.map((filter) => (
            <TouchableOpacity
              key={filter}
              style={[styles.filterChip, activeFilter === filter && styles.filterChipActive]}
              onPress={() => setActiveFilter(filter)}
            >
              <Text style={[styles.filterText, activeFilter === filter && styles.filterTextActive]}>
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Announcements Grid */}
        <View style={styles.grid}>
          {announcements.map((ann) => (
            <View
              key={ann.id}
              style={[
                styles.announcementCard,
                ann.featured && styles.featuredCard,
                ann.draft && styles.draftCard,
              ]}
            >
              {/* Featured card with image */}
              {ann.featured && ann.image && (
                <View style={styles.featuredImageRow}>
                  <Image source={{ uri: ann.image }} style={styles.featuredImage} />
                  <View style={styles.featuredContent}>
                    <View style={styles.cardTopRow}>
                      <View style={styles.cardTitleBlock}>
                        <View style={styles.urgentRow}>
                          {ann.urgent && (
                            <View style={styles.urgentBadge}>
                              <Text style={styles.urgentText}>Urgent</Text>
                            </View>
                          )}
                          <Text style={[styles.cardType, { color: ann.typeColor }]}>{ann.type.toUpperCase()}</Text>
                        </View>
                        <Text style={styles.cardTitle}>{ann.title}</Text>
                      </View>
                      <View style={styles.cardActionBtns}>
                        <TouchableOpacity style={styles.iconActionBtn}><Icon name="edit" size={20} color="#3c4a42" /></TouchableOpacity>
                        <TouchableOpacity style={styles.iconActionBtnRed}><Icon name="delete" size={20} color="#ba1a1a" /></TouchableOpacity>
                      </View>
                    </View>
                    <View style={styles.cardMeta}>
                      <View style={styles.metaItem}>
                        <Icon name={ann.dateIcon} size={14} color="#3c4a42" />
                        <Text style={styles.metaText}>{ann.date}</Text>
                      </View>
                      <View style={styles.metaItem}>
                        <Icon name="person-search" size={14} color="#3c4a42" />
                        <View style={[styles.audienceBadge, { backgroundColor: ann.audienceBg }]}>
                          <Text style={[styles.audienceText, { color: ann.audienceColor }]}>{ann.audience}</Text>
                        </View>
                      </View>
                    </View>
                    <Text style={[styles.cardDesc, ann.draft && styles.draftText]}>{ann.desc}</Text>
                    <View style={styles.cardActions}>
                      <TouchableOpacity style={styles.duplicateBtn}><Text style={styles.duplicateBtnText}>DUPLICATE</Text></TouchableOpacity>
                      <TouchableOpacity style={styles.resendBtnPrimary}><Text style={styles.resendBtnPrimaryText}>RESEND</Text></TouchableOpacity>
                    </View>
                  </View>
                </View>
              )}

              {/* Standard cards */}
              {!ann.featured && (
                <>
                  <View style={styles.cardTopRow}>
                    <View style={styles.cardTitleBlock}>
                      <Text style={[styles.cardType, { color: ann.typeColor }]}>{ann.type.toUpperCase()}</Text>
                      <Text style={[styles.cardTitle, ann.draft && styles.draftText]}>{ann.title}</Text>
                    </View>
                    <View style={styles.cardActionBtns}>
                      <TouchableOpacity style={styles.iconActionBtn}><Icon name="edit" size={20} color="#3c4a42" /></TouchableOpacity>
                      <TouchableOpacity style={styles.iconActionBtnRed}><Icon name="delete" size={20} color="#ba1a1a" /></TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.cardMeta}>
                    <View style={styles.metaItem}>
                      <Icon name={ann.dateIcon} size={14} color={ann.draft ? 'rgba(60,74,66,0.6)' : '#3c4a42'} />
                      <Text style={[styles.metaText, ann.draft && styles.draftText]}>{ann.date}</Text>
                    </View>
                    <View style={styles.metaItem}>
                      <Icon name="groups" size={14} color={ann.draft ? 'rgba(60,74,66,0.6)' : '#3c4a42'} />
                      <View style={[styles.audienceBadge, { backgroundColor: ann.audienceBg }]}>
                        <Text style={[styles.audienceText, { color: ann.audienceColor }]}>{ann.audience}</Text>
                      </View>
                    </View>
                  </View>
                  <Text style={[styles.cardDesc, ann.draft && styles.draftText]} numberOfLines={2}>{ann.desc}</Text>
                  <View style={styles.cardActions}>
                    <TouchableOpacity style={styles.duplicateBtn}><Text style={styles.duplicateBtnText}>DUPLICATE</Text></TouchableOpacity>
                    {ann.draft ? (
                      <TouchableOpacity style={styles.publishBtn}><Text style={styles.publishBtnText}>PUBLISH NOW</Text></TouchableOpacity>
                    ) : (
                      <TouchableOpacity style={styles.resendBtn}><Text style={styles.resendBtnText}>RESEND</Text></TouchableOpacity>
                    )}
                  </View>
                </>
              )}
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItemActive}><Icon name="home" size={24} color="#00422b" /><Text style={styles.navTextActive}>Home</Text></TouchableOpacity>
        <TouchableOpacity style={styles.navItem}><Icon name="leaderboard" size={24} color="#3c4a42" /><Text style={styles.navText}>Verify</Text></TouchableOpacity>
        <TouchableOpacity style={styles.navItem}><Icon name="emoji-events" size={24} color="#3c4a42" /><Text style={styles.navText}>Arena</Text></TouchableOpacity>
        <TouchableOpacity style={styles.navItem}><Icon name="person" size={24} color="#3c4a42" /><Text style={styles.navText}>Profile</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, height: 64, backgroundColor: 'rgba(248,249,250,0.8)', borderBottomWidth: 1, borderBottomColor: 'rgba(187,202,191,0.3)' },
  headerLeft: { flexDirection: 'row', alignItems: 'center' },
  logoText: { fontSize: 24, fontWeight: '800', color: '#006c49', marginLeft: 8 },
  headerRight: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  notifBtn: { padding: 8, borderRadius: 20 },
  avatarContainer: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#6df5e1', overflow: 'hidden' },
  avatarImg: { width: '100%', height: '100%' },
  scrollContent: { paddingHorizontal: 24, paddingTop: 24, paddingBottom: 120 },
  pageHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32, gap: 16 },
  pageHeaderText: { flex: 1 },
  pageTitle: { fontSize: 32, fontWeight: '700', color: '#191c1d', letterSpacing: -0.5, marginBottom: 8 },
  pageSubtitle: { fontSize: 16, color: '#3c4a42', lineHeight: 24 },
  createBtn: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#006c49', paddingHorizontal: 24, paddingVertical: 12, borderRadius: 12, gap: 8, shadowColor: '#006c49', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 8 },
  createBtnText: { fontSize: 16, fontWeight: '700', color: '#ffffff' },
  filterBar: { marginBottom: 24 },
  filterChip: { paddingHorizontal: 16, paddingVertical: 8, borderRadius: 24, backgroundColor: '#e7e8e9', marginRight: 12 },
  filterChipActive: { backgroundColor: '#006c49' },
  filterText: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 0.5 },
  filterTextActive: { color: '#ffffff' },
  grid: { gap: 16 },
  announcementCard: { backgroundColor: '#ffffff', borderRadius: 16, padding: 24, borderWidth: 1, borderColor: 'rgba(187,202,191,0.3)', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.04, shadowRadius: 8, gap: 16 },
  featuredCard: { backgroundColor: 'rgba(255,255,255,0.9)', borderColor: 'rgba(0,108,73,0.2)', borderWidth: 1 },
  draftCard: { opacity: 0.8 },
  featuredImageRow: { flexDirection: 'column', gap: 16 },
  featuredImage: { width: '100%', height: 160, borderRadius: 12 },
  featuredContent: { gap: 12 },
  cardTopRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  cardTitleBlock: { flex: 1, gap: 4 },
  urgentRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 4 },
  urgentBadge: { backgroundColor: '#006c49', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 6 },
  urgentText: { fontSize: 10, fontWeight: '700', color: '#ffffff' },
  cardType: { fontSize: 12, fontWeight: '700', letterSpacing: 1 },
  cardTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d' },
  draftText: { opacity: 0.6 },
  cardActionBtns: { flexDirection: 'row', gap: 4 },
  iconActionBtn: { padding: 8, borderRadius: 20 },
  iconActionBtnRed: { padding: 8, borderRadius: 20 },
  cardMeta: { flexDirection: 'row', flexWrap: 'wrap', gap: 16 },
  metaItem: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  metaText: { fontSize: 14, color: '#3c4a42' },
  audienceBadge: { paddingHorizontal: 8, paddingVertical: 2, borderRadius: 6 },
  audienceText: { fontSize: 10, fontWeight: '700', letterSpacing: 0.5 },
  cardDesc: { fontSize: 16, color: '#3c4a42', lineHeight: 24 },
  cardActions: { flexDirection: 'row', gap: 12, borderTopWidth: 1, borderTopColor: 'rgba(187,202,191,0.2)', paddingTop: 16 },
  duplicateBtn: { flex: 1, paddingVertical: 10, backgroundColor: '#e7e8e9', borderRadius: 12, alignItems: 'center' },
  duplicateBtnText: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 0.5 },
  resendBtn: { flex: 1, paddingVertical: 10, backgroundColor: '#6df5e1', borderRadius: 12, alignItems: 'center' },
  resendBtnText: { fontSize: 12, fontWeight: '700', color: '#006f64', letterSpacing: 0.5 },
  resendBtnPrimary: { flex: 1, paddingVertical: 10, backgroundColor: '#006c49', borderRadius: 12, alignItems: 'center' },
  resendBtnPrimaryText: { fontSize: 12, fontWeight: '700', color: '#ffffff', letterSpacing: 0.5 },
  publishBtn: { flex: 1, paddingVertical: 10, backgroundColor: 'rgba(0,108,73,0.2)', borderRadius: 12, alignItems: 'center' },
  publishBtnText: { fontSize: 12, fontWeight: '700', color: '#006c49', letterSpacing: 0.5 },
  bottomNav: { position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'rgba(248,249,250,0.9)', borderTopWidth: 1, borderTopColor: 'rgba(187,202,191,0.3)', paddingBottom: 20 },
  navItem: { alignItems: 'center', paddingHorizontal: 16 },
  navItemActive: { alignItems: 'center', paddingHorizontal: 16, paddingVertical: 6, backgroundColor: 'rgba(16,185,129,0.2)', borderRadius: 16 },
  navText: { fontSize: 12, fontWeight: '700', color: '#3c4a42', marginTop: 4 },
  navTextActive: { fontSize: 12, fontWeight: '700', color: '#00422b', marginTop: 4 },
});
