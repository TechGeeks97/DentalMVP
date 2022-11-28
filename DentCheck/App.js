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
import SplashScreen from 'react-native-splash-screen';
import Login from './src/login/login';
import Home from './home/home';
import Splash from './src/splash';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  const Stack = createStackNavigator();
  function MyStack() {
    return (
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Login">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    );
  }
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#0070c0"
        barStyle={'light-content'}
      />
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
      {/* <Home /> */}
      {/* <Splash /> */}
    </>
  );
};

export default App;
