import React from 'react';
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
  navigation: NativeStackNavigationProp<RootStackParamList, 'OnboardingComplete'>;
};

export default function OnboardingCompleteScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F4FBF7" />
      
      {/* Container simulating the confetti background */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>

        {/* Top Check Icon */}
        <View style={styles.topIconCircle}>
          <Text style={styles.topIconText}>✓</Text>
        </View>

        <Text style={styles.title}>Your Eco-Ecosystem{'\n'}is Ready!</Text>
        <Text style={styles.subtitle}>
          The seeds of sustainability have been sown.
        </Text>

        <View style={styles.card}>
          {/* Admin Info */}
          <View style={styles.adminRow}>
            <View style={styles.avatarCircle}>
              {/* Mock avatar */}
              <Text style={styles.avatarEmoji}>👩🏼</Text>
            </View>
            <View style={styles.adminTexts}>
              <Text style={styles.fieldLabel}>ADMINISTRATOR</Text>
              <Text style={styles.adminName}>Sarah Sterling</Text>
            </View>
          </View>

          {/* Institution Info */}
          <View style={styles.infoBox}>
            <Text style={styles.fieldLabel}>INSTITUTION</Text>
            <Text style={styles.infoValue}>Greenwood{'\n'}Academy</Text>
          </View>

          {/* School Code */}
          <View style={styles.infoBox}>
            <Text style={styles.fieldLabel}>SCHOOL CODE</Text>
            <Text style={styles.codeValue}>GRNW-2024</Text>
            <TouchableOpacity style={styles.copyRow}>
              <Text style={styles.copyIcon}>📄</Text>
              <Text style={styles.copyText}>COPY CODE</Text>
            </TouchableOpacity>
          </View>

          {/* Initial Eco-Status */}
          <View style={styles.statusRow}>
            <View style={styles.statusLeft}>
              <Text style={styles.statusIcon}>🌱</Text>
              <Text style={styles.statusLabel}>Initial Eco-{'\n'}Status</Text>
            </View>
            <View style={styles.statusBadge}>
              <Text style={styles.statusBadgeText}>SEEDLING{'\n'}LEVEL</Text>
            </View>
          </View>
          <View style={styles.progressBarBg}>
            <View style={styles.progressBarFill} />
          </View>
        </View>

        {/* Enter Dashboard Button */}
        <TouchableOpacity 
          style={styles.enterBtn}
          onPress={() => navigation.navigate('AcademyOverview')}
          activeOpacity={0.85}>
          <Text style={styles.enterBtnText}>Enter{'\n'}Dashboard</Text>
          <Text style={styles.enterBtnArrow}>→</Text>
        </TouchableOpacity>

        {/* Footer Text */}
        <View style={styles.footerRow}>
          <Text style={styles.footerIcon}>🔒</Text>
          <View>
            <Text style={styles.footerSubText}>SECURE CLOUD DEPLOYMENT</Text>
            <Text style={styles.footerMainText}>ONBOARDING COMPLETE</Text>
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
    backgroundColor: '#F4FBF7', // Very light green background
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 60,
    alignItems: 'center',
  },
  topIconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#6EE7B7', // Vibrant green
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    shadowColor: '#6EE7B7',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 4,
  },
  topIconText: {
    fontSize: 28,
    color: '#064E3B',
    fontWeight: '900',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#002B36',
    textAlign: 'center',
    lineHeight: 34,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    color: '#475569',
    textAlign: 'center',
    marginBottom: 32,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 24,
    padding: 24,
    width: '100%',
    shadowColor: Colors.cardShadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
    elevation: 2,
    marginBottom: 32,
  },
  adminRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  avatarCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E2E8F0',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  avatarEmoji: {
    fontSize: 28,
  },
  adminTexts: {
    flex: 1,
  },
  fieldLabel: {
    fontSize: 9,
    fontWeight: '800',
    color: '#94A3B8',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  adminName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E293B',
  },
  infoBox: {
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  infoValue: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F766E', // Teal color for academy name
    lineHeight: 22,
  },
  codeValue: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0F766E',
    letterSpacing: 1,
    marginBottom: 8,
  },
  copyRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  copyIcon: {
    fontSize: 12,
    color: '#059669',
    marginRight: 4,
  },
  copyText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#059669',
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 12,
  },
  statusLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  statusLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1E293B',
    lineHeight: 16,
  },
  statusBadge: {
    backgroundColor: '#6EE7B7',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  statusBadgeText: {
    fontSize: 8,
    fontWeight: '800',
    color: '#064E3B',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  progressBarBg: {
    height: 6,
    backgroundColor: '#E2E8F0',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#0F766E',
    width: '15%',
    borderRadius: 3,
  },
  enterBtn: {
    backgroundColor: '#004D40',
    width: '100%',
    height: 64,
    borderRadius: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
    shadowColor: '#004D40',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  enterBtnText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '800',
    textAlign: 'center',
    marginRight: 12,
    lineHeight: 20,
  },
  enterBtnArrow: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '800',
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 0.6,
  },
  footerIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  footerSubText: {
    fontSize: 8,
    fontWeight: '700',
    color: '#64748B',
    letterSpacing: 0.5,
  },
  footerMainText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#475569',
    letterSpacing: 0.5,
  },
  bottomPad: {
    height: 40,
  },
});
