import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Actions } from "react-native-router-flux";
import { Ionicons } from "@expo/vector-icons";

import { Text } from "./";

import {
  EVENTS_REGISTER_ROUTE,
  MAIN_ROUTE,
  EVENT_GROUP_CREATION_ROUTE,
  SETTINGS_SCREEN_ROUTE,
} from "../../constants";

import actions from "../../store/actions";
import theme from "../../theme";

const NAV_ICON_SIZE = 24;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    display: "flex",
    flexDirection: "row",
    paddingVertical: 5,
  },
  navButtonContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  appBarText: {
    color: theme.colors.white,
  },
});

// TODO: Currently in demo form. Replace with an actual component from a library / whichever direction you will take Susanna
export const AppBar = () => {
  const { currentUser } = useSelector((state) => state.authData);
  const { navbarVisible } = useSelector((state) => state.navbarData);
  const showAppBar = currentUser && navbarVisible;
  return showAppBar && <AuthNav />;
};

const AuthNav = () => {
  return (
    <View style={styles.container}>
      <BasicNavButton
        path={MAIN_ROUTE}
        description="Home"
        iconName="home-outline"
      />
      <BasicNavButton
        path={EVENT_GROUP_CREATION_ROUTE}
        description="Create"
        iconName="add-outline"
      />
      <CompleteEventButton />
      <SettingsButton />
    </View>
  );
};

const CompleteEventButton = () => {
  const dispatch = useDispatch();

  const doOpenQRView = () => {
    dispatch(actions.navbarActions.hideNavbar());
    Actions.push(EVENTS_REGISTER_ROUTE);
  };

  return (
    <TouchableOpacity
      style={[styles.navButtonContainer]}
      onPress={doOpenQRView}
    >
      <Ionicons
        name="barcode-outline"
        size={NAV_ICON_SIZE}
        color={theme.colors.white}
      />
      <Text style={styles.appBarText}>Scan</Text>
    </TouchableOpacity>
  );
};

const BasicNavButton = (props) => {
  const { path, description, iconName } = props;
  return (
    <TouchableOpacity
      style={[styles.navButtonContainer]}
      onPress={() => Actions.push(path)}
    >
      <Ionicons
        name={iconName}
        size={NAV_ICON_SIZE}
        color={theme.colors.white}
      />
      <Text style={styles.appBarText}>{description}</Text>
    </TouchableOpacity>
  );
};

const SettingsButton = () => {
  const dispatch = useDispatch();

  const doOpenSettingsView = () => {
    dispatch(actions.navbarActions.hideNavbar());
    Actions.push(SETTINGS_SCREEN_ROUTE);
  };

  return (
    <TouchableOpacity
      style={styles.navButtonContainer}
      onPress={doOpenSettingsView}
    >
      <Ionicons
        name="settings-outline"
        size={NAV_ICON_SIZE}
        color={theme.colors.white}
      />
      <Text style={styles.appBarText}>Settings</Text>
    </TouchableOpacity>
  );
};
