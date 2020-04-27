import {
    REGISTER_PROBLEM, REGISTER_PROBLEM_LOADING,REGISTER_PROBLEM_SUCCESS, 
    REGISTER_ACCOUNT, REGISTER_ACCOUNT_LOADING,REGISTER_ACCOUNT_SUCCESS,
    LOGIN_ACCOUNT, LOGIN_ACCOUNT_LOADING,LOGIN_ACCOUNT_SUCCESS,
    


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
       console.log(res);
        if(res.status === 200) {
            dispatch({
                type: REGISTER_PROBLEM_SUCCESS,
                payload: true
            })
            // return res.json();
        } else {
            dispatch({
                type: REGISTER_PROBLEM_SUCCESS,
                payload: false
            })
            // return null;
        }
    })

}
// export const registerAccount = (account) => dispatch => {
//     dispatch({
//         type: REGISTER_LOADING
//     })
//         fetch('https://asia-east2-startcom-sepm.cloudfunctions.net/api/signup',{
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-type': 'application/json'
//             },
//             body: JSON.stringify(account)
//         })
//         .then ((res) => {
//             if (res.status === 200) {
//                 res.json().then(function(data) {
//                     dispatch({
//                         type: REGISTER_ACCOUNT,
//                         payload: data
//                     })
//                     // console.log(data.message);
//                   })
//             }
            
//         })        
// }


// export const VerifiedEmails = (id) => dispatch => {
//     dispatch({
//         type: ADMIN_VERIFY
//     })
//     fetch(`https://asia-east2-startcom-sepm.cloudfunctions.net/api/verify/${id}`, {
//         method: 'GET'
//     })
   
//     .then(res => 
//         res.json())
//     .then(
//         dispatch({
//             type: VERIFY_SUCCESS
//         })) 
//     .then(dispatch(fetchUnverifiedEmails()) )
// }

// export const deleteUser = (id) => dispatch => {
   
//     dispatch({
//         type: DELETE_USER_LOADING
//     })
//     fetch(`https://asia-east2-startcom-sepm.cloudfunctions.net/api/decline/${id}`, {
//         headers: {
//             'Accept': 'application/json, text/plain, */*',
//             'Content-Type': 'application/json'

//         },
//         method: 'DELETE'
//     })
//     .then(res => {
//         if (res.status === 200) {
//             dispatch({
//                 type: DELETE_USER_SUCCESS
//             })
//         }
//     })
//     .then(dispatch(fetchUnverifiedEmails()) )
// }