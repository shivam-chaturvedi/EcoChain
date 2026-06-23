import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const categories = [
  { id: 'recycling', label: 'Recycling', icon: 'recycling' },
  { id: 'water', label: 'Water Saving', icon: 'water-drop' },
  { id: 'energy', label: 'Energy Saving', icon: 'bolt' },
  { id: 'travel', label: 'Travel', icon: 'directions-bus' },
  { id: 'waste', label: 'Waste Reduction', icon: 'delete-sweep' },
];

const activities = [
  {
    id: 1,
    title: 'Recycle Paper at School',
    desc: 'Collect used worksheets and handouts from your classroom and place them in the blue bins.',
    xp: '80 XP',
    time: '~15 mins',
    location: 'On Campus',
    icon: 'recycling',
    color: '#006c49',
    bgColor: 'rgba(0, 108, 73, 0.1)',
  },
  {
    id: 2,
    title: 'Fix a Leaky Faucet',
    desc: 'Identify and report or help fix dripping taps in the student washrooms to save hundreds of liters.',
    xp: '120 XP',
    time: '~30 mins',
    location: 'Low Effort',
    icon: 'water-drop',
    color: '#006b5f',
    bgColor: 'rgba(0, 107, 95, 0.1)',
  },
  {
    id: 3,
    title: 'Home Light Audit',
    desc: 'Switch off unused lights and identify incandescent bulbs that could be replaced with LEDs at home.',
    xp: '50 XP',
    time: '~20 mins',
    location: 'At Home',
    icon: 'bolt',
    color: '#005ac2',
    bgColor: 'rgba(0, 90, 194, 0.1)',
  },
  {
    id: 4,
    title: 'Sustainable Commute',
    desc: 'Log your walk, cycle, or bus trip to school instead of a private car commute for one full week.',
    xp: '200 XP',
    time: '~5 days',
    location: 'Med Effort',
    icon: 'directions-bus',
    color: '#ea580c',
    bgColor: 'rgba(234, 88, 12, 0.1)',
  },
  {
    id: 5,
    title: 'Waste Sorting Guide',
    desc: 'Create and post visual guides for the cafeteria bins to help others sort waste correctly.',
    xp: '150 XP',
    time: '~45 mins',
    location: 'Creative',
    icon: 'delete-sweep',
    color: '#dc2626',
    bgColor: 'rgba(220, 38, 38, 0.1)',
  },
  {
    id: 6,
    title: 'Plant a Tree',
    desc: 'Join the school garden committee for a weekend planting event to offset school carbon.',
    xp: '300 XP',
    time: '~3 hours',
    location: 'Collaborative',
    icon: 'eco',
    color: '#047857',
    bgColor: 'rgba(4, 120, 87, 0.1)',
  },
];

export default function ActivityDirectoryScreen({ navigation }: any) {
  const [activeCategory, setActiveCategory] = useState('recycling');
  const [difficulty, setDifficulty] = useState(2); // 1: Easy, 2: Balanced, 3: Hard

  const getDifficultyLabel = () => {
    if (difficulty === 1) return 'Easy';
    if (difficulty === 2) return 'Balanced';
    return 'Hard';
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.avatarContainer}>
            <Image
              source={{
                uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMqskb54L5IDMWmuyfHRMCVp0tLBN6_EmYUCmIkJ-_39xs6v9KV5nLyatA-7cH0lgootnYvCiRavKjWFbiusTYANj_dd-GiL3TseasVUletlunm-NrYiCTZmVfk3wCQQE7uRJRwSVMc7PBcvrrKmKQLtEIQEAyrhdoTilhUA6Gyoy_MWly0gvp4tsgGbyWNyFG9NehbBtPROqSPUDxWJtc0bdYHc_hUVjdLDKCmGdXn4C5l2oZA8y_Yrw4EYuIW__38DbOmiMAPrpk',
              }}
              style={styles.avatarImage}
            />
          </View>
          <Text style={styles.logoText}>ChonX</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconBtn}>
            <Icon name="search" size={24} color="#3c4a42" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <Icon name="settings" size={24} color="#3c4a42" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.title}>Activity Directory</Text>
          <Text style={styles.subtitle}>
            Find impactful ways to contribute to your school's eco-goals. Filter by category, difficulty, or tags to start your journey.
          </Text>
        </View>

        {/* Filters Section */}
        <View style={styles.filtersContainer}>
          <View style={styles.searchCard}>
            <Icon name="search" size={24} color="#6c7a71" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search activities (e.g. Composting, Lighting...)"
              placeholderTextColor="#6c7a71"
            />
          </View>

          <View style={styles.categoriesCard}>
            <Text style={styles.filterTitle}>CATEGORIES</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesScroll}>
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <TouchableOpacity
                    key={cat.id}
                    style={[styles.categoryChip, isActive && styles.categoryChipActive]}
                    onPress={() => setActiveCategory(cat.id)}
                  >
                    <Icon name={cat.icon} size={18} color={isActive ? '#ffffff' : '#3c4a42'} />
                    <Text style={[styles.categoryText, isActive && styles.categoryTextActive]}>
                      {cat.label}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>

          <View style={styles.difficultyCard}>
            <View style={styles.difficultyHeader}>
              <Text style={styles.filterTitle}>DIFFICULTY</Text>
              <Text style={styles.difficultyVal}>{getDifficultyLabel()}</Text>
            </View>
            <View style={styles.sliderTrack}>
              <View style={[styles.sliderFill, { width: `${((difficulty - 1) / 2) * 100}%` }]} />
              <TouchableOpacity
                style={[styles.sliderThumb, { left: `${((difficulty - 1) / 2) * 100}%` }]}
                onPress={() => setDifficulty((prev) => (prev < 3 ? prev + 1 : 1))}
              />
            </View>
            <View style={styles.sliderLabels}>
              <Text style={styles.sliderLabelText}>EASY</Text>
              <Text style={styles.sliderLabelText}>BALANCED</Text>
              <Text style={styles.sliderLabelText}>HARD</Text>
            </View>
          </View>

          <View style={styles.tagsCard}>
            <Text style={styles.filterTitle}>TAGS</Text>
            <View style={styles.tagsContainer}>
              {['At Home', 'On Campus', 'Low Effort'].map((tag, idx) => (
                <TouchableOpacity key={idx} style={styles.tagChip}>
                  <Icon name={idx !== 1 ? 'check-box' : 'check-box-outline-blank'} size={18} color="#006c49" />
                  <Text style={styles.tagText}>{tag}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        {/* Activity Cards */}
        <View style={styles.gridContainer}>
          {activities.map((activity) => (
            <TouchableOpacity key={activity.id} style={styles.activityCard} activeOpacity={0.9}>
              <View style={styles.cardHeader}>
                <View style={[styles.cardIconCircle, { backgroundColor: activity.bgColor }]}>
                  <Icon name={activity.icon} size={28} color={activity.color} />
                </View>
                <View style={styles.xpBadge}>
                  <Text style={styles.xpText}>{activity.xp}</Text>
                </View>
              </View>
              
              <Text style={styles.cardTitle}>{activity.title}</Text>
              <Text style={styles.cardDesc} numberOfLines={3}>
                {activity.desc}
              </Text>
              
              <View style={styles.cardMeta}>
                <View style={styles.metaItem}>
                  <Icon name="schedule" size={18} color="#6c7a71" />
                  <Text style={styles.metaText}>{activity.time}</Text>
                </View>
                <View style={styles.metaItem}>
                  <Icon name="location-on" size={18} color="#6c7a71" />
                  <Text style={styles.metaText}>{activity.location}</Text>
                </View>
              </View>
              
              <View style={styles.cardActions}>
                <TouchableOpacity style={styles.btnSecondary}>
                  <Text style={styles.btnSecondaryText}>View Details</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnPrimary}>
                  <Text style={styles.btnPrimaryText}>Assign</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* FAB */}
      <TouchableOpacity style={styles.fab}>
        <Icon name="add" size={28} color="#ffffff" />
      </TouchableOpacity>
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
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#10b981',
    overflow: 'hidden',
    marginRight: 12,
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  logoText: {
    fontSize: 24,
    fontWeight: '800',
    color: '#006c49',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBtn: {
    padding: 8,
    marginLeft: 8,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 100,
  },
  titleSection: {
    marginBottom: 32,
  },
  title: {
    fontSize: 48,
    fontWeight: '800',
    color: '#191c1d',
    marginBottom: 8,
    letterSpacing: -1,
  },
  subtitle: {
    fontSize: 18,
    color: '#3c4a42',
    lineHeight: 26,
  },
  filtersContainer: {
    marginBottom: 32,
  },
  searchCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(229, 231, 235, 0.5)',
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#191c1d',
    backgroundColor: '#f3f4f5',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  categoriesCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(229, 231, 235, 0.5)',
    marginBottom: 16,
  },
  filterTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#6c7a71',
    letterSpacing: 1,
    marginBottom: 16,
  },
  categoriesScroll: {
    flexDirection: 'row',
  },
  categoryChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e7e8e9',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 24,
    marginRight: 12,
  },
  categoryChipActive: {
    backgroundColor: '#006c49',
  },
  categoryText: {
    fontSize: 16,
    color: '#3c4a42',
    marginLeft: 8,
  },
  categoryTextActive: {
    color: '#ffffff',
  },
  difficultyCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(229, 231, 235, 0.5)',
    marginBottom: 16,
  },
  difficultyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  difficultyVal: {
    fontSize: 16,
    fontWeight: '700',
    color: '#006c49',
  },
  sliderTrack: {
    height: 8,
    backgroundColor: '#e1e3e4',
    borderRadius: 4,
    position: 'relative',
    justifyContent: 'center',
    marginBottom: 12,
  },
  sliderFill: {
    position: 'absolute',
    left: 0,
    height: '100%',
    backgroundColor: '#006c49',
    borderRadius: 4,
  },
  sliderThumb: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#006c49',
    borderWidth: 4,
    borderColor: 'rgba(16, 185, 129, 0.2)',
    transform: [{ translateX: -10 }],
  },
  sliderLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sliderLabelText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#6c7a71',
    letterSpacing: 1,
  },
  tagsCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(229, 231, 235, 0.5)',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tagChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#edeeef',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(187, 202, 191, 0.3)',
  },
  tagText: {
    fontSize: 16,
    color: '#191c1d',
    marginLeft: 8,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  activityCard: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(229, 231, 235, 0.5)',
    marginBottom: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  cardIconCircle: {
    width: 48,
    height: 48,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  xpBadge: {
    backgroundColor: 'rgba(0, 111, 100, 0.9)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  xpText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#ffffff',
    letterSpacing: 1,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#191c1d',
    marginBottom: 8,
  },
  cardDesc: {
    fontSize: 16,
    color: '#3c4a42',
    lineHeight: 24,
    marginBottom: 16,
  },
  cardMeta: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaText: {
    fontSize: 16,
    color: '#6c7a71',
    marginLeft: 6,
  },
  cardActions: {
    flexDirection: 'row',
    gap: 8,
    borderTopWidth: 1,
    borderTopColor: 'rgba(225, 227, 228, 0.5)',
    paddingTop: 16,
  },
  btnSecondary: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(187, 202, 191, 0.4)',
    alignItems: 'center',
  },
  btnSecondaryText: {
    fontSize: 16,
    color: '#3c4a42',
  },
  btnPrimary: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: '#006c49',
    alignItems: 'center',
  },
  btnPrimaryText: {
    fontSize: 16,
    color: '#ffffff',
  },
  fab: {
    position: 'absolute',
    right: 24,
    bottom: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#006c49',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
});
