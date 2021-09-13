import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Switch,
  Button } from 'react-native';
import { observer } from 'mobx-react-lite';
import { useTodoStore } from '../../utils/hooks';
import { TodoType } from '../../types';

export const TodoItem = observer(({ todoData } : any) => {
  const { id, text, completed } = todoData;
  const { TodoStore } = useTodoStore();
  return (
    <View style={styles.todoContainer}>
      <View style={styles.textContainer}>
        <Text>{id}</Text>
        <Text>{text}</Text>
      </View>
      <View style={styles.switchContainer}>
        <Switch
          value={completed}
          onValueChange={() => TodoStore.completeTodo(id)}
        />
      </View>
      <Button title="Delete" onPress={() => TodoStore.removeTodo(id)} />
    </View>
  );
});

const styles = StyleSheet.create({
  todoContainer: {
    width: 300,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 5,
  },
  switchContainer: {
    flex: 1,
  },
});
