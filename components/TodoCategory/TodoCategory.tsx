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
import { todosForCategorySelector } from '../../store/selectors';
import {
  useAnimatedStyle,
  useTodoStore,
  useSelector,
} from 'utils/hooks';
import { Category } from 'types/types';


export const TodoCategory: FC<Category> = observer(({ id: categoryId, title }) => {
  const [expand, setExpand] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);
  const [todoText, setTodoText] = useState('');

  const { TodoStore } = useTodoStore();

  const todosCount = TodoStore.todos.length;

  const todos = useSelector(todosForCategorySelector(categoryId));

  const addTodo = (todoText: string) => {
    TodoStore.addTodo(todoText, categoryId), setTodoText('');
  };

  const { onPressAnimate, transitionY } = useAnimatedStyle();

  const handleExpand = () => setExpand((prevExpand) => !prevExpand);

  return (
    <View style={styles.todoCategoryContainer}>
      <View style={styles.todoCategoryHeaderContainer}>
        <View style={styles.todoCategoryHeaderTextContainer}>
          <Text style={styles.todoCategoryHeaderText}>{title}</Text>

          <Text style={styles.todoCategoryHeaderNumber}>{todosCount}</Text>
        </View>
        {/**
         * убрать в отдельный компонент
         */}
        <Animated.View
          style={[
            styles.headerDropdownContainer,
            { transform: [{ translateY: transitionY }] }
          ]}
        >
          <Text>Rename Category</Text>
          <Text>Delete Category</Text>
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
                placeholder="Enter todo text"
              />
              <Button onPress={() => addTodo(todoText)}>Create todo</Button>
            </Card>
          </Modal>

          <Text>Delete Category</Text>
          <Text>Delete Category</Text>
        </Animated.View>
        <View style={styles.todoCategoryHeaderIconsContainer}>
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
  todoCategoryContainer: {
    width: '100%',
    overflow: 'visible'
  },
  todoCategoryHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    overflow: 'visible'
  },
  todoCategoryHeaderNumber: {
    color: 'grey'
  },
  todoCategoryHeaderTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '20%',
    justifyContent: 'space-evenly'
  },
  todoCategoryHeaderText: {
    fontSize: 18,
    fontWeight: '900'
  },
  todoCategoryHeaderIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '23%',
    height: 50,
    justifyContent: 'space-evenly',
    //position: 'absolute',
    right: 0,
    //zIndex: 1,
    backgroundColor: 'white'
  },
  headerDropdownContainer: {
    //position: 'relative',
    //zIndex: -1,
    //position: 'absolute',
    overflow: 'visible',
    backgroundColor: '#f5f3f0',
    borderWidth: 1,
    height: 110,
    fontSize: 15,
    justifyContent: 'space-evenly'
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  }
});