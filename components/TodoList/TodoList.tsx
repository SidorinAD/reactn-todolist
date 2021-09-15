import React from 'react';

import {
  StyleSheet,
  View,
  FlatList
} from 'react-native';

import { observer } from 'mobx-react-lite';
import { useTodoStore } from '../../utils/hooks';
import { TodoItem } from '../TodoItem';

export const TodoList = observer(() => {
  const { TodoStore } = useTodoStore();
  return (
    <View style={styles.todolistcontainer}>
      <FlatList
        showsVerticalScrollIndicator={true}
        data={TodoStore.todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TodoItem todoData={item} />}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  todolistcontainer: {
    alignItems: 'center',
    width: '100%',
  },
});
