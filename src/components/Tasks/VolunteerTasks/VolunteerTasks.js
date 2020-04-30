import React, { Component } from 'react'
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core';
import style from './VolunteerTasksStyle.js'
import {getTasksAdmin} from '../../../actions/volunteers/VolunteeerActions'
class VolunteerTasks extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    getTasksAdmin: () => dispatch(getTasksAdmin()),

     
})
const mapStateToProps = state => ({
    loadingTasks: state.taskReducer.loadingTasksAdmin,
    tasks: state.taskReducer.tasksadmin
   
})
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(VolunteerTasks));

