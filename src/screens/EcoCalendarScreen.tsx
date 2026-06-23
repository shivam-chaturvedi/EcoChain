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

export default function EcoCalendarScreen({ navigation }: any) {
  const calendarDays = [
    { day: 1, indicators: ['green', 'blue'] },
    { day: 2, indicators: ['green'] },
    { day: 3, indicators: ['yellow'] },
    { day: 4, indicators: ['green', 'yellow'], active: true },
    { day: 5, indicators: ['red'] },
    { day: 6, indicators: ['blue'] },
    { day: 7, indicators: ['green'] },
    { day: 8, indicators: [] },
    { day: 9, indicators: ['yellow'] },
    { day: 10, indicators: ['blue', 'green'] },
    { day: 11, indicators: [] },
    { day: 12, indicators: [] },
    { day: 13, indicators: [] },
    { day: 14, indicators: [] },
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
      case 'green': return '#006c49';
      case 'blue': return '#005ac2';
      case 'yellow': return '#4fdbc8';
      case 'red': return '#ba1a1a';
      default: return 'transparent';
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Top Nav */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image
            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfkwS_T2oemqLDYxF1XirWFtBJ6sWrFYTlbybBQl5Y617MXqllCqKuLbC93T0e0Ktf2PxesiDNvSEIZ2xi6z6sNlj8ylR1I99mTGEL5D4IiBl4CozxVIyCur4Q3JNid1JemhItNxF0bhgBX9Wy4Pip4nl-D2yum9nUHUQ8HdTB13Cnm6gP55pvr0Qas4r9ybS_Ncy7_LGnB6qM6ymAtSpdPIjMFtSs5ULHZiqc_4omozNSJyxo22_slGZp3daPun0A_lKbSxT1XSKL' }}
            style={styles.avatarImg}
          />
          <Text style={styles.logoText}>ChonX</Text>
        </View>
        <TouchableOpacity style={styles.iconBtn}>
          <Icon name="notifications" size={24} color="#006c49" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.mainContent}>
        {/* Streak Bar */}
        <View style={styles.streakCard}>
          <View style={styles.streakLeft}>
            <View style={styles.streakIconBox}>
              <Icon name="local-fire-department" size={24} color="#ffffff" />
            </View>
            <View>
              <Text style={styles.streakLabel}>ACTIVITY STREAK</Text>
              <Text style={styles.streakValue}>Current Streak: 4 days</Text>
            </View>
          </View>
          <View style={styles.streakBars}>
            <View style={styles.streakBarFilled} />
            <View style={styles.streakBarFilled} />
            <View style={styles.streakBarFilled} />
            <View style={styles.streakBarFilled} />
            <View style={styles.streakBarEmpty} />
          </View>
        </View>

        {/* Calendar View */}
        <View style={styles.calendarCard}>
          <View style={styles.calHeader}>
            <Text style={styles.monthText}>October 2026</Text>
            <View style={styles.calNav}>
              <TouchableOpacity style={styles.calNavBtn}><Icon name="chevron-left" size={24} color="#191c1d" /></TouchableOpacity>
              <TouchableOpacity style={styles.calNavBtn}><Icon name="chevron-right" size={24} color="#191c1d" /></TouchableOpacity>
            </View>
          </View>

          <View style={styles.weekdays}>
            {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day) => (
              <Text key={day} style={styles.weekdayText}>{day}</Text>
            ))}
          </View>

          <View style={styles.daysGrid}>
            {/* Empty days for start of month */}
            <View style={[styles.dayCell, styles.dayCellEmpty]}><Text style={styles.emptyDayText}>28</Text></View>
            <View style={[styles.dayCell, styles.dayCellEmpty]}><Text style={styles.emptyDayText}>29</Text></View>
            <View style={[styles.dayCell, styles.dayCellEmpty]}><Text style={styles.emptyDayText}>30</Text></View>

            {calendarDays.map((d, index) => (
              <TouchableOpacity key={index} style={[styles.dayCell, d.active && styles.dayCellActive]}>
                <Text style={[styles.dayText, d.active && styles.dayTextActive]}>{d.day}</Text>
                <View style={styles.indicators}>
                  {d.indicators.map((color, idx) => (
                    <View key={idx} style={[styles.indicatorDot, { backgroundColor: getIndicatorColor(color) }]} />
                  ))}
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Bottom Sections */}
        <View style={styles.bottomGrid}>
          <View style={[styles.glassCard, { flex: 1 }]}>
            <Text style={styles.sectionTitle}>Today's Logs</Text>
            <View style={styles.logList}>
              <View style={styles.logItem}>
                <View style={[styles.logIconBox, { backgroundColor: 'rgba(0,108,73,0.1)' }]}>
                  <Icon name="eco" size={20} color="#006c49" />
                </View>
                <View style={styles.logTextWrap}>
                  <Text style={styles.logTitle}>Carbon Footprint Logged</Text>
                  <Text style={styles.logSub}>Reduced 2.4kg of CO2 today</Text>
                </View>
                <Text style={styles.logStatus}>Completed</Text>
              </View>

              <View style={styles.logItem}>
                <View style={[styles.logIconBox, { backgroundColor: 'rgba(79,219,200,0.2)' }]}>
                  <Icon name="event" size={20} color="#006f64" />
                </View>
                <View style={styles.logTextWrap}>
                  <Text style={styles.logTitle}>Community Clean-up</Text>
                  <Text style={styles.logSub}>Starts in 2 hours • Central Park</Text>
                </View>
                <TouchableOpacity style={styles.joinBtn}>
                  <Text style={styles.joinBtnText}>Join</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={[styles.glassCard, { flex: 1 }]}>
            <Text style={styles.sectionTitle}>Quick Summary</Text>
            <View style={styles.summaryGrid}>
              <View style={[styles.summaryBox, { backgroundColor: 'rgba(0,108,73,0.05)', borderColor: 'rgba(0,108,73,0.1)' }]}>
                <Text style={styles.summaryLabel}>POINTS EARNED</Text>
                <Text style={[styles.summaryValue, { color: '#006c49' }]}>1,240</Text>
              </View>
              <View style={[styles.summaryBox, { backgroundColor: 'rgba(0,90,194,0.05)', borderColor: 'rgba(0,90,194,0.1)' }]}>
                <Text style={styles.summaryLabel}>CHALLENGES DONE</Text>
                <Text style={[styles.summaryValue, { color: '#005ac2' }]}>8/12</Text>
              </View>
              <View style={[styles.summaryBox, { backgroundColor: 'rgba(79,219,200,0.05)', borderColor: 'rgba(79,219,200,0.2)' }]}>
                <Text style={styles.summaryLabel}>GLOBAL RANK</Text>
                <Text style={[styles.summaryValue, { color: '#006b5f' }]}>#42</Text>
              </View>
              <View style={[styles.summaryBox, { backgroundColor: 'rgba(186,26,26,0.05)', borderColor: 'rgba(186,26,26,0.1)' }]}>
                <Text style={styles.summaryLabel}>MISSED DAYS</Text>
                <Text style={[styles.summaryValue, { color: '#ba1a1a' }]}>1</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="home" size={24} color="#3c4a42" />
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="eco" size={24} color="#3c4a42" />
          <Text style={styles.navLabel}>Impact</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="military-tech" size={24} color="#3c4a42" />
          <Text style={styles.navLabel}>Arena</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItemActive}>
          <Icon name="person" size={24} color="#00422b" />
          <Text style={styles.navLabelActive}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 64, paddingHorizontal: 24, backgroundColor: 'rgba(248,249,250,0.8)' },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  avatarImg: { width: 40, height: 40, borderRadius: 20, borderWidth: 1, borderColor: 'rgba(187,202,191,0.3)' },
  logoText: { fontSize: 24, fontWeight: '800', color: '#006c49', letterSpacing: -0.5 },
  iconBtn: { padding: 8 },
  mainContent: { paddingHorizontal: 24, paddingTop: 24, paddingBottom: 100 },

  streakCard: { backgroundColor: 'rgba(16,185,129,0.1)', borderWidth: 1, borderColor: 'rgba(0,108,73,0.2)', borderRadius: 12, padding: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32 },
  streakLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  streakIconBox: { width: 48, height: 48, borderRadius: 24, backgroundColor: '#006c49', alignItems: 'center', justifyContent: 'center' },
  streakLabel: { fontSize: 12, fontWeight: '700', color: '#006c49', letterSpacing: 1 },
  streakValue: { fontSize: 24, fontWeight: '600', color: '#00422b' },
  streakBars: { flexDirection: 'row', gap: 4 },
  streakBarFilled: { width: 8, height: 32, backgroundColor: '#006c49', borderRadius: 4 },
  streakBarEmpty: { width: 8, height: 32, backgroundColor: 'rgba(187,202,191,0.3)', borderRadius: 4 },

  calendarCard: { backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: 16, padding: 24, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)', marginBottom: 32 },
  calHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 },
  monthText: { fontSize: 32, fontWeight: '700', color: '#191c1d' },
  calNav: { flexDirection: 'row', gap: 8 },
  calNavBtn: { width: 40, height: 40, borderRadius: 20, borderWidth: 1, borderColor: '#6c7a71', alignItems: 'center', justifyContent: 'center' },

  weekdays: { flexDirection: 'row', marginBottom: 16 },
  weekdayText: { flex: 1, textAlign: 'center', fontSize: 12, fontWeight: '700', color: '#6c7a71' },

  daysGrid: { flexDirection: 'row', flexWrap: 'wrap', backgroundColor: 'rgba(187,202,191,0.2)', gap: 1 },
  dayCell: { width: '14.1%', height: 100, backgroundColor: '#ffffff', padding: 8, justifyContent: 'space-between' },
  dayCellEmpty: { backgroundColor: '#ffffff', opacity: 0.3 },
  dayCellActive: { backgroundColor: 'rgba(16,185,129,0.1)', borderWidth: 2, borderColor: '#006c49' },
  emptyDayText: { fontSize: 16, color: '#191c1d' },
  dayText: { fontSize: 16, fontWeight: 'bold', color: '#191c1d' },
  dayTextActive: { color: '#006c49' },
  indicators: { flexDirection: 'row', flexWrap: 'wrap', gap: 4 },
  indicatorDot: { width: 6, height: 6, borderRadius: 3 },

  bottomGrid: { flexDirection: 'column', gap: 24 },
  glassCard: { backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: 16, padding: 24, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)' },
  sectionTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d', marginBottom: 24 },
  
  logList: { gap: 16 },
  logItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f3f4f5', padding: 12, borderRadius: 12, borderWidth: 1, borderColor: 'rgba(187,202,191,0.2)' },
  logIconBox: { width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center', marginRight: 16 },
  logTextWrap: { flex: 1 },
  logTitle: { fontSize: 16, fontWeight: 'bold', color: '#191c1d' },
  logSub: { fontSize: 14, color: '#3c4a42' },
  logStatus: { fontSize: 14, fontWeight: 'bold', color: '#006c49' },
  joinBtn: { backgroundColor: '#006c49', paddingHorizontal: 16, paddingVertical: 6, borderRadius: 20 },
  joinBtnText: { color: '#ffffff', fontSize: 14, fontWeight: 'bold' },

  summaryGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 16 },
  summaryBox: { width: '47%', padding: 16, borderRadius: 12, borderWidth: 1 },
  summaryLabel: { fontSize: 12, fontWeight: '700', color: '#6c7a71', marginBottom: 4 },
  summaryValue: { fontSize: 28, fontWeight: '700' },

  bottomNav: { position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'rgba(248,249,250,0.9)', borderTopWidth: 1, borderTopColor: 'rgba(187,202,191,0.3)' },
  navItem: { alignItems: 'center', justifyContent: 'center', padding: 8 },
  navItemActive: { alignItems: 'center', justifyContent: 'center', padding: 8, backgroundColor: '#10b981', borderRadius: 12, paddingHorizontal: 16 },
  navLabel: { fontSize: 12, fontWeight: '700', color: '#3c4a42', marginTop: 4 },
  navLabelActive: { fontSize: 12, fontWeight: '700', color: '#00422b', marginTop: 4 },
});
