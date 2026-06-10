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
  navigation: NativeStackNavigationProp<RootStackParamList, 'TeacherCreateChallenge'>;
};

const AUDIENCE_OPTIONS = ['My Classes', 'All Classes', 'Specific Class'];

export default function TeacherCreateChallengeScreen({ navigation }: Props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [audience, setAudience] = useState('My Classes');
  const [xpPoints, setXpPoints] = useState('');
  const [ecoPoints, setEcoPoints] = useState('');
  const [showAudiencePicker, setShowAudiencePicker] = useState(false);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.surface} />

      {/* ── Header ── */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn} activeOpacity={0.7}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Create New Challenge</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled">

        {/* ── Upload area ── */}
        <TouchableOpacity style={styles.uploadArea} activeOpacity={0.75}>
          <View style={styles.cameraWrap}>
            <View style={styles.cameraCircle}>
              <Text style={styles.cameraEmoji}>📷</Text>
            </View>
            <View style={styles.plusBadge}>
              <Text style={styles.plusBadgeText}>+</Text>
            </View>
          </View>
          <Text style={styles.uploadTitle}>Upload Challenge Cover</Text>
          <Text style={styles.uploadSubtitle}>PNG, JPG up to 10MB (16:9 recommended)</Text>
        </TouchableOpacity>

        {/* ── Form card ── */}
        <View style={styles.formCard}>

          {/* Challenge Title */}
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>CHALLENGE TITLE</Text>
            <TextInput
              style={styles.input}
              value={title}
              onChangeText={setTitle}
              placeholder="e.g., The Plastic-Free Week Exp..."
              placeholderTextColor={Colors.textLight}
            />
          </View>

          <View style={styles.divider} />

          {/* Description */}
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>DESCRIPTION</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={description}
              onChangeText={setDescription}
              placeholder={'Describe the mission, the\nimpact, and why students\nshould join...'}
              placeholderTextColor={Colors.textLight}
              multiline
              numberOfLines={4}
              textAlignVertical="top"
            />
          </View>

          <View style={styles.divider} />

          {/* Start Date */}
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>START DATE</Text>
            <View style={styles.dateRow}>
              <TextInput
                style={styles.dateInput}
                value={startDate}
                onChangeText={setStartDate}
                placeholder="dd-mm-yyyy"
                placeholderTextColor={Colors.textSecondary}
              />
              <View style={styles.calendarIconWrap}>
                <Text style={styles.calendarIcon}>📅</Text>
              </View>
            </View>
          </View>

          <View style={styles.divider} />

          {/* End Date */}
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>END DATE</Text>
            <View style={styles.dateRow}>
              <TextInput
                style={styles.dateInput}
                value={endDate}
                onChangeText={setEndDate}
                placeholder="dd-mm-yyyy"
                placeholderTextColor={Colors.textSecondary}
              />
              <View style={styles.calendarIconWrap}>
                <Text style={styles.calendarIcon}>📅</Text>
              </View>
            </View>
          </View>

          <View style={styles.divider} />

          {/* Target Audience */}
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>TARGET AUDIENCE</Text>
            <TouchableOpacity
              style={styles.dropdown}
              onPress={() => setShowAudiencePicker(!showAudiencePicker)}
              activeOpacity={0.75}>
              <Text style={styles.dropdownValue}>{audience}</Text>
              <Text style={styles.dropdownChevron}>{'⌄⌄'}</Text>
            </TouchableOpacity>

            {showAudiencePicker && (
              <View style={styles.pickerSheet}>
                {AUDIENCE_OPTIONS.map(opt => (
                  <TouchableOpacity
                    key={opt}
                    style={styles.pickerOption}
                    onPress={() => { setAudience(opt); setShowAudiencePicker(false); }}
                    activeOpacity={0.7}>
                    <Text style={[
                      styles.pickerOptionText,
                      audience === opt && styles.pickerOptionTextActive,
                    ]}>
                      {opt}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          <View style={styles.divider} />

          {/* Rewards */}
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>REWARDS</Text>
            <View style={styles.rewardsRow}>
              {/* XP Points */}
              <View style={styles.rewardCol}>
                <Text style={styles.rewardSubLabel}>XP POINTS</Text>
                <View style={styles.rewardInputWrap}>
                  <View style={[styles.rewardIconCircle, { backgroundColor: '#1A5C38' }]}>
                    <Text style={styles.rewardIconText}>⭐</Text>
                  </View>
                  <TextInput
                    style={styles.rewardInput}
                    value={xpPoints}
                    onChangeText={setXpPoints}
                    placeholder="e.g., 10"
                    placeholderTextColor={Colors.textLight}
                    keyboardType="numeric"
                  />
                </View>
              </View>

              {/* Eco Points */}
              <View style={styles.rewardCol}>
                <Text style={styles.rewardSubLabel}>ECO POINTS</Text>
                <View style={styles.rewardInputWrap}>
                  <View style={[styles.rewardIconCircle, { backgroundColor: '#DDF5EA' }]}>
                    <Text style={styles.rewardIconText}>🌿</Text>
                  </View>
                  <TextInput
                    style={styles.rewardInput}
                    value={ecoPoints}
                    onChangeText={setEcoPoints}
                    placeholder="e.g., 5"
                    placeholderTextColor={Colors.textLight}
                    keyboardType="numeric"
                  />
                </View>
              </View>
            </View>
          </View>

        </View>

        {/* ── Submit button ── */}
        <TouchableOpacity
          style={styles.submitBtn}
          activeOpacity={0.85}
          onPress={() => navigation.goBack()}>
          <Text style={styles.submitBtnText}>Create Challenge</Text>
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
    paddingVertical: 14,
    gap: 10,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  backBtn: {
    padding: 4,
  },
  backArrow: {
    fontSize: 20,
    color: Colors.primaryDark,
    fontWeight: '600',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: Colors.text,
    letterSpacing: -0.3,
  },

  // Scroll
  scroll: {
    paddingBottom: 24,
  },

  // Upload area
  uploadArea: {
    margin: 16,
    borderWidth: 1.5,
    borderStyle: 'dashed',
    borderColor: '#CBD5E1',
    borderRadius: 16,
    backgroundColor: Colors.white,
    paddingVertical: 32,
    paddingHorizontal: 20,
    alignItems: 'center',
    gap: 8,
  },
  cameraWrap: {
    position: 'relative',
    marginBottom: 4,
  },
  cameraCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraEmoji: {
    fontSize: 24,
  },
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
    fontWeight: '600',
    color: Colors.text,
  },
  uploadSubtitle: {
    fontSize: 12,
    color: Colors.textSecondary,
    textAlign: 'center',
  },

  // Form card
  formCard: {
    marginHorizontal: 16,
    backgroundColor: Colors.white,
    borderRadius: 20,
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 1,
    borderWidth: 1,
    borderColor: Colors.border,
  },

  field: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    gap: 8,
  },
  fieldLabel: {
    fontSize: 11,
    fontWeight: '800',
    color: Colors.primaryDark,
    letterSpacing: 1,
  },
  input: {
    backgroundColor: '#F3F4F6',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    color: Colors.text,
  },
  textArea: {
    minHeight: 90,
    paddingTop: 12,
  },

  // Date row
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 10,
    overflow: 'hidden',
  },
  dateInput: {
    flex: 1,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    color: Colors.textSecondary,
  },
  calendarIconWrap: {
    paddingHorizontal: 12,
  },
  calendarIcon: {
    fontSize: 16,
  },

  // Dropdown
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  dropdownValue: {
    flex: 1,
    fontSize: 14,
    color: Colors.text,
    fontWeight: '500',
  },
  dropdownChevron: {
    fontSize: 10,
    color: Colors.textSecondary,
    letterSpacing: 2,
    fontWeight: '700',
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
    paddingVertical: 11,
    paddingHorizontal: 14,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  pickerOptionText: {
    fontSize: 14,
    color: Colors.text,
  },
  pickerOptionTextActive: {
    color: Colors.primaryDark,
    fontWeight: '700',
  },

  // Rewards
  rewardsRow: {
    flexDirection: 'row',
    gap: 12,
  },
  rewardCol: {
    flex: 1,
    gap: 6,
  },
  rewardSubLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: Colors.textSecondary,
    letterSpacing: 0.8,
  },
  rewardInputWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 22,
    paddingLeft: 6,
    paddingRight: 12,
    paddingVertical: 6,
    gap: 8,
  },
  rewardIconCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  rewardIconText: { fontSize: 14 },
  rewardInput: {
    flex: 1,
    fontSize: 13,
    color: Colors.text,
    paddingVertical: 2,
  },

  divider: {
    height: 1,
    backgroundColor: Colors.border,
    marginHorizontal: 16,
  },

  // Submit button
  submitBtn: {
    marginHorizontal: 16,
    marginTop: 20,
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
