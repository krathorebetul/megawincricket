import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
const Dream = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerContent}>

        <View>
          <Icon style={styles.icons} name="clear" size={35} color="white" />
        </View>
        <View>
          <Text style={styles.shopName}>SONU COBRAS 22...</Text>
        </View>
      </View>
      <View style={styles.lain}><Text></Text></View>
      <View>

      </View>
      <View style={styles.buttom}>
        <Text style={styles.butt}>Playes{"\n0"}/11</Text>
        <Text style={styles.butt4}>WEP</Text>
        <Text style={styles.butt3}>0:0</Text>
        <Text style={styles.butt2}>WEP</Text>
        <Text style={styles.butt1}>Credits{"\n"}100.0</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 120,
    backgroundColor: "black",
   
  },
  shopName: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    marginLeft:10
  },
  headerContent: {
    flexDirection: "row",
   
    alignItems: "center",
    marginTop: 15
  },
  lain: {
    width: '95%',
    height: 1,
    backgroundColor: 'red',
    marginTop: 10,
    marginLeft:10

  },
  buttom: {
    width: '100%',
    color: "white",
    flexDirection: "row"
  },
  butt: {
    color: "white",
    fontSize: 15,
    marginTop:10,
    marginLeft:10
  },
  butt1: {
    color: "white",
    fontSize: 15,
    marginLeft:100,
    marginTop:10
  },
  butt2: {
    width: 40,
    height: 20,
    backgroundColor: 'red',
    color: "white",
    fontSize: 15,
    marginTop:12,
    marginLeft:10,
    
  },
  butt3: {
    color: "white",
    fontSize: 15,
    marginTop:12,
    marginLeft:10,
  },
  butt4: {
    width: 40,
    height: 20,
    backgroundColor: 'blue',
    color: "white",
    fontSize: 15,
    marginLeft:70,
    marginTop:12
  },



})

export default Dream;
