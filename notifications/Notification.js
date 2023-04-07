import React, { useRef, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import RBSheet from "react-native-raw-bottom-sheet";
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import CheckBox from '@react-native-community/checkbox';
import styles from "./Logincss";
import notifications from '../components/json/notifications.json';
import { useNavigation } from '@react-navigation/native';

const Notification = () => {
    const navigation=useNavigation();
    const refRBSheet = useRef();
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const noteData = ({ item }) => {
        // const image = require(item.icon);
        //  alert(image);
        return (

            <View style={styles.flatListbox}>
                <View style={{
                    justifyContent: "center",
                    flexDirection: "row",
                    alignItems: "center",
                    width: "100%",
                    height: 80,
                    paddingLeft: 10,
                    justifyContent: 'space-around'
                }}>

                    <Icon name="redeem" size={30} />
                    <Text style={{ textAlign: "left", width: "90%", flexWrap: "wrap", paddingRight: 10, marginLeft: 10, color: '#000000' }}>
                        {item.text}
                    </Text>
                </View>

            </View>
        )
    }
    return (
        <View>
            <View style={styles.header}>
            <TouchableOpacity
                     onPress={()=>navigation.goBack()}
                >
                <Icon style={{ marginLeft: 20 }} name="arrow-back" size={30} color="white" />
            </TouchableOpacity>
                <Text style={styles.headertext}>NOTICATIONS </Text>
            </View>
            <View style={styles.header1}>
                <Text style={styles.you}>You have unread notifivations</Text>
                <TouchableOpacity
                    onPress={() => refRBSheet.current.open()}
                >
                    <Icon name="filter-list" color="#000000" size={35} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="more-vert" color="#000000" size={35} />
                </TouchableOpacity>
            </View>
            <FlatList
                data={notifications.notificationData}

                renderItem={noteData}
                keyExtractor={item => item.id}
            />



            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={false}
                height={380}
                customStyles={{
                    wrapper: {
                        backgroundColor: "transparent"
                    },
                    draggableIcon: {
                        backgroundColor: "#000"
                    }
                }}
            >

                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', borderBottomWidth: 1, borderColor: '#dcdcdc', paddingBottom: 10 }}>
                        <Icon name="clear" size={25} color="#000000" />
                        <Text style={{ color: '#000000', fontSize: 17, fontWeight: 'bold' }}>Filter</Text>
                        <Text>RESET</Text>
                    </View>
                    <View >
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomWidth: 0.5, borderColor: '#dcdcdc', paddingBottom: 10, paddingTop: 10 }}>
                            <View style={{ flexDirection: 'row' ,marginLeft:20}}>
                                <Icon name="account-balance-wallet" size={25} color="#000000" />
                                <View style={{marginLeft:40}}>
                                    <Text style={{ color: '#000000', fontSize: 17, fontWeight: 'bold' }}>Transactional</Text>
                                    <Text style={{ fontSize: 11 }}> Update on your withdrawls, added cash ,etc</Text>
                                </View>
                            </View>
                        <View style={{marginRight:20}}>
                            <CheckBox
                                disabled={false}
                                
                                value={toggleCheckBox}
                                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                mar
                            />
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomWidth: 0.5, borderColor: '#dcdcdc', paddingBottom: 10, paddingTop: 10 }}>
                            <View style={{ flexDirection: 'row' ,marginLeft:20}}>
                                <Icon name="redeem" size={25} color="#000000" />
                                <View style={{marginLeft:40}}>
                                    <Text style={{ color: '#000000', fontSize: 17, fontWeight: 'bold' }}>Promotional</Text>
                                    <Text style={{ fontSize: 11 }}> Update on your Offers, discount ,etc</Text>
                                </View>
                            </View>
                        <View style={{marginRight:20}}>
                            <CheckBox
                                disabled={false}
                                
                                value={toggleCheckBox}
                                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                mar
                            />
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomWidth: 0.5, borderColor: '#dcdcdc', paddingBottom: 10, paddingTop: 10 }}>
                            <View style={{flexDirection:'row',marginLeft:20}}>
                            <Icon name="account-balance-wallet" size={25} color="#000000" />
                            <View style={{marginLeft:40}} >
                                <Text style={{ color: '#000000', fontSize: 17, fontWeight: 'bold' }}>Gameplay</Text>
                                <Text style={{ fontSize: 11 }}> Update on your joined matches, lineups ,etc</Text>
                            </View>
                            </View>
                        <View style={{marginRight:20}}>
                            <CheckBox
                                disabled={false}
                                
                                value={toggleCheckBox}
                                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                mar
                            />
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomWidth: 0.5, borderColor: '#dcdcdc', paddingBottom: 10, paddingTop: 10 }}>
                        <View style={{flexDirection:'row',marginLeft:20}}>
                
                            <Icon name="person" size={25} color="#000000" />
                            <View  style={{marginLeft:40}}>
                                <Text style={{ color: '#000000', fontSize: 17, fontWeight: 'bold' }}>Social</Text>
                                <Text style={{ fontSize: 11 }}> Update on post,group,foll0wer,etc</Text>
                            </View>
                            </View>
                        <View style={{marginRight:20}}>
                            <CheckBox
                                disabled={false}
                                
                                value={toggleCheckBox}
                                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                mar
                            />
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomWidth: 0.5, borderColor: '#dcdcdc', paddingBottom: 10, paddingTop: 10 }}>
                        <View style={{flexDirection:'row',marginLeft:20}}>
                            
                            <Icon name="person" size={25} color="#000000" />
                            <View  style={{marginLeft:40}}>
                                <Text style={{ color: '#000000', fontSize: 17, fontWeight: 'bold' }}>Profile</Text>
                                <Text style={{ fontSize: 11 }}> Update on your withdrawls, added cash ,etc</Text>
                            </View>
                            </View>
                        <View style={{marginRight:20}}>
                            <CheckBox
                                disabled={false}
                                
                                value={toggleCheckBox}
                                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                mar
                            />
                            </View>
                        </View>


                    </View>
                </View>
            </RBSheet>
        </View>
    );
}

export default Notification;