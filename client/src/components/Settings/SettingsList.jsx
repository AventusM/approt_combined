import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { useActionSheet } from '@expo/react-native-action-sheet';
import { useDispatch } from "react-redux";

import { SettingsOption } from './';
import actions from '../../store/actions';
import theme from '../../theme';

const styles = StyleSheet.create({
  centeredText: {
    textAlign: "center",
  },
  signoutButtonText: {
    color: theme.colors.white,
    fontWeight: theme.fontWeights.bold,
  },
  actionSheetOptionText: {
    fontWeight: theme.fontWeights.bold
  },
  divider: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(0,0,0,0.25)'
  }
});


export const SettingsList = () => {
  const dispatch = useDispatch();
  const { showActionSheetWithOptions } = useActionSheet();

  // Extract into own function if SettingsList starts to get big
  const openLanguageActionSheet = () => {
    
    const options = [
      "English",
      "Suomi",
      "Svenska",
      "Cancel"
    ];

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex: options.length -1,
        showSeparators: true,
        textStyle: styles.actionSheetOptionText,
      },
      (buttonIndex) => {
        switch (buttonIndex) {
          case 0:
            dispatch(actions.langActions.setLanguage('en'));
            return;
          case 1:
            dispatch(actions.langActions.setLanguage('fi'));
            return;
          case 2:
            dispatch(actions.langActions.setLanguage('sv'));
            return;
          default:
        }
      }
    );
  };

  // Has to defined after actions, otherwise the actions declared below this array will be undefined
  const DATA = [
    {
      id: 0,
      titleTerm: 'setLanguage',
      action: openLanguageActionSheet
    },
    {
      id: 1,
      titleTerm: 'setLanguage',
      action: openLanguageActionSheet
    },
    {
      id: 2,
      titleTerm: 'setLanguage',
      action: openLanguageActionSheet
    },
    {
      id: 3,
      titleTerm: 'setLanguage',
      action: openLanguageActionSheet
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <SettingsOption titleTerm={item.titleTerm} action={item.action}/>
    );
  };

  return (
    <FlatList
    ItemSeparatorComponent={() => <View style={styles.divider}/>}
    data={DATA}
    renderItem={renderItem}
    keyExtractor={item => item.id}
  />
  );
};