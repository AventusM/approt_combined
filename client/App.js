import React from 'react';
import './src/i18n';

import { Provider } from 'react-redux';
import { QueryClientProvider, QueryClient } from 'react-query';
import { NavigationContainer } from '@react-navigation/native';

import { VarelaRound_400Regular } from '@expo-google-fonts/varela-round';
import AppLoading from 'expo-app-loading';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';

import Main from './src/Main';
import store from './src/store';

import { useFonts } from 'expo-font';

// Create react-query client (e.g. redux provider store)
const queryClient = new QueryClient();

const App = () => {
  let [fontsLoaded] = useFonts({
    VarelaRound_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <NavigationContainer>
          <ActionSheetProvider>
            <Main />
          </ActionSheetProvider>
        </NavigationContainer>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
