import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const NOTIFICATIONS = [
  {
    id: 1,
    type: 'System Updates',
    time: '2m ago',
    title: 'New Security Patch v4.2',
    desc: 'All coordinator accounts have been updated with enhanced biometric verification protocols.',
    icon: 'settings',
    color: '#005ac2',
    bg: 'rgba(113, 161, 255, 0.2)',
    category: 'system'
  },
  {
    id: 2,
    type: 'Milestones',
    time: '1h ago',
    title: 'Zero Waste Badge Earned!',
    desc: 'Oakwood High has officially reduced plastic waste by 95% this semester. Incredible work!',
    icon: 'check-circle',
    color: '#006c49',
    bg: 'rgba(16, 185, 129, 0.2)',
    category: 'milestones'
  },
  {
    id: 3,
    type: 'Student Achievements',
    time: '3h ago',
    title: 'Top Performer: Leo Vance',
    desc: "Leo has completed all 5 'Water Conservation' challenges with a perfect score.",
    icon: 'workspace-premium',
    color: '#006f64',
    bg: 'rgba(109, 245, 225, 0.3)',
    category: 'students'
  },
  {
    id: 4,
    type: 'Initiatives',
    time: '5h ago',
    title: 'Community Garden Kickoff',
    desc: 'Phase 1 of the vertical gardening initiative starts tomorrow in the West Quad.',
    icon: 'park', // substituted potted_plant with park
    color: '#006c49',
    bg: 'rgba(16, 185, 129, 0.2)',
    category: 'initiatives'
  },
  {
    id: 5,
    type: 'Teacher Actions',
    time: 'Yesterday',
    title: 'Reports Due: Ms. Halloway',
    desc: 'Teacher Ms. Halloway has submitted the monthly sustainability report for review.',
    icon: 'school',
    color: '#3c4a42',
    bg: '#e7e8e9',
    category: 'teachers'
  },
];

const TABS = [
  { id: 'all', label: 'All' },
  { id: 'system', label: 'System Updates' },
  { id: 'initiatives', label: 'Initiatives' },
  { id: 'milestones', label: 'Milestones' },
  { id: 'teachers', label: 'Teacher Actions' },
  { id: 'students', label: 'Student Achievements' },
];

export default function NotificationsCenterScreen({ navigation }: any) {
  const [activeTab, setActiveTab] = useState('all');

  const filteredNotifs = NOTIFICATIONS.filter(n => activeTab === 'all' || n.category === activeTab);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Icon name="eco" size={24} color="#006c49" />
          <Text style={styles.logoText}>EcoSchools Admin</Text>
        </View>
        <TouchableOpacity style={styles.notifBtn}>
          <Icon name="notifications" size={24} color="#006c49" />
          <View style={styles.notifBadge} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        <View style={styles.titleSection}>
          <Text style={styles.title}>Notification Center</Text>
          <Text style={styles.subtitle}>Stay updated with your school's ecological progress.</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabsContainer} contentContainerStyle={styles.tabsContent}>
          {TABS.map(tab => (
            <TouchableOpacity
              key={tab.id}
              style={[styles.tabBtn, activeTab === tab.id && styles.tabBtnActive]}
              onPress={() => setActiveTab(tab.id)}
            >
              <Text style={[styles.tabText, activeTab === tab.id && styles.tabTextActive]}>{tab.label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.list}>
          {filteredNotifs.map(notif => (
            <TouchableOpacity key={notif.id} style={styles.card}>
              <View style={[styles.iconBg, { backgroundColor: notif.bg }]}>
                <Icon name={notif.icon} size={24} color={notif.color} />
              </View>
              <View style={styles.cardContent}>
                <View style={styles.cardHeader}>
                  <Text style={[styles.cardType, { color: notif.color }]}>{notif.type}</Text>
                  <Text style={styles.cardTime}>{notif.time}</Text>
                </View>
                <Text style={styles.cardTitle}>{notif.title}</Text>
                <Text style={styles.cardDesc}>{notif.desc}</Text>
              </View>
            </TouchableOpacity>
          ))}

          {activeTab === 'all' && (
            <View style={styles.promoCard}>
              <View style={styles.promoContent}>
                <Text style={styles.promoTitle}>Weekly Impact</Text>
                <Text style={styles.promoDesc}>Your school saved 4,200 liters of water this week.</Text>
                <TouchableOpacity style={styles.promoBtn}>
                  <Text style={styles.promoBtnText}>View Detailed Report</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.promoImgContainer}>
                <Image 
                  source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1cFCWkK0j0cBjQ5xlqvPBVsgWUaxHXiiS1ED1dM4FhCCTQnlnBBvAUMIVu3xCbRtAVn49xP17JmixMS-35z5fLzctkolDL5Zq6F8U-U_fgqB9pC1X78nS2koes2LdOmIySkzKULtd5L6H7745EUadsgQP6QKMJeRO9KnY7nLDxFJZRE59nBsT9JkWAs9c9HfjWxFEpx7-qyC14zI0wVL0R_E0yiCNR2ccEFpTNad3-_HWBChRkffPg7dIqHJCWq-ei_lcYj3Fq6DF'}}
                  style={styles.promoImg}
                />
              </View>
            </View>
          )}

        </View>
      </ScrollView>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <View style={styles.navItem}>
          <Icon name="dashboard" size={24} color="#3c4a42" />
          <Text style={styles.navText}>Dashboard</Text>
        </View>
        <View style={styles.navItem}>
          <Icon name="park" size={24} color="#3c4a42" />
          <Text style={styles.navText}>Initiatives</Text>
        </View>
        <View style={styles.navItemActive}>
          <Icon name="analytics" size={24} color="#00422b" />
          <Text style={styles.navTextActive}>Analytics</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  header: {
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    backgroundColor: 'rgba(248, 249, 250, 0.8)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(108, 122, 113, 0.3)',
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center' },
  logoText: {
    fontSize: 24,
    fontWeight: '800',
    color: '#006c49',
    marginLeft: 8,
  },
  notifBtn: { position: 'relative' },
  notifBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ba1a1a',
    borderWidth: 2,
    borderColor: '#f8f9fa',
  },
  container: { flex: 1 },
  scrollContent: { padding: 24, paddingBottom: 100 },
  titleSection: { marginBottom: 32 },
  title: { fontSize: 24, fontWeight: '700', color: '#191c1d', marginBottom: 8 },
  subtitle: { fontSize: 16, color: '#3c4a42' },
  tabsContainer: { marginBottom: 24 },
  tabsContent: { paddingRight: 24, gap: 12 },
  tabBtn: {
    backgroundColor: '#edeeef',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
  },
  tabBtnActive: { backgroundColor: '#10b981' },
  tabText: { fontSize: 12, fontWeight: '700', color: '#3c4a42' },
  tabTextActive: { color: '#00422b' },
  list: { gap: 16 },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  iconBg: { width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center' },
  cardContent: { flex: 1 },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 },
  cardType: { fontSize: 12, fontWeight: '700' },
  cardTime: { fontSize: 10, fontWeight: '700', color: '#3c4a42', opacity: 0.6, textTransform: 'uppercase' },
  cardTitle: { fontSize: 16, fontWeight: '600', color: '#191c1d', marginBottom: 4 },
  cardDesc: { fontSize: 16, color: '#3c4a42', lineHeight: 24 },
  promoCard: {
    backgroundColor: '#10b981',
    borderRadius: 16,
    padding: 32,
    flexDirection: 'row',
    overflow: 'hidden',
    position: 'relative',
    marginVertical: 16,
  },
  promoContent: { zIndex: 10, flex: 1 },
  promoTitle: { fontSize: 24, fontWeight: '600', color: '#00422b', marginBottom: 4 },
  promoDesc: { fontSize: 16, color: '#00422b', opacity: 0.9, marginBottom: 24 },
  promoBtn: {
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 32,
    alignSelf: 'flex-start',
  },
  promoBtnText: { color: '#006c49', fontSize: 12, fontWeight: '700' },
  promoImgContainer: { position: 'absolute', right: 0, top: 0, bottom: 0, width: '50%', opacity: 0.2 },
  promoImg: { width: '100%', height: '100%', resizeMode: 'cover' },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: 'rgba(248, 249, 250, 0.9)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(108, 122, 113, 0.2)',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 20,
  },
  navItem: {
    alignItems: 'center',
    padding: 8,
  },
  navItemActive: {
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#10b981',
    borderRadius: 16,
    paddingHorizontal: 16,
  },
  navText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#3c4a42',
    marginTop: 4,
  },
  navTextActive: {
    fontSize: 12,
    fontWeight: '700',
    color: '#00422b',
    marginTop: 4,
  },
});
