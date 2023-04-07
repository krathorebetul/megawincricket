import React, { useRef,useEffect,useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import RBSheet from "react-native-raw-bottom-sheet";
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

import Opemfancode from './opemFanCode';

const initialMyMatches = {
    id: "",
    myteamvs:"",
    teamName_One: "",
    teamName_Two: "",
    scoreTeam_One:"",
    scoreTeam_two:""
}


const MyHeader = () => {
    const [playingMatches,setPlayingMatches] = useState(initialMyMatches);
   
    const getData = async () =>{
       fetch('https://mytestdata-1f4be-default-rtdb.firebaseio.com/myMatch.json',
        {
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        }
        ).then(function(response){
            console.log(response);
            return (  
                      response.json()
                );
        }

        ).then(function(myJson){
             setPlayingMatches(myJson);
        });
        getData();
    }
    useEffect(()=>{
            getData()
    },[]);

    const refRBSheet = useRef();
    const filterBottomSheet = useRef();
    return (
        <View>
            {playingMatches && playingMatches.length>0 && playingMatches.map(myMatch => {
                return (
                    <View>
                        <View style={styles.header1}>
                            <View style={styles.top}>
                                <Text style={styles.text}>{myMatch.myteamvs}</Text>
                            </View>
                            <View style={styles.top}>
                                <TouchableOpacity
                                    style={styles.pts}
                                    title="pts">
                                    <Text
                                        style={{
                                            color: "white",
                                            fontSize: 10,
                                            textAlign: "center",
                                            fontWeight: "bold"
                                        }}>
                                        PTS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.header2}>
                            <View>
                                <Text style={styles.text}>{myMatch.teamName_One}</Text>
                                <Text style={styles.text}>{myMatch.scoreTeam_One}</Text>
                            </View>
                            <View style={{ marginTop: 27 }}>
                                <View 
                                style= {{ 
                                    flexDirection: "row", 
                                    justifyContent: "center" 
                                    }}>
                                    <Icon
                                     name="circle" 
                                     size={8} 
                                     color="green" 
                                     style={{ textAlign: "center" }} 
                                     />
                                    <Text 
                                    style={[
                                        styles.text, 
                                        { textAlign: "center" 
                                        }]}
                                        >Complete</Text>
                                </View>
                                <Text style={styles.text}>BOB beat DAT by 31 runs</Text>

                            </View>
                            <View>
                                <Text style={styles.text}>{myMatch.teamName_Two}</Text>
                                <Text style={styles.text}>{myMatch.scoreTeam_two}</Text>
                            </View>

                        </View>
                    </View>
                )
            })}


            <View style={styles.header3}>
                <View style={{ flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", marginTop: 15 }}>
                    <Text style={styles.text}>For expert comments & stats </Text>

                    <View
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#000"
                        }}
                    >
                    <TouchableOpacity
                        onPress={() =>refRBSheet.current.open()}

                        style={{
                            backgroundColor: "#292e2b",
                            borderRadius: 10,
                            padding: 5,
                            width: 150
                        }}>
                        <Text style={{ color: "red", textAlign: "center" }}>OPEN IN FANCODE</Text>
                    </TouchableOpacity>
                        <RBSheet
                            ref={refRBSheet}
                            closeOnDragDown={true}
                            closeOnPressMask={false}
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
                            <Opemfancode/>
                        </View>
                        </RBSheet>
                      

                    </View>


                </View>

            </View>
        </View>
    );
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
        color: "white",
        fontSize:15,
        textShadowColor:'yellow',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 10,
    },
    pts: {
        color: "white",
        borderWidth: 1,
        borderColor: "white",
        width: 30,
        height: 30,
        borderRadius: 30,
        justifyContent: "center"



    },
    header1: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
        backgroundColor:'black'


    },
    header2: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: "grey",
        paddingBottom: 30,
        backgroundColor:'black'
    },
    header3: {
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 30,
        backgroundColor:'black'
    }
})

export default MyHeader;
