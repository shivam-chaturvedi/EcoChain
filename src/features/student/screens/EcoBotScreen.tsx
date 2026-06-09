import React from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
  ScrollView, Dimensions, StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import { Colors } from '../../../constants';

const { width: W } = Dimensions.get('window');

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'EcoBot'>;
};

const BOT_AVATAR_D = 32;
const MSG_BOT_W    = W * 0.72;
const MSG_USER_W   = W * 0.70;

// ─── Bot avatar bubble ───────────────────────────────────────────────────────
function BotAvatar() {
  return (
    <View style={s.botAvatar}>
      <Text style={{ fontSize: 16 }}>🌱</Text>
    </View>
  );
}

// ─── Regular bot message ─────────────────────────────────────────────────────
function BotMessage({ text, time }: { text: string; time: string }) {
  return (
    <View style={s.msgRowBot}>
      <BotAvatar />
      <View style={s.botBubble}>
        <Text style={s.botText}>{text}</Text>
        <Text style={s.msgTime}>{time}</Text>
      </View>
    </View>
  );
}

// ─── User message ────────────────────────────────────────────────────────────
function UserMessage({ text, time }: { text: string; time: string }) {
  return (
    <View style={s.msgRowUser}>
      <View style={s.userBubble}>
        <Text style={s.userText}>{text}</Text>
        <Text style={s.msgTimeLight}>{time}</Text>
      </View>
    </View>
  );
}

// ─── Eco-Calculation result card ─────────────────────────────────────────────
function EcoCalcCard({ time }: { time: string }) {
  return (
    <View style={s.msgRowBot}>
      <BotAvatar />
      <View style={s.calcCard}>
        {/* Card header */}
        <View style={s.calcHeader}>
          <Text style={{ fontSize: 16 }}>🤖</Text>
          <Text style={s.calcHeaderTxt}>Eco-Calculation</Text>
        </View>
        {/* Body */}
        <Text style={s.calcBody}>
          {'Biking to work earns you '}
          <Text style={s.calcBold}>50 XP</Text>
          {' and saves approximately '}
          <Text style={s.calcBold}>1.2kg of CO2</Text>
          {'!'}
        </Text>
        {/* Achievement sub-card */}
        <View style={s.achievCard}>
          <View style={s.achievIconCircle}>
            <Text style={{ fontSize: 18 }}>🚴</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={s.achievTitle}>Daily Achievement Unlocked</Text>
            <Text style={s.achievSub}>Green Commuter Level 2</Text>
          </View>
        </View>
        <Text style={s.msgTime}>{time}</Text>
      </View>
    </View>
  );
}

// ─── Quick action chip ───────────────────────────────────────────────────────
function ActionChip({ icon, label }: { icon: string; label: string }) {
  return (
    <TouchableOpacity style={s.chip} activeOpacity={0.75}>
      <Text style={{ fontSize: 14 }}>{icon}</Text>
      <Text style={s.chipTxt}>{label}</Text>
    </TouchableOpacity>
  );
}

// ─── Screen ──────────────────────────────────────────────────────────────────
export default function EcoBotScreen({ navigation: _nav }: Props) {
  return (
    <SafeAreaView style={s.safe} edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* ── Header ─────────────────────────── */}
      <View style={s.header}>
        <View style={s.headerLeft}>
          <View style={s.botHeaderIcon}>
            <Text style={{ fontSize: 20 }}>🤖</Text>
          </View>
          <View>
            <Text style={s.brand}>ChonX</Text>
            <Text style={s.botSubtitle}>ECO-INTELLIGENCE BOT</Text>
          </View>
        </View>
        <View style={s.headerRight}>
          <TouchableOpacity style={s.bellBtn} activeOpacity={0.7}>
            <Text style={s.bellIcon}>🔔</Text>
          </TouchableOpacity>
          <View style={s.headerAvatar}>
            <Text style={s.headerAvatarEmoji}>🧑</Text>
          </View>
        </View>
      </View>

      {/* ── Decorative background (absolute, behind scroll) ── */}
      <View style={s.decoLayer} pointerEvents="none">
        <Text style={s.decoIcon}>♻️</Text>
        <Text style={[s.decoIcon, s.decoIconAlt]}>🌿</Text>
        <Text style={[s.decoIcon, s.decoIconBottom]}>↑</Text>
      </View>

      {/* ── Chat scroll area ───────────────── */}
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={s.scroll}
        showsVerticalScrollIndicator={false}>

        <BotMessage
          text="...calculate your impact or explore the Arena today? 🌱"
          time="09:41 AM"
        />

        <UserMessage
          text="How many points do I get for biking to work today?"
          time="09:42 AM"
        />

        <EcoCalcCard time="09:42 AM" />

        {/* ── Quick action chips ──────────── */}
        <View style={s.chipsSection}>
          <View style={s.chipsRow}>
            <ActionChip icon="🏆" label="Check Rankings" />
            <ActionChip icon="🗓" label="Daily Challenge" />
          </View>
          <View style={s.chipsRow}>
            <ActionChip icon="📋" label="Log My Commute" />
          </View>
        </View>

        <View style={{ height: 140 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

// ─── Styles ──────────────────────────────────────────────────────────────────
const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F2F5F3' },

  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 16, paddingVertical: 10, backgroundColor: '#fff',
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  botHeaderIcon: {
    width: 42, height: 42, borderRadius: 21,
    backgroundColor: '#D1FAE5', alignItems: 'center', justifyContent: 'center',
  },
  brand: { fontSize: 17, fontWeight: '800', color: Colors.primaryDark },
  botSubtitle: {
    fontSize: 9, fontWeight: '700', color: Colors.textSecondary,
    letterSpacing: 0.8, marginTop: 1,
  },
  headerRight: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  bellBtn: { padding: 4 },
  bellIcon: { fontSize: 20 },
  headerAvatar: {
    width: 34, height: 34, borderRadius: 17,
    backgroundColor: '#1A3D2E', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
  },
  headerAvatarEmoji: { fontSize: 18 },

  // Decorative background layer
  decoLayer: {
    position: 'absolute', bottom: 50, right: 0,
    width: 200, height: 260, overflow: 'hidden',
  },
  decoIcon: {
    fontSize: 100, opacity: 0.07,
    position: 'absolute', right: -10, top: 10,
    color: '#0D9488',
  },
  decoIconAlt: {
    fontSize: 80, top: 110, right: 30,
  },
  decoIconBottom: {
    fontSize: 120, top: 160, right: -5,
    color: '#0D9488', fontWeight: '900',
  },

  scroll: { paddingHorizontal: 14, paddingTop: 18 },

  // Bot message row
  msgRowBot: {
    flexDirection: 'row', alignItems: 'flex-end', gap: 8, marginBottom: 16,
  },
  botAvatar: {
    width: BOT_AVATAR_D, height: BOT_AVATAR_D, borderRadius: BOT_AVATAR_D / 2,
    backgroundColor: '#D1FAE5', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
  },
  botBubble: {
    maxWidth: MSG_BOT_W, backgroundColor: '#fff', borderRadius: 18,
    borderBottomLeftRadius: 4, padding: 14,
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06, shadowRadius: 6, elevation: 2,
  },
  botText: { fontSize: 14, color: Colors.text, lineHeight: 21, marginBottom: 6 },

  // User message row
  msgRowUser: {
    flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 16,
  },
  userBubble: {
    maxWidth: MSG_USER_W, backgroundColor: Colors.primaryDark, borderRadius: 18,
    borderBottomRightRadius: 4, padding: 14,
  },
  userText: { fontSize: 14, color: '#fff', lineHeight: 21, marginBottom: 6 },

  // Shared timestamp
  msgTime: { fontSize: 11, color: Colors.textLight, textAlign: 'right' },
  msgTimeLight: { fontSize: 11, color: 'rgba(255,255,255,0.6)', textAlign: 'right' },

  // Eco-Calculation card
  calcCard: {
    maxWidth: MSG_BOT_W, backgroundColor: '#fff', borderRadius: 18,
    borderBottomLeftRadius: 4, padding: 16,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08, shadowRadius: 10, elevation: 3,
  },
  calcHeader: {
    flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 12,
  },
  calcHeaderTxt: {
    fontSize: 14, fontWeight: '800', color: Colors.primaryDark, letterSpacing: 0.3,
  },
  calcBody: {
    fontSize: 14, color: Colors.text, lineHeight: 21, marginBottom: 12,
  },
  calcBold: {
    fontWeight: '800', color: Colors.primaryDark,
  },

  // Achievement sub-card
  achievCard: {
    flexDirection: 'row', alignItems: 'center', gap: 10,
    backgroundColor: '#D1FAE5', borderRadius: 12, padding: 10, marginBottom: 12,
  },
  achievIconCircle: {
    width: 40, height: 40, borderRadius: 20,
    backgroundColor: Colors.primaryDark, alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
  },
  achievTitle: { fontSize: 12, fontWeight: '800', color: Colors.primaryDark, marginBottom: 2 },
  achievSub: { fontSize: 11, fontWeight: '600', color: Colors.primary },

  // Quick action chips
  chipsSection: { marginTop: 8, gap: 10 },
  chipsRow: { flexDirection: 'row', gap: 10 },
  chip: {
    flexDirection: 'row', alignItems: 'center', gap: 6,
    paddingHorizontal: 16, paddingVertical: 10,
    backgroundColor: '#fff', borderRadius: 22,
    borderWidth: 1.5, borderColor: '#34D399',
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04, shadowRadius: 4, elevation: 1,
  },
  chipTxt: { fontSize: 13, fontWeight: '700', color: Colors.primaryDark },
});
