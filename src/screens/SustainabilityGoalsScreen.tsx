import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Slider from '@react-native-community/slider';

export default function SustainabilityGoalsScreen({ navigation }: any) {
  const [carbonGoal, setCarbonGoal] = useState(50);
  const [campaigns, setCampaigns] = useState(12);
  const [volunteerHours, setVolunteerHours] = useState(40);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Icon name="eco" size={32} color="#006c49" />
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
            <Text style={styles.navBtnTextError}>Exit</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.pageHeader}>
          <Text style={styles.pageTitle}>Sustainability Goals</Text>
          <Text style={styles.pageSubtitle}>Define your path to a greener future. Set ambitious targets for carbon reduction, community engagement, and direct action.</Text>
        </View>

        <View style={styles.grid}>
          {/* Carbon Reduction */}
          <View style={styles.card}>
            <View style={styles.cardTop}>
              <View style={styles.cardHeaderRow}>
                <View style={[styles.iconWrapper, { backgroundColor: 'rgba(16,185,129,0.2)' }]}>
                  <Icon name="co2" size={24} color="#006c49" />
                </View>
                <View style={[styles.badge, { backgroundColor: 'rgba(109,245,225,0.3)' }]}>
                  <Text style={[styles.badgeText, { color: '#006f64' }]}>Environmental</Text>
                </View>
              </View>
              <Text style={styles.cardPreTitle}>Set Goal</Text>
              <Text style={styles.cardTitle}>Carbon Reduction</Text>
              
              <View style={styles.sliderContainer}>
                <View style={styles.sliderHeader}>
                  <Text style={styles.sliderLabel}>TARGET REDUCTION</Text>
                  <Text style={styles.sliderValue}>{Math.round(carbonGoal)}%</Text>
                </View>
                <Slider
                  style={{width: '100%', height: 40}}
                  minimumValue={0}
                  maximumValue={100}
                  value={carbonGoal}
                  onValueChange={setCarbonGoal}
                  minimumTrackTintColor="#006c49"
                  maximumTrackTintColor="#e1e3e4"
                  thumbTintColor="#10b981"
                />
                <View style={styles.sliderFooter}>
                  <Text style={styles.sliderFooterText}>0%</Text>
                  <Text style={styles.sliderFooterText}>100%</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.primaryBtn}>
              <Icon name="check-circle" size={20} color="#fff" />
              <Text style={styles.primaryBtnText}>Confirm Goal</Text>
            </TouchableOpacity>
          </View>

          {/* Eco Campaigns */}
          <View style={styles.card}>
            <View style={styles.cardTop}>
              <View style={styles.cardHeaderRow}>
                <View style={[styles.iconWrapper, { backgroundColor: 'rgba(109,245,225,0.2)' }]}>
                  <Icon name="campaign" size={24} color="#006b5f" />
                </View>
                <View style={[styles.badge, { backgroundColor: '#e7e8e9' }]}>
                  <Text style={[styles.badgeText, { color: '#3c4a42' }]}>Engagement</Text>
                </View>
              </View>
              <Text style={styles.cardPreTitle}>Set Goal</Text>
              <Text style={styles.cardTitle}>Eco Campaigns</Text>
              
              <View style={styles.counterContainer}>
                <TouchableOpacity style={styles.counterBtn} onPress={() => setCampaigns(Math.max(0, campaigns - 1))}>
                  <Icon name="remove" size={24} color="#191c1d" />
                </TouchableOpacity>
                <View style={styles.counterMiddle}>
                  <Text style={styles.counterValue}>{campaigns}</Text>
                  <Text style={styles.counterLabel}>CAMPAIGNS</Text>
                </View>
                <TouchableOpacity style={styles.counterBtn} onPress={() => setCampaigns(campaigns + 1)}>
                  <Icon name="add" size={24} color="#191c1d" />
                </TouchableOpacity>
              </View>
              <Text style={styles.cardDesc}>Aim to lead school-wide initiatives and awareness programs.</Text>
            </View>
            <TouchableOpacity style={styles.outlineBtn}>
              <Text style={styles.outlineBtnText}>Update Target</Text>
            </TouchableOpacity>
          </View>

          {/* Volunteer Hours */}
          <View style={styles.card}>
            <View style={styles.cardTop}>
              <View style={styles.cardHeaderRow}>
                <View style={[styles.iconWrapper, { backgroundColor: 'rgba(113,161,255,0.2)' }]}>
                  <Icon name="volunteer-activism" size={24} color="#005ac2" />
                </View>
                <View style={[styles.badge, { backgroundColor: '#e7e8e9' }]}>
                  <Text style={[styles.badgeText, { color: '#3c4a42' }]}>Community</Text>
                </View>
              </View>
              <Text style={styles.cardPreTitle}>Set Goal</Text>
              <Text style={styles.cardTitle}>Volunteer Hours</Text>
              
              <View style={styles.counterContainer}>
                <TouchableOpacity style={styles.counterBtn} onPress={() => setVolunteerHours(Math.max(0, volunteerHours - 1))}>
                  <Icon name="remove" size={24} color="#191c1d" />
                </TouchableOpacity>
                <View style={styles.counterMiddle}>
                  <Text style={styles.counterValue}>{volunteerHours}</Text>
                  <Text style={styles.counterLabel}>HOURS / MONTH</Text>
                </View>
                <TouchableOpacity style={styles.counterBtn} onPress={() => setVolunteerHours(volunteerHours + 1)}>
                  <Icon name="add" size={24} color="#191c1d" />
                </TouchableOpacity>
              </View>
              
              <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tagsScroll}>
                <View style={styles.tag}><Text style={styles.tagText}>Local Park</Text></View>
                <View style={styles.tag}><Text style={styles.tagText}>Beach Clean</Text></View>
                <View style={styles.tag}><Text style={styles.tagText}>Urban Garden</Text></View>
              </ScrollView>
            </View>
            <TouchableOpacity style={styles.outlineBtn}>
              <Text style={styles.outlineBtnText}>Save Progress</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Visual Polish */}
        <View style={styles.bottomSection}>
          <View style={styles.scoreCard}>
            <View style={styles.scoreRingWrapper}>
              {/* Fake Ring */}
              <View style={styles.scoreRing}>
                <Text style={styles.scoreRingText}>75%</Text>
              </View>
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.scoreTitle}>Commitment Score</Text>
              <Text style={styles.scoreDesc}>Based on your current goals, your environmental impact potential is at a high-tier gold level.</Text>
            </View>
          </View>

          <View style={styles.imageCard}>
            <Image source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDARrTqLa_rpAVuPTXZLKcwBYOnj6cKXQKN0LVAR2sfC4xxYOi7S1jcKKezuoupjsHjrQ8PLJGrjF7vkjNUnFobIdMXt5ZZslGrEC-qlmzldLINV_o08NhjZnBN6Cl-a6TcZcqSEkR77Vp9m3CPZEX7SG-CZRdjJkAxJB1JuurdPMBl3uo-zAagvCWFWdwFPj3XkNjbDy5ee9J9nGKSGk6aRhlL8AOoA1uERLZgKRQIAT6tc-70C8DWlxUZUz-xyTlN9HuTwP0SOs1q'}} style={styles.imageCardBg} />
            <View style={styles.imageCardOverlay}>
              <Text style={styles.imageCardPreTitle}>GLOBAL IMPACT</Text>
              <Text style={styles.imageCardTitle}>Your 2024 Green Roadmap</Text>
            </View>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { height: 80, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 24, backgroundColor: 'rgba(248, 249, 250, 0.8)', borderBottomWidth: 1, borderBottomColor: 'rgba(187, 202, 191, 0.3)' },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  logoText: { fontSize: 48, fontWeight: '800', color: '#006c49', letterSpacing: -1 },
  headerRight: { flexDirection: 'row', alignItems: 'center', gap: 32, display: 'none' }, // hidden on mobile typically
  navBtn: {},
  navBtnTextPrimary: { fontSize: 12, fontWeight: '700', color: '#006c49', textTransform: 'uppercase' },
  navBtnText: { fontSize: 12, fontWeight: '700', color: '#3c4a42', textTransform: 'uppercase' },
  navBtnTextError: { fontSize: 12, fontWeight: '700', color: '#ba1a1a', textTransform: 'uppercase' },
  scrollContent: { padding: 24, paddingBottom: 100 },
  pageHeader: { marginBottom: 40 },
  pageTitle: { fontSize: 32, fontWeight: '700', color: '#191c1d', marginBottom: 8 },
  pageSubtitle: { fontSize: 18, color: '#3c4a42', maxWidth: 600 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 24, marginBottom: 40 },
  card: { flex: 1, minWidth: 300, backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: 16, padding: 24, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)', justifyContent: 'space-between' },
  cardTop: { marginBottom: 40 },
  cardHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 },
  iconWrapper: { width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center' },
  badge: { paddingHorizontal: 12, paddingVertical: 4, borderRadius: 16 },
  badgeText: { fontSize: 12, fontWeight: '700' },
  cardPreTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d', marginBottom: 4 },
  cardTitle: { fontSize: 18, fontWeight: '700', color: '#191c1d', marginBottom: 24 },
  sliderContainer: { gap: 16 },
  sliderHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' },
  sliderLabel: { fontSize: 12, fontWeight: '700', color: '#3c4a42' },
  sliderValue: { fontSize: 28, fontWeight: '700', color: '#006c49' },
  sliderFooter: { flexDirection: 'row', justifyContent: 'space-between' },
  sliderFooterText: { fontSize: 10, fontWeight: '700', color: '#6c7a71', letterSpacing: 1 },
  primaryBtn: { backgroundColor: '#006c49', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, paddingVertical: 16, borderRadius: 8, elevation: 4 },
  primaryBtnText: { fontSize: 16, fontWeight: '700', color: '#fff' },
  counterContainer: { backgroundColor: '#f3f4f5', borderRadius: 8, padding: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, borderColor: 'rgba(187,202,191,0.2)' },
  counterBtn: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', elevation: 2 },
  counterMiddle: { alignItems: 'center' },
  counterValue: { fontSize: 28, fontWeight: '700', color: '#191c1d' },
  counterLabel: { fontSize: 12, fontWeight: '700', color: '#3c4a42', opacity: 0.6 },
  cardDesc: { fontSize: 16, color: '#3c4a42', fontStyle: 'italic', marginTop: 24 },
  outlineBtn: { borderWidth: 2, borderColor: '#006c49', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, paddingVertical: 16, borderRadius: 8 },
  outlineBtnText: { fontSize: 16, fontWeight: '700', color: '#006c49' },
  tagsScroll: { marginTop: 24, flexDirection: 'row' },
  tag: { backgroundColor: 'rgba(0,90,194,0.1)', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 4, marginRight: 8 },
  tagText: { fontSize: 10, fontWeight: '700', color: '#005ac2', textTransform: 'uppercase' },
  bottomSection: { flexDirection: 'row', flexWrap: 'wrap', gap: 24 },
  scoreCard: { flex: 1, minWidth: 300, backgroundColor: '#002113', borderRadius: 8, padding: 40, flexDirection: 'row', alignItems: 'center', gap: 24 },
  scoreRingWrapper: { width: 96, height: 96 },
  scoreRing: { width: '100%', height: '100%', borderRadius: 48, borderWidth: 4, borderColor: '#4edea3', borderStyle: 'dashed', alignItems: 'center', justifyContent: 'center' },
  scoreRingText: { fontSize: 14, fontWeight: '700', color: '#6ffbbe' },
  scoreTitle: { fontSize: 24, fontWeight: '600', color: '#6ffbbe', marginBottom: 4 },
  scoreDesc: { fontSize: 16, color: '#4edea3', opacity: 0.8 },
  imageCard: { flex: 1, minWidth: 300, borderRadius: 8, overflow: 'hidden', minHeight: 160 },
  imageCardBg: { ...StyleSheet.absoluteFill as any, width: '100%', height: '100%', resizeMode: 'cover' },
  imageCardOverlay: { ...StyleSheet.absoluteFill as any, backgroundColor: 'rgba(0,0,0,0.4)', justifyContent: 'flex-end', padding: 24 },
  imageCardPreTitle: { fontSize: 12, fontWeight: '700', color: '#fff', opacity: 0.8, letterSpacing: 1 },
  imageCardTitle: { fontSize: 24, fontWeight: '600', color: '#fff' },
});
