import React from 'react';
import { View, StyleSheet, Text,Button } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
const AmountAddedConfirmation = () => {
    return (
        <View style={styles.main}>
            <View style={styles.main1}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ marginTop: 20, marginLeft: 10, fontSize: 20, fontWeight: 'bold',color: 'black', }}>CONFIRMATION</Text>
                    <Icon style={styles.icons} name="clear" size={30} color="grey" />
                </View>
                <Text style={{  marginTop: 3, marginLeft: 12, fontWeight: 'bold' }}>Amount Added(Unutillised)+Winnigs=$25</Text>
                <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 20 }}>
                    <Text style={{ fontWeight: 'bold' }}>Entry</Text>
                    <Icon name="attach-money" size={20} color="black" style={{ marginLeft: 200 }} />
                    <Text style={{ fontWeight: 'bold' }}>17</Text>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 20 }}>
                    <Icon name="card-giftcard" size={21} color="red" style={{}} />
                    <Text style={{ fontWeight: 'bold', marginLeft: 10,color: 'black', }}>Usable Cash Bounus</Text>
                    <Icon name="error-outline" size={20} color="blue" style={{ marginLeft: 10 }} />
                    <Icon name="attach-money" size={20} color="black" style={{ marginLeft: 45 }} />
                    <Text style={{ fontWeight: 'bold', fontSize: 17 }}>-0</Text>
                </View>
                <View style={{width:'100%', backgroundColor:'grey',height:2,marginTop:20}}>
                    <Text></Text>
               </View>
               <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 17, }}>
                    <Text style={{ fontWeight: 'bold',color:'green' }}>To Pay</Text>
                    <Icon name="attach-money" size={20} color="green" style={{ marginLeft: 200 }} />
                    <Text style={{ fontWeight: 'bold',color:'green' }}>17</Text>
                </View>
                <View style={styles.text}>
                    <Text style={{fontSize:10,fontWeight:'bold',color:'black'}}>
                        By joinning this contest, you accept Dream11 T&C's and{"\n"}
                        confirm that you are not resident of Andhra Pradesh,{"\n"}
                        Assam, Nagaland ,Odisha,Sikkim, or Telangana. i also agree{"\n"}
                        to be contacted by Dream11 and their partners.
                     </Text>
                </View>
                <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
                  <Button
                  title='JOIN CONTEST'
                  color='green'
                  borderRadius="20"
                  onPress={() =>
                     alert(' successfully join the contest')

                       }

                  />
                </View>


            </View >

           
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        width: "100%",
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: "black"

    },
    main1: {
        width: '80%',
        height: "50%",
        backgroundColor: "white",
        borderRadius:20



    },
    icons: {
        marginLeft: '35%',
        marginTop: 10
    },
    text:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
        
    }
})

export default AmountAddedConfirmation;
