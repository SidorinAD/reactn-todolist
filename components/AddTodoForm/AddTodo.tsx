import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { 
  StyleSheet,
  View,
  TextInput,
  Button } from 'react-native';
import { useTodoStore } from '../../utils/hooks';

export const AddTodo = observer(() => {
    const { TodoStore } = useTodoStore();
    const [text, setText] = useState('');

    const addTodo = (text: string) => {
      TodoStore.addTodo(text);
      setText('')
    }
    
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.input} value={text} onChangeText={setText} />
            <Button title='Add Todo' onPress={() => addTodo(text)} />
        </View>
    )
})

const styles = StyleSheet.create({
  input: {
    height: 35,
    width: '70%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttonStyles: {
    
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});