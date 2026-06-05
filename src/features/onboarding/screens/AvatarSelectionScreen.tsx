import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import { Colors } from '../../../constants';

const { width: SCREEN_W } = Dimensions.get('window');
const H_PAD = 16;
const COL_GAP = 10;
const COLS = 3;
const CARD_SIZE = Math.floor((SCREEN_W - H_PAD * 2 - COL_GAP * (COLS - 1)) / COLS);

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'AvatarSelection'>;
};

type Avatar = {
  id: string;
  emoji: string;
  name: string;
  bgLight: string;
  bgDeep: string;
};

const AVATARS: Avatar[] = [
  { id: '1',  emoji: '🌿', name: 'Eco-Plant',    bgLight: '#C8E6C9', bgDeep: '#2E7D32' },
  { id: '2',  emoji: '🐻‍❄️', name: 'Arctic Bear',   bgLight: '#E3F0FF', bgDeep: '#5B8DD9' },
  { id: '3',  emoji: '☀️', name: 'Sun Buddy',    bgLight: '#FFF9E0', bgDeep: '#F9A825' },
  { id: '4',  emoji: '🤖', name: 'Eco-Bot',      bgLight: '#E8EDF2', bgDeep: '#607D8B' },
  { id: '5',  emoji: '🌻', name: 'Eco-Explorer', bgLight: '#D8EFE2', bgDeep: '#2D6A4F' },
  { id: '6',  emoji: '🐝', name: 'Bee Friend',   bgLight: '#FFF8D0', bgDeep: '#F9A825' },
  { id: '7',  emoji: '🌳', name: 'Tree Spirit',  bgLight: '#C8E6C9', bgDeep: '#388E3C' },
  { id: '8',  emoji: '💧', name: 'Water Drop',   bgLight: '#E3F2FD', bgDeep: '#1E88E5' },
  { id: '9',  emoji: '👾', name: 'Eco-Alien',    bgLight: '#EDE7F6', bgDeep: '#7B1FA2' },
  { id: '10', emoji: '🦊', name: 'Forest Fox',   bgLight: '#FFE0B2', bgDeep: '#E64A19' },
  { id: '11', emoji: '🦜', name: 'Sky Parrot',   bgLight: '#E0F7FA', bgDeep: '#00838F' },
  { id: '12', emoji: '⛰️', name: 'Mountain',     bgLight: '#ECEFF1', bgDeep: '#546E7A' },
];

const DEFAULT_SELECTED = '5'; // Eco-Explorer

export default function AvatarSelectionScreen({ navigation }: Props) {
  const [selectedId, setSelectedId] = useState<string>(DEFAULT_SELECTED);

  const selectedAvatar = AVATARS.find(a => a.id === selectedId)!;

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <StatusBar barStyle="dark-content" backgroundColor={styles.safeArea.backgroundColor} />

      {/* Top bar */}
      <View style={styles.topBar}>
        {/* User profile avatar with level badge */}
        <View style={styles.userAvatarWrapper}>
          <View
            style={[
              styles.userAvatarCircle,
              { backgroundColor: selectedAvatar.bgDeep },
            ]}>
            <Text style={styles.userAvatarEmoji}>{selectedAvatar.emoji}</Text>
          </View>
          <View style={styles.userLevelBadge}>
            <Text style={styles.userLevelText}>12</Text>
          </View>
        </View>

        {/* XP badge */}
        <View style={styles.xpBadge}>
          <Text style={styles.xpLeaf}>🌿</Text>
          <Text style={styles.xpText}>1,250 XP</Text>
        </View>

        {/* Close / done → SetPreferences */}
        <TouchableOpacity
          style={styles.closeBtn}
          onPress={() => navigation.navigate('SetPreferences')}
          activeOpacity={0.7}>
          <Text style={styles.closeX}>✕</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>

        {/* Title */}
        <Text style={styles.title}>Choose your Avatar</Text>
        <Text style={styles.subtitle}>
          Pick a digital companion to represent your journey in saving the
          planet. You can change this later!
        </Text>

        {/* Avatar grid */}
        <View style={styles.grid}>
          {AVATARS.map(avatar => {
            const isSelected = avatar.id === selectedId;
            return (
              <View key={avatar.id} style={styles.cellWrapper}>
                <TouchableOpacity
                  style={[
                    styles.avatarCard,
                    { backgroundColor: avatar.bgLight },
                    isSelected && styles.avatarCardSelected,
                  ]}
                  onPress={() => setSelectedId(avatar.id)}
                  activeOpacity={0.8}>
                  <Text
                    style={[
                      styles.avatarEmoji,
                      isSelected && styles.avatarEmojiSelected,
                    ]}>
                    {avatar.emoji}
                  </Text>
                </TouchableOpacity>
                {isSelected && (
                  <Text style={styles.avatarLabel}>{avatar.name}</Text>
                )}
              </View>
            );
          })}
        </View>

        <View style={{ height: 24 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F3F5F3',
  },

  // Top bar
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },

  // User avatar
  userAvatarWrapper: {
    position: 'relative',
    width: 42,
    height: 42,
  },
  userAvatarCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Colors.white,
  },
  userAvatarEmoji: {
    fontSize: 20,
  },
  userLevelBadge: {
    position: 'absolute',
    bottom: -2,
    right: -4,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: Colors.primaryDark,
    borderWidth: 1.5,
    borderColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userLevelText: {
    fontSize: 8,
    fontWeight: '800',
    color: Colors.white,
  },

  // XP badge
  xpBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#22C55E',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 20,
    gap: 5,
  },
  xpLeaf: {
    fontSize: 13,
  },
  xpText: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.white,
  },

  // Close button
  closeBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#E8EAE8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeX: {
    fontSize: 14,
    color: '#555',
    fontWeight: '600',
  },

  // Scroll
  scrollContent: {
    paddingHorizontal: H_PAD,
    paddingTop: 12,
  },

  // Title
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.text,
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 24,
    paddingHorizontal: 8,
  },

  // Grid
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: COL_GAP,
    justifyContent: 'flex-start',
  },

  // Cell wrapper (holds card + optional label)
  cellWrapper: {
    width: CARD_SIZE,
    alignItems: 'center',
    marginBottom: 4,
  },

  // Avatar card
  avatarCard: {
    width: CARD_SIZE,
    height: CARD_SIZE,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  avatarCardSelected: {
    borderRadius: CARD_SIZE / 2,
    borderWidth: 3.5,
    borderColor: Colors.primaryDark,
  },
  avatarEmoji: {
    fontSize: CARD_SIZE * 0.42,
  },
  avatarEmojiSelected: {
    fontSize: CARD_SIZE * 0.38,
  },

  // Label under selected
  avatarLabel: {
    marginTop: 5,
    fontSize: 11,
    fontWeight: '600',
    color: Colors.text,
    textAlign: 'center',
  },
});
