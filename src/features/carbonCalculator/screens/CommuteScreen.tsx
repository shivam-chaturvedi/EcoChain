import React, { useState } from 'react';
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
import CustomSlider from '../../../components/CustomSlider';

const { width: SCREEN_W } = Dimensions.get('window');
const CARD_PAD = 20;
const GRID_GAP = 10;
const TRANSPORT_CARD = Math.floor((SCREEN_W - CARD_PAD * 2 - GRID_GAP) / 2);

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'CarbonCommute'>;
};

type TransportMode = 'bus' | 'car' | 'walking' | 'cycle';

const MODES: { id: TransportMode; emoji: string; label: string }[] = [
  { id: 'bus',     emoji: '🚌', label: 'Bus' },
  { id: 'car',     emoji: '🚗', label: 'Car' },
  { id: 'walking', emoji: '🚶', label: 'Walking' },
  { id: 'cycle',   emoji: '🚴', label: 'Cycle' },
];

export default function CommuteScreen({ navigation }: Props) {
  const [selectedMode, setSelectedMode] = useState<TransportMode | null>(null);
  const [distance, setDistance] = useState(12);

  const handleNextStep = () => {
    navigation.navigate('CarbonFootprintResult');
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <StatusBar barStyle="dark-content" backgroundColor={styles.safeArea.backgroundColor} />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.brandRow}>
          <View style={styles.brandIconCircle}>
            <Text style={styles.brandIconEmoji}>🌿</Text>
          </View>
          <Text style={styles.brandName}>EcoSystem</Text>
        </View>
        <View style={styles.xpBadge}>
          <Text style={styles.xpIcon}>⚡</Text>
          <Text style={styles.xpText}>1,250 XP</Text>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>

        {/* Blue glow decorative element (behind card) */}
        <View style={styles.glowBlob} pointerEvents="none" />

        {/* Main white card */}
        <View style={styles.mainCard}>

          {/* Title */}
          <Text style={styles.title}>How do you get to school?</Text>
          <Text style={styles.subtitle}>
            Your travel choices help us estimate your weekly carbon footprint.
          </Text>

          {/* Transport mode grid */}
          <View style={styles.transportGrid}>
            {MODES.map(mode => {
              const isSelected = selectedMode === mode.id;
              return (
                <TouchableOpacity
                  key={mode.id}
                  style={[
                    styles.transportCard,
                    isSelected && styles.transportCardSelected,
                  ]}
                  onPress={() => setSelectedMode(mode.id)}
                  activeOpacity={0.8}>
                  <View
                    style={[
                      styles.transportIconCircle,
                      isSelected && styles.transportIconCircleSelected,
                    ]}>
                    <Text style={styles.transportEmoji}>{mode.emoji}</Text>
                  </View>
                  <Text
                    style={[
                      styles.transportLabel,
                      isSelected && styles.transportLabelSelected,
                    ]}>
                    {mode.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Distance section */}
          <View style={styles.distanceCard}>
            <View style={styles.distanceHeaderRow}>
              <View style={styles.distanceIconCircle}>
                <Text style={styles.distanceIcon}>🗺️</Text>
              </View>
              <View style={styles.distanceLabelArea}>
                <Text style={styles.distanceLabel}>ONE-WAY DISTANCE</Text>
                <Text style={styles.distanceValue}>{distance} km</Text>
              </View>
            </View>

            <CustomSlider
              value={distance}
              min={0}
              max={50}
              step={1}
              onValueChange={setDistance}
              style={styles.distanceSlider}
            />

            <View style={styles.distanceTicks}>
              <Text style={styles.tickLabel}>0km</Text>
              <Text style={styles.tickLabel}>25km</Text>
              <Text style={styles.tickLabel}>50km</Text>
            </View>
          </View>

          {/* Navigation buttons */}
          <View style={styles.navRow}>
            <TouchableOpacity
              style={styles.backBtn}
              onPress={() => navigation.goBack()}
              activeOpacity={0.7}>
              <Text style={styles.backBtnText}>← Back</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.nextBtn}
            onPress={handleNextStep}
            activeOpacity={0.85}>
            <Text style={styles.nextBtnText}>Next Step</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom info card */}
        <View style={styles.infoCard}>
          <Text style={styles.infoText}>
            instead of driving can save over 500kg of CO
            <Text style={styles.infoSubscript}>₂</Text>
            {' '}per year—that's like planting 25 trees!
          </Text>
        </View>

        <View style={{ height: 24 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

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
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  brandIconCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: Colors.primaryDark,
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandIconEmoji: {
    fontSize: 16,
  },
  brandName: {
    fontSize: 17,
    fontWeight: '700',
    color: Colors.text,
  },
  xpBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0D9488',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    gap: 4,
  },
  xpIcon: {
    fontSize: 12,
  },
  xpText: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.white,
  },

  // Scroll
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 8,
    position: 'relative',
  },

  // Glow element
  glowBlob: {
    position: 'absolute',
    top: 0,
    left: -40,
    right: -40,
    height: 220,
    borderRadius: 120,
    backgroundColor: 'rgba(173, 216, 230, 0.35)',
  },

  // Main card
  mainCard: {
    backgroundColor: Colors.white,
    borderRadius: 24,
    padding: CARD_PAD,
    shadowColor: '#5B8FC8',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 20,
    elevation: 6,
    marginBottom: 16,
    zIndex: 1,
  },

  // Title
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: Colors.text,
    textAlign: 'center',
    marginBottom: 8,
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 21,
    marginBottom: 24,
  },

  // Transport grid
  transportGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: GRID_GAP,
    marginBottom: 20,
  },
  transportCard: {
    width: TRANSPORT_CARD,
    paddingVertical: 18,
    alignItems: 'center',
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: Colors.border,
    backgroundColor: Colors.white,
    gap: 10,
  },
  transportCardSelected: {
    borderColor: Colors.primaryDark,
    backgroundColor: Colors.selectedBg,
  },
  transportIconCircle: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  transportIconCircleSelected: {
    backgroundColor: '#DFF5EC',
  },
  transportEmoji: {
    fontSize: 26,
  },
  transportLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.textSecondary,
  },
  transportLabelSelected: {
    color: Colors.primaryDark,
    fontWeight: '700',
  },

  // Distance section
  distanceCard: {
    backgroundColor: '#F4F6F8',
    borderRadius: 14,
    padding: 14,
    marginBottom: 20,
  },
  distanceHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 14,
  },
  distanceIconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#DFF5EC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  distanceIcon: {
    fontSize: 16,
  },
  distanceLabelArea: {
    flex: 1,
  },
  distanceLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: Colors.text,
    letterSpacing: 0.8,
  },
  distanceValue: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.primary,
    marginTop: 1,
  },
  distanceSlider: {
    marginBottom: 8,
  },
  distanceTicks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tickLabel: {
    fontSize: 11,
    color: Colors.textLight,
    fontWeight: '500',
  },

  // Nav buttons
  navRow: {
    alignItems: 'center',
    marginBottom: 12,
  },
  backBtn: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  backBtnText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.textSecondary,
  },
  nextBtn: {
    height: 54,
    backgroundColor: Colors.buttonPrimary,
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.primaryDark,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  nextBtnText: {
    fontSize: 17,
    fontWeight: '700',
    color: Colors.white,
    letterSpacing: 0.2,
  },

  // Bottom info card
  infoCard: {
    backgroundColor: '#EEF2FF',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#818CF8',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 4,
  },
  infoText: {
    fontSize: 14,
    color: '#3730A3',
    lineHeight: 22,
    textAlign: 'center',
  },
  infoSubscript: {
    fontSize: 11,
    lineHeight: 16,
  },
});
