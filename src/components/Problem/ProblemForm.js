import React, { Component } from 'react'
import style from './ProblemFormStyle';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';

import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
class ProblemForm extends Component {
    render() {
        const {classes} = this.props; 
        return (
            <div>
                <img src="images/a.jpg" width="20%" height="20%" alt="Logo" style={{paddingTop :"10px"}}/>

                <form className={classes.form} autoComplete="off">
                    
                    <Typography variant="h3" gutterBottom className={classes.tittle}>
                        Tell Us Your Problem
                    </Typography>

                    <Grid container spacing={6}>
                        <Grid item xs={6}>
                                <TextField className={classes.input}
                            InputProps={{ style: { fontSize: 16 } }}
                            InputLabelProps={{ style: { fontSize: 14 } }}
                            fullWidth label="Your Name" required/>
                        </Grid>

                        <Grid item xs={6}>
                                

                                <TextField
                                
                                name = 'date'  
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
                            />
                        </Grid>

                    </Grid>
            
                    <Grid container spacing={6}>
                        <Grid item xs={6}>
                            

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
                        </Grid>
                        <Grid item xs={6}>
                            <TextField className={classes.input} fullWidth label="Your Phone Number" 
                            InputProps={{ style: { fontSize: 16 } }}
                            InputLabelProps={{ style: { fontSize: 14 } }}
                            required/>
                        </Grid>

                    </Grid>

                    <Grid container spacing={6}>
                        <Grid item xs={6}>
                                <TextField className={classes.input} fullWidth label="Your Email"
                            
                                InputProps={{ style: { fontSize: 16 } }}
                                InputLabelProps={{ style: { fontSize: 14 } }}
                                />
                        </Grid>
                        <Grid item xs={6}>
                                <TextField className={classes.input} fullWidth label="Your Address" 
                            
                                InputProps={{ style: { fontSize: 16 } }}
                                InputLabelProps={{ style: { fontSize: 14 } }}
                                required/>
                        </Grid>

                    </Grid> 
                    <Grid container spacing={6}>
                        <Grid item xs={12}>
                                <TextField  className={classes.input}  fullWidth label="Description of your problem" 
                            InputProps={{ style: { fontSize: 16 } }}
                            InputLabelProps={{ style: { fontSize: 14 } }}
                            required/>
                        </Grid>
                        

                    </Grid>

                    <Button type='submit' className={classes.button}> Submit</Button>
                </form>
            </div>
        )
    }
}
export default connect(null)(withStyles(style)(ProblemForm));
