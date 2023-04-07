import React,{useEffect} from 'react';
import {View, StyleSheet,Text} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import Header from '../../HeaderOfCricket/Header';
import {findLeagueDetails,findLiveScoreApiDetails,get_LEAGUE_TEAM_API_DATA} from '../../Redux/action';
const Api = () => {
    
    const dispatch =useDispatch();
   // const {get_league_dtl_api_data} = useSelector(state=>state.get_LEAGUE_DTL_API_DATA_REDUCER);
    // const {get_league_livescore_api_data} = useSelector(state=>state.get_LEAGUE_LIVESCORE_API_DATA_REDUCER);
    // const {get_league_team_api_data} = useSelector(state=>state.get_LEAGUE_TEAM_API_DATA_REDUCER);
 
    // console.log("======livescore api  data+=",get_league_livescore_api_data);
    //  console.log("====== get_league_dtl_api_data+=", get_league_dtl_api_data);
    // //console.log("====== get_league_team_api_data=+=", get_league_team_api_data);
     
   


useEffect(() => {
//     dispatch(findLiveScoreApiDetails());
//     dispatch(findLeagueDetails());
//    dispatch(get_LEAGUE_TEAM_API_DATA());
}, []);

    return (
        <View style={{flex:1}}>
            <Header/>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Api;
