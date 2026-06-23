import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get('window');

const leafIcons = ['eco', 'local-florist', 'nature'];

const Particle = ({ delay }: { delay: number }) => {
  const translateY = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0.2)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0.6,
          duration: 4000,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.2,
          duration: 4000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(translateY, {
          toValue: -40,
          duration: 4000,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 4000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const randomIcon = leafIcons[Math.floor(Math.random() * leafIcons.length)];
  const randomLeft = Math.random() * width;
  const randomTop = Math.random() * height;
  const randomSize = 16 + Math.random() * 32;

  return (
    <Animated.View
      style={[
        styles.particle,
        {
          left: randomLeft,
          top: randomTop,
          opacity: opacity,
          transform: [{ translateY }],
        },
      ]}
    >
      <Icon name={randomIcon} size={randomSize} color="white" />
    </Animated.View>
  );
};

export default function ChonxSplashScreen2({ navigation }: any) {
  const logoScale = useRef(new Animated.Value(0.8)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(logoScale, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <LinearGradient colors={['#006c49', '#10b981', '#4edea3']} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        {/* Particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <Particle key={i} delay={i * 500} />
        ))}

        {/* Badge */}
        <View style={styles.badgeContainer}>
          <Icon name="eco" size={18} color="rgba(255, 255, 255, 0.6)" />
          <Text style={styles.badgeText}>EST. 2024</Text>
        </View>

        {/* Center Content */}
        <View style={styles.centerContent}>
          <Animated.View
            style={{
              opacity: logoOpacity,
              transform: [{ scale: logoScale }],
              alignItems: 'center',
            }}
          >
            <Text style={styles.logoText}>ChonX</Text>
          </Animated.View>

          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitleText}>SUSTAINABILITY. GAMIFIED.</Text>
            <View style={styles.underline} />
          </View>
        </View>

        {/* Footer Action */}
        <View style={styles.footerContainer}>
          <TouchableOpacity
            style={styles.glassButton}
            onPress={() => navigation.navigate('IntroCarouselScreen')}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  particle: {
    position: 'absolute',
  },
  badgeContainer: {
    position: 'absolute',
    top: 24,
    right: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  badgeText: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1,
    marginLeft: 4,
  },
  centerContent: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  logoText: {
    fontSize: 48,
    fontWeight: '800',
    color: '#ffffff',
    letterSpacing: -1.5,
    marginBottom: 40,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 10,
  },
  subtitleContainer: {
    alignItems: 'center',
  },
  subtitleText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 0.90)',
    letterSpacing: 0.5,
  },
  underline: {
    height: 4,
    width: 48,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 2,
    marginTop: 12,
  },
  footerContainer: {
    position: 'absolute',
    bottom: 64,
    width: '100%',
    paddingHorizontal: 24,
  },
  glassButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 16,
    paddingVertical: 24,
    alignItems: 'center',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    shadowRadius: 32,
    elevation: 3,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '600',
  },
});
