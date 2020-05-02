import React, { Component } from 'react'
import style from './AdminStyle';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import {getTasksAdmin, takeTask} from '../../actions/volunteers/VolunteeerActions'
import { Skeleton } from '@material-ui/lab';
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
const ColorCircularProgress = withStyles({
    root: {
      color: '#E3DEAC'
      
    },
  })(CircularProgress);

class AdminVerify extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasksadmin: [],
            loadingTakeTask: false,
            successTakeTask:false,
            filterTaskAdmin: [],
            loadingTaskAdmin: false,
            successTaskAdmin: false,
            buttonShow: true
        }
    }
    componentDidMount() {
        this.props.getTasksAdmin()
        
    }

    componentDidUpdate(prevProps) {
        if(this.props.tasksadmin !== prevProps.tasksadmin) {
            this.setState({
                tasksadmin: this.props.tasksadmin,
                filterTaskAdmin: this.props.tasksadmin.filter((t) => t.status === 'Verifying')
            })
        } if (this.props.loadingTaskAdmin !== prevProps.loadingTaskAdmin) {
            this.setState({
                loadingTaskAdmin: this.props.loadingTaskAdmin
            })
        }
        if(this.props.loadingTakeTask !== prevProps.loadingTakeTask) {
            this.setState({
                loadingTakeTask: this.props.loadingTakeTask,
                
            })
        }
        if(this.props.successTakeTask !== prevProps.successTakeTask && this.props.successTakeTask === true) {
            this.setState({
                successTakeTask: this.props.successTakeTask,
                
            })
            this.props.getTasksAdmin();
            
        }
    }

    verifyTask = (id, problem, volunteer) => {
        const task = {
            id : id,
            problem: problem,
            status: 'Done',
            volunteer: volunteer
        }
        this.props.takeTask(task)
    }

    verifyingList = () => {
        
        var verifyingList = this.state.tasksadmin.filter((t) => t.status === 'Verifying')
        this.setState({
            filterTaskAdmin: verifyingList,
            buttonShow: true
        })
        
      
        document.getElementById("verify").style.borderBottom = "2px solid #D4CE96"
        document.getElementById("resolve").style.borderBottom = "0px"
        
        
    }
    resolvedList = () => {
        var resolvedList = this.state.tasksadmin.filter((t) => t.status === 'Done')
        this.setState({
            filterTaskAdmin: resolvedList,
            buttonShow: false
        })
        
        
        document.getElementById("resolve").style.borderBottom = "2px solid #D4CE96";
        document.getElementById("verify").style.borderBottom = "0px";
        
    }

    

    render() {
        const {classes} = this.props;
        console.log(this.state.loadingTaskAdmin)
        return (
            <div className={classes.box}>
                <div><Button className={classes.home} component={Link} to = {'/'}>Home</Button></div>
                <div className= {classes.container} style={{textAlign: "center"}}>
                
                <div>
                    <Typography className={classes.hello}>Admin Task Board</Typography>
                </div>
                
                
                <div className="btn-group" role="group" >
                        <button id ='verify' type="button" className={classes.btngroup} style={{borderBottom: "2px solid #D4CE96"}}
                        onClick={() => this.verifyingList()}
                        >Verifying</button><span style={{color: "#D4CE96"}}>|</span>
                        <button id = 'resolve' type="button" className={classes.btngroup} 
                        onClick={() => this.resolvedList()}
                        >Resolved</button>
                </div>
                
                <div className={classes.table}>

                        <table className="table table-borderless">
                                    <thead>
                                    <tr>
                                        <th style={{width: '10%', textAlign: 'center', color: "#51617D"}}>#</th>
                                        <th style={{width: '30%', textAlign: 'center', color: "#51617D"}}>Problem Information
                                        </th>
                                        <th style={{width: '40%', textAlign: 'center', color: "#51617D"}}>Problem Description</th>
                                        <th style={{width: '20%', textAlign: 'center', color: "#51617D"}}></th>
                                    </tr>
                                    </thead>
                                    
                                    <tbody className={classes.tbody}>
                                        {this.state.loadingTaskAdmin ? 
                                        (
                                        <tr>
                                            <th scope="row"><Skeleton variant="rect" animation="wave"height={70} /></th>
                                                    <td><Skeleton variant="rect" animation="wave"height={70}/></td>
                                                    <td><Skeleton variant="rect" animation="wave"height={70}/></td>
                                                    <td><Skeleton variant="rect" animation="wave"height={70}/></td>
                                        </tr>
                                                 
                                        )
                                        : 
                                        (
                                            this.state.filterTaskAdmin.map((task) => 
                                            <tr key={task.id}>
                                            
                                            <th scope="row" className={classes.row} >
                                                <div>
    
                                                            <Avatar className={classes.id}>
                                                                {task.id}
                                                            </Avatar>
                                                </div>
                                            </th>
                                            <td >
                                            <List>
                                                    <ListItem>
                                                        <ListItemAvatar>
                                                        
                                                        </ListItemAvatar>
                                                        <ListItemText primary="Address" secondary={task.problem.location} classes={{primary:classes.listItemText1, secondary: classes.listItemText2}} />
                                                    </ListItem>
                                                    
                                                    <ListItem>
                                            <ListItemAvatar>
                                            
                                            </ListItemAvatar>
                                            <ListItemText primary="Name" secondary={task.problem.ownerName} classes={{primary:classes.listItemText1, secondary: classes.listItemText2}}/>
                                            
                                        </ListItem>
                                        <ListItem>
                                        <ListItemAvatar>
                                          
                                        </ListItemAvatar>
                                           
                                            <ListItemText primary="Birthday" secondary= {task.problem.ownerBirthday} classes={{primary:classes.listItemText1, secondary: classes.listItemText2}} />
                                            
                                        </ListItem>
                                        <ListItem>
                                        <ListItemAvatar>
                                            
                                        </ListItemAvatar>
                                            
                                            <ListItemText primary="Gender" secondary= {task.problem.ownerGender} classes={{primary:classes.listItemText1, secondary: classes.listItemText2}}/>
                                        </ListItem>
                                        
                                        <ListItem>
                                            <ListItemAvatar>
                                            
                                            </ListItemAvatar>
                                            
                                            <ListItemText primary="Phone Number" secondary= {task.problem.phone} classes={{primary:classes.listItemText1, secondary: classes.listItemText2}}/>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemAvatar>
                                            
                                            </ListItemAvatar>
                                            <ListItemText primary="Email" secondary={task.problem.email} classes={{primary:classes.listItemText1, secondary: classes.listItemText2}}/>
                                            
                                        </ListItem>
                                                    
 
                                             </List></td>
                                            <td >
                                            <List>
                                                    <ListItem>
                                                        <ListItemAvatar>
                                                        
                                                        </ListItemAvatar>
                                                        <ListItemText secondary={task.problem.description} classes={{primary:classes.listItemText1, secondary: classes.listItemText2}} />
                                                    </ListItem>
                                                    
                                                    
                                            </List>
                                                
                                                </td>
                                                <td style={{textAlign: "center"}}>
                                                    {!this.state.buttonShow ? null: 
                                                    
                                                    this.state.loadingTakeTask? (<ColorCircularProgress />):
                                                
                                                <Button type='button' id ='verifybtn'  className={classes.completebtn} onClick= {(id, problem, volunteer) => this.verifyTask(task.id, task.problem, task.volunteer)}>Verify</Button>
                                                    
                                                    }
                                                </td>
                                        </tr>
                                            
                                            
                                            )) }
                                        
                                    
                                    

                                    </tbody>
                        </table>
                </div>
            </div>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    getTasksAdmin: () => dispatch(getTasksAdmin()),
    takeTask: (task) => dispatch(takeTask(task))
    

  
})
const mapStateToProps = state => ({
    loadingTakeTask: state.taskReducer.loadingTakeTask,
    successTakeTask: state.taskReducer.successTakeTask,
    loadingTaskAdmin: state.taskReducer.loadingTaskAdmin,
    successTaskAdmin: state.taskReducer.successTaskAdmin,
    tasksadmin: state.taskReducer.tasksadmin
   
});
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(AdminVerify));
