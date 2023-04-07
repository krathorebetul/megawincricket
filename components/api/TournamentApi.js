import React from 'react';
import {View, StyleSheet,Text} from 'react-native';

const TournamentApi = () => {
    var project_key = 'RS_P_1503626010074157069';
    var token = '2s153724147994715s1382323116700734998';
var tournament_key = 'ausind_2020'
var request = require('request')
var options = {
  method: 'GET',
  url: `https://api.sports.roanuz.com/v5/cricket/${project_key}/tournament/${tournament_key}/points/`,
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
               <Text>hello</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default TournamentApi;
