import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

export default function EcoCalendarV2Screen({ navigation }: any) {
  const calendarDays = [
    { day: 1, indicators: ['tertiary'] },
    { day: 2, indicators: ['primary'] },
    { day: 3, indicators: ['error'] },
    { day: 4, indicators: ['primary', 'tertiary'], active: true },
    { day: 5, indicators: [] },
    { day: 6, indicators: ['yellow'] },
    { day: 7, indicators: [] },
    { day: 8, indicators: ['primary'] },
    { day: 9, indicators: [] },
    { day: 10, indicators: [] },
    { day: 11, indicators: [] },
    { day: 12, indicators: [] },
    { day: 13, indicators: [] },
    { day: 14, indicators: ['tertiary'] },
    { day: 15, indicators: [] },
    { day: 16, indicators: [] },
    { day: 17, indicators: [] },
    { day: 18, indicators: [] },
    { day: 19, indicators: [] },
    { day: 20, indicators: [] },
    { day: 21, indicators: [] },
    { day: 22, indicators: [] },
    { day: 23, indicators: [] },
    { day: 24, indicators: [] },
    { day: 25, indicators: [] },
    { day: 26, indicators: [] },
    { day: 27, indicators: [] },
    { day: 28, indicators: [] },
    { day: 29, indicators: [] },
    { day: 30, indicators: [] },
    { day: 31, indicators: [] },
  ];

  const getIndicatorColor = (color: string) => {
    switch (color) {
      case 'primary': return '#10b981';
      case 'tertiary': return '#005ac2';
      case 'yellow': return '#facc15';
      case 'error': return '#ba1a1a';
      default: return 'transparent';
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.avatarWrap}>
            <Image
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyL4OD-kNhK64-N_VXGGYBJl7HXXRzGTIZKVmva-9iI3mJWoa2X3yf_s2joRC3ZaRg9Y9FUmNVsf5CDS84mUM7XU01G3nRpbfhLwHwXmXasubRajNjCJmGsBG2UvlL3EZqOIawDBMfHoCOj6Vjf70YBqrkoXYZIE3g5-YrLMcu3ZtVzaxU_aeSpyKRHu0FM0v97iEfDzFSbdpDTUrCq5S5AJIb6j7N0Xu0jh-c6OpJ1qqA0FV9K8B53Z8CnY3wBqZGjISgJNst0AU4' }}
              style={styles.avatarImg}
            />
          </View>
          <Text style={styles.logoText}>ChonX</Text>
        </View>
        <View style={styles.headerRight}>
          <View style={styles.xpBadge}>
            <Text style={styles.xpText}>⚡ 2,450 XP</Text>
          </View>
          <TouchableOpacity style={styles.iconBtn}>
            <Icon name="notifications" size={24} color="#3c4a42" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.mainContent}>
        {/* Calendar Header */}
        <View style={styles.calHeaderBox}>
          <View style={styles.calHeaderLeft}>
            <Text style={styles.monthTitle}>October 2026</Text>
            <View style={styles.calControls}>
              <TouchableOpacity style={styles.controlBtn}><Icon name="chevron-left" size={20} color="#191c1d" /></TouchableOpacity>
              <TouchableOpacity style={styles.controlBtn}><Icon name="chevron-right" size={20} color="#191c1d" /></TouchableOpacity>
            </View>
          </View>
          <View style={styles.calHeaderRight}>
            <TouchableOpacity style={styles.todayBtn}><Text style={styles.todayBtnText}>TODAY</Text></TouchableOpacity>
            <TouchableOpacity style={styles.filterBtn}><Icon name="filter-list" size={20} color="#191c1d" /></TouchableOpacity>
          </View>
        </View>

        {/* Streak Tracker */}
        <View style={styles.streakCard}>
          <View style={styles.streakIconWrap}>
            <LinearGradient colors={['#FF9D00', '#FF4D00']} style={styles.streakIconGrad}>
              <Icon name="local-fire-department" size={32} color="#ffffff" />
            </LinearGradient>
          </View>
          <View style={styles.streakInfo}>
            <View style={styles.streakTop}>
              <View>
                <Text style={styles.streakTitle}>Current Streak: 4 days</Text>
                <Text style={styles.streakSub}>You're on fire! Keep logging actions to grow your impact.</Text>
              </View>
              <Text style={styles.longestStreak}>Longest: 12 days</Text>
            </View>
            <View style={styles.progressBg}>
              <LinearGradient colors={['#006c49', '#006b5f']} style={[styles.progressFill, { width: '33%' }]} start={{x:0, y:0}} end={{x:1, y:0}} />
            </View>
          </View>
        </View>

        {/* Calendar Grid */}
        <View style={styles.calendarCard}>
          <View style={styles.weekdays}>
            {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day, idx) => (
              <Text key={day} style={[styles.weekdayText, (idx === 5 || idx === 6) && styles.weekendText]}>{day}</Text>
            ))}
          </View>

          <View style={styles.daysGrid}>
            <View style={[styles.dayCell, styles.dayCellEmpty]}><Text style={styles.emptyDayText}>28</Text></View>
            <View style={[styles.dayCell, styles.dayCellEmpty]}><Text style={styles.emptyDayText}>29</Text></View>
            <View style={[styles.dayCell, styles.dayCellEmpty]}><Text style={styles.emptyDayText}>30</Text></View>

            {calendarDays.map((d, index) => (
              <TouchableOpacity key={index} style={[styles.dayCell, d.active && styles.dayCellActive]}>
                <Text style={[styles.dayText, d.active && styles.dayTextActive]}>{d.day}</Text>
                {d.active && <View style={styles.pingDot} />}
                <View style={styles.indicators}>
                  {d.indicators.map((color, idx) => (
                    <View key={idx} style={[styles.indicatorDot, { backgroundColor: getIndicatorColor(color) }]} />
                  ))}
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {/* Legend */}
          <View style={styles.legendWrap}>
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: '#10b981' }]} />
              <Text style={styles.legendText}>Eco-actions</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: '#005ac2' }]} />
              <Text style={styles.legendText}>Challenge Tasks</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: '#facc15' }]} />
              <Text style={styles.legendText}>School Events</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: '#ba1a1a' }]} />
              <Text style={styles.legendText}>Missed Days</Text>
            </View>
          </View>
        </View>

        {/* Bottom Sheet Detail */}
        <View style={styles.bottomSheetCard}>
          <View style={styles.sheetHandle} />
          <View style={styles.sheetHeader}>
            <Text style={styles.sheetTitle}>Today's Logs</Text>
            <Text style={styles.viewAllText}>VIEW ALL</Text>
          </View>
          <View style={styles.sheetList}>
            <View style={styles.detailCard}>
              <View style={[styles.detailIcon, { backgroundColor: 'rgba(16,185,129,0.2)' }]}>
                <Icon name="eco" size={24} color="#006c49" />
              </View>
              <View style={styles.detailTextWrap}>
                <Text style={styles.detailTitle}>Carbon Footprint Logged</Text>
                <Text style={styles.detailSub}>Transportation Activity</Text>
              </View>
              <Text style={styles.detailXp}>+25 XP</Text>
            </View>
            
            <View style={styles.detailCard}>
              <View style={[styles.detailIcon, { backgroundColor: 'rgba(113,161,255,0.2)' }]}>
                <Icon name="calendar-today" size={24} color="#005ac2" />
              </View>
              <View style={styles.detailTextWrap}>
                <Text style={styles.detailTitle}>Community Clean-up</Text>
                <Text style={styles.detailSub}>Starts in 2 hours</Text>
              </View>
              <Icon name="chevron-right" size={24} color="#3c4a42" />
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Log FAB */}
      <TouchableOpacity style={styles.fab}>
        <Icon name="add" size={24} color="#ffffff" />
        <Text style={styles.fabText}>LOG NEW ACTIVITY</Text>
      </TouchableOpacity>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="home" size={24} color="#3c4a42" />
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItemActive}>
          <Icon name="eco" size={24} color="#00422b" />
          <Text style={styles.navLabelActive}>Impact</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="workspace-premium" size={24} color="#3c4a42" />
          <Text style={styles.navLabel}>Arena</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="person" size={24} color="#3c4a42" />
          <Text style={styles.navLabel}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 64, paddingHorizontal: 24, backgroundColor: 'rgba(248,249,250,0.8)', borderBottomWidth: 1, borderBottomColor: 'rgba(187,202,191,0.3)' },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  avatarWrap: { width: 40, height: 40, borderRadius: 20, borderWidth: 2, borderColor: '#10b981', overflow: 'hidden' },
  avatarImg: { width: '100%', height: '100%' },
  logoText: { fontSize: 24, fontWeight: '800', color: '#006c49' }, // Ideally gradient text, but standard color here
  headerRight: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  xpBadge: { backgroundColor: 'rgba(16,185,129,0.2)', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 16 },
  xpText: { fontSize: 12, fontWeight: 'bold', color: '#006c49' },
  iconBtn: { padding: 8 },

  mainContent: { paddingHorizontal: 24, paddingTop: 24, paddingBottom: 160 },

  calHeaderBox: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32, gap: 16 },
  calHeaderLeft: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  monthTitle: { fontSize: 32, fontWeight: '700', color: '#191c1d' },
  calControls: { flexDirection: 'row', backgroundColor: '#edeeef', borderRadius: 20, padding: 4 },
  controlBtn: { padding: 4 },
  calHeaderRight: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  todayBtn: { paddingHorizontal: 24, paddingVertical: 8, borderRadius: 20, borderWidth: 1, borderColor: '#bbcabf', backgroundColor: '#ffffff' },
  todayBtnText: { fontSize: 12, fontWeight: '700', color: '#191c1d' },
  filterBtn: { padding: 8, borderRadius: 20, borderWidth: 1, borderColor: '#bbcabf', backgroundColor: '#ffffff' },

  streakCard: { backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: 16, padding: 24, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)', flexDirection: 'row', alignItems: 'center', gap: 24, marginBottom: 32, overflow: 'hidden' },
  streakIconWrap: { width: 64, height: 64, borderRadius: 16, overflow: 'hidden', shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 8 },
  streakIconGrad: { width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' },
  streakInfo: { flex: 1 },
  streakTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 12, flexWrap: 'wrap' },
  streakTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d' },
  streakSub: { fontSize: 16, color: '#3c4a42' },
  longestStreak: { fontSize: 12, fontWeight: '700', color: '#3c4a42', textTransform: 'uppercase' },
  progressBg: { height: 12, backgroundColor: '#edeeef', borderRadius: 6 },
  progressFill: { height: '100%', borderRadius: 6 },

  calendarCard: { backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: 16, padding: 32, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)', marginBottom: 32 },
  weekdays: { flexDirection: 'row', marginBottom: 16 },
  weekdayText: { flex: 1, textAlign: 'center', fontSize: 12, fontWeight: '700', color: '#3c4a42' },
  weekendText: { color: '#10b981' },
  daysGrid: { flexDirection: 'row', flexWrap: 'wrap', backgroundColor: 'rgba(187,202,191,0.2)', gap: 1 },
  dayCell: { width: '14.1%', height: 100, backgroundColor: '#ffffff', padding: 8, justifyContent: 'space-between' },
  dayCellEmpty: { backgroundColor: '#ffffff', opacity: 0.4 },
  dayCellActive: { backgroundColor: 'rgba(16,185,129,0.1)', borderWidth: 2, borderColor: '#006c49' },
  emptyDayText: { fontSize: 16, color: '#191c1d' },
  dayText: { fontSize: 16, fontWeight: 'bold', color: '#191c1d' },
  dayTextActive: { color: '#006c49' },
  pingDot: { position: 'absolute', top: 8, right: 8, width: 8, height: 8, borderRadius: 4, backgroundColor: '#006c49' },
  indicators: { flexDirection: 'row', flexWrap: 'wrap', gap: 4, paddingTop: 32 },
  indicatorDot: { width: 6, height: 6, borderRadius: 3 },

  legendWrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 16, marginTop: 24, paddingTop: 16, borderTopWidth: 1, borderTopColor: 'rgba(187,202,191,0.3)' },
  legendItem: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  legendDot: { width: 12, height: 12, borderRadius: 6 },
  legendText: { fontSize: 12, fontWeight: '700', color: '#3c4a42', textTransform: 'uppercase' },

  bottomSheetCard: { backgroundColor: '#ffffff', borderRadius: 16, padding: 24, shadowColor: '#000', shadowOffset: { width: 0, height: -8 }, shadowOpacity: 0.08, shadowRadius: 30, borderWidth: 1, borderColor: 'rgba(187,202,191,0.2)' },
  sheetHandle: { width: 48, height: 4, backgroundColor: '#bbcabf', borderRadius: 2, alignSelf: 'center', marginBottom: 24 },
  sheetHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  sheetTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d' },
  viewAllText: { fontSize: 12, fontWeight: 'bold', color: '#006c49', letterSpacing: 1 },
  sheetList: { gap: 16 },
  detailCard: { flexDirection: 'row', alignItems: 'center', padding: 16, backgroundColor: '#f3f4f5', borderRadius: 12, borderWidth: 1, borderColor: 'rgba(187,202,191,0.3)' },
  detailIcon: { width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center', marginRight: 16 },
  detailTextWrap: { flex: 1 },
  detailTitle: { fontSize: 18, fontWeight: 'bold', color: '#191c1d' },
  detailSub: { fontSize: 16, color: '#3c4a42' },
  detailXp: { fontSize: 24, fontWeight: 'bold', color: '#006c49' },

  fab: { position: 'absolute', bottom: 100, right: 24, backgroundColor: '#006c49', flexDirection: 'row', alignItems: 'center', gap: 8, paddingHorizontal: 24, paddingVertical: 16, borderRadius: 30, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8, zIndex: 60 },
  fabText: { color: '#ffffff', fontWeight: 'bold', fontSize: 12, letterSpacing: 1 },

  bottomNav: { position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'rgba(248,249,250,0.9)', borderTopWidth: 1, borderTopColor: 'rgba(187,202,191,0.3)' },
  navItem: { alignItems: 'center', justifyContent: 'center', padding: 8 },
  navItemActive: { alignItems: 'center', justifyContent: 'center', padding: 8, backgroundColor: '#10b981', borderRadius: 24, paddingHorizontal: 20 },
  navLabel: { fontSize: 12, fontWeight: '700', color: '#3c4a42', marginTop: 4 },
  navLabelActive: { fontSize: 12, fontWeight: '700', color: '#00422b', marginTop: 4 },
});
