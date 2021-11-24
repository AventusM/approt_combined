import React, { useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";

import {
  EventGroupDateTimePicker,
  EventGroupNameSelector,
  GooglePlacesInput,
  NewEventGroupSubmit,
  EventGroupPlaceList,
} from "../components/ApproCreate";

import { Text } from "../components/Generic";
import theme from "../theme";

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  titleWrapper: {
    paddingVertical: 60,
    backgroundColor: "#FF7E15",
  },
  title: {
    fontSize: theme.fontSizes.heading,
    textAlign: "center",
  },
  eventWrapper: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  start: {
    marginBottom: 10,
    marginTop: 10,
  },
  end: {
    marginBottom: 10,
  },
  places: {
    marginBottom: -40,
    marginTop: 20,
  },
});

export const EventGroupCreatorScreen = () => {
  const [eventGroupData, setEventGroupData] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [approName, setApproName] = useState("");

  const addEvent = (newEvent) => {
    setEventGroupData(eventGroupData.concat(newEvent));
  };

  const removeEvent = (eventId) => {
    setEventGroupData(eventGroupData.filter((event) => event.id !== eventId));
  };

  return (
    /* https://stackoverflow.com/a/59628616 keyboardPersist attribute so that GooglePlacesInput component works properly */
    <ScrollView keyboardShouldPersistTaps="always" style={styles.pageContainer}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Luo uudet approt</Text>
      </View>
      <View style={styles.eventWrapper}>
        <EventGroupNameSelector
          approName={approName}
          setApproName={setApproName}
        />
        <View style={styles.start}>
          <EventGroupDateTimePicker
            title={"Choose starting point"}
            date={startDate}
            setDateFunc={setStartDate}
          />
        </View>
        <View style={styles.end}>
          <EventGroupDateTimePicker
            title={"Choose ending point"}
            date={endDate}
            setDateFunc={setEndDate}
          />
        </View>
        <View style={styles.places}>
          <GooglePlacesInput addEvent={addEvent} />
          <EventGroupPlaceList
            eventGroupData={eventGroupData}
            removeEvent={removeEvent}
          />
        </View>
        <NewEventGroupSubmit
          name={approName}
          startDate={startDate}
          endDate={endDate}
          events={eventGroupData}
        />
      </View>
    </ScrollView>
  );
};
