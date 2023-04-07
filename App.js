import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MyMatches from './components/mymatchess/MyMatches';

import Showdata from './components/mymatchess/Showdata';
import Home from './components/Home';
import MyHeader from './components/mymatchess/insideMymathches/MyHeader';
import MymatchesSheet from './components/mymatchess/insideMymathches/MymatchesSheet';

import MegaContext from './components/upcomingMatches/upcomingContest/MegaContext';
import PlayerSelector from './components/playerSelecter/maincomponent/PlayerSelector';
import WicketKeeper from './components/playerSelecter/playerSelecterComponent/WicketKeeper';
import PaymentHandler from './components/PaymentPart/PaymentHandler';

import Home1 from './Redux/Home1';

import Mydatashow from './Redux/MyDataShow';
import MegaContestWinnersPoolDataFlatlist from './winners/MegaContestWinnersPoolDataFlatlist';
import { Provider } from 'react-redux';
import { Store } from './Redux/strore';
import Footermymatchesdetail from './footerfiles/FooterMyMatchesDetail';

import Head from './HeaderOfCricket/Head';
import Header from './HeaderOfCricket/Header';
import MyBalance from './HeaderOfCricket/mybalance/MyBalance';
import Offer from './HeaderOfCricket/mycoupons/Offer';
import More from './HeaderOfCricket/more/More';
import Myinfo from './HeaderOfCricket/myinfo/Myinfo';
import Notification from './notifications/Notification';
import Straggeredcashbonus from  './HeaderOfCricket/Straggeredcashbonus';
import Megateam from './components/upcomingMatches/upcomingContest/megacontestdashboardtabfiles/Megateam';
import Mega from './components/upcomingMatches/upcomingContest/megacontestdashboardtabfiles/Mega';
import CaptainSelector from './components/playerSelecter/maincomponent/CaptainSelector';
import PlayerOnGround from './components/playerSelecter/maincomponent/PlayerOnGround';
import Api from './components/api/Api';
import MyUi from './Redux/MyUi';
import Matchcategory from './components/MatchCategory';
import SignIn from './HeaderOfCricket/SignIn';
const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {/* <Stack.Screen name="MyUi" component={MyUi}/>
          <Stack.Screen name="Home1" component={Home1}/> */}
           <Stack.Screen name="MyUi" component={MyUi}/>
          <Stack.Screen name="Api" component={Api}/>
         
          <Stack.Screen name="Matchcategory" component={Matchcategory}/>
         
          <Stack.Screen name="Header" component={Header}/>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="More" component={More}/>
          <Stack.Screen name="Offer" component={Offer}/>
          <Stack.Screen name="Myinfo" component={Myinfo}/>
          <Stack.Screen name="Notification" component={Notification}/>
          <Stack.Screen name="MyBalance" component={MyBalance}/>
          <Stack.Screen name="Straggeredcashbonus" component={Straggeredcashbonus}/>
          <Stack.Screen name="Head" component={Head}/>
          <Stack.Screen name="MyHeader" component={MyHeader}/>
          <Stack.Screen name="Megateam" component={Megateam}/>
          <Stack.Screen name="Mega" component={Mega}/>
          <Stack.Screen name="MymatchesSheet" component={MymatchesSheet}/>
          <Stack.Screen name="MyMatches" component={MyMatches}/>
          <Stack.Screen name="Showdata" component={Showdata}/>
          <Stack.Screen name="MegaContext" component={MegaContext}/>
          <Stack.Screen name="PlayerSelector" component={PlayerSelector}/>
          <Stack.Screen name="CaptainSelector" component={CaptainSelector}/>
          <Stack.Screen name="PlayerOnGround" component={PlayerOnGround}/>
          <Stack.Screen name="WicketKeeper" component={WicketKeeper}/>
          <Stack.Screen name="PaymentHandler" component={PaymentHandler}/>
          <Stack.Screen name="Mydatashow" component={Mydatashow}/>
          <Stack.Screen name="Footermymatchesdetail" component={Footermymatchesdetail}/>
          <Stack.Screen name="MegaContestWinnersPoolDataFlatlist" component={MegaContestWinnersPoolDataFlatlist}/>
          <Stack.Screen name="SignIn" component={SignIn}/>
          
        </Stack.Navigator>
      </NavigationContainer>
      {/* <NavigationContainer>
       <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home}/>
        </Drawer.Navigator>
      </NavigationContainer> */}
      </Provider>
    );
  
}

export default App;