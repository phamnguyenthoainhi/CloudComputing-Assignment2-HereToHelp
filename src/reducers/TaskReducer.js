import {
    
    GET_TASKS_LOADING, GET_TASKS_SUCCESS, TAKE_TASK_LOADING, TAKE_TASK_SUCCESS
    
} from '../actions/actionTypes';

const initialState = {
    tasks: [],
    task: {},
    loadingTasks: false,
    
    loadingTask: false,
    successTask: false,
    loadingTakeTask: false,
    successTakeTask: false
    

}

export default function (state = initialState, action) {
    switch(action.type) {
   
        case GET_TASKS_LOADING:
            return {
                ...state,
                loadingTasks: true,
        }
        case GET_TASKS_SUCCESS: 

            return {
                ...state,
                tasks: action.payload,
                loadingTasks: false
            }
        
        case TAKE_TASK_LOADING:
            return {
                ...state,
                loadingTakeTask: true,
        }
        case TAKE_TASK_SUCCESS: 

            return {
                ...state,
                successTakeTask: action.payload,
                loadingTakeTask: false
        }
        
            
        default:
            return state;                
    }
}