import React from 'react';
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
import LinearGradient from 'react-native-linear-gradient';

export default function StudentDashboardScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.avatarWrapperSmall}>
            <Image 
              source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAc6Ud8lHmMWGlaq9j66zX-QkcHGzPL0A13yQlqbTc4ZochKCW_l_Izgl1pQr3CodpBGVGtunJ8iNs4WFLdyvDoYTIjfLdZ5IBVceGBtVbZQtxg0HPxRDp8Xn5x-Y67kyY0_xRjaRH96KnnRWz3BNzZ17bgxzH-F9WuzN9XipCPquiVm1l5be5GMVAoSUYRrjQhbFSRhIganJmZ7O7fuHeK2omR8beALjgvKsUfSIhuz1YLpthZUkSIAUHbJFIsgD_qImYkOossdr3Q'}}
              style={styles.avatarImage}
            />
          </View>
          <Text style={styles.logoText}>ChonX</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconBtn} onPress={() => navigation.navigate('NotificationCenter')}>
            <Icon name="notifications" size={24} color="#006c49" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.greetingSection}>
          <Text style={styles.greetingTitle}>Good Morning, Aisha 🌤️</Text>
          <Text style={styles.greetingSub}>Let’s save the planet today.</Text>
        </View>

        <View style={styles.grid}>
          {/* Carbon Footprint */}
          <LinearGradient colors={['#006c49', '#006b5f']} style={styles.carbonCard}>
            <View style={styles.carbonContent}>
              <Text style={styles.carbonLabel}>CARBON FOOTPRINT SUMMARY</Text>
              <Text style={styles.carbonTitle}>Today’s Footprint: 4.7 kg CO₂</Text>
              <Text style={styles.carbonDesc}>You're 12% lower than your weekly average. Great job, Aisha!</Text>
              <TouchableOpacity style={styles.viewDetailsBtn} onPress={() => navigation.navigate('CarbonFootprintResult')}>
                <Text style={styles.viewDetailsText}>VIEW DETAILS</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.carbonProgressWrapper}>
              <View style={styles.carbonProgressCircle}>
                <Text style={styles.carbonProgressValue}>-12%</Text>
                <Text style={styles.carbonProgressLabel}>SAVED</Text>
              </View>
            </View>
          </LinearGradient>

          <View style={styles.rowGrid}>
            {/* EcoPoints */}
            <View style={styles.pointsCard}>
              <View style={styles.pointsIconBg}>
                <Icon name="stars" size={32} color="#006f64" />
              </View>
              <Text style={styles.pointsLabel}>YOUR REWARDS</Text>
              <Text style={styles.pointsValue}>590</Text>
              <Text style={styles.pointsSub}>ECOPOINTS</Text>
              <TouchableOpacity style={styles.redeemBtn} onPress={() => navigation.navigate('EcoWallet')}>
                <Text style={styles.redeemText}>REDEEM POINTS</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.quickActionsContainer}>
              {/* Quick Actions 2x2 */}
              <View style={styles.quickActionsGrid}>
                <TouchableOpacity style={styles.quickActionCard} onPress={() => navigation.navigate('LogActivity')}>
                  <Icon name="add-task" size={32} color="#006c49" />
                  <Text style={styles.quickActionText}>Log Activity</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.quickActionCard} onPress={() => navigation.navigate('ArenaHub')}>
                  <Icon name="card-giftcard" size={32} color="#005ac2" />
                  <Text style={styles.quickActionText}>View Rewards</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.quickActionCard} onPress={() => navigation.navigate('StudentCalendar')}>
                  <Icon name="calendar-month" size={32} color="#006b5f" />
                  <Text style={styles.quickActionText}>Calendar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.quickActionCard} onPress={() => navigation.navigate('Leaderboard')}>
                  <Icon name="leaderboard" size={32} color="#ba1a1a" />
                  <Text style={styles.quickActionText}>Leaderboard</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Current Challenge */}
          <View style={styles.challengeCard}>
            <View style={styles.challengeIconBg}>
              <Icon name="energy-savings-leaf" size={40} color="#006c49" />
            </View>
            <View style={styles.challengeContent}>
              <View style={styles.challengeHeader}>
                <Text style={styles.challengeTitle}>Current Challenge: Plastic-Free Week</Text>
                <View style={styles.challengeBadge}>
                  <Text style={styles.challengeBadgeText}>3/7 DAYS</Text>
                </View>
              </View>
              <View style={styles.progressBarBg}>
                <View style={[styles.progressBarFill, { width: '43%' }]} />
              </View>
              <Text style={styles.challengeDesc}>Avoid single-use plastics to earn a 'Green Warrior' badge.</Text>
            </View>
          </View>

          {/* Recent Activities */}
          <View style={styles.recentCard}>
            <View style={styles.recentHeader}>
              <Text style={styles.recentTitle}>Recent Activities</Text>
              <TouchableOpacity onPress={() => navigation.navigate('ActivityFeed')}>
                <Text style={styles.seeAllText}>SEE ALL</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.activityList}>
              <View style={styles.activityItem}>
                <View style={[styles.activityIconBg, { backgroundColor: 'rgba(16,185,129,0.2)' }]}>
                  <Icon name="directions-walk" size={24} color="#006c49" />
                </View>
                <View style={styles.activityContent}>
                  <Text style={styles.activityTitle}>Walked to School</Text>
                  <Text style={styles.activityDesc}>Earned 15 EcoPoints</Text>
                </View>
                <Text style={styles.activityTime}>2h ago</Text>
              </View>
              
              <View style={styles.activityItem}>
                <View style={[styles.activityIconBg, { backgroundColor: 'rgba(109,245,225,0.2)' }]}>
                  <Icon name="recycling" size={24} color="#006b5f" />
                </View>
                <View style={styles.activityContent}>
                  <Text style={styles.activityTitle}>Plastic Sorting</Text>
                  <Text style={styles.activityDesc}>Earned 20 EcoPoints</Text>
                </View>
                <Text style={styles.activityTime}>Yesterday</Text>
              </View>
              
              <View style={styles.activityItem}>
                <View style={[styles.activityIconBg, { backgroundColor: 'rgba(113,161,255,0.2)' }]}>
                  <Icon name="lightbulb" size={24} color="#005ac2" />
                </View>
                <View style={styles.activityContent}>
                  <Text style={styles.activityTitle}>Energy Quiz Master</Text>
                  <Text style={styles.activityDesc}>Earned 50 EcoPoints</Text>
                </View>
                <Text style={styles.activityTime}>2d ago</Text>
              </View>
            </View>
          </View>

          {/* Upcoming Event */}
          <View style={styles.eventCard}>
            <View style={styles.eventContent}>
              <Text style={styles.eventTitle}>Annual School Eco-Fair</Text>
              <Text style={styles.eventDesc}>Riverside Academy Main Hall • 09:00 AM</Text>
            </View>
            <TouchableOpacity style={styles.eventBtn}>
              <Text style={styles.eventBtnText}>SET REMINDER</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>

      {/* FAB */}
      <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate('EcoBot')}>
        <Icon name="smart-toy" size={32} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { height: 64, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 24, backgroundColor: 'rgba(248, 249, 250, 0.8)', borderBottomWidth: 1, borderBottomColor: 'rgba(187, 202, 191, 0.1)' },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  avatarWrapperSmall: { width: 40, height: 40, borderRadius: 20, borderWidth: 2, borderColor: '#10b981', overflow: 'hidden' },
  avatarImage: { width: '100%', height: '100%', resizeMode: 'cover' },
  logoText: { fontSize: 24, fontWeight: '800', color: '#006c49', letterSpacing: -0.5 },
  headerRight: { flexDirection: 'row', alignItems: 'center' },
  iconBtn: { padding: 8, borderRadius: 20, backgroundColor: 'rgba(16,185,129,0.1)' },
  scrollContent: { padding: 24, paddingBottom: 100 },
  greetingSection: { marginBottom: 24 },
  greetingTitle: { fontSize: 24, fontWeight: '700', color: '#191c1d' },
  greetingSub: { fontSize: 18, color: '#3c4a42' },
  grid: { gap: 24 },
  carbonCard: { borderRadius: 16, padding: 24, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, shadowColor: '#006c49', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.3, shadowRadius: 16, elevation: 8 },
  carbonContent: { flex: 1, minWidth: 200, gap: 8 },
  carbonLabel: { fontSize: 12, fontWeight: '700', color: 'rgba(255,255,255,0.9)', letterSpacing: 1 },
  carbonTitle: { fontSize: 32, fontWeight: '700', color: '#fff' },
  carbonDesc: { fontSize: 16, color: 'rgba(255,255,255,0.8)' },
  viewDetailsBtn: { alignSelf: 'flex-start', backgroundColor: '#fff', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 16, marginTop: 8 },
  viewDetailsText: { fontSize: 12, fontWeight: '700', color: '#006c49' },
  carbonProgressWrapper: { width: 160, height: 160, alignItems: 'center', justifyContent: 'center' },
  carbonProgressCircle: { width: 120, height: 120, borderRadius: 60, borderWidth: 8, borderColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  carbonProgressValue: { fontSize: 28, fontWeight: '700', color: '#fff' },
  carbonProgressLabel: { fontSize: 10, fontWeight: '700', color: '#fff' },
  rowGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 24 },
  pointsCard: { flex: 1, minWidth: 250, backgroundColor: 'rgba(255,255,255,0.8)', padding: 24, borderRadius: 16, borderWidth: 2, borderColor: 'rgba(16,185,129,0.2)', alignItems: 'center' },
  pointsIconBg: { width: 64, height: 64, borderRadius: 32, backgroundColor: '#6df5e1', alignItems: 'center', justifyContent: 'center', marginBottom: 12 },
  pointsLabel: { fontSize: 12, fontWeight: '700', color: '#3c4a42' },
  pointsValue: { fontSize: 48, fontWeight: '800', color: '#006c49' },
  pointsSub: { fontSize: 12, fontWeight: '700', color: '#191c1d', marginBottom: 16 },
  redeemBtn: { width: '100%', backgroundColor: '#e7e8e9', paddingVertical: 12, borderRadius: 8, alignItems: 'center' },
  redeemText: { fontSize: 12, fontWeight: '700', color: '#006c49' },
  quickActionsContainer: { flex: 1.5, minWidth: 300 },
  quickActionsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  quickActionCard: { width: '48%', backgroundColor: 'rgba(255,255,255,0.8)', padding: 16, borderRadius: 16, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)', alignItems: 'center', justifyContent: 'center', gap: 8, minHeight: 120 },
  quickActionText: { fontSize: 12, fontWeight: '700', color: '#191c1d' },
  challengeCard: { backgroundColor: '#fff', padding: 24, borderRadius: 16, borderWidth: 2, borderColor: '#10b981', flexDirection: 'row', alignItems: 'center', gap: 24 },
  challengeIconBg: { width: 64, height: 64, borderRadius: 16, backgroundColor: 'rgba(16,185,129,0.1)', alignItems: 'center', justifyContent: 'center' },
  challengeContent: { flex: 1, gap: 8 },
  challengeHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  challengeTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d', flex: 1, marginRight: 8 },
  challengeBadge: { backgroundColor: 'rgba(16,185,129,0.2)', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 16 },
  challengeBadgeText: { fontSize: 12, fontWeight: '700', color: '#006c49' },
  progressBarBg: { height: 12, backgroundColor: '#edeeef', borderRadius: 6 },
  progressBarFill: { height: '100%', backgroundColor: '#006c49', borderRadius: 6 },
  challengeDesc: { fontSize: 16, color: '#3c4a42' },
  recentCard: { backgroundColor: 'rgba(255,255,255,0.8)', padding: 24, borderRadius: 16, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)' },
  recentHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  recentTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d' },
  seeAllText: { fontSize: 12, fontWeight: '700', color: '#006c49' },
  activityList: {},
  activityItem: { flexDirection: 'row', alignItems: 'center', gap: 16, paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: 'rgba(187,202,191,0.3)' },
  activityIconBg: { width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  activityContent: { flex: 1 },
  activityTitle: { fontSize: 16, fontWeight: '700', color: '#191c1d' },
  activityDesc: { fontSize: 12, color: '#3c4a42' },
  activityTime: { fontSize: 12, color: '#6c7a71' },
  eventCard: { backgroundColor: '#f3f4f5', padding: 24, borderRadius: 16, borderLeftWidth: 4, borderLeftColor: '#006c49', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 },
  eventContent: { flex: 1, minWidth: 200 },
  eventTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d' },
  eventDesc: { fontSize: 16, color: '#3c4a42' },
  eventBtn: { backgroundColor: '#006c49', paddingHorizontal: 24, paddingVertical: 12, borderRadius: 8 },
  eventBtnText: { color: '#fff', fontSize: 12, fontWeight: '700' },
  fab: { position: 'absolute', bottom: 100, right: 24, width: 56, height: 56, borderRadius: 28, backgroundColor: '#006c49', alignItems: 'center', justifyContent: 'center', elevation: 8, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8 },
});
