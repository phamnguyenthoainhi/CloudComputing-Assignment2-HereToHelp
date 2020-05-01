import React, { Component } from 'react'
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core';
import style from './TaskDetailsStyle.js';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import {takeTask} from '../../../actions/volunteers/VolunteeerActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CircularProgress from "@material-ui/core/CircularProgress";
const ColorCircularProgress = withStyles({
    root: {
      color: '#3C5155'
      
    },
  })(CircularProgress);
class TaskDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            success: false
        
        }
    }
    takeTask() {

        if (sessionStorage.getItem("id") !== null && sessionStorage.getItem("id") !== undefined) {
            let id = atob(sessionStorage.getItem("id"))
            const task = {
                id : this.props.task.id,
                problem: this.props.task.problem,
                status: 'Starting',
                volunteer: {
                    id: id
                }
            }
            this.props.takeTask(task)
        } else {
            console.log("log in again")
        }
        
    }
    componentDidUpdate(prevProps) {
        if (this.props.loading !== prevProps.loading) {
            this.setState({
                loading: this.props.loading
            })
        }
        if (this.props.success !== prevProps.success && this.props.success === true) {
            this.setState({
                success: this.props.success
            })
            document.getElementById("success").style.display = 'block';
            document.getElementById("below").style.display = 'none';


        }
    }
    totaskboard() {
        this.props.history.push('/');
    }

    render() {
        const {classes} = this.props;
        
        return (
            <div>
                <div id='success' className={classes.success} style={{display: 'none'}}>
                    <Typography className={classes.successtext}>The problem is added to your tasks board!</Typography>
                    <Button className={classes.successbtn} onClick = {() => this.totaskboard()}>My Task Board</Button>

                </div>
                 <Grid container spacing={3} id='below'>
                    <Grid item xs={6} className={classes.left}>
                    
                    <div style={{textAlign: "center"}}>
                    <img src="https://cdn.dribbble.com/users/1355613/screenshots/6681350/zzpstart-01_4x.png?compress=1&resize=1200x900" width="80%"  alt="Logo" style={{paddingTop :"100px"}}/>
                    <img src="images/quote.jpg" width="80%"  alt="Logo" style={{paddingTop :"0px"}}/>
                    </div>
                    
                    </Grid>
                    <Grid item xs ={6} className={classes.right}> 
                        
                                <List className={classes.rootList}>
                                    <div className={classes.btnContainer}>
                                        {this.state.loading ? 
                                        
                                        (<ColorCircularProgress variant="indeterminate" size={32} style={{marginTop: "5%"}}/>)
                                
                                :
                                <Button className={classes.button} onClick = {() => this.takeTask()}>Take this problem</Button>
                                
                                }

                                    </div>
                                    <Divider />
                                    <ListItem>
                                    <ListItemAvatar>
                                    <Avatar className={classes.avatar}>
                                        <img src="https://image.flaticon.com/icons/svg/428/428425.svg" width="70%" height="70%" alt="Logo" style={{paddingTop :"0px"}}/>

                                        </Avatar>
                                    </ListItemAvatar>
                                    
                                        
                                        <ListItemText primary="Date Posted" secondary={this.props.task.problem.date} classes={{primary:classes.listItemText1, secondary: classes.listItemText2}}/>
                                    </ListItem>
                                   
                                    <Divider variant="inset"/>
                                    <ListItem>
                                        <ListItemAvatar>
                                        <Avatar className={classes.avatar}>
                                            <img src="https://image.flaticon.com/icons/svg/684/684908.svg" width="70%" height="70%" alt="Logo" style={{paddingTop :"0px"}}/>
                                        </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="Address" secondary={this.props.task.problem.location} classes={{primary:classes.listItemText1, secondary: classes.listItemText2}}/>
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                    <ListItem>
                                        <ListItemAvatar>
                                        <Avatar className={classes.avatar}>
                                        <img src="https://image.flaticon.com/icons/svg/1077/1077012.svg" width="70%" height="70%" alt="Logo" style={{paddingTop :"0px"}}/>

                                        </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="Name" secondary={this.props.task.problem.ownerName} classes={{primary:classes.listItemText1, secondary: classes.listItemText2}}/>
                                        
                                    </ListItem>
                                    <ListItem>
                                    <ListItemAvatar>
                                      
                                    </ListItemAvatar>
                                       
                                        <ListItemText primary="Birthday" secondary= {this.props.task.problem.ownerBirthday} classes={{primary:classes.listItemText1, secondary: classes.listItemText2}} />
                                        
                                    </ListItem>
                                    <ListItem>
                                    <ListItemAvatar>
                                        
                                    </ListItemAvatar>
                                        
                                        <ListItemText primary="Gender" secondary= {this.props.task.problem.ownerGender} classes={{primary:classes.listItemText1, secondary: classes.listItemText2}}/>
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                    <ListItem>
                                        <ListItemAvatar>
                                        <Avatar className={classes.avatar}>
                                        <img src="https://image.flaticon.com/icons/svg/552/552489.svg" width="70%" height="70%" alt="Logo" style={{paddingTop :"0px"}}/>

                                        </Avatar>
                                        </ListItemAvatar>
                                        
                                        <ListItemText primary="Phone Number" secondary= {this.props.task.problem.phone} classes={{primary:classes.listItemText1, secondary: classes.listItemText2}}/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                        <Avatar className={classes.avatar}>
                                        <img src="https://image.flaticon.com/icons/svg/726/726580.svg" width="70%" height="70%" alt="Logo" style={{paddingTop :"0px"}}/>

                                        </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="Email" secondary={this.props.task.problem.email} classes={{primary:classes.listItemText1, secondary: classes.listItemText2}}/>
                                        
                                    </ListItem>
                                    
                                    <Divider variant="inset" component="li" />
                                    <ListItem>
                                        <ListItemAvatar>
                                        <Avatar className={classes.avatar}>
                                        <img src="https://image.flaticon.com/icons/svg/1642/1642257.svg" width="70%" height="70%" alt="Logo" style={{paddingTop :"0px"}}/>

                                        </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="Description" classes={{primary:classes.listItemText1, secondary: classes.listItemText2}} secondary={this.props.task.problem.description} />
                                        
                                    </ListItem>
                                    <Divider />
                                    
                                    
                                    </List>
                    </Grid>
                    
                </Grid>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    takeTask: (task) => dispatch(takeTask(task))

    

  
})
const mapStateToProps = state => ({

    loading: state.taskReducer.loadingTakeTask,
    success: state.taskReducer.successTakeTask
   
});
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(TaskDetails));
