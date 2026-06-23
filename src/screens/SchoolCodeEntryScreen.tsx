import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ActivityIndicator,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

export default function SchoolCodeEntryScreen({ navigation }: any) {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleVerify = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1200);
  };

  const resetView = () => {
    setSuccess(false);
    setCode('');
  };

  const handleTextChange = (text: string) => {
    let val = text.replace(/[^A-Za-z0-9]/gi, '').toUpperCase();
    if (val.length > 4) {
      val = val.slice(0, 4) + '-' + val.slice(4, 8);
    }
    setCode(val);
  };

  const isValid = code.length === 9;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.blob1} />
      <View style={styles.blob2} />

      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} color="#006c49" />
          </TouchableOpacity>
          <Text style={styles.logoText}>EcoSystem</Text>
        </View>
        <View style={styles.xpBadge}>
          <Icon name="monetization-on" size={16} color="#006c49" />
          <Text style={styles.xpText}>1,250 XP</Text>
        </View>
      </View>

      <View style={styles.container}>
        {!success ? (
          <View style={styles.entryContainer}>
            <View style={styles.iconBg}>
              <Icon name="school" size={40} color="#006c49" />
            </View>
            <Text style={styles.title}>Enter your School Code</Text>
            <Text style={styles.subtitle}>Access your school's unique environmental dashboard and challenges.</Text>

            <View style={styles.inputContainer}>
              <View style={styles.inputWrapper}>
                <Text style={styles.inputLabel}>School Code</Text>
                <TextInput 
                  style={styles.input}
                  value={code}
                  onChangeText={handleTextChange}
                  placeholder="XXXX-XXXX"
                  placeholderTextColor="rgba(60, 74, 66, 0.3)"
                  maxLength={9}
                  autoCapitalize="characters"
                />
              </View>
              <Text style={styles.helperText}>Ask your teacher if you don't have it.</Text>
            </View>

            <TouchableOpacity 
              style={[styles.verifyBtn, !isValid && styles.verifyBtnDisabled]}
              onPress={handleVerify}
              disabled={!isValid || loading}
            >
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.verifyBtnText}>Verify School</Text>
              )}
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.successContainer}>
            <View style={styles.successCard}>
              <View style={styles.successCardDeco} />
              
              <View style={styles.schoolLogoContainer}>
                <View style={styles.schoolLogoBg}>
                  <Image 
                    source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4UHuwsTWbf4ymKG4DlD-TrJZSfM_MY8C7HAXiohLPU42Hi-yoiHktqAmkxLNrRH4ACmANLr55PakhXDU1UTyLsU8H_aI5Imn2aUeqUC5SfdztmqFTfdUdNwo5xuhG_wPwlWSzfUuApgO25yD8UxLjYgxC2-R4i1O7Wq3wjAaFTOlmMdFX-fkMzRUBqskLrSvE6MuCuBHMvcqAsex9L5C1v6bMMwNj4peCVvhUiS219jMQop6tR0MqrmQtR1AMNEa6sBZGQbBJXokH'}}
                    style={styles.schoolLogo}
                  />
                </View>
                <View style={styles.checkBadge}>
                  <Icon name="check-circle" size={20} color="#fff" />
                </View>
              </View>

              <Text style={styles.schoolFoundText}>SCHOOL FOUND</Text>
              <Text style={styles.schoolName}>Green Valley International School</Text>
              <Text style={styles.schoolDesc}>Join 482 students currently saving the planet in this district.</Text>

              <View style={styles.statsRow}>
                <View style={styles.statBox}>
                  <Text style={styles.statLabel}>Rank</Text>
                  <Text style={styles.statValue}>#4</Text>
                </View>
                <View style={[styles.statBox, styles.statBoxBorder]}>
                  <Text style={styles.statLabel}>Impact</Text>
                  <Text style={styles.statValue}>Top 5%</Text>
                </View>
                <View style={styles.statBox}>
                  <Text style={styles.statLabel}>Trees</Text>
                  <Text style={styles.statValue}>1.2k</Text>
                </View>
              </View>

              <TouchableOpacity style={styles.proceedBtn}>
                <Text style={styles.proceedBtnText}>Proceed to Arena</Text>
                <Icon name="arrow-forward" size={24} color="#f8f9fa" />
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={resetView}>
              <Text style={styles.resetText}>Not your school? Try another code</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  blob1: { position: 'absolute', top: -100, left: -100, width: 300, height: 300, borderRadius: 150, backgroundColor: 'rgba(16, 185, 129, 0.2)', opacity: 0.5, transform: [{ scale: 1.5 }] },
  blob2: { position: 'absolute', bottom: -100, right: -100, width: 250, height: 250, borderRadius: 125, backgroundColor: 'rgba(109, 245, 225, 0.2)', opacity: 0.5, transform: [{ scale: 1.5 }] },
  header: { height: 64, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 24, backgroundColor: 'rgba(248, 249, 250, 0.8)' },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  backBtn: { width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  logoText: { fontSize: 24, fontWeight: '800', color: '#006c49' },
  xpBadge: { flexDirection: 'row', alignItems: 'center', gap: 8, backgroundColor: '#f3f4f5', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 24, borderWidth: 1, borderColor: 'rgba(187, 202, 191, 0.1)' },
  xpText: { fontSize: 12, fontWeight: '700', color: '#3c4a42' },
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  entryContainer: { width: '100%', maxWidth: 400, alignItems: 'center' },
  iconBg: { width: 64, height: 64, backgroundColor: 'rgba(16, 185, 129, 0.1)', borderRadius: 16, alignItems: 'center', justifyContent: 'center', marginBottom: 24 },
  title: { fontSize: 32, fontWeight: '700', color: '#191c1d', marginBottom: 12, textAlign: 'center' },
  subtitle: { fontSize: 16, color: '#3c4a42', textAlign: 'center', marginBottom: 40, paddingHorizontal: 24 },
  inputContainer: { width: '100%', marginBottom: 40 },
  inputWrapper: { position: 'relative' },
  inputLabel: { position: 'absolute', top: -8, left: 16, backgroundColor: '#f8f9fa', paddingHorizontal: 4, fontSize: 12, fontWeight: '700', color: '#006c49', zIndex: 1 },
  input: { height: 64, backgroundColor: '#f3f4f5', borderWidth: 2, borderColor: 'rgba(187, 202, 191, 0.3)', borderRadius: 8, fontSize: 28, fontWeight: '700', color: '#006c49', textAlign: 'center', letterSpacing: 4 },
  helperText: { textAlign: 'center', fontSize: 14, color: 'rgba(60, 74, 66, 0.7)', marginTop: 12 },
  verifyBtn: { width: '100%', height: 64, backgroundColor: '#006c49', borderRadius: 8, alignItems: 'center', justifyContent: 'center', shadowColor: '#006c49', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 8, elevation: 4 },
  verifyBtnDisabled: { opacity: 0.5 },
  verifyBtnText: { color: '#fff', fontSize: 24, fontWeight: '600' },
  successContainer: { width: '100%', maxWidth: 400, alignItems: 'center' },
  successCard: { width: '100%', backgroundColor: '#fff', borderRadius: 8, padding: 40, shadowColor: '#006c49', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.05, shadowRadius: 16, elevation: 4, alignItems: 'center', marginBottom: 24, borderWidth: 1, borderColor: 'rgba(187, 202, 191, 0.3)', position: 'relative', overflow: 'hidden' },
  successCardDeco: { position: 'absolute', top: 0, left: 0, right: 0, height: 4, backgroundColor: '#10b981' },
  schoolLogoContainer: { position: 'relative', marginBottom: 24 },
  schoolLogoBg: { width: 96, height: 96, borderRadius: 48, backgroundColor: '#e1e3e4', padding: 4, borderWidth: 4, borderColor: 'rgba(16, 185, 129, 0.2)' },
  schoolLogo: { width: '100%', height: '100%', borderRadius: 48 },
  checkBadge: { position: 'absolute', bottom: -4, right: -4, backgroundColor: '#10b981', borderRadius: 16, padding: 4, borderWidth: 4, borderColor: '#fff' },
  schoolFoundText: { fontSize: 12, fontWeight: '700', color: '#006c49', letterSpacing: 2, marginBottom: 8 },
  schoolName: { fontSize: 32, fontWeight: '700', color: '#191c1d', textAlign: 'center', marginBottom: 8 },
  schoolDesc: { fontSize: 16, color: '#3c4a42', textAlign: 'center', marginBottom: 24 },
  statsRow: { flexDirection: 'row', width: '100%', borderTopWidth: 1, borderTopColor: 'rgba(187, 202, 191, 0.2)', paddingTop: 24, marginBottom: 32 },
  statBox: { flex: 1, alignItems: 'center' },
  statBoxBorder: { borderLeftWidth: 1, borderRightWidth: 1, borderColor: 'rgba(187, 202, 191, 0.2)' },
  statLabel: { fontSize: 12, fontWeight: '700', color: 'rgba(60, 74, 66, 0.6)', marginBottom: 4 },
  statValue: { fontSize: 20, fontWeight: '700', color: '#006c49' },
  proceedBtn: { width: '100%', height: 56, backgroundColor: '#191c1d', borderRadius: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 },
  proceedBtnText: { color: '#f8f9fa', fontSize: 24, fontWeight: '600' },
  resetText: { fontSize: 12, fontWeight: '700', color: 'rgba(60, 74, 66, 0.7)' },
});
