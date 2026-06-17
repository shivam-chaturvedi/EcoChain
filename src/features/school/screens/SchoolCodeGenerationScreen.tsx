import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import { Colors } from '../../../constants';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SchoolCodeGeneration'>;
};

export default function SchoolCodeGenerationScreen({ navigation }: Props) {
  const [schoolCode, setSchoolCode] = useState<string | null>(null);

  const handleGenerate = () => {
    setSchoolCode('CHX-UAE-GREEN123');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.surface} />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.brandRow}>
          <Text style={styles.brandIconEmoji}>🌿</Text>
          <Text style={styles.brandName}>ChonX</Text>
        </View>
        <TouchableOpacity style={styles.menuBtn}>
          <Text style={styles.menuIcon}>≡</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>

        <View style={styles.card}>
          {/* Top Icon */}
          <View style={styles.iconCircle}>
            <Text style={styles.iconEmoji}>🎓</Text>
          </View>

          {/* Texts */}
          <Text style={styles.title}>Generate your{'\n'}School Code</Text>
          <Text style={styles.subtitle}>
            This unique identifier connects your institution's environmental impact data across the ChonX ecosystem.
          </Text>

          {/* Generate Button */}
          <TouchableOpacity
            style={styles.generateBtn}
            onPress={handleGenerate}
            activeOpacity={0.8}>
            <Text style={styles.generateBtnText}>Generate Code ✨</Text>
          </TouchableOpacity>

          {schoolCode && (
            <TouchableOpacity
              style={styles.continueBtn}
              onPress={() => navigation.navigate('StudentStructure')}
              activeOpacity={0.8}>
              <Text style={styles.continueBtnText}>Continue →</Text>
            </TouchableOpacity>
          )}

          {/* Generated Code Display */}
          {schoolCode ? (
            <View style={styles.codeContainer}>
              <Text style={styles.codeText}>{schoolCode}</Text>
              <View style={styles.codeActions}>
                <TouchableOpacity style={styles.actionBtn}>
                  <Text style={styles.actionIcon}>↻</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionBtn}>
                  <Text style={styles.actionIcon}>📄</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View style={[styles.codeContainer, styles.codeContainerEmpty]} />
          )}

          {/* Info Text */}
          <View style={styles.infoRow}>
            <Text style={styles.infoIcon}>ℹ️</Text>
            <Text style={styles.infoText}>
              This code will be used by teachers & students during onboarding. Ensure it's shared through secure school channels.
            </Text>
          </View>

          {/* Bottom Banner */}
          <View style={styles.bannerContainer}>
            <View style={styles.bannerPlaceholder} />
          </View>
        </View>

        <View style={styles.bottomPad} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1C1C1E', // Dark background around the card
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: Colors.white,
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
  menuBtn: {
    padding: 4,
  },
  menuIcon: {
    fontSize: 24,
    color: Colors.text,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#E8F5ED',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  iconEmoji: {
    fontSize: 28,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#002B36',
    textAlign: 'center',
    lineHeight: 32,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 24,
    paddingHorizontal: 10,
  },
  generateBtn: {
    backgroundColor: '#10B981',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    width: '80%',
    shadowColor: '#10B981',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  generateBtnText: {
    color: Colors.white,
    fontWeight: '700',
    fontSize: 16,
  },
  continueBtn: {
    backgroundColor: Colors.primaryDark,
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 30,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  continueBtnText: {
    color: Colors.white,
    fontWeight: '700',
    fontSize: 16,
  },
  codeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F3F4F6',
    borderWidth: 1.5,
    borderColor: '#E5E7EB',
    borderRadius: 16,
    borderStyle: 'dashed',
    padding: 16,
    width: '100%',
    marginBottom: 20,
    minHeight: 70,
  },
  codeContainerEmpty: {
    borderColor: 'transparent',
    backgroundColor: 'transparent',
  },
  codeText: {
    fontSize: 20,
    fontWeight: '800',
    color: Colors.primaryDark,
    letterSpacing: 2,
    flex: 1,
  },
  codeActions: {
    flexDirection: 'row',
    gap: 12,
  },
  actionBtn: {
    padding: 4,
  },
  actionIcon: {
    fontSize: 20,
    color: Colors.primaryDark,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  infoIcon: {
    fontSize: 14,
    marginRight: 8,
    marginTop: 2,
  },
  infoText: {
    flex: 1,
    fontSize: 11,
    color: Colors.textSecondary,
    lineHeight: 16,
  },
  bannerContainer: {
    width: '100%',
    height: 100,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#E5E7EB',
  },
  bannerPlaceholder: {
    flex: 1,
    opacity: 0.5,
  },
  bottomPad: {
    height: 40,
  },
});
