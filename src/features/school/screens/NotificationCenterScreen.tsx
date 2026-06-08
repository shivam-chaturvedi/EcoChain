import React from 'react';
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
  navigation: NativeStackNavigationProp<RootStackParamList, 'NotificationCenter'>;
};

export default function NotificationCenterScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerBrand}>
          <Text style={styles.headerBrandIcon}>eco</Text>
          <Text style={styles.brandName}>EcoSchools Admin</Text>
        </View>
        <TouchableOpacity style={styles.iconBtn}>
          <View style={styles.bellBadgeContainer}>
             <Text style={styles.headerIcon}>🔔</Text>
             <View style={styles.redDot} />
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>

        {/* Title Section */}
        <Text style={styles.title}>Notification Center</Text>
        <Text style={styles.subtitle}>
          Stay updated with your school's ecological progress.
        </Text>

        {/* Filters */}
        <View style={styles.filtersRow}>
          <TouchableOpacity style={[styles.filterPill, styles.filterPillActive]}>
            <Text style={[styles.filterText, styles.filterTextActive]}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterPill}>
            <Text style={styles.filterText}>System Updates</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterPill}>
            <Text style={styles.filterText}>Initiatives</Text>
          </TouchableOpacity>
        </View>

        {/* Notification Items */}
        
        {/* Item 1 */}
        <View style={styles.notifCard}>
          <View style={styles.notifIconContainerBlue}>
            <Text style={styles.notifIconBlue}>⚙️</Text>
          </View>
          <View style={styles.notifContent}>
            <View style={styles.notifHeaderRow}>
              <Text style={styles.notifCategoryBlue}>System Updates</Text>
              <Text style={styles.notifTime}>2M AGO</Text>
            </View>
            <Text style={styles.notifTitle}>New Security Patch v4.2</Text>
            <Text style={styles.notifDesc}>
              All coordinator accounts have been updated with enhanced biometric verification protocols.
            </Text>
          </View>
        </View>

        {/* Item 2 */}
        <View style={styles.notifCard}>
          <View style={styles.notifIconContainerGreen}>
            <Text style={styles.notifIconGreen}>✓</Text>
          </View>
          <View style={styles.notifContent}>
            <View style={styles.notifHeaderRow}>
              <Text style={styles.notifCategoryGreen}>Milestones</Text>
              <Text style={styles.notifTime}>1H AGO</Text>
            </View>
            <Text style={styles.notifTitle}>Zero Waste Badge Earned!</Text>
            <Text style={styles.notifDesc}>
              Oakwood High has officially reduced plastic waste by 95% this semester. Incredible work!
            </Text>
          </View>
        </View>

        {/* Item 3 */}
        <View style={styles.notifCard}>
          <View style={styles.notifIconContainerTeal}>
            <Text style={styles.notifIconTeal}>🎖️</Text>
          </View>
          <View style={styles.notifContent}>
            <View style={styles.notifHeaderRow}>
              <Text style={styles.notifCategoryTeal}>Student Achievements</Text>
              <Text style={styles.notifTime}>3H AGO</Text>
            </View>
            <Text style={styles.notifTitle}>Top Performer: Leo Vance</Text>
            <Text style={styles.notifDesc}>
              Leo has completed all 5 'Water Conservation' challenges with a perfect score.
            </Text>
          </View>
        </View>

        {/* Item 4 */}
        <View style={styles.notifCard}>
          <View style={styles.notifIconContainerLightGreen}>
            <Text style={styles.notifIconLightGreen}>🪴</Text>
          </View>
          <View style={styles.notifContent}>
            <View style={styles.notifHeaderRow}>
              <Text style={styles.notifCategoryGreen}>Initiatives</Text>
              <Text style={styles.notifTime}>8H AGO</Text>
            </View>
            <Text style={styles.notifTitle}>Community Garden Kickoff</Text>
            <Text style={styles.notifDesc}>
              Phase 1 of the vertical gardening initiative starts tomorrow in the West Quad.
            </Text>
          </View>
        </View>

        {/* Item 5 */}
        <View style={styles.notifCard}>
          <View style={styles.notifIconContainerGray}>
            <Text style={styles.notifIconGray}>🎓</Text>
          </View>
          <View style={styles.notifContent}>
            <View style={styles.notifHeaderRow}>
              <Text style={styles.notifCategoryGray}>Teacher Actions</Text>
              <Text style={styles.notifTime}>YESTERDAY</Text>
            </View>
            <Text style={styles.notifTitle}>Reports Due: Ms. Halloway</Text>
            <Text style={styles.notifDesc}>
              Teacher Ms. Halloway has submitted the monthly sustainability report for review.
            </Text>
          </View>
        </View>

        {/* Promo Card */}
        <View style={styles.promoCard}>
          <Text style={styles.promoTitle}>Weekly Impact</Text>
          <Text style={styles.promoDesc}>
            Your school saved 4,200 liters of water this week.
          </Text>
          <TouchableOpacity style={styles.promoBtn}>
            <Text style={styles.promoBtnText}>View Detailed Report</Text>
          </TouchableOpacity>
        </View>

        {/* Item 6 */}
        <View style={styles.notifCard}>
          <View style={styles.notifIconContainerLightGreen}>
            <Text style={styles.notifIconLightGreen}>🎉</Text>
          </View>
          <View style={styles.notifContent}>
            <View style={styles.notifHeaderRow}>
              <Text style={styles.notifCategoryGreen}>Milestones</Text>
              <Text style={styles.notifTime}>2D AGO</Text>
            </View>
            <Text style={styles.notifTitle}>1,000 Trees Goal Met</Text>
            <Text style={styles.notifDesc}>
              The district-wide reforestation goal has been achieved ahead of schedule!
            </Text>
          </View>
        </View>

        <View style={styles.bottomPad} />
      </ScrollView>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🎛️</Text>
          <Text style={styles.navLabel}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🌱</Text>
          <Text style={styles.navLabel}>Initiatives</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <View style={styles.navItemActiveBg}>
            <Text style={styles.navIconActive}>📊</Text>
            <Text style={styles.navLabelActive}>Analytics</Text>
          </View>
        </TouchableOpacity>
      </View>
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
  headerBrand: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerBrandIcon: {
    fontSize: 16,
    color: '#059669',
    fontWeight: '800',
    marginRight: 4,
  },
  brandName: {
    fontSize: 16,
    fontWeight: '800',
    color: '#004D40',
  },
  iconBtn: {
    padding: 8,
  },
  bellBadgeContainer: {
    position: 'relative',
  },
  headerIcon: {
    fontSize: 18,
    color: '#334155',
  },
  redDot: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#EF4444',
    borderWidth: 1,
    borderColor: '#F8FAFC',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 80, // For bottom nav
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#002B36',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 12,
    color: '#475569',
    lineHeight: 18,
    marginBottom: 20,
  },
  filtersRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 24,
  },
  filterPill: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    backgroundColor: '#F1F5F9',
  },
  filterPillActive: {
    backgroundColor: '#10B981',
  },
  filterText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#475569',
  },
  filterTextActive: {
    color: Colors.white,
  },
  notifCard: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    shadowColor: Colors.cardShadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.03,
    shadowRadius: 10,
    elevation: 2,
  },
  notifIconContainerBlue: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#E0F2FE',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  notifIconBlue: {
    fontSize: 16,
  },
  notifCategoryBlue: {
    fontSize: 9,
    fontWeight: '800',
    color: '#3B82F6',
    letterSpacing: 0.5,
  },
  notifIconContainerGreen: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#D1FAE5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  notifIconGreen: {
    fontSize: 16,
  },
  notifCategoryGreen: {
    fontSize: 9,
    fontWeight: '800',
    color: '#059669',
    letterSpacing: 0.5,
  },
  notifIconContainerTeal: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#CCFBF1',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  notifIconTeal: {
    fontSize: 16,
  },
  notifCategoryTeal: {
    fontSize: 9,
    fontWeight: '800',
    color: '#0D9488',
    letterSpacing: 0.5,
  },
  notifIconContainerLightGreen: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#ECFDF5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  notifIconLightGreen: {
    fontSize: 16,
  },
  notifIconContainerGray: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  notifIconGray: {
    fontSize: 16,
  },
  notifCategoryGray: {
    fontSize: 9,
    fontWeight: '800',
    color: '#64748B',
    letterSpacing: 0.5,
  },
  notifContent: {
    flex: 1,
  },
  notifHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  notifTime: {
    fontSize: 9,
    fontWeight: '700',
    color: '#94A3B8',
  },
  notifTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: '#1E293B',
    marginBottom: 4,
  },
  notifDesc: {
    fontSize: 12,
    color: '#475569',
    lineHeight: 18,
  },
  promoCard: {
    backgroundColor: '#10B981',
    borderRadius: 24,
    padding: 24,
    marginBottom: 16,
    shadowColor: '#10B981',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 4,
  },
  promoTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#002B20',
    marginBottom: 8,
  },
  promoDesc: {
    fontSize: 13,
    color: '#004D40',
    lineHeight: 18,
    marginBottom: 20,
    width: '70%',
  },
  promoBtn: {
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  promoBtnText: {
    color: '#10B981',
    fontSize: 11,
    fontWeight: '800',
  },
  bottomPad: {
    height: 40,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  navItemActiveBg: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#10B981', // green background for active icon
    width: 64,
    height: 64,
    borderRadius: 32,
    top: -20, // floats up
    shadowColor: '#10B981',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 5,
  },
  navIcon: {
    fontSize: 20,
    color: '#94A3B8',
    marginBottom: 4,
  },
  navIconActive: {
    fontSize: 20,
    color: Colors.white,
  },
  navLabel: {
    fontSize: 10,
    fontWeight: '600',
    color: '#94A3B8',
  },
  navLabelActive: {
    fontSize: 10,
    fontWeight: '700',
    color: Colors.white,
    marginTop: 2,
  },
});
