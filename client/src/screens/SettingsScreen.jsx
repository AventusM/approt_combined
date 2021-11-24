import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { Actions } from "react-native-router-flux";

import { Text } from "../components/Generic";
import { MAIN_ROUTE } from "../constants";

import actions from "../store/actions";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
  centeredText: {
    textAlign: "center",
  },
  headerContainer: {
    padding: 20,
  },
  headerText: {
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.normal,
  },
  signoutButtonContainer: {
    backgroundColor: theme.colors.primary,
    margin: 10,
    padding: 10,
  },
  signoutButtonText: {
    color: theme.colors.white,
    fontWeight: theme.fontWeights.bold,
  },
});

export const SettingsScreen = () => {
  const dispatch = useDispatch();

  const doSignOut = () => {
    dispatch(actions.authActions.logout());
    Actions.popTo(MAIN_ROUTE); // TODO: Improve animation with this? It "pops" and waits a moment before redirecting to index
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={[styles.headerText, styles.centeredText]}>
          User info/stats/sign out
        </Text>
      </View>
      <TouchableOpacity
        style={styles.signoutButtonContainer}
        onPress={doSignOut}
      >
        <Text style={[styles.centeredText, styles.signoutButtonText]}>
          Sign out
        </Text>
      </TouchableOpacity>
    </View>
  );
};
