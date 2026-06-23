import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  Animated,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');

export default function DashboardTutorialOverlayScreen({ navigation }: any) {
  const [showOverlay, setShowOverlay] = useState(true);
  const [showTooltips, setShowTooltips] = useState(false);
  const tooltipAnim = useState(new Animated.Value(0))[0];

  useEffect(() => {
    if (!showOverlay) {
      setTimeout(() => {
        setShowTooltips(true);
        Animated.timing(tooltipAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      }, 500);
    }
  }, [showOverlay]);

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* TOP APP BAR */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.avatarContainer}>
            <Image
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrTvbxnY6K7CLChWMOEdDdBKMWmIhDLxGfjdsRCznqo-nAysbhUZduJOdFbQadGD6wdSpl5eamR0qD34uLm5jSFuy5UsKQkwkcfz5-6CuJmhsTr21A6YXro-CJwqWmh01QeoXzefsL3l-ROP84cJj24zevG7Md7Obr4mG6Tr18ikdaUulJr2rR5MSlJiZtR_69SwvOO_ArjzaZIz_4Y5rsjCeRslXrRW7WySoKc0tQRgtBBtFy2dGJrnSzQPV4HJHx02ZCjl1ZZfxM' }}
              style={styles.avatarImg}
            />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>1</Text>
            </View>
          </View>
          <Text style={styles.headerTitle}>EcoSystem</Text>
        </View>
        <View style={[styles.xpCounter, showTooltips && styles.xpCounterActive]}>
          <Icon name="stars" size={20} color="#006c49" />
          <Text style={styles.xpText}>1,250 XP</Text>
        </View>
      </View>

      {/* MAIN CONTENT */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Hero Stats Bento */}
        <View style={styles.bentoGrid}>
          <View style={[styles.bentoItem, styles.glassCard, { width: '100%' }]}>
            <Text style={styles.bentoTitle}>Morning, Alex!</Text>
            <Text style={styles.bentoSubtitle}>You're 250 XP away from Level 2. Keep it up!</Text>
            <View style={styles.progressBarBg}>
              <View style={[styles.progressBarFill, { width: '75%' }]} />
            </View>
          </View>

          <View style={styles.statsRow}>
            <View style={styles.statBoxSecondary}>
              <Icon name="eco" size={32} color="#006b5f" style={styles.statIcon} />
              <Text style={styles.statLabelSec}>CO2 SAVED</Text>
              <Text style={styles.statValueSec}>12.4kg</Text>
            </View>
            <View style={styles.statBoxTertiary}>
              <Icon name="water-drop" size={32} color="#005ac2" style={styles.statIcon} />
              <Text style={styles.statLabelTer}>WATER SAVED</Text>
              <Text style={styles.statValueTer}>45L</Text>
            </View>
          </View>
        </View>

        {/* Action Logger Section */}
        <View style={[styles.glassCard, styles.actionLoggerSection, showTooltips && styles.actionLoggerActive]}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Daily Actions</Text>
            <Icon name="history" size={24} color="#006c49" />
          </View>
          
          <View style={styles.actionList}>
            <View style={styles.actionItem}>
              <View style={styles.actionLeft}>
                <View style={styles.actionIconBox}>
                  <Icon name="directions-bike" size={20} color="#006c49" />
                </View>
                <View>
                  <Text style={styles.actionTitle}>Bike to School</Text>
                  <Text style={styles.actionSub}>Active Quest</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.actionBtn}>
                <Text style={styles.actionBtnText}>+50 XP</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.actionItem}>
              <View style={styles.actionLeft}>
                <View style={styles.actionIconBox}>
                  <Icon name="recycling" size={20} color="#006c49" />
                </View>
                <View>
                  <Text style={styles.actionTitle}>Sorted Waste</Text>
                  <Text style={styles.actionSub}>Daily Habit</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.actionBtn}>
                <Text style={styles.actionBtnText}>+20 XP</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Placeholders */}
        <View style={styles.placeholderCard} />
        <View style={styles.placeholderCard} />
      </ScrollView>

      {/* BOTTOM NAV BAR */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItemActive}>
          <Icon name="home" size={24} color="#00422b" />
          <Text style={styles.navLabelActive}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="emoji-events" size={24} color="#3c4a42" />
          <Text style={styles.navLabel}>Impact</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="leaderboard" size={24} color="#3c4a42" />
          <Text style={styles.navLabel}>Arena</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="person" size={24} color="#3c4a42" />
          <Text style={styles.navLabel}>Me</Text>
        </TouchableOpacity>
      </View>

      {/* Tooltips */}
      {showTooltips && (
        <>
          <Animated.View style={[styles.tooltipXp, { opacity: tooltipAnim }]}>
            <View style={styles.tooltipBox}>
              <Text style={styles.tooltipTitle}>Your Power Level</Text>
              <Text style={styles.tooltipDesc}>This is your XP. Level up by completing real-world green actions!</Text>
              <View style={styles.tooltipPointerTop} />
            </View>
          </Animated.View>

          <Animated.View style={[styles.tooltipActions, { opacity: tooltipAnim }]}>
            <View style={styles.tooltipBoxSecondary}>
              <Text style={styles.tooltipTitle}>Action Logger</Text>
              <Text style={styles.tooltipDesc}>Log your sustainable habits here to earn instant rewards.</Text>
              <View style={styles.tooltipPointerBottom} />
            </View>
          </Animated.View>
        </>
      )}

      {/* FIRST VISIT OVERLAY */}
      <Modal visible={showOverlay} transparent animationType="fade">
        <View style={styles.overlayBg}>
          <View style={styles.overlayCard}>
            <View style={styles.overlayIconCircle}>
              <Icon name="rocket-launch" size={40} color="#ffffff" />
            </View>
            <Text style={styles.overlayTitle}>Welcome, Eco-Hero!</Text>
            <Text style={styles.overlayDesc}>
              Your journey to save the planet starts today. Track your impact, complete quests, and climb the leaderboard!
            </Text>
            <TouchableOpacity style={styles.overlayBtn} onPress={() => setShowOverlay(false)}>
              <Text style={styles.overlayBtnText}>Start My First Quest</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { height: 64, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, backgroundColor: 'rgba(248,249,250,0.8)', borderBottomWidth: 1, borderBottomColor: 'rgba(187,202,191,0.2)', zIndex: 50 },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  avatarContainer: { width: 40, height: 40, borderRadius: 20, borderWidth: 2, borderColor: '#006c49' },
  avatarImg: { width: '100%', height: '100%', borderRadius: 20 },
  badge: { position: 'absolute', bottom: -4, right: -4, width: 16, height: 16, backgroundColor: '#006c49', borderRadius: 8, borderWidth: 1, borderColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  badgeText: { fontSize: 8, color: '#fff', fontWeight: 'bold' },
  headerTitle: { fontSize: 24, fontWeight: '600', color: '#006c49' },
  xpCounter: { flexDirection: 'row', alignItems: 'center', gap: 8, backgroundColor: 'rgba(16,185,129,0.2)', paddingHorizontal: 16, paddingVertical: 6, borderRadius: 20 },
  xpCounterActive: { backgroundColor: '#10b981', borderWidth: 2, borderColor: '#ffffff', transform: [{ scale: 1.1 }] },
  xpText: { fontWeight: 'bold', color: '#006c49' },
  scrollContent: { paddingHorizontal: 24, paddingTop: 20, paddingBottom: 100 },
  bentoGrid: { marginBottom: 24 },
  glassCard: { backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: 16, padding: 24, borderWidth: 1, borderColor: 'rgba(255,255,255,0.3)' },
  bentoItem: { padding: 24, borderRadius: 16 },
  bentoTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d', marginBottom: 8 },
  bentoSubtitle: { fontSize: 16, color: '#3c4a42', marginBottom: 16 },
  progressBarBg: { height: 12, backgroundColor: '#e1e3e4', borderRadius: 6, overflow: 'hidden' },
  progressBarFill: { height: '100%', backgroundColor: '#10b981', borderRadius: 6 },
  statsRow: { flexDirection: 'row', gap: 16, marginTop: 16 },
  statBoxSecondary: { flex: 1, backgroundColor: 'rgba(109,245,225,0.3)', padding: 16, borderRadius: 16, alignItems: 'center' },
  statBoxTertiary: { flex: 1, backgroundColor: 'rgba(113,161,255,0.3)', padding: 16, borderRadius: 16, alignItems: 'center' },
  statIcon: { marginBottom: 8 },
  statLabelSec: { fontSize: 12, fontWeight: '700', color: '#006f64', marginBottom: 4 },
  statValueSec: { fontSize: 28, fontWeight: '700', color: '#006b5f' },
  statLabelTer: { fontSize: 12, fontWeight: '700', color: '#00367a', marginBottom: 4 },
  statValueTer: { fontSize: 28, fontWeight: '700', color: '#005ac2' },
  actionLoggerSection: { marginBottom: 24 },
  actionLoggerActive: { borderWidth: 4, borderColor: '#10b981', zIndex: 110 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  sectionTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d' },
  actionList: { gap: 12 },
  actionItem: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#f3f4f5', padding: 12, borderRadius: 12 },
  actionLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  actionIconBox: { width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(0,108,73,0.1)', alignItems: 'center', justifyContent: 'center' },
  actionTitle: { fontWeight: '600', color: '#191c1d' },
  actionSub: { fontSize: 12, color: '#3c4a42' },
  actionBtn: { backgroundColor: '#006c49', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20 },
  actionBtnText: { color: '#ffffff', fontWeight: '600', fontSize: 14 },
  placeholderCard: { height: 128, backgroundColor: '#e7e8e9', borderRadius: 16, marginBottom: 16, opacity: 0.5 },
  bottomNav: { position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'rgba(248,249,250,0.9)', borderTopWidth: 1, borderTopColor: 'rgba(187,202,191,0.2)', paddingBottom: 20 },
  navItemActive: { alignItems: 'center', justifyContent: 'center', backgroundColor: '#10b981', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 12 },
  navItem: { alignItems: 'center', justifyContent: 'center', paddingHorizontal: 16, paddingVertical: 8 },
  navLabelActive: { fontSize: 12, fontWeight: '700', color: '#00422b', marginTop: 4 },
  navLabel: { fontSize: 12, fontWeight: '700', color: '#3c4a42', marginTop: 4 },
  
  // Overlay
  overlayBg: { flex: 1, backgroundColor: 'rgba(46,49,50,0.6)', alignItems: 'center', justifyContent: 'center', padding: 24 },
  overlayCard: { width: '100%', maxWidth: 384, backgroundColor: '#f8f9fa', borderRadius: 16, padding: 32, alignItems: 'center', paddingTop: 56 },
  overlayIconCircle: { position: 'absolute', top: -48, width: 96, height: 96, borderRadius: 48, backgroundColor: '#006c49', alignItems: 'center', justifyContent: 'center', borderWidth: 4, borderColor: '#f8f9fa' },
  overlayTitle: { fontSize: 24, fontWeight: '700', color: '#006c49', marginBottom: 16 },
  overlayDesc: { fontSize: 16, color: '#3c4a42', textAlign: 'center', marginBottom: 32 },
  overlayBtn: { width: '100%', backgroundColor: '#006c49', paddingVertical: 16, borderRadius: 12, alignItems: 'center' },
  overlayBtnText: { color: '#ffffff', fontWeight: 'bold', fontSize: 16 },

  // Tooltips
  tooltipXp: { position: 'absolute', top: 70, right: 16, zIndex: 120 },
  tooltipBox: { backgroundColor: '#10b981', padding: 16, borderRadius: 12, width: 200, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8 },
  tooltipTitle: { fontWeight: 'bold', color: '#00422b', marginBottom: 4 },
  tooltipDesc: { fontSize: 12, color: '#00422b' },
  tooltipPointerTop: { position: 'absolute', top: -8, right: 24, width: 16, height: 16, backgroundColor: '#10b981', transform: [{ rotate: '45deg' }] },
  
  tooltipActions: { position: 'absolute', top: '45%', left: 24, right: 24, zIndex: 120, alignItems: 'center' },
  tooltipBoxSecondary: { backgroundColor: '#6df5e1', padding: 16, borderRadius: 12, width: '100%', borderWidth: 2, borderColor: '#006b5f', shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8 },
  tooltipPointerBottom: { position: 'absolute', bottom: -8, left: '50%', marginLeft: -8, width: 16, height: 16, backgroundColor: '#6df5e1', transform: [{ rotate: '45deg' }], borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#006b5f' },
});
