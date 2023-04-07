import React,{useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MenuDrawer from 'react-native-side-drawer';

const CustomSidebarMenu = () => {

const [state, setState] = useState({
    open: false
});
  toggleOpen = () => {
    setState({ open: !state.open });
  };

const  drawerContent = () => {
    return (
      <TouchableOpacity onPress={toggleOpen} style={styles.animatedBox}>
        <Head/>
      </TouchableOpacity>
    );
  };

 
    return (
      <View style={styles.container}>
        <MenuDrawer
          open={state.open}
          position={'left'}
          drawerContent={drawerContent()}
          drawerPercentage={75}
          animationTime={100}
          overlay={true}
          opacity={0.4}
        >
          <TouchableOpacity onPress={toggleOpen} style={styles.body}>
            <Text>Open</Text>
          </TouchableOpacity>
        </MenuDrawer>
      </View>
    );
  
}
export default CustomSidebarMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    zIndex: 0
  },
  animatedBox: {
    flex: 1,
    backgroundColor: "#38C8EC",
    padding: 10
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F04812',
    height:40
  }
})