import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

export default function TeacherDashboardTutorialScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Blurred Background (Dashboard Mockup) */}
      <View style={styles.mockupContainer}>
        <View style={styles.mockupHeader}>
          <Text style={styles.mockupLogoText}>ChonX</Text>
          <View style={styles.mockupHeaderRight}>
            <View style={styles.mockupAvatar} />
            <Text style={styles.mockupXP}>⚡ 2,450 XP</Text>
          </View>
        </View>
        <View style={styles.mockupBody}>
          <View style={styles.mockupCard1}>
            <View style={styles.mockupLine1} />
            <View style={styles.mockupGrid}>
              <View style={styles.mockupBox} />
              <View style={styles.mockupBox} />
              <View style={styles.mockupBox} />
            </View>
          </View>
          <View style={styles.mockupCard2} />
        </View>
      </View>

      {/* Overlay */}
      <View style={styles.overlay}>
        {/* Tooltip 1: Analytics (Top Right) */}
        <View style={styles.tooltip1}>
          <View style={styles.tooltip1Box}>
            <View style={styles.tooltipHeader}>
              <Icon name="monitoring" size={18} color="#00422b" />
              <Text style={styles.tooltipTitle1}>View Class Analytics</Text>
            </View>
            <Text style={styles.tooltipDesc1}>Track real-time progress and eco-impact metrics for your entire classroom at a glance.</Text>
            <View style={styles.tooltip1Arrow} />
          </View>
          <View style={styles.pulseRing1}>
            <Icon name="priority-high" size={24} color="#10b981" />
          </View>
        </View>

        {/* Tooltip 2: Approve (Center) */}
        <View style={styles.tooltip2}>
          <View style={styles.pulseRing2}>
            <Icon name="check-circle" size={48} color="#006b5f" />
          </View>
          <View style={styles.tooltip2Box}>
            <Text style={styles.tooltipTitle2}>Approve Activities</Text>
            <Text style={styles.tooltipDesc2}>Your students have submitted new green deeds! Review and validate their ecological impact to award XP and badges.</Text>
            <View style={styles.dotsRow}>
              <View style={[styles.dot, styles.dotActive]} />
              <View style={styles.dot} />
              <View style={styles.dot} />
            </View>
          </View>
        </View>

        {/* Tooltip 3: Campaigns (Bottom Center) */}
        <View style={styles.tooltip3}>
          <View style={styles.tooltip3Box}>
            <View style={styles.tooltipHeader}>
              <Icon name="campaign" size={18} color="#00367a" />
              <Text style={styles.tooltipTitle3}>Manage Campaigns</Text>
            </View>
            <Text style={styles.tooltipDesc3}>Launch new school-wide challenges and set collective sustainability goals here.</Text>
            <View style={styles.tooltip3Arrow} />
          </View>
          <View style={styles.pulseRing3}>
            <Icon name="keyboard-double-arrow-down" size={20} color="#fff" />
          </View>
        </View>

        {/* Let's Go Button */}
        <View style={styles.actionSection}>
          <Text style={styles.readyText}>READY TO START?</Text>
          <TouchableOpacity style={styles.letsGoBtn}>
            <LinearGradient colors={['#006c49', '#006b5f']} style={styles.letsGoGradient} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
              <Text style={styles.letsGoText}>Let's Go!</Text>
              <Icon name="arrow-forward" size={24} color="#fff" />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Fake Bottom Nav */}
      <View style={styles.fakeBottomNav}>
        <View style={styles.fakeNavItem}><Icon name="home" size={24} color="#3c4a42" /><Text style={styles.fakeNavText}>Home</Text></View>
        <View style={styles.fakeNavItem}><Icon name="eco" size={24} color="#3c4a42" /><Text style={styles.fakeNavText}>Impact</Text></View>
        <View style={styles.fakeNavItemActive}><Icon name="workspace-premium" size={24} color="#00422b" /><Text style={styles.fakeNavTextActive}>Arena</Text></View>
        <View style={styles.fakeNavItem}><Icon name="person" size={24} color="#3c4a42" /><Text style={styles.fakeNavText}>Profile</Text></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#000' },
  mockupContainer: { ...StyleSheet.absoluteFillObject, opacity: 0.4 }, // Fake blur/grayscale
  mockupHeader: { height: 64, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 24, backgroundColor: '#f8f9fa' },
  mockupLogoText: { fontSize: 24, fontWeight: '800', color: '#006c49' },
  mockupHeaderRight: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  mockupAvatar: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#e1e3e4' },
  mockupXP: { fontSize: 16, fontWeight: '700', color: '#006c49' },
  mockupBody: { padding: 24, gap: 24 },
  mockupCard1: { backgroundColor: '#fff', borderRadius: 8, padding: 24, height: 256 },
  mockupLine1: { height: 32, width: 200, backgroundColor: '#f3f4f5', borderRadius: 16, marginBottom: 24 },
  mockupGrid: { flexDirection: 'row', gap: 12 },
  mockupBox: { flex: 1, height: 128, backgroundColor: '#edeeef', borderRadius: 4 },
  mockupCard2: { backgroundColor: '#fff', borderRadius: 8, height: 384 },
  
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.6)' },
  
  tooltip1: { position: 'absolute', top: 80, right: 24, alignItems: 'flex-end', gap: 12 },
  tooltip1Box: { backgroundColor: '#10b981', padding: 24, borderRadius: 8, maxWidth: 300, elevation: 8 },
  tooltipHeader: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 8 },
  tooltipTitle1: { fontSize: 16, fontWeight: '700', color: '#00422b' },
  tooltipDesc1: { fontSize: 14, color: '#00422b', opacity: 0.9 },
  tooltip1Arrow: { position: 'absolute', top: -8, right: 32, width: 16, height: 16, backgroundColor: '#10b981', transform: [{ rotate: '45deg' }] },
  pulseRing1: { width: 48, height: 48, borderRadius: 24, borderWidth: 4, borderColor: '#10b981', alignItems: 'center', justifyContent: 'center', marginRight: 16, backgroundColor: 'rgba(255,255,255,0.1)' },

  tooltip2: { position: 'absolute', top: '40%', left: '50%', transform: [{ translateX: -150 }], alignItems: 'center', gap: 24, width: 300 },
  pulseRing2: { width: 96, height: 96, borderRadius: 48, borderWidth: 4, borderColor: '#6df5e1', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', elevation: 8, zIndex: 10 },
  tooltip2Box: { backgroundColor: '#fff', padding: 24, borderRadius: 8, borderTopWidth: 4, borderTopColor: '#006b5f', elevation: 8, alignItems: 'center' },
  tooltipTitle2: { fontSize: 24, fontWeight: '600', color: '#006b5f', marginBottom: 12, textAlign: 'center' },
  tooltipDesc2: { fontSize: 16, color: '#3c4a42', textAlign: 'center' },
  dotsRow: { flexDirection: 'row', gap: 8, marginTop: 24 },
  dot: { width: 16, height: 6, borderRadius: 3, backgroundColor: '#e1e3e4' },
  dotActive: { width: 48, backgroundColor: '#006b5f' },

  tooltip3: { position: 'absolute', bottom: 120, left: '50%', transform: [{ translateX: -150 }], alignItems: 'center', gap: 12, width: 300 },
  tooltip3Box: { backgroundColor: '#71a1ff', padding: 24, borderRadius: 8, elevation: 8, borderWidth: 1, borderColor: 'rgba(255,255,255,0.2)' },
  tooltipTitle3: { fontSize: 16, fontWeight: '700', color: '#00367a' },
  tooltipDesc3: { fontSize: 12, color: '#00367a' },
  tooltip3Arrow: { position: 'absolute', bottom: -8, left: '50%', marginLeft: -8, width: 16, height: 16, backgroundColor: '#71a1ff', transform: [{ rotate: '45deg' }] },
  pulseRing3: { width: 40, height: 40, borderRadius: 20, borderWidth: 2, borderColor: 'rgba(255,255,255,0.5)', backgroundColor: 'rgba(113,161,255,0.2)', alignItems: 'center', justifyContent: 'center' },

  actionSection: { position: 'absolute', bottom: 100, right: 24, alignItems: 'flex-end', gap: 16 },
  readyText: { fontSize: 12, fontWeight: '700', color: 'rgba(255,255,255,0.8)' },
  letsGoBtn: { borderRadius: 32, overflow: 'hidden', elevation: 8 },
  letsGoGradient: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 32, paddingVertical: 16 },
  letsGoText: { fontSize: 24, fontWeight: '600', color: '#fff' },

  fakeBottomNav: { position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, backgroundColor: 'rgba(248,249,250,0.4)', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingHorizontal: 16 },
  fakeNavItem: { alignItems: 'center', paddingVertical: 8, paddingHorizontal: 16 },
  fakeNavItemActive: { alignItems: 'center', paddingVertical: 8, paddingHorizontal: 24, backgroundColor: '#10b981', borderRadius: 20 },
  fakeNavText: { fontSize: 12, fontWeight: '700', color: '#3c4a42', marginTop: 4 },
  fakeNavTextActive: { fontSize: 12, fontWeight: '700', color: '#00422b', marginTop: 4 },
});
