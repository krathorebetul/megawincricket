import React, { useEffect, useState } from 'react';
import ItemRender from './ItemRender';
import {  View, FlatList} from 'react-native';
 
const  MyMatches = ()=> {

  const [JSON_DATA, setJSON_DATA] = useState('');
  useEffect(() => {
    async function fetchData() {
      fetch('https://mytestdata-dd585-default-rtdb.firebaseio.com/myMatch.json')
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
   return (
    <View style={{backgroundColor:'rgba(52, 52, 52, alpha)'}}>
       <FlatList
       horizontal
        data={JSON_DATA}
        renderItem={({ item }) => <ItemRender title={item} />}
        keyExtractor={item => item.id}
        ListEmptyComponent={null}
        nestedScrollEnabled={true}
      />

    </View>
  );
}
export default MyMatches;
