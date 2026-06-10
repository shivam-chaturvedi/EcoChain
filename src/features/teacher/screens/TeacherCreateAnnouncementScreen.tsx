import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import { Colors } from '../../../constants';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'TeacherCreateAnnouncement'>;
};

const AUDIENCE_OPTIONS = ['Whole School', 'Teachers Only', 'Students Only', 'Grade 10-12', 'Grade 9-B'];

export default function TeacherCreateAnnouncementScreen({ navigation }: Props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [audience, setAudience] = useState('Whole School');
  const [showPicker, setShowPicker] = useState(false);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.surface} />

      {/* ── Header ── */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn} activeOpacity={0.7}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.brandText}>ChonX</Text>
        <TouchableOpacity style={styles.bellBtn} activeOpacity={0.7}>
          <Text style={styles.bellText}>🔔</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled">

        {/* ── Title block ── */}
        <View style={styles.titleBlock}>
          <Text style={styles.pageTitle}>Create New{'\n'}Announcement</Text>
          <Text style={styles.pageSubtitle}>Design a purposeful experience for your eco-community.</Text>
        </View>

        {/* ── Text fields card ── */}
        <View style={styles.card}>
          <Text style={styles.fieldLabel}>Announcement Title</Text>
          <TextInput
            style={styles.outlinedInput}
            value={title}
            onChangeText={setTitle}
            placeholder="e.g., Campus Reforestation Initiati..."
            placeholderTextColor={Colors.textLight}
          />

          <Text style={[styles.fieldLabel, { marginTop: 20 }]}>Description</Text>
          <TextInput
            style={[styles.outlinedInput, styles.textArea]}
            value={description}
            onChangeText={setDescription}
            placeholder={'Describe the mission, activities,\nand what participants should\nbring...'}
            placeholderTextColor={Colors.textLight}
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />
        </View>

        {/* ── Visual Assets card ── */}
        <View style={styles.card}>
          <View style={styles.cardTitleRow}>
            <Text style={styles.cardTitleIcon}>📋</Text>
            <Text style={styles.cardTitle}>Visual Assets</Text>
          </View>

          <TouchableOpacity style={styles.uploadBox} activeOpacity={0.75}>
            <View style={styles.cameraWrap}>
              <View style={styles.cameraCircle}>
                <Text style={styles.cameraEmoji}>📷</Text>
              </View>
              <View style={styles.plusBadge}>
                <Text style={styles.plusBadgeText}>+</Text>
              </View>
            </View>
            <Text style={styles.uploadTitle}>Upload Cover Image</Text>
            <Text style={styles.uploadSubtitle}>PNG, JPG, or GIF up to{'\n'}10MB (16:9 Recommended)</Text>
            <View style={styles.selectFileBtn}>
              <Text style={styles.selectFileBtnText}>Select File</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* ── Audience card ── */}
        <View style={styles.card}>
          <Text style={styles.audienceHeading}>Audience</Text>

          <Text style={[styles.fieldLabel, { marginTop: 12 }]}>Target Audience</Text>
          <TouchableOpacity
            style={styles.dropdown}
            onPress={() => setShowPicker(!showPicker)}
            activeOpacity={0.75}>
            <Text style={styles.dropdownValue}>{audience}</Text>
            <Text style={styles.dropdownChevron}>∨</Text>
          </TouchableOpacity>

          {showPicker && (
            <View style={styles.pickerSheet}>
              {AUDIENCE_OPTIONS.map(opt => (
                <TouchableOpacity
                  key={opt}
                  style={styles.pickerOption}
                  onPress={() => { setAudience(opt); setShowPicker(false); }}
                  activeOpacity={0.7}>
                  <Text style={[styles.pickerOptionText, audience === opt && styles.pickerOptionActive]}>
                    {opt}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

          <View style={styles.verifiedRow}>
            <Text style={styles.shieldIcon}>🛡️</Text>
            <Text style={styles.verifiedText}>Verified student organizers only</Text>
          </View>
        </View>

        {/* ── Live Preview ── */}
        <View style={styles.livePreviewCard}>
          <View style={styles.livePreviewBg}>
            <Text style={styles.livePreviewBgEmoji}>🌿</Text>
            <View style={styles.livePreviewOverlay} />
          </View>
          <View style={styles.livePreviewBadge}>
            <Text style={styles.livePreviewBadgeText}>Live Preview</Text>
          </View>
        </View>

        {/* ── Submit ── */}
        <TouchableOpacity
          style={styles.submitBtn}
          activeOpacity={0.85}
          onPress={() => navigation.goBack()}>
          <Text style={styles.submitBtnText}>Post Announcement</Text>
        </TouchableOpacity>

        <View style={{ height: 32 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Colors.surface,
  },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: Colors.surface,
  },
  backBtn: { padding: 4 },
  backArrow: {
    fontSize: 20,
    color: Colors.primaryDark,
    fontWeight: '700',
  },
  brandText: {
    flex: 1,
    fontSize: 18,
    fontWeight: '900',
    color: Colors.primaryDark,
    letterSpacing: -0.4,
    marginLeft: 8,
  },
  bellBtn: { padding: 4 },
  bellText: { fontSize: 20 },

  // Scroll
  scroll: { paddingBottom: 24 },

  // Title block
  titleBlock: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 20,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: '900',
    color: Colors.text,
    letterSpacing: -0.7,
    lineHeight: 34,
    marginBottom: 8,
  },
  pageSubtitle: {
    fontSize: 13,
    color: Colors.textSecondary,
    lineHeight: 19,
  },

  // Card
  card: {
    backgroundColor: Colors.white,
    borderRadius: 18,
    padding: 18,
    marginHorizontal: 16,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 1,
    borderWidth: 1,
    borderColor: Colors.border,
  },

  // Fields
  fieldLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.textSecondary,
    marginBottom: 8,
  },
  outlinedInput: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 11,
    fontSize: 14,
    color: Colors.text,
    backgroundColor: Colors.white,
  },
  textArea: {
    minHeight: 90,
    paddingTop: 11,
  },

  // Card title row (Visual Assets)
  cardTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 14,
  },
  cardTitleIcon: { fontSize: 18, color: Colors.primaryDark },
  cardTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: Colors.text,
    letterSpacing: -0.2,
  },

  // Upload box
  uploadBox: {
    borderWidth: 1.5,
    borderStyle: 'dashed',
    borderColor: Colors.primaryLight,
    borderRadius: 14,
    paddingVertical: 28,
    paddingHorizontal: 20,
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#F7FDF9',
  },
  cameraWrap: {
    position: 'relative',
    marginBottom: 4,
  },
  cameraCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#DDF5EA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraEmoji: { fontSize: 24 },
  plusBadge: {
    position: 'absolute',
    top: -2,
    right: -4,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: Colors.primaryDark,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: Colors.white,
  },
  plusBadgeText: {
    fontSize: 12,
    color: Colors.white,
    fontWeight: '700',
    lineHeight: 14,
  },
  uploadTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.text,
  },
  uploadSubtitle: {
    fontSize: 12,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 18,
  },
  selectFileBtn: {
    marginTop: 4,
    borderWidth: 1,
    borderColor: Colors.primaryLight,
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 7,
  },
  selectFileBtnText: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.primaryDark,
  },

  // Audience
  audienceHeading: {
    fontSize: 18,
    fontWeight: '800',
    color: Colors.primaryDark,
    letterSpacing: -0.2,
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: Colors.white,
  },
  dropdownValue: {
    flex: 1,
    fontSize: 14,
    color: Colors.text,
    fontWeight: '500',
  },
  dropdownChevron: {
    fontSize: 13,
    color: Colors.textSecondary,
  },
  pickerSheet: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.border,
    marginTop: 4,
    overflow: 'hidden',
  },
  pickerOption: {
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  pickerOptionText: {
    fontSize: 14,
    color: Colors.text,
  },
  pickerOptionActive: {
    color: Colors.primaryDark,
    fontWeight: '700',
  },
  verifiedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 14,
  },
  shieldIcon: { fontSize: 14 },
  verifiedText: {
    fontSize: 13,
    color: Colors.primaryDark,
    fontWeight: '600',
  },

  // Live Preview
  livePreviewCard: {
    marginHorizontal: 16,
    marginBottom: 14,
    borderRadius: 18,
    height: 170,
    overflow: 'hidden',
  },
  livePreviewBg: {
    flex: 1,
    backgroundColor: '#0D2B1A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  livePreviewBgEmoji: {
    fontSize: 80,
    opacity: 0.4,
  },
  livePreviewOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,40,10,0.55)',
  },
  livePreviewBadge: {
    position: 'absolute',
    bottom: 12,
    left: 12,
    backgroundColor: 'rgba(0,0,0,0.65)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  livePreviewBadgeText: {
    fontSize: 11,
    color: Colors.white,
    fontWeight: '700',
  },

  // Submit button
  submitBtn: {
    marginHorizontal: 16,
    backgroundColor: Colors.primaryDark,
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: Colors.primaryDark,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  submitBtnText: {
    fontSize: 16,
    fontWeight: '800',
    color: Colors.white,
    letterSpacing: -0.2,
  },
});
