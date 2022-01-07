import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Actions } from "react-native-router-flux";

const styles = StyleSheet.create({
  icon: {
    alignSelf: "flex-start",
    marginLeft: 5,
    marginTop: 5,
    padding: 10,
  }
});

export const BackButton = (props) => {
  const {color} = props;
  return (
    <TouchableOpacity style={{alignSelf: 'flex-start'}} onPress={() => Actions.pop({animated:true})}>
    <Ionicons
      name="return-down-back-outline"
      size={34}
      color={color}
      style={styles.icon}
    />
  </TouchableOpacity>
  );
};