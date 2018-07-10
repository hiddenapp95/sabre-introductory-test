import {
    FETCH_PLAYERS,
    FETCH_PLAYERS_REJECTED,
    FETCH_PLAYERS_FULFILLED,
    FILTER_BY,
    RESET
} from './actionTypes';
import {getFilterObjectFromArray} from "./model";


const initialState = {
    players: [],
    filter: getFilterObjectFromArray(),
    fetchingPlayers:false,
    fetchPlayersFulfilled: false,
    fetchPlayersRejected: false,
    fetchPlayersError: null
};

export default function reducer(state=initialState,action){
    switch(action.type){
        case FETCH_PLAYERS: return {...initialState,players:state.players,fetchingPlayers:true};
        case FETCH_PLAYERS_REJECTED: return {...state,fetchingPlayers:false,fetchPlayersRejected:true,fetchPlayersError:action.error};
        case FETCH_PLAYERS_FULFILLED: return {...state,fetchingPlayers:false,fetchPlayersFulfilled:true, players: action.payload};
        case FILTER_BY: return {...state, filter: {...state.filter,[action.payload.name]: action.payload.value}};
        case RESET: return {...initialState};
        default: return {...state}
    }
}