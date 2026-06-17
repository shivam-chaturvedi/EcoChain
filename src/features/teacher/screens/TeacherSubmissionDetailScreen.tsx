import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions,
  Modal,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import { Colors } from '../../../constants';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'TeacherSubmissionDetail'>;
};

const { width, height } = Dimensions.get('window');

const SUBMISSION = {
  studentName: 'Leo Silva',
  title: 'Community Garden Project',
  submittedAgo: 'SUBMITTED 2 HOURS AGO',
};

export default function TeacherSubmissionDetailScreen({ navigation }: Props) {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <View style={styles.root}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />

      {/* ── Header ── */}
      <SafeAreaView style={styles.headerSafe} edges={['top']}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.headerBtn}
            activeOpacity={0.7}>
            <Text style={styles.headerBtnText}>✕</Text>
          </TouchableOpacity>

          <View style={styles.headerCenter}>
            <Text style={styles.headerTitle}>Submission Details</Text>
            <Text style={styles.headerSubtitle}>REVIEWING: {SUBMISSION.studentName.toUpperCase()}</Text>
          </View>

          <TouchableOpacity
            style={styles.headerBtn}
            onPress={() => setMenuVisible(true)}
            activeOpacity={0.7}>
            <Text style={styles.headerBtnText}>⋮</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      {/* ── Full-screen image area ── */}
      <View style={styles.imageArea}>
        {/* In production this would be a photo/video viewer */}
      </View>

      {/* ── Bottom info card ── */}
      <SafeAreaView style={styles.bottomSafe} edges={['bottom']}>
        <View style={styles.bottomCard}>
          {/* Left: icon + text */}
          <View style={styles.bottomLeft}>
            <View style={styles.leafCircle}>
              <Text style={styles.leafEmoji}>🍃</Text>
            </View>
            <View style={styles.submissionTextBlock}>
              <Text style={styles.submissionTitle} numberOfLines={1}>
                {SUBMISSION.title}
              </Text>
              <Text style={styles.submissionTime}>{SUBMISSION.submittedAgo}</Text>
            </View>
          </View>

          {/* Right: hint */}
          <Text style={styles.pinchHint}>🤌 Pinch to Zoom</Text>
        </View>

        {/* Swipe to dismiss */}
        <View style={styles.swipeDismiss}>
          <Text style={styles.swipeDismissText}>∨  Swipe to Dismiss</Text>
        </View>
      </SafeAreaView>

      {/* ── 3-dot menu modal ── */}
      <Modal
        visible={menuVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setMenuVisible(false)}>
        <TouchableOpacity
          style={styles.menuBackdrop}
          activeOpacity={1}
          onPress={() => setMenuVisible(false)}>
          <View style={styles.menuSheet}>
            {['Flag Submission', 'Download Image', 'View Student Profile', 'Report Issue'].map(
              (item, i) => (
                <TouchableOpacity
                  key={item}
                  style={[styles.menuItem, i > 0 && styles.menuItemBorder]}
                  onPress={() => setMenuVisible(false)}
                  activeOpacity={0.7}>
                  <Text style={styles.menuItemText}>{item}</Text>
                </TouchableOpacity>
              ),
            )}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#000',
  },

  // Header
  headerSafe: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 14,
    gap: 8,
  },
  headerBtn: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerBtnText: {
    fontSize: 20,
    color: Colors.white,
    fontWeight: '600',
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: Colors.white,
    letterSpacing: -0.2,
  },
  headerSubtitle: {
    fontSize: 11,
    fontWeight: '600',
    color: 'rgba(255,255,255,0.6)',
    letterSpacing: 0.5,
    marginTop: 2,
  },

  // Image area
  imageArea: {
    flex: 1,
    backgroundColor: '#000',
  },

  // Bottom
  bottomSafe: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 16,
    paddingHorizontal: 16,
    gap: 10,
  },
  bottomCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A1A24',
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 12,
    gap: 10,
  },
  bottomLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  leafCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.primaryDark,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  leafEmoji: { fontSize: 18 },
  submissionTextBlock: {
    gap: 2,
    flex: 1,
  },
  submissionTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: Colors.white,
    letterSpacing: -0.1,
  },
  submissionTime: {
    fontSize: 10,
    fontWeight: '600',
    color: 'rgba(255,255,255,0.45)',
    letterSpacing: 0.3,
  },
  pinchHint: {
    fontSize: 11,
    color: 'rgba(255,255,255,0.55)',
    fontWeight: '500',
    flexShrink: 0,
  },

  swipeDismiss: {
    alignItems: 'center',
  },
  swipeDismissText: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.primaryLight,
    letterSpacing: 0.3,
  },

  // 3-dot menu
  menuBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingTop: 80,
    paddingRight: 16,
  },
  menuSheet: {
    backgroundColor: Colors.white,
    borderRadius: 14,
    width: 200,
    overflow: 'hidden',
  },
  menuItem: {
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  menuItemBorder: {
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  menuItemText: {
    fontSize: 14,
    color: Colors.text,
    fontWeight: '500',
  },
});
