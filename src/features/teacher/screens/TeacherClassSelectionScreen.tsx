import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import { Colors } from '../../../constants';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'TeacherClassSelection'>;
};

type ClassItem = {
  id: string;
  grade: string;
  students: number;
  dept: string;
  icon: string;
};

const INITIAL_CLASSES: ClassItem[] = [
  { id: '1', grade: 'Grade 6A', students: 32, dept: 'Science Dept.', icon: '👥' },
  { id: '2', grade: 'Grade 6B', students: 28, dept: 'Science Dept.', icon: '🎓' },
  { id: '3', grade: 'Grade 7A', students: 30, dept: 'Biology Lab', icon: '🪪' },
  { id: '4', grade: 'Grade 7C', students: 25, dept: 'General Studies', icon: '🏫' },
  { id: '5', grade: 'Grade 8B', students: 34, dept: 'Advanced Ecology', icon: '👥' },
];

export default function TeacherClassSelectionScreen({ navigation }: Props) {
  const [classes] = useState<ClassItem[]>(INITIAL_CLASSES);
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggleClass = (id: string) => {
    setSelected(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.surface} />

      {/* ── Header ── */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarEmoji}>🧑‍🏫</Text>
          </View>
          <Text style={styles.brand}>ChonX</Text>
        </View>
        <View style={styles.xpBadge}>
          <Text style={styles.xpBolt}>⚡</Text>
          <Text style={styles.xpText}>2,450 XP</Text>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}>

        {/* ── Title ── */}
        <Text style={styles.title}>Which classes do{'\n'}you teach?</Text>
        <Text style={styles.subtitle}>
          Select the groups you'll be guiding through the eco-challenge this semester.
        </Text>

        {/* ── Class Cards ── */}
        <View style={styles.cardList}>
          {classes.map(cls => {
            const isSelected = selected.has(cls.id);
            return (
              <TouchableOpacity
                key={cls.id}
                style={[styles.classCard, isSelected && styles.classCardSelected]}
                onPress={() => toggleClass(cls.id)}
                activeOpacity={0.75}>
                <View style={styles.classIconCircle}>
                  <Text style={styles.classIcon}>{cls.icon}</Text>
                </View>
                <View style={styles.classInfo}>
                  <Text style={styles.gradeName}>{cls.grade}</Text>
                  <Text style={styles.gradeMeta}>
                    {cls.students} Students{' '}
                    <Text style={styles.dot}>•</Text>
                    {' '}{cls.dept}
                  </Text>
                </View>
                {isSelected && (
                  <View style={styles.checkBadge}>
                    <Text style={styles.checkMark}>✓</Text>
                  </View>
                )}
              </TouchableOpacity>
            );
          })}

          {/* ── Add Another ── */}
          <TouchableOpacity style={styles.addCard} activeOpacity={0.7}>
            <View style={styles.addIconCircle}>
              <Text style={styles.addPlus}>+</Text>
            </View>
            <Text style={styles.addText}>Add Another</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>

      {/* ── Footer ── */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.nextBtn}
          onPress={() => navigation.navigate('TeacherNotifications')}
          activeOpacity={0.85}>
          <Text style={styles.nextBtnText}>Next Step  →</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('TeacherNotifications')}
          activeOpacity={0.6}>
          <Text style={styles.skipText}>SKIP FOR NOW</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Colors.surface,
  },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: Colors.surface,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  avatarCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#D1E8D8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarEmoji: {
    fontSize: 18,
  },
  brand: {
    fontSize: 18,
    fontWeight: '800',
    color: Colors.primaryDark,
    letterSpacing: -0.3,
  },
  xpBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  xpBolt: {
    fontSize: 14,
  },
  xpText: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.text,
  },

  // Scroll
  scroll: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 24,
  },

  // Title
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: Colors.text,
    lineHeight: 36,
    marginBottom: 10,
    letterSpacing: -0.4,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 21,
    marginBottom: 24,
  },

  // Card list
  cardList: {
    gap: 12,
  },

  // Class card
  classCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 18,
    borderWidth: 1.5,
    borderColor: Colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  classCardSelected: {
    borderColor: Colors.primaryDark,
    backgroundColor: '#F0FBF5',
  },
  classIconCircle: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#C8F0DF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  classIcon: {
    fontSize: 20,
  },
  classInfo: {
    flex: 1,
  },
  gradeName: {
    fontSize: 17,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 3,
  },
  gradeMeta: {
    fontSize: 13,
    color: Colors.textSecondary,
  },
  dot: {
    color: Colors.textLight,
  },
  checkBadge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.primaryDark,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  checkMark: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.white,
  },

  // Add Another
  addCard: {
    borderWidth: 1.5,
    borderColor: Colors.border,
    borderStyle: 'dashed',
    borderRadius: 16,
    paddingVertical: 24,
    alignItems: 'center',
    backgroundColor: Colors.white,
    gap: 8,
  },
  addIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPlus: {
    fontSize: 22,
    fontWeight: '400',
    color: Colors.textSecondary,
    lineHeight: 28,
  },
  addText: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.text,
  },

  // Footer
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 28,
    paddingTop: 12,
    backgroundColor: Colors.surface,
    gap: 14,
    alignItems: 'center',
  },
  nextBtn: {
    width: '100%',
    height: 54,
    backgroundColor: Colors.primaryDark,
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.primaryDark,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  nextBtnText: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.white,
    letterSpacing: 0.2,
  },
  skipText: {
    fontSize: 11,
    fontWeight: '700',
    color: Colors.textSecondary,
    letterSpacing: 1.0,
  },
});
