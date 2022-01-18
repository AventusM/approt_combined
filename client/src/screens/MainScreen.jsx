import React from "react";
import { RefreshControl, View, StyleSheet, ScrollView } from "react-native";
import { useSelector } from "react-redux";

import { ApproList, ApproListHeader } from "../components/ApproPreview";
import { MainScreenPlaceholder } from '../components/Placeholders';
import { useAppros } from "../hooks";
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
  const { currentUser } = useSelector((state) => state.authData);
  const { data, isFetching, refetch } = useAppros();

  // Replaces loading status (use it elsewhere here with error etc.)
  if(isFetching){
    return <MainScreenPlaceholder />;
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
    <ScrollView style={styles.scrollViewContainer}
    refreshControl={
      <RefreshControl
        tintColor={theme.colors.primary}
        refreshing={isFetching}
        onRefresh={refetch}
      />
    }>
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
