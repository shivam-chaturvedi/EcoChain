import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function StudentsOverviewScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.iconBtn}>
            <Icon name="arrow-back" size={24} color="#006c49" />
          </TouchableOpacity>
          <View style={styles.logoWrapper}>
            <Image 
              source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzP84Mc39XOEavGE46KsXrcfkXQvLpC6LTPYUnzdrkWZMHdGM1Zi9qGHbwh-YdU_9cNWzfYgLrNnMEsfIVMjiI66l-3Z9Pu8sgfHNC9-dLAPvauDIY4j9AxXWn6FXueT-0pONzjhI1jlk48iXBRtg73NqmBoKDnbPqXffK8Pz3BGilXFoVs9HeJgXpsGuEaAe_XqhBBsQolYILb_4uophwvFsCFmRv988O-2TAZL3Ycv3MP6bVWK9qf8pBY8Y2b-S3DHxLt3rytyPl'}}
              style={styles.logoImage}
            />
          </View>
          <Text style={styles.logoText}>ChonX</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconBtn}>
            <Icon name="notifications" size={24} color="#006c49" />
          </TouchableOpacity>
          <View style={styles.adminAvatarWrapper}>
            <Icon name="person" size={24} color="#6c7a71" />
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.pageHeaderRow}>
          <View>
            <Text style={styles.pageTitle}>Students Overview</Text>
            <Text style={styles.pageSubtitle}>Manage and monitor student engagement in sustainable initiatives across the school.</Text>
          </View>
          <View style={styles.actionsRow}>
            <View style={styles.searchWrapper}>
              <Icon name="search" size={20} color="#6c7a71" style={styles.searchIcon} />
              <TextInput style={styles.searchInput} placeholder="Search by name or class..." placeholderTextColor="#6c7a71" />
            </View>
            <TouchableOpacity style={styles.filterBtn}>
              <Icon name="filter-list" size={20} color="#191c1d" />
              <Text style={styles.filterBtnText}>Filter</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>TOTAL STUDENTS</Text>
            <View style={styles.statValueRow}>
              <Text style={styles.statValue}>1,284</Text>
              <Text style={[styles.statTrend, { color: '#006c49' }]}>
                <Icon name="trending-up" size={14} color="#006c49" /> +4%
              </Text>
            </View>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>AVG. ECO-CREDITS</Text>
            <View style={styles.statValueRow}>
              <Text style={styles.statValue}>842</Text>
              <Text style={[styles.statTrend, { color: '#006b5f' }]}>Top 10%</Text>
            </View>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>ACTIVE INITIATIVES</Text>
            <View style={styles.statValueRow}>
              <Text style={styles.statValue}>12</Text>
              <Text style={[styles.statTrend, { color: '#005ac2' }]}>Live Now</Text>
            </View>
          </View>
        </View>

        {/* Table View (List) */}
        <View style={styles.tableCard}>
          <View style={styles.tableHeader}>
            <Text style={[styles.thText, { flex: 2 }]}>STUDENT</Text>
            <Text style={[styles.thText, { flex: 1 }]}>CLASS</Text>
            <Text style={[styles.thText, { flex: 1, textAlign: 'center' }]}>CREDITS</Text>
            <Text style={[styles.thText, { flex: 1, textAlign: 'center' }]}>ENGAGE</Text>
            <Text style={[styles.thText, { flex: 1, textAlign: 'right' }]}>ACTION</Text>
          </View>

          {/* Row 1 */}
          <View style={styles.tableRow}>
            <View style={[styles.tdContent, { flex: 2, flexDirection: 'row', alignItems: 'center', gap: 12 }]}>
              <Image source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcKF-Hx52q9bpbu1FqdzLVuW6G9aifKKjEFHjyAP1vJ8lxL6iRWf5Dh9-rHkgB8oz3tzbOENA7JAxpoGBcVmVOiDkp9__ytM9zGZIrsv4sVMR9G6BaeG63XgRejHSNNDl42LPSBK5sgW3xg4db1YK4yjg7vK-pZ8xXJH_54c7CYVCZOO7kJFnsIj0HBJzIAPlJTEN4-AGPUaykisflVmtnRWcJ_1r6VIf6WI3yXFNfmh53T_Ew6nm17VWdEhJiiDig_ABWwucZ9aYD'}} style={styles.studentAvatar} />
              <View>
                <Text style={styles.studentName}>Alex Rivera</Text>
                <Text style={styles.studentId}>ID: #STU-9283</Text>
              </View>
            </View>
            <Text style={[styles.tdText, { flex: 1 }]}>Grade 11-B</Text>
            <View style={[styles.tdContent, { flex: 1, alignItems: 'center' }]}>
              <View style={styles.creditBadge}>
                <Text style={styles.creditText}>2,450</Text>
              </View>
            </View>
            <View style={[styles.tdContent, { flex: 1, alignItems: 'center' }]}>
              <View style={[styles.engageBadge, { backgroundColor: 'rgba(0,108,73,0.1)', borderColor: 'rgba(0,108,73,0.2)' }]}>
                <Text style={[styles.engageText, { color: '#006c49' }]}>High</Text>
              </View>
            </View>
            <TouchableOpacity style={[styles.tdContent, { flex: 1, alignItems: 'flex-end' }]}>
              <Text style={styles.actionText}>View</Text>
            </TouchableOpacity>
          </View>

          {/* Row 2 */}
          <View style={styles.tableRow}>
            <View style={[styles.tdContent, { flex: 2, flexDirection: 'row', alignItems: 'center', gap: 12 }]}>
              <Image source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChqUwJutGcJueLauNWoB4I3VJIabthHAswvvZD8Y3nWWu2lFklFmgadVletrZbn9tU9WxSX1iOxCYSMfRA0PdUXfWbFJ0jCvKtg0shcR_vUyEoJivAMIaB3VyMYRu0oiX_iwkORwDVLVgqQZIBQr3JJ-lvRBp4q3opUtn77nZpNDRKulqrCGHSBVpeWrCTGfICUzCLMDaW4fBuyBE9CqvhbYW1fCoqBKv0Zbyp1JuahPjWm6gT_XFXbRvsa-APhDMfteUI5Jx1G53M'}} style={styles.studentAvatar} />
              <View>
                <Text style={styles.studentName}>Sarah Jenkins</Text>
                <Text style={styles.studentId}>ID: #STU-8472</Text>
              </View>
            </View>
            <Text style={[styles.tdText, { flex: 1 }]}>Grade 12-A</Text>
            <View style={[styles.tdContent, { flex: 1, alignItems: 'center' }]}>
              <View style={styles.creditBadge}>
                <Text style={styles.creditText}>1,120</Text>
              </View>
            </View>
            <View style={[styles.tdContent, { flex: 1, alignItems: 'center' }]}>
              <View style={[styles.engageBadge, { backgroundColor: 'rgba(0,107,95,0.1)', borderColor: 'rgba(0,107,95,0.2)' }]}>
                <Text style={[styles.engageText, { color: '#006b5f' }]}>Medium</Text>
              </View>
            </View>
            <TouchableOpacity style={[styles.tdContent, { flex: 1, alignItems: 'flex-end' }]}>
              <Text style={styles.actionText}>View</Text>
            </TouchableOpacity>
          </View>

          {/* Row 3 */}
          <View style={styles.tableRow}>
            <View style={[styles.tdContent, { flex: 2, flexDirection: 'row', alignItems: 'center', gap: 12 }]}>
              <Image source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuifdfcDnmVzPnsd-WEPMiUI1QJHgDDXdyRFpD6nvx9Jd-FsthjT2HGNC_NvPEeCuuyPfby4sPvmtybErP1Pf65fTU-AJvkfnx3IFA53dCIJvi6tMuzB4k4KBJejtMdcptgsFaVpc9dVuAZQoNlr_3Tx55XR2cQQmEdSeYmKq2v8u2tDUV-93KtNueTjQh7I4atNMSdejTQp2vhHNwk-1PwbQogZV4twsAvdu80RXc1-6H4K93kdZdxpJ4sswMqU7dwGpPdpZEGx84'}} style={styles.studentAvatar} />
              <View>
                <Text style={styles.studentName}>Marcus Chen</Text>
                <Text style={styles.studentId}>ID: #STU-3321</Text>
              </View>
            </View>
            <Text style={[styles.tdText, { flex: 1 }]}>Grade 10-C</Text>
            <View style={[styles.tdContent, { flex: 1, alignItems: 'center' }]}>
              <View style={styles.creditBadge}>
                <Text style={styles.creditText}>450</Text>
              </View>
            </View>
            <View style={[styles.tdContent, { flex: 1, alignItems: 'center' }]}>
              <View style={[styles.engageBadge, { backgroundColor: 'rgba(186,26,26,0.1)', borderColor: 'rgba(186,26,26,0.2)' }]}>
                <Text style={[styles.engageText, { color: '#ba1a1a' }]}>Low</Text>
              </View>
            </View>
            <TouchableOpacity style={[styles.tdContent, { flex: 1, alignItems: 'flex-end' }]}>
              <Text style={styles.actionText}>View</Text>
            </TouchableOpacity>
          </View>

          {/* Row 4 (Premium) */}
          <View style={styles.tableRow}>
            <View style={[styles.tdContent, { flex: 2, flexDirection: 'row', alignItems: 'center', gap: 12 }]}>
              <View style={{position: 'relative'}}>
                <Image source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4Ys8tuZRwigGDWrwUiZdqUXBk-Ave4UaMtI8PDvbg3N1qIDrXSnLeNXNG-UhgifZLOh2kKMUIKefUYwooSyixFpdRK0sAocRycSyIVJGjo8ciMZl3mf23wNThZqX_mgQQbnMFx6Yr21rGYf56ybNOOIoA67dpHSVD6PzeJbqjdEbldS3cCgSlVbjMSsNFUjrf3uFhZ_mtPnvxrzn9dstOU61yNcqvfSa-A8atGLnfQGFXEyZpVUnBxygxWtXZ8V-HCItVAuDyIxki'}} style={[styles.studentAvatar, { borderWidth: 2, borderColor: '#006c49' }]} />
                <View style={styles.starBadge}>
                  <Icon name="star" size={8} color="#fff" />
                </View>
              </View>
              <View>
                <Text style={styles.studentName}>Elena Vogt</Text>
                <Text style={styles.studentId}>ID: #STU-1104</Text>
              </View>
            </View>
            <Text style={[styles.tdText, { flex: 1 }]}>Grade 12-B</Text>
            <View style={[styles.tdContent, { flex: 1, alignItems: 'center' }]}>
              <View style={styles.creditBadge}>
                <Text style={styles.creditText}>5,820</Text>
              </View>
            </View>
            <View style={[styles.tdContent, { flex: 1, alignItems: 'center' }]}>
              <View style={[styles.engageBadge, { backgroundColor: 'rgba(0,108,73,0.1)', borderColor: 'rgba(0,108,73,0.2)' }]}>
                <Text style={[styles.engageText, { color: '#006c49' }]}>High</Text>
              </View>
            </View>
            <TouchableOpacity style={[styles.tdContent, { flex: 1, alignItems: 'flex-end' }]}>
              <Text style={styles.actionText}>View</Text>
            </TouchableOpacity>
          </View>
          
          {/* Pagination */}
          <View style={styles.pagination}>
            <Text style={styles.pageInfoText}>Showing 1 to 10 of 1,284 students</Text>
            <View style={styles.pageControls}>
              <TouchableOpacity style={styles.pageBtn}><Icon name="chevron-left" size={18} color="#191c1d" /></TouchableOpacity>
              <TouchableOpacity style={[styles.pageBtn, styles.pageBtnActive]}><Text style={styles.pageBtnTextActive}>1</Text></TouchableOpacity>
              <TouchableOpacity style={styles.pageBtn}><Text style={styles.pageBtnText}>2</Text></TouchableOpacity>
              <TouchableOpacity style={styles.pageBtn}><Text style={styles.pageBtnText}>3</Text></TouchableOpacity>
              <TouchableOpacity style={styles.pageBtn}><Icon name="chevron-right" size={18} color="#191c1d" /></TouchableOpacity>
            </View>
          </View>
        </View>

      </ScrollView>

      {/* FAB */}
      <TouchableOpacity style={styles.fab}>
        <Icon name="person-add" size={28} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { height: 64, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 24, backgroundColor: 'rgba(248, 249, 250, 0.8)', borderBottomWidth: 1, borderBottomColor: 'rgba(187, 202, 191, 0.3)' },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  iconBtn: { padding: 8, borderRadius: 20 },
  logoWrapper: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#10b981', overflow: 'hidden' },
  logoImage: { width: '100%', height: '100%', resizeMode: 'cover' },
  logoText: { fontSize: 24, fontWeight: '800', color: '#006c49', letterSpacing: -0.5 },
  headerRight: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  adminAvatarWrapper: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#e1e3e4', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'rgba(187,202,191,0.3)' },
  scrollContent: { padding: 24, paddingBottom: 100 },
  pageHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, marginBottom: 40 },
  pageTitle: { fontSize: 32, fontWeight: '700', color: '#191c1d' },
  pageSubtitle: { fontSize: 16, color: '#3c4a42', marginTop: 8 },
  actionsRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  searchWrapper: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f3f4f5', borderRadius: 8, paddingHorizontal: 16, height: 48, minWidth: 250 },
  searchIcon: { marginRight: 8 },
  searchInput: { flex: 1, fontSize: 16, color: '#191c1d' },
  filterBtn: { flexDirection: 'row', alignItems: 'center', gap: 8, backgroundColor: '#e7e8e9', height: 48, paddingHorizontal: 16, borderRadius: 8 },
  filterBtnText: { fontSize: 12, fontWeight: '700', color: '#191c1d', textTransform: 'uppercase' },
  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 24, marginBottom: 40 },
  statCard: { flex: 1, minWidth: '30%', backgroundColor: 'rgba(255,255,255,0.8)', padding: 24, borderRadius: 8, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)' },
  statLabel: { fontSize: 12, fontWeight: '700', color: '#3c4a42', marginBottom: 8 },
  statValueRow: { flexDirection: 'row', alignItems: 'flex-end', gap: 8 },
  statValue: { fontSize: 28, fontWeight: '700', color: '#191c1d' },
  statTrend: { fontSize: 14, fontWeight: '700', paddingBottom: 4 },
  tableCard: { backgroundColor: '#fff', borderRadius: 8, borderWidth: 1, borderColor: 'rgba(187,202,191,0.3)', overflow: 'hidden' },
  tableHeader: { flexDirection: 'row', paddingHorizontal: 24, paddingVertical: 16, backgroundColor: 'rgba(243,244,245,0.5)', borderBottomWidth: 1, borderBottomColor: 'rgba(187,202,191,0.3)' },
  thText: { fontSize: 12, fontWeight: '700', color: '#3c4a42' },
  tableRow: { flexDirection: 'row', paddingHorizontal: 24, paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: 'rgba(187,202,191,0.2)', alignItems: 'center' },
  tdContent: { justifyContent: 'center' },
  tdText: { fontSize: 16, color: '#3c4a42' },
  studentAvatar: { width: 40, height: 40, borderRadius: 20, borderWidth: 2, borderColor: 'rgba(16,185,129,0.3)' },
  studentName: { fontSize: 16, fontWeight: '600', color: '#191c1d' },
  studentId: { fontSize: 12, color: '#3c4a42' },
  creditBadge: { backgroundColor: '#6df5e1', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 16 },
  creditText: { fontSize: 14, fontWeight: '700', color: '#006f64' },
  engageBadge: { borderWidth: 1, paddingHorizontal: 12, paddingVertical: 4, borderRadius: 16 },
  engageText: { fontSize: 10, fontWeight: '700', textTransform: 'uppercase' },
  actionText: { fontSize: 12, fontWeight: '700', color: '#006c49' },
  starBadge: { position: 'absolute', top: -4, right: -4, backgroundColor: '#006c49', padding: 2, borderRadius: 8, borderWidth: 2, borderColor: '#fff' },
  pagination: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, paddingVertical: 16, backgroundColor: 'rgba(243,244,245,0.3)' },
  pageInfoText: { fontSize: 14, color: '#3c4a42' },
  pageControls: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  pageBtn: { width: 32, height: 32, borderRadius: 6, borderWidth: 1, borderColor: '#bbcabf', alignItems: 'center', justifyContent: 'center' },
  pageBtnActive: { backgroundColor: '#006c49', borderColor: '#006c49' },
  pageBtnText: { fontSize: 14, fontWeight: '500', color: '#191c1d' },
  pageBtnTextActive: { fontSize: 14, fontWeight: '700', color: '#fff' },
  fab: { position: 'absolute', bottom: 48, right: 48, width: 64, height: 64, borderRadius: 32, backgroundColor: '#006c49', alignItems: 'center', justifyContent: 'center', elevation: 8, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8 },
});
