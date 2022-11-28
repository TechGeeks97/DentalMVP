import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

const Layout = ({children}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#0070c0'}}>
      {children}
    </SafeAreaView>
  );
};
export default Layout;
