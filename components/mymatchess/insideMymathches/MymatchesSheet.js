import React from 'react';
import {View, StyleSheet} from 'react-native';
import MyHeader from './MyHeader';
import MymatchesFlatList from  './MymatchesFlatList';


const MymatchesSheet = (navigation) => {
    return (
        <View>
            <MyHeader/>
            <MymatchesFlatList/>
        </View>
    );
}

const styles = StyleSheet.create({})

export default MymatchesSheet;
