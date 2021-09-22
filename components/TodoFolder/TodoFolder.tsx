import React, { FC, useState } from 'react';

import { StyleSheet, View, Text, Animated } from 'react-native';
import { Divider } from '@ui-kitten/components';

import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import { useAnimatedStyle } from 'utils/hooks';


type TodoFolderProps = {
  title: string,
  todosCount: number,
}

export const TodoFolder: FC<TodoFolderProps> = ({ title, todosCount }) => {
  const [expand, setExpand] = useState(true);

  const { onPressAnimate, transitionY } = useAnimatedStyle();

  const handleExpand = () => (setExpand((prevExpand) => !prevExpand));
  
  return (
    <View style={styles.todoFolderContainer}>
      <View style={styles.todoFolderHeaderContainer}>
        <View style={styles.todoFolderHeaderTextContainer}>
          <Text style={styles.todoFolderHeaderText}>Copy</Text>
          <Text style={styles.todoFolderHeaderNumber}>3</Text>
        </View>
        <Animated.View
          style={[
            styles.headerDropdownContainer,
            {transform: [{translateY: transitionY}]}
          ]}
        >
          <Text>Rename folder</Text>
          <Text>Delete folder</Text>
          <Text>Add Todo</Text>
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
};

const styles = StyleSheet.create({
  todoFolderContainer: {
    width: '100%'
  },
  todoFolderHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50
  },
  todoFolderHeaderNumber: {
    color: 'grey'
  },
  todoFolderHeaderTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '20%',
    justifyContent: 'space-evenly'
  },
  todoFolderHeaderText: {
    fontSize: 18,
    fontWeight: '900'
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
    backgroundColor: 'red',
  }
});