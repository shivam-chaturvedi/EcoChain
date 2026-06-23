import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'AdminProfileSetup'>;
};

export default function AdminProfileSetupScreen({ navigation }: Props) {
  const [fullName, setFullName] = useState('');
  const [position, setPosition] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [showRolePicker, setShowRolePicker] = useState(false);

  const ROLES = [
    'Principal',
    'Sustainability Lead',
    'IT Administrator',
    'Department Head',
    'Other Professional',
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Icon name="eco" size={24} color="#006c49" />
          <Text style={styles.logoText}>ChonX</Text>
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.headerLink}>Support</Text>
          <Text style={styles.headerLink}>FAQ</Text>
        </View>
      </View>

      <KeyboardAvoidingView
        style={styles.kavFlex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {/* Progress Module */}
          <View style={styles.progressSection}>
            <View style={styles.progressRow}>
              <Text style={styles.title}>Admin Profile Setup</Text>
              <Text style={styles.progressPercent}>50%</Text>
            </View>
            <View style={styles.progressTrack}>
              <View style={styles.progressFill} />
            </View>
          </View>

          {/* Registration Card */}
          <View style={styles.card}>
            {/* Full Name */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Full Name</Text>
              <View style={styles.inputContainer}>
                <Icon name="person" size={20} color="#6c7a71" style={styles.inputIcon} />
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter your full name"
                  placeholderTextColor="rgba(108, 122, 113, 0.6)"
                  value={fullName}
                  onChangeText={setFullName}
                />
              </View>
            </View>

            {/* Position / Role */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Position / Role</Text>
              <TouchableOpacity
                style={styles.inputContainer}
                activeOpacity={0.8}
                onPress={() => setShowRolePicker(!showRolePicker)}
              >
                <Icon name="assignment-ind" size={20} color="#6c7a71" style={styles.inputIcon} />
                <Text style={[styles.textInput, !position && styles.placeholderText]}>
                  {position || 'Select your position'}
                </Text>
                <Icon name="expand-more" size={20} color="#6c7a71" />
              </TouchableOpacity>
              {showRolePicker && (
                <View style={styles.dropdown}>
                  {ROLES.map((role) => (
                    <TouchableOpacity
                      key={role}
                      style={styles.dropdownItem}
                      onPress={() => {
                        setPosition(role);
                        setShowRolePicker(false);
                      }}
                    >
                      <Text style={styles.dropdownText}>{role}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>

            {/* Email and Phone */}
            <View style={styles.rowInputs}>
              <View style={[styles.inputGroup, styles.halfWidth]}>
                <Text style={styles.label}>Work Email</Text>
                <View style={styles.inputContainer}>
                  <Icon name="mail" size={20} color="#6c7a71" style={styles.inputIcon} />
                  <TextInput
                    style={styles.textInput}
                    placeholder="admin@school.edu"
                    placeholderTextColor="rgba(108, 122, 113, 0.6)"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                </View>
              </View>

              <View style={[styles.inputGroup, styles.halfWidth]}>
                <Text style={styles.label}>Phone Number</Text>
                <View style={styles.inputContainer}>
                  <Icon name="call" size={20} color="#6c7a71" style={styles.inputIcon} />
                  <TextInput
                    style={styles.textInput}
                    placeholder="+1 (555) 000-0000"
                    placeholderTextColor="rgba(108, 122, 113, 0.6)"
                    value={phone}
                    onChangeText={setPhone}
                    keyboardType="phone-pad"
                  />
                </View>
              </View>
            </View>

            {/* Guidance Note */}
            <View style={styles.infoBox}>
              <Icon name="info" size={20} color="#4edea3" style={styles.infoIcon} />
              <Text style={styles.infoText}>
                Your profile details will be used for account verification and critical school-wide environmental milestone alerts.
              </Text>
            </View>

            {/* Actions */}
            <View style={styles.actionRow}>
              <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
                <Icon name="arrow-back" size={18} color="#3c4a42" />
                <Text style={styles.backBtnText}>Back</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.nextBtn}>
                <Text style={styles.nextBtnText}>Next Step</Text>
                <Icon name="arrow-forward" size={20} color="#00422b" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Decorative Context Image */}
          <View style={styles.imageContainer}>
            <ImageBackground
              source={{
                uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJVQRKK4WJqSGQnMm7QHODDVQ3MvVL9UmTdosN8mFs-H9BAB-hywJKqAAp-n1Tq1NSg2hEt0LGyc-Hw3QswrIP83lgzM4vsgVrlQG9wGm4zBMatB95krkgGgrfl1wIzlPU7oHDatal_1a7atYvlkj1UQSJkUhpxc1qmhBvL9FdtsHYmR9eFvVyRAVsKplKbd0cZE21LT2G7v1UHuOgAu85dOLmdR386Z2z-gxww4rJgv-9L4JjzEAbGZzJBlqdCZ1WFkVQOm-6d2sM',
              }}
              style={styles.imageBg}
              imageStyle={{ borderRadius: 12 }}
            >
              <View style={styles.imageOverlay}>
                <Text style={styles.imageText}>
                  Join over 1,200 sustainability leads driving change in their school communities.
                </Text>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  kavFlex: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    height: 80,
    backgroundColor: 'rgba(248, 249, 250, 0.8)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(187, 202, 191, 0.3)',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 24,
    fontWeight: '800',
    color: '#006c49',
    marginLeft: 8,
    letterSpacing: -0.5,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  headerLink: {
    fontSize: 12,
    fontWeight: '700',
    color: '#3c4a42',
    letterSpacing: 0.5,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 64,
  },
  progressSection: {
    marginBottom: 32,
  },
  progressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#191c1d',
    letterSpacing: -0.5,
  },
  progressPercent: {
    fontSize: 28,
    fontWeight: '700',
    color: '#006c49',
  },
  progressTrack: {
    height: 12,
    backgroundColor: 'rgba(187, 202, 191, 0.2)',
    borderRadius: 6,
    overflow: 'hidden',
  },
  progressFill: {
    width: '50%',
    height: '100%',
    backgroundColor: '#10b981',
    borderRadius: 6,
    shadowColor: '#10b981',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    padding: 32,
    borderWidth: 1,
    borderColor: 'rgba(229, 231, 235, 0.5)',
    marginBottom: 40,
  },
  inputGroup: {
    marginBottom: 24,
  },
  label: {
    fontSize: 12,
    fontWeight: '700',
    color: '#3c4a42',
    letterSpacing: 0.5,
    marginBottom: 8,
    marginLeft: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f4f5',
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 56,
  },
  inputIcon: {
    marginRight: 12,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#191c1d',
    paddingVertical: 12, // For correct vertical alignment
  },
  placeholderText: {
    color: 'rgba(108, 122, 113, 0.6)',
  },
  dropdown: {
    marginTop: 8,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(229, 231, 235, 0.5)',
    overflow: 'hidden',
  },
  dropdownItem: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(229, 231, 235, 0.5)',
  },
  dropdownText: {
    fontSize: 16,
    color: '#191c1d',
  },
  rowInputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfWidth: {
    width: '48%',
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(111, 251, 190, 0.2)',
    padding: 24,
    borderRadius: 16,
    marginTop: 16,
    marginBottom: 32,
  },
  infoIcon: {
    marginTop: 2,
    marginRight: 12,
  },
  infoText: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
    color: 'rgba(0, 66, 43, 0.8)',
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  backBtnText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#3c4a42',
    letterSpacing: 0.5,
    marginLeft: 4,
    textTransform: 'uppercase',
  },
  nextBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#10b981',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 32,
    shadowColor: '#10b981',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  nextBtnText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#00422b',
    marginRight: 12,
  },
  imageContainer: {
    height: 192,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  imageBg: {
    width: '100%',
    height: '100%',
  },
  imageOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 12,
    justifyContent: 'flex-end',
    padding: 24,
  },
  imageText: {
    fontSize: 16,
    color: '#ffffff',
    maxWidth: 280,
    lineHeight: 24,
  },
});
