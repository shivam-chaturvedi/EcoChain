import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

const CATEGORIES = [
  { id: 'recycling', title: 'Recycling', icon: 'recycling', color: '#10b981', bg: 'rgba(16, 185, 129, 0.1)' },
  { id: 'energy', title: 'Energy Saving', icon: 'bolt', color: '#ea580c', bg: '#ffedd5' },
  { id: 'water', title: 'Water Saving', icon: 'water-drop', color: '#2563eb', bg: '#dbeafe' },
  { id: 'travel', title: 'Sustainable Travel', icon: 'pedal-bike', color: '#0d9488', bg: '#ccfbf1' },
  { id: 'waste', title: 'Reduced Waste', icon: 'delete-outline', color: '#e11d48', bg: '#ffe4e6' },
];

export default function LogEcoActionScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.avatarBorder}>
            <Image 
              source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2SDgBMAsl3o1lG79QrMGmWlIW7CFWa6Ege5OymFzTDQ4J7a50MYedzfe1aZzjuSOT4jzakWld491LhEsStCP-IKLzi4sKm9ZJ1XWtEMK4KCTBmNsomzYRdzO3oGVeOngGxa7jO3T90Ww_rg8AJ_FT9PVH8quJVa5g5uIiZEpcG3BMVoRG4Ej6LXhl8lCotP01gxbd6JKdbRR1vOfDe82YFYol7ByzGuPdkuw09UqIXTv5_zNHTeG-rkZKjU0P4Vbi8DYyERScMYxU'}}
              style={styles.avatar}
            />
          </View>
          <Text style={styles.logoText}>ChonX</Text>
        </View>
        <TouchableOpacity style={styles.notifBtn}>
          <Icon name="notifications" size={24} color="#006c49" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Title */}
        <View style={styles.titleSection}>
          <Text style={styles.title}>Log Your Impact</Text>
          <Text style={styles.subtitle}>Choose a category to record your sustainable actions today.</Text>
        </View>

        {/* Grid */}
        <View style={styles.grid}>
          {CATEGORIES.map((cat) => (
            <TouchableOpacity 
              key={cat.id} 
              style={styles.card}
              onPress={() => navigation.navigate('LogActivityFormEntry', { category: cat.id })}
            >
              <View style={[styles.iconWrapper, { backgroundColor: cat.bg }]}>
                <Icon name={cat.icon} size={32} color={cat.color} />
              </View>
              <Text style={styles.cardText}>{cat.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Progress Card */}
        <View style={styles.progressCard}>
          <View style={styles.progressTextCol}>
            <Text style={styles.progressTitle}>Level 12 Impact Maker</Text>
            <Text style={styles.progressSubtitle}>You're only 250 XP away from Level 13.</Text>
          </View>
          <View style={styles.progressRingWrapper}>
            <Icon name="donut-large" size={80} color="#10b981" />
            <View style={styles.progressRingInner}>
              <Text style={styles.progressRingText}>75%</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* FAB */}
      <TouchableOpacity 
        style={styles.fab}
        onPress={() => navigation.navigate('LogActivityFormEntry')}
      >
        <Icon name="add" size={32} color="#ffffff" />
      </TouchableOpacity>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <View style={styles.navItem}>
          <Icon name="home" size={24} color="#3c4a42" />
          <Text style={styles.navText}>Home</Text>
        </View>
        <View style={styles.navItemActive}>
          <Icon name="eco" size={24} color="#00422b" />
          <Text style={styles.navTextActive}>Impact</Text>
        </View>
        <View style={styles.navItem}>
          <Icon name="military-tech" size={24} color="#3c4a42" />
          <Text style={styles.navText}>Arena</Text>
        </View>
        <View style={styles.navItem}>
          <Icon name="person" size={24} color="#3c4a42" />
          <Text style={styles.navText}>Profile</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  header: {
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    backgroundColor: 'rgba(248, 249, 250, 0.8)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(108, 122, 113, 0.1)',
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center' },
  avatarBorder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#10b981',
    overflow: 'hidden',
  },
  avatar: { width: '100%', height: '100%' },
  logoText: {
    fontSize: 24,
    fontWeight: '800',
    color: '#006c49',
    marginLeft: 12,
  },
  notifBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContent: { padding: 24, paddingBottom: 120 },
  titleSection: { marginBottom: 32 },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#191c1d',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#3c4a42',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  card: {
    width: (width - 48 - 16) / 2,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(229, 231, 235, 0.5)',
  },
  iconWrapper: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  cardText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#191c1d',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  progressCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 16,
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(16, 185, 129, 0.2)',
  },
  progressTextCol: { flex: 1, paddingRight: 16 },
  progressTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d', marginBottom: 8 },
  progressSubtitle: { fontSize: 16, color: '#3c4a42' },
  progressRingWrapper: { position: 'relative', width: 80, height: 80, alignItems: 'center', justifyContent: 'center' },
  progressRingInner: { position: 'absolute' },
  progressRingText: { fontSize: 20, fontWeight: '700', color: '#006c49' },
  fab: {
    position: 'absolute',
    bottom: 104,
    right: 24,
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#006c49',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#006c49',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: 'rgba(248, 249, 250, 0.9)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(108, 122, 113, 0.2)',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 20,
  },
  navItem: {
    alignItems: 'center',
    padding: 8,
  },
  navItemActive: {
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#10b981',
    borderRadius: 16,
    paddingHorizontal: 16,
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
