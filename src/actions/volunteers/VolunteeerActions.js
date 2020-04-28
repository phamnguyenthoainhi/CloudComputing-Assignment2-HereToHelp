import {
    GET_TASKS_LOADING,GET_TASKS_SUCCESS
    


} from '../actionTypes';


export const getTasks = () => dispatch => {
    dispatch({
        type: GET_TASKS_LOADING
    })
    fetch('http://localhost:8080/tasks', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        
    })
    .then((res) => res.json())
    .then((tasks) => 
    dispatch({
        type: GET_TASKS_SUCCESS,
        payload: tasks
    })
    )
    

}

