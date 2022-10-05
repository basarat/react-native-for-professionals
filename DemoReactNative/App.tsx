import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { humanize } from './humanize';

const styles = StyleSheet.create({
  fill: { flex: 1 }
});

const items: string[] = [...Array(10_000)].map((_, i) => humanize(i + 1));

export default function App() {
  return (
    <SafeAreaView style={styles.fill}>
      <StatusBar hidden />

      <ScrollView>
        {items.map((item) => {
          return <Text key={item}>{item}</Text>
        })}
      </ScrollView>
    </SafeAreaView>
  );
}