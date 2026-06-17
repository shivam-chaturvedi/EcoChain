import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppIcon from '../../../components/AppIcon';
import SchoolBottomNav from '../../../components/SchoolBottomNav';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import { Colors } from '../../../constants';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SchoolCodeManagement'>;
};

export default function SchoolCodeManagementScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerBrand}>
          <View style={styles.headerBrandCircle}>
            <AppIcon name="eco" size={14} color="#fff" />
          </View>
          <Text style={styles.brandName}>EcoChain Admin</Text>
        </View>
        <TouchableOpacity
          style={styles.iconBtn}
          onPress={() => navigation.navigate('NotificationCenter')}>
          <AppIcon name="notifications" size={22} color="#334155" />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>

        {/* Title Section */}
        <Text style={styles.title}>School Access{'\n'}Management</Text>
        <Text style={styles.subtitle}>
          Control how students and teachers join your school ecosystem.
        </Text>

        {/* Code Card */}
        <View style={styles.codeCard}>
          <View style={styles.activePill}>
            <Text style={styles.activePillText}>Active Join Code</Text>
          </View>
          
          <Text style={styles.codeText}>GSIA-8214</Text>
          
          <Text style={styles.codeDesc}>
            Share this unique code with students and faculty members during onboarding. This code validates their association with Green Valley High.
          </Text>

          <TouchableOpacity style={styles.generateBtn}>
            <Text style={styles.btnIconWhite}>↻</Text>
            <Text style={styles.generateBtnText}>Generate New Code</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.shareBtn}>
            <AppIcon name="share" size={16} color="#059669" />
            <Text style={styles.shareBtnText}>Share Code</Text>
          </TouchableOpacity>

          <View style={styles.expirePill}>
            <View style={styles.expireDot} />
            <Text style={styles.expireText}>Expires in: <Text style={{fontWeight: '800'}}>14 Days, 3 Hours</Text></Text>
          </View>
        </View>

        {/* Usage Overview */}
        <View style={styles.usageCard}>
          <Text style={styles.sectionTitleSmall}>Usage Overview</Text>
          
          <View style={styles.usageRow}>
            <Text style={styles.usageLabel}>Active Uses</Text>
            <Text style={styles.usageValueGreen}>142</Text>
          </View>
          
          <View style={styles.progressBarBg}>
            <View style={[styles.progressBarFill, { width: '70%' }]} />
          </View>

          <View style={styles.usageRow}>
            <Text style={styles.usageLabel}>Remaining Capacity</Text>
            <Text style={styles.usageValueDark}>58</Text>
          </View>
        </View>

        {/* Recent Activity */}
        <Text style={styles.sectionTitleDark}>Recent Code Activity</Text>
        <View style={styles.activityCard}>
          <View style={styles.tableHeader}>
            <Text style={[styles.tableCol, { flex: 2 }]}>User Identity</Text>
            <Text style={[styles.tableCol, { flex: 1, textAlign: 'center' }]}>Role</Text>
            <Text style={[styles.tableCol, { flex: 1, textAlign: 'right' }]}>Time Joined</Text>
          </View>

          {/* Row 1 */}
          <View style={styles.tableRow}>
            <View style={[styles.userIdentityCol, { flex: 2 }]}>
              <View style={[styles.userAvatar, { backgroundColor: '#F1F5F9' }]}>
                <Text style={styles.userInitials}>JD</Text>
              </View>
              <View style={styles.userInfo}>
                <Text style={styles.userName}>Julianne Davis</Text>
                <Text style={styles.userSub}>Grade 11 Student</Text>
              </View>
            </View>
            <View style={[styles.roleCol, { flex: 1 }]}>
              <View style={styles.roleBadgeStudent}>
                <Text style={styles.roleBadgeTextStudent}>Student</Text>
              </View>
            </View>
            <View style={[styles.timeCol, { flex: 1 }]}>
              <Text style={styles.timeText}>2 mins ago</Text>
            </View>
          </View>

          {/* Row 2 */}
          <View style={[styles.tableRow, { borderBottomWidth: 0 }]}>
            <View style={[styles.userIdentityCol, { flex: 2 }]}>
              <View style={[styles.userAvatar, { backgroundColor: '#CCFBF1' }]}>
                <Text style={[styles.userInitials, { color: '#0D9488' }]}>MW</Text>
              </View>
              <View style={styles.userInfo}>
                <Text style={styles.userName}>Marcus Wright</Text>
                <Text style={styles.userSub}>Science Department</Text>
              </View>
            </View>
            <View style={[styles.roleCol, { flex: 1 }]}>
              <View style={styles.roleBadgeTeacher}>
                <Text style={styles.roleBadgeTextTeacher}>Teacher</Text>
              </View>
            </View>
            <View style={[styles.timeCol, { flex: 1 }]}>
              <Text style={styles.timeText}>14 mins ago</Text>
            </View>
          </View>
        </View>

        <View style={styles.bottomPad} />
      </ScrollView>

      <SchoolBottomNav navigation={navigation} activeRoute="SchoolCodeManagement" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: '#F8FAFC',
  },
  headerBrand: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerBrandCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#059669',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  brandName: {
    fontSize: 16,
    fontWeight: '800',
    color: '#004D40',
  },
  iconBtn: {
    padding: 8,
  },
  headerIcon: {
    fontSize: 18,
    color: '#334155',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 80,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#002B36',
    lineHeight: 32,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 12,
    color: '#475569',
    lineHeight: 18,
    marginBottom: 24,
  },
  codeCard: {
    backgroundColor: Colors.white,
    borderRadius: 32,
    padding: 24,
    alignItems: 'center',
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#ECFDF5',
    shadowColor: Colors.cardShadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.03,
    shadowRadius: 10,
    elevation: 2,
  },
  activePill: {
    backgroundColor: '#D1FAE5',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 16,
  },
  activePillText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#059669',
  },
  codeText: {
    fontSize: 48,
    fontWeight: '800',
    color: '#1E293B',
    marginBottom: 16,
  },
  codeDesc: {
    fontSize: 11,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 24,
    paddingHorizontal: 10,
  },
  generateBtn: {
    flexDirection: 'row',
    backgroundColor: '#004D40',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
    borderRadius: 24,
    marginBottom: 12,
  },
  btnIconWhite: {
    color: Colors.white,
    fontSize: 16,
    marginRight: 8,
  },
  generateBtnText: {
    color: Colors.white,
    fontSize: 13,
    fontWeight: '700',
  },
  shareBtn: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#059669',
    marginBottom: 24,
  },
  btnIconGreen: {
    color: '#059669',
    fontSize: 16,
    marginRight: 8,
  },
  shareBtnText: {
    color: '#059669',
    fontSize: 13,
    fontWeight: '700',
  },
  expirePill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  expireDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#059669',
    marginRight: 8,
  },
  expireText: {
    fontSize: 10,
    color: '#475569',
  },
  usageCard: {
    backgroundColor: '#E2E8F0', // lighter grey background from design
    borderRadius: 24,
    padding: 24,
    marginBottom: 24,
  },
  sectionTitleSmall: {
    fontSize: 12,
    fontWeight: '700',
    color: '#475569',
    marginBottom: 16,
  },
  usageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  usageLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: '#1E293B',
  },
  usageValueGreen: {
    fontSize: 13,
    fontWeight: '800',
    color: '#059669',
  },
  usageValueDark: {
    fontSize: 13,
    fontWeight: '800',
    color: '#1E293B',
  },
  progressBarBg: {
    height: 6,
    backgroundColor: '#CBD5E1',
    borderRadius: 3,
    marginVertical: 12,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#059669',
    borderRadius: 3,
  },
  sectionTitleDark: {
    fontSize: 14,
    fontWeight: '800',
    color: '#1E293B',
    marginBottom: 12,
    marginLeft: 4,
  },
  activityCard: {
    backgroundColor: Colors.white,
    borderRadius: 24,
    paddingVertical: 16,
    paddingHorizontal: 16,
    shadowColor: Colors.cardShadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.03,
    shadowRadius: 10,
    elevation: 2,
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
    paddingBottom: 12,
    marginBottom: 8,
  },
  tableCol: {
    fontSize: 10,
    fontWeight: '800',
    color: '#1E293B',
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F8FAFC',
  },
  userIdentityCol: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  userInitials: {
    fontSize: 11,
    fontWeight: '800',
    color: '#1E293B',
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 11,
    fontWeight: '800',
    color: '#1E293B',
  },
  userSub: {
    fontSize: 9,
    color: '#64748B',
  },
  roleCol: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  roleBadgeStudent: {
    backgroundColor: '#ECFDF5',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  roleBadgeTextStudent: {
    fontSize: 8,
    fontWeight: '800',
    color: '#059669',
  },
  roleBadgeTeacher: {
    backgroundColor: '#E0F2FE',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  roleBadgeTextTeacher: {
    fontSize: 8,
    fontWeight: '800',
    color: '#0284C7',
  },
  timeCol: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  timeText: {
    fontSize: 10,
    color: '#FC8181', // pinkish time text from design
  },
  bottomPad: {
    height: 40,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  navItemActiveBg: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#10B981', // green background for active icon
    width: 64,
    height: 64,
    borderRadius: 32,
    top: -20, // floats up
    shadowColor: '#10B981',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 5,
  },
  navIcon: {
    fontSize: 20,
    color: '#94A3B8',
    marginBottom: 4,
  },
  navIconActive: {
    fontSize: 20,
    color: Colors.white,
  },
  navLabel: {
    fontSize: 10,
    fontWeight: '600',
    color: '#94A3B8',
  },
  navLabelActive: {
    fontSize: 10,
    fontWeight: '700',
    color: Colors.white,
    marginTop: 2,
  },
});
