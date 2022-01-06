import React, { useState, forwardRef, createRef } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";

import { Text } from "../Generic";
import theme from "../../theme";

import {
  OPEN_BOTTOM_SHEET_FLAG,
  CLOSE_BOTTOM_SHEET_FLAG,
} from "../../constants";

const mapWidth = Dimensions.get("window").width;
const mapHeight = Dimensions.get("window").height;
const LATITUDE_DELTA = 0.28;
const LONGITUDE_DELTA = LATITUDE_DELTA * (mapWidth / mapHeight);

const styles = StyleSheet.create({
  map: {
    width: mapWidth,
    height: mapHeight,
  },
  bottomSheet: {
    backgroundColor: theme.colors.white,
    display: "flex",
    flexDirection: "column",
    height: 300, // NOTICE: Keep relative sync with <BottomSheet /> snapPoints props
  },
  bottomSheetContentContainer: {
    flex: 1, // Fill the space not used by the header line
    paddingHorizontal: 20,
  },
  bottomSheetHeaderLine: {
    alignSelf: "center",
    backgroundColor: theme.colors.grayText,
    borderRadius: 5,
    height: 3,
    marginTop: 10,
    marginBottom: 30,
    width: 50,
  },
  bottomSheetLocationText: {
    fontSize: theme.fontSizes.smallerHeading,
    fontWeight: theme.fontWeights.bold,
  },
});

// Contains all the data relevant to the event
// Mostly markers with varying statuses
// Bottom has 1 list item - looking row
// with some relevant info (join button etc)
// which could expand into more through a bottom-style modal?
export const ApproEventMap = (props) => {
  const { data } = props;
  const [selectedMarkerData, setSelectedMarkerData] = useState(null);
  const sheetRef = createRef(null);

  const formatEventPointToMarker = (point) => {
    return {
      latitude: Number(point.lat),
      longitude: Number(point.lng),
    };
  };

  // TODO Need to cover case(s) where pressing on multiple markers consecutively.
  // TODO Currently this will toggle when it shouldn't
  /*   const toggleBottomModal = (markerData) => {
    if (!selectedMarkerData) {
      setSelectedMarkerData(markerData);
      sheetRef.current.snapTo(OPEN_BOTTOM_SHEET_FLAG); // Set flag to open the bottom sheet
    }

    // Probably need to do an edge case check because this doesn't cover the
    else {
      setSelectedMarkerData(null);
      sheetRef.current.snapTo(CLOSE_BOTTOM_SHEET_FLAG); // Vice-versa
    }
  }; */

  const openBottomModal = (markerData) => {
    setSelectedMarkerData(markerData);
    sheetRef.current.snapTo(OPEN_BOTTOM_SHEET_FLAG); // Set flag to open the bottom sheet
  };

  // TODO: Add join button somewhere?
  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: formatEventPointToMarker(data.events[0].point).latitude, // Just putting the 1st item to cover the initial region
          longitude: formatEventPointToMarker(data.events[0].point).longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
      >
        {data.events.map((event) => (
          <Marker
            key={event.id}
            identifier={event.id}
            coordinate={formatEventPointToMarker(event.point)}
            onPress={() => openBottomModal(event)}
          />
        ))}
      </MapView>
      <MapInfoBottomSheet
        ref={sheetRef}
        selectedMarkerData={selectedMarkerData}
      />
    </View>
  );
};

const MapInfoBottomSheet = forwardRef((props, forwardedRef) => {
  const { selectedMarkerData } = props;
  const fall = new Animated.Value(1);

  const renderContent = () => {
    return (
      <View style={styles.bottomSheet}>
        <View style={styles.bottomSheetHeaderLine} />
        <View style={styles.bottomSheetContentContainer}>
          <Text style={styles.bottomSheetLocationText}>
            {selectedMarkerData
              ? selectedMarkerData.name
              : "Select an event to display data!"}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <BottomSheet
      ref={forwardedRef}
      snapPoints={[300, 10]}
      initialSnap={CLOSE_BOTTOM_SHEET_FLAG}
      callbackNode={fall}
      borderRadius={10}
      enabledGestureInteraction
      renderContent={renderContent}
    />
  );
});

// Fix linter complaining due to forwardRef change
MapInfoBottomSheet.displayName = "MapInfoBottomSheet";
