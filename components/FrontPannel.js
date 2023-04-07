import React from 'react';
import {View, StyleSheet,ScrollView} from 'react-native';

import Backimage from './BackImage';
import Header from '../HeaderOfCricket/Header';
import Header1 from '../HeaderOfCricket/Header1';
import ImagesSlider from './ImagesSlider';
import UpcomingMatches from './upcomingMatches/maincomponent/UpcomingMatches';
import Footer from '../footerfiles/Footer';

const FrontPannel = ({navigation}) => {
  return (
    
    <View style={styles.homeContainer}>
      <Header/>
      <Header1/>
      <ScrollView nestedScrollEnabled={true}>
         <View style={{marginTop:-90}}>
                <ImagesSlider/>
                <UpcomingMatches />
                </View>
      </ScrollView>
      <Footer/>

    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer:
  {
    flex:1
  },
  footer:
  {
    bottom:0
  }
})

export default FrontPannel;
