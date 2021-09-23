import { useState, useRef } from 'react';

import { Animated, Easing } from 'react-native';

export const useAnimatedStyle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const animateState = {
    start: 0,
    end: 100
  }

  const value = useRef(new Animated.Value(animateState.start)).current;

  const onPressAnimate = () => {
    Animated.timing(value, { toValue: isOpen ? animateState.start : animateState.end, useNativeDriver: false, duration: 300, easing: Easing.exp }).start()
    setIsOpen(!isOpen)
  }

  const inputRange = Object.values(animateState);

  const transitionY = value.interpolate({inputRange, outputRange: [-500,82]})

  return { transitionY, onPressAnimate };
}