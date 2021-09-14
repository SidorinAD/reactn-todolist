import { observer } from 'mobx-react-lite';
import React from 'react';
import {
  Button, StyleSheet, Switch, Text,
  View
} from 'react-native';
import { useTodoStore } from '../../utils/hooks';

export const TodoItem = observer(({ todoData } : any) => {
  const { id, text, completed } = todoData;
  // свич перед текстом
  // модальное окно при удалении с подтверждением
  // сохранение тудущек через асинкс сторадж
  // туду дата и время
  // уведомление перед окончанием туду
  // либа компонентов UI Kitten
  const { TodoStore } = useTodoStore();
  return (
    <View style={styles.todoContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.idStyles}>{id}</Text>
        
        <Switch
          value={completed}
          onValueChange={() => TodoStore.completeTodo(id)}
        />
        
        <Text>{text}</Text>
      </View>

      <Button title="X" onPress={() => TodoStore.removeTodo(id)} />
    </View>
  );
});

const styles = StyleSheet.create({
  todoContainer: {
    width: 360,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'flex-start',
    backgroundColor: '#ff00ff',
  },
  idStyles: {
    paddingRight: 10,
  },
  textContainer: {
    width: 250,
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'red',
    
  },
});
