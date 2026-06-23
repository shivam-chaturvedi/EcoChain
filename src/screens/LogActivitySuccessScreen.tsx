import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
  Image,
  Dimensions,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

export default function LogActivitySuccessScreen({ navigation }: any) {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('');
  
  const progressAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(progressAnim, {
      toValue: step === 2 ? 100 : 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [step]);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setStep(2);
  };

  const categories = [
    { id: 'recycling', title: 'Recycling', icon: 'recycling' },
    { id: 'energy', title: 'Energy Saving', icon: 'bolt' },
    { id: 'water', title: 'Water Saving', icon: 'water-drop' },
    { id: 'travel', title: 'Sustainable Travel', icon: 'pedal-bike' },
    { id: 'waste', title: 'Reduced Waste', icon: 'delete-sweep' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.avatarBorder}>
            <Image 
              source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCF72xeEF6Px-SxXn3rIgeRQd5albwrTIZzt8LuUvMgQq-Z6vXlxbo_Ae4xPg459UH3TgF_WutrBkEwLBQ0yE4SfhLeHf46jrIRDt8U3bX8dyTzybzE_y8edEJdSc-9PxfBB91cHjHZpsxeLbC_57zkhdiFfzcLjp1PU73_gUxtr2hu666A8cMyKZTRokBhwOJ4jmvpnoWM_JFr3ZfHsuFp8MWluAnGkAZvfSa08vTwkAYSFhCcngsTfuraRAKhJESb2yJbhVwokEpm'}}
              style={styles.avatar}
            />
          </View>
          <Text style={styles.logoText}>ChonX</Text>
        </View>
        <TouchableOpacity style={styles.notifBtn}>
          <Icon name="notifications" size={24} color="#006c49" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Step Indicator */}
        <View style={styles.stepIndicator}>
          <View style={[styles.stepDot, step >= 1 ? styles.stepDotActive : null]} />
          <View style={styles.stepBar}>
            <Animated.View style={[styles.stepProgress, {
              width: progressAnim.interpolate({
                inputRange: [0, 100],
                outputRange: ['0%', '100%'],
              })
            }]} />
          </View>
          <View style={[styles.stepDot, step >= 2 ? styles.stepDotActive : null]} />
        </View>

        {step === 1 && (
          <View style={styles.stepContainer}>
            <View style={styles.textCenter}>
              <Text style={styles.title}>What did you save today?</Text>
              <Text style={styles.subtitle}>Select a category to log your sustainable action.</Text>
            </View>

            <View style={styles.grid}>
              {categories.map((cat) => (
                <TouchableOpacity 
                  key={cat.id} 
                  style={styles.card}
                  onPress={() => handleCategorySelect(cat.title)}
                >
                  <View style={styles.iconWrapper}>
                    <Icon name={cat.icon} size={36} color="#006c49" />
                  </View>
                  <Text style={styles.cardText}>{cat.title}</Text>
                </TouchableOpacity>
              ))}
              
              <TouchableOpacity 
                style={[styles.card, styles.customCard]}
                onPress={() => handleCategorySelect('Custom Entry')}
              >
                <View style={styles.customIconWrapper}>
                  <Icon name="add-circle" size={36} color="#6c7a71" />
                </View>
                <Text style={styles.cardText}>Custom Entry</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {step === 2 && (
          <View style={styles.stepContainer}>
            <TouchableOpacity style={styles.backLink} onPress={() => setStep(1)}>
              <Icon name="arrow-back" size={20} color="#006c49" />
              <Text style={styles.backLinkText}>Back</Text>
            </TouchableOpacity>

            <View style={styles.formCard}>
              <Text style={styles.formTitle}>Log Activity</Text>
              
              <View style={styles.formGroup}>
                <Text style={styles.label}>ACTIVITY TYPE</Text>
                <View style={styles.inputBox}>
                  <Text style={styles.inputText}>Biking to School</Text>
                  <Icon name="arrow-drop-down" size={24} color="#3c4a42" />
                </View>
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>DISTANCE IN KM</Text>
                <View style={[styles.inputBox, { justifyContent: 'flex-start' }]}>
                  <TextInput 
                    style={styles.textInput}
                    placeholder="0.0"
                    placeholderTextColor="#6c7a71"
                    keyboardType="numeric"
                  />
                  <Text style={styles.unitText}>KM</Text>
                </View>
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>PROOF PHOTO</Text>
                <TouchableOpacity style={styles.photoUpload}>
                  <Icon name="add-a-photo" size={32} color="#6c7a71" />
                  <Text style={styles.photoUploadText}>Upload a photo to verify</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.row}>
                <View style={[styles.formGroup, { flex: 1, marginRight: 8 }]}>
                  <Text style={styles.label}>DATE</Text>
                  <View style={styles.inputBox}>
                    <Text style={styles.inputText}>2023-10-25</Text>
                  </View>
                </View>
                <View style={[styles.formGroup, { flex: 1, marginLeft: 8 }]}>
                  <Text style={styles.label}>DURATION</Text>
                  <View style={styles.inputBox}>
                    <TextInput 
                      style={styles.textInput}
                      placeholder="e.g. 25 mins"
                      placeholderTextColor="#6c7a71"
                    />
                  </View>
                </View>
              </View>

              <View style={styles.formGroup}>
                <View style={styles.intensityHeader}>
                  <Text style={styles.label}>EFFORT / INTENSITY</Text>
                  <Text style={styles.intensityValue}>Medium</Text>
                </View>
                <View style={styles.sliderTrack}>
                  <View style={styles.sliderFill} />
                  <View style={styles.sliderThumb} />
                </View>
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>DESCRIPTION</Text>
                <View style={[styles.inputBox, { height: 80, alignItems: 'flex-start' }]}>
                  <TextInput 
                    style={[styles.textInput, { height: 80, textAlignVertical: 'top' }]}
                    placeholder="Tell us more about your impact..."
                    placeholderTextColor="#6c7a71"
                    multiline
                  />
                </View>
              </View>

              <TouchableOpacity 
                style={styles.submitBtn}
                onPress={() => navigation.navigate('LogActivitySuccessCelebration')}
              >
                <LinearGradient
                  colors={['#10b981', '#006c49']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.submitBtnGradient}
                >
                  <Text style={styles.submitBtnText}>Complete Logging</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>

      {/* Bottom Nav Mock */}
      <View style={styles.bottomNav}>
        <View style={styles.navItem}>
          <Icon name="home" size={24} color="#3c4a42" />
          <Text style={styles.navText}>Home</Text>
        </View>
        <View style={styles.navItemActive}>
          <Icon name="eco" size={24} color="#00422b" />
          <Text style={styles.navTextActive}>Impact</Text>
        </View>
        <View style={styles.navItem}>
          <Icon name="military-tech" size={24} color="#3c4a42" />
          <Text style={styles.navText}>Arena</Text>
        </View>
        <View style={styles.navItem}>
          <Icon name="person" size={24} color="#3c4a42" />
          <Text style={styles.navText}>Profile</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  header: {
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    backgroundColor: 'rgba(248, 249, 250, 0.8)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(108, 122, 113, 0.1)',
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center' },
  avatarBorder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#10b981',
    overflow: 'hidden',
  },
  avatar: { width: '100%', height: '100%' },
  logoText: {
    fontSize: 24,
    fontWeight: '800',
    color: '#006c49',
    marginLeft: 12,
  },
  notifBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContent: { padding: 24, paddingBottom: 100 },
  stepIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  stepDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#e1e3e4',
  },
  stepDotActive: { backgroundColor: '#006c49' },
  stepBar: {
    width: 32,
    height: 4,
    backgroundColor: '#e1e3e4',
    borderRadius: 2,
    marginHorizontal: 16,
    overflow: 'hidden',
  },
  stepProgress: {
    height: '100%',
    backgroundColor: '#006c49',
  },
  stepContainer: { flex: 1 },
  textCenter: { alignItems: 'center', marginBottom: 40 },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#191c1d',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#3c4a42',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: (width - 48 - 16) / 2,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(229, 231, 235, 0.5)',
  },
  iconWrapper: {
    width: 64,
    height: 64,
    borderRadius: 16,
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  cardText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#191c1d',
    textAlign: 'center',
  },
  customCard: {
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#bbcabf',
  },
  customIconWrapper: {
    width: 64,
    height: 64,
    borderRadius: 16,
    backgroundColor: '#edeeef',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  backLink: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  backLinkText: {
    color: '#006c49',
    fontWeight: '700',
    marginLeft: 4,
  },
  formCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(229, 231, 235, 0.5)',
  },
  formTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: '#006c49',
    marginBottom: 24,
  },
  formGroup: { marginBottom: 24 },
  label: {
    fontSize: 12,
    fontWeight: '700',
    color: '#3c4a42',
    letterSpacing: 0.6,
    marginBottom: 8,
  },
  inputBox: {
    backgroundColor: '#f3f4f5',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputText: {
    fontSize: 16,
    color: '#191c1d',
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#191c1d',
    padding: 0,
  },
  unitText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#6c7a71',
    marginLeft: 16,
  },
  photoUpload: {
    height: 128,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#bbcabf',
    borderRadius: 8,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoUploadText: {
    fontSize: 14,
    color: '#6c7a71',
    marginTop: 8,
  },
  row: { flexDirection: 'row' },
  intensityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  intensityValue: {
    fontSize: 14,
    fontWeight: '700',
    color: '#006c49',
  },
  sliderTrack: {
    height: 8,
    backgroundColor: '#edeeef',
    borderRadius: 4,
    justifyContent: 'center',
  },
  sliderFill: {
    position: 'absolute',
    left: 0,
    width: '50%',
    height: '100%',
    backgroundColor: '#006c49',
    borderRadius: 4,
  },
  sliderThumb: {
    position: 'absolute',
    left: '50%',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#006c49',
    marginLeft: -10,
  },
  submitBtn: {
    width: '100%',
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#006c49',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
    marginTop: 8,
  },
  submitBtnGradient: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  submitBtnText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
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
