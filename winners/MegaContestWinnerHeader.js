import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

import { useNavigation } from '@react-navigation/native';

const MegaContestWinnerHeader = () => {
    
    const navigation=useNavigation();
    return (
        <View style={styles.header}>
            <TouchableOpacity style={{marginLeft:20}}
            onPress={()=>navigation.goBack()}
            >
                <Icon style={styles.icon} name="arrow-back" size={35} />
            </TouchableOpacity>
            <Text style={styles.logo}>Winners</Text>

            
            <TouchableOpacity onPress={()=>navigation.navigate('Head')}>
                <Icon style={styles.icon} name="account-balance-wallet" size={35} />
            </TouchableOpacity>


        </View>
    );
}

const styles = StyleSheet.create({
    header:
    {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        backgroundColor: '#006400',
        
        alignItems: 'center'
    },

    logo:
    {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginLeft:20,
        marginRight:200
    },

    icon:
    {
        color: 'white'
    }
})

export default MegaContestWinnerHeader;
