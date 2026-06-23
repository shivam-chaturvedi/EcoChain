import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

export default function UpdatedCarbonSummaryImpactProjectionScreen({ navigation }: any) {
  // Simple fake rotation for the SVG ring visual
  const [rotation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 10000,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const spin = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Background Decorative */}
      <View style={styles.bgDeco1} />
      <View style={styles.bgDeco2} />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.avatarWrapper}>
            <Image source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB44jKmFzvb-4-_9qV0yq01PBD2ajq8T4ffkFh1e92wgIfneltT-99rF7MAgVwoEioxIWU1LbLuqTAQZbisrdcmbmTZWuK5xHf85wEMkL5jvuHG2n4cI4VAC1V5W_8nzWmJgtjKW1L6IB2S24LVTYd13vMXqZeonAbO3AM3yirr0POrVDajedh_rTIpEjmUXlZHQWEC6evdSa5XnNvTi63ME6LXo08PjXcMX2nj448quNSQUJHTs7BithJbwySNO1wA967Yemp1eEj2'}} style={styles.imageFull} />
            <View style={styles.levelBadge}><Text style={styles.levelBadgeText}>LVL 4</Text></View>
          </View>
          <Text style={styles.logoText}>EcoSystem</Text>
        </View>
        <TouchableOpacity style={styles.xpBtn}>
          <Icon name="stars" size={18} color="#006c49" />
          <Text style={styles.xpBtnText}>1,250 XP</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header Section */}
        <View style={styles.titleSection}>
          <Text style={styles.pageTitle}>Your Carbon Footprint</Text>
          <Text style={styles.pageSubtitle}>We've calculated your impact based on your lifestyle choices. You're doing better than 68% of users in your area!</Text>
        </View>

        {/* Ring */}
        <View style={styles.ringSection}>
          <View style={styles.ringContainer}>
            {/* Fake SVG Ring with simple CSS borders */}
            <Animated.View style={[styles.outerRing, { transform: [{ rotate: spin }] }]} />
            <View style={styles.innerRing} />
            <View style={styles.ringContent}>
              <Text style={styles.ringLabel}>DAILY AVERAGE</Text>
              <View style={styles.ringValueRow}>
                <Text style={styles.ringValue}>4.7</Text>
                <Text style={styles.ringUnit}>kg</Text>
              </View>
              <View style={styles.trendBadge}>
                <Icon name="trending-down" size={14} color="#006f64" />
                <Text style={styles.trendText}>12% lower than avg.</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Category Breakdown */}
        <View style={styles.breakdownGrid}>
          {/* Travel */}
          <View style={styles.breakdownCard}>
            <View style={[styles.breakdownIcon, { backgroundColor: '#d1fae5' }]}>
              <Icon name="calendar-month" size={28} color="#006c49" />
            </View>
            <Text style={styles.breakdownTitle}>Monthly Impact</Text>
            <Text style={[styles.breakdownValue, { color: '#006c49' }]}>141 kg</Text>
            <View style={[styles.breakdownBarBg, { backgroundColor: 'rgba(0,108,73,0.1)' }]}>
              <View style={[styles.breakdownBarFill, { backgroundColor: '#006c49', width: '65%' }]} />
            </View>
            <Text style={styles.breakdownNote}>Tracking well against monthly goal</Text>
          </View>
          
          {/* Home */}
          <View style={styles.breakdownCard}>
            <View style={[styles.breakdownIcon, { backgroundColor: '#dbeafe' }]}>
              <Icon name="insights" size={28} color="#005ac2" />
            </View>
            <Text style={styles.breakdownTitle}>Yearly Projection</Text>
            <Text style={[styles.breakdownValue, { color: '#005ac2' }]}>1.7 Tons</Text>
            <View style={[styles.breakdownBarBg, { backgroundColor: 'rgba(0,90,194,0.1)' }]}>
              <View style={[styles.breakdownBarFill, { backgroundColor: '#005ac2', width: '42%' }]} />
            </View>
            <Text style={styles.breakdownNote}>On track for 'Eco-Champion' status</Text>
          </View>

          {/* Diet */}
          <View style={styles.breakdownCard}>
            <View style={[styles.breakdownIcon, { backgroundColor: '#eff6ff' }]}>
              <Icon name="water-drop" size={28} color="#3b82f6" />
            </View>
            <Text style={styles.breakdownTitle}>Impact Equivalent</Text>
            <Text style={[styles.breakdownValue, { color: '#3b82f6' }]}>4,200 Liters</Text>
            <View style={[styles.breakdownBarBg, { backgroundColor: 'rgba(59,130,246,0.1)' }]}>
              <View style={[styles.breakdownBarFill, { backgroundColor: '#3b82f6', width: '100%' }]} />
            </View>
            <Text style={styles.breakdownNote}>Equal to saving 4,200L of water</Text>
          </View>
        </View>

        {/* Insight Card */}
        <LinearGradient colors={['#006c49', '#006b5f']} style={styles.insightCard} start={{x: 0, y: 0}} end={{x: 1, y: 1}}>
          <View style={styles.insightTextContent}>
            <Text style={styles.insightTitle}>Top Performance!</Text>
            <Text style={styles.insightDesc}>Your low-carbon diet is offsetting the equivalent of planting 12 trees this year alone. Keep it up!</Text>
          </View>
          <TouchableOpacity style={styles.insightBtn}>
            <Text style={styles.insightBtnText}>Complete Onboarding</Text>
          </TouchableOpacity>
        </LinearGradient>

        {/* Achievement Banner */}
        <View style={styles.achievementsGrid}>
          <View style={[styles.achievementCard, { borderLeftColor: '#006c49' }]}>
            <View style={[styles.achieveIconBox, { backgroundColor: 'rgba(0,108,73,0.1)' }]}>
              <Icon name="eco" size={24} color="#006c49" />
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.achieveTitle}>Green Start Badge</Text>
              <Text style={styles.achieveDesc}>You've unlocked the foundational sustainability badge.</Text>
            </View>
          </View>

          <View style={[styles.achievementCard, { borderLeftColor: '#005ac2' }]}>
            <View style={[styles.achieveIconBox, { backgroundColor: 'rgba(0,90,194,0.1)' }]}>
              <Icon name="share" size={24} color="#005ac2" />
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.achieveTitle}>Spread the Word</Text>
              <Text style={styles.achieveDesc}>Users who share their results save 5% more carbon.</Text>
            </View>
          </View>
        </View>

      </ScrollView>

      {/* Footer Nav Space */}
      <View style={styles.footerNav} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  bgDeco1: { position: 'absolute', top: 0, right: 0, width: 300, height: 300, backgroundColor: 'rgba(0,108,73,0.05)', borderRadius: 150, transform: [{scale: 1.5}] },
  bgDeco2: { position: 'absolute', bottom: '25%', left: 0, width: 250, height: 250, backgroundColor: 'rgba(0,107,95,0.05)', borderRadius: 125, transform: [{scale: 1.5}] },
  header: { height: 64, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 24, backgroundColor: 'rgba(248, 249, 250, 0.8)', borderBottomWidth: 1, borderBottomColor: 'rgba(187, 202, 191, 0.2)' },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  avatarWrapper: { width: 40, height: 40, borderRadius: 20, borderWidth: 2, borderColor: '#006c49' },
  imageFull: { width: '100%', height: '100%', borderRadius: 20, resizeMode: 'cover' },
  levelBadge: { position: 'absolute', bottom: -4, right: -4, backgroundColor: '#006c49', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 10, borderWidth: 2, borderColor: '#f8f9fa' },
  levelBadgeText: { fontSize: 8, fontWeight: 'bold', color: '#fff' },
  logoText: { fontSize: 24, fontWeight: '600', color: '#006c49' },
  xpBtn: { flexDirection: 'row', alignItems: 'center', gap: 8, backgroundColor: 'rgba(16,185,129,0.2)', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 12 },
  xpBtnText: { fontSize: 14, fontWeight: '700', color: '#006c49' },
  scrollContent: { padding: 24, paddingBottom: 100 },
  titleSection: { alignItems: 'center', marginBottom: 40 },
  pageTitle: { fontSize: 48, fontWeight: '800', color: '#191c1d', marginBottom: 12, textAlign: 'center', letterSpacing: -1 },
  pageSubtitle: { fontSize: 18, color: '#3c4a42', textAlign: 'center', maxWidth: 400 },
  ringSection: { alignItems: 'center', marginBottom: 64 },
  ringContainer: { width: 300, height: 300, alignItems: 'center', justifyContent: 'center', position: 'relative' },
  outerRing: { position: 'absolute', width: '100%', height: '100%', borderRadius: 150, borderWidth: 12, borderColor: 'transparent', borderTopColor: '#006c49', borderRightColor: '#006c49' },
  innerRing: { position: 'absolute', width: '100%', height: '100%', borderRadius: 150, borderWidth: 12, borderColor: 'rgba(0,108,73,0.1)' },
  ringContent: { alignItems: 'center', justifyContent: 'center' },
  ringLabel: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 2, marginBottom: 4 },
  ringValueRow: { flexDirection: 'row', alignItems: 'baseline', gap: 4 },
  ringValue: { fontSize: 72, fontWeight: '800', color: '#006c49', lineHeight: 80 },
  ringUnit: { fontSize: 24, fontWeight: '600', color: '#3c4a42' },
  trendBadge: { flexDirection: 'row', alignItems: 'center', gap: 8, backgroundColor: 'rgba(109,245,225,0.3)', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 16, marginTop: 16 },
  trendText: { fontSize: 14, fontWeight: '600', color: '#006f64' },
  breakdownGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 24, marginBottom: 64 },
  breakdownCard: { flex: 1, minWidth: 250, backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: 8, padding: 24, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)', alignItems: 'center', elevation: 1 },
  breakdownIcon: { width: 56, height: 56, borderRadius: 12, alignItems: 'center', justifyContent: 'center', marginBottom: 16 },
  breakdownTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d', marginBottom: 4 },
  breakdownValue: { fontSize: 28, fontWeight: '700', marginBottom: 8 },
  breakdownBarBg: { width: '100%', height: 8, borderRadius: 4, overflow: 'hidden' },
  breakdownBarFill: { height: '100%', borderRadius: 4 },
  breakdownNote: { fontSize: 14, color: '#3c4a42', fontStyle: 'italic', marginTop: 16 },
  insightCard: { borderRadius: 8, padding: 24, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 24, marginBottom: 64, elevation: 4 },
  insightTextContent: { flex: 1, minWidth: 250 },
  insightTitle: { fontSize: 24, fontWeight: '600', color: '#fff', marginBottom: 8 },
  insightDesc: { fontSize: 16, color: 'rgba(255,255,255,0.9)' },
  insightBtn: { backgroundColor: '#fff', paddingHorizontal: 24, paddingVertical: 12, borderRadius: 12, elevation: 2 },
  insightBtnText: { fontSize: 16, fontWeight: '700', color: '#006c49' },
  achievementsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 24 },
  achievementCard: { flex: 1, minWidth: 250, backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: 8, padding: 24, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)', borderLeftWidth: 4, flexDirection: 'row', alignItems: 'center', gap: 16 },
  achieveIconBox: { width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center' },
  achieveTitle: { fontSize: 16, fontWeight: '700', color: '#191c1d' },
  achieveDesc: { fontSize: 14, color: '#3c4a42' },
  footerNav: { position: 'absolute', bottom: 0, left: 0, right: 0, height: 60, backgroundColor: 'rgba(248,249,250,0.7)', borderTopWidth: 1, borderTopColor: 'rgba(187,202,191,0.1)' },
});
