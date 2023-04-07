import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { Provider } from 'react-redux';
import { Store } from './strore';

import Home from './Home1';
import MyUi from './MyUi';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
//const Stack = createNativeStackNavigator();

const Myapl = () => {
  return (
   <Provider store={Store}>
      <NavigationContainer>
        <Drawer.Navigator screenOptions={{headerShown: false}}>
          <Drawer.Screen name="MyUi" component={MyUi}/>
          <Drawer.Screen name="Home" component={Home}/>
         
        </Drawer.Navigator>
      </NavigationContainer>
      </Provider>
    );
  
}

export default Myapl;