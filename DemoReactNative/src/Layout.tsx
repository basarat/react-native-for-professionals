import React from 'react';
import { memo } from 'react';
import { View } from 'react-native';

export type LayoutProps = React.PropsWithChildren<{
  gap: number
}>;

export const Row = memo(({ gap, children }: LayoutProps) => {
  return (
    <View style={{ display: 'flex', flexDirection: 'row', gap: gap }}>
      {children}
    </View>
  );
});

export const Column = memo(({ gap, children }: LayoutProps) => {
  return (
    <View style={{ display: 'flex', flexDirection: 'column', gap: gap }}>
      {children}
    </View>
  );
});