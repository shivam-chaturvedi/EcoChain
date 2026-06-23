import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function VerificationStatusScreen({ navigation }: any) {
  const [modalType, setModalType] = useState<string | null>(null);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} color="#006c49" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Verification Center</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.pageHeader}>
          <Text style={styles.pageSubtitle}>Review your historical logs and track your environmental impact.</Text>
        </View>

        {/* Stats */}
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>TOTAL IMPACT</Text>
            <Text style={styles.statValuePri}>1,284</Text>
            <Text style={styles.statSub}>Points Earned</Text>
            <Icon name="eco" size={60} color="rgba(0,0,0,0.05)" style={styles.bgIcon} />
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>VERIFICATION RATE</Text>
            <Text style={styles.statValueSec}>92%</Text>
            <View style={styles.progressBarBg}>
              <View style={[styles.progressBarFill, {width: '92%'}]} />
            </View>
          </View>
          <View style={[styles.statCard, {borderColor: 'rgba(16,185,129,0.3)'}]}>
            <Text style={styles.statLabel}>ACTIVE STREAK</Text>
            <View style={styles.streakRow}>
              <Text style={styles.statValueDark}>14</Text>
              <Text style={styles.streakLabel}>Days</Text>
            </View>
            <View style={styles.streakDots}>
              <View style={styles.streakDotDone}><Icon name="check" size={12} color="#191c1d" /></View>
              <View style={styles.streakDotDone}><Icon name="check" size={12} color="#191c1d" /></View>
              <View style={styles.streakDotPending}><Icon name="pending" size={12} color="#6c7a71" /></View>
            </View>
          </View>
        </View>

        {/* Filters */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filtersScroll}>
          <TouchableOpacity style={styles.filterChipActive}>
            <Text style={styles.filterChipTextActive}>All Logs</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterChip}>
            <Text style={styles.filterChipText}>Verified</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterChip}>
            <Text style={styles.filterChipText}>Pending</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterChip}>
            <Text style={styles.filterChipText}>Needs Revision</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Logs */}
        <View style={styles.logsList}>
          {/* Verified */}
          <TouchableOpacity style={styles.logCard} onPress={() => setModalType('verified')}>
            <View style={styles.logLeft}>
              <Image source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCW5XXPG3aPqBaxbbOPZ4MwFyJskvvO728Yp1QvlhGL1nlLb1vFYdQX_cE_4H3JQPLvDAAOJboEDNjRXM6gX4S4qbcbQCjdluDwfCZpJrayN_0_JAl_nBH6HwR-LCGYH9gf2DTMiEHxgtaQMUxasyGt8lemdAXA2tSx2x222Z297jDR495zeN8WDnsOt8vWxAO_KX3Byzb6pQyA0lYm4rcLft3pedAQNo8yw74FgWDTrkePuxAYSIUnN3tmHWFPzzCXB-n9AV-0cdTF'}} style={styles.logThumb} />
              <View>
                <Text style={styles.logTitle}>Bottle Recycling</Text>
                <Text style={styles.logDate}>October 24, 2023 • 14:30</Text>
              </View>
            </View>
            <View style={styles.logRight}>
              <View style={styles.logStats}>
                <Text style={[styles.logXp, {color: '#006c49'}]}>+45 XP</Text>
                <Text style={styles.logMetric}>0.5kg CO2 saved</Text>
              </View>
              <View style={[styles.statusBadge, {backgroundColor: 'rgba(16,185,129,0.2)'}]}>
                <Icon name="verified" size={14} color="#00422b" />
                <Text style={[styles.statusBadgeText, {color: '#00422b'}]}>Verified</Text>
              </View>
              <Icon name="chevron-right" size={24} color="#6c7a71" />
            </View>
          </TouchableOpacity>

          {/* Pending */}
          <TouchableOpacity style={styles.logCard}>
            <View style={styles.logLeft}>
              <Image source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbInOwLqK8Wt8Vx_oQBJ3y24r9h2lE3LTWsa1MUnJGf3RzlYci4m_UncLQXyXQ5Itr1aFQgv0JsEJVkmuQ9kkOUTGmro_3NDyKmSy-q6gNMuoE2fFbEzA82jDt1JlJOuWUATwP3640J9AnBZpReCTufxxclpv6qWOnzz0s4kr5UwZmyhKQjPpe_SWO86fs3gwXnS81PQ4sLqFhqV2mnHQxvbnAfJij4KqVYH4EnRwPvgAoKe8UQXpF2XEHmaleHCx8VT7QrLPUa7iz'}} style={styles.logThumb} />
              <View>
                <Text style={styles.logTitle}>Reusable Bottle Use</Text>
                <Text style={styles.logDate}>October 25, 2023 • 09:15</Text>
              </View>
            </View>
            <View style={styles.logRight}>
              <View style={styles.logStats}>
                <Text style={[styles.logXp, {color: '#6c7a71'}]}>Pending XP</Text>
                <Text style={[styles.logMetric, {color: '#3c4a42'}]}>Evaluating Impact...</Text>
              </View>
              <View style={[styles.statusBadge, {backgroundColor: '#d8e2ff'}]}>
                <Icon name="schedule" size={14} color="#001a42" />
                <Text style={[styles.statusBadgeText, {color: '#001a42'}]}>Pending</Text>
              </View>
              <Icon name="chevron-right" size={24} color="#6c7a71" />
            </View>
          </TouchableOpacity>

          {/* Needs Revision */}
          <TouchableOpacity style={[styles.logCard, {borderLeftWidth: 4, borderLeftColor: '#ba1a1a'}]} onPress={() => setModalType('rejected')}>
            <View style={styles.logLeft}>
              <View style={[styles.logThumb, {backgroundColor: '#ffdad6', alignItems: 'center', justifyContent: 'center'}]}>
                <Icon name="no-photography" size={24} color="#ba1a1a" />
              </View>
              <View>
                <Text style={[styles.logTitle, {color: '#ba1a1a'}]}>Carpool to School</Text>
                <Text style={styles.logDate}>October 23, 2023 • 08:00</Text>
              </View>
            </View>
            <View style={styles.logRight}>
              <View style={styles.logStats}>
                <Text style={[styles.logXp, {color: '#ba1a1a'}]}>0 XP</Text>
                <Text style={[styles.logMetric, {color: '#ba1a1a'}]}>Needs Photo</Text>
              </View>
              <View style={[styles.statusBadge, {backgroundColor: '#ffdad6'}]}>
                <Icon name="warning" size={14} color="#93000a" />
                <Text style={[styles.statusBadgeText, {color: '#93000a'}]}>Needs Revision</Text>
              </View>
              <Icon name="chevron-right" size={24} color="#6c7a71" />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Verified Details Modal */}
      <Modal visible={modalType === 'verified'} transparent={true} animationType="slide">
        <View style={styles.modalOverlay}>
          <TouchableOpacity style={styles.modalBg} onPress={() => setModalType(null)} />
          <View style={styles.modalContent}>
            <View style={styles.modalImageWrap}>
              <Image source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAACwin0DDQhbo7SOwVdLYKPtQAa4O1Nj8EkJ8d_3ls9XN255gspW1zOYvRsTLxTPGZFdsu2fxPfonRkN-zYnH0sB2zpfvH7uozydevz_FrwfxGiECSYWp_HeiDfr2WlgnqivZQkRwpcem9DWp_mnqKD5W5eurScKtSSDbj8QXQc-hrzEBYCwGDa8mIXU5bfe0Q3tP_Uud_ims9yhLke90nS1duLNB-Gn2ljgyP3wWUtpiyY6JYeSa1JQxBi4EQvs5-ZG8zWiA49nWX'}} style={styles.imageFull} />
              <TouchableOpacity style={styles.modalCloseBtn} onPress={() => setModalType(null)}>
                <Icon name="close" size={24} color="#191c1d" />
              </TouchableOpacity>
            </View>
            <View style={styles.modalBody}>
              <View style={styles.modalHeaderRow}>
                <View>
                  <Text style={styles.modalTitle}>Bottle Recycling</Text>
                  <Text style={styles.modalSub}>Confirmed by Eco-Scanner #129</Text>
                </View>
                <View style={styles.xpBadgeBox}>
                  <Text style={styles.xpBadgeVal}>+45</Text>
                  <Text style={styles.xpBadgeLabel}>XP GAINED</Text>
                </View>
              </View>
              <View style={styles.modalStatsGrid}>
                <View style={styles.mStatBox}>
                  <Text style={styles.mStatLabel}>CO2 REDUCTION</Text>
                  <Text style={styles.mStatVal1}>0.52 kg</Text>
                </View>
                <View style={styles.mStatBox}>
                  <Text style={styles.mStatLabel}>COMMUNITY RANK</Text>
                  <Text style={styles.mStatVal2}>#12 Daily</Text>
                </View>
              </View>
              <View style={styles.verifyLogSection}>
                <Text style={styles.verifyLogTitle}>VERIFICATION LOG</Text>
                <View style={styles.verifyLogItem}>
                  <Icon name="check-circle" size={24} color="#006c49" />
                  <View>
                    <Text style={styles.verifyLogItemTitle}>Image Authenticated</Text>
                    <Text style={styles.verifyLogItemDesc}>AI verification passed with 98.4% confidence.</Text>
                  </View>
                </View>
                <View style={styles.verifyLogItem}>
                  <Icon name="check-circle" size={24} color="#006c49" />
                  <View>
                    <Text style={styles.verifyLogItemTitle}>Location Matched</Text>
                    <Text style={styles.verifyLogItemDesc}>Coordinates match authorized recycling zone B-4.</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      {/* Needs Revision Modal */}
      <Modal visible={modalType === 'rejected'} transparent={true} animationType="slide">
        <View style={styles.modalOverlay}>
          <TouchableOpacity style={styles.modalBg} onPress={() => setModalType(null)} />
          <View style={styles.rejectModalContent}>
            <View style={styles.rejectIconBox}>
              <Icon name="error" size={40} color="#ba1a1a" />
            </View>
            <Text style={styles.rejectTitle}>Action Required</Text>
            <Text style={styles.rejectDesc}>Your log "Carpool to School" was flagged for missing photographic evidence. Please upload a photo of your group to claim your 30 XP.</Text>
            <View style={styles.rejectActions}>
              <TouchableOpacity style={styles.editBtn}>
                <Icon name="edit" size={20} color="#fff" />
                <Text style={styles.editBtnText}>Edit & Resubmit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancelBtn} onPress={() => setModalType(null)}>
                <Text style={styles.cancelBtnText}>Cancel</Text>
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
  header: { height: 64, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 24, backgroundColor: 'rgba(248, 249, 250, 0.8)', borderBottomWidth: 1, borderBottomColor: 'rgba(187, 202, 191, 0.3)' },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  backBtn: { padding: 8, marginLeft: -8 },
  headerTitle: { fontSize: 24, fontWeight: '800', color: '#191c1d' },
  scrollContent: { padding: 24, paddingBottom: 64 },
  pageHeader: { marginBottom: 24 },
  pageSubtitle: { fontSize: 18, color: '#3c4a42' },
  statsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 24, marginBottom: 40 },
  statCard: { flex: 1, minWidth: 200, backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: 8, padding: 24, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)', overflow: 'hidden' },
  statLabel: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 1, marginBottom: 8 },
  statValuePri: { fontSize: 48, fontWeight: '800', color: '#006c49' },
  statSub: { fontSize: 16, fontWeight: '500', color: '#006c49' },
  bgIcon: { position: 'absolute', bottom: -16, right: -16 },
  statValueSec: { fontSize: 48, fontWeight: '800', color: '#006b5f', marginBottom: 12 },
  progressBarBg: { width: '100%', height: 8, backgroundColor: 'rgba(113,248,228,0.3)', borderRadius: 4 },
  progressBarFill: { height: '100%', backgroundColor: '#006b5f', borderRadius: 4 },
  streakRow: { flexDirection: 'row', alignItems: 'baseline', gap: 8 },
  statValueDark: { fontSize: 48, fontWeight: '800', color: '#00422b' },
  streakLabel: { fontSize: 24, fontWeight: '600', color: '#00422b' },
  streakDots: { flexDirection: 'row', marginLeft: 8, marginTop: 12 },
  streakDotDone: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#6ffbbe', borderWidth: 2, borderColor: '#f8f9fa', alignItems: 'center', justifyContent: 'center', marginLeft: -8 },
  streakDotPending: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#e1e3e4', borderWidth: 2, borderColor: '#f8f9fa', alignItems: 'center', justifyContent: 'center', marginLeft: -8 },
  filtersScroll: { marginBottom: 24, maxHeight: 40 },
  filterChipActive: { backgroundColor: '#006c49', paddingHorizontal: 24, paddingVertical: 8, borderRadius: 20, marginRight: 8 },
  filterChipTextActive: { fontSize: 12, fontWeight: '700', color: '#fff', textTransform: 'uppercase' },
  filterChip: { backgroundColor: 'rgba(225,227,228,0.5)', paddingHorizontal: 24, paddingVertical: 8, borderRadius: 20, marginRight: 8 },
  filterChipText: { fontSize: 12, fontWeight: '700', color: '#191c1d', textTransform: 'uppercase' },
  logsList: { gap: 12 },
  logCard: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.7)', padding: 24, borderRadius: 8, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)', gap: 16 },
  logLeft: { flexDirection: 'row', alignItems: 'center', gap: 24 },
  logThumb: { width: 64, height: 64, borderRadius: 8 },
  logTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d' },
  logDate: { fontSize: 16, color: '#3c4a42' },
  logRight: { flexDirection: 'row', alignItems: 'center', gap: 24 },
  logStats: { alignItems: 'flex-end' },
  logXp: { fontSize: 12, fontWeight: '700', textTransform: 'uppercase' },
  logMetric: { fontSize: 16, fontWeight: 'bold' },
  statusBadge: { flexDirection: 'row', alignItems: 'center', gap: 4, paddingHorizontal: 12, paddingVertical: 4, borderRadius: 16 },
  statusBadgeText: { fontSize: 12, fontWeight: '700', textTransform: 'uppercase' },
  modalOverlay: { flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(25,28,29,0.4)' },
  modalBg: { ...StyleSheet.absoluteFillObject },
  modalContent: { backgroundColor: '#f8f9fa', borderTopLeftRadius: 16, borderTopRightRadius: 16, maxHeight: '90%' },
  modalImageWrap: { height: 256, relative: true },
  imageFull: { width: '100%', height: '100%', resizeMode: 'cover' },
  modalCloseBtn: { position: 'absolute', top: 24, right: 24, width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(248,249,250,0.8)', alignItems: 'center', justifyContent: 'center' },
  modalBody: { padding: 24 },
  modalHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 },
  modalTitle: { fontSize: 32, fontWeight: '700', color: '#191c1d' },
  modalSub: { fontSize: 18, color: '#3c4a42' },
  xpBadgeBox: { backgroundColor: '#10b981', paddingHorizontal: 24, paddingVertical: 12, borderRadius: 8, alignItems: 'center' },
  xpBadgeVal: { fontSize: 28, fontWeight: '700', color: '#00422b' },
  xpBadgeLabel: { fontSize: 12, fontWeight: '700', color: '#00422b' },
  modalStatsGrid: { flexDirection: 'row', gap: 24, marginBottom: 40 },
  mStatBox: { flex: 1, backgroundColor: '#f3f4f5', padding: 24, borderRadius: 8 },
  mStatLabel: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 1, marginBottom: 4 },
  mStatVal1: { fontSize: 24, fontWeight: '600', color: '#006c49' },
  mStatVal2: { fontSize: 24, fontWeight: '600', color: '#006b5f' },
  verifyLogSection: { borderTopWidth: 1, borderTopColor: '#bbcabf', paddingTop: 24 },
  verifyLogTitle: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 1, marginBottom: 12 },
  verifyLogItem: { flexDirection: 'row', gap: 12, marginBottom: 12 },
  verifyLogItemTitle: { fontSize: 16, fontWeight: 'bold', color: '#191c1d' },
  verifyLogItemDesc: { fontSize: 14, color: '#3c4a42' },
  rejectModalContent: { backgroundColor: '#f8f9fa', borderTopLeftRadius: 16, borderTopRightRadius: 16, padding: 32, alignItems: 'center' },
  rejectIconBox: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#ffdad6', alignItems: 'center', justifyContent: 'center', marginBottom: 24 },
  rejectTitle: { fontSize: 32, fontWeight: '700', color: '#191c1d', marginBottom: 12 },
  rejectDesc: { fontSize: 16, color: '#3c4a42', textAlign: 'center', marginBottom: 32 },
  rejectActions: { width: '100%', gap: 12 },
  editBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, backgroundColor: '#006c49', paddingVertical: 16, borderRadius: 8 },
  editBtnText: { fontSize: 16, fontWeight: 'bold', color: '#fff' },
  cancelBtn: { alignItems: 'center', justifyContent: 'center', paddingVertical: 16, backgroundColor: 'rgba(225,227,228,0.5)', borderRadius: 8 },
  cancelBtnText: { fontSize: 16, fontWeight: 'bold', color: '#3c4a42' },
});
