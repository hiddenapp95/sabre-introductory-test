import moment from 'moment';
import {DATE_OF_BIRTH_PROPERTY, filters} from "../assignmentConstants";

export const getPlayerAge = (player) =>  moment().diff(moment(player[DATE_OF_BIRTH_PROPERTY], 'YYYY-MM-DD'), 'years');

const playerHasAge = (player,age) => getPlayerAge(player) === parseInt(age,10);

const playerPropertyHasValue = (player,property,value) => player[property].includes(value);

export const getFilterObjectFromArray = () => {
    let filterObject = {};
    filters.map(filter=>{
        filterObject[filter.name] = "";
        return filter;
    });
    return filterObject
};

const playerMatchesFilters = (player, filters) => {

    let filterKeys = Object.keys(filters);

    for(let i=0;i<filterKeys.length;i++){
        let filterKey = filterKeys[i];
        let filterValue = filters[filterKey];

        if(!filterValue || filterValue === "" || parseInt(filterValue,10) === 0)
            continue;

        if(filterKey === "age"){
            if( !playerHasAge(player,filterValue) ) return false;
        }else{
            if( !playerPropertyHasValue(player,filterKey,filterValue) ) return false;
        }
    }
    return true;
};

export const filterVisible = (players, filters) => players.filter(player => playerMatchesFilters(player,filters));