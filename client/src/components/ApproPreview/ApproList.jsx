import React, { useState } from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { FULL_OPACITY } from "../../constants";

import { ApproPreview } from "./ApproPreview";

const styles = StyleSheet.create({
  approListContainer: {
    backgroundColor: "transparent", // MainScreen.jsx dataContainer flex:1 gives this off-white color
    marginHorizontal: 10,
  },
  divider: {
    opacity: 0.1,
    borderWidth: StyleSheet.hairlineWidth,
  },
});

const Divider = () => <View style={styles.divider} />;

export const ApproList = (props) => {
  const { approt, userCanJoin } = props;
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const isSelected = item.id === selectedId;
    return (
      <TouchableOpacity
        // 1 visible at once. This approach adds the ability to close the accordion as well, however.
        activeOpacity={FULL_OPACITY}
        onPress={() => setSelectedId(selectedId === item.id ? null : item.id)}
      >
        <ApproPreview
          approData={item}
          isSelected={isSelected}
          userCanJoin={userCanJoin}
        />
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      style={styles.approListContainer}
      data={approt}
      ItemSeparatorComponent={Divider}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      extraData={selectedId}
    />
  );
};
