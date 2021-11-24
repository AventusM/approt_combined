import React from "react";
import { View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Text } from "../Generic";
import theme from "../../theme";

const styles = StyleSheet.create({
  divider: {
    opacity: 0.1,
    borderWidth: StyleSheet.hairlineWidth,
  },
  singlePlaceContainer: {
    alignItems: "center",
    borderWidth: StyleSheet.hairlineWidth,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  eventGroupList: {
    marginTop: 20,
  },
});

const Divider = () => <View style={styles.divider} />;

export const EventGroupPlaceList = (props) => {
  const { eventGroupData, removeEvent } = props;
  const renderItem = ({ item }) => (
    <EventGroupPlace removeEvent={removeEvent} {...item} />
  );
  return (
    <FlatList
      style={styles.eventGroupList}
      data={eventGroupData}
      ItemSeparatorComponent={Divider}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const EventGroupPlace = (props) => {
  const { name, removeEvent, id } = props;

  return (
    <TouchableOpacity
      style={styles.singlePlaceContainer}
      onPress={() => removeEvent(id)}
    >
      <Text>{name}</Text>
      <Ionicons
        name="close-circle-outline"
        size={26}
        color={theme.colors.error}
      />
    </TouchableOpacity>
  );
};
