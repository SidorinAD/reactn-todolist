import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useTodoStore } from '../../utils/hooks';

export const AddTodo = observer(() => {
    const { TodoStore } = useTodoStore();
    const [text, setText] = useState('');

    return (
        <View>
            <TextInput style={styles.input} onChangeText={setText}/>
            <Button title='Add Todo' onPress={() => TodoStore.addTodo(text)}/>
        </View>
    )
})

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});