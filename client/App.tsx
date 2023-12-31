import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useColorScheme} from 'react-native';
import {PaperProvider, MD3DarkTheme, MD3LightTheme} from 'react-native-paper';

import {RootTabNavigator} from './src/navigation/RootTabNavigator';

function App(): JSX.Element {
  const colorScheme = useColorScheme();

  const paperTheme =
    colorScheme === 'dark' ? {...MD3DarkTheme} : {...MD3LightTheme};

  return (
    <PaperProvider theme={paperTheme}>
      <NavigationContainer>
        <RootTabNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
