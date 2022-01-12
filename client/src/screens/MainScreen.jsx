import React from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { ApproList, ApproListHeader } from "../components/ApproPreview";
import { LoadingIndicator } from "../components/Generic";
import { ApprotLogo } from "../customizedAssets";
import { useAppros } from "../hooks";
import { useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';

import { LOGIN_ROUTE, SIGN_UP_ROUTE } from "../constants";
import { Text } from "../components/Generic";
import theme from "../theme";

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
  welcomeDataContainer: {
    alignItems: "center",
    justifyContent: "flex-end",
    display: "flex",
    flex: 1,
    height: "100%",
    backgroundColor: "#fff",
  },
  dataContainer: {
    display: "flex",
    flexDirection: "column",
  },
  centeredText: {
    textAlign: "center",
  },
  box: {
    backgroundColor: "#FF7E15",
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
    color: "#FF7E15",
    width: 230,
    backgroundColor: "#fff",
    borderRadius: 50,
    padding: 22,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
  },
  signupScreenButton: {
    color: "#fff",
    width: 230,
    borderRadius: 50,
    padding: 22,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    borderWidth: 1,
    borderColor: "#fff",
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
  introContainer: {
    margin: 20,
  },
  userIntro: {
    fontSize: theme.fontSizes.smallerHeading,
    fontWeight: theme.fontWeights.bold,
  },
});

export const MainScreen = () => {
  const navigation = useNavigation();
  const { currentUser } = useSelector((state) => state.authData);
  const { data, status } = useAppros();

  // TODO: Move this into own component?
  if (!currentUser) {
    return (
      <View style={styles.welcomeDataContainer}>
        <ApprotLogo style={styles.logo} />
        <View style={styles.box}>
          <Text style={styles.title}>Approt</Text>
          <TouchableOpacity
            style={styles.loginScreenButton}
            onPress={() => navigation.navigate(LOGIN_ROUTE)}
            underlayColor="#fff"
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
  }

  if (status === "loading") {
    return <LoadingIndicator />;
  }

  const shownApproData = () => {
    return {
      availableEvents: [
        ...data.filter(
          (appro) =>
            !appro.participants.find((p) => p.id === currentUser.userId)
        ),
      ],
      joinedEvents: [
        ...data.filter((appro) =>
          appro.participants.find((p) => p.id === currentUser.userId)
        ),
      ],
    };
  };

  const { availableEvents, joinedEvents } = shownApproData();

  return (
    <ScrollView style={styles.scrollViewContainer}>
      <View style={styles.dataContainer}>
        <View style={styles.introContainer}>
          <Text style={styles.userIntro}>Hello {currentUser.username}!</Text>
        </View>
        <ApproListHeader title="Next events" />
        <ApproList approt={availableEvents} userCanJoin />
        <ApproListHeader title="Your events" />
        <ApproList approt={joinedEvents} userCanJoin={false} />
      </View>
    </ScrollView>
  );
};
