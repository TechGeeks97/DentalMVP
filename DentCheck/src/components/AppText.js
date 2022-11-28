import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const Layout = ({children}) => {
  return <Text style={{flex: 1, backgroundColor: '#0070c0'}}>{children}</Text>;
};
export default Layout;
