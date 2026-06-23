import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TeacherDashboardScreen from '../features/teacher/screens/TeacherDashboardScreen';
import VerificationQueueScreen from '../screens/VerificationQueueScreen';
import ArenaHubScreen from '../screens/ArenaHubScreen';
import TeacherProfileScreen from '../features/teacher/screens/TeacherProfileScreen';
import { Colors } from '../constants';

const Tab = createBottomTabNavigator();

export default function TeacherTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#10b981',
        tabBarInactiveTintColor: '#3c4a42',
        tabBarStyle: {
          height: 80,
          backgroundColor: 'rgba(248, 249, 250, 0.9)',
          borderTopWidth: 1,
          borderTopColor: 'rgba(187, 202, 191, 0.3)',
          paddingBottom: 16,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '700',
          marginTop: 4,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName = 'home';

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Verify') {
            iconName = 'eco';
          } else if (route.name === 'Arena') {
            iconName = 'military-tech';
          } else if (route.name === 'Profile') {
            iconName = 'person';
          }

          return <Icon name={iconName} size={24} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={TeacherDashboardScreen} />
      <Tab.Screen name="Verify" component={VerificationQueueScreen} />
      <Tab.Screen name="Arena" component={ArenaHubScreen} />
      <Tab.Screen name="Profile" component={TeacherProfileScreen} />
    </Tab.Navigator>
  );
}
