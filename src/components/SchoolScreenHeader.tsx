import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import AppIcon from './AppIcon';
import AppLogo from './AppLogo';
import { Colors } from '../constants';

type AnySchoolRoute = NativeStackNavigationProp<RootStackParamList, any>;

type Props = {
  navigation: AnySchoolRoute;
  title?: string;
  showBack?: boolean;
  showBrand?: boolean;
  showNotifications?: boolean;
  showSettings?: boolean;
  onBack?: () => void;
};

export default function SchoolScreenHeader({
  navigation,
  title,
  showBack = true,
  showBrand = true,
  showNotifications = false,
  showSettings = false,
  onBack,
}: Props) {
  const handleBack = () => {
    if (onBack) {
      onBack();
      return;
    }
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate('AcademyOverview');
    }
  };

  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        {showBack && (
          <TouchableOpacity style={styles.backBtn} onPress={handleBack} activeOpacity={0.75}>
            <AppIcon name="arrow-back" size={20} color="#065F46" />
          </TouchableOpacity>
        )}
        {showBrand && (
          <View style={styles.brandRow}>
            <AppLogo size={28} />
            <Text style={styles.brandName}>EcoChain</Text>
          </View>
        )}
        {!!title && !showBrand && (
          <Text style={styles.headerTitle} numberOfLines={1}>
            {title}
          </Text>
        )}
      </View>

      {(showNotifications || showSettings) && (
        <View style={styles.headerRight}>
          {showNotifications && (
            <TouchableOpacity
              style={styles.iconBtn}
              onPress={() => navigation.navigate('NotificationCenter')}
              activeOpacity={0.75}>
              <AppIcon name="notifications" size={22} color="#334155" />
            </TouchableOpacity>
          )}
          {showSettings && (
            <TouchableOpacity
              style={styles.profileCircle}
              onPress={() => navigation.navigate('SchoolSettingsProfile')}
              activeOpacity={0.75}>
              <AppIcon name="settings" size={20} color="#334155" />
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 10,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ECFDF5',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#A7F3D0',
  },
  brandRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  brandIconCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#059669',
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandName: { fontSize: 17, fontWeight: '700', color: '#004D40' },
  headerTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#002B36',
    flex: 1,
  },
  headerRight: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  iconBtn: { padding: 4 },
  profileCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
