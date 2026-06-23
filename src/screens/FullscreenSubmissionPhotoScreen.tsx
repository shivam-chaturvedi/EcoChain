import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get('window');

const FullscreenSubmissionPhotoScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=1200' }}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.topNav}>
        <TouchableOpacity style={styles.iconBtn} onPress={() => navigation.goBack()}>
          <Icon name="close" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Submission Details</Text>
          <Text style={styles.subtitle}>REVIEWING: LEO SILVA</Text>
        </View>
        <TouchableOpacity style={styles.iconBtn}>
          <Icon name="more-vert" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.infoOverlay}>
        <View style={styles.glassBadge}>
          <View style={styles.iconCircle}>
            <Icon name="eco" size={24} color="#00422b" />
          </View>
          <View style={styles.badgeTextContainer}>
            <Text style={styles.badgeTitle}>Community Garden Project</Text>
            <Text style={styles.badgeSub}>SUBMITTED 2 HOURS AGO</Text>
          </View>
        </View>
      </View>

      <View style={styles.gesturesOverlay}>
        <View style={styles.gestureHint}>
          <Icon name="pinch" size={18} color="#fff" />
          <Text style={styles.gestureText}>Pinch to Zoom</Text>
        </View>
        <View style={styles.gestureHint}>
          <Icon name="keyboard-arrow-down" size={18} color="#fff" />
          <Text style={styles.gestureText}>Swipe to Dismiss</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  image: { width: width, height: height },
  topNav: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconBtn: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(25, 28, 29, 0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: { alignItems: 'center' },
  title: { fontSize: 20, fontWeight: '600', color: '#fff' },
  subtitle: { fontSize: 12, fontWeight: '700', color: 'rgba(255,255,255,0.7)', marginTop: 4, letterSpacing: 1 },
  infoOverlay: {
    position: 'absolute',
    bottom: 40,
    left: 24,
  },
  glassBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(25, 28, 29, 0.4)',
    padding: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#10b981',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  badgeTextContainer: {},
  badgeTitle: { fontSize: 16, color: '#fff', fontWeight: '500' },
  badgeSub: { fontSize: 10, color: 'rgba(255,255,255,0.6)', fontWeight: '700', letterSpacing: 0.5, marginTop: 4 },
  gesturesOverlay: {
    position: 'absolute',
    bottom: 40,
    right: 24,
    alignItems: 'flex-end',
    gap: 12,
  },
  gestureHint: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(25, 28, 29, 0.4)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    marginBottom: 8,
  },
  gestureText: { color: 'rgba(255,255,255,0.8)', fontSize: 10, fontWeight: '700', letterSpacing: 0.5, marginLeft: 6 },
});

export default FullscreenSubmissionPhotoScreen;
