import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import { Colors } from '../../../constants';

const { width } = Dimensions.get('window');

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'TeacherLanding'>;
};

const FEATURES = [
  {
    icon: '🎓',
    title: 'Intuitive Class Management',
    desc: 'Seamlessly organize your students into teams, assign eco-challenges, and monitor participation with high-fidelity analytics.',
    extra: 'avatars' as const,
  },
  {
    icon: '📊',
    title: 'Live Progress',
    desc: "Real-time telemetry of your school's environmental impact metrics, from energy saved to plastic reduced.",
    extra: 'progress' as const,
  },
  {
    icon: '⚡',
    title: 'Campaign Engine',
    desc: 'Launch district-wide sustainability competitions with curated mission templates designed by climate experts.',
    extra: 'template' as const,
  },
  {
    icon: '💡',
    title: 'Luminous Insights',
    desc: 'Our engine analyzes student engagement patterns to suggest the best times and topics for your next environmental lesson.',
    extra: null,
  },
];

const STATS = [
  { value: '1.2M+', label: 'PLASTIC\nBOTTLES\nSAVED' },
  { value: '280k', label: 'STUDENTS\nENGAGED' },
  { value: '15k', label: 'SCHOOL\nCAMPAIGNS' },
  { value: '94%', label: 'TEACHER\nRETENTION' },
];

const AVATAR_COLORS = ['#FF8C69', '#6DB6FF', '#8BC34A'];

export default function TeacherLandingScreen({ navigation }: Props) {
  const goToSetup = () => navigation.navigate('TeacherPersonalInfo');

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* ── Header ── */}
        <View style={styles.header}>
          <Text style={styles.brand}>ChonX</Text>
          <View style={styles.modeBadge}>
            <Text style={styles.modeBadgeText}>TEACHER EMPOWERMENT MODE</Text>
          </View>
        </View>

        {/* ── Hero ── */}
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>
            {'Empower your\nstudents for a\n'}
            <Text style={styles.heroAccent}>greener future.</Text>
          </Text>
          <Text style={styles.heroSub}>
            Manage your classes, track environmental progress, and lead
            sustainability campaigns with ChonX's integrated educator dashboard.
          </Text>
          <TouchableOpacity style={styles.startBtn} onPress={goToSetup} activeOpacity={0.85}>
            <Text style={styles.startBtnText}>Get Started  →</Text>
          </TouchableOpacity>
        </View>

        {/* ── Dashboard Preview Card ── */}
        <View style={styles.previewWrap}>
          <View style={styles.previewCard}>
            {/* Left dark panel */}
            <View style={styles.previewLeft}>
              <View style={styles.previewCircleA} />
              <View style={styles.previewCircleB} />
              <View style={styles.previewCircleC} />
            </View>
            {/* Right stats panel */}
            <View style={styles.previewRight}>
              <View style={styles.classImpactBadge}>
                <Text style={styles.classImpactText}>CLASS IMPACT</Text>
              </View>
              <Text style={styles.previewStat}>+24% This Month</Text>
              <View style={styles.barsRow}>
                {[0.45, 0.62, 0.5, 0.78, 0.68, 0.9, 1.0].map((h, i) => (
                  <View
                    key={i}
                    style={[styles.bar, { height: Math.round(h * 40) }]}
                  />
                ))}
              </View>
            </View>
          </View>
        </View>

        {/* ── Tools Heading ── */}
        <View style={styles.toolsSection}>
          <Text style={styles.toolsTitle}>{'Precision-engineered\ntools for leaders.'}</Text>
          <Text style={styles.toolsSub}>Built for efficiency, designed for impact.</Text>
        </View>

        {/* ── Feature Cards ── */}
        <View style={styles.featureList}>
          {FEATURES.map((feat, idx) => (
            <View key={idx} style={styles.featureCard}>
              <View style={styles.featureIconCircle}>
                <Text style={styles.featureIconText}>{feat.icon}</Text>
              </View>
              <Text style={styles.featureTitle}>{feat.title}</Text>
              <Text style={styles.featureDesc}>{feat.desc}</Text>

              {feat.extra === 'avatars' && (
                <View style={styles.avatarRow}>
                  {AVATAR_COLORS.map((c, j) => (
                    <View
                      key={j}
                      style={[
                        styles.miniAvatar,
                        { backgroundColor: c, marginLeft: j === 0 ? 0 : -8 },
                      ]}>
                      <Text style={styles.miniAvatarEmoji}>👤</Text>
                    </View>
                  ))}
                  <View style={styles.avatarMoreBadge}>
                    <Text style={styles.avatarMoreText}>+28</Text>
                  </View>
                </View>
              )}

              {feat.extra === 'progress' && (
                <View style={styles.progressBlock}>
                  <View style={styles.progressLabelRow}>
                    <Text style={styles.progressLabel}>CO2 REDUCTION</Text>
                    <Text style={styles.progressGoal}>75% GOAL</Text>
                  </View>
                  <View style={styles.progressTrack}>
                    <View style={styles.progressFill} />
                  </View>
                </View>
              )}

              {feat.extra === 'template' && (
                <View style={styles.templateChip}>
                  <Text style={styles.templateChipText}>Zero-Waste Week Template</Text>
                </View>
              )}
            </View>
          ))}
        </View>

        {/* ── Network Stats ── */}
        <View style={styles.networkSection}>
          <Text style={styles.networkLabel}>THE CHONX NETWORK</Text>
          <Text style={styles.networkTitle}>
            {'Join 4,500+\neducators\nleading the\nshift.'}
          </Text>
          <View style={styles.statsGrid}>
            {STATS.map((s, i) => (
              <View key={i} style={styles.statCell}>
                <Text style={styles.statValue}>{s.value}</Text>
                <Text style={styles.statLabel}>{s.label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* ── CTA Section ── */}
        <View style={styles.ctaSection}>
          <Text style={styles.ctaTitle}>Ready to transform your classroom?</Text>
          <Text style={styles.ctaSub}>
            Starting your sustainability journey takes less than two minutes.
            Create your school profile today.
          </Text>
          <TouchableOpacity style={styles.createBtn} onPress={goToSetup} activeOpacity={0.85}>
            <Text style={styles.createBtnText}>Create Teacher Account</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  // Header
  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
    alignItems: 'flex-start',
    gap: 10,
  },
  brand: {
    fontSize: 22,
    fontWeight: '800',
    color: Colors.primaryDark,
    letterSpacing: -0.3,
  },
  modeBadge: {
    backgroundColor: Colors.primaryLight,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  modeBadgeText: {
    fontSize: 10,
    fontWeight: '700',
    color: Colors.white,
    letterSpacing: 0.8,
  },

  // Hero
  hero: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 24,
  },
  heroTitle: {
    fontSize: 34,
    fontWeight: '800',
    color: Colors.text,
    lineHeight: 42,
    marginBottom: 14,
    letterSpacing: -0.5,
  },
  heroAccent: {
    color: Colors.primaryLight,
    fontStyle: 'italic',
  },
  heroSub: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 22,
    marginBottom: 22,
  },
  startBtn: {
    alignSelf: 'flex-start',
    backgroundColor: Colors.primaryDark,
    paddingHorizontal: 28,
    paddingVertical: 14,
    borderRadius: 30,
    shadowColor: Colors.primaryDark,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.28,
    shadowRadius: 8,
    elevation: 5,
  },
  startBtnText: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.white,
    letterSpacing: 0.2,
  },

  // Preview Card
  previewWrap: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  previewCard: {
    height: 160,
    borderRadius: 20,
    overflow: 'hidden',
    flexDirection: 'row',
    backgroundColor: '#163D27',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 16,
    elevation: 8,
  },
  previewLeft: {
    flex: 1,
    backgroundColor: '#163D27',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  previewCircleA: {
    position: 'absolute',
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: 'rgba(82,183,136,0.15)',
    top: -20,
    left: -20,
  },
  previewCircleB: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(82,183,136,0.2)',
    bottom: -10,
    right: 10,
  },
  previewCircleC: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(82,183,136,0.25)',
  },
  previewRight: {
    flex: 1.2,
    backgroundColor: 'rgba(45,106,79,0.85)',
    padding: 16,
    justifyContent: 'center',
  },
  classImpactBadge: {
    alignSelf: 'flex-start',
    backgroundColor: Colors.primaryLight,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
    marginBottom: 8,
  },
  classImpactText: {
    fontSize: 9,
    fontWeight: '700',
    color: Colors.white,
    letterSpacing: 0.6,
  },
  previewStat: {
    fontSize: 18,
    fontWeight: '800',
    color: Colors.white,
    marginBottom: 12,
  },
  barsRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 4,
    height: 44,
  },
  bar: {
    width: 10,
    backgroundColor: 'rgba(148,213,178,0.7)',
    borderRadius: 3,
  },

  // Tools Heading
  toolsSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  toolsTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: Colors.text,
    lineHeight: 36,
    marginBottom: 6,
    letterSpacing: -0.4,
  },
  toolsSub: {
    fontSize: 13,
    color: Colors.textSecondary,
  },

  // Feature Cards
  featureList: {
    paddingHorizontal: 20,
    gap: 12,
    marginBottom: 32,
  },
  featureCard: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: Colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  featureIconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#D6F5E8',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  featureIconText: {
    fontSize: 20,
  },
  featureTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 6,
  },
  featureDesc: {
    fontSize: 13,
    color: Colors.textSecondary,
    lineHeight: 20,
  },

  // Avatars extra
  avatarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  miniAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Colors.white,
  },
  miniAvatarEmoji: {
    fontSize: 12,
  },
  avatarMoreBadge: {
    marginLeft: 6,
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 10,
  },
  avatarMoreText: {
    fontSize: 11,
    fontWeight: '600',
    color: Colors.textSecondary,
  },

  // Progress extra
  progressBlock: {
    marginTop: 12,
  },
  progressLabelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  progressLabel: {
    fontSize: 10,
    fontWeight: '600',
    color: Colors.textSecondary,
    letterSpacing: 0.5,
  },
  progressGoal: {
    fontSize: 10,
    fontWeight: '700',
    color: Colors.primaryDark,
    letterSpacing: 0.5,
  },
  progressTrack: {
    height: 6,
    backgroundColor: '#E5F4EC',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    width: '75%',
    height: '100%',
    backgroundColor: Colors.primaryDark,
    borderRadius: 3,
  },

  // Template chip extra
  templateChip: {
    alignSelf: 'flex-start',
    marginTop: 12,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  templateChipText: {
    fontSize: 12,
    color: Colors.textSecondary,
  },

  // Network
  networkSection: {
    backgroundColor: '#1A3D2E',
    paddingHorizontal: 24,
    paddingVertical: 32,
    marginBottom: 0,
  },
  networkLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: Colors.primaryLight,
    letterSpacing: 1.2,
    marginBottom: 16,
  },
  networkTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: Colors.white,
    lineHeight: 40,
    marginBottom: 28,
    letterSpacing: -0.4,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 0,
  },
  statCell: {
    width: (width - 48) / 2,
    marginBottom: 20,
  },
  statValue: {
    fontSize: 26,
    fontWeight: '800',
    color: Colors.white,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 10,
    fontWeight: '600',
    color: 'rgba(255,255,255,0.6)',
    letterSpacing: 0.6,
    lineHeight: 15,
  },

  // CTA
  ctaSection: {
    paddingHorizontal: 20,
    paddingVertical: 36,
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: Colors.text,
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 32,
    letterSpacing: -0.3,
  },
  ctaSub: {
    fontSize: 13,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 24,
  },
  createBtn: {
    backgroundColor: Colors.primaryDark,
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 30,
    shadowColor: Colors.primaryDark,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.28,
    shadowRadius: 8,
    elevation: 5,
  },
  createBtnText: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.white,
    letterSpacing: 0.2,
  },
});
