import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {
  userReducer,userReducer1,
  //  upcomingcontestuserReducer,
    megacontestuserReducer,
    contestplayerselectorReducer,
    contestTeamReducer,
    teamsDataReducer,
    get_LEAGUE_DTL_API_DATA_REDUCER,
    get_LEAGUE_LIVESCORE_API_DATA_REDUCER,
    get_LEAGUE_TEAM_API_DATA_REDUCER,
    leagueIdReducer
} from './reducers';


const rootReducer=combineReducers({userReducer,
    userReducer1,
  //  upcomingcontestuserReducer,
    teamsDataReducer,
    megacontestuserReducer,
    contestplayerselectorReducer,
    contestTeamReducer,
    get_LEAGUE_DTL_API_DATA_REDUCER,
    get_LEAGUE_LIVESCORE_API_DATA_REDUCER,
    get_LEAGUE_TEAM_API_DATA_REDUCER,
    leagueIdReducer});
export const Store = createStore(rootReducer,applyMiddleware(thunk));