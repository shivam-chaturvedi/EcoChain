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
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
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

      <KeyboardAvoidingView
        style={styles.kavFlex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}>

          <Text style={styles.title}>Student Structure</Text>
          <Text style={styles.subtitle}>
            Define your school's grades and class sections to begin tracking impact.
          </Text>

          <View style={styles.liveCountPill}>
            <Text style={styles.liveCountLabel}>LIVE COUNT</Text>
            <View style={styles.liveCountRow}>
              <Text style={styles.liveCountIcon}>👥</Text>
              <Text style={styles.liveCountText}>2,450</Text>
            </View>
          </View>

          {/* Grades Card */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Grades</Text>
              <TouchableOpacity>
                <Text style={styles.addBtnText}>+ ADD NEW</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.gradesGrid}>
              {GRADES_DATA.map(grade => {
                const isSelected = selectedGrades.includes(grade);
                return (
                  <TouchableOpacity
                    key={grade}
                    style={styles.gradeChip}
                    onPress={() => toggleGrade(grade)}>
                    <View style={[styles.checkbox, isSelected && styles.checkboxSelected]}>
                      {isSelected && <Text style={styles.checkmark}>✓</Text>}
                    </View>
                    <Text style={[styles.gradeChipText, isSelected && styles.gradeChipTextSelected]}>
                      {grade}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* Import Box */}
          <View style={styles.importBox}>
            <Text style={styles.importIcon}>✨</Text>
            <Text style={styles.importText}>
              Quickly import your structure from an Excel file.
            </Text>
            <TouchableOpacity>
              <Text style={styles.importLink}>UPLOAD FILE</Text>
            </TouchableOpacity>
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
                  <Text style={styles.inputEndIcon}>👤</Text>
                </View>
              </View>
            </View>
          ))}

          {selectedGrades.length > 2 && (
            <Text style={styles.dotsText}>
              ... Base for Grades 3 through {selectedGrades.length} would follow the same structure based on selection ...
            </Text>
          )}

          {/* Continue Button */}
          <TouchableOpacity
            style={styles.continueBtn}
            onPress={() => navigation.navigate('SustainabilityGoals')}
            activeOpacity={0.8}>
            <Text style={styles.continueBtnText}>CONTINUE →</Text>
          </TouchableOpacity>

          <View style={styles.bottomPad} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1C1C1E', // Dark outer bg
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
  kavFlex: {
    flex: 1,
  },
  scrollContent: {
    backgroundColor: Colors.surface,
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#002B36',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 22,
    marginBottom: 20,
  },
  liveCountPill: {
    backgroundColor: '#C8F2E7',
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 24,
    marginBottom: 24,
  },
  liveCountLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: '#0D9488',
    marginBottom: 2,
    letterSpacing: 0.5,
  },
  liveCountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  liveCountIcon: {
    fontSize: 18,
  },
  liveCountText: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0D9488',
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 24,
    padding: 20,
    marginBottom: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#002B36',
  },
  addBtnText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#10B981',
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
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 24,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 10,
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
  checkmark: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
  gradeChipText: {
    fontSize: 14,
    color: Colors.text,
    fontWeight: '500',
  },
  gradeChipTextSelected: {
    fontWeight: '700',
  },
  importBox: {
    backgroundColor: '#E8F5ED',
    borderWidth: 1.5,
    borderColor: '#A8D8BA',
    borderStyle: 'dashed',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    marginBottom: 32,
  },
  importIcon: {
    fontSize: 24,
    marginBottom: 10,
  },
  importText: {
    fontSize: 13,
    color: Colors.primaryDark,
    textAlign: 'center',
    marginBottom: 12,
    fontWeight: '500',
  },
  importLink: {
    fontSize: 12,
    fontWeight: '800',
    color: '#0D9488',
    textDecorationLine: 'underline',
  },
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
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  configureBadgeText: {
    fontSize: 10,
    fontWeight: '800',
    color: Colors.textSecondary,
    letterSpacing: 0.5,
  },
  gradeDetailCard: {
    backgroundColor: '#F3F4F6',
    borderRadius: 20,
    flexDirection: 'row',
    overflow: 'hidden',
    marginBottom: 16,
  },
  gradeDetailIndicator: {
    width: 6,
    backgroundColor: '#10B981',
  },
  gradeDetailContent: {
    flex: 1,
    padding: 20,
  },
  fieldLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: Colors.textSecondary,
    marginBottom: 6,
    marginTop: 14,
    letterSpacing: 0.5,
  },
  gradeNameValue: {
    fontSize: 16,
    fontWeight: '700',
    color: '#002B36',
  },
  textInput: {
    backgroundColor: Colors.white,
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
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 10,
    paddingHorizontal: 14,
    height: 48,
  },
  textInputFlex: {
    flex: 1,
    fontSize: 14,
    color: Colors.text,
  },
  inputEndIcon: {
    fontSize: 16,
    color: Colors.textLight,
  },
  dotsText: {
    textAlign: 'center',
    fontSize: 12,
    color: Colors.textLight,
    fontStyle: 'italic',
    marginTop: 8,
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
    letterSpacing: 1,
  },
  bottomPad: {
    height: 40,
  },
});
