import React, { Component } from 'react'
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core';
import style from './LoginStyle.js'
class Login extends Component {
    render() {
        const {classes} = this.props
        return (
            <div className={classes.container} >
                <img src="images/pattern.png" width="100%" height="100%" alt="Logo" style={{paddingTop :"0px"}}/>
               

            </div>
        )
    }
}
export default connect(null)(withStyles(style)(Login));

