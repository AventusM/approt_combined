import React from "react";
import { View, StyleSheet } from "react-native";
import { useDispatch } from 'react-redux';
import { LoadingIndicator } from "../components/Generic";
import { ApproEventMap } from "../components/ApproEvent";

import { useSingleAppro } from "../hooks";
import actions from "../store/actions";

const styles = StyleSheet.create({
  dataContainer: {
    display: "flex",
    flexDirection: "row",
  },
});

// Should contain a couple of components
// 1. A map with markers of different color depending on completed status
// 2. Overview component (how many ppl there etc.)
export const EventScreen = (props) => {
  const { id } = props;
  const { data, status } = useSingleAppro(id);
  if (status === "loading") {
    return <LoadingIndicator />;
  }
  
  // For whatever reason, hiding navbar didn't work like with qr screen. So just calling the dispatch here on render.
  const dispatch = useDispatch();
  dispatch(actions.navbarActions.hideNavbar());
  return (
    <View style={styles.dataContainer}>
      <ApproEventMap data={data} />
    </View>
  );
};
