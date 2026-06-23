import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');

const slides = [
  {
    id: '1',
    title: 'Track your eco impact effortlessly',
    description:
      'Visualize your daily contributions to a greener planet with our automated carbon footprint analysis.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBnBedysYvyjBfmUoCP7Z6V-NW-Iy1QdASaIPIxDARBmMGLa5tNSsrPq5TZNy13GWHYW15aEWzpespogE5IwiDq1QREj6aN-o9suZE6-wCCihxd7tXyl6UaKcpTEGqx5j7DcjZ2BKcYBVfH7ygRpQ_RltEOJiU3ExTZmwtMexpYknAqE_5qHY9s2PuYm60Z2dCcd-5w9o4qDtKRi1qcwtVotitM_fMNjQuB13s_n3fQ-8gtmUkty2xYJNUGZpAMvcLw22qUVYkAmIZv',
    bgColor: '#ffffff',
  },
  {
    id: '2',
    title: 'Empower your community',
    description:
      'Support local renewable projects and watch your neighborhood transition to clean energy in real-time.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCzAZIEY5OKJ_PFzl5Q0y8xEXsso41ZuESCeNUV-6rw3FPrqqtBkDyMzP3TL7KaGfm5WPOIdh1NUSWSTLF-q1mCEFiG4dKjU25P3cu8Soo2mkf002pFv6UdH35RrFVnLT4KabdSdNN3edLMGJJSApkQvg_4FHfOT58DzxKwEJ0hIUj3WAhHbH-65BscLaS4gZlnKvxiH53b-0oRdi2RpCMC-Eqi2WlWNbnRemnV2TxSOKVsiOZgNVL6jllXOIY3Ex72qR_0SZfRf9BP',
    bgColor: '#f3f4f5',
  },
  {
    id: '3',
    title: 'Join challenges. Earn rewards.',
    description:
      'Compete in weekly eco-sprints, level up your profile, and unlock exclusive rewards for your climate action.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCvH0J8UysaqbGbx-9iLfM9IPtOYvGL-WF2tmoUYWJWgLpLN6m46oxxzON5Mj72D9Y7dnGzO20HQrHqU_ezCzXnnQ4eCmpZ3hwidI35AEc8XivvZe7aHKH4m0JJfxNcB2dOngfwmJCk8vQsKarxMrgEJ68W5vGQMDZtxpkbZOvAQuqqpIBTovCfA1ECmaK6woM6a281hAIkQMbvNzifrgCpcHZhSaR-rPDZBMqlySjlDyr78AEpsSNYU7WHMarbGWrBjvLwuOo39KZA',
    bgColor: '#edeeef',
  },
];

export default function IntroCarouselScreen({ navigation }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1, animated: true });
    } else {
      navigation.navigate('RoleSelectionScreen');
    }
  };

  const handleSkip = () => {
    flatListRef.current?.scrollToIndex({ index: slides.length - 1, animated: true });
  };

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const renderItem = ({ item }: { item: typeof slides[0] }) => (
    <View style={[styles.slide, { backgroundColor: item.bgColor }]}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.image} resizeMode="contain" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        {/* Header - Skip Button */}
        <View style={styles.header}>
          <TouchableOpacity onPress={handleSkip}>
            <Text style={styles.skipText}>SKIP</Text>
          </TouchableOpacity>
        </View>

        {/* Carousel */}
        <FlatList
          ref={flatListRef}
          data={slides}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
          bounces={false}
        />

        {/* Footer Navigation */}
        <View style={styles.footer}>
          {/* Progress Dots */}
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  currentIndex === index ? styles.dotActive : styles.dotInactive,
                ]}
              />
            ))}
          </View>

          {/* Action Button */}
          <TouchableOpacity onPress={handleNext} activeOpacity={0.8} style={{ width: '100%', alignItems: 'center' }}>
            <LinearGradient
              colors={['#10b981', '#006c49']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.actionButton}
            >
              <Text style={styles.actionButtonText}>
                {currentIndex === slides.length - 1 ? 'Get Started' : 'Continue'}
              </Text>
              <Icon
                name={currentIndex === slides.length - 1 ? 'rocket-launch' : 'arrow-forward'}
                size={24}
                color="#ffffff"
              />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
    paddingVertical: 16,
    zIndex: 10,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  skipText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#3c4a42',
    opacity: 0.7,
    letterSpacing: 1,
  },
  slide: {
    width,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  imageContainer: {
    width: width * 0.8,
    height: width * 0.8,
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 24,
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#191c1d',
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 38,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#3c4a42',
    textAlign: 'center',
    lineHeight: 24,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 24,
    paddingBottom: 40,
    alignItems: 'center',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 24,
  },
  dot: {
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  dotActive: {
    width: 24,
    backgroundColor: '#006c49',
    borderWidth: 4,
    borderColor: 'rgba(0, 108, 73, 0.2)',
  },
  dotInactive: {
    width: 10,
    backgroundColor: 'rgba(187, 202, 191, 0.4)',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 16,
    width: '100%',
    maxWidth: 320,
    shadowColor: '#006c49',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  actionButtonText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#ffffff',
    marginRight: 8,
  },
});
