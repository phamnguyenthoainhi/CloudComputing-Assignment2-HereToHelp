import React, { Component } from 'react'
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core';
import style from './VolunteerTasksStyle.js'
class VolunteerTasks extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    

  
})
const mapStateToProps = state => ({
   
});
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(VolunteerTasks));

