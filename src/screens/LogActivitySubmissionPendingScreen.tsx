import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Animated,
  Easing,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

export default function LogActivitySubmissionPendingScreen({ navigation }: any) {
  const pulseAnim = new Animated.Value(1);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.05,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [pulseAnim]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        
        {/* Success Icon */}
        <View style={styles.iconSection}>
          <Animated.View style={[styles.iconWrapper, { transform: [{ scale: pulseAnim }] }]}>
            <Icon name="check" size={60} color="#00422b" />
          </Animated.View>
          <Icon name="eco" size={30} color="rgba(0, 108, 73, 0.4)" style={styles.leaf1} />
          <Icon name="eco" size={24} color="rgba(0, 108, 73, 0.3)" style={styles.leaf2} />
          <Icon name="eco" size={40} color="rgba(0, 108, 73, 0.2)" style={styles.leaf3} />
        </View>

        {/* Text */}
        <View style={styles.textSection}>
          <Text style={styles.title}>Activity Submitted!</Text>
          <Text style={styles.subtitle}>Your entry has been sent for teacher approval.</Text>
        </View>

        {/* Cards */}
        <View style={styles.cardsSection}>
          <View style={styles.statusCard}>
            <View style={styles.statusRow}>
              <View style={styles.statusDot} />
              <Text style={styles.statusText}>Status: Pending Approval</Text>
            </View>
            <TouchableOpacity>
              <Icon name="info" size={20} color="#6c7a71" />
            </TouchableOpacity>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>WHAT HAPPENS NEXT</Text>
            
            <View style={styles.infoList}>
              <View style={styles.infoItem}>
                <Icon name="fiber-manual-record" size={12} color="#006c49" style={styles.infoBullet} />
                <Text style={styles.infoItemText}>A teacher will review your activity shortly.</Text>
              </View>
              <View style={styles.infoItem}>
                <Icon name="fiber-manual-record" size={12} color="#006c49" style={styles.infoBullet} />
                <Text style={styles.infoItemText}>You'll be notified when it's approved.</Text>
              </View>
              <View style={styles.infoItem}>
                <Icon name="fiber-manual-record" size={12} color="#006c49" style={styles.infoBullet} />
                <Text style={styles.infoItemText}>You'll earn points and carbon savings once approved.</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Actions */}
        <View style={styles.actionsSection}>
          <TouchableOpacity style={styles.primaryBtn} onPress={() => navigation.navigate('Home')}>
            <LinearGradient
              colors={['#006c49', '#006b5f']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.primaryBtnGradient}
            >
              <Text style={styles.primaryBtnText}>Back to Dashboard</Text>
              <Icon name="arrow-forward" size={24} color="#ffffff" style={styles.btnIcon} />
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryBtn} onPress={() => navigation.goBack()}>
            <Text style={styles.secondaryBtnText}>Log Another Activity</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  iconSection: {
    position: 'relative',
    marginBottom: 40,
  },
  iconWrapper: {
    width: 128,
    height: 128,
    borderRadius: 64,
    backgroundColor: '#10b981',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#10b981',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 10,
  },
  leaf1: { position: 'absolute', top: -16, right: -16, transform: [{ rotate: '12deg' }] },
  leaf2: { position: 'absolute', top: 48, left: -32, transform: [{ rotate: '-45deg' }] },
  leaf3: { position: 'absolute', bottom: -8, right: -32, transform: [{ rotate: '45deg' }] },
  textSection: {
    alignItems: 'center',
    marginBottom: 64,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#006c49',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#3c4a42',
    textAlign: 'center',
    maxWidth: 280,
  },
  cardsSection: {
    width: '100%',
    maxWidth: 384,
    marginBottom: 64,
  },
  statusCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 16,
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'rgba(108, 122, 113, 0.3)',
    marginBottom: 16,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#facc15',
    marginRight: 8,
    shadowColor: '#facc15',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 4,
  },
  statusText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#191c1d',
  },
  infoCard: {
    backgroundColor: '#f3f4f5',
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(108, 122, 113, 0.2)',
  },
  infoTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#3c4a42',
    letterSpacing: 0.6,
    marginBottom: 12,
  },
  infoList: { gap: 12 },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  infoBullet: { marginTop: 4, marginRight: 12 },
  infoItemText: {
    fontSize: 16,
    color: '#3c4a42',
    flex: 1,
  },
  actionsSection: {
    width: '100%',
    maxWidth: 384,
    gap: 12,
  },
  primaryBtn: {
    width: '100%',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#006c49',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  primaryBtnGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
  },
  primaryBtnText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
  },
  btnIcon: { marginLeft: 8 },
  secondaryBtn: {
    width: '100%',
    height: 56,
    borderRadius: 16,
    backgroundColor: '#edeeef',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(108, 122, 113, 0.2)',
  },
  secondaryBtnText: {
    color: '#3c4a42',
    fontSize: 16,
    fontWeight: '600',
  },
});
