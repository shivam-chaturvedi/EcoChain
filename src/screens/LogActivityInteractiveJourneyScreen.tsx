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
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

export default function LogActivityInteractiveJourneyScreen({ navigation }: any) {
  const [modalVisible, setModalVisible] = useState(false);

  const categories = [
    { id: 'recycling', title: 'Recycling', icon: 'recycling' },
    { id: 'energy', title: 'Energy Saving', icon: 'bolt' },
    { id: 'water', title: 'Water Saving', icon: 'water-drop' },
    { id: 'travel', title: 'Sustainable Travel', icon: 'commute' },
    { id: 'waste', title: 'Reduced Waste', icon: 'delete-sweep' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.placeholderText}>Log Activity Journey (Base Screen)</Text>
      </View>

      {/* FAB */}
      {!modalVisible && (
        <TouchableOpacity
          style={styles.fab}
          onPress={() => setModalVisible(true)}
        >
          <LinearGradient
            colors={['#10b981', '#006c49']}
            style={styles.fabGradient}
          >
            <Icon name="add" size={28} color="#ffffff" />
          </LinearGradient>
        </TouchableOpacity>
      )}

      {/* Modal */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {/* Header */}
            <View style={styles.modalHeader}>
              <View>
                <Text style={styles.modalTitle}>Log an Activity</Text>
                <Text style={styles.modalSubtitle}>Choose what type of sustainable action you did</Text>
              </View>
              <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeBtn}>
                <Icon name="close" size={24} color="#3c4a42" />
              </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
              {/* Grid */}
              <View style={styles.grid}>
                {categories.map((cat) => (
                  <TouchableOpacity key={cat.id} style={styles.card}>
                    <LinearGradient colors={['#10b981', '#006c49']} style={styles.iconContainer}>
                      <Icon name={cat.icon} size={28} color="#ffffff" />
                    </LinearGradient>
                    <Text style={styles.cardText}>{cat.title}</Text>
                  </TouchableOpacity>
                ))}
                
                {/* Custom Action */}
                <TouchableOpacity style={[styles.card, styles.customCard]}>
                  <View style={styles.customIconContainer}>
                    <Icon name="add-circle-outline" size={28} color="#3c4a42" />
                  </View>
                  <Text style={styles.customCardText}>Custom Action</Text>
                </TouchableOpacity>
              </View>

              {/* Tip */}
              <View style={styles.tipCard}>
                <View style={styles.tipIconBox}>
                  <Icon name="auto-awesome" size={24} color="#006c49" />
                </View>
                <View style={styles.tipContent}>
                  <Text style={styles.tipTitle}>Did you know?</Text>
                  <Text style={styles.tipText}>Recycling just one aluminum can saves enough energy to run a TV for three hours. Every small action adds up.</Text>
                </View>
              </View>

              {/* Accent Image */}
              <View style={styles.imageBox}>
                <Image 
                  source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsCZoxQqIZjrM94seGUt2_gkFwpl4W7OULQ5HMdS22ZT_ygTAQrbMX1HUGDCXL8m0gtnq5cGyg16jVRUv8_Lcx4Hgyhh8yK3yqh9Czc1k2lis21hU_ihHEc5h_De4ht3YY7opPHB9Kj8va_qoGPUoUVGuKbkZGwIWno8F3nEO11_GlzDH9AYJ6Ys-CBhJzEDvPD6-5NV0cDoikgmpo9bE7bZsZLYv5pkBdhnWhEOwi3c1yJ4EU7ivSzs60lXWVulmeBvEEgmhJ49RQ'}}
                  style={styles.image}
                />
              </View>
            </ScrollView>

            <View style={styles.footer}>
              <TouchableOpacity style={styles.continueBtn}>
                <LinearGradient
                  colors={['#10b981', '#006c49']}
                  style={styles.continueGradient}
                >
                  <Text style={styles.continueText}>Continue to Log</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  placeholderText: { fontSize: 18, color: '#3c4a42' },
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
  },
  fabGradient: {
    flex: 1,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    height: '90%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 24,
    paddingBottom: 16,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#191c1d',
  },
  modalSubtitle: {
    fontSize: 16,
    color: '#3c4a42',
    marginTop: 4,
    maxWidth: 280,
  },
  closeBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(225, 227, 228, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContent: { padding: 24, paddingBottom: 40 },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: (width - 48 - 16) / 3, // 3 columns, 48 padding, 16 gap
    backgroundColor: '#f3f4f5',
    borderRadius: 16,
    padding: 12,
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(108, 122, 113, 0.3)',
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  cardText: {
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
    color: '#191c1d',
  },
  customCard: {
    backgroundColor: '#edeeef',
    borderWidth: 2,
    borderStyle: 'dashed',
  },
  customIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#e1e3e4',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  customCardText: {
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
    color: '#3c4a42',
  },
  tipCard: {
    marginTop: 24,
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    flexDirection: 'row',
  },
  tipIconBox: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  tipContent: { flex: 1 },
  tipTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#191c1d',
  },
  tipText: {
    fontSize: 14,
    color: '#3c4a42',
    marginTop: 4,
  },
  imageBox: {
    marginTop: 24,
    height: 128,
    borderRadius: 16,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    opacity: 0.8,
  },
  footer: {
    padding: 24,
    paddingBottom: 40,
  },
  continueBtn: {
    width: '100%',
    borderRadius: 24,
    overflow: 'hidden',
    shadowColor: '#006c49',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  continueGradient: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  continueText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
  },
});
