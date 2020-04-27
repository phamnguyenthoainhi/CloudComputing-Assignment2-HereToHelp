import React, { Component } from 'react'
import style from './ProblemFormStyle';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import CircularProgress from "@material-ui/core/CircularProgress";
import  {registerProblem} from '../../actions/anonymoususers/UserActions'
const ColorCircularProgress = withStyles({
    root: {
      color: '#3C5155'
      
    },
  })(CircularProgress);

class ProblemForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
                
                ownerName: '',
                ownerBirthday: '',
                // yyyy-mm-dd
                date: '',
                ownerGender: '',
                description: '',
                location: '',
                phone: '',
                email: '',
                open: false,
                
            
            loadingProblem: false,
            successProblem: false
        }
    }
    handleClickOpen = () => {
        this.setState({
            open: true
        })
  };

    handleClose = () => {
        this.setState({
            open: false
        })
        this.props.history.push('/successproblem');
    
    };

    onChange(e) {
        
        this.setState({
            [e.target.name] : e.target.value
        })
        
        
    }

    componentDidUpdate(prevProps) {
        if (this.props.loadingProblem !== prevProps.loadingProblem) {
            this.setState({
                loadingProblem: this.props.loadingProblem
            })
        }
        if (this.props.successProblem !== prevProps.successProblem && this.props.successProblem === true) {
           
            this.handleClickOpen()
        }
       
    }

    onSubmit(e) {
        e.preventDefault();
        var tempDate = new Date();
        var date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1)+ '-' + tempDate.getDate() ;
        const problem = {
            ownerName: this.state.ownerName,
            ownerBirthday: this.state.ownerBirthday,
            date: date,
            ownerGender: this.state.ownerGender,
            description: this.state.description,
            location: this.state.location,
            phone: this.state.phone,
            email: this.state.email,
        };
        // console.log(JSON.stringify(problem))
        this.props.registerProblem(problem);

    }
    

    render() {
        console.log(this.state.loadingProblem)
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
                            fullWidth label="Your Name" 
                            value = {this.state.ownerName}
                            name ='ownerName'
                            onChange= {(e) => this.onChange(e)}
                            required
                            />
                        </Grid>

                        <Grid item xs={6}>
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
                                value = {this.state.ownerBirthday}
                                name ='ownerBirthday'
                                onChange= {(e) => this.onChange(e)}
                            />
                        </Grid>

                    </Grid>
            
                    <Grid container spacing={6}>
                        <Grid item xs={6}>
                            

                            <FormControl className={classes.formControl} fullWidth>
                                   
                                   <TextField type ='tetx' id="select" label ='Your Gender' select className ={classes.input} 
                                   
                                    InputProps={{ style: { fontSize: 16 } }}
                                    InputLabelProps={{ style: { fontSize: 14 } }}
                                    value = {this.state.ownerGender}
                                    name ='ownerGender'
                                    onChange= {(e) => this.onChange(e)}
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
                            
                            value = {this.state.phone}
                            name ='phone'
                            type='number'
                            onChange= {(e) => this.onChange(e)}
                            required
                            />
                        </Grid>

                    </Grid>

                    <Grid container spacing={6}>
                        <Grid item xs={6}>
                                <TextField className={classes.input} fullWidth label="Your Email"
                            
                                InputProps={{ style: { fontSize: 16 } }}
                                InputLabelProps={{ style: { fontSize: 14 } }}
                                value = {this.state.email}
                            name ='email'
                            onChange= {(e) => this.onChange(e)}
                                />
                        </Grid>
                        <Grid item xs={6}>
                                <TextField className={classes.input} fullWidth label="Your Address" 
                            
                                InputProps={{ style: { fontSize: 16 } }}
                                InputLabelProps={{ style: { fontSize: 14 } }}
                                value = {this.state.location}
                                name ='location'
                                onChange= {(e) => this.onChange(e)}
                                required/>
                        </Grid>

                    </Grid> 
                    <Grid container spacing={6}>
                        <Grid item xs={12}>
                                <TextField  className={classes.input}  fullWidth label="Description of your problem" 
                            InputProps={{ style: { fontSize: 16 } }}
                            InputLabelProps={{ style: { fontSize: 14 } }}
                            required
                            value = {this.state.description}
                            name ='description'
                            onChange= {(e) => this.onChange(e)}
                            
                            />
                        </Grid>
                    </Grid>
                    {this.state.loadingProblem ? 
                    (<ColorCircularProgress variant="indeterminate" size={32} style={{marginTop: "5%"}}/>)
                    : (
                        <Button type='submit' className={classes.button} onClick={(e) => this.onSubmit(e)}> Submit</Button>
                    )
                }


                </form>
                <Dialog 
                            className={classes.dialog}
                                open={this.state.open}
                                onClose={this.handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                                > 
                                <DialogContent>
                                    <Typography gutterBottom className={classes.text}>
                                        Your problem has been registered sucessfully! One more step to go!
                                    </Typography>
                                           
                                </DialogContent>
    
                            </Dialog>  
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    registerProblem: (problem) => dispatch(registerProblem(problem)),

    

  
})
const mapStateToProps = state => ({
    // id: state.problem.problem.id,
    // ownerName: state.problem.problem.ownerName,
    // ownerBirthday: state.problem.problem.ownerBirthday,
   
    // date: state.problem.problem.date,
    // ownerGender: state.problem.problem.ownerGender,
    // description: state.problem.problem.description,
    // location: state.problem.problem.location,  
    loadingProblem: state.loadingProblem.loadingProblem,
    successProblem: state.successProblem.successProblem
   
});
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(ProblemForm));
