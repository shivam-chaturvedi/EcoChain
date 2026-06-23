import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Animated,
  Dimensions,
  Easing,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');

export default function LogActivitySuccessCelebrationScreen({ navigation }: any) {
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const xpBarWidth = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Pulse animation for check circle
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

    // XP Bar animation
    Animated.timing(xpBarWidth, {
      toValue: 84, // 84%
      duration: 1500,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();
  }, [pulseAnim, xpBarWidth]);

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Background Decor */}
      <View style={styles.bgDecor} />

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
          <Text style={styles.title}>Activity Logged!</Text>
          <Text style={styles.subtitle}>Great job taking sustainable action</Text>
        </View>

        {/* Reward Cards */}
        <View style={styles.rewardsSection}>
          <View style={styles.rewardCard}>
            <View style={styles.rewardCardContent}>
              <View style={styles.rewardIconBg1}>
                <Icon name="military-tech" size={24} color="#004395" />
              </View>
              <View style={styles.rewardTextCol}>
                <Text style={styles.rewardLabel}>EXPERIENCE</Text>
                <Text style={styles.rewardValue}>+20 XP Earned!</Text>
              </View>
            </View>
          </View>

          <View style={styles.rewardCard}>
            <View style={styles.rewardCardContent}>
              <View style={styles.rewardIconBg2}>
                <Icon name="co2" size={24} color="#00201c" />
              </View>
              <View style={styles.rewardTextCol}>
                <Text style={styles.rewardLabel}>ENVIRONMENTAL IMPACT</Text>
                <Text style={styles.rewardValue}>+0.12 kg CO2 Saved</Text>
              </View>
            </View>
          </View>

          {/* XP Progress */}
          <View style={styles.xpCard}>
            <View style={styles.xpHeader}>
              <View>
                <Text style={styles.xpLabel}>LEVEL 14</Text>
                <Text style={styles.xpTitle}>Forest Guardian</Text>
              </View>
              <Text style={styles.xpPoints}>840 / 1000 XP</Text>
            </View>
            <View style={styles.xpTrack}>
              <Animated.View style={[
                styles.xpFill,
                { width: xpBarWidth.interpolate({
                  inputRange: [0, 100],
                  outputRange: ['0%', '100%']
                }) }
              ]}>
                <LinearGradient
                  colors={['#6ffbbe', '#10b981']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={StyleSheet.absoluteFill}
                />
              </Animated.View>
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

          <TouchableOpacity style={styles.secondaryBtn} onPress={() => navigation.navigate('LogActivityFormEntry')}>
            <Text style={styles.secondaryBtnText}>Log Another Activity</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  bgDecor: {
    position: 'absolute',
    top: '-10%',
    left: '-20%',
    width: '150%',
    height: '150%',
    backgroundColor: 'rgba(111,251,190,0.05)',
    borderRadius: 1000,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    zIndex: 10,
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
    marginBottom: 40,
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
  rewardsSection: {
    width: '100%',
    maxWidth: 384,
    marginBottom: 40,
  },
  rewardCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(108, 122, 113, 0.3)',
    marginBottom: 16,
  },
  rewardCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rewardIconBg1: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#d8e2ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  rewardIconBg2: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#71f8e4',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  rewardTextCol: { flex: 1 },
  rewardLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#3c4a42',
    letterSpacing: 0.6,
  },
  rewardValue: {
    fontSize: 28,
    fontWeight: '700',
    color: '#006c49',
    marginTop: 2,
  },
  xpCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(108, 122, 113, 0.3)',
  },
  xpHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 12,
  },
  xpLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#3c4a42',
    letterSpacing: 0.6,
    marginBottom: 4,
  },
  xpTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#191c1d',
  },
  xpPoints: {
    fontSize: 12,
    fontWeight: '700',
    color: '#006c49',
  },
  xpTrack: {
    height: 16,
    backgroundColor: '#e7e8e9',
    borderRadius: 8,
    overflow: 'hidden',
  },
  xpFill: {
    height: '100%',
    borderRadius: 8,
    overflow: 'hidden',
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
