import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import { Colors } from '../../../constants';

const { width, height } = Dimensions.get('window');

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'IntroCarousel'>;
};

const slides = [
  {
    id: '1',
    title: 'Track your eco impact\neffortlessly',
    description:
      'Visualize your daily contributions to a greener planet with our automated carbon footprint analysis.',
    emoji: '🌱',
    bg1: '#1A5C38',
    bg2: '#2D8F57',
  },
  {
    id: '2',
    title: 'Join school challenges\nand campaigns',
    description:
      'Compete with classmates, earn XP points, and climb the leaderboard by completing eco-friendly activities.',
    emoji: '🏆',
    bg1: '#1A4E8C',
    bg2: '#2D6AB8',
  },
  {
    id: '3',
    title: 'Earn rewards for\nbeing green',
    description:
      'Unlock achievements, badges, and eco points for every sustainable action you take every day.',
    emoji: '🌍',
    bg1: '#5C3D1A',
    bg2: '#8F6030',
  },
];

export default function IntroCarouselScreen({ navigation }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleContinue = () => {
    if (activeIndex < slides.length - 1) {
      const next = activeIndex + 1;
      flatListRef.current?.scrollToIndex({ index: next, animated: true });
      setActiveIndex(next);
    } else {
      navigation.navigate('Login');
    }
  };

  const handleSkip = () => {
    navigation.navigate('Login');
  };

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index ?? 0);
    }
  }).current;

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />

      <View style={styles.container}>
        <TouchableOpacity style={styles.skipBtn} onPress={handleSkip} activeOpacity={0.7}>
          <Text style={styles.skipText}>SKIP</Text>
        </TouchableOpacity>

        <FlatList
          ref={flatListRef}
          data={slides}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          bounces={false}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
          renderItem={({ item }) => (
            <View style={styles.slide}>
              <View style={[styles.imageContainer, { backgroundColor: item.bg1 }]}>
                <View style={[styles.imageOverlay, { backgroundColor: item.bg2 }]} />
                <View style={styles.imageForeground}>
                  <View style={styles.soilRow}>
                    <View style={styles.soilLeft} />
                    <View style={styles.soilMid} />
                    <View style={styles.soilRight} />
                  </View>
                </View>
                <Text style={styles.mainEmoji}>{item.emoji}</Text>
              </View>

              <View style={styles.dots}>
                {slides.map((_, i) => (
                  <View
                    key={i}
                    style={[
                      styles.dot,
                      i === activeIndex ? styles.dotActive : styles.dotInactive,
                    ]}
                  />
                ))}
              </View>

              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          )}
        />

        <TouchableOpacity
          style={styles.continueBtn}
          onPress={handleContinue}
          activeOpacity={0.85}>
          <Text style={styles.continueBtnText}>Continue  →</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  skipBtn: {
    alignSelf: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  skipText: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.textLight,
    letterSpacing: 0.5,
  },
  slide: {
    width,
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  imageContainer: {
    width: width - 48,
    height: height * 0.38,
    borderRadius: 24,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  imageOverlay: {
    position: 'absolute',
    top: '30%',
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.6,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  imageForeground: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 48,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  soilRow: {
    flex: 1,
    flexDirection: 'row',
    height: 40,
  },
  soilLeft: {
    flex: 1,
    backgroundColor: '#3D1F0A',
    opacity: 0.8,
    borderTopLeftRadius: 8,
  },
  soilMid: {
    flex: 2,
    backgroundColor: '#2A1506',
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
  },
  soilRight: {
    flex: 1,
    backgroundColor: '#3D1F0A',
    opacity: 0.8,
    borderTopRightRadius: 8,
  },
  mainEmoji: {
    fontSize: 100,
    position: 'absolute',
  },
  dots: {
    flexDirection: 'row',
    marginTop: 24,
    marginBottom: 8,
    gap: 6,
  },
  dot: {
    height: 8,
    borderRadius: 4,
  },
  dotActive: {
    width: 24,
    backgroundColor: Colors.dotActive,
  },
  dotInactive: {
    width: 8,
    backgroundColor: Colors.dotInactive,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.text,
    textAlign: 'center',
    marginTop: 16,
    lineHeight: 30,
  },
  description: {
    fontSize: 14,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginTop: 12,
    lineHeight: 22,
    paddingHorizontal: 8,
  },
  continueBtn: {
    marginHorizontal: 24,
    marginBottom: 16,
    height: 56,
    backgroundColor: Colors.buttonPrimary,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  continueBtnText: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.buttonText,
    letterSpacing: 0.3,
  },
});
