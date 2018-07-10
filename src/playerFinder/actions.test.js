import {fetchPlayers, filterPlayersBy} from "./actions";
import store from "../store"
import {FETCH_PLAYERS, FETCH_PLAYERS_FULFILLED, FETCH_PLAYERS_REJECTED, RESET} from "./actionTypes";
import {NAME} from "./constants";

test('filterPlayersBy calls parameter function', () => {
    const dispatch = jest.fn();
    filterPlayersBy()(dispatch);
    expect(dispatch).toBeCalled();
});

test('fetchPlayers calls parameter function',()=>{
    const dispatch = jest.fn();
    fetchPlayers(dispatch)
        .then((response)=>expect(Array.isArray(response)).toBe(true))
        .catch((error)=>expect(error.status!==200).toBe(true));
    expect(dispatch).toBeCalled();
});

test('fetchPlayers calls parameter function', ()=>{
    const dispatch = jest.fn();
    fetchPlayers(dispatch)
        .catch((error)=>{});
    expect(dispatch).toBeCalled();
});

test('mocking dispatch fetchPlayers response is an array on success and on error, error has status !== OK', async ()=>{
    const dispatch = jest.fn();
    fetchPlayers(dispatch)
        .then((response)=>expect(Array.isArray(response)).toBe(true))
        .catch((error)=>expect(error.status!==200).toBe(true));
});

test('if dispatching fetchPlayers action fetchingPlayers prop is false before/after dispatch', async ()=>{

    store.dispatch({type:RESET});

    expect(store.getState()[NAME].fetchingPlayers).toEqual(false);

    try {
        const response = await store.dispatch(fetchPlayers);
        expect(store.getState()[NAME].fetchingPlayers).toEqual(false);
    }catch(e){
    }
});

test('if dispatching fetchPlayers action fetchPlayersFulfilled prop is false before dispatch, and true after', async ()=>{

    store.dispatch({type:RESET});

    expect(store.getState()[NAME].fetchPlayersFulfilled).toEqual(false);

    try {
        const response = await store.dispatch(fetchPlayers);
        expect(store.getState()[NAME].fetchPlayersFulfilled).toEqual(true);
    }catch(e){
    }
});