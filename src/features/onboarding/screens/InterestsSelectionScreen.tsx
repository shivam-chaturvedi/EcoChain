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

const { width } = Dimensions.get('window');
const MAX_SELECTIONS = 5;

type InterestsSelectionScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'InterestsSelectionScreen'>;
};

type Topic = {
  id: string;
  emoji: string;
  name: string;
  description: string;
  iconBg: string;
};

const TOPICS: Topic[] = [
  {
    id: 'recycling',
    emoji: '♻️',
    name: 'Recycling',
    description: 'Master the art of circular living and zero-waste habits.',
    iconBg: '#E8F5EE',
  },
  {
    id: 'energy',
    emoji: '⚡',
    name: 'Energy saving',
    description: 'Optimize your home and digital footprint for efficiency.',
    iconBg: '#FFF9E8',
  },
  {
    id: 'water',
    emoji: '💧',
    name: 'Water conservation',
    description: 'Preserve our most precious resource through smart usage.',
    iconBg: '#E8F4FF',
  },
  {
    id: 'wildlife',
    emoji: '🐾',
    name: 'Wildlife',
    description: 'Protect biodiversity and support local ecosystems.',
    iconBg: '#FFF0E8',
  },
  {
    id: 'food',
    emoji: '🍴',
    name: 'Food waste',
    description: 'Reduce kitchen waste and explore sustainable diets.',
    iconBg: '#FFF5E8',
  },
  {
    id: 'gardening',
    emoji: '🌱',
    name: 'Gardening',
    description: 'Grow your own food and create pollinator havens.',
    iconBg: '#E8F5EE',
  },
];

export default function InterestsSelectionScreen({ navigation }: InterestsSelectionScreenProps) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleTopic = (id: string) => {
    if (selected.includes(id)) {
      setSelected(prev => prev.filter(s => s !== id));
    } else if (selected.length < MAX_SELECTIONS) {
      setSelected(prev => [...prev, id]);
    }
  };

  const handleStartImpacting = () => {
    navigation.navigate('AvatarSelection');
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profileRow}>
          <View style={styles.avatarWrapper}>
            <View style={styles.avatarCircle}>
              <Text style={styles.avatarEmoji}>🌳</Text>
            </View>
            <View style={styles.levelPill}>
              <Text style={styles.levelText}>LVL 5</Text>
            </View>
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

        {/* Title section */}
        <Text style={styles.title}>What are you{'\n'}interested in?</Text>
        <Text style={styles.subtitle}>
          Choose up to 5 topics to personalize your{'\n'}environmental impact journey.
        </Text>

        {/* Selected counter */}
        <View style={styles.counterRow}>
          <View style={styles.counterChip}>
            <Text style={styles.counterText}>
              SELECTED: {selected.length} / {MAX_SELECTIONS}
            </Text>
          </View>
        </View>

        {/* Topic cards */}
        <View style={styles.topicList}>
          {TOPICS.map(topic => {
            const isSelected = selected.includes(topic.id);
            const isDisabled = !isSelected && selected.length >= MAX_SELECTIONS;
            return (
              <TouchableOpacity
                key={topic.id}
                style={[
                  styles.topicCard,
                  isSelected && styles.topicCardSelected,
                  isDisabled && styles.topicCardDisabled,
                ]}
                onPress={() => toggleTopic(topic.id)}
                activeOpacity={0.8}
                disabled={isDisabled}>
                <View
                  style={[
                    styles.topicIconCircle,
                    { backgroundColor: topic.iconBg },
                  ]}>
                  <Text style={styles.topicEmoji}>{topic.emoji}</Text>
                </View>
                <View style={styles.topicTextArea}>
                  <Text
                    style={[
                      styles.topicName,
                      isSelected && styles.topicNameSelected,
                    ]}>
                    {topic.name}
                  </Text>
                  <Text style={styles.topicDescription}>{topic.description}</Text>
                </View>
                {isSelected && (
                  <View style={styles.checkmark}>
                    <Text style={styles.checkmarkText}>✓</Text>
                  </View>
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Action buttons */}
        <View style={styles.actionsArea}>
          <TouchableOpacity
            style={[
              styles.startBtn,
              selected.length === 0 && styles.startBtnDisabled,
            ]}
            onPress={handleStartImpacting}
            disabled={selected.length === 0}
            activeOpacity={0.85}>
            <Text
              style={[
                styles.startBtnText,
                selected.length === 0 && styles.startBtnTextDisabled,
              ]}>
              Start Impacting  ↗
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.skipBtn}
            onPress={handleStartImpacting}
            activeOpacity={0.7}>
            <Text style={styles.skipBtnText}>SKIP FOR NOW</Text>
          </TouchableOpacity>
        </View>

        {/* Footer promo section */}
        <View style={styles.footerSection}>
          <View style={styles.footerDivider} />
          <Text style={styles.footerBrand}>EcoSystem</Text>
          <Text style={styles.footerDesc}>
            Join millions of students in gamifying the protection of our planet.
            Small actions, school-wide impact.
          </Text>

          {/* Forest image placeholder */}
          <View style={styles.forestImageContainer}>
            <View style={styles.forestBgTop} />
            <View style={styles.forestBgMid} />
            <View style={styles.forestBgBottom} />
            <View style={styles.forestBeam} />
          </View>
        </View>

        <View style={{ height: 32 }} />
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
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  avatarWrapper: {
    position: 'relative',
    width: 38,
    height: 38,
  },
  avatarCircle: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: '#1A3D2E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarEmoji: {
    fontSize: 20,
  },
  levelPill: {
    position: 'absolute',
    bottom: -6,
    right: -8,
    backgroundColor: Colors.primaryDark,
    borderRadius: 6,
    paddingHorizontal: 4,
    paddingVertical: 1,
    borderWidth: 1.5,
    borderColor: Colors.white,
  },
  levelText: {
    fontSize: 8,
    fontWeight: '800',
    color: Colors.white,
    letterSpacing: 0.3,
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
    fontSize: 13,
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
    textAlign: 'center',
    lineHeight: 34,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 21,
    marginBottom: 16,
  },

  // Counter
  counterRow: {
    alignItems: 'center',
    marginBottom: 20,
  },
  counterChip: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },
  counterText: {
    fontSize: 11,
    fontWeight: '700',
    color: Colors.textSecondary,
    letterSpacing: 0.8,
  },

  // Topic list
  topicList: {
    gap: 10,
    marginBottom: 24,
  },

  // Topic card
  topicCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 14,
    padding: 14,
    borderWidth: 1.5,
    borderColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
    gap: 12,
  },
  topicCardSelected: {
    borderColor: Colors.selectedBorder,
    backgroundColor: Colors.selectedBg,
    shadowOpacity: 0.08,
  },
  topicCardDisabled: {
    opacity: 0.45,
  },
  topicIconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  topicEmoji: {
    fontSize: 22,
  },
  topicTextArea: {
    flex: 1,
  },
  topicName: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 3,
  },
  topicNameSelected: {
    color: Colors.primaryDark,
  },
  topicDescription: {
    fontSize: 12,
    color: Colors.textSecondary,
    lineHeight: 18,
  },
  checkmark: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: Colors.primaryDark,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  checkmarkText: {
    color: Colors.white,
    fontSize: 13,
    fontWeight: '700',
  },

  // Actions
  actionsArea: {
    gap: 12,
    marginBottom: 32,
  },
  startBtn: {
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
  startBtnDisabled: {
    backgroundColor: Colors.buttonDisabled,
    shadowOpacity: 0,
    elevation: 0,
  },
  startBtnText: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.white,
    letterSpacing: 0.3,
  },
  startBtnTextDisabled: {
    color: Colors.buttonDisabledText,
  },
  skipBtn: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  skipBtnText: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.textLight,
    letterSpacing: 1.5,
  },

  // Footer promo
  footerSection: {
    paddingTop: 8,
  },
  footerDivider: {
    height: 1,
    backgroundColor: Colors.divider,
    marginBottom: 24,
  },
  footerBrand: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.primary,
    marginBottom: 8,
  },
  footerDesc: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 22,
    marginBottom: 16,
  },

  // Forest image placeholder
  forestImageContainer: {
    height: 160,
    borderRadius: 14,
    overflow: 'hidden',
    position: 'relative',
  },
  forestBgTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '60%',
    backgroundColor: '#0D4A1E',
  },
  forestBgMid: {
    position: 'absolute',
    top: '30%',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#1A6B35',
  },
  forestBgBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '25%',
    backgroundColor: '#0A3015',
  },
  forestBeam: {
    position: 'absolute',
    top: 0,
    left: '45%',
    width: '10%',
    height: '65%',
    backgroundColor: 'rgba(255, 220, 100, 0.25)',
    transform: [{ skewX: '5deg' }],
  },
});
