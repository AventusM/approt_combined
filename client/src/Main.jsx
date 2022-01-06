import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { StyleSheet, View } from "react-native";
import { Router, Scene, Actions } from "react-native-router-flux";
import { useBackHandler } from "@react-native-community/hooks";
import Constants from "expo-constants";

import securestorage from "./securestorage";
import actions from "./store/actions";
import theme from "./theme";

import { AppBar, GlobalMessage } from "./components/Generic";

import {
  MainScreen,
  UsersScreen,
  EventRegistrationScreen,
  LoginScreen,
  RegisterScreen,
  EventScreen,
  EventInfoScreen,
  EventGroupCreatorScreen,
  SettingsScreen,
} from "./screens";

import {
  EVENTS_REGISTER_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  USERS_ROUTE,
  SIGN_UP_ROUTE,
  SINGLE_EVENT_GROUP_ROUTE,
  SINGLE_EVENT_GROUP_ROUTE_MAP,
  EVENT_GROUP_CREATION_ROUTE,
  SETTINGS_SCREEN_ROUTE,
} from "./constants";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginTop: Constants.statusBarHeight,
  },
  navbarContainer: {
    marginTop: -Constants.statusBarHeight, // Counteract the marginTop in container
  },
  navbarText: {
    fontWeight: theme.fontWeights.bold,
  },
});

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkToken = async () => {
      const foundCurrentUserData = await securestorage.authStorage.getData();
      if (foundCurrentUserData) {
        dispatch(
          actions.authActions.setCurrentUser({
            username: foundCurrentUserData.username,
            userId: foundCurrentUserData.userId,
          })
        );
      }
    };

    checkToken();
  }, []);

  // Replaces <BackButton /> functionality (originally imported from react-router-native).
  // Need to have ability to hide the navbar sometimes (e.g. entering qr - reader camera view).
  // Previously pressing back button resulted in going back but navbar still being hidden.
  useBackHandler(() => {
    Actions.pop();
    dispatch(actions.navbarActions.showNavbar());
    return true;
  });

  return (
    <View style={styles.container}>
      <GlobalMessage />
      <Router>
        <Scene hideNavBar={true} key="root">
          <Scene key={MAIN_ROUTE} component={MainScreen} initial />
          <Scene key={LOGIN_ROUTE} component={LoginScreen} />
          <Scene key={SIGN_UP_ROUTE} component={RegisterScreen} />
          <Scene key={USERS_ROUTE} component={UsersScreen} />

          <Scene
            key={EVENTS_REGISTER_ROUTE}
            component={EventRegistrationScreen}
          />
          <Scene
            key={EVENT_GROUP_CREATION_ROUTE}
            component={EventGroupCreatorScreen}
          />

          <Scene key={SINGLE_EVENT_GROUP_ROUTE} component={EventInfoScreen}
            hideNavBar={false}
            navigationBarStyle={styles.navbarContainer}
            titleStyle={styles.navbarText}
            title="Event view"
            onExit={() => dispatch(actions.navbarActions.showNavbar())}/>

          <Scene
            hideNavBar={false}
            navigationBarStyle={styles.navbarContainer}
            titleStyle={styles.navbarText}
            title="Map view"
            key={SINGLE_EVENT_GROUP_ROUTE_MAP}
            onExit={() => dispatch(actions.navbarActions.showNavbar())}
            component={EventScreen} />
          <Scene
            hideNavBar={false}
            navigationBarStyle={styles.navbarContainer}
            titleStyle={styles.navbarText}
            title="Settings"
            onExit={() => dispatch(actions.navbarActions.showNavbar())}
            key={SETTINGS_SCREEN_ROUTE}
            component={SettingsScreen}
          />
        </Scene>
      </Router>
      <AppBar />
    </View>
  );
};

export default Main;
