import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextInput, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const Offer = () => {

    const navigation=useNavigation();
    return (

        <View>
            <View style={styles.header}>
                <View style={styles.logo}>
                    <TouchableOpacity
                     onPress={()=>navigation.goBack()}
                    >
                             <Icon style={{ marginLeft: 20 }} name="arrow-back" size={30} color="white" />
                    </TouchableOpacity>
                 
                    <Text style={styles.headerName}>
                        Offers & Coupons
                    </Text>
                </View>

                <View style={{ marginRight: 20 }}>
                    <TouchableOpacity>
                        <Icon name="contact-support" size={30} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ width: '100%', backgroundColor: 'white', elevation: 10, paddingBottom: 20 }}>

                <Text style={styles.QuesCode}>Have Coupon Code?</Text>


                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: '100%',
                        justifyContent: 'space-around',
                        alignSelf: 'center',
                        marginTop: 20
                    }}>
                    <TextInput style={{ borderBottomWidth: 0.5 }} placeholder="Enter Coupon Code                   "></TextInput>
                    <TouchableOpacity style={{ backgroundColor: '#f0f0f0', padding: 12 }}>
                        <Text>APPLY CODE </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Text style={[styles.QuesCode, { marginBottom: 30 }]}>Active</Text>

            </View>
            <View style={{ width: '90%', height: 170, backgroundColor: '#ffffff', elevation: 5, alignSelf: 'center' }}>

                <Text style={{
                    marginLeft: 20,
                    color: '#ff0000',
                    fontSize: 15,
                    fontWeight: 'bold',
                    alignSelf: 'flex-end',
                    marginRight: 17,
                    marginTop: 10
                }}>
                    Expirea in 6 Days!
                </Text>


                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: -7, marginRight: 15 }}>
                    <View style={{ width: 80, height: 80, backgroundColor: '#FA8072', alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                        <Icon name="local-offer" size={50} color="red" />
                    </View>

                    <View>
                        <Text style={styles.QuesCode}>Rs. 64 left</Text>
                        <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#000000', marginLeft: 20 }}>Invite Bonus 4</Text>
                        <Text style={{ marginLeft: 20, fontSize: 11, marginTop: 7 }}>Congratulation! You have got a 10% discount {'\n'}Coupon worth Rs.101</Text>
                    </View>

                </View>

                <View style={{ backgroundColor: '#f0f0f0', width: '100%', height: 35, marginTop: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>

                    <Text style={{ fontSize: 13, color: '#6495ED' }}>Offer Details</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name="check-circle" color="#006400" size={30} />
                        <Text style={{ fontSize: 13 }}> Received on 23 Mar,2022</Text>
                    </View>


                </View>

            </View>


            <TouchableOpacity style={styles.inactive}>
                <Text style={{ marginLeft: 20, color: '#000000', fontSize: 18, fontWeight: 'bold' }}>lnactive</Text>
                <Icon name="keyboard-arrow-right" size={40} color="black" style={{ marginRight: 10 }} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    header:
    {
        backgroundColor: '#006400',
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'

    },
    logo:
    {
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerName:
    {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 20
    },
    QuesCode:
    {
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 15,
        marginLeft: 20
    },
    inactive:
    {
        width: '90%',
        height: 65,
        backgroundColor: '#ffffff',
        elevation: 3,
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 5,
        marginTop: 40

    }
})

export default Offer;
