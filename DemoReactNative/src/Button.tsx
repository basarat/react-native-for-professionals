import React from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  buttonRoot: { padding: 20, backgroundColor: '#DE0F3F', borderRadius: 5 },
  buttonRootDisabled: { opacity: 0 },
  buttonText: { fontSize: 24, color: 'white', fontWeight: 'bold', textAlign: 'center' },
});

export type ButtonProps = {
  text: string;
  disabled: boolean;
  onPress: () => void;
}

export const Button = ({ text, disabled, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.buttonRoot, disabled && styles.buttonRootDisabled]}
      onPress={onPress}>
      <Text style={styles.buttonText}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};
