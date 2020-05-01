import React, { Component } from 'react'
import style from './RegisterFormStyle';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import CircularProgress from '@material-ui/core/CircularProgress';
import {registerVolunteer} from '../../actions/anonymoususers/UserActions';
import DoneIcon from '@material-ui/icons/Done';
import {Link} from "react-router-dom";
const ColorCircularProgress = withStyles({
    root: {
      color: '#E3DEAC'
      
    },
  })(CircularProgress);
class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            registerMessage: '',
            loading: false,
            success: false,
            name: '',
            email: '',
            password: '',
            gender: '',
            phone: '',
            birthday : '',
            
            
        }
    }
    onSubmit = (e) => {
        e.preventDefault();
        const volunteer = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            gender: this.state.gender,
            phone: this.state.phone,
            birthday : this.state.birthday,
	        role: "USER"
        }
        
        this.props.registerVolunteer(volunteer)
    } 
    componentDidUpdate(prevProps) {
        if (this.props.registerMessage !== prevProps.registerMessage) {
            this.setState({
                registerMessage: this.props.registerMessage
            })
        }
        if (this.props.loadingRegisterAccount !== prevProps.loadingRegisterAccount) {
            this.setState({
                loading: this.props.loadingRegisterAccount
            })
        }
        if (this.props.successRegisterAccount !== prevProps.successRegisterAccount) {
            this.setState({
                success: this.props.successRegisterAccount,
                registerMessage: ''
                // name: '',
                // email: '',
                // password: '',
                // gender: '',
                // phone: '',
                // birthday : '',
            })
        }
    }

    onChange(e) {
        
        this.setState({
            [e.target.name] : e.target.value
        })
        
        
    }
    success() {
        this.props.history.push('/login')
    }
    render() {
        const {classes } = this.props 
       
        return (
            
            <div className={classes.bg} style ={{backgroundImage: "src='images/Untitled.jpg'"}}>
                

                    <div className={classes.right} style={{textAlign: "center"}}>
                        <form className={classes.form} onSubmit={(e) => this.onSubmit(e)}>
                            <Typography variant="h4" gutterBottom className={classes.tittle}>
                            Join Our Volunteer Communnity
                            </Typography>
                            <TextField className={classes.input}
                                name='name'
                                value={this.state.name}
                                FormHelperTextProps={{style: {fontSize: 10, color: '#DE9D66', fontFamily: "'Poppins', sans-serif;"}}}
                                InputProps={{ style: { fontSize: 16 } }}
                                InputLabelProps={{ style: { fontSize: 14 } }}
                                fullWidth label="Full Name" 
                                onChange= {(e) => this.onChange(e)}
                                
                                required/>
                            
                            <FormControl className={classes.formControl} fullWidth>
                                   
                                   <TextField type ='text' id="select" label ='Your Gender' value ={this.state.gender} select className ={classes.input} name ='gender'
                                    onChange= {(e) => this.onChange(e)}

                                   InputProps={{ style: { fontSize: 16 } }}
                                    InputLabelProps={{ style: { fontSize: 14 } }}
                                   >
                                   <MenuItem value = 'Female' >Female</MenuItem>
                                       <MenuItem value = 'Male' >Male</MenuItem>
                                       <MenuItem value = 'Other'>Other</MenuItem>
                                       
                                   </TextField>

                                   <TextField   
                                
                                fullWidth
                                label="Your Birthday"
                                className ={classes.input}
                                type = 'date'
                                required
                                InputProps={{ style: { fontSize: 16 } }}
                                InputLabelProps={{
                                    fontSize: 16,
                                    shrink: true,
                                }}
                                value = {this.state.birthday}
                                name ='birthday'
                                onChange= {(e) => this.onChange(e)}
                            />
                                       

                                   
                               </FormControl>
                                
                                <TextField className={classes.input} type='number'
                                InputProps={{ style: { fontSize: 16 } }}
                                InputLabelProps={{ style: { fontSize: 14 } }}
                                fullWidth label="Phone Number" required
                                name='phone'
                                value ={this.state.phone}
                                onChange= {(e) => this.onChange(e)}
                                FormHelperTextProps={{style: {fontSize: 10, color: '#DE9D66', fontFamily: "'Poppins', sans-serif"}}}
                                />
                                
                                <TextField className={classes.input}
                                InputProps={{ style: { fontSize: 16 } }}
                                InputLabelProps={{ style: { fontSize: 14 } }}
                                fullWidth label="Email" required
                                FormHelperTextProps={{style: {fontSize: 10, color: '#DE9D66', fontFamily: "'Poppins', sans-serif"}}}
                                name='email'
                                value={this.state.email}
                                onChange= {(e) => this.onChange(e)}
                                helperText={this.state.registerMessage}
                                
                                />
                                
                                <TextField className={classes.input}
                                InputProps={{ style: { fontSize: 16 } }}
                                InputLabelProps={{ style: { fontSize: 14 } }}
                                fullWidth label="Password" required type='password'
                                name='password'
                                FormHelperTextProps={{style: {fontSize: 10, color: '#DE9D66', fontFamily: "'Poppins', sans-serif"}}}
                                value={this.state.password}
                                onChange= {(e) => this.onChange(e)}
                                 />
                                
                            <Typography gutterBottom className={classes.text}>
                            If you've already have an account. 
                            <Button type='button' className={classes.login} component={Link} to='/login'>Login here</Button>
                            </Typography>
                            {this.state.loading? (<ColorCircularProgress />   ): 

                            this.state.success ? (<Button type='button' onClick={() => this.success()} startIcon={<DoneIcon />} className={classes.successbutton}>Success</Button>) :
                            (<Button type='submit' className={classes.button}>Register</Button>)
                            
                            }
                        </form>
                    </div>
               
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    registerVolunteer: (volunteer) => dispatch (registerVolunteer(volunteer))
    

  
})
const mapStateToProps = state => ({
    registerMessage: state.userReducer.registerMessage,
    loadingRegisterAccount: state.userReducer.loadingRegisterAccount,
    successRegisterAccount: state.userReducer.successRegisterAccount,
 
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(RegisterForm));

