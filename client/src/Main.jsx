import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SafeAreaView, StyleSheet } from "react-native";
import { useBackHandler } from "@react-native-community/hooks";
import { useNavigation, useNavigationState } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from '@expo/vector-icons';
import * as NavigationBarActions from "expo-navigation-bar";

import { GlobalMessage } from "./components/Generic";
import securestorage from "./securestorage";
import actions from "./store/actions";
import theme from './theme';


import {
  MainScreen,
  EventRegistrationScreen,
  LoginScreen,
  RegisterScreen,
  EventMapScreen,
  EventInfoScreen,
  EventGroupCreatorScreen,
  SettingsScreen,
  WelcomeScreen,
} from "./screens";

import {
  EVENTS_REGISTER_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  SIGN_UP_ROUTE,
  SINGLE_EVENT_GROUP_ROUTE,
  SINGLE_EVENT_GROUP_ROUTE_MAP,
  EVENT_GROUP_CREATION_ROUTE,
  SETTINGS_SCREEN_ROUTE,
  WELCOME_ROUTE,
} from "./constants";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    position: 'relative',
  },
});

const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();
const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      {/* Be careful, same name as with the Tab.Screen. Might bring in some errors, not sure yet. */}
      <HomeStack.Screen name={MAIN_ROUTE} component={MainScreen} />
      <HomeStack.Screen name={SINGLE_EVENT_GROUP_ROUTE} component={EventInfoScreen} />
      <HomeStack.Screen name={SINGLE_EVENT_GROUP_ROUTE_MAP} component={EventMapScreen} />
    </HomeStack.Navigator>
  );
};

const Main = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.authData);
  const navigationState = useNavigationState(state => state);
  const navigation = useNavigation();

  // Probably not the most optimal as it resets the color on every check
  // TODO: Change only if necessary
  useEffect(() => {
    const setNavBarColor = async (color) => NavigationBarActions.setBackgroundColorAsync(color);
    const routeName = navigationState && navigationState.routeNames[navigationState.index];
    // Either just opened the app or got there through a back button / logout
    const justLaunched = !routeName;
    const onWelcomeScreen = routeName === WELCOME_ROUTE;
    const loggedOut = !currentUser && routeName === WELCOME_ROUTE; // Might not be necessary
    //console.log(`justLaunched:${justLaunched} -- onWelcomeScreen:${onWelcomeScreen} -- loggedOut:${loggedOut}`);
    if(justLaunched || onWelcomeScreen || loggedOut){
      setNavBarColor(theme.colors.primary);
    } else {
      setNavBarColor(theme.colors.white);
    }
  }, [navigationState]);

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

  useBackHandler(() => {
    if(navigation.canGoBack()){
      navigation.goBack();
    }
    return true;
  });

  if(!currentUser){
    return (
      <SafeAreaView style={styles.container}>
        <GlobalMessage />
        <RootStack.Navigator screenOptions={{headerShown: false}} initialRouteName={WELCOME_ROUTE}>
          <RootStack.Screen name={WELCOME_ROUTE} component={WelcomeScreen} />
          <RootStack.Screen name={LOGIN_ROUTE} component={LoginScreen} />
          <RootStack.Screen name={SIGN_UP_ROUTE} component={RegisterScreen} />
        </RootStack.Navigator>
      </SafeAreaView>
    );
  } else {
    return (
    <SafeAreaView style={styles.container}>
      <GlobalMessage />
      <Tab.Navigator initialRouteName={MAIN_ROUTE}
              screenOptions={({ route }) => ({

                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === MAIN_ROUTE) {
                    iconName = focused ? 'home' : 'home-outline';
                  } else if (route.name === SETTINGS_SCREEN_ROUTE) {
                    iconName = focused ? 'settings' : 'settings-outline';
                  } else if (route.name === EVENT_GROUP_CREATION_ROUTE){
                    iconName = focused ? 'add-circle' : 'add-circle-outline';
                  } else {
                    iconName = focused ? 'scan' : 'scan-outline';
                  }
      
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: theme.colors.primary,
                tabBarInactiveTintColor:"rgba(0,0,0,0.4)",
              })}
      >
        {/* Header replaced in HomeStackScreen */}
        <Tab.Screen name={MAIN_ROUTE} component={HomeStackScreen} options={{headerShown:false}}/>
        <Tab.Screen name={EVENT_GROUP_CREATION_ROUTE} component={EventGroupCreatorScreen} />
        <Tab.Screen name={EVENTS_REGISTER_ROUTE} component={EventRegistrationScreen} />
        <Tab.Screen name={SETTINGS_SCREEN_ROUTE} component={SettingsScreen} />
      </Tab.Navigator>
    </SafeAreaView>
    );
  }
};

export default Main;
