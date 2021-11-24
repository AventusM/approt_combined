import React from "react";
import { StyleSheet } from "react-native";

import { Text } from "../Generic";
import theme from "../../theme";

const styles = StyleSheet.create({
  headerText: {
    textAlign: "center",
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.normal,
  },
});

export const EventGroupPageHeader = (props) => {
  const { headerText } = props;
  return <Text style={styles.headerText}>{headerText}</Text>;
};
