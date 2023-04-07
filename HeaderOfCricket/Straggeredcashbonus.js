import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, Image, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import img from '../components/Image/Straggeredcashbonus.jpg';
import {useSelector,useDispatch} from 'react-redux';
import {  useNavigation } from '@react-navigation/native';
const Straggeredcashbonus = () => {
    const {gname} = useSelector(state=>state.userReducer1);
    const navigation=useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.straggerheader}>
                <TouchableOpacity
                    onPress={()=>navigation.navigate('Header')}
                >
                <Icon style={{  marginLeft: 10 }} name="arrow-back" size={40} color='#ffffff' />
                </TouchableOpacity>
                <Text style={{ color: '#ffffff', fontSize: 16, marginLeft: 10, fontWeight: 'bold' }}>STRAGGERED CASH BONUS</Text>
            </View>
            <ScrollView style={styles.scrollView}>


                <View style={styles.logobox}>
                    <Icon style={{ marginLeft: 10 }} name='emoji-events' size={40} color="#ff0000" />
                    <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#ff0000', marginRight: 50 }}>
                        {gname}
                    </Text>
                </View>

                <View style={{width:'99%',height:200}}>
                    <Image style={{ height: '100%', width: '100%',resizeMode:'contain' }} source={img} />
                </View>

                <View style={styles.aboutcashbonus}>
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <Text style={{ color: '#000000', fontSize: 18, fontWeight: 'bold', marginLeft: 25 }}>What is a</Text>
                        <Text style={{ color: '#ff0000', fontSize: 18, fontWeight: 'bold', marginLeft: 5 }}>Cash Bonus?</Text>
                    </View>
                    <View>
                        <Text style={{ color: '#000000', margin: 15 }}>
                            You heard it right Now. you get to use your CB to pay <Text style={{ fontWeight: 'bold' }}>Rs.25 or 10%(whichever is higher)</Text>
                            of the total entry. i.e. the total amount you pay to join contests in a match. Why this
                            change was important? This way, you get the maximum benefit out of your Vash Bonus balance.
                        </Text>
                    </View>

                    <View>
                        <Text style={{ color: '#000000', margin: 15 }}>Let's take two examples:</Text>
                    </View>

                    <View>
                        <Text style={{ fontWeight: 'bold', color: '#000000', margin: 15 }}>E.g. 1: You join 1 contest for NZ vs WI.</Text>
                        <View>
                            <View style={{ flexDirection: 'row', padding: 10 ,alignSelf:'center'}}>
                                <Text style={{ backgroundColor: '#C0D6E4', height: 35, padding: 5, color: '#000000', fontWeight: 'bold' }}>Contests Joined</Text>
                                <Text style={{ backgroundColor: '#C0D6E4', height: 35, padding: 5, color: '#000000', marginLeft: 2, fontWeight: 'bold' }}>CB Balance</Text>
                                <Text style={{ backgroundColor: '#C0D6E4', height: 35, padding: 5, color: '#000000', fontWeight: 'bold', marginLeft: 2 }}>Entry</Text>
                                <Text style={{ backgroundColor: '#C0D6E4', height: 35, width: 145, padding: 5, color: '#000000', fontWeight: 'bold', paddingLeft: 40, marginLeft: 2 }}>CB Used</Text>
                            </View>

                            <View style={{ flexDirection: 'row', padding: 10, marginTop: -20, borderBottomWidth: 1, borderBottomColor: 'grey', paddingBottom: 2 }}>
                                <Text style={{ height: 43, width: 114, padding: 5, color: '#000000', borderRightWidth: 1, borderRightColor: 'grey' }}>Contest 1</Text>
                                <Text style={{ height: 43, width: 83, padding: 5, color: '#000000', borderRightWidth: 1, borderRightColor: 'grey' }}>Rs.100</Text>
                                <Text style={{ height: 43, width: 45, padding: 4, color: '#000000', borderRightWidth: 1, borderRightColor: 'grey' }}>Rs.33</Text>
                                <Text style={{ height: 43, width: 145, padding: 5, color: '#000000' }}>Rs.25(Rs.25 10% of(Rs.33))</Text>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text style={{ fontWeight: 'bold', color: '#000000', margin: 10 }}>E.g. 2: You join 2 contest for IND vs AUS.</Text>
                        <View>
                            <View style={{ flexDirection: 'row', padding: 10,alignSelf:'center'}}>
                                <Text style={{ backgroundColor: '#C0D6E4', height: 35, padding: 5, color: '#000000', fontWeight: 'bold' }}>Contests Joined</Text>
                                <Text style={{ backgroundColor: '#C0D6E4', height: 35, padding: 5, color: '#000000', marginLeft: 2, fontWeight: 'bold' }}>CB Balance</Text>
                                <Text style={{ backgroundColor: '#C0D6E4', height: 35, padding: 5, color: '#000000', fontWeight: 'bold', marginLeft: 2 }}>Entry</Text>
                                <Text style={{ backgroundColor: '#C0D6E4', height: 35, width: 145, padding: 5, color: '#000000', fontWeight: 'bold', paddingLeft: 40, marginLeft: 2 }}>CB Used</Text>
                            </View>

                            <View style={{ flexDirection: 'row', padding: 10, marginTop: -20, borderBottomWidth: 1, borderBottomColor: 'grey', paddingBottom: 2 }}>
                                <Text style={{ height: 43, width: 114, backgroundColor: '#F4F4F5', padding: 5, color: '#000000', borderRightWidth: 1, borderRightColor: 'grey' }}>Contest 1</Text>
                                <Text style={{ height: 43, width: 83, backgroundColor: '#F4F4F5', padding: 5, color: '#000000', borderRightWidth: 1, borderRightColor: 'grey' }}>Rs.0</Text>
                                <Text style={{ height: 43, width: 45, backgroundColor: '#F4F4F5', padding: 4, color: '#000000', borderRightWidth: 1, borderRightColor: 'grey' }}>Rs.150</Text>
                                <Text style={{ height: 43, width: 145, backgroundColor: '#F4F4F5', padding: 5, color: '#000000', textAlign: 'center' }}>Rs.0</Text>
                            </View>

                            <View style={{ flexDirection: 'row', padding: 10, marginTop: -10, borderBottomWidth: 1, borderBottomColor: 'grey', paddingBottom: 2 }}>
                                <Text style={{ height: 43, width: 114, padding: 5, color: '#000000', borderRightWidth: 1, borderRightColor: 'grey' }}>Contest 2</Text>
                                <Text style={{ height: 43, width: 83, padding: 5, color: '#000000', borderRightWidth: 1, borderRightColor: 'grey' }}>Rs.100</Text>
                                <Text style={{ height: 43, width: 45, padding: 4, color: '#000000', borderRightWidth: 1, borderRightColor: 'grey' }}>Rs.200</Text>
                                <Text style={{ height: 43, width: 145, padding: 5, color: '#000000' }}>Rs.35 (rs.25 10% of rs.350) </Text>
                            </View>

                        </View>
                    </View>

                    <View style={{ marginTop: 20, marginLeft: 10 }}>
                        <View>
                            <Text style={{ color: '#000000', fontWeight: 'bold' }}>CB rules to remember</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#000000', marginTop: 10 }}>-Expires in 14 days from the date of issue</Text>
                            <Text style={{ color: '#000000' }}>-Cash Bonus can be used only to join public contests</Text>
                        </View>
                    </View>

                   <View>
                   <TouchableOpacity style={styles.inactive}>
                        <Text style={{ marginLeft: 20, color: '#000000', fontSize: 18, fontWeight: 'bold' }}>Terms & Conditions</Text>
                        <Icon name="keyboard-arrow-right" size={40} color="#000000" style={{ marginRight: 10 }} />
                    </TouchableOpacity>
                    
                   </View>
                    
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        backgroundColor: '#ffffff',
    },
    straggerheader: {
        height: 60,
        width: '100%',
        backgroundColor: '#000000',
        flexDirection: 'row',
        alignItems:'center'
    },

    logobox: {
        height: 45,
        width: '100%',
        backgroundColor: '#ffffff',
        
        flexDirection: 'row',
    },

    aboutcashbonus: {

        width: '95%',
        backgroundColor: '#ffffff',
        borderRadius: 20,
        marginLeft: 10,
        marginTop: -30,
        elevation: 5,
        marginBottom:40
    },
    inactive:
    {
        width: '90%',
        height: 65,
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 5,
        borderWidth:1,
        marginTop: 40,
        marginBottom:30

    }

});

export default Straggeredcashbonus;