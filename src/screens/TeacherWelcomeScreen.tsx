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
import LinearGradient from 'react-native-linear-gradient';

export default function TeacherWelcomeScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>ChonX</Text>
        <View style={styles.headerRight}>
          <Text style={styles.headerBadgeText}>EDUCATOR PORTAL</Text>
          <View style={styles.headerAvatar}>
            <Image source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEjaAvIH9AM0x8VU2MbZVN5g0j9H6hCwn3U7iweERwBCTKs3DXbecB9XdNJF5sCmbpMsIDNys0I4cTDMHlB04t83mJ8su3zEHtN84JtZzSYSYHYegiPuIhdfBMCV99oNsWtflkFj86oNTJ2UWLdTsNhAgc2NaphIUjfBta5j-mJv9g3zQhtQK4oZJG-7JmamQxEBpjQfsXC1Wp6aXQPZZLRBNf_IfDIrwdE-1fLk-sJFHU-QLR4IE6BRCpHhiZr4QRClLxBJcDTN42'}} style={styles.imageFull} />
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <View style={styles.modeBadge}>
            <Icon name="auto-awesome" size={20} color="#006b5f" />
            <Text style={styles.modeBadgeText}>TEACHER EMPOWERMENT MODE</Text>
          </View>
          <Text style={styles.heroTitle}>Empower your students for a <Text style={{fontStyle: 'italic', color: '#006c49'}}>greener future.</Text></Text>
          <Text style={styles.heroSubtitle}>Manage your classes, track environmental progress, and lead sustainability campaigns with ChonX's integrated educator dashboard.</Text>
          <TouchableOpacity style={styles.startBtn} onPress={() => navigation.navigate('TeacherDashboard')}>
            <LinearGradient colors={['#10b981', '#006b5f']} style={styles.startGradient} start={{x: 0, y: 0}} end={{x: 1, y: 1}}>
              <Text style={styles.startText}>Get Started</Text>
              <Icon name="arrow-forward" size={24} color="#fff" />
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Bento Grid */}
        <View style={styles.bentoSection}>
          <Text style={styles.sectionTitle}>Precision-engineered tools for leaders.</Text>
          <Text style={styles.sectionSubtitle}>Built for efficiency, designed for impact.</Text>

          {/* Class Management */}
          <View style={styles.bentoCard}>
            <View style={[styles.bentoIconBox, { backgroundColor: '#10b981' }]}>
              <Icon name="school" size={24} color="#00422b" />
            </View>
            <Text style={styles.bentoTitle}>Intuitive Class Management</Text>
            <Text style={styles.bentoDesc}>Seamlessly organize your students into teams, assign eco-challenges, and monitor participation with high-fidelity analytics.</Text>
            <View style={styles.avatarRow}>
              <Image source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWMmRjrmaTzH_Jee15M-NsfC3d4-iuhLq2L0RMaE6kbCWp7nVJN-mMhcx8VaebOfLIybLOXjq15MEzCp5DABCGaAPbU7goNq9hGiBLPT_yhZoVWBBHppx4gi91sJ2DmidJyd7dLyW3YyREaEpBf044OzozfLGi7D8464XDVfj0HPXjo8xWWeWo7GhY4qmEphb9Y9Mwb4fLaSnqp3pPRtjghAapyX2TzeU0dAah9FronOAQZga6552WsHdqwPQ33gXCM7MQ03U2MZOS'}} style={styles.bentoAvatar} />
              <Image source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBERrdPoGv5NnNyWUr6jmbeYaYDEH1x8e1FfoRAnyFQVUrm6YdopWeRi-H8Op2UESXBEz63ywGZZQYbHLmqknXuST56C_Wf2iUak7EhuGxQTWuod8_brEHiwL3BwO0iw1h-P92CGKm79MZxKYpNYJj204kR-SoXeJsvTRhXbdRDQnpJaER25FtUc2gwHbUPY8krcEeOFc8YL8AUNJYl80zJxh5LAz9UCN00vV245FmBr5lQggYQHgxMTF9Hme67-swvhLAZ2llkOT4D'}} style={[styles.bentoAvatar, { marginLeft: -12 }]} />
              <Image source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2pzO2Ya1xfsvZJJS4LuHqld33_sRRlNFBW9XKjnrNq9232umAGsuXGocNO1e_vGbv7O7ZU6CS_dCldxYDLtQKRLAFOU7UA45d9arTkhzXrql_cpcbYWiPQuKikgFnhLsBqa8GQ6PE6ogy7r-4x4y5Zjvq5SXf8feQaB9XKK3XMh3zi4zUQdKYgEUbqTNnoKuzoQ0c5Z8DiyChxmtziIGV2t8a7sXkSDvRnn6Eg3JJc5u4Ly3PUd90a48hRyxI5p5vzea4yxe51QMw'}} style={[styles.bentoAvatar, { marginLeft: -12 }]} />
              <View style={[styles.bentoAvatarExtra, { marginLeft: -12 }]}><Text style={{fontSize: 12, fontWeight: 'bold'}}>+28</Text></View>
            </View>
            <Icon name="groups" size={100} color="rgba(0,0,0,0.03)" style={styles.bentoBgIcon} />
          </View>

          {/* Progress */}
          <View style={[styles.bentoCard, { backgroundColor: 'rgba(113,161,255,0.1)' }]}>
            <View style={[styles.bentoIconBox, { backgroundColor: '#71a1ff' }]}>
              <Icon name="analytics" size={24} color="#00367a" />
            </View>
            <Text style={styles.bentoTitle}>Live Progress</Text>
            <Text style={styles.bentoDesc}>Real-time telemetry of your school's environmental impact metrics, from energy saved to plastic reduced.</Text>
            <View style={styles.progressTracker}>
              <View style={styles.progressBarWrapper}>
                <View style={[styles.progressBar, { width: '75%', backgroundColor: '#005ac2' }]} />
              </View>
              <View style={styles.progressLabels}>
                <Text style={styles.progressLabelText}>CO2 REDUCTION</Text>
                <Text style={[styles.progressLabelText, { color: '#005ac2' }]}>75% GOAL</Text>
              </View>
            </View>
          </View>

          {/* Campaigns */}
          <View style={[styles.bentoCard, { backgroundColor: 'rgba(109,245,225,0.2)' }]}>
            <View style={[styles.bentoIconBox, { backgroundColor: '#6df5e1' }]}>
              <Icon name="campaign" size={24} color="#006f64" />
            </View>
            <Text style={styles.bentoTitle}>Campaign Engine</Text>
            <Text style={styles.bentoDesc}>Launch district-wide sustainability competitions with curated mission templates designed by climate experts.</Text>
            <View style={styles.templatePill}>
              <Icon name="verified" size={16} color="#006b5f" />
              <Text style={styles.templatePillText}>Zero-Waste Week Template</Text>
            </View>
          </View>
        </View>

        {/* Social Proof */}
        <View style={styles.socialProof}>
          <LinearGradient colors={['#10b981', '#006b5f']} style={styles.socialTopBorder} start={{x: 0, y: 0}} end={{x: 1, y: 0}} />
          <Text style={styles.socialTag}>THE CHONX NETWORK</Text>
          <Text style={styles.socialTitle}>Join 4,500+ educators leading the shift.</Text>
          
          <View style={styles.socialStatsGrid}>
            <View style={styles.socialStat}>
              <Text style={styles.socialStatValue}>1.2M+</Text>
              <Text style={styles.socialStatLabel}>PLASTIC BOTTLES SAVED</Text>
            </View>
            <View style={styles.socialStat}>
              <Text style={styles.socialStatValue}>280k</Text>
              <Text style={styles.socialStatLabel}>STUDENTS ENGAGED</Text>
            </View>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { height: 64, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 24, backgroundColor: 'rgba(248, 249, 250, 0.8)', borderBottomWidth: 1, borderBottomColor: 'rgba(187, 202, 191, 0.3)' },
  headerTitle: { fontSize: 24, fontWeight: '800', color: '#006c49' },
  headerRight: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  headerBadgeText: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 2 },
  headerAvatar: { width: 40, height: 40, borderRadius: 20, borderWidth: 2, borderColor: '#6ffbbe', overflow: 'hidden' },
  imageFull: { width: '100%', height: '100%', resizeMode: 'cover' },
  scrollContent: { padding: 24, paddingBottom: 64 },
  heroSection: { marginBottom: 64 },
  modeBadge: { flexDirection: 'row', alignItems: 'center', gap: 8, backgroundColor: 'rgba(109,245,225,0.3)', alignSelf: 'flex-start', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 20, borderWidth: 1, borderColor: '#6df5e1', marginBottom: 24 },
  modeBadgeText: { fontSize: 12, fontWeight: '700', color: '#006f64' },
  heroTitle: { fontSize: 48, fontWeight: '800', color: '#191c1d', marginBottom: 16, lineHeight: 56, letterSpacing: -1 },
  heroSubtitle: { fontSize: 18, color: '#3c4a42', marginBottom: 32, lineHeight: 28 },
  startBtn: { alignSelf: 'flex-start', borderRadius: 8, elevation: 4 },
  startGradient: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 40, paddingVertical: 16, borderRadius: 8 },
  startText: { fontSize: 24, fontWeight: '600', color: '#fff' },
  bentoSection: { marginBottom: 64 },
  sectionTitle: { fontSize: 32, fontWeight: '700', color: '#191c1d', textAlign: 'center' },
  sectionSubtitle: { fontSize: 16, color: '#3c4a42', textAlign: 'center', marginTop: 12, marginBottom: 32 },
  bentoCard: { backgroundColor: '#fff', borderRadius: 8, padding: 24, borderWidth: 1, borderColor: 'rgba(187,202,191,0.3)', elevation: 1, marginBottom: 24, overflow: 'hidden' },
  bentoBgIcon: { position: 'absolute', top: 24, right: 24 },
  bentoIconBox: { width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center', marginBottom: 24 },
  bentoTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d', marginBottom: 12 },
  bentoDesc: { fontSize: 16, color: '#3c4a42', marginBottom: 24 },
  avatarRow: { flexDirection: 'row', alignItems: 'center' },
  bentoAvatar: { width: 40, height: 40, borderRadius: 20, borderWidth: 2, borderColor: '#fff' },
  bentoAvatarExtra: { width: 40, height: 40, borderRadius: 20, borderWidth: 2, borderColor: '#fff', backgroundColor: '#e1e3e4', alignItems: 'center', justifyContent: 'center' },
  progressTracker: { marginTop: 12 },
  progressBarWrapper: { height: 8, backgroundColor: '#edeeef', borderRadius: 4, overflow: 'hidden', marginBottom: 8 },
  progressBar: { height: '100%', borderRadius: 4 },
  progressLabels: { flexDirection: 'row', justifyContent: 'space-between' },
  progressLabelText: { fontSize: 12, fontWeight: '700' },
  templatePill: { flexDirection: 'row', alignItems: 'center', gap: 8, backgroundColor: 'rgba(255,255,255,0.5)', alignSelf: 'flex-start', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 8, borderWidth: 1, borderColor: '#fff' },
  templatePillText: { fontSize: 14, fontWeight: '600', color: '#191c1d' },
  socialProof: { backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: 8, padding: 40, alignItems: 'center', borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)', overflow: 'hidden' },
  socialTopBorder: { position: 'absolute', top: 0, left: 0, right: 0, height: 4 },
  socialTag: { fontSize: 12, fontWeight: '700', color: '#006c49', letterSpacing: 2, marginBottom: 24 },
  socialTitle: { fontSize: 32, fontWeight: '700', color: '#191c1d', textAlign: 'center', marginBottom: 40 },
  socialStatsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 24, justifyContent: 'center' },
  socialStat: { alignItems: 'center', minWidth: 150 },
  socialStatValue: { fontSize: 28, fontWeight: '700', color: '#006c49', marginBottom: 4 },
  socialStatLabel: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 1 },
});
