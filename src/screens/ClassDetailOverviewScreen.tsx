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
import Icon from 'react-native-vector-icons/MaterialIcons';
import Svg, { Circle } from 'react-native-svg';

export default function ClassDetailOverviewScreen({ navigation }: any) {
  const [activeTab, setActiveTab] = useState('Students');

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} color="#006c49" />
          </TouchableOpacity>
          <Text style={styles.logoText}>10A - Biology Honors</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity><Icon name="notifications" size={24} color="#3c4a42" /></TouchableOpacity>
          <View style={styles.avatar}>
            <Image
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwyq_waYxf8sO8Jr3rUTcTBUZELGdLfYuloZLKsgQCmRwx72l-hNwfcKTPJTNYQcI-cTbaGwkCMSR3PvS2BM4dTeo-CQ_ZwGLXijNJh_XqYAcHepAJdCdWJgzNslvC8bnKfjwohnS1WcRIT4RXf0GaXQdsLc4XyNJDOI7OPIx3yU-KhQ3go4AaxoL99M9OVKfUGbEtn2dx0qUuKWQNZE_TEbR4uSS2SQROvTkuGz10znzpEItEsB2CepVM_TXhZ7JTo5MYp48E8E2h' }}
              style={styles.avatarImg}
            />
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Tab Bar */}
        <View style={styles.tabsContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {['Students', 'Leaderboard', 'Calendar', 'Analytics'].map((tab) => (
              <TouchableOpacity
                key={tab}
                style={[styles.tab, activeTab === tab && styles.tabActive]}
                onPress={() => setActiveTab(tab)}
              >
                <Icon 
                  name={tab === 'Students' ? 'group' : tab === 'Leaderboard' ? 'emoji-events' : tab === 'Calendar' ? 'calendar-today' : 'analytics'} 
                  size={18} 
                  color={activeTab === tab ? '#006c49' : '#3c4a42'} 
                />
                <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>{tab}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Top Cards */}
        <View style={styles.topRow}>
          <View style={styles.footprintCard}>
            <View style={styles.footprintHeader}>
              <View>
                <Text style={styles.footprintLabel}>FOOTPRINT SUMMARY</Text>
                <View style={styles.footprintValueRow}>
                  <Text style={styles.footprintValue}>1,240</Text>
                  <Text style={styles.footprintUnit}>kg CO2 reduced</Text>
                </View>
              </View>
              <View style={styles.trendBadge}>
                <Icon name="trending-up" size={14} color="#006f64" />
                <Text style={styles.trendBadgeText}>+12% vs last month</Text>
              </View>
            </View>
            {/* Sparkline approximation */}
            <View style={styles.sparklineContainer}>
              <View style={styles.sparklineBg} />
            </View>
          </View>

          <View style={styles.participationCard}>
            <Text style={styles.participationLabel}>PARTICIPATION</Text>
            <View style={styles.ringWrapper}>
              <Svg width="140" height="140" viewBox="0 0 140 140" style={{ transform: [{ rotate: '-90deg' }] }}>
                <Circle cx="70" cy="70" r="60" stroke="rgba(0,107,95,0.1)" strokeWidth="10" fill="transparent" />
                <Circle cx="70" cy="70" r="60" stroke="#006b5f" strokeWidth="10" strokeDasharray="377" strokeDashoffset="30" strokeLinecap="round" fill="transparent" />
              </Svg>
              <View style={styles.ringCenter}>
                <Text style={styles.ringValue}>92%</Text>
                <Text style={styles.ringUnit}>Active</Text>
              </View>
            </View>
            <Text style={styles.participationDesc}>23 of 25 students participated in this week's challenge.</Text>
          </View>
        </View>

        {/* Milestones */}
        <View style={styles.milestonesSection}>
          <Text style={styles.milestonesTitle}>CLASS MILESTONES</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.milestonesScroll}>
            <View style={styles.milestoneCard}>
              <View style={[styles.milestoneIcon, { backgroundColor: '#6ffbbe' }]}>
                <Icon name="military-tech" size={24} color="#002113" />
              </View>
              <View>
                <Text style={styles.milestoneLabel}>REACHED</Text>
                <Text style={styles.milestoneText}>Top 3 Schoolwide</Text>
              </View>
            </View>
            <View style={styles.milestoneCard}>
              <View style={[styles.milestoneIcon, { backgroundColor: '#71f8e4' }]}>
                <Icon name="bolt" size={24} color="#00201c" />
              </View>
              <View>
                <Text style={styles.milestoneLabel}>CURRENT</Text>
                <Text style={styles.milestoneText}>7 Day Streak</Text>
              </View>
            </View>
            <View style={styles.milestoneCard}>
              <View style={[styles.milestoneIcon, { backgroundColor: '#d8e2ff' }]}>
                <Icon name="recycling" size={24} color="#001a42" />
              </View>
              <View>
                <Text style={styles.milestoneLabel}>SAVED</Text>
                <Text style={styles.milestoneText}>200 plastic bottles</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, height: 64, backgroundColor: 'rgba(248,249,250,0.8)', borderBottomWidth: 1, borderBottomColor: 'rgba(187,202,191,0.2)' },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  backBtn: { padding: 8, borderRadius: 20 },
  logoText: { fontSize: 24, fontWeight: '800', color: '#006c49' },
  headerRight: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  avatar: { width: 32, height: 32, borderRadius: 16, overflow: 'hidden', borderWidth: 1, borderColor: 'rgba(0,108,73,0.2)' },
  avatarImg: { width: '100%', height: '100%' },
  scrollContent: { paddingHorizontal: 24, paddingTop: 24, paddingBottom: 100 },
  tabsContainer: { borderBottomWidth: 1, borderBottomColor: 'rgba(187,202,191,0.1)', marginBottom: 24 },
  tab: { flexDirection: 'row', alignItems: 'center', gap: 8, paddingHorizontal: 24, paddingVertical: 12, borderRadius: 12 },
  tabActive: { backgroundColor: 'rgba(225,227,228,0.5)' },
  tabText: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 0.5 },
  tabTextActive: { color: '#006c49' },
  topRow: { flexDirection: 'column', gap: 24 },
  footprintCard: { backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: 16, padding: 24, borderWidth: 1, borderColor: 'rgba(225,227,228,0.4)', overflow: 'hidden' },
  footprintHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 },
  footprintLabel: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 1, marginBottom: 8 },
  footprintValueRow: { flexDirection: 'row', alignItems: 'baseline', gap: 8 },
  footprintValue: { fontSize: 42, fontWeight: '700', color: '#006c49', lineHeight: 42 },
  footprintUnit: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 0.5 },
  trendBadge: { flexDirection: 'row', alignItems: 'center', gap: 4, backgroundColor: '#6df5e1', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 16 },
  trendBadgeText: { fontSize: 10, fontWeight: '700', color: '#006f64' },
  sparklineContainer: { height: 96, width: '100%', marginTop: 16 },
  sparklineBg: { height: '100%', width: '100%', backgroundColor: 'rgba(16,185,129,0.2)', borderTopLeftRadius: 100, borderTopRightRadius: 16 },
  participationCard: { backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: 16, padding: 24, alignItems: 'center', borderWidth: 1, borderColor: 'rgba(225,227,228,0.4)' },
  participationLabel: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 1, marginBottom: 32 },
  ringWrapper: { width: 140, height: 140, position: 'relative', marginBottom: 32 },
  ringCenter: { position: 'absolute', inset: 0, alignItems: 'center', justifyContent: 'center' },
  ringValue: { fontSize: 48, fontWeight: '800', color: '#191c1d' },
  ringUnit: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 0.5 },
  participationDesc: { fontSize: 14, color: '#3c4a42', textAlign: 'center' },
  milestonesSection: { backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: 16, padding: 24, marginTop: 24, borderWidth: 1, borderColor: 'rgba(225,227,228,0.4)' },
  milestonesTitle: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 1, marginBottom: 24 },
  milestonesScroll: { gap: 24 },
  milestoneCard: { flexDirection: 'row', alignItems: 'center', gap: 12, backgroundColor: '#ffffff', padding: 12, borderRadius: 12, borderWidth: 1, borderColor: 'rgba(187,202,191,0.2)' },
  milestoneIcon: { width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  milestoneLabel: { fontSize: 10, fontWeight: '700', color: '#3c4a42', letterSpacing: 0.5 },
  milestoneText: { fontSize: 14, fontWeight: '700', color: '#191c1d' },
});
