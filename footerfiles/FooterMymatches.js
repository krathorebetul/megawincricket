import React, { useEffect, useState } from 'react';

import {  View, StyleSheet, FlatList,TouchableOpacity, Text } from 'react-native';

 import { useNavigation } from '@react-navigation/native';

 import {useSelector,useDispatch} from 'react-redux';
 import {get_upcoming_matches_data} from '../Redux/action';

export default  FooterMymatches = () => {

  const {upcomingmatchesdata} = useSelector(state=>state.upcomingcontestuserReducer);
 
  const dispatch =useDispatch();
  const navigation =useNavigation();
  console.log(upcomingmatchesdata);
  useEffect(() => { 
                       dispatch(get_upcoming_matches_data())
                    }, []);

  return (
    <View>
      <Text style={styles.upcomingmatches}>My Matches</Text>
       <FlatList
        data={upcomingmatchesdata}
        renderItem={({ item }) =>(

            <View style={styles.myview}>             
            <TouchableOpacity onPress={()=>{navigation.navigate('MegaContext')}}>
             
                 <Text  style={styles.fancode}>{item.typeMatch}</Text>
                 <View style={styles.teamView1}>
                 <Text style={styles.fullname}>{item.teamName_One}</Text>
                 <Text style={styles.fullname}>{item.teamName_Two}</Text>
                 </View>
  
                 <View style={styles.teamView}>
                 <Text style={styles.shortname}>{item.sortName_One}</Text>
  
                 <Text style={styles.shortname}>{item.time}</Text>
                 
                 <Text style={styles.shortname}>{item.sortName_Two}</Text>
               
                 </View>
                 
               <View style={styles.bottomview}>  
                   <Text style={styles.totalprice}>{item.price}</Text>
               </View>
     </TouchableOpacity>
  </View>
        )}
        // keyExtractor={item => item.id}
        ListEmptyComponent={null}
      />

    </View>
  );
}
const styles = StyleSheet.create({
    fancode:
    {
        padding:10,
        paddingLeft:20,
        borderBottomWidth:0.5,
        borderBottomColor:'brown',
        backgroundColor:'#006400',
        color:'white',
        fontSize:16,
        fontWeight:'bold',
        textShadowOffset:{width:5,height:2},
        textShadowColor:'black',
        textShadowRadius:10,
        borderTopRightRadius:15,
        borderTopLeftRadius:15
        
    },
    
        myview:
    {
        width:'90%',
        height:140,
        backgroundColor:'white',
        elevation:30,
        alignSelf:'center',
        borderRadius:13,
        margin:10
    },
    teamView1:{
        width:'90%',
        paddingTop:6,
        flexDirection:'row',
        justifyContent:'space-between',
        alignSelf:'center'
    },
    teamView:{
        width:'80%',
        flexDirection:'row',
        paddingTop:6,
    
        justifyContent:'space-between',
        alignSelf:'center'
    },
    
    fullname:{
        color:'black'
    },
    
    shortname:
    {
        color:'black',
        fontSize:20,
        fontWeight:'bold'
    },
    
    bottomview:{
        width:'100%',
        height:30,
        backgroundColor:'#f0f0f0',
        marginTop:12,
        flexDirection:'row',
        paddingLeft:15,
        alignItems:'center',
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15
    },
    
    wonmoney:
    {
        color:'green'
    },
    upcomingmatches:
    {
               fontSize:20,
               fontWeight:'bold',
               color:'#000000',
               marginLeft:'5%',
               marginTop:10,
               
    }
      
    
    })