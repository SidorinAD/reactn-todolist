import React, { FC, useRef, useState } from 'react';

import { StyleSheet, View, Text, Animated } from 'react-native';
import { Divider } from '@ui-kitten/components';

import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';


type TodoFolderProps = {
  title: string,
  todosCount: number,
}

export const TodoFolder: FC<TodoFolderProps> = ({ title, todosCount }) => {
  const [expand, setExpand] = useState(true);
  const [menuDrop, setMenuDrop] = useState(true);

  const handleExpand = () => (setExpand((prevExpand) => !prevExpand));

  const handleDropDown = () => {
    setMenuDrop((menuDrop) => !menuDrop);
    return menuDrop ? menuDropDown() : menuDropUp();
  };

  const dropDownAnim = useRef(new Animated.Value(0)).current;

  const menuDropDown = () => {
    Animated.timing(dropDownAnim, {
      toValue: 10,
      duration: 200,
      useNativeDriver: true
    }).start();
  }
  const menuDropUp = () => {
    Animated.timing(dropDownAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true
    }).start();
  }
  
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
            {
              transform: [
                {
                  translateY: dropDownAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 7]
                  })
                }
              ]
            }
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
            onPress={handleDropDown}
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