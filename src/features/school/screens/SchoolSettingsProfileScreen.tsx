import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TextInput,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import { Colors } from '../../../constants';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SchoolSettingsProfile'>;
};

export default function SchoolSettingsProfileScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerBrand}>
          <Text style={styles.headerBrandIcon}>eco</Text>
          <Text style={styles.brandName}>EcoSchools Admin</Text>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>

        {/* Title Section */}
        <Text style={styles.title}>School Profile</Text>
        <Text style={styles.subtitle}>
          Manage your institution's identity, branding, and security preferences.
        </Text>

        {/* Tabs */}
        <View style={styles.tabsRow}>
          <TouchableOpacity style={[styles.tabPill, styles.tabPillActive]}>
            <Text style={[styles.tabText, styles.tabTextActive]}>GENERAL INFO</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabPill}>
            <Text style={styles.tabText}>NOTIFICATIONS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabPill}>
            <Text style={styles.tabText}>SECURITY</Text>
          </TouchableOpacity>
        </View>

        {/* Form Card */}
        <View style={styles.formCard}>
          <Text style={styles.cardTitle}>Institutional Details</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>SCHOOL NAME</Text>
            <TextInput
              style={styles.inputField}
              value="Oakwood Academy of Sustainability"
              editable={true}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>INSTITUTION ID</Text>
            <TextInput
              style={[styles.inputField, styles.inputFieldDisabled]}
              value="OAK-2024-SYS-01"
              editable={false}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>PHYSICAL ADDRESS</Text>
            <TextInput
              style={styles.textArea}
              value="1221 Forest Canopy Way,&#10;Green Valley, CA 90210&#10;United States"
              multiline={true}
              numberOfLines={3}
              textAlignVertical="top"
              editable={true}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>PRIMARY CONTACT EMAIL</Text>
            <TextInput
              style={styles.inputField}
              value="admin@oakwoodacademy.edu"
              editable={true}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>PHONE NUMBER</Text>
            <TextInput
              style={styles.inputField}
              value="+1 (555) 890-2341"
              editable={true}
            />
          </View>

          <View style={styles.saveBtnContainer}>
            <TouchableOpacity style={styles.saveBtn}>
              <Text style={styles.saveBtnText}>SAVE CHANGES</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Quick Stats Card */}
        <View style={styles.statsCard}>
          <Text style={styles.statsTitle}>QUICK STATS</Text>
          
          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Active Students</Text>
            <Text style={styles.statValue}>1,240</Text>
          </View>
          
          <View style={[styles.statRow, { marginBottom: 0 }]}>
            <Text style={styles.statLabel}>Faculty Members</Text>
            <Text style={styles.statValue}>86</Text>
          </View>
        </View>

        <View style={styles.bottomPad} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: '#F8FAFC',
  },
  headerBrand: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerBrandIcon: {
    fontSize: 16,
    color: '#059669',
    fontWeight: '800',
    marginRight: 4,
  },
  brandName: {
    fontSize: 16,
    fontWeight: '800',
    color: '#004D40',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#002B36',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 12,
    color: '#475569',
    lineHeight: 18,
    marginBottom: 24,
  },
  tabsRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 24,
  },
  tabPill: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
  },
  tabPillActive: {
    backgroundColor: '#004D40',
  },
  tabText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#64748B',
    letterSpacing: 0.5,
  },
  tabTextActive: {
    color: Colors.white,
  },
  formCard: {
    backgroundColor: Colors.white,
    borderRadius: 24,
    padding: 24,
    marginBottom: 24,
    shadowColor: Colors.cardShadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.03,
    shadowRadius: 10,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#002B36',
    marginBottom: 24,
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 9,
    fontWeight: '800',
    color: '#002B36',
    letterSpacing: 1,
    marginBottom: 8,
  },
  inputField: {
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 13,
    color: '#004D40', // dark green text from design
    backgroundColor: Colors.white,
  },
  inputFieldDisabled: {
    backgroundColor: '#F1F5F9',
    color: '#64748B',
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 13,
    color: '#004D40',
    backgroundColor: Colors.white,
    minHeight: 80,
  },
  saveBtnContainer: {
    alignItems: 'flex-end',
    marginTop: 8,
  },
  saveBtn: {
    backgroundColor: '#006D5B',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 20,
  },
  saveBtnText: {
    color: Colors.white,
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  statsCard: {
    backgroundColor: Colors.white,
    borderRadius: 24,
    padding: 24,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#ECFDF5',
    shadowColor: Colors.cardShadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.03,
    shadowRadius: 10,
    elevation: 2,
  },
  statsTitle: {
    fontSize: 9,
    fontWeight: '800',
    color: '#64748B',
    letterSpacing: 1,
    marginBottom: 16,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 16,
  },
  statLabel: {
    fontSize: 12,
    color: '#475569',
  },
  statValue: {
    fontSize: 22,
    fontWeight: '800',
    color: '#006D5B', // Teal number
  },
  bottomPad: {
    height: 40,
  },
});
