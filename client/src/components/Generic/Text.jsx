import React from "react";
import { Text as NativeText, StyleSheet } from "react-native";

import theme from "../../theme";

const styles = StyleSheet.create({
  body: {
    fontFamily: "VarelaRound_400Regular", // Covers the fontWeight basically here
    fontSize: theme.fontSizes.body,
    color: theme.colors.grayText,
  },
});

export const Text = ({ style, children }) => {
  const textStyles = [styles.body];

  return <NativeText style={[textStyles, style]}>{children}</NativeText>;
};
