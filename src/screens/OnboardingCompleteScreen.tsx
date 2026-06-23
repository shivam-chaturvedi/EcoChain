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

export default function OnboardingCompleteScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.checkIconWrapper}>
            <Icon name="check-circle" size={40} color="#002113" />
          </View>
          <Text style={styles.title}>Your Eco-Ecosystem is Ready!</Text>
          <Text style={styles.subtitle}>The seeds of sustainability have been sown.</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.profileSection}>
            <View style={styles.avatarBorder}>
              <Image 
                source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_upigIK5kYpfuS6P6-rATk1waye6sIh2dzH-igm5cBIUgtFzOkLQ21m5ABSXZK9C4tweRKy7QfOKFawS-Owoev_mfHkrpt4Lvtkp3eUAEyIgVbwG_DJHbDL47Bqe-IBblY3vySJXuSAjwrCayIsjB8QvmcBV2Gy3UvklPFrUTjqw5pU6V0NAB3_R_ZwAi0IM4V4wDzeQm4zpOGcmmriDbz_gJBnwf5kfG14We8CYcQ0RdSBy76Ud0Zwe6sF6UA3epD7STkfKYF_vD'}}
                style={styles.avatar}
              />
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.roleText}>ADMINISTRATOR</Text>
              <Text style={styles.nameText}>Sarah Sterling</Text>
            </View>
          </View>

          <View style={styles.infoGrid}>
            <View style={styles.infoBox}>
              <Text style={styles.infoLabel}>INSTITUTION</Text>
              <Text style={styles.infoValue}>Greenwood Academy</Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoLabel}>SCHOOL CODE</Text>
              <Text style={styles.codeValue}>GRNW-2024</Text>
              <TouchableOpacity style={styles.copyBtn}>
                <Icon name="content-copy" size={14} color="#006c49" />
                <Text style={styles.copyText}>COPY CODE</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.progressSection}>
            <View style={styles.progressHeader}>
              <View style={styles.progressHeaderLeft}>
                <Icon name="eco" size={18} color="#006b5f" />
                <Text style={styles.progressTitle}>Initial Eco-Status</Text>
              </View>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>SEEDLING LEVEL</Text>
              </View>
            </View>
            <View style={styles.progressBarBg}>
              <LinearGradient 
                colors={['#006c49', '#006b5f']}
                start={{x:0, y:0}}
                end={{x:1, y:0}}
                style={styles.progressBarFill}
              />
            </View>
          </View>
        </View>

        <View style={styles.actionSection}>
          <TouchableOpacity style={styles.primaryBtn} onPress={() => navigation.navigate('SchoolAdminWelcome')}>
            <LinearGradient 
              colors={['#006c49', '#006b5f']}
              start={{x:0, y:0}}
              end={{x:1, y:0}}
              style={styles.primaryBtnGradient}
            >
              <Text style={styles.primaryBtnText}>Enter Dashboard</Text>
              <Icon name="arrow-forward" size={24} color="#ffffff" />
            </LinearGradient>
          </TouchableOpacity>
          <Text style={styles.actionFooterText}>ONBOARDING COMPLETE</Text>
        </View>

        <View style={styles.footerSecure}>
          <Icon name="verified-user" size={16} color="#6c7a71" />
          <Text style={styles.footerSecureText}>SECURE CLOUD DEPLOYMENT</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  header: { alignItems: 'center', marginBottom: 40 },
  checkIconWrapper: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#6ffbbe',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    shadowColor: '#006c49',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  title: { fontSize: 32, fontWeight: '700', color: '#191c1d', textAlign: 'center', marginBottom: 8 },
  subtitle: { fontSize: 18, color: '#3c4a42', textAlign: 'center' },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 16,
    padding: 24,
    width: '100%',
    maxWidth: 500,
    borderWidth: 1,
    borderColor: 'rgba(229, 231, 235, 0.5)',
    shadowColor: '#064e3b',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 32,
    elevation: 8,
  },
  profileSection: { flexDirection: 'row', alignItems: 'center', gap: 24, marginBottom: 24 },
  avatarBorder: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: 'rgba(0, 108, 73, 0.2)',
    padding: 4,
  },
  avatar: { width: '100%', height: '100%', borderRadius: 32 },
  profileInfo: { flex: 1 },
  roleText: { fontSize: 12, fontWeight: '700', color: '#3c4a42', marginBottom: 4 },
  nameText: { fontSize: 24, fontWeight: '600', color: '#191c1d' },
  infoGrid: { flexDirection: 'row', gap: 24, marginBottom: 24 },
  infoBox: { flex: 1, backgroundColor: '#f3f4f5', borderRadius: 16, padding: 24 },
  infoLabel: { fontSize: 12, fontWeight: '700', color: '#6c7a71', marginBottom: 8 },
  infoValue: { fontSize: 24, fontWeight: '600', color: '#006c49' },
  codeValue: { fontSize: 28, fontWeight: '700', color: '#006b5f', letterSpacing: 2, textTransform: 'uppercase' },
  copyBtn: { flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 8 },
  copyText: { fontSize: 12, fontWeight: '700', color: '#006c49' },
  progressSection: { borderTopWidth: 1, borderTopColor: 'rgba(187, 202, 191, 0.3)', paddingTop: 24 },
  progressHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  progressHeaderLeft: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  progressTitle: { fontSize: 18, fontWeight: '600', color: '#191c1d' },
  badge: { backgroundColor: '#6ffbbe', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 16 },
  badgeText: { fontSize: 12, fontWeight: '700', color: '#002113' },
  progressBarBg: { height: 12, width: '100%', backgroundColor: '#e1e3e4', borderRadius: 6, overflow: 'hidden' },
  progressBarFill: { width: '15%', height: '100%', borderRadius: 6 },
  actionSection: { marginTop: 64, alignItems: 'center', width: '100%', maxWidth: 500 },
  primaryBtn: { width: '100%', borderRadius: 16, overflow: 'hidden', shadowColor: '#006c49', shadowOffset: { width: 0, height: 12 }, shadowOpacity: 0.25, shadowRadius: 24, elevation: 8 },
  primaryBtnGradient: { paddingVertical: 24, paddingHorizontal: 64, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12 },
  primaryBtnText: { color: '#ffffff', fontSize: 24, fontWeight: '600' },
  actionFooterText: { fontSize: 12, fontWeight: '700', color: '#6c7a71', marginTop: 24, letterSpacing: 2 },
  footerSecure: { position: 'absolute', bottom: 40, flexDirection: 'row', alignItems: 'center', gap: 8, opacity: 0.5 },
  footerSecureText: { fontSize: 12, fontWeight: '700', color: '#6c7a71', letterSpacing: -0.5 },
});
