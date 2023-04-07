import React from "react";
import { StyleSheet } from  'react-native'


const styles = StyleSheet.create(
    {

        header:
        {
            backgroundColor:'#006400',
            height:50,
            flexDirection:'row',
            alignItems:'center'
            
        },
        headertext:
        {
            color:'white',
            fontSize:23,
            fontWeight:'bold',
            marginLeft:20
        },
        you:
        {
            color:'#000000',
            fontSize:16,
            fontWeight:'bold'
        },
        header1:
        {
            backgroundColor:'white',
            width:'100%',
            height:50,
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-around'
        },
        flatListbox:
        {
            borderBottomWidth: 1,
            borderBottomColor: "grey",
            flexDirection: "row",
            justifyContent: "space-evenly"

        }







    }
);

export default styles;