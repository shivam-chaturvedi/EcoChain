import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import { Colors } from '../../../constants';

const { width: W, height: H } = Dimensions.get('window');

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ActivitySubmitted'>;
};

// ─── Decorative background shapes ────────────────────────────────────────────
const DECO: Array<{
  top?: number; bottom?: number; left?: number; right?: number;
  w: number; h: number; type: 'leaf' | 'diamond' | 'dot'; rotate: string;
}> = [
  { top: 42,      left: 30,   w: 14, h: 22, type: 'leaf',    rotate: '20deg'  },
  { top: 72,      right: 44,  w: 12, h: 18, type: 'leaf',    rotate: '-15deg' },
  { top: 148,     right: 22,  w: 14, h: 22, type: 'leaf',    rotate: '35deg'  },
  { top: 160,     left: 20,   w: 8,  h: 8,  type: 'dot',     rotate: '0deg'   },
  { top: H * 0.61, left: 16,   w: 14, h: 22, type: 'leaf',    rotate: '10deg'  },
  { top: H * 0.63, left: 78,   w: 6,  h: 6,  type: 'dot',     rotate: '0deg'   },
  { top: H * 0.64, right: 25,  w: 12, h: 18, type: 'leaf',    rotate: '-25deg' },
  { top: H * 0.67, left: 36,   w: 9,  h: 9,  type: 'diamond', rotate: '45deg'  },
  { top: H * 0.69, right: 58,  w: 7,  h: 7,  type: 'dot',     rotate: '0deg'   },
  { top: H * 0.72, left: 108,  w: 10, h: 16, type: 'leaf',    rotate: '15deg'  },
  { top: H * 0.74, right: 14,  w: 15, h: 22, type: 'leaf',    rotate: '30deg'  },
  { top: H * 0.77, left: 50,   w: 8,  h: 8,  type: 'diamond', rotate: '45deg'  },
  { top: H * 0.79, right: 36,  w: 12, h: 18, type: 'leaf',    rotate: '-10deg' },
  { top: H * 0.82, left: 18,   w: 9,  h: 9,  type: 'dot',     rotate: '0deg'   },
  { top: H * 0.83, left: 138,  w: 11, h: 17, type: 'leaf',    rotate: '5deg'   },
  { top: H * 0.85, right: 55,  w: 7,  h: 7,  type: 'diamond', rotate: '45deg'  },
  { top: H * 0.87, right: 18,  w: 9,  h: 9,  type: 'diamond', rotate: '45deg'  },
  { top: H * 0.89, left: 68,   w: 6,  h: 6,  type: 'dot',     rotate: '0deg'   },
  { top: H * 0.91, right: 48,  w: 13, h: 20, type: 'leaf',    rotate: '-20deg' },
  { top: H * 0.93, left: 22,   w: 10, h: 10, type: 'dot',     rotate: '0deg'   },
];

const SHAPE_COLOR = '#5ECFA0';

function DecoShape({ top, bottom, left, right, w, h, type, rotate }: typeof DECO[number]) {
  const base: any = {
    position: 'absolute',
    top, bottom, left, right,
    transform: [{ rotate }],
  };
  if (type === 'leaf') {
    return (
      <View style={[base, {
        width: w, height: h,
        borderRadius: w * 0.5,
        borderWidth: 1.8,
        borderColor: SHAPE_COLOR,
      }]} />
    );
  }
  if (type === 'diamond') {
    return (
      <View style={[base, {
        width: w, height: w,
        backgroundColor: SHAPE_COLOR,
        opacity: 0.65,
      }]} />
    );
  }
  // dot
  return (
    <View style={[base, {
      width: w, height: w,
      borderRadius: w / 2,
      backgroundColor: SHAPE_COLOR,
      opacity: 0.5,
    }]} />
  );
}

// ─── Screen ──────────────────────────────────────────────────────────────────
export default function ActivitySubmittedScreen({ navigation: _navigation }: Props) {
  return (
    <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
      <StatusBar barStyle="dark-content" backgroundColor="#E8F5EE" />

      {/* Decorative background */}
      <View style={StyleSheet.absoluteFill} pointerEvents="none">
        {DECO.map((s, i) => <DecoShape key={i} {...s} />)}
      </View>

      {/* Main content */}
      <View style={styles.content}>

        {/* ── Check circle ──────────────────── */}
        <View style={styles.checkOuter}>
          <View style={styles.checkInner}>
            <Text style={styles.checkMark}>✓</Text>
          </View>
        </View>

        {/* ── Title ─────────────────────────── */}
        <Text style={styles.title}>Activity Submitted!</Text>
        <Text style={styles.subtitle}>
          Your entry has been sent for{'\n'}teacher approval.
        </Text>

        {/* ── Status card ───────────────────── */}
        <View style={styles.card}>
          <View style={styles.statusRow}>
            <View style={styles.yellowDot} />
            <Text style={styles.statusTxt}>Status: Pending Approval</Text>
          </View>
          <Text style={styles.infoIcon}>ⓘ</Text>
        </View>

        {/* ── What happens next card ────────── */}
        <View style={styles.card}>
          <Text style={styles.nextLabel}>WHAT HAPPENS NEXT</Text>
          {[
            'A teacher will review your activity shortly.',
            "You'll be notified when it's approved.",
            "You'll earn points and carbon savings once approved.",
          ].map((text, i) => (
            <View key={i} style={styles.bulletRow}>
              <View style={styles.bulletCircle} />
              <Text style={styles.bulletTxt}>{text}</Text>
            </View>
          ))}
        </View>

      </View>
    </SafeAreaView>
  );
}

// ─── Styles ──────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#E8F5EE' },

  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: H * 0.07,
  },

  // Check circle
  checkOuter: {
    width: 120, height: 120, borderRadius: 60,
    backgroundColor: 'rgba(34,197,94,0.15)',
    alignItems: 'center', justifyContent: 'center',
    marginBottom: 26,
  },
  checkInner: {
    width: 90, height: 90, borderRadius: 45,
    backgroundColor: '#22C55E',
    alignItems: 'center', justifyContent: 'center',
  },
  checkMark: { fontSize: 46, color: '#fff', lineHeight: 54 },

  // Text
  title: {
    fontSize: 26, fontWeight: '800',
    color: Colors.primaryDark,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 15, color: Colors.textSecondary,
    textAlign: 'center', lineHeight: 22,
    marginBottom: 32,
  },

  // Cards
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 18,
    paddingHorizontal: 18,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 2,
  },

  // Status row
  statusRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  yellowDot: {
    width: 12, height: 12, borderRadius: 6,
    backgroundColor: '#F59E0B',
  },
  statusTxt: { fontSize: 15, fontWeight: '700', color: Colors.text },
  infoIcon: { fontSize: 20, color: Colors.textSecondary },

  // What happens next
  nextLabel: {
    fontSize: 11, fontWeight: '800', color: Colors.textSecondary,
    letterSpacing: 1, marginBottom: 14,
    alignSelf: 'flex-start',
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    marginBottom: 12,
    flex: 1,
  },
  bulletCircle: {
    width: 10, height: 10, borderRadius: 5,
    borderWidth: 2, borderColor: Colors.textLight,
    marginTop: 5, flexShrink: 0,
  },
  bulletTxt: {
    flex: 1, fontSize: 14,
    color: Colors.text, lineHeight: 21,
  },
});
