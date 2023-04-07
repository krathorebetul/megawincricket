import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    head:
    {
        backgroundColor:'red',
        height:60,
        width:"100%",
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:10,
        
    },
    headname:
    {
        fontSize:20,
        paddingLeft: 10,
        color:'white',
        
    },
    chat:
    {
        flexDirection:'row',
        justifyContent:"space-between",
        height:60,
        backgroundColor:'white',
        margin:10
    
    },
    Group:
    {
        flexDirection:'row',
        height:60,
        backgroundColor:'white',
        margin:10,
        justifyContent:"space-between",

        
    }

    
});

export { styles }