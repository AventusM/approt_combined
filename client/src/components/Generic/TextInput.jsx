import React from "react";
import { TextInput as NativeTextInput, StyleSheet } from "react-native";

import theme from "../../theme";

const styles = StyleSheet.create({
  body: {
    fontFamily: "VarelaRound_400Regular", // Covers the fontWeight basically here
    fontSize: theme.fontSizes.body,
    color: theme.colors.grayText,
  },
});

export const TextInput = ({
  children,
  error,
  onBlur,
  onChangeText,
  placeholder,
  placeholderTextColor,
  secureTextEntry,
  style,
  value,
}) => {
  const textStyles = [styles.body];

  return (
    <NativeTextInput
      error={error}
      onBlur={onBlur}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      secureTextEntry={secureTextEntry}
      style={[textStyles, style]}
      value={value}
    >
      {children}
    </NativeTextInput>
  );
};
