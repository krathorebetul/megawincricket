
import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableHighlight,TouchableOpacity, Image } from 'react-native';
import { firebase } from '@react-native-firebase/database';
import { useNavigation } from '@react-navigation/native';

import { useSelector, useDispatch } from 'react-redux';
import { setName, setMobileNumber, findLiveScoreApiDetails, get_teams_data } from '../Redux/action';
import mwlogo from '../components/Image/mwglogo.jpeg';
import RBSheet from 'react-native-raw-bottom-sheet';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';


const SignIn = () => {



  const navigation = useNavigation();
  const refRBSheet = useRef();

  const { name, mobilenumber } = useSelector(state => state.userReducer);

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(findLiveScoreApiDetails());
    dispatch(get_teams_data());

  }, []);

  // firebase.database().ref("cricketmodule").on('value',snapshot=>{   
  //       setstatedata({
  //         name:snapshot.val(),
  //         mobilenumber:snapshot.val()
  //       });
  //     });

  //   const {name} = statedata;
  const handleSubmit = () => {
    dispatch(setName(name));
    dispatch(setMobileNumber(mobilenumber));
    firebase.database().ref("cricketmodule").push({ name, mobilenumber }, (error) => {
      if (error) {
        alert("data not");
      }
      else {

        navigation.navigate('Matchcategory');
      }
    });
  }
  return (
    <View style={{ flex: 1, }}>
        <LinearGradient colors={['#191970','#000000']} style={{
      width:'100%', 
      flex:1
      
      
    }} >


      <Image source={mwlogo} style={{ width: 170, height: 170, borderRadius: 95, alignSelf: 'center', marginTop: '15%' }} />

      


      <View style={{ flexDirection: 'row', marginLeft: '7.5%', alignItems: 'center', marginTop: 20 }}>
        <Icon name="phone-iphone" size={35} color="#ffd700" />
        <Text
          style={{
            color: '#ffd700',
            fontSize: 18,
            fontWeight: '600',
            marginLeft: 10,
          }}>
          Mobile Number
        </Text>
      </View>
      <TextInput
        placeholderTextColor={'#000000'}
        style={{
          width: '85%',
          height: 45,
          marginTop: 8,
          backgroundColor: '#ffffff',
          alignSelf: 'center',
          elevation: 10,
          borderRadius: 5,
          paddingLeft: 25

        }}
        value={mobilenumber}
        placeholder='Enter mobile Number'
        onChangeText={(value) => dispatch(setMobileNumber(value))}
      />

      <TouchableHighlight
        style={styles.button}

        onPress={() => refRBSheet.current.open()}
      >
        <Text
          style={styles.buttonText}>
          Sign In
        </Text>
      </TouchableHighlight>
      
      <TouchableOpacity style={{alignSelf:'flex-end',marginRight:'9%',marginTop:15,}}
      onPress={()=>navigation.navigate('MyUi')}
      >
          <Text style={{
            color: '#ffd700',
            fontSize: 18,
            fontWeight: '600',
            marginLeft: 10,
          }}>Sign Up</Text>
      </TouchableOpacity>

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={300}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent"
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >

        <View style={{backgroundColor:'#f0f0f0'}}>
          <View style={{backgroundColor:'#191970',width:"90%",alignSelf:'center',height:40}}>
            <Text style={{color:'#ffd700',fontSize:25,fontWeight:'bold',alignSelf:'center',borderBottomWidth:3,borderBottomColor:'#ffd700'}}>
              OTP Verification
            </Text>
          </View>

          <View style={{ flexDirection: 'row', marginLeft: '7.5%', alignItems: 'center', marginTop: 20 }}>
            <Icon name="phone-iphone" size={35} color="#191970" />
            <Text
              style={{
                color: '#191970',
                fontSize: 18,
                fontWeight: '600',
                marginLeft: 10,
              }}>
              Enter OTP
            </Text>
          </View>
          <TextInput
            placeholderTextColor={'#191970'}
            style={{
              width: '85%',
              height: 45,
              marginTop: 8,
              backgroundColor: '#ffffff',
              alignSelf: 'center',
              elevation: 10,
              borderRadius: 5,
              paddingLeft: 25,
              fontSize:17

            }}
      
            placeholder='Enter OTP'
            
          />

          <TouchableHighlight
            style={[styles.button,{backgroundColor:'#ffd700'}]}
            onPress={()=>
              
              {
              refRBSheet.current.close();  
              navigation.navigate('Header')
              }
            }
          
          >
            <Text
              style={styles.buttonText}>
              Verify
            </Text>
          </TouchableHighlight>
        </View>
      </RBSheet>
      </LinearGradient>
    </View>


  );
}

const styles = StyleSheet.create({

  buttonText: {
    fontSize: 18,
    color: '#191970',
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  button: {
    height: 40,
    width: '85%',
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: '#FFFF33',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default SignIn;

