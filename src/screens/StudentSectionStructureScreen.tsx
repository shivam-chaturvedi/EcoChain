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

export default function StudentSectionStructureScreen({ navigation }: any) {
  const [selectedGrades, setSelectedGrades] = useState<number[]>([1, 2, 3, 4, 5, 6]);

  const toggleGrade = (grade: number) => {
    if (selectedGrades.includes(grade)) {
      setSelectedGrades(selectedGrades.filter(g => g !== grade));
    } else {
      setSelectedGrades([...selectedGrades, grade]);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Icon name="eco" size={24} color="#006c49" />
          <Text style={styles.logoText}>ChonX</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.navBtn}>
            <Text style={styles.navBtnTextPrimary}>Progress</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navBtn}>
            <Text style={styles.navBtnText}>Help</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navBtn}>
            <Text style={styles.navBtnText}>Exit</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.pageHeader}>
          <View style={styles.pageHeaderLeft}>
            <Text style={styles.pageTitle}>Student Structure</Text>
            <Text style={styles.pageSubtitle}>Define your school's grades and class sections to begin tracking impact.</Text>
          </View>
          <View style={styles.liveCountCard}>
            <Icon name="groups" size={24} color="#006f64" />
            <View>
              <Text style={styles.liveCountLabel}>LIVE COUNT</Text>
              <Text style={styles.liveCountValue}>2,450</Text>
            </View>
          </View>
        </View>

        <View style={styles.grid}>
          {/* Left Column: Grade Selection */}
          <View style={styles.leftCol}>
            <View style={styles.gradesCard}>
              <View style={styles.gradesHeader}>
                <Text style={styles.gradesTitle}>Grades</Text>
                <TouchableOpacity style={styles.addNewBtn}>
                  <Icon name="add" size={20} color="#006c49" />
                  <Text style={styles.addNewBtnText}>ADD NEW</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.gradesList}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(g => (
                  <TouchableOpacity 
                    key={g} 
                    style={styles.gradeItem}
                    onPress={() => toggleGrade(g)}
                  >
                    <View style={[styles.checkbox, selectedGrades.includes(g) && styles.checkboxChecked]}>
                      {selectedGrades.includes(g) && <Icon name="check" size={16} color="#fff" />}
                    </View>
                    <Text style={[styles.gradeItemText, selectedGrades.includes(g) && styles.gradeItemTextActive]}>
                      Grade {g}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={styles.uploadCard}>
              <Icon name="auto-awesome" size={40} color="#006c49" />
              <Text style={styles.uploadText}>Quickly import your structure from an Excel file.</Text>
              <TouchableOpacity>
                <Text style={styles.uploadBtnText}>UPLOAD FILE</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Right Column: Configuration */}
          <View style={styles.rightCol}>
            <View style={styles.configCard}>
              <View style={styles.configHeader}>
                <Text style={styles.configTitle}>Configure Sections</Text>
                <View style={styles.configInfo}>
                  <Icon name="info-outline" size={16} color="#6c7a71" />
                  <Text style={styles.configInfoText}>{selectedGrades.length} GRADES SELECTED</Text>
                </View>
              </View>

              <View style={styles.configList}>
                {[1, 2].map(g => (
                  <View key={g} style={styles.configItem}>
                    <View style={styles.configItemIndicator} />
                    <View style={styles.configItemGrid}>
                      <View style={styles.configFieldSmall}>
                        <Text style={styles.configLabel}>GRADE NAME</Text>
                        <TextInput style={styles.input} value={`Grade ${g}`} />
                      </View>
                      <View style={styles.configFieldSmall}>
                        <Text style={styles.configLabel}>NUMBER OF SECTIONS</Text>
                        <TextInput style={styles.input} value="4" keyboardType="numeric" />
                      </View>
                      <View style={styles.configFieldLarge}>
                        <Text style={styles.configLabel}>TOTAL STUDENTS IN GRADE</Text>
                        <View style={styles.inputWrapper}>
                          <TextInput style={styles.input} value={g === 1 ? "130" : "140"} keyboardType="numeric" />
                          <Icon name="person-outline" size={20} color="#3c4a42" style={styles.inputIcon} />
                        </View>
                      </View>
                    </View>
                  </View>
                ))}
              </View>

              <View style={styles.footerActions}>
                <TouchableOpacity style={styles.backBtn}>
                  <Text style={styles.backBtnText}>BACK</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.continueBtn}>
                  <LinearGradient colors={['#006c49', '#006b5f']} style={styles.continueBtnGradient}>
                    <Text style={styles.continueBtnText}>CONTINUE</Text>
                    <Icon name="arrow-forward" size={20} color="#fff" />
                  </LinearGradient>
                </TouchableOpacity>
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
  header: { height: 64, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 24, backgroundColor: 'rgba(248, 249, 250, 0.8)', borderBottomWidth: 1, borderBottomColor: 'rgba(187, 202, 191, 0.3)' },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  logoText: { fontSize: 24, fontWeight: '800', color: '#006c49', letterSpacing: -0.5 },
  headerRight: { flexDirection: 'row', alignItems: 'center', gap: 24, display: 'none' }, // hidden on mobile
  navBtn: {},
  navBtnTextPrimary: { fontSize: 12, fontWeight: '700', color: '#006c49', textTransform: 'uppercase' },
  navBtnText: { fontSize: 12, fontWeight: '700', color: '#3c4a42', textTransform: 'uppercase' },
  scrollContent: { padding: 24, paddingBottom: 100 },
  pageHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, marginBottom: 40 },
  pageHeaderLeft: { flex: 1, minWidth: 300 },
  pageTitle: { fontSize: 32, fontWeight: '700', color: '#191c1d' },
  pageSubtitle: { fontSize: 18, color: '#3c4a42', marginTop: 4 },
  liveCountCard: { flexDirection: 'row', alignItems: 'center', gap: 8, backgroundColor: 'rgba(109,245,225,0.3)', paddingHorizontal: 24, paddingVertical: 12, borderRadius: 8, borderWidth: 1, borderColor: '#6df5e1' },
  liveCountLabel: { fontSize: 12, fontWeight: '700', color: '#006f64' },
  liveCountValue: { fontSize: 28, fontWeight: '700', color: '#006f64' },
  grid: { flexDirection: 'column', gap: 40 },
  leftCol: { gap: 24 },
  gradesCard: { backgroundColor: 'rgba(255,255,255,0.8)', padding: 24, borderRadius: 16, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)' },
  gradesHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 },
  gradesTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d' },
  addNewBtn: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  addNewBtnText: { fontSize: 12, fontWeight: '700', color: '#006c49' },
  gradesList: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  gradeItem: { width: '48%', flexDirection: 'row', alignItems: 'center', gap: 12, padding: 12, borderRadius: 8, borderWidth: 1, borderColor: 'rgba(187,202,191,0.5)' },
  checkbox: { width: 24, height: 24, borderRadius: 12, borderWidth: 2, borderColor: '#006c49', alignItems: 'center', justifyContent: 'center' },
  checkboxChecked: { backgroundColor: '#006c49' },
  gradeItemText: { fontSize: 16, color: '#3c4a42' },
  gradeItemTextActive: { color: '#006c49' },
  uploadCard: { backgroundColor: 'rgba(0,108,73,0.05)', padding: 24, borderRadius: 16, borderWidth: 2, borderStyle: 'dashed', borderColor: 'rgba(0,108,73,0.2)', alignItems: 'center', gap: 12 },
  uploadText: { fontSize: 16, color: '#3c4a42', textAlign: 'center', maxWidth: 200 },
  uploadBtnText: { fontSize: 12, fontWeight: '700', color: '#006c49', borderBottomWidth: 2, borderBottomColor: 'rgba(0,108,73,0.3)', paddingBottom: 2 },
  rightCol: {},
  configCard: { backgroundColor: 'rgba(255,255,255,0.8)', padding: 24, borderRadius: 16, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)' },
  configHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40 },
  configTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d' },
  configInfo: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  configInfoText: { fontSize: 12, fontWeight: '700', color: '#3c4a42' },
  configList: { gap: 40 },
  configItem: { position: 'relative', backgroundColor: '#f3f4f5', padding: 24, borderRadius: 8, borderWidth: 1, borderColor: 'rgba(187,202,191,0.3)' },
  configItemIndicator: { position: 'absolute', left: -4, top: '50%', marginTop: -24, width: 4, height: 48, backgroundColor: '#006c49', borderRadius: 2 },
  configItemGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 24 },
  configFieldSmall: { flex: 1, minWidth: 150 },
  configFieldLarge: { flex: 2, minWidth: 250 },
  configLabel: { fontSize: 12, fontWeight: '700', color: '#3c4a42', marginBottom: 8 },
  inputWrapper: { position: 'relative', justifyContent: 'center' },
  input: { backgroundColor: '#fff', borderWidth: 1, borderColor: 'rgba(187,202,191,0.4)', borderRadius: 8, paddingHorizontal: 12, height: 48, fontSize: 16, color: '#191c1d' },
  inputIcon: { position: 'absolute', right: 12 },
  footerActions: { flexDirection: 'row', justifyContent: 'flex-end', gap: 24, marginTop: 64 },
  backBtn: { paddingHorizontal: 40, paddingVertical: 16, borderRadius: 32 },
  backBtnText: { fontSize: 12, fontWeight: '700', color: '#3c4a42' },
  continueBtn: { borderRadius: 32, overflow: 'hidden', elevation: 4 },
  continueBtnGradient: { flexDirection: 'row', alignItems: 'center', gap: 8, paddingHorizontal: 40, paddingVertical: 16 },
  continueBtnText: { fontSize: 12, fontWeight: '700', color: '#fff' },
});
