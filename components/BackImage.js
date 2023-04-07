import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ImageBackground } from 'react-native';
import Mymatches from './mymatchess/MyMatches';
import MymatchesSheet from './mymatchess/insideMymathches/MymatchesSheet';
const BackImage = () => {
    
   
    
    return (
        <View style={styles.imageview}>
            <ImageBackground style={styles.image} source={require('./Image/images.jpg')}>

                <View style={styles.label}>
                    <Text style={styles.activeMatches}> My Matches</Text>
                  <View>  
                    <TouchableOpacity>
                        <Text style={styles.view}>View All's</Text>
                    </TouchableOpacity>
                  </View>  
                </View>
                 <View style={styles.mymatchesview}>
                    {/* <Mymatches/> */}
                </View> 
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    imageview:
    {
        width: '100%',
        height: 100,
        backgroundColor:'rgba(52, 52, 52, alpha)'
         
    },

    image:
    {
        resizeMode: 'cover',
        width: '100%',
        height: 90

    },
    label:
    {
        width: '90%',
        justifyContent: 'space-around',
        alignItems:'center',
        flexDirection: 'row',
        paddingTop:5,
        marginBottom:10

    },

    activeMatches: {
        color: 'white',
        fontSize: 19,
        fontWeight: 'bold'
    },
    view:
    {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft:9,
        marginBottom:5
    },
    mymatchesview:
    {
        width:'99%',
        height:180,
        
        alignSelf:'center',
        borderRadius:13,
        margin:5,
        marginTop:-2,
        backgroundColor:'rgba(52, 52, 52, alpha)',
        
      
      
    }



})

export default BackImage;
