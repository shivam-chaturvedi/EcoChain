import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import { Colors } from '../../../constants';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'LocationSelection'>;
};

type LocationOption = {
  id: string;
  flag: string;
  name: string;
  region: string;
  flagBg: string;
};

const LOCATIONS: LocationOption[] = [
  {
    id: 'uae',
    flag: '🇦🇪',
    name: 'UAE',
    region: 'MIDDLE EAST',
    flagBg: '#00732F',
  },
  {
    id: 'india',
    flag: '🇮🇳',
    name: 'India',
    region: 'SOUTH ASIA',
    flagBg: '#FF9933',
  },
  {
    id: 'global',
    flag: '🌍',
    name: 'Global',
    region: 'INTERNATIONAL',
    flagBg: '#1A5C38',
  },
];

export default function LocationSelectionScreen({ navigation }: Props) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleContinue = () => {
    if (!selected) return;
    navigation.navigate('RoleSelection');
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.brandRow}>
          <View style={styles.brandIconCircle}>
            <Text style={styles.brandIconEmoji}>🌿</Text>
          </View>
          <Text style={styles.brandName}>EcoChain</Text>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>

        {/* Title section */}
        <Text style={styles.title}>Where are you based?</Text>
        <Text style={styles.subtitle}>
          Choose your primary location to customize your environmental impact
          goals and local leaderboards.
        </Text>

        {/* Location options */}
        <View style={styles.optionsList}>
          {LOCATIONS.map(location => {
            const isSelected = selected === location.id;
            return (
              <TouchableOpacity
                key={location.id}
                style={[
                  styles.optionCard,
                  isSelected && styles.optionCardSelected,
                ]}
                onPress={() => setSelected(location.id)}
                activeOpacity={0.8}>
                <View
                  style={[
                    styles.flagCircle,
                    { backgroundColor: location.flagBg },
                  ]}>
                  <Text style={styles.flagEmoji}>{location.flag}</Text>
                </View>
                <Text style={styles.optionName}>{location.name}</Text>
                <Text style={styles.optionRegion}>{location.region}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      {/* Continue button */}
      <View style={styles.bottomArea}>
        <TouchableOpacity
          style={[
            styles.continueBtn,
            !selected && styles.continueBtnDisabled,
          ]}
          onPress={handleContinue}
          disabled={!selected}
          activeOpacity={0.85}>
          <Text
            style={[
              styles.continueBtnText,
              !selected && styles.continueBtnTextDisabled,
            ]}>
            Continue  →
          </Text>
        </TouchableOpacity>
      </View>
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
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  brandIconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
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
  // Scroll content
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 28,
    paddingBottom: 16,
  },

  // Title
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.text,
    textAlign: 'center',
    marginBottom: 10,
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 21,
    marginBottom: 28,
    paddingHorizontal: 8,
  },

  // Options list
  optionsList: {
    gap: 12,
  },
  optionCard: {
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderWidth: 2,
    borderColor: Colors.border,
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  optionCardSelected: {
    borderColor: Colors.selectedBorder,
    backgroundColor: Colors.selectedBg,
  },
  flagCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    overflow: 'hidden',
  },
  flagEmoji: {
    fontSize: 44,
  },
  optionName: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 3,
  },
  optionRegion: {
    fontSize: 11,
    fontWeight: '600',
    color: Colors.textLight,
    letterSpacing: 1,
  },

  // Bottom area
  bottomArea: {
    paddingHorizontal: 20,
    paddingBottom: 24,
    paddingTop: 8,
  },
  continueBtn: {
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
  continueBtnDisabled: {
    backgroundColor: Colors.buttonDisabled,
    shadowOpacity: 0,
    elevation: 0,
  },
  continueBtnText: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.buttonText,
    letterSpacing: 0.3,
  },
  continueBtnTextDisabled: {
    color: Colors.buttonDisabledText,
  },
});
