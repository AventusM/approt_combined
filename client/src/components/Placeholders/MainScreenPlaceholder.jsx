import React from "react";
import { Dimensions } from "react-native";
import SkeletonContent from 'react-native-skeleton-content';

export const MainScreenPlaceholder = () => {
  return (
    <SkeletonContent
      containerStyle={{flex: 1, width: "100%", justifyContent: "center", alignItems: "flex-start", marginLeft: 20, marginTop: 20}}
      animationDirection="horizontalLeft"
      duration={1500}
      animationType="shiver"
      layout={[
      {width: 200, height: 30, marginBottom: 30},
      { width: Dimensions.get("screen").width - 50, height: 150, marginBottom: 10 },
      { width: Dimensions.get("screen").width - 50, height: 150, marginBottom: 10 },
      { width: Dimensions.get("screen").width - 50, height: 150, marginBottom: 10 },
      ]}
      isLoading={true}>
    </SkeletonContent>
  );
};