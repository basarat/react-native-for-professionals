import React from 'react';
import { memo } from 'react';
import { View, ViewStyle } from 'react-native';

export type LayoutProps = React.PropsWithChildren<{
  gap: number,
  styles?: ViewStyle,
}>;

export const Row = memo(({ gap, children, styles }: LayoutProps) => {
  return (
    <View style={[
      { display: 'flex', flexDirection: 'row', gap: gap },
      styles,
    ]}>
      {children}
    </View>
  );
});

export const Column = memo(({ gap, children, styles }: LayoutProps) => {
  return (
    <View style={[
      { display: 'flex', flexDirection: 'column', gap: gap },
      styles,
    ]}>
      {children}
    </View>
  );
});
