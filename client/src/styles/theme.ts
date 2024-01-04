// src/styles/themes.ts
import {MD3DarkTheme, MD3LightTheme, MD3Theme} from 'react-native-paper';

interface CustomColors {
  mainPrimary: string;
  mainAccent: string;
  mainBackground: string;
  mainSurface: string;
  mainText: string;
  mainDisabled: string;
  mainPlaceholder: string;
  mainBackdrop: string;
  mainGray1: string;
  mainGray2: string;
  mainGray3: string;
  cardContent: string;
}

export interface CustomTheme extends MD3Theme {
  colors: CustomColors & MD3Theme['colors'];
}

export const darkModeColors: CustomColors = {
  mainPrimary: '#FF6F61',
  mainAccent: '#4CAF50',
  mainBackground: '#212121',
  mainSurface: '#424242',
  mainText: '#FFFFFF',
  mainDisabled: '#BDBDBD',
  mainPlaceholder: '#757575',
  mainBackdrop: '#000000',
  mainGray1: '#666666',
  mainGray2: '#999999',
  mainGray3: '#CCCCCC',
  cardContent: '#f5f5f5',
};

export const lightModeColors: CustomColors = {
  mainPrimary: '#FF6F61',
  mainAccent: '#4CAF50',
  mainBackground: '#F5F5F5',
  mainSurface: '#FFFFFF',
  mainText: '#333333',
  mainDisabled: '#BDBDBD',
  mainPlaceholder: '#757575',
  mainBackdrop: '#000000',
  mainGray1: '#666666',
  mainGray2: '#999999',
  mainGray3: '#CCCCCC',
  cardContent: '#f5f5f5',
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
