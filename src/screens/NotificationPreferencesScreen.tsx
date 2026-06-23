import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  Switch,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function NotificationPreferencesScreen({ navigation }: any) {
  const [preferences, setPreferences] = useState({
    approvalAlerts: true,
    studentSubmissions: true,
    campaignReminders: false,
    dailyInsights: true,
  });

  const toggleSwitch = (key: keyof typeof preferences) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleFinishSetup = () => {
    navigation.navigate('SustainabilityPreferencesScreen');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Top Nav */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.7}>
            <Icon name="arrow-back" size={24} color="#006c49" />
          </TouchableOpacity>
          <Text style={styles.logoText}>ChonX</Text>
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.xpText}>⚡ 2,450 XP</Text>
          <View style={styles.avatarContainer}>
            <Image
              source={{
                uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfXvZUaYGF4U9A2YsnBHGGZFmrv3SoprgAE-grfPYg3OBx3TrIwcpVFba8XXtv6zQALqufikzc2c14N85rn2xKki5y2UQwMued6wvfTk-CP0dt037TBhx6tWDY-l6vB_PefK8hzWpt16GFX194DRlLy_Ar3VJEX_bjdk40BLytqqRy2MY9phVG6OFRzG8KQIR4DgXFOOMIK5lcHkoJ5l3qjiftfMz1g-uDhZ54VW-3uT_RhRkUYDDXfj8iqeTy6iHZggkG4JbfutmM',
              }}
              style={styles.avatarImage}
            />
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.title}>Stay Updated</Text>
          <Text style={styles.subtitle}>
            Configure how you'd like to receive eco-updates and student progress alerts.
          </Text>
        </View>

        {/* Preferences List */}
        <View style={styles.listContainer}>
          {/* Card 1 */}
          <View style={[styles.preferenceCard, preferences.approvalAlerts && styles.preferenceCardActive]}>
            <View style={styles.cardLeft}>
              <View style={[styles.iconCircle, { backgroundColor: 'rgba(0, 108, 73, 0.1)' }]}>
                <Icon name="fact-check" size={24} color="#006c49" />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.cardTitle}>Activity Approval Alerts</Text>
                <Text style={styles.cardSubtitle}>
                  Get notified when students request validation for their daily eco-actions.
                </Text>
              </View>
            </View>
            <Switch
              trackColor={{ false: '#e1e3e4', true: '#10b981' }}
              thumbColor="#ffffff"
              onValueChange={() => toggleSwitch('approvalAlerts')}
              value={preferences.approvalAlerts}
            />
          </View>

          {/* Card 2 */}
          <View style={[styles.preferenceCard, preferences.studentSubmissions && styles.preferenceCardActive]}>
            <View style={styles.cardLeft}>
              <View style={[styles.iconCircle, { backgroundColor: 'rgba(0, 107, 95, 0.1)' }]}>
                <Icon name="assignment-turned-in" size={24} color="#006b5f" />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.cardTitle}>Student Submissions</Text>
                <Text style={styles.cardSubtitle}>
                  Weekly summaries of campaign project uploads and creative sustainability work.
                </Text>
              </View>
            </View>
            <Switch
              trackColor={{ false: '#e1e3e4', true: '#10b981' }}
              thumbColor="#ffffff"
              onValueChange={() => toggleSwitch('studentSubmissions')}
              value={preferences.studentSubmissions}
            />
          </View>

          {/* Card 3 */}
          <View style={[styles.preferenceCard, preferences.campaignReminders && styles.preferenceCardActive]}>
            <View style={styles.cardLeft}>
              <View style={[styles.iconCircle, { backgroundColor: 'rgba(0, 90, 194, 0.1)' }]}>
                <Icon name="campaign" size={24} color="#005ac2" />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.cardTitle}>Campaign Reminders</Text>
                <Text style={styles.cardSubtitle}>
                  Important deadlines for school-wide green challenges and leaderboard resets.
                </Text>
              </View>
            </View>
            <Switch
              trackColor={{ false: '#e1e3e4', true: '#10b981' }}
              thumbColor="#ffffff"
              onValueChange={() => toggleSwitch('campaignReminders')}
              value={preferences.campaignReminders}
            />
          </View>

          {/* Card 4 */}
          <View style={[styles.preferenceCard, preferences.dailyInsights && styles.preferenceCardActive]}>
            <View style={styles.cardLeft}>
              <View style={[styles.iconCircle, { backgroundColor: 'rgba(0, 108, 73, 0.1)' }]}>
                <Icon name="lightbulb" size={24} color="#006c49" />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.cardTitle}>Daily Sustainability Insights</Text>
                <Text style={styles.cardSubtitle}>
                  Bite-sized pedagogical tips for teaching climate science effectively.
                </Text>
              </View>
            </View>
            <Switch
              trackColor={{ false: '#e1e3e4', true: '#10b981' }}
              thumbColor="#ffffff"
              onValueChange={() => toggleSwitch('dailyInsights')}
              value={preferences.dailyInsights}
            />
          </View>
        </View>

        {/* Finish Button */}
        <View style={styles.ctaContainer}>
          <TouchableOpacity onPress={handleFinishSetup} activeOpacity={0.8} style={styles.buttonWrapper}>
            <LinearGradient
              colors={['#006c49', '#006b5f']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.finishBtn}
            >
              <Text style={styles.finishBtnText}>Finish Setup</Text>
            </LinearGradient>
          </TouchableOpacity>
          <Text style={styles.footerNote}>SETTINGS CAN BE CHANGED ANYTIME IN PROFILE</Text>
        </View>
      </ScrollView>

      {/* Fake Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="home" size={24} color="#3c4a42" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="eco" size={24} color="#3c4a42" />
          <Text style={styles.navText}>Impact</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="workspace-premium" size={24} color="#3c4a42" />
          <Text style={styles.navText}>Arena</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItemActive}>
          <Icon name="person" size={24} color="#00422b" />
          <Text style={styles.navTextActive}>Profile</Text>
        </TouchableOpacity>
      </View>
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
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(225, 227, 228, 0.3)',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 24,
    fontWeight: '800',
    color: '#006c49',
    marginLeft: 12,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  xpText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#006c49',
    marginRight: 16,
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#ffffff',
    overflow: 'hidden',
    backgroundColor: '#10b981',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 100, // Make room for bottom nav
  },
  titleSection: {
    marginBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#191c1d',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#3c4a42',
    lineHeight: 26,
  },
  listContainer: {
    gap: 24,
    marginBottom: 40,
  },
  preferenceCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(229, 231, 235, 0.5)',
  },
  preferenceCardActive: {
    backgroundColor: 'rgba(240, 253, 244, 0.5)',
    borderColor: 'rgba(16, 185, 129, 0.3)',
  },
  cardLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginRight: 16,
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#191c1d',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 16,
    color: '#3c4a42',
    lineHeight: 24,
  },
  ctaContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  buttonWrapper: {
    width: '100%',
    borderRadius: 12,
    shadowColor: '#10b981',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 6,
    marginBottom: 16,
  },
  finishBtn: {
    width: '100%',
    height: 56,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  finishBtnText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffff',
  },
  footerNote: {
    fontSize: 12,
    fontWeight: '700',
    color: '#6c7a71',
    letterSpacing: 1,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(248, 249, 250, 0.9)',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    shadowColor: '#006c49',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 10,
    paddingBottom: 20, // For iPhone home indicator
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  navItemActive: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 20,
    backgroundColor: '#10b981',
    borderRadius: 24,
  },
  navText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#3c4a42',
    marginTop: 4,
  },
  navTextActive: {
    fontSize: 12,
    fontWeight: '700',
    color: '#00422b',
    marginTop: 4,
  },
});
