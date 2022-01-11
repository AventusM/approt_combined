import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Camera } from "expo-camera";

import { Text } from "../components/Generic";
import BarcodeMask from "react-native-barcode-mask";
import theme from "../theme";
import { useCompleteEvent } from '../hooks';


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
});

export const EventRegistrationScreen = () => {
  const [completeEvent] = useCompleteEvent();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const requestPermission = async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    requestPermission();
  }, []);

  // Disable non-alert area on alert? Could still navigate back when alert was on
  // At the time of writing, entering the screen hides the navbar anyway
  const handleBarCodeScanned = ({ data }) => {
    try {
      setScanned(true);
      completeEvent(data);
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
