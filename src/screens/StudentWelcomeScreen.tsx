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

export default function StudentWelcomeScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Background Ambience */}
      <View style={styles.bgGradientContainer}>
        <View style={styles.ambientTopRight} />
        <View style={styles.ambientBottomLeft} />
      </View>

      <View style={styles.mainContainer}>
        {/* Left/Top: Image Container */}
        <View style={styles.imageSection}>
          <View style={styles.imageWrapper}>
            <Image 
              source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIGkiyrAP58HVbZ6moC40bmdkFX1gpaSyyirGS2lEtS5_rnxnBuwfRn_wcNIVH7XUVS531acQspGK8uaMlUi9lAN0QwEBk4YSm65ayyyO5oNy5645dGG3hVF4O4WPiAIG66FZtHLbPe3oomVEaR1DdLY_yPwBuIk6uusFt2En8xkohX8An3w5TgIJ842W72wTJagNoncR6S06kZ10f5ac0aJksq40mgvcOJLLdVMot39BUJv23PIHSCf8feXibnRkTLXGPdTmRy5H3'}}
              style={styles.heroImage}
            />
          </View>
        </View>

        {/* Right/Bottom: Content */}
        <View style={styles.contentSection}>
          <View style={styles.tagContainer}>
            <View style={styles.tagEdition}>
              <Text style={styles.tagEditionText}>STUDENT EDITION</Text>
            </View>
            <View style={styles.tagLive}>
              <Icon name="eco" size={16} color="#10b981" />
              <Text style={styles.tagLiveText}>LIVE IMPACT</Text>
            </View>
          </View>

          <Text style={styles.title}>Let's build your sustainability journey!</Text>
          <Text style={styles.subtitle}>Join a global community of students making a real-world difference. Earn XP, track your footprint, and unlock rewards as you grow your green legacy.</Text>

          <TouchableOpacity style={styles.getStartedBtn}>
            <LinearGradient colors={['#10b981', '#059669']} style={styles.getStartedGradient}>
              <Text style={styles.getStartedText}>Get Started</Text>
              <Icon name="arrow-forward" size={24} color="#fff" />
            </LinearGradient>
          </TouchableOpacity>

          <View style={styles.statsContainer}>
            <View style={styles.avatarsRow}>
              <Image source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfC3iswILmdGanBrGRKCFO2aEUdF8kRXlRyyk0m963RhO9TCsTVf9lH0babwIn5EnZphqq-Kr-nhu_UDbB4Pt1gQrFl4V3gLDvZhrERsBH3hpDRsaH2EqkS3pVLML6sONrs7L3AQN8DWw85E8m1LyKHtb1g8j0ZqTYrze88fKxE6yupE7QVAxsJwQ_TkxwE2SJupkRIylAMUxcApsOQ0XxNlHTl6zNa5Gj6aB_yDJrdXR6DR3lA3HSfA12v9G3blq8J8iMUNMl3i2N'}} style={[styles.statAvatar, { zIndex: 3 }]} />
              <Image source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDohcsWhRQuxaRFNtu_gP925BHLCEcjEXAA72bRCfK6XfkEfiz8Ey2jXR7M0ERc_TgVeTswb4JpHirpS-7YmMW4jjqfLUKXydGVSqfccbD8DsdgvjcBhAsDfAL2g250hHyVnQOKSq4ODro6Pu_ywTgg8AOMPc71mn15XncAaALKMrBRKNxqA6mLqVW3KTYiMJM30fEh0ccig9b3-CVVevIHhJJbwxC5G0FBrC7u1xWpeJXyjScYD7rZnmC5irTDxR5K-hoyDbrJ55bu'}} style={[styles.statAvatar, { zIndex: 2, marginLeft: -12 }]} />
              <View style={[styles.statCountBadge, { zIndex: 1, marginLeft: -12 }]}>
                <Text style={styles.statCountText}>+2k</Text>
              </View>
            </View>
            <Text style={styles.statsLabel}>STUDENTS JOINED TODAY</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f0fdf4' },
  bgGradientContainer: { ...StyleSheet.absoluteFillObject, overflow: 'hidden' },
  ambientTopRight: { position: 'absolute', top: -100, right: -100, width: 400, height: 400, backgroundColor: 'rgba(111, 251, 190, 0.2)', borderRadius: 200 },
  ambientBottomLeft: { position: 'absolute', bottom: -100, left: -100, width: 300, height: 300, backgroundColor: 'rgba(113, 248, 228, 0.2)', borderRadius: 150 },
  mainContainer: { flex: 1, padding: 24, justifyContent: 'center', alignItems: 'center' },
  imageSection: { width: '100%', alignItems: 'center', marginBottom: 40, maxWidth: 500 },
  imageWrapper: { width: '100%', aspectRatio: 1, borderRadius: 24, overflow: 'hidden', elevation: 12, shadowColor: '#006c49', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.3, shadowRadius: 20 },
  heroImage: { width: '100%', height: '100%', resizeMode: 'cover' },
  contentSection: { width: '100%', maxWidth: 500, alignItems: 'center' },
  tagContainer: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 16 },
  tagEdition: { paddingHorizontal: 12, paddingVertical: 4, backgroundColor: 'rgba(16, 185, 129, 0.1)', borderRadius: 16, borderWidth: 1, borderColor: 'rgba(16, 185, 129, 0.1)' },
  tagEditionText: { fontSize: 12, fontWeight: '700', color: '#006c49' },
  tagLive: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  tagLiveText: { fontSize: 12, fontWeight: '700', color: '#10b981' },
  title: { fontSize: 40, fontWeight: '800', color: '#191c1d', textAlign: 'center', lineHeight: 48, marginBottom: 24 },
  subtitle: { fontSize: 18, color: '#3c4a42', textAlign: 'center', marginBottom: 40, lineHeight: 28 },
  getStartedBtn: { width: '100%', maxWidth: 300, borderRadius: 16, overflow: 'hidden', elevation: 8, shadowColor: '#006c49', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.3, shadowRadius: 16 },
  getStartedGradient: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12, paddingVertical: 16 },
  getStartedText: { fontSize: 24, fontWeight: '600', color: '#fff' },
  statsContainer: { flexDirection: 'row', alignItems: 'center', gap: 16, marginTop: 40 },
  avatarsRow: { flexDirection: 'row', alignItems: 'center' },
  statAvatar: { width: 40, height: 40, borderRadius: 20, borderWidth: 2, borderColor: '#fff' },
  statCountBadge: { width: 40, height: 40, borderRadius: 20, borderWidth: 2, borderColor: '#fff', backgroundColor: '#10b981', alignItems: 'center', justifyContent: 'center' },
  statCountText: { fontSize: 10, fontWeight: '700', color: '#fff' },
  statsLabel: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 1 },
});
