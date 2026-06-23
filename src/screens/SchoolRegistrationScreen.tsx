import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TextInput,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

export default function SchoolRegistrationScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <LinearGradient colors={['#10b981', '#006c49']} style={styles.logoIconBg}>
            <Icon name="eco" size={24} color="#fff" />
          </LinearGradient>
          <Text style={styles.logoText}>EcoSystem</Text>
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.stepText}>Step 1 of 4</Text>
          <View style={styles.progressBarHeaderBg}>
            <LinearGradient colors={['#10b981', '#006c49']} style={[styles.progressBarHeaderFill, { width: '25%' }]} />
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          <View style={styles.mobileProgress}>
            <Text style={styles.mobileProgressLabel}>Registration Progress</Text>
            <View style={styles.mobileProgressBarBg}>
              <LinearGradient colors={['#10b981', '#006c49']} style={[styles.mobileProgressBarFill, { width: '25%' }]} />
            </View>
            <Text style={styles.mobileProgressText}>Step 1: School Details</Text>
          </View>

          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>School Registration</Text>
              <Text style={styles.cardSubtitle}>Let's get your institution started on its sustainability journey.</Text>
            </View>

            <View style={styles.form}>
              <TouchableOpacity style={styles.uploadArea}>
                <View style={styles.uploadIconBg}>
                  <Icon name="add-a-photo" size={32} color="#006c49" />
                </View>
                <View style={styles.uploadTextContainer}>
                  <Text style={styles.uploadTitle}>Upload School Logo</Text>
                  <Text style={styles.uploadSubtitle}>PNG, JPG up to 5MB</Text>
                </View>
              </TouchableOpacity>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>School Name</Text>
                <TextInput style={styles.input} placeholder="e.g. Green Valley International" placeholderTextColor="#6c7a71" />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Country</Text>
                <View style={styles.pickerWrapper}>
                  <Text style={styles.pickerText}>Select country</Text>
                  <Icon name="expand-more" size={24} color="#3c4a42" />
                </View>
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>City</Text>
                <TextInput style={styles.input} placeholder="Enter city" placeholderTextColor="#6c7a71" />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>School Curriculum / Type</Text>
                <View style={styles.curriculumGrid}>
                  <TouchableOpacity style={styles.curriculumBtn}>
                    <Text style={styles.curriculumBtnText}>IB</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.curriculumBtn, styles.curriculumBtnActive]}>
                    <Text style={[styles.curriculumBtnText, styles.curriculumBtnTextActive]}>CBSE</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.curriculumBtn}>
                    <Text style={styles.curriculumBtnText}>British</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.curriculumBtn}>
                    <Text style={styles.curriculumBtnText}>Other</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.footer}>
                <TouchableOpacity style={styles.nextBtn}>
                  <LinearGradient colors={['#10b981', '#006c49']} style={styles.nextBtnGradient}>
                    <Text style={styles.nextBtnText}>Next Step</Text>
                    <Icon name="arrow-forward" size={24} color="#fff" />
                  </LinearGradient>
                </TouchableOpacity>
                <Text style={styles.termsText}>
                  By continuing, you agree to our <Text style={styles.termsLink}>Terms of Service</Text>.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { height: 64, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 24, backgroundColor: 'rgba(248, 249, 250, 0.8)', borderBottomWidth: 1, borderBottomColor: 'rgba(187, 202, 191, 0.1)' },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  logoIconBg: { width: 40, height: 40, borderRadius: 8, alignItems: 'center', justifyContent: 'center' },
  logoText: { fontSize: 24, fontWeight: '800', color: '#006c49' },
  headerRight: { flexDirection: 'row', alignItems: 'center', gap: 24, display: 'none' }, // Usually hidden on mobile
  stepText: { fontSize: 12, fontWeight: '700', color: 'rgba(60, 74, 66, 0.6)', textTransform: 'uppercase' },
  progressBarHeaderBg: { width: 128, height: 8, backgroundColor: '#edeeef', borderRadius: 4, overflow: 'hidden' },
  progressBarHeaderFill: { height: '100%', borderRadius: 4 },
  scrollContent: { padding: 24 },
  container: { flex: 1, alignItems: 'center', maxWidth: 800, alignSelf: 'center', width: '100%' },
  mobileProgress: { width: '100%', alignItems: 'center', gap: 8, marginBottom: 24 },
  mobileProgressLabel: { fontSize: 12, fontWeight: '700', color: 'rgba(60, 74, 66, 0.6)', textTransform: 'uppercase' },
  mobileProgressBarBg: { width: '100%', height: 6, backgroundColor: '#edeeef', borderRadius: 3, overflow: 'hidden' },
  mobileProgressBarFill: { height: '100%', borderRadius: 3 },
  mobileProgressText: { fontSize: 16, fontWeight: '700', color: '#006c49' },
  card: { width: '100%', backgroundColor: 'rgba(255,255,255,0.8)', borderRadius: 16, padding: 24, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)', shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.05, shadowRadius: 12, elevation: 2 },
  cardHeader: { marginBottom: 40 },
  cardTitle: { fontSize: 32, fontWeight: '800', color: '#191c1d', marginBottom: 8, letterSpacing: -1 },
  cardSubtitle: { fontSize: 16, color: '#3c4a42' },
  form: { gap: 24 },
  uploadArea: { alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: 'rgba(187, 202, 191, 0.4)', borderStyle: 'dashed', borderRadius: 12, padding: 40, backgroundColor: '#fff' },
  uploadIconBg: { width: 64, height: 64, borderRadius: 32, backgroundColor: 'rgba(16,185,129,0.1)', alignItems: 'center', justifyContent: 'center', marginBottom: 12 },
  uploadTextContainer: { alignItems: 'center' },
  uploadTitle: { fontSize: 16, fontWeight: '700', color: '#191c1d' },
  uploadSubtitle: { fontSize: 12, fontWeight: '700', color: 'rgba(60, 74, 66, 0.6)' },
  inputGroup: { gap: 8 },
  label: { fontSize: 12, fontWeight: '700', color: '#3c4a42', paddingLeft: 4 },
  input: { height: 56, backgroundColor: '#f3f4f5', borderRadius: 12, paddingHorizontal: 16, fontSize: 16, color: '#191c1d' },
  pickerWrapper: { height: 56, backgroundColor: '#f3f4f5', borderRadius: 12, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  pickerText: { fontSize: 16, color: '#6c7a71' },
  curriculumGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  curriculumBtn: { flex: 1, minWidth: '45%', height: 56, alignItems: 'center', justifyContent: 'center', borderRadius: 12, borderWidth: 1, borderColor: 'rgba(187,202,191,0.3)' },
  curriculumBtnActive: { backgroundColor: 'rgba(16,185,129,0.1)', borderColor: '#006c49' },
  curriculumBtnText: { fontSize: 16, color: '#191c1d' },
  curriculumBtnTextActive: { fontWeight: '700', color: '#006c49' },
  footer: { marginTop: 16, alignItems: 'center', gap: 24 },
  nextBtn: { width: '100%', borderRadius: 28, overflow: 'hidden', shadowColor: '#006c49', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.2, shadowRadius: 12, elevation: 4 },
  nextBtnGradient: { height: 56, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12 },
  nextBtnText: { color: '#fff', fontSize: 20, fontWeight: '600' },
  termsText: { fontSize: 16, color: 'rgba(60, 74, 66, 0.6)', textAlign: 'center' },
  termsLink: { color: '#006c49', textDecorationLine: 'underline' },
});
