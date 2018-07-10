import {filterVisible, getFilterObjectFromArray} from "./model";
import {DATE_OF_BIRTH_PROPERTY} from "../assignmentConstants";

test('getFilterObjectFromArray correctly transforms a filter array into object', () => {
    const dummyArray = [{name:"test1"},{name:"test2"}];
    const expectedResult = {test1:"",test2:""};

    expect(JSON.stringify(getFilterObjectFromArray(dummyArray))).toBe(JSON.stringify(expectedResult));
});

test('filterVisible filter an array with property name not empty',()=>{
    const players = [{name:"fran"},{name:"roberti"}];
    const filters = {name:"fran"};
    const expectedResult=[{name:"fran"}];
    expect(JSON.stringify(filterVisible(players,filters))).toBe(JSON.stringify(expectedResult));
});

test('filterVisible filter an array with property name empty',()=>{
    const players = [{name:"fran"},{name:"roberti"}];
    const filters = {name:""};
    expect(JSON.stringify(filterVisible(players,filters))).toBe(JSON.stringify(players));
});

test('filterVisible filter an array with property age not empty',()=>{
    const players = [{name:"fran",[DATE_OF_BIRTH_PROPERTY]:"1988-01-01"},{name:"roberti",[DATE_OF_BIRTH_PROPERTY]:"1987-01-01"}];
    const filters = {age:30};
    const expectedResult=[{name:"fran",[DATE_OF_BIRTH_PROPERTY]:"1988-01-01"}];
    expect(JSON.stringify(filterVisible(players,filters))).toBe(JSON.stringify(expectedResult));
});

test('filterVisible filter an array with property age empty',()=>{
    const players = [{name:"fran",[DATE_OF_BIRTH_PROPERTY]:"1988-01-01"},{name:"roberti",[DATE_OF_BIRTH_PROPERTY]:"1987-01-01"}];
    const filters = {age:""};
    expect(JSON.stringify(filterVisible(players,filters))).toBe(JSON.stringify(players));
});