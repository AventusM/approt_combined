import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "../Generic";

import theme from "../../theme";

const styles = StyleSheet.create({
  fixedText: {
    fontWeight: theme.fontWeights.normal,
  },
});

export const DayMonthYearData = ({ dateSetOnce, date }) => {
  if (!dateSetOnce) {
    return <Text style={styles.fixedText}>Select date</Text>;
  }

  return (
    <Text style={styles.fixedText}>{new Date(date).toLocaleDateString()}</Text>
  );
};

export const TimeData = ({ timeSetOnce, date }) => {
  const formatTimeData = (date) => {
    const hour = new Date(date).toLocaleTimeString().split(":")[0];
    const minutes = new Date(date).toLocaleTimeString().split(":")[1];
    return `${hour}:${minutes}`;
  };

  if (!timeSetOnce) {
    return <Text style={styles.fixedText}>Select time</Text>;
  }

  return (
    timeSetOnce && <Text style={styles.fixedText}>{formatTimeData(date)}</Text>
  );
};
