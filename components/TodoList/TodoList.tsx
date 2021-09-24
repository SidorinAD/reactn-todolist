import React, { FC } from 'react';

import {
  View,
  StyleSheet,
  FlatList,
  ScrollView
} from 'react-native';

import { observer } from 'mobx-react-lite';
import { cashTodos, getCashedTodos } from 'services/todoStorage';
import { useTodoStore, useAsyncEffect } from 'utils/hooks';
import { TodoItem } from '../TodoItem';
import {Todo} from 'types/types';

  

export const TodoList:FC<Todo[]> = observer((todos) => {
  const { TodoStore } = useTodoStore();
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

  console.log(todos)

  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={true}
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TodoItem todoData={item} />}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  todolistcontainer: {
    alignItems: 'center',
    //width: '100%',
  },
});
