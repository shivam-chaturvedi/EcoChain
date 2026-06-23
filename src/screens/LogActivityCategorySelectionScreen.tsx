import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

const LogActivityCategorySelectionScreen = ({ navigation }: any) => {
  const categories = [
    { id: 1, icon: 'recycling', label: 'Recycling' },
    { id: 2, icon: 'energy-savings-leaf', label: 'Energy Saving' },
    { id: 3, icon: 'water-drop', label: 'Water Saving' },
    { id: 4, icon: 'commute', label: 'Sustainable Travel' },
    { id: 5, icon: 'delete-sweep', label: 'Reduced Waste' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.modalContainer}>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Log an Activity</Text>
            <Text style={styles.subtitle}>Choose what type of sustainable action you did</Text>
          </View>
          <TouchableOpacity style={styles.closeBtn} onPress={() => navigation.goBack()}>
            <Icon name="close" size={24} color="#3c4a42" />
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.grid}>
            {categories.map((cat) => (
              <TouchableOpacity key={cat.id} style={styles.card}>
                <LinearGradient colors={['#10b981', '#006c49']} style={styles.iconCircle}>
                  <Icon name={cat.icon} size={28} color="#fff" />
                </LinearGradient>
                <Text style={styles.cardLabel}>{cat.label}</Text>
              </TouchableOpacity>
            ))}
            
            <TouchableOpacity style={[styles.card, styles.customCard]}>
              <View style={styles.customIconCircle}>
                <Icon name="add-circle-outline" size={28} color="#3c4a42" />
              </View>
              <Text style={styles.customCardLabel}>Custom Action</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.tipCard}>
            <View style={styles.tipIconContainer}>
              <Icon name="auto-awesome" size={24} color="#006c49" />
            </View>
            <View style={styles.tipContent}>
              <Text style={styles.tipTitle}>Did you know?</Text>
              <Text style={styles.tipText}>
                Recycling just one aluminum can saves enough energy to run a TV for three hours. Every small action adds up to a massive global impact.
              </Text>
            </View>
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=800' }}
              style={styles.image}
            />
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.continueBtn}>
            <LinearGradient colors={['#10b981', '#006c49']} style={styles.continueGradient}>
              <Text style={styles.continueText}>Continue to Log</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' },
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 60,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 24,
    paddingTop: 32,
  },
  title: { fontSize: 24, fontWeight: '700', color: '#191c1d' },
  subtitle: { fontSize: 16, color: '#3c4a42', marginTop: 4, maxWidth: '80%' },
  closeBtn: { padding: 8, backgroundColor: '#f3f4f5', borderRadius: 20 },
  scrollContent: { padding: 24 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: -6 },
  card: {
    width: '33.33%',
    padding: 6,
    alignItems: 'center',
  },
  iconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    shadowColor: '#10b981',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  cardLabel: { fontSize: 12, fontWeight: '700', color: '#191c1d', textAlign: 'center', textTransform: 'uppercase' },
  customCard: {
    backgroundColor: 'transparent',
  },
  customIconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    backgroundColor: '#f3f4f5',
    borderWidth: 1,
    borderColor: '#e1e3e4',
    borderStyle: 'dashed',
  },
  customCardLabel: { fontSize: 12, fontWeight: '700', color: '#3c4a42', textAlign: 'center', textTransform: 'uppercase' },
  tipCard: {
    flexDirection: 'row',
    backgroundColor: '#f8f9fa',
    padding: 16,
    borderRadius: 16,
    marginTop: 32,
    borderWidth: 1,
    borderColor: '#e1e3e4',
  },
  tipIconContainer: { width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(16, 185, 129, 0.1)', alignItems: 'center', justifyContent: 'center', marginRight: 16 },
  tipContent: { flex: 1 },
  tipTitle: { fontSize: 16, fontWeight: '700', color: '#191c1d', marginBottom: 4 },
  tipText: { fontSize: 14, color: '#3c4a42', lineHeight: 20 },
  imageContainer: { marginTop: 24, borderRadius: 16, overflow: 'hidden', height: 120 },
  image: { width: '100%', height: '100%' },
  footer: { padding: 24, paddingBottom: 40, backgroundColor: '#fff' },
  continueBtn: { borderRadius: 32, overflow: 'hidden', shadowColor: '#10b981', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8, elevation: 4 },
  continueGradient: { paddingVertical: 16, alignItems: 'center' },
  continueText: { color: '#fff', fontSize: 18, fontWeight: '700' },
});

export default LogActivityCategorySelectionScreen;
