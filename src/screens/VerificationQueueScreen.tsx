import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TextInput,
  Image,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function VerificationQueueScreen({ navigation }: any) {
  const [modalVisible, setModalVisible] = useState(false);

  const submissions = [
    {
      id: 1,
      name: 'Liam Carter',
      category: 'Tree Planting',
      desc: 'Planted 3 native oak saplings in the community park. Used recycled compost for the base...',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA96ok8zmbM45ol4Qkldym8y8lHmcqorcLrI5lEPhOyMi3plmBgq4LWZGfqW7CgH5CHOu_tNsJ7V9CQEPNEXuWVc2V_lPzkxqDg1bmTqlXu_QIr9rd_isYxCFMp0tg5PteimRoaACjktPPzmwiMtK4v0BoK01-ZoduLSwoJQZo7R43VIAe_QrgnjlvYY5QnBsvhADHeSBCeOUiQmVsJvDk6yO_P-g3KMHnYvjwARD72U_MW_47u7z5aJ6vCYFveiHyL50-RSwqbKzIf',
      icon: 'eco'
    },
    {
      id: 2,
      name: 'Sophia Martinez',
      category: 'Waste Management',
      desc: 'Implemented a new 3-tier recycling system at home and recorded 5kg of diverted waste...',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-YC8fvl7vRuQVW3nE7M2RMBAtHGqjUI1MIbPMaaWT5BG37c95L-U3K35znF8fRPoBavoGDPvv93StcRAwEURwRPl9O9gSjDyjMAh4jn4YEIDGN-EMrVdm74NbWghlEud0tUyqjL6tV-ABm7_XV3l3Ak5yvzVqjxpLhEhcmIptGdZr9wzVjzzsuGrTTcAFmluk_MANBpdnSHFn_O_N8uMUcJYYT7VjOMOVB8ALhvUIM9bORCX4TgoJMQv38xtFwHzu6H9lYiBYqJo2',
      icon: 'delete-sweep'
    },
    {
      id: 3,
      name: 'Jordan Wei',
      category: 'Energy Saving',
      desc: 'Replaced all desk lamps with high-efficiency LED bulbs and installed a solar power bank...',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkhAdwPMgG0Eyb6TagHu8YfcYQIEYrKorpObICs5IMo2T2syUmyqsJy_wx7SIKJ5Ep6qlI_QzVmz_RQGW9vl5lx0B2QvI3SV_X2tibRMinKH06WrppEN5DJeEiUqD_AuB6XnnyknKOk3RpKQtrgVqwyfoRNhaXgLB-GgkEyuCfIhvrMUmUuGT-RIx4F8d935t9Gi_h--T_YvIdVNzDpLEiwzP_vgAoslr-fMulc7qYcyY2VELJtQ_ICT14bC2kO0JwAti-GbEGuP5L',
      icon: 'bolt'
    }
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} color="#006c49" />
          </TouchableOpacity>
          <View style={styles.logoBadge}>
            <Icon name="eco" size={20} color="#fff" />
          </View>
          <Text style={styles.headerTitle}>ChonX</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.pageHeader}>
          <View style={styles.headerTextWrap}>
            <Text style={styles.kicker}>TEACHER DASHBOARD</Text>
            <Text style={styles.pageTitle}>Verification Queue</Text>
            <Text style={styles.pageSubtitle}>Review and validate student environmental impact submissions.</Text>
          </View>
          <View style={styles.headerStats}>
            <View style={styles.statBox}>
              <Text style={styles.statLabel}>PENDING</Text>
              <Text style={styles.statValue}>24</Text>
            </View>
            <View style={[styles.statBox, {borderColor: 'rgba(0,108,73,0.2)'}]}>
              <Text style={styles.statLabel}>TODAY'S GOAL</Text>
              <Text style={[styles.statValue, {color: '#006b5f'}]}>15/50</Text>
            </View>
          </View>
        </View>

        <View style={styles.controlsCard}>
          <View style={styles.searchWrapper}>
            <Icon name="search" size={24} color="#6c7a71" style={styles.searchIcon} />
            <TextInput style={styles.searchInput} placeholder="Search student name or project..." placeholderTextColor="rgba(60, 74, 66, 0.5)" />
          </View>
          <View style={styles.filtersWrapper}>
            <TouchableOpacity style={styles.filterBtn}>
              <Text style={styles.filterBtnText}>Filter: Class</Text>
              <Icon name="expand-more" size={20} color="#3c4a42" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterBtn}>
              <Text style={styles.filterBtnText}>Category</Text>
              <Icon name="expand-more" size={20} color="#3c4a42" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.sortBtn}>
              <Text style={styles.sortBtnText}>Sort: Newest First</Text>
              <Icon name="sort" size={20} color="#006c49" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.grid}>
          {submissions.map((sub) => (
            <TouchableOpacity key={sub.id} style={styles.card} onPress={() => setModalVisible(true)}>
              <View style={styles.cardImageWrap}>
                <Image source={{uri: sub.img}} style={styles.cardImage} />
                <View style={styles.categoryBadge}>
                  <Text style={styles.categoryBadgeText}>{sub.category}</Text>
                </View>
                <View style={styles.photoIconBadge}>
                  <Icon name="collections" size={20} color="#fff" />
                </View>
              </View>
              <View style={styles.cardContent}>
                <View style={styles.studentRow}>
                  <View style={styles.iconCircle}>
                    <Icon name={sub.icon} size={16} color="#006b5f" />
                  </View>
                  <Text style={styles.studentName}>{sub.name}</Text>
                </View>
                <Text style={styles.studentDesc} numberOfLines={2}>{sub.desc}</Text>
                <View style={styles.actionBtns}>
                  <TouchableOpacity style={styles.approveBtn}>
                    <Icon name="check-circle" size={18} color="#fff" />
                    <Text style={styles.approveText}>Approve</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.rejectBtn}>
                    <Icon name="cancel" size={18} color="#ba1a1a" />
                    <Text style={styles.rejectText}>Reject</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Review Modal */}
      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalOverlay}>
          <TouchableOpacity style={styles.modalBg} onPress={() => setModalVisible(false)} />
          <View style={styles.modalContent}>
            <View style={styles.modalImageWrap}>
              <Image source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDa9ICl1NBOaPXlSCrpIrQ4I45oFzr_fmqTPRpbSpBM7vIP1DcDogGvO-USarPaqPtgbVkjDUbVoBeNyA2_aY3d3RRYRJ3-NlBvpANbRX64cJl7UH1FOzpnAYWjlX6kmH_t9HA6_e25szt4nxQ5Twzr58QnGuFzjY4Tj4LF5xVwjCaAgOK9eqxpYtFhSVz6uLHTBvgn8KMA8qhBe8zTiDG1FaISPyz6Zdwv-osLkgv2OxydJV7aCwOUAkKD1xaYtYwpZaRy9ia8yyEW'}} style={styles.cardImage} />
              <TouchableOpacity style={styles.modalCloseBtn} onPress={() => setModalVisible(false)}>
                <Icon name="close" size={24} color="#3c4a42" />
              </TouchableOpacity>
            </View>
            <ScrollView style={styles.modalScroll}>
              <View style={styles.modalHeaderRow}>
                <View>
                  <Text style={styles.modalClassTag}>Science Class 10-A</Text>
                  <Text style={styles.modalStudentName}>Liam Carter</Text>
                  <Text style={styles.modalDate}>Submitted Oct 24, 11:42 AM</Text>
                </View>
              </View>

              <View style={styles.modalSection}>
                <Text style={styles.modalLabel}>CATEGORY</Text>
                <View style={styles.modalCatRow}>
                  <Icon name="eco" size={20} color="#006c49" />
                  <Text style={styles.modalCatText}>Community Reforestation</Text>
                </View>
              </View>

              <View style={styles.modalSection}>
                <Text style={styles.modalLabel}>STUDENT'S NOTES</Text>
                <Text style={styles.modalNotes}>I visited the North Park community garden this weekend and planted three native white oak saplings. I used compost from our kitchen project last month to enrich the soil. This helps restore local biodiversity and captures carbon! I'll be checking them every Saturday for watering.</Text>
              </View>

              <View style={styles.modalStatsRow}>
                <View style={styles.modalStatCol}>
                  <Text style={styles.modalLabel}>IMPACT XP</Text>
                  <Text style={styles.modalStatValSec}>+250 XP</Text>
                </View>
                <View style={styles.modalStatCol}>
                  <Text style={styles.modalLabel}>CO2 OFFSET</Text>
                  <Text style={styles.modalStatValPri}>~65kg/yr</Text>
                </View>
              </View>

              <View style={styles.modalActions}>
                <TouchableOpacity style={styles.modalApproveBtn}>
                  <Icon name="verified" size={20} color="#fff" />
                  <Text style={styles.modalApproveText}>Approve Submission</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalRejectBtn} onPress={() => setModalVisible(false)}>
                  <Text style={styles.modalRejectText}>Reject</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
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
  backBtn: { padding: 8, marginLeft: -8 },
  logoBadge: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#10b981', alignItems: 'center', justifyContent: 'center' },
  headerTitle: { fontSize: 24, fontWeight: '800', color: '#006c49' },
  scrollContent: { padding: 24, paddingBottom: 64 },
  pageHeader: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, marginBottom: 40 },
  headerTextWrap: { flex: 1, minWidth: 250 },
  kicker: { fontSize: 12, fontWeight: '700', color: '#006c49', letterSpacing: 2, marginBottom: 8, textTransform: 'uppercase' },
  pageTitle: { fontSize: 32, fontWeight: '700', color: '#191c1d', marginBottom: 8 },
  pageSubtitle: { fontSize: 16, color: '#3c4a42' },
  headerStats: { flexDirection: 'row', gap: 16 },
  statBox: { backgroundColor: 'rgba(255,255,255,0.7)', paddingHorizontal: 24, paddingVertical: 16, borderRadius: 8, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)', alignItems: 'center' },
  statLabel: { fontSize: 12, fontWeight: '700', color: '#3c4a42', marginBottom: 4 },
  statValue: { fontSize: 28, fontWeight: '700', color: '#006c49' },
  controlsCard: { backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: 8, padding: 24, borderWidth: 1, borderColor: 'rgba(0,108,73,0.05)', marginBottom: 40, gap: 16 },
  searchWrapper: { relative: true },
  searchIcon: { position: 'absolute', left: 16, top: 16, zIndex: 1 },
  searchInput: { backgroundColor: '#f3f4f5', borderRadius: 32, paddingLeft: 48, paddingRight: 16, height: 56, fontSize: 16, color: '#191c1d' },
  filtersWrapper: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  filterBtn: { flex: 1, minWidth: 120, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#f3f4f5', paddingHorizontal: 16, paddingVertical: 12, borderRadius: 32 },
  filterBtnText: { fontSize: 12, fontWeight: '700', color: '#3c4a42', textTransform: 'uppercase' },
  sortBtn: { flex: 1, minWidth: 150, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'rgba(16,185,129,0.1)', borderWidth: 1, borderColor: 'rgba(0,108,73,0.2)', paddingHorizontal: 16, paddingVertical: 12, borderRadius: 32 },
  sortBtnText: { fontSize: 12, fontWeight: '700', color: '#006c49', textTransform: 'uppercase' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 24 },
  card: { width: '100%', maxWidth: 350, backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: 8, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)', overflow: 'hidden', elevation: 1, marginBottom: 24 },
  cardImageWrap: { height: 192, relative: true },
  cardImage: { width: '100%', height: '100%', resizeMode: 'cover' },
  categoryBadge: { position: 'absolute', top: 16, left: 16, backgroundColor: 'rgba(0,108,73,0.9)', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 16 },
  categoryBadgeText: { fontSize: 12, fontWeight: '700', color: '#fff', textTransform: 'uppercase' },
  photoIconBadge: { position: 'absolute', bottom: 16, right: 16, width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.2)', borderWidth: 1, borderColor: 'rgba(255,255,255,0.3)', alignItems: 'center', justifyContent: 'center' },
  cardContent: { padding: 24 },
  studentRow: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 12 },
  iconCircle: { width: 32, height: 32, borderRadius: 16, backgroundColor: 'rgba(109,245,225,0.3)', alignItems: 'center', justifyContent: 'center' },
  studentName: { fontSize: 18, fontWeight: '600', color: '#191c1d' },
  studentDesc: { fontSize: 16, color: '#3c4a42', marginBottom: 24 },
  actionBtns: { flexDirection: 'row', gap: 12 },
  approveBtn: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, backgroundColor: '#006c49', paddingVertical: 10, borderRadius: 32 },
  approveText: { fontSize: 12, fontWeight: '700', color: '#fff', textTransform: 'uppercase' },
  rejectBtn: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, borderWidth: 1, borderColor: 'rgba(186,26,26,0.3)', paddingVertical: 10, borderRadius: 32 },
  rejectText: { fontSize: 12, fontWeight: '700', color: '#ba1a1a', textTransform: 'uppercase' },
  modalOverlay: { flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(46,49,50,0.4)' },
  modalBg: { ...StyleSheet.absoluteFillObject },
  modalContent: { backgroundColor: '#fff', borderTopLeftRadius: 16, borderTopRightRadius: 16, maxHeight: '90%', overflow: 'hidden' },
  modalImageWrap: { height: 250, relative: true },
  modalCloseBtn: { position: 'absolute', top: 16, right: 16, width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.8)', alignItems: 'center', justifyContent: 'center' },
  modalScroll: { padding: 32 },
  modalHeaderRow: { marginBottom: 24 },
  modalClassTag: { fontSize: 12, fontWeight: '700', color: '#006c49', backgroundColor: 'rgba(16,185,129,0.1)', alignSelf: 'flex-start', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 4, marginBottom: 8 },
  modalStudentName: { fontSize: 24, fontWeight: '600', color: '#191c1d', marginBottom: 4 },
  modalDate: { fontSize: 14, color: '#3c4a42' },
  modalSection: { marginBottom: 24 },
  modalLabel: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 1, marginBottom: 8 },
  modalCatRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  modalCatText: { fontSize: 16, fontWeight: 'bold', color: '#006c49' },
  modalNotes: { fontSize: 16, color: '#191c1d', lineHeight: 24 },
  modalStatsRow: { flexDirection: 'row', gap: 16, paddingVertical: 16, borderTopWidth: 1, borderBottomWidth: 1, borderColor: 'rgba(187,202,191,0.3)', marginBottom: 24 },
  modalStatCol: { flex: 1 },
  modalStatValSec: { fontSize: 24, fontWeight: '600', color: '#006b5f' },
  modalStatValPri: { fontSize: 24, fontWeight: '600', color: '#006c49' },
  modalActions: { flexDirection: 'row', gap: 16, paddingBottom: 32 },
  modalApproveBtn: { flex: 2, backgroundColor: '#006c49', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12, paddingVertical: 16, borderRadius: 12 },
  modalApproveText: { fontSize: 16, fontWeight: 'bold', color: '#fff' },
  modalRejectBtn: { flex: 1, borderWidth: 1, borderColor: '#ba1a1a', alignItems: 'center', justifyContent: 'center', paddingVertical: 16, borderRadius: 12 },
  modalRejectText: { fontSize: 16, fontWeight: 'bold', color: '#ba1a1a' },
});
