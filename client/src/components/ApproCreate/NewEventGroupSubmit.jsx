import React from "react";
import { StyleSheet } from "react-native";

import { Text, TouchableOpacity } from "../Generic";
import theme from "../../theme";
import { useCreateAppro } from "../../hooks";

const styles = StyleSheet.create({
  submitButtonContainer: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
    borderRadius: 0,
    marginTop: 80,
    padding: 10,
  },
  submitButtonText: {
    color: theme.colors.white,
    textAlign: "center",
    fontWeight: theme.fontWeights.bold,
  },
});

export const NewEventGroupSubmit = (props) => {
  const [createAppro] = useCreateAppro();
  return (
    <TouchableOpacity
      onPress={() => createAppro(props)}
      style={[styles.submitButtonContainer]}
    >
      <Text style={styles.submitButtonText}>Submit</Text>
    </TouchableOpacity>
  );
};
