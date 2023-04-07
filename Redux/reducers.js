import {
  SET_USER_NAME,
  LEAGUE_ID,
  SET_USER_MOBILENUMBER,
  SET_MATCH_TYPE,

  SET_GAME_NAME,
  
  UNSET_CONTEST_TEAM_ONE_NAME,
  UNSET_CONTEST_TEAM_TWO_NAME,
  SHORT_TEAM_ONE_PALYERCOUNT_ADDITION,
  SHORT_TEAM_TWO_PALYERCOUNT_ADDITION,
  SHORT_TEAM_ONE_PALYERCOUNT_SUBSTRACTION,
  SHORT_TEAM_TWO_PALYERCOUNT_SUBSTRACTION,
  GET_TEAMS_DATA,
  GET_MEGACONTEST_MATCHES_DATA,
  SET_CONTEST_TEAM_ONE_LOGO,
  SET_CONTEST_TEAM_TWO_LOGO,
  SET_CONTEST_TEAM_ONE_NAME,
  SET_CONTEST_TEAM_TWO_NAME,
  SET_CONTEST_TEAM_ONE_SHORTNAME,
  SET_CONTEST_TEAM_TWO_SHORTNAME,
  SET_CONTEST_TIME,
  SET_CONTEST_TYPE,
  SET_CONTEST_PRIZE,
  SET_CONTEST_LEAGUE_NAME,
  GET_LEAGUE_DTL_API_DATA,
  GET_LEAGUE_LIVESCORE_API_DATA,
  GET_LEAGUE_TEAM_API_DATA,
  GET_LEAGUE_VISITORTEAM_API_DATA,
  league_id
  
  
 
} from './action';

const initialPlayercount={
  team_one_playercount:0,
  team_two_playercount:0
}
const initialContestTeamName= 
{
  contest_team_name_one:'',
  contest_team_name_two:'',
  contestteams_name:[]
}
const  initialState={
    name:'',
    mobilenumber:"",
  
  }
const initial_League_Id={
  league_id_detail:2
}

  const  initialState_GameName={
    
    gname:'Mega Win Premier League',
  
  }
  const  initial_GET_TEAMS_DATA={
    
    teamsdata:[],
  }
  const  initial_GET_MEGACONTEST_MATCHES_DATA={
    
    megacontestmatchesdata:[],
  }
  const  initial_LEAGUE_DTL_API_DATA={
    
    get_league_dtl_api_data:[]
   
    
  }
  const  initial_LEAGUE_LIVESCORE_API_DATA={
    
    
    get_league_livescore_api_data:[],
    isLoading: false,
  isError: false,
    
  }
const initial_LEAGUE_TEAM_API_DATA_REDUCER={
  get_league_team_api_data:[],
  get_league_team_visitorteam_id_api_data:[]
}


const initial_UPCOMING_CONTEST_MATCHES_DATA={
}
const leagueIdReducer= (state=initial_League_Id,action)=>
{
  switch(action.type)
  {
      case LEAGUE_ID:
          return{...state,league_id_detail:action.payload};
    
            default:
                return state;
  }
}




const userReducer= (state=initialState,action)=>
{
  switch(action.type)
  {
      case SET_USER_NAME:
          return{...state,name:action.payload};
      case SET_USER_MOBILENUMBER:
            return{...state,mobilenumber:action.payload};
     
            default:
                return state;
  }
}


const userReducer1= (state=initialState_GameName,action)=>
{
  switch(action.type)
  {
            case SET_GAME_NAME:
                return{...state,gname:action.payload};
            default:
                return state;
  }
}
const teamsDataReducer= (state=initial_GET_TEAMS_DATA,action)=>
{
  switch(action.type)
  {
            case GET_TEAMS_DATA:
                return{...state,teamsdata:action.payload};

            default:
                return state;
  }
}
const megacontestuserReducer= (state=initial_GET_MEGACONTEST_MATCHES_DATA,action)=>
{
  switch(action.type)
  {
            case GET_MEGACONTEST_MATCHES_DATA:
                return{...state,megacontestmatchesdata:action.payload};

            default:
                return state;
  }
}

const get_LEAGUE_DTL_API_DATA_REDUCER= (state=initial_LEAGUE_DTL_API_DATA,action)=>
{
  switch(action.type)
  {
            case GET_LEAGUE_DTL_API_DATA:
                return{...state,get_league_dtl_api_data:action.payload};

            default:
                return state;
  }
}

const get_LEAGUE_LIVESCORE_API_DATA_REDUCER= (state=initial_LEAGUE_LIVESCORE_API_DATA,action)=>
{
  switch(action.type)
  {
            case GET_LEAGUE_LIVESCORE_API_DATA:
                return{...state,get_league_livescore_api_data:action.payload, isLoading: false};

            default:
                return state;
  }
 
}

const contestplayerselectorReducer= (state=initialPlayercount,action)=>
{
  switch(action.type)
  {
            case SHORT_TEAM_ONE_PALYERCOUNT_ADDITION:
                return{...state,team_one_playercount:state.team_one_playercount+1};
            case SHORT_TEAM_TWO_PALYERCOUNT_ADDITION:
                  return{...state,team_two_playercount:state.team_two_playercount+1};
            case SHORT_TEAM_ONE_PALYERCOUNT_SUBSTRACTION:
                    return{...state,team_one_playercount:state.team_one_playercount-1};
            case SHORT_TEAM_TWO_PALYERCOUNT_SUBSTRACTION:
                      return{...state,team_two_playercount:state.team_two_playercount-1};
            default:
                return state;
  }
}
const contestTeamReducer= (state=initialContestTeamName,action)=>
{
  // if(state.contest_team_name_one){


  // }
  // else{

  // }
  switch(action.type)
  {         
            case SET_CONTEST_TEAM_ONE_NAME:
                       
                    return{...state,team_one_playercount:state.team_one_playercount+1};
            case SET_CONTEST_TEAM_TWO_NAME:
                      return{...state,team_two_playercount:state.team_two_playercount-1};
            case UNSET_CONTEST_TEAM_ONE_NAME:
                    return{...state,team_one_playercount:state.team_one_playercount+1};
            case UNSET_CONTEST_TEAM_TWO_NAME:
                      return{...state,team_two_playercount:state.team_two_playercount-1};
            default:
                return state;
  }
}


// const upcomingcontestMatchesDataReducer= (state=initial_UPCOMING_CONTEST_MATCHES_DATA,action)=>
// {
//   switch(action.type)
//   {
//             case GET_UPCOMING_MATCHES_DATA:
//                 return{...state,upcomingmatchesdata:action.payload};

//             default:
//                 return state;
//   }
// }

const get_LEAGUE_TEAM_API_DATA_REDUCER= (state=initial_LEAGUE_TEAM_API_DATA_REDUCER,action)=>
{
  switch(action.type)
  {
            case GET_LEAGUE_TEAM_API_DATA:
                return{...state,get_league_team_api_data:action.payload};

            case GET_LEAGUE_VISITORTEAM_API_DATA:
                  return{...state,get_league_team_visitorteam_id_api_data:action.payload};    
            default:
                return state;
  }
}

export  {
  userReducer,userReducer1,
  teamsDataReducer,
  megacontestuserReducer,
  contestplayerselectorReducer,
  contestTeamReducer,
// upcomingcontestMatchesDataReducer,
  get_LEAGUE_DTL_API_DATA_REDUCER,
  get_LEAGUE_LIVESCORE_API_DATA_REDUCER,
  get_LEAGUE_TEAM_API_DATA_REDUCER,
  leagueIdReducer
};