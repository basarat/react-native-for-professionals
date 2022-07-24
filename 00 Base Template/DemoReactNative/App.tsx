import React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#DE0F3F',
    height: '100%',
    width : '100%'
  },
});

const App = () => {
  return (
    <View style={styles.root}/>
  );
};

export default App;