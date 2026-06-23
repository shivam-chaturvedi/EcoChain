import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

export default function SchoolCodeGenerationScreen({ navigation }: any) {
  const [code, setCode] = useState('CHX-UAE-GREEN123');

  const generateNewCode = () => {
    const regions = ['UAE', 'UK', 'US', 'SG', 'EU'];
    const keywords = ['GREEN', 'ECO', 'ROOTS', 'LEAF', 'TERRA'];
    const randomRegion = regions[Math.floor(Math.random() * regions.length)];
    const randomKeyword = keywords[Math.floor(Math.random() * keywords.length)];
    const randomNum = Math.floor(100 + Math.random() * 899);
    
    setCode(`CHX-${randomRegion}-${randomKeyword}${randomNum}`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Icon name="eco" size={28} color="#006c49" />
          <Text style={styles.logoText}>ChonX</Text>
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.navLink}>PROGRESS</Text>
          <Text style={styles.navLinkOff}>HELP</Text>
          <Text style={styles.navLinkOff}>EXIT</Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.iconBg}>
            <Icon name="school" size={40} color="#006c49" />
          </View>
          <Text style={styles.title}>Generate your School Code</Text>
          <Text style={styles.subtitle}>This unique identifier connects your institution's environmental impact data across the ChonX ecosystem.</Text>

          <TouchableOpacity style={styles.generateBtn} onPress={generateNewCode}>
            <LinearGradient colors={['#10b981', '#059669']} start={{x:0,y:0}} end={{x:1,y:1}} style={styles.generateBtnGradient}>
              <Text style={styles.generateBtnText}>Generate Code</Text>
              <Icon name="auto-awesome" size={24} color="#fff" />
            </LinearGradient>
          </TouchableOpacity>

          <View style={styles.codeContainer}>
            <Text style={styles.codeText}>{code}</Text>
            <View style={styles.codeActions}>
              <TouchableOpacity style={styles.iconBtn} onPress={generateNewCode}>
                <Icon name="refresh" size={24} color="#006c49" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconBtn}>
                <Icon name="content-copy" size={24} color="#006c49" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.helperRow}>
            <Icon name="info" size={16} color="#006c49" />
            <Text style={styles.helperText}>This code will be used by teachers & students during onboarding. Ensure it's shared through secure school channels.</Text>
          </View>

          <View style={styles.imageContainer}>
            <Image 
              source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHRGrsGxWau_BA_-Y-F4AC7bUsNzDzfWkuVCp9FhDOZUTPhmA8WbYfeiwzVaWpeBWUiH3H_raqtbQXAcodN1aG-cOLFO_wF0j2TKMbb_Wu_IqfIBEtzzuZePcsVoDa4dLhpZt0oOZ_LGwrutb7J7DOTQiVHB3OwbUAsg0X5gg2RilBOeic0VF5n-CKNk4qWSdhG3wdXJrT9z64Zd_giarGvYdul9mak-lGEg3BzHmhMy6cJPjDcyFqYH4vZrSI5-tUvs1eO2Xy6Q5b'}}
              style={styles.image}
            />
            <LinearGradient colors={['#fff', 'transparent']} style={styles.imageGradient} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { height: 80, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 24, backgroundColor: 'rgba(248, 249, 250, 0.8)', borderBottomWidth: 1, borderBottomColor: 'rgba(187, 202, 191, 0.3)' },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  logoText: { fontSize: 24, fontWeight: '800', color: '#006c49' },
  headerRight: { flexDirection: 'row', alignItems: 'center', gap: 40, display: 'none' }, // hidden on mobile typically
  navLink: { fontSize: 12, fontWeight: '700', color: '#006c49' },
  navLinkOff: { fontSize: 12, fontWeight: '700', color: '#3c4a42' },
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  card: { backgroundColor: '#fff', borderRadius: 16, padding: 40, width: '100%', maxWidth: 672, alignItems: 'center', shadowColor: '#006c49', shadowOffset: { width: 0, height: 20 }, shadowOpacity: 0.08, shadowRadius: 50, elevation: 8, borderWidth: 1, borderColor: 'rgba(187, 202, 191, 0.2)' },
  iconBg: { width: 64, height: 64, borderRadius: 32, backgroundColor: 'rgba(16, 185, 129, 0.1)', alignItems: 'center', justifyContent: 'center', marginBottom: 24 },
  title: { fontSize: 32, fontWeight: '700', color: '#191c1d', marginBottom: 8, textAlign: 'center' },
  subtitle: { fontSize: 16, color: '#3c4a42', textAlign: 'center', marginBottom: 40, maxWidth: 400 },
  generateBtn: { width: '100%', borderRadius: 8, overflow: 'hidden', shadowColor: '#006c49', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 8, elevation: 4, marginBottom: 24 },
  generateBtnGradient: { height: 64, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12 },
  generateBtnText: { color: '#fff', fontSize: 24, fontWeight: '600' },
  codeContainer: { width: '100%', backgroundColor: '#f3f4f5', borderRadius: 8, borderWidth: 2, borderColor: 'rgba(187, 202, 191, 0.4)', borderStyle: 'dashed', padding: 24, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 },
  codeText: { fontSize: 28, fontWeight: '700', color: '#006c49', letterSpacing: 2 },
  codeActions: { flexDirection: 'row', gap: 8 },
  iconBtn: { width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center' },
  helperRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 8, maxWidth: 320, opacity: 0.7 },
  helperText: { fontSize: 12, fontWeight: '700', color: '#3c4a42', flex: 1, lineHeight: 16 },
  imageContainer: { width: '100%', height: 128, borderRadius: 8, overflow: 'hidden', marginTop: 64, position: 'relative' },
  image: { width: '100%', height: '100%', resizeMode: 'cover', opacity: 0.4 },
  imageGradient: { ...StyleSheet.absoluteFillObject },
});
