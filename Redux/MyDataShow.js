import React from 'react';
import {View, StyleSheet,Text} from 'react-native';


import {useSelector} from 'react-redux';

const Mydatashow = () => {
    
    const {name,age} = useSelector(state=>state.userReducer);
  
    const {megacontestmatchesdata} = useSelector(state=>state.megacontestuserReducer);
    return (
        <View>
            <Text>{name}</Text>
            <Text>{age}</Text>
           
        </View>
    );
}

const styles = StyleSheet.create({})

export default Mydatashow;
