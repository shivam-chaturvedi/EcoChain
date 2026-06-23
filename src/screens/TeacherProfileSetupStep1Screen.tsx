import React, { useState } from 'react';
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

export default function TeacherProfileSetupStep1Screen({ navigation }: any) {
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [experience, setExperience] = useState(5);

  const toggleSubject = (subject: string) => {
    if (selectedSubjects.includes(subject)) {
      setSelectedSubjects(selectedSubjects.filter(s => s !== subject));
    } else {
      setSelectedSubjects([...selectedSubjects, subject]);
    }
  };

  const subjects = [
    { id: 'science', label: 'Science', icon: 'science' },
    { id: 'geography', label: 'Geography', icon: 'public' },
    { id: 'social_studies', label: 'Social Studies', icon: 'groups' },
    { id: 'math', label: 'Mathematics', icon: 'functions' },
    { id: 'history', label: 'History', icon: 'history-edu' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>ChonX</Text>
        <View style={styles.headerRight}>
          <Icon name="school" size={16} color="#006c49" />
          <Text style={styles.headerRightText}>Teacher Portal</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Progress */}
        <View style={styles.progressSection}>
          <View style={styles.progressHeader}>
            <View>
              <Text style={styles.pageTitle}>Personal Information</Text>
              <Text style={styles.pageSubtitle}>Let's get to know your professional background.</Text>
            </View>
            <Text style={styles.stepText}>Step 1 of 2</Text>
          </View>
          <View style={styles.progressBarWrapper}>
            <View style={[styles.progressBar, { width: '50%' }]} />
          </View>
        </View>

        <View style={styles.formCard}>
          {/* Full Name */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>FULL NAME</Text>
            <View style={styles.inputWrapper}>
              <Icon name="person" size={24} color="#6c7a71" style={styles.inputIcon} />
              <TextInput 
                style={styles.input}
                placeholder="e.g. Dr. Sarah Jenkins"
                placeholderTextColor="rgba(60, 74, 66, 0.5)"
              />
            </View>
          </View>

          {/* Department */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>DEPARTMENT</Text>
            <View style={styles.inputWrapper}>
              <Icon name="account-balance" size={24} color="#6c7a71" style={styles.inputIcon} />
              {/* Fake Select */}
              <TouchableOpacity style={[styles.input, { justifyContent: 'center' }]}>
                <Text style={{ color: 'rgba(60, 74, 66, 0.5)' }}>Select Department</Text>
              </TouchableOpacity>
              <Icon name="expand-more" size={24} color="#6c7a71" style={styles.inputRightIcon} />
            </View>
          </View>

          {/* Subjects */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>SUBJECTS TAUGHT</Text>
            <View style={styles.subjectsGrid}>
              {subjects.map(subject => {
                const isActive = selectedSubjects.includes(subject.id);
                return (
                  <TouchableOpacity
                    key={subject.id}
                    style={[styles.subjectTag, isActive && styles.subjectTagActive]}
                    onPress={() => toggleSubject(subject.id)}
                  >
                    <Icon name={subject.icon} size={18} color={isActive ? '#fff' : '#3c4a42'} />
                    <Text style={[styles.subjectTagText, isActive && styles.subjectTagTextActive]}>{subject.label}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* Experience */}
          <View style={styles.inputGroup}>
            <View style={styles.expHeaderRow}>
              <Text style={styles.label}>YEARS OF EXPERIENCE</Text>
              <Text style={styles.expValue}>{experience}</Text>
            </View>
            {/* Fake Slider for Visual */}
            <View style={styles.sliderContainer}>
              <View style={styles.sliderTrack}>
                <View style={[styles.sliderFill, { width: `${(experience / 40) * 100}%` }]} />
                <View style={[styles.sliderThumb, { left: `${(experience / 40) * 100}%`, marginLeft: -12 }]} />
              </View>
              <View style={styles.sliderLabelsRow}>
                <Text style={styles.sliderLabel}>ENTRY</Text>
                <Text style={styles.sliderLabel}>SENIOR</Text>
                <Text style={styles.sliderLabel}>VETERAN</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Upload Photo */}
        <TouchableOpacity style={styles.uploadCard}>
          <View style={styles.uploadAvatarPlaceholder}>
            <Image source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAj2-ruDU1qkRBGKUGIm4NJcwFQ8L5U6hNLYyp0UOgPYcXcwM53jBnJI1YiAd_uxpPadRKDqFvMlwJjhYoI3MQQMojOB-qdxeHC1-NToNd8ZX2PVITVCRQU4WYCe8bw-ufx1IeqwJNseimZB-lMj8Z7u0NweZK3aFadQdRdwWq7r4Otu6IQ8T0kYazYEnXcqwm_Tf4jV6WMudI-5yOWfjqZmCd8YZA78Ofulk_NxPi8VP1mOunJ6kcZbh2DoVGbZ-p7WcM4HUwaqnr'}} style={[styles.imageFull, { opacity: 0.5, tintColor: 'gray' }]} />
          </View>
          <Text style={styles.uploadText}>Upload Professional Photo</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.draftBtn}>
          <Text style={styles.draftBtnText}>Save Draft</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.continueBtn} onPress={() => navigation.navigate('TeacherProfileSetupStep2')}>
          <LinearGradient colors={['#006c49', '#006b5f']} style={styles.continueGradient} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
            <Text style={styles.continueText}>Continue</Text>
            <Icon name="arrow-forward" size={24} color="#fff" />
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
  headerRight: { flexDirection: 'row', alignItems: 'center', gap: 8, backgroundColor: '#e7e8e9', paddingHorizontal: 16, paddingVertical: 6, borderRadius: 20 },
  headerRightText: { fontSize: 12, fontWeight: '700', color: '#3c4a42', textTransform: 'uppercase' },
  scrollContent: { padding: 24, paddingBottom: 100 },
  progressSection: { marginBottom: 40 },
  progressHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 12 },
  pageTitle: { fontSize: 24, fontWeight: '700', color: '#191c1d', marginBottom: 4 },
  pageSubtitle: { fontSize: 16, color: '#3c4a42' },
  stepText: { fontSize: 12, fontWeight: '700', color: '#006c49', textTransform: 'uppercase' },
  progressBarWrapper: { height: 12, backgroundColor: '#edeeef', borderRadius: 6, overflow: 'hidden' },
  progressBar: { height: '100%', backgroundColor: '#10b981' },
  formCard: { backgroundColor: 'rgba(255,255,255,0.8)', borderRadius: 8, padding: 24, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)', elevation: 1, marginBottom: 40 },
  inputGroup: { marginBottom: 24 },
  label: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 1, marginBottom: 8, textTransform: 'uppercase' },
  inputWrapper: { relative: true },
  inputIcon: { position: 'absolute', left: 16, top: 16, zIndex: 1 },
  inputRightIcon: { position: 'absolute', right: 16, top: 16, zIndex: 1 },
  input: { backgroundColor: '#f3f4f5', borderRadius: 8, paddingLeft: 48, paddingRight: 16, height: 56, fontSize: 16, color: '#191c1d' },
  subjectsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  subjectTag: { flexDirection: 'row', alignItems: 'center', gap: 8, paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20, borderWidth: 1, borderColor: 'rgba(187,202,191,0.5)' },
  subjectTagActive: { backgroundColor: '#10b981', borderColor: '#10b981' },
  subjectTagText: { fontSize: 12, fontWeight: '700', color: '#3c4a42', textTransform: 'uppercase' },
  subjectTagTextActive: { color: '#fff' },
  expHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  expValue: { fontSize: 28, fontWeight: '700', color: '#006c49' },
  sliderContainer: { paddingVertical: 16 },
  sliderTrack: { height: 8, backgroundColor: '#edeeef', borderRadius: 4 },
  sliderFill: { height: '100%', backgroundColor: '#006c49', borderRadius: 4 },
  sliderThumb: { width: 24, height: 24, borderRadius: 12, backgroundColor: '#006c49', position: 'absolute', top: -8 },
  sliderLabelsRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 16, paddingHorizontal: 4 },
  sliderLabel: { fontSize: 10, fontWeight: '700', color: '#6c7a71', textTransform: 'uppercase' },
  uploadCard: { alignItems: 'center', padding: 24, borderWidth: 2, borderColor: 'rgba(187,202,191,0.4)', borderStyle: 'dashed', borderRadius: 8 },
  uploadAvatarPlaceholder: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#edeeef', overflow: 'hidden', marginBottom: 16, alignItems: 'center', justifyContent: 'center' },
  imageFull: { width: '100%', height: '100%', resizeMode: 'cover' },
  uploadText: { fontSize: 12, fontWeight: '700', color: '#3c4a42', textTransform: 'uppercase' },
  footer: { position: 'absolute', bottom: 0, left: 0, right: 0, padding: 16, backgroundColor: 'rgba(248,249,250,0.9)', borderTopWidth: 1, borderTopColor: 'rgba(187,202,191,0.2)', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  draftBtn: { paddingHorizontal: 24, paddingVertical: 12 },
  draftBtnText: { fontSize: 12, fontWeight: '700', color: '#3c4a42', textTransform: 'uppercase' },
  continueBtn: { flex: 1, marginLeft: 16, borderRadius: 32, overflow: 'hidden' },
  continueGradient: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, paddingVertical: 14 },
  continueText: { fontSize: 16, fontWeight: '600', color: '#fff' },
});
