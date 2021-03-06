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

export const MainScreenPlaceholder = () => {
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
        <Circle cx="31" cy="31" r="15" /> 
        <Rect x="58" y="18" rx="2" ry="2" width="140" height="10" /> 
        <Rect x="58" y="34" rx="2" ry="2" width="140" height="10" /> 
        <Rect x="0" y="60" rx="2" ry="2" width="400" height="400" />
      </ContentLoader>
  </View>
  );
};