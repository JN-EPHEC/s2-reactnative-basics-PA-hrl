import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TodoItem({ text }) {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#e0f7fa', // couleur de fond
    padding: 16,
    marginBottom: 10,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
  },
});