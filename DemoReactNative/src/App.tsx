import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  appRoot: {
    flex: 1,
    backgroundColor: '#1893F8',
  },
  //p
  viewRoot: {
    flex: 1,
    paddingLeft: 50,
    paddingRight: 50,
  },
  //p
  text: {
    fontSize: 15,
    color: '#FFFFFF',
  },
});

import { Column, Row } from './Layout';
import { Board } from './Board';
import { Status } from './Status';
import { Button } from './Button';
import { BoardStatus, BoardValue } from './types';
import { useGameState } from './AppState';

const App = () => {
  const {
    boardValue,
    step,
    boardStatus,
    handleSquarePress,
    handleReset,
  } = useGameState();

  return (
    <SafeAreaView style={styles.appRoot}>
      <View style={styles.viewRoot}>
        <Column gap={50}>
          <Button text="RESTART" disabled={step === 0} onPress={handleReset} />
          <Status boardStatus={boardStatus} />
          <Board
            onSquarePress={handleSquarePress}
            boardValue={boardValue}
          />
        </Column>
      </View>
    </SafeAreaView>
  );
};

export default App;