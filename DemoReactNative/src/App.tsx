import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Column, Row } from './Layout';

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#1893F8',
    height: '100%',
    width : '100%'
  },
});

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Column gap={50}>
        <Row gap={20}>
          <Text>AlphaOne</Text>
          <Text>BetaOne</Text>
          <Text>GammaOne</Text>
        </Row>
        <Row gap={40}>
          <Text>AlphaTwo</Text>
          <Text>BetaTwo</Text>
          <Text>GammaTwo</Text>
        </Row>
      </Column>
    </SafeAreaView>
  );
};

export default App;