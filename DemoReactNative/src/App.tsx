import React, { useRef } from 'react';
import { FlatList, Button, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, ViewStyle, SectionList } from 'react-native';
import { sections } from './utils/sectionsData';

const styles = StyleSheet.create({
  item: { padding: 5, flexDirection: 'row', justifyContent: 'space-between' },
  itemText: { fontSize: 16 },
  header: { padding: 5, backgroundColor: 'grey' },
  headerText: { fontSize: 24, color: 'white', fontWeight: 'bold' },
});

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden />

      <SectionList
        keyExtractor={(item, index) => item.email}
        stickySectionHeadersEnabled={true}
        sections={sections}
        renderItem={({ item, index, section }) => {
          return (
            <View style={styles.item}>
              <Text style={styles.itemText}>{item.firstName}</Text>
              <Text style={styles.itemText}>{item.email}</Text>
            </View>
          );
        }}
        renderSectionHeader={({ section }) => {
          return (
            <View style={styles.header}>
              <Text style={styles.headerText}>
                {section.sectionName}
              </Text>
            </View>
          )
        }}
      />
    </SafeAreaView>
  );
}