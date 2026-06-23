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

export default function ClassDetailCalendarScreen({ navigation }: any) {
  const [activeTab, setActiveTab] = useState('CALENDAR');

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.iconBox}>
            <Icon name="school" size={24} color="#006c49" />
          </View>
          <Text style={styles.logoText}>ChonX</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity><Icon name="notifications" size={24} color="#3c4a42" /></TouchableOpacity>
          <View style={styles.avatar}>
            <Image
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvXgy4l8M5OpXH0058zkX2_GH1ZxRyA3FF1573oy4L8x9XyYvh-apqM-hKmXbTIcCDTGOmEwPr6BbGMPHP9sOJyPg1lovyWjPWxVyI5AkaCjsVkyL30Os8y8sIBUvZx_lQllopT0TasLi99SiprbRuGb0w-dNbUGR9b3rrCpoeVrkbki_j_en4Pfk5XZ1PhZvCdFqwo4MZTG4pCaB9HPpFY2GQbDcILuqdRRDvcC-k2mhLYBLrMYNamleIOkoWb6IBwUORLe2SCz4g' }}
              style={styles.avatarImg}
            />
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Class Header */}
        <View style={styles.classHeader}>
          <View>
            <View style={styles.breadcrumb}>
              <Text style={styles.breadcrumbText}>Classes</Text>
              <Icon name="chevron-right" size={16} color="#3c4a42" />
              <Text style={[styles.breadcrumbText, { color: '#006c49' }]}>Class 10A</Text>
            </View>
            <Text style={styles.pageTitle}>Environmental Science 10A</Text>
          </View>
          <TouchableOpacity style={styles.createBtn}>
            <Icon name="add" size={20} color="#ffffff" />
            <Text style={styles.createBtnText}>CREATE CLASS EVENT</Text>
          </TouchableOpacity>
        </View>

        {/* Tab Bar */}
        <View style={styles.tabsContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {['STUDENTS', 'LEADERBOARD', 'CALENDAR', 'ANALYTICS'].map((tab) => (
              <TouchableOpacity
                key={tab}
                style={[styles.tab, activeTab === tab && styles.tabActive]}
                onPress={() => setActiveTab(tab)}
              >
                <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>{tab}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Main Content */}
        <View style={styles.mainContent}>
          {/* Calendar Section */}
          <View style={styles.calendarCard}>
            <View style={styles.calendarHeader}>
              <Text style={styles.monthTitle}>November 2024</Text>
              <View style={styles.monthNav}>
                <TouchableOpacity style={styles.navBtn}><Icon name="chevron-left" size={24} color="#191c1d" /></TouchableOpacity>
                <TouchableOpacity style={styles.navBtn}><Icon name="chevron-right" size={24} color="#191c1d" /></TouchableOpacity>
              </View>
            </View>

            {/* Days of Week */}
            <View style={styles.weekDays}>
              {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map(day => (
                <Text key={day} style={styles.weekDayText}>{day}</Text>
              ))}
            </View>

            {/* Dates Grid */}
            <View style={styles.datesGrid}>
              {[28, 29, 30, 31].map(day => (
                <View key={`prev-${day}`} style={styles.dateCell}>
                  <Text style={styles.dateTextDisabled}>{day}</Text>
                </View>
              ))}
              {Array.from({ length: 21 }, (_, i) => i + 1).map(day => {
                const isSelected = day === 7;
                const hasEvent1 = day === 6;
                const hasEvent2 = day === 11;
                return (
                  <TouchableOpacity key={`curr-${day}`} style={[styles.dateCell, isSelected && styles.dateCellSelected]}>
                    <Text style={[styles.dateText, isSelected && styles.dateTextSelected]}>{day}</Text>
                    {hasEvent1 && <View style={[styles.eventDot, { backgroundColor: '#006b5f' }]} />}
                    {hasEvent2 && <View style={[styles.eventDot, { backgroundColor: '#005ac2' }]} />}
                    {isSelected && <View style={[styles.eventDot, { backgroundColor: '#ffffff' }]} />}
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* Agenda Section */}
          <View style={styles.agendaCard}>
            <View style={styles.agendaHeader}>
              <Text style={styles.agendaTitle}>Events for Today</Text>
              <Text style={styles.agendaDate}>NOV 7</Text>
            </View>

            <View style={styles.eventList}>
              <TouchableOpacity style={styles.eventItem}>
                <View style={styles.eventItemHeader}>
                  <View style={[styles.eventTag, { backgroundColor: 'rgba(0,108,73,0.1)' }]}>
                    <Text style={[styles.eventTagText, { color: '#006c49' }]}>LUNCH</Text>
                  </View>
                  <Text style={styles.eventTime}>12:00 PM</Text>
                </View>
                <Text style={styles.eventName}>Plastic-Free Lunch</Text>
                <Text style={styles.eventDesc}>Encouraging students to bring waste-free containers to the cafeteria.</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.eventItem}>
                <View style={styles.eventItemHeader}>
                  <View style={[styles.eventTag, { backgroundColor: 'rgba(0,107,95,0.1)' }]}>
                    <Text style={[styles.eventTagText, { color: '#006b5f' }]}>GARDEN</Text>
                  </View>
                  <Text style={styles.eventTime}>3:30 PM</Text>
                </View>
                <Text style={styles.eventName}>Garden Maintenance</Text>
                <Text style={styles.eventDesc}>Weekly weeding and watering session at the school vegetable patch.</Text>
              </TouchableOpacity>
            </View>

            {/* Daily Challenge */}
            <View style={styles.dailyChallengeBox}>
              <View style={styles.dailyChallengeIcon}>
                <Icon name="star" size={24} color="#ffffff" />
              </View>
              <View>
                <Text style={styles.dailyChallengeLabel}>DAILY CHALLENGE</Text>
                <Text style={styles.dailyChallengeText}>Class Participation Goal: 80%</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, height: 64, backgroundColor: 'rgba(248,249,250,0.8)', borderBottomWidth: 1, borderBottomColor: 'rgba(187,202,191,0.2)' },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  iconBox: { padding: 8, backgroundColor: 'rgba(0,108,73,0.1)', borderRadius: 12 },
  logoText: { fontSize: 24, fontWeight: '800', color: '#006c49' },
  headerRight: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  avatar: { width: 32, height: 32, borderRadius: 16, overflow: 'hidden', borderWidth: 2, borderColor: 'rgba(0,108,73,0.2)' },
  avatarImg: { width: '100%', height: '100%' },
  scrollContent: { paddingHorizontal: 24, paddingTop: 24, paddingBottom: 100 },
  classHeader: { flexDirection: 'column', gap: 16, marginBottom: 32 },
  breadcrumb: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 8 },
  breadcrumbText: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 0.5 },
  pageTitle: { fontSize: 32, fontWeight: '700', color: '#191c1d' },
  createBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, backgroundColor: '#006c49', paddingHorizontal: 24, paddingVertical: 12, borderRadius: 24, marginTop: 16 },
  createBtnText: { fontSize: 12, fontWeight: '700', color: '#ffffff' },
  tabsContainer: { borderBottomWidth: 1, borderBottomColor: 'rgba(187,202,191,0.3)', marginBottom: 32 },
  tab: { paddingHorizontal: 24, paddingVertical: 12, borderBottomWidth: 2, borderBottomColor: 'transparent' },
  tabActive: { borderBottomColor: '#006c49' },
  tabText: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 0.5 },
  tabTextActive: { color: '#006c49' },
  mainContent: { flexDirection: 'column', gap: 24 },
  calendarCard: { backgroundColor: 'rgba(255,255,255,0.8)', borderRadius: 16, padding: 24, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)' },
  calendarHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 },
  monthTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d' },
  monthNav: { flexDirection: 'row', gap: 8 },
  navBtn: { padding: 8, borderRadius: 8 },
  weekDays: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 16 },
  weekDayText: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 0.5 },
  datesGrid: { flexDirection: 'row', flexWrap: 'wrap' },
  dateCell: { width: `${100/7}%`, aspectRatio: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 12, position: 'relative' },
  dateCellSelected: { backgroundColor: '#10b981' },
  dateText: { fontSize: 16, color: '#191c1d' },
  dateTextDisabled: { fontSize: 16, color: '#bbcabf' },
  dateTextSelected: { color: '#ffffff', fontWeight: '700' },
  eventDot: { width: 6, height: 6, borderRadius: 3, position: 'absolute', bottom: 8 },
  agendaCard: { backgroundColor: 'rgba(255,255,255,0.8)', borderRadius: 16, padding: 24, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)' },
  agendaHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 },
  agendaTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d' },
  agendaDate: { fontSize: 12, fontWeight: '700', color: '#006c49' },
  eventList: { gap: 16 },
  eventItem: { backgroundColor: '#f3f4f5', borderRadius: 12, padding: 16, borderWidth: 1, borderColor: 'transparent' },
  eventItemHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 },
  eventTag: { paddingHorizontal: 12, paddingVertical: 4, borderRadius: 16 },
  eventTagText: { fontSize: 10, fontWeight: '700' },
  eventTime: { fontSize: 12, fontWeight: '700', color: '#3c4a42' },
  eventName: { fontSize: 18, fontWeight: '700', color: '#191c1d', marginBottom: 4 },
  eventDesc: { fontSize: 14, color: '#3c4a42' },
  dailyChallengeBox: { marginTop: 32, paddingTop: 24, borderTopWidth: 1, borderTopColor: 'rgba(187,202,191,0.2)', flexDirection: 'row', alignItems: 'center', gap: 16 },
  dailyChallengeIcon: { width: 48, height: 48, borderRadius: 24, backgroundColor: '#006c49', alignItems: 'center', justifyContent: 'center' },
  dailyChallengeLabel: { fontSize: 12, fontWeight: '700', color: '#006c49', marginBottom: 4 },
  dailyChallengeText: { fontSize: 16, fontWeight: '600', color: '#191c1d' },
});
