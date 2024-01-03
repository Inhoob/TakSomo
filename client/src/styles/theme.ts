// src/styles/themes.ts
import {MD3DarkTheme, MD3LightTheme} from 'react-native-paper';

export const darkModeColors = {
  primary: '#FF6F61',
  accent: '#4CAF50',
  background: '#212121',
  surface: '#424242',
  text: '#FFFFFF',
  disabled: '#BDBDBD',
  placeholder: '#757575',
  backdrop: '#000000',
  gray1: '#666666',
  gray2: '#999999',
  gray3: '#CCCCCC',
};

export const lightModeColors = {
  primary: '#FF6F61',
  accent: '#4CAF50',
  background: '#F5F5F5',
  surface: '#FFFFFF',
  text: '#333333',
  disabled: '#BDBDBD',
  placeholder: '#757575',
  backdrop: '#000000',
  gray1: '#666666',
  gray2: '#999999',
  gray3: '#CCCCCC',
};

export const darkModeTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    ...darkModeColors,
  },
};

export const lightModeTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    ...lightModeColors,
  },
};
