import React, { useState,useEffect } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { firebase } from '@react-native-firebase/database';
import { useNavigation } from '@react-navigation/native';



const RealtimeDataBase = () => {
    const navigation = useNavigation();

  var loadFirebase = '';
  const [state, setState] = useState(initialState);

  const handleChange = (name, value) => {
    setState({ ...state, [name]: value });

  }
  const { name, mobilenumber } = state;

  const handleSubmit = () => {
    if (!name || !mobilenumber) {
      alert("Please Enter Detials")
    }
    else {
      dataInsert();
    }
  }


  const dataInsert = () => {
    console.log(state)
    loadFirebase = firebase.database().ref(name);
    console.log(loadFirebase);
    loadFirebase.set(state, (err) => {
      if (err) {
        alert("Data Not Insert");
      }
      else {
        alert(" Data Saved ");
      }

    });
  }

//   const getData = () => {
//     firebase.database().ref(`Hello`).on('value', snapshot => {
//         let responselist = Object.values(snapshot.val())
//         setData(responselist)
//         console.log(snapshot.val())
//         setLoading(true);
//     });
//     }
    
//     useEffect(() => {
//         alert(getData());
//       getData();
//     }, []);

  return (
    <View>
      <Text
        style={{
          color: 'red',
          fontSize: 40,
          fontWeight: 'bold',
          marginTop: '30%',
          paddingLeft: 40
        }}>
        Welcome
      </Text>
      <TextInput

        value={state.name}
        onChangeText={(text) => handleChange('name', text)}
        style={{
          width: '80%',
          height: 40,
          alignSelf: 'center',
          backgroundColor: 'white',
          elevation: 5,
          paddingLeft: 20,
          marginTop: 20
        }}
        placeholder='Enter Name'>

      </TextInput>


      <TextInput

        value={state.mobilenumber}
        onChangeText={(text) => handleChange('mobilenumber', text)}
        style={{
          width: '80%',
          height: 40,
          alignSelf: 'center',
          backgroundColor: 'white',
          elevation: 5,
          paddingLeft: 20,
          marginTop: 20
        }}
        placeholder='Enter Your mobilenumber'>

      </TextInput>
      <TouchableOpacity

        onPress={handleSubmit}
        style={{
          width: '40%',
          height: 35,
          backgroundColor: 'red',
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          marginTop: 20
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold'
          }}>
          Save
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={{alignSelf:'center',backgroundColor:'#ff0000',padding:3,marginTop:20}}
      onPress={()=>navigation.navigate('UserList')}
      >
          <Text style={{color:'#ffffff',}}>
              See User 

          </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({})

export default RealtimeDataBase;
