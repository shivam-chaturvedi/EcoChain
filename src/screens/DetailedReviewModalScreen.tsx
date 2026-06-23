import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  Dimensions,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

export default function DetailedReviewModalScreen({ navigation }: any) {
  const [modalVisible, setModalVisible] = useState(false);
  const [rejectFormVisible, setRejectFormVisible] = useState(false);
  const [zoomImg, setZoomImg] = useState<string | null>(null);

  const images = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuA7GhUixBEmUUuyXShCqQF4MfGittwDP1sII_yzTHKVXiZGcVrKh85rH1Vr3cyas707GQMXRkZyZ6VkIIn5sAqgT54iI1pucEMcQ-UVY7Ox039gN3xPDQUwRFHi5Wa1g3rd7wBt7Zy-X_vpCPgrDVm9W6i0JQ30IlL0YYHQgolLnEYOMY7qjvOBCFdK_HTQBaKuy_Y18rEf_po4vxrG6fUby3aI1XbvnRx1FoPFrrFwf4Tbjm1xLODzRlRosx18FEOCfWknDdC-E40l',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAqjMGiuJs9jKd2hSG0KSwLaOQAgbyo7N6-3nvyQ_WUdXcfb6r6lROvBDBferH8NxfswuA2j9qzr-mkFt6zeO8iXvhC1v2dJJPI-AHWZfMSVqPIUBKaTHg6960tRV3tovkX9zCC1wMOywWZsNy86TQ0rGUC3zVw3ZO-Uvm3zFBDhjSKgrgiegfE3O-zn3WwDq4zYcBg5sdZQxNvDA1FwP2l3-eaZhMdcYxSjMEZ4zFi3gqN4ISOKEBHMwu8d89DfToJUuTL2_hAd2d2'
  ];

  const handleApprove = () => {
    Alert.alert('Submission Approved! +250 XP awarded to Leo Chen.');
    setModalVisible(false);
  };

  const handleRejectConfirm = () => {
    Alert.alert('Submission Rejected. Feedback has been sent to the student.');
    setModalVisible(false);
    setRejectFormVisible(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Top Nav */}
      <View style={styles.topNav}>
        <Text style={styles.logoText}>ChonX</Text>
        <View style={styles.navRight}>
          <TouchableOpacity style={styles.navIcon}><Icon name="notifications" size={24} color="#006c49" /></TouchableOpacity>
          <View style={styles.userAvatar}>
            <Icon name="person" size={20} color="#002113" />
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.mainContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Review Queue</Text>
          <Text style={styles.subtitle}>Pending eco-action submissions from Emerald Academy.</Text>
        </View>

        {/* Mock Card */}
        <TouchableOpacity style={styles.mockCard} onPress={() => setModalVisible(true)}>
          <View style={styles.cardImgWrap}>
            <Image
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArBAwwzBnLeuzHBZHoGn5pkuErM4zF-qygYlZ8kgp3dF5D-RUdxku2-89zjR28PgNJeXMUi1iiIvLgf9uBU0-H6U75dV0hewcaAhlCxcaAeSJTQ71pHWXu_g0MdQPWqTz2ALTIdgMIdfpkk5La1sQ9Pposrcn58ksGbDkhMJFtS0ug-N5wsK-cVUWpJeBJIOSL0AynfGgbhGXILTcflAo5ESTk54_mvWt81PxR7h17xQpXF9LtVfBvDdGBfJiLnl3m1eGfPGJzPqXr' }}
              style={styles.cardImg}
            />
            <View style={styles.cardBadge}>
              <Text style={styles.cardBadgeText}>RECYCLING</Text>
            </View>
          </View>
          <Text style={styles.cardTitle}>School Recycling Drive</Text>
          <Text style={styles.cardSub}>Submitted by Leo Chen • Grade 11</Text>
          <View style={styles.cardStatus}>
            <View style={styles.statusIconBox}>
              <Icon name="eco" size={18} color="#006f64" />
            </View>
            <Text style={styles.statusText}>AWAITING REVIEW</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>

      {/* BOTTOM NAV */}
      <View style={styles.bottomNav}>
        <View style={styles.navItem}>
          <Icon name="home" size={24} color="#3c4a42" />
          <Text style={styles.navLabel}>Home</Text>
        </View>
        <View style={styles.navItemActive}>
          <Icon name="eco" size={24} color="#00422b" />
          <Text style={styles.navLabelActive}>Impact</Text>
        </View>
        <View style={styles.navItem}>
          <Icon name="military-tech" size={24} color="#3c4a42" />
          <Text style={styles.navLabel}>Arena</Text>
        </View>
        <View style={styles.navItem}>
          <Icon name="person" size={24} color="#3c4a42" />
          <Text style={styles.navLabel}>Profile</Text>
        </View>
      </View>

      {/* Review Modal */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeBtn} onPress={() => setModalVisible(false)}>
              <Icon name="close" size={24} color="#3c4a42" />
            </TouchableOpacity>

            <ScrollView contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
              {/* Image Carousel */}
              <View style={styles.carouselWrap}>
                <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
                  {images.map((img, i) => (
                    <TouchableOpacity key={i} activeOpacity={0.9} onPress={() => setZoomImg(img)}>
                      <Image source={{ uri: img }} style={styles.carouselImg} />
                    </TouchableOpacity>
                  ))}
                </ScrollView>
                <View style={styles.carouselDots}>
                  <View style={[styles.dot, styles.dotActive]} />
                  <View style={styles.dot} />
                </View>
              </View>

              <View style={styles.modalInfo}>
                {/* Student Info */}
                <View style={styles.studentHeader}>
                  <View style={styles.studentHeaderLeft}>
                    <Image
                      source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUZQ20TPZ9iMoy-V9bqJl9-azqWobQwthpW_uX2Krk1MJv15oHM36BrJPwcILOyKPuOp1UwpODIbL8YwKjsT3Giyw2YFhBTB5hkYUgtBYt434n3vYk7oylr5rTkcN1lffHMtWUVVz01jPD-jV_2daK6FDL6bdnV7E51CN_45goS50N_GbNYkOoefgk1FY7f0Y8MRS6kgC33x-Z1RNXVVk5_cVoHtWoRnbqNGYt7BJ9aiRF2vrKKd48DOMzjJ1Zw1CunFjQdFkWF1MI' }}
                      style={styles.studentAvatar}
                    />
                    <View>
                      <Text style={styles.studentName}>Leo Chen</Text>
                      <Text style={styles.studentGrade}>Grade 11 • Emerald Academy</Text>
                    </View>
                  </View>
                  <View style={{ alignItems: 'flex-end' }}>
                    <Text style={styles.catLabel}>CATEGORY</Text>
                    <Text style={styles.catValue}>Recycling</Text>
                  </View>
                </View>

                {/* Note */}
                <View style={styles.noteBox}>
                  <Text style={styles.noteLabel}>SUBMISSION NOTE</Text>
                  <Text style={styles.noteText}>
                    Today we organized a full school-wide recycling drive in the main courtyard. We collected over 40kg of paper and 20kg of plastic. Our team of 5 worked for 2 hours during the afternoon break to ensure everything was sorted correctly for the municipal pickup. We even found a way to reuse old cardboard for new art projects!
                  </Text>
                </View>

                {/* XP Reward Preview */}
                <View style={styles.rewardBox}>
                  <View style={styles.rewardLeft}>
                    <View style={styles.rewardIconCircle}>
                      <Icon name="bolt" size={24} color="#ffffff" />
                    </View>
                    <View>
                      <Text style={styles.rewardLabel}>POTENTIAL REWARD</Text>
                      <Text style={styles.rewardValue}>+250 XP & "Eco-Leader" Badge</Text>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>

            {/* Modal Actions */}
            <View style={styles.modalActions}>
              <TouchableOpacity style={styles.btnReject} onPress={() => setRejectFormVisible(true)}>
                <LinearGradient colors={['#ef4444', '#dc2626']} style={styles.gradientBtn}>
                  <Icon name="close" size={20} color="#ffffff" />
                  <Text style={styles.btnText}>Reject</Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnApprove} onPress={handleApprove}>
                <LinearGradient colors={['#10b981', '#0d9488']} style={styles.gradientBtn}>
                  <Icon name="check-circle" size={20} color="#ffffff" />
                  <Text style={styles.btnText}>Approve Action</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>

            {/* Rejection Form Overlay */}
            {rejectFormVisible && (
              <View style={styles.rejectForm}>
                <View style={styles.rejectHeader}>
                  <Text style={styles.rejectTitle}>Reason for Rejection</Text>
                  <TouchableOpacity onPress={() => setRejectFormVisible(false)}>
                    <Icon name="expand-more" size={24} color="#3c4a42" />
                  </TouchableOpacity>
                </View>
                <View style={styles.rejectOptions}>
                  {['Insufficient Evidence', 'Wrong Category', 'Duplicate Submission', 'Quality Issues'].map((opt) => (
                    <TouchableOpacity key={opt} style={styles.rejectOpt}>
                      <View style={styles.checkbox} />
                      <Text style={styles.rejectOptText}>{opt}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
                <View style={styles.rejectActions}>
                  <TouchableOpacity style={styles.rejectBtnCancel} onPress={() => setRejectFormVisible(false)}>
                    <Text style={styles.rejectBtnCancelText}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.rejectBtnConfirm} onPress={handleRejectConfirm}>
                    <LinearGradient colors={['#ef4444', '#dc2626']} style={styles.gradientBtn}>
                      <Text style={styles.btnText}>Confirm Rejection</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        </View>
      </Modal>

      {/* Fullscreen Image Zoom */}
      <Modal visible={!!zoomImg} transparent>
        <TouchableOpacity style={styles.zoomOverlay} activeOpacity={1} onPress={() => setZoomImg(null)}>
          <Image source={{ uri: zoomImg || '' }} style={styles.zoomedImg} resizeMode="contain" />
          <TouchableOpacity style={styles.zoomClose} onPress={() => setZoomImg(null)}>
            <Icon name="close" size={32} color="#ffffff" />
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  topNav: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, height: 64, backgroundColor: 'rgba(248,249,250,0.8)' },
  logoText: { fontSize: 24, fontWeight: '800', color: '#006c49' },
  navRight: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  navIcon: { padding: 8 },
  userAvatar: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#6ffbbe', alignItems: 'center', justifyContent: 'center' },
  mainContent: { paddingHorizontal: 24, paddingTop: 32, paddingBottom: 100 },
  header: { marginBottom: 32 },
  title: { fontSize: 48, fontWeight: '800', color: '#006c49', marginBottom: 8 },
  subtitle: { fontSize: 18, color: '#3c4a42' },
  
  mockCard: { backgroundColor: '#ffffff', borderRadius: 16, padding: 24, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 8, borderWidth: 1, borderColor: 'rgba(187,202,191,0.3)' },
  cardImgWrap: { height: 192, borderRadius: 8, overflow: 'hidden', marginBottom: 24 },
  cardImg: { width: '100%', height: '100%' },
  cardBadge: { position: 'absolute', top: 12, right: 12, backgroundColor: 'rgba(16,185,129,0.9)', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 12 },
  cardBadgeText: { color: '#00422b', fontSize: 10, fontWeight: '700' },
  cardTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d', marginBottom: 4 },
  cardSub: { fontSize: 16, color: '#3c4a42', marginBottom: 24 },
  cardStatus: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  statusIconBox: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#6df5e1', alignItems: 'center', justifyContent: 'center' },
  statusText: { fontSize: 12, fontWeight: '700', color: '#006b5f', letterSpacing: 1 },

  bottomNav: { position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'rgba(248,249,250,0.9)', borderTopWidth: 1, borderTopColor: 'rgba(187,202,191,0.3)' },
  navItem: { alignItems: 'center', justifyContent: 'center', padding: 8 },
  navItemActive: { alignItems: 'center', justifyContent: 'center', padding: 8, backgroundColor: '#10b981', borderRadius: 12, paddingHorizontal: 16 },
  navLabel: { fontSize: 12, fontWeight: '700', color: '#3c4a42', marginTop: 4 },
  navLabelActive: { fontSize: 12, fontWeight: '700', color: '#00422b', marginTop: 4 },

  modalOverlay: { flex: 1, backgroundColor: 'rgba(46,49,50,0.4)', justifyContent: 'flex-end' },
  modalContent: { backgroundColor: '#ffffff', borderTopLeftRadius: 16, borderTopRightRadius: 16, height: '90%', overflow: 'hidden' },
  closeBtn: { position: 'absolute', top: 16, right: 16, zIndex: 70, width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.8)', alignItems: 'center', justifyContent: 'center' },
  
  carouselWrap: { height: 300, backgroundColor: '#d9dadb' },
  carouselImg: { width, height: 300 },
  carouselDots: { position: 'absolute', bottom: 16, left: 0, right: 0, flexDirection: 'row', justifyContent: 'center', gap: 4 },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.4)' },
  dotActive: { backgroundColor: '#ffffff' },

  modalInfo: { padding: 24 },
  studentHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 },
  studentHeaderLeft: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  studentAvatar: { width: 56, height: 56, borderRadius: 28, borderWidth: 2, borderColor: '#ffffff' },
  studentName: { fontSize: 24, fontWeight: '600', color: '#191c1d' },
  studentGrade: { fontSize: 16, color: '#3c4a42' },
  catLabel: { fontSize: 12, fontWeight: '700', color: '#006c49', letterSpacing: 1, marginBottom: 4 },
  catValue: { fontSize: 16, fontWeight: 'bold', color: '#006b5f' },

  noteBox: { marginBottom: 24 },
  noteLabel: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 1, marginBottom: 8 },
  noteText: { fontSize: 18, color: '#191c1d', lineHeight: 28 },

  rewardBox: { padding: 24, borderRadius: 16, backgroundColor: 'rgba(231,232,233,0.5)', borderWidth: 1, borderColor: 'rgba(187,202,191,0.2)' },
  rewardLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  rewardIconCircle: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#006c49', alignItems: 'center', justifyContent: 'center' },
  rewardLabel: { fontSize: 12, fontWeight: '700', color: '#3c4a42' },
  rewardValue: { fontSize: 20, fontWeight: '600', color: '#006c49' },

  modalActions: { position: 'absolute', bottom: 0, left: 0, right: 0, padding: 24, flexDirection: 'row', gap: 16, backgroundColor: 'rgba(255,255,255,0.9)', borderTopWidth: 1, borderTopColor: 'rgba(187,202,191,0.3)' },
  btnReject: { flex: 1 },
  btnApprove: { flex: 2 },
  gradientBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 16, borderRadius: 12, gap: 8 },
  btnText: { color: '#ffffff', fontSize: 18, fontWeight: '600' },

  rejectForm: { position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: '#ffffff', padding: 24, borderTopLeftRadius: 16, borderTopRightRadius: 16, borderTopWidth: 1, borderTopColor: 'rgba(186,26,26,0.2)' },
  rejectHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 },
  rejectTitle: { fontSize: 24, fontWeight: '600', color: '#ba1a1a' },
  rejectOptions: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 24 },
  rejectOpt: { flexDirection: 'row', alignItems: 'center', gap: 8, padding: 12, borderRadius: 8, backgroundColor: '#f3f4f5', borderWidth: 1, borderColor: 'rgba(187,202,191,0.3)', width: '48%' },
  checkbox: { width: 20, height: 20, borderRadius: 4, borderWidth: 1, borderColor: '#6c7a71' },
  rejectOptText: { fontSize: 16, color: '#191c1d' },
  rejectActions: { flexDirection: 'row', gap: 16 },
  rejectBtnCancel: { flex: 1, paddingVertical: 16, borderRadius: 12, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f3f4f5' },
  rejectBtnCancelText: { fontSize: 18, fontWeight: '600', color: '#3c4a42' },
  rejectBtnConfirm: { flex: 2 },

  zoomOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.95)', alignItems: 'center', justifyContent: 'center', padding: 24 },
  zoomedImg: { width: '100%', height: '100%' },
  zoomClose: { position: 'absolute', top: 40, right: 24 },
});
