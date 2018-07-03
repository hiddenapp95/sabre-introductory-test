import {applyMiddleware, createStore} from 'redux'
import reducers from "./main/reducer"
import thunk from 'redux-thunk';
import logger from 'redux-logger'
// import {loadState, saveState} from "./localStorage";

//const persistedState = loadState();


const store =
    createStore(
        reducers,
        applyMiddleware(thunk,logger)
    );

// store.subscribe(() =>{
//     console.log(store);
//     saveState(store.getState())
// });

export default store;