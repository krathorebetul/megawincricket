import React from 'react';
import {View, StyleSheet} from 'react-native';

const Featurematchesapi = () => {
    var project_key = 'RS_P_1503626010074157069'
var token = 'YOUR_ACCESS_TOKEN'
var request = require('request')
var options = {
  method: 'GET',
  url: `https://api.sports.roanuz.com/v5/cricket/${project_key}/featured-matches/`,
  headers: {
    'rs-token': token
  }
}
request(options, function (error, response) {
  if (error) throw new Error(error)
  console.log(response.body)
})
    return (
        <View>
            
        </View>
    );
}

const styles = StyleSheet.create({})

export default Featurematchesapi;
