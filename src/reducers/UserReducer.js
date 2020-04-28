import {
    REGISTER_PROBLEM_LOADING,REGISTER_PROBLEM_SUCCESS, GET_PROBLEM_SUCCESS,
    REGISTER_ACCOUNT, REGISTER_ACCOUNT_LOADING,REGISTER_ACCOUNT_SUCCESS,
    LOGIN_ACCOUNT, LOGIN_ACCOUNT_LOADING,LOGIN_ACCOUNT_SUCCESS,
    REGISTER_TASK_LOADING, REGISTER_TASK_SUCCESS,
    
    
    
} from '../actions/actionTypes';

const initialState = {
    problem: {},
    loadingProblem: false,
    successProblem: false,
    loadingTask: false,
    successTask: false,
    



}

export default function (state = initialState, action) {
    switch(action.type) {
   
        case GET_PROBLEM_SUCCESS:
            return {
                ...state,
                problem: action.payload,
        }
        case REGISTER_PROBLEM_LOADING: 

            return {
                ...state,
                loadingProblem: true
            }
        case REGISTER_PROBLEM_SUCCESS:
            return {
                ...state,
                successProblem: action.payload,
                loadingProblem: false
            }


            case REGISTER_TASK_LOADING: 

            return {
                ...state,
                loadingTask: true
            }
        case REGISTER_TASK_SUCCESS:
            return {
                ...state,
                successTask: action.payload,
                loadingTask: false
            }
            
    
        default:
            return state;                
    }
}