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

export default function VerificationQueueFilterMenuScreen({ navigation }: any) {
  const [filterVisible, setFilterVisible] = useState(true);

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
        {/* Placeholder for background UI */}
        <Text style={{textAlign: 'center', marginTop: 100, color: '#6c7a71'}}>Background Queue Items Here</Text>
      </ScrollView>

      {/* Filter Bottom Sheet Modal */}
      <Modal visible={filterVisible} transparent={true} animationType="slide">
        <View style={styles.modalOverlay}>
          <TouchableOpacity style={styles.modalBg} onPress={() => setFilterVisible(false)} />
          <View style={styles.bottomSheet}>
            <View style={styles.sheetHandle} />
            <View style={styles.sheetHeader}>
              <Text style={styles.sheetTitle}>Filter Queue</Text>
              <TouchableOpacity onPress={() => setFilterVisible(false)} style={styles.closeBtn}>
                <Icon name="close" size={24} color="#3c4a42" />
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.sheetScroll}>
              {/* Classes */}
              <View style={styles.filterSection}>
                <Text style={styles.sectionTitle}>SELECT CLASSES</Text>
                <View style={styles.chipsWrap}>
                  <TouchableOpacity style={[styles.chip, styles.chipActive]}>
                    <Text style={[styles.chipText, styles.chipTextActive]}>Class 12-B</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.chip}>
                    <Text style={styles.chipText}>Class 10-A</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.chip}>
                    <Text style={styles.chipText}>Class 11-C</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.chip, styles.chipActive]}>
                    <Text style={[styles.chipText, styles.chipTextActive]}>Class 9-D</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.chip}>
                    <Text style={styles.chipText}>Science Club</Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Category */}
              <View style={styles.filterSection}>
                <Text style={styles.sectionTitle}>CATEGORY</Text>
                <View style={styles.grid2Col}>
                  <TouchableOpacity style={styles.catBox}>
                    <Icon name="recycling" size={24} color="#006b5f" />
                    <Text style={styles.catText}>Recycling</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.catBox, styles.catBoxActive]}>
                    <Icon name="bolt" size={24} color="#006c49" />
                    <Text style={[styles.catText, styles.catTextActive]}>Energy</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.catBox}>
                    <Icon name="water-drop" size={24} color="#006b5f" />
                    <Text style={styles.catText}>Water</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.catBox}>
                    <Icon name="eco" size={24} color="#006b5f" />
                    <Text style={styles.catText}>Biodiversity</Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Time Period */}
              <View style={styles.filterSection}>
                <Text style={styles.sectionTitle}>TIME PERIOD</Text>
                <View style={styles.radioGroup}>
                  <TouchableOpacity style={styles.radioItem}>
                    <Text style={styles.radioText}>Submitted Today</Text>
                    <Icon name="radio-button-unchecked" size={24} color="#6c7a71" />
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.radioItem, styles.radioItemActive]}>
                    <Text style={[styles.radioText, styles.radioTextActive]}>This Week</Text>
                    <Icon name="radio-button-checked" size={24} color="#006c49" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.radioItem}>
                    <Text style={styles.radioText}>This Month</Text>
                    <Icon name="radio-button-unchecked" size={24} color="#6c7a71" />
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>

            <View style={styles.sheetFooter}>
              <TouchableOpacity style={styles.clearBtn}>
                <Text style={styles.clearBtnText}>Clear All</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.applyBtn} onPress={() => setFilterVisible(false)}>
                <Text style={styles.applyBtnText}>Apply Filters</Text>
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
  modalBg: { ...StyleSheet.absoluteFillObject },
  bottomSheet: { backgroundColor: 'rgba(248, 249, 250, 0.95)', borderTopLeftRadius: 16, borderTopRightRadius: 16, maxHeight: '90%', borderWidth: 1, borderColor: 'rgba(187,202,191,0.2)' },
  sheetHandle: { width: 48, height: 6, backgroundColor: '#bbcabf', borderRadius: 3, alignSelf: 'center', marginTop: 12, marginBottom: 12 },
  sheetHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, paddingBottom: 16 },
  sheetTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d' },
  closeBtn: { padding: 8, borderRadius: 20, backgroundColor: '#f3f4f5' },
  sheetScroll: { paddingHorizontal: 24, paddingBottom: 24 },
  filterSection: { marginTop: 24 },
  sectionTitle: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 1, marginBottom: 12 },
  chipsWrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  chip: { paddingHorizontal: 16, paddingVertical: 10, borderRadius: 20, borderWidth: 1, borderColor: '#bbcabf' },
  chipActive: { backgroundColor: 'rgba(16,185,129,0.1)', borderColor: '#006c49' },
  chipText: { fontSize: 14, fontWeight: '500', color: '#3c4a42' },
  chipTextActive: { fontWeight: '700', color: '#006c49' },
  grid2Col: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  catBox: { flex: 1, minWidth: '45%', flexDirection: 'row', alignItems: 'center', padding: 16, borderRadius: 8, borderWidth: 1, borderColor: '#bbcabf', backgroundColor: '#f8f9fa' },
  catBoxActive: { borderColor: '#006c49', backgroundColor: 'rgba(16,185,129,0.05)' },
  catText: { fontSize: 16, fontWeight: '600', color: '#191c1d', marginLeft: 12 },
  catTextActive: { color: '#006c49' },
  radioGroup: { gap: 12 },
  radioItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16, borderRadius: 8, borderWidth: 1, borderColor: '#bbcabf' },
  radioItemActive: { borderColor: '#006c49', backgroundColor: 'rgba(16,185,129,0.05)' },
  radioText: { fontSize: 16, fontWeight: '600', color: '#191c1d' },
  radioTextActive: { color: '#006c49' },
  sheetFooter: { flexDirection: 'row', padding: 24, borderTopWidth: 1, borderTopColor: 'rgba(187,202,191,0.3)', backgroundColor: '#fff', gap: 16 },
  clearBtn: { flex: 1, paddingVertical: 16, alignItems: 'center', justifyContent: 'center', borderRadius: 8 },
  clearBtnText: { fontSize: 16, fontWeight: '600', color: '#3c4a42' },
  applyBtn: { flex: 2, paddingVertical: 16, alignItems: 'center', justifyContent: 'center', backgroundColor: '#006c49', borderRadius: 8 },
  applyBtnText: { fontSize: 16, fontWeight: '700', color: '#fff' },
});
