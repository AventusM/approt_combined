import React, { Fragment } from "react";
import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import { Text } from "../Generic";
import theme from "../../theme";

const styles = StyleSheet.create({
  textInput: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingLeft: 10,
    borderBottomColor: theme.colors.grayText,
  },
});

export const GooglePlacesInput = (props) => {
  const { addEvent } = props;
  return (
    <Fragment>
      <Text>Select places</Text>
      <GooglePlacesAutocomplete
        styles={{
          textInput: styles.textInput,
        }}
        fetchDetails
        placeholder="Search for a place"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true

          addEvent({
            id: `${details.formatted_address}-${details.place_id}`, // Used only for list manipulation purposes
            name: details.name,
            point: details.geometry.location,
            location: details.formatted_address,
          });
        }}
        query={{
          key: "AIzaSyDmEjOEY1y3ygIos8Qvpv-oQjsAFtD3xpk",
          language: "en",
          components: "country:fi",
        }}
      />
    </Fragment>
  );
};
