import {NavigationContainer} from '@react-navigation/native';
import {OverlayProvider} from '@toss/use-overlay';
import React from 'react';
import {useColorScheme} from 'react-native';
import {PaperProvider} from 'react-native-paper';

import {darkModeTheme, lightModeTheme} from '@styles/theme';

import {RootTabNavigator} from './src/navigation/RootTabNavigator';

function App(): JSX.Element {
  const colorScheme = useColorScheme();

  const paperTheme =
    colorScheme === 'dark' ? {...darkModeTheme} : {...lightModeTheme}; // 수정된 부분
  return (
    <OverlayProvider>
      <PaperProvider theme={paperTheme}>
        <NavigationContainer>
          <RootTabNavigator />
        </NavigationContainer>
      </PaperProvider>
    </OverlayProvider>
  );
}

export default App;
