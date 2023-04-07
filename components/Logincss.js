import React from "react";
import { StyleSheet } from  'react-native'


const styles = StyleSheet.create(
    {

        header:
        {
            backgroundColor:'red',
            height:50,
            flexDirection:'row',
            alignItems:'center'
            
        },
        headertext:
        {
            color:'white',
            fontSize:23,
            fontWeight:'bold',
            marginLeft:20,
        },
        you:
        {
            color:'black',
            fontSize:16,
            
        },
        header1:
        {
            backgroundColor:'white',
            width:'100%',
            height:50,
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-around',
            color:'black'
        },
        flatListbox:
        {
            borderBottomWidth: 1,
            borderBottomColor: "grey",
            flexDirection: "row",
            justifyContent: "space-evenly",
            backgroundColor:'white',
            marginTop:10,
            color:'black',
            

        }







    }
);

export default styles;