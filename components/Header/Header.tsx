import React, { FC, useEffect, useRef, useState } from 'react';
import { HeaderType } from 'types/types';

import { StyleSheet, Text, View, Animated, TextInput } from 'react-native';

import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';


export const Header: FC<HeaderType> = ({ title }) => {

  const [menuDrop, setMenuDrop] = useState(true);
  const [searchInputVisible, setSearchInputVisible] = useState(true);
  const [searchInputActive, setSearchInputActive] = useState(false);

  const toggleSearhInputActive = () => {
    setSearchInputActive((inputActive) => !inputActive);
  };

  const searchInputRef = React.createRef<TextInput>()

  useEffect(() => {
    if (searchInputActive) {
      searchInputRef.current!.focus();
    } 
  },[searchInputActive])
  
  const handleSearchSlide = () => {
    setSearchInputVisible((prevSlide) => !prevSlide);
    toggleSearhInputActive()
    return searchInputVisible ? slideIn() : slideOut();
  }
  
  const slideInputAnim = useRef(new Animated.Value(0)).current
  
  const slideIn = () => {
    Animated.timing(slideInputAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start()
  }
  
  const slideOut = () => {
    Animated.timing(slideInputAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start()
  }
  
  const handleDropDown = () => {
    setMenuDrop((menuDrop) => !menuDrop);
    return menuDrop ? dropDown() : dropUp()
  }

  const dropDownAnim = useRef(new Animated.Value(0)).current;
  
  const dropDown = () => {
    Animated.timing(dropDownAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const dropUp = () => {
    Animated.timing(dropDownAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>

      <Animated.View
        style={[
          styles.headerSearchContainer,
          {
            transform: [
              {
                translateX: slideInputAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-400, 0]
                })
              }
            ]
          }
        ]}
      >
        <TextInput style={styles.headerSearchInput} ref={searchInputRef}></TextInput>

      </Animated.View>
      <MaterialIcons
        style={styles.headerSearch}
        name="search"
        size={24}
        color="white"
        onPress={handleSearchSlide}
      />

      <MaterialCommunityIcons
        style={styles.headerOptions}
        name="dots-vertical"
        size={24}
        color="white"
        onPress={handleDropDown}
      />
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            opacity: dropDownAnim
          }
        ]}
      >
        <View>
          <Text>Add folder</Text>
          <Text>Add folder</Text>
          <Text>Add folder</Text>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 29,
    backgroundColor: 'green'
  },
  headerText: {
    fontSize: 20,
    color: 'white',
    width: '70%'
  },
  headerSearchInput: {
   backgroundColor: 'white',
   width: 150,
   position: 'absolute',
   top: 0,
   right: 0,
  },
  headerSearchContainer: {

  },
  headerSearch: {
    width: '10%'
  },
  headerOptions: {
    width: '10%',
    height: 25,
    marginBottom: 15
  },
  fadingContainer: {
    position: 'absolute',
    top: 60,
    right: 20,
    backgroundColor: 'white',
    width: 150,
    height: 150,
  },

});
