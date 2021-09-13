import React from 'react';
import { createContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { TodoStore } from './store';
import { TodoList } from './components/TodoList';
import { AddTodo } from './components/AddTodoForm';

let defaultTodo = new TodoStore()

export const TodoContext = createContext<TodoStore>(defaultTodo);

export default function App() {
  return (
    <TodoContext.Provider value={new TodoStore()}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Todo list</Text>
        </View>
        <StatusBar style="auto" />
        <AddTodo/>
        <TodoList/>
      </View>
    </TodoContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  headerText: {
    fontSize: 20,
    color: 'white',
  },
});
