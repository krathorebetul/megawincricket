import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';



const FooterMyMatchesDetailHeader = () => {
const navigation=useNavigation();
    return (
        <View style={styles.header}>
            <TouchableOpacity
            onPress={()=>navigation.goBack()}
            >
                <Icon style={styles.icon} name="arrow-back" size={35} />
            </TouchableOpacity>
            <View style={{flexDirection:'row',marginLeft:-25}}>
                
                <Text style={styles.logo}> My Matches </Text>

              
            </View>
            
              
            


        </View>
    );
}

const styles = StyleSheet.create({
    header:
    {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        backgroundColor: '#006400',
       
        alignItems: 'center'
    },

    logo:
    {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
        textShadowColor:"#000000",
        textShadowOffset:{width:1,height:1},
        textShadowRadius:7,
        marginLeft:40
    },

    icon:
    {
        color: 'white',
        marginLeft:20
    }
})

export default FooterMyMatchesDetailHeader;
