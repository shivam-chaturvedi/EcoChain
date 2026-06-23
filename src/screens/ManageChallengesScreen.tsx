import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CHALLENGES = [
  {
    id: 1,
    title: 'Plastic-Free Week',
    target: 'Class 8B • 4 Days Left',
    progress: 75,
    status: 'ACTIVE',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzvMfMstiP9QApqeAFPXmWyskzlGj1SUP1aAQDBUbKIiB22Dk4UhriEEpOU-7HPfO88CnM91mAgaKrl8NyaFsUnzI3he_o1s8Qn5_Vr7MxXsLjwk1bqNaEJftrdvqK1U09mJ3PEyOyM1bHhBMRV6S4jFwyQtVsLT2ieuDGlF6fzALzznbVuAhPZyNc71qMUtPyN8YRYzEXNsvQc0eT_QJ7rUyrFsG4pDyc6b_yvs6rQG60dOKv7Xb-R7JcVMEuUZC8RKB9iBy1xV1U',
  },
  {
    id: 2,
    title: 'Energy Savers',
    target: 'Grade 9 All • 12 Days Left',
    progress: 32,
    status: 'ACTIVE',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAD2OY1iEvBIK68o3RxcvOpYY4ExPtQdsy7TAZnHbwdRIz16-vw6FLOG6QVog34c2u7L1BJj99o-6iRcFcaKy4Sq3gUdUcWJoIK23s88SoEGObYzHGmy7rruZ_aHHuu7IemPzhdqF2uEqPzARSpiyBw8Y-9bcF_MF-8viMcCDqwb6hGhj7T26nUnBTKhvpuW0iSrnM3JfmC5Cx5GgfXICW6Yo-WlPus1uqpMX1W-zz4IKEQkTIwx7QtoLqpf2H3WX27FtQl6htMTiHI',
  },
];

export default function ManageChallengesScreen({ navigation }: any) {
  const [activeTab, setActiveTab] = useState('ongoing');

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.avatarBorder}>
            <Image 
              source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFWDixF_A8BtYR_5-63zRekZM7s39SJexKfQjZfh0qMp09KF8yzyFLf-k2Dbt6sn30Iz16UuAjaeFRCNAJ3oGpCdgOZlyeQsTfaxBeDyEi1xF7CyMxbbX2Ztojlfmlryh9CK_ucdCxIpZGXMdmPixabpcanKBaJAKNbBEW3ZS1ad8ap4UptQtaNWUBD8D0lGnfbgM7ufIsc7QqQXZE5afZhEjDk_Ri5Zd3wGid-y-NNefEOrgEhw2eHafOsZpzOGX44Z-e4PGsgyST'}}
              style={styles.avatar}
            />
          </View>
          <Text style={styles.logoText}>ChonX</Text>
        </View>
        <TouchableOpacity style={styles.notifBtn}>
          <Icon name="notifications" size={24} color="#006c49" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.titleSection}>
          <Text style={styles.title}>Challenge Arena</Text>
          <Text style={styles.subtitle}>Gamify your sustainability curriculum and track student impact.</Text>
        </View>

        <View style={styles.tabsContainer}>
          <TouchableOpacity 
            style={[styles.tabBtn, activeTab === 'ongoing' && styles.tabBtnActive]}
            onPress={() => setActiveTab('ongoing')}
          >
            <Text style={[styles.tabText, activeTab === 'ongoing' && styles.tabTextActive]}>ONGOING</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tabBtn, activeTab === 'upcoming' && styles.tabBtnActive]}
            onPress={() => setActiveTab('upcoming')}
          >
            <Text style={[styles.tabText, activeTab === 'upcoming' && styles.tabTextActive]}>UPCOMING</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tabBtn, activeTab === 'completed' && styles.tabBtnActive]}
            onPress={() => setActiveTab('completed')}
          >
            <Text style={[styles.tabText, activeTab === 'completed' && styles.tabTextActive]}>COMPLETED</Text>
          </TouchableOpacity>
        </View>

        {activeTab === 'ongoing' && (
          <View style={styles.listContainer}>
            {CHALLENGES.map((challenge) => (
              <View key={challenge.id} style={styles.card}>
                <View style={styles.cardImgContainer}>
                  <Image source={{uri: challenge.img}} style={styles.cardImg} />
                  <View style={styles.statusBadge}>
                    <Text style={styles.statusText}>{challenge.status}</Text>
                  </View>
                </View>
                <View style={styles.cardContent}>
                  <View style={styles.cardHeader}>
                    <View style={{flex: 1}}>
                      <Text style={styles.cardTitle}>{challenge.title}</Text>
                      <Text style={styles.cardDesc}>{challenge.target}</Text>
                    </View>
                    <View style={styles.progressRingWrapper}>
                      <Icon name="donut-large" size={48} color="#006c49" />
                      <View style={styles.progressRingInner}>
                        <Text style={styles.progressRingText}>{challenge.progress}%</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.cardActions}>
                    <TouchableOpacity style={styles.actionBtn1}>
                      <Text style={styles.actionBtnText1}>Manage</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionBtn2}>
                      <Text style={styles.actionBtnText2}>Insights</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionBtn3}>
                      <Icon name="edit" size={16} color="#3c4a42" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}

            <TouchableOpacity style={styles.createCard} onPress={() => {}}>
              <View style={styles.createIconBg}>
                <Icon name="add" size={32} color="#006c49" />
              </View>
              <Text style={styles.createTitle}>New Challenge</Text>
              <Text style={styles.createDesc}>Design a new student impact goal</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>

      {/* FAB */}
      <TouchableOpacity style={styles.fab}>
        <Icon name="add" size={24} color="#ffffff" />
      </TouchableOpacity>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <View style={styles.navItem}>
          <Icon name="home" size={24} color="#3c4a42" />
          <Text style={styles.navText}>Home</Text>
        </View>
        <View style={styles.navItem}>
          <Icon name="eco" size={24} color="#3c4a42" />
          <Text style={styles.navText}>Verify</Text>
        </View>
        <View style={styles.navItemActive}>
          <Icon name="military-tech" size={24} color="#00422b" />
          <Text style={styles.navTextActive}>Arena</Text>
        </View>
        <View style={styles.navItem}>
          <Icon name="person" size={24} color="#3c4a42" />
          <Text style={styles.navText}>Profile</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  header: {
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    backgroundColor: 'rgba(248, 249, 250, 0.8)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(108, 122, 113, 0.1)',
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center' },
  avatarBorder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#10b981',
    overflow: 'hidden',
  },
  avatar: { width: '100%', height: '100%' },
  logoText: {
    fontSize: 24,
    fontWeight: '800',
    color: '#006c49',
    marginLeft: 12,
  },
  notifBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContent: { padding: 24, paddingBottom: 100 },
  titleSection: { marginBottom: 24 },
  title: { fontSize: 32, fontWeight: '700', color: '#191c1d', marginBottom: 8 },
  subtitle: { fontSize: 18, color: '#3c4a42' },
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: '#f3f4f5',
    padding: 4,
    borderRadius: 32,
    alignSelf: 'flex-start',
    marginBottom: 24,
  },
  tabBtn: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 32,
  },
  tabBtnActive: {
    backgroundColor: '#006c49',
  },
  tabText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#3c4a42',
  },
  tabTextActive: {
    color: '#ffffff',
  },
  listContainer: { gap: 24 },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(229, 231, 235, 0.5)',
  },
  cardImgContainer: { width: '100%', height: 192, position: 'relative' },
  cardImg: { width: '100%', height: '100%' },
  statusBadge: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: '#006c49',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  statusText: { color: '#ffffff', fontSize: 12, fontWeight: '700' },
  cardContent: { padding: 24 },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 },
  cardTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d', marginBottom: 4 },
  cardDesc: { fontSize: 14, color: '#3c4a42' },
  progressRingWrapper: { position: 'relative', width: 48, height: 48, alignItems: 'center', justifyContent: 'center' },
  progressRingInner: { position: 'absolute' },
  progressRingText: { fontSize: 10, fontWeight: '700', color: '#191c1d' },
  cardActions: { flexDirection: 'row', gap: 8 },
  actionBtn1: { flex: 1, backgroundColor: '#e7e8e9', paddingVertical: 8, borderRadius: 8, alignItems: 'center' },
  actionBtnText1: { color: '#006c49', fontSize: 14, fontWeight: '700' },
  actionBtn2: { flex: 1, backgroundColor: '#10b981', paddingVertical: 8, borderRadius: 8, alignItems: 'center' },
  actionBtnText2: { color: '#00422b', fontSize: 14, fontWeight: '700' },
  actionBtn3: { backgroundColor: '#e7e8e9', padding: 8, borderRadius: 8, alignItems: 'center', justifyContent: 'center' },
  createCard: {
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#bbcabf',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  createIconBg: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#e7e8e9',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  createTitle: { fontSize: 16, fontWeight: '700', color: '#006c49', marginBottom: 4 },
  createDesc: { fontSize: 14, color: '#3c4a42' },
  fab: {
    position: 'absolute',
    bottom: 104,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#006c49',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#006c49',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: 'rgba(248, 249, 250, 0.9)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(108, 122, 113, 0.2)',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 20,
  },
  navItem: {
    alignItems: 'center',
    padding: 8,
  },
  navItemActive: {
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#10b981',
    borderRadius: 16,
    paddingHorizontal: 16,
  },
  navText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#3c4a42',
    marginTop: 4,
  },
  navTextActive: {
    fontSize: 12,
    fontWeight: '700',
    color: '#00422b',
    marginTop: 4,
  },
});
