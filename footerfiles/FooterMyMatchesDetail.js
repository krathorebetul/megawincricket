import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header1 from '../HeaderOfCricket/Header1';
import MyMatches from '../components/mymatchess/MyMatches';
import FooterMyMatchesDetailHeader from './FooterMyMatchesDetailHeader';
import FooterMymatches from '../footerfiles/FooterMymatches';
const FooterMyMatchesDetail = () => {
    return (
        <View>
            <FooterMyMatchesDetailHeader/>
            <Header1/>
            <FooterMymatches/>
        </View>
    );
}

const styles = StyleSheet.create({})

export default FooterMyMatchesDetail;
