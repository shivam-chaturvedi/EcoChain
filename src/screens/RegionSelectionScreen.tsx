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
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

type Region = 'UAE' | 'India' | 'Global' | null;

export default function RegionSelectionScreen({ navigation }: any) {
  const [selectedRegion, setSelectedRegion] = useState<Region>(null);

  const handleContinue = () => {
    if (selectedRegion) {
      navigation.navigate('NotificationPreferencesScreen');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Decorative Gradients */}
      <View style={styles.decorativeTopRight} />
      <View style={styles.decorativeBottomLeft} />

      {/* Top Nav */}
      <View style={styles.header}>
        <Text style={styles.logoText}>EcoSystem</Text>
        <View style={styles.xpBadge}>
          <Icon name="stars" size={16} color="#006c49" />
          <Text style={styles.xpText}>1,250 XP</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.title}>Where are you based?</Text>
          <Text style={styles.subtitle}>
            Choose your primary location to customize your environmental impact goals and local leaderboards.
          </Text>
        </View>

        {/* Regions Grid */}
        <View style={styles.gridContainer}>
          {/* UAE */}
          <TouchableOpacity
            style={[styles.regionCard, selectedRegion === 'UAE' && styles.regionCardSelected]}
            onPress={() => setSelectedRegion('UAE')}
            activeOpacity={0.8}
          >
            {selectedRegion === 'UAE' && (
              <Icon name="check-circle" size={24} color="#10b981" style={styles.checkBadge} />
            )}
            <View style={styles.imageContainer}>
              <Image
                source={{
                  uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4Oqb9haL3Lo1xwNXMiTg7c7Ub7R1q6atxNcPxhFQCFh0zAQmcq7iv5EW6m-uHVmFOd0SstbrMaroVFAQyquOJx65YSg3FMLay5Ag7DcX-USG-Y8m04SnZbTOoIZfajf81rwD8Qjxi2L10KFshbWnf0YGmEMJBJzCuCZWInsQgFMFI8CydKpeBuFz8mmsrmwfqJgnOnj9Mad8MFFAtXmSpvwiEzaBJTLhyqzZ0DJ5BShlIoi2g_ct43s__AJlHsuOWTk4oecnfF6uI',
                }}
                style={styles.image}
              />
            </View>
            <Text style={styles.regionTitle}>UAE</Text>
            <Text style={styles.regionSubtitle}>MIDDLE EAST</Text>
          </TouchableOpacity>

          {/* India */}
          <TouchableOpacity
            style={[styles.regionCard, selectedRegion === 'India' && styles.regionCardSelected]}
            onPress={() => setSelectedRegion('India')}
            activeOpacity={0.8}
          >
            {selectedRegion === 'India' && (
              <Icon name="check-circle" size={24} color="#10b981" style={styles.checkBadge} />
            )}
            <View style={styles.imageContainer}>
              <Image
                source={{
                  uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUK7LZhTiooGBR7V_KqIyE9gabMF--lkLHm_EdPDKIRhTSh-wYZHbFOqDEbp5ug8HwUThLo2PfqUDOrTChcsyET_y5yUTWJvuVkXInXTKj_QhcgWIGvbnwqFwh3bkKz6epg0hbzbBX88bFn7bG5OYGTcfj82Goyu3r1KP5Om4ZZU7qLY2K4u8weofQHVJmgBB0bc8Gzbz5nkWCg7ubouCgbFo7mr_NABJitgA4c6hqk5JVoulM6CZF0AWJJjr-S4EWxqH8ZXVFU0Qv',
                }}
                style={styles.image}
              />
            </View>
            <Text style={styles.regionTitle}>India</Text>
            <Text style={styles.regionSubtitle}>SOUTH ASIA</Text>
          </TouchableOpacity>

          {/* Global */}
          <TouchableOpacity
            style={[styles.regionCard, selectedRegion === 'Global' && styles.regionCardSelected]}
            onPress={() => setSelectedRegion('Global')}
            activeOpacity={0.8}
          >
            {selectedRegion === 'Global' && (
              <Icon name="check-circle" size={24} color="#10b981" style={styles.checkBadge} />
            )}
            <View style={[styles.imageContainer, { backgroundColor: 'rgba(16, 185, 129, 0.1)' }]}>
              <Icon name="public" size={32} color="#006c49" />
            </View>
            <Text style={styles.regionTitle}>Global</Text>
            <Text style={styles.regionSubtitle}>INTERNATIONAL</Text>
          </TouchableOpacity>
        </View>

        {/* Continue Button */}
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={handleContinue}
            disabled={!selectedRegion}
            activeOpacity={0.8}
            style={styles.buttonWrapper}
          >
            <LinearGradient
              colors={selectedRegion ? ['#10b981', '#006c49'] : ['#e1e3e4', '#e1e3e4']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.continueBtn}
            >
              <Text
                style={[
                  styles.continueBtnText,
                  { color: selectedRegion ? '#ffffff' : 'rgba(60, 74, 66, 0.5)' },
                ]}
              >
                Continue
              </Text>
              <Icon
                name="arrow-forward"
                size={24}
                color={selectedRegion ? '#ffffff' : 'rgba(60, 74, 66, 0.5)'}
              />
            </LinearGradient>
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
  decorativeTopRight: {
    position: 'absolute',
    top: -50,
    right: -50,
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: 'rgba(0, 108, 73, 0.05)',
  },
  decorativeBottomLeft: {
    position: 'absolute',
    bottom: -50,
    left: -50,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(0, 107, 95, 0.05)',
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
  logoText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#006c49',
  },
  xpBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  xpText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#006c49',
    marginLeft: 4,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 40,
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
    fontSize: 16,
    color: '#3c4a42',
    textAlign: 'center',
    maxWidth: 300,
    lineHeight: 24,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 16,
    marginBottom: 40,
  },
  regionCard: {
    width: '45%',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderWidth: 1,
    borderColor: 'rgba(229, 231, 235, 0.5)',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginBottom: 16,
  },
  regionCardSelected: {
    borderColor: '#10b981',
    backgroundColor: 'rgba(16, 185, 129, 0.04)',
    shadowColor: '#10b981',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  checkBadge: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#edeeef',
    overflow: 'hidden',
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(229, 231, 235, 0.3)',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  regionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#191c1d',
    marginBottom: 4,
  },
  regionSubtitle: {
    fontSize: 10,
    fontWeight: '700',
    color: '#3c4a42',
    letterSpacing: 0.5,
  },
  footer: {
    alignItems: 'center',
  },
  buttonWrapper: {
    width: '100%',
    maxWidth: 320,
    borderRadius: 28,
    shadowColor: '#10b981',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 6,
  },
  continueBtn: {
    width: '100%',
    height: 56,
    borderRadius: 28,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  continueBtnText: {
    fontSize: 18,
    fontWeight: '600',
    marginRight: 8,
  },
});
