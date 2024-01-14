import {NavigationContainer} from '@react-navigation/native';
import {OverlayProvider} from '@toss/use-overlay';
import React from 'react';
import {useColorScheme} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import CustomFAB from '@components/CustomFAB';

import {lightModeTheme} from '@styles/theme';

import {RootTabNavigator} from './src/navigation/RootTabNavigator';

function App(): JSX.Element {
  const colorScheme = useColorScheme();

  const paperTheme =
    colorScheme === 'dark' ? {...lightModeTheme} : {...lightModeTheme}; //TODO: 하나는 darkmodetheme으로 바꿀 것
  return (
    <SafeAreaProvider>
      <PaperProvider theme={paperTheme}>
        <OverlayProvider>
          <NavigationContainer>
            <RootTabNavigator />
            <CustomFAB />
          </NavigationContainer>
        </OverlayProvider>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

export default App;
