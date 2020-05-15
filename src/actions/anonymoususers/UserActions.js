import {
    REGISTER_PROBLEM_LOADING,REGISTER_PROBLEM_SUCCESS, 
    REGISTER_ACCOUNT, REGISTER_ACCOUNT_LOADING,REGISTER_ACCOUNT_SUCCESS,
    LOGIN_ACCOUNT, LOGIN_ACCOUNT_LOADING,LOGIN_ACCOUNT_SUCCESS,
    REGISTER_TASK_LOADING,REGISTER_TASK_SUCCESS, TRIGGER_SEND_EMAIL
   
} from '../actionTypes';

import {backend_url} from '../backendurl'


export const triggersendemail = (email) => dispatch => {
    fetch(TRIGGER_SEND_EMAIL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
                'Content-type': 'application/json'
        },
        body: JSON.stringify(email)
    })
    
}
export const registerVolunteer = (volunteer) => dispatch => {
    dispatch({
        type: REGISTER_ACCOUNT_LOADING
    })
    fetch(backend_url+`/registerAccount`, {
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
            //  const email = {
            //      email: volunteer.email,
            //      subject: "Welcome to HereToHelp",
            //      content: "Hi there, we are glad to have you as a member. Let's make a world a better place together"
            //  }
            //  dispatch(triggersendemail(email))

 
             
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
    
    fetch(backend_url+`/getVolunteerByEmail?email=${email}`, {
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
    fetch(backend_url+'/login', {
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
                fetch(backend_url+`/getVolunteerByEmail?email=${data.email}`, {
                    
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
                    message: "Email is either not registered or not in correct format. Please try again"
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
    fetch(backend_url+'/problems', {
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
            if (problem.email !== null && problem.email !== "")  {
                // const email = {
                //     email: problem.email,
                //     subject: "HereToHelp says hi",
                //     content: "Hi there, we know that you have difficulty and we have well noted. Please wait for our volunteer to contact you. Stay tuned!"
                // }
                // dispatch(triggersendemail(email))
            }
            

            
        } else {
            dispatch({
                type: REGISTER_PROBLEM_SUCCESS,
                payload: false
            })
            
        }
    })
}

export const getAProblem = (id) => dispatch => {
    fetch(backend_url+`/problem?id=${id}`, {
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

export const createTask = (task) => dispatch => {
    dispatch({
        type: REGISTER_TASK_LOADING
    })
    fetch(backend_url+'/tasks', {
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




