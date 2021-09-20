import React, { useEffect, useState } from 'react';

import {
  StyleSheet,
  FlatList,
  ScrollView
} from 'react-native';

import { observer } from 'mobx-react-lite';
import { cashTodos, getCashedTodos } from 'services/todoStorage';
import { useTodoStore, useAsyncEffect } from 'utils/hooks';
import { TodoItem } from '../TodoItem';

export const TodoList = observer(() => {
  const { TodoStore } = useTodoStore();
  let todos = TodoStore.todos;
 
  // useEffect
  //getTodos/storeTodos = services
  // кастомный хук useAsyncEffect для работы с асинхронными функциями
  // safeArea и стили
  // настройка alias для папок, module resolver

  cashTodos(todos)

  useAsyncEffect(async () => {
    const jsonValue = await getCashedTodos();
    await TodoStore.addCashedTodos(jsonValue);
  }, []);

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
