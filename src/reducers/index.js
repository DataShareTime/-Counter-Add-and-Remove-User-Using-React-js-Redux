import counterReducer from './counter'
import userReducer from './user'
import {combineReducers} from "redux";


const allReducers = combineReducers({
    userReducer: userReducer,
    counterReducer: counterReducer
})

export default allReducers;