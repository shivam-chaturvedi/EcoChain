import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

export default function LogActivityFormEntryScreen({ navigation }: any) {
  const [selectedDate, setSelectedDate] = useState('Today');

  const dates = ['Today', 'Yesterday', 'Other'];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Icon name="arrow-back" size={24} color="#006c49" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Activity Form</Text>
        </View>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Activity Title */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>WHAT ACTIVITY DID YOU DO?</Text>
          <View style={styles.glassCard}>
            <TextInput
              style={styles.input}
              placeholder="e.g., Recycled plastic bottles"
              placeholderTextColor="#6c7a71"
            />
          </View>
        </View>

        <View style={styles.row}>
          {/* Quantity */}
          <View style={[styles.section, { flex: 1, marginRight: 8 }]}>
            <Text style={styles.sectionTitle}>HOW MUCH DID YOU DO?</Text>
            <View style={[styles.glassCard, styles.quantityCard]}>
              <View style={styles.quantityInputRow}>
                <TextInput
                  style={styles.numberInput}
                  placeholder="0"
                  placeholderTextColor="#6c7a71"
                  keyboardType="numeric"
                />
                <TextInput
                  style={styles.unitInput}
                  placeholder="Unit"
                  placeholderTextColor="#6c7a71"
                />
              </View>
              <Text style={styles.helpText}>Use any unit you want (e.g. kg, items, bags)</Text>
            </View>
          </View>

          {/* Duration */}
          <View style={[styles.section, { flex: 1, marginLeft: 8 }]}>
            <Text style={styles.sectionTitle}>DURATION (OPTIONAL)</Text>
            <View style={[styles.glassCard, styles.durationCard]}>
              <Icon name="schedule" size={24} color="#006b5f" style={styles.durationIcon} />
              <TextInput
                style={styles.input}
                placeholder="e.g. 15 mins"
                placeholderTextColor="#6c7a71"
              />
            </View>
          </View>
        </View>

        {/* Date Selector */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>WHEN DID THIS HAPPEN?</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.dateScroll}>
            {dates.map((date) => (
              <TouchableOpacity
                key={date}
                style={[
                  styles.datePill,
                  selectedDate === date && styles.datePillActive,
                ]}
                onPress={() => setSelectedDate(date)}
              >
                {date === 'Other' && <Icon name="calendar-today" size={16} color={selectedDate === date ? '#00422b' : '#3c4a42'} style={styles.otherIcon} />}
                <Text style={[
                  styles.dateText,
                  selectedDate === date && styles.dateTextActive,
                ]}>
                  {date}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Photos */}
        <View style={styles.section}>
          <View style={styles.photoHeader}>
            <Text style={styles.sectionTitle}>PROOF OF IMPACT (PHOTOS)</Text>
            <View style={styles.xpBonus}>
              <Text style={styles.xpBonusText}>+50 XP bonus</Text>
            </View>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.photoScroll}>
            <TouchableOpacity style={styles.addPhotoBtn}>
              <View style={styles.addPhotoIconContainer}>
                <Icon name="add-a-photo" size={24} color="#006c49" />
              </View>
              <Text style={styles.addPhotoText}>ADD PHOTO</Text>
            </TouchableOpacity>
            
            <View style={styles.photoPreview}>
              <Image 
                source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXWZZnk5fzt7hQBrvjQPJBVx5wCsl0KCGz5rEeDIPJA60SV1I9sRZaGsOMmRiEyS2EP2a8xW98XMKKUxuqIeN2wDiEe20PBh49FTWk-eMlf-Bok3csrV0wlD5ebSiELau-DSMqJVOGnxvJO9QyN_7D_BlBVReNjq3vt-6AKre4bckMklT8UcwKOuEZRvJ8WGYKSFIXl7cgTmuyhHvFLjAK6vYh3AmhpcgF89loS6XMa4jpAkGUubkQoHEy0-iXXXZC8vOLBKjoOaww'}}
                style={styles.previewImage}
              />
              <TouchableOpacity style={styles.removePhotoBtn}>
                <Icon name="close" size={16} color="#ffffff" />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>

        {/* Description */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>TELL US MORE ABOUT IT</Text>
          <View style={styles.glassCard}>
            <TextInput
              style={styles.textArea}
              placeholder="How did you feel? Any tips for others?"
              placeholderTextColor="#6c7a71"
              multiline
              numberOfLines={4}
              textAlignVertical="top"
            />
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.submitBtn}>
          <LinearGradient
            colors={['#10b981', '#006c49']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.submitGradient}
          >
            <Icon name="check-circle" size={24} color="#ffffff" />
            <Text style={styles.submitText}>Submit Activity</Text>
          </LinearGradient>
        </TouchableOpacity>
        <Text style={styles.footerNote}>
          Your activity will be reviewed by the community arena and contributes to your school's impact score.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    backgroundColor: 'rgba(248, 249, 250, 0.8)',
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center' },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#006c49',
    marginLeft: 8,
  },
  scrollContent: { padding: 24, paddingBottom: 100 },
  section: { marginBottom: 24 },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#3c4a42',
    letterSpacing: 0.6,
    marginBottom: 8,
    paddingHorizontal: 4,
  },
  glassCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: 'rgba(229, 231, 235, 0.5)',
  },
  input: {
    fontSize: 18,
    color: '#191c1d',
    padding: 0,
    fontWeight: '500',
  },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  quantityCard: { padding: 24 },
  quantityInputRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 8,
  },
  numberInput: {
    width: 80,
    backgroundColor: '#f3f4f5',
    borderRadius: 8,
    padding: 8,
    fontSize: 28,
    fontWeight: '700',
    color: '#191c1d',
    textAlign: 'center',
  },
  unitInput: {
    flex: 1,
    marginLeft: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#bbcabf',
    fontSize: 16,
    fontWeight: '600',
    textTransform: 'uppercase',
    paddingBottom: 4,
    color: '#191c1d',
  },
  helpText: {
    fontSize: 10,
    color: '#6c7a71',
    fontStyle: 'italic',
  },
  durationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 88,
  },
  durationIcon: { marginRight: 12 },
  dateScroll: { paddingBottom: 4 },
  datePill: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    marginRight: 12,
    borderWidth: 1,
    borderColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
  },
  datePillActive: {
    backgroundColor: '#10b981',
    borderColor: '#006c49',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  dateText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3c4a42',
  },
  dateTextActive: { color: '#00422b' },
  otherIcon: { marginRight: 4 },
  photoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    paddingHorizontal: 4,
  },
  xpBonus: {
    backgroundColor: 'rgba(16, 185, 129, 0.2)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  xpBonusText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#006c49',
  },
  photoScroll: { paddingBottom: 4 },
  addPhotoBtn: {
    width: 128,
    height: 128,
    borderRadius: 16,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#bbcabf',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  addPhotoIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  addPhotoText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#6c7a71',
    textTransform: 'uppercase',
  },
  photoPreview: {
    width: 128,
    height: 128,
    borderRadius: 16,
    overflow: 'hidden',
  },
  previewImage: {
    width: '100%',
    height: '100%',
  },
  removePhotoBtn: {
    position: 'absolute',
    top: 4,
    right: 4,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(186, 26, 26, 0.9)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textArea: {
    fontSize: 16,
    color: '#191c1d',
    padding: 8,
    height: 100,
  },
  footer: {
    padding: 24,
    paddingBottom: 40,
    backgroundColor: '#f8f9fa',
  },
  submitBtn: {
    width: '100%',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#006c49',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  submitGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
  },
  submitText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 8,
  },
  footerNote: {
    textAlign: 'center',
    fontSize: 11,
    color: '#6c7a71',
    marginTop: 12,
    paddingHorizontal: 24,
  },
});
