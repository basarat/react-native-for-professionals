module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    // disable prettier - to noisy
    'prettier/prettier': 0,
    // allow inline styles - for demo
    'react-native/no-inline-styles': 0,
    // eol not required - for demo
    'eol-last': 0,
    // allow unused vars (I import stuff for later use)
    '@typescript-eslint/no-unused-vars': 0,
  },
};
