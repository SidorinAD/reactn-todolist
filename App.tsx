import React from 'react';
import { createContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';

import { StatusBar } from 'expo-status-bar';
import { TodoStore } from './store';
import { TodoList } from './components/TodoList';
import { HeaderComponent } from './components/Header'
import { TodoCategory } from 'components/TodoFolder';

let defaultTodo = new TodoStore();

export const TodoContext = createContext<TodoStore>(defaultTodo);

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <TodoContext.Provider value={new TodoStore()}>
        <View style={styles.container}>
          <HeaderComponent title={'Todo List'} />
          <StatusBar style="auto" />
          <TodoCategory title='Copy' id={1}></TodoCategory>

          <SafeAreaView>
            <TodoList />
          </SafeAreaView>
        </View>
      </TodoContext.Provider>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
