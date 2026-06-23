import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TextInput,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function SchoolInitiativesListScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Icon name="eco" size={28} color="#006c49" />
          <Text style={styles.logoText}>ChonX</Text>
        </View>
        <View style={styles.headerRight}>
          <View style={styles.avatarWrapper}>
            <Image 
              source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCj75O1ZyvBITCtUyILOYJFE4iDI6WpvKDVuIvbrNo3t64FzZC2JrpxjGYwOS0B5O2EnNUadZFwLeJ9gS8Bp8tiTaWPQiuzGOhVSaRNPjqzdTglMRizyzR3ahL78wUVsdN9pdT9g8t6jnmFbhJzQ1zR12jvgfqOdBdrSHXmD4TftAQx7Y5TxlB4hZz5b9TcN78XXGTrL5tTcoff-1AXntdrt094HyhXPd1yVlbBs-abUcVt9jp5lzPBD7s7DWQ7PK3C-MoVZhvKjHjY'}}
              style={styles.avatarImage}
            />
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.heroSection}>
          <View style={styles.heroTextContent}>
            <Text style={styles.heroTitle}>School Initiatives</Text>
            <Text style={styles.heroSubtitle}>Manage and monitor ecological campaigns across all grades.</Text>
          </View>
          <View style={styles.searchRow}>
            <View style={styles.searchBar}>
              <Icon name="search" size={20} color="rgba(60, 74, 66, 0.6)" style={styles.searchIcon} />
              <TextInput 
                style={styles.searchInput}
                placeholder="Search teacher or class..."
                placeholderTextColor="rgba(60, 74, 66, 0.6)"
              />
            </View>
            <TouchableOpacity style={styles.filterBtn}>
              <Icon name="filter-list" size={24} color="#3c4a42" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statBoxLeft}>
            <Text style={styles.statLabel}>ACTIVE NOW</Text>
            <Text style={styles.statValueActive}>12 Initiatives</Text>
            <View style={styles.avatarsRow}>
              <Image source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgA706bfi8dk5s1-xkulMZCKxJ_GHVFGJxxo_ZzfnW4jMHZ-c7fE_ANgtBKo9C3eFnvHgtXVICPo9fLWT1vkLwCYv-KE1IResB5jvgmHv070iRKEhcH5iQUtqPpZFS-bOrxUmaJJ3FZMn7GQOY1eAMx2aBz9PhsVmUUFM51q0Er_5oT6rvGo27nCOHt3gcOLqx_vpSLtAvx6LaWgLhKtbqpUOl5EDPIs5sX4mZZu8RqlXa5y7VpJyl9aWKn4sxIpJW28aqko1Q5oeq'}} style={[styles.overlapAvatar, { zIndex: 3 }]} />
              <Image source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-UJF1RFnZMhu1wES7IOpn5acFUqe27wHCIE19ZpynGlYXp0IgE7K7XGR-DoDs69liTasCjbwFYZhMBC2VPc4gpQwefPou-PZ3oshMedQIe9k97W7UJlla2FLDh-ge5T1bY50MZcE8oM87C4a4IYIS_ZD5SWr6O_FE-8jUVnWAhqQ_jU3JGTha5ixExPFMq3-HwMvTQcc6ZUyFdkBk53W4qqMO8BL5bHIUTPy9U5YUnjM8CX3SfXVgljAziNeI1uMoinXxDfv33n5_'}} style={[styles.overlapAvatar, { zIndex: 2, marginLeft: -8 }]} />
              <View style={[styles.overlapAvatarMore, { zIndex: 1, marginLeft: -8 }]}>
                <Text style={styles.overlapAvatarMoreText}>+5</Text>
              </View>
            </View>
          </View>
          <View style={styles.statBoxRight}>
            <View style={styles.impactHeader}>
              <View>
                <Text style={styles.statLabel}>IMPACT LEVEL</Text>
                <Text style={styles.statValueSecondary}>Global Sustainability Goal</Text>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={styles.impactPercent}>74%</Text>
                <Text style={styles.impactLabel}>Term Goal</Text>
              </View>
            </View>
            <View style={styles.impactProgressBarBg}>
              <View style={[styles.impactProgressBarFill, { width: '74%' }]} />
            </View>
          </View>
        </View>

        <View style={styles.listSection}>
          <View style={styles.listHeader}>
            <Text style={styles.listTitle}>Assigned Initiatives</Text>
            <Text style={styles.listSubtitle}>Showing 24 Activities</Text>
          </View>

          <View style={styles.listGrid}>
            {/* Item 1 */}
            <View style={styles.listItem}>
              <View style={[styles.itemIconBg, { backgroundColor: 'rgba(0,108,73,0.1)' }]}>
                <Icon name="delete-sweep" size={32} color="#006c49" />
              </View>
              <View style={styles.itemContent}>
                <Text style={styles.itemTitle}>Zero Waste Lunch</Text>
                <View style={styles.itemMetaRow}>
                  <Icon name="person" size={18} color="#3c4a42" />
                  <Text style={styles.itemMetaText}>Ms. Sarah Johnson</Text>
                </View>
                <View style={styles.itemMetaRow}>
                  <Icon name="groups" size={18} color="#3c4a42" />
                  <Text style={styles.itemMetaText}>Grade 4 - Sec A, B</Text>
                </View>
                <View style={styles.itemMetaRowBottom}>
                  <View style={styles.itemMetaRow}>
                    <Icon name="calendar-today" size={18} color="#3c4a42" />
                    <Text style={styles.itemMetaText}>Oct 24, 2023</Text>
                  </View>
                  <View style={styles.itemMetaRow}>
                    <Icon name="schedule" size={18} color="#3c4a42" />
                    <Text style={styles.itemMetaText}>45 mins</Text>
                  </View>
                </View>
              </View>
              <View style={[styles.statusBadge, { backgroundColor: '#6df5e1' }]}>
                <Text style={[styles.statusBadgeText, { color: '#006f64' }]}>Upcoming</Text>
              </View>
            </View>

            {/* Item 2 */}
            <View style={styles.listItem}>
              <View style={[styles.itemIconBg, { backgroundColor: 'rgba(0,90,194,0.1)' }]}>
                <Icon name="potted-plant" size={32} color="#005ac2" />
              </View>
              <View style={styles.itemContent}>
                <Text style={styles.itemTitle}>Community Garden Care</Text>
                <View style={styles.itemMetaRow}>
                  <Icon name="person" size={18} color="#3c4a42" />
                  <Text style={styles.itemMetaText}>Mr. David Chen</Text>
                </View>
                <View style={styles.itemMetaRow}>
                  <Icon name="groups" size={18} color="#3c4a42" />
                  <Text style={styles.itemMetaText}>Grade 6 - Sec C</Text>
                </View>
                <View style={styles.itemMetaRowBottom}>
                  <View style={styles.itemMetaRow}>
                    <Icon name="calendar-today" size={18} color="#3c4a42" />
                    <Text style={styles.itemMetaText}>Oct 20, 2023</Text>
                  </View>
                  <View style={styles.itemMetaRow}>
                    <Icon name="schedule" size={18} color="#3c4a42" />
                    <Text style={styles.itemMetaText}>60 mins</Text>
                  </View>
                </View>
              </View>
              <View style={[styles.statusBadge, { backgroundColor: '#e1e3e4', opacity: 0.8 }]}>
                <Text style={[styles.statusBadgeText, { color: '#3c4a42' }]}>Completed</Text>
              </View>
            </View>

            {/* Item 3 */}
            <View style={styles.listItem}>
              <View style={[styles.itemIconBg, { backgroundColor: 'rgba(16,185,129,0.2)' }]}>
                <Icon name="wb-sunny" size={32} color="#006c49" />
              </View>
              <View style={styles.itemContent}>
                <Text style={styles.itemTitle}>Solar Panel Workshop</Text>
                <View style={styles.itemMetaRow}>
                  <Icon name="person" size={18} color="#3c4a42" />
                  <Text style={styles.itemMetaText}>Ms. Elena Rodriguez</Text>
                </View>
                <View style={styles.itemMetaRow}>
                  <Icon name="groups" size={18} color="#3c4a42" />
                  <Text style={styles.itemMetaText}>Grade 9 - All Sections</Text>
                </View>
                <View style={styles.itemMetaRowBottom}>
                  <View style={styles.itemMetaRow}>
                    <Icon name="calendar-today" size={18} color="#3c4a42" />
                    <Text style={styles.itemMetaText}>Oct 26, 2023</Text>
                  </View>
                  <View style={styles.itemMetaRow}>
                    <Icon name="schedule" size={18} color="#3c4a42" />
                    <Text style={styles.itemMetaText}>90 mins</Text>
                  </View>
                </View>
              </View>
              <View style={[styles.statusBadge, { backgroundColor: '#6df5e1' }]}>
                <Text style={[styles.statusBadgeText, { color: '#006f64' }]}>Upcoming</Text>
              </View>
            </View>

            {/* Item 4 */}
            <View style={styles.listItem}>
              <View style={[styles.itemIconBg, { backgroundColor: '#ffedd5' }]}>
                <Icon name="water-drop" size={32} color="#ea580c" />
              </View>
              <View style={styles.itemContent}>
                <Text style={styles.itemTitle}>Water Conservation Talk</Text>
                <View style={styles.itemMetaRow}>
                  <Icon name="person" size={18} color="#3c4a42" />
                  <Text style={styles.itemMetaText}>Mr. James Wilson</Text>
                </View>
                <View style={styles.itemMetaRow}>
                  <Icon name="groups" size={18} color="#3c4a42" />
                  <Text style={styles.itemMetaText}>Grade 5 - Sec B, D</Text>
                </View>
                <View style={styles.itemMetaRowBottom}>
                  <View style={styles.itemMetaRow}>
                    <Icon name="calendar-today" size={18} color="#3c4a42" />
                    <Text style={styles.itemMetaText}>Oct 18, 2023</Text>
                  </View>
                  <View style={styles.itemMetaRow}>
                    <Icon name="schedule" size={18} color="#3c4a42" />
                    <Text style={styles.itemMetaText}>30 mins</Text>
                  </View>
                </View>
              </View>
              <View style={[styles.statusBadge, { backgroundColor: '#e1e3e4', opacity: 0.8 }]}>
                <Text style={[styles.statusBadgeText, { color: '#3c4a42' }]}>Completed</Text>
              </View>
            </View>

          </View>
        </View>

      </ScrollView>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <View style={styles.navItem}>
          <Icon name="dashboard" size={24} color="#3c4a42" />
          <Text style={styles.navText}>Dashboard</Text>
        </View>
        <View style={styles.navItemActive}>
          <Icon name="potted-plant" size={24} color="#00422b" />
          <Text style={styles.navTextActive}>Initiatives</Text>
        </View>
        <View style={styles.navItem}>
          <Icon name="visibility" size={24} color="#3c4a42" />
          <Text style={styles.navText}>Overview</Text>
        </View>
        <View style={styles.navItem}>
          <Icon name="analytics" size={24} color="#3c4a42" />
          <Text style={styles.navText}>Analytics</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { height: 64, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 24, backgroundColor: 'rgba(248, 249, 250, 0.8)', borderBottomWidth: 1, borderBottomColor: 'rgba(187, 202, 191, 0.3)' },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  logoText: { fontSize: 24, fontWeight: '800', color: '#006c49', letterSpacing: -0.5 },
  headerRight: { flexDirection: 'row', alignItems: 'center' },
  avatarWrapper: { width: 40, height: 40, borderRadius: 20, borderWidth: 2, borderColor: '#10b981', overflow: 'hidden' },
  avatarImage: { width: '100%', height: '100%', resizeMode: 'cover' },
  scrollContent: { padding: 24, paddingBottom: 100 },
  heroSection: { marginBottom: 32 },
  heroTextContent: { marginBottom: 16 },
  heroTitle: { fontSize: 32, fontWeight: '700', color: '#191c1d', marginBottom: 8 },
  heroSubtitle: { fontSize: 16, color: '#3c4a42' },
  searchRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  searchBar: { flex: 1, position: 'relative' },
  searchIcon: { position: 'absolute', left: 16, top: 14, zIndex: 1 },
  searchInput: { backgroundColor: '#f3f4f5', height: 48, borderRadius: 24, paddingLeft: 48, paddingRight: 16, fontSize: 16 },
  filterBtn: { width: 48, height: 48, borderRadius: 24, backgroundColor: '#fff', borderWidth: 1, borderColor: 'rgba(187,202,191,0.3)', alignItems: 'center', justifyContent: 'center' },
  statsRow: { flexDirection: 'row', gap: 16, marginBottom: 40, flexWrap: 'wrap' },
  statBoxLeft: { flex: 1, minWidth: 200, backgroundColor: 'rgba(255,255,255,0.8)', padding: 24, borderRadius: 16, borderLeftWidth: 4, borderLeftColor: '#006c49', borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)' },
  statBoxRight: { flex: 2, minWidth: 300, backgroundColor: 'rgba(16,185,129,0.05)', padding: 24, borderRadius: 16, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)' },
  statLabel: { fontSize: 12, fontWeight: '700', color: '#3c4a42', marginBottom: 4, letterSpacing: 0.5 },
  statValueActive: { fontSize: 28, fontWeight: '700', color: '#006c49', marginBottom: 16 },
  statValueSecondary: { fontSize: 24, fontWeight: '600', color: '#006b5f' },
  avatarsRow: { flexDirection: 'row' },
  overlapAvatar: { width: 32, height: 32, borderRadius: 16, borderWidth: 2, borderColor: '#fff' },
  overlapAvatarMore: { width: 32, height: 32, borderRadius: 16, borderWidth: 2, borderColor: '#fff', backgroundColor: '#10b981', alignItems: 'center', justifyContent: 'center' },
  overlapAvatarMoreText: { fontSize: 10, fontWeight: '700', color: '#00422b' },
  impactHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  impactPercent: { fontSize: 28, fontWeight: '700', color: '#191c1d' },
  impactLabel: { fontSize: 12, color: '#3c4a42' },
  impactProgressBarBg: { height: 12, backgroundColor: '#e7e8e9', borderRadius: 6, overflow: 'hidden' },
  impactProgressBarFill: { height: '100%', backgroundColor: '#006c49', borderRadius: 6 },
  listSection: {},
  listHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 },
  listTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d' },
  listSubtitle: { fontSize: 12, fontWeight: '700', color: '#3c4a42' },
  listGrid: { gap: 16 },
  listItem: { backgroundColor: 'rgba(255,255,255,0.8)', padding: 24, borderRadius: 16, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)', flexDirection: 'row', gap: 24, flexWrap: 'wrap' },
  itemIconBg: { width: 64, height: 64, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  itemContent: { flex: 1, minWidth: 200 },
  itemTitle: { fontSize: 18, fontWeight: '600', color: '#191c1d', marginBottom: 8 },
  itemMetaRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 4 },
  itemMetaText: { fontSize: 14, color: '#3c4a42' },
  itemMetaRowBottom: { flexDirection: 'row', gap: 16, marginTop: 4 },
  statusBadge: { alignSelf: 'flex-start', paddingHorizontal: 16, paddingVertical: 6, borderRadius: 16 },
  statusBadgeText: { fontSize: 12, fontWeight: '700' },
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
