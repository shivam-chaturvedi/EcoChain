import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  Modal,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const campaigns = [
  {
    id: '1',
    tag: 'High Impact',
    tagBg: '#6df5e1',
    tagColor: '#006f64',
    title: 'Plastic-Free Week',
    goal: 'Goal: Reduce cafeteria waste by 40%',
    progress: 72,
    icon: 'eco',
    iconColor: '#006c49',
    iconBg: 'rgba(16, 185, 129, 0.2)',
  },
  {
    id: '2',
    tag: 'Scholastic',
    tagBg: '#d8e2ff',
    tagColor: '#004395',
    title: 'Annual Book Drive',
    goal: 'Collecting for the local community library',
    progress: 34,
    icon: 'auto-stories',
    iconColor: '#005ac2',
    iconBg: 'rgba(113, 161, 255, 0.2)',
  },
];

const announcements = [
  { id: '1', grade: 'GRADE 10', gradeColor: '#006b5f', time: '2h ago', title: 'Lab Safety Protocols Update', desc: 'Please ensure all students have signed the new safety waivers before Monday...' },
  { id: '2', grade: 'SCHOOL WIDE', gradeColor: '#005ac2', time: 'Yesterday', title: 'Winter Formal Tickets', desc: 'Early bird tickets are now available through the student portal.' },
  { id: '3', grade: 'FACULTY', gradeColor: '#006c49', time: 'Nov 12', title: 'Staff Meeting Agenda', desc: "The agenda for Thursday's pedagogical council has been posted." },
];

const events = [
  {
    id: '1',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2Mgd_OVx_aWx0bMThmqrCSpyZltfmDz6126OsqT0-kZjapbYPy0FBpAGKQG03ltBFR5vS1OcrbbisMY5Q5gpOtkq3MfSp0coijNcAxiXDYJWoLdoArOdmh6aJO7tgGGr_FvHu26vD-Xcpk8l7iVNrceZvq2QImh7kIDkP1bhtOq9MzgB8eTe0EKLn2DRLe1hxPUULRbKGpMxxK_ZScBNh6pWPy-wQzX1n2hYoxBGwOTBbWQrTbpxZH7WDcyyNnZS-LppAuoGjiJtv',
    date: 'NOV 24 • 10:00 AM',
    title: 'Climate Action Workshop',
    location: 'Main Hall',
    capacity: '45/100 CAPACITY',
    capacityColor: '#006b5f',
  },
  {
    id: '2',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-q9VwkhLPHmL6tTCpUr1IoQxy2e2gBTcjoMUZFBngXfbf-qmRiddqoW8T51W3QI0iqNoIjdy17_aUkna0-PhsVy7aWH-9OsA7eZc6ti0hFs_T_WHiiINbVKyzI__Yfwzhh7GD_PJzB0EMyqlYhIQDhqkd0hm_6Ajai2XxKJAXs6JkEnThMvf3FfadktB8fzqhofYFuJ3J-LX9kmyfL3mOdUJSqIh2k9BVQTxQpwihBHhfoZZqe9oIHMlDQDQUxTXcuyJHsl1_mTtw',
    date: 'NOV 28 • 09:00 AM',
    title: 'Community Tree Planting',
    location: 'Greenbelt Park',
    capacity: 'FULL CAPACITY',
    capacityColor: '#ba1a1a',
  },
];

export default function AnnouncementsEventsScreen({ navigation }: any) {
  const [announcementModal, setAnnouncementModal] = useState(false);
  const [eventModal, setEventModal] = useState(false);
  const [announcementTitle, setAnnouncementTitle] = useState('');
  const [announcementDesc, setAnnouncementDesc] = useState('');
  const [eventName, setEventName] = useState('');
  const [eventLocation, setEventLocation] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.avatarContainer}>
            <Image
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsFfq76ZTIueUkN5dlGF6JnNEUKQl_ptoSbQV1asl65f1yaAyV3e5-uyXMvC2i9Zqf9naasuujq6Xde_gYFjcyqJZucBQd83lbKiXOTUHwnGoqwvkdc-TicQM9DF8NtyfN9JEGdCghBvc-gfm_ssU-UwH1y3Dt9j1SIL9-ITZcqWBxod516IvG9dqMFKmO5OMJI0a-cwydDe_JlCW46N_phfjgDhjesgo_FrC83sIGCOxtD3fMDaOfCSjYbg_3Kw4bF0wm2yb8K0xF' }}
              style={styles.avatarImg}
            />
          </View>
          <Text style={styles.logoText}>ChonX</Text>
        </View>
        <TouchableOpacity style={styles.notifBtn}>
          <Icon name="notifications" size={24} color="#3c4a42" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Page Header */}
        <View style={styles.pageHeader}>
          <View>
            <Text style={styles.managementLabel}>MANAGEMENT DASHBOARD</Text>
            <Text style={styles.pageTitle}>Announcements & Events</Text>
          </View>
          <View style={styles.actionBtns}>
            <TouchableOpacity style={styles.eventBtn} onPress={() => setEventModal(true)}>
              <Icon name="event" size={18} color="#006c49" />
              <Text style={styles.eventBtnText}>New Event</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.announcementBtn} onPress={() => setAnnouncementModal(true)}>
              <Icon name="campaign" size={18} color="#ffffff" />
              <Text style={styles.announcementBtnText}>New Announcement</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Active Campaigns */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Active Campaigns</Text>
            <TouchableOpacity><Text style={styles.viewAllText}>View All</Text></TouchableOpacity>
          </View>
          <View style={styles.campaignsGrid}>
            {campaigns.map((c) => (
              <View key={c.id} style={styles.campaignCard}>
                <View style={styles.campaignTagContainer}>
                  <View style={[styles.campaignTag, { backgroundColor: c.tagBg }]}>
                    <Text style={[styles.campaignTagText, { color: c.tagColor }]}>{c.tag}</Text>
                  </View>
                </View>
                <View style={[styles.campaignIconCircle, { backgroundColor: c.iconBg }]}>
                  <Icon name={c.icon} size={24} color={c.iconColor} />
                </View>
                <Text style={styles.campaignTitle}>{c.title}</Text>
                <Text style={styles.campaignGoal}>{c.goal}</Text>
                <View style={styles.progressSection}>
                  <View style={styles.progressLabels}>
                    <Text style={styles.progressLabel}>PROGRESS</Text>
                    <Text style={styles.progressLabel}>{c.progress}%</Text>
                  </View>
                  <View style={styles.progressTrack}>
                    <View style={[styles.progressFill, { width: `${c.progress}%`, backgroundColor: c.id === '1' ? '#006c49' : '#005ac2' }]} />
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Recent Announcements */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent</Text>
            <TouchableOpacity style={styles.moreBtn}>
              <Icon name="more-horiz" size={20} color="#3c4a42" />
            </TouchableOpacity>
          </View>
          <View style={styles.announcementsList}>
            {announcements.map((a) => (
              <TouchableOpacity key={a.id} style={styles.announcementItem} activeOpacity={0.8}>
                <View style={styles.announcementItemHeader}>
                  <Text style={[styles.gradeLabel, { color: a.gradeColor }]}>{a.grade}</Text>
                  <Text style={styles.timeLabel}>{a.time}</Text>
                </View>
                <Text style={styles.announcementTitle}>{a.title}</Text>
                <Text style={styles.announcementDesc} numberOfLines={2}>{a.desc}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Upcoming Events */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Upcoming Events</Text>
            <View style={styles.arrowBtns}>
              <TouchableOpacity style={styles.arrowBtn}><Icon name="chevron-left" size={20} color="#3c4a42" /></TouchableOpacity>
              <TouchableOpacity style={styles.arrowBtn}><Icon name="chevron-right" size={20} color="#3c4a42" /></TouchableOpacity>
            </View>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.eventsScroll}>
            {events.map((event) => (
              <View key={event.id} style={styles.eventCard}>
                <View style={styles.eventImageContainer}>
                  <Image source={{ uri: event.image }} style={styles.eventImage} />
                  <View style={styles.eventImageOverlay} />
                  <View style={styles.eventDateBadge}>
                    <Icon name="schedule" size={12} color="#ffffff" />
                    <Text style={styles.eventDateText}>{event.date}</Text>
                  </View>
                </View>
                <View style={styles.eventCardBody}>
                  <Text style={styles.eventTitle}>{event.title}</Text>
                  <View style={styles.eventLocation}>
                    <Icon name="location-on" size={16} color="#3c4a42" />
                    <Text style={styles.eventLocationText}>{event.location}</Text>
                  </View>
                  <View style={styles.eventFooter}>
                    <View style={styles.avatarsRow}>
                      {[...Array(3)].map((_, i) => (
                        <View key={i} style={[styles.miniAvatar, { backgroundColor: ['#cbd5e1', '#94a3b8', '#64748b'][i] }]} />
                      ))}
                    </View>
                    <Text style={[styles.capacityText, { color: event.capacityColor }]}>{event.capacity}</Text>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}><Icon name="home" size={24} color="#3c4a42" /><Text style={styles.navText}>Home</Text></TouchableOpacity>
        <TouchableOpacity style={styles.navItemActive}><Icon name="eco" size={24} color="#00422b" /><Text style={styles.navTextActive}>Impact</Text></TouchableOpacity>
        <TouchableOpacity style={styles.navItem}><Icon name="workspace-premium" size={24} color="#3c4a42" /><Text style={styles.navText}>Arena</Text></TouchableOpacity>
        <TouchableOpacity style={styles.navItem}><Icon name="person" size={24} color="#3c4a42" /><Text style={styles.navText}>Profile</Text></TouchableOpacity>
      </View>

      {/* Announcement Modal */}
      <Modal visible={announcementModal} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <View style={styles.modalHeader}>
              <Text style={[styles.modalTitle, { color: '#006c49' }]}>New Announcement</Text>
              <TouchableOpacity onPress={() => setAnnouncementModal(false)}>
                <Icon name="close" size={24} color="#3c4a42" />
              </TouchableOpacity>
            </View>
            <Text style={styles.modalLabel}>TITLE</Text>
            <TextInput style={styles.modalInput} placeholder="Enter announcement title..." placeholderTextColor="#6c7a71" value={announcementTitle} onChangeText={setAnnouncementTitle} />
            <Text style={styles.modalLabel}>DESCRIPTION</Text>
            <TextInput style={[styles.modalInput, styles.modalTextarea]} placeholder="Write your message here..." placeholderTextColor="#6c7a71" multiline numberOfLines={4} value={announcementDesc} onChangeText={setAnnouncementDesc} />
            <View style={styles.modalActions}>
              <TouchableOpacity style={styles.cancelBtn} onPress={() => setAnnouncementModal(false)}>
                <Text style={styles.cancelBtnText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.submitBtn} onPress={() => setAnnouncementModal(false)}>
                <Text style={styles.submitBtnText}>Post Announcement</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Event Modal */}
      <Modal visible={eventModal} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <View style={styles.modalHeader}>
              <Text style={[styles.modalTitle, { color: '#006b5f' }]}>Schedule New Event</Text>
              <TouchableOpacity onPress={() => setEventModal(false)}>
                <Icon name="close" size={24} color="#3c4a42" />
              </TouchableOpacity>
            </View>
            <Text style={styles.modalLabel}>EVENT NAME</Text>
            <TextInput style={styles.modalInput} placeholder="e.g., Beach Cleanup Day" placeholderTextColor="#6c7a71" value={eventName} onChangeText={setEventName} />
            <Text style={styles.modalLabel}>LOCATION</Text>
            <TextInput style={styles.modalInput} placeholder="Where is it?" placeholderTextColor="#6c7a71" value={eventLocation} onChangeText={setEventLocation} />
            <View style={styles.modalActions}>
              <TouchableOpacity style={styles.cancelBtn} onPress={() => setEventModal(false)}>
                <Text style={styles.cancelBtnText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.submitBtn, { backgroundColor: '#006b5f' }]} onPress={() => setEventModal(false)}>
                <Text style={styles.submitBtnText}>Create Event</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, height: 64, backgroundColor: 'rgba(248,249,250,0.8)', borderBottomWidth: 1, borderBottomColor: 'rgba(187,202,191,0.3)' },
  headerLeft: { flexDirection: 'row', alignItems: 'center' },
  avatarContainer: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#6df5e1', overflow: 'hidden', marginRight: 12 },
  avatarImg: { width: '100%', height: '100%' },
  logoText: { fontSize: 24, fontWeight: '800', color: '#006c49' },
  notifBtn: { padding: 8, borderRadius: 20 },
  scrollContent: { paddingHorizontal: 24, paddingTop: 24, paddingBottom: 120 },
  pageHeader: { marginBottom: 32 },
  managementLabel: { fontSize: 12, fontWeight: '700', color: '#006b5f', letterSpacing: 1, marginBottom: 4 },
  pageTitle: { fontSize: 32, fontWeight: '700', color: '#191c1d', letterSpacing: -0.5, marginBottom: 16 },
  actionBtns: { flexDirection: 'row', gap: 12, flexWrap: 'wrap' },
  eventBtn: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#e7e8e9', paddingHorizontal: 16, paddingVertical: 12, borderRadius: 12, gap: 8 },
  eventBtnText: { fontSize: 16, fontWeight: '600', color: '#006c49' },
  announcementBtn: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#006c49', paddingHorizontal: 16, paddingVertical: 12, borderRadius: 12, gap: 8, shadowColor: '#006c49', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 8 },
  announcementBtnText: { fontSize: 16, fontWeight: '600', color: '#ffffff' },
  sectionContainer: { marginBottom: 32 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  sectionTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d' },
  viewAllText: { fontSize: 12, fontWeight: '700', color: '#006c49', letterSpacing: 0.5 },
  moreBtn: { padding: 4, borderRadius: 12 },
  campaignsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 16 },
  campaignCard: { width: '47%', backgroundColor: '#ffffff', borderRadius: 16, padding: 20, borderWidth: 1, borderColor: 'rgba(187,202,191,0.3)', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 8 },
  campaignTagContainer: { alignItems: 'flex-end', marginBottom: 16 },
  campaignTag: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
  campaignTagText: { fontSize: 10, fontWeight: '700', letterSpacing: 0.5 },
  campaignIconCircle: { width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center', marginBottom: 12 },
  campaignTitle: { fontSize: 18, fontWeight: '700', color: '#191c1d', marginBottom: 4 },
  campaignGoal: { fontSize: 14, color: '#3c4a42', marginBottom: 16 },
  progressSection: { marginTop: 'auto' as any },
  progressLabels: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 },
  progressLabel: { fontSize: 10, fontWeight: '700', color: '#6c7a71', letterSpacing: 0.5 },
  progressTrack: { height: 8, backgroundColor: '#e1e3e4', borderRadius: 4, overflow: 'hidden' },
  progressFill: { height: '100%', borderRadius: 4 },
  announcementsList: { backgroundColor: '#f3f4f5', borderRadius: 16, padding: 12, gap: 8 },
  announcementItem: { backgroundColor: '#ffffff', borderRadius: 12, padding: 16, borderWidth: 1, borderColor: 'rgba(187,202,191,0.2)' },
  announcementItemHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 },
  gradeLabel: { fontSize: 10, fontWeight: '700', letterSpacing: 1 },
  timeLabel: { fontSize: 10, color: '#6c7a71' },
  announcementTitle: { fontSize: 14, fontWeight: '700', color: '#191c1d', marginBottom: 4 },
  announcementDesc: { fontSize: 12, color: '#3c4a42', lineHeight: 18 },
  arrowBtns: { flexDirection: 'row', gap: 4 },
  arrowBtn: { width: 36, height: 36, borderRadius: 18, borderWidth: 1, borderColor: 'rgba(187,202,191,0.3)', alignItems: 'center', justifyContent: 'center' },
  eventsScroll: { marginHorizontal: -4 },
  eventCard: { width: 300, borderRadius: 16, backgroundColor: '#ffffff', borderWidth: 1, borderColor: 'rgba(187,202,191,0.3)', marginHorizontal: 8, overflow: 'hidden', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 8 },
  eventImageContainer: { height: 128, position: 'relative' },
  eventImage: { width: '100%', height: '100%' },
  eventImageOverlay: { position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0,0,0,0.5)' },
  eventDateBadge: { position: 'absolute', bottom: 8, left: 12, flexDirection: 'row', alignItems: 'center', gap: 4 },
  eventDateText: { fontSize: 10, fontWeight: '700', color: '#ffffff' },
  eventCardBody: { padding: 16 },
  eventTitle: { fontSize: 18, fontWeight: '700', color: '#191c1d', marginBottom: 8 },
  eventLocation: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  eventLocationText: { fontSize: 14, color: '#3c4a42', marginLeft: 4 },
  eventFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderTopWidth: 1, borderTopColor: 'rgba(187,202,191,0.2)', paddingTop: 12 },
  avatarsRow: { flexDirection: 'row' },
  miniAvatar: { width: 24, height: 24, borderRadius: 12, borderWidth: 2, borderColor: '#ffffff', marginLeft: -6 },
  capacityText: { fontSize: 10, fontWeight: '700', letterSpacing: 0.5 },
  bottomNav: { position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'rgba(248,249,250,0.9)', borderTopWidth: 1, borderTopColor: 'rgba(187,202,191,0.3)', paddingBottom: 20 },
  navItem: { alignItems: 'center', paddingHorizontal: 16 },
  navItemActive: { alignItems: 'center', paddingHorizontal: 16, paddingVertical: 6, backgroundColor: 'rgba(16,185,129,0.2)', borderRadius: 16 },
  navText: { fontSize: 12, fontWeight: '700', color: '#3c4a42', marginTop: 4 },
  navTextActive: { fontSize: 12, fontWeight: '700', color: '#00422b', marginTop: 4 },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', alignItems: 'center', justifyContent: 'center', padding: 24 },
  modalCard: { width: '100%', backgroundColor: '#f8f9fa', borderRadius: 16, padding: 32, maxHeight: '80%' },
  modalHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 },
  modalTitle: { fontSize: 24, fontWeight: '600' },
  modalLabel: { fontSize: 12, fontWeight: '700', color: '#6c7a71', letterSpacing: 0.5, marginBottom: 8 },
  modalInput: { backgroundColor: '#f3f4f5', borderRadius: 12, paddingHorizontal: 16, paddingVertical: 12, fontSize: 16, color: '#191c1d', marginBottom: 20 },
  modalTextarea: { height: 100, textAlignVertical: 'top' },
  modalActions: { flexDirection: 'row', justifyContent: 'flex-end', gap: 12, marginTop: 8 },
  cancelBtn: { paddingHorizontal: 24, paddingVertical: 12 },
  cancelBtnText: { fontSize: 16, fontWeight: '700', color: '#3c4a42' },
  submitBtn: { backgroundColor: '#006c49', paddingHorizontal: 24, paddingVertical: 12, borderRadius: 12 },
  submitBtnText: { fontSize: 16, fontWeight: '700', color: '#ffffff' },
});
