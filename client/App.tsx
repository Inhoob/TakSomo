import {NavigationContainer} from '@react-navigation/native';
import {OverlayProvider} from '@toss/use-overlay';
import React from 'react';
import {useColorScheme} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {darkModeTheme, lightModeTheme} from '@styles/theme';

import {RootTabNavigator} from './src/navigation/RootTabNavigator';

function App(): JSX.Element {
  const colorScheme = useColorScheme();

  const paperTheme =
    colorScheme === 'dark' ? {...darkModeTheme} : {...lightModeTheme};
  return (
    <OverlayProvider>
      <SafeAreaProvider>
        <PaperProvider theme={paperTheme}>
          <NavigationContainer>
            <RootTabNavigator />
          </NavigationContainer>
        </PaperProvider>
      </SafeAreaProvider>
    </OverlayProvider>
  );
}

export default App;
