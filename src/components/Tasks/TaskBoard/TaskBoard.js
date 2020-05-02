import React, { Component } from 'react'
import style from './TaskBoardStyle';

import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core';
import {getMyTasks, takeTask} from '../../../actions/volunteers/VolunteeerActions'
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Skeleton } from '@material-ui/lab';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const ColorCircularProgress = withStyles({
    root: {
      color: '#FFCDA3'
      
    },
  })(CircularProgress);

class TaskBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myTasks: [],
            loading: false,
            filterTasks: [],
            loadingTakeTask: false,
            successTakeTask: false,
            buttonShow: true
        }
    }
    componentDidMount(){
        this.props.getMyTasks(atob(sessionStorage.getItem('id')));
    }
    componentDidUpdate(prevProps) {
        if(this.props.myTasks !== prevProps.myTasks) {
            this.setState({
                myTasks: this.props.myTasks,
                filterTasks: this.props.myTasks.filter((t) => t.status === 'Starting')
            })
        }
        if(this.props.loadingTakeTask !== prevProps.loadingTakeTask) {
            this.setState({
                loadingTakeTask: this.props.loadingTakeTask,
                
            })
        }
        if(this.props.successTakeTask !== prevProps.successTakeTask && this.props.successTakeTask === true) {
            console.log('true')
            this.setState({
                successTakeTask: this.props.successTakeTask,
                
            })
            this.props.getMyTasks(atob(sessionStorage.getItem('id')));
            
        }
        
        if (this.props.loadingMyTasks !== prevProps.loadingMyTasks) {
            this.setState({
                loading: this.props.loadingMyTasks
            })
        }
    }
    startingList = () => {
        
        var startingList = this.state.myTasks.filter((t) => t.status === 'Starting')
        this.setState({
            filterTasks: startingList,
            buttonShow: true
        })
        document.getElementById("start").style.borderBottom = "2px solid #DE9D66"
        document.getElementById("verify").style.borderBottom = "0px"
        document.getElementById("done").style.borderBottom = "0px"
        
    }
    verifyingList = () => {
        var verifyingList = this.state.myTasks.filter((t) => t.status === 'Verifying')
        this.setState({
            filterTasks: verifyingList,
            buttonShow: false
        })
        document.getElementById("verify").style.borderBottom = "2px solid #DE9D66"
        document.getElementById("start").style.borderBottom = "0px"
        document.getElementById("done").style.borderBottom = "0px"
    }

    doneList = () => {
        var doneList = this.state.myTasks.filter((t) => t.status === 'Done')
        this.setState({
            filterTasks: doneList,
            buttonShow: false
        })
        document.getElementById("done").style.borderBottom = "2px solid #DE9D66"
        document.getElementById("verify").style.borderBottom = "0px"
        document.getElementById("start").style.borderBottom = "0px"
    }
    completeTask = (id, problem) => {
        
        if (sessionStorage.getItem("id") !== null && sessionStorage.getItem("id") !== undefined) {
            let v_id = atob(sessionStorage.getItem("id"))
            const task = {
                id : id,
                problem: problem,
                status: 'Verifying',
                volunteer: {
                    id: v_id
                }
            }
            this.props.takeTask(task)
            
        } else {
            console.log("log in again")
        }
    }
    showButton = () => {
        
        document.getElementById("verifybtn").style.display = "block";
    
        
    
    }
    hideButton = () => {
    document.getElementById("verifybtn").style.display = "none";
    }
    render() {
        const {classes} = this.props;
       console.log(this.state.loadingTakeTask)
        
        return (
            <div>
                <div><Button className={classes.home} component={Link} to = {'/'}>Home</Button></div>
                <div className= {classes.container} style={{textAlign: "center"}}>
                
                <div>
                    <Typography className={classes.hello}>My Task Board</Typography>
                </div>
                
                
                <div className="btn-group" role="group" >
                        <button id ='start' type="button" className={classes.btngroup} style={{borderBottom: "2px solid #DE9D66"}}onClick={() => this.startingList()}>Starting</button><span style={{color: "#DE9D66"}}>|</span>
                        <button id = 'verify' type="button" className={classes.btngroup} onClick={() => this.verifyingList()}>Verifying</button><span style={{color: "#DE9D66"}}>|</span><button id='done' type="button" className={classes.btngroup} onClick={() => this.doneList()}>Done</button>
                </div>
                
                <div className={classes.table}>

                        <table className="table table-borderless">
                                    <thead>
                                    <tr>
                                        <th style={{width: '10%', textAlign: 'center', color: "#728567"}}>#</th>
                                        <th style={{width: '30%', textAlign: 'center', color: "#728567"}}>Problem Information
                                        </th>
                                        <th style={{width: '40%', textAlign: 'center', color: "#728567"}}>Problem Description</th>
                                        <th style={{width: '20%', textAlign: 'center', color: "#728567"}}></th>
                                    </tr>
                                    </thead>
                                    
                                    <tbody className={classes.tbody}>
                                        {this.state.loading ? 
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
                                            this.state.filterTasks.map((task) => 
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
                                                
                                                        <Button id = 'verifybtn' className={classes.completebtn} onClick= {(id, problem) => this.completeTask(task.id, task.problem)}>Complete</Button>
                                                            
                                                            
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
    getMyTasks: (id) => dispatch(getMyTasks(id)),
    takeTask: (task) => dispatch(takeTask(task)),

    

  
})
const mapStateToProps = state => ({
    
    loadingTakeTask: state.taskReducer.loadingTakeTask,
    successTakeTask: state.taskReducer.successTakeTask,
    myTasks: state.taskReducer.myTasks,
    loadingMyTasks: state.taskReducer.loadingMyTasks
   
})
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(TaskBoard));
