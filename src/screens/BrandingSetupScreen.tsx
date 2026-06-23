import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const primaryColors = ['#006c49', '#005ac2', '#6b21a8', '#be185d'];
const secondaryColors = ['#10b981', '#71f8e4', '#fbbf24', '#6366f1'];

export default function BrandingSetupScreen({ navigation }: any) {
  const [activePrimary, setActivePrimary] = useState(0);
  const [activeSecondary, setActiveSecondary] = useState(1);
  const [hexCode, setHexCode] = useState('#006C49');

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Icon name="eco" size={28} color="#006c49" />
          <Text style={styles.logoText}>ChonX</Text>
        </View>
        <View style={styles.headerLinks}>
          <Text style={styles.headerLinkActive}>Setup</Text>
          <Text style={styles.headerLink}>Community</Text>
          <Text style={styles.headerLink}>Analytics</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.notifBtn}><Icon name="notifications" size={24} color="#3c4a42" /></TouchableOpacity>
          <View style={styles.avatarInitials}><Text style={styles.initialsText}>JD</Text></View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Title */}
        <View style={styles.titleSection}>
          <Text style={styles.title}>Branding Setup</Text>
          <Text style={styles.subtitle}>Customize your school's digital identity to inspire your students.</Text>
        </View>

        {/* Logo Upload Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Icon name="upload-file" size={24} color="#006c49" />
            <Text style={styles.cardTitle}>Upload School Logo</Text>
          </View>
          <TouchableOpacity style={styles.uploadZone} activeOpacity={0.8}>
            <View style={styles.uploadIconCircle}>
              <Icon name="cloud-upload" size={32} color="#006c49" />
            </View>
            <Text style={styles.uploadText}>Click to upload or drag and drop</Text>
            <Text style={styles.uploadHint}>SVG, PNG, JPG (MAX. 800x400px)</Text>
          </TouchableOpacity>
          <View style={styles.infoBox}>
            <Icon name="info" size={20} color="#006c49" />
            <Text style={styles.infoText}>Recommended: High-resolution PNG with transparency for the best look in dark mode.</Text>
          </View>
        </View>

        {/* Color Palette Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Icon name="palette" size={24} color="#006c49" />
            <Text style={styles.cardTitle}>School Theme Colors</Text>
          </View>

          <Text style={styles.colorLabel}>Primary Brand Color</Text>
          <View style={styles.swatchRow}>
            {primaryColors.map((color, i) => (
              <TouchableOpacity
                key={i}
                style={[styles.swatch, { backgroundColor: color }, activePrimary === i && styles.swatchActive]}
                onPress={() => { setActivePrimary(i); setHexCode(color.toUpperCase()); }}
              />
            ))}
            <TouchableOpacity style={styles.swatchAdd}>
              <Icon name="add" size={16} color="#3c4a42" />
            </TouchableOpacity>
          </View>

          <Text style={styles.colorLabel}>Secondary Accent</Text>
          <View style={styles.swatchRow}>
            {secondaryColors.map((color, i) => (
              <TouchableOpacity
                key={i}
                style={[styles.swatch, { backgroundColor: color }, activeSecondary === i && styles.swatchActive]}
                onPress={() => setActiveSecondary(i)}
              />
            ))}
            <TouchableOpacity style={styles.swatchAdd}>
              <Icon name="colorize" size={16} color="#3c4a42" />
            </TouchableOpacity>
          </View>

          {/* HEX Input */}
          <View style={styles.hexInputContainer}>
            <TextInput
              style={styles.hexInput}
              value={hexCode}
              onChangeText={setHexCode}
              autoCapitalize="characters"
            />
            <Text style={styles.hexLabel}>HEX CODE</Text>
          </View>
        </View>

        {/* Preview Card */}
        <View style={styles.previewCard}>
          <View style={styles.previewHeader}>
            <View>
              <Text style={styles.cardTitle}>Interface Preview</Text>
              <Text style={styles.subtitle}>See how your branding appears to students.</Text>
            </View>
            <TouchableOpacity style={styles.saveBtn}>
              <Text style={styles.saveBtnText}>Save Branding</Text>
            </TouchableOpacity>
          </View>

          {/* Mock UI */}
          <View style={styles.mockUI}>
            <View style={styles.mockSidebar}>
              <View style={styles.mockLogoPlaceholder} />
              <View style={styles.mockSidebarItemActive}>
                <Icon name="dashboard" size={14} color="#00422b" />
                <Text style={styles.mockSidebarTextActive}>Dashboard</Text>
              </View>
              <View style={styles.mockSidebarItem}>
                <Icon name="workspace-premium" size={14} color="#3c4a42" />
                <Text style={styles.mockSidebarText}>Achievements</Text>
              </View>
              <View style={styles.mockSidebarItem}>
                <Icon name="group" size={14} color="#3c4a42" />
                <Text style={styles.mockSidebarText}>Leaderboard</Text>
              </View>
            </View>
            <View style={styles.mockContent}>
              <View style={styles.mockStatCard}>
                <Icon name="bolt" size={28} color="#ffffff" />
                <Text style={styles.mockStatLabel}>DAILY CHALLENGE</Text>
                <Text style={styles.mockStatValue}>Level 12</Text>
                <View style={styles.mockStatBtn}><Text style={styles.mockStatBtnText}>Keep Going!</Text></View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItemActive}>
          <Icon name="donut-large" size={24} color="#00422b" />
          <Text style={styles.navTextActive}>Progress</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="help-outline" size={24} color="#3c4a42" />
          <Text style={styles.navText}>Help</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="close" size={24} color="#3c4a42" />
          <Text style={styles.navText}>Exit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, height: 80, backgroundColor: 'rgba(248,249,250,0.8)', borderBottomWidth: 1, borderBottomColor: 'rgba(187,202,191,0.3)' },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  logoText: { fontSize: 24, fontWeight: '800', color: '#006c49' },
  headerLinks: { flexDirection: 'row', gap: 16 },
  headerLinkActive: { fontSize: 12, fontWeight: '700', color: '#006c49', letterSpacing: 0.5 },
  headerLink: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 0.5, opacity: 0.7 },
  headerRight: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  notifBtn: { padding: 8, borderRadius: 20 },
  avatarInitials: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#10b981', alignItems: 'center', justifyContent: 'center' },
  initialsText: { fontSize: 14, fontWeight: '700', color: '#00422b' },
  scrollContent: { paddingHorizontal: 24, paddingTop: 32, paddingBottom: 120 },
  titleSection: { marginBottom: 24 },
  title: { fontSize: 32, fontWeight: '700', color: '#191c1d', marginBottom: 8, letterSpacing: -0.5 },
  subtitle: { fontSize: 18, color: '#3c4a42', lineHeight: 26 },
  card: { backgroundColor: '#ffffff', borderRadius: 16, padding: 24, borderWidth: 1, borderColor: 'rgba(187,202,191,0.3)', marginBottom: 24, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.04, shadowRadius: 8 },
  cardHeader: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 24 },
  cardTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d' },
  uploadZone: { borderWidth: 2, borderStyle: 'dashed', borderColor: 'rgba(187,202,191,0.5)', borderRadius: 16, height: 200, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f3f4f5' },
  uploadIconCircle: { width: 64, height: 64, borderRadius: 32, backgroundColor: 'rgba(16,185,129,0.2)', alignItems: 'center', justifyContent: 'center', marginBottom: 16 },
  uploadText: { fontSize: 16, fontWeight: '700', color: '#191c1d', marginBottom: 8 },
  uploadHint: { fontSize: 12, color: '#3c4a42' },
  infoBox: { flexDirection: 'row', alignItems: 'flex-start', backgroundColor: 'rgba(16,185,129,0.1)', padding: 12, borderRadius: 12, borderWidth: 1, borderColor: 'rgba(0,108,73,0.2)', marginTop: 16, gap: 8 },
  infoText: { flex: 1, fontSize: 12, color: '#00422b', lineHeight: 18 },
  colorLabel: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 0.5, marginBottom: 8 },
  swatchRow: { flexDirection: 'row', gap: 12, marginBottom: 24 },
  swatch: { width: 44, height: 44, borderRadius: 12 },
  swatchActive: { borderWidth: 3, borderColor: '#10b981', transform: [{ scale: 1.1 }] },
  swatchAdd: { width: 44, height: 44, borderRadius: 12, backgroundColor: '#e7e8e9', alignItems: 'center', justifyContent: 'center' },
  hexInputContainer: { position: 'relative' },
  hexInput: { backgroundColor: '#f3f4f5', borderRadius: 16, paddingHorizontal: 16, paddingVertical: 14, fontSize: 16, fontWeight: '700', color: '#191c1d' },
  hexLabel: { position: 'absolute', right: 16, top: '50%', fontSize: 10, fontWeight: '700', color: '#6c7a71', letterSpacing: 0.5 },
  previewCard: { backgroundColor: 'rgba(231,232,233,0.5)', borderRadius: 16, padding: 24, borderWidth: 1, borderColor: 'rgba(187,202,191,0.2)' },
  previewHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 },
  saveBtn: { backgroundColor: '#006c49', paddingHorizontal: 24, paddingVertical: 12, borderRadius: 24, shadowColor: '#006c49', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 8 },
  saveBtnText: { fontSize: 16, fontWeight: '700', color: '#ffffff' },
  mockUI: { flexDirection: 'row', backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: 16, borderWidth: 1, borderColor: 'rgba(255,255,255,0.4)', overflow: 'hidden', minHeight: 180 },
  mockSidebar: { width: 120, backgroundColor: 'rgba(248,249,250,0.8)', padding: 16, gap: 8 },
  mockLogoPlaceholder: { width: 80, height: 20, backgroundColor: 'rgba(0,108,73,0.2)', borderRadius: 6, marginBottom: 16 },
  mockSidebarItemActive: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#10b981', borderRadius: 12, paddingHorizontal: 8, paddingVertical: 8, gap: 6 },
  mockSidebarTextActive: { fontSize: 10, fontWeight: '700', color: '#00422b' },
  mockSidebarItem: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 8, paddingVertical: 8, gap: 6 },
  mockSidebarText: { fontSize: 10, color: '#3c4a42' },
  mockContent: { flex: 1, padding: 16 },
  mockStatCard: { backgroundColor: '#006c49', borderRadius: 16, padding: 16, height: '100%', justifyContent: 'space-between' },
  mockStatLabel: { fontSize: 10, fontWeight: '700', color: 'rgba(255,255,255,0.8)', letterSpacing: 0.5, marginTop: 4 },
  mockStatValue: { fontSize: 28, fontWeight: '700', color: '#ffffff' },
  mockStatBtn: { backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: 24, paddingVertical: 8, alignItems: 'center' },
  mockStatBtnText: { fontSize: 12, fontWeight: '700', color: '#ffffff' },
  bottomNav: { position: 'absolute', bottom: 0, left: 0, right: 0, height: 96, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'rgba(248,249,250,0.9)', borderTopWidth: 1, borderTopColor: 'rgba(187,202,191,0.2)', paddingBottom: 20 },
  navItem: { alignItems: 'center', paddingHorizontal: 24 },
  navItemActive: { alignItems: 'center', paddingHorizontal: 24, paddingVertical: 8, backgroundColor: 'rgba(16,185,129,0.2)', borderRadius: 24 },
  navText: { fontSize: 12, fontWeight: '700', color: '#3c4a42', marginTop: 4 },
  navTextActive: { fontSize: 12, fontWeight: '700', color: '#00422b', marginTop: 4 },
});
