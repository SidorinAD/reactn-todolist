import React from 'react';

import { View, FlatList, StyleSheet } from 'react-native';

import { observer } from 'mobx-react-lite';
import { TodoCategory } from 'components/TodoCategory';
import { useTodoStore } from 'utils/hooks';

export const TodoCategoryList = observer(() => {
  const { TodoStore } = useTodoStore();
  const categoryes = TodoStore.categories;

  return (
    <View style={styles.categoryListContainer}>
      <FlatList
        style={styles.categoryFlatList}
        showsVerticalScrollIndicator={true}
        data={categoryes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TodoCategory id ={item.id} title={item.title}/>}
      />
    </View>
  );
})

const styles = StyleSheet.create({
  categoryListContainer: {
    width: 430,
    flex: 3,
    overflow: 'visible',
    maxHeight: '50%',
    backgroundColor: 'red',
  },
  categoryFlatList: {
    marginHorizontal: 5,
  }
});