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
import { HeaderComponent } from './components/Header';
import { TodoCategoryList } from './components/TodoCategoryList';

let defaultTodo = new TodoStore();

export const TodoContext = createContext<TodoStore>(defaultTodo);

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <TodoContext.Provider value={new TodoStore()}>
        <View style={styles.container}>
          <HeaderComponent title={'Todo List'} />
          <StatusBar style="auto" />
          <TodoCategoryList/>
        </View>
      </TodoContext.Provider>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
  },
 
});
