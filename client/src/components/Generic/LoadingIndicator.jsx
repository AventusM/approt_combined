import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  loadingContainer: {
    alignItems: "center",
    display: "flex",
    flex: 1,
    justifyContent: "center",
  },
});

export const LoadingIndicator = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator />
    </View>
  );
};
