import React from 'react';

import {
  StyleSheet,
  FlatList,
  ScrollView
} from 'react-native';

import { observer } from 'mobx-react-lite';
import { useTodoStore, useAsync } from 'utils/hooks';
import { TodoItem } from '../TodoItem';

export const TodoList = observer(() => {
  const { TodoStore } = useTodoStore();
  const todos = TodoStore.todos;
  return (
    <ScrollView>
      <FlatList
        showsVerticalScrollIndicator={true}
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TodoItem todoData={item} />}
      />
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  todolistcontainer: {
    alignItems: 'center',
    width: '100%',
  },
});
