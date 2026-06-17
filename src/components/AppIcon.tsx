import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type IconFamily = 'material' | 'community';

type Props = {
  name: string;
  size?: number;
  color?: string;
  family?: IconFamily;
};

export default function AppIcon({ name, size = 22, color = '#334155', family = 'material' }: Props) {
  if (family === 'community') {
    return <MaterialCommunityIcons name={name} size={size} color={color} />;
  }
  return <MaterialIcons name={name} size={size} color={color} />;
}
