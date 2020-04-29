import React, { Component } from 'react'
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core';
import style from './TasksStyle.js';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Navbar from '../../Navbar/Navbar';
import {getTasks} from '../../../actions/volunteers/VolunteeerActions';
import Skeleton from '@material-ui/lab/Skeleton';
class Tasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            loadingTasks: false,
        }
    }
    componentDidMount() {
        this.props.getTasks()
    }
    componentDidUpdate(prevProps) {
        if (this.props.tasks !== prevProps.tasks) {
            this.setState({
                tasks: this.props.tasks
            })
        }
        if (this.props.loadingTasks !== prevProps.loadingTasks) {
            this.setState({
                loadingTasks: this.props.loadingTasks
            })
        }

    }
    sendId(id) {
        sessionStorage.setItem("taskid", id)
    }
    render() {
        const {classes} = this.props;
        var skeleton = 
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}  md={4} lg={3} className={classes.item}  >
                    <Skeleton variant="rect"  className={classes.skeleton}/>
                    
                </Grid>
                <Grid item xs={12} sm={6}  md={4} lg={3} className={classes.item}  >
                    <Skeleton variant="rect"  className={classes.skeleton}/>
                    
                </Grid>
                <Grid item xs={12} sm={6}  md={4} lg={3} className={classes.item}  >
                    <Skeleton variant="rect"  className={classes.skeleton}/>
                    
                </Grid>
                <Grid item xs={12} sm={6}  md={4} lg={3} className={classes.item}  >
                    <Skeleton variant="rect"  className={classes.skeleton}/>
                    
                </Grid>
            </Grid>

        return (
            
            <div>
                <Navbar/>
                {this.state.loadingTasks ? 

                (skeleton)
                         : 
                 (<Grid container spacing={3}>
                      { 
                             (this.state.tasks !== undefined && this.state.tasks.length > 0) ?

                            (
                            
                             this.state.tasks.map((task) => 
                     <Grid item xs={12} sm={6}  md={4} lg={3} className={classes.item} key={task.id}>
                         
                         
                        
                             
                             <Card className={classes.card} >
                                    <CardContent>
                                        <div className={classes.info}>
                                            <Typography variant="h5" gutterBottom className={classes.title}>Location</Typography>
                                                    <Typography variant="body1" gutterBottom className={classes.textbody}>
                                                    {task.problem.location}
                                                    </Typography>
                                            <Typography variant="h5" gutterBottom className={classes.title}>Name</Typography>
                                            <Typography variant="body1" gutterBottom className={classes.textbody}>
                                                {task.problem.ownerName}
                                                    </Typography>

                                        
                                        </div>
                                        <Divider variant="middle" />
                                    
                                    </CardContent>
                                    <CardActions className={classes.action} >
                                    
                                        <Button size="small" className={classes.selectBtn} onClick={(id) => this.sendId(task.id)}><a className='text' href={`${task.id}`} style={{ textDecoration: 'none', color: 'white' }}
                                    >Show More</a></Button>
                                    </CardActions>
                            </Card>
                            
                        
                        
                        
                     </Grid>
                     )) :
                     null
                     }
                 </Grid>
                 )
                 }
                 
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    getTasks: () => dispatch(getTasks())

    

  
})
const mapStateToProps = state => ({
    loadingTasks: state.taskReducer.loadingTasks,
    tasks: state.taskReducer.tasks
   
});
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(Tasks));

