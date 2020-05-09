import {createStore,applyMiddleware, Store} from 'redux';
import thunkMiddleWare from 'redux-thunk';
import {createLogger} from 'redux-logger';

import RootReducer from '../reducers/';

const middleWares= [
    createLogger(),
    thunkMiddleWare
];



export function configureStore({initialState} : {initialState:any}){
    const store = createStore(RootReducer,initialState,applyMiddleware(...middleWares));
    return store;
}
