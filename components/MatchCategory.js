import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import Header1 from '../HeaderOfCricket/Header1';
import ImagesSlider from './ImagesSlider';
import {useSelector,useDispatch} from 'react-redux';
import {findLeagueDetails} from '../Redux/action';
import LinearGradient from 'react-native-linear-gradient';
const Matchcategory = () => {
    const navigation=useNavigation();
    const {league_id_detail} = useSelector(state=>state.leagueIdReducer);
    
const dispatch = useDispatch();
    const loadLeague =(idvalue)=>{
        global.leagueiddata=idvalue;
        
        dispatch(findLeagueDetails());
        navigation.navigate('Header');
    }
    return (
        <SafeAreaView>
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#191970', width: '100%', height: 60 }}>
                <View style={{ marginLeft: 20 }}>
                    <Icon name="arrow-back" size={35} color="#ffffff" />
                </View>
                <Text style={{ color: '#ffffff', fontSize: 20, fontWeight: 'bold', marginLeft: 20 }}>Category</Text>
            </View>
            <ScrollView>
                <Header1 />
                <View style={{ backgroundColor: '#ffffff', marginBottom: 20 }}>
                    <ImagesSlider />

                </View>





                <View style={{ backgroundColor: '#f0f0f0' }}>
                    <View style={styles.TouchableOpacityView}>
                    <LinearGradient colors={['#191970','#000000']} 
                    style={styles.categorytouchableopacity}
                    >
                        <TouchableOpacity style={styles.categorytouchableopacity} onPress={()=>loadLeague(1)}>
                            
                                <Text style={{color:'yellow',backgroundColor:'transparent',fontSize:20}}
                           
                            >IPL</Text>
                           
                        </TouchableOpacity>
                        </LinearGradient>
                        <LinearGradient colors={['#191970','#000000']} 
                    style={styles.categorytouchableopacity}
                    >
                        <TouchableOpacity style={styles.categorytouchableopacity}>
                            <Text style={styles.TouchableOpacitytext}>World Cup</Text>
                        </TouchableOpacity>
                        </LinearGradient>
                    </View>

                    <View style={styles.TouchableOpacityView}>
                    <LinearGradient colors={['#191970','#000000']} 
                    style={styles.categorytouchableopacity}
                    >
                        <TouchableOpacity style={styles.categorytouchableopacity}>
                            <Text style={styles.TouchableOpacitytext}>T-20</Text>
                        </TouchableOpacity>
                        </LinearGradient>
                        <LinearGradient colors={['#191970','#000000']} 
                    style={styles.categorytouchableopacity}
                    >
                        <TouchableOpacity style={styles.categorytouchableopacity}>
                            <Text style={styles.TouchableOpacitytext}>T-10</Text>
                        </TouchableOpacity>
                        </LinearGradient>
                    </View>

                    <View style={styles.TouchableOpacityView}>
                    <LinearGradient colors={['#191970','#000000']} 
                    style={styles.categorytouchableopacity}
                    >
                        <TouchableOpacity style={styles.categorytouchableopacity} onPress={()=>loadLeague(2)}>
                            <Text style={styles.TouchableOpacitytext}>One Day Series</Text>
                        </TouchableOpacity>
                        </LinearGradient>
                        <LinearGradient colors={['#191970','#000000']} 
                    style={styles.categorytouchableopacity}
                    >
                        <TouchableOpacity style={styles.categorytouchableopacity}>
                            <Text style={styles.TouchableOpacitytext}>IPL</Text>
                        </TouchableOpacity>
                        </LinearGradient>
                    </View>

                </View>


            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    categorytouchableopacity:
    {
        width: '45%',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },

    TouchableOpacitytext:
    {
        color: '#ffffff',
        fontSize: 25,
        fontWeight: 'bold'
    },
    TouchableOpacityView:
    {
        width: '90%',
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'space-around',
        alignSelf: 'center'
    }
})

export default Matchcategory;
