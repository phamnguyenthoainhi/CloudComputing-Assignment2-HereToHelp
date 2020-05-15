import {
    
    GET_TASKS_LOADING, GET_TASKS_SUCCESS, 
    GET_MYTASKS_LOADING, GET_MYTASKS_SUCCESS,
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
    successTaskVolunteer: false,

    loadingMyTasks: false,
    myTasks: []


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


        case GET_MYTASKS_LOADING:
            
                return {
                    ...state,
                    loadingMyTasks: true,
            }
        case GET_MYTASKS_SUCCESS: 
                return {
                    ...state,
                    myTasks: action.payload,
                    loadingMyTasks: false
                }


            
        case GET_TASKS_LOADING_ADMIN:
                return {
                    ...state,
                    loadingTaskAdmin: true,
            }
        case GET_TASKS_SUCCESS_ADMIN: 
    
                return {
                    ...state,
                    tasksadmin: action.payload,
                    loadingTaskAdmin: false
                }


        case GET_TASKS_LOADING_VOLUNTEER:
                return {
                    ...state,
                    loadingTasksVolunteer: true,
            }
        case GET_TASKS_SUCCESS_VOLUNTEER: 

        console.log(action.payload)
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