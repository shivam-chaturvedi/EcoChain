import React, { useRef, useState } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface Props {
  value: number;
  min: number;
  max: number;
  step?: number;
  onValueChange?: (value: number) => void;
  trackColor?: string;
  thumbColor?: string;
  style?: ViewStyle;
}

const THUMB = 22;

export default function CustomSlider({
  value,
  min,
  max,
  step = 1,
  onValueChange,
  trackColor = '#E5E7EB',
  thumbColor = '#1A5C38',
  style,
}: Props) {
  const [trackWidth, setTrackWidth] = useState(0);
  const trackWidthRef = useRef(0);

  const resolve = (x: number): number => {
    const w = trackWidthRef.current;
    if (w <= THUMB) return value;
    const usable = w - THUMB;
    const pct = Math.max(0, Math.min(1, (x - THUMB / 2) / usable));
    const raw = min + pct * (max - min);
    const snapped = step > 0 ? Math.round(raw / step) * step : raw;
    return Math.max(min, Math.min(max, snapped));
  };

  const thumbLeft =
    trackWidth > THUMB
      ? ((value - min) / (max - min)) * (trackWidth - THUMB)
      : 0;

  return (
    <View
      style={[styles.root, style]}
      onLayout={(e) => {
        const w = e.nativeEvent.layout.width;
        trackWidthRef.current = w;
        setTrackWidth(w);
      }}
      onStartShouldSetResponder={() => true}
      onMoveShouldSetResponder={() => true}
      onResponderGrant={(e) => onValueChange?.(resolve(e.nativeEvent.locationX))}
      onResponderMove={(e) => onValueChange?.(resolve(e.nativeEvent.locationX))}>
      <View style={[styles.track, { backgroundColor: trackColor }]} />
      <View
        style={[
          styles.thumb,
          { left: thumbLeft, backgroundColor: thumbColor },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    height: THUMB,
    justifyContent: 'center',
    position: 'relative',
  },
  track: {
    height: 4,
    borderRadius: 2,
  },
  thumb: {
    position: 'absolute',
    width: THUMB,
    height: THUMB,
    borderRadius: THUMB / 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.18,
    shadowRadius: 3,
    elevation: 3,
  },
});
