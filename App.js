/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import SigninScreen from './src/screens/SignInScreen/SigninScreen';
import SignupScreen from './src/screens/SignUpScreen/SignupScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <SignupScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  }
});

export default App;
