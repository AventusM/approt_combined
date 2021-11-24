import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";

import { Text } from "../Generic";

export const GlobalMessage = () => {
  const { message } = useSelector((state) => state.diagnosticsData);

  if (message === null) {
    return null;
  }

  return (
    <View style={{ padding: 5, borderColor: "black", borderWidth: 1 }}>
      <Text>{message}</Text>
    </View>
  );
};
