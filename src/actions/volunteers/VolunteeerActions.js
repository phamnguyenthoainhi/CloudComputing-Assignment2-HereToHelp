import {
    GET_TASKS_LOADING,GET_TASKS_SUCCESS,
    GET_MYTASKS_LOADING, GET_MYTASKS_SUCCESS,
    GET_TASKS_LOADING_ADMIN,GET_TASKS_SUCCESS_ADMIN,
    GET_TASKS_LOADING_VOLUNTEER,GET_TASKS_SUCCESS_VOLUNTEER,
    TAKE_TASK_LOADING,TAKE_TASK_SUCCESS  ,
    


} from '../actionTypes';

import {triggersendemail} from '../anonymoususers/UserActions'


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
    {
        
        dispatch({
            type: GET_TASKS_SUCCESS,
            payload: tasks
        })
    }
        
    )
    

}

export const getTasksAdmin = () => dispatch => {
    dispatch({
        type: GET_TASKS_LOADING_ADMIN
    })
    fetch('http://localhost:8080/tasks', {
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

export const getMyTasks = (id) => dispatch => {
    
    dispatch({
        type: GET_MYTASKS_LOADING
    })
    fetch(`http://localhost:8080/tasksByVolunteer?v_id=${id}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
                'Content-type': 'application/json'
        },
    })
    .then((res) => res.json())
    .then((data) => {
        
        dispatch({
            type: GET_MYTASKS_SUCCESS,
            payload: data
        })
    }
        
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
             if (task.status === "Starting") {
                 if (task.problem.email !== null && task.problem.email !== "") {
                    const email = {
                        email: task.problem.email,
                        subject: "HereToHelp Update",
                        content: "A Volunteer has been assigned to help you!. Stay tuned"
                    }
                    // dispatch(triggersendemail(email))
                 }
                
             }
             if (task.status === "Done") {
                const email = {
                    email: task.volunteer.email,
                    subject: "HereToHelp Update",
                    content: "Your task has been resolved by Admin. You can check it out in your Resolved section in you Task Board!"
                }
                // dispatch(triggersendemail(email))
             }
 
             
         } else {
             dispatch({
                 type: TAKE_TASK_SUCCESS,
                 payload: false
             })
         }
    })
}

