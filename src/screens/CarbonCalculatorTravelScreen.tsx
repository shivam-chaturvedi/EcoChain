import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Slider from '@react-native-community/slider';

export default function CarbonCalculatorTravelScreen({ navigation }: any) {
  const [selectedMode, setSelectedMode] = useState('bus');
  const [distance, setDistance] = useState(12);

  const modes = [
    { id: 'bus', icon: 'directions-bus', label: 'Bus' },
    { id: 'car', icon: 'directions-car', label: 'Car' },
    { id: 'walking', icon: 'directions-walk', label: 'Walking' },
    { id: 'cycle', icon: 'directions-bike', label: 'Cycle' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.iconCircle}>
            <Icon name="eco" size={24} color="#ffffff" />
          </View>
          <Text style={styles.logoText}>EcoSystem</Text>
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.stepText}>STEP 2 OF 5</Text>
          <View style={styles.xpBadge}>
            <Icon name="bolt" size={18} color="#006c49" />
            <Text style={styles.xpText}>1,250 XP</Text>
          </View>
        </View>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: '40%' }]} />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.glassPanel}>
          {/* Question Header */}
          <View style={styles.questionHeader}>
            <Text style={styles.questionTitle}>How do you get to school?</Text>
            <Text style={styles.questionSubtitle}>Your travel choices help us estimate your weekly carbon footprint.</Text>
          </View>

          {/* Options Grid */}
          <View style={styles.optionsGrid}>
            {modes.map((mode) => (
              <TouchableOpacity
                key={mode.id}
                style={[styles.optionCard, selectedMode === mode.id && styles.optionCardSelected]}
                onPress={() => setSelectedMode(mode.id)}
                activeOpacity={0.8}
              >
                <View style={[styles.optionIconCircle, selectedMode === mode.id && styles.optionIconCircleSelected]}>
                  <Icon name={mode.icon} size={32} color={selectedMode === mode.id ? '#00422b' : '#3c4a42'} />
                </View>
                <Text style={[styles.optionLabel, selectedMode === mode.id && styles.optionLabelSelected]}>
                  {mode.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Distance Slider */}
          <View style={styles.sliderSection}>
            <View style={styles.sliderHeader}>
              <View style={styles.sliderHeaderLeft}>
                <View style={styles.mapIconCircle}>
                  <Icon name="map" size={24} color="#006c49" />
                </View>
                <View>
                  <Text style={styles.sliderLabel}>ONE-WAY DISTANCE</Text>
                  <Text style={styles.sliderValue}>{distance} <Text style={styles.sliderUnit}>km</Text></Text>
                </View>
              </View>
            </View>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={50}
              step={1}
              value={distance}
              onValueChange={setDistance}
              minimumTrackTintColor="#006c49"
              maximumTrackTintColor="rgba(187,202,191,0.3)"
              thumbTintColor="#006c49"
            />
            <View style={styles.sliderScale}>
              <Text style={styles.scaleText}>0km</Text>
              <Text style={styles.scaleText}>25km</Text>
              <Text style={styles.scaleText}>50km</Text>
            </View>
          </View>

          {/* Footer Actions */}
          <View style={styles.footerActions}>
            <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" size={20} color="#3c4a42" />
              <Text style={styles.backBtnText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nextBtn} onPress={() => navigation.navigate('CarbonSummary')}>
              <Text style={styles.nextBtnText}>Next Step</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Educational Insight */}
        <View style={styles.insightCard}>
          <Icon name="lightbulb" size={24} color="#004395" />
          <Text style={styles.insightText}>
            <Text style={styles.insightBold}>Did you know? </Text>
            Cycling just 10km to school every day instead of driving can save over 500kg of CO₂ per year—that's like planting 25 trees!
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, height: 64, backgroundColor: 'rgba(248,249,250,0.8)', borderBottomWidth: 1, borderBottomColor: 'rgba(187,202,191,0.2)' },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  iconCircle: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#006c49', alignItems: 'center', justifyContent: 'center' },
  logoText: { fontSize: 24, fontWeight: '600', color: '#006c49' },
  headerRight: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  stepText: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 0.5 },
  xpBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#e7e8e9', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 20, borderWidth: 1, borderColor: 'rgba(187,202,191,0.3)', gap: 4 },
  xpText: { fontSize: 12, fontWeight: '700', color: '#191c1d', letterSpacing: 0.5 },
  progressContainer: { paddingHorizontal: 24, paddingTop: 24 },
  progressTrack: { height: 8, backgroundColor: '#edeeef', borderRadius: 4, overflow: 'hidden' },
  progressFill: { height: '100%', backgroundColor: '#10b981', borderRadius: 4 },
  scrollContent: { paddingHorizontal: 24, paddingTop: 32, paddingBottom: 64 },
  glassPanel: { backgroundColor: 'rgba(255,255,255,0.6)', borderRadius: 24, padding: 24, shadowColor: '#006c49', shadowOffset: { width: 0, height: 32 }, shadowOpacity: 0.08, shadowRadius: 64, borderWidth: 1, borderColor: 'rgba(255,255,255,0.3)' },
  questionHeader: { alignItems: 'center', marginBottom: 32 },
  questionTitle: { fontSize: 32, fontWeight: '700', color: '#191c1d', marginBottom: 8, textAlign: 'center' },
  questionSubtitle: { fontSize: 18, color: '#3c4a42', textAlign: 'center', lineHeight: 28 },
  optionsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 16, marginBottom: 40, justifyContent: 'center' },
  optionCard: { width: '46%', padding: 24, backgroundColor: '#ffffff', borderRadius: 16, borderWidth: 1, borderColor: 'rgba(187,202,191,0.3)', alignItems: 'center' },
  optionCardSelected: { backgroundColor: '#10b981', shadowColor: '#10b981', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.3, shadowRadius: 25, transform: [{ translateY: -4 }] },
  optionIconCircle: { width: 64, height: 64, borderRadius: 32, backgroundColor: '#edeeef', alignItems: 'center', justifyContent: 'center', marginBottom: 12 },
  optionIconCircleSelected: { backgroundColor: 'rgba(0,108,73,0.2)' },
  optionLabel: { fontSize: 24, fontWeight: '600', color: '#191c1d' },
  optionLabelSelected: { color: '#00422b' },
  sliderSection: { backgroundColor: '#f3f4f5', borderRadius: 16, padding: 24, borderWidth: 1, borderColor: 'rgba(187,202,191,0.1)' },
  sliderHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 },
  sliderHeaderLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  mapIconCircle: { width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(0,108,73,0.1)', alignItems: 'center', justifyContent: 'center' },
  sliderLabel: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 0.5 },
  sliderValue: { fontSize: 24, fontWeight: '600', color: '#006c49' },
  sliderUnit: { fontSize: 16, fontWeight: '400' },
  slider: { width: '100%', height: 40 },
  sliderScale: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 },
  scaleText: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 0.5, opacity: 0.6 },
  footerActions: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 40 },
  backBtn: { flexDirection: 'row', alignItems: 'center', gap: 4, paddingHorizontal: 24, paddingVertical: 12, borderRadius: 24 },
  backBtnText: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 0.5 },
  nextBtn: { paddingHorizontal: 32, paddingVertical: 16, backgroundColor: '#006c49', borderRadius: 32, shadowColor: '#006c49', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.2, shadowRadius: 16 },
  nextBtnText: { fontSize: 18, fontWeight: '600', color: '#ffffff' },
  insightCard: { flexDirection: 'row', backgroundColor: '#d8e2ff', padding: 24, borderRadius: 16, borderWidth: 1, borderColor: 'rgba(113,161,255,0.3)', marginTop: 32, gap: 16 },
  insightText: { flex: 1, fontSize: 16, color: '#004395', lineHeight: 24 },
  insightBold: { fontWeight: '700' },
});
