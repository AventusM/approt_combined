import React from "react";
import { TouchableOpacity as NativeTouchableOpacity } from "react-native";

export const TouchableOpacity = ({ style, onPress, children }) => {
  return <NativeTouchableOpacity activeOpacity={0.8} onPress={onPress} style={style}>{children}</NativeTouchableOpacity>;
};
