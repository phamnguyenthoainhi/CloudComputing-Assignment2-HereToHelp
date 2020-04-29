import {
    REGISTER_PROBLEM_LOADING,REGISTER_PROBLEM_SUCCESS, 
    REGISTER_ACCOUNT, REGISTER_ACCOUNT_LOADING,REGISTER_ACCOUNT_SUCCESS,
    LOGIN_ACCOUNT, LOGIN_ACCOUNT_LOADING,LOGIN_ACCOUNT_SUCCESS,
    REGISTER_TASK, REGISTER_TASK_LOADING,REGISTER_TASK_SUCCESS,
    GET_PROBLEM_SUCCESS,
    GET_TASKS_LOADING,GET_TASKS_SUCCESS,
     
    


} from '../actionTypes';

export const registerProblem = (problem) => dispatch => {
    dispatch({
        type: REGISTER_PROBLEM_LOADING
    })
    fetch('http://localhost:8080/problems', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
                'Content-type': 'application/json'
        },
        body: JSON.stringify(problem)
    })



    .then((res) => {
      
        if(res.status === 200) {
            res.json().then(function(data) {
                window.sessionStorage.setItem("problem_id", data);
            })
            dispatch({
                type: REGISTER_PROBLEM_SUCCESS,
                payload: true
            })

            
        } else {
            dispatch({
                type: REGISTER_PROBLEM_SUCCESS,
                payload: false
            })
            // return null;
        }
    })
}

export const getAProblem = (id) => dispatch => {
    fetch(`http://localhost:8080/problem?id=${id}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
       
    })
    .then((res) => {
        if (res.status === 200) {
            res.json().then(function(data) {
                const task = {
                    problem: data,
                    status: 'Pending'
                }
                dispatch({
                    type: REGISTER_TASK_LOADING
                })
                fetch('http://localhost:8080/tasks', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                            'Content-type': 'application/json'
                    },
                    body: JSON.stringify(task)
                })
                .then((res) => {
                    if(res.status === 200) {
                        dispatch({
                            type: REGISTER_TASK_SUCCESS,
                            payload: true
                        })
            
                        
                    } else {
                        dispatch({
                            type: REGISTER_TASK_SUCCESS,
                            payload: false
                        })
                    }
                })

               

            })
            
        }
    })
}
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
    .then((res) =>  {
        if(res.status === 200) {
            dispatch({
                type: GET_TASKS_SUCCESS,
                payload: true
            })
        }
    })

}

export const createTask = (task) => dispatch => {
    dispatch({
        type: REGISTER_TASK_LOADING
    })
    fetch('http://localhost:8080/tasks', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
                'Content-type': 'application/json'
        },
        body: JSON.stringify(task)
    })
    .then((res) => {
        
         if(res.status === 200) {
             dispatch({
                 type: REGISTER_TASK_SUCCESS,
                 payload: true
             })
 
             
         } else {
             dispatch({
                 type: REGISTER_TASK_SUCCESS,
                 payload: false
             })
         }
     })

}


