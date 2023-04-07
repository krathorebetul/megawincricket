import React, { useState } from "react";
import {  useNavigation } from '@react-navigation/native';
import { Button, Text, View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import Modal from "react-native-modal";
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import DataofJson from '../components/json/DataofJson.json';
import RazorpayCheckout from 'react-native-razorpay';

const  Head=() =>{
  const [isModalVisible, setModalVisible] = useState(true);
  const navigation=useNavigation();
 

  const noteData = ({ item }) => {


    return (

      <View style={styles.flatdata}>
        <View style={styles.flat1}>
          <View>
              <Text style={styles.text}>{item.text1}</Text>
              <Text style={styles.money}>{item.amount2}</Text>
          </View>
          <View>
              <Icon name="info" size={25} color='black' />
          </View>
        </View>

        <View style={styles.flat1}>
            <View>
                 <Text style={styles.text}>{item.text2}</Text>
                 <Text style={styles.money}>{item.amount3}</Text>
            </View>
            <View>
                <Icon name="info" size={25} color='black' />
            </View>
        </View>

        <View style={styles.flat1}>
            <View>
                <Text style={styles.text}>{item.text3}</Text>
                <Text style={styles.money}>{item.amount4}</Text>
            </View>
            <View>
                <Icon name="info" size={25} color='black' />
            </View>
        </View>

        <TouchableOpacity style={styles.modelfooter}
        onPress={()=>navigation.navigate('Straggeredcashbonus')}
        >

          <Icon style={styles.footericon} name="shop-two" size={20} color='black'/>
          <Text style={styles.maximum}>Maximum usable Cash Bonus per month = 10% {'\n'}of Entry 
          fees know more</Text>
          <Icon name="close" size={20} color='black'/>
        </TouchableOpacity>
      </View>


    )
  }
  const paymentLoad =()=>
{
       
    var options = {
      description: 'MWga Win Games',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_test_JEds0opddhyz8h', // Your api key
      amount: '5000',
      name: 'Mega Win',
      prefill: {
        email: 'krathore150985@gmail.com',
        contact: '9424778055',
        name: 'mega Software'
      },
      theme: {color: '#F37254'}
    }
    RazorpayCheckout.open(options).then((data) => {
      // handle success
      alert(`Success: ${data.razorpay_payment_id}`);
    }).catch((error) => {
      // handle failure
      alert(`Error: ${error.code} | ${error.description}`);
    });
  
}
  return (
    <View style={{ flex: 1 }}>



      <Modal
      style={{width:'100%',alignSelf:'center',height:250}}
      isVisible={isModalVisible}
      >
        <View style={{ flex: 1, backgroundColor: 'white'}}>
          <Text style={styles.total}>TOTAL AMOUNT</Text>
          <Text style={styles.amount}>Rs. 54</Text>
          <TouchableOpacity style={styles.addcash}  onPress = {paymentLoad} >
            <Text style={styles.addtxt}>Add Cash</Text>
          </TouchableOpacity>
          <View>
            <FlatList
              data={DataofJson.anuj}
              renderItem={noteData}
              keyExtractor={item => item.id}
            />
          </View>
          <Button title="Close" onPress={()=>navigation.goBack()} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  header:
  {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    backgroundColor: '#b22222',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  logo:
  {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white'
  },


  icon:
  {
    color: 'white'
  },

  total: {
    textAlign: 'center'
  },
  amount: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center'
  },

  addcash: {
    height: 30,
    width: 75,
    backgroundColor: 'green',
    borderRadius: 3,
    alignSelf: 'center',
    marginTop: 10,
    padding: 5
  },

  addtxt: {
    color: 'white',
    fontWeight: 'bold'
  },

  flatdata: {
    height:300,
    width: "95%",
    backgroundColor: 'white',
    marginTop: 15
  },

  flat1:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    borderTopWidth:2,
    borderTopColor:'grey',
    marginLeft:15
  },

  text: {
    marginTop:10,
    width:'100%',
    margin:3,
    color:"grey"
  },
  money: {
    marginBottom:10,
    marginLeft:5,
    fontWeight: 'bold',
    color:'black'
  },

  modelfooter:{
    height:60,
    width:'100%',
    flexDirection:'row',
    borderWidth:2,
    borderColor:'green',
    borderRadius:10,
    alignItems:"center",
    marginLeft:8,
    justifyContent:'space-around'
  },

  maximum:{
    fontSize:12,
    color:'black'
  },

  footericon:{
    
  }
})

export default Head;