import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
  Modal,
  Dimensions,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

const EcoRewardsScreen = ({ navigation }: any) => {
  const [activeTab, setActiveTab] = useState('available');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedReward, setSelectedReward] = useState<any>(null);

  const tabs = [
    { id: 'available', label: 'Available' },
    { id: 'saved', label: 'Saved' },
    { id: 'redemptions', label: 'My Redemptions' },
  ];

  const rewards = [
    {
      id: 1,
      title: 'Thermal Reusable Bottle',
      xp: '850 XP',
      desc: '24h cold, 12h hot. Made from 100% recycled marine plastic and surgical grade steel.',
      img: 'https://images.unsplash.com/photo-1591336361888-0b5c18604719?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 2,
      title: 'Urban Reforestation Kit',
      xp: '1,200 XP',
      desc: 'Start your own indoor forest with 3 air-purifying plant starters and organic soil.',
      img: 'https://images.unsplash.com/photo-1463930616333-5a40c212e42d?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 3,
      title: '$10 Eco-Store Voucher',
      xp: '500 XP',
      desc: 'Redeem at any of our 50+ partner sustainable retailers for fashion, tech, or food.',
      img: 'https://images.unsplash.com/photo-1554224155-169641357599?auto=format&fit=crop&q=80&w=800',
    },
  ];

  const openModal = (reward: any) => {
    setSelectedReward(reward);
    setModalVisible(true);
  };

  const handleRedeem = () => {
    setModalVisible(false);
    Alert.alert('Success!', 'Your redemption is confirmed. Check your email for tracking details.');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>ChonX</Text>
        <View style={styles.headerRight}>
          <View style={styles.balanceContainer}>
            <Text style={styles.balanceLabel}>BALANCE</Text>
            <Text style={styles.balanceValue}>2,450 XP</Text>
          </View>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="notifications" size={24} color="#006c49" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Hero Section */}
        <View style={styles.heroCard}>
          <LinearGradient colors={['#10b981', '#006c49']} style={styles.heroGradient}>
            <Text style={styles.heroTitle}>Turn Impact into Style.</Text>
            <Text style={styles.heroSubtitle}>
              Your eco-actions have earned you premium rewards. Redeem your XP for sustainable products and local experiences.
            </Text>
            <View style={styles.badges}>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>Level 12 Explorer</Text>
              </View>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>4 Streak Days</Text>
              </View>
            </View>
          </LinearGradient>
        </View>

        {/* Tabs */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabsContainer}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab.id}
              style={[styles.tab, activeTab === tab.id && styles.activeTab]}
              onPress={() => setActiveTab(tab.id)}>
              <Text style={[styles.tabText, activeTab === tab.id && styles.activeTabText]}>{tab.label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Rewards Grid */}
        <View style={styles.rewardsGrid}>
          {rewards.map((reward) => (
            <View key={reward.id} style={styles.rewardCard}>
              <View style={styles.rewardImgContainer}>
                <Image source={{ uri: reward.img }} style={styles.rewardImg} />
                <View style={styles.xpBadge}>
                  <Icon name="bolt" size={16} color="#006c49" />
                  <Text style={styles.xpBadgeText}>{reward.xp}</Text>
                </View>
              </View>
              <View style={styles.rewardInfo}>
                <View style={styles.rewardHeader}>
                  <Text style={styles.rewardTitle}>{reward.title}</Text>
                  <TouchableOpacity>
                    <Icon name="bookmark-border" size={24} color="#3c4a42" />
                  </TouchableOpacity>
                </View>
                <Text style={styles.rewardDesc} numberOfLines={2}>
                  {reward.desc}
                </Text>
                <TouchableOpacity style={styles.redeemBtn} onPress={() => openModal(reward)}>
                  <Text style={styles.redeemBtnText}>Redeem</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Reward Modal */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeModalBtn} onPress={() => setModalVisible(false)}>
              <Icon name="close" size={24} color="#fff" />
            </TouchableOpacity>
            {selectedReward && (
              <>
                <View style={styles.modalImgContainer}>
                  <Image source={{ uri: selectedReward.img }} style={styles.modalImg} />
                  <LinearGradient colors={['transparent', 'rgba(0,0,0,0.8)']} style={styles.modalImgGradient}>
                    <Text style={styles.modalTitle}>{selectedReward.title}</Text>
                    <Text style={styles.modalXp}>{selectedReward.xp} Required</Text>
                  </LinearGradient>
                </View>
                <View style={styles.modalBody}>
                  <Text style={styles.modalDesc}>
                    By redeeming this item, you support our circular economy mission. Shipping is offset by carbon-neutral credits automatically included in your redemption.
                  </Text>
                  <View style={styles.shippingInfo}>
                    <Icon name="local-shipping" size={32} color="#006c49" />
                    <View style={styles.shippingTexts}>
                      <Text style={styles.shippingTitle}>Standard Delivery</Text>
                      <Text style={styles.shippingSubtitle}>Arrival in 3-5 business days</Text>
                    </View>
                  </View>
                  <View style={styles.modalActions}>
                    <TouchableOpacity style={styles.cancelBtn} onPress={() => setModalVisible(false)}>
                      <Text style={styles.cancelBtnText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.confirmBtn} onPress={handleRedeem}>
                      <Text style={styles.confirmBtnText}>Confirm Redemption</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  header: {
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e1e3e4',
  },
  headerTitle: { fontSize: 24, fontWeight: '800', color: '#006c49' },
  headerRight: { flexDirection: 'row', alignItems: 'center' },
  balanceContainer: { alignItems: 'flex-end', marginRight: 16 },
  balanceLabel: { fontSize: 10, fontWeight: '700', color: '#3c4a42', letterSpacing: 1 },
  balanceValue: { fontSize: 20, fontWeight: '700', color: '#006c49' },
  iconButton: { padding: 8, backgroundColor: '#f3f4f5', borderRadius: 20 },
  scrollContent: { padding: 24 },
  heroCard: { borderRadius: 24, overflow: 'hidden', marginBottom: 32 },
  heroGradient: { padding: 32 },
  heroTitle: { fontSize: 32, fontWeight: '700', color: '#fff', marginBottom: 12 },
  heroSubtitle: { fontSize: 16, color: 'rgba(255,255,255,0.9)', marginBottom: 24, lineHeight: 24 },
  badges: { flexDirection: 'row', gap: 12 },
  badge: { backgroundColor: 'rgba(255,255,255,0.2)', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20 },
  badgeText: { color: '#fff', fontSize: 12, fontWeight: '700', letterSpacing: 0.5 },
  tabsContainer: { marginBottom: 24, paddingBottom: 8 },
  tab: { paddingHorizontal: 24, paddingVertical: 10, borderRadius: 20, marginRight: 12 },
  activeTab: { backgroundColor: '#006c49' },
  tabText: { fontSize: 12, fontWeight: '700', color: '#3c4a42', textTransform: 'uppercase', letterSpacing: 1 },
  activeTabText: { color: '#fff' },
  rewardsGrid: { gap: 24 },
  rewardCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#e1e3e4',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    padding: 2,
    marginTop: 8,
  },
  rewardImgContainer: {
    height: 120,
    width: '100%',
    position: 'relative',
  },
  rewardImg: { width: '100%', height: '100%' },
  xpBadge: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: 'rgba(255,255,255,0.9)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  xpBadgeText: { fontSize: 12, fontWeight: '700', color: '#006c49', marginLeft: 4 },
  rewardInfo: { padding: 24 },
  rewardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 },
  rewardTitle: { fontSize: 20, fontWeight: '600', color: '#191c1d', flex: 1, marginRight: 16 },
  rewardDesc: { fontSize: 14, color: '#3c4a42', lineHeight: 20, marginBottom: 24 },
  redeemBtn: { backgroundColor: '#006c49', paddingVertical: 14, alignItems: 'center', borderRadius: 12 },
  redeemBtnText: { color: '#fff', fontSize: 16, fontWeight: '700' },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', padding: 24 },
  modalContent: { backgroundColor: '#fff', borderRadius: 24, overflow: 'hidden' },
  closeModalBtn: { position: 'absolute', top: 16, right: 16, zIndex: 10, padding: 8, backgroundColor: 'rgba(0,0,0,0.3)', borderRadius: 20 },
  modalImgContainer: { height: 250, position: 'relative' },
  modalImg: { width: '100%', height: '100%' },
  modalImgGradient: { position: 'absolute', bottom: 0, left: 0, right: 0, padding: 24, paddingTop: 64 },
  modalTitle: { fontSize: 28, fontWeight: '700', color: '#fff', marginBottom: 4 },
  modalXp: { fontSize: 16, fontWeight: '700', color: '#4edea3' },
  modalBody: { padding: 24 },
  modalDesc: { fontSize: 16, color: '#3c4a42', lineHeight: 24, marginBottom: 24 },
  shippingInfo: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f3f4f5', padding: 16, borderRadius: 16, marginBottom: 24 },
  shippingTexts: { marginLeft: 16 },
  shippingTitle: { fontSize: 16, fontWeight: '700', color: '#191c1d' },
  shippingSubtitle: { fontSize: 14, color: '#3c4a42' },
  modalActions: { flexDirection: 'row', gap: 16 },
  cancelBtn: { flex: 1, paddingVertical: 16, alignItems: 'center', borderRadius: 12 },
  cancelBtnText: { color: '#3c4a42', fontSize: 16, fontWeight: '700' },
  confirmBtn: { flex: 2, backgroundColor: '#006c49', paddingVertical: 16, alignItems: 'center', borderRadius: 12 },
  confirmBtnText: { color: '#fff', fontSize: 16, fontWeight: '700' },
});

export default EcoRewardsScreen;
