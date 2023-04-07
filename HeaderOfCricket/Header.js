import React,{useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity ,SafeAreaView,ScrollView} from 'react-native';
import MenuDrawer from 'react-native-side-drawer';
import  Icon  from 'react-native-vector-icons/dist/MaterialIcons';
import Header1 from './Header1';
import BackImage from '../components/BackImage';
import ImagesSlider from '../components/ImagesSlider';
import UpcomingMatches from '../components/upcomingMatches/maincomponent/UpcomingMatches';
import Footer from '../footerfiles/Footer';
import {useSelector,useDispatch} from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import PushNotification from "react-native-push-notification";


const Header = () => {
  const {gname} = useSelector(state=>state.userReducer1);
  const {name} = useSelector(state=>state.userReducer);
  const navigation=useNavigation();



const [state, setState] = useState({
    open: false
});

// const createChannels=()=>{
//   PushNotification.createChannel()
//   {
//     channelId:"test-channel"
//     channelName:"test channel"
//   }
// }


const toggleOpen = () => {
    setState({ open: !state.open });
 
  };

const  drawerContent = () => {
    return (
      <SafeAreaView style={styles.animatedBox}>
            <TouchableOpacity  onPress={toggleOpen}>
      <TouchableOpacity onPress={toggleOpen} >
        <View
          style={{
            width: '100%',
            height: 100,
            backgroundColor: 'black'
          }}>


          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 25 }}>
            <View>
              <Icon name="account-circle" size={60} color="white" />
            </View>




            <View style={{ alignItems: 'center' }}>
              <TouchableOpacity >
              <View>
                <Text style={{ color: 'white', fontSize: 18, marginLeft: 20 }}>{name}</Text>
              </View>
              </TouchableOpacity>
              <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
                <Icon name="person" color="white" />
                <Text style={{ color: 'white' }}>Level 12</Text>

                <Icon name="person" color="white" />
                <Text style={{ color: 'white' }}> 2</Text>
              </View>
            </View>

          </View>



        </View>


      </TouchableOpacity>


      <ScrollView>
    
        <View style={styles.touchView}>
          <TouchableOpacity style={styles.touchableOpacity}
           onPress={()=>navigation.navigate('MyBalance')}
          >
            <View style={styles.touchebleSubView}>
              <Icon name="account-balance-wallet" color="#ff0000" size={28} />
              <Text style={styles.touchebleName}>My Balance</Text>
            </View>
            <Text style={{ color: 'black', fontSize: 17, marginRight: 20 }}>Rs. 71</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.touchableOpacity}>
            <View style={styles.touchebleSubView}>
              <Icon name="money" color="black" size={28} />
              <Text style={styles.touchebleName}>Collect Rs.500</Text>
            </View>

            <TouchableOpacity style={{ borderWidth: 1, borderRadius: 2, padding: 2, marginRight: 20 }}>
              <Text style={{ color: 'black' }}>INVITE</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>


        <View style={styles.touchView}>
          <TouchableOpacity style={styles.touchableOpacity}>
            <View style={styles.touchebleSubView}>
              <Icon name="report" color="#ffff00" size={28} />
              <Text style={styles.touchebleName}>My Level</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.touchableOpacity}
           onPress={()=>navigation.navigate('Offer')}
          >
            <View style={styles.touchebleSubView}>
              <Icon name="card-giftcard" color="black" size={28} />
              <Text style={styles.touchebleName}>
                My Coupons
                </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.touchView}>
          <TouchableOpacity style={styles.touchableOpacity}>
            <View style={styles.touchebleSubView}>
              <Icon name="search" color="black" size={28} />
              <Text style={styles.touchebleName}>Find People</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.touchableOpacity}>
            <View style={styles.touchebleSubView}>
              <Icon name="rate-review" color="#00bfff" size={28} />
              <Text style={styles.touchebleName}> Feed</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.touchView}>
          <TouchableOpacity style={styles.touchableOpacity}>
            <View style={styles.touchebleSubView}>
              <Icon name="sports-esports" color="#00ff00" size={28} />
              <Text style={styles.touchebleName}>How to Play</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.touchableOpacity}>
            <View style={styles.touchebleSubView}>
              <Icon name="star-border" color="black" size={28} />
              <Text style={styles.touchebleName}>Series Leaderboard</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.touchView}>
          <TouchableOpacity style={styles.touchableOpacity}>
            <View style={styles.touchebleSubView}>
              <Icon name="live-tv" color="#ff0000" size={28} />
              <Text style={styles.touchebleName}>Watch Live</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.touchableOpacity}>
            <View style={styles.touchebleSubView}>
              <Icon name="local-mall" color="black" size={28} />
              <Text style={styles.touchebleName}>FanCode Shop</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.touchView}>
          <TouchableOpacity style={styles.touchableOpacity}
            onPress={()=>navigation.navigate('Myinfo')}
          >
            <View style={styles.touchebleSubView}>
              <Icon name="settings" color="black" size={28} />
              <Text style={styles.touchebleName}>
                My Info & Settings
                </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.touchableOpacity}
           onPress={()=>navigation.navigate('More')}
          >
            <View style={styles.touchebleSubView}>
              <Icon name="more-horiz" color="black" size={28} />
              <Text style={styles.touchebleName}>
                More
                </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.updateView}>
          <View>
          <Text>Version 4.46.1</Text>
          <Text>Add up to date</Text>
          </View>

          <TouchableOpacity>
            <Text style={{fontSize:16,fontWeight:'bold'}}>UPDATE</Text>
            </TouchableOpacity>
        </View>

        <View style={{marginBottom:20}}>
        <TouchableOpacity style={styles.touchableOpacity}>
            <View style={styles.touchebleSubView}>
              <Icon name="help-outline" color="black" size={28} />
              <View >
              <Text style={styles.touchebleName}>Help & Support</Text>
            <Text >FAQs Chat with us & more</Text>
            </View>
              
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      </TouchableOpacity>
    </SafeAreaView>
    );
  };

 
    return (
      <View style={styles.container}>
        
        <MenuDrawer
          open={state.open}
          position={'left'}
          drawerContent={drawerContent()}
          drawerPercentage={75}
          animationTime={80}
          overlay={true}
          opacity={0.4}
        >
         
          <View style={styles.header}>
            <TouchableOpacity
            onPress={toggleOpen}
            
            >
                <Icon style={styles.icon}  name="account-circle" size={28} />
            </TouchableOpacity>
            <Text style={styles.logo}>{gname}</Text>

            <TouchableOpacity
            onPress={()=>navigation.navigate('Notification')}
            >
                <Icon style={styles.icon} name="notifications-none" size={28} />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={()=>navigation.navigate('Head')}>
                <Icon style={[styles.icon,{marginRight:10}]} name="account-balance-wallet" size={28} />
            </TouchableOpacity>


        </View>
        <Header1/>
      <ScrollView nestedScrollEnabled={true} >
       
        <ImagesSlider />
        <UpcomingMatches />

      </ScrollView>
      <Footer />
        </MenuDrawer>
      </View>
    );
  
}
export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
   
    zIndex: 0
  },
  animatedBox: {
    flex: 1,
    backgroundColor: "#ffffff",

  },
  touchView:
  {
    borderBottomColor: '#dcdcdc',
    borderBottomWidth: 1,
    paddingBottom: 10
  },
  touchableOpacity:
  {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-between",
    marginTop: 20,
    
    
  },
  touchebleSubView:
  {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20
  },
  touchebleName:
  {
    color: 'black',
    fontSize: 17,
    marginLeft: 20,
    fontSize:16,
    fontWeight:'bold'
  },
  updateView:
  {
    borderBottomColor: '#dcdcdc',
    borderBottomWidth: 1,
    paddingBottom: 10,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    alignItems:'center'
  },
  header:
  {
      width: '100%',
      height: 80,
      flexDirection: 'row',
      backgroundColor: '#191970',
      justifyContent: 'space-around',
      alignItems: 'center'
  },

  logo:
  {
      fontSize: 22,
      fontWeight: 'bold',
      color: 'white',
      textShadowColor:'#ff0000',
      textShadowOffset:{width:1,height:1},
      textShadowRadius:2
  },

  icon:
  {
      color: 'white'
  }
})