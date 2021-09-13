import React from 'react';
import { StyleSheet, Text, View, Switch, Button } from 'react-native';
import { observer } from 'mobx-react-lite';
import { useTodoStore } from '../../utils/hooks';

export const TodoItem = observer(({todoData} : any) => {
    const { id, text, completed } = todoData;
    const { TodoStore } = useTodoStore();
    return (
      <View style={styles.todocontainer}>
        <Text>{id}</Text>
        <Text>{text}</Text>
        <Switch value={completed} />
        <Button title="Delete" onPress={() => TodoStore.removeTodo(id)} />
      </View>
    );
})

const styles = StyleSheet.create({
    todocontainer: {
        flexDirection: 'row',
    }
})
