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

export default function ClassDetailStudentsListScreen({ navigation }: any) {
  const [activeTab, setActiveTab] = useState('Students');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<any>(null);

  const openModal = (name: string, badge: string, imageUri: string) => {
    setSelectedStudent({ name, badge, imageUri });
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} color="#006c49" />
          </TouchableOpacity>
          <Text style={styles.logoText}>Class 10A</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity><Icon name="notifications" size={24} color="#006c49" /></TouchableOpacity>
          <View style={styles.avatar}>
            <Image
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtXLka2LM_fuLYDGo5jiL5g8LmmWuUacPHyYHI9eeR8ZDR7WnwvheYL40IPVhe4K-XqCHWF9SGB7zQPTz0rwu8DlD2sKWuwl16vLUol4BqscO5QBVvY3daLI7QWV7G9nBcxfnM7RlnIwHu089dCcAfr2xeuEAUK9ClvuyPzomwtJAlgJ5F_xJhrK7atN9JG9pf-n569CAmVdjKihTea15NSdu10ZggG9GGCc6noSz1nsV1e_kPj6FUI2dAg9K1DYQbXeyZBLKv-HDh' }}
              style={styles.avatarImg}
            />
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Tab Bar */}
        <View style={styles.tabsContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {['Students', 'Leaderboard', 'Calendar', 'Analytics'].map((tab) => (
              <TouchableOpacity
                key={tab}
                style={[styles.tab, activeTab === tab && styles.tabActive]}
                onPress={() => setActiveTab(tab)}
              >
                <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>{tab}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Content Header */}
        <View style={styles.contentHeader}>
          <View>
            <Text style={styles.contentTitle}>Active Roster</Text>
            <Text style={styles.contentSubtitle}>24 Students Enrolled</Text>
          </View>
          <TouchableOpacity style={styles.addBtn}>
            <Icon name="add" size={18} color="#ffffff" />
            <Text style={styles.addBtnText}>Add Student</Text>
          </TouchableOpacity>
        </View>

        {/* Student List */}
        <View style={styles.studentList}>
          {/* Alex Johnson */}
          <TouchableOpacity 
            style={styles.studentRow} 
            onPress={() => openModal('Alex Johnson', 'Eco Warrior', 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_ZKzsxDoF6SvksvxFQTG2SM4XymocWyxqQriihclha6TnzkRqxKClwHFZ8XzJNVAwjXHRLkrrXDrviVja2n3v3G3hF-eEQpwfbVKG06kYe5TbPaZN_VzAOj7RASh8M3AsYLIHlpok_eXH7FZHCoKyma9a110KReqqbJAxWO3-_ZaBqWu3pBqcciEMon6NlnFoX6GUDeeuJ4vACADjNRipVcevz0d4GSd3k_X25u2MW8b_Vr9UCh8GfrC_Et5bTMEGWUlI1DI54VPi')}
          >
            <View style={styles.studentRowLeft}>
              <View style={[styles.studentAvatarWrap, { borderColor: '#6df5e1' }]}>
                <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_ZKzsxDoF6SvksvxFQTG2SM4XymocWyxqQriihclha6TnzkRqxKClwHFZ8XzJNVAwjXHRLkrrXDrviVja2n3v3G3hF-eEQpwfbVKG06kYe5TbPaZN_VzAOj7RASh8M3AsYLIHlpok_eXH7FZHCoKyma9a110KReqqbJAxWO3-_ZaBqWu3pBqcciEMon6NlnFoX6GUDeeuJ4vACADjNRipVcevz0d4GSd3k_X25u2MW8b_Vr9UCh8GfrC_Et5bTMEGWUlI1DI54VPi' }} style={styles.studentAvatarImg} />
              </View>
              <View>
                <Text style={styles.studentName}>Alex Johnson</Text>
                <View style={styles.badgeRow}>
                  <Icon name="eco" size={16} color="#006b5f" />
                  <Text style={[styles.badgeText, { color: '#006b5f' }]}>ECO WARRIOR</Text>
                </View>
              </View>
            </View>
            <View style={styles.studentRowRight}>
              <View style={styles.progressWrap}>
                <Text style={styles.progressLabel}>ENGAGEMENT</Text>
                <View style={styles.progressBarBg}>
                  <View style={[styles.progressBarFill, { width: '85%', backgroundColor: '#006c49' }]} />
                </View>
              </View>
              <TouchableOpacity style={styles.moreBtn}>
                <Icon name="more-vert" size={24} color="#3c4a42" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          {/* Beatrix Wang */}
          <TouchableOpacity 
            style={styles.studentRow} 
            onPress={() => openModal('Beatrix Wang', 'Pioneer', 'https://lh3.googleusercontent.com/aida-public/AB6AXuAc-12VDy_ogMAhhIPJ2BgJftP8yQLgUVVb0qLOZrFpOxxvppD5IUR2ge_S1FZ8rSe52KhNkxh4iCShlUaPZaSAOK1m_uLqnOxbC1ZwXIFeQaLOK1SH2yTdOHWpoMZKsIDDpZ8Waqi1j901yxvRH-A_ijHK-fy_Wd_SzgvHdtFgYMJfpD4pEIHg_vWPWWn6ybGCGA7JAYHdLUn6ZleBypgvGy9B6jcUmijFP33HrCenCsf8lwhHpwQ1r73deJ34AAsef-WC0DkvPjA1')}
          >
            <View style={styles.studentRowLeft}>
              <View style={[styles.studentAvatarWrap, { borderColor: '#71a1ff' }]}>
                <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAc-12VDy_ogMAhhIPJ2BgJftP8yQLgUVVb0qLOZrFpOxxvppD5IUR2ge_S1FZ8rSe52KhNkxh4iCShlUaPZaSAOK1m_uLqnOxbC1ZwXIFeQaLOK1SH2yTdOHWpoMZKsIDDpZ8Waqi1j901yxvRH-A_ijHK-fy_Wd_SzgvHdtFgYMJfpD4pEIHg_vWPWWn6ybGCGA7JAYHdLUn6ZleBypgvGy9B6jcUmijFP33HrCenCsf8lwhHpwQ1r73deJ34AAsef-WC0DkvPjA1' }} style={styles.studentAvatarImg} />
              </View>
              <View>
                <Text style={styles.studentName}>Beatrix Wang</Text>
                <View style={styles.badgeRow}>
                  <Icon name="star" size={16} color="#005ac2" />
                  <Text style={[styles.badgeText, { color: '#005ac2' }]}>PIONEER</Text>
                </View>
              </View>
            </View>
            <View style={styles.studentRowRight}>
              <View style={styles.progressWrap}>
                <Text style={styles.progressLabel}>ENGAGEMENT</Text>
                <View style={styles.progressBarBg}>
                  <View style={[styles.progressBarFill, { width: '92%', backgroundColor: '#005ac2' }]} />
                </View>
              </View>
              <TouchableOpacity style={styles.moreBtn}>
                <Icon name="more-vert" size={24} color="#3c4a42" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          {/* Charlie Davids */}
          <TouchableOpacity 
            style={styles.studentRow} 
            onPress={() => openModal('Charlie Davids', 'Seedling', 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVlShg5Dbq0aEifvPM0F09ZxB17__71fg_vv9fndAwEvOYJFY9pULNLhWhUZ9e26JKwXE7Q_k61jPFs2TbViQ1qRySGdkl8JeQZsDmo1jxGjRyrZHmOc9w303k02kDYFnIXPHrZYHzwRt2Oj6L_zcQvcHc1fCrXoYOK8CZwrxy3F7vpVnkk9pXuup1-JTFvdLePOqF03wVmv7gIxgSrg2_egctu-mNEyr9NKglLnvenbXGwBd74xcXkPnWS2--vXtj8L_xfEheBWHA')}
          >
            <View style={styles.studentRowLeft}>
              <View style={[styles.studentAvatarWrap, { borderColor: '#bbcabf' }]}>
                <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVlShg5Dbq0aEifvPM0F09ZxB17__71fg_vv9fndAwEvOYJFY9pULNLhWhUZ9e26JKwXE7Q_k61jPFs2TbViQ1qRySGdkl8JeQZsDmo1jxGjRyrZHmOc9w303k02kDYFnIXPHrZYHzwRt2Oj6L_zcQvcHc1fCrXoYOK8CZwrxy3F7vpVnkk9pXuup1-JTFvdLePOqF03wVmv7gIxgSrg2_egctu-mNEyr9NKglLnvenbXGwBd74xcXkPnWS2--vXtj8L_xfEheBWHA' }} style={styles.studentAvatarImg} />
              </View>
              <View>
                <Text style={styles.studentName}>Charlie Davids</Text>
                <View style={styles.badgeRow}>
                  <Icon name="psychology" size={16} color="#6c7a71" />
                  <Text style={[styles.badgeText, { color: '#6c7a71' }]}>SEEDLING</Text>
                </View>
              </View>
            </View>
            <View style={styles.studentRowRight}>
              <View style={styles.progressWrap}>
                <Text style={styles.progressLabel}>ENGAGEMENT</Text>
                <View style={styles.progressBarBg}>
                  <View style={[styles.progressBarFill, { width: '45%', backgroundColor: '#006b5f' }]} />
                </View>
              </View>
              <TouchableOpacity style={styles.moreBtn}>
                <Icon name="more-vert" size={24} color="#3c4a42" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Modal */}
      <Modal visible={modalVisible} transparent={true} animationType="fade">
        <View style={styles.modalOverlay}>
          <TouchableOpacity style={styles.modalBg} onPress={() => setModalVisible(false)} />
          {selectedStudent && (
            <View style={styles.modalContent}>
              <View style={styles.modalHeaderBox}>
                <View style={styles.modalAvatarBox}>
                  <Image source={{ uri: selectedStudent.imageUri }} style={styles.modalAvatarImg} />
                </View>
                <Text style={styles.modalName}>{selectedStudent.name}</Text>
                <Text style={styles.modalBadge}>{selectedStudent.badge}</Text>
              </View>
              <View style={styles.modalBody}>
                <View style={styles.modalStatsRow}>
                  <View style={styles.modalStatItem}>
                    <Text style={styles.modalStatLabel}>XP POINTS</Text>
                    <Text style={[styles.modalStatValue, { color: '#006c49' }]}>2,450</Text>
                  </View>
                  <View style={styles.modalStatItem}>
                    <Text style={styles.modalStatLabel}>IMPACT</Text>
                    <Text style={[styles.modalStatValue, { color: '#006b5f' }]}>88%</Text>
                  </View>
                  <View style={styles.modalStatItem}>
                    <Text style={styles.modalStatLabel}>STREAK</Text>
                    <Text style={[styles.modalStatValue, { color: '#005ac2' }]}>12d</Text>
                  </View>
                </View>

                <View style={styles.modalAccomplishments}>
                  <Text style={styles.modalAccLabel}>RECENT ACCOMPLISHMENTS</Text>
                  <View style={styles.modalAccBox}>
                    <View style={styles.modalAccIcon}>
                      <Icon name="forest" size={24} color="#006f64" />
                    </View>
                    <View>
                      <Text style={styles.modalAccTitle}>Tree Planting Champion</Text>
                      <Text style={styles.modalAccDesc}>Planted 15 saplings this month</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.modalActions}>
                  <TouchableOpacity style={styles.modalBtnPrimary} onPress={() => setModalVisible(false)}>
                    <Text style={styles.modalBtnPrimaryText}>Full Profile</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.modalBtnSecondary} onPress={() => setModalVisible(false)}>
                    <Text style={styles.modalBtnSecondaryText}>Close</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, height: 64, backgroundColor: 'rgba(248,249,250,0.8)', borderBottomWidth: 1, borderBottomColor: 'rgba(187,202,191,0.2)' },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  backBtn: { padding: 8 },
  logoText: { fontSize: 24, fontWeight: '800', color: '#006c49' },
  headerRight: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  avatar: { width: 32, height: 32, borderRadius: 16, overflow: 'hidden', borderWidth: 2, borderColor: '#10b981' },
  avatarImg: { width: '100%', height: '100%' },
  scrollContent: { paddingHorizontal: 24, paddingTop: 24, paddingBottom: 100 },
  tabsContainer: { marginBottom: 24 },
  tab: { paddingHorizontal: 16, paddingVertical: 8, borderRadius: 24, marginRight: 8, borderBottomWidth: 2, borderBottomColor: 'transparent' },
  tabActive: { backgroundColor: 'rgba(16,185,129,0.2)', borderBottomColor: '#006c49' },
  tabText: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 0.5 },
  tabTextActive: { color: '#00422b' },
  contentHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 },
  contentTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d' },
  contentSubtitle: { fontSize: 14, color: '#3c4a42' },
  addBtn: { flexDirection: 'row', alignItems: 'center', gap: 4, backgroundColor: '#006c49', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 24 },
  addBtnText: { fontSize: 12, fontWeight: '700', color: '#ffffff' },
  studentList: { gap: 12 },
  studentRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#ffffff', padding: 16, borderRadius: 8, borderWidth: 1, borderColor: 'rgba(187,202,191,0.3)' },
  studentRowLeft: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  studentAvatarWrap: { width: 48, height: 48, borderRadius: 24, borderWidth: 2, overflow: 'hidden' },
  studentAvatarImg: { width: '100%', height: '100%' },
  studentName: { fontSize: 18, fontWeight: '600', color: '#191c1d', marginBottom: 4 },
  badgeRow: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  badgeText: { fontSize: 12, fontWeight: '700', letterSpacing: 0.5 },
  studentRowRight: { flexDirection: 'row', alignItems: 'center', gap: 24 },
  progressWrap: { alignItems: 'flex-end', display: 'flex' },
  progressLabel: { fontSize: 10, fontWeight: '700', color: '#6c7a71', marginBottom: 4 },
  progressBarBg: { width: 96, height: 6, backgroundColor: '#edeeef', borderRadius: 3, overflow: 'hidden' },
  progressBarFill: { height: '100%', borderRadius: 3 },
  moreBtn: { padding: 8 },
  modalOverlay: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  modalBg: { ...StyleSheet.absoluteFill, backgroundColor: 'rgba(46,49,50,0.4)' },
  modalContent: { width: '100%', maxWidth: 400, backgroundColor: '#ffffff', borderRadius: 16, overflow: 'hidden', shadowColor: '#000', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.2, shadowRadius: 20 },
  modalHeaderBox: { backgroundColor: 'rgba(16,185,129,0.1)', padding: 24, alignItems: 'center', borderBottomWidth: 1, borderBottomColor: 'rgba(187,202,191,0.2)' },
  modalAvatarBox: { width: 80, height: 80, borderRadius: 40, borderWidth: 4, borderColor: '#ffffff', overflow: 'hidden', marginBottom: 16 },
  modalAvatarImg: { width: '100%', height: '100%' },
  modalName: { fontSize: 24, fontWeight: '600', color: '#191c1d' },
  modalBadge: { fontSize: 12, fontWeight: '700', color: '#006b5f', letterSpacing: 1, marginTop: 4 },
  modalBody: { padding: 24 },
  modalStatsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 24 },
  modalStatItem: { alignItems: 'center' },
  modalStatLabel: { fontSize: 10, fontWeight: '700', color: '#6c7a71', marginBottom: 4 },
  modalStatValue: { fontSize: 28, fontWeight: '700' },
  modalAccomplishments: { marginBottom: 24 },
  modalAccLabel: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 0.5, marginBottom: 12 },
  modalAccBox: { flexDirection: 'row', alignItems: 'center', gap: 16, backgroundColor: '#f3f4f5', padding: 12, borderRadius: 8 },
  modalAccIcon: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#6df5e1', alignItems: 'center', justifyContent: 'center' },
  modalAccTitle: { fontSize: 14, fontWeight: '600', color: '#191c1d' },
  modalAccDesc: { fontSize: 12, color: '#3c4a42' },
  modalActions: { flexDirection: 'row', gap: 16 },
  modalBtnPrimary: { flex: 1, paddingVertical: 12, backgroundColor: '#006c49', borderRadius: 24, alignItems: 'center' },
  modalBtnPrimaryText: { fontSize: 12, fontWeight: '700', color: '#ffffff' },
  modalBtnSecondary: { flex: 1, paddingVertical: 12, borderWidth: 1, borderColor: 'rgba(187,202,191,0.5)', borderRadius: 24, alignItems: 'center' },
  modalBtnSecondaryText: { fontSize: 12, fontWeight: '700', color: '#191c1d' },
});
