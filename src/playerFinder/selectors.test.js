import {NAME} from "./constants";
import {fetchingPlayers, getVisiblePlayers} from "./selectors";

test('fetchingPlayers retursn the fetchingPlayers prop from store', () => {
    const dummyStore = {[NAME]:{fetchingPlayers:true}};

    expect(fetchingPlayers(dummyStore)).toBe(true);
});

test('getVisiblePlayers returns filterVisible with params from store',()=>{
    const players = [{name:"fran"},{name:"roberti"}];
    const filters = {name:"fran"};
    const dummyStore = {[NAME]: {players : players, filter: filters}};

    expect(JSON.stringify(getVisiblePlayers(dummyStore))).toBe(JSON.stringify([{name:"fran"}]));
});