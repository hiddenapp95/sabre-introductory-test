import { NAME } from './constants';
import {filterVisible} from './model';

// export const getAll = state => state[NAME];
//
// export const getAllPlayers = state => state[NAME].players;

export const fetchingPlayers = state => state[NAME].fetchingPlayers;

export const getVisiblePlayers = state => filterVisible(state[NAME].players,state[NAME].filter);

export const getFilter = state => state[NAME].filter;