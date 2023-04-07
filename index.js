/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import CustomSidebarMenu from './exp/CustomSidebarMenu';
import phone from './loginAuth/phone';
import MyUi from './Redux/MyUi';
import RealtimeDataBase from './loginAuth/RealtimeDataBase';
import FilterData from './exp/filterdata/FilterData';
import Jsonrender from './exp/filterdata/JsonRender';
import Mob from './exp/Mob';


// PushNotification.configure({

//     onNotification: function (notification) {
//         console.log("NOTIFICATION:=====", notification);
    
       
//       },
//       requestPermissions: Platform.OS === 'ios'
// });
//AppRegistry.registerComponent(appName, () =>App);

AppRegistry.registerComponent(appName, () =>App);