import {
    GET_TASKS_LOADING,GET_TASKS_SUCCESS,
    GET_MYTASKS_LOADING, GET_MYTASKS_SUCCESS,
    GET_TASKS_LOADING_ADMIN,GET_TASKS_SUCCESS_ADMIN,
    GET_TASKS_LOADING_VOLUNTEER,GET_TASKS_SUCCESS_VOLUNTEER,
    TAKE_TASK_LOADING,TAKE_TASK_SUCCESS,
    GET_VERIFYING_TASKS_SUCCES,
    GET_STARTING_TASKS_SUCCES,
    GET_DONE_TASKS_SUCCESS
    


} from '../actionTypes';

// import {triggersendemail} from '../anonymoususers/UserActions'
import {backend_url} from '../backendurl'

export const getTasks = () => dispatch => {
    dispatch({
        type: GET_TASKS_LOADING
    })
    fetch(backend_url+'/tasksbyStatus?status=Pending', {
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
    fetch(backend_url+'/tasks', {
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
    }))
    
}
// export const getTasksVolunteer = () => dispatch => {
//     dispatch({
//         type: GET_TASKS_LOADING_VOLUNTEER
//     })
//     fetch(backend_url+'/tasksbyStatus?status=Starting', {
//         method: 'GET',
//         headers: {
//             'Accept': 'application/json',
//             'Content-type': 'application/json'
//         },
        
//     })
//     .then((res) => res.json())
//     .then((tasksvolunteer) => 
//     dispatch({
//         type: GET_TASKS_SUCCESS_VOLUNTEER,
//         payload: tasksvolunteer
//     })
//     )

// }

export const getVolunteerTasks = (status, id) => dispatch => {
    console.log(id)
    dispatch({
        type: GET_TASKS_LOADING_VOLUNTEER
    })
    console.log(backend_url+`/sortTasks?status=${status}&id=${id}`)
    fetch(backend_url+`/sortTasks?status=${status}&id=${id}`, {
        method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
    })
    .then((res) => res.json()
    // {
        
    //     if(res.status === 200) {
    //         res.json().then(function(data) { 
    //             console.log(data)
    //             dispatch({
    //                 type: GET_TASKS_SUCCESS_VOLUNTEER,
    //                 payload: data
    //             })
                
    //         })
            
    //     }
    // }
    )
    .then((tasks) => {
        console.log(tasks)
        dispatch({
            type: GET_TASKS_SUCCESS_VOLUNTEER,
            payload: tasks
        })

    })
    
}



export const getMyTasks = (id) => dispatch => {
    
    dispatch({
        type: GET_MYTASKS_LOADING
    })
    fetch(backend_url+`/tasksByVolunteer?v_id=${id}`, {
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
    fetch(backend_url+'/tasks', {
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
                    // const email = {
                    //     email: task.problem.email,
                    //     subject: "HereToHelp Update",
                    //     content: "A Volunteer has been assigned to help you. Stay tuned!"
                    // }
                    // dispatch(triggersendemail(email))
                 }
                
             }
             if (task.status === "Done") {
                // const email = {
                //     email: task.volunteer.email,
                //     subject: "HereToHelp Update",
                //     content: "Your task has been resolved by Admin. You can check it out in your Resolved section in your Task Board!"
                // }
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

