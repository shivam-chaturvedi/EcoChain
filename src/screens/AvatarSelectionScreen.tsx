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

const avatars = [
  { id: 1, name: 'Sprout', uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSDAIM2-sQwY4gfXt4MSXiIG5npn7RQq0kSG-gr6EyBIjJKn-2Yq9js-5CtGqOpCkT6-994qriz4JbcPbgfiKubIJfUSOJLMZqNrr_FNgWjFnFCX0uovpeITU-wPn-etI5FK0zEUOt1mg8Oju9cKJcDF2nu9K8eSZjz0vt6tqHCep0Ntl4OHApZcfs2KkQXtNAR8P_J55ENjg-j0jgUn6c-5-bCLktSMfR3ibugSNtQLyrrR_h77IdCoasTsT_qPduMN7_M3XI9Qzw' },
  { id: 2, name: 'Chill', uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtQVrTebP4L-EtumXW3HWNTApTyeGrPMHAiAJusuoTWIQzfsNyV-a9dmzSndwKeVBoG3ZmgbvevHZ6UBniry8j0e6rK0UsWX28U2IQoPlkB43vhd-oTcxaCA-GIfkToJHqETv4clXT0MMeLcKtQ79pR7YMi3kBS_UiX1-eGBkZgFuQsCqx2xsX9R7y1UaPPz7meYZtHhh9v87oV50ok2rmCptKCDH6kljscFeTR5azHJnX4Q0yFmJ3ThInVYZfxmLi52ByUtBu33fI' },
  { id: 3, name: 'Sunny', uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcOQwq0w2iv-Ihy-5eFwmW6i2wojeTRFFtV4xOhdi-WRvOLZfEGXzHHdMLlNGFLE8K5cI-_nCgDJeh8B8IIIdqgyna65iiQ3G5wMtlHCdvo2CdXQ1zL9sy0_-EfLGwTgHBP9-YyR6ODXSw9ezXSzfPBk9cdNXi7H69l1eCbraS3FIFiYWzWjrPTilVwOM-d3quWr8HLEya7ARINH_N9HwClPu-a9mXswMp-KT_il8cGeVE99nzu5C-eQ5HREAAkPYNeRoLOrY9QIzH' },
  { id: 4, name: 'Recycle-Bot', uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCSA481KLoaPbusFEMYg8UbDXzm9GNOuxTiYFU8fdgF3fQkz2e6dltiHM-cVIqJX2c2qXk2CIzUiKYR1ry3_u7kgrI7FI3xTzE1lvCQfJuRQ65uSb6nO6AVS1Vq-HnXwsUehJioZOugqWWaKL-MBL8KCFJPZqU998GU9HCGeKnSiVQsUek_sMpywIPYrQ9OL1rHpjNGx380jr_Oy8pbNqkIWJdjEBwCKASNls9sjV3xVO-EMG3JUw5tdqmmD4zRIoyVuzmzfe5zR-p' },
  { id: 5, name: 'Eco-Explorer', uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBI80lSUy6RY0upxoHNzS5FeNr98e2Z8IETldfzXTCwrj21NkCbk55yCbAI82vZcy_IopSmDov-Ly-VHVso8MC7kq0EiEneNXngdVB2BIQQTgvf-r8neNZnCIhfgs_0_JB7wpIJ8q9vUXLjrTwQDNLTT8jvB6wq2Y6r7cewe1nl-gNJ_iOxDnr569xyW41FkVTDHIC8q1vwebwn0Bu0Qt8vhb370JdUeYsRG4g_Ya3KLjG3RyESXqlr1Cb4VsUisyOVkyqDj4jFB8oh', selected: true },
  { id: 6, name: 'Buzz', uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5G_r2vslup1P_I1bZWqiIuIgyRKxmVrRQNeCwwc3VGyXpVxOTa2sbPGryzr_BrIehf8ZWJA2C2yufcV0vLfgPbjqMaU0oF1-FQ4H8I6KzzsIppSnJiQcbnks0z7RMqz0VxXJ83je2wADWqQH18jH9iDR_T5VfDuiFsGIdH_1tJXXGhvbPTzGJC_AVMFfgWTO9dOe_oDwxog8ffWKLLdjof_Oz9QNEuN5yhXixkFwAsRzWsYY939TAM-aQAKTffGBBt9HNRrswyQ1w' },
  { id: 7, name: 'Elder Tree', uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCr8-0GVeFmSO4YXLsvgrxizG2svEl7VWSYCqS37HgPYNQPS7Y7z5TnYTOhrfbcsmsaiW9M3t_IP4wefPej5eC_PmXrqG7XheYRWg_LLJ-PT4v7qFgNonKK_z3xycD0Ihk6g_5YUD1jzUrEO4SLGBNMLD0o_YHW7Ss0VHMDIOI6ZYjbHf5vwr0QIJLLYhTmfSYz3kMWthafyl-wJjeI9gXxat1ecc8sT_KJW9CcCtqszZZb1pyXqY7JQPYEF4-_jwv3m5IviHs8DIvE' },
  { id: 8, name: 'Aqua', uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2s_34-GJFdh6PZHXPdICeQXXa7Tx2QH-pqSVLFEas7gtyfyoVFj1mZVSMlZ8b1pqPAwQYKK_LQ-D_f8EGrtT_G3cwAr4V7-W3ZCpENUqqrBufF5uJ4A765Jh8oV0jKGDe2qTU74GfaVGrTnFu-fSCMND95SLtDxt_kAOPxwomG3EG17QBICp1Z2yMpOuzuAeV7LsjeLOZ6_JxNR-nhGKliChyzS1yW9grbWKOpwCmccoZkMwzf7_VKojvqnS5SpQKgLH6Ks1CkQn-' },
  { id: 9, name: 'Breezy', uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcQsDeDHbLRJnOsmDS2NqY4LHcuBcvQzkvD0D9VWcfgdmNP0MUWy3GSNi0t38tk0CPgQ7Iu05nY_zsgesnlsVcAz3NRPJqDssKrIvyZ8t6P1RhDWA9DA1axNhchz-2QuEgw2Fuo3GQcrgjt5nUcYhf9xDpvGv4KogG42AM7wcPXgkbGfpdXbuXjXyuT3sQJPtpug3sPF0NonTNyMZPr6McPBw_2m6rK1-xaIMfqVDykxXZhVcQNzHQz_nuKdA3UeqcTnhL6RjLLKIu' },
  { id: 10, name: 'Ranger', uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1ykF7Icz5n50E-RhaIsvTdmEl6INnqcQ7hm9lVJz71naqL0r9MsjzNmgDrm-EcWfvupXmP4teHu5S1HDXZhkfOB_Lg-cfacto6shPbrPmRbocnaXmCgxGwdM6Krw0n-FkVA3RapB9kuNy3XoRH6I8WKqdXSQ7tjQrHkhd-WoSZEhgV3whIt-n_wLn63yJjuBAKRFPAGLB5zISu9VOhFrG55vJI86EZDfJip84zoz_DY6i29dWK17cJp14xCBkCZof5r-W3hHzJ_EP' },
  { id: 11, name: 'Volt', uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOonr3soeTVtSruGYtb0WnHZRNs683catL65D8gRFKcsec3dPzfCZZ5sovMQf0x8UlFMDaQ8VHgwJUOmw4vUcIO0JkKDncjIhRYk7KcmGhf6bzIS1wiWmTwK_Fq-SrDkIn_ERTAqgRscJ38hU449uoKQD09jZoMlsnDBeOe-NGyJAx7VJN-VD_jla1CibjUqeCTB1e2v84Ns8NKtfGowP3ce9-Amaj1r-_KbkifLsmxpU7qj_Dq40qzi19ftVO7yKOBDLjdZqnSVX6' },
  { id: 12, name: 'Peak', uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAruVhJScgM32qLm3gDeJ5PC5hPtCLQFvmjx2bCKKirVye5W7SRRfvZl7kphByZwQ9xrD4ommNlanbVaG_13y7oeeBL-1KWI7plopsrq_eqMldK2i7ZmTB3ZhiqGibxm6di47PmsCZUGJyD7uGg8tFmKPuy4Bd8AMse6R62zKNVxKK_g4ismH9lSN_UmGzxirg2Cabbih5SVTY-chhR6Ie_-efC2SjR3W91z0S_PSuY-2s6uNLxvQTFjHgDDFrOOmnI2lQZyjxjMrJE' },
];

export default function AvatarSelectionScreen({ navigation }: any) {
  const [selectedId, setSelectedId] = useState(5);

  const selectedAvatar = avatars.find((a) => a.id === selectedId);

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.avatarProfileContainer}>
            <Image source={{ uri: avatars[0].uri }} style={styles.avatarProfileImg} />
            <View style={styles.levelBadge}><Text style={styles.levelText}>12</Text></View>
          </View>
          <Text style={styles.logoText}>EcoSystem</Text>
        </View>
        <View style={styles.headerRight}>
          <View style={styles.xpBadge}>
            <Icon name="stars" size={16} color="#006c49" />
            <Text style={styles.xpText}>1,250 XP</Text>
          </View>
          <TouchableOpacity style={styles.closeBtn}><Icon name="close" size={24} color="#3c4a42" /></TouchableOpacity>
        </View>
      </View>

      {/* Title */}
      <View style={styles.titleSection}>
        <Text style={styles.title}>Choose your Avatar</Text>
        <Text style={styles.subtitle}>Pick a digital companion to represent your journey in saving the planet. You can change this later!</Text>
      </View>

      {/* Avatar Grid */}
      <ScrollView contentContainerStyle={styles.gridContainer}>
        <View style={styles.avatarGrid}>
          {avatars.map((avatar) => (
            <TouchableOpacity
              key={avatar.id}
              style={[styles.avatarCard, selectedId === avatar.id && styles.avatarCardSelected]}
              onPress={() => setSelectedId(avatar.id)}
              activeOpacity={0.8}
            >
              <Image source={{ uri: avatar.uri }} style={styles.avatarImg} resizeMode="contain" />
              <Text style={[styles.avatarName, selectedId === avatar.id && styles.avatarNameSelected]}>
                {avatar.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Action */}
      <View style={styles.bottomBar}>
        <View style={styles.selectionInfo}>
          <Text style={styles.selectionLabel}>Current Selection</Text>
          <Text style={styles.selectionName}>{selectedAvatar?.name ?? 'None'}</Text>
        </View>
        <TouchableOpacity style={styles.continueBtn} onPress={() => navigation.navigate('StudentHome')}>
          <Text style={styles.continueBtnText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f3f4f5' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, height: 64, backgroundColor: 'rgba(248,249,250,0.8)', borderBottomWidth: 1, borderBottomColor: 'rgba(187,202,191,0.2)' },
  headerLeft: { flexDirection: 'row', alignItems: 'center' },
  avatarProfileContainer: { width: 40, height: 40, borderRadius: 20, borderWidth: 2, borderColor: '#10b981', overflow: 'hidden', marginRight: 12, position: 'relative' },
  avatarProfileImg: { width: '100%', height: '100%' },
  levelBadge: { position: 'absolute', bottom: -2, right: -2, width: 18, height: 18, borderRadius: 9, backgroundColor: '#006c49', alignItems: 'center', justifyContent: 'center' },
  levelText: { fontSize: 8, fontWeight: '700', color: '#ffffff' },
  logoText: { fontSize: 20, fontWeight: '800', color: '#006c49' },
  headerRight: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  xpBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(16,185,129,0.1)', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, borderWidth: 1, borderColor: 'rgba(16,185,129,0.2)', gap: 6 },
  xpText: { fontSize: 16, fontWeight: '700', color: '#006c49' },
  closeBtn: { padding: 8 },
  titleSection: { paddingHorizontal: 24, paddingTop: 24, paddingBottom: 16, alignItems: 'center' },
  title: { fontSize: 24, fontWeight: '700', color: '#191c1d', marginBottom: 8, textAlign: 'center' },
  subtitle: { fontSize: 16, color: '#3c4a42', textAlign: 'center', lineHeight: 24, maxWidth: 320 },
  gridContainer: { paddingHorizontal: 24, paddingBottom: 120 },
  avatarGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  avatarCard: { width: '30%', aspectRatio: 1, backgroundColor: '#f3f4f5', borderRadius: 16, alignItems: 'center', justifyContent: 'center', padding: 8, borderWidth: 1, borderColor: 'rgba(187,202,191,0.1)' },
  avatarCardSelected: { borderWidth: 3, borderColor: '#10b981', backgroundColor: 'rgba(109,245,225,0.2)' },
  avatarImg: { width: '80%', height: '70%' },
  avatarName: { fontSize: 10, fontWeight: '700', color: 'rgba(60,74,66,0)', letterSpacing: 0.5, marginTop: 4, textAlign: 'center' },
  avatarNameSelected: { color: '#006c49' },
  bottomBar: { position: 'absolute', bottom: 0, left: 0, right: 0, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(248,249,250,0.7)', borderTopWidth: 1, borderTopColor: 'rgba(187,202,191,0.1)', paddingHorizontal: 24, paddingVertical: 16, paddingBottom: 36 },
  selectionInfo: {},
  selectionLabel: { fontSize: 12, fontWeight: '700', color: '#3c4a42', letterSpacing: 0.5 },
  selectionName: { fontSize: 24, fontWeight: '600', color: '#006c49' },
  continueBtn: { flex: 1, maxWidth: 240, marginLeft: 24, paddingVertical: 16, backgroundColor: '#006c49', borderRadius: 16, alignItems: 'center', shadowColor: '#006c49', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.2, shadowRadius: 16 },
  continueBtnText: { fontSize: 24, fontWeight: '600', color: '#ffffff' },
});
