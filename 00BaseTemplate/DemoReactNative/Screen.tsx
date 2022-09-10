import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
    ...Platform.select({
      ios: { backgroundColor: 'lightskyblue' },
      android: { backgroundColor: 'springgreen' },
    }),
  },
  text: { fontSize: 24 },
});

export const Screen = () => {
  const message = Platform.select({
    ios: 'iOS User',
    android: 'Android User',
  });
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Hello {message}</Text>
    </View>
  );
};