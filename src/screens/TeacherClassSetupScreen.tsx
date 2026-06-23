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
import LinearGradient from 'react-native-linear-gradient';

export default function TeacherClassSetupScreen({ navigation }: any) {
  const [selectedClasses, setSelectedClasses] = useState<string[]>([]);

  const toggleClass = (id: string) => {
    if (selectedClasses.includes(id)) {
      setSelectedClasses(selectedClasses.filter(c => c !== id));
    } else {
      setSelectedClasses([...selectedClasses, id]);
    }
  };

  const classes = [
    { id: '1', name: 'Grade 6A', desc: '32 Students • Science Dept.', icon: 'groups' },
    { id: '2', name: 'Grade 6B', desc: '28 Students • Science Dept.', icon: 'school' },
    { id: '3', name: 'Grade 7A', desc: '30 Students • Biology Lab', icon: 'co-present' },
    { id: '4', name: 'Grade 7C', desc: '25 Students • General Studies', icon: 'meeting-room' },
    { id: '5', name: 'Grade 8B', desc: '34 Students • Advanced Ecology', icon: 'diversity-3' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.avatarWrapper}>
            <Image source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDC9VO_ICyc2G4IM8DeAFwSKwu_OcElwd32bvVmJTmlJ4AekwuaKK3u2cf78iS_dxJkMt1rtwd4ILy14lJFPfmHDY29Qzt5cC76glo2X4i2i9VDuAluXoWkZIsdI48jyH5K8Su88f3DhCbWxJekGhXwowMu4Y28_gkyIzPuUza4E_94yJU2HUneVdH-IW50KeO1N90RMZXvm5J4Fb-kyKFHiZGDbwoKCXjzeWR3LOD5PI41GgS5_qXrjJSfisdQt4lsN2iGdMW_T1lj'}} style={styles.avatarImage} />
          </View>
          <Text style={styles.logoText}>ChonX</Text>
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.xpText}>⚡ 2,450 XP</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.pageHeader}>
          <Text style={styles.pageTitle}>Which classes do you teach?</Text>
          <Text style={styles.pageSubtitle}>Select the groups you'll be guiding through the eco-challenge this semester.</Text>
        </View>

        <View style={styles.grid}>
          {classes.map((cls) => {
            const isSelected = selectedClasses.includes(cls.id);
            return (
              <TouchableOpacity 
                key={cls.id} 
                style={[styles.card, isSelected && styles.cardSelected]}
                onPress={() => toggleClass(cls.id)}
              >
                {isSelected && (
                  <View style={styles.checkBadge}>
                    <Icon name="check-circle" size={24} color="#10b981" />
                  </View>
                )}
                <View style={styles.iconWrapper}>
                  <Icon name={cls.icon} size={24} color="#006b5f" />
                </View>
                <Text style={styles.cardTitle}>{cls.name}</Text>
                <Text style={styles.cardDesc}>{cls.desc}</Text>
              </TouchableOpacity>
            )
          })}
          
          <TouchableOpacity style={styles.addCard}>
            <View style={styles.addIconWrapper}>
              <Icon name="add" size={24} color="#3c4a42" />
            </View>
            <Text style={styles.addTitle}>Add Another</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.footerContent}>
          <View style={styles.progressContainer}>
            <View style={styles.progressBarWrapper}>
              <View style={[styles.progressBar, { width: selectedClasses.length > 0 ? '40%' : '20%' }]} />
            </View>
            <Text style={styles.progressText}>SETUP PROGRESS: {selectedClasses.length > 0 ? '40%' : '20%'}</Text>
          </View>
          <View style={styles.footerActions}>
            <TouchableOpacity>
              <Text style={styles.skipText}>SKIP FOR NOW</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.nextBtn, selectedClasses.length === 0 && styles.nextBtnDisabled]}
              disabled={selectedClasses.length === 0}
            >
              <LinearGradient colors={selectedClasses.length > 0 ? ['#006c49', '#006b5f'] : ['#bbcabf', '#bbcabf']} style={styles.nextBtnGradient}>
                <Text style={styles.nextBtnText}>Next Step</Text>
                <Icon name="arrow-forward" size={20} color={selectedClasses.length > 0 ? '#fff' : '#6c7a71'} />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { height: 64, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 24, backgroundColor: 'rgba(248, 249, 250, 0.8)', borderBottomWidth: 1, borderBottomColor: 'rgba(187, 202, 191, 0.3)' },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  avatarWrapper: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#e1e3e4', overflow: 'hidden', borderWidth: 1, borderColor: '#bbcabf' },
  avatarImage: { width: '100%', height: '100%', resizeMode: 'cover' },
  logoText: { fontSize: 24, fontWeight: '800', color: '#006c49' },
  headerRight: {},
  xpText: { fontSize: 16, fontWeight: '700', color: '#006c49' },
  scrollContent: { padding: 24, paddingBottom: 120 },
  pageHeader: { marginBottom: 40 },
  pageTitle: { fontSize: 32, fontWeight: '700', color: '#191c1d', marginBottom: 8 },
  pageSubtitle: { fontSize: 18, color: '#3c4a42' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 24 },
  card: { flex: 1, minWidth: 250, backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: 8, padding: 24, borderWidth: 2, borderColor: 'transparent', elevation: 2 },
  cardSelected: { borderColor: '#10b981', backgroundColor: '#ecfdf5' },
  checkBadge: { position: 'absolute', top: 16, right: 16 },
  iconWrapper: { width: 48, height: 48, borderRadius: 24, backgroundColor: 'rgba(109,245,225,0.3)', alignItems: 'center', justifyContent: 'center', marginBottom: 24 },
  cardTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d', marginBottom: 8 },
  cardDesc: { fontSize: 16, color: '#3c4a42' },
  addCard: { flex: 1, minWidth: 250, backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: 8, padding: 24, borderWidth: 2, borderColor: '#bbcabf', borderStyle: 'dashed', alignItems: 'center', justifyContent: 'center' },
  addIconWrapper: { width: 48, height: 48, borderRadius: 24, backgroundColor: '#edeeef', alignItems: 'center', justifyContent: 'center', marginBottom: 24 },
  addTitle: { fontSize: 24, fontWeight: '600', color: '#3c4a42' },
  footer: { position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(248,249,250,0.8)', borderTopWidth: 1, borderTopColor: 'rgba(187,202,191,0.2)', padding: 24 },
  footerContent: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap-reverse', gap: 24 },
  progressContainer: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  progressBarWrapper: { width: 128, height: 8, backgroundColor: '#edeeef', borderRadius: 4, overflow: 'hidden' },
  progressBar: { height: '100%', backgroundColor: '#10b981' },
  progressText: { fontSize: 12, fontWeight: '700', color: '#3c4a42' },
  footerActions: { flexDirection: 'row', alignItems: 'center', gap: 24 },
  skipText: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 1 },
  nextBtn: { borderRadius: 32, overflow: 'hidden', elevation: 4 },
  nextBtnDisabled: { elevation: 0 },
  nextBtnGradient: { flexDirection: 'row', alignItems: 'center', gap: 8, paddingHorizontal: 40, paddingVertical: 16 },
  nextBtnText: { fontSize: 16, fontWeight: '700', color: '#fff' },
});
