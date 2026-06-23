import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

type Role = 'student' | 'teacher' | 'school' | null;

export default function RoleSelectionScreen({ navigation }: any) {
  const [selectedRole, setSelectedRole] = useState<Role>(null);

  const getButtonColors = () => {
    switch (selectedRole) {
      case 'student':
        return ['#006c49', '#10b981'];
      case 'teacher':
        return ['#006b5f', '#6df5e1'];
      case 'school':
        return ['#005ac2', '#71a1ff'];
      default:
        return ['#e1e3e4', '#e1e3e4'];
    }
  };

  const handleContinue = () => {
    if (selectedRole) {
      navigation.navigate('LoginScreen');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Top Nav */}
      <View style={styles.header}>
        <Text style={styles.logoText}>ChonX</Text>
        <View style={styles.levelBadge}>
          <Icon name="eco" size={16} color="#006c49" />
          <Text style={styles.levelText}>Lvl 1 Pioneer</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.title}>Choose your role</Text>
          <Text style={styles.subtitle}>
            Select how you'll be participating in the EcoSystem to personalize your experience.
          </Text>
        </View>

        {/* Roles Grid */}
        <View style={styles.rolesGrid}>
          {/* Student */}
          <TouchableOpacity
            style={[
              styles.roleCard,
              selectedRole === 'student' && styles.roleCardActiveStudent,
            ]}
            onPress={() => setSelectedRole('student')}
            activeOpacity={0.8}
          >
            <View style={[styles.iconCircle, { backgroundColor: 'rgba(16, 185, 129, 0.1)' }]}>
              <Icon name="backpack" size={32} color="#006c49" />
            </View>
            <View style={styles.roleTextContainer}>
              <Text style={[styles.roleTitle, { color: '#006c49' }]}>Student</Text>
              <Text style={styles.roleDesc}>Learn, earn rewards, and compete with friends.</Text>
            </View>
            {selectedRole === 'student' && (
              <Icon name="check-circle" size={24} color="#006c49" style={styles.checkIcon} />
            )}
          </TouchableOpacity>

          {/* Teacher */}
          <TouchableOpacity
            style={[
              styles.roleCard,
              selectedRole === 'teacher' && styles.roleCardActiveTeacher,
            ]}
            onPress={() => setSelectedRole('teacher')}
            activeOpacity={0.8}
          >
            <View style={[styles.iconCircle, { backgroundColor: 'rgba(109, 245, 225, 0.2)' }]}>
              <Icon name="assignment" size={32} color="#006b5f" />
            </View>
            <View style={styles.roleTextContainer}>
              <Text style={[styles.roleTitle, { color: '#006b5f' }]}>Teacher</Text>
              <Text style={styles.roleDesc}>Manage classes and track environmental progress.</Text>
            </View>
            {selectedRole === 'teacher' && (
              <Icon name="check-circle" size={24} color="#006b5f" style={styles.checkIcon} />
            )}
          </TouchableOpacity>

          {/* School */}
          <TouchableOpacity
            style={[
              styles.roleCard,
              selectedRole === 'school' && styles.roleCardActiveSchool,
            ]}
            onPress={() => setSelectedRole('school')}
            activeOpacity={0.8}
          >
            <View style={[styles.iconCircle, { backgroundColor: 'rgba(113, 161, 255, 0.1)' }]}>
              <Icon name="domain" size={32} color="#005ac2" />
            </View>
            <View style={styles.roleTextContainer}>
              <Text style={[styles.roleTitle, { color: '#005ac2' }]}>School</Text>
              <Text style={styles.roleDesc}>Oversee your entire campus sustainability data.</Text>
            </View>
            {selectedRole === 'school' && (
              <Icon name="check-circle" size={24} color="#005ac2" style={styles.checkIcon} />
            )}
          </TouchableOpacity>
        </View>

        {/* Visual Context */}
        <View style={styles.contextContainer}>
          <Image
            source={{
              uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByzETJGvogWA1T-_tUHZwIjxu498wfCmCRC67M3b8AEqP5HNtDWBFq1MYwRFhGhkPsmZMJJl8cpr_PULl-QdgBfpwZOil1Iejm7HCYTJF083GV0hf_RaUvEWAvcC47C0KRwyAvoCvaxW52P9VLQPP_1WS05DciB_EgK1i0ex3MHqEZsGelZ-j2lKjKi3ey0A2rXZ5pWlBl4V8zARkzcvmN33_KkJObC1eY9tgSXIeT46mwE3kqCVvqOXiBbrSXlQpmml7hFkrz1-Ht',
            }}
            style={styles.contextImage}
          />
          <LinearGradient
            colors={['transparent', 'rgba(248, 249, 250, 0.9)']}
            style={styles.contextGradient}
          >
            <Text style={styles.contextText}>Join 12,400+ members saving the planet</Text>
          </LinearGradient>
        </View>

        {/* Action Button */}
        <TouchableOpacity
          onPress={handleContinue}
          disabled={!selectedRole}
          activeOpacity={0.8}
          style={styles.buttonWrapper}
        >
          <LinearGradient
            colors={getButtonColors()}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.actionButton}
          >
            <Text
              style={[
                styles.actionButtonText,
                { color: selectedRole ? '#ffffff' : '#3c4a42' },
              ]}
            >
              Continue
            </Text>
            <Icon name="arrow-forward" size={24} color={selectedRole ? '#ffffff' : '#3c4a42'} />
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(187, 202, 191, 0.2)',
  },
  logoText: {
    fontSize: 24,
    fontWeight: '800',
    color: '#006c49',
    letterSpacing: -0.5,
  },
  levelBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e7e8e9',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  levelText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#3c4a42',
    marginLeft: 4,
    textTransform: 'uppercase',
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 40,
    alignItems: 'center',
  },
  titleSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#191c1d',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#3c4a42',
    textAlign: 'center',
    maxWidth: 300,
    lineHeight: 24,
  },
  rolesGrid: {
    width: '100%',
    gap: 16,
    marginBottom: 40,
  },
  roleCard: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderWidth: 1,
    borderColor: 'rgba(229, 231, 235, 0.5)',
    borderRadius: 16,
    padding: 24,
  },
  roleCardActiveStudent: {
    borderWidth: 2,
    borderColor: '#006c49',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
  },
  roleCardActiveTeacher: {
    borderWidth: 2,
    borderColor: '#006b5f',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
  },
  roleCardActiveSchool: {
    borderWidth: 2,
    borderColor: '#005ac2',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
  },
  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  roleTextContainer: {
    alignItems: 'center',
  },
  roleTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 8,
  },
  roleDesc: {
    fontSize: 16,
    color: '#3c4a42',
    textAlign: 'center',
  },
  checkIcon: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  contextContainer: {
    width: '100%',
    height: 180,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 40,
  },
  contextImage: {
    width: '100%',
    height: '100%',
  },
  contextGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '50%',
    justifyContent: 'flex-end',
    padding: 24,
  },
  contextText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#3c4a42',
    textTransform: 'uppercase',
  },
  buttonWrapper: {
    width: '100%',
    maxWidth: 384,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    borderRadius: 28,
  },
  actionButtonText: {
    fontSize: 18,
    fontWeight: '700',
    marginRight: 8,
  },
});
