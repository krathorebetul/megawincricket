export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_MOBILENUMBER =   'SET_USER_MOBILENUMBER';
///////////////////////////
export const SET_MATCH_TYPE = 'SET_MATCH_TYPE';



export const SET_GAME_NAME =  'SET_GAME_NAME';   
export const TEAM_NAME_ONE =  'TEAM_NAME_ONE'; 
///////////////////////////////////
export const SET_CONTEST_TEAM_ONE_NAME='SET_CONTEST_TEAM_ONE_NAME';
export const SET_CONTEST_TEAM_TWO_NAME='SET_CONTEST_TEAM_TWO_NAME';
/////////////////
export const SET_CONTEST_TEAM_ONE_SHORTNAME='SET_CONTEST_TEAM_ONE_SHORTNAME';
export const SET_CONTEST_TEAM_TWO_SHORTNAME='SET_CONTEST_TEAM_TWO_SHORTNAME';
///////////////////////////////////
export const SET_CONTEST_TIME='SET_CONTEST_TIME';
export const SET_CONTEST_TYPE='SET_CONTEST_TYPE';
export const SET_CONTEST_PRIZE='SET_CONTEST_PRIZE';
////////////////////////////////////////////////////

export const UNSET_CONTEST_TEAM_ONE_NAME='UNSET_CONTEST_TEAM_ONE_NAME';
export const UNSET_CONTEST_TEAM_TWO_NAME='UNSET_CONTEST_TEAM_TWO_NAME';

export const SHORT_TEAM_ONE_PALYERCOUNT_ADDITION =  'SHORT_TEAM_ONE_PALYERCOUNT_ADDITION';
export const SHORT_TEAM_TWO_PALYERCOUNT_ADDITION =  'SHORT_TEAM_TWO_PALYERCOUNT_ADDITION';
////////////////////////////////////////////////////////////
export const SHORT_TEAM_ONE_PALYERCOUNT_SUBSTRACTION =  'SHORT_TEAM_ONE_PALYERCOUNT_SUBSTRACTION';
export const SHORT_TEAM_TWO_PALYERCOUNT_SUBSTRACTION =  'SHORT_TEAM_TWO_PALYERCOUNT_SUBSTRACTION';
///////////////////////////////////////////////////////
export const GET_TEAMS_DATA = 'GET_TEAMS_DATA';
export const GET_MEGACONTEST_MATCHES_DATA='GET_MEGACONTEST_MATCHES_DATA';
////////////////////////////////
export const SET_CONTEST_TEAM_ONE_LOGO='SET_CONTEST_TEAM_ONE_LOGO';
export const SET_CONTEST_TEAM_TWO_LOGO='SET_CONTEST_TEAM_TWO_LOGO';
////////////////////////////////
export const SET_CONTEST_LEAGUE_NAME='SET_CONTEST_LEAGUE_NAME';




const GET_MEGACONTEST_MATCHES_DATA_API = 'https://cricketfantsay-default-rtdb.firebaseio.com/m1.json';
///////////////////////////////
export var league_id;
export var LEAGUE_ID='LEAGUE_ID';
export const  GET_LEAGUE_DTL_API_DATA='GET_LEAGUE_DTL_API_DATA';
const token='7UsR6W5NuKM1qnjrykSGvZZAN9kIWb9SlMLnRNdGHTzTdAt40AuJLiX6tCbO';
//const GET_LEAGUE_DTL_API=`https://cricket.sportmonks.com/api/v2.0/leagues/${global.leagueiddata}?api_token=${token}&include=season`;
/////////////////////////////////////////////////////    

export const  GET_LEAGUE_LIVESCORE_API_DATA='GET_LEAGUE_LIVESCORE_API_DATA';

const GET_LEAGUE_LIVESCORE_API=`https://cricket.sportmonks.com/api/v2.0/seasons/932?api_token=${token}&include=fixtures,league`;

const GET_TEAMS_DATA_API = `https://cricket.sportmonks.com/api/v2.0/teams?api_token=${token}&include=`;
///////////////////////////////////////////////////////
export const GET_LEAGUE_VISITORTEAM_API_DATA='GET_LEAGUE_VISITORTEAM_API_DATA';

///////////////////////////////////////


export const  GET_LEAGUE_TEAM_API_DATA='GET_LEAGUE_TEAM_API_DATA';

const GET_LEAGUE_TEAM_API=`https://cricket.sportmonks.com/api/v2.0/teams/6/squad/932?api_token=${token}&include=`;

export const get_LEAGUE_ID=(league_id_detail)=>dispatch=>{
    dispatch({
        type:LEAGUE_ID,
        payload:league_id_detail
    });
   league_id=parseInt(league_id_detail);
   global.leagueiddata=league_id
   console.log("===========>>>>>",league_id);
}
//////////////////////////////////////////////////////////////////

export const get_LEAGUE_TEAM_API_DATA =(iddata)=>{
    try{

             return async dispatch =>{
const result = await fetch(`https://cricket.sportmonks.com/api/v2.0/teams/${iddata}/squad/932?api_token=${token}&include=`,{
                                                            method:'GET',
                                                            headers:{
                                                                'Content-Type':'application/json',
                                                            }    
                                                          }
                           );
                           const json=await result.json();
                           if(json)
                           {
                               dispatch({
                                   type:GET_LEAGUE_TEAM_API_DATA,
                                   payload:json
                               })
                             
                           }
                           else{
                               console.log("GET_LEAGUE_TEAM_API_DATA  not fetch");
                           }
             }
    }
    catch(error){
        console.log(error);
    }
}
////////////////////////////////////////////////////////////////////////////

export const get_league_team_visitorteam_data =(iddatav)=>{
    try{
      
             return async dispatch =>{
const result = await fetch(`https://cricket.sportmonks.com/api/v2.0/teams/${iddatav}/squad/932?api_token=${token}&include=`,{
                                                            method:'GET',
                                                            headers:{
                                                                'Content-Type':'application/json',
                                                            }    
                                                          }
                           );
                           const json=await result.json();
                           if(json)
                           {
                               dispatch({
                                   type:GET_LEAGUE_VISITORTEAM_API_DATA,
                                   payload:json
                               })
                             
                           }
                           else{
                               console.log("GET_LEAGUE_VISITORTEAM_API_DATA  not fetch");
                           }
             }
    }
    catch(error){
        console.log(error);
    }
}
////////////////////////////////////////////////////////////////////////////
export const get_teams_data =()=>{
    try{
             return async dispatch =>{
const result = await fetch(GET_TEAMS_DATA_API,{
                                                            method:'GET',
                                                            headers:{
                                                                'Content-Type':'application/json',
                                                            }    

                                                          }
                           );
                           const json=await result.json();
                       
                           if(json)
                           {
                               dispatch({
                                   type:GET_TEAMS_DATA,
                                   payload:json
                               })
                           }
                           else{
                               console.log("GET_TEAMS_DATA data not fetch");
                           }
             }
    }
    catch(error){
        console.log(error);
    }

}


////////////////////////////////////////////////////////////

export const get_megacontest_matches_data =()=>{
    try{
             return async dispatch =>{
const result = await fetch(GET_MEGACONTEST_MATCHES_DATA_API,{
                                                            method:'GET',
                                                            headers:{
                                                                'Content-Type':'application/json',
                                                            }    

                                                          }
                           );
                           const json=await result.json();
                           if(json)
                           {
                               dispatch({
                                   type:GET_MEGACONTEST_MATCHES_DATA,
                                   payload:json
                               })
                           }
                           else{
                               console.log("GET_MEGACONTEST_MATCHES_DATA data not fetch");
                           }
             }
    }
    catch(error){
        console.log(error);
    }

}

////////////////////////////



export const findLeagueDetails =()=>{
   
        try{
            var json=null;
                 return async dispatch =>{
    const result = await fetch(`https://cricket.sportmonks.com/api/v2.0/leagues/${global.leagueiddata}?api_token=${token}&include=season`,{
                                                                method:'GET',
                                                                headers:{
                                                                    'Content-Type':'application/json',
                                                                }    
    
                                                              }
                               );
                               json=await result.json();
                               if(json)
                               {
                                   dispatch({
                                       type:GET_LEAGUE_DTL_API_DATA,
                                       payload:json,
                                       
                                   })
                                   
                               }
                               else{
                                   console.log("GET_LEAGUE_DTL_API data not fetch");
                               }
                 }
        }
        catch(error){
            console.log(error);

            dispatch({
                type:GET_LEAGUE_DTL_API_DATA,
                payload:[],

            })
          
        }
    
    }


////////////////////////////




export const findLiveScoreApiDetails =()=>{
    try{


      
             return async dispatch =>{
const result1 = await fetch(GET_LEAGUE_LIVESCORE_API,{
                                                            method:'GET',
                                                            headers:{
                                                                'Content-Type':'application/json',
                                                            }    

                                                          }
                           );
                           var json1=await result1.json();
                           if(json1)
                           {
                               dispatch({
                                   type:GET_LEAGUE_LIVESCORE_API_DATA,
                                   payload:json1
                               })
                          
                           }
                           else{
                               console.log("GET_LEAGUE_DTL_API data not fetch");
                           }
             }
    }
    catch(error){
        console.log(error);
    }

}

//////////////////////////////








export const setName=(name)=>dispatch=>{
    dispatch({
        type:SET_USER_NAME,
        payload:name
    });

}

export const setMobileNumber=mobilenumber=>dispatch=>{
    dispatch({
        type:SET_USER_MOBILENUMBER,
        payload:mobilenumber
    });

}


export const get_short_team_one_playercount_addition = () =>({
   
        type:SHORT_TEAM_ONE_PALYERCOUNT_ADDITION,
       // payload:team_one_playercount
  });

export const get_short_team_two_playercount_addition=()=>({
        type:SHORT_TEAM_TWO_PALYERCOUNT_ADDITION,
       // payload:team_two_playercount
    });


export const get_short_team_one_playercount_substration=()=>({
   
        type:SHORT_TEAM_ONE_PALYERCOUNT_SUBSTRACTION,
       // payload:team_one_playercount
 });
export const get_short_team_two_playercount_substration=()=>({
        type:SHORT_TEAM_TWO_PALYERCOUNT_SUBSTRACTION,
      //  payload:team_two_playercount
    });




export const setGameName=gname=>dispatch=>{
    dispatch({
        type:SET_GAME_NAME,
        payload:gname
    });

}
export const setTeamNameOne=teamName_One=>dispatch=>{
    dispatch({
        type:TEAM_NAME_ONE,
        payload:teamName_One
    });

}
export const set_CONTEST_TEAM_ONE_NAME=contest_team_name_one=>dispatch=>{
    dispatch({
        type:SET_CONTEST_TEAM_ONE_NAME,
        payload:contest_team_name_one
    });

}
export const set_CONTEST_TEAM_TWO_NAME=contest_team_name_two=>dispatch=>{
    dispatch({
        type:SET_CONTEST_TEAM_TWO_NAME,
        payload:contest_team_name_two
    });

}
export const unset_CONTEST_TEAM_ONE_NAME=contest_team_name_one=>dispatch=>{
    dispatch({
        type:UNSET_CONTEST_TEAM_ONE_NAME,
        payload:contest_team_name_one
    });

}
export const unset_CONTEST_TEAM_TWO_NAME=contest_team_name_two=>dispatch=>{
    dispatch({
        type:UNSET_CONTEST_TEAM_TWO_NAME,
        payload:contest_team_name_two
    });

}
export const set_CONTEST_TEAM_ONE_SHORTNAME=contest_team_one_shortname=>dispatch=>{
    dispatch({
        type:SET_CONTEST_TEAM_ONE_SHORTNAME,
        payload:contest_team_one_shortname
    });

}
export const set_CONTEST_TEAM_TWO_SHORTNAME=contest_team_two_shortname=>dispatch=>{
    dispatch({
        type:SET_CONTEST_TEAM_TWO_SHORTNAME,
        payload:contest_team_two_shortname
    });

}
export const set_CONTEST_TIME=set_contest_time=>dispatch=>{
    dispatch({
        type:SET_CONTEST_TIME,
        payload:set_contest_time
    });

}


export const set_CONTEST_TYPE=set_contest_type=>dispatch=>{
    dispatch({
        type:SET_CONTEST_TYPE,
        payload:set_contest_type
    });

}

export const set_CONTEST_PRIZE=set_contest_prize=>dispatch=>{
    dispatch({
        type:SET_CONTEST_PRIZE,
        payload:set_contest_prize
    });

}
export const set_CONTEST_TEAM_ONE_LOGO=set_contest_team_one_logo=>dispatch=>{
    dispatch({
        type:SET_CONTEST_TEAM_ONE_LOGO,
        payload:set_contest_team_one_logo
    });

}
export const set_CONTEST_TEAM_TWO_LOGO=set_contest_team_two_logo=>dispatch=>{
    dispatch({
        type:SET_CONTEST_TEAM_TWO_LOGO,
        payload:set_contest_team_two_logo
    });

}
export const set_CONTEST_LEAGUE_NAME=set_contest_league_name=>dispatch=>{
    dispatch({
        type:SET_CONTEST_LEAGUE_NAME,
        payload:set_contest_league_name
    });

}