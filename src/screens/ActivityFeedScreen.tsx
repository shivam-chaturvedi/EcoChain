import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Mock data for feed
const initialFeed = [
  {
    id: '1',
    group: 'Today',
    title: 'Recycled Plastic Bottles',
    xp: '+25 XP',
    time: '4:12 PM',
    status: 'Verified',
    statusIcon: 'verified',
    statusColor: '#006c49',
    icon: 'recycling',
    iconColor: '#006b5f',
    iconBg: 'rgba(109, 245, 225, 0.3)',
  },
  {
    id: '2',
    group: 'Today',
    title: 'Reduced Shower Time',
    xp: '+15 XP',
    time: '2:30 PM',
    status: 'Pending',
    statusIcon: 'schedule',
    statusColor: '#004395',
    icon: 'water-drop',
    iconColor: '#005ac2',
    iconBg: 'rgba(113, 161, 255, 0.2)',
  },
  {
    id: '3',
    group: 'Today',
    title: 'Smart Lighting Mode',
    xp: '+40 XP',
    time: '10:15 AM',
    status: 'Verified',
    statusIcon: 'verified',
    statusColor: '#006c49',
    icon: 'bolt',
    iconColor: '#006c49',
    iconBg: 'rgba(111, 251, 190, 0.3)',
  },
  {
    id: '4',
    group: 'Yesterday',
    title: 'Biked to School',
    xp: '+50 XP',
    time: 'Yesterday, 8:45 AM',
    status: 'Verified',
    statusIcon: 'verified',
    statusColor: '#006c49',
    icon: 'directions-bike',
    iconColor: '#006b5f',
    iconBg: 'rgba(113, 248, 228, 0.3)',
  },
  {
    id: '5',
    group: 'Yesterday',
    title: 'Optimized AC Settings',
    xp: '+20 XP',
    time: 'Yesterday, 2:10 PM',
    status: 'Verified',
    statusIcon: 'verified',
    statusColor: '#006c49',
    icon: 'thermostat',
    iconColor: '#006c49',
    iconBg: 'rgba(111, 251, 190, 0.3)',
  },
];

export default function ActivityFeedScreen({ navigation }: any) {
  const [feed, setFeed] = useState(initialFeed);

  const handleDelete = (id: string) => {
    setFeed((prev) => prev.filter((item) => item.id !== id));
  };

  const todayEntries = feed.filter((item) => item.group === 'Today');
  const yesterdayEntries = feed.filter((item) => item.group === 'Yesterday');

  // Simple render for a swipeable-like row using ScrollView
  const renderSwipeableCard = (item: any) => {
    return (
      <View key={item.id} style={styles.swipeContainer}>
        {/* Hidden Delete Background */}
        <View style={styles.deleteBackground}>
          <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.deleteBtn}>
            <Icon name="delete" size={24} color="#ffffff" />
          </TouchableOpacity>
        </View>
        {/* Scrollable foreground card */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          snapToInterval={SCREEN_WIDTH - 48 + 96} // approx card width + delete btn width
          decelerationRate="fast"
          contentContainerStyle={{ width: (SCREEN_WIDTH - 48) + 96 }} // full screen width - padding + extra swipe area
        >
          <View style={styles.cardContent}>
            <View style={[styles.cardIconCircle, { backgroundColor: item.iconBg }]}>
              <Icon name={item.icon} size={24} color={item.iconColor} />
            </View>
            <View style={styles.cardTextContainer}>
              <View style={styles.cardTitleRow}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <View style={styles.xpBadge}>
                  <Text style={styles.xpText}>{item.xp}</Text>
                </View>
              </View>
              <View style={styles.cardMetaRow}>
                <Text style={styles.timeText}>{item.time}</Text>
                <View style={styles.dot} />
                <View style={styles.statusRow}>
                  <Icon name={item.statusIcon} size={14} color={item.statusColor} />
                  <Text style={[styles.statusText, { color: item.statusColor }]}>
                    {item.status}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {/* Spacer to allow scrolling to reveal delete button */}
          <View style={{ width: 96 }} />
        </ScrollView>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Top Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.avatarContainer}>
            <Image
              source={{
                uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCMEK5hOy3XQZJ_lya69B_3LzzP1npuotRZEuKPa2psJvgAyPchNHJUHM5qfy7lEInq1UJeEHmsYB9zeanoVaLn8jX0CgRVIa7p1iOgmRn8gcve_InWrjj8dbkm3hnYgc-He4Ud7Bo-yStaypgXZYD9hWH-6YGq_oIeXeGMY3yRLIQJO4Fj8IaVl9CIlhm3Q6mz6igDDLfNHVDQ5v6HR2LH0YG8pGfDmc9BHd9KjOP80MvpSstFymeSNB9-bS6huRS8cxECjefGZje',
              }}
              style={styles.avatarImage}
            />
          </View>
          <Text style={styles.headerTitle}>Activity Feed</Text>
        </View>
        <TouchableOpacity style={styles.filterBtn}>
          <Icon name="filter-list" size={24} color="#006c49" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Today Group */}
        {todayEntries.length > 0 && (
          <View style={styles.groupSection}>
            <View style={styles.groupHeader}>
              <Text style={styles.groupTitle}>TODAY</Text>
              <Text style={styles.groupCount}>{todayEntries.length} entries</Text>
            </View>
            {todayEntries.map(renderSwipeableCard)}
          </View>
        )}

        {/* Yesterday Group */}
        {yesterdayEntries.length > 0 && (
          <View style={styles.groupSection}>
            <View style={styles.groupHeader}>
              <Text style={styles.groupTitle}>YESTERDAY</Text>
              <Text style={styles.groupCount}>{yesterdayEntries.length} entries</Text>
            </View>
            {yesterdayEntries.map(renderSwipeableCard)}
          </View>
        )}
      </ScrollView>

      {/* FAB */}
      <TouchableOpacity style={styles.fab}>
        <Icon name="add" size={28} color="#ffffff" />
      </TouchableOpacity>

      {/* Mock Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="home" size={24} color="#3c4a42" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItemActive}>
          <Icon name="eco" size={24} color="#00422b" />
          <Text style={styles.navTextActive}>Impact</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="workspace-premium" size={24} color="#3c4a42" />
          <Text style={styles.navText}>Arena</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="person" size={24} color="#3c4a42" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

import { Dimensions } from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    height: 64,
    backgroundColor: 'rgba(248, 249, 250, 0.8)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(225, 227, 228, 0.3)',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#10b981',
    overflow: 'hidden',
    marginRight: 12,
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#006c49',
    letterSpacing: -0.5,
  },
  filterBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 120, // space for fab and bottom nav
  },
  groupSection: {
    marginBottom: 32,
  },
  groupHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  groupTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#3c4a42',
    letterSpacing: 1,
  },
  groupCount: {
    fontSize: 12,
    fontWeight: '500',
    color: '#6c7a71',
  },
  swipeContainer: {
    width: '100%',
    height: 80,
    marginBottom: 12,
    position: 'relative',
    borderRadius: 12,
    overflow: 'hidden',
  },
  deleteBackground: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    width: 96,
    backgroundColor: '#ba1a1a',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 24,
    borderRadius: 12,
  },
  deleteBtn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContent: {
    width: SCREEN_WIDTH - 48, // Container width
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(229, 231, 235, 0.5)',
  },
  cardIconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  cardTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  cardTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#191c1d',
    flex: 1,
  },
  xpBadge: {
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
    marginLeft: 8,
  },
  xpText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#10b981',
  },
  cardMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 12,
    color: '#6c7a71',
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#bbcabf',
    marginHorizontal: 8,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '700',
    marginLeft: 4,
  },
  fab: {
    position: 'absolute',
    right: 24,
    bottom: 100,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#006c49',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#006c49',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
    zIndex: 40,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(248, 249, 250, 0.9)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(225, 227, 228, 0.3)',
    paddingBottom: 20, // SafeArea
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  navItemActive: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(16, 185, 129, 0.2)',
    borderRadius: 16,
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
