import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import { Colors } from '../../../constants';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SustainabilityGoals'>;
};

export default function SustainabilityGoalsScreen({ navigation }: Props) {
  const [carbonReduction, setCarbonReduction] = useState(50);
  const [campaigns, setCampaigns] = useState(12);
  const [volunteerHours, setVolunteerHours] = useState(40);

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

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>

        <Text style={styles.title}>Sustainability Goals</Text>
        <Text style={styles.subtitle}>
          Define your path to a greener future. Set ambitious targets for carbon reduction, community engagement, and direct action.
        </Text>

        {/* Goal 1: Carbon Reduction */}
        <View style={[styles.card, styles.cardActive]}>
          <View style={styles.cardHeaderRow}>
            <View style={styles.iconCircleGreen}>
              <Text style={styles.iconEmoji}>☁️</Text>
            </View>
            <View style={styles.badgeGreen}>
              <Text style={styles.badgeTextGreen}>Environmental</Text>
            </View>
          </View>
          
          <Text style={styles.setGoalText}>Set Goal</Text>
          <Text style={styles.goalTitle}>Carbon Reduction</Text>
          
          <View style={styles.sliderHeaderRow}>
            <Text style={styles.sliderLabel}>Target Reduction</Text>
            <Text style={styles.sliderValue}>{carbonReduction}%</Text>
          </View>
          
          {/* Mock Slider */}
          <View style={styles.sliderTrackContainer}>
            <View style={styles.sliderTrackBg} />
            <View style={[styles.sliderTrackFill, { width: `${carbonReduction}%` }]} />
            <View style={[styles.sliderThumb, { left: `${carbonReduction}%` }]} />
          </View>
          <View style={styles.sliderLabelsRow}>
            <Text style={styles.sliderMinMax}>0%</Text>
            <Text style={styles.sliderMinMax}>100%</Text>
          </View>
          
          <TouchableOpacity style={styles.btnFilled}>
            <Text style={styles.btnFilledIcon}>✓</Text>
            <Text style={styles.btnFilledText}>Confirm Goal</Text>
          </TouchableOpacity>
        </View>

        {/* Goal 2: Eco Campaigns */}
        <View style={styles.card}>
          <View style={styles.cardHeaderRow}>
            <View style={styles.iconCircleTeal}>
              <Text style={styles.iconEmoji}>📢</Text>
            </View>
            <View style={styles.badgeGray}>
              <Text style={styles.badgeTextGray}>Engagement</Text>
            </View>
          </View>
          
          <Text style={styles.setGoalText}>Set Goal</Text>
          <Text style={styles.goalTitle}>Eco Campaigns</Text>
          
          {/* Stepper */}
          <View style={styles.stepperContainer}>
            <TouchableOpacity 
              style={styles.stepperBtn}
              onPress={() => setCampaigns(Math.max(0, campaigns - 1))}>
              <Text style={styles.stepperBtnText}>-</Text>
            </TouchableOpacity>
            <View style={styles.stepperValueContainer}>
              <Text style={styles.stepperValue}>{campaigns}</Text>
              <Text style={styles.stepperLabel}>CAMPAIGNS</Text>
            </View>
            <TouchableOpacity 
              style={styles.stepperBtn}
              onPress={() => setCampaigns(campaigns + 1)}>
              <Text style={styles.stepperBtnText}>+</Text>
            </TouchableOpacity>
          </View>
          
          <Text style={styles.italicSubtitle}>
            Aim to lead school-wide initiatives and awareness programs.
          </Text>
          
          <TouchableOpacity style={styles.btnOutlined}>
            <Text style={styles.btnOutlinedText}>Update Target</Text>
          </TouchableOpacity>
        </View>

        {/* Goal 3: Volunteer Hours */}
        <View style={styles.card}>
          <View style={styles.cardHeaderRow}>
            <View style={styles.iconCircleBlue}>
              <Text style={styles.iconEmoji}>🤝</Text>
            </View>
            <View style={styles.badgeGray}>
              <Text style={styles.badgeTextGray}>Community</Text>
            </View>
          </View>
          
          <Text style={styles.setGoalText}>Set Goal</Text>
          <Text style={styles.goalTitle}>Volunteer Hours</Text>
          
          {/* Stepper */}
          <View style={styles.stepperContainer}>
            <TouchableOpacity 
              style={styles.stepperBtn}
              onPress={() => setVolunteerHours(Math.max(0, volunteerHours - 5))}>
              <Text style={styles.stepperBtnText}>-</Text>
            </TouchableOpacity>
            <View style={styles.stepperValueContainer}>
              <Text style={styles.stepperValue}>{volunteerHours}</Text>
              <Text style={styles.stepperLabel}>HOURS / MONTH</Text>
            </View>
            <TouchableOpacity 
              style={styles.stepperBtn}
              onPress={() => setVolunteerHours(volunteerHours + 5)}>
              <Text style={styles.stepperBtnText}>+</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.chipsRow}>
            <View style={styles.chip}><Text style={styles.chipText}>Local Park</Text></View>
            <View style={styles.chip}><Text style={styles.chipText}>Beach Clean</Text></View>
            <View style={styles.chip}><Text style={styles.chipText}>Urban Garden</Text></View>
          </View>
          
          <TouchableOpacity style={styles.btnOutlined}>
            <Text style={styles.btnOutlinedText}>Save Progress</Text>
          </TouchableOpacity>
        </View>

        {/* Commitment Score Card */}
        <View style={styles.darkCard}>
          <View style={styles.scoreRow}>
            <View style={styles.scoreCircle}>
              {/* Mocking circular progress */}
              <View style={styles.scoreCircleInner}>
                <Text style={styles.scoreValueText}>75%</Text>
              </View>
            </View>
            <View style={styles.scoreTexts}>
              <Text style={styles.scoreTitle}>Commitment{'\n'}Score</Text>
              <Text style={styles.scoreDesc}>
                Based on your current goals, your environmental impact potential is at a high-tier gold level.
              </Text>
            </View>
          </View>
        </View>

        {/* Bottom Banner */}
        <View style={styles.bannerContainer}>
          <View style={styles.bannerImagePlaceholder}>
            <Text style={styles.bannerSubText}>GLOBAL IMPACT</Text>
            <Text style={styles.bannerMainText}>Your 2024 Green{'\n'}Roadmap</Text>
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
    fontWeight: '800',
    color: '#004D40',
  },
  menuBtn: {
    padding: 4,
  },
  menuIcon: {
    fontSize: 24,
    color: '#334155',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#002B36',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 13,
    color: '#475569',
    lineHeight: 20,
    marginBottom: 24,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 24,
    padding: 24,
    marginBottom: 20,
    shadowColor: Colors.cardShadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  cardActive: {
    borderColor: '#A8D8BA',
    shadowColor: '#A8D8BA',
    shadowOpacity: 0.2,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  iconCircleGreen: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#C8EDD8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCircleTeal: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#E0F2FE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCircleBlue: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#DBEAFE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconEmoji: {
    fontSize: 20,
  },
  badgeGreen: {
    backgroundColor: '#E8F5ED',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeTextGreen: {
    fontSize: 10,
    fontWeight: '700',
    color: '#059669',
  },
  badgeGray: {
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeTextGray: {
    fontSize: 10,
    fontWeight: '700',
    color: '#64748B',
  },
  setGoalText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 4,
  },
  goalTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#002B36',
    marginBottom: 20,
  },
  sliderHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sliderLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#64748B',
  },
  sliderValue: {
    fontSize: 18,
    fontWeight: '800',
    color: '#059669',
  },
  sliderTrackContainer: {
    height: 20,
    justifyContent: 'center',
    marginBottom: 4,
    position: 'relative',
  },
  sliderTrackBg: {
    height: 6,
    backgroundColor: '#E2E8F0',
    borderRadius: 3,
    width: '100%',
    position: 'absolute',
  },
  sliderTrackFill: {
    height: 6,
    backgroundColor: '#10B981',
    borderRadius: 3,
    position: 'absolute',
  },
  sliderThumb: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#10B981',
    borderWidth: 2,
    borderColor: Colors.white,
    position: 'absolute',
    marginLeft: -8,
  },
  sliderLabelsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  sliderMinMax: {
    fontSize: 10,
    color: '#94A3B8',
    fontWeight: '500',
  },
  btnFilled: {
    backgroundColor: '#004D40',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    borderRadius: 24,
  },
  btnFilledIcon: {
    color: Colors.white,
    marginRight: 8,
    fontSize: 14,
  },
  btnFilledText: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: '700',
  },
  btnOutlined: {
    borderWidth: 1.5,
    borderColor: '#10B981',
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    borderRadius: 24,
    marginTop: 8,
  },
  btnOutlinedText: {
    color: '#059669',
    fontSize: 14,
    fontWeight: '700',
  },
  stepperContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F8FAFC',
    borderRadius: 24,
    padding: 6,
    marginBottom: 16,
  },
  stepperBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  stepperBtnText: {
    fontSize: 20,
    color: '#64748B',
    fontWeight: '500',
  },
  stepperValueContainer: {
    alignItems: 'center',
  },
  stepperValue: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1E293B',
  },
  stepperLabel: {
    fontSize: 9,
    fontWeight: '700',
    color: '#94A3B8',
    letterSpacing: 0.5,
  },
  italicSubtitle: {
    fontSize: 12,
    fontStyle: 'italic',
    color: '#64748B',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 18,
  },
  chipsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
  },
  chip: {
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  chipText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#2563EB',
  },
  darkCard: {
    backgroundColor: '#002B20',
    borderRadius: 24,
    padding: 24,
    marginBottom: 20,
  },
  scoreRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scoreCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 6,
    borderColor: '#065F46',
    borderTopColor: '#34D399',
    borderRightColor: '#34D399',
    borderBottomColor: '#34D399',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  scoreCircleInner: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreValueText: {
    color: '#34D399',
    fontSize: 14,
    fontWeight: '800',
  },
  scoreTexts: {
    flex: 1,
  },
  scoreTitle: {
    color: '#34D399',
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 6,
    lineHeight: 20,
  },
  scoreDesc: {
    color: '#A7F3D0',
    fontSize: 11,
    lineHeight: 16,
    fontWeight: '500',
  },
  bannerContainer: {
    height: 120,
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: '#E2E8F0',
  },
  bannerImagePlaceholder: {
    flex: 1,
    backgroundColor: '#1E293B',
    padding: 20,
    justifyContent: 'flex-end',
  },
  bannerSubText: {
    color: '#CBD5E1',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: 4,
  },
  bannerMainText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '800',
    lineHeight: 22,
  },
  bottomPad: {
    height: 40,
  },
});
