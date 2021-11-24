import React from "react";
import { View, StyleSheet } from "react-native";

import { Text } from "../Generic";
import theme from "../../theme";

const styles = StyleSheet.create({
  centeredText: {
    textAlign: "center",
  },
  headerContainer: {
    margin: 10,
  },
  headerText: {
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold,
  },
});

export const ApproListHeader = (props) => {
  const { title } = props;
  return (
    <View style={styles.headerContainer}>
      <Text style={[styles.headerText, styles.centeredText]}>{title}</Text>
    </View>
  );
};
