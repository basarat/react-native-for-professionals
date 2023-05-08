import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { BoardStatus } from './types';

export type StatusProps = {
  boardStatus: BoardStatus;
};

const styles = StyleSheet.create({
  statusText: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export function Status({ boardStatus }: StatusProps) {
  return (
    <Text style={styles.statusText}>{
      boardStatus.type === 'winner' ? `WINNER ${boardStatus.player}`
        : boardStatus.type === 'draw' ? 'DRAW'
          : `${boardStatus.player}'s TURN`
    }</Text>
  );
}