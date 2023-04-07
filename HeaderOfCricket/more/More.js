import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

const More = () => {
    const navigation =useNavigation();
    return (
        <View>
            <View style={styles.moreheader}>
                <TouchableOpacity
                onPress={()=>{navigation.goBack()}}
                >
                <Icon style={{  marginLeft: 10 }} name="arrow-back" size={30} color='white' />
                </TouchableOpacity>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginLeft: 25 }}>More</Text>
            </View>

            <TouchableOpacity style={{ flexDirection: 'row', marginTop: 20, borderBottomWidth: 0.4, borderBottomColor: 'grey', paddingBottom: 5,justifyContent:'space-between' }}>
                <View style={{flexDirection:'row'}}>
                <Icon style={{marginLeft:20}} name="list-alt" size={40} color='black' />                
                <Text style={{ color: 'black', fontSize: 18, marginLeft: 20, marginTop: 4, fontWeight: 'bold' }}>Community Guidelines</Text>
                </View>
                <View style={{marginRight:20}}>
                <Icon  name="arrow-forward-ios" size={30} color='black' />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ flexDirection: 'row', marginTop: 10, borderBottomWidth: 0.4, borderBottomColor: 'grey', paddingBottom: 10,justifyContent:'space-between' }}>
               <View style={{flexDirection:'row'}}> 
                <Icon style={{marginLeft:20}} name="payment" size={40} color='black' />
                <Text style={{ color: 'black', fontSize: 18, marginLeft: 20, marginTop: 4, fontWeight: 'bold' }}>Enter Contest Code</Text>
               </View>
                <View style={{marginRight:20}}>
                <Icon  name="arrow-forward-ios" size={30} color='black' />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ flexDirection: 'row', marginTop: 10, borderBottomWidth: 0.4, borderBottomColor: 'grey', paddingBottom: 10,justifyContent:'space-between' }}>
                <View style={{flexDirection:'row'}}>
                <Icon style={{marginLeft:20}} name="sports-esports" size={40} color='black' />
                <Text style={{ color: 'black', fontSize: 18, marginLeft: 20, marginTop: 5, fontWeight: 'bold' }}>How to Play</Text>
                </View>
                <View style={{marginRight:20}}>
                <Icon  name="arrow-forward-ios" size={30} color='black' />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ flexDirection: 'row', marginTop: 10, borderBottomWidth: 0.4, borderBottomColor: 'grey', paddingBottom: 10 ,justifyContent:'space-between'}}>
               <View style={{flexDirection:'row'}}> 
                <Icon style={{marginLeft:20}} name="work-outline" size={40} color='black' />
                <Text style={{ color: 'black', fontSize: 18, marginLeft: 20, marginTop: 5, fontWeight: 'bold' }}>Jobs</Text>
              </View>
                <View style={{marginRight:20}}>
                <Icon  name="arrow-forward-ios" size={30} color='black' />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ flexDirection: 'row', marginTop: 10, borderBottomWidth: 0.4, borderBottomColor: 'grey', paddingBottom: 10,justifyContent:'space-between' }}>
                <View style={{flexDirection:'row'}}>
                <Icon style={{marginLeft:20}} name="emoji-events" size={40} color='black' />
                <Text style={{ color: 'black', fontSize: 18, marginLeft: 20, marginTop: 5, fontWeight: 'bold' }}>About Us</Text>
                </View>
                <View style={{marginRight:20}}>
                <Icon  name="arrow-forward-ios" size={30} color='black' />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ flexDirection: 'row', marginTop: 10, borderBottomWidth: 0.4, borderBottomColor: 'grey', paddingBottom: 10,justifyContent:'space-between' }}>
                
                <View style={{flexDirection:'row'}}>
                <Icon style={{marginLeft:20}} name="person-search" size={40} color='black' />
                <Text style={{ color: 'black', fontSize: 18, marginLeft: 20, marginTop: 5, fontWeight: 'bold' }}>Responsible Play</Text>
                </View>
                <View style={{marginRight:20}}>
                <Icon  name="arrow-forward-ios" size={30} color='black' />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ flexDirection: 'row', marginTop: 10, borderBottomWidth: 0.4, borderBottomColor: 'grey', paddingBottom: 5,justifyContent:'space-between' }}>
               <View style={{flexDirection:'row'}}> 
                <Icon style={{marginLeft:20}} name="format-paint" size={40} color='black' />
                <Text style={{ color: 'black', fontSize: 18, marginLeft: 20, marginTop: 5, fontWeight: 'bold' }}>Legality</Text>
                </View>
                <View style={{marginRight:20}}>
                <Icon  name="arrow-forward-ios" size={30} color='black' />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ flexDirection: 'row', marginTop: 10, borderBottomWidth: 0.4, borderBottomColor: 'grey', paddingBottom: 10,justifyContent:'space-between' }}>
               <View style={{flexDirection:'row'}}> 
                <Icon style={{marginLeft:20}} name= "description" size={40} color='black' />
                <Text style={{ color: 'black', fontSize: 18, marginLeft: 20, marginTop: 5, fontWeight: 'bold' }}>Term And Conditions</Text>
                </View>
                <View style={{marginRight:20}}>
                <Icon  name="arrow-forward-ios" size={30} color='black' />
                </View>
            </TouchableOpacity>
        </View>
    );
}
export default More;

const styles = StyleSheet.create({
    moreheader: {
        height: 60,
        width: '100%',
        backgroundColor: 'red',
        flexDirection: 'row',
        alignItems:'center'

    }
})