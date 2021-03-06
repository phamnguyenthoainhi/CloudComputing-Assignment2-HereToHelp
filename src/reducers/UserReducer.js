import {
    REGISTER_PROBLEM_LOADING,REGISTER_PROBLEM_SUCCESS, GET_PROBLEM_SUCCESS,
    REGISTER_ACCOUNT, REGISTER_ACCOUNT_LOADING,REGISTER_ACCOUNT_SUCCESS,
    LOGIN_ACCOUNT, LOGIN_ACCOUNT_LOADING,LOGIN_ACCOUNT_SUCCESS,
    REGISTER_TASK_LOADING, REGISTER_TASK_SUCCESS,
    CONNECT_FAILED
    
    
    
} from '../actions/actionTypes';

const initialState = {
    problem: {},
    loadingProblem: false,
    successProblem: false,

    loadingTask: false,
    successTask: false,

    loadingRegisterAccount: false,
    successRegisterAccount: false,
    registerMessage: '',

    loginMessage: {},
    loadingLoginAccount: false,
    loginSuccess: ""
    
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



        case REGISTER_ACCOUNT: 
            return {
                ...state,
                registerMessage: action.payload,
                loadingRegisterAccount: false
            }
            case REGISTER_ACCOUNT_LOADING: 

            return {
                ...state,
                loadingRegisterAccount: true
            }
        case REGISTER_ACCOUNT_SUCCESS:
            return {
                ...state,
                successRegisterAccount: action.payload,
                loadingRegisterAccount: false
            }
        case CONNECT_FAILED:
            return {
                ...state,
                connectfailed: action.payload,
                loadingRegisterAccount: false
            }


        case LOGIN_ACCOUNT: 
        
            return {
                ...state,
                loadingLoginAccount:false,
                loginMessage: action.payload
            }
        case LOGIN_ACCOUNT_LOADING: 

            return {
                ...state,
                loadingLoginAccount: true
            }
        case LOGIN_ACCOUNT_SUCCESS:
            return {
                ...state,
                loadingLoginAccount:false,
                loginSuccess: action.payload
            }
            
    
        default:
            return state;                
    }
}