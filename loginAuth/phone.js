import React from 'react';
import {View ,
    SafeAreaView,
    Text,
    TouchableOpacity,
    TextInput,
    ActivityIndicator,
    StatusBar} 
    from 'react-native';


import auth from '@react-native-firebase/auth';



const phone = () => {
    const [phoneNumber, setPhoneNumber] = React.useState('')
    const [loading, setLoading] = React.useState(false)
    const [sentCode, setSentCode] = React.useState(null)
    const [code, setCode] = React.useState('')
  
    // Replace `URL` with LocalTunnel URL in the format : https://{subdomain}.loca.lt
   // const URL = 'https://wonderful-lionfish-40.loca.lt'
         
    // we'll handle the SIMCheck API Call and Firebase Phone Authentication in the function below
    const onPressHandler = async () => {
        setLoading(true)
        try {
          console.log('Firebase: signInWithPhoneNumber')
          const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
          console.log('Firebase: signInWithPhoneNumber result', confirmation)
      
          setLoading(false)
          setSentCode(confirmation)
        } catch (e) {  
          setLoading(false)
          errorHandler({
            title: 'Something went wrong',
            message: e.message,
          })
        }
      }


      
      
  
    // we'll handle verifying the received OTP in the function below
    const confirmationHandler = async () => {
  try {
    setLoading(true)

    const resp = await sentCode.confirm(code)
    setLoading(false)

    if (resp) {
      alert('Successfully logged in', '✅', [
        {
          text: 'Close',
          onPress: () => console.log('Alert closed'),
        },
      ])
    }
  } catch (e) {
    console.error(e)
    setLoading(false)
    // set `sentCode` to null resetting the UI
    setSentCode(null)
    errorHandler({
      title: 'Something went wrong',
      message: e.message,
    })
  }
}
  

const errorHandler = ({ title, message }) => {
    return alert(title, message, [
      {
        text: 'Close',
        onPress: () => console.log('Alert closed'),
      },
    ])
  }
    return (
      <SafeAreaView style={{flex:1,alignItems:'center'}}>
        <StatusBar barStyle="light-content" />
        <Text >tru.ID + Firebase Auth</Text>
        {sentCode ? (
          <View>
            <TextInput
            
              placeholder="OTP"
              placeholderTextColor="#d3d3d3"
              onChangeText={(text) => setCode(text)}
              value={code}
            />
            {loading ? (
              <ActivityIndicator
                size="large"
                color="#00ff00"
              />
            ) : (
              <TouchableOpacity
                onPress={confirmationHandler}
              >
                <Text>Verify</Text>
              </TouchableOpacity>
            )}
          </View>
        ) : (
          <View>
            <TextInput
              keyboardType="phone-pad"
              placeholder="Enter Phone Number "
              placeholderTextColor="#d3d3d3"
              onChangeText={(text) => setPhoneNumber(text.replace(/\s+/g,''))}
            />
  
            {loading ? (
              <ActivityIndicator
                size="large"
                color="#00ff00"
              />
            ) : (
              <TouchableOpacity onPress={onPressHandler} >
                <Text >Login</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      </SafeAreaView>
    )
  }
  export default phone;