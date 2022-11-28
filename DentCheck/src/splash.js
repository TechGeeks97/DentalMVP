import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import Layout from '../src/components/layouts/layout';
const Splash = () => {
  const [payNow, setPayNow] = useState(false);
  return (
    <Layout>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('./DentalIcon.png')}
          style={{height: 150, width: 150}}
          resizeMode="contain"
        />
        <Text style={{color: 'white', fontSize: 28, fontWeight: 'bold'}}>
          DentCheck
        </Text>
      </View>
    </Layout>
  );
};
export default Splash;
