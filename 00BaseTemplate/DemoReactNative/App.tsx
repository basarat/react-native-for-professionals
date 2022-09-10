import React, { useEffect, useState } from 'react';
import { View, StatusBar, StyleSheet, Text } from 'react-native';
import { getBio, User } from './github';

const styles = StyleSheet.create({
  root: { flex: 1, justifyContent: 'center' },
  section: { margin: 10 },
  heading: { color: 'black', fontWeight: 'bold' },
  paragraph: { fontWeight: 'normal' },
});

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    getBio('sindresorhus').then(setUser);
  }, []);

  return (
    <View style={styles.root}>
      <StatusBar hidden />

      {
        user && <View>
          <View style={styles.section}>
            <Text style={styles.heading}>Name</Text>
            <Text style={styles.paragraph}>{user.name}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.heading}>Bio</Text>
            <Text style={styles.paragraph}>{user.bio}</Text>
          </View>
        </View>
      }
    </View>
  );
}