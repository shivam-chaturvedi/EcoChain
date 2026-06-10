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

const { width } = Dimensions.get('window');

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'TeacherCalendar'>;
};

const MONTH_NAMES = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December',
];
const DAY_HEADERS = ['MON','TUE','WED','THU','FRI','SAT','SUN'];

// Returns day objects for the grid (Mon-based, fills prev/next month)
function buildCalendar(year: number, month: number) {
  const firstDay = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  // Convert JS 0=Sun to Mon=0 index
  let startDow = firstDay.getDay();
  startDow = startDow === 0 ? 6 : startDow - 1;

  type CalDay = { date: number; isCurrentMonth: boolean; key: string };
  const grid: CalDay[] = [];

  // Prev-month padding
  const daysInPrevMonth = new Date(year, month, 0).getDate();
  for (let i = startDow - 1; i >= 0; i--) {
    const d = daysInPrevMonth - i;
    grid.push({ date: d, isCurrentMonth: false, key: `prev-${d}` });
  }
  // Current month
  for (let d = 1; d <= daysInMonth; d++) {
    grid.push({ date: d, isCurrentMonth: true, key: `cur-${d}` });
  }
  // Next-month padding
  let nd = 1;
  while (grid.length % 7 !== 0) {
    grid.push({ date: nd, isCurrentMonth: false, key: `next-${nd}` });
    nd++;
  }
  return grid;
}

// Sample events keyed by date number
const EVENTS_BY_DATE: Record<number, true> = { 11: true, 14: true, 18: true };

const TODAY_EVENTS = [
  {
    id: '1',
    tag: 'LUNCH',
    time: '12:00 PM',
    title: 'Plastic-Free Lunch',
    desc: 'Encouraging students to bring waste-free containers to the...',
  },
  {
    id: '2',
    tag: 'GARDEN',
    time: '3:30 PM',
    title: 'Garden Maintenance',
    desc: 'Weekly weeding and watering session at the school vegetab...',
  },
];

const TABS = ['STUDENTS', 'LEADERBOARD', 'CALENDAR', 'ANALYTICS'];
const CELL = Math.floor((width - 40 - 16) / 7);

export default function TeacherCalendarScreen({ navigation }: Props) {
  const [year, setYear] = useState(2024);
  const [month, setMonth] = useState(10); // 0-indexed, 10 = November
  const [selectedDay, setSelectedDay] = useState(7);
  const [activeTab, setActiveTab] = useState(2); // CALENDAR tab

  const days = buildCalendar(year, month);

  const prevMonth = () => {
    if (month === 0) { setMonth(11); setYear(y => y - 1); }
    else setMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (month === 11) { setMonth(0); setYear(y => y + 1); }
    else setMonth(m => m + 1);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.surface} />

      {/* ── Header ── */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.logoCircle}>
            <Text style={styles.logoIcon}>🎓</Text>
          </View>
          <Text style={styles.brand}>ChonX</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconBtn} activeOpacity={0.7}>
            <Text style={styles.iconBtnText}>🔔</Text>
          </TouchableOpacity>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarEmoji}>👩‍🏫</Text>
          </View>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>

        {/* ── Breadcrumb + Title ── */}
        <View style={styles.breadcrumb}>
          <Text style={styles.breadcrumbBase}>Classes  </Text>
          <Text style={styles.breadcrumbSep}>›  </Text>
          <Text style={styles.breadcrumbLink}>Class 10A</Text>
        </View>
        <Text style={styles.pageTitle}>Environmental Science 10A</Text>

        {/* ── Create Event Button ── */}
        <TouchableOpacity style={styles.createBtn} activeOpacity={0.85}>
          <Text style={styles.createBtnText}>+  CREATE CLASS EVENT</Text>
        </TouchableOpacity>

        {/* ── Tabs ── */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabsScroll}
          style={styles.tabsBar}>
          {TABS.map((tab, i) => (
            <TouchableOpacity
              key={tab}
              style={[styles.tab, activeTab === i && styles.tabActive]}
              onPress={() => {
                setActiveTab(i);
                if (i === 1) navigation.navigate('TeacherLeaderboard');
              }}
              activeOpacity={0.7}>
              <Text style={[styles.tabText, activeTab === i && styles.tabTextActive]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* ── Calendar Card ── */}
        <View style={styles.calendarCard}>
          {/* Month Nav */}
          <View style={styles.monthRow}>
            <Text style={styles.monthLabel}>
              {MONTH_NAMES[month]} {year}
            </Text>
            <View style={styles.monthNavGroup}>
              <TouchableOpacity onPress={prevMonth} style={styles.navBtn} activeOpacity={0.7}>
                <Text style={styles.navBtnText}>‹</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={nextMonth} style={styles.navBtn} activeOpacity={0.7}>
                <Text style={styles.navBtnText}>›</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Day Headers */}
          <View style={styles.dayHeaders}>
            {DAY_HEADERS.map(d => (
              <View key={d} style={[styles.dayCell, { width: CELL }]}>
                <Text style={styles.dayHeaderText}>{d}</Text>
              </View>
            ))}
          </View>

          {/* Calendar Grid */}
          <View style={styles.gridWrap}>
            {days.map(day => {
              const isToday = day.isCurrentMonth && day.date === selectedDay;
              const hasEvent = day.isCurrentMonth && EVENTS_BY_DATE[day.date];
              return (
                <TouchableOpacity
                  key={day.key}
                  style={[styles.dayCell, { width: CELL }]}
                  onPress={() => day.isCurrentMonth && setSelectedDay(day.date)}
                  activeOpacity={0.7}>
                  <View style={[styles.dayCellInner, isToday && styles.todayCircle]}>
                    <Text
                      style={[
                        styles.dayText,
                        !day.isCurrentMonth && styles.dayTextGray,
                        isToday && styles.dayTextToday,
                      ]}>
                      {day.date}
                    </Text>
                  </View>
                  {hasEvent && <View style={styles.eventDot} />}
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* ── Events for Today ── */}
        <View style={styles.eventsSection}>
          <View style={styles.eventsTitleRow}>
            <Text style={styles.eventsTitle}>Events for Today</Text>
            <Text style={styles.eventsTodayLabel}>
              NOV {selectedDay}
            </Text>
          </View>

          {TODAY_EVENTS.map(evt => (
            <View key={evt.id} style={styles.eventCard}>
              <View style={styles.eventTopRow}>
                <View style={styles.eventTag}>
                  <Text style={styles.eventTagText}>{evt.tag}</Text>
                </View>
                <Text style={styles.eventTime}>{evt.time}</Text>
              </View>
              <Text style={styles.eventTitle}>{evt.title}</Text>
              <Text style={styles.eventDesc}>{evt.desc}</Text>
            </View>
          ))}

          {/* Daily Challenge Card */}
          <View style={styles.challengeCard}>
            <View style={styles.challengeIconWrap}>
              <Text style={styles.challengeIcon}>⭐</Text>
            </View>
            <View style={styles.challengeText}>
              <Text style={styles.challengeLabel}>DAILY CHALLENGE</Text>
              <Text style={styles.challengeTitle}>Class Participation Goal: 80%</Text>
            </View>
          </View>
        </View>

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
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logoCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#DDF5EA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoIcon: { fontSize: 18 },
  brand: {
    fontSize: 18,
    fontWeight: '800',
    color: Colors.primaryDark,
    letterSpacing: -0.3,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  iconBtn: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBtnText: { fontSize: 18 },
  avatarCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#D1E8D8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarEmoji: { fontSize: 18 },

  // Scroll
  scroll: {
    paddingHorizontal: 20,
    paddingBottom: 32,
  },

  // Breadcrumb
  breadcrumb: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  breadcrumbBase: { fontSize: 12, color: Colors.textSecondary },
  breadcrumbSep: { fontSize: 12, color: Colors.textSecondary },
  breadcrumbLink: { fontSize: 12, color: Colors.primaryDark, fontWeight: '600' },

  // Title
  pageTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: Colors.text,
    marginBottom: 16,
    letterSpacing: -0.4,
  },

  // Create Event Button
  createBtn: {
    height: 48,
    backgroundColor: Colors.primaryDark,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    shadowColor: Colors.primaryDark,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  createBtnText: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.white,
    letterSpacing: 0.8,
  },

  // Tabs
  tabsBar: { marginBottom: 20 },
  tabsScroll: { gap: 0 },
  tab: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  tabActive: { borderBottomColor: Colors.primaryDark },
  tabText: {
    fontSize: 11,
    fontWeight: '700',
    color: Colors.textSecondary,
    letterSpacing: 0.5,
  },
  tabTextActive: { color: Colors.primaryDark },

  // Calendar Card
  calendarCard: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    paddingVertical: 18,
    paddingHorizontal: 8,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 2,
    borderWidth: 1,
    borderColor: Colors.border,
  },

  // Month row
  monthRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  monthLabel: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.text,
    letterSpacing: -0.3,
  },
  monthNavGroup: {
    flexDirection: 'row',
    gap: 4,
  },
  navBtn: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.surface,
  },
  navBtnText: {
    fontSize: 18,
    color: Colors.textSecondary,
    fontWeight: '600',
    lineHeight: 22,
  },

  // Day headers
  dayHeaders: {
    flexDirection: 'row',
    marginBottom: 4,
    paddingHorizontal: 0,
  },
  dayCell: {
    alignItems: 'center',
    paddingVertical: 4,
  },
  dayHeaderText: {
    fontSize: 10,
    fontWeight: '600',
    color: Colors.textSecondary,
    letterSpacing: 0.4,
  },

  // Grid
  gridWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dayCellInner: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  todayCircle: {
    backgroundColor: Colors.primaryDark,
  },
  dayText: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.text,
  },
  dayTextGray: {
    color: Colors.textLight,
  },
  dayTextToday: {
    color: Colors.white,
    fontWeight: '700',
  },
  eventDot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#3B6FD4',
    marginTop: 2,
  },

  // Events section
  eventsSection: {
    gap: 12,
  },
  eventsTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  eventsTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: Colors.text,
    letterSpacing: -0.3,
  },
  eventsTodayLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.primaryDark,
  },

  // Event card
  eventCard: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 1,
  },
  eventTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  eventTag: {
    backgroundColor: '#DDF5EA',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 10,
  },
  eventTagText: {
    fontSize: 10,
    fontWeight: '700',
    color: Colors.primaryDark,
    letterSpacing: 0.6,
  },
  eventTime: {
    fontSize: 12,
    fontWeight: '500',
    color: Colors.textSecondary,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 4,
  },
  eventDesc: {
    fontSize: 13,
    color: Colors.textSecondary,
    lineHeight: 19,
  },

  // Daily Challenge Card
  challengeCard: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    borderWidth: 1,
    borderColor: Colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 1,
  },
  challengeIconWrap: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.primaryDark,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  challengeIcon: { fontSize: 22 },
  challengeText: { flex: 1 },
  challengeLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: Colors.primaryDark,
    letterSpacing: 0.8,
    marginBottom: 4,
  },
  challengeTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.text,
    lineHeight: 20,
  },
});
