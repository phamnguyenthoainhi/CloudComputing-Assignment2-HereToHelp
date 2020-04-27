import {combineReducers} from 'redux';
import UserReducer from './UserReducer.js'
export default combineReducers({
    problem: UserReducer,
    loadingProblem: UserReducer,
    successProblem: UserReducer
})