import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  Clipboard,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import { Colors } from '../../../constants';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SchoolCodeGeneration'>;
};

export default function SchoolCodeGenerationScreen({ navigation }: Props) {
  const [schoolCode, setSchoolCode] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    setSchoolCode('CHX-UAE-GREEN123');
    setCopied(false);
  };

  const handleCopy = () => {
    if (schoolCode) {
      Clipboard.setString(schoolCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
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

        {/* Icon + Title */}
        <View style={styles.heroSection}>
          <View style={styles.iconCircle}>
            <Text style={styles.iconEmoji}>🎓</Text>
          </View>
          <Text style={styles.title}>Generate your{'\n'}School Code</Text>
          <Text style={styles.subtitle}>
            This unique identifier connects your institution's environmental
            impact data across the EcoChain ecosystem.
          </Text>
        </View>

        {/* Code Display */}
        {schoolCode ? (
          <View style={styles.codeCard}>
            <Text style={styles.codeLabel}>YOUR SCHOOL CODE</Text>
            <Text style={styles.codeText}>{schoolCode}</Text>
            <View style={styles.codeActions}>
              <TouchableOpacity style={styles.actionBtn} onPress={handleGenerate}>
                <Text style={styles.actionIcon}>↻</Text>
                <Text style={styles.actionBtnText}>Regenerate</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.actionBtn, styles.copyBtn]}
                onPress={handleCopy}>
                <Text style={styles.actionIcon}>📋</Text>
                <Text style={[styles.actionBtnText, styles.copyBtnText]}>
                  {copied ? 'Copied!' : 'Copy'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <TouchableOpacity
            style={styles.generateBtn}
            onPress={handleGenerate}
            activeOpacity={0.85}>
            <Text style={styles.generateBtnText}>Generate Code ✨</Text>
          </TouchableOpacity>
        )}

        {/* Info box */}
        <View style={styles.infoBox}>
          <Text style={styles.infoIcon}>ℹ️</Text>
          <Text style={styles.infoText}>
            Share this code with teachers and students during onboarding
            through secure school channels only.
          </Text>
        </View>

        {/* Continue button (after code generated) */}
        {schoolCode && (
          <TouchableOpacity
            style={styles.continueBtn}
            onPress={() => navigation.navigate('StudentStructure')}
            activeOpacity={0.85}>
            <Text style={styles.continueBtnText}>Continue  →</Text>
          </TouchableOpacity>
        )}

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

  // Scroll
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 36,
    paddingBottom: 32,
    alignItems: 'center',
  },

  // Hero
  heroSection: {
    alignItems: 'center',
    marginBottom: 32,
    width: '100%',
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E8F5ED',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#C8EDDA',
  },
  iconEmoji: {
    fontSize: 36,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#002B36',
    textAlign: 'center',
    lineHeight: 36,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: 8,
  },

  // Generate button (before code is generated)
  generateBtn: {
    height: 56,
    backgroundColor: '#10B981',
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 24,
    shadowColor: '#10B981',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
  },
  generateBtnText: {
    color: Colors.white,
    fontWeight: '700',
    fontSize: 16,
    letterSpacing: 0.3,
  },

  // Code card (after code generated)
  codeCard: {
    width: '100%',
    backgroundColor: '#F0FDF4',
    borderWidth: 2,
    borderColor: '#86EFAC',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    marginBottom: 24,
  },
  codeLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: '#059669',
    letterSpacing: 1.5,
    marginBottom: 10,
  },
  codeText: {
    fontSize: 26,
    fontWeight: '900',
    color: '#064E3B',
    letterSpacing: 4,
    marginBottom: 20,
  },
  codeActions: {
    flexDirection: 'row',
    gap: 12,
    width: '100%',
  },
  actionBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    backgroundColor: Colors.white,
    borderWidth: 1.5,
    borderColor: '#D1FAE5',
    borderRadius: 12,
    gap: 6,
  },
  copyBtn: {
    backgroundColor: '#10B981',
    borderColor: '#10B981',
  },
  actionIcon: {
    fontSize: 14,
  },
  actionBtnText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#059669',
  },
  copyBtnText: {
    color: Colors.white,
  },

  // Info box
  infoBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#F8FAFC',
    borderRadius: 14,
    padding: 16,
    width: '100%',
    marginBottom: 28,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  infoIcon: {
    fontSize: 14,
    marginRight: 10,
    marginTop: 1,
  },
  infoText: {
    flex: 1,
    fontSize: 12,
    color: Colors.textSecondary,
    lineHeight: 18,
  },

  // Continue button
  continueBtn: {
    height: 56,
    backgroundColor: Colors.primaryDark,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    shadowColor: Colors.primaryDark,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  continueBtnText: {
    color: Colors.white,
    fontWeight: '700',
    fontSize: 16,
    letterSpacing: 0.3,
  },
});
