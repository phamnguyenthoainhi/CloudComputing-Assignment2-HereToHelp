import React, { Component } from 'react'
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core';
import style from './LoginStyle.js'
class Login extends Component {
    render() {
        const {classes} = this.props
        return (
            <div className={classes.container} >
               
               

            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    // registerVolunteer: (volunteer) => dispatch (registerVolunteer(volunteer))
    

  
})
const mapStateToProps = state => ({
    // registerMessage: state.userReducer.registerMessage,
    // loadingRegisterAccount: state.userReducer.loadingRegisterAccount,
    // successRegisterAccount: state.userReducer.successRegisterAccount,
 
});
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(Login));

