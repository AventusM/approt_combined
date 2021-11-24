import React from "react";
import { View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Actions } from "react-native-router-flux";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

import { SINGLE_EVENT_GROUP_ROUTE } from "../../constants";
import { Text } from "../Generic";
import theme from "../../theme";
import actions from "../../store/actions";
import { useJoinAppro, useLeaveAppro } from "../../hooks";

const styles = StyleSheet.create({
  listItemContainer: {
    display: "flex",
    flexDirection: "column",
    padding: 10,
  },
  listItemPreview: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listItemPreviewText: {
    fontSize: theme.fontSizes.smallerHeading,
    fontWeight: theme.fontWeights.bold,
  },
  listItemDataContainer: {
    marginVertical: 10,
  },
  listItemDataMapButton: {
    backgroundColor: theme.colors.grayText,
    borderWidth: StyleSheet.hairlineWidth,
  },
  listItemDataJoinButton: {
    backgroundColor: theme.colors.primary,
  },
  listItemDataCancelButton: {
    backgroundColor: theme.colors.error,
  },
  listItemDataText: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
    padding: 10,
    textAlign: "center",
  },
});

// Displays things like title, host, occurence.
// Pressing it should result to link to the actual appro with map and current progress
// (coloured markers depending on completed status through qr code reading)
// TODO: Approdata should have a set of organizers instead of only 1 host? Or mix them?
export const ApproPreview = (props) => {
  const dispatch = useDispatch();
  const { approData, isSelected, userCanJoin } = props;

  const doOpenMapView = () => {
    dispatch(actions.navbarActions.hideNavbar());
    Actions.push(SINGLE_EVENT_GROUP_ROUTE, { id: approData.id });
  };

  return (
    <View style={styles.listItemContainer}>
      <View style={styles.listItemPreview}>
        <Text style={styles.listItemPreviewText}>{approData.name}</Text>
        <Ionicons
          name={isSelected ? "chevron-up-outline" : "chevron-down-outline"}
          size={13}
        />
      </View>
      {isSelected && (
        <View style={styles.listItemDataContainer}>
          <Text>TODO: Display more info (start/end/host etc...) here</Text>
          <Text>TODO: Display more info (start/end/host etc...) here</Text>
          <TouchableOpacity
            style={styles.listItemDataMapButton}
            onPress={doOpenMapView}
          >
            <Text style={styles.listItemDataText}>Open map</Text>
          </TouchableOpacity>
          <JoinLeaveButton userCanJoin={userCanJoin} approId={approData.id} />
        </View>
      )}
    </View>
  );
};

const JoinLeaveButton = (props) => {
  const { userCanJoin, approId } = props;
  const [joinAppro] = useJoinAppro();
  const [leaveAppro] = useLeaveAppro();

  const doJoinEvent = () => {
    joinAppro(approId);
  };

  const doLeaveEvent = () => {
    leaveAppro(approId);
  };

  if (userCanJoin) {
    return (
      <TouchableOpacity
        style={styles.listItemDataJoinButton}
        onPress={doJoinEvent}
      >
        <Text style={styles.listItemDataText}>Join</Text>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        style={styles.listItemDataCancelButton}
        onPress={doLeaveEvent}
      >
        <Text style={styles.listItemDataText}>Leave</Text>
      </TouchableOpacity>
    );
  }
};
