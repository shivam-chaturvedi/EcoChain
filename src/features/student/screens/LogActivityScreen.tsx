import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import { Colors } from '../../../constants';

const { width: W } = Dimensions.get('window');
const H_PAD = 20;
const CARD_GAP = 10;
const CARD_W = (W - H_PAD * 2 - CARD_GAP * 2) / 3;

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'LogActivity'>;
};

const ACTIVITIES = [
  { id: 'recycling', label: 'Recycling',          emoji: '♻️',  custom: false },
  { id: 'energy',    label: 'Energy\nSaving',      emoji: '⚡',  custom: false },
  { id: 'water',     label: 'Water\nSaving',       emoji: '💧',  custom: false },
  { id: 'travel',    label: 'Sustainable\nTravel', emoji: '🚌',  custom: false },
  { id: 'waste',     label: 'Reduced\nWaste',      emoji: '🗑️', custom: false },
  { id: 'custom',    label: 'Custom\nAction',      emoji: '+',   custom: true  },
];

export default function LogActivityScreen({ navigation }: Props) {
  const [selected, setSelected] = useState<string>('recycling');

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* ── Header ─────────────────────────── */}
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.title}>Log an Activity</Text>
          <Text style={styles.subtitle}>Choose what type of sustainable action you did</Text>
        </View>
        <TouchableOpacity style={styles.closeBtn} onPress={() => navigation.goBack()} activeOpacity={0.7}>
          <Text style={styles.closeIcon}>✕</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>

        {/* ── Activity grid ──────────────────── */}
        <View style={styles.grid}>
          {ACTIVITIES.map((act) => {
            const isSelected = selected === act.id && !act.custom;
            return (
              <TouchableOpacity
                key={act.id}
                style={[styles.actCard, isSelected && styles.actCardSelected]}
                onPress={() => !act.custom && setSelected(act.id)}
                activeOpacity={0.8}>
                <View style={[styles.iconCircle, act.custom ? styles.iconCircleCustom : styles.iconCircleGreen]}>
                  {act.custom
                    ? <Text style={styles.customPlus}>+</Text>
                    : <Text style={styles.iconEmoji}>{act.emoji}</Text>
                  }
                </View>
                <Text style={[styles.actLabel, act.custom && styles.actLabelDim]} numberOfLines={2}>
                  {act.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* ── Did you know? ──────────────────── */}
        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <Text style={styles.infoStar}>✦</Text>
            <Text style={styles.infoTitle}>Did you know?</Text>
          </View>
          <Text style={styles.infoText}>
            Recycling just one aluminum can saves enough energy to run a TV for three hours.
            Every small action adds up to a massive global impact.
          </Text>
        </View>

        {/* ── Image preview ─────────────────── */}
        <View style={styles.imagePreview}>
          <View style={[StyleSheet.absoluteFill, { backgroundColor: '#1E4D3A' }]} />
          <View style={[StyleSheet.absoluteFill, { backgroundColor: '#2D6A4F', opacity: 0.55 }]} />
          <Text style={styles.previewEmoji}>🌿</Text>
        </View>

        {/* ── Continue button ────────────────── */}
        <TouchableOpacity
          style={styles.continueBtn}
          onPress={() => navigation.navigate('ActivityForm', { activityType: selected })}
          activeOpacity={0.85}>
          <Text style={styles.continueBtnTxt}>Continue to Log</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: H_PAD,
    paddingTop: 16,
    paddingBottom: 20,
  },
  headerText: { flex: 1, marginRight: 12 },
  title: { fontSize: 22, fontWeight: '800', color: Colors.text, marginBottom: 4 },
  subtitle: { fontSize: 13, color: Colors.textSecondary, lineHeight: 18 },

  closeBtn: {
    width: 32, height: 32, borderRadius: 16,
    backgroundColor: '#F3F4F6',
    alignItems: 'center', justifyContent: 'center',
  },
  closeIcon: { fontSize: 16, color: Colors.text, fontWeight: '600' },

  scroll: { paddingHorizontal: H_PAD, paddingBottom: 32 },

  // Grid
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: CARD_GAP,
    marginBottom: 20,
  },
  actCard: {
    width: CARD_W,
    backgroundColor: '#F9FAFB',
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 8,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  actCardSelected: {
    borderColor: Colors.primaryDark,
    backgroundColor: '#EDF7F1',
  },
  iconCircle: {
    width: 52, height: 52, borderRadius: 26,
    alignItems: 'center', justifyContent: 'center',
    marginBottom: 8,
  },
  iconCircleGreen: { backgroundColor: Colors.primaryDark },
  iconCircleCustom: {
    backgroundColor: '#F3F4F6',
    borderWidth: 2, borderColor: '#D1D5DB',
  },
  iconEmoji: { fontSize: 22 },
  customPlus: { fontSize: 24, color: Colors.textSecondary, fontWeight: '300' },
  actLabel: {
    fontSize: 11, fontWeight: '700', color: Colors.text,
    textAlign: 'center', lineHeight: 15,
  },
  actLabelDim: { color: Colors.textLight },

  // Info card
  infoCard: {
    backgroundColor: '#F9FAFB',
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
  },
  infoRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 8 },
  infoStar: { fontSize: 14, color: '#6EE7B7' },
  infoTitle: { fontSize: 14, fontWeight: '700', color: Colors.text },
  infoText: { fontSize: 13, color: Colors.textSecondary, lineHeight: 20 },

  // Image preview
  imagePreview: {
    height: 110,
    borderRadius: 14,
    overflow: 'hidden',
    marginBottom: 20,
    alignItems: 'center', justifyContent: 'center',
  },
  previewEmoji: { fontSize: 52, zIndex: 1 },

  // Continue button
  continueBtn: {
    backgroundColor: Colors.buttonPrimary,
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: 'center',
  },
  continueBtnTxt: { fontSize: 16, fontWeight: '700', color: '#fff' },
});
