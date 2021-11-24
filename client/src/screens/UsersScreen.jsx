import React from "react";
import { View } from "react-native";
import { useUsers } from "../hooks";
import { LoadingIndicator, Text } from "../components/Generic";

export const UsersScreen = () => {
  const { data, error, status } = useUsers();

  if (status === "loading") {
    return <LoadingIndicator />;
  }

  if (status === "error") {
    return (
      <View>
        <Text>{error.message}</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>This is a users screen of the Approt application!</Text>
      <Text>Current users amount: {data.length}</Text>
    </View>
  );
};
