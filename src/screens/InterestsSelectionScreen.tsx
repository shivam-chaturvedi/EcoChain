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

type Interest = {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
};

const interestsData: Interest[] = [
  {
    id: 'recycling',
    title: 'Recycling',
    subtitle: 'Master the art of circular living and zero-waste habits.',
    icon: 'recycling',
  },
  {
    id: 'energy',
    title: 'Energy saving',
    subtitle: 'Optimize your home and digital footprint for efficiency.',
    icon: 'bolt',
  },
  {
    id: 'water',
    title: 'Water conservation',
    subtitle: 'Preserve our most precious resource through smart usage.',
    icon: 'water-drop',
  },
  {
    id: 'wildlife',
    title: 'Wildlife',
    subtitle: 'Protect biodiversity and support local ecosystems.',
    icon: 'pets',
  },
  {
    id: 'food',
    title: 'Food waste',
    subtitle: 'Reduce kitchen waste and explore sustainable diets.',
    icon: 'restaurant-menu',
  },
  {
    id: 'gardening',
    title: 'Gardening',
    subtitle: 'Grow your own food and create pollinator havens.',
    icon: 'yard', // 'yard' or 'eco' since 'potted_plant' isn't standard in all icon sets
  },
];

export default function InterestsSelectionScreen({ navigation }: any) {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const MAX_SELECTION = 5;

  const toggleInterest = (id: string) => {
    if (selectedInterests.includes(id)) {
      setSelectedInterests(selectedInterests.filter((item) => item !== id));
    } else {
      if (selectedInterests.length < MAX_SELECTION) {
        setSelectedInterests([...selectedInterests, id]);
      }
    }
  };

  const handleStartImpacting = () => {
    if (selectedInterests.length > 0) {
      // End of onboarding -> Navigate to Home or next
      navigation.navigate('StudentHome'); // Or wherever it should go
    }
  };

  const handleSkip = () => {
    navigation.navigate('StudentHome');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Top Nav */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.avatarContainer}>
            <Image
              source={{
                uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALdmk6V4QWC_gfn8mehdsT70qbRmCnYz-82JVWKdboWB4G8ujznrf-PpQw0KLxrUwP_2oYJx_Ni-swjlsYaSnaMznLrii4Y5hgFJaYQZ6hEAUOOvd-S8vBh5sYSQv75dRt8vYWwDx2h4fsx6qbkwuHY7v3JZcQLJvoSPXlzhYUOT0a9ZrJy61PvPkRylEE0icD5dNumq64GyVKVC0osgbas54Ay0CmhAPRPLc1mn1cq1ZOZLddVWZSZJmLr1gX8YXSs9daGwnJ1kaO',
              }}
              style={styles.avatarImage}
            />
            <View style={styles.levelBadge}>
              <Text style={styles.levelBadgeText}>LVL 5</Text>
            </View>
          </View>
          <Text style={styles.logoText}>EcoSystem</Text>
        </View>
        <View style={styles.headerRight}>
          <Icon name="bolt" size={16} color="#006c49" />
          <Text style={styles.xpText}>1,250 XP</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.title}>What are you interested in?</Text>
          <Text style={styles.subtitle}>
            Choose up to 5 topics to personalize your environmental impact journey.
          </Text>

          <View style={styles.counterBadge}>
            <Text style={styles.counterText}>SELECTED: </Text>
            <Text style={styles.counterNumber}>{selectedInterests.length}</Text>
            <Text style={styles.counterText}> / 5</Text>
          </View>
        </View>

        {/* Interests Grid */}
        <View style={styles.gridContainer}>
          {interestsData.map((interest) => {
            const isSelected = selectedInterests.includes(interest.id);
            return (
              <TouchableOpacity
                key={interest.id}
                style={[styles.interestCard, isSelected && styles.interestCardActive]}
                onPress={() => toggleInterest(interest.id)}
                activeOpacity={0.8}
              >
                <View style={styles.cardHeader}>
                  <View
                    style={[
                      styles.iconCircle,
                      isSelected && styles.iconCircleActive,
                    ]}
                  >
                    <Icon
                      name={interest.icon}
                      size={28}
                      color={isSelected ? '#ffffff' : '#006c49'}
                    />
                  </View>
                  {isSelected && (
                    <Icon name="check-circle" size={24} color="#ffffff" style={styles.checkIcon} />
                  )}
                </View>
                <Text style={[styles.cardTitle, isSelected && styles.textActive]}>
                  {interest.title}
                </Text>
                <Text style={[styles.cardSubtitle, isSelected && styles.textActiveSubtitle]}>
                  {interest.subtitle}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Action Buttons */}
        <View style={styles.actionContainer}>
          <TouchableOpacity
            onPress={handleStartImpacting}
            disabled={selectedInterests.length === 0}
            activeOpacity={0.8}
            style={styles.startBtnWrapper}
          >
            <LinearGradient
              colors={selectedInterests.length > 0 ? ['#006c49', '#006b5f'] : ['#e1e3e4', '#e1e3e4']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.startBtn}
            >
              <Text
                style={[
                  styles.startBtnText,
                  { color: selectedInterests.length > 0 ? '#ffffff' : 'rgba(60, 74, 66, 0.5)' },
                ]}
              >
                Start Impacting
              </Text>
              <Icon
                name="trending-up"
                size={24}
                color={selectedInterests.length > 0 ? '#ffffff' : 'rgba(60, 74, 66, 0.5)'}
              />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSkip} style={styles.skipBtn}>
            <Text style={styles.skipBtnText}>SKIP FOR NOW</Text>
          </TouchableOpacity>
        </View>

        {/* Footer Area */}
        <View style={styles.footerArea}>
          <View style={styles.footerContent}>
            <Text style={styles.footerLogo}>EcoSystem</Text>
            <Text style={styles.footerText}>
              Join millions of students in gamifying the protection of our planet. Small actions, school-wide impact.
            </Text>
          </View>
          <Image
            source={{
              uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEfjONWVIMzAoN1VZunOlcJUssGrstWxWTGs3GCJij_kSd_BLnGIaq24HRMNskDZpCkDBCi6LWpqbQEcEGMJo61zSvP-90sCWltdwbxp_qsTtbpN6IrC4uc9hpVaSLOg7s_1dbsrU2_j2FPNBhdd0VrESCHCieyAdR2ubjsoJl3kIJrzCq52apBg6FZL-f53ypi9HSifw-TWZuGRdSwCcRuIqVKMDC1e8k_RxmThOyTKqTRdrX7ydAdwBFB2FL2atujkuCDqgTLqk9',
            }}
            style={styles.footerImage}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f3f4f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    height: 64,
    backgroundColor: 'rgba(248, 249, 250, 0.8)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(225, 227, 228, 0.3)',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 12,
  },
  avatarImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'rgba(0, 108, 73, 0.2)',
  },
  levelBadge: {
    position: 'absolute',
    bottom: -4,
    right: -4,
    backgroundColor: '#006c49',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#f8f9fa',
  },
  levelBadgeText: {
    fontSize: 8,
    fontWeight: '800',
    color: '#ffffff',
  },
  logoText: {
    fontSize: 24,
    fontWeight: '800',
    color: '#006c49',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(16, 185, 129, 0.2)',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
  },
  xpText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#00422b',
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
    fontSize: 18,
    color: '#3c4a42',
    textAlign: 'center',
    marginBottom: 24,
  },
  counterBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e7e8e9',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(187, 202, 191, 0.3)',
  },
  counterText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#3c4a42',
    letterSpacing: 1,
  },
  counterNumber: {
    fontSize: 16,
    fontWeight: '800',
    color: '#006c49',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
    marginBottom: 40,
  },
  interestCard: {
    width: '47%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(229, 231, 235, 0.5)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 15,
    elevation: 2,
    marginBottom: 16,
  },
  interestCardActive: {
    backgroundColor: '#10b981',
    borderColor: '#006c49',
    shadowColor: '#10b981',
    shadowOpacity: 0.2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  iconCircle: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCircleActive: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  checkIcon: {
    position: 'absolute',
    top: -8,
    right: -8,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#191c1d',
    marginBottom: 8,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#3c4a42',
    lineHeight: 20,
  },
  textActive: {
    color: '#ffffff',
  },
  textActiveSubtitle: {
    color: 'rgba(255, 255, 255, 0.8)',
  },
  actionContainer: {
    alignItems: 'center',
    marginBottom: 64,
  },
  startBtnWrapper: {
    width: '100%',
    maxWidth: 320,
    borderRadius: 16,
    shadowColor: '#006c49',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 6,
    marginBottom: 16,
  },
  startBtn: {
    width: '100%',
    height: 64,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  startBtnText: {
    fontSize: 20,
    fontWeight: '700',
    marginRight: 8,
  },
  skipBtn: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  skipBtnText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#3c4a42',
    letterSpacing: 1,
  },
  footerArea: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(225, 227, 228, 0.5)',
    paddingTop: 40,
    gap: 32,
  },
  footerContent: {
    marginBottom: 16,
  },
  footerLogo: {
    fontSize: 24,
    fontWeight: '800',
    color: '#006c49',
    marginBottom: 12,
  },
  footerText: {
    fontSize: 16,
    color: '#3c4a42',
    lineHeight: 24,
  },
  footerImage: {
    width: '100%',
    height: 192,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(225, 227, 228, 0.5)',
  },
});
