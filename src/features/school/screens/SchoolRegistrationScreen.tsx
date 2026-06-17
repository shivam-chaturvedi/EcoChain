import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import { Colors } from '../../../constants';

const { width } = Dimensions.get('window');

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SchoolRegistration'>;
};

const CURRICULA = ['IB', 'CBSE', 'British', 'Other'];
const COUNTRIES = ['United Arab Emirates', 'India', 'United Kingdom', 'United States', 'Other'];
const TOTAL_STEPS = 4;

export default function SchoolRegistrationScreen({ navigation }: Props) {
  const [schoolName, setSchoolName] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [city, setCity] = useState('');
  const [selectedCurriculum, setSelectedCurriculum] = useState<string | null>(null);
  const [showCountryPicker, setShowCountryPicker] = useState(false);

  const canProceed =
    schoolName.trim().length > 0 &&
    selectedCountry.length > 0 &&
    city.trim().length > 0 &&
    selectedCurriculum !== null;

  const handleNextStep = () => {
    if (!canProceed) return;
    navigation.navigate('AdminProfileSetup');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.brandRow}>
          <View style={styles.brandIconCircle}>
            <Text style={styles.brandIconEmoji}>🌿</Text>
          </View>
          <Text style={styles.brandName}>EcoSystem</Text>
        </View>
      </View>

      {/* Progress indicator */}
      <View style={styles.progressSection}>
        <Text style={styles.progressLabel}>Registration Progress</Text>
        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: `${(1 / TOTAL_STEPS) * 100}%` }]} />
        </View>
        <View style={styles.stepsRow}>
          <View style={styles.activeStepTab}>
            <Text style={styles.activeStepText}>Step 1: School Details</Text>
            <View style={styles.activeStepLine} />
          </View>
        </View>
      </View>

      <KeyboardAvoidingView
        style={styles.kavFlex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">

          {/* Title */}
          <Text style={styles.screenTitle}>School Registration</Text>
          <Text style={styles.screenSubtitle}>
            Let's get your institution started on its sustainability journey.
          </Text>

          {/* Logo upload */}
          <View style={styles.logoUploadArea}>
            <TouchableOpacity style={styles.logoCircle} activeOpacity={0.8}>
              <Text style={styles.logoEmoji}>📷</Text>
            </TouchableOpacity>
            <Text style={styles.logoUploadLabel}>Upload School Logo</Text>
            <Text style={styles.logoUploadHint}>PNG, JPG up to 5MB</Text>
          </View>

          {/* School Name */}
          <View style={styles.fieldGroup}>
            <Text style={styles.fieldLabel}>School Name</Text>
            <TextInput
              style={styles.textInput}
              placeholder="e.g. Green Valley International"
              placeholderTextColor={Colors.inputPlaceholder}
              value={schoolName}
              onChangeText={setSchoolName}
              autoCapitalize="words"
            />
          </View>

          {/* Country */}
          <View style={styles.fieldGroup}>
            <Text style={styles.fieldLabel}>Country</Text>
            <TouchableOpacity
              style={styles.dropdownBtn}
              onPress={() => setShowCountryPicker(!showCountryPicker)}
              activeOpacity={0.8}>
              <Text
                style={[
                  styles.dropdownText,
                  !selectedCountry && styles.dropdownPlaceholder,
                ]}>
                {selectedCountry || 'Select country'}
              </Text>
              <Text style={styles.dropdownChevron}>
                {showCountryPicker ? '∧' : '∨'}
              </Text>
            </TouchableOpacity>

            {/* Country dropdown list */}
            {showCountryPicker && (
              <View style={styles.dropdownList}>
                {COUNTRIES.map(country => (
                  <TouchableOpacity
                    key={country}
                    style={[
                      styles.dropdownItem,
                      selectedCountry === country && styles.dropdownItemSelected,
                    ]}
                    onPress={() => {
                      setSelectedCountry(country);
                      setShowCountryPicker(false);
                    }}>
                    <Text
                      style={[
                        styles.dropdownItemText,
                        selectedCountry === country && styles.dropdownItemTextSelected,
                      ]}>
                      {country}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          {/* City */}
          <View style={styles.fieldGroup}>
            <Text style={styles.fieldLabel}>City</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter city"
              placeholderTextColor={Colors.inputPlaceholder}
              value={city}
              onChangeText={setCity}
              autoCapitalize="words"
            />
          </View>

          {/* Curriculum */}
          <View style={styles.fieldGroup}>
            <Text style={styles.fieldLabel}>School Curriculum / Type</Text>
            <View style={styles.curriculumGrid}>
              {CURRICULA.map(item => {
                const isSelected = selectedCurriculum === item;
                return (
                  <TouchableOpacity
                    key={item}
                    style={[
                      styles.curriculumBtn,
                      isSelected && styles.curriculumBtnSelected,
                    ]}
                    onPress={() => setSelectedCurriculum(isSelected ? null : item)}
                    activeOpacity={0.8}>
                    <Text
                      style={[
                        styles.curriculumBtnText,
                        isSelected && styles.curriculumBtnTextSelected,
                      ]}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* Next Step button */}
          <TouchableOpacity
            style={[styles.nextBtn, !canProceed && styles.nextBtnDisabled]}
            onPress={handleNextStep}
            disabled={!canProceed}
            activeOpacity={0.85}>
            <Text style={[styles.nextBtnText, !canProceed && styles.nextBtnTextDisabled]}>
              Next Step  →
            </Text>
          </TouchableOpacity>

          {/* Terms footer */}
          <Text style={styles.termsText}>
            By continuing, you agree to our{' '}
            <Text style={styles.termsLink}>Terms of Service</Text>.
          </Text>

          <View style={styles.bottomPad} />
        </ScrollView>
      </KeyboardAvoidingView>
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

  // Progress
  progressSection: {
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 0,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  progressLabel: {
    fontSize: 11,
    fontWeight: '500',
    color: Colors.textLight,
    textAlign: 'center',
    marginBottom: 8,
    letterSpacing: 0.3,
  },
  progressTrack: {
    height: 4,
    backgroundColor: Colors.border,
    borderRadius: 2,
    marginBottom: 10,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: Colors.primaryDark,
    borderRadius: 2,
  },
  stepsRow: {
    flexDirection: 'row',
  },
  activeStepTab: {
    paddingBottom: 10,
  },
  activeStepText: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.primaryDark,
    marginBottom: 8,
  },
  activeStepLine: {
    height: 2.5,
    backgroundColor: Colors.primaryDark,
    borderRadius: 2,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },

  // Scroll
  kavFlex: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 24,
  },

  // Screen title
  screenTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 6,
  },
  screenSubtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 21,
    marginBottom: 28,
  },

  // Logo upload
  logoUploadArea: {
    alignItems: 'center',
    marginBottom: 28,
  },
  logoCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E8F5ED',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Colors.primaryLight,
    borderStyle: 'dashed',
    marginBottom: 10,
  },
  logoEmoji: {
    fontSize: 32,
  },
  logoUploadLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.primary,
    marginBottom: 3,
  },
  logoUploadHint: {
    fontSize: 12,
    color: Colors.textLight,
  },

  // Form fields
  fieldGroup: {
    marginBottom: 18,
  },
  fieldLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 8,
  },
  textInput: {
    height: 48,
    borderWidth: 1.5,
    borderColor: Colors.border,
    borderRadius: 10,
    paddingHorizontal: 14,
    fontSize: 14,
    color: Colors.text,
    backgroundColor: Colors.white,
  },

  // Dropdown
  dropdownBtn: {
    height: 48,
    borderWidth: 1.5,
    borderColor: Colors.border,
    borderRadius: 10,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
  },
  dropdownText: {
    fontSize: 14,
    color: Colors.text,
    flex: 1,
  },
  dropdownPlaceholder: {
    color: Colors.inputPlaceholder,
  },
  dropdownChevron: {
    fontSize: 12,
    color: Colors.textLight,
    fontWeight: '600',
  },
  dropdownList: {
    borderWidth: 1.5,
    borderColor: Colors.border,
    borderRadius: 10,
    marginTop: 4,
    backgroundColor: Colors.white,
    overflow: 'hidden',
    shadowColor: Colors.cardShadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  dropdownItem: {
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider,
  },
  dropdownItemSelected: {
    backgroundColor: Colors.selectedBg,
  },
  dropdownItemText: {
    fontSize: 14,
    color: Colors.text,
  },
  dropdownItemTextSelected: {
    color: Colors.primaryDark,
    fontWeight: '600',
  },

  // Curriculum grid
  curriculumGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  curriculumBtn: {
    width: (width - 40 - 10) / 2,
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: Colors.border,
    borderRadius: 10,
    backgroundColor: Colors.white,
  },
  curriculumBtnSelected: {
    borderColor: Colors.selectedBorder,
    backgroundColor: Colors.selectedBg,
  },
  curriculumBtnText: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.textSecondary,
  },
  curriculumBtnTextSelected: {
    color: Colors.primaryDark,
    fontWeight: '700',
  },

  // Next button
  nextBtn: {
    height: 54,
    backgroundColor: Colors.buttonPrimary,
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 16,
    shadowColor: Colors.primaryDark,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  nextBtnDisabled: {
    backgroundColor: Colors.buttonDisabled,
    shadowOpacity: 0,
    elevation: 0,
  },
  nextBtnText: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.buttonText,
    letterSpacing: 0.3,
  },
  nextBtnTextDisabled: {
    color: Colors.buttonDisabledText,
  },

  // Terms
  termsText: {
    textAlign: 'center',
    fontSize: 12,
    color: Colors.textSecondary,
    lineHeight: 18,
  },
  termsLink: {
    color: Colors.link,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  bottomPad: {
    height: 20,
  },
});
