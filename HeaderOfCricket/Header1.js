import React,{useEffect,useState} from "react";
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";
import  Icon from 'react-native-vector-icons/dist/MaterialIcons';



const Header1 = () => {
  const [JSON_DATA, setJSON_DATA] = useState('');
  useEffect(() => {
    // async function fetchData() {
    //   fetch('https://gamesdetail-a893a-default-rtdb.firebaseio.com/game.json')
    //     .then((response) => response.json())
    //     .then((responseJson) => {
    //       setJSON_DATA(responseJson);
          
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // }
    // fetchData();

  }, []);


  return (
    <View style={styles.container}>
      <FlatList
        data= {JSON_DATA}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
                    return (
            <View style={styles.listItem}>
              <TouchableOpacity style={{
                 alignItems:'center',
                 paddingLeft:8
              }}>
              <Icon name={item.pathlogo} size={35}/>
              <Text style={styles.gname}>CRICKET</Text>
              </TouchableOpacity>
            </View>
          );
        }}
        keyExtractor={item=>item.id}
      />
    </View>
  );
}
export default Header1;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    elevation:10,

 
  },
  listItem: {
    backgroundColor: "white",   
    padding: 10,
    
  },

  gname:
  {
    color:'#006400',
    fontWeight:'bold'

  }
});
