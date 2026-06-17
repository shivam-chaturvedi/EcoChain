import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Dimensions,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import { Colors } from '../../../constants';

const { width } = Dimensions.get('window');

type Role = 'student' | 'teacher' | 'school';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'RoleSelection'>;
};

const ROLES: {
  id: Role;
  emoji: string;
  name: string;
  description: string;
}[] = [
  {
    id: 'student',
    emoji: '📅',
    name: 'Student',
    description: 'Learn, earn rewards, and compete with friends.',
  },
  {
    id: 'teacher',
    emoji: '📋',
    name: 'Teacher',
    description: 'Manage classes and track environmental progress.',
  },
  {
    id: 'school',
    emoji: '🏢',
    name: 'School',
    description: 'Oversee your entire campus sustainability data.',
  },
];

const AVATAR_COLORS = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'];

export default function RoleSelectionScreen({ navigation }: Props) {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);

  const handleContinue = () => {
    if (!selectedRole) return;
    if (selectedRole === 'school') {
      navigation.navigate('SchoolRegistration');
    } else if (selectedRole === 'student') {
      navigation.navigate('PersonalIdentity');
    } else if (selectedRole === 'teacher') {
      navigation.navigate('TeacherLanding');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.brandName}>EcoChain</Text>
        <View style={styles.levelBadge}>
          <Text style={styles.levelIcon}>🌱</Text>
          <Text style={styles.levelText}>Lvl 1 Pioneer</Text>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>

        {/* Title */}
        <Text style={styles.title}>Choose your role</Text>
        <Text style={styles.subtitle}>
          Select how you'll be participating in the{' '}
          <Text style={styles.subtitleHighlight}>EcoSystem</Text> to personalize
          your experience.
        </Text>

        {/* Role cards */}
        <View style={styles.roleList}>
          {ROLES.map(role => {
            const isSelected = selectedRole === role.id;
            return (
              <TouchableOpacity
                key={role.id}
                style={[styles.roleCard, isSelected && styles.roleCardSelected]}
                onPress={() => setSelectedRole(role.id)}
                activeOpacity={0.8}>
                <View style={[styles.iconCircle, isSelected && styles.iconCircleSelected]}>
                  <Text style={styles.roleEmoji}>{role.emoji}</Text>
                </View>
                <Text style={[styles.roleName, isSelected && styles.roleNameSelected]}>
                  {role.name}
                </Text>
                <Text style={styles.roleDesc}>{role.description}</Text>
                {isSelected && <View style={styles.selectedDot} />}
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Community banner */}
        <View style={styles.communityCard}>
          {/* Scenic background layer */}
          <View style={styles.communityBgTop} />
          <View style={styles.communityBgBottom} />

          <View style={styles.communityContent}>
            {/* Stacked avatars */}
            <View style={styles.avatarStack}>
              {AVATAR_COLORS.map((color, i) => (
                <View
                  key={i}
                  style={[
                    styles.avatar,
                    { backgroundColor: color, marginLeft: i === 0 ? 0 : -10 },
                  ]}>
                  <Text style={styles.avatarEmoji}>👤</Text>
                </View>
              ))}
            </View>

            {/* Text */}
            <View style={styles.communityText}>
              <Text style={styles.communityCount}>Join 18,460+</Text>
              <Text style={styles.communitySubtext}>members saving the planet</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Continue button */}
      <View style={styles.bottomArea}>
        <TouchableOpacity
          style={[styles.continueBtn, !selectedRole && styles.continueBtnDisabled]}
          onPress={handleContinue}
          disabled={!selectedRole}
          activeOpacity={0.85}>
          <Text
            style={[
              styles.continueBtnText,
              !selectedRole && styles.continueBtnTextDisabled,
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
  brandName: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.text,
  },
  levelBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#22C55E',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    gap: 4,
  },
  levelIcon: {
    fontSize: 13,
  },
  levelText: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.white,
  },

  // Scroll
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 12,
  },

  // Title
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 21,
    marginBottom: 24,
  },
  subtitleHighlight: {
    color: Colors.primary,
    fontWeight: '600',
  },

  // Role list
  roleList: {
    gap: 12,
    marginBottom: 16,
  },

  // Role card
  roleCard: {
    backgroundColor: Colors.white,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: Colors.border,
    paddingVertical: 18,
    paddingHorizontal: 16,
    alignItems: 'center',
    shadowColor: Colors.cardShadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  roleCardSelected: {
    borderColor: Colors.selectedBorder,
    backgroundColor: Colors.selectedBg,
    shadowOpacity: 0.1,
    elevation: 4,
  },
  iconCircle: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: '#E8F5ED',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  iconCircleSelected: {
    backgroundColor: '#C8EDDA',
  },
  roleEmoji: {
    fontSize: 28,
  },
  roleName: {
    fontSize: 17,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 4,
  },
  roleNameSelected: {
    color: Colors.primaryDark,
  },
  roleDesc: {
    fontSize: 13,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 19,
  },
  selectedDot: {
    position: 'absolute',
    top: 14,
    right: 14,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.primaryDark,
  },

  // Community banner
  communityCard: {
    borderRadius: 16,
    overflow: 'hidden',
    height: 88,
    marginBottom: 4,
    position: 'relative',
    justifyContent: 'center',
  },
  communityBgTop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#1A3D2E',
  },
  communityBgBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 44,
    backgroundColor: '#0D2218',
    opacity: 0.7,
  },
  communityContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 12,
  },
  avatarStack: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Colors.white,
  },
  avatarEmoji: {
    fontSize: 14,
  },
  communityText: {
    flex: 1,
  },
  communityCount: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.white,
  },
  communitySubtext: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 2,
  },

  // Bottom
  bottomArea: {
    paddingHorizontal: 16,
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
