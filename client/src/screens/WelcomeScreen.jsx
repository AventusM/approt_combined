import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

import {LOGIN_ROUTE, SIGN_UP_ROUTE} from '../constants';
import {ApprotLogo} from '../customizedAssets';
import {Text} from '../components/Generic';
import theme from '../theme';

const styles = StyleSheet.create({
  welcomeDataContainer: {
    alignItems: "center",
    justifyContent: "flex-end",
    display: "flex",
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  box: {
    backgroundColor: theme.colors.primary,
    width: "100%",
    height: "70%",
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  loginScreenButton: {
    color: theme.colors.primary,
    width: 230,
    backgroundColor: theme.colors.white,
    borderRadius: 50,
    padding: 22,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
  },
  signupScreenButton: {
    color: theme.colors.white,
    width: 230,
    borderRadius: 50,
    padding: 22,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    borderWidth: 1,
    borderColor: theme.colors.white,
    marginTop: 20,
  },
  loginText: {
    color: theme.colors.primary,
    fontWeight: theme.fontWeights.bold,
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: theme.fontSizes.smallerHeading,
  },
  signupText: {
    color: theme.colors.white,
    fontWeight: theme.fontWeights.bold,
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: theme.fontSizes.smallerHeading,
  },
  title: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.mainTitle,
    margin: 20,
  },
  logo: {
    position: "relative",
    top: "27%",
    zIndex: 1,
  },


});

export const WelcomeScreen = () => {
  const navigation = useNavigation();

    return (
      <View style={styles.welcomeDataContainer}>
      <ApprotLogo style={styles.logo} />
      <View style={styles.box}>
        <Text style={styles.title}>Approt</Text>
        <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={() => navigation.navigate(LOGIN_ROUTE)}
          underlayColor={theme.colors.white}
        >
          <Text style={styles.loginText}>Kirjaudu sisään</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signupScreenButton}
          onPress={() => navigation.navigate(SIGN_UP_ROUTE)}
        >
          <Text style={styles.signupText}>Rekisteröidy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};