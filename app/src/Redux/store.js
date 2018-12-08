import { applyMiddleware , createStore } from 'redux';
import RootReducers from './Reducers';
import { logger } from 'redux-logger';
import thunkMiddleWare from 'redux-thunk'; 

let middlwaers = [thunkMiddleWare,logger];
export default  createStore(
        RootReducers,
        applyMiddleware(logger,thunkMiddleWare)
)