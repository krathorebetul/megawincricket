import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ItemComponent from '../components/ItemComponent';

import database from '@react-native-firebase/database';


export default function List() {

const activeUser = 'neel';

let itemsRef = database().ref(activeUser);

  const [itemsArray, setItemsArray] = React.useState([]);
  React.useEffect(() => {
    itemsRef.on('value', snapshot => {
      let data = snapshot.val();
      const Hello = Object.values(data);
      setItemsArray(Hello);
      console.log(Hello);
    });
  }, []);

  return (
    <View style={styles.container}>
      {itemsArray.length > 0 ? (
        <ItemComponent Hello={itemsArray} />
      ) : (
        <Text>Sachin</Text>
      )}

      <Text>
          ankit
          hello
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ebebeb',
  },
});