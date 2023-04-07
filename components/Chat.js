
import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from "./Headercss";
import Icon from "react-native-vector-icons/dist/MaterialIcons";
import { SliderBox } from 'react-native-image-slider-box';





const Chat = () => {
    const im11 = require('./Image/my1.jpeg');
    const sri = require('./Image/my2.jpeg')
    const image = [im11, sri, im11, sri]

    return (
        <View>
            <View style={styles.head}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name="account-circle" size={50} color="white" />
                    <Text style={styles.headname}>Chat</Text>
                </View>
                <View style={styles.logo2}>
                    <Icon name="info" size={40} color="white" />
                </View>
            </View>
            <View style={{ paddingTop: 100, paddingBottom: 100 }}>
                <SliderBox
                    images={image}
                    sliderBoxHeight={200}
                    onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                    dotColor="#FFEE58"
                    inactiveDotColor="#90A4AE"
                    paginationBoxVerticalPadding={20}
                    autoplay
                    circleLoop
                    resizeMethod={'resize'}
                    resizeMode={'cover'}
                    paginationBoxStyle={{
                        position: "absolute",
                        bottom: 0,
                        padding: 0,
                        alignItems: "center",
                        alignSelf: "center",
                        justifyContent: "center",
                        paddingVertical: 10
                    }}
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        marginHorizontal: 0,
                        padding: 0,
                        margin: 0,
                        backgroundColor: "rgba(128, 128, 128, 0.92)"
                    }}
                    ImageComponentStyle={{ borderRadius: 15, width: '97%', marginTop: 5 }}
                    imageLoadingColor="#2196F3"
                />





            </View>










            <View >
                <TouchableOpacity style={styles.chat}>
                    <View>
                        <Icon name="chat" size={50} color="maroon" />
                    </View>
                    <View>
                        <Text style={{ marginLeft: -110, color: "maroon", fontSize: 20, lineHeight: 45 }}>Direct Chat</Text>
                    </View>
                    <View>
                        <Icon name="keyboard-arrow-right" size={50} color="maroon" />
                    </View>
                </TouchableOpacity>
            </View>
            <View >
                <TouchableOpacity style={styles.Group} >
                    <View>
                        <Icon name="account-circle" size={50} color="maroon" />
                    </View>
                    <View>
                        <Text style={{ marginLeft: -90, color: "maroon", fontSize: 20, lineHeight: 45 }}>Create a Group</Text>
                    </View>
                    <View>
                        <Icon name="keyboard-arrow-right" size={50} color="maroon" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Chat;