import React,{useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, StatusBar, SafeAreaView, Switch} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import RadioForm from 'react-native-simple-radio-button';
import { Picker}  from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

const Myinfo = () => {
    var gender = [ 
        {label:"Male  ", value: 0},
        {label:"Female  ", value: 1},
        {label:"Other  ", value: 2}
    ]

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [isOn, setOn] = useState(false);
  const toggleSwitchnd = () => setOn(previousState => !previousState);


  const [pickerValue, setPickerValue] = useState('Madhya Pradesh');
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>

                <View style={styles.infoheader}>
                    <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                         <Icon name="arrow-back" size={40} color='#ffffff' />
                    </TouchableOpacity>
                   
                    <Text style={{fontSize:18, 
                        fontWeight:'bold', color:'#ffffff', 
                        marginTop:7, marginLeft:10}}>MY INFO & SETTING</Text>
                </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.infoform}>
                    <Text style={{marginTop:20, marginLeft:20}}>Name</Text>
                    <TextInput style={{borderBottomWidth:1, borderBottomColor:'grey', color:'black', fontSize:16, marginTop:-10, marginLeft:15}} placeholder='Enter Name' />
                    <Text style={{ marginLeft:20, marginTop:15}}>Email</Text>
                    <TextInput style={{borderBottomWidth:1, borderBottomColor:'grey', color:'black', fontSize:16, marginLeft:15, marginTop:-10}} placeholder='Enter Email'/>
                    <Text style={{marginLeft:20, marginTop:15}}>Date Of Birth</Text>
                    <TextInput style={{borderBottomWidth:1, borderBottomColor:'grey', color:'grey', fontSize:16, marginLeft:15, marginTop:-10}} placeholder='01-01-2001'/>
                    <Text style={{marginLeft:20, marginTop:15}}>Gender</Text>
                    <View style={{flexDirection:'row', padding:20, justifyContent:'space-around'}}>
                    <RadioForm 
                         style={{flexDirection:'row'}}
                         radio_props={gender}
                         onPress={(value) =>{}}
                    />

                    </View>
                    <View style={{flexDirection:'row',width:'90%', marginTop:-15, borderBottomWidth:1, borderBottomColor:'grey', paddingBottom:-20, marginLeft:20}}>
                        <TextInput style={{marginTop:-15, color:"black"}} placeholder='0000000000'/>
                        <TouchableOpacity style={{marginLeft:220}}>
                            <Text style={{color:'black'}}>Change</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{width:'100%', height:50, backgroundColor:'#f0f0f0', marginTop:20, flexDirection:'row', padding:15}}>
                        <Text style={{color:'black'}}>Privacy Settings</Text>
                        <TouchableOpacity style={{height:17, width:35, backgroundColor:'green', marginLeft:10, marginTop:-5}}>
                            <Text style={{ color:'white', textAlign:'center'}}>New</Text>
                        </TouchableOpacity>
                        <Icon style={{marginLeft:210}} name='arrow-forward-ios' size={20} color='black'/>
                    </View>

                    <View style={{padding:15}}>
                        <Text style={{color:'black', fontSize:16}}>Allow SMS notifications</Text>
                        <Switch
                            style={{marginTop:-20}}
                            trackColor={{ false: "#767577", true: "green" }}
                            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>

                    <View>
                        <View style={{padding:15, width:'80%'}}>
                            <Text style={{color:'black', fontSize:16}}>Make Me Discoverable</Text>
                            <Text >Friends can find follow you when they sync their phone contacts.</Text>
                        </View>
                        <View>
                        <Switch
                            style={{marginTop:-70, marginRight:15}}
                            trackColor={{ false: "#767577", true: "green" }}
                            thumbColor={isOn ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitchnd}
                            value={isOn}
                        />    
                        </View>                        
                    </View>

                    <View style={{padding:15, marginTop:-20}}>
                        <TextInput style={{borderBottomWidth:1, borderBottomColor:'grey'}} placeholder='Address'/>
                        <TextInput style={{borderBottomWidth:1, borderBottomColor:'grey'}} placeholder='City'/>
                        <TextInput style={{borderBottomWidth:1, borderBottomColor:'grey'}} placeholder='Pincode'/>
                    </View>

                    <View>
                        <Picker selectedValue={pickerValue}
                        onValueChange={(itemValue) => setPickerValue(itemValue)}>
                        <Picker.Item label='Madhya Pradesh' value='Madhya Pradesh'/>
                        <Picker.Item label='Punjab' value='Punjab'/>
                        <Picker.Item label='Hariyana' value='Hariyana'/>
                    </Picker>
                </View>

                <View style={{padding:15}}>
                    <Text>Coutry</Text>
                    <TextInput placeholder='India'/>
                </View>

                <View style={{width:'100%', height:50, backgroundColor:'#f0f0f0', marginTop:20, flexDirection:'row', padding:15}}>
                        <Text style={{color:'black'}}>Privacy Settings</Text>
                        <TouchableOpacity style={{height:17, width:35, backgroundColor:'green', marginLeft:10, marginTop:-5}}>
                            <Text style={{ color:'white', textAlign:'center'}}>New</Text>
                        </TouchableOpacity>
                        <Icon style={{marginLeft:210}} name='arrow-forward-ios' size={20} color='black'/>
                    </View>

                    <View style={{padding:15}}>
                        <Text style={{color:'black', fontSize:16}}>Allow SMS notifications</Text>
                        <Switch
                            style={{marginTop:-20}}
                            trackColor={{ false: "#767577", true: "green" }}
                            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>

                    <View>
                        <View style={{padding:15, width:'80%'}}>
                            <Text style={{color:'black', fontSize:16}}>Make Me Discoverable</Text>
                            <Text >Friends can find follow you when they sync their phone contacts.</Text>
                        </View>
                        <View>
                        <Switch
                            style={{marginTop:-70, marginRight:15}}
                            trackColor={{ false: "#767577", true: "green" }}
                            thumbColor={isOn ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitchnd}
                            value={isOn}
                        />    
                        </View>                        
                    </View>

                    <View style={{padding:15, marginTop:-20}}>
                        <TextInput style={{borderBottomWidth:1, borderBottomColor:'grey'}} placeholder='Address'/>
                        <TextInput style={{borderBottomWidth:1, borderBottomColor:'grey'}} placeholder='City'/>
                        <TextInput style={{borderBottomWidth:1, borderBottomColor:'grey'}} placeholder='Pincode'/>
                    </View>

                    <View>
                        <Picker selectedValue={pickerValue}
                        onValueChange={(itemValue) => setPickerValue(itemValue)}>
                        <Picker.Item label='Madhya Pradesh' value='Madhya Pradesh'/>
                        <Picker.Item label='Punjab' value='Punjab'/>
                        <Picker.Item label='Hariyana' value='Hariyana'/>
                    </Picker>
                </View>

                <View style={{padding:15}}>
                    <Text>Coutry</Text>
                    <TextInput placeholder='India'/>
                </View>

                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <View>
                        <TouchableOpacity style={{flexDirection:'row',marginLeft:10}}>
                        <Icon name="power-settings-new" size={30} color="black"/>
                            <Text style={{color:'#000000', marginTop:5, marginLeft:10}}>LOGOUT</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={{marginRight:20}}>
                            <Text style={{color:'#000000'}}>STRATEGIC TIMEOUT</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{marginBottom:40}}>
                    <TouchableOpacity style={{width:140, height:40, backgroundColor:'green', marginLeft:130, marginTop:50, padding:10, borderRadius:10}}>
                        <Text style={{color:'white', fontWeight:'bold', textAlign:'center'}}>UPDATE PROFILE</Text>
                    </TouchableOpacity>
                </View>
             </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    infoheader:{
        height:60,
        width:'100%',
        backgroundColor:'#006400',
        flexDirection:'row',
        padding:10,
        marginTop:-50
    },
    container: {
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal:0,
  },
  text: {
    fontSize: 42,
  },
});

export default Myinfo;