import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View,StyleSheet,TouchableOpacity,Text} from 'react-native';

const ItemRender = ({ title }) => {
    const navigation =useNavigation();
    return(
    <View style={styles.myview}>
    
                   
                         <TouchableOpacity onPress={()=>{navigation.navigate('Showdata',
                         {
                             typeMatch:title.typeMatch,
                             teamName_One:title.teamName_One
                            

                         })}}>
                              <Text  style={styles.fancode}>{title.typeMatch}</Text>
                              <View style={styles.teamView1}>
                              <Text style={styles.fullname}>{title.teamName_One}</Text>
                              <Text style={styles.fullname}>{title.teamName_Two} </Text>
                              </View>

                              <View style={styles.teamView}>
                              <Text style={styles.shortname}>{title.sortName_One}</Text>

                              <Text style={styles.shortname}>{title.time}</Text>
                              
                              <Text style={styles.shortname}>{title.sortName_Two}</Text>
                            
                              </View>
                              
                            <View style={styles.bottomview}>  
                                <Text style={styles.totalprice}>{title.price}</Text>
                            </View>
                  </TouchableOpacity>
 </View>
    );
    };
  const styles = StyleSheet.create({
    fancode:
    {
        padding:10,
        paddingLeft:20,
        borderBottomWidth:0.5,
        borderBottomColor:'#000000',
        backgroundColor:'red',
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
        width:300,
        height:150,
        backgroundColor:'#FFFFFF',
        elevation:30,
        alignSelf:'center',
        borderRadius:13,
        margin:10,
        marginTop:5,
       
      
      
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
        color:'#000000'
    },
    totalprice:{
        color:'#FFFFFF',
        textShadowOffset:{width:5,height:2},
        textShadowColor:'black',
        textShadowRadius:10,
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
        backgroundColor:'red',
        marginTop:12,
        flexDirection:'row',
        paddingLeft:15,
        alignItems:'center',
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15
    }, 
    
    
    })
  export default ItemRender;
  