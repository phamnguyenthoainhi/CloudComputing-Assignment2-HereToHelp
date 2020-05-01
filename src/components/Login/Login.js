import React, { Component } from 'react'
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core';
import style from './LoginStyle.js';
import {login} from '../../actions/anonymoususers/UserActions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';
import DoneIcon from '@material-ui/icons/Done';

const ColorCircularProgress = withStyles({
    root: {
      color: '#E3DEAC'
      
    },
  })(CircularProgress);
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passwordError: '',
            emailError: '',
            email: '',
            password: '',
            loading: '',
            success: false
        }
    }

    onChange(e) {
        
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const account = {
            
            email: this.state.email,
            password: this.state.password,
            
        }
        this.props.login(account)
    } 
    componentDidUpdate(prevProps) {
        
        if(this.props.loginMessage !== prevProps.loginMessage && this.props.loginMessage.code === 'password'){
            this.setState({
                passwordError: this.props.loginMessage.message
            })
        }
        if(this.props.loginMessage !== prevProps.loginMessage && this.props.loginMessage.code === 'email'){
            this.setState({
                emailError: this.props.loginMessage.message
            })
        }
        if (this.props.loadingLoginAccount !== prevProps.loadingLoginAccount) {
            this.setState({
                loading: this.props.loadingLoginAccount
            })
        }
        if (this.props.loginSuccess !== prevProps.loginSuccess && this.props.loginSuccess === true) {
            this.setState({
                success: true,
                passwordError: '',
                emailError: ''
            })
        }
    }

    success(props) {
        if (props!== undefined && props.history !== undefined) {
            props.history.push('/')
        }
    }



    render() {
        const {classes} = this.props
        
        return (
            <div className={classes.container}>
                <div className={classes.center}>

                <form onSubmit={(e) => this.onSubmit(e)} >
                    <Typography className={classes.title}>Login</Typography>
               <TextField className={classes.input}
                                name='email'
                                value={this.state.email}

                                InputProps={{ style: { fontSize: 16 } }}
                                InputLabelProps={{ style: { fontSize: 14 } }}
                                FormHelperTextProps={{style: {fontSize: 10, color: '#DE9D66', fontFamily: "'Poppins', sans-serif"}}}
                                fullWidth label="Email" 
                                onChange= {(e) => this.onChange(e)}
                                helperText={this.state.emailError}
                                required/>
                <TextField className={classes.input}
                name='password'
                value={this.state.password}
                type = 'password'
                InputProps={{ style: { fontSize: 16 } }}
                InputLabelProps={{ style: { fontSize: 14 } }}
                fullWidth label="Password" 
                helperText={this.state.passwordError}
                onChange= {(e) => this.onChange(e)}
                FormHelperTextProps={{style: {fontSize: 10, color: '#DE9D66', fontFamily: "'Poppins', sans-serif"}}}
                required/>
                <Typography gutterBottom className={classes.text}>
                            If you don't have an account. 
                            <Button type='button' className={classes.login} component={Link} to='/register'>Register here</Button>
                            </Typography>
                
                {this.state.loading? (<ColorCircularProgress />): (
                    this.state.success ? (<Button type='submit' component={Link} to='/' className={classes.successbtn} startIcon={<DoneIcon />}>Success</Button>   ) : 
                (<Button type='submit' className={classes.button}>Login</Button>)
                
                )}
               </form>
      
                </div>
               

            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    login: (account) => dispatch (login(account))
    

  
})
const mapStateToProps = state => ({
    loginMessage: state.userReducer.loginMessage,
    loadingLoginAccount: state.userReducer.loadingLoginAccount,
    loginSuccess: state.userReducer.loginSuccess,
 
});
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(Login));

