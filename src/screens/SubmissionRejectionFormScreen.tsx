import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Modal,
  TextInput,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function SubmissionRejectionFormScreen({ navigation }: any) {
  const [modalVisible, setModalVisible] = useState(true); // Default to true to show the modal state as requested
  const [selectedReason, setSelectedReason] = useState<string | null>(null);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.avatarWrapperSmall}>
            <Image 
              source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFWMtJ0oV0SFv9NT3plVcQvPjftu7XhISA9M1DGmgz4FwHHaMYKJrm2hfuKQhtL2wrdh6vniVdjfj1_US53083Ty7TIEAvq-mBCq06mBuFxCUqK5VCHCikJkKg9W_EhRoLsnW13xf3FkYStyVMB48ACxh4eOzPzBx6WFwzPhyIDyavnTk6N97Sx6N-zgNJUjDTYL2Og3-eG3ldj37JaCTfpELSJOUxQ8f2iWmVg9lqiLytOPE3CAAy5i0RST_O63nV7EsaY1jzq1_W'}}
              style={styles.avatarImage}
            />
          </View>
          <Text style={styles.logoText}>ChonX</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconBtn}>
            <Icon name="notifications" size={24} color="#006c49" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.pageHeader}>
          <Text style={styles.preTitle}>VERIFICATION QUEUE</Text>
          <Text style={styles.pageTitle}>Pending Submissions</Text>
        </View>

        <View style={styles.grid}>
          {/* Card 1 */}
          <View style={[styles.card, { opacity: modalVisible ? 0.4 : 1 }]}>
            <View style={styles.cardImageWrapper}>
              <Image source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGxGszUY8Bqe380f57pRhgs6nhn_QK6lWCjJ75M6Y_MnKGwHlki6e0uaAmqHGnVCx0CXtUgly6ScoqTE5tJTa2UfBspfrqtaA8dBcIAKNvUBmEgwXUDS-FZtNijEUjm9i7q5Kv9wkpfoog4wvuLKsxCO4-KhEaALOSz7EoAsA4MdACBmaTKyBC95ywNJYJ1vmMTSjcrchUjBvJMidTb1TiIorLK_B6IxOW4-NlRHn_ArtUFrcV75ZlM9yn96jrWm0SguK4sjR2CZAV'}} style={styles.cardImage} />
            </View>
            <View style={styles.cardHeader}>
              <View>
                <Text style={styles.cardTitle}>Recycling Activity</Text>
                <Text style={styles.cardSub}>Submitted by Alex Rivera</Text>
              </View>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>Plastic</Text>
              </View>
            </View>
            <View style={styles.cardActions}>
              <TouchableOpacity style={styles.approveBtn}>
                <Text style={styles.approveBtnText}>Approve</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.rejectBtn} onPress={() => setModalVisible(true)}>
                <Text style={styles.rejectBtnText}>Reject</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Card 2 */}
          <View style={[styles.card, { opacity: modalVisible ? 0.4 : 1 }]}>
            <View style={styles.cardImageWrapper}>
              <Image source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwPsHNEc6xwQ5a0jiv8BNKnqN3opPvMblxZh9vgx-nUqbTJA74iu74qhiFYNc7SCwILkl6F-LanklVeJH2sUaSB-7dGNqxg00e1LmWC2g8Oq4b-1vQpdbM6R_LVUs7A5RG1tUjGrklKZoopigznjdykwspPtapNb_XoXwTvvLSa-ciz5xPLqFlWY_ZDBSthD4fcQARlD_pEFgv7UjW2H0FQ_Zxkomf7nLnQGBv3MNk1FpXBwDGr_d96PMav-W4rv13WZD7M3I75mvu'}} style={styles.cardImage} />
            </View>
            <View style={styles.cardHeader}>
              <View>
                <Text style={styles.cardTitle}>Tree Planting</Text>
                <Text style={styles.cardSub}>Submitted by Maya Chen</Text>
              </View>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>Garden</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Rejection Modal */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <View>
                <Text style={styles.modalTitle}>Reject Submission</Text>
                <Text style={styles.modalSubtitle}>Please select a reason for rejection.</Text>
              </View>
              <TouchableOpacity style={styles.closeBtn} onPress={() => setModalVisible(false)}>
                <Icon name="close" size={24} color="#3c4a42" />
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.modalBody}>
              <Text style={styles.sectionLabel}>PREDEFINED REASONS</Text>
              <View style={styles.reasonsList}>
                {[
                  { id: 'low_quality', title: 'Low Quality Photo', desc: 'Image is too blurry or dark to verify.' },
                  { id: 'wrong_category', title: 'Incorrect Category', desc: 'Item does not match the chosen category.' },
                  { id: 'insufficient', title: 'Insufficient Evidence', desc: 'More context or photos are needed.' },
                  { id: 'duplicate', title: 'Duplicate Entry', desc: 'This evidence has already been submitted.' },
                ].map((reason) => (
                  <TouchableOpacity 
                    key={reason.id} 
                    style={[styles.reasonItem, selectedReason === reason.id && styles.reasonItemActive]}
                    onPress={() => setSelectedReason(reason.id)}
                  >
                    <View style={[styles.checkbox, selectedReason === reason.id && styles.checkboxChecked]}>
                      {selectedReason === reason.id && <Icon name="check" size={14} color="#fff" />}
                    </View>
                    <View>
                      <Text style={styles.reasonTitle}>{reason.title}</Text>
                      <Text style={styles.reasonDesc}>{reason.desc}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>

              <Text style={[styles.sectionLabel, { marginTop: 24 }]}>ADDITIONAL FEEDBACK</Text>
              <TextInput 
                style={styles.feedbackInput}
                placeholder="Provide detailed instructions for the student..."
                placeholderTextColor="#6c7a71"
                multiline
                numberOfLines={4}
                textAlignVertical="top"
              />
            </ScrollView>

            <View style={styles.modalFooter}>
              <TouchableOpacity style={styles.cancelBtn} onPress={() => setModalVisible(false)}>
                <Text style={styles.cancelBtnText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.submitBtn}>
                <Text style={styles.submitBtnText}>Submit Rejection</Text>
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
  header: { height: 64, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 24, backgroundColor: 'rgba(248, 249, 250, 0.8)', borderBottomWidth: 1, borderBottomColor: 'rgba(187, 202, 191, 0.3)' },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  avatarWrapperSmall: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#10b981', overflow: 'hidden' },
  avatarImage: { width: '100%', height: '100%', resizeMode: 'cover' },
  logoText: { fontSize: 24, fontWeight: '800', color: '#006c49', letterSpacing: -0.5 },
  headerRight: { flexDirection: 'row', alignItems: 'center' },
  iconBtn: { padding: 8, borderRadius: 20 },
  scrollContent: { padding: 24, paddingBottom: 100 },
  pageHeader: { marginBottom: 40 },
  preTitle: { fontSize: 12, fontWeight: '700', color: '#006b5f', marginBottom: 4 },
  pageTitle: { fontSize: 32, fontWeight: '700', color: '#191c1d' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 24 },
  card: { flex: 1, minWidth: 300, backgroundColor: '#fff', borderRadius: 16, padding: 24, borderWidth: 1, borderColor: 'rgba(187,202,191,0.3)', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 4 },
  cardImageWrapper: { aspectRatio: 1, borderRadius: 16, overflow: 'hidden', backgroundColor: '#edeeef', marginBottom: 24 },
  cardImage: { width: '100%', height: '100%', resizeMode: 'cover' },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 },
  cardTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d' },
  cardSub: { fontSize: 16, color: '#3c4a42' },
  badge: { backgroundColor: 'rgba(16,185,129,0.2)', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 16 },
  badgeText: { fontSize: 12, fontWeight: '700', color: '#00422b' },
  cardActions: { flexDirection: 'row', gap: 8 },
  approveBtn: { flex: 1, backgroundColor: '#6df5e1', paddingVertical: 12, borderRadius: 16, alignItems: 'center' },
  approveBtnText: { fontSize: 16, fontWeight: '700', color: '#006f64' },
  rejectBtn: { flex: 1, backgroundColor: '#ffdad6', paddingVertical: 12, borderRadius: 16, alignItems: 'center' },
  rejectBtnText: { fontSize: 16, fontWeight: '700', color: '#93000a' },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(25,28,29,0.4)', justifyContent: 'center', alignItems: 'center', padding: 24 },
  modalContent: { width: '100%', maxWidth: 500, backgroundColor: 'rgba(255,255,255,0.95)', borderRadius: 16, overflow: 'hidden', shadowColor: '#000', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.2, shadowRadius: 20 },
  modalHeader: { padding: 24, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: 'rgba(187,202,191,0.2)' },
  modalTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d' },
  modalSubtitle: { fontSize: 14, color: '#3c4a42' },
  closeBtn: { width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  modalBody: { padding: 24, maxHeight: 500 },
  sectionLabel: { fontSize: 12, fontWeight: '700', color: '#006b5f', marginBottom: 8 },
  reasonsList: { gap: 8 },
  reasonItem: { flexDirection: 'row', alignItems: 'center', gap: 16, padding: 12, borderRadius: 16, borderWidth: 1, borderColor: 'rgba(187,202,191,0.3)', backgroundColor: 'rgba(255,255,255,0.5)' },
  reasonItemActive: { backgroundColor: 'rgba(16,185,129,0.1)', borderColor: 'rgba(16,185,129,0.5)' },
  checkbox: { width: 20, height: 20, borderRadius: 4, borderWidth: 2, borderColor: '#6c7a71', alignItems: 'center', justifyContent: 'center' },
  checkboxChecked: { backgroundColor: '#006c49', borderColor: '#006c49' },
  reasonTitle: { fontSize: 16, fontWeight: '600', color: '#191c1d' },
  reasonDesc: { fontSize: 12, color: '#3c4a42' },
  feedbackInput: { backgroundColor: '#f3f4f5', borderRadius: 16, padding: 16, height: 120, borderWidth: 1, borderColor: 'rgba(187,202,191,0.3)', color: '#191c1d', fontSize: 16 },
  modalFooter: { padding: 24, flexDirection: 'row', gap: 12, backgroundColor: 'rgba(225,227,228,0.3)' },
  cancelBtn: { flex: 1, paddingVertical: 16, borderRadius: 16, alignItems: 'center' },
  cancelBtnText: { fontSize: 16, fontWeight: '700', color: '#3c4a42' },
  submitBtn: { flex: 1, backgroundColor: '#006c49', paddingVertical: 16, borderRadius: 16, alignItems: 'center', elevation: 4 },
  submitBtnText: { fontSize: 16, fontWeight: '700', color: '#fff' },
});
