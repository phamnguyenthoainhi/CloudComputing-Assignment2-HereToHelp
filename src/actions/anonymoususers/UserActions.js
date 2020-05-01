import {
    REGISTER_PROBLEM_LOADING,REGISTER_PROBLEM_SUCCESS, 
    REGISTER_ACCOUNT, REGISTER_ACCOUNT_LOADING,REGISTER_ACCOUNT_SUCCESS,
    LOGIN_ACCOUNT, LOGIN_ACCOUNT_LOADING,LOGIN_ACCOUNT_SUCCESS,
    REGISTER_TASK, REGISTER_TASK_LOADING,REGISTER_TASK_SUCCESS,
    GET_PROBLEM_SUCCESS,
    GET_TASKS_LOADING,GET_TASKS_SUCCESS,
     
    


} from '../actionTypes';

export const registerVolunteer = (volunteer) => dispatch => {
    dispatch({
        type: REGISTER_ACCOUNT_LOADING
    })
    fetch('http://localhost:8080/registerAccount', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
                'Content-type': 'application/json'
        },
        body: JSON.stringify(volunteer)
    })
    .then((res) => {
        
         if(res.status === 200) {
             dispatch({
                 type: REGISTER_ACCOUNT_SUCCESS,
                 payload: true
             })
 
             
         } 
        if (res.status === 406) {
            dispatch({
                type: REGISTER_ACCOUNT,
                payload: "Email is not in correct format"
            })

        }
        if (res.status === 500) {
            dispatch({
                type: REGISTER_ACCOUNT,
                payload: "Email has already registered. Please log in"
            })

        }
     })

}

export const getUserbyEmail = (email) => dispatch => {
    console.log("Hello")
    fetch(`http://localhost:8080/getVolunteerByEmail?email=${email}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        
    })
    .then((res) => res.json())

    .then((volunteer) => {
        console.log(volunteer)
        sessionStorage.setItem("id", btoa(volunteer.id))
    }
    )


}

export const login = (account) => dispatch => {
    dispatch({
        type: LOGIN_ACCOUNT_LOADING
    })
    fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(account)
    })
    .then((res) => {
         if(res.status === 302) {
            res.json().then(function(data) {
                sessionStorage.setItem("role", data.role)
                
                
                dispatch({
                    type: LOGIN_ACCOUNT_SUCCESS,
                    payload: true 
                })
                fetch(`http://localhost:8080/getVolunteerByEmail?email=${data.email}`, {
                    
                        method: 'GET',
                        headers: {
                            'Accept': 'application/json',
                            'Content-type': 'application/json'
                        },
                        
                    })
                    .then((res) => 
                    { if (res.status === 200) {
                        res.json().then(function(data) {
                            sessionStorage.setItem("id", btoa(data.id))
                        })
                    }
                   
                })

            })   
        } 

        if (res.status === 401) {
            dispatch({
                type: LOGIN_ACCOUNT,
                payload: {
                    code: 'email',
                    message: "Email is either not register or not in correct format. Please try again"
                }
                
            })

        }
        if (res.status === 404) {
            
            dispatch({
                type: LOGIN_ACCOUNT,
                payload: {
                    code: "password",
                    message: "Password is incorrect. Please try again"
                }
                
            })

        }
     })
}
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
// export const getTasks = () => dispatch => {
//     console.log("get tasks")
//     dispatch({
//         type: GET_TASKS_LOADING
//     })
//     fetch('http://localhost:8080/tasks', {
//         method: 'GET',
//         headers: {
//             'Accept': 'application/json',
//             'Content-type': 'application/json'
//         },
        
//     })
//     .then((res) =>  {
//         if(res.status === 200) {
//             console.log("2000")
//             dispatch({
//                 type: GET_TASKS_SUCCESS,
//                 payload: true
//             })
//         }
//     })

// }

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




