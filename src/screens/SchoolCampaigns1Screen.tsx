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

export default function SchoolCampaigns1Screen({ navigation }: any) {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.avatarWrapper}>
            <Image 
              source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5HotFpqomdlOABCtvC_ZhuqRRJ2oo0HyCJv-KmNZAz2EfjtCVaqcmB_NUnTXiDY2flGCelIo-aHbGtltYdH5N18OwKfXTzb0wUkxoV3AIwA8NtdHu_XonALyrE7srkEnnAI1-8UlEDztOCAX9AW-e-FkhJiYbx79y1r1Bvjof498Ou28gMpiXwkxyUBc3s6b3Nud4MR77OtmGE7REuRI3DBLR0Ek7euo9nQQQ5uCsbGWgnF3hdx_Y5qp71PUoogCFhw1nvwp1x_y3'}}
              style={styles.avatar}
            />
          </View>
          <Text style={styles.logoText}>ChonX</Text>
        </View>
        <TouchableOpacity style={styles.notifBtn}>
          <Icon name="notifications" size={24} color="#006c49" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.pageHeader}>
          <Text style={styles.pageLabel}>ACTIVE IMPACT</Text>
          <Text style={styles.pageTitle}>Community Campaigns</Text>
          <Text style={styles.pageSubtitle}>Join your peers in school-wide challenges to drive sustainable change. Track your individual contribution against our collective goals.</Text>
        </View>

        <TouchableOpacity style={styles.featuredCard} onPress={() => setShowDetail(!showDetail)} activeOpacity={0.9}>
          <View style={styles.featuredImageWrapper}>
            <Image 
              source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB63waJezGO6SlGegH9OQAzpwBkYNC5uzm__I8gl-Jdh5Dq8FbW-ncFuCM2xgH1949VG7PcYzJSJzjLCGp1LDOtvR6mAqNymRk3R0wdEeoZXmmeEBsOq6sfu8Uwy4MCla_TNDpIPgw-B3ws0zIUvSu6EtHZa_NLBg3ZZSpSG8QWeAH9jVlIflx01fQ-Is7L_NJJDh9LtSB2cQyx1ryYbW667dWEjSKw1dkGm9lVLL9kzBAmdSVE6UKJ5RYZNH812zBqKHDxtdd1HdOi'}}
              style={styles.featuredImage}
            />
            <LinearGradient colors={['transparent', 'rgba(0,0,0,0.8)']} style={styles.featuredGradient} />
            <View style={styles.featuredBadge}>
              <Text style={styles.featuredBadgeText}>SCHOOL-WIDE EVENT</Text>
            </View>
            <View style={styles.featuredHeaderInfo}>
              <View>
                <Text style={styles.featuredTitle}>Science Club Campaign</Text>
                <Text style={styles.featuredSubtitle}>Oct 1 - Oct 15 • Renewable Energy Focus</Text>
              </View>
              <View style={styles.joinedBadge}>
                <Text style={styles.joinedText}>JOINED</Text>
                <Icon name="check-circle" size={16} color="#fff" />
              </View>
            </View>
          </View>
          
          <View style={styles.featuredContent}>
            <View style={styles.progressContainer}>
              <View style={styles.progressHeader}>
                <Text style={styles.progressLabel}>SCHOOL PROGRESS</Text>
                <Text style={styles.progressValue}>74% COMPLETE</Text>
              </View>
              <View style={styles.progressBarBg}>
                <LinearGradient colors={['#006c49', '#6df5e1']} start={{x:0,y:0}} end={{x:1,y:0}} style={[styles.progressBarFill, {width: '74%'}]} />
              </View>
            </View>

            <View style={styles.statsGrid}>
              <View style={styles.statBox}>
                <Text style={styles.statBoxLabel}>MEMBERS</Text>
                <Text style={[styles.statBoxValue, { color: '#006c49' }]}>1,204</Text>
              </View>
              <View style={styles.statBox}>
                <Text style={styles.statBoxLabel}>XP POOL</Text>
                <Text style={[styles.statBoxValue, { color: '#005ac2' }]}>25.5k</Text>
              </View>
              <View style={styles.statBox}>
                <Text style={styles.statBoxLabel}>IMPACT</Text>
                <Text style={[styles.statBoxValue, { color: '#006b5f' }]}>3.2t CO2</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        {showDetail && (
          <View style={styles.detailPane}>
            <View style={styles.detailHeader}>
              <Text style={styles.detailTitle}>Science Club: Your Impact</Text>
              <Text style={styles.detailSubtitle}>Keep it up! Your efforts have placed you in the Top 5% of participants.</Text>
            </View>

            <View style={styles.detailCardsRow}>
              <View style={styles.detailCard}>
                <View style={styles.detailCardHeader}>
                  <Icon name="person" size={16} color="#006c49" />
                  <Text style={styles.detailCardLabel}>YOUR PROGRESS</Text>
                </View>
                <Text style={styles.detailCardValue}>450 <Text style={styles.detailCardTotal}>/ 500 XP</Text></Text>
                <View style={styles.detailProgressBarBg}>
                  <View style={[styles.detailProgressBarFill, { width: '90%', backgroundColor: '#006c49' }]} />
                </View>
              </View>
              <View style={styles.detailCard}>
                <View style={styles.detailCardHeader}>
                  <Icon name="groups" size={16} color="#005ac2" />
                  <Text style={styles.detailCardLabel}>SCHOOL GOAL</Text>
                </View>
                <Text style={styles.detailCardValue}>74k <Text style={styles.detailCardTotal}>/ 100k XP</Text></Text>
                <View style={styles.detailProgressBarBg}>
                  <View style={[styles.detailProgressBarFill, { width: '74%', backgroundColor: '#005ac2' }]} />
                </View>
              </View>
            </View>

            <TouchableOpacity style={styles.recordBtn}>
              <LinearGradient colors={['#006c49', '#006b5f']} start={{x:0,y:0}} end={{x:1,y:0}} style={styles.recordBtnGradient}>
                <Text style={styles.recordBtnText}>Record New Activity</Text>
              </LinearGradient>
            </TouchableOpacity>

            <View style={styles.milestonesSection}>
              <Text style={styles.milestonesTitle}>RECENT MILESTONES</Text>
              <View style={styles.milestoneItem}>
                <View style={[styles.milestoneIcon, { backgroundColor: 'rgba(109, 245, 225, 0.3)' }]}>
                  <Icon name="eco" size={20} color="#006b5f" />
                </View>
                <View>
                  <Text style={styles.milestoneName}>Solar Advocate</Text>
                  <Text style={styles.milestoneDate}>Unlocked 2 days ago</Text>
                </View>
              </View>
              <View style={styles.milestoneItem}>
                <View style={[styles.milestoneIcon, { backgroundColor: 'rgba(113, 161, 255, 0.3)' }]}>
                  <Icon name="electric-bolt" size={20} color="#005ac2" />
                </View>
                <View>
                  <Text style={styles.milestoneName}>Energy Saver</Text>
                  <Text style={styles.milestoneDate}>Unlocked 5 days ago</Text>
                </View>
              </View>
            </View>
          </View>
        )}

        <TouchableOpacity style={styles.secondaryCard}>
          <View style={styles.secondaryImageWrapper}>
            <Image 
              source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzOl4tB1-xwhA6BVS-HnvJaUoliIKbmHE_qIeyX0IelMnIAIW0wOPIHK1UeSTTqYEKYN1_7URN1T-sGGeQ29ljrZ7Pil20wHRdH-Ol2aYVO0LFNYDe5omt61eYWuSczAphutT5DCPYE9lfbD07UHu7okByN3-WrhfcGFCO5zrRNgj59kZzDmNSWM9JiAiA8qz6N6sF-HoUwXSCUYJWeVG6qL2SMgKUTh_obVDtztU8jgtkFuSLSSr2ih_el-o9gspEvEoPB8ulTdzX'}}
              style={styles.secondaryImage}
            />
            <LinearGradient colors={['transparent', 'rgba(0,0,0,0.8)']} style={styles.secondaryGradient} />
            <Text style={styles.secondaryTitle}>Blue Horizon</Text>
          </View>
          <View style={styles.secondaryContent}>
            <Text style={styles.secondaryLabel}>TEACHER-LED • GRADE 11</Text>
            <Text style={styles.secondaryDesc}>Protecting local marine life through reduction of single-use plastics in the cafeteria.</Text>
            <View style={styles.secondaryProgressWrapper}>
              <View style={styles.secondaryProgressBarBg}>
                <View style={[styles.secondaryProgressBarFill, { width: '32%' }]} />
              </View>
              <Text style={styles.secondaryProgressText}>32% GOAL REACHED</Text>
            </View>
          </View>
        </TouchableOpacity>

        <View style={styles.upcomingSection}>
          <Text style={styles.upcomingTitle}>Upcoming Challenges</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
            <View style={styles.carouselItem}>
              <View style={styles.carouselImageWrapper}>
                <Image 
                  source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbNN6w617cMxxkYH8shbXTCkiF2RTYVzRc1IVmeXX7iH3p1hRbOQ6_tzxCVm92LCIYzhfAtL8SmLemw49j-9FuPVrJ-qf71efDEZxVjtdPtxQpXxMDUDJgE967J81GRojYhGxL_wITa12AKfd1323YliuTRSOzZ0Kak1KHCog9vZyexzt3nhPL1U59FZUIiSC_dwCy2FPRGB4aYnnnNSL2wDzXjWp_5mG25E6TizQaPeX6OiAdy1vi5EYStyEADpRHlmVq_EGzFJE-'}}
                  style={styles.carouselImage}
                />
              </View>
              <Text style={styles.carouselLabel}>STARTS OCT 20</Text>
              <Text style={styles.carouselItemTitle}>Reforest City</Text>
              <Text style={styles.carouselItemDesc}>Planting 500 trees in the downtown district.</Text>
            </View>

            <View style={styles.carouselItem}>
              <View style={styles.carouselImageWrapper}>
                <Image 
                  source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5QJPtvERnzGmDzeJbB5QF1DfBfERz-pFaI058EG9Eo97qLZAPb7tamE-IGXbLku68uXxRul5KABRlJlgW4BDBzsfOq5kqbsAmUFHheNLd0deosAsy1bTH4RqwDdv8Xx2rhdmQqkxYdw8ni9NCkZ6_NPH4ooVuQMGjgDqvyUVHQgPP6t64KF-eyZiow3bY5-TtwOLZKQEll2gMbF6_Mkp_25_9QVdCfDgbJQxnsi7hw3KC6dY09X0kVa8R1qSCN_5sGiHpUrEvUI7Y'}}
                  style={styles.carouselImage}
                />
              </View>
              <Text style={styles.carouselLabel}>STARTS NOV 1</Text>
              <Text style={styles.carouselItemTitle}>Zero Emission</Text>
              <Text style={styles.carouselItemDesc}>Biking to school for 30 consecutive days.</Text>
            </View>
            
            <View style={styles.carouselItem}>
              <View style={styles.carouselImageWrapper}>
                <Image 
                  source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCr_BqoZkfPwoqXY7cDjQSWMYOBc2ky1P3AEPLWwCO_51WJKxdXbv7gYfdI0B5kQ2femi9MiMOmYCR6k7YhGly8YM-8jBK2I5_MFzlP8tK66PonB6jUau5uP3Qoh0A0tvtBjUJOOQlgKMvcOYGekp7lT35blUcOGGEXcO3QPzG8EEqUqWuKuwZt_hqyW37S5Wj36hp4b1LsXRIznTGeg6VaJ98mYFlbcQZPhkAXLEzzdHc5PkLgQDtbIgL2F6AllycWmJew9pk4c9cr'}}
                  style={styles.carouselImage}
                />
              </View>
              <Text style={styles.carouselLabel}>STARTS NOV 15</Text>
              <Text style={styles.carouselItemTitle}>Waste Mastery</Text>
              <Text style={styles.carouselItemDesc}>Sorting 100% of cafeteria waste for one month.</Text>
            </View>
          </ScrollView>
        </View>

      </ScrollView>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <View style={styles.navItem}>
          <Icon name="home" size={24} color="#3c4a42" />
          <Text style={styles.navText}>Home</Text>
        </View>
        <View style={styles.navItem}>
          <Icon name="eco" size={24} color="#3c4a42" />
          <Text style={styles.navText}>Impact</Text>
        </View>
        <View style={styles.navItemActive}>
          <Icon name="military-tech" size={24} color="#00422b" />
          <Text style={styles.navTextActive}>Arena</Text>
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
    borderBottomColor: 'rgba(108, 122, 113, 0.1)',
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  avatarWrapper: { width: 40, height: 40, borderRadius: 20, overflow: 'hidden', borderWidth: 1, borderColor: 'rgba(0,108,73,0.1)' },
  avatar: { width: '100%', height: '100%' },
  logoText: { fontSize: 24, fontWeight: '800', color: '#006c49' },
  notifBtn: { padding: 8 },
  scrollContent: { padding: 24, paddingBottom: 100 },
  pageHeader: { marginBottom: 32 },
  pageLabel: { fontSize: 12, fontWeight: '700', color: '#006c49', letterSpacing: 1, marginBottom: 8 },
  pageTitle: { fontSize: 32, fontWeight: '700', color: '#191c1d', marginBottom: 12 },
  pageSubtitle: { fontSize: 18, color: '#3c4a42', lineHeight: 28 },
  featuredCard: { backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: 16, overflow: 'hidden', borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)', marginBottom: 24 },
  featuredImageWrapper: { height: 256, position: 'relative' },
  featuredImage: { width: '100%', height: '100%', resizeMode: 'cover' },
  featuredGradient: { ...StyleSheet.absoluteFillObject },
  featuredBadge: { position: 'absolute', top: 24, left: 24, backgroundColor: 'rgba(255,255,255,0.9)', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 16 },
  featuredBadgeText: { fontSize: 12, fontWeight: '700', color: '#006c49' },
  featuredHeaderInfo: { position: 'absolute', bottom: 24, left: 24, right: 24, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' },
  featuredTitle: { fontSize: 24, fontWeight: '700', color: '#fff', marginBottom: 4 },
  featuredSubtitle: { fontSize: 16, color: '#fff', opacity: 0.9 },
  joinedBadge: { flexDirection: 'row', alignItems: 'center', gap: 4, backgroundColor: '#006c49', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 24 },
  joinedText: { fontSize: 12, fontWeight: '700', color: '#fff' },
  featuredContent: { padding: 24 },
  progressContainer: { marginBottom: 24 },
  progressHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  progressLabel: { fontSize: 12, fontWeight: '700', color: '#3c4a42' },
  progressValue: { fontSize: 12, fontWeight: '700', color: '#3c4a42' },
  progressBarBg: { height: 12, backgroundColor: 'rgba(0,108,73,0.1)', borderRadius: 6, overflow: 'hidden' },
  progressBarFill: { height: '100%', borderRadius: 6 },
  statsGrid: { flexDirection: 'row', gap: 12 },
  statBox: { flex: 1, backgroundColor: '#f3f4f5', padding: 12, borderRadius: 8, borderWidth: 1, borderColor: 'rgba(187,202,191,0.2)' },
  statBoxLabel: { fontSize: 12, fontWeight: '700', color: '#3c4a42', marginBottom: 4 },
  statBoxValue: { fontSize: 24, fontWeight: '700' },
  detailPane: { backgroundColor: 'rgba(0,108,73,0.05)', borderRadius: 16, padding: 24, borderWidth: 2, borderColor: 'rgba(0,108,73,0.2)', marginBottom: 24 },
  detailHeader: { marginBottom: 24 },
  detailTitle: { fontSize: 24, fontWeight: '700', color: '#191c1d', marginBottom: 8 },
  detailSubtitle: { fontSize: 16, color: '#3c4a42' },
  detailCardsRow: { flexDirection: 'row', gap: 16, marginBottom: 24 },
  detailCard: { flex: 1, backgroundColor: 'rgba(255,255,255,0.6)', padding: 16, borderRadius: 8, borderWidth: 1, borderColor: '#fff' },
  detailCardHeader: { flexDirection: 'row', alignItems: 'center', gap: 4, marginBottom: 8 },
  detailCardLabel: { fontSize: 12, fontWeight: '700', color: '#3c4a42' },
  detailCardValue: { fontSize: 24, fontWeight: '700', color: '#191c1d' },
  detailCardTotal: { fontSize: 16, fontWeight: '400', color: '#3c4a42' },
  detailProgressBarBg: { height: 8, backgroundColor: 'rgba(0,0,0,0.05)', borderRadius: 4, marginTop: 8, overflow: 'hidden' },
  detailProgressBarFill: { height: '100%', borderRadius: 4 },
  recordBtn: { alignSelf: 'flex-start', borderRadius: 24, overflow: 'hidden', marginBottom: 32 },
  recordBtnGradient: { paddingHorizontal: 32, paddingVertical: 16 },
  recordBtnText: { color: '#fff', fontSize: 16, fontWeight: '700' },
  milestonesSection: {},
  milestonesTitle: { fontSize: 12, fontWeight: '700', color: '#3c4a42', marginBottom: 12 },
  milestoneItem: { flexDirection: 'row', alignItems: 'center', gap: 12, backgroundColor: 'rgba(255,255,255,0.4)', padding: 12, borderRadius: 8, marginBottom: 8, borderWidth: 1, borderColor: 'rgba(255,255,255,0.6)' },
  milestoneIcon: { width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  milestoneName: { fontSize: 16, fontWeight: '700', color: '#191c1d' },
  milestoneDate: { fontSize: 12, color: '#3c4a42' },
  secondaryCard: { backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: 16, overflow: 'hidden', borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)', marginBottom: 32 },
  secondaryImageWrapper: { height: 192, position: 'relative' },
  secondaryImage: { width: '100%', height: '100%', resizeMode: 'cover' },
  secondaryGradient: { ...StyleSheet.absoluteFillObject },
  secondaryTitle: { position: 'absolute', bottom: 24, left: 24, fontSize: 24, fontWeight: '700', color: '#fff' },
  secondaryContent: { padding: 24 },
  secondaryLabel: { fontSize: 12, fontWeight: '700', color: '#006b5f', marginBottom: 8 },
  secondaryDesc: { fontSize: 16, color: '#3c4a42', marginBottom: 16 },
  secondaryProgressWrapper: { marginTop: 'auto' },
  secondaryProgressBarBg: { height: 8, backgroundColor: 'rgba(0,107,95,0.1)', borderRadius: 4, overflow: 'hidden', marginBottom: 4 },
  secondaryProgressBarFill: { height: '100%', backgroundColor: '#006b5f', borderRadius: 4 },
  secondaryProgressText: { fontSize: 12, fontWeight: '700', color: '#3c4a42' },
  upcomingSection: { marginTop: 16 },
  upcomingTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d', marginBottom: 16 },
  carousel: { overflow: 'visible' },
  carouselItem: { width: 280, backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: 16, padding: 16, marginRight: 16, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)' },
  carouselImageWrapper: { height: 128, borderRadius: 8, overflow: 'hidden', marginBottom: 12 },
  carouselImage: { width: '100%', height: '100%', resizeMode: 'cover' },
  carouselLabel: { fontSize: 12, fontWeight: '700', color: '#005ac2', marginBottom: 4 },
  carouselItemTitle: { fontSize: 18, fontWeight: '700', color: '#191c1d', marginBottom: 4 },
  carouselItemDesc: { fontSize: 16, color: '#3c4a42' },
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
