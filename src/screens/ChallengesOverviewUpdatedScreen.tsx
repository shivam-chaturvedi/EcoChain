import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ChallengesOverviewUpdatedScreen({ navigation }: any) {
  const [activeTab, setActiveTab] = useState('ongoing');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedChallenge, setSelectedChallenge] = useState('');

  const openModal = (title: string) => {
    setSelectedChallenge(title);
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.avatar}>
            <Image
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrgJEdy27yfCbAB2kvldXP5m9Y0uo-AUmAciIZF5sUvZaEPOo-z4z1eQTbH7_LjO6ZdsKRNd0Lba0HvPou-eiLkPudPVVadrBH9vLR6dKRYvZXtP7zNfVfNwDwX4fah3JepzDbHQjyR33D5rezr5P0WbIuuin5sKA7CGpGyCJVH-K9HS66cDgiHn5yccmdnN1lzicQmBbgX1xHhVBLBCI_YwEfMgRCToTEdqQwOlidS-5Zp1o6-NhqIe-4OA9ocF8K4Y1O7U7lVR0e' }}
              style={styles.avatarImg}
            />
          </View>
          <Text style={styles.logoText}>ChonX</Text>
        </View>
        <TouchableOpacity style={styles.notificationBtn}>
          <Icon name="notifications" size={24} color="#006c49" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.pageTitle}>Arena Challenges</Text>
          <Text style={styles.pageSubtitle}>Join global missions and earn XP to level up your eco-impact.</Text>
        </View>

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          {['ongoing', 'recommended', 'completed'].map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[styles.tab, activeTab === tab && styles.tabActive]}
              onPress={() => setActiveTab(tab)}
            >
              <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Challenges Grid */}
        <View style={styles.grid}>
          {/* Card 1 */}
          <TouchableOpacity style={styles.card} onPress={() => openModal('Zero-Waste Lunchbox')} activeOpacity={0.9}>
            <View style={styles.cardImageContainer}>
              <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBK_8mwuWcuYZB6MHuqbpti6rF4EjNERQQuFZzymEclonDLD2Xv2f2ZESX74UhPBDfMdph2mQcM3_dJN3mGS1zIGDZY1uO76ZG2u5JtCqiD_N1pZCtvTl0BZ3h0UzqiRWxoH9li9iJKdgzuLaw_NCzXLuE-NTrHozZ-LIWvdyctPwRAmzb62X4G0ZpqSHsqj22ZpJ1lLCf7mCN2tnOp7sJYzEw2v3Pl53a474PRcfcYLHB1J5vRkw65hkLBOM4RRgaq4IcfPlWws0N-' }} style={styles.cardImage} />
              <View style={styles.badgeTopRight}>
                <Text style={styles.badgeTopRightText}>+150 XP</Text>
              </View>
              <View style={styles.badgeBottomLeft}>
                <Text style={styles.badgeBottomLeftText}>7 DAYS</Text>
              </View>
            </View>
            <View style={styles.cardBody}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>Zero-Waste Lunchbox</Text>
                <Icon name="eco" size={24} color="#006c49" />
              </View>
              <Text style={styles.cardDesc} numberOfLines={2}>Reduce single-use plastic by preparing your own waste-free lunch every day this week.</Text>
              <View style={styles.progressContainer}>
                <View style={styles.progressRow}>
                  <Text style={styles.progressLabel}>Day 2 of 7</Text>
                  <Text style={styles.progressValue}>28%</Text>
                </View>
                <View style={styles.progressBarBg}>
                  <View style={[styles.progressBarFill, { width: '28%', backgroundColor: '#006c49' }]} />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          {/* Card 2 */}
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('CarbonSummary')} activeOpacity={0.9}>
            <View style={styles.cardImageContainer}>
              <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKVI_oCCf1ycU8VoJI2Z3iMpxD9B65ri-fSzyrgX0OdPXwCSr2NyttSRJ4JA-cdCxxW1aAC-TvhXJIV59lVaR0CaLEq_tFspUlzFERa1Br_qQ6JKCsKhTmHl6T7r7oEdLcX-R5OZHBHO2omXEk3La8FJ22-Ms4x75auGoA3WGTcvBd_YNYUqyYFQqbIoJZ7O44P5etVSH1fiZBWGsOicTzvK4e4pfn_pDQTOzeQwvhDWzVbQCNyXLaAhoTxFnGic2AnpJhHNwzQkos' }} style={styles.cardImage} />
              <View style={[styles.badgeTopRight, { backgroundColor: '#71a1ff' }]}>
                <Text style={[styles.badgeTopRightText, { color: '#00367a' }]}>+300 XP</Text>
              </View>
            </View>
            <View style={styles.cardBody}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>The Green Commuter</Text>
                <Icon name="directions-bike" size={24} color="#005ac2" />
              </View>
              <Text style={styles.cardDesc} numberOfLines={2}>Swap your car for a bike or public transit for 5 consecutive work days.</Text>
              <TouchableOpacity style={styles.joinBtn}>
                <Text style={styles.joinBtnText}>Join Challenge</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Detail Modal */}
      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalOverlay}>
          <TouchableOpacity style={styles.modalBg} onPress={() => setModalVisible(false)} />
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{selectedChallenge}</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Icon name="close" size={24} color="#191c1d" />
              </TouchableOpacity>
            </View>
            
            <ScrollView style={styles.modalScroll}>
              <View style={styles.modalStatusBox}>
                <View style={styles.modalStatusCircle}>
                  <Text style={styles.modalStatusText}>28%</Text>
                </View>
                <View style={styles.modalStatusTextWrap}>
                  <Text style={styles.modalStatusTitle}>On track!</Text>
                  <Text style={styles.modalStatusDesc}>Complete 5 more days to unlock your badge.</Text>
                </View>
              </View>

              <Text style={styles.taskListTitle}>Daily Missions</Text>
              
              <View style={styles.taskList}>
                {/* Completed */}
                <View style={styles.taskItem}>
                  <View style={styles.taskIconCompleted}><Icon name="check" size={16} color="#ffffff" /></View>
                  <View style={styles.taskTextWrap}>
                    <Text style={styles.taskTitle}>Day 1: Audit your pantry</Text>
                    <Text style={styles.taskDesc}>Identify non-recyclable items and find sustainable alternatives.</Text>
                  </View>
                </View>
                
                {/* Active */}
                <View style={styles.taskItemActive}>
                  <View style={styles.taskIconActive}><View style={styles.taskIconActiveInner} /></View>
                  <View style={styles.taskTextWrap}>
                    <Text style={[styles.taskTitle, { color: '#006c49' }]}>Day 2: Pack your bento</Text>
                    <Text style={styles.taskDesc}>Prepare a zero-waste lunch using only reusable containers.</Text>
                    <TouchableOpacity style={styles.verifyBtn}>
                      <Text style={styles.verifyBtnText}>Verify with Photo</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* Locked */}
                <View style={styles.taskItemLocked}>
                  <View style={styles.taskIconLocked}><Icon name="lock" size={16} color="#bbcabf" /></View>
                  <View style={styles.taskTextWrap}>
                    <Text style={styles.taskTitle}>Day 3: Bulk buy snacks</Text>
                    <Text style={styles.taskDesc}>Purchase snacks from a bulk bin using your own glass jars.</Text>
                  </View>
                </View>
              </View>
            </ScrollView>

            <View style={styles.modalFooter}>
              <TouchableOpacity style={styles.submitTaskBtn}>
                <Text style={styles.submitTaskText}>Submit Today's Task</Text>
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
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, height: 64, backgroundColor: 'rgba(248,249,250,0.8)', borderBottomWidth: 1, borderBottomColor: 'rgba(187,202,191,0.2)' },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  avatar: { width: 40, height: 40, borderRadius: 20, overflow: 'hidden', borderWidth: 2, borderColor: '#6ffbbe' },
  avatarImg: { width: '100%', height: '100%' },
  logoText: { fontSize: 24, fontWeight: '800', color: '#006c49' },
  notificationBtn: { width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  scrollContent: { paddingHorizontal: 24, paddingTop: 24, paddingBottom: 100 },
  titleSection: { marginBottom: 32 },
  pageTitle: { fontSize: 32, fontWeight: '700', color: '#191c1d', marginBottom: 8 },
  pageSubtitle: { fontSize: 16, color: '#3c4a42' },
  tabsContainer: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'rgba(187,202,191,0.3)', marginBottom: 24 },
  tab: { flex: 1, paddingVertical: 16, alignItems: 'center', borderBottomWidth: 2, borderBottomColor: 'transparent' },
  tabActive: { borderBottomColor: '#006c49' },
  tabText: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 0.5 },
  tabTextActive: { color: '#006c49' },
  grid: { gap: 24 },
  card: { backgroundColor: '#ffffff', borderRadius: 16, overflow: 'hidden', borderWidth: 1, borderColor: 'rgba(187,202,191,0.3)' },
  cardImageContainer: { height: 192, position: 'relative' },
  cardImage: { width: '100%', height: '100%' },
  badgeTopRight: { position: 'absolute', top: 16, right: 16, backgroundColor: '#10b981', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 16 },
  badgeTopRightText: { fontSize: 12, fontWeight: '700', color: '#00422b' },
  badgeBottomLeft: { position: 'absolute', bottom: 16, left: 16, backgroundColor: 'rgba(0,0,0,0.4)', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 4 },
  badgeBottomLeftText: { fontSize: 10, fontWeight: '700', color: '#ffffff', letterSpacing: 1 },
  cardBody: { padding: 24 },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  cardTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d' },
  cardDesc: { fontSize: 16, color: '#3c4a42', marginBottom: 24 },
  progressContainer: { marginTop: 'auto' },
  progressRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  progressLabel: { fontSize: 12, fontWeight: '700', color: '#006c49' },
  progressValue: { fontSize: 12, fontWeight: '700', color: '#3c4a42' },
  progressBarBg: { height: 8, backgroundColor: 'rgba(16,185,129,0.2)', borderRadius: 4, overflow: 'hidden' },
  progressBarFill: { height: '100%', borderRadius: 4 },
  joinBtn: { paddingVertical: 12, backgroundColor: '#006c49', borderRadius: 8, alignItems: 'center' },
  joinBtnText: { fontSize: 16, fontWeight: '700', color: '#ffffff' },
  
  modalOverlay: { flex: 1, justifyContent: 'flex-end' },
  modalBg: { ...StyleSheet.absoluteFill, backgroundColor: 'rgba(0,0,0,0.4)' },
  modalContent: { backgroundColor: '#ffffff', borderTopLeftRadius: 16, borderTopRightRadius: 16, maxHeight: '90%' },
  modalHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16, borderBottomWidth: 1, borderBottomColor: 'rgba(187,202,191,0.3)' },
  modalTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d' },
  modalScroll: { padding: 24 },
  modalStatusBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(16,185,129,0.1)', padding: 16, borderRadius: 16, gap: 16, marginBottom: 32 },
  modalStatusCircle: { width: 64, height: 64, borderRadius: 32, borderWidth: 4, borderColor: '#006c49', alignItems: 'center', justifyContent: 'center' },
  modalStatusText: { fontSize: 20, fontWeight: '700', color: '#006c49' },
  modalStatusTextWrap: { flex: 1 },
  modalStatusTitle: { fontSize: 16, fontWeight: '700', color: '#006c49' },
  modalStatusDesc: { fontSize: 16, color: '#3c4a42' },
  taskListTitle: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 0.5, marginBottom: 16 },
  taskList: { gap: 16 },
  taskItem: { flexDirection: 'row', gap: 16, padding: 16, backgroundColor: '#f3f4f5', borderRadius: 16, borderWidth: 1, borderColor: 'rgba(187,202,191,0.2)' },
  taskIconCompleted: { width: 24, height: 24, borderRadius: 12, backgroundColor: '#006c49', alignItems: 'center', justifyContent: 'center', marginTop: 4 },
  taskTextWrap: { flex: 1 },
  taskTitle: { fontSize: 16, fontWeight: '700', color: '#191c1d' },
  taskDesc: { fontSize: 14, color: '#3c4a42', marginTop: 4 },
  taskItemActive: { flexDirection: 'row', gap: 16, padding: 16, backgroundColor: '#ffffff', borderRadius: 16, borderWidth: 2, borderColor: '#006c49', shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 8 },
  taskIconActive: { width: 24, height: 24, borderRadius: 12, borderWidth: 2, borderColor: '#006c49', alignItems: 'center', justifyContent: 'center', marginTop: 4 },
  taskIconActiveInner: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#006c49' },
  verifyBtn: { alignSelf: 'flex-start', paddingHorizontal: 16, paddingVertical: 8, backgroundColor: '#006c49', borderRadius: 16, marginTop: 12 },
  verifyBtnText: { fontSize: 12, fontWeight: '700', color: '#ffffff' },
  taskItemLocked: { flexDirection: 'row', gap: 16, padding: 16, backgroundColor: 'rgba(225,227,228,0.3)', borderRadius: 16, borderWidth: 1, borderColor: '#bbcabf', borderStyle: 'dashed', opacity: 0.6 },
  taskIconLocked: { width: 24, height: 24, borderRadius: 12, borderWidth: 2, borderColor: '#bbcabf', alignItems: 'center', justifyContent: 'center', marginTop: 4 },
  modalFooter: { padding: 24, borderTopWidth: 1, borderTopColor: 'rgba(187,202,191,0.3)', backgroundColor: '#ffffff' },
  submitTaskBtn: { paddingVertical: 16, backgroundColor: '#006c49', borderRadius: 8, alignItems: 'center' },
  submitTaskText: { fontSize: 16, fontWeight: '700', color: '#ffffff' },
});
