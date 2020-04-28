import {combineReducers} from 'redux';
import UserReducer from './UserReducer.js';
import TaskReducer from './TaskReducer.js'
export default combineReducers({
    problem: UserReducer,
    loadingProblem: UserReducer,
    successProblem: UserReducer,
    loadingTask: UserReducer,
    successTask: UserReducer,
    loadingTasks: TaskReducer,
    taskReducer: TaskReducer,

})