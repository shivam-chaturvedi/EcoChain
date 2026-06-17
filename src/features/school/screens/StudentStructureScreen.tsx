import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppIcon from '../../../components/AppIcon';
import SchoolScreenHeader from '../../../components/SchoolScreenHeader';
import SchoolBottomNav, { BOTTOM_NAV_HEIGHT } from '../../../components/SchoolBottomNav';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import { Colors } from '../../../constants';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'StudentStructure'>;
};

const GRADES_DATA = [
  'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4',
  'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8',
  'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12',
];

export default function StudentStructureScreen({ navigation }: Props) {
  const [selectedGrades, setSelectedGrades] = useState<string[]>([
    'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6',
  ]);

  const toggleGrade = (grade: string) => {
    if (selectedGrades.includes(grade)) {
      setSelectedGrades(selectedGrades.filter(g => g !== grade));
    } else {
      setSelectedGrades([...selectedGrades, grade]);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />

      <SchoolScreenHeader navigation={navigation} showSettings />

      <KeyboardAvoidingView
        style={styles.kavFlex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          contentContainerStyle={[styles.scrollContent, { paddingBottom: BOTTOM_NAV_HEIGHT + 24 }]}
          showsVerticalScrollIndicator={false}>

          <Text style={styles.title}>Student Structure</Text>
          <Text style={styles.subtitle}>
            Define your school's grades and class sections to begin tracking impact.
          </Text>

          {/* Grades Card */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Grades</Text>
            <View style={styles.gradesGrid}>
              {GRADES_DATA.map(grade => {
                const isSelected = selectedGrades.includes(grade);
                return (
                  <TouchableOpacity
                    key={grade}
                    style={[styles.gradeChip, isSelected && styles.gradeChipSelected]}
                    onPress={() => toggleGrade(grade)}
                    activeOpacity={0.75}>
                    <View style={[styles.checkbox, isSelected && styles.checkboxSelected]}>
                      {isSelected && <AppIcon name="check" size={12} color="#fff" />}
                    </View>
                    <Text style={[styles.gradeChipText, isSelected && styles.gradeChipTextSelected]}>
                      {grade}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* Configure Grade Details */}
          <View style={styles.configureHeader}>
            <Text style={styles.configureTitle}>Configure{'\n'}Grade Details</Text>
            <View style={styles.configureBadge}>
              <Text style={styles.configureBadgeText}>{selectedGrades.length} GRADES SELECTED</Text>
            </View>
          </View>

          {selectedGrades.map((grade, index) => (
            <View key={grade} style={styles.gradeDetailCard}>
              <View style={styles.gradeDetailIndicator} />
              <View style={styles.gradeDetailContent}>
                <Text style={styles.fieldLabel}>GRADE</Text>
                <Text style={styles.gradeNameValue}>{grade}</Text>

                <Text style={styles.fieldLabel}>SECTION NAMES (COMMA SEPARATED)</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="A, B, C, D"
                  placeholderTextColor={Colors.inputPlaceholder}
                  defaultValue={index === 0 || index === 1 ? 'A, B, C, D' : ''}
                />

                <Text style={styles.fieldLabel}>TOTAL STUDENTS</Text>
                <View style={styles.studentInputRow}>
                  <TextInput
                    style={styles.textInputFlex}
                    placeholder="e.g. 150"
                    placeholderTextColor={Colors.inputPlaceholder}
                    keyboardType="numeric"
                    defaultValue={index === 0 ? '130' : index === 1 ? '140' : ''}
                  />
                  <AppIcon name="person" size={16} color="#94A3B8" />
                </View>
              </View>
            </View>
          ))}

          {selectedGrades.length > 2 && (
            <Text style={styles.dotsText}>
              Grades 3 through {selectedGrades.length} follow the same structure based on selection.
            </Text>
          )}

          {/* Continue Button */}
          <TouchableOpacity
            style={styles.continueBtn}
            onPress={() => navigation.navigate('SustainabilityGoals')}
            activeOpacity={0.85}>
            <Text style={styles.continueBtnText}>Continue  →</Text>
          </TouchableOpacity>

        </ScrollView>
      </KeyboardAvoidingView>

      <SchoolBottomNav navigation={navigation} activeRoute="StudentStructure" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.surface,
  },
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
  brandRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  brandIconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#059669',
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandName: { fontSize: 17, fontWeight: '700', color: '#004D40' },
  menuBtn: { padding: 4 },
  kavFlex: { flex: 1 },
  scrollContent: {
    backgroundColor: Colors.surface,
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  title: { fontSize: 28, fontWeight: '800', color: '#002B36', marginBottom: 8 },
  subtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 22,
    marginBottom: 24,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 24,
    padding: 20,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#002B36',
    marginBottom: 16,
  },
  gradesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gradeChip: {
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: Colors.border,
    borderRadius: 24,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
    backgroundColor: Colors.white,
  },
  gradeChipSelected: {
    borderColor: '#10B981',
    backgroundColor: '#F0FDF4',
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 1.5,
    borderColor: '#9CA3AF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  checkboxSelected: {
    backgroundColor: '#10B981',
    borderColor: '#10B981',
  },
  gradeChipText: { fontSize: 14, color: Colors.text, fontWeight: '500' },
  gradeChipTextSelected: { fontWeight: '700', color: '#065F46' },
  configureHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  configureTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#002B36',
    lineHeight: 28,
  },
  configureBadge: {
    backgroundColor: '#D1FAE5',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    marginTop: 4,
  },
  configureBadgeText: {
    fontSize: 9,
    fontWeight: '800',
    color: '#065F46',
    letterSpacing: 0.5,
  },
  gradeDetailCard: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    flexDirection: 'row',
    overflow: 'hidden',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 1,
  },
  gradeDetailIndicator: { width: 5, backgroundColor: '#10B981' },
  gradeDetailContent: { flex: 1, padding: 20 },
  fieldLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: Colors.textSecondary,
    marginBottom: 6,
    marginTop: 14,
    letterSpacing: 0.5,
  },
  gradeNameValue: { fontSize: 16, fontWeight: '700', color: '#002B36' },
  textInput: {
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 10,
    paddingHorizontal: 14,
    height: 48,
    fontSize: 14,
    color: Colors.text,
  },
  studentInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 10,
    paddingHorizontal: 14,
    height: 48,
  },
  textInputFlex: { flex: 1, fontSize: 14, color: Colors.text },
  dotsText: {
    textAlign: 'center',
    fontSize: 12,
    color: Colors.textLight,
    fontStyle: 'italic',
    marginTop: 4,
    marginBottom: 24,
  },
  continueBtn: {
    backgroundColor: '#004D40',
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#004D40',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
    marginBottom: 16,
  },
  continueBtnText: {
    color: Colors.white,
    fontWeight: '700',
    fontSize: 16,
    letterSpacing: 0.3,
  },
  bottomPad: { height: 24 },
});
