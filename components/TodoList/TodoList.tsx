import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { useTodoStore } from '../../utils/hooks';
import { TodoItem } from '../TodoItem';

export const TodoList = observer(() => {
    const { TodoStore } = useTodoStore();
    return (
      <View style={styles.todolistcontainer}>
        {TodoStore.todos.map((todo) => (
          <TodoItem todoData={todo} key={todo.id} />
        ))}
      </View>
    );
})

const styles = StyleSheet.create({
    todolistcontainer: {
        alignItems: 'center',
    }
})