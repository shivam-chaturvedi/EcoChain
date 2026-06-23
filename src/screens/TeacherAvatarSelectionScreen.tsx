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

export default function TeacherAvatarSelectionScreen({ navigation }: any) {
  const [selectedAvatarId, setSelectedAvatarId] = useState<number | null>(2);

  const avatars = [
    { id: 1, name: "Dr. Aris", desc: "Eco-Scientist", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&h=300&auto=format&fit=crop" },
    { id: 2, name: "Prof. Elena", desc: "Climate Strategist", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&h=300&auto=format&fit=crop" },
    { id: 3, name: "Marcus", desc: "Field Biologist", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&h=300&auto=format&fit=crop" },
    { id: 4, name: "Sarah", desc: "Sustainability Lead", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&h=300&auto=format&fit=crop" },
    { id: 5, name: "Chef Julian", desc: "Urban Farmer", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&h=300&auto=format&fit=crop" },
    { id: 6, name: "Maya", desc: "Solar Architect", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&h=300&auto=format&fit=crop" },
    { id: 7, name: "Dr. Chen", desc: "Marine Specialist", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&h=300&auto=format&fit=crop" },
    { id: 8, name: "Sofia", desc: "Botany Expert", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300&h=300&auto=format&fit=crop" },
    { id: 9, name: "Leo", desc: "Tech Innovator", img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=300&h=300&auto=format&fit=crop" },
    { id: 10, name: "Prof. Grace", desc: "Energy Policy", img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=300&h=300&auto=format&fit=crop" },
    { id: 11, name: "Omar", desc: "Wildlife Protector", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=300&h=300&auto=format&fit=crop" },
    { id: 12, name: "Nia", desc: "Comm. Educator", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=300&h=300&auto=format&fit=crop" }
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.headerAvatarWrapper}>
            <Image source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGq68sp3e5Y7USlCP-Gf8rYSIG2hBtK-LSOBf59mub8qbbulfxsyQjenv_hs2lacWvYlDlKkHAHK0ij290GM9BnkAcPxzEg9XcmaXH-xVobzrwkDjHgVAUOTfX_cXvWG1545ObikqtvDmznC1X1aVCglJreUiFapMyO_RsVIEqc-90EsrAi-9BnE7nJVyMRuEAB52HfhBo49lhGqARsBmyMbdeCC52QmioyV5A8AHr5SObk2EIxhE1RQz50Vy6TLtg-pYMJo0tXKel'}} style={styles.headerAvatar} />
          </View>
          <Text style={styles.logoText}>ChonX</Text>
        </View>
        <View style={styles.headerRight}>
          <View style={styles.xpBadge}>
            <Icon name="bolt" size={18} color="#00422b" />
            <Text style={styles.xpText}>2,450 XP</Text>
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.titleSection}>
          <Text style={styles.title}>Choose your Educator Avatar</Text>
          <Text style={styles.subtitle}>Select a mentor to guide you through the green revolution. Your avatar represents your teaching style in the Arena.</Text>
        </View>

        <View style={styles.grid}>
          {avatars.map((avatar) => {
            const isSelected = selectedAvatarId === avatar.id;
            return (
              <TouchableOpacity 
                key={avatar.id} 
                style={[styles.avatarItem, isSelected && styles.avatarItemSelected]}
                onPress={() => setSelectedAvatarId(avatar.id)}
              >
                <View style={[styles.imageContainer, isSelected && styles.imageContainerSelected]}>
                  <Image source={{uri: avatar.img}} style={styles.avatarImage} />
                  {isSelected && (
                    <View style={styles.checkBadge}>
                      <Icon name="check" size={20} color="#fff" />
                    </View>
                  )}
                </View>
                <Text style={styles.avatarName}>{avatar.name}</Text>
                <Text style={styles.avatarDesc}>{avatar.desc}</Text>
              </TouchableOpacity>
            )
          })}
        </View>

        <View style={styles.footerSection}>
          <TouchableOpacity style={styles.confirmBtn}>
            <LinearGradient colors={['#006c49', '#006b5f']} style={styles.confirmGradient}>
              <Text style={styles.confirmText}>Confirm Selection</Text>
            </LinearGradient>
          </TouchableOpacity>
          <Text style={styles.footerHint}>You can change your avatar later in Settings.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { height: 64, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 24, backgroundColor: 'rgba(248, 249, 250, 0.8)', borderBottomWidth: 1, borderBottomColor: 'rgba(187, 202, 191, 0.3)' },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  headerAvatarWrapper: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#edeeef', overflow: 'hidden' },
  headerAvatar: { width: '100%', height: '100%', resizeMode: 'cover' },
  logoText: { fontSize: 24, fontWeight: '800', color: '#006c49' }, // should be gradient but text gradient requires mask
  headerRight: {},
  xpBadge: { flexDirection: 'row', alignItems: 'center', gap: 8, backgroundColor: '#10b981', paddingHorizontal: 16, paddingVertical: 6, borderRadius: 16 },
  xpText: { fontSize: 14, fontWeight: '700', color: '#00422b' },
  scrollContent: { padding: 24, paddingBottom: 100 },
  titleSection: { alignItems: 'center', marginBottom: 64 },
  title: { fontSize: 32, fontWeight: '800', color: '#191c1d', marginBottom: 12, textAlign: 'center' },
  subtitle: { fontSize: 18, color: '#3c4a42', textAlign: 'center', maxWidth: 600 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 24, justifyContent: 'center' },
  avatarItem: { width: '45%', maxWidth: 200, padding: 16, borderRadius: 8, alignItems: 'center' },
  avatarItemSelected: { backgroundColor: '#e7e8e9' },
  imageContainer: { width: '100%', aspectRatio: 1, borderRadius: 12, overflow: 'hidden', marginBottom: 16, backgroundColor: 'rgba(255,255,255,0.7)', borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)' },
  imageContainerSelected: { borderWidth: 4, borderColor: '#10b981' },
  avatarImage: { width: '100%', height: '100%', resizeMode: 'cover' },
  checkBadge: { position: 'absolute', top: 8, right: 8, width: 32, height: 32, borderRadius: 16, backgroundColor: '#006c49', alignItems: 'center', justifyContent: 'center' },
  avatarName: { fontSize: 16, fontWeight: '600', color: '#191c1d', textAlign: 'center' },
  avatarDesc: { fontSize: 12, fontWeight: '700', color: '#3c4a42', textAlign: 'center', letterSpacing: 1 },
  footerSection: { marginTop: 64, alignItems: 'center', gap: 24 },
  confirmBtn: { borderRadius: 32, overflow: 'hidden', elevation: 8 },
  confirmGradient: { paddingHorizontal: 48, paddingVertical: 16 },
  confirmText: { fontSize: 24, fontWeight: '600', color: '#fff' },
  footerHint: { fontSize: 12, fontWeight: '700', color: '#3c4a42', textTransform: 'uppercase', letterSpacing: 1 },
});
