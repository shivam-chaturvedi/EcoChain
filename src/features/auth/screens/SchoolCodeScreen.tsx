import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import { Colors } from '../../../constants';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SchoolCode'>;
};

const CODE_PATTERN = /^[A-Z0-9]{4}-[A-Z0-9]{4}$/;

function formatCode(raw: string): string {
  const clean = raw.replace(/[^A-Za-z0-9]/g, '').toUpperCase().slice(0, 8);
  if (clean.length <= 4) return clean;
  return `${clean.slice(0, 4)}-${clean.slice(4)}`;
}

export default function SchoolCodeScreen({ navigation }: Props) {
  const [code, setCode] = useState('');
  const isValid = CODE_PATTERN.test(code);

  const handleChangeText = (text: string) => {
    setCode(formatCode(text));
  };

  const handleVerify = () => {
    if (!isValid) return;
    navigation.navigate('InterestsSelectionScreen');
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <StatusBar barStyle="dark-content" backgroundColor={styles.safeArea.backgroundColor} />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>EcoSystem</Text>

        <View style={styles.xpBadge}>
          <View style={styles.xpCoinCircle}>
            <Text style={styles.xpCoinEmoji}>💲</Text>
          </View>
          <Text style={styles.xpText}>1,250 XP</Text>
        </View>
      </View>

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>

        <View style={styles.content}>

          {/* Icon */}
          <View style={styles.iconCircle}>
            <Text style={styles.iconEmoji}>🎓</Text>
          </View>

          {/* Title */}
          <Text style={styles.title}>Enter your School Code</Text>

          {/* Subtitle */}
          <Text style={styles.subtitle}>
            Access your school's unique environmental{'\n'}dashboard and challenges.
          </Text>

          {/* Code input */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>School Code</Text>
            <TextInput
              style={styles.codeInput}
              value={code}
              onChangeText={handleChangeText}
              placeholder="XXXX-XXXX"
              placeholderTextColor="#7ABEA2"
              autoCapitalize="characters"
              autoCorrect={false}
              keyboardType="default"
              textAlign="center"
              selectionColor={Colors.primary}
            />
          </View>

          <Text style={styles.helperText}>Ask your teacher if you don't have it.</Text>

          {/* Verify button */}
          <TouchableOpacity
            style={[styles.verifyBtn, !isValid && styles.verifyBtnMuted]}
            onPress={handleVerify}
            activeOpacity={0.85}>
            <Text style={styles.verifyBtnText}>Verify School</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>

      {/* Decorative bottom-right blob */}
      <View style={styles.decorBlob} pointerEvents="none" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F2F7F4',
  },
  flex: {
    flex: 1,
  },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backBtn: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backArrow: {
    fontSize: 22,
    color: Colors.primaryDark,
    fontWeight: '600',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.primaryDark,
  },
  xpBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingLeft: 4,
    paddingRight: 10,
    paddingVertical: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.border,
    gap: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  xpCoinCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.primaryDark,
    alignItems: 'center',
    justifyContent: 'center',
  },
  xpCoinEmoji: {
    fontSize: 12,
  },
  xpText: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.text,
  },

  // Content
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingBottom: 40,
  },

  // Icon circle
  iconCircle: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: '#D8EFEA',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 28,
  },
  iconEmoji: {
    fontSize: 34,
  },

  // Title + subtitle
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: Colors.text,
    textAlign: 'center',
    marginBottom: 14,
    lineHeight: 36,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 36,
  },

  // Code input
  inputContainer: {
    width: '100%',
    backgroundColor: Colors.white,
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 8,
    elevation: 3,
    marginBottom: 10,
  },
  inputLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: Colors.primary,
    letterSpacing: 0.4,
    marginBottom: 2,
  },
  codeInput: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.primary,
    letterSpacing: 6,
    paddingVertical: 10,
    textAlign: 'center',
  },

  helperText: {
    fontSize: 12,
    color: Colors.textLight,
    textAlign: 'center',
    marginBottom: 32,
  },

  // Verify button
  verifyBtn: {
    width: '100%',
    height: 56,
    backgroundColor: '#4A9B7A',
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#2D6A4F',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  verifyBtnMuted: {
    backgroundColor: '#7ABEA2',
    shadowOpacity: 0.1,
  },
  verifyBtnText: {
    fontSize: 17,
    fontWeight: '700',
    color: Colors.white,
    letterSpacing: 0.2,
  },

  // Decorative blob
  decorBlob: {
    position: 'absolute',
    bottom: -70,
    right: -70,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(168, 220, 186, 0.45)',
  },
});
