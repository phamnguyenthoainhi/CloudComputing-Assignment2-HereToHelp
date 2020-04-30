import {
    
    GET_TASKS_LOADING, GET_TASKS_SUCCESS, 
    TAKE_TASK_LOADING, TAKE_TASK_SUCCESS,
    GET_TASKS_LOADING_ADMIN, GET_TASKS_SUCCESS_ADMIN,
    GET_TASKS_LOADING_VOLUNTEER, GET_TASKS_SUCCESS_VOLUNTEER
    
} from '../actions/actionTypes';

const initialState = {
    tasks: [],
    task: {},
    loadingTasks: false,
    
    loadingTask: false,
    successTask: false,
    loadingTakeTask: false,
    successTakeTask: false,
    loadingTaskAdmin: false,
    successTaskAdmin: false,
    loadingTaskVolunteer: false,
    successTaskVolunteer: false

    

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
        case GET_TASKS_LOADING_ADMIN:
                return {
                    ...state,
                    loadingTasksAdmin: true,
            }
        case GET_TASKS_SUCCESS_ADMIN: 
    
                return {
                    ...state,
                    tasksadmin: action.payload,
                    loadingTasksAdmin: false
                }
        case GET_TASKS_LOADING_VOLUNTEER:
                return {
                    ...state,
                    loadingTasksVolunteer: true,
            }
        case GET_TASKS_SUCCESS_VOLUNTEER: 
    
                return {
                    ...state,
                    tasksvolunteer: action.payload,
                    loadingTasksVolunteer: false
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