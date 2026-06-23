import React from 'react';
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
import Svg, { Circle } from 'react-native-svg';

export default function CarbonSummaryScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.avatarContainer}>
            <Image
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB44jKmFzvb-4-_9qV0yq01PBD2ajq8T4ffkFh1e92wgIfneltT-99rF7MAgVwoEioxIWU1LbLuqTAQZbisrdcmbmTZWuK5xHf85wEMkL5jvuHG2n4cI4VAC1V5W_8nzWmJgtjKW1L6IB2S24LVTYd13vMXqZeonAbO3AM3yirr0POrVDajedh_rTIpEjmUXlZHQWEC6evdSa5XnNvTi63ME6LXo08PjXcMX2nj448quNSQUJHTs7BithJbwySNO1wA967Yemp1eEj2' }}
              style={styles.avatar}
            />
            <View style={styles.levelBadge}>
              <Text style={styles.levelText}>LVL 4</Text>
            </View>
          </View>
          <Text style={styles.logoText}>EcoSystem</Text>
        </View>
        <TouchableOpacity style={styles.xpButton}>
          <Icon name="stars" size={18} color="#006c49" />
          <Text style={styles.xpButtonText}>1,250 XP</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.pageTitle}>Your Carbon Footprint</Text>
          <Text style={styles.pageSubtitle}>We've calculated your impact based on your lifestyle choices. You're doing better than 68% of users in your area!</Text>
        </View>

        {/* Score Ring */}
        <View style={styles.scoreContainer}>
          <View style={styles.ringWrapper}>
            <Svg width="280" height="280" viewBox="0 0 280 280" style={{ transform: [{ rotate: '-90deg' }] }}>
              <Circle
                cx="140"
                cy="140"
                r="126"
                stroke="rgba(0,108,73,0.1)"
                strokeWidth="12"
                fill="transparent"
              />
              <Circle
                cx="140"
                cy="140"
                r="126"
                stroke="#006c49"
                strokeWidth="12"
                fill="transparent"
                strokeDasharray="791"
                strokeDashoffset="553"
                strokeLinecap="round"
              />
            </Svg>
            <View style={styles.scoreInner}>
              <Text style={styles.scoreLabel}>DAILY AVERAGE</Text>
              <View style={styles.scoreRow}>
                <Text style={styles.scoreValue}>4.7</Text>
                <Text style={styles.scoreUnit}>kg</Text>
              </View>
              <View style={styles.scoreBadge}>
                <Icon name="trending-down" size={14} color="#006f64" />
                <Text style={styles.scoreBadgeText}>12% lower than avg.</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Category Breakdown */}
        <View style={styles.categoryGrid}>
          {/* Travel */}
          <View style={styles.categoryCard}>
            <View style={[styles.categoryIconCircle, { backgroundColor: '#dbeafe' }]}>
              <Icon name="commute" size={28} color="#005ac2" />
            </View>
            <Text style={styles.categoryTitle}>Travel</Text>
            <Text style={[styles.categoryValue, { color: '#005ac2' }]}>1.8 kg</Text>
            <View style={styles.barTrack}>
              <View style={[styles.barFill, { backgroundColor: '#005ac2', width: '38%' }]} />
            </View>
            <Text style={styles.categoryNote}>Mostly electric bike usage</Text>
          </View>
          
          {/* Home */}
          <View style={styles.categoryCard}>
            <View style={[styles.categoryIconCircle, { backgroundColor: '#d1fae5' }]}>
              <Icon name="home" size={28} color="#006c49" />
            </View>
            <Text style={styles.categoryTitle}>Home</Text>
            <Text style={[styles.categoryValue, { color: '#006c49' }]}>2.1 kg</Text>
            <View style={styles.barTrack}>
              <View style={[styles.barFill, { backgroundColor: '#006c49', width: '45%' }]} />
            </View>
            <Text style={styles.categoryNote}>Renewable energy provider</Text>
          </View>

          {/* Diet */}
          <View style={styles.categoryCard}>
            <View style={[styles.categoryIconCircle, { backgroundColor: '#fef3c7' }]}>
              <Icon name="restaurant" size={28} color="#d97706" />
            </View>
            <Text style={styles.categoryTitle}>Diet</Text>
            <Text style={[styles.categoryValue, { color: '#d97706' }]}>0.8 kg</Text>
            <View style={styles.barTrack}>
              <View style={[styles.barFill, { backgroundColor: '#d97706', width: '17%' }]} />
            </View>
            <Text style={styles.categoryNote}>Plant-based lifestyle</Text>
          </View>
        </View>

        {/* Insight Card */}
        <View style={styles.insightBanner}>
          <View style={styles.insightContent}>
            <Text style={styles.insightTitle}>Top Performance!</Text>
            <Text style={styles.insightSubtitle}>Your low-carbon diet is offsetting the equivalent of planting 12 trees this year alone. Keep it up!</Text>
          </View>
          <TouchableOpacity style={styles.insightBtn} onPress={() => navigation.navigate('ChallengeDateSelection')}>
            <Text style={styles.insightBtnText}>Complete Onboarding</Text>
          </TouchableOpacity>
        </View>

        {/* Achievement Banner */}
        <View style={styles.achievementsGrid}>
          <View style={[styles.achievementCard, { borderLeftColor: '#006c49' }]}>
            <View style={[styles.achievementIcon, { backgroundColor: 'rgba(0,108,73,0.1)' }]}>
              <Icon name="eco" size={24} color="#006c49" />
            </View>
            <View style={styles.achievementTextWrapper}>
              <Text style={styles.achievementTitle}>Green Start Badge</Text>
              <Text style={styles.achievementDesc}>You've unlocked the foundational sustainability badge.</Text>
            </View>
          </View>
          <View style={[styles.achievementCard, { borderLeftColor: '#005ac2' }]}>
            <View style={[styles.achievementIcon, { backgroundColor: 'rgba(0,90,194,0.1)' }]}>
              <Icon name="share" size={24} color="#005ac2" />
            </View>
            <View style={styles.achievementTextWrapper}>
              <Text style={styles.achievementTitle}>Spread the Word</Text>
              <Text style={styles.achievementDesc}>Users who share their results save 5% more carbon.</Text>
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
  avatarContainer: { position: 'relative' },
  avatar: { width: 40, height: 40, borderRadius: 20, borderWidth: 2, borderColor: '#006c49' },
  levelBadge: { position: 'absolute', bottom: -4, right: -4, backgroundColor: '#006c49', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 10, borderWidth: 2, borderColor: '#f8f9fa' },
  levelText: { fontSize: 10, fontWeight: '700', color: '#ffffff' },
  logoText: { fontSize: 24, fontWeight: '600', color: '#006c49' },
  xpButton: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(16,185,129,0.2)', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 12, gap: 8 },
  xpButtonText: { fontSize: 14, fontWeight: '700', color: '#006c49' },
  scrollContent: { paddingHorizontal: 24, paddingTop: 32, paddingBottom: 100 },
  sectionHeader: { alignItems: 'center', marginBottom: 40 },
  pageTitle: { fontSize: 40, fontWeight: '800', color: '#191c1d', marginBottom: 12, textAlign: 'center', letterSpacing: -1 },
  pageSubtitle: { fontSize: 18, color: '#3c4a42', textAlign: 'center', lineHeight: 28 },
  scoreContainer: { alignItems: 'center', justifyContent: 'center', marginBottom: 40 },
  ringWrapper: { width: 280, height: 280, position: 'relative', alignItems: 'center', justifyContent: 'center' },
  scoreInner: { position: 'absolute', alignItems: 'center', justifyContent: 'center' },
  scoreLabel: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 1, marginBottom: 4 },
  scoreRow: { flexDirection: 'row', alignItems: 'baseline', gap: 4 },
  scoreValue: { fontSize: 64, fontWeight: '800', color: '#006c49' },
  scoreUnit: { fontSize: 24, fontWeight: '600', color: '#3c4a42' },
  scoreBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(109,245,225,0.3)', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 16, marginTop: 16, gap: 8 },
  scoreBadgeText: { fontSize: 14, fontWeight: '600', color: '#006f64' },
  categoryGrid: { flexDirection: 'column', gap: 16, marginBottom: 40 },
  categoryCard: { backgroundColor: 'rgba(255,255,255,0.7)', padding: 24, borderRadius: 16, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)', alignItems: 'center' },
  categoryIconCircle: { width: 56, height: 56, borderRadius: 16, alignItems: 'center', justifyContent: 'center', marginBottom: 16 },
  categoryTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d', marginBottom: 4 },
  categoryValue: { fontSize: 28, fontWeight: '700', marginBottom: 8 },
  barTrack: { width: '100%', height: 8, backgroundColor: 'rgba(0,0,0,0.05)', borderRadius: 4, overflow: 'hidden', marginBottom: 16 },
  barFill: { height: '100%', borderRadius: 4 },
  categoryNote: { fontSize: 14, fontStyle: 'italic', color: '#3c4a42' },
  insightBanner: { backgroundColor: '#006c49', borderRadius: 16, padding: 24, marginBottom: 40 },
  insightContent: { marginBottom: 24 },
  insightTitle: { fontSize: 24, fontWeight: '600', color: '#ffffff', marginBottom: 8 },
  insightSubtitle: { fontSize: 16, color: 'rgba(255,255,255,0.9)', lineHeight: 24 },
  insightBtn: { backgroundColor: '#ffffff', paddingVertical: 12, paddingHorizontal: 24, borderRadius: 12, alignItems: 'center' },
  insightBtnText: { fontSize: 16, fontWeight: '700', color: '#006c49' },
  achievementsGrid: { flexDirection: 'column', gap: 16 },
  achievementCard: { backgroundColor: 'rgba(255,255,255,0.7)', padding: 16, borderRadius: 8, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)', borderLeftWidth: 4, flexDirection: 'row', alignItems: 'center', gap: 16 },
  achievementIcon: { width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center' },
  achievementTextWrapper: { flex: 1 },
  achievementTitle: { fontSize: 16, fontWeight: '700', color: '#191c1d' },
  achievementDesc: { fontSize: 14, color: '#3c4a42' },
});
