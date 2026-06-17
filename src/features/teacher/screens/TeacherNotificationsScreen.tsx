import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Switch,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import { Colors } from '../../../constants';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'TeacherNotifications'>;
};

type NotifItem = {
  id: string;
  icon: string;
  title: string;
  desc: string;
  defaultOn: boolean;
};

const NOTIFICATIONS: NotifItem[] = [
  {
    id: 'approval',
    icon: '🔔',
    title: 'Activity Approval Alerts',
    desc: 'Get notified when students request validation for their daily eco-actions.',
    defaultOn: true,
  },
  {
    id: 'submissions',
    icon: '✅',
    title: 'Student Submissions',
    desc: 'Weekly summaries of campaign project uploads and creative sustainability work.',
    defaultOn: true,
  },
  {
    id: 'reminders',
    icon: '📅',
    title: 'Campaign Reminders',
    desc: 'Important deadlines for school-wide green challenges and leaderboard resets.',
    defaultOn: false,
  },
  {
    id: 'insights',
    icon: '💡',
    title: 'Daily Sustainability Insights',
    desc: 'Bite-sized pedagogical tips for teaching climate science effectively.',
    defaultOn: true,
  },
];

export default function TeacherNotificationsScreen({ navigation }: Props) {
  const [toggles, setToggles] = useState<Record<string, boolean>>(
    Object.fromEntries(NOTIFICATIONS.map(n => [n.id, n.defaultOn])),
  );

  const flip = (id: string) =>
    setToggles(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.surface} />

      {/* ── Header ── */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn} activeOpacity={0.7}>
            <Text style={styles.backArrow}>←</Text>
          </TouchableOpacity>
          <Text style={styles.brand}>ChonX</Text>
        </View>
        <View style={styles.headerRight}>
          <View style={styles.xpBadge}>
            <Text style={styles.xpBolt}>⚡</Text>
            <Text style={styles.xpText}>2,450 XP</Text>
          </View>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarEmoji}>👩‍🏫</Text>
          </View>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}>

        {/* ── Title ── */}
        <Text style={styles.title}>Stay Updated</Text>
        <Text style={styles.subtitle}>
          Configure how you'd like to receive eco-updates and student progress alerts.
        </Text>

        {/* ── Notification Cards ── */}
        <View style={styles.cardList}>
          {NOTIFICATIONS.map(item => (
            <View key={item.id} style={styles.notifCard}>
              <View style={styles.notifIconWrap}>
                <Text style={styles.notifIcon}>{item.icon}</Text>
              </View>
              <View style={styles.notifContent}>
                <Text style={styles.notifTitle}>{item.title}</Text>
                <Text style={styles.notifDesc}>{item.desc}</Text>
              </View>
              <Switch
                value={toggles[item.id]}
                onValueChange={() => flip(item.id)}
                trackColor={{ false: '#D1D5DB', true: Colors.primaryDark }}
                thumbColor={Colors.white}
                ios_backgroundColor="#D1D5DB"
                style={styles.toggle}
              />
            </View>
          ))}
        </View>

      </ScrollView>

      {/* ── Footer ── */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.finishBtn}
          onPress={() => navigation.navigate('TeacherFeatureTour')}
          activeOpacity={0.85}>
          <Text style={styles.finishBtnText}>Finish Setup</Text>
        </TouchableOpacity>
        <Text style={styles.footerNote}>SETTINGS CAN BE CHANGED ANYTIME IN PROFILE</Text>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Colors.surface,
  },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: Colors.surface,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  backBtn: {
    padding: 4,
  },
  backArrow: {
    fontSize: 20,
    color: Colors.primaryDark,
    fontWeight: '600',
  },
  brand: {
    fontSize: 18,
    fontWeight: '800',
    color: Colors.primaryDark,
    letterSpacing: -0.3,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  xpBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  xpBolt: {
    fontSize: 14,
  },
  xpText: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.text,
  },
  avatarCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#D1E8D8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarEmoji: {
    fontSize: 18,
  },

  // Scroll
  scroll: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 24,
  },

  // Title
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: Colors.text,
    marginBottom: 10,
    letterSpacing: -0.4,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 21,
    marginBottom: 28,
  },

  // Card list
  cardList: {
    gap: 12,
  },

  // Notification card
  notifCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: Colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  notifIconWrap: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
    marginTop: 2,
    flexShrink: 0,
  },
  notifIcon: {
    fontSize: 17,
  },
  notifContent: {
    flex: 1,
    paddingRight: 8,
  },
  notifTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 5,
    lineHeight: 22,
  },
  notifDesc: {
    fontSize: 13,
    color: Colors.textSecondary,
    lineHeight: 19,
  },
  toggle: {
    flexShrink: 0,
    marginTop: 2,
  },

  // Footer
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 28,
    paddingTop: 12,
    backgroundColor: Colors.surface,
    alignItems: 'center',
    gap: 14,
  },
  finishBtn: {
    width: '100%',
    height: 54,
    backgroundColor: Colors.primaryDark,
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.primaryDark,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  finishBtnText: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.white,
    letterSpacing: 0.2,
  },
  footerNote: {
    fontSize: 10,
    fontWeight: '600',
    color: Colors.textLight,
    letterSpacing: 0.8,
    textAlign: 'center',
  },
});
