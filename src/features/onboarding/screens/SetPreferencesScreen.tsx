import React, { useState } from 'react';
import {
  View,
  Text,
  Switch,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import { Colors } from '../../../constants';
import CustomSlider from '../../../components/CustomSlider';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SetPreferences'>;
};

const LEVEL_LABELS: Record<number, string> = {
  1: 'Novice', 2: 'Beginner', 3: 'Learner', 4: 'Practitioner',
  5: 'Engaged', 6: 'Dedicated', 7: 'Advanced', 8: 'Expert',
  9: 'Leader', 10: 'Champion',
};

export default function SetPreferencesScreen({ navigation }: Props) {
  const [commitmentLevel, setCommitmentLevel] = useState(7);
  const [dailyTips, setDailyTips] = useState(true);
  const [weeklyChallenges, setWeeklyChallenges] = useState(true);
  const [smartAlerts, setSmartAlerts] = useState(false);

  const levelLabel = commitmentLevel <= 5 ? 'Novice' : 'Champion';
  const isChampion = commitmentLevel >= 6;

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.brandName}>EcoSystem</Text>
        <View style={styles.xpBadge}>
          <View style={styles.levelCircle}>
            <Text style={styles.levelCircleText}>L5</Text>
          </View>
          <Text style={styles.xpText}>1,250 XP</Text>
        </View>
      </View>

      {/* Underline accent */}
      <View style={styles.headerAccent} />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>

        {/* Title */}
        <Text style={styles.title}>Set your Preferences</Text>
        <Text style={styles.subtitle}>
          Tailor your journey to make the biggest impact. You can update these
          anytime in your profile settings.
        </Text>

        {/* ── Card 1: Commitment Level ── */}
        <View style={styles.card}>
          <View style={styles.cardHeaderRow}>
            <View style={[styles.iconCircle, { backgroundColor: '#DFF5EC' }]}>
              <Text style={styles.cardIcon}>📈</Text>
            </View>
            <Text style={styles.cardTitle}>Commitment Level</Text>
          </View>

          <Text style={styles.cardQuestion}>
            How committed are you to improving sustainability this year?
          </Text>

          <CustomSlider
            value={commitmentLevel}
            min={1}
            max={10}
            step={1}
            onValueChange={setCommitmentLevel}
            style={styles.slider}
          />

          <View style={styles.sliderLabels}>
            <Text style={styles.labelLeft}>Novice</Text>
            <Text style={[styles.labelRight, isChampion && styles.labelGreen]}>
              Champion
            </Text>
          </View>

          {/* Level badge circle */}
          <View style={styles.levelBadgeCenter}>
            <View style={styles.levelBadgeCircle}>
              <Text style={styles.levelNumber}>{commitmentLevel}</Text>
              <Text style={styles.levelWordSmall}>LEVEL</Text>
            </View>
          </View>
        </View>

        {/* ── Card 2: Daily eco-tips ── */}
        <View style={styles.card}>
          <View style={styles.toggleCardRow}>
            <View style={[styles.iconCircle, { backgroundColor: '#DFF5EC' }]}>
              <Text style={styles.cardIcon}>💡</Text>
            </View>
            <View style={styles.toggleCardContent}>
              <Text style={styles.toggleCardTitle}>Daily eco-tips</Text>
              <Text style={styles.toggleCardDesc}>
                Micro-habits delivered every morning to reduce your carbon
                footprint.
              </Text>
            </View>
            <Switch
              value={dailyTips}
              onValueChange={setDailyTips}
              trackColor={{ false: '#D1D5DB', true: Colors.primaryDark }}
              thumbColor="#FFFFFF"
              ios_backgroundColor="#D1D5DB"
            />
          </View>
        </View>

        {/* ── Card 3: Weekly challenges ── */}
        <View style={styles.card}>
          <View style={styles.toggleCardRow}>
            <View style={[styles.iconCircle, { backgroundColor: '#E8EEFF' }]}>
              <Text style={styles.cardIcon}>🏆</Text>
            </View>
            <View style={styles.toggleCardContent}>
              <Text style={styles.toggleCardTitle}>Weekly challenges</Text>
              <Text style={styles.toggleCardDesc}>
                Compete with friends in school-wide waste reduction sprints.
              </Text>
            </View>
            <Switch
              value={weeklyChallenges}
              onValueChange={setWeeklyChallenges}
              trackColor={{ false: '#D1D5DB', true: Colors.primaryDark }}
              thumbColor="#FFFFFF"
              ios_backgroundColor="#D1D5DB"
            />
          </View>
        </View>

        {/* ── Card 4: Smart Alerts (green border) ── */}
        <View style={[styles.card, styles.cardFeatured]}>
          <View style={styles.smartAlertsRow}>
            {/* Image placeholder */}
            <View style={styles.smartImageBox}>
              <View style={styles.smartImageInner}>
                <Text style={styles.smartImageEmoji}>📱</Text>
                <View style={styles.smartImageLeaf} />
              </View>
            </View>

            <View style={styles.smartTextArea}>
              <View style={styles.smartTitleRow}>
                <Text style={styles.smartTitle}>Smart{'\n'}Alerts</Text>
                <Switch
                  value={smartAlerts}
                  onValueChange={setSmartAlerts}
                  trackColor={{ false: '#D1D5DB', true: Colors.primaryDark }}
                  thumbColor="#FFFFFF"
                  ios_backgroundColor="#D1D5DB"
                />
              </View>
              <Text style={styles.smartDesc}>
                Receive nudges when you're near local recycling centers or
                eco-stores.
              </Text>
            </View>
          </View>
        </View>

        {/* Save Preferences */}
        <TouchableOpacity
          style={styles.saveBtn}
          activeOpacity={0.85}
          onPress={() => navigation.navigate('StudentHome')}>
          <Text style={styles.saveBtnText}>Save Preferences  ✓</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.skipBtn} activeOpacity={0.7}>
          <Text style={styles.skipText}>Skip for now</Text>
        </TouchableOpacity>

        <View style={{ height: 20 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerAccent: {
    height: 3,
    backgroundColor: Colors.primaryDark,
    marginHorizontal: 0,
  },
  backBtn: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backArrow: {
    fontSize: 22,
    color: Colors.primaryDark,
    fontWeight: '600',
  },
  brandName: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.primaryDark,
  },
  xpBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#22C55E',
    paddingLeft: 3,
    paddingRight: 10,
    paddingVertical: 5,
    borderRadius: 20,
    gap: 6,
  },
  levelCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  levelCircleText: {
    fontSize: 9,
    fontWeight: '800',
    color: Colors.white,
    letterSpacing: 0.2,
  },
  xpText: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.white,
  },

  // Scroll
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 24,
  },

  // Title
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 21,
    marginBottom: 24,
  },

  // Base card
  card: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  cardFeatured: {
    borderColor: Colors.primaryDark,
    borderWidth: 2,
  },

  // Card 1: Commitment Level
  cardHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 12,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardIcon: {
    fontSize: 18,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: Colors.text,
  },
  cardQuestion: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.text,
    lineHeight: 20,
    marginBottom: 16,
  },
  slider: {
    marginBottom: 8,
  },
  sliderLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  labelLeft: {
    fontSize: 12,
    color: Colors.textLight,
    fontWeight: '500',
  },
  labelRight: {
    fontSize: 12,
    color: Colors.textLight,
    fontWeight: '500',
  },
  labelGreen: {
    color: Colors.primary,
    fontWeight: '700',
  },
  levelBadgeCenter: {
    alignItems: 'center',
  },
  levelBadgeCircle: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: Colors.primaryDark,
    alignItems: 'center',
    justifyContent: 'center',
  },
  levelNumber: {
    fontSize: 28,
    fontWeight: '900',
    color: Colors.white,
    lineHeight: 32,
  },
  levelWordSmall: {
    fontSize: 9,
    fontWeight: '700',
    color: 'rgba(255,255,255,0.8)',
    letterSpacing: 1.5,
  },

  // Cards 2 & 3: Toggle cards
  toggleCardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  toggleCardContent: {
    flex: 1,
  },
  toggleCardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 4,
  },
  toggleCardDesc: {
    fontSize: 13,
    color: Colors.textSecondary,
    lineHeight: 19,
  },

  // Card 4: Smart Alerts
  smartAlertsRow: {
    flexDirection: 'row',
    gap: 12,
  },
  smartImageBox: {
    width: 72,
    height: 88,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#1A3D2E',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  smartImageInner: {
    alignItems: 'center',
  },
  smartImageEmoji: {
    fontSize: 28,
  },
  smartImageLeaf: {
    width: 28,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#52B788',
    marginTop: 4,
    opacity: 0.7,
  },
  smartTextArea: {
    flex: 1,
  },
  smartTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  smartTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: Colors.text,
    lineHeight: 22,
    flex: 1,
  },
  smartDesc: {
    fontSize: 13,
    color: Colors.textSecondary,
    lineHeight: 19,
  },

  // Save button
  saveBtn: {
    height: 56,
    backgroundColor: Colors.buttonPrimary,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 14,
    shadowColor: Colors.primaryDark,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  saveBtnText: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.white,
    letterSpacing: 0.3,
  },
  skipBtn: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  skipText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.textSecondary,
  },
});
