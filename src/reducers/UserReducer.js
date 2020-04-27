import {
    REGISTER_PROBLEM, REGISTER_PROBLEM_LOADING,REGISTER_PROBLEM_SUCCESS, 
    REGISTER_ACCOUNT, REGISTER_ACCOUNT_LOADING,REGISTER_ACCOUNT_SUCCESS,
    LOGIN_ACCOUNT, LOGIN_ACCOUNT_LOADING,LOGIN_ACCOUNT_SUCCESS,
    
} from '../actions/actionTypes';

const initialState = {
    problem: {},
    loadingProblem: false,
    successProblem: false


}

export default function (state = initialState, action) {
    switch(action.type) {
   
        case REGISTER_PROBLEM:
            return {
                ...state,
                problem: action.payload,
                loadingProblem: false,
                successProblem: false
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
    
        default:
            return state;                
    }
}