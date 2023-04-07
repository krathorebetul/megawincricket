import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

import PushNotification from "react-native-push-notification";
import { useNavigation } from '@react-navigation/native';

const Mybalance = () => {
    const [balance, setBalance] = useState('');
    const navigation =useNavigation();
// const handleNotification=()=>{
     
    
//     PushNotification.cancelAllLocalNotifications();
//     PushNotification.localNotification({
//         channelId:"test-channel",
//         title:"you clicked on",
//         message:"hello ",
//         bigText:"hello"+"we have a surprise for you its about you contest",
//         color:"#ff0000",
//        // id:index

//      });
//      PushNotification.localNotificationSchedule({
//         channelId:"test-channel",
//         title:"you clicked on",
//         message:"hello now the biggest offer ",
//         date:new Date(Date.now()+20*1000),
//         allowWhileIdle:true,

//      })
// }

    useEffect(() => {
        const api = 'https://crudopm-9808c-default-rtdb.firebaseio.com/balance.json';
        async function fetchData() {
            const response = await fetch(api);
            const data = response.json();
            setBalance(data)
           function getData(){
               Object.keys(balance).map((item)=>{
                   return setBalance(item)
               })
           }
           getData();
        }
        fetchData();
        
        console.log(balance);



    }, []);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{marginLeft:20}}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Icon name="arrow-back" size={30} color="#ffffff"/>
                </TouchableOpacity>
                </View>    
                <Text
                    style={{
                        color: "#ffffff",
                        fontSize: 20,
                        fontWeight: 'bold',
                        marginLeft: 20,
                        lineHeight: 50,
                        textShadowColor: '#000000',
                        textShadowOffset: { width: 3, height: 3 },
                        textShadowRadius: 10,
                    }}
                >
                    
                    My BALANCE
                </Text>
            </View>
            <View style={styles.section}>
                <View style={styles.AddCash}>
                    <View style={styles.addCashcontainer}>
                        <View style={styles.content1}>
                          <TouchableOpacity>
                            <Text
                                style={{
                                    color: "black",
                                    fontSize: 20,
                                    textShadowColor: '#ff0000',
                                    textShadowOffset: { width: 2, height: 1 },
                                    textShadowRadius: 4,
                                }}
                            >TOTAL BALANCE</Text>
                       </TouchableOpacity>
                        </View>
                        <View style={styles.content1}>
                            <Text

                                style={{
                                    color: "black",
                                    fontSize: 14,
                                }}>
                                Rs 49
                            </Text>
                        </View>
                        <View style={styles.content1}>
                      
                            <TouchableOpacity
                                style={styles.addcashbutton}
                                onPress={()=>navigation.navigate('Head')}
                            >
                                <Text style={{ color: "white", fontWeight: "bold" }}>ADD CASH</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.content2}>
                        <View style={{
                            width: "89%",
                            height: 50,
                        }}>
                            <Text
                                style={styles.labeltextshadow}>AMOUNT ADDED (UNUTILISED)</Text>
                            <View style={{ flexDirection: "row" }}>
                                <Text>Rs</Text>
                                <Text style={{ marginLeft: 10 }}>{3 + 5}</Text>
                            </View>
                        </View>
                        <View>
                            <Text><Icon name="info" color="blue" size={20} /></Text>
                        </View>
                    </View>
                    <View style={styles.content2}>
                        <View
                            style={{
                                width: "89%",
                                height: 50,
                            }}
                        >
                            <Text style={styles.labeltextshadow}>WINNINGS</Text>
                            <Text>Rs 0</Text>
                        </View>
                        <View>
                            <Text><Icon name="info" color="blue" size={20} /></Text>
                        </View>
                    </View>
                    <View>
                        <View style={styles.content3}>
                            <View
                                style={{
                                    width: "89%",
                                    height: 50,
                                    marginLeft: 20
                                }}>
                                <Text style={styles.labeltextshadow}>
                                    CASH BONUS
                                </Text>
                                <Text>
                                    Rs 0
                                </Text>

                            </View>
                            <View>
                                <Text><Icon name="info" color="blue" size={20} /></Text>
                            </View>
                        </View>
                        <View style={styles.maximumAmout}>
                            <Icon name="payments" color="green" size={25} />
                            <Text style={{ fontSize: 10, fontWeight: "bold", marginLeft: 5 }}>
                                Maximum usable Cash bonus per match = 10% of Entry Fees know more
                            </Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={styles.payment}>
                    <Text style={styles.labeltextshadow}>My Recent Transaction</Text>
                    <Text><Icon name="navigate-next" size={20} /></Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.payment}>
                    <Text style={[styles.labeltextshadow, { marginRight: 230 }]}>Manage Payments</Text>
                    <Text> <Icon name="navigate-next" size={20} /></Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.payment}>
                    <Text style={styles.labeltextshadow}>Refer and Earn</Text>
                    <Text><Icon name="navigate-next" size={20} /></Text>

                </TouchableOpacity>


                <View style={styles.getHelp}>
                    <Text style={{ padding: 10 }}><Icon name="help-outline" size={20} /></Text>
                    <Text>Heve a question about your blance?

                        <TouchableOpacity>
                            <Text style={{ color: "blue", fontSize: 15, fontWeight: "bold", }}>Get help</Text>
                        </TouchableOpacity>
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    header:
    {
        width: "100%",
        height: 60,
        backgroundColor: "#191970",
        alignItems:'center',
        flexDirection:'row'

    },
    section: {


        alignItems: "center"

    },
    AddCash: {
        width: "95%",
        height: 350,
        elevation: 2,
        backgroundColor: "white",
        marginTop: 5,
        alignItems: "center"
    },
    payment: {
        width: "95%",
        height: 50,
        backgroundColor: "white",
        elevation: 5,
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: "center"
    },

    addcashbutton: {
        backgroundColor: "#07a33d",
        padding: 10,
        borderRadius: 5
    },
    addCashcontainer: {
        alignItems: "center",
        borderBottomWidth: 1,
        justifyContent: "center",
        width: "90%",
        padding: 20
    },
    content1: {
        padding: 1,


    },
    content2: {
        width: "90%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1,
        padding: 5

    },
    content3: {
        width: "90%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 5

    },
    maximumAmout: {
        width: "94%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        paddingLeft: 10,
        paddingRight: 10,
        height: 30

    },
    getHelp: {
        width: "95%",
        height: 50,
        backgroundColor: "#f0f3f7",
        elevation: 2,
        marginTop: 5,
        flexDirection: "row",
        justifyContent: "flex-start",
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: "center"

    },
    labeltextshadow:
    {
        textShadowColor: '#a8a8a8',
        textShadowOffset: { width: 2, height: 1 },
        textShadowRadius: 6,
        color: "#000000"
    }

})

export default Mybalance;
