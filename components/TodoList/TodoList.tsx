import React, { useEffect } from 'react';


import {
  StyleSheet,
  FlatList,
  ScrollView
} from 'react-native';

import { observer } from 'mobx-react-lite';
import { cashTodos, getCashedTodos } from 'services/todoStorage';
import { useTodoStore, useAsync } from 'utils/hooks';
import { TodoItem } from '../TodoItem';

export const TodoList = observer(() => {
  const { TodoStore } = useTodoStore();
  const todos = TodoStore.todos;

  cashTodos(todos);

  const savedTodos = getCashedTodos()
  console.log(savedTodos);

  // useEffect
  //getTodos/storeTodos = services
  // кастомный хук useAsyncEffect для работы с асинхронными функциями
  // safeArea и стили
  // настройка alias для папок, module resolver

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
