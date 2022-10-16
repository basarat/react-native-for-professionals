import React, { useRef } from 'react';
import { FlatList, Button, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { humanize } from './utils/humanize';

const styles = StyleSheet.create({
  fill: { flex: 1 }
});

const items: string[] = [...Array(100_000)].map((_, i) => humanize(i + 1));

const ITEM_HEIGHT = 16;
export default function App() {
  const ref = useRef<FlatList>(null);
  return (
    <SafeAreaView style={styles.fill}>
      <StatusBar hidden />
      <Button title="Scroll To End" onPress={() => { 
        ref.current?.scrollToEnd();
      }} />
      <Button title="Scroll Halfway" onPress={() => {
        ref.current?.scrollToIndex({
          index: items.length / 2,
        });
      }} />

      <FlatList
        ref={ref}
        data={items}
        initialNumToRender={100}
        maxToRenderPerBatch={100}
        keyExtractor={(item, index) => item}
        getItemLayout={(data, index) => {
          return { index, length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index };
        }}
        renderItem={({ item, index }) => {
          return (
            <View style={{ height: ITEM_HEIGHT }}>
              <Text style={{ fontSize: ITEM_HEIGHT, textAlign: 'center' }}>
                {item}
              </Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}