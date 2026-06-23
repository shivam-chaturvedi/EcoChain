import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

export default function TeacherProfileSetupStep2Screen({ navigation }: any) {
  const [loading, setLoading] = useState(false);

  const simulateSuccess = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('TeacherWelcome'); // Assumed next flow
    }, 1500);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>ChonX</Text>
        <View style={styles.headerRight}>
          <Text style={styles.headerRightText}>Setup Progress</Text>
          <View style={styles.progressHeaderBar}>
            <View style={[styles.progressHeaderFill, { width: '100%' }]} />
          </View>
        </View>
      </View>

      <View style={styles.content}>
        {/* Step Indicator */}
        <View style={styles.stepHeader}>
          <Icon name="contact-mail" size={24} color="#006c49" />
          <Text style={styles.stepText}>STEP 2 OF 2</Text>
        </View>
        
        <Text style={styles.pageTitle}>Contact Details</Text>
        <Text style={styles.pageSubtitle}>Help your school and students connect with you securely through the ChonX ecosystem.</Text>

        {/* Profile Context Card */}
        <View style={styles.contextCard}>
          <View style={styles.contextAvatarWrapper}>
            <Image source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4sb6qS-mzgFgf6vyJHogy5dl2kYZWrj33juf_hd4eRRCKEj_TivKgz2G7io6PXHgl6J_cQuvevIcLONbeXhiemGG1eBtN0BoDtM0O5h9ik3Vw3g1urxOnwXlpGBBv9dVIdvUBRvbItRJCna23phJsu5Tftvca0GYZjpC3M7h7zVrNZ9SPrGP5Ck9ZOqMxNphbbjMTyHZKkk7CtZfd3SrtVihtjTWqA02XZRo53l6zBdxi3BkU78PSHP9RipPyhBGKKRqrecTPWEvH'}} style={styles.imageFull} />
            <View style={styles.editIconBadge}>
              <Icon name="edit" size={12} color="#fff" />
            </View>
          </View>
          <View>
            <Text style={styles.contextName}>Prof. Sarah Jenkins</Text>
            <Text style={styles.contextRole}>Environmental Science Lead</Text>
          </View>
        </View>

        {/* Form */}
        <View style={styles.formContainer}>
          {/* Email */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>PROFESSIONAL EMAIL</Text>
            <View style={styles.inputWrapper}>
              <Icon name="mail" size={24} color="#6c7a71" style={styles.inputIcon} />
              <TextInput style={styles.input} placeholder="s.jenkins@school.edu" placeholderTextColor="rgba(60, 74, 66, 0.5)" keyboardType="email-address" />
            </View>
          </View>

          {/* Phone */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>PHONE NUMBER</Text>
            <View style={styles.inputWrapper}>
              <Icon name="call" size={24} color="#6c7a71" style={styles.inputIcon} />
              <TextInput style={styles.input} placeholder="+1 (555) 000-0000" placeholderTextColor="rgba(60, 74, 66, 0.5)" keyboardType="phone-pad" />
            </View>
          </View>

          {/* Staff ID */}
          <View style={styles.inputGroup}>
            <View style={styles.labelRow}>
              <Text style={styles.label}>STAFF ID</Text>
              <Text style={styles.labelOptional}>OPTIONAL</Text>
            </View>
            <View style={styles.inputWrapper}>
              <Icon name="badge" size={24} color="#6c7a71" style={styles.inputIcon} />
              <TextInput style={styles.input} placeholder="EDU-XXXX-2024" placeholderTextColor="rgba(60, 74, 66, 0.5)" />
            </View>
          </View>

          {/* Disclaimer */}
          <View style={styles.disclaimerBox}>
            <Icon name="verified-user" size={20} color="#006c49" />
            <Text style={styles.disclaimerText}>Your contact details are encrypted and only visible to verified school administration. We never share your data with third-party advertisers.</Text>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.backBtnText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.continueBtn} onPress={simulateSuccess} disabled={loading}>
          <LinearGradient colors={['#10b981', '#006b5f']} style={styles.continueGradient} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <>
                <Text style={styles.continueText}>Continue</Text>
                <Icon name="arrow-forward" size={24} color="#fff" />
              </>
            )}
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { height: 64, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 24, backgroundColor: 'rgba(248, 249, 250, 0.8)', borderBottomWidth: 1, borderBottomColor: 'rgba(187, 202, 191, 0.3)' },
  headerTitle: { fontSize: 24, fontWeight: '800', color: '#006c49' },
  headerRight: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  headerRightText: { fontSize: 12, fontWeight: '700', color: '#3c4a42', textTransform: 'uppercase' },
  progressHeaderBar: { width: 96, height: 8, backgroundColor: '#edeeef', borderRadius: 4, overflow: 'hidden' },
  progressHeaderFill: { height: '100%', backgroundColor: '#006c49' },
  content: { flex: 1, padding: 24, justifyContent: 'center', maxWidth: 560, alignSelf: 'center', width: '100%' },
  stepHeader: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 8 },
  stepText: { fontSize: 12, fontWeight: '700', color: '#006c49', letterSpacing: 2 },
  pageTitle: { fontSize: 24, fontWeight: '700', color: '#191c1d', marginBottom: 8 },
  pageSubtitle: { fontSize: 16, color: '#3c4a42', marginBottom: 24 },
  contextCard: { flexDirection: 'row', alignItems: 'center', gap: 16, backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: 8, padding: 24, borderWidth: 1, borderColor: 'rgba(255,255,255,0.3)', elevation: 1, marginBottom: 24 },
  contextAvatarWrapper: { width: 64, height: 64, borderRadius: 32, borderWidth: 2, borderColor: '#10b981' },
  imageFull: { width: '100%', height: '100%', borderRadius: 32, resizeMode: 'cover' },
  editIconBadge: { position: 'absolute', bottom: -4, right: -4, backgroundColor: '#006c49', width: 24, height: 24, borderRadius: 12, alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: '#fff' },
  contextName: { fontSize: 24, fontWeight: '600', color: '#191c1d' },
  contextRole: { fontSize: 14, color: '#3c4a42' },
  formContainer: { gap: 24 },
  inputGroup: {},
  labelRow: { flexDirection: 'row', justifyContent: 'space-between' },
  label: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 1, marginBottom: 8 },
  labelOptional: { fontSize: 10, fontWeight: '700', color: '#6c7a71', letterSpacing: -0.5 },
  inputWrapper: { position: 'relative' },
  inputIcon: { position: 'absolute', left: 16, top: 16, zIndex: 1 },
  input: { backgroundColor: '#f3f4f5', borderRadius: 8, paddingLeft: 48, paddingRight: 16, height: 56, fontSize: 16, color: '#191c1d' },
  disclaimerBox: { flexDirection: 'row', gap: 12, backgroundColor: 'rgba(16,185,129,0.1)', borderWidth: 1, borderColor: 'rgba(16,185,129,0.2)', padding: 12, borderRadius: 8, alignItems: 'flex-start' },
  disclaimerText: { flex: 1, fontSize: 12, color: '#00422b' },
  footer: { position: 'absolute', bottom: 0, left: 0, right: 0, padding: 24, backgroundColor: 'rgba(248,249,250,0.9)', borderTopWidth: 1, borderTopColor: 'rgba(187,202,191,0.2)', flexDirection: 'row', gap: 24, maxWidth: 560, alignSelf: 'center', width: '100%' },
  backBtn: { flex: 1, paddingVertical: 16, backgroundColor: '#edeeef', borderRadius: 8, alignItems: 'center', justifyContent: 'center' },
  backBtnText: { fontSize: 24, fontWeight: '600', color: '#3c4a42' },
  continueBtn: { flex: 2, borderRadius: 8, overflow: 'hidden' },
  continueGradient: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, paddingVertical: 16 },
  continueText: { fontSize: 24, fontWeight: '600', color: '#fff' },
});
