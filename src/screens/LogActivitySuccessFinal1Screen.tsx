import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Animated,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

export default function LogActivitySuccessFinal1Screen({ navigation }: any) {
  const scaleAnim = useRef(new Animated.Value(0.9)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 5,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, [scaleAnim, opacityAnim]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient
        colors={['#006c49', '#10b981']}
        style={styles.headerBackground}
      >
        <View style={styles.headerContent}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconBtn}>
            <Icon name="arrow-back" size={24} color="#ffffff" />
          </TouchableOpacity>
          <View style={styles.titleContainer}>
            <Text style={styles.headerTitle}>Log Activity</Text>
            <Text style={styles.headerSubtitle}>Add your sustainability action for today</Text>
          </View>
          <TouchableOpacity style={styles.iconBtn}>
            <Icon name="help" size={24} color="#ffffff" />
          </TouchableOpacity>
        </View>
        <Icon name="eco" size={120} color="rgba(255,255,255,0.2)" style={styles.bgLeaf} />
      </LinearGradient>

      <View style={styles.overlayContainer}>
        <Animated.View style={[styles.successCard, { transform: [{ scale: scaleAnim }], opacity: opacityAnim }]}>
          <View style={styles.checkCircle}>
            <Icon name="check" size={48} color="#ffffff" />
          </View>
          <Text style={styles.successTitle}>Great Job!</Text>
          <Text style={styles.successDesc}>Your activity has been logged.</Text>

          <View style={styles.statsGrid}>
            <View style={styles.statBox1}>
              <Text style={styles.statVal}>+20 XP</Text>
              <Text style={styles.statLabel}>SKILL POINTS</Text>
            </View>
            <View style={styles.statBox2}>
              <Text style={styles.statVal}>0.12kg</Text>
              <Text style={styles.statLabel}>CO2 SAVED</Text>
            </View>
          </View>

          <View style={styles.streakBox}>
            <View style={styles.streakIcon}>
              <Icon name="local-fire-department" size={24} color="#006c49" />
            </View>
            <View style={styles.streakTextCol}>
              <Text style={styles.streakTitle}>5 Day Streak!</Text>
              <Text style={styles.streakDesc}>Keep it up, planet-saver!</Text>
            </View>
          </View>

          <View style={styles.actions}>
            <TouchableOpacity style={styles.primaryBtn} onPress={() => navigation.replace('LogActivityFormEntry')}>
              <Text style={styles.primaryBtnText}>Log Another Activity</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryBtn} onPress={() => navigation.navigate('Home')}>
              <Text style={styles.secondaryBtnText}>Back to Dashboard</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  headerBackground: {
    height: 250,
    paddingTop: 48,
    paddingHorizontal: 24,
    position: 'relative',
    overflow: 'hidden',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    zIndex: 10,
  },
  iconBtn: {
    padding: 8,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 20,
  },
  titleContainer: { alignItems: 'center', flex: 1 },
  headerTitle: { fontSize: 32, fontWeight: '700', color: '#fff', marginBottom: 4 },
  headerSubtitle: { fontSize: 16, color: 'rgba(255,255,255,0.9)', textAlign: 'center' },
  bgLeaf: {
    position: 'absolute',
    bottom: -24,
    right: -24,
    transform: [{ rotate: '45deg' }],
  },
  overlayContainer: {
    ...StyleSheet.absoluteFill as any,
    backgroundColor: 'rgba(255,255,255,0.95)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    zIndex: 20,
  },
  successCard: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 32,
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
  },
  checkCircle: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#006c49',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  successTitle: { fontSize: 40, fontWeight: '800', color: '#006c49', marginBottom: 8 },
  successDesc: { fontSize: 18, color: '#3c4a42', marginBottom: 32 },
  statsGrid: { flexDirection: 'row', gap: 16, width: '100%', marginBottom: 32 },
  statBox1: { flex: 1, backgroundColor: '#6ffbbe', padding: 16, borderRadius: 16 },
  statBox2: { flex: 1, backgroundColor: '#71f8e4', padding: 16, borderRadius: 16 },
  statVal: { fontSize: 24, fontWeight: '700', color: '#002113', marginBottom: 4 },
  statLabel: { fontSize: 10, fontWeight: '700', color: '#005236' },
  streakBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f4f5',
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(0,108,73,0.2)',
    width: '100%',
    marginBottom: 32,
  },
  streakIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  streakTextCol: { flex: 1 },
  streakTitle: { fontSize: 16, fontWeight: '700', color: '#191c1d' },
  streakDesc: { fontSize: 12, color: '#3c4a42' },
  actions: { width: '100%', gap: 16 },
  primaryBtn: {
    backgroundColor: '#006c49',
    paddingVertical: 16,
    borderRadius: 32,
    alignItems: 'center',
  },
  primaryBtnText: { color: '#fff', fontSize: 16, fontWeight: '700' },
  secondaryBtn: {
    paddingVertical: 16,
    borderRadius: 32,
    alignItems: 'center',
  },
  secondaryBtnText: { color: '#006c49', fontSize: 16, fontWeight: '700' },
});
