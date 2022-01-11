import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { Text } from "../Generic";
import { ERROR_MESSAGE_TYPE } from '../../constants';
import actions from '../../store/actions';
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    elevation: theme.hierarchy.notificationZIndex, // Android
    zIndex: theme.hierarchy.notificationZIndex, // iOS
    borderRadius: 10,
    top: 20,
    left: 40,
    right: 40,
    padding: 10,
    position: 'absolute',
  },
  errorBG:{
    backgroundColor: "#ffecec",
  },
  errorText: {
    color: "#5a0d0d",
    textAlign: 'center',
  },
  successBG: {
    backgroundColor: "#d7f5ea",
  },
  successText: {
    color: "#0a4933",
    textAlign: 'center',
  },
});

export const GlobalMessage = () => {
  const dispatch = useDispatch();
  const { message, status } = useSelector((state) => state.diagnosticsData);
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if(message !== null){
      Animated.sequence([
        Animated.timing(opacity, {toValue: 1, duration: 500, useNativeDriver: true}),
        Animated.delay(5000),
        Animated.timing(opacity, {toValue: 0, duration: 500, useNativeDriver: true})
      ]).start();

      setTimeout(() => {
        dispatch(actions.diagnosticsActions.setMessage({message: null, status: ERROR_MESSAGE_TYPE}));
      }, 5000);
    }
  }, [message]);

  if (message === null) {
    return null;
  }

  return (
    <Animated.View style={[{opacity}, styles.container, status === ERROR_MESSAGE_TYPE ? styles.errorBG : styles.successBG]}>
      <Text style={status === ERROR_MESSAGE_TYPE ? styles.errorText : styles.successText}>{message}</Text>
    </Animated.View>
  );
};
