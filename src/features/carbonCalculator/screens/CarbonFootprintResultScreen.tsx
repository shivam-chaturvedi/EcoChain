import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import { Colors } from '../../../constants';

const { width: SCREEN_W } = Dimensions.get('window');

// ─── Circular Gauge ───────────────────────────────────────────────────────────
const GAUGE_SIZE = Math.min(SCREEN_W * 0.58, 220);
const G_CENTER   = GAUGE_SIZE / 2;
const G_RADIUS   = GAUGE_SIZE * 0.41;
const TICK_W     = 4;
const TICK_H     = Math.round(GAUGE_SIZE * 0.064);
const N_TICKS    = 32;

function CircularGauge({
  value,
  unit,
  fillPercent,
  badge,
}: {
  value: string;
  unit: string;
  fillPercent: number;
  badge: string;
}) {
  const filledCount = Math.round(N_TICKS * fillPercent);

  return (
    <View style={{ width: GAUGE_SIZE, height: GAUGE_SIZE }}>
      {/* tick marks */}
      {Array.from({ length: N_TICKS }, (_, i) => {
        const angleDeg = (i / N_TICKS) * 360 - 90;
        const rad      = (angleDeg * Math.PI) / 180;
        const cx       = G_CENTER + Math.cos(rad) * G_RADIUS;
        const cy       = G_CENTER + Math.sin(rad) * G_RADIUS;
        const filled   = i < filledCount;
        return (
          <View
            key={i}
            style={{
              position:        'absolute',
              width:           TICK_W,
              height:          TICK_H,
              borderRadius:    2,
              backgroundColor: filled ? Colors.primaryDark : '#E0E4E0',
              left:            cx - TICK_W / 2,
              top:             cy - TICK_H / 2,
              transform:       [{ rotate: `${angleDeg + 90}deg` }],
            }}
          />
        );
      })}

      {/* centre content */}
      <View style={[StyleSheet.absoluteFill, styles.gaugeCentre]}>
        <Text style={styles.gaugeLabel}>DAILY AVERAGE</Text>
        <View style={styles.gaugeValueRow}>
          <Text style={styles.gaugeNumber}>{value}</Text>
          <Text style={styles.gaugeUnit}>{unit}</Text>
        </View>
        <View style={styles.gaugeBadge}>
          <Text style={styles.gaugeBadgeText}>{badge}</Text>
        </View>
      </View>
    </View>
  );
}

// ─── Stat Card ────────────────────────────────────────────────────────────────
function StatCard({
  circleColor,
  label,
  value,
  barColor,
  barPercent,
  description,
}: {
  circleColor: string;
  label: string;
  value: string;
  barColor: string;
  barPercent: number;
  description: string;
}) {
  return (
    <View style={styles.statWrapper}>
      {/* floating circle */}
      <View style={styles.statCircleRow} pointerEvents="none">
        <View style={[styles.statCircle, { backgroundColor: circleColor }]} />
      </View>

      <View style={styles.statCard}>
        <Text style={styles.statLabel}>{label}</Text>
        <Text style={styles.statValue}>{value}</Text>
        <View style={styles.statTrack}>
          <View
            style={[
              styles.statFill,
              { width: `${barPercent}%`, backgroundColor: barColor },
            ]}
          />
        </View>
        <Text style={styles.statDesc}>{description}</Text>
      </View>
    </View>
  );
}

// ─── Screen ──────────────────────────────────────────────────────────────────
type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'CarbonFootprintResult'>;
};

export default function CarbonFootprintResultScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <StatusBar barStyle="dark-content" backgroundColor={styles.safeArea.backgroundColor} />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.avatarWrapper}>
            <View style={styles.avatarCircle}>
              <Text style={styles.avatarEmoji}>🌻</Text>
            </View>
            <View style={styles.avatarLevelBadge}>
              <Text style={styles.avatarLevelText}>LVL 4</Text>
            </View>
          </View>
          <Text style={styles.brandName}>EcoSystem</Text>
        </View>

        <View style={styles.xpBadge}>
          <View style={styles.xpIconCircle}>
            <Text style={styles.xpIconEmoji}>🌿</Text>
          </View>
          <Text style={styles.xpText}>1,250 XP</Text>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}>

        {/* Title */}
        <Text style={styles.title}>Your Carbon{'\n'}Footprint</Text>
        <Text style={styles.subtitle}>
          We've calculated your impact based on your lifestyle choices. You're
          doing better than{' '}
          <Text style={styles.subtitleHighlight}>68% of users</Text> in your
          area!
        </Text>

        {/* Circular gauge */}
        <View style={styles.gaugeRow}>
          <CircularGauge
            value="4.7"
            unit="kg"
            fillPercent={0.75}
            badge="↗  12% lower than avg."
          />
        </View>

        {/* Stat cards */}
        <StatCard
          circleColor="#C8EDDA"
          label="Monthly Impact"
          value="141 kg"
          barColor="#22C55E"
          barPercent={78}
          description="Tracking well against monthly goal"
        />
        <StatCard
          circleColor="#DDE4FF"
          label="Yearly Projection"
          value="1.7 Tons"
          barColor="#6366F1"
          barPercent={62}
          description="On track for 'Eco-Champion' status"
        />
        <StatCard
          circleColor="#DDEEFF"
          label="Impact Equivalent"
          value="4,200 Liters"
          barColor="#6366F1"
          barPercent={82}
          description="Equal to saving 4,200L of water"
        />

        {/* Top Performance card */}
        <View style={styles.performanceCard}>
          <Text style={styles.perfTitle}>Top Performance!</Text>
          <Text style={styles.perfDesc}>
            Your low-carbon diet is offsetting the equivalent of planting 12
            trees this year alone. Keep it up!
          </Text>
          <TouchableOpacity
            style={styles.onboardingBtn}
            activeOpacity={0.85}>
            <Text style={styles.onboardingBtnText}>
              Complete{'\n'}Onboarding
            </Text>
          </TouchableOpacity>
        </View>

        {/* Action cards */}
        <View style={styles.actionCard}>
          <View style={[styles.actionIconCircle, { backgroundColor: '#E8F5EE' }]}>
            <Text style={styles.actionIcon}>🌿</Text>
          </View>
          <View style={styles.actionText}>
            <Text style={styles.actionTitle}>Green Start Badge</Text>
            <Text style={styles.actionDesc}>
              You've unlocked the foundational sustainability badge.
            </Text>
          </View>
        </View>

        <View style={[styles.actionCard, styles.actionCardBlue]}>
          <View style={[styles.actionIconCircle, { backgroundColor: '#E8EEFF' }]}>
            <Text style={styles.actionIcon}>📤</Text>
          </View>
          <View style={styles.actionText}>
            <Text style={styles.actionTitle}>Spread the Word</Text>
            <Text style={styles.actionDesc}>
              Users who share their results save 5% more carbon.
            </Text>
          </View>
        </View>

        <View style={{ height: 32 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

// ─── Styles ──────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F2F6F3',
  },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  avatarWrapper: {
    position: 'relative',
    width: 40,
    height: 40,
  },
  avatarCircle: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: '#D8EFE2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarEmoji: {
    fontSize: 20,
  },
  avatarLevelBadge: {
    position: 'absolute',
    bottom: -4,
    right: -6,
    backgroundColor: Colors.primaryDark,
    borderRadius: 6,
    paddingHorizontal: 3,
    paddingVertical: 1,
    borderWidth: 1.5,
    borderColor: Colors.white,
  },
  avatarLevelText: {
    fontSize: 7,
    fontWeight: '800',
    color: Colors.white,
    letterSpacing: 0.2,
  },
  brandName: {
    fontSize: 17,
    fontWeight: '700',
    color: Colors.text,
  },

  // XP badge (gray style)
  xpBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    paddingLeft: 4,
    paddingRight: 10,
    paddingVertical: 5,
    borderRadius: 20,
    gap: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  xpIconCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#22C55E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  xpIconEmoji: {
    fontSize: 12,
  },
  xpText: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.text,
  },

  // Scroll
  scroll: {
    paddingHorizontal: 16,
    paddingTop: 24,
  },

  // Title
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: Colors.text,
    lineHeight: 40,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 28,
  },
  subtitleHighlight: {
    fontWeight: '700',
    color: Colors.text,
  },

  // Gauge row
  gaugeRow: {
    alignItems: 'center',
    marginBottom: 28,
  },

  // Gauge styles
  gaugeCentre: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  gaugeLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: Colors.textSecondary,
    letterSpacing: 1.2,
    marginBottom: 2,
  },
  gaugeValueRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  gaugeNumber: {
    fontSize: 52,
    fontWeight: '800',
    color: Colors.text,
    lineHeight: 58,
  },
  gaugeUnit: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.textSecondary,
    marginTop: 14,
    marginLeft: 3,
  },
  gaugeBadge: {
    backgroundColor: '#E8F5EE',
    borderRadius: 12,
    paddingHorizontal: 9,
    paddingVertical: 4,
    marginTop: 4,
  },
  gaugeBadgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: Colors.primary,
  },

  // Stat cards
  statWrapper: {
    position: 'relative',
    marginBottom: 14,
    marginTop: 6,
  },
  statCircleRow: {
    position: 'absolute',
    top: -16,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 2,
  },
  statCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  statCard: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    paddingTop: 28,
    paddingHorizontal: 16,
    paddingBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginBottom: 4,
  },
  statValue: {
    fontSize: 26,
    fontWeight: '800',
    color: Colors.text,
    marginBottom: 10,
  },
  statTrack: {
    width: '100%',
    height: 5,
    backgroundColor: '#E5E7EB',
    borderRadius: 3,
    marginBottom: 10,
    overflow: 'hidden',
  },
  statFill: {
    height: '100%',
    borderRadius: 3,
  },
  statDesc: {
    fontSize: 12,
    color: Colors.textSecondary,
    fontStyle: 'italic',
    textAlign: 'center',
  },

  // Top Performance card
  performanceCard: {
    backgroundColor: Colors.primaryDark,
    borderRadius: 18,
    padding: 18,
    marginBottom: 14,
    marginTop: 6,
    alignItems: 'center',
  },
  perfTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: Colors.white,
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  perfDesc: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.88)',
    lineHeight: 20,
    marginBottom: 16,
    alignSelf: 'flex-start',
  },
  onboardingBtn: {
    width: '100%',
    backgroundColor: Colors.white,
    borderRadius: 28,
    paddingVertical: 12,
    alignItems: 'center',
  },
  onboardingBtnText: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.primaryDark,
    textAlign: 'center',
    lineHeight: 20,
  },

  // Action cards
  actionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1.5,
    borderColor: Colors.border,
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  actionCardBlue: {
    borderColor: '#C7D2FE',
  },
  actionIconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  actionIcon: {
    fontSize: 20,
  },
  actionText: {
    flex: 1,
  },
  actionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 3,
  },
  actionDesc: {
    fontSize: 12,
    color: Colors.textSecondary,
    lineHeight: 18,
  },
});
