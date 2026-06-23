import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
  Dimensions,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../navigation/types';
import { Colors } from '../../../constants';

const { width: W } = Dimensions.get('window');
const PHOTO_SIZE = Math.round((W - 32 - 10) / 2.6); // dashed box + photo side by side

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ActivityForm'>;
  route: RouteProp<RootStackParamList, 'ActivityForm'>;
};

export default function ActivityFormScreen({ navigation }: Props) {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity]       = useState('');
  const [unit, setUnit]               = useState('');
  const [duration, setDuration]       = useState('');
  const [notes, setNotes]             = useState('');
  const [hasPhoto]                    = useState(true); // demo photo shown

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* ── Header ─────────────────────────── */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn} activeOpacity={0.7}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Activity Form</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">

        {/* ── What activity ──────────────────── */}
        <Text style={styles.labelCaps}>WHAT ACTIVITY DID YOU DO?</Text>
        <View style={styles.card}>
          <TextInput
            style={styles.textInput}
            placeholder="e.g., Recycled plastic bottles"
            placeholderTextColor={Colors.textLight}
            value={description}
            onChangeText={setDescription}
          />
        </View>

        {/* ── How much ───────────────────────── */}
        <Text style={[styles.label, { marginTop: 20 }]}>How much did you do?</Text>
        <View style={styles.card}>
          <View style={styles.quantityRow}>
            <TextInput
              style={styles.quantityNum}
              value={quantity}
              onChangeText={setQuantity}
              keyboardType="numeric"
              placeholder="0"
              placeholderTextColor={Colors.text}
            />
            <View style={styles.quantityDivider} />
            <TextInput
              style={styles.unitInput}
              placeholder="UNIT"
              placeholderTextColor={Colors.textSecondary}
              value={unit}
              onChangeText={setUnit}
              autoCapitalize="characters"
            />
          </View>
          <Text style={styles.quantityHint}>Use any unit you want (e.g. kg, items, bags)</Text>
        </View>

        {/* ── Duration ───────────────────────── */}
        <Text style={[styles.label, { marginTop: 20 }]}>Duration (Optional)</Text>
        <View style={styles.card}>
          <View style={styles.durationRow}>
            <Text style={styles.clockEmoji}>🕐</Text>
            <TextInput
              style={styles.durationInput}
              placeholder="e.g. 15 mins"
              placeholderTextColor={Colors.textLight}
              value={duration}
              onChangeText={setDuration}
            />
          </View>
        </View>

        {/* ── When ───────────────────────────── */}
        <Text style={[styles.label, { marginTop: 20 }]}>When did this happen?</Text>
        <TouchableOpacity style={styles.todayBtn} activeOpacity={0.85}>
          <Text style={styles.todayBtnTxt}>Today</Text>
        </TouchableOpacity>

        {/* ── Proof of impact ────────────────── */}
        <View style={styles.proofHeader}>
          <Text style={styles.proofLabel}>Proof of impact (Photos)</Text>
          <View style={styles.xpBadge}>
            <Text style={styles.xpBadgeTxt}>+50 XP bonus</Text>
          </View>
        </View>
        <View style={styles.photoRow}>
          {/* Dashed add box */}
          <TouchableOpacity style={styles.addPhotoBox} activeOpacity={0.7}>
            <Text style={styles.cameraEmoji}>📷</Text>
            <Text style={styles.addPhotoLbl}>ADD PHOTO</Text>
          </TouchableOpacity>

          {/* Demo photo thumbnail */}
          {hasPhoto && (
            <View style={styles.photoThumb}>
              <View style={[StyleSheet.absoluteFill, { backgroundColor: '#0D2B1A' }]} />
              <View style={[StyleSheet.absoluteFill, { backgroundColor: '#1A4D2E', opacity: 0.75 }]} />
              <Text style={styles.photoThumbEmoji}>🍾</Text>
            </View>
          )}
        </View>

        {/* ── Tell us more ───────────────────── */}
        <Text style={[styles.label, { marginTop: 20 }]}>Tell us more about it</Text>
        <View style={[styles.card, styles.textareaCard]}>
          <TextInput
            style={styles.textarea}
            placeholder="How did you feel? Any tips for others?"
            placeholderTextColor={Colors.textLight}
            value={notes}
            onChangeText={setNotes}
            multiline
            textAlignVertical="top"
          />
        </View>

        <View style={{ height: 24 }} />
      </ScrollView>

      {/* ── Sticky bottom ──────────────────── */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.submitBtn} activeOpacity={0.85} onPress={() => navigation.navigate('ActivitySubmitted')}>
          <View style={styles.checkCircle}>
            <Text style={styles.checkMark}>✓</Text>
          </View>
          <Text style={styles.submitTxt}>Submit Activity</Text>
        </TouchableOpacity>
        <Text style={styles.disclaimer}>
          Your activity will be reviewed by the community arena and contributes to your school's impact score.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F3F4F2' },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
  },
  backBtn: { padding: 4 },
  backArrow: { fontSize: 22, color: Colors.primaryDark, fontWeight: '600' },
  headerTitle: {
    flex: 1, textAlign: 'center',
    fontSize: 20, fontWeight: '800', color: Colors.primaryDark,
  },
  headerSpacer: { width: 32 },

  scroll: { padding: 16 },

  // Labels
  labelCaps: {
    fontSize: 11, fontWeight: '700', color: Colors.textSecondary,
    letterSpacing: 0.8, marginBottom: 8,
  },
  label: {
    fontSize: 15, fontWeight: '700', color: Colors.text,
    marginBottom: 8,
  },

  // Base card
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  textInput: {
    fontSize: 15, color: Colors.text,
    padding: 0,
  },

  // Quantity
  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  quantityNum: {
    fontSize: 52, fontWeight: '800', color: Colors.text,
    lineHeight: 58, minWidth: 70, textAlign: 'center',
    padding: 0,
  },
  quantityDivider: {
    width: 1, height: 50,
    backgroundColor: '#E5E7EB',
    marginHorizontal: 4,
  },
  unitInput: {
    flex: 1, paddingLeft: 14,
    fontSize: 16, fontWeight: '700', color: Colors.text,
    padding: 0,
  },
  quantityHint: {
    fontSize: 12, color: Colors.textLight,
  },

  // Duration
  durationRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  clockEmoji: { fontSize: 20 },
  durationInput: {
    flex: 1, fontSize: 15, color: Colors.text, padding: 0,
  },

  // Today button
  todayBtn: {
    alignSelf: 'flex-start',
    backgroundColor: Colors.primaryDark,
    borderRadius: 30,
    paddingHorizontal: 28,
    paddingVertical: 13,
  },
  todayBtnTxt: { fontSize: 15, fontWeight: '700', color: '#fff' },

  // Proof section
  proofHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 10,
  },
  proofLabel: { fontSize: 15, fontWeight: '700', color: Colors.text },
  xpBadge: {
    backgroundColor: '#D1FAE5',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  xpBadgeTxt: { fontSize: 12, fontWeight: '700', color: '#065F46' },

  photoRow: {
    flexDirection: 'row',
    gap: 10,
  },
  addPhotoBox: {
    width: PHOTO_SIZE, height: PHOTO_SIZE,
    borderWidth: 2, borderColor: '#C8CDD5', borderStyle: 'dashed',
    borderRadius: 14,
    backgroundColor: '#FAFAFA',
    alignItems: 'center', justifyContent: 'center',
    gap: 6,
  },
  cameraEmoji: { fontSize: 30 },
  addPhotoLbl: {
    fontSize: 11, fontWeight: '700',
    color: Colors.textSecondary, letterSpacing: 0.5,
  },
  photoThumb: {
    width: PHOTO_SIZE, height: PHOTO_SIZE,
    borderRadius: 14, overflow: 'hidden',
    alignItems: 'center', justifyContent: 'center',
  },
  photoThumbEmoji: { fontSize: 36, zIndex: 1 },

  // Textarea
  textareaCard: { minHeight: 110, paddingVertical: 14 },
  textarea: {
    fontSize: 15, color: Colors.text,
    padding: 0, minHeight: 80,
  },

  // Bottom bar
  bottomBar: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 24,
    borderTopWidth: 1,
    borderTopColor: '#EFEFEF',
  },
  submitBtn: {
    backgroundColor: Colors.buttonPrimary,
    borderRadius: 30,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 10,
  },
  checkCircle: {
    width: 26, height: 26, borderRadius: 13,
    backgroundColor: 'rgba(255,255,255,0.28)',
    alignItems: 'center', justifyContent: 'center',
  },
  checkMark: { fontSize: 14, color: '#fff', fontWeight: '800' },
  submitTxt: { fontSize: 16, fontWeight: '700', color: '#fff' },
  disclaimer: {
    fontSize: 12, color: Colors.textLight,
    textAlign: 'center', lineHeight: 18,
  },
});
