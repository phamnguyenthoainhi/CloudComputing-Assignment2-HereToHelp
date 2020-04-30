import {
    GET_TASKS_LOADING,GET_TASKS_SUCCESS,
    GET_TASKS_LOADING_ADMIN,GET_TASKS_SUCCESS_ADMIN,
    GET_TASKS_LOADING_VOLUNTEER,GET_TASKS_SUCCESS_VOLUNTEER,
    TAKE_TASK_LOADING,TAKE_TASK_SUCCESS  ,
    


} from '../actionTypes';


export const getTasks = () => dispatch => {
    dispatch({
        type: GET_TASKS_LOADING
    })
    fetch('http://localhost:8080/tasksbyStatus?status=Pending', {
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

export const getTasksAdmin = () => dispatch => {
    dispatch({
        type: GET_TASKS_LOADING_ADMIN
    })
    fetch('http://localhost:8080/tasksbyStatus?status=Completing', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        
    })
    .then((res) => res.json())
    .then((tasksadmin) => 
    dispatch({
        type: GET_TASKS_SUCCESS_ADMIN,
        payload: tasksadmin
    })
    )
    

}
export const getTasksVolunteer = () => dispatch => {
    dispatch({
        type: GET_TASKS_LOADING_VOLUNTEER
    })
    fetch('http://localhost:8080/tasksbyStatus?status=Starting', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        
    })
    .then((res) => res.json())
    .then((tasksvolunteer) => 
    dispatch({
        type: GET_TASKS_SUCCESS_VOLUNTEER,
        payload: tasksvolunteer
    })
    )
    

}
export const takeTask = (task) => dispatch => {
    dispatch({
        type: TAKE_TASK_LOADING
    })
    fetch('http://localhost:8080/tasks', {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
                'Content-type': 'application/json'
        },
        body: JSON.stringify(task)
    })
    .then((res) => {
        
         if(res.status === 200) {
             dispatch({
                 type: TAKE_TASK_SUCCESS,
                 payload: true
             })
 
             
         } else {
             dispatch({
                 type: TAKE_TASK_SUCCESS,
                 payload: false
             })
         }
     })
}

