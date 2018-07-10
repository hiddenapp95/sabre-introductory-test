import reducer from "./reducer";
import {FETCH_PLAYERS, FETCH_PLAYERS_FULFILLED, FETCH_PLAYERS_REJECTED, FILTER_BY, RESET} from "./actionTypes";
import {getFilterObjectFromArray} from "./model";

test('FETCH_PLAYERS action returns the initial state with the prev players array and fetchingPlayer prop true', () => {
    const dummyAction = {type:FETCH_PLAYERS};
    const initialState = {
        players: [{name:"Player name"}],
        filter: getFilterObjectFromArray(),
        fetchingPlayers:false,
        fetchPlayersFulfilled: false,
        fetchPlayersRejected: false,
        fetchPlayersError: null
    };
    const expectedResult = {...initialState,fetchingPlayers:true};

    expect(JSON.stringify(reducer(initialState,dummyAction))).toBe(JSON.stringify(expectedResult));
});

test('FETCH_PLAYERS_FULFILLED action correctly returns the state', () => {
    const players = [{name:"Messi"}];
    const dummyAction = {type:FETCH_PLAYERS_FULFILLED,payload:players};
    const expectedResult =  {fetchingPlayers:false,fetchPlayersFulfilled:true, players: players};

    expect(JSON.stringify(reducer({},dummyAction))).toBe(JSON.stringify(expectedResult));
});

test('FETCH_PLAYERS_REJECTED action correctly returns the state', () => {
    const error = {message:"Error"};
    const dummyAction = {type:FETCH_PLAYERS_REJECTED,error:error};
    const expectedResult =  {fetchingPlayers:false,fetchPlayersRejected:true, fetchPlayersError: error};

    expect(JSON.stringify(reducer({},dummyAction))).toBe(JSON.stringify(expectedResult));
});


test('FILTER_BY action correctly returns the state', () => {
    const prevState = {filter:{test:"prevValue"}};
    const filter = {name:"test",value:"testValue"};
    const dummyAction = {type:FILTER_BY,payload:filter};
    const expectedResult =  {filter:{test:"testValue"}};

    expect(JSON.stringify(reducer(prevState,dummyAction))).toBe(JSON.stringify(expectedResult));
});

test('FILTER_BY action correctly returns the state', () => {
    const prevState = {filter:{test:"prevValue"}};
    const dummyAction = {type:"DUMMY"};
    const expectedResult = prevState;

    expect(JSON.stringify(reducer(prevState,dummyAction))).toBe(JSON.stringify(expectedResult));
});

test('RESET action correctly returns the state', () => {
    const initialState = {filter:{test:"prevValue"}};
    const dummyAction = {type:RESET};
    const expectedResult = initialState;

    expect(JSON.stringify(reducer(initialState,dummyAction))!==JSON.stringify(expectedResult)).toBe(true);
});