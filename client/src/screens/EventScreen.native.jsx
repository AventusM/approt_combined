import React from "react";
import { View, StyleSheet } from "react-native";
import { useRoute } from '@react-navigation/native';

import { LoadingIndicator } from "../components/Generic";
import { ApproEventMap } from "../components/ApproEvent";
import { useSingleAppro } from "../hooks";

const styles = StyleSheet.create({
  dataContainer: {
    display: "flex",
    flexDirection: "row",
  },
});

// Should contain a couple of components
// 1. A map with markers of different color depending on completed status
// 2. Overview component (how many ppl there etc.)
export const EventScreen = () => {
  const route = useRoute();
  const { data, status } = useSingleAppro(route.params.id);

  if (status === "loading") {
    return <LoadingIndicator />;
  }
  
  return (
    <View style={styles.dataContainer}>
      <ApproEventMap data={data} />
    </View>
  );
};
