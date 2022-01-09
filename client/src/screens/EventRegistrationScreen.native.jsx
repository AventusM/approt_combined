import React, { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "react-query";
import { View, StyleSheet } from "react-native";

import { Text } from "../components/Generic";

import { Camera } from "expo-camera";
import BarcodeMask from "react-native-barcode-mask";
import api from "../api";
import theme from "../theme";

import { GET_ALL_EVENTS_QUERY_KEY } from "../constants";

const styles = StyleSheet.create({
  bolderText: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
  },
  loaderContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  actionButtonTextBase: {
    backgroundColor: "green",
    color: "white",
    flex: 2,
    fontWeight: theme.fontWeights.bold,
    padding: 20,
    textAlign: "center",
  },
});

export const EventRegistrationScreen = () => {
  //const dispatch = useDispatch();

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const requestPermission = async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    requestPermission();
  }, []);

  // TODO: Into own hook
  // TODO: Into own hook
  // TODO: Into own hook
  // TODO: Into own hook
  // TODO: Into own hook
  // TODO: Into own hook
  // TODO: Into own hook
  // TODO: Into own hook
  // TODO: Into own hook
  // TODO: Into own hook
  const queryClient = useQueryClient();
  const mutation = useMutation(api.events.completeEvent, {
    onSuccess: () => {
      queryClient.invalidateQueries(GET_ALL_EVENTS_QUERY_KEY);
    },
  });
  // TODO: Into own hook
  // TODO: Into own hook
  // TODO: Into own hook
  // TODO: Into own hook
  // TODO: Into own hook
  // TODO: Into own hook
  // TODO: Into own hook
  // TODO: Into own hook
  // TODO: Into own hook
  // TODO: Into own hook

  // Disable non-alert area on alert? Could still navigate back when alert was on
  const handleBarCodeScanned = ({ type, data }) => {
    console.log(data);
    try {
      setScanned(true);
      alert(`Bar code with type ${type} and data ${data} has been scanned!`); // TODO: Maybe into confirmation dialog?
      mutation.mutate(data);
      //dispatch(actions.eventsActions.completeEvent({ eventId: data }));
    } catch (error) {
      console.log("handleBarCodeScanned error", error);
    }
  };

  if (hasPermission === null) {
    return (
      <View style={styles.loaderContainer}>
        <Text style={styles.bolderText}>Checking permission...</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.loaderContainer}>
        <Text style={styles.bolderText}>No access to camera</Text>
      </View>
    );
  }

  return (
    <Camera
      onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      ratio="16:9"
      style={StyleSheet.absoluteFill}
    >
      <BarcodeMask />
    </Camera>
  );
};
