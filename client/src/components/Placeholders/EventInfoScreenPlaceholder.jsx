import React from 'react';
import { View, Dimensions, StyleSheet } from "react-native";
import ContentLoader, { Rect, Circle } from 'react-content-loader/native';

const originalWidth = 275;
const originalHeight = 460;
const aspectRatio = originalWidth / originalHeight;
const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    aspectRatio,
    marginTop: 20,
    width: windowWidth * 0.9
  }
});

export const EventInfoScreenPlaceholder = () => {
  return (
    <View style={styles.container}>
      <ContentLoader 
        speed={1}
        width="100%"
        height="100%"
        viewBox={`0 0 ${originalWidth} ${originalHeight}`}
        backgroundColor="#d3d7cf"
        foregroundColor="#eeeeec"
      >
      <Rect x="16" y="17" rx="0" ry="0" width="360" height="200" />
      <Circle cx="35" cy="248" r="20" />
      <Rect x="69" y="229" rx="2" ry="2" width="275" height="15" />
      <Rect x="69" y="253" rx="2" ry="2" width="140" height="15" />
      </ContentLoader>
  </View>
  );
};