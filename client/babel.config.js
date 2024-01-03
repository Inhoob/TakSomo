module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['styled-components', {ssr: true, displayName: true, preprocess: false}],
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@': './src',
          '@components': './src/components',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@interfaces': './src/interfaces',
          '@services': './src/services',
          '@navigation': './src/navigation',
          '@styles': './src/styles',
          '@stores': './src/stores',
          '@queries': './src/queries',
          '@constants': './src/constants',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
