import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

export default function SchoolCampaignDetailsScreen({ navigation }: any) {
  const [joined, setJoined] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.heroContainer}>
          <Image 
            source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWth6bM4ovcr0mWDPzp4BaznzvYxcav2fPqVbF3Pc-vSJrqZSViV9XyiYcaCaLK_ALhs-sW2qUEa2J4Mhxe3qp8i75DN3WahureL6uo-7VgGZrTeqYJ0WNy5x7DoXk68s9nQZk3-388Ey25k_1IY478ULxXehy4wioBXroUp9jAPmrKmMVdEHqTvTSAo2uWxbKNI03FILTwuSlu-ZTIH3G0_GT9tk4CsH1rit0Gpa9DdDUYeJeLu8v_7TuTr_5xzr2TkX6KNcfotOw'}}
            style={styles.heroImage}
          />
          <LinearGradient colors={['rgba(0,0,0,0.6)', 'transparent', 'transparent']} style={styles.heroGradient} />
          
          <View style={styles.topControls}>
            <TouchableOpacity style={styles.controlBtn} onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.controlBtn}>
              <Icon name="share" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
          
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>Community Initiative</Text>
          </View>
        </View>

        <View style={styles.mainContent}>
          <View style={styles.headerCard}>
            <View style={styles.headerCardTop}>
              <Text style={styles.title}>Reforest City</Text>
              <View style={styles.leadInfoRow}>
                <View style={styles.leadAvatarContainer}>
                  <Image 
                    source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSURO88WsPSilqKIommPFDRpiTf5lZTy7HpWCQcK6XaRx0HVgsohn_RSLro3mm7OD1NrlIU7u0HkUrWW0IE2Smt7MQ9ViIfi1Xk-C9xJVNgXURr3wQctnv-WsbNd--snG5GXTuavk7dJbudjYlDIiOy6NO87TLZiEZBGH9vMxO0RoplEGR5IJhTmLdYF72zRssZU_dT9UnflSKEHfu7kCk04-s36-RUnnmAmKBsad656Ug4YaIaxK0Z5HKAR61qYc5DCH64DfQiUB5'}}
                    style={styles.leadAvatar}
                  />
                </View>
                <Text style={styles.leadText}>Lead by: <Text style={styles.leadName}>Ms. Elena Rivera</Text></Text>
                <View style={styles.divider} />
                <View style={styles.dateRow}>
                  <Icon name="calendar-today" size={18} color="#3c4a42" />
                  <Text style={styles.dateText}>Oct 20 - Oct 25, 2024</Text>
                </View>
              </View>
            </View>

            <View style={styles.quickStatsRow}>
              <View style={styles.quickStatBox}>
                <Text style={styles.quickStatLabel}>XP VALUE</Text>
                <Text style={styles.quickStatValue}>450</Text>
              </View>
              <View style={styles.quickStatBox}>
                <Text style={styles.quickStatLabel}>DURATION</Text>
                <Text style={styles.quickStatValue}>6 Days</Text>
              </View>
            </View>
          </View>

          <View style={styles.missionCard}>
            <View style={styles.missionHeader}>
              <Icon name="flag" size={24} color="#006c49" />
              <Text style={styles.missionTitle}>Mission Description</Text>
            </View>
            <Text style={styles.missionText}>
              Help us plant 500 native trees in the downtown district to improve local air quality and create new green spaces for the community. This urban reforestation project is designed to tackle urban heat islands while fostering a sense of environmental stewardship among students.
            </Text>
          </View>

          <View style={styles.scheduleCard}>
            <View style={styles.scheduleHeader}>
              <View style={styles.scheduleTitleRow}>
                <Icon name="event-note" size={24} color="#006c49" />
                <Text style={styles.scheduleTitle}>Campaign Schedule</Text>
              </View>
              <View style={styles.scheduleMonthRow}>
                <Icon name="verified" size={16} color="#006c49" />
                <Text style={styles.scheduleMonthText}>OCTOBER 2024</Text>
              </View>
            </View>

            <View style={styles.calendarGrid}>
              {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map(day => (
                <Text key={day} style={styles.calendarDayText}>{day}</Text>
              ))}
              
              <View style={styles.calendarCell}><Text style={styles.calendarCellInactive}>17</Text></View>
              <View style={styles.calendarCell}><Text style={styles.calendarCellInactive}>18</Text></View>
              <View style={styles.calendarCell}><Text style={styles.calendarCellInactive}>19</Text></View>
              
              {[20, 21, 22, 23, 24, 25].map(date => (
                <LinearGradient 
                  key={date}
                  colors={['#10b981', '#006c49']}
                  style={styles.calendarCellActive}
                >
                  <Text style={styles.calendarCellActiveMonth}>OCT</Text>
                  <Text style={styles.calendarCellActiveDate}>{date}</Text>
                </LinearGradient>
              ))}
              
              <View style={styles.calendarCell}><Text style={styles.calendarCellInactive}>26</Text></View>
            </View>

            <View style={styles.infoBanner}>
              <View style={styles.infoIconBg}>
                <Icon name="info" size={20} color="#005ac2" />
              </View>
              <Text style={styles.infoBannerText}>
                Joining this campaign will automatically block these dates in your <Text style={{fontWeight:'bold', color:'#006c49'}}>Eco Calendar</Text>. Reminders will be sent 24 hours before each event begins.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        {!joined ? (
          <TouchableOpacity style={styles.joinBtn} onPress={() => setJoined(true)}>
            <LinearGradient colors={['#006c49', '#10b981']} start={{x:0,y:0}} end={{x:1,y:0}} style={styles.joinBtnGradient}>
              <Text style={styles.joinBtnText}>Join Campaign</Text>
              <Icon name="arrow-forward" size={24} color="#fff" />
            </LinearGradient>
          </TouchableOpacity>
        ) : (
          <View style={styles.successMsg}>
            <View style={styles.successIconBg}>
              <Icon name="check-circle" size={24} color="#fff" />
            </View>
            <View>
              <Text style={styles.successTitle}>You're enrolled!</Text>
              <Text style={styles.successDesc}>6 days have been added to your Eco Calendar.</Text>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  scrollContent: { paddingBottom: 120 },
  heroContainer: { height: 350, position: 'relative' },
  heroImage: { width: '100%', height: '100%', resizeMode: 'cover' },
  heroGradient: { ...StyleSheet.absoluteFill as any },
  topControls: { position: 'absolute', top: 24, left: 24, right: 24, flexDirection: 'row', justifyContent: 'space-between' },
  controlBtn: { width: 48, height: 48, borderRadius: 24, backgroundColor: 'rgba(255,255,255,0.2)', alignItems: 'center', justifyContent: 'center' },
  categoryBadge: { position: 'absolute', bottom: 40, left: 24, backgroundColor: '#6df5e1', paddingHorizontal: 16, paddingVertical: 6, borderRadius: 16 },
  categoryText: { fontSize: 12, fontWeight: '700', color: '#006f64' },
  mainContent: { marginTop: -24, paddingHorizontal: 24, zIndex: 10 },
  headerCard: { backgroundColor: '#fff', borderRadius: 16, padding: 24, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 4, elevation: 2, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)', marginBottom: 24 },
  headerCardTop: { marginBottom: 24 },
  title: { fontSize: 32, fontWeight: '700', color: '#191c1d', marginBottom: 8 },
  leadInfoRow: { flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', gap: 8 },
  leadAvatarContainer: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#10b981', overflow: 'hidden' },
  leadAvatar: { width: '100%', height: '100%' },
  leadText: { fontSize: 16, color: '#3c4a42' },
  leadName: { fontWeight: '600', color: '#006c49' },
  divider: { height: 16, width: 1, backgroundColor: '#bbcabf' },
  dateRow: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  dateText: { fontSize: 16, color: '#3c4a42' },
  quickStatsRow: { flexDirection: 'row', gap: 16 },
  quickStatBox: { flex: 1, alignItems: 'center', paddingVertical: 12, backgroundColor: '#f3f4f5', borderRadius: 8, borderWidth: 1, borderColor: 'rgba(187, 202, 191, 0.2)' },
  quickStatLabel: { fontSize: 12, fontWeight: '700', color: '#3c4a42', marginBottom: 4 },
  quickStatValue: { fontSize: 28, fontWeight: '700', color: '#006c49' },
  missionCard: { backgroundColor: '#fff', borderRadius: 16, padding: 24, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 4, elevation: 2, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)', marginBottom: 24 },
  missionHeader: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 16 },
  missionTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d' },
  missionText: { fontSize: 18, color: '#3c4a42', lineHeight: 28 },
  scheduleCard: { backgroundColor: '#fff', borderRadius: 16, padding: 24, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 4, elevation: 2, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)' },
  scheduleHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 },
  scheduleTitleRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  scheduleTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d' },
  scheduleMonthRow: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  scheduleMonthText: { fontSize: 12, fontWeight: '700', color: '#006c49' },
  calendarGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  calendarDayText: { width: (width - 48 - 48 - 48) / 7, textAlign: 'center', fontSize: 12, fontWeight: '700', color: '#3c4a42', opacity: 0.5, marginBottom: 8 },
  calendarCell: { width: (width - 48 - 48 - 48) / 7, aspectRatio: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 8 },
  calendarCellInactive: { color: '#3c4a42', opacity: 0.2 },
  calendarCellActive: { width: (width - 48 - 48 - 48) / 7, aspectRatio: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 8 },
  calendarCellActiveMonth: { fontSize: 10, color: 'rgba(255,255,255,0.8)' },
  calendarCellActiveDate: { fontSize: 16, fontWeight: 'bold', color: '#fff' },
  infoBanner: { marginTop: 24, padding: 16, backgroundColor: '#f8f9fa', borderRadius: 8, flexDirection: 'row', alignItems: 'flex-start', gap: 16 },
  infoIconBg: { width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(113, 161, 255, 0.1)', alignItems: 'center', justifyContent: 'center' },
  infoBannerText: { flex: 1, fontSize: 16, color: '#3c4a42', lineHeight: 24 },
  bottomBar: { position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(255,255,255,0.9)', paddingHorizontal: 24, paddingVertical: 16, borderTopWidth: 1, borderTopColor: 'rgba(229,231,235,0.5)' },
  joinBtn: { width: '100%', borderRadius: 8, overflow: 'hidden', shadowColor: '#006c49', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 8, elevation: 4 },
  joinBtnGradient: { paddingVertical: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 },
  joinBtnText: { color: '#fff', fontSize: 24, fontWeight: '600' },
  successMsg: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  successIconBg: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#006c49', alignItems: 'center', justifyContent: 'center' },
  successTitle: { fontSize: 24, fontWeight: '700', color: '#006c49' },
  successDesc: { fontSize: 16, color: '#3c4a42' },
});
