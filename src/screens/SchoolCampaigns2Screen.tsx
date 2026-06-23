import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

export default function SchoolCampaigns2Screen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Icon name="eco" size={28} color="#006c49" />
          <Text style={styles.logoText}>ChonX</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconBtn}>
            <Icon name="search" size={24} color="#3c4a42" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <Icon name="notifications" size={24} color="#3c4a42" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.searchSection}>
          <View>
            <Text style={styles.title}>School Campaigns</Text>
            <Text style={styles.subtitle}>Lead the change in your local environment.</Text>
          </View>
          <View style={styles.searchBarContainer}>
            <View style={styles.searchBar}>
              <Icon name="search" size={20} color="#6c7a71" style={styles.searchIcon} />
              <TextInput 
                style={styles.searchInput}
                placeholder="Search campaigns..."
                placeholderTextColor="#6c7a71"
              />
            </View>
            <TouchableOpacity style={styles.filterBtn}>
              <Icon name="filter-list" size={20} color="#3c4a42" />
              <Text style={styles.filterText}>Filter</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.grid}>
          {/* Card 1 */}
          <View style={styles.card}>
            <View style={styles.cardImageWrapper}>
              <Image 
                source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpbZtJciWJHFR7wUp1J0YTYIlfqkgSuljDFDxfD6gRGNq5nvhiwo1nV5YzKXTQWnCZ3bG0Epu7VFRCovm9Bdrq39nvtoas3oYkB6FVi4UQHznsLzrHqmG9rJUjai9Tr1bPH1BKv0PrseNxQ_D1t5Is0ImVcxb7HE7E-okqj5zZi_u1ckJGIkm7FtuPR294Hc5x9rDh749CWdHIgSjiJdpbn_d8k9E86FlwreO8VMk-muBqhViTcC6Tt-slZO-KSD7FHxoJpXZugLcW'}}
                style={styles.cardImage}
              />
              <LinearGradient colors={['transparent', 'rgba(0,0,0,0.6)']} style={styles.cardGradient} />
              <View style={styles.cardHeaderInfo}>
                <View style={[styles.badge, { backgroundColor: '#10b981' }]}>
                  <Text style={[styles.badgeText, { color: '#00422b' }]}>ACTIVE</Text>
                </View>
                <Text style={styles.cardTitle}>Plastic-Free March</Text>
              </View>
            </View>
            <View style={styles.cardContent}>
              <View style={styles.progressSection}>
                <View style={styles.progressRow}>
                  <Text style={styles.progressLabel}>Participation Progress</Text>
                  <Text style={[styles.progressValue, { color: '#006c49' }]}>78%</Text>
                </View>
                <View style={styles.progressBarBg}>
                  <LinearGradient colors={['#006c49', '#10b981']} start={{x:0,y:0}} end={{x:1,y:0}} style={[styles.progressBarFill, { width: '78%' }]} />
                </View>
              </View>
              <View style={styles.actionGrid}>
                <TouchableOpacity style={[styles.actionBtn, { backgroundColor: '#006c49' }]}>
                  <Icon name="settings" size={20} color="#fff" />
                  <Text style={[styles.actionBtnText, { color: '#fff' }]}>Manage</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.actionBtn, { backgroundColor: '#6df5e1' }]}>
                  <Icon name="edit" size={20} color="#006f64" />
                  <Text style={[styles.actionBtnText, { color: '#006f64' }]}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.actionBtn, { backgroundColor: '#e7e8e9' }]}>
                  <Icon name="insights" size={20} color="#3c4a42" />
                  <Text style={[styles.actionBtnText, { color: '#3c4a42' }]}>Insights</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.cardFooter}>
                <View style={styles.avatarGroup}>
                  <View style={[styles.smallAvatar, { backgroundColor: '#10b981', zIndex: 3 }]}><Text style={styles.avatarText}>JS</Text></View>
                  <View style={[styles.smallAvatar, { backgroundColor: '#6df5e1', zIndex: 2, marginLeft: -8 }]}><Text style={[styles.avatarText, { color: '#006f64' }]}>AK</Text></View>
                  <View style={[styles.smallAvatar, { backgroundColor: '#71a1ff', zIndex: 1, marginLeft: -8 }]}><Text style={[styles.avatarText, { color: '#00367a' }]}>+12</Text></View>
                </View>
                <TouchableOpacity style={styles.shareBtn}>
                  <Icon name="share" size={20} color="#006c49" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Card 2 */}
          <View style={styles.card}>
            <View style={styles.cardImageWrapper}>
              <Image 
                source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDU10HnykR7vjDG15m51JYa2N10zSbH1Sn21SZNKljJsOMJKvYliUjl075zMpb-mGlWVSCVMTKmxJdXVsk9emptSCqMJQwhmJA8hslZ9BmlBY-EzPN7a7k3F6O15MWNZfB1JlA2wZm959kQ-YEs0euLb6yas0yEGJs5Pcufj_9ZXn7fGUVCyBXeihYky37EGaIv61rGwyNzgZXc9-3dRil8pwYwmeWNLypgU5FrmgECBGuB_isgyKYoU5RZWzuRx-OtmoOCVCcZWcjV'}}
                style={styles.cardImage}
              />
              <LinearGradient colors={['transparent', 'rgba(0,0,0,0.6)']} style={styles.cardGradient} />
              <View style={styles.cardHeaderInfo}>
                <View style={[styles.badge, { backgroundColor: '#6df5e1' }]}>
                  <Text style={[styles.badgeText, { color: '#006f64' }]}>PLANNING</Text>
                </View>
                <Text style={styles.cardTitle}>The Solar Orchard</Text>
              </View>
            </View>
            <View style={styles.cardContent}>
              <View style={styles.progressSection}>
                <View style={styles.progressRow}>
                  <Text style={styles.progressLabel}>Funding Goal</Text>
                  <Text style={[styles.progressValue, { color: '#006b5f' }]}>42%</Text>
                </View>
                <View style={styles.progressBarBg}>
                  <View style={[styles.progressBarFill, { width: '42%', backgroundColor: '#006b5f' }]} />
                </View>
              </View>
              <View style={styles.actionGrid}>
                <TouchableOpacity style={[styles.actionBtn, { backgroundColor: '#006c49' }]}>
                  <Icon name="settings" size={20} color="#fff" />
                  <Text style={[styles.actionBtnText, { color: '#fff' }]}>Manage</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.actionBtn, { backgroundColor: '#6df5e1' }]}>
                  <Icon name="edit" size={20} color="#006f64" />
                  <Text style={[styles.actionBtnText, { color: '#006f64' }]}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.actionBtn, { backgroundColor: '#e7e8e9' }]}>
                  <Icon name="insights" size={20} color="#3c4a42" />
                  <Text style={[styles.actionBtnText, { color: '#3c4a42' }]}>Insights</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.cardFooter}>
                <View style={styles.avatarGroup}>
                  <View style={[styles.smallAvatar, { backgroundColor: '#4edea3', zIndex: 2 }]}><Text style={[styles.avatarText, { color: '#00422b' }]}>M</Text></View>
                  <View style={[styles.smallAvatar, { backgroundColor: '#005ac2', zIndex: 1, marginLeft: -8 }]}><Text style={[styles.avatarText, { color: '#fff' }]}>B</Text></View>
                </View>
                <TouchableOpacity style={styles.shareBtn}>
                  <Icon name="share" size={20} color="#006c49" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Card 3 */}
          <View style={styles.card}>
            <View style={styles.cardImageWrapper}>
              <Image 
                source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAS1r_rTInEUh5HqvwsbRB3RUMr2i9pKiv8vMJ57ZEMRjXTY0MExmN3lynXIE7MDY6x4lhxNNMcs5EZF96IL-6697V4R-W9eJqNYekFua-ChYYYFTlfsujCyegyBUw5TJmVWaM_V9Zt-wwon3ZT2pAXUPCxJhIZs9Aex8F0GsoTKd6edVTeU677gz0UTR8UMicy9ObggBcbbaGiKI-njFGivtX4NlSGjbVVY6B4eSQAPxC8_5Tj8Wuvk-YD71gTKxwU8FGPHyZdf0P_'}}
                style={styles.cardImage}
              />
              <LinearGradient colors={['transparent', 'rgba(0,0,0,0.6)']} style={styles.cardGradient} />
              <View style={styles.cardHeaderInfo}>
                <View style={[styles.badge, { backgroundColor: '#edeeef' }]}>
                  <Text style={[styles.badgeText, { color: '#3c4a42' }]}>COMPLETED</Text>
                </View>
                <Text style={styles.cardTitle}>Zero-Waste Cafeteria</Text>
              </View>
            </View>
            <View style={[styles.cardContent, { opacity: 0.9 }]}>
              <View style={styles.progressSection}>
                <View style={styles.progressRow}>
                  <Text style={styles.progressLabel}>Success Metric</Text>
                  <Text style={[styles.progressValue, { color: '#006c49' }]}>100%</Text>
                </View>
                <View style={styles.progressBarBg}>
                  <View style={[styles.progressBarFill, { width: '100%', backgroundColor: '#006c49' }]} />
                </View>
              </View>
              <View style={styles.actionGrid}>
                <TouchableOpacity style={[styles.actionBtn, { backgroundColor: '#006c49' }]}>
                  <Icon name="settings" size={20} color="#fff" />
                  <Text style={[styles.actionBtnText, { color: '#fff' }]}>Manage</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.actionBtn, { backgroundColor: '#6df5e1' }]}>
                  <Icon name="edit" size={20} color="#006f64" />
                  <Text style={[styles.actionBtnText, { color: '#006f64' }]}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.actionBtn, { backgroundColor: '#e7e8e9' }]}>
                  <Icon name="insights" size={20} color="#3c4a42" />
                  <Text style={[styles.actionBtnText, { color: '#3c4a42' }]}>Insights</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.cardFooter}>
                <View style={styles.verifiedRow}>
                  <Icon name="verified" size={18} color="#006c49" />
                  <Text style={styles.verifiedText}>Certified Sustainable</Text>
                </View>
                <TouchableOpacity style={styles.shareBtn}>
                  <Icon name="share" size={20} color="#006c49" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* New Campaign */}
          <TouchableOpacity style={styles.newCampaignCard}>
            <View style={styles.newCampaignIconBg}>
              <Icon name="add" size={32} color="#006c49" />
            </View>
            <Text style={styles.newCampaignTitle}>Start New Campaign</Text>
            <Text style={styles.newCampaignDesc}>Mobilize your community for a greener tomorrow.</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* FAB */}
      <TouchableOpacity style={styles.fab}>
        <Icon name="add" size={28} color="#fff" />
      </TouchableOpacity>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <View style={styles.navItem}>
          <Icon name="home" size={24} color="#3c4a42" />
          <Text style={styles.navText}>Home</Text>
        </View>
        <View style={styles.navItemActive}>
          <Icon name="leaderboard" size={24} color="#00422b" />
          <Text style={styles.navTextActive}>Impact</Text>
        </View>
        <View style={styles.navItem}>
          <Icon name="emoji-events" size={24} color="#3c4a42" />
          <Text style={styles.navText}>Arena</Text>
        </View>
        <View style={styles.navItem}>
          <Icon name="person" size={24} color="#3c4a42" />
          <Text style={styles.navText}>Profile</Text>
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
    borderBottomColor: 'rgba(187, 202, 191, 0.3)',
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  logoText: { fontSize: 24, fontWeight: '800', color: '#006c49' },
  headerRight: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  iconBtn: { padding: 8 },
  scrollContent: { padding: 24, paddingBottom: 100 },
  searchSection: { marginBottom: 32 },
  title: { fontSize: 32, fontWeight: '700', color: '#191c1d', marginBottom: 4 },
  subtitle: { fontSize: 16, color: '#3c4a42', marginBottom: 24 },
  searchBarContainer: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  searchBar: { flex: 1, position: 'relative' },
  searchIcon: { position: 'absolute', left: 16, top: 14, zIndex: 1 },
  searchInput: { backgroundColor: '#edeeef', height: 48, borderRadius: 12, paddingLeft: 48, paddingRight: 16, fontSize: 16, color: '#191c1d' },
  filterBtn: { flexDirection: 'row', alignItems: 'center', gap: 8, backgroundColor: '#edeeef', height: 48, paddingHorizontal: 16, borderRadius: 12 },
  filterText: { fontSize: 12, fontWeight: '700', color: '#3c4a42' },
  grid: { gap: 24 },
  card: { backgroundColor: 'rgba(255,255,255,0.8)', borderRadius: 16, overflow: 'hidden', borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)' },
  cardImageWrapper: { height: 192, position: 'relative' },
  cardImage: { width: '100%', height: '100%', resizeMode: 'cover' },
  cardGradient: { ...StyleSheet.absoluteFill as any },
  cardHeaderInfo: { position: 'absolute', bottom: 16, left: 24 },
  badge: { paddingHorizontal: 12, paddingVertical: 4, borderRadius: 16, alignSelf: 'flex-start', marginBottom: 8 },
  badgeText: { fontSize: 10, fontWeight: '700' },
  cardTitle: { fontSize: 24, fontWeight: '600', color: '#fff' },
  cardContent: { padding: 24 },
  progressSection: { marginBottom: 16 },
  progressRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  progressLabel: { fontSize: 12, fontWeight: '700', color: '#3c4a42' },
  progressValue: { fontSize: 16, fontWeight: '700' },
  progressBarBg: { height: 12, backgroundColor: 'rgba(16,185,129,0.1)', borderRadius: 6, overflow: 'hidden' },
  progressBarFill: { height: '100%', borderRadius: 6 },
  actionGrid: { flexDirection: 'row', gap: 12, marginBottom: 16 },
  actionBtn: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, paddingVertical: 12, borderRadius: 12 },
  actionBtnText: { fontSize: 12, fontWeight: '700' },
  cardFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 16, borderTopWidth: 1, borderTopColor: 'rgba(187,202,191,0.2)' },
  avatarGroup: { flexDirection: 'row' },
  smallAvatar: { width: 32, height: 32, borderRadius: 16, borderWidth: 2, borderColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  avatarText: { fontSize: 10, fontWeight: '700', color: '#fff' },
  shareBtn: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#edeeef', alignItems: 'center', justifyContent: 'center' },
  verifiedRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  verifiedText: { fontSize: 12, fontWeight: '700', color: '#3c4a42' },
  newCampaignCard: { height: 300, borderWidth: 2, borderColor: 'rgba(187,202,191,0.4)', borderStyle: 'dashed', borderRadius: 16, alignItems: 'center', justifyContent: 'center', padding: 24 },
  newCampaignIconBg: { width: 64, height: 64, borderRadius: 32, backgroundColor: 'rgba(16,185,129,0.1)', alignItems: 'center', justifyContent: 'center', marginBottom: 24 },
  newCampaignTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d', marginBottom: 8 },
  newCampaignDesc: { fontSize: 16, color: '#3c4a42', textAlign: 'center', paddingHorizontal: 24 },
  fab: { position: 'absolute', right: 24, bottom: 96, width: 56, height: 56, borderRadius: 28, backgroundColor: '#006c49', alignItems: 'center', justifyContent: 'center', elevation: 8, shadowColor: '#006c49', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8 },
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
