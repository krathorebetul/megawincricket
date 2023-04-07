import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, ImageBackground, Text } from 'react-native';
import SetPlayerbackground from './Image/ground.jpeg';


const players = {
    WK: [null],
    BAT: [null, null, null, null],
    AR: [null, null, null, null],
    BOL: [null, null, null, null]
};
const Body = () =>{
    const [state, setState] = useState('')
    useEffect(() => {
        const api = 'https://mykirana-f5c11-default-rtdb.firebaseio.com/playerRank.json';
        async function fetchData() {
            const response = await fetch(api);
            const data = await response.json();
            setState(data)
            const {name,point} = state;
            console.log(name)
        }
        fetchData()
    }, [])
    return (
        <View style={styles.container}>
            <ImageBackground source={SetPlayerbackground}
                resizeMode="cover"
                style={{
                    with: "100%", height: "93%",
                    justifyContent: "space-around",
                    alignItems: "center",
                }}>

                {Object.keys(players).map((position) => (
                    <View
                        style={{
                            marginTop: -70,
                            flexDirection: "row",
                            justifyContent: "space-around",
                            width: "100%"
                        }}
                    >
                        {players[position].map((players) => (
                            <View>
                                <Image source={require('./Image/player.jpeg')} style={{ width: 40, height: 60 }} />
                                <Text style={{ color: "black" }}>{state.name}</Text>
                                <Text>{state.point}</Text>
                            </View>
                        ))}

                    </View>
                ))}
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // width:"100%",
        // height:"100%"
        // flex:1,
        // alignItems:"center",
        // justifyContent:"center"
    }
})
export default Body;


