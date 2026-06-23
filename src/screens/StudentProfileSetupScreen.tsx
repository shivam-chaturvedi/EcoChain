import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

export default function StudentProfileSetupScreen({ navigation }: any) {
  const [selectedGender, setSelectedGender] = useState('Prefer not to say');

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Ambient background simulations */}
      <View style={[styles.ambientBlur, styles.ambient1]} />
      <View style={[styles.ambientBlur, styles.ambient2]} />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.mainContainer}>
          <View style={styles.header}>
            <Text style={styles.phaseLabel}>SETUP • PHASE 01</Text>
            <Text style={styles.title}>Personal Identity</Text>
            <Text style={styles.subtitle}>Let's start with the basics to personalize your EcoSystem experience.</Text>
            
            <View style={styles.progressContainer}>
              <View style={styles.progressBarBg}>
                <View style={[styles.progressBarFill, { width: '33.33%' }]} />
              </View>
              <Text style={styles.stepText}>Step 1 of 3</Text>
            </View>
          </View>

          <View style={styles.card}>
            {/* Full Name */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Full Name</Text>
              <View style={styles.inputWrapper}>
                <TextInput style={styles.input} placeholder="Alex Thompson" placeholderTextColor="#6c7a71" />
                <Icon name="person" size={24} color="rgba(60, 74, 66, 0.3)" style={styles.inputIcon} />
              </View>
            </View>

            <View style={styles.rowGrid}>
              {/* Grade */}
              <View style={styles.inputGroupHalf}>
                <Text style={styles.label}>Grade</Text>
                <View style={styles.inputWrapper}>
                  <Text style={styles.pickerText}>Select Grade</Text>
                  <Icon name="expand-more" size={24} color="#3c4a42" style={styles.inputIcon} />
                </View>
              </View>

              {/* Age */}
              <View style={styles.inputGroupHalf}>
                <Text style={styles.label}>Age</Text>
                <TextInput style={styles.input} placeholder="e.g. 12" placeholderTextColor="#6c7a71" keyboardType="numeric" />
              </View>
            </View>

            {/* Gender */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Gender Identity</Text>
              <View style={styles.pillsContainer}>
                {['Female', 'Male', 'Non-binary', 'Prefer not to say'].map(gender => (
                  <TouchableOpacity 
                    key={gender} 
                    style={[styles.pill, selectedGender === gender && styles.pillActive]}
                    onPress={() => setSelectedGender(gender)}
                  >
                    <Text style={[styles.pillText, selectedGender === gender && styles.pillTextActive]}>{gender}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* DOB */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Date of Birth</Text>
              <View style={styles.inputWrapper}>
                <TextInput style={styles.input} placeholder="YYYY-MM-DD" placeholderTextColor="#6c7a71" />
                <Icon name="calendar-today" size={24} color="rgba(60, 74, 66, 0.3)" style={styles.inputIcon} />
              </View>
            </View>

            {/* Email */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email Address</Text>
              <View style={styles.inputWrapper}>
                <TextInput style={styles.input} placeholder="alex@example.com" placeholderTextColor="#6c7a71" keyboardType="email-address" />
                <Icon name="mail" size={24} color="rgba(60, 74, 66, 0.3)" style={styles.inputIcon} />
              </View>
            </View>

            {/* Password */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.inputWrapper}>
                <Icon name="lock" size={24} color="rgba(60, 74, 66, 0.3)" style={styles.inputIconLeft} />
                <TextInput style={[styles.input, { paddingLeft: 48 }]} placeholder="••••••••" placeholderTextColor="#6c7a71" secureTextEntry />
                <Icon name="visibility" size={24} color="#3c4a42" style={styles.inputIcon} />
              </View>
            </View>
          </View>

          <View style={styles.footer}>
            <TouchableOpacity style={styles.continueBtn}>
              <LinearGradient colors={['#006c49', '#006b5f']} style={styles.continueBtnGradient}>
                <Text style={styles.continueBtnText}>Continue</Text>
                <Icon name="arrow-forward" size={24} color="#fff" />
              </LinearGradient>
            </TouchableOpacity>
            <Text style={styles.footerText}>Your data is stored securely and locally.</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  ambientBlur: { position: 'absolute', borderRadius: 200, opacity: 0.4 },
  ambient1: { width: 400, height: 400, backgroundColor: '#10b981', top: -100, left: -100 },
  ambient2: { width: 300, height: 300, backgroundColor: '#6df5e1', bottom: 0, right: -50 },
  scrollContent: { paddingVertical: 64, paddingHorizontal: 24, alignItems: 'center' },
  mainContainer: { width: '100%', maxWidth: 600, gap: 40 },
  header: { alignItems: 'center', gap: 12 },
  phaseLabel: { fontSize: 12, fontWeight: '700', color: '#006c49', letterSpacing: 1 },
  title: { fontSize: 32, fontWeight: '700', color: '#191c1d', textAlign: 'center' },
  subtitle: { fontSize: 16, color: '#3c4a42', textAlign: 'center', maxWidth: 300 },
  progressContainer: { width: '100%', alignItems: 'center', gap: 8, marginTop: 16 },
  progressBarBg: { width: '100%', height: 12, backgroundColor: '#edeeef', borderRadius: 6 },
  progressBarFill: { height: '100%', backgroundColor: '#10b981', borderRadius: 6 },
  stepText: { fontSize: 12, color: '#3c4a42' },
  card: { backgroundColor: 'rgba(255,255,255,0.8)', padding: 24, borderRadius: 16, gap: 24, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)' },
  inputGroup: { gap: 8 },
  inputGroupHalf: { flex: 1, gap: 8 },
  label: { fontSize: 12, fontWeight: '700', color: '#3c4a42', marginLeft: 4 },
  inputWrapper: { position: 'relative', justifyContent: 'center' },
  input: { backgroundColor: '#f3f4f5', height: 56, borderRadius: 12, paddingHorizontal: 16, fontSize: 16, color: '#191c1d' },
  inputIcon: { position: 'absolute', right: 16 },
  inputIconLeft: { position: 'absolute', left: 16, zIndex: 1 },
  rowGrid: { flexDirection: 'row', gap: 24 },
  pickerText: { backgroundColor: '#f3f4f5', height: 56, borderRadius: 12, paddingHorizontal: 16, fontSize: 16, color: '#6c7a71', textAlignVertical: 'center', paddingTop: 16 },
  pillsContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  pill: { backgroundColor: '#f3f4f5', paddingHorizontal: 24, paddingVertical: 12, borderRadius: 24, borderWidth: 1, borderColor: 'transparent' },
  pillActive: { backgroundColor: '#10b981', borderColor: '#006c49' },
  pillText: { fontSize: 12, fontWeight: '700', color: '#3c4a42' },
  pillTextActive: { color: '#fff' },
  footer: { alignItems: 'center', gap: 24 },
  continueBtn: { width: '100%', maxWidth: 300, borderRadius: 28, overflow: 'hidden', elevation: 8, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8 },
  continueBtnGradient: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12, paddingVertical: 16 },
  continueBtnText: { color: '#fff', fontSize: 18, fontWeight: '600' },
  footerText: { fontSize: 12, fontWeight: '700', color: 'rgba(60,74,66,0.6)' },
});
