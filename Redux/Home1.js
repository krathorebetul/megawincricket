import React from 'react';
import {View, StyleSheet,Text,TouchableHighlight} from 'react-native';

import {useSelector,useDispatch} from 'react-redux';

import { useNavigation } from '@react-navigation/native';

import RazorpayCheckout from 'react-native-razorpay';

const Home1 = () => {
  const navigation=useNavigation();
    
const {name,age} = useSelector(state=>state.userReducer);
const {gname} = useSelector(state=>state.userReducer1);
const {megacontestmatchesdata} = useSelector(state=>state.megacontestuserReducer);

console.log("hellooooooooooo=====",megacontestmatchesdata);
const dispatch = useDispatch();
 const loadUserdata =()=>
 {
  navigation.navigate('Mydatashow');
}
const paymentLoad =()=>
{
       
    var options = {
      description: 'MWga Win Games',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_test_JEds0opddhyz8h', // Your api key
      amount: '5000',
      name: 'Mega Win',
      prefill: {
        email: 'krathore150985@gmail.com',
        contact: '9424778055',
        name: 'mega Software'
      },
      theme: {color: '#F37254'}
    }
    RazorpayCheckout.open(options).then((data) => {
      // handle success
      alert(`Success: ${data.razorpay_payment_id}`);
    }).catch((error) => {
      // handle failure
      alert(`Error: ${error.code} | ${error.description}`);
    });
  
}

    return (
        <View>
            <Text>
            hello home
                       
            <TouchableHighlight
                style = {styles.button}
                underlayColor= "white"
               onPress = {loadUserdata}
              >
              <Text
                  style={styles.buttonText}>
                  showdata
              </Text>
            </TouchableHighlight>
            <TouchableHighlight
                style = {styles.button}
                underlayColor= "white"
               onPress = {paymentLoad}
              >
              <Text
                  style={styles.buttonText}>
                  Payment
              </Text>
            </TouchableHighlight>
            </Text>
             <Text>  {name}</Text>
             <Text>  {age}</Text>
             <Text>{gname}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    buttonText: {
      fontSize: 18,
      color: '#111',
      alignSelf: 'center'
    },
    button: {
      height: 45,
      flexDirection: 'row',
      backgroundColor:'white',
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 10,
      marginTop: 10,
      alignSelf: 'stretch',
      justifyContent: 'center'
    }
  })

export default Home1;
