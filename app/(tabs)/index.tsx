import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TodoItem from '../../components/TodoItem';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Todo List</Text>

      <TodoItem text="Learn React Native" />
      <TodoItem text="Build a static UI" />
      <TodoItem text="Practice with StyleSheet" />
      <TodoItem text="Review Week 2 exercises" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,        // padding autour de tout le contenu
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,   // espace entre le titre et la première tâche
  },
});
