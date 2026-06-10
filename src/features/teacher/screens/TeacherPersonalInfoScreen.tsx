import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Modal,
  FlatList,
  Dimensions,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import { Colors } from '../../../constants';
import CustomSlider from '../../../components/CustomSlider';

const { width } = Dimensions.get('window');

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'TeacherPersonalInfo'>;
};

const DEPARTMENTS = [
  'Science & Technology',
  'Mathematics',
  'Languages & Literature',
  'Social Studies & History',
  'Arts & Physical Education',
  'Environmental Studies',
  'General Education',
];

const SUBJECTS: { label: string; icon: string }[] = [
  { label: 'Science', icon: '🧪' },
  { label: 'Geography', icon: '🌍' },
  { label: 'Social Studies', icon: '👥' },
  { label: 'Mathematics', icon: '📐' },
  { label: 'History', icon: '🏛️' },
];

export default function TeacherPersonalInfoScreen({ navigation }: Props) {
  const [fullName, setFullName] = useState('');
  const [department, setDepartment] = useState('');
  const [showDeptModal, setShowDeptModal] = useState(false);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [experience, setExperience] = useState(5);

  const toggleSubject = (label: string) => {
    setSelectedSubjects(prev =>
      prev.includes(label) ? prev.filter(s => s !== label) : [...prev, label],
    );
  };

  const expLabel = () => {
    if (experience <= 3) return 'Entry';
    if (experience <= 10) return 'Senior';
    return 'Veteran';
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />

      {/* ── Top Header ── */}
      <View style={styles.header}>
        <Text style={styles.brand}>ChonX</Text>
        <View style={styles.portalBadge}>
          <Text style={styles.portalIcon}>🎓</Text>
          <Text style={styles.portalText}>Teacher Portal</Text>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}>

        {/* ── Title Row ── */}
        <View style={styles.titleRow}>
          <View style={styles.titleLeft}>
            <Text style={styles.pageTitle}>Personal Information</Text>
            <Text style={styles.pageSub}>
              Let's get to know your professional background.
            </Text>
          </View>
          <View style={styles.stepBlock}>
            <Text style={styles.stepNum}>Step 1</Text>
            <Text style={styles.stepTotal}>of 2</Text>
          </View>
        </View>

        {/* ── Progress Bar ── */}
        <View style={styles.progressTrack}>
          <View style={styles.progressFill} />
        </View>

        {/* ── Form Card ── */}
        <View style={styles.card}>

          {/* Full Name */}
          <View style={styles.fieldGroup}>
            <Text style={styles.fieldLabel}>FULL NAME</Text>
            <View style={styles.inputRow}>
              <Text style={styles.inputIcon}>👤</Text>
              <TextInput
                style={styles.textInput}
                placeholder="e.g. Dr. Sarah Jenkins"
                placeholderTextColor={Colors.inputPlaceholder}
                value={fullName}
                onChangeText={setFullName}
                autoCapitalize="words"
              />
            </View>
          </View>

          {/* Department */}
          <View style={styles.fieldGroup}>
            <Text style={styles.fieldLabel}>DEPARTMENT</Text>
            <TouchableOpacity
              style={styles.inputRow}
              onPress={() => setShowDeptModal(true)}
              activeOpacity={0.75}>
              <Text style={styles.inputIcon}>🏛️</Text>
              <Text
                style={[
                  styles.dropdownText,
                  department ? styles.dropdownSelected : styles.dropdownPlaceholder,
                ]}>
                {department || 'Select Department'}
              </Text>
              <Text style={styles.chevron}>⌄</Text>
            </TouchableOpacity>
          </View>

          {/* Subjects Taught */}
          <View style={styles.fieldGroup}>
            <Text style={styles.fieldLabel}>SUBJECTS TAUGHT</Text>
            <View style={styles.chipsWrap}>
              {SUBJECTS.map(s => {
                const active = selectedSubjects.includes(s.label);
                return (
                  <TouchableOpacity
                    key={s.label}
                    style={[styles.chip, active && styles.chipActive]}
                    onPress={() => toggleSubject(s.label)}
                    activeOpacity={0.75}>
                    <Text style={styles.chipIcon}>{s.icon}</Text>
                    <Text style={[styles.chipText, active && styles.chipTextActive]}>
                      {s.label}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* Years of Experience */}
          <View style={styles.fieldGroup}>
            <View style={styles.expLabelRow}>
              <Text style={styles.fieldLabel}>YEARS OF EXPERIENCE</Text>
              <Text style={styles.expValue}>{experience}</Text>
            </View>
            <CustomSlider
              value={experience}
              min={0}
              max={30}
              step={1}
              onValueChange={setExperience}
              trackColor="#E5F4EC"
              thumbColor={Colors.primaryDark}
              style={styles.slider}
            />
            <View style={styles.sliderLabels}>
              <Text style={styles.sliderLabel}>ENTRY</Text>
              <Text style={styles.sliderLabel}>SENIOR</Text>
              <Text style={styles.sliderLabel}>VETERAN</Text>
            </View>
          </View>

        </View>

        {/* ── Photo Upload ── */}
        <TouchableOpacity style={styles.photoUpload} activeOpacity={0.75}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarPlaceholder}>🧑‍💼</Text>
          </View>
          <Text style={styles.photoUploadText}>Upload Professional Photo</Text>
        </TouchableOpacity>

        {/* ── Next Button ── */}
        <TouchableOpacity
          style={styles.nextBtn}
          onPress={() => navigation.navigate('TeacherClassSelection')}
          activeOpacity={0.85}>
          <Text style={styles.nextBtnText}>Continue  →</Text>
        </TouchableOpacity>

      </ScrollView>

      {/* ── Department Modal ── */}
      <Modal
        visible={showDeptModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowDeptModal(false)}>
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setShowDeptModal(false)}>
          <View style={styles.modalSheet}>
            <Text style={styles.modalTitle}>Select Department</Text>
            <FlatList
              data={DEPARTMENTS}
              keyExtractor={item => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.modalItem,
                    item === department && styles.modalItemActive,
                  ]}
                  onPress={() => {
                    setDepartment(item);
                    setShowDeptModal(false);
                  }}
                  activeOpacity={0.7}>
                  <Text
                    style={[
                      styles.modalItemText,
                      item === department && styles.modalItemTextActive,
                    ]}>
                    {item}
                  </Text>
                  {item === department && <Text style={styles.checkMark}>✓</Text>}
                </TouchableOpacity>
              )}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
          </View>
        </TouchableOpacity>
      </Modal>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  brand: {
    fontSize: 20,
    fontWeight: '800',
    color: Colors.primaryDark,
    letterSpacing: -0.3,
  },
  portalBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  portalIcon: {
    fontSize: 14,
  },
  portalText: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.textSecondary,
  },

  // Scroll
  scroll: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 32,
  },

  // Title Row
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  titleLeft: {
    flex: 1,
    paddingRight: 12,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: Colors.text,
    marginBottom: 4,
    letterSpacing: -0.3,
  },
  pageSub: {
    fontSize: 13,
    color: Colors.textSecondary,
    lineHeight: 19,
  },
  stepBlock: {
    alignItems: 'flex-end',
    paddingTop: 2,
  },
  stepNum: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.primaryDark,
    lineHeight: 18,
  },
  stepTotal: {
    fontSize: 12,
    fontWeight: '500',
    color: Colors.primaryDark,
    lineHeight: 16,
  },

  // Progress Bar
  progressTrack: {
    height: 5,
    backgroundColor: '#E5E7EB',
    borderRadius: 3,
    marginBottom: 20,
    overflow: 'hidden',
  },
  progressFill: {
    width: '50%',
    height: '100%',
    backgroundColor: Colors.primaryDark,
    borderRadius: 3,
  },

  // Card
  card: {
    backgroundColor: Colors.white,
    borderRadius: 18,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 10,
    elevation: 3,
    marginBottom: 16,
  },

  // Field groups
  fieldGroup: {
    marginBottom: 22,
  },
  fieldLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: '#64748B',
    letterSpacing: 1.0,
    marginBottom: 8,
  },

  // Input row
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F5F9',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 13,
    gap: 10,
  },
  inputIcon: {
    fontSize: 16,
    lineHeight: 20,
  },
  textInput: {
    flex: 1,
    fontSize: 14,
    color: Colors.text,
    padding: 0,
  },

  // Dropdown
  dropdownText: {
    flex: 1,
    fontSize: 14,
  },
  dropdownPlaceholder: {
    color: Colors.inputPlaceholder,
  },
  dropdownSelected: {
    color: Colors.text,
  },
  chevron: {
    fontSize: 18,
    color: Colors.textSecondary,
    lineHeight: 20,
    marginTop: -2,
  },

  // Chips
  chipsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    borderWidth: 1.5,
    borderColor: Colors.border,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 7,
    backgroundColor: Colors.white,
  },
  chipActive: {
    borderColor: Colors.primaryDark,
    backgroundColor: '#EDF7F1',
  },
  chipIcon: {
    fontSize: 13,
  },
  chipText: {
    fontSize: 13,
    fontWeight: '500',
    color: Colors.textSecondary,
  },
  chipTextActive: {
    color: Colors.primaryDark,
    fontWeight: '600',
  },

  // Experience
  expLabelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  expValue: {
    fontSize: 22,
    fontWeight: '800',
    color: Colors.primaryDark,
  },
  slider: {
    marginHorizontal: 0,
    marginBottom: 8,
  },
  sliderLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  sliderLabel: {
    fontSize: 9,
    fontWeight: '600',
    color: Colors.textLight,
    letterSpacing: 0.6,
  },

  // Photo Upload
  photoUpload: {
    borderWidth: 1.5,
    borderColor: Colors.border,
    borderStyle: 'dashed',
    borderRadius: 16,
    paddingVertical: 28,
    alignItems: 'center',
    backgroundColor: Colors.white,
    marginBottom: 24,
  },
  avatarCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#E5E7EB',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  avatarPlaceholder: {
    fontSize: 30,
  },
  photoUploadText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.textSecondary,
  },

  // Next Button
  nextBtn: {
    height: 54,
    backgroundColor: Colors.primaryDark,
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.primaryDark,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  nextBtnText: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.white,
    letterSpacing: 0.3,
  },

  // Modal
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
  },
  modalSheet: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 20,
    paddingBottom: 32,
    maxHeight: '60%',
  },
  modalTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: Colors.text,
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  modalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  modalItemActive: {
    backgroundColor: '#F0FBF5',
  },
  modalItemText: {
    fontSize: 15,
    color: Colors.text,
  },
  modalItemTextActive: {
    color: Colors.primaryDark,
    fontWeight: '600',
  },
  checkMark: {
    fontSize: 16,
    color: Colors.primaryDark,
    fontWeight: '700',
  },
  separator: {
    height: 1,
    backgroundColor: Colors.border,
    marginHorizontal: 20,
  },
});
