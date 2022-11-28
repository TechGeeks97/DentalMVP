import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Layout from '../src/components/layouts/layout';
const Home = () => {
  const [payNow, setPayNow] = useState(false);
  return (
    <Layout>
      <ScrollView>
        <View style={{flex: 1, paddingTop: 20}}>
          <Text
            style={{
              marginTop: 20,
              color: 'white',
              // fontWeight: 'bold',
              fontSize: 40,
              textAlign: 'center',
              marginBottom: '8%',
            }}>
            DentCheck
          </Text>
          {payNow && (
            <>
              <Text
                style={{
                  marginTop: 20,
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 25,
                  textAlign: 'center',
                  marginBottom: '2%',
                }}>
                CONFIRMATION OF PAYMENT
              </Text>
              <Text
                style={{
                  marginTop: 5,
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 20,
                  textAlign: 'center',
                  marginBottom: '8%',
                }}>
                Received 12/11/2022 8:45AM
              </Text>
            </>
          )}
          <Text
            style={{
              marginTop: 10,
              color: 'white',
              fontWeight: 'bold',
              fontSize: 18,
              textAlign: 'center',
            }}>
            John Smith
          </Text>
          <Text
            style={{
              marginTop: 10,
              color: 'white',
              fontWeight: 'bold',
              fontSize: 18,
              textAlign: 'center',
            }}>
            12/11/2022 9AM
          </Text>
          <Text
            style={{
              marginTop: 20,
              color: 'white',
              fontWeight: 'bold',
              fontSize: 18,
              textAlign: 'center',
            }}>
            Student Provider: W.Smith
          </Text>

          {!payNow && (
            <View style={{marginTop: 30}}>
              <Text
                style={{
                  marginTop: 20,
                  color: 'white',
                  // fontWeight: 'bold',
                  fontSize: 22,
                  textAlign: 'center',
                }}>
                Balance Due: $95.00
              </Text>
            </View>
          )}
          {payNow && (
            <View style={{marginTop: 30}}>
              <Text
                style={{
                  marginTop: 20,
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 25,

                  textAlign: 'center',
                }}>
                CHAIR 67
              </Text>
            </View>
          )}
          {!payNow && (
            <TouchableOpacity
              style={{
                height: 150,
                width: 150,
                borderRadius: 150,
                borderWidth: 1,
                borderColor: 'white',
                alignSelf: 'center',
                marginTop: 40,

                //   justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                setPayNow(true);
              }}>
              <Text
                style={{
                  marginTop: 20,
                  color: 'white',
                  // fontWeight: 'bold',
                  fontSize: 22,
                  marginTop: 60,
                  textAlign: 'center',
                }}>
                Pay Now
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </Layout>
  );
};
export default Home;
