import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { StyleSheet, View} from 'react-native';

import {
  CheckBox,
  Modal,
  Card,
  Text,
  Button
} from '@ui-kitten/components';

import { useTodoStore } from 'utils/hooks';

export const TodoItem = observer(({ todoData } : any) => {
  const { id, text, completed, date } = todoData;
  // свич перед текстом
  // модальное окно при удалении с подтверждением
  // сохранение тудущек через асинкс сторадж
  // туду дата и время
  // уведомление перед окончанием туду
  // либа компонентов UI Kitten
  const { TodoStore } = useTodoStore();
  const [viewModal, setViewModal] = useState(false);
  return (
    <View style={styles.todoContainer}>
      <View style={styles.textContainer}>
        <CheckBox
          style={styles.checkboxStyles}
          checked={completed}
          status="success"
          onChange={() => TodoStore.completeTodo(id)}
        />
        <View >
          <Text>{text}</Text>
          <Text>Created at: {date}</Text>
        </View>
      </View>
      <View>
        <Button status="danger" onPress={() => setViewModal(true)}>
          X
        </Button>
      </View>
      <Modal
        visible={viewModal}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setViewModal(false)}
      >
        <Card disabled={true} style={styles.modalCard}>
          <Text>Are you sure you want to delete ?</Text>
          <View style={styles.modalCardContainer}>
            <Button onPress={() => TodoStore.removeTodo(id)}>Yes</Button>
            <Button onPress={() => setViewModal(false)}>No</Button>
          </View>
        </Card>
      </Modal>
    </View>
  );
});

const styles = StyleSheet.create({
  todoContainer: {
    //width: '100%',
    height: 100,
    flexDirection: 'row',
    marginVertical: 15,
    alignItems: 'center',
  },
  idStyles: {
    paddingRight: 10,
  },
  textContainer: {
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxStyles: {
    paddingRight: 10,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalCard: {
    height: 150,
    width: 200,
  },
  modalCardContainer: {
    flexDirection: 'row',
    paddingTop: 10,
    height: 70,
    justifyContent: 'space-between',
  },
});
