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
  ImageBackground,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import { Colors } from '../../../constants';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'AdminProfileSetup'>;
};

export default function AdminProfileSetupScreen({ navigation }: Props) {
  const [fullName, setFullName] = useState('');
  const [position, setPosition] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [showRolePicker, setShowRolePicker] = useState(false);

  const ROLES = ['Principal', 'Vice Principal', 'Sustainability Lead', 'IT Admin'];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.surface} />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.brandRow}>
          <Text style={styles.brandIconEmoji}>🌿</Text>
          <Text style={styles.brandName}>ChonX</Text>
        </View>
      </View>

      <KeyboardAvoidingView
        style={styles.kavFlex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">

          {/* Title & Progress */}
          <View style={styles.titleRow}>
            <Text style={styles.screenTitle}>Admin Profile{'\n'}Setup</Text>
            <Text style={styles.progressText}>50%</Text>
          </View>
          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: '50%' }]} />
          </View>

          {/* Form Card */}
          <View style={styles.card}>
            {/* Full Name */}
            <View style={styles.fieldGroup}>
              <Text style={styles.fieldLabel}>Full Name</Text>
              <View style={styles.inputContainer}>
                <Text style={styles.inputIcon}>👤</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter your full name"
                  placeholderTextColor={Colors.inputPlaceholder}
                  value={fullName}
                  onChangeText={setFullName}
                  autoCapitalize="words"
                />
              </View>
            </View>

            {/* Position / Role */}
            <View style={styles.fieldGroup}>
              <Text style={styles.fieldLabel}>Position / Role</Text>
              <TouchableOpacity
                style={styles.dropdownBtn}
                onPress={() => setShowRolePicker(!showRolePicker)}
                activeOpacity={0.8}>
                <View style={styles.dropdownLeft}>
                  <Text style={styles.inputIcon}>🆔</Text>
                  <Text style={[styles.dropdownText, !position && styles.dropdownPlaceholder]}>
                    {position || 'Select your position'}
                  </Text>
                </View>
                <Text style={styles.dropdownChevron}>{showRolePicker ? '∧' : '∨'}</Text>
              </TouchableOpacity>
              
              {showRolePicker && (
                <View style={styles.dropdownList}>
                  {ROLES.map(role => (
                    <TouchableOpacity
                      key={role}
                      style={[styles.dropdownItem, position === role && styles.dropdownItemSelected]}
                      onPress={() => {
                        setPosition(role);
                        setShowRolePicker(false);
                      }}>
                      <Text style={[styles.dropdownItemText, position === role && styles.dropdownItemTextSelected]}>
                        {role}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>

            {/* Work Email */}
            <View style={styles.fieldGroup}>
              <Text style={styles.fieldLabel}>Work Email</Text>
              <View style={styles.inputContainer}>
                <Text style={styles.inputIcon}>✉️</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="admin@school.edu"
                  placeholderTextColor={Colors.inputPlaceholder}
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
            </View>

            {/* Phone Number */}
            <View style={styles.fieldGroup}>
              <Text style={styles.fieldLabel}>Phone Number</Text>
              <View style={styles.inputContainer}>
                <Text style={styles.inputIcon}>📞</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="+1 (555) 000-0000"
                  placeholderTextColor={Colors.inputPlaceholder}
                  value={phone}
                  onChangeText={setPhone}
                  keyboardType="phone-pad"
                />
              </View>
            </View>

            {/* Info Box */}
            <View style={styles.infoBox}>
              <Text style={styles.infoIcon}>ℹ️</Text>
              <Text style={styles.infoText}>
                Your profile details will be used for account verification and critical school-wide environmental milestone alerts.
              </Text>
            </View>

            {/* Bottom Actions */}
            <View style={styles.actionRow}>
              <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
                <Text style={styles.backBtnText}>← Back</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.nextBtn}
                activeOpacity={0.85}>
                <Text style={styles.nextBtnText}>Next{'\n'}Step →</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Banner */}
          <View style={styles.bannerContainer}>
            <View style={styles.bannerImagePlaceholder}>
              <Text style={styles.bannerText}>
                Join over 1,200 sustainability leads driving change in their school communities.
              </Text>
            </View>
          </View>

          <View style={styles.bottomPad} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.surface,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  brandIconEmoji: {
    fontSize: 16,
    color: Colors.primaryDark,
  },
  brandName: {
    fontSize: 17,
    fontWeight: '700',
    color: Colors.primaryDark,
  },
  kavFlex: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 12,
  },
  screenTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#002B36',
    lineHeight: 34,
  },
  progressText: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.primaryDark,
    marginBottom: 4,
  },
  progressTrack: {
    height: 6,
    backgroundColor: '#E5E7EB',
    borderRadius: 3,
    marginBottom: 24,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#22C55E',
    borderRadius: 3,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 24,
    padding: 24,
    shadowColor: Colors.cardShadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 3,
    marginBottom: 24,
  },
  fieldGroup: {
    marginBottom: 20,
  },
  fieldLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#334155',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    paddingHorizontal: 16,
  },
  inputIcon: {
    fontSize: 16,
    marginRight: 12,
    opacity: 0.5,
  },
  textInput: {
    flex: 1,
    fontSize: 14,
    color: Colors.text,
    height: '100%',
  },
  dropdownBtn: {
    height: 52,
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dropdownLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdownText: {
    fontSize: 14,
    color: Colors.text,
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
    marginTop: 4,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 12,
    overflow: 'hidden',
  },
  dropdownItem: {
    paddingHorizontal: 16,
    paddingVertical: 14,
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
  infoBox: {
    flexDirection: 'row',
    backgroundColor: '#E8F5ED',
    padding: 16,
    borderRadius: 12,
    marginBottom: 24,
  },
  infoIcon: {
    fontSize: 16,
    marginRight: 10,
    marginTop: 2,
  },
  infoText: {
    flex: 1,
    fontSize: 12,
    color: Colors.primaryDark,
    lineHeight: 18,
    fontWeight: '500',
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backBtn: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  backBtnText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.textSecondary,
  },
  nextBtn: {
    backgroundColor: '#10B981',
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  nextBtnText: {
    color: Colors.white,
    fontWeight: '700',
    fontSize: 14,
    textAlign: 'center',
  },
  bannerContainer: {
    height: 140,
    borderRadius: 24,
    overflow: 'hidden',
  },
  bannerImagePlaceholder: {
    flex: 1,
    backgroundColor: '#86A789', // placeholder green to simulate the plant image
    justifyContent: 'flex-end',
    padding: 20,
  },
  bannerText: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  bottomPad: {
    height: 40,
  },
});
