import React from "react";
import { Dimensions, Text } from "react-native";
//import SkeletonContent from 'react-native-skeleton-content';

// https://github.com/alexZajac/react-native-skeleton-content/issues/59
// Expo 44 pushed the react-native-reanimated to 2.3.1 whereas the library above requires 2.2.0
// Consider making own loader componen
export const MainScreenPlaceholder = () => {
  return (
    <Text>Skeleton library placeholder</Text>
/*     <SkeletonContent
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
*/
  );
};