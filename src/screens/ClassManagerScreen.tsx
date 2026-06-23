import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ClassManagerScreen({ navigation }: any) {
  const [activeTab, setActiveTab] = useState('Overview');
  const [showDetails, setShowDetails] = useState(false);
  const [className, setClassName] = useState('10A');
  const [miniModalVisible, setMiniModalVisible] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<any>(null);

  const openMiniModal = (name: string, imageUri: string) => {
    setSelectedStudent({ name, imageUri });
    setMiniModalVisible(true);
  };

  if (showDetails) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => setShowDetails(false)}>
            <Icon name="arrow-back" size={24} color="#191c1d" />
          </TouchableOpacity>
          <Text style={styles.detailTitle}>Class {className}</Text>
        </View>

        <View style={styles.tabsContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {['Overview', 'Students', 'Leaderboard', 'Calendar', 'Analytics'].map((tab) => (
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

        <ScrollView contentContainerStyle={styles.scrollContent}>
          {activeTab === 'Overview' && (
            <View style={styles.tabOverview}>
              <View style={styles.overviewStatsRow}>
                <View style={[styles.statBox, { backgroundColor: 'rgba(16,185,129,0.1)', borderColor: 'rgba(0,108,73,0.1)' }]}>
                  <Icon name="eco" size={24} color="#006c49" style={styles.statIcon} />
                  <Text style={styles.statLabel}>CO2 Saved</Text>
                  <Text style={[styles.statValue, { color: '#006c49' }]}>124.5 kg</Text>
                </View>
                <View style={[styles.statBox, { backgroundColor: 'rgba(113,161,255,0.1)', borderColor: 'rgba(0,90,194,0.1)' }]}>
                  <Icon name="water-drop" size={24} color="#005ac2" style={styles.statIcon} />
                  <Text style={styles.statLabel}>Water Preserved</Text>
                  <Text style={[styles.statValue, { color: '#005ac2' }]}>4,200 L</Text>
                </View>
                <View style={[styles.statBox, { backgroundColor: 'rgba(109,245,225,0.1)', borderColor: 'rgba(0,107,95,0.1)' }]}>
                  <Icon name="recycling" size={24} color="#006b5f" style={styles.statIcon} />
                  <Text style={styles.statLabel}>Waste Diverted</Text>
                  <Text style={[styles.statValue, { color: '#006b5f' }]}>82.1 kg</Text>
                </View>
              </View>

              <View style={styles.velocityCard}>
                <Text style={styles.velocityTitle}>Class Velocity</Text>
                <View style={styles.velocityChart}>
                  <View style={styles.barWrap}><View style={[styles.bar, { height: '40%', backgroundColor: 'rgba(16,185,129,0.2)' }]} /></View>
                  <View style={styles.barWrap}><View style={[styles.bar, { height: '60%', backgroundColor: 'rgba(16,185,129,0.2)' }]} /></View>
                  <View style={styles.barWrap}><View style={[styles.bar, { height: '55%', backgroundColor: 'rgba(16,185,129,0.2)' }]} /></View>
                  <View style={styles.barWrap}><View style={[styles.bar, { height: '75%', backgroundColor: 'rgba(16,185,129,0.4)' }]} /></View>
                  <View style={styles.barWrap}><View style={[styles.bar, { height: '85%', backgroundColor: 'rgba(16,185,129,0.4)' }]} /></View>
                  <View style={styles.barWrap}><View style={[styles.bar, { height: '95%', backgroundColor: '#006c49' }]} /></View>
                </View>
                <View style={styles.velocityLabels}>
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => <Text key={d} style={styles.vLabel}>{d}</Text>)}
                </View>
              </View>
            </View>
          )}

          {activeTab === 'Students' && (
            <View style={styles.tabStudents}>
              <View style={styles.studentsHeader}>
                <Text style={styles.studentsCount}>28 Students Enrolled</Text>
                <TouchableOpacity style={styles.addBtn}>
                  <Icon name="person-add" size={16} color="#ffffff" />
                  <Text style={styles.addBtnText}>Add Student</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.studentsTable}>
                <View style={styles.tableHeader}>
                  <Text style={[styles.th, { flex: 2 }]}>Name</Text>
                  <Text style={[styles.th, { flex: 1.5 }]}>Total XP</Text>
                  <Text style={[styles.th, { flex: 1 }]}>Streak</Text>
                  <Text style={[styles.th, { width: 60, textAlign: 'center' }]}>Action</Text>
                </View>

                <View style={styles.tr}>
                  <View style={[{ flex: 2, flexDirection: 'row', alignItems: 'center', gap: 8 }]}>
                    <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRXeigcuoFBjluvtu8A7sZUnzK7b1IL3MjvB2xXqDea9v8PjSofS-gdkCWIQZcnOtyjAhlt5Bep0EvgMOPTv-AQScLDCzZgd4P-29tqxQq66Q3f9aNIE3uJPUo70GA_e5Qp7kPAFYGSBVFGHcWwsEbSg9oN7qsTLAyb123cFJq3lp25bEUvwYQ2m8dFxeGan_79posTznbq3kaFrSzV8qwgG-StKSKnzOYwuEzH7oJc_zl0v-oqMDm60hIBlHzflX3lCll_q0FApfu' }} style={styles.trAvatar} />
                    <Text style={styles.trName}>Emma T.</Text>
                  </View>
                  <Text style={[styles.td, { flex: 1.5 }]}>12,450 XP</Text>
                  <View style={[{ flex: 1, flexDirection: 'row', alignItems: 'center', gap: 4 }]}>
                    <Icon name="local-fire-department" size={16} color="#f97316" />
                    <Text style={{ fontWeight: 'bold', color: '#f97316' }}>14</Text>
                  </View>
                  <TouchableOpacity style={[{ width: 60, alignItems: 'center' }]} onPress={() => openMiniModal('Emma T.', 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRXeigcuoFBjluvtu8A7sZUnzK7b1IL3MjvB2xXqDea9v8PjSofS-gdkCWIQZcnOtyjAhlt5Bep0EvgMOPTv-AQScLDCzZgd4P-29tqxQq66Q3f9aNIE3uJPUo70GA_e5Qp7kPAFYGSBVFGHcWwsEbSg9oN7qsTLAyb123cFJq3lp25bEUvwYQ2m8dFxeGan_79posTznbq3kaFrSzV8qwgG-StKSKnzOYwuEzH7oJc_zl0v-oqMDm60hIBlHzflX3lCll_q0FApfu')}>
                    <Text style={styles.trAction}>Details</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.tr}>
                  <View style={[{ flex: 2, flexDirection: 'row', alignItems: 'center', gap: 8 }]}>
                    <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7ZUfs4v7zh3i1UaWXOZOqkimKJYnFDrPuYVYlEVpJKAXr1Ysi890DURF5_KoxQVcdBtwKwidxH8N7RjyGuOl2Ml3zUMh2z3N28Zc3fFeYU6b2zL2utEc39kS3OSFYqppguYghy_zMbVJf2meHIATQry8RBrJRWpYJL4E_JPp983fJMptLaBV4Q56_b5iqfBPpwlD5SnuXlho7gRY-EYqcwSw5SrMk_5-wLxk3f0G0npC8gTphoklqfIiVLQkVbW-3bvywht2zT3iu' }} style={styles.trAvatar} />
                    <Text style={styles.trName}>Liam R.</Text>
                  </View>
                  <Text style={[styles.td, { flex: 1.5 }]}>9,820 XP</Text>
                  <View style={[{ flex: 1, flexDirection: 'row', alignItems: 'center', gap: 4 }]}>
                    <Icon name="local-fire-department" size={16} color="#f97316" />
                    <Text style={{ fontWeight: 'bold', color: '#f97316' }}>8</Text>
                  </View>
                  <TouchableOpacity style={[{ width: 60, alignItems: 'center' }]} onPress={() => openMiniModal('Liam R.', 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7ZUfs4v7zh3i1UaWXOZOqkimKJYnFDrPuYVYlEVpJKAXr1Ysi890DURF5_KoxQVcdBtwKwidxH8N7RjyGuOl2Ml3zUMh2z3N28Zc3fFeYU6b2zL2utEc39kS3OSFYqppguYghy_zMbVJf2meHIATQry8RBrJRWpYJL4E_JPp983fJMptLaBV4Q56_b5iqfBPpwlD5SnuXlho7gRY-EYqcwSw5SrMk_5-wLxk3f0G0npC8gTphoklqfIiVLQkVbW-3bvywht2zT3iu')}>
                    <Text style={styles.trAction}>Details</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}

          {activeTab === 'Leaderboard' && (
            <View style={styles.tabLeaderboard}>
              <View style={styles.leaderboardCard}>
                <View style={styles.lbHeader}>
                  <Text style={styles.lbRank}>1</Text>
                  <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhkuSuwnJ5EV-JpV2zmpZ__9yJy6BjRGHAuP5XUlIpbTeZB8h0fQ4KAU7DulMQV14ezY7Lpi0bz0qyq75N5yOJdcmepIzp2WHzzKLpSkaIEg-wr4OaBiwF23tQ1y_mr7LHWm7BpRf0dM7bwZCQ_KvrQHZa3ts1v84Es7zHqregPbhaAZ9kgH4iGEISH089ay2Rr2VDRp133D6kOjW-m1YBDEDcCrMcWfdJChisSCnTg8gG0AMLK-g3DeemiXs_tzxEeeiH3juHDLlB' }} style={styles.lbAvatar} />
                  <View style={styles.lbInfo}>
                    <Text style={styles.lbName}>Ava Sterling</Text>
                    <Text style={styles.lbLevel}>Eco Warrior Level 12</Text>
                  </View>
                  <View style={styles.lbScore}>
                    <Text style={styles.lbScoreVal}>2,450</Text>
                    <Text style={styles.lbScoreLabel}>XP THIS WEEK</Text>
                  </View>
                </View>
              </View>

              <View style={[styles.leaderboardCard, { backgroundColor: '#ffffff', borderColor: 'rgba(187,202,191,0.3)', borderLeftWidth: 1 }]}>
                <View style={styles.lbHeader}>
                  <Text style={[styles.lbRank, { color: '#6c7a71' }]}>2</Text>
                  <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7XKVcADCCMgSsv357YjyuIdVWQMlQ8f7MJyLNGDSQkdqMPBvwBT-qffJl9WJ2Z2Rol3nLZAfHm0OVrSqwkerSHnjiomAuq_sE4nnIEk6vKGZFSLysFiAfic53SJPqcbY48Rx6sR0SpU5nwzjsvzwfKhEJUuqsn4G3MI5Jp1gRa4ynD1HaIMKQfCZMLWDfd2MjBTUiTcELQ-fJYpjS-T8LO49d3Ap4x3oMdvN3qUpuwShPFB3R_lQEKJV0cfPNPDUGMOP7B_xF2pPL' }} style={styles.lbAvatar} />
                  <View style={styles.lbInfo}>
                    <Text style={styles.lbName}>Marcus Chen</Text>
                    <Text style={styles.lbLevel}>Sustainable Leader Level 9</Text>
                  </View>
                  <View style={styles.lbScore}>
                    <Text style={[styles.lbScoreVal, { color: '#191c1d' }]}>1,920</Text>
                    <Text style={styles.lbScoreLabel}>XP THIS WEEK</Text>
                  </View>
                </View>
              </View>
            </View>
          )}

          {(activeTab === 'Calendar' || activeTab === 'Analytics') && (
            <View style={styles.placeholderTab}>
              <Icon name={activeTab === 'Calendar' ? "calendar-month" : "analytics"} size={64} color="#bbcabf" style={{ marginBottom: 16 }} />
              <Text style={styles.placeholderTitle}>{activeTab === 'Calendar' ? 'No upcoming events' : 'Analytics Overview'}</Text>
              <Text style={styles.placeholderDesc}>More content coming soon.</Text>
            </View>
          )}
        </ScrollView>

        {/* Modal */}
        <Modal visible={miniModalVisible} transparent={true} animationType="fade">
          <View style={styles.modalOverlay}>
            <TouchableOpacity style={styles.modalBg} onPress={() => setMiniModalVisible(false)} />
            {selectedStudent && (
              <View style={styles.modalContent}>
                <View style={styles.modalHeaderBox}>
                  <Image source={{ uri: selectedStudent.imageUri }} style={styles.modalAvatar} />
                  <View>
                    <Text style={styles.modalName}>{selectedStudent.name}</Text>
                    <Text style={styles.modalBadge}>Top 5% Performer</Text>
                  </View>
                </View>

                <View style={styles.modalStats}>
                  <View style={styles.modalStatRow}>
                    <Text style={styles.modalStatLabel}>Recent Action</Text>
                    <Text style={styles.modalStatValue}>Recycled 4kg Plastic</Text>
                  </View>
                  <View style={styles.modalStatRow}>
                    <Text style={styles.modalStatLabel}>Current Rank</Text>
                    <Text style={styles.modalStatValue}>#3 in Class</Text>
                  </View>
                </View>

                <View style={styles.modalActions}>
                  <TouchableOpacity style={styles.modalBtnSec} onPress={() => setMiniModalVisible(false)}>
                    <Text style={styles.modalBtnSecText}>Close</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.modalBtnPri} onPress={() => setMiniModalVisible(false)}>
                    <Text style={styles.modalBtnPriText}>Send Kudos</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        </Modal>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topNav}>
        <Text style={styles.logoText}>ChonX</Text>
        <View style={styles.navRight}>
          <TouchableOpacity style={styles.navIcon}><Icon name="notifications" size={24} color="#006c49" /></TouchableOpacity>
          <View style={styles.userAvatar}>
            <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNsm9ujvFd0Z0_8BrO0LDzpuI5QRJHpJ3As0gcZZaG8RFKumqAzDysiBHR0fevOa-LEhrGEaVbkDvh6KpI-ilhIRyj3tqBJUf8nMMlY2HM-T0EIowl3n3Rogh7DOno7evZdhz1YxTgZ5gMcwxPPAKPNO-L2AnlS9qIQnq2PehCec7kCjyr_Ow4nzi1DXm4lrsJV3urxyeMO4vRlQJtMsWVXD8BbR7fQmu8gHMyNbFEl3Dt-tYPC5UHZ7H1vsvF5so0xcFXrmSeSFpv' }} style={styles.avatarImg} />
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.pageHeader}>
          <View>
            <Text style={styles.pageTitle}>Class Manager</Text>
            <Text style={styles.pageSubtitle}>Empower your students and track environmental impact.</Text>
          </View>
          <View style={styles.searchBox}>
            <Icon name="search" size={20} color="#6c7a71" style={styles.searchIcon} />
            <TextInput style={styles.searchInput} placeholder="Search classes..." placeholderTextColor="#bbcabf" />
          </View>
        </View>

        <View style={styles.grid}>
          {/* Card 1 */}
          <TouchableOpacity style={styles.classCard} onPress={() => { setClassName('10A'); setShowDetails(true); }}>
            <View style={styles.cardHeader}>
              <View style={styles.cardIconBox}>
                <Text style={styles.cardIconText}>10A</Text>
              </View>
              <View style={styles.cardTitleBox}>
                <Text style={styles.cardSubtitle}>Biology Honors</Text>
                <Text style={styles.cardTitle}>Advanced Eco-Lab</Text>
              </View>
              <Icon name="more-vert" size={20} color="#6c7a71" />
            </View>

            <View style={styles.cardProgressWrap}>
              <View style={styles.progressRow}>
                <Text style={styles.progressLabel}>Participation Rate</Text>
                <Text style={styles.progressValue}>92%</Text>
              </View>
              <View style={styles.progressBarBg}>
                <View style={[styles.progressBarFill, { width: '92%' }]} />
              </View>
            </View>

            <View style={styles.cardFooter}>
              <View style={styles.avatarStack}>
                <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCd7SEKY47olYIR8zgvN8tw1OwUtpPcVCvnGJdU2L1WCvsJGwtrgB-ifzs8dEXyxxCgUm_2xyFiN5qd75aIsApkKzo3ADgOYqgjkAxRT-HioA3qAXG0CU79YYJvR_ItdgALj1OITwvLSTrKjwo5FgpMDkZZiBKoj4lIn55bZQhWUK22FfIMjytikuKTMhmd7La-DRLrSDs2wdM8PG7twJjxun8qv6FWQ5SzAvw_L9T3rLItKd72IoKMaODOwx9IlK5D4XQGkoEpJJ5h' }} style={styles.stackAvatar} />
                <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYX9jWB9_8yo81QYmeh5FRGeQCSGQuIhoJy219FpVFMzePWacZt23CIw041s5ZiceCeSblINe6oH-T6HOb9c5Czvm2YUI6zJL4_zCw_8C4700PqKMtEas0dKR9ZkiwQxHnwBb4Ho0oZCC9BGoKhcuAnmISXVUZao4jpjurkaDFv5wTvTsxLyvABBwsCC4YlhS-GOGWBJSi0TPE2iCKc_aWWJL5cZtZRHOJoJUDd5A0FGkwOeMANBApjXmZsVZlgpMd9vcGXPDhqyTe' }} style={[styles.stackAvatar, { marginLeft: -12 }]} />
                <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvAW90WR9aTC4o9tYxlN2Nf2lBOUZI5IC6cYfO1lvcoX75ffZDyT19AMEHc_rVQKdUAvIqej8la6Kh7OIrHB7USYnMVmavrPJt_PY3CVTCICm5FYVHXfRRYYDI8s9W4NTN9NvEZINnj1kSBQNdLQKuDJtVjSmb3P7GWyF_TgsiN6HCKrYrKyYLGHGnIlvBCy9baZqTCoQBulLFdlLtmO6Dmq8IxjPTzGvFjEe5CwoRkrHcI7we002MTetmBvr31r1rnzB0dA-t0upu' }} style={[styles.stackAvatar, { marginLeft: -12 }]} />
                <View style={[styles.stackAvatarMore, { marginLeft: -12 }]}><Text style={styles.stackAvatarMoreText}>+24</Text></View>
              </View>
              <Text style={styles.xpText}>1,240 XP Today</Text>
            </View>
          </TouchableOpacity>

          {/* Card 2 */}
          <TouchableOpacity style={styles.classCard} onPress={() => { setClassName('9B'); setShowDetails(true); }}>
            <View style={styles.cardHeader}>
              <View style={[styles.cardIconBox, { backgroundColor: 'rgba(113,161,255,0.1)' }]}>
                <Text style={[styles.cardIconText, { color: '#005ac2' }]}>9B</Text>
              </View>
              <View style={styles.cardTitleBox}>
                <Text style={styles.cardSubtitle}>General Science</Text>
                <Text style={styles.cardTitle}>Impact Studies</Text>
              </View>
              <Icon name="more-vert" size={20} color="#6c7a71" />
            </View>

            <View style={styles.cardProgressWrap}>
              <View style={styles.progressRow}>
                <Text style={styles.progressLabel}>Participation Rate</Text>
                <Text style={[styles.progressValue, { color: '#005ac2' }]}>78%</Text>
              </View>
              <View style={styles.progressBarBg}>
                <View style={[styles.progressBarFill, { width: '78%', backgroundColor: '#71a1ff' }]} />
              </View>
            </View>

            <View style={styles.cardFooter}>
              <View style={styles.avatarStack}>
                <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAe0JS5_UwN9NvjxnMQ6X5zLKqXILLXEO2hMnF1bNl9FpJGRVVrI3pfoARrZMhGgGvtQRds1dMHneywEfPDfoIB-x6LeJlH_GwyUTaO8M0S5ItIvjf1mG1ebhBRX0JMD-JCSUK1NBIwUkL6KICjYuMQryFNAALCH5SMzi6grzeev3bbpmT4hvV12iPaF2NA4bm2NlAvt8V-mfgIw1b4HWhw48-QL2bnTJayb-LvKc0gJx3yX2ABVAv8nuU-iXhBo9UvsE6RTYbcw8Vt' }} style={styles.stackAvatar} />
                <View style={[styles.stackAvatarMore, { marginLeft: -12 }]}><Text style={styles.stackAvatarMoreText}>+18</Text></View>
              </View>
              <Text style={styles.xpText}>850 XP Today</Text>
            </View>
          </TouchableOpacity>

          {/* Add New Class */}
          <TouchableOpacity style={styles.addClassCard}>
            <View style={styles.addIconCircle}>
              <Icon name="add" size={24} color="#6c7a71" />
            </View>
            <Text style={styles.addText}>Add New Class</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* FAB */}
      <TouchableOpacity style={styles.fab}>
        <Icon name="add" size={24} color="#ffffff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  topNav: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, height: 64, backgroundColor: 'rgba(248,249,250,0.8)', borderBottomWidth: 1, borderBottomColor: 'rgba(187,202,191,0.2)' },
  logoText: { fontSize: 24, fontWeight: '800', color: '#006c49' },
  navRight: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  navIcon: { padding: 8 },
  userAvatar: { width: 40, height: 40, borderRadius: 20, overflow: 'hidden', borderWidth: 2, borderColor: '#ffffff', backgroundColor: '#10b981' },
  avatarImg: { width: '100%', height: '100%' },
  scrollContent: { paddingHorizontal: 24, paddingTop: 24, paddingBottom: 100 },
  pageHeader: { flexDirection: 'column', gap: 16, marginBottom: 32 },
  pageTitle: { fontSize: 32, fontWeight: '700', color: '#191c1d' },
  pageSubtitle: { fontSize: 16, color: '#3c4a42', marginTop: 4 },
  searchBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f3f4f5', borderRadius: 12, paddingHorizontal: 16, height: 48 },
  searchIcon: { marginRight: 8 },
  searchInput: { flex: 1, fontSize: 16, color: '#191c1d' },
  grid: { flexDirection: 'column', gap: 24 },
  classCard: { backgroundColor: '#ffffff', padding: 24, borderRadius: 16, borderWidth: 1, borderColor: 'rgba(187,202,191,0.3)', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 8 },
  cardHeader: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 24 },
  cardIconBox: { width: 56, height: 56, borderRadius: 16, backgroundColor: 'rgba(16,185,129,0.1)', alignItems: 'center', justifyContent: 'center', marginRight: 16 },
  cardIconText: { fontSize: 24, fontWeight: '700', color: '#006c49' },
  cardTitleBox: { flex: 1 },
  cardSubtitle: { fontSize: 12, fontWeight: '700', color: '#6c7a71', textTransform: 'uppercase', letterSpacing: 0.5 },
  cardTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d', marginTop: 4 },
  cardProgressWrap: { marginBottom: 24 },
  progressRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  progressLabel: { fontSize: 12, fontWeight: '700', color: '#6c7a71', textTransform: 'uppercase' },
  progressValue: { fontSize: 12, fontWeight: '700', color: '#006c49' },
  progressBarBg: { width: '100%', height: 8, backgroundColor: '#e7e8e9', borderRadius: 4, overflow: 'hidden' },
  progressBarFill: { height: '100%', backgroundColor: '#10b981', borderRadius: 4 },
  cardFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  avatarStack: { flexDirection: 'row', alignItems: 'center' },
  stackAvatar: { width: 32, height: 32, borderRadius: 16, borderWidth: 2, borderColor: '#ffffff' },
  stackAvatarMore: { width: 32, height: 32, borderRadius: 16, borderWidth: 2, borderColor: '#ffffff', backgroundColor: '#e7e8e9', alignItems: 'center', justifyContent: 'center' },
  stackAvatarMoreText: { fontSize: 10, fontWeight: '700', color: '#6c7a71' },
  xpText: { fontSize: 12, fontWeight: '700', color: '#6c7a71', textTransform: 'uppercase' },
  addClassCard: { backgroundColor: '#f3f4f5', padding: 24, borderRadius: 16, borderWidth: 2, borderColor: '#bbcabf', borderStyle: 'dashed', alignItems: 'center', justifyContent: 'center', height: 200 },
  addIconCircle: { width: 48, height: 48, borderRadius: 24, backgroundColor: '#e1e3e4', alignItems: 'center', justifyContent: 'center', marginBottom: 12 },
  addText: { fontSize: 12, fontWeight: '700', color: '#6c7a71', textTransform: 'uppercase', letterSpacing: 0.5 },
  fab: { position: 'absolute', bottom: 24, right: 24, width: 56, height: 56, borderRadius: 28, backgroundColor: '#006c49', alignItems: 'center', justifyContent: 'center', shadowColor: '#006c49', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8, zIndex: 10 },
  
  // Details View
  header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 24, height: 64, backgroundColor: 'rgba(248,249,250,0.8)' },
  backBtn: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#f3f4f5', alignItems: 'center', justifyContent: 'center', marginRight: 16 },
  detailTitle: { fontSize: 32, fontWeight: '700', color: '#191c1d' },
  tabsContainer: { borderBottomWidth: 1, borderBottomColor: 'rgba(187,202,191,0.3)', marginBottom: 24 },
  tab: { paddingHorizontal: 24, paddingVertical: 16, borderBottomWidth: 3, borderBottomColor: 'transparent' },
  tabActive: { borderBottomColor: '#006c49' },
  tabText: { fontSize: 12, fontWeight: '700', color: '#6c7a71', letterSpacing: 0.5 },
  tabTextActive: { color: '#006c49' },
  
  tabOverview: { gap: 24 },
  overviewStatsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 16 },
  statBox: { flex: 1, minWidth: 100, padding: 24, borderRadius: 16, borderWidth: 1 },
  statIcon: { marginBottom: 12 },
  statLabel: { fontSize: 12, fontWeight: '700', color: '#6c7a71', textTransform: 'uppercase', marginBottom: 4 },
  statValue: { fontSize: 28, fontWeight: '700' },
  velocityCard: { backgroundColor: '#ffffff', padding: 24, borderRadius: 16, borderWidth: 1, borderColor: 'rgba(187,202,191,0.3)' },
  velocityTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d', marginBottom: 24 },
  velocityChart: { height: 256, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', gap: 8, paddingHorizontal: 8 },
  barWrap: { flex: 1, height: '100%', justifyContent: 'flex-end' },
  bar: { width: '100%', borderTopLeftRadius: 8, borderTopRightRadius: 8 },
  velocityLabels: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 12, paddingHorizontal: 8 },
  vLabel: { fontSize: 12, fontWeight: '700', color: '#6c7a71', textTransform: 'uppercase' },

  tabStudents: { gap: 16 },
  studentsHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  studentsCount: { fontSize: 12, fontWeight: '700', color: '#6c7a71', textTransform: 'uppercase' },
  addBtn: { flexDirection: 'row', alignItems: 'center', gap: 4, backgroundColor: '#006c49', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 12 },
  addBtnText: { fontSize: 12, fontWeight: '700', color: '#ffffff' },
  studentsTable: { backgroundColor: '#ffffff', borderRadius: 16, borderWidth: 1, borderColor: 'rgba(187,202,191,0.3)', overflow: 'hidden' },
  tableHeader: { flexDirection: 'row', backgroundColor: '#f3f4f5', paddingHorizontal: 24, paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: 'rgba(187,202,191,0.3)' },
  th: { fontSize: 12, fontWeight: '700', color: '#6c7a71', textTransform: 'uppercase' },
  tr: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 24, paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: 'rgba(187,202,191,0.3)' },
  td: { fontSize: 16, color: '#191c1d' },
  trAvatar: { width: 32, height: 32, borderRadius: 16 },
  trName: { fontWeight: '700' },
  trAction: { fontSize: 12, fontWeight: '700', color: '#006c49', textTransform: 'uppercase' },

  tabLeaderboard: { gap: 16, flexDirection: 'row', justifyContent: 'center' },
  leaderboardCard: { flex: 1, maxWidth: 400, backgroundColor: 'rgba(16,185,129,0.1)', padding: 24, borderRadius: 16, borderLeftWidth: 4, borderLeftColor: '#006c49' },
  lbHeader: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  lbRank: { width: 32, fontSize: 24, fontWeight: '600', color: '#006c49' },
  lbAvatar: { width: 48, height: 48, borderRadius: 24, borderWidth: 4, borderColor: 'rgba(16,185,129,0.2)' },
  lbInfo: { flex: 1 },
  lbName: { fontSize: 16, fontWeight: '700', color: '#191c1d' },
  lbLevel: { fontSize: 12, fontWeight: '700', color: '#6c7a71', textTransform: 'uppercase' },
  lbScore: { alignItems: 'flex-end' },
  lbScoreVal: { fontSize: 24, fontWeight: '600', color: '#006c49' },
  lbScoreLabel: { fontSize: 10, fontWeight: '700', color: '#6c7a71', textTransform: 'uppercase', letterSpacing: 1 },

  placeholderTab: { backgroundColor: '#ffffff', borderRadius: 16, borderWidth: 1, borderColor: 'rgba(187,202,191,0.3)', padding: 40, alignItems: 'center', justifyContent: 'center', minHeight: 300 },
  placeholderTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d', marginBottom: 8 },
  placeholderDesc: { fontSize: 16, color: '#6c7a71' },

  // Mini Modal
  modalOverlay: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  modalBg: { ...StyleSheet.absoluteFill, backgroundColor: 'rgba(0,0,0,0.4)' },
  modalContent: { width: '100%', maxWidth: 360, backgroundColor: '#ffffff', borderRadius: 16, padding: 24, shadowColor: '#000', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.25, shadowRadius: 20 },
  modalHeaderBox: { flexDirection: 'row', alignItems: 'center', gap: 16, marginBottom: 24 },
  modalAvatar: { width: 64, height: 64, borderRadius: 16 },
  modalName: { fontSize: 24, fontWeight: '600', color: '#191c1d' },
  modalBadge: { fontSize: 12, fontWeight: '700', color: '#006c49', textTransform: 'uppercase' },
  modalStats: { gap: 12, marginBottom: 24 },
  modalStatRow: { flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: 'rgba(187,202,191,0.2)', paddingBottom: 8 },
  modalStatLabel: { fontSize: 12, fontWeight: '700', color: '#6c7a71', textTransform: 'uppercase' },
  modalStatValue: { fontSize: 16, fontWeight: '700', color: '#191c1d' },
  modalActions: { flexDirection: 'row', gap: 12 },
  modalBtnSec: { flex: 1, backgroundColor: '#f3f4f5', paddingVertical: 12, borderRadius: 12, alignItems: 'center' },
  modalBtnSecText: { fontSize: 12, fontWeight: '700', color: '#191c1d', textTransform: 'uppercase' },
  modalBtnPri: { flex: 1, backgroundColor: '#006c49', paddingVertical: 12, borderRadius: 12, alignItems: 'center' },
  modalBtnPriText: { fontSize: 12, fontWeight: '700', color: '#ffffff', textTransform: 'uppercase' },
});
