import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, TextInput } from "../Generic";

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  textInput: {
    height: 35,
    borderBottomWidth: 1,
    paddingLeft: 10,
    marginTop: 10,
    borderBottomColor: "#CACACA",
  },
});

export const EventGroupNameSelector = (props) => {
  const { approName, setApproName } = props;

  return (
    <View style={styles.container}>
      <Text>Approjen nimi</Text>
      <TextInput
        style={[
          styles.textInput,
          {
            paddingHorizontal: 10,
          },
        ]}
        placeholder="Anna nimi"
        value={approName}
        onChangeText={(nextValue) => setApproName(nextValue)}
      />
    </View>
  );
};
