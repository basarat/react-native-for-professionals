import React, { useCallback } from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View, useWindowDimensions } from 'react-native';
import { BoardValue, SquareValue } from './types';
import { Column, Row } from './Layout';

const useAvailableWidth = () => {
  const { width } = useWindowDimensions();
  return width - 100;
};

const squareStyles = StyleSheet.create({
  squareView: {
    backgroundColor: '#fff',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  squareText: {
    fontWeight: 'bold',
  },
});

export type SquareProps = {
  value: SquareValue,
  onPress: () => void,
};

function Square({ value, onPress }: SquareProps) {
  const availableWidth = useAvailableWidth();
  const width = availableWidth / 3;
  const height = width;
  const fontSize = width / 2;
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[squareStyles.squareView, { width, height }]}>
        <Text style={[squareStyles.squareText, { fontSize }]}>
          {value}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export type BoardProps = {
  boardValue: BoardValue,
  onSquarePress: (square: number) => void,
};


export function Board({ boardValue, onSquarePress }: BoardProps) {
  const createProps = useCallback((square: number): SquareProps => {
    return {
      value: boardValue[square],
      onPress: () => onSquarePress(square),
    };
  }, [boardValue, onSquarePress]);

  return (
    <View>
      <Column gap={0}>
        <Row gap={0}>
          <Square {...createProps(0)} />
          <Square {...createProps(1)} />
          <Square {...createProps(2)} />
        </Row>
        <Row gap={0}>
          <Square {...createProps(3)} />
          <Square {...createProps(4)} />
          <Square {...createProps(5)} />
        </Row>
        <Row gap={0}>
          <Square {...createProps(6)} />
          <Square {...createProps(7)} />
          <Square {...createProps(8)} />
        </Row>
      </Column>
    </View>
  );
}