import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import { Colors } from '../../../constants';

const { width } = Dimensions.get('window');

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'PersonalIdentity'>;
};

const GRADES = [
  'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5',
  'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10',
  'Grade 11', 'Grade 12', 'University',
];

const GENDERS = ['Female', 'Male', 'Non-binary', 'Prefer not to say'];

const TOTAL_STEPS = 3;
const CURRENT_STEP = 1;

export default function PersonalIdentityScreen({ navigation }: Props) {
  const [fullName, setFullName] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');
  const [showGradePicker, setShowGradePicker] = useState(false);
  const [age, setAge] = useState('');
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const canContinue =
    fullName.trim().length > 0 &&
    selectedGrade.length > 0 &&
    age.trim().length > 0 &&
    selectedGender !== null &&
    dateOfBirth.trim().length > 0 &&
    email.trim().length > 0 &&
    password.length >= 6;

  const handleContinue = () => {
    if (!canContinue) return;
    navigation.navigate('SchoolCode');
  };

  const progressPercent = (CURRENT_STEP / TOTAL_STEPS) * 100;

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor={styles.safeArea.backgroundColor} />

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">

          {/* Phase label */}
          <Text style={styles.phaseLabel}>SETUP • PHASE 01</Text>

          {/* Title */}
          <Text style={styles.title}>Personal Identity</Text>
          <Text style={styles.subtitle}>
            Let's start with the basics to personalize{'\n'}your EcoSystem experience.
          </Text>

          {/* Progress bar */}
          <View style={styles.progressTrack}>
            <View
              style={[styles.progressFill, { width: `${progressPercent}%` }]}
            />
          </View>
          <Text style={styles.stepLabel}>
            Step {CURRENT_STEP} of {TOTAL_STEPS}
          </Text>

          {/* Form card */}
          <View style={styles.card}>

            {/* Full Name */}
            <View style={styles.fieldGroup}>
              <Text style={styles.fieldLabel}>Full Name</Text>
              <View style={styles.inputRow}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Alex Thompson"
                  placeholderTextColor={Colors.inputPlaceholder}
                  value={fullName}
                  onChangeText={setFullName}
                  autoCapitalize="words"
                />
                <Text style={styles.inputIconRight}>👤</Text>
              </View>
            </View>

            {/* Grade */}
            <View style={styles.fieldGroup}>
              <Text style={styles.fieldLabel}>Grade</Text>
              <TouchableOpacity
                style={styles.inputRow}
                onPress={() => setShowGradePicker(!showGradePicker)}
                activeOpacity={0.8}>
                <Text
                  style={[
                    styles.dropdownText,
                    !selectedGrade && styles.dropdownPlaceholder,
                  ]}>
                  {selectedGrade || 'Select Grade'}
                </Text>
                <Text style={styles.inputIconRight}>˅˅</Text>
              </TouchableOpacity>
              {showGradePicker && (
                <View style={styles.dropdownList}>
                  {GRADES.map(g => (
                    <TouchableOpacity
                      key={g}
                      style={[
                        styles.dropdownItem,
                        selectedGrade === g && styles.dropdownItemSelected,
                      ]}
                      onPress={() => {
                        setSelectedGrade(g);
                        setShowGradePicker(false);
                      }}>
                      <Text
                        style={[
                          styles.dropdownItemText,
                          selectedGrade === g && styles.dropdownItemTextSelected,
                        ]}>
                        {g}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>

            {/* Age */}
            <View style={styles.fieldGroup}>
              <Text style={styles.fieldLabel}>Age</Text>
              <View style={styles.inputRow}>
                <TextInput
                  style={styles.textInput}
                  placeholder="e.g. 12"
                  placeholderTextColor={Colors.inputPlaceholder}
                  value={age}
                  onChangeText={setAge}
                  keyboardType="number-pad"
                />
              </View>
            </View>

            {/* Gender Identity */}
            <View style={styles.fieldGroup}>
              <Text style={styles.fieldLabel}>Gender Identity</Text>
              <View style={styles.genderGrid}>
                {GENDERS.map(g => {
                  const isSelected = selectedGender === g;
                  return (
                    <TouchableOpacity
                      key={g}
                      style={[
                        styles.genderChip,
                        isSelected && styles.genderChipSelected,
                      ]}
                      onPress={() => setSelectedGender(g)}
                      activeOpacity={0.8}>
                      <Text
                        style={[
                          styles.genderChipText,
                          isSelected && styles.genderChipTextSelected,
                        ]}>
                        {g}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>

            {/* Date of Birth */}
            <View style={styles.fieldGroup}>
              <Text style={styles.fieldLabel}>Date of Birth</Text>
              <View style={styles.inputRow}>
                <TextInput
                  style={styles.textInput}
                  placeholder="dd-mm-yyyy"
                  placeholderTextColor={Colors.inputPlaceholder}
                  value={dateOfBirth}
                  onChangeText={setDateOfBirth}
                  keyboardType="numbers-and-punctuation"
                />
                <Text style={styles.inputIconRight}>📅</Text>
              </View>
            </View>

            {/* Email Address */}
            <View style={styles.fieldGroup}>
              <Text style={styles.fieldLabel}>Email Address</Text>
              <View style={styles.inputRow}>
                <TextInput
                  style={styles.textInput}
                  placeholder="alex@example.com"
                  placeholderTextColor={Colors.inputPlaceholder}
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
                <Text style={styles.inputIconRight}>✉️</Text>
              </View>
            </View>

            {/* Password */}
            <View style={styles.fieldGroup}>
              <Text style={styles.fieldLabel}>Password</Text>
              <View style={styles.inputRow}>
                <Text style={styles.inputIconLeft}>🔒</Text>
                <TextInput
                  style={[styles.textInput, styles.passwordInput]}
                  placeholder="••••••••"
                  placeholderTextColor={Colors.inputPlaceholder}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                  autoCorrect={false}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.eyeBtn}
                  activeOpacity={0.7}>
                  <Text style={styles.inputIconRight}>
                    {showPassword ? '🙈' : '👁️'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

          </View>

          {/* Continue button */}
          <TouchableOpacity
            style={[styles.continueBtn, !canContinue && styles.continueBtnDisabled]}
            onPress={handleContinue}
            disabled={!canContinue}
            activeOpacity={0.85}>
            <Text
              style={[
                styles.continueBtnText,
                !canContinue && styles.continueBtnTextDisabled,
              ]}>
              Continue  →
            </Text>
          </TouchableOpacity>

          {/* Privacy note */}
          <Text style={styles.privacyNote}>
            Your data is stored securely and locally.
          </Text>

          <View style={{ height: 16 }} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F0F4F2',
  },
  flex: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  // Phase + title
  phaseLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: Colors.primary,
    textAlign: 'center',
    letterSpacing: 1.5,
    marginBottom: 6,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: Colors.text,
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 21,
    marginBottom: 20,
  },

  // Progress
  progressTrack: {
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    marginBottom: 8,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: Colors.primaryDark,
    borderRadius: 4,
  },
  stepLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.text,
    textAlign: 'center',
    marginBottom: 24,
  },

  // Card
  card: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 10,
    elevation: 3,
  },

  // Field group
  fieldGroup: {
    marginBottom: 16,
  },
  fieldLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 8,
  },

  // Input row (shared container for inputs)
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4F5F7',
    borderRadius: 10,
    minHeight: 54,
    paddingHorizontal: 14,
  },
  textInput: {
    flex: 1,
    fontSize: 15,
    color: Colors.text,
    paddingVertical: 14,
  },
  passwordInput: {
    letterSpacing: 2,
  },
  inputIconRight: {
    fontSize: 18,
    color: Colors.inputIcon,
    marginLeft: 8,
  },
  inputIconLeft: {
    fontSize: 18,
    color: Colors.inputIcon,
    marginRight: 10,
  },
  eyeBtn: {
    padding: 2,
  },

  // Dropdown
  dropdownText: {
    flex: 1,
    fontSize: 15,
    color: Colors.text,
    paddingVertical: 14,
  },
  dropdownPlaceholder: {
    color: Colors.inputPlaceholder,
  },
  dropdownList: {
    marginTop: 4,
    backgroundColor: Colors.white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.border,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
    maxHeight: 200,
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

  // Gender grid
  genderGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  genderChip: {
    width: (width - 40 - 32 - 8) / 2,
    minHeight: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: Colors.border,
    borderRadius: 22,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: Colors.white,
  },
  genderChipSelected: {
    borderColor: Colors.selectedBorder,
    backgroundColor: Colors.selectedBg,
  },
  genderChipText: {
    fontSize: 13,
    color: Colors.textSecondary,
    fontWeight: '500',
    textAlign: 'center',
  },
  genderChipTextSelected: {
    color: Colors.primaryDark,
    fontWeight: '700',
  },

  // Continue button
  continueBtn: {
    height: 58,
    backgroundColor: Colors.buttonPrimary,
    borderRadius: 29,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
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
    fontSize: 17,
    fontWeight: '700',
    color: Colors.buttonText,
    letterSpacing: 0.3,
  },
  continueBtnTextDisabled: {
    color: Colors.buttonDisabledText,
  },

  // Privacy note
  privacyNote: {
    fontSize: 12,
    color: Colors.textLight,
    textAlign: 'center',
  },
});
