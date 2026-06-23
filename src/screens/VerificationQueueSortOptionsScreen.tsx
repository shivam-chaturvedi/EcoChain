import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function VerificationQueueSortOptionsScreen({ navigation }: any) {
  const [sortVisible, setSortVisible] = useState(true);
  const [activeSort, setActiveSort] = useState('newest');

  const sortOptions = [
    { id: 'newest', label: 'Newest first', icon: 'schedule' },
    { id: 'oldest', label: 'Oldest first', icon: 'history' },
    { id: 'category', label: 'Category', icon: 'category' },
    { id: 'class', label: 'Class', icon: 'school' },
    { id: 'alpha', label: 'Student Name A-Z', icon: 'sort-by-alpha' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} color="#006c49" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Verification Queue</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.bgContent}>
        <Text style={{textAlign: 'center', marginTop: 100, color: '#6c7a71'}}>Background Queue Items Here</Text>
      </ScrollView>

      {/* Sort Bottom Sheet Modal */}
      <Modal visible={sortVisible} transparent={true} animationType="slide">
        <View style={styles.modalOverlay}>
          <TouchableOpacity style={styles.modalBg} onPress={() => setSortVisible(false)} />
          <View style={styles.bottomSheet}>
            <View style={styles.sheetHandle} />
            <View style={styles.sheetHeader}>
              <Text style={styles.sheetTitle}>Sort By</Text>
              <TouchableOpacity onPress={() => setSortVisible(false)} style={styles.closeBtn}>
                <Icon name="close" size={24} color="#3c4a42" />
              </TouchableOpacity>
            </View>

            <View style={styles.sheetContent}>
              <View style={styles.sortList}>
                {sortOptions.map(opt => (
                  <TouchableOpacity 
                    key={opt.id} 
                    style={[styles.sortItem, activeSort === opt.id && styles.sortItemActive]}
                    onPress={() => setActiveSort(opt.id)}
                  >
                    <View style={styles.sortItemLeft}>
                      <Icon name={opt.icon} size={24} color={activeSort === opt.id ? '#00422b' : '#6c7a71'} />
                      <Text style={[styles.sortItemText, activeSort === opt.id && styles.sortItemTextActive]}>{opt.label}</Text>
                    </View>
                    {activeSort === opt.id && <Icon name="check" size={24} color="#00422b" style={{fontWeight: 'bold'}} />}
                  </TouchableOpacity>
                ))}
              </View>

              <TouchableOpacity style={styles.applyBtn} onPress={() => setSortVisible(false)}>
                <Text style={styles.applyBtnText}>Apply Sorting</Text>
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
  header: { height: 64, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 24, backgroundColor: 'rgba(248,249,250,0.8)' },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  backBtn: { padding: 8, marginLeft: -8 },
  headerTitle: { fontSize: 24, fontWeight: '800', color: '#006c49' },
  bgContent: { flex: 1 },
  modalOverlay: { flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(25,28,29,0.4)' },
  modalBg: { ...StyleSheet.absoluteFill as any },
  bottomSheet: { backgroundColor: 'rgba(255, 255, 255, 0.9)', borderTopLeftRadius: 16, borderTopRightRadius: 16, borderWidth: 1, borderColor: 'rgba(255,255,255,0.3)' },
  sheetHandle: { width: 48, height: 6, backgroundColor: 'rgba(187,202,191,0.5)', borderRadius: 3, alignSelf: 'center', marginTop: 12, marginBottom: 12 },
  sheetHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, paddingBottom: 16 },
  sheetTitle: { fontSize: 24, fontWeight: '700', color: '#191c1d' },
  closeBtn: { padding: 8, borderRadius: 20, backgroundColor: '#e7e8e9' },
  sheetContent: { paddingHorizontal: 24, paddingBottom: 40 },
  sortList: { gap: 12, marginBottom: 40 },
  sortItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16, borderRadius: 8, backgroundColor: '#f3f4f5' },
  sortItemActive: { backgroundColor: '#10b981' },
  sortItemLeft: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  sortItemText: { fontSize: 18, color: '#191c1d' },
  sortItemTextActive: { fontWeight: '600', color: '#00422b' },
  applyBtn: { backgroundColor: '#006c49', paddingVertical: 16, borderRadius: 32, alignItems: 'center', justifyContent: 'center' },
  applyBtnText: { fontSize: 18, fontWeight: '600', color: '#fff' },
});
