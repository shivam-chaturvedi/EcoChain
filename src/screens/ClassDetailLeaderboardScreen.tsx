import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ClassDetailLeaderboardScreen({ navigation }: any) {
  const [activeTab, setActiveTab] = useState('Leaderboard');
  const [filter, setFilter] = useState('Weekly');

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.avatar}>
            <Image
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHHNcepKTCrDqQTrYKGYnEOcEGl-cTf5zkWuZ97Ibz-o0c8-S_apScGxWtJCQO00O09yL5-Yf1RuH0UYy0TJ9zAy2OujI31YDq9zR6IBXuZqiR0LB4fTIYj8c-ial_zFZQfd9_iVvSKSXH8CfiC-8waNP4QlQhE0b3VFB8dFSqemDpkeMZRBlIWrKpZNDKgFraEyf6vYNDfeZx6RrYfkpDSVmODISLO_CsDRa2aCO0fq_5Q1PsUzZ8J2MNuGiUiCbVIEEtRRu7G_jC' }}
              style={styles.avatarImg}
            />
          </View>
          <Text style={styles.logoText}>ChonX</Text>
        </View>
        <TouchableOpacity><Icon name="notifications" size={24} color="#006c49" /></TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Class Header */}
        <View style={styles.classHeader}>
          <View style={styles.breadcrumb}>
            <Icon name="school" size={20} color="#3c4a42" />
            <Text style={styles.breadcrumbText}>CLASS 10A</Text>
          </View>
          <Text style={styles.pageTitle}>Green Guardians Leaderboard</Text>
        </View>

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

        {/* Filter Toggle */}
        <View style={styles.filterContainer}>
          <View style={styles.filterBox}>
            <TouchableOpacity 
              style={[styles.filterBtn, filter === 'Weekly' && styles.filterBtnActive]}
              onPress={() => setFilter('Weekly')}
            >
              <Text style={[styles.filterBtnText, filter === 'Weekly' && styles.filterBtnTextActive]}>Weekly</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.filterBtn, filter === 'Total' && styles.filterBtnActive]}
              onPress={() => setFilter('Total')}
            >
              <Text style={[styles.filterBtnText, filter === 'Total' && styles.filterBtnTextActive]}>Total</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Top 3 Podium */}
        <View style={styles.podiumContainer}>
          {/* Rank 2 */}
          <View style={[styles.podiumItem, { marginTop: 32 }]}>
            <View style={styles.podiumAvatarWrap}>
              <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRbxsUOTZlSEO97SW392g4L1dJ_QQqgMMQ1LU-C1W8oOCK6OyG0epZUOlNtrJvgiqsOq5X_eo7c2J4pDoTNelDvxTx4HFcE99rcPkOF-l8EN0xmrCXkiqHViPJQx_jInTkRxp_1_HwvHDvgwdDZKvjW8vals8EY8MHMeI_6i-lNUTxuFmj1EuvU9Q8idUXwWcA2MzZEt2u9UGRQtenb2zf7YzXd5vSB9O2ctZP8ahvbRhH2FotsOm62_mVBtYiQFZGWO-HrA_9YlfT' }} style={[styles.podiumAvatar, { borderColor: '#94a3b8' }]} />
              <View style={[styles.rankBadge, { backgroundColor: '#475569' }]}><Text style={styles.rankBadgeText}>2</Text></View>
            </View>
            <Text style={styles.podiumName}>Mia S.</Text>
            <Text style={styles.podiumScore}>2,840 XP</Text>
          </View>

          {/* Rank 1 */}
          <View style={[styles.podiumItem, { zIndex: 10 }]}>
            <View style={styles.podiumAvatarWrap}>
              <View style={styles.championBadge}><Text style={styles.championBadgeText}>CHAMPION</Text></View>
              <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEpRDsF_NxXgaSUvYYAoSZzh2UqhfI_NDSoznVcc5qt1C8LczngmVAo8zCLabQlOdVnDE0Cm9OMfHDDOXz4ZkxCr5XZyG4ac8rG6l06MITyPQ1ktLUI60ApsftoNTohqwMoZPx3JxvWgZkwyE0YecNXVaPs2X8_RTDFQ0WpPDL4QrmFca7SGfWbBdLA4-igvTQBQayefwewSmbVr6B_EqqrB0i4nuRFcdPRemYkgHSqEH2gJJTw5mWu1-ASJQnx4dARv1qy9IBrGXU' }} style={[styles.podiumAvatar, { width: 96, height: 96, borderRadius: 48, borderColor: '#fbbf24', borderWidth: 6 }]} />
              <View style={[styles.rankBadge, { backgroundColor: '#d97706', width: 48, height: 48, borderRadius: 24, bottom: -12, right: -12 }]}><Text style={[styles.rankBadgeText, { fontSize: 20 }]}>1</Text></View>
            </View>
            <Text style={[styles.podiumName, { fontSize: 24, marginTop: 8 }]}>Leo Chen</Text>
            <Text style={[styles.podiumScore, { color: '#006c49', fontSize: 24 }]}>3,120 XP</Text>
          </View>

          {/* Rank 3 */}
          <View style={[styles.podiumItem, { marginTop: 32 }]}>
            <View style={styles.podiumAvatarWrap}>
              <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQwsq6FaDt4wEFilCCKsm656bIF6vcBKHdcImseLwFlZlFivwCBjHZLoPdrE5C65wktni4aNsB18z5GZDGXm_FZL4XmH4To5jkMjBDTAtxhZTmHy7D9pVFR2odyizeAoDc5nXpr-zMQwfAB81xZFQSfSx9epvtOPRF_LcW1HP6gcyWzKcvNrPZXDpFYeA6mhajGvWsOZPi080xPtZ-i8bYQX7sjafRa-UbRWd0Xi864yXHr53s3AOK1EpW_7oW2_5ewwSv470lO0Gq' }} style={[styles.podiumAvatar, { borderColor: '#cd7f32' }]} />
              <View style={[styles.rankBadge, { backgroundColor: '#8b4513' }]}><Text style={styles.rankBadgeText}>3</Text></View>
            </View>
            <Text style={styles.podiumName}>Safa K.</Text>
            <Text style={styles.podiumScore}>2,710 XP</Text>
          </View>
        </View>

        {/* Leaderboard List */}
        <View style={styles.listContainer}>
          <View style={styles.listHeader}>
            <Text style={[styles.listHeaderText, { width: 40 }]}>Rank</Text>
            <Text style={[styles.listHeaderText, { flex: 1 }]}>Student</Text>
            <Text style={[styles.listHeaderText, { width: 80, textAlign: 'right' }]}>Progress</Text>
            <Text style={[styles.listHeaderText, { width: 80, textAlign: 'right' }]}>Points</Text>
          </View>

          {/* Rank 4 */}
          <TouchableOpacity style={styles.listRow}>
            <Text style={styles.rowRank}>4</Text>
            <View style={styles.rowAvatar}>
              <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsyHJLYFrNRTEB0V-bWwOp6BaBCuZGCPBJCbXkFg7w2P5wFx6L1zC5f2C-6kEWvTk3qfw2C1fzhqBt8npZRCUBRk4_nZ-A9gWAY5DpYmSvBUGMxFQU44gYm4bZZJoLweR5DksMBtnEKwXLj9ANd6a3LwiBZ7PRJNF29JvTfpqtIifibSteneXn8xW2j-NaHfsV5mILHN6aGVn9b5NtJ3d8ptyqGo8G73_Mh7NjfWeRWL5hSpMc1S60TRcHdQG1I3KVh9qQf2Fa_6o1' }} style={styles.rowAvatarImg} />
            </View>
            <View style={styles.rowInfo}>
              <Text style={styles.rowName}>Alex Rivera</Text>
              <Text style={styles.rowSub}>Level 12 • Recycling Expert</Text>
            </View>
            <View style={styles.rowProgress}>
              <View style={styles.progressBarBg}>
                <View style={[styles.progressBarFill, { width: '85%' }]} />
              </View>
            </View>
            <View style={styles.rowPoints}>
              <Text style={styles.pointsText}>2,550 <Text style={styles.pointsLabel}>XP</Text></Text>
            </View>
          </TouchableOpacity>

          {/* Rank 5 */}
          <TouchableOpacity style={styles.listRow}>
            <Text style={styles.rowRank}>5</Text>
            <View style={styles.rowAvatar}>
              <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCa3RzPWduo3a5yjvU0mH0VoGOyv2ILbCCsZTISj2X4-DESPD3ScHWjyMrqPi_BwQZENHHRyF9eCA5prQL1xv8vfDTUW6A2VP0P8eDdE0KnZOV2MAVC-i3si-BLMxuSQZeVmg_ttxsyTUUQh-fpGDzuZvgHWf48p2OTZfJHlxU4SWuSJrKY-aW_99GvqONHbAQkxM7Px39GR62nrnwolNsBqZhD9rzn6nymEeOhXay8NuFb6xE2_S3JKia2qAx7qi6FwvYQsVFMV5Xf' }} style={styles.rowAvatarImg} />
            </View>
            <View style={styles.rowInfo}>
              <Text style={styles.rowName}>Jordan P.</Text>
              <Text style={styles.rowSub}>Level 11 • Carbon Neutral</Text>
            </View>
            <View style={styles.rowProgress}>
              <View style={styles.progressBarBg}>
                <View style={[styles.progressBarFill, { width: '72%' }]} />
              </View>
            </View>
            <View style={styles.rowPoints}>
              <Text style={styles.pointsText}>2,410 <Text style={styles.pointsLabel}>XP</Text></Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, height: 64, backgroundColor: 'rgba(248,249,250,0.8)', borderBottomWidth: 1, borderBottomColor: 'rgba(187,202,191,0.2)' },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  avatar: { width: 40, height: 40, borderRadius: 20, overflow: 'hidden', borderWidth: 2, borderColor: '#ffffff', backgroundColor: '#6df5e1' },
  avatarImg: { width: '100%', height: '100%' },
  logoText: { fontSize: 24, fontWeight: '800', color: '#006c49' },
  scrollContent: { paddingHorizontal: 24, paddingTop: 24, paddingBottom: 100 },
  classHeader: { marginBottom: 32 },
  breadcrumb: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 16 },
  breadcrumbText: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 1 },
  pageTitle: { fontSize: 32, fontWeight: '700', color: '#191c1d' },
  tabsContainer: { borderBottomWidth: 1, borderBottomColor: 'rgba(187,202,191,0.3)', marginBottom: 32 },
  tab: { paddingHorizontal: 24, paddingVertical: 12, borderBottomWidth: 2, borderBottomColor: 'transparent' },
  tabActive: { borderBottomColor: '#006c49' },
  tabText: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 0.5 },
  tabTextActive: { color: '#006c49' },
  filterContainer: { alignItems: 'center', marginBottom: 40 },
  filterBox: { flexDirection: 'row', backgroundColor: '#edeeef', padding: 4, borderRadius: 12, width: '100%', maxWidth: 240 },
  filterBtn: { flex: 1, paddingVertical: 8, alignItems: 'center', borderRadius: 8 },
  filterBtnActive: { backgroundColor: '#ffffff', shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2 },
  filterBtnText: { fontSize: 12, fontWeight: '700', color: '#3c4a42' },
  filterBtnTextActive: { color: '#006c49' },
  podiumContainer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end', backgroundColor: 'rgba(16,185,129,0.1)', borderRadius: 16, paddingTop: 32, paddingBottom: 48, paddingHorizontal: 16, marginBottom: 32 },
  podiumItem: { flex: 1, alignItems: 'center' },
  podiumAvatarWrap: { position: 'relative', marginBottom: 16 },
  podiumAvatar: { width: 72, height: 72, borderRadius: 36, borderWidth: 4, overflow: 'hidden' },
  rankBadge: { position: 'absolute', bottom: -8, right: -8, width: 32, height: 32, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  rankBadgeText: { color: '#ffffff', fontWeight: 'bold', fontSize: 14 },
  championBadge: { position: 'absolute', top: -16, left: '50%', transform: [{ translateX: -40 }], backgroundColor: '#fbbf24', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 12, zIndex: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 4 },
  championBadgeText: { fontSize: 10, fontWeight: '700', color: '#002113', letterSpacing: 1 },
  podiumName: { fontSize: 16, fontWeight: '600', color: '#3c4a42' },
  podiumScore: { fontSize: 18, fontWeight: '700', color: '#191c1d' },
  listContainer: { flexDirection: 'column', gap: 12 },
  listHeader: { flexDirection: 'row', paddingHorizontal: 24, paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: 'rgba(187,202,191,0.1)' },
  listHeaderText: { fontSize: 11, fontWeight: '700', color: '#3c4a42', textTransform: 'uppercase', letterSpacing: 1 },
  listRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.7)', paddingHorizontal: 24, paddingVertical: 16, borderRadius: 8, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)' },
  rowRank: { width: 40, fontSize: 16, fontWeight: '700', color: '#3c4a42' },
  rowAvatar: { width: 48, height: 48, borderRadius: 24, overflow: 'hidden', backgroundColor: '#d9dadb', marginRight: 16 },
  rowAvatarImg: { width: '100%', height: '100%' },
  rowInfo: { flex: 1 },
  rowName: { fontSize: 16, fontWeight: '600', color: '#191c1d' },
  rowSub: { fontSize: 10, fontWeight: '700', color: '#3c4a42', marginTop: 4 },
  rowProgress: { width: 80, alignItems: 'flex-end', justifyContent: 'center' },
  progressBarBg: { width: '100%', height: 8, backgroundColor: '#edeeef', borderRadius: 4, overflow: 'hidden' },
  progressBarFill: { height: '100%', backgroundColor: '#10b981', borderRadius: 4 },
  rowPoints: { width: 80, alignItems: 'flex-end', justifyContent: 'center' },
  pointsText: { fontSize: 16, fontWeight: '700', color: '#006c49' },
  pointsLabel: { fontSize: 10, color: '#3c4a42' },
});
