import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";
import { Ionicons } from "@expo/vector-icons";

import { SINGLE_EVENT_GROUP_ROUTE } from "../../constants";
import { Text } from "../Generic";
import theme from "../../theme";
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

/* const styles = StyleSheet.create({
  cardContainer: {
    borderColor: 'rgba(0,0,0,0.1)',
    borderRadius: 10,
    borderWidth: 1,
  },
  cardImage: {
    backgroundColor: 'rgba(0,0,0,0.1)', 
    height: 100, 
    flex: 1, 
    borderTopLeftRadius: 10, 
    borderTopRightRadius: 10
  },
  cardDataContainer: {
    display: 'flex',
    margin: 10
  },
  cardDataRow: {
    flexDirection: 'row', 
    justifyContent: 'space-between'
  }
});
 */
/* export const ApproPreview = (props) => {
  const { approData, isSelected, userCanJoin } = props;
  return (
    <TouchableNativeFeedback onPress={() => Actions.push(SINGLE_EVENT_GROUP_ROUTE)}>
      <View style={styles.cardContainer}>
      <View style={styles.cardImage}/>
      <View style={styles.cardDataContainer}>
        <View style={styles.cardDataRow}>
          <Text>Name</Text>
          <Text>StartDate</Text>
        </View>
        <View style={styles.cardDataRow}>
          <Text>StartTime</Text>
          <Text>Status</Text>
        </View>
      </View>
      </View>
    </TouchableNativeFeedback>
  );
}; */

// Displays things like title, host, occurence.
// Pressing it should result to link to the actual appro with map and current progress
// (coloured markers depending on completed status through qr code reading)
// TODO: Approdata should have a set of organizers instead of only 1 host? Or mix them?
export const ApproPreview = (props) => {
  const { approData, isSelected, userCanJoin } = props;

  const doOpenDetailedInformationView = () => {
    Actions.push(SINGLE_EVENT_GROUP_ROUTE, { approData });
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
          <TouchableOpacity
            style={styles.listItemDataMapButton}
            onPress={doOpenDetailedInformationView}
          >
            <Text style={styles.listItemDataText}>View detailed information</Text>
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
