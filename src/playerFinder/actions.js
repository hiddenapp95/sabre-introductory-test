import {
    FETCH_PLAYERS,
    FETCH_PLAYERS_REJECTED,
    FETCH_PLAYERS_FULFILLED,
    FILTER_BY
} from './actionTypes';
import axios from "axios/index";

const API_URL = "https://football-players-b31f2.firebaseio.com/";

const fetchPlayers = async (dispatch) => {

    dispatch({type:FETCH_PLAYERS});

    try{
        const footballPlayers = await getFootballPlayers();
        dispatch({type:FETCH_PLAYERS_FULFILLED,payload:footballPlayers});
        return footballPlayers;
    }catch(error){
        dispatch({type:FETCH_PLAYERS_REJECTED,error:error});
        throw error;
    }
};

const filterPlayersBy = (filterName,value) =>
    (dispatch,state) =>
        dispatch({type:FILTER_BY,payload:{name:filterName,value:value}});

const getFootballPlayers = () =>
    axios.get(API_URL+"/players.json?print=pretty")
        .then((response)=> response.data)
        .catch((error)=> {throw error});


export {fetchPlayers,filterPlayersBy}