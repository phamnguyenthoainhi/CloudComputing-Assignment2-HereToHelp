import {
    
    GET_TASKS_LOADING, GET_TASKS_SUCCESS,
    
} from '../actions/actionTypes';

const initialState = {
    tasks: [],
    task: {},
    loadingTasks: false,
    
    loadingTask: false,
    successTask: false,
    

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
        
            
        default:
            return state;                
    }
}