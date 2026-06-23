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

export default function SchoolAdminWelcomeScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Icon name="eco" size={24} color="#006c49" />
          <Text style={styles.logoText}>ChonX</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.searchBtn}>
            <Icon name="search" size={24} color="#3c4a42" />
          </TouchableOpacity>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>JD</Text>
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.mainGrid}>
          <View style={styles.textContent}>
            <View style={styles.badge}>
              <Icon name="auto-awesome" size={14} color="#00422b" />
              <Text style={styles.badgeText}>ADMIN DASHBOARD READY</Text>
            </View>
            <Text style={styles.title}>
              Let's set up your{' '}
              <Text style={styles.titleGradient}>school sustainability</Text>{' '}
              ecosystem.
            </Text>
            <Text style={styles.subtitle}>
              Create a green future for your students and track campus-wide impact. Join 200+ schools leading the ChonX revolution.
            </Text>
            <TouchableOpacity style={styles.startBtn} onPress={() => navigation.navigate('SchoolAnalytics')}>
              <LinearGradient
                colors={['#006c49', '#006b5f']}
                start={{x:0,y:0}}
                end={{x:1,y:0}}
                style={styles.startBtnGradient}
              >
                <Text style={styles.startBtnText}>Get Started</Text>
                <Icon name="arrow-forward" size={24} color="#fff" />
              </LinearGradient>
            </TouchableOpacity>

            <View style={styles.statsRow}>
              <View style={styles.statBox}>
                <Text style={styles.statValue}>450+</Text>
                <Text style={styles.statLabel}>TREES PLANTED</Text>
              </View>
              <View style={styles.statBox}>
                <Text style={[styles.statValue, { color: '#005ac2' }]}>12k</Text>
                <Text style={styles.statLabel}>ACTIVE STUDENTS</Text>
              </View>
              <View style={styles.statBox}>
                <Text style={[styles.statValue, { color: '#006b5f' }]}>94%</Text>
                <Text style={styles.statLabel}>ENGAGEMENT</Text>
              </View>
            </View>
          </View>

          <View style={styles.imageContent}>
            <Image 
              source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARRwb2NPJN396JuuULgc92QmMaM3Fx2esRx9FjIZnOam_IR4IaTPjE_nri9YvJEgHv3IfOPTDqpnUHjvgo4hGihn9XZpatubL7YUtemRnJX52t294vdwJt6GEOBZGGXExeXRioGWY1rNJ3yys_oHPpd1AzB39PukFpP2Og_rMsnm1Gg_7hTl63T5GHAPoUDbNLxN5YGgzxpeGpPA-SbdSqYgbJCAM3eyNIk-HKaWltw3mKByNhJhm_xw9kJi6W1MLryKx7qbfcJcAm'}}
              style={styles.mainImage}
            />
            <View style={styles.floatCards}>
              <View style={styles.floatCard}>
                <View style={[styles.floatIcon, { backgroundColor: '#10b981' }]}>
                  <Icon name="energy-savings-leaf" size={24} color="#00422b" />
                </View>
                <View>
                  <Text style={styles.floatLabel}>CAMPUS RATING</Text>
                  <Text style={[styles.floatValue, { color: '#006c49' }]}>A+ Certified</Text>
                </View>
              </View>
              <View style={styles.floatCard}>
                <View style={[styles.floatIcon, { backgroundColor: '#6df5e1' }]}>
                  <Icon name="monitoring" size={24} color="#006f64" />
                </View>
                <View>
                  <Text style={styles.floatLabel}>REAL-TIME IMPACT</Text>
                  <Text style={[styles.floatValue, { color: '#006b5f' }]}>Live Metrics</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.stepsGrid}>
          <View style={styles.stepCard}>
            <View style={styles.stepIconWrapper}>
              <Icon name="domain" size={24} color="#006c49" />
            </View>
            <Text style={styles.stepTitle}>1. Profile School</Text>
            <Text style={styles.stepDesc}>Add your campus location, student size, and sustainability goals to tailor the experience.</Text>
          </View>
          <View style={styles.stepCard}>
            <View style={styles.stepIconWrapper}>
              <Icon name="groups" size={24} color="#006b5f" />
            </View>
            <Text style={styles.stepTitle}>2. Invite Teams</Text>
            <Text style={styles.stepDesc}>Onboard teachers and student leaders to manage specific eco-projects across your school.</Text>
          </View>
          <View style={styles.stepCard}>
            <View style={styles.stepIconWrapper}>
              <Icon name="analytics" size={24} color="#005ac2" />
            </View>
            <Text style={styles.stepTitle}>3. Launch Impact</Text>
            <Text style={styles.stepDesc}>Activate live tracking for energy, waste, and carbon reduction throughout the semester.</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  header: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(108, 122, 113, 0.3)',
    backgroundColor: 'rgba(248, 249, 250, 0.8)',
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  logoText: { fontSize: 24, fontWeight: '800', color: '#006c49' },
  headerRight: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  searchBtn: { padding: 8 },
  avatar: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#6df5e1', alignItems: 'center', justifyContent: 'center' },
  avatarText: { fontSize: 16, fontWeight: '700', color: '#006f64' },
  scrollContent: { padding: 24, paddingBottom: 64 },
  mainGrid: { flexDirection: 'column', gap: 40, marginBottom: 64 },
  textContent: { flex: 1 },
  badge: { flexDirection: 'row', alignItems: 'center', gap: 4, backgroundColor: 'rgba(16, 185, 129, 0.2)', alignSelf: 'flex-start', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 16, marginBottom: 16 },
  badgeText: { fontSize: 12, fontWeight: '700', color: '#00422b' },
  title: { fontSize: 48, fontWeight: '800', color: '#191c1d', lineHeight: 56, marginBottom: 16 },
  titleGradient: { color: '#006c49' }, // simplified gradient text
  subtitle: { fontSize: 18, color: '#3c4a42', marginBottom: 24, lineHeight: 28 },
  startBtn: { borderRadius: 8, overflow: 'hidden', alignSelf: 'flex-start', shadowColor: '#006c49', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.2, shadowRadius: 16, elevation: 4, marginBottom: 40 },
  startBtnGradient: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 64, paddingVertical: 24 },
  startBtnText: { color: '#fff', fontSize: 24, fontWeight: '600' },
  statsRow: { flexDirection: 'row', borderTopWidth: 1, borderTopColor: 'rgba(187, 202, 191, 0.3)', paddingTop: 40, gap: 24 },
  statBox: { flex: 1 },
  statValue: { fontSize: 28, fontWeight: '700', color: '#006c49', marginBottom: 4 },
  statLabel: { fontSize: 12, fontWeight: '700', color: '#3c4a42' },
  imageContent: { flex: 1, position: 'relative', aspectRatio: 1, borderRadius: 24, overflow: 'hidden' },
  mainImage: { width: '100%', height: '100%', resizeMode: 'cover' },
  floatCards: { position: 'absolute', bottom: 24, left: 24, right: 24, flexDirection: 'row', gap: 24 },
  floatCard: { flex: 1, backgroundColor: 'rgba(255,255,255,0.7)', padding: 16, borderRadius: 16, flexDirection: 'row', alignItems: 'center', gap: 12 },
  floatIcon: { width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center' },
  floatLabel: { fontSize: 10, fontWeight: '700', color: '#3c4a42' },
  floatValue: { fontSize: 18, fontWeight: '700' },
  stepsGrid: { flexDirection: 'column', gap: 24 },
  stepCard: { backgroundColor: '#f3f4f5', padding: 40, borderRadius: 16, borderWidth: 1, borderColor: 'rgba(187, 202, 191, 0.2)' },
  stepIconWrapper: { width: 56, height: 56, borderRadius: 28, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', marginBottom: 24, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 2 },
  stepTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d', marginBottom: 12 },
  stepDesc: { fontSize: 16, color: '#3c4a42', lineHeight: 24 },
});
