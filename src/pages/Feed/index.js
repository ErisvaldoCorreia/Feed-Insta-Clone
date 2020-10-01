import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Feed() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FEED INSTA CLONE</Text>
      <Text style={styles.sub}>Usando React Native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: '#111',
    fontWeight: 'bold'
  },
  sub: {
    fontWeight: '200',
    fontSize: 15,
    color: '#444',
    marginTop: 5,
  }
});
