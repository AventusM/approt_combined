import React, { useState } from "react";
import { View, StyleSheet, Platform, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import theme from "../../theme";

import { DayMonthYearData, TimeData } from "./";
import { Text } from "../Generic";

const styles = StyleSheet.create({
  dateTimeRowContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    //bottom: 10,
  },
  timeButton: {
    color: "#FF7E15",
    backgroundColor: theme.colors.primary,
    borderRadius: 50,
    padding: 10,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    marginTop: 15,
  },
  picker: {
    width: 100,
  },
});

export const EventGroupDateTimePicker = (props) => {
  const { title, date, setDateFunc } = props;
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [dateSetOnce, setDateSetOnce] = useState(false);
  const [timeSetOnce, setTimeSetOnce] = useState(false);

  const onChange = (event, selectedDate) => {
    if (event.type === "set") {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === "ios");
      setDateFunc(currentDate);

      if (mode === "date") {
        setDateSetOnce(true);
      } else {
        setTimeSetOnce(true);
      }
    } else if (event.type === "dismissed") {
      setShow(Platform.OS === "ios");
    }
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.dateTimeRowContainer}>
        <TouchableOpacity onPress={showDatepicker}>
          <DayMonthYearData dateSetOnce={dateSetOnce} date={date} />
        </TouchableOpacity>
      </View>
      <View style={styles.dateTimeRowContainer}>
        <TouchableOpacity onPress={showTimepicker}>
          <TimeData timeSetOnce={timeSetOnce} date={date} />
        </TouchableOpacity>
      </View>
      {show && (
        <DateTimePicker
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          textColor="white"
          style={styles.picker}
          onChange={onChange}
        />
      )}
    </View>
  );
};
