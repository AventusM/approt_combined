import React from "react";
import { View, StyleSheet } from "react-native";

import { Text } from "../components/Generic";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    display: "flex",
    flex: 1,
    justifyContent: "flex-start",
  },
});

export const EventRegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Create functionality for web users</Text>
    </View>
  );
};
