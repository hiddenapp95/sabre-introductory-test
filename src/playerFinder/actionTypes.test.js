import * as types from "./actionTypes";

test('All action types are strings', () => {
    let typeKeys = Object.keys(types);
    for(let i=0;i<typeKeys.length;i++) expect(typeof types[typeKeys[i]] === 'string').toBe(true);
});

