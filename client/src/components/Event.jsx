import React from "react";
import { useSelector } from "react-redux";
import { View, FlatList, StyleSheet, Button } from "react-native";
import QRCode from "react-native-qrcode-svg";

import { useJoinAppro } from "../hooks";
import theme from "../theme";

import { Text } from "./Generic";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: theme.colors.listItemDevColor,
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 20,
  },
  title: {
    fontSize: theme.fontSizes.heading,
  },
  text: {
    fontSize: theme.fontSizes.subheading,
  },
  headerContainer: {
    padding: 20,
  },
  headerText: {
    fontSize: theme.fontSizes.heading,
  },
  buttonFollowTextWidthContainer: {
    alignSelf: "flex-start",
  },
});

export const EventList = (props) => {
  const { currentUser } = useSelector((state) => state.authData);
  const { name, host, events, id, participants } = props;
  const renderItem = ({ item }) => <SingleEvent {...item} />;

  const canJoinEventGroup = participants.find((participantData) => {
    participantData.id === currentUser.userId;
  });

  return (
    <FlatList
      ListHeaderComponent={() => (
        <EventListHeader
          approName={name}
          host={host}
          approId={id}
          canJoinEventGroup={canJoinEventGroup}
        />
      )}
      data={events}
      renderItem={renderItem} // Conditional rendering here with canJoinEventGroup?
      keyExtractor={(item) => item.id}
    />
  );
};

const SingleEvent = (props) => {
  const { name, id } = props;

  return (
    <View style={styles.item}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.text}>TODO More information ...</Text>
      <Text style={styles.text}>TODO More information ...</Text>
      <Text style={styles.text}>TODO More information ...</Text>
      <Text style={styles.text}>TODO More information ...</Text>
      <Text style={styles.text}>
        Read the displayed QR code below to mark the event complete
      </Text>
      <QRCode value={generateQRValue(id)} />
    </View>
  );
};

const EventListHeader = (props) => {
  const { approName, host, approId, canJoinEventGroup } = props;
  const [joinAppro] = useJoinAppro();

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>
        {approName} by {host.username}
      </Text>
      <View style={styles.buttonFollowTextWidthContainer}>
        {canJoinEventGroup ? (
          <Button title="Join" onPress={() => joinAppro(approId)} />
        ) : (
          <Button title="Cancel" onPress={() => console.log("TODO!")} />
        )}
      </View>
    </View>
  );
};

// TODO: Add some event data for the confirmation prompt when user runs a QR scan
const generateQRValue = (id) => {
  return `${id}`;
};
