import React, { FC, useState } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  TextInput,
} from 'react-native';
import {
  Divider,
  Modal,
  Card,
  Text,
  Button
} from '@ui-kitten/components';
import { observer } from 'mobx-react-lite';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useAnimatedStyle, useTodoStore } from 'utils/hooks';

type TodoFolderProps = {
  title: string,
}

export const TodoFolder: FC<TodoFolderProps> = observer(({ title }) => {
  const [expand, setExpand] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);
  const [todoText, setTodoText] = useState('')

  const { TodoStore } = useTodoStore();

  const todosCount = TodoStore.todos.length;

  const addTodo = (text: string) => {
    TodoStore.addTodo(text), 
    setTodoText('');
  }

  const { onPressAnimate, transitionY } = useAnimatedStyle();

  const handleExpand = () => (setExpand((prevExpand) => !prevExpand));

  return (
    <View style={styles.todoFolderContainer}>
      <View style={styles.todoFolderHeaderContainer}>
        <View style={styles.todoFolderHeaderTextContainer}>
          <Text style={styles.todoFolderHeaderText}>{title}</Text>

          <Text style={styles.todoFolderHeaderNumber}>{todosCount}</Text>
        </View>
        <Animated.View
          style={[
            styles.headerDropdownContainer,
            { transform: [{ translateY: transitionY }] }
          ]}
        >
          <Text>Rename folder</Text>
          <Text>Delete folder</Text>
          <Text onPress={() => setModalVisible(true)}>Add Todo</Text>

          <Modal
            visible={isModalVisible}
            onBackdropPress={() => setModalVisible(false)}
            backdropStyle={styles.backdrop}
          >
            <Card>
              <TextInput
                value={todoText}
                onChangeText={setTodoText}
                placeholder='Enter todo text'
              />
              <Button onPress={() => addTodo(todoText)}>Create todo</Button>
            </Card>
          </Modal>

          <Text>Delete folder</Text>
          <Text>Delete folder</Text>
        </Animated.View>
        <View style={styles.todoFolderHeaderIconsContainer}>
          <MaterialIcons
            name={expand ? 'keyboard-arrow-down' : 'keyboard-arrow-up'}
            size={24}
            color="grey"
            onPress={handleExpand}
          />

          <MaterialCommunityIcons
            name="dots-vertical"
            size={24}
            color="grey"
            onPress={onPressAnimate}
          />
        </View>
      </View>
      <Divider />
    </View>
  );
});

const styles = StyleSheet.create({
  todoFolderContainer: {
    width: '100%',
  },
  todoFolderHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
  },
  todoFolderHeaderNumber: {
    color: 'grey',
  },
  todoFolderHeaderTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '20%',
    justifyContent: 'space-evenly',
  },
  todoFolderHeaderText: {
    fontSize: 18,
    fontWeight: '900',
  },
  todoFolderHeaderIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '23%',
    height: 50,
    justifyContent: 'space-evenly',
    position: 'absolute',
    right: 0,
    zIndex: 1,
    backgroundColor: 'white',
  },
  headerDropdownContainer: {
    position: 'relative',
    zIndex: -1,
    backgroundColor: '#f5f3f0',
    borderWidth: 1,
    height: 110,
    fontSize: 15,
    justifyContent: 'space-evenly',
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  }
});