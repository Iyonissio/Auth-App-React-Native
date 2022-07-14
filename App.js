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


import Navigation from './src/navigation/index';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
      {/* <NewPasswordScreen /> */}
      {/* <ForgotPasswordScreen /> */}
      {/* <ConfirmEmailScreen /> */}
      {/* <SignupScreen /> */}
      {/* <SigninScreen /> */}
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
