import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import { Colors } from '../../../constants';

const { width, height } = Dimensions.get('window');

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'TeacherFeatureTour'>;
};

const STEPS = [
  {
    id: 0,
    tooltip: {
      icon: '📊',
      title: 'View Class Analytics',
      desc: 'Track real-time progress and eco-impact metrics for your entire classroom at a glance.',
    },
    card: {
      title: 'Approve Activities',
      desc: 'Your students have submitted new green deeds! Review and validate their ecological impact',
    },
    overlay: {
      icon: '📢',
      title: 'Manage Campaigns',
      desc: 'Launch new school-wide challenges and set collective sustainability goals here.',
    },
  },
  {
    id: 1,
    tooltip: {
      icon: '🏆',
      title: 'View Leaderboard',
      desc: 'See which classes are leading the sustainability race and motivate students to do more.',
    },
    card: {
      title: 'Create Challenges',
      desc: 'Design custom eco-challenges for your classes and track completion in real-time.',
    },
    overlay: {
      icon: '📣',
      title: 'Send Announcements',
      desc: 'Broadcast important messages to all your students instantly from the dashboard.',
    },
  },
];

export default function TeacherFeatureTourScreen({ navigation }: Props) {
  const [step, setStep] = useState(0);
  const current = STEPS[step];

  const handleNext = () => {
    if (step < STEPS.length - 1) {
      setStep(s => s + 1);
    } else {
      navigation.navigate('TeacherDashboard');
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#0D1F14" />

      {/* ── Dark Background Panel ── */}
      <View style={styles.darkPanel}>
        {/* Decorative background circles */}
        <View style={styles.bgCircle1} />
        <View style={styles.bgCircle2} />

        {/* Green Tooltip Card */}
        <View style={styles.tooltipCard}>
          <View style={styles.tooltipIconRow}>
            <Text style={styles.tooltipIcon}>{current.tooltip.icon}</Text>
            <Text style={styles.tooltipTitle}>{current.tooltip.title}</Text>
          </View>
          <Text style={styles.tooltipDesc}>{current.tooltip.desc}</Text>
        </View>

        {/* Step Indicators */}
        <View style={styles.stepRow}>
          {STEPS.map((s, i) => (
            <View
              key={s.id}
              style={[
                styles.stepDot,
                i === step ? styles.stepDotActive : styles.stepDotInactive,
              ]}>
              <Text style={[styles.stepDotText, i === step ? styles.stepDotTextActive : styles.stepDotTextInactive]}>
                {i === step ? '✓' : '!'}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* ── Light Bottom Panel ── */}
      <View style={styles.lightPanel}>
        {/* Approve Activities Card */}
        <View style={styles.featureCard}>
          <Text style={styles.featureTitle}>{current.card.title}</Text>
          <Text style={styles.featureDesc}>{current.card.desc}</Text>

          {/* Manage Campaigns Overlay Card */}
          <View style={styles.overlayCard}>
            <View style={styles.overlayLeft}>
              <Text style={styles.overlayIcon}>{current.overlay.icon}</Text>
              <View style={styles.overlayTextWrap}>
                <Text style={styles.overlayTitle}>{current.overlay.title}</Text>
                <Text style={styles.overlayDesc}>{current.overlay.desc}</Text>
              </View>
            </View>
            <Text style={styles.readyText}>READY TO START?</Text>
          </View>
        </View>

        {/* Let's Go Button */}
        <TouchableOpacity style={styles.goBtn} onPress={handleNext} activeOpacity={0.85}>
          <Text style={styles.goBtnText}>
            {step < STEPS.length - 1 ? 'Next  →' : "Let's Go!  →"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* ── Faint Bottom Nav Mockup ── */}
      <View style={styles.fakeNav}>
        {['🏠', '📋', '⚡', '👤'].map((icon, i) => (
          <View key={i} style={styles.fakeNavItem}>
            <Text style={styles.fakeNavIcon}>{icon}</Text>
          </View>
        ))}
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#0D1F14',
  },

  // Dark top panel
  darkPanel: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 28,
    justifyContent: 'flex-end',
    position: 'relative',
    overflow: 'hidden',
  },
  bgCircle1: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(45,106,79,0.25)',
    top: -60,
    right: -40,
  },
  bgCircle2: {
    position: 'absolute',
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: 'rgba(82,183,136,0.15)',
    top: 40,
    left: -30,
  },

  // Tooltip card
  tooltipCard: {
    backgroundColor: Colors.primaryLight,
    borderRadius: 18,
    padding: 18,
    marginBottom: 24,
    shadowColor: Colors.primaryDark,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 10,
  },
  tooltipIconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  tooltipIcon: {
    fontSize: 18,
  },
  tooltipTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: Colors.white,
    letterSpacing: -0.2,
  },
  tooltipDesc: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.88)',
    lineHeight: 20,
  },

  // Step dots
  stepRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 14,
  },
  stepDot: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepDotActive: {
    backgroundColor: Colors.white,
    shadowColor: Colors.white,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  stepDotInactive: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.35)',
  },
  stepDotText: {
    fontSize: 15,
    fontWeight: '700',
  },
  stepDotTextActive: {
    color: Colors.primaryDark,
  },
  stepDotTextInactive: {
    color: 'rgba(255,255,255,0.45)',
  },

  // Light bottom panel
  lightPanel: {
    backgroundColor: Colors.surface,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 16,
  },

  // Feature card
  featureCard: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 22,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 12,
    elevation: 3,
    overflow: 'visible',
  },
  featureTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: Colors.text,
    textAlign: 'center',
    marginBottom: 10,
    letterSpacing: -0.3,
  },
  featureDesc: {
    fontSize: 14,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 21,
    marginBottom: 16,
  },

  // Overlay card (blue)
  overlayCard: {
    backgroundColor: '#5B7FE8',
    borderRadius: 16,
    padding: 16,
    gap: 8,
  },
  overlayLeft: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  overlayIcon: {
    fontSize: 18,
    marginTop: 1,
  },
  overlayTextWrap: {
    flex: 1,
  },
  overlayTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.white,
    marginBottom: 4,
  },
  overlayDesc: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.8)',
    lineHeight: 17,
  },
  readyText: {
    fontSize: 11,
    fontWeight: '700',
    color: 'rgba(255,255,255,0.7)',
    letterSpacing: 0.8,
    textAlign: 'right',
  },

  // Let's Go button
  goBtn: {
    height: 54,
    backgroundColor: Colors.primaryDark,
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.primaryDark,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 4,
  },
  goBtnText: {
    fontSize: 17,
    fontWeight: '700',
    color: Colors.white,
    letterSpacing: 0.2,
  },

  // Fake bottom nav
  fakeNav: {
    height: 52,
    flexDirection: 'row',
    backgroundColor: 'rgba(13,31,20,0.92)',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
    opacity: 0.6,
  },
  fakeNavItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fakeNavIcon: {
    fontSize: 18,
    opacity: 0.5,
  },
});
