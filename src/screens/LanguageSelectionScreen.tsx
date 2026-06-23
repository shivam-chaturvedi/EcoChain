import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

type Language = {
  name: string;
  phrase: string;
  icon: string;
};

const languages: Language[] = [
  { name: 'English', phrase: 'Hello, let’s save the planet together.', icon: 'translate' },
  { name: 'Arabic', phrase: 'مرحباً، دعنا ننقذ الكوكب معاً.', icon: 'language' },
  { name: 'Hindi', phrase: 'नमस्ते, आइए मिलकर ग्रह को बचाएं।', icon: 'language' },
  { name: 'Spanish', phrase: 'Hola, salvemos el planeta juntos.', icon: 'language' },
  { name: 'French', phrase: 'Bonjour, sauvons la planète ensemble.', icon: 'language' },
];

export default function LanguageSelectionScreen({ navigation }: any) {
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);
  
  // Animation for live preview text
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const handleSelectLanguage = (lang: Language) => {
    // Fade out
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
    }).start(() => {
      setSelectedLanguage(lang);
      // Fade in
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    });
  };

  const handleContinue = () => {
    if (selectedLanguage) {
      navigation.navigate('RegionSelectionScreen');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Top Nav */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.iconCircle}>
            <Icon name="language" size={20} color="#00422b" />
          </View>
          <Text style={styles.logoText}>ChonX</Text>
        </View>
        <View style={styles.xpBadge}>
          <Icon name="stars" size={16} color="#006c49" />
          <Text style={styles.xpText}>1,250 XP</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.title}>Choose your language</Text>
          <Text style={styles.subtitle}>
            Select your preferred language to customize your ChonX ecosystem experience.
          </Text>
        </View>

        {/* Languages Grid */}
        <View style={styles.gridContainer}>
          {languages.map((lang) => {
            const isActive = selectedLanguage?.name === lang.name;
            return (
              <TouchableOpacity
                key={lang.name}
                style={[styles.languagePill, isActive && styles.languagePillActive]}
                onPress={() => handleSelectLanguage(lang)}
                activeOpacity={0.8}
              >
                <View
                  style={[
                    styles.pillIconCircle,
                    isActive && styles.pillIconCircleActive,
                  ]}
                >
                  <Icon
                    name={lang.icon}
                    size={24}
                    color={isActive ? '#ffffff' : '#006c49'}
                  />
                </View>
                <Text
                  style={[
                    styles.pillText,
                    isActive && styles.pillTextActive,
                  ]}
                >
                  {lang.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Live Preview Card */}
        <View style={styles.previewCard}>
          <Icon name="visibility" size={48} color="rgba(0, 108, 73, 0.1)" style={styles.bgIcon} />
          <View style={styles.previewHeader}>
            <View style={styles.previewIndicator} />
            <Text style={styles.previewHeaderText}>LIVE PREVIEW</Text>
          </View>
          <View style={styles.previewArea}>
            <Animated.Text style={[styles.previewText, { opacity: fadeAnim }]}>
              {selectedLanguage ? selectedLanguage.phrase : 'Please select a language...'}
            </Animated.Text>
          </View>
        </View>

        {/* Continue Button */}
        <View style={styles.footer}>
          <TouchableOpacity
            style={[styles.continueBtn, !selectedLanguage && styles.continueBtnDisabled]}
            onPress={handleContinue}
            disabled={!selectedLanguage}
            activeOpacity={0.8}
          >
            <Text style={styles.continueBtnText}>Continue</Text>
            <Icon name="arrow-forward" size={24} color="#00422b" />
          </TouchableOpacity>
          <Text style={styles.footerNote}>You can change this later in Settings.</Text>
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
    paddingVertical: 16,
    backgroundColor: 'rgba(248, 249, 250, 0.8)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(225, 227, 228, 0.2)',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#10b981',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  logoText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#006c49',
  },
  xpBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e7e8e9',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  xpText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#3c4a42',
    marginLeft: 4,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 40,
  },
  titleSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#191c1d',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#3c4a42',
    textAlign: 'center',
    lineHeight: 28,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 16,
    marginBottom: 40,
  },
  languagePill: {
    width: '45%',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderWidth: 1,
    borderColor: 'rgba(229, 231, 235, 0.5)',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
  },
  languagePillActive: {
    backgroundColor: '#10b981',
    borderColor: '#10b981',
    shadowColor: '#10b981',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 5,
  },
  pillIconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(16, 185, 129, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  pillIconCircleActive: {
    backgroundColor: '#006c49',
  },
  pillText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#191c1d',
  },
  pillTextActive: {
    color: '#ffffff',
  },
  previewCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(229, 231, 235, 0.5)',
    marginBottom: 40,
    overflow: 'hidden',
  },
  bgIcon: {
    position: 'absolute',
    top: -10,
    right: -10,
  },
  previewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  previewIndicator: {
    width: 8,
    height: 24,
    backgroundColor: '#10b981',
    borderRadius: 4,
    marginRight: 8,
  },
  previewHeaderText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#006c49',
    letterSpacing: 1.5,
  },
  previewArea: {
    minHeight: 120,
    backgroundColor: '#edeeef',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  previewText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#191c1d',
    textAlign: 'center',
  },
  footer: {
    alignItems: 'center',
  },
  continueBtn: {
    width: '100%',
    maxWidth: 320,
    height: 56,
    backgroundColor: '#10b981',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  continueBtnDisabled: {
    opacity: 0.3,
  },
  continueBtnText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#00422b',
    marginRight: 8,
  },
  footerNote: {
    fontSize: 12,
    fontWeight: '700',
    color: 'rgba(60, 74, 66, 0.6)',
  },
});
