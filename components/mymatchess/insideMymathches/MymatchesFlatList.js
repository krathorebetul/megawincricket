import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity , FlatList} from "react-native";

const DATA = [
  {
    id: '1',
    title: 'My Contests (1)',
  },
  {
    id:'2',
    title: 'My Teams (1)',
  },
  {
    id: '3',
    title: 'Commenntary',
  },
  {
    id: '4',
    title: 'Scorecard',
  },
  {
    id: '5',
    title: 'Stats',
  },
];


const MymatchesFlatList = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
  const Item = ({ title }) => {
    return(
    <View style={styles.item}>
      <TouchableOpacity style={{
        padding:10,
        borderBottomWidth:3,
        borderBottomColor:"red"
      }}>
            <Text>{title}</Text>
      </TouchableOpacity>
    </View>
    );
    }

  return (
    <View style={styles.container}>   
      <View
      style={{
        flex:1      
      }}>
        
      <FlatList
        data={DATA}
        style={{
          flex:1,
          backgroundColor:'white',
          padding:20
        }}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={item => item.id}  
      />
    
    
    </View>



    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  black: {
    width: "100%",
    height: 230,
    backgroundColor: "black",
  },
  text: {
    color: "white"
  },
  pts:{
    color: "white",
    borderWidth:1,
    borderColor:"white",
    width:30,
    height:30,
    borderRadius:30,
    justifyContent:"center"
  


  }

});
export default MymatchesFlatList;