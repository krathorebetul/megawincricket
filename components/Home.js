import React from 'react';
import {View, StyleSheet,ScrollView} from 'react-native';

import Backimage from './BackImage';
import Header from '../HeaderOfCricket/Header';
import Header1 from '../HeaderOfCricket/Header1';
import ImagesSlider from './ImagesSlider';
import UpcomingMatches from './upcomingMatches/maincomponent/UpcomingMatches';
import Footer from '../footerfiles/Footer';

const Home = ({navigation}) => {
  return (
    <View style={styles.homeContainer}>
      <Header/>
      <Header1/>
      <ScrollView nestedScrollEnabled={true}>
                <Backimage />
                <ImagesSlider />
                <UpcomingMatches />
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

export default Home;
