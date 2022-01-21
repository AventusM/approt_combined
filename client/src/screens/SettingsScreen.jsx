import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { Text, Translate } from "../components/Generic";
import {SettingsList} from '../components/Settings';
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
  actionSheetOptionText: {
    fontWeight: theme.fontWeights.bold
  }
});

export const SettingsScreen = () => {
  const dispatch = useDispatch();
  const {currentUser} = useSelector(state => state.authData);

  const doSignOut = () => {
    dispatch(actions.authActions.logout());
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={[styles.headerText, styles.centeredText]}>
          <Translate term="usernameInformation" options={{username: currentUser.username}}/>
        </Text>
      </View>
      <SettingsList />
      <TouchableOpacity
        style={styles.signoutButtonContainer}
        onPress={doSignOut}
      >
        <Text style={[styles.centeredText, styles.signoutButtonText]}>
          <Translate term="signOut" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};
