import { applyMiddleware, combineReducers, createStore } from "redux";
import playersReducer from "./players-reducer";
import teamsReducer from './teams-reducer';
import thunkMiddleware from 'redux-thunk'

let redusers = combineReducers({
    teamsPart: teamsReducer,
    playersPart: playersReducer
})

let store = createStore(redusers, applyMiddleware(thunkMiddleware))

export default store;