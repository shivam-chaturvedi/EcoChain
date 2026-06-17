import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import AppIcon from './AppIcon';
import { Colors } from '../constants';

type AnySchoolRoute = NativeStackNavigationProp<RootStackParamList, any>;

type Tab = {
  label: string;
  icon: string;
  route: keyof RootStackParamList;
};

const TABS: Tab[] = [
  { label: 'Dashboard', icon: 'dashboard', route: 'AcademyOverview' },
  { label: 'Initiatives', icon: 'eco', route: 'SchoolCodeManagement' },
  { label: 'Analytics', icon: 'bar-chart', route: 'SchoolAnalytics' },
];

type Props = {
  navigation: AnySchoolRoute;
  activeRoute: keyof RootStackParamList;
};

export default function SchoolBottomNav({ navigation, activeRoute }: Props) {
  return (
    <View style={styles.bottomNav}>
      {TABS.map(tab => {
        const isActive = activeRoute === tab.route;
        return (
          <TouchableOpacity
            key={tab.route}
            style={styles.navItem}
            activeOpacity={0.7}
            onPress={() => navigation.navigate(tab.route as any)}>
            {isActive ? (
              <View style={styles.navItemActiveBg}>
                <AppIcon name={tab.icon} size={22} color="#064E3B" />
              </View>
            ) : (
              <>
                <AppIcon name={tab.icon} size={22} color="#64748B" />
                <Text style={styles.navLabel}>{tab.label}</Text>
              </>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export const BOTTOM_NAV_HEIGHT = 72;

export const styles = StyleSheet.create({
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: BOTTOM_NAV_HEIGHT,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 8,
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingVertical: 4,
  },
  navItemActiveBg: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D1FAE5',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  navLabel: {
    fontSize: 10,
    fontWeight: '600',
    color: '#64748B',
    marginTop: 3,
  },
});
