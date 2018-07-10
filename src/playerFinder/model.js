import moment from 'moment';
import {DATE_OF_BIRTH_PROPERTY, filtersInfo} from "../assignmentConstants";
import {getAgeFromDate} from "../utils/date";

const playerHasAge = (player,age) => getAgeFromDate(moment(player[DATE_OF_BIRTH_PROPERTY])) === parseInt(age,10);

const playerPropertyHasValue = (player,property,value) => player[property].toLowerCase().includes(value.toLowerCase());

export const getFilterObjectFromArray = (filtersArray=filtersInfo) => {
    let filterObject = {};
    filtersArray.map(filter=>{
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