import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  Switch,
  PanResponder,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SLIDER_WIDTH = SCREEN_WIDTH - 96; // Padding on sides

export default function SustainabilityPreferencesScreen({ navigation }: any) {
  const [commitmentValue, setCommitmentValue] = useState(7);
  const [toggles, setToggles] = useState({
    dailyTips: true,
    weeklyChallenges: true,
    smartAlerts: false,
  });

  const toggleSwitch = (key: keyof typeof toggles) => {
    setToggles((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSave = () => {
    navigation.navigate('InterestsSelectionScreen');
  };

  const handleSkip = () => {
    navigation.navigate('InterestsSelectionScreen');
  };

  // Simple custom slider logic
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        const { moveX, x0, dx } = gestureState;
        // Approximation: starting from some x offset. We calculate based on dx.
        // It's easier to just use the overall position if we know the bounds, but we can approximate.
        // Or simple: click to set. We can mock it easily.
      },
      onPanResponderRelease: (_, gestureState) => {
        // Just for visual completeness, we'll keep it simple: 
        // We can tap the track to set the value.
      },
    })
  ).current;

  const handleTrackPress = (evt: any) => {
    const x = evt.nativeEvent.locationX;
    const percentage = x / SLIDER_WIDTH;
    const newValue = Math.max(1, Math.min(10, Math.round(percentage * 9) + 1));
    setCommitmentValue(newValue);
  };

  // Determine indicator color based on value
  const getIndicatorColor = () => {
    if (commitmentValue < 4) return '#6c7a71';
    if (commitmentValue < 8) return '#006c49';
    return '#00422b';
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Top Nav */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Icon name="arrow-back" size={24} color="#006c49" />
          </TouchableOpacity>
          <Text style={styles.logoText}>EcoSystem</Text>
        </View>
        <View style={styles.headerRight}>
          <View style={styles.levelBadge}>
            <Text style={styles.levelBadgeText}>L5</Text>
          </View>
          <Text style={styles.xpText}>1,250 XP</Text>
        </View>
      </View>
      
      {/* Progress Bar */}
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBarFill, { width: '65%' }]} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header Section */}
        <View style={styles.titleSection}>
          <Text style={styles.title}>Set your Preferences</Text>
          <Text style={styles.subtitle}>
            Tailor your journey to make the biggest impact. You can update these anytime in your profile settings.
          </Text>
        </View>

        {/* Commitment Slider Module */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={[styles.iconCircle, { backgroundColor: 'rgba(16, 185, 129, 0.2)' }]}>
              <Icon name="trending-up" size={24} color="#006c49" />
            </View>
            <Text style={styles.cardTitle}>Commitment Level</Text>
          </View>
          <Text style={styles.sliderLabel}>
            How committed are you to improving sustainability this year?
          </Text>

          {/* Custom Slider */}
          <View style={styles.sliderContainer}>
            <TouchableOpacity activeOpacity={1} onPress={handleTrackPress} style={styles.sliderTrack}>
              <View
                style={[
                  styles.sliderFill,
                  { width: `${((commitmentValue - 1) / 9) * 100}%` },
                ]}
              />
              <View
                style={[
                  styles.sliderThumb,
                  { left: `${((commitmentValue - 1) / 9) * 100}%` },
                ]}
              />
            </TouchableOpacity>
            <View style={styles.sliderLabels}>
              <Text style={styles.sliderLabelText}>Novice</Text>
              <Text style={[styles.sliderLabelText, { color: '#006c49', fontWeight: 'bold' }]}>
                Champion
              </Text>
            </View>
          </View>

          {/* Indicator */}
          <View style={styles.indicatorContainer}>
            <View
              style={[
                styles.indicator,
                {
                  backgroundColor: getIndicatorColor(),
                  transform: [{ scale: 0.8 + (commitmentValue / 10) * 0.4 }],
                },
              ]}
            >
              <Text style={styles.indicatorValue}>{commitmentValue}</Text>
              <Text style={styles.indicatorText}>LEVEL</Text>
            </View>
          </View>
        </View>

        {/* Toggles Section */}
        <View style={styles.gridContainer}>
          {/* Daily Eco-Tips */}
          <View style={styles.gridCard}>
            <View style={styles.gridCardHeader}>
              <View style={[styles.gridIconCircle, { backgroundColor: 'rgba(109, 245, 225, 0.3)' }]}>
                <Icon name="lightbulb" size={28} color="#006b5f" />
              </View>
              <Switch
                trackColor={{ false: '#e1e3e4', true: '#10b981' }}
                thumbColor="#ffffff"
                onValueChange={() => toggleSwitch('dailyTips')}
                value={toggles.dailyTips}
              />
            </View>
            <Text style={styles.gridCardTitle}>Daily eco-tips</Text>
            <Text style={styles.gridCardSubtitle}>
              Micro-habits delivered every morning to reduce your carbon footprint.
            </Text>
          </View>

          {/* Weekly Challenges */}
          <View style={styles.gridCard}>
            <View style={styles.gridCardHeader}>
              <View style={[styles.gridIconCircle, { backgroundColor: 'rgba(216, 226, 255, 0.3)' }]}>
                <Icon name="emoji-events" size={28} color="#005ac2" />
              </View>
              <Switch
                trackColor={{ false: '#e1e3e4', true: '#10b981' }}
                thumbColor="#ffffff"
                onValueChange={() => toggleSwitch('weeklyChallenges')}
                value={toggles.weeklyChallenges}
              />
            </View>
            <Text style={styles.gridCardTitle}>Weekly challenges</Text>
            <Text style={styles.gridCardSubtitle}>
              Compete with friends in school-wide waste reduction sprints.
            </Text>
          </View>
        </View>

        {/* Smart Alerts */}
        <View style={[styles.card, styles.smartAlertCard]}>
          <View style={styles.smartAlertContent}>
            <Image
              source={{
                uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUtyfvFFhQTh3gkqU4PNmUncIDBZ7AKLgbSjYp6sX7vWGu-2ZNMSYMF9GfhCtqfwLhT0BkbotWt48ksCEGVlpypsNBuC0bnD8V0BkCdr3rGku0MJ8up0IJ0Qq0H1Lc8C-EfJFnEWmKvZlrOnNU0mT5VEzeHBDbeoTc6A9V9KTQqMy5yG-grewYrCMwKnffgqYMbWBV0vH3-Z6VmCbDm0dBYhcW1pmUxl07HJXSHOvfhF-OL3l7rQs3u7DGWT_ev2jKnQN3GHDFWJ8F',
              }}
              style={styles.smartAlertImage}
            />
            <View style={styles.smartAlertTextContainer}>
              <Text style={styles.smartAlertTitle}>Smart Alerts</Text>
              <Text style={styles.smartAlertSubtitle}>
                Receive nudges when you're near local recycling centers or eco-stores.
              </Text>
            </View>
            <Switch
              trackColor={{ false: '#e1e3e4', true: '#10b981' }}
              thumbColor="#ffffff"
              onValueChange={() => toggleSwitch('smartAlerts')}
              value={toggles.smartAlerts}
            />
          </View>
        </View>

        {/* CTA Actions */}
        <View style={styles.ctaContainer}>
          <TouchableOpacity onPress={handleSave} activeOpacity={0.8} style={styles.saveBtn}>
            <Text style={styles.saveBtnText}>Save Preferences</Text>
            <Icon name="check-circle" size={24} color="#ffffff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSkip} activeOpacity={0.7} style={styles.skipBtn}>
            <Text style={styles.skipBtnText}>SKIP FOR NOW</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    height: 64,
    backgroundColor: 'rgba(248, 249, 250, 0.8)',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    fontSize: 24,
    fontWeight: '800',
    color: '#006c49',
    marginLeft: 8,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(16, 185, 129, 0.2)',
  },
  levelBadge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#006c49',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  levelBadgeText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#ffffff',
  },
  xpText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#006c49',
  },
  progressBarContainer: {
    height: 6,
    backgroundColor: '#e1e3e4',
    width: '100%',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#006c49',
    shadowColor: '#006c49',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 4,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 40,
  },
  titleSection: {
    marginBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#191c1d',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 18,
    color: '#3c4a42',
    lineHeight: 26,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(229, 231, 235, 0.5)',
    marginBottom: 24,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#191c1d',
  },
  sliderLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3c4a42',
    marginBottom: 16,
  },
  sliderContainer: {
    marginVertical: 16,
  },
  sliderTrack: {
    height: 8,
    backgroundColor: '#e1e3e4',
    borderRadius: 4,
    position: 'relative',
    justifyContent: 'center',
  },
  sliderFill: {
    position: 'absolute',
    left: 0,
    height: '100%',
    backgroundColor: '#006c49',
    borderRadius: 4,
  },
  sliderThumb: {
    position: 'absolute',
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#006c49',
    borderWidth: 4,
    borderColor: '#ffffff',
    transform: [{ translateX: -12 }],
    shadowColor: '#006c49',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 4,
  },
  sliderLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    paddingHorizontal: 4,
  },
  sliderLabelText: {
    fontSize: 12,
    fontWeight: '700',
    color: 'rgba(60, 74, 66, 0.6)',
    textTransform: 'uppercase',
  },
  indicatorContainer: {
    alignItems: 'center',
    marginTop: 24,
  },
  indicator: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 6,
  },
  indicatorValue: {
    fontSize: 32,
    fontWeight: '800',
    color: '#ffffff',
    lineHeight: 36,
  },
  indicatorText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#ffffff',
    letterSpacing: 1.5,
  },
  gridContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  gridCard: {
    width: '48%',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(229, 231, 235, 0.5)',
  },
  gridCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  gridIconCircle: {
    width: 48,
    height: 48,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridCardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#191c1d',
    marginBottom: 8,
  },
  gridCardSubtitle: {
    fontSize: 14,
    color: '#3c4a42',
    lineHeight: 20,
  },
  smartAlertCard: {
    borderLeftWidth: 4,
    borderLeftColor: '#006c49',
    padding: 16,
  },
  smartAlertContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  smartAlertImage: {
    width: 80,
    height: 80,
    borderRadius: 16,
    marginRight: 16,
  },
  smartAlertTextContainer: {
    flex: 1,
    marginRight: 8,
  },
  smartAlertTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#191c1d',
    marginBottom: 4,
  },
  smartAlertSubtitle: {
    fontSize: 14,
    color: '#3c4a42',
    lineHeight: 20,
  },
  ctaContainer: {
    marginTop: 16,
    gap: 16,
  },
  saveBtn: {
    backgroundColor: '#006c49',
    height: 56,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#006c49',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 6,
  },
  saveBtnText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffff',
    marginRight: 8,
  },
  skipBtn: {
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  skipBtnText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#3c4a42',
    letterSpacing: 1,
  },
});
