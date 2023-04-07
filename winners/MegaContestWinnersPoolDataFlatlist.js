import React, { useEffect, useState } from 'react';

import {  View, StyleSheet, FlatList,TouchableOpacity, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import Header1 from '../HeaderOfCricket/Header1';
import PoolContestWinnerList from '../components/PoolContestWinnerList';
 import MegaContestWinnerHeader from './MegaContestWinnerHeader';
export default  MegaContestWinnersPoolDataFlatlist = ()=> {

  const [JSON_DATA, setJSON_DATA] = useState('');



  useEffect(() => {
    async function fetchData() {
      fetch('https://megacontestwinnerspooldata-default-rtdb.firebaseio.com/Winners.json')
        .then((response) => response.json())
        .then((responseJson) => {
          setJSON_DATA(responseJson);
          
        })
        .catch((error) => {
          console.error(error);
        });
    }
    fetchData();

  }, []);

  const ItemRender = ({ title }) => (
    <View style={styles.myviewContest}>
    
      <TouchableOpacity>
        <View style={[styles.fancode,{flexDirection:"row",justifyContent:"space-between"}]}>
        <Text style={styles.fancode}>{title.typeMatch}</Text>
        <Text style={styles.fancode}>{title.Date}</Text>
        </View>
        <View style={styles.teamView1}>
          <Text style={styles.fullname}>{title.teamName_One}</Text>
          <Text style={styles.fullname}>{title.teamName_Two} </Text>
        </View>

        <View style={styles.teamView}>
          <Text style={styles.shortname}>{title.sortName_One}</Text>

          <Text style={styles.shortname}>Vs</Text>

          <Text style={styles.shortname}>{title.sortName_Two}</Text>

        </View>

        <View style={styles.bottomview}>
          <Text style={styles.fullname}>{title.pricePool} Lakhs</Text>
        </View>
        <View style={styles.winnerRankcss} >
          <PoolContestWinnerList />
        </View>
      </TouchableOpacity>
 </View>
  );

   
 

  return (
    <View>
      
      <View>
           <MegaContestWinnerHeader/>
           <Header1/>
      </View>
      <View style={{flexDirection:"row"}}>
          <Text style={{marginLeft:"5%",fontSize:18,
          fontWeight:"bold",textShadowColor:'#000000',
          textShadowOffset:{width:1,height:1},
          textShadowRadius:2,marginRight:60}}>Mega Contest Winners</Text>
        <View>
          <Text>Filter by Series</Text>
          <Icon/>
        </View>
        
      </View>
      <View>
          <Text style={{marginLeft:40,fontSize:18}}>Recent Matches</Text>
        </View>
       <FlatList
       
        data={JSON_DATA}
        renderItem={({ item }) => <ItemRender title={item} />}
        keyExtractor={item => item.id}
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
    
    myviewContest:
    {
        width:'96%',
        height:380,
        backgroundColor:'white',
        elevation:30,
        alignSelf:'center',
        borderRadius:13,
        margin:10,
        marginTop:10,
       
      
      
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
        color:'#006400'
    },
    winnerRankcss:{
      width:"100%",
      height:240,
      marginTop:0,
      marginBottom:10,
     
    }
    
    
    
    
    })