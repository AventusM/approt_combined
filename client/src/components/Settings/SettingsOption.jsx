import React from "react";
import { StyleSheet } from 'react-native';
import theme from "../../theme";
import { Text, Translate, TouchableOpacity } from '../Generic';

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    padding: 15, // Use padding instead of margin to span the full width
  },
  title: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold
  }
});

export const SettingsOption = (props) => {
  const {titleTerm, action} = props;

  return (
    <TouchableOpacity style={styles.itemContainer} onPress={action}>
      <Text style={styles.title}>
        <Translate term={titleTerm}/>
      </Text>
    </TouchableOpacity>
  );
};

