import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Layout from '../components/layouts/layout';
const Login = ({navigation}) => {
  return (
    <Layout>
      <View style={{flex: 1, paddingTop: 20}}>
        <Text
          style={{
            marginTop: 20,
            color: 'white',
            // fontWeight: 'bold',
            fontSize: 40,
            textAlign: 'center',
          }}>
          DentCheck
        </Text>
        <Text
          style={{
            marginTop: 10,
            color: 'white',
            // fontWeight: 'bold',
            fontSize: 20,
            textAlign: 'center',
          }}>
          Please Enter the following information
        </Text>
        <View style={{paddingHorizontal: 20}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: '15%',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 18,
                marginRight: 20,
              }}>
              Full Name
            </Text>
            <TextInput
              style={{
                borderWidth: 1,
                backgroundColor: '#8eabdc',
                width: '55%',
                height: 40,
                borderColor: '#2b5695',
              }}
            />
          </View>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 20,
              marginRight: 20,
              marginVertical: 10,
              marginLeft: 35,
            }}>
            Or
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              // marginTop: '15%',
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 18,
                marginRight: 20,
              }}>
              Phone Number
            </Text>
            <TextInput
              keyboardType="phone-pad"
              style={{
                borderWidth: 1,
                backgroundColor: '#8eabdc',
                width: '55%',
                height: 40,
                borderColor: '#2b5695',
              }}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={{
            width: '60%',
            height: 50,
            backgroundColor: 'white',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: '15%',
          }}>
          <Text style={{color: '#2b5695', fontWeight: 'bold', fontSize: 18}}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};
export default Login;
