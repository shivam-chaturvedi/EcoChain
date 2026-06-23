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

const ImpactHubScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Icon name="eco" size={32} color="#006c49" />
          <Text style={styles.headerTitle}>ChonX</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconBtn}>
            <Icon name="notifications" size={24} color="#3c4a42" />
          </TouchableOpacity>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=200' }}
            style={styles.avatar}
          />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.titleSection}>
          <Text style={styles.pageTitle}>Impact</Text>
          <Text style={styles.pageSubtitle}>Track your sustainable footprint and stay connected with the ChonX community.</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.titleRow}>
              <View style={styles.iconBoxSecondary}>
                <Icon name="calendar-today" size={24} color="#006f64" />
              </View>
              <Text style={styles.cardTitle}>Calendar</Text>
            </View>
            <View style={styles.streakBadge}>
              <Icon name="local-fire-department" size={14} color="#006c49" />
              <Text style={styles.streakText}>12 DAY STREAK</Text>
            </View>
          </View>
          <View style={styles.calendarRow}>
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
              <Text key={i} style={styles.dayLabel}>{day}</Text>
            ))}
            <View style={styles.dateBox}><Text style={styles.dateText}>14</Text></View>
            <LinearGradient colors={['#10b981', '#006c49']} style={styles.dateBoxActive}>
              <Text style={styles.dateTextActive}>15</Text>
            </LinearGradient>
            <View style={styles.dateBoxHighlight}><Text style={styles.dateTextHighlight}>16</Text></View>
            <View style={styles.dateBox}><Text style={styles.dateText}>17</Text></View>
            <View style={styles.dateBox}><Text style={styles.dateText}>18</Text></View>
            <View style={styles.dateBox}><Text style={styles.dateText}>19</Text></View>
            <View style={styles.dateBox}><Text style={styles.dateText}>20</Text></View>
          </View>
          <Text style={styles.milestoneText}>Next Milestone: Campus Clean-up this Thursday.</Text>
        </View>

        <View style={[styles.card, styles.walletCard]}>
          <View style={styles.walletIconContainer}>
            <Icon name="account-balance-wallet" size={32} color="#fff" />
          </View>
          <Text style={styles.walletLabel}>MY WALLET</Text>
          <Text style={styles.walletValue}>12,450 <Text style={styles.walletCurrency}>XP</Text></Text>
          <View style={styles.xpProgressContainer}>
            <View style={styles.xpProgressHeader}>
              <Text style={styles.xpLevel}>LEVEL 8</Text>
              <Text style={styles.xpPercent}>75%</Text>
            </View>
            <View style={styles.xpBarBg}>
              <LinearGradient colors={['#10b981', '#71f8e4']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.xpBarFill} />
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.titleRow}>
              <View style={styles.iconBoxTertiary}>
                <Icon name="rss-feed" size={24} color="#005ac2" />
              </View>
              <Text style={styles.cardTitle}>Activity Feed</Text>
            </View>
            <TouchableOpacity style={styles.seeAllBtn}>
              <Text style={styles.seeAllText}>SEE ALL</Text>
              <Icon name="chevron-right" size={16} color="#006c49" />
            </TouchableOpacity>
          </View>
          
          <View style={styles.feedItem}>
            <Image source={{ uri: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=100' }} style={styles.feedImg} />
            <View style={styles.feedContent}>
              <Text style={styles.feedTitle}>Oak High planted 50 trees!</Text>
              <Text style={styles.feedDesc}>The whole community joined the spring initiative...</Text>
              <Text style={styles.feedTime}>2 HOURS AGO</Text>
            </View>
          </View>
          
          <View style={styles.feedItem}>
            <Image source={{ uri: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&q=80&w=100' }} style={styles.feedImg} />
            <View style={styles.feedContent}>
              <Text style={styles.feedTitle}>New Badge Earned: 'Eco-Warrior'</Text>
              <Text style={styles.feedDesc}>You've recycled 100kg of plastic this month.</Text>
              <Text style={styles.feedTime}>5 HOURS AGO</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.fab}>
        <LinearGradient colors={['#10b981', '#006c49']} style={styles.fabGradient}>
          <Icon name="add" size={32} color="#fff" />
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  header: {
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e1e3e4',
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  headerTitle: { fontSize: 24, fontWeight: '800', color: '#006c49' },
  headerRight: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  iconBtn: { padding: 4 },
  avatar: { width: 40, height: 40, borderRadius: 20, borderWidth: 2, borderColor: '#10b981' },
  scrollContent: { padding: 24, paddingBottom: 100 },
  titleSection: { alignItems: 'center', marginBottom: 32 },
  pageTitle: { fontSize: 40, fontWeight: '800', color: '#191c1d', marginBottom: 8 },
  pageSubtitle: { fontSize: 16, color: '#3c4a42', textAlign: 'center', maxWidth: 300 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#e1e3e4',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 },
  titleRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  iconBoxSecondary: { padding: 8, backgroundColor: '#6df5e1', borderRadius: 8 },
  iconBoxTertiary: { padding: 8, backgroundColor: 'rgba(113, 161, 255, 0.2)', borderRadius: 8 },
  cardTitle: { fontSize: 20, fontWeight: '600', color: '#191c1d' },
  streakBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(16, 185, 129, 0.1)', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 20 },
  streakText: { fontSize: 10, fontWeight: '700', color: '#006c49', marginLeft: 4, letterSpacing: 0.5 },
  calendarRow: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 16 },
  dayLabel: { width: '14%', textAlign: 'center', fontSize: 12, fontWeight: '700', color: '#3c4a42', marginBottom: 8 },
  dateBox: { width: '13%', height: 40, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f3f4f5', borderRadius: 8, marginBottom: 8 },
  dateText: { fontSize: 14, color: '#3c4a42' },
  dateBoxActive: { width: '13%', height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 8, marginBottom: 8 },
  dateTextActive: { fontSize: 14, color: '#fff', fontWeight: '700' },
  dateBoxHighlight: { width: '13%', height: 40, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(16, 185, 129, 0.2)', borderRadius: 8, marginBottom: 8 },
  dateTextHighlight: { fontSize: 14, color: '#006c49' },
  milestoneText: { fontSize: 14, color: '#3c4a42' },
  walletCard: { alignItems: 'center', borderColor: 'rgba(16, 185, 129, 0.3)', borderWidth: 2 },
  walletIconContainer: { width: 64, height: 64, borderRadius: 32, backgroundColor: '#006c49', alignItems: 'center', justifyContent: 'center', marginBottom: 16 },
  walletLabel: { fontSize: 12, fontWeight: '700', color: '#006c49', letterSpacing: 1, marginBottom: 4 },
  walletValue: { fontSize: 28, fontWeight: '700', color: '#191c1d', marginBottom: 16 },
  walletCurrency: { fontSize: 18, fontWeight: '400', color: '#3c4a42' },
  xpProgressContainer: { width: '100%', paddingHorizontal: 16 },
  xpProgressHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  xpLevel: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 0.5 },
  xpPercent: { fontSize: 12, fontWeight: '700', color: '#006c49' },
  xpBarBg: { height: 8, backgroundColor: 'rgba(16, 185, 129, 0.1)', borderRadius: 4, overflow: 'hidden' },
  xpBarFill: { height: '100%', width: '75%', borderRadius: 4 },
  seeAllBtn: { flexDirection: 'row', alignItems: 'center' },
  seeAllText: { fontSize: 12, fontWeight: '700', color: '#006c49', letterSpacing: 0.5 },
  feedItem: { flexDirection: 'row', gap: 16, marginBottom: 20 },
  feedImg: { width: 48, height: 48, borderRadius: 24 },
  feedContent: { flex: 1 },
  feedTitle: { fontSize: 16, fontWeight: '600', color: '#191c1d', marginBottom: 4 },
  feedDesc: { fontSize: 14, color: '#3c4a42', marginBottom: 8 },
  feedTime: { fontSize: 10, fontWeight: '700', color: '#6c7a71', letterSpacing: 0.5 },
  fab: { position: 'absolute', bottom: 32, right: 24, zIndex: 100 },
  fabGradient: { width: 64, height: 64, borderRadius: 32, alignItems: 'center', justifyContent: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8, elevation: 8 },
});

export default ImpactHubScreen;
