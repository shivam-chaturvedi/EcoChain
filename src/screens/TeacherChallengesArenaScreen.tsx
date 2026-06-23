import React from 'react';
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

export default function TeacherChallengesArenaScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.avatarWrapper}>
            <Image source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMSmKjnZoNRxq0boZL--tzZa-FtMz9EKGf_c_2UwzAKjHrGBF4sOJJLohP9SQxuJCG-2epfWyYL0hFqy8pJpVKbq1DXQPU2tyl2Skv-NjrYuEd9ZiQ4rswPSr40BO7MmcOcZQHe7nmK8h1iFpwQbhStQDfTqOm99rPaDRo3UQsArY7TohXWExH5m9DM6y7eDPkBvvrEqDdBSzYu75_iTv8EIMeKqu3DEqMnYMowYS9WLCdOkWRXZgXnDApcl1kw9cYiW-ukrobCDIh'}} style={styles.avatarImage} />
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
          <View style={{flex: 1}}>
            <Text style={styles.pageTitle}>Challenge Arena</Text>
            <Text style={styles.pageSubtitle}>Motivate your students with ecological goals and competitive milestones.</Text>
          </View>
          <TouchableOpacity style={styles.createBtn}>
            <Icon name="add-circle" size={24} color="#fff" />
            <Text style={styles.createBtnText}>Create Challenge</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.tabsRow}>
          <TouchableOpacity style={[styles.tabBtn, styles.tabBtnActive]}>
            <Text style={[styles.tabBtnText, styles.tabBtnTextActive]}>Ongoing</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabBtn}>
            <Text style={styles.tabBtnText}>Upcoming</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabBtn}>
            <Text style={styles.tabBtnText}>Completed</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.grid}>
          {/* Card 1 */}
          <View style={styles.card}>
            <View style={styles.cardImageWrapper}>
              <Image source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8awvPHVe2g6qoTPLFIb8SZv2xBbQwj6r54LyeGxiCeKyOXHIioySMiKQFkt9zyrBKyJDEbpN7x-EEWepXvfxv4DlBbMlOtMLCypC8xjgKQZmF_2CsuX9GbY5Fr4WCPLZcZgVn8rgUHpNbUybS7PrJCLFIv_cUveOixW-mW0s7cyyj9Voo_j5a8nhWEufE3WzF2RzkRtYXa_2mugJfUH5n3rKmPUcfsA6P03Wk0n_nILactm7OoZWZNMu02QPkoxUjW0JUwJtATft-'}} style={styles.cardImage} />
              <View style={styles.timeBadge}>
                <Text style={styles.timeBadgeText}>4 DAYS LEFT</Text>
              </View>
            </View>
            <View style={styles.cardBody}>
              <View style={styles.cardHeaderRow}>
                <View>
                  <Text style={styles.cardTitle}>Plastic Free March</Text>
                  <Text style={styles.cardSub}>CLASS 10A • ADVANCED</Text>
                </View>
                <View style={styles.progressRingWrapper}>
                  {/* Fake Ring */}
                  <View style={styles.progressRing}>
                    <Text style={styles.progressRingText}>75%</Text>
                  </View>
                </View>
              </View>
              <View style={styles.cardActions}>
                <TouchableOpacity style={styles.manageBtn}><Text style={styles.manageBtnText}>MANAGE</Text></TouchableOpacity>
                <TouchableOpacity style={styles.insightsBtn}><Text style={styles.insightsBtnText}>INSIGHTS</Text></TouchableOpacity>
                <TouchableOpacity style={styles.iconActionBtn}><Icon name="edit" size={20} color="#3c4a42" /></TouchableOpacity>
                <TouchableOpacity style={[styles.iconActionBtn, { borderColor: 'rgba(186,26,26,0.2)' }]}><Icon name="cancel" size={20} color="#ba1a1a" /></TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Card 2 */}
          <View style={styles.card}>
            <View style={styles.cardImageWrapper}>
              <Image source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTyOnsaABuAixqB3jP8QMjhpL9uLoo3uMXa8GEQrf-SiNVwnuMpSRkC8Rl4sjrQwE2PO6pqnciaosZ0CwVb5L9ykAzwSGTfqIsu6bO5nGbQwfgNbJTv2tSdUjbDlrbmbFtmDgC189rapaECVqJtj8NTe0cvWLJXvp_gY72-hsC9HLg1lbfR9Utj4Vj73aZj0VRr6s5ufKd9pHBppxLS_GY_oSgyS5lIyI6iVilJGzgrjpFRAuN5C8xKd7iB-TE1OuHxWwFyXa6yQmq'}} style={styles.cardImage} />
              <View style={styles.timeBadge}>
                <Text style={styles.timeBadgeText}>12 HOURS LEFT</Text>
              </View>
            </View>
            <View style={styles.cardBody}>
              <View style={styles.cardHeaderRow}>
                <View>
                  <Text style={styles.cardTitle}>Watts Down Squad</Text>
                  <Text style={styles.cardSub}>YEAR 9 SCIENCE • ECO-CLUB</Text>
                </View>
                <View style={styles.progressRingWrapper}>
                  <View style={styles.progressRing}>
                    <Text style={styles.progressRingText}>90%</Text>
                  </View>
                </View>
              </View>
              <View style={styles.cardActions}>
                <TouchableOpacity style={styles.manageBtn}><Text style={styles.manageBtnText}>MANAGE</Text></TouchableOpacity>
                <TouchableOpacity style={styles.insightsBtn}><Text style={styles.insightsBtnText}>INSIGHTS</Text></TouchableOpacity>
                <TouchableOpacity style={styles.iconActionBtn}><Icon name="edit" size={20} color="#3c4a42" /></TouchableOpacity>
                <TouchableOpacity style={[styles.iconActionBtn, { borderColor: 'rgba(186,26,26,0.2)' }]}><Icon name="cancel" size={20} color="#ba1a1a" /></TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Card 3 */}
          <View style={styles.card}>
            <View style={styles.cardImageWrapper}>
              <Image source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1x1Nhc9ODyZqjeS-u17xQRpHBpQ6xgBJYvtUb7AmVxrNlQvs3vbR4bjryq25ZMGrYD6kR5HwBE_rRZ7D_nheIbX2phwaz8gCtUGbtCLrOlx6q3aMzZvIPUiHjEpW6ASYKQYJxo5TbVJWAefyKZjV-bqa35CTa9aNXmPblW6Nbr6-eTbI8S0kicbxwZJyoBRQlE6_7cdyx1L3oZq6A5fPpJkc31EmRbrRfN0K4x78nwOqlIuRT8_NN9SshUZeXXnjkU9pDQ43s0PDc'}} style={styles.cardImage} />
              <View style={styles.timeBadge}>
                <Text style={styles.timeBadgeText}>2 WEEKS LEFT</Text>
              </View>
            </View>
            <View style={styles.cardBody}>
              <View style={styles.cardHeaderRow}>
                <View>
                  <Text style={styles.cardTitle}>H2O Heroes</Text>
                  <Text style={styles.cardSub}>WHOLE SCHOOL • INTER-HOUSE</Text>
                </View>
                <View style={styles.progressRingWrapper}>
                  <View style={styles.progressRing}>
                    <Text style={styles.progressRingText}>33%</Text>
                  </View>
                </View>
              </View>
              <View style={styles.cardActions}>
                <TouchableOpacity style={styles.manageBtn}><Text style={styles.manageBtnText}>MANAGE</Text></TouchableOpacity>
                <TouchableOpacity style={styles.insightsBtn}><Text style={styles.insightsBtnText}>INSIGHTS</Text></TouchableOpacity>
                <TouchableOpacity style={styles.iconActionBtn}><Icon name="edit" size={20} color="#3c4a42" /></TouchableOpacity>
                <TouchableOpacity style={[styles.iconActionBtn, { borderColor: 'rgba(186,26,26,0.2)' }]}><Icon name="cancel" size={20} color="#ba1a1a" /></TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.statsRow}>
          <View style={[styles.statBox, { flex: 2, backgroundColor: 'rgba(0,108,73,0.05)', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>
            <View>
              <Text style={styles.statLabelPrimary}>MONTHLY IMPACT</Text>
              <View style={{flexDirection: 'row', alignItems: 'flex-end', gap: 8}}>
                <Text style={styles.statValuePrimary}>2.4k</Text>
                <Text style={styles.statDescPrimary}>kg CO₂ saved by students</Text>
              </View>
            </View>
          </View>
          <View style={[styles.statBox, { backgroundColor: 'rgba(0,107,95,0.05)' }]}>
            <Text style={styles.statLabelSecondary}>ACTIVE TEAMS</Text>
            <Text style={styles.statValueSecondary}>12 Classes</Text>
          </View>
          <View style={[styles.statBox, { backgroundColor: 'rgba(113,161,255,0.1)' }]}>
            <Text style={styles.statLabelTertiary}>XP AWARDED</Text>
            <Text style={styles.statValueTertiary}>45,000 pts</Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { height: 64, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 24, backgroundColor: 'rgba(248, 249, 250, 0.8)', borderBottomWidth: 1, borderBottomColor: 'rgba(187, 202, 191, 0.3)' },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  avatarWrapper: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#10b981', overflow: 'hidden' },
  avatarImage: { width: '100%', height: '100%', resizeMode: 'cover' },
  logoText: { fontSize: 24, fontWeight: '800', color: '#006c49' },
  headerRight: { flexDirection: 'row', alignItems: 'center' },
  iconBtn: { padding: 8, borderRadius: 20 },
  scrollContent: { padding: 24, paddingBottom: 100 },
  pageHeader: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, marginBottom: 40 },
  pageTitle: { fontSize: 48, fontWeight: '800', color: '#191c1d', letterSpacing: -1, marginBottom: 8 },
  pageSubtitle: { fontSize: 18, color: '#3c4a42' },
  createBtn: { flexDirection: 'row', alignItems: 'center', gap: 8, backgroundColor: '#006c49', paddingHorizontal: 24, paddingVertical: 16, borderRadius: 8, elevation: 4 },
  createBtnText: { fontSize: 24, fontWeight: '600', color: '#fff' },
  tabsRow: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#bbcabf', marginBottom: 40 },
  tabBtn: { paddingHorizontal: 24, paddingVertical: 16, borderBottomWidth: 4, borderBottomColor: 'transparent' },
  tabBtnActive: { borderBottomColor: '#006c49' },
  tabBtnText: { fontSize: 16, color: '#3c4a42' },
  tabBtnTextActive: { fontWeight: '700', color: '#006c49' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 24, marginBottom: 64 },
  card: { flex: 1, minWidth: 300, backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: 8, overflow: 'hidden', borderWidth: 1, borderColor: 'rgba(255,255,255,0.3)', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 4 },
  cardImageWrapper: { height: 192, overflow: 'hidden' },
  cardImage: { width: '100%', height: '100%', resizeMode: 'cover' },
  timeBadge: { position: 'absolute', top: 16, right: 16, backgroundColor: 'rgba(255,255,255,0.9)', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 16 },
  timeBadgeText: { fontSize: 12, fontWeight: '700', color: '#006c49' },
  cardBody: { padding: 24 },
  cardHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 },
  cardTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d', marginBottom: 4 },
  cardSub: { fontSize: 12, fontWeight: '700', color: '#006b5f', letterSpacing: 1 },
  progressRingWrapper: { width: 64, height: 64 },
  progressRing: { width: '100%', height: '100%', borderRadius: 32, borderWidth: 4, borderColor: '#006c49', borderStyle: 'dotted', alignItems: 'center', justifyContent: 'center' },
  progressRingText: { fontSize: 12, fontWeight: '700', color: '#006c49' },
  cardActions: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginTop: 24 },
  manageBtn: { flex: 1, backgroundColor: '#10b981', paddingVertical: 12, borderRadius: 6, alignItems: 'center' },
  manageBtnText: { fontSize: 12, fontWeight: '700', color: '#00422b' },
  insightsBtn: { flex: 1, borderWidth: 1, borderColor: '#bbcabf', paddingVertical: 12, borderRadius: 6, alignItems: 'center' },
  insightsBtnText: { fontSize: 12, fontWeight: '700', color: '#3c4a42' },
  iconActionBtn: { padding: 12, borderWidth: 1, borderColor: '#bbcabf', borderRadius: 6 },
  statsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 24 },
  statBox: { flex: 1, minWidth: 200, padding: 24, borderRadius: 8 },
  statLabelPrimary: { fontSize: 12, fontWeight: '700', color: '#006c49', marginBottom: 24 },
  statValuePrimary: { fontSize: 48, fontWeight: '800', color: '#006c49' },
  statDescPrimary: { fontSize: 16, color: '#3c4a42', paddingBottom: 8 },
  statLabelSecondary: { fontSize: 12, fontWeight: '700', color: '#006b5f', marginBottom: 24 },
  statValueSecondary: { fontSize: 28, fontWeight: '700', color: '#006b5f' },
  statLabelTertiary: { fontSize: 12, fontWeight: '700', color: '#005ac2', marginBottom: 24 },
  statValueTertiary: { fontSize: 28, fontWeight: '700', color: '#005ac2' },
});
