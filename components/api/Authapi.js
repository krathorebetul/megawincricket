import React from 'react';
import {View, StyleSheet} from 'react-native';

const Authapi = () => {
    const [authdata,setauthdata]=useState('');
   
    var project_key = 'RS_P_1503626010074157069'
    var api_key = 'RS5:a11ab0552acdaee2a82e4857550b82b7'
    var request = require('request')
    var options = {
      method: 'POST',
      url: `https://api.sports.roanuz.com/v5/core/${project_key}/auth/`,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        api_key: `"${api_key}"`
      })
    
    }
    request(options,(error, response)=> {
      if (error) throw new Error(error)
      console.log(response.body)
      setauthdata(response);

      alert(options);
    })


    

    return (
        <View>
            <Text>
                {alert("hello data render="+options)}
            </Text>
        
        </View>
    );
}

const styles = StyleSheet.create({})

export default Authapi;
