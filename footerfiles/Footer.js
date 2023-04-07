import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

import { useNavigation } from '@react-navigation/native';

const Footer = () => {
    const navigation =useNavigation();
    return (
        <View style={{
             flexDirection: 'row', 
             justifyContent: 'space-around', 
             backgroundColor: 'white', 
             height: 70,
             alignItems: 'center', 
             elevation:80,
             borderTopWidth:1,
             borderTopColor:'#000000'
             }}>


            <TouchableOpacity style={{ alignItems: 'center' }} 
               onPress={()=>{navigation.navigate('Header')}}
            >
                <Icon style={{}} color="#191970" name="home" size={40} />
                <Text style={{ color: 'black', 
                fontSize: 15, 
                fontWeight: 'bold' ,
                textShadowColor:'#000000',
                textShadowOffset:{width:10, height:10}
                }}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ alignItems: 'center' }}
             onPress={()=>{navigation.navigate('Footermymatchesdetail')}}
            >
                <Icon color="#191970" name="emoji-events" size={40} />
                <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>My Matches</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ alignItems: 'center' }}
            onPress={()=>{navigation.navigate('MegaContestWinnersPoolDataFlatlist')}}
            >
                <Icon color="#191970" name="military-tech" size={40} />
                <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>Winner</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ alignItems: 'center', }}>
                <Icon color="#191970" name="question-answer" size={40} />
                <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>Chat</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Footer;
