import AsyncStorage from '@react-native-async-storage/async-storage';
import { TodoType } from 'types/types';

const todoStorageKey = '@todoStorage_Key';

export const cashTodos = async (todos: TodoType[]) => {
  try {
    const jsonTodos = JSON.stringify(todos);
    await AsyncStorage.setItem(todoStorageKey, jsonTodos);
  } catch (e) {
    console.log(e);
  }
};

export const getCashedTodos = async () => {
  try {
    const jsonTodos = await AsyncStorage.getItem(todoStorageKey);
    return jsonTodos != null ? JSON.parse(jsonTodos) : null;
  } catch (e) {
    console.error;
  }
};