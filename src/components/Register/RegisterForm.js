import React, { Component } from 'react'
import style from './RegisterFormStyle';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
class RegisterForm extends Component {
    render() {
        const {classes } = this.props 
        return (
            <div className={classes.bg} style ={{backgroundImage: "src='images/Untitled.jpg'"}}>
                {/* <Grid container spacing={0} classsName={classes.grid}>
                    <Grid item xs={6} className={classes.left}>
                        <img className={classes.img} src="images/a.jpg" width="70%"  alt="Volunteer"/>
                        
                    </Grid>
                    <Grid  item xs={6} className={classes.right}>
                        <form className={classes.form}>
                            <Typography variant="h4" gutterBottom className={classes.tittle}>
                            Join Our Volunteer Communnity
                            </Typography>
                            <TextField className={classes.input}
                                InputProps={{ style: { fontSize: 16 } }}
                                InputLabelProps={{ style: { fontSize: 14 } }}
                                fullWidth label="Full Name" required/>
                            
                                <TextField className={classes.input}
                                InputProps={{ style: { fontSize: 16 } }}
                                InputLabelProps={{ style: { fontSize: 14 } }}
                                fullWidth label="Gender" required/>
                                
                                <TextField className={classes.input} type='number'
                                InputProps={{ style: { fontSize: 16 } }}
                                InputLabelProps={{ style: { fontSize: 14 } }}
                                fullWidth label="Phone Number" required/>
                                
                                <TextField className={classes.input}
                                InputProps={{ style: { fontSize: 16 } }}
                                InputLabelProps={{ style: { fontSize: 14 } }}
                                fullWidth label="Email" required/>
                                
                                <TextField className={classes.input}
                                InputProps={{ style: { fontSize: 16 } }}
                                InputLabelProps={{ style: { fontSize: 14 } }}
                                fullWidth label="Password" required type='password' />
                                
                            
                                
                            
                            <Typography gutterBottom className={classes.text}>
                            If you've already have an account. Login here
                            </Typography>
                            <Button type='submit' className={classes.button}>Register</Button>
                        </form>
                    </Grid>
                </Grid> */}




            {/* <Grid container spacing={0} classsName={classes.grid}>
                    <Grid item xs={6} className={classes.left}>
                        <img className={classes.img} src="images/a.jpg" width="70%"  alt="Volunteer"/>
                        
                    </Grid> */}
                    <div className={classes.right} style={{textAlign: "center"}}>
                        <form className={classes.form}>
                            <Typography variant="h4" gutterBottom className={classes.tittle}>
                            Join Our Volunteer Communnity
                            </Typography>
                            <TextField className={classes.input}
                                InputProps={{ style: { fontSize: 16 } }}
                                InputLabelProps={{ style: { fontSize: 14 } }}
                                fullWidth label="Full Name" required/>
                            
                            <FormControl className={classes.formControl} fullWidth>
                                   
                                   <TextField type ='tetx' id="select" label ='Your Gender' value =''select className ={classes.input} name ='category'
                                   
                                   InputProps={{ style: { fontSize: 16 } }}
                                    InputLabelProps={{ style: { fontSize: 14 } }}
                                   >
                                   <MenuItem value = 'Female' >Female</MenuItem>
                                       <MenuItem value = 'Male' >Male</MenuItem>
                                       <MenuItem value = 'Other'>Other</MenuItem>
                                       
                                   </TextField>
                                       

                                   
                               </FormControl>
                                
                                <TextField className={classes.input} type='number'
                                InputProps={{ style: { fontSize: 16 } }}
                                InputLabelProps={{ style: { fontSize: 14 } }}
                                fullWidth label="Phone Number" required/>
                                
                                <TextField className={classes.input}
                                InputProps={{ style: { fontSize: 16 } }}
                                InputLabelProps={{ style: { fontSize: 14 } }}
                                fullWidth label="Email" required/>
                                
                                <TextField className={classes.input}
                                InputProps={{ style: { fontSize: 16 } }}
                                InputLabelProps={{ style: { fontSize: 14 } }}
                                fullWidth label="Password" required type='password' />
                                
                            
                                
                            
                            <Typography gutterBottom className={classes.text}>
                            If you've already have an account. 
                            <Button type='submit' className={classes.login}>Login here</Button>
                            </Typography>
                            <Button type='submit' className={classes.button}>Register</Button>
                        </form>
                    </div>
                {/* </Grid> */}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    

  
})
const mapStateToProps = state => ({
   
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(RegisterForm));

