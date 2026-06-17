import React from 'react';
import { View, Text } from 'react-native';
import { Colors } from '../constants';

interface Props {
  percent: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  trackColor?: string;
  centerBg?: string;
  showLabel?: boolean;
  fontSize?: number;
}

function PieArc({
  startDeg,
  sweepDeg,
  color,
  size,
}: {
  startDeg: number;
  sweepDeg: number;
  color: string;
  size: number;
}) {
  const half = size / 2;
  if (sweepDeg <= 0) return null;

  if (sweepDeg > 180) {
    return (
      <>
        <PieArc startDeg={startDeg} sweepDeg={180} color={color} size={size} />
        <PieArc startDeg={startDeg + 180} sweepDeg={sweepDeg - 180} color={color} size={size} />
      </>
    );
  }

  const innerRot = 180 - sweepDeg;
  return (
    <View
      style={{
        position: 'absolute',
        width: size,
        height: size,
        transform: [{ rotate: `${startDeg}deg` }],
      }}>
      <View
        style={{
          position: 'absolute',
          left: half,
          width: half,
          height: size,
          overflow: 'hidden',
        }}>
        <View
          style={{
            position: 'absolute',
            right: 0,
            width: size,
            height: size,
            borderRadius: half,
            backgroundColor: color,
            transform: [{ rotate: `${innerRot}deg` }],
          }}
        />
      </View>
    </View>
  );
}

export default function CircularProgress({
  percent,
  size = 48,
  strokeWidth = 5,
  color = Colors.primaryDark,
  trackColor = '#E5E7EB',
  centerBg = '#FFFFFF',
  showLabel = true,
  fontSize,
}: Props) {
  const safe = Math.min(100, Math.max(0, percent));
  const sweep = (safe / 100) * 360;
  const holeSize = size - strokeWidth * 2;
  const holeOffset = strokeWidth;

  return (
    <View style={{ width: size, height: size }}>
      {/* Track disk */}
      <View
        style={{
          position: 'absolute',
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: trackColor,
        }}
      />
      {/* Progress arc */}
      <PieArc startDeg={-90} sweepDeg={sweep} color={color} size={size} />
      {/* Centre hole */}
      <View
        style={{
          position: 'absolute',
          top: holeOffset,
          left: holeOffset,
          width: holeSize,
          height: holeSize,
          borderRadius: holeSize / 2,
          backgroundColor: centerBg,
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
        }}>
        {showLabel && (
          <Text
            style={{
              fontSize: fontSize ?? Math.round(size * 0.22),
              fontWeight: '700',
              color: Colors.text,
            }}>
            {safe}%
          </Text>
        )}
      </View>
    </View>
  );
}
