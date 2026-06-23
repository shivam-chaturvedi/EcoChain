import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ChallengeDateSelectionScreen({ navigation }: any) {
  const [selectedDays, setSelectedDays] = useState<number[]>([]);
  const targetDays = 5;

  const toggleDay = (day: number) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter(d => d !== day));
    } else {
      if (selectedDays.length < targetDays) {
        setSelectedDays([...selectedDays, day]);
      }
    }
  };

  const isSelected = (day: number) => selectedDays.includes(day);
  const canConfirm = selectedDays.length === targetDays;

  // Placeholder calendar logic (October 2024 starts on Tue)
  const emptyDays = 1;
  const daysInMonth = 31;
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} color="#191c1d" />
          </TouchableOpacity>
          <Text style={styles.logoText}>ChonX</Text>
        </View>
        <View style={styles.headerRight}>
          <View style={styles.xpWrapper}>
            <Icon name="bolt" size={20} color="#006c49" />
            <Text style={styles.xpText}>2,450 XP</Text>
          </View>
          <Image
            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWbrOZfOVaBnEnzPas2P3qXOexY4N1RAVzPBR4kj-b6ef7dUfMUN4VrBmwQxoedNQ6QfsghQwdVvhRtcbmlLZ_PSDV_eswF_iGMwlhEemSxTUeqSeora_KXn23Dkd3jeiw0SDx6kVkpeH3aCnwNAJgRvhHRcIRxucNrB1jNqZWXbvwiTb5P9hrd26vY0pc2K2oAMHlE1O5EPYMQFQPXfjwm6hNXth8Ps1eX4NIVqX7Uq5UzBIMCKd1z8N_6hs8f_WMVjXKZk2CzF4w' }}
            style={styles.avatar}
          />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <Text style={styles.heroTitle}>The Green Commuter</Text>
          <Text style={styles.heroSubtitle}>
            Reduce your carbon footprint by choosing eco-friendly travel options. Select 5 days this month to bike, walk, or use public transport to school.
          </Text>
          <View style={styles.rewardsRow}>
            <View style={styles.rewardBadgePrimary}>
              <Icon name="military-tech" size={20} color="#006c49" />
              <Text style={styles.rewardTextPrimary}>500 XP</Text>
            </View>
            <View style={styles.rewardBadgeSecondary}>
              <Icon name="eco" size={20} color="#006b5f" />
              <Text style={styles.rewardTextSecondary}>150 EcoPoints</Text>
            </View>
          </View>
        </View>

        {/* Interaction Area */}
        <View style={styles.interactionArea}>
          {/* Calendar Section */}
          <View style={styles.calendarCard}>
            <View style={styles.calendarHeader}>
              <Text style={styles.calendarTitle}>Commit to your days</Text>
              <View style={styles.monthSelector}>
                <TouchableOpacity><Icon name="chevron-left" size={24} color="#191c1d" /></TouchableOpacity>
                <Text style={styles.monthText}>October 2024</Text>
                <TouchableOpacity><Icon name="chevron-right" size={24} color="#191c1d" /></TouchableOpacity>
              </View>
            </View>

            <View style={styles.weekDaysRow}>
              {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day, idx) => (
                <Text key={idx} style={styles.weekDayText}>{day}</Text>
              ))}
            </View>

            <View style={styles.daysGrid}>
              {Array.from({ length: emptyDays }).map((_, idx) => (
                <View key={`empty-${idx}`} style={styles.dayTileEmpty} />
              ))}
              {daysArray.map((day) => (
                <TouchableOpacity
                  key={day}
                  style={[styles.dayTile, isSelected(day) && styles.dayTileSelected]}
                  onPress={() => toggleDay(day)}
                  activeOpacity={0.7}
                >
                  <Text style={[styles.dayText, isSelected(day) && styles.dayTextSelected]}>{day}</Text>
                  <View style={[styles.dayDot, isSelected(day) && styles.dayDotSelected]} />
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Action Area */}
          <View style={styles.actionArea}>
            <TouchableOpacity 
              style={[styles.confirmBtn, !canConfirm && styles.confirmBtnDisabled]}
              disabled={!canConfirm}
              onPress={() => navigation.navigate('ChallengesOverview')}
            >
              <Icon name="calendar-today" size={24} color="#ffffff" />
              <Text style={styles.confirmBtnText}>Confirm & Add to Calendar</Text>
            </TouchableOpacity>
            <Text style={{textAlign: 'center', marginTop: 12, color: '#3c4a42'}}>Selected {selectedDays.length} / {targetDays} days</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, height: 64, backgroundColor: 'rgba(248,249,250,0.8)', borderBottomWidth: 1, borderBottomColor: 'rgba(187,202,191,0.3)' },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  backBtn: { width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  logoText: { fontSize: 24, fontWeight: '800', color: '#006c49' },
  headerRight: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  xpWrapper: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  xpText: { fontSize: 14, fontWeight: '700', color: '#006c49' },
  avatar: { width: 40, height: 40, borderRadius: 20, borderWidth: 2, borderColor: '#10b981' },
  scrollContent: { paddingHorizontal: 24, paddingTop: 24, paddingBottom: 100 },
  heroSection: { marginBottom: 40 },
  heroTitle: { fontSize: 32, fontWeight: '700', color: '#191c1d', marginBottom: 8 },
  heroSubtitle: { fontSize: 18, color: '#3c4a42', lineHeight: 28, marginBottom: 16 },
  rewardsRow: { flexDirection: 'row', gap: 12, flexWrap: 'wrap' },
  rewardBadgePrimary: { flexDirection: 'row', alignItems: 'center', gap: 8, paddingHorizontal: 16, paddingVertical: 8, backgroundColor: 'rgba(16,185,129,0.1)', borderRadius: 24, borderWidth: 1, borderColor: 'rgba(16,185,129,0.2)' },
  rewardTextPrimary: { fontSize: 16, fontWeight: '700', color: '#3c4a42' },
  rewardBadgeSecondary: { flexDirection: 'row', alignItems: 'center', gap: 8, paddingHorizontal: 16, paddingVertical: 8, backgroundColor: 'rgba(109,245,225,0.2)', borderRadius: 24, borderWidth: 1, borderColor: 'rgba(109,245,225,0.3)' },
  rewardTextSecondary: { fontSize: 16, fontWeight: '700', color: '#3c4a42' },
  interactionArea: { gap: 24 },
  calendarCard: { backgroundColor: 'rgba(255,255,255,0.7)', padding: 24, borderRadius: 16, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)' },
  calendarHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 },
  calendarTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d' },
  monthSelector: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  monthText: { fontSize: 16, fontWeight: '700', color: '#191c1d' },
  weekDaysRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  weekDayText: { flex: 1, textAlign: 'center', fontSize: 12, fontWeight: '700', color: '#3c4a42' },
  daysGrid: { flexDirection: 'row', flexWrap: 'wrap' },
  dayTileEmpty: { width: `${100/7}%`, aspectRatio: 1 },
  dayTile: { width: `${100/7}%`, aspectRatio: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 8, borderWidth: 1, borderColor: 'rgba(187,202,191,0.3)', margin: 2 },
  dayTileSelected: { backgroundColor: '#10b981', borderColor: '#10b981' },
  dayText: { fontSize: 18, fontWeight: '700', color: '#191c1d' },
  dayTextSelected: { color: '#ffffff' },
  dayDot: { width: 4, height: 4, borderRadius: 2, backgroundColor: 'transparent', marginTop: 4 },
  dayDotSelected: { backgroundColor: '#ffffff' },
  actionArea: { marginTop: 16 },
  confirmBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, paddingVertical: 16, backgroundColor: '#006c49', borderRadius: 12 },
  confirmBtnDisabled: { opacity: 0.5 },
  confirmBtnText: { fontSize: 16, fontWeight: '700', color: '#ffffff' },
});
