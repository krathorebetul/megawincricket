import React from 'react';
import {View,Text, StyleSheet,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

const Opemfancode = () => {
    return (
        <View style={{justifyContent:"center",alignItems:"center"}}>
            <Text style={{color:"black",
        fontSize:20}}>Help us personalise Megha11 for you!</Text>
            <Icon name="person" size={30} color="red" />
            <Text>Allow us to see if you have other sports apps like  fancode to improve your dream11 experience. </Text>
            <TouchableOpacity
            style={{
                color:"white",
                backgroundColor:"green",
                borderWidth:1,
                borderColor:"green",
                borderRadius:20
            }}
            >
                <Text>SURE,MAKE DREAM11 BETTER</Text>
            </TouchableOpacity>

            
        </View>
    );
}

const styles = StyleSheet.create({})

export default Opemfancode;
