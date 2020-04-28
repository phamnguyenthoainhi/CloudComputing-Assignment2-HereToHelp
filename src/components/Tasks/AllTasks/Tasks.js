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
    onClick(id) {

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
        
        var card = <Card className={classes.card} >
        <CardContent>
            <div className={classes.info}>
                <Typography variant="h5" gutterBottom className={classes.title}>Location</Typography>
                        <Typography variant="body1" gutterBottom className={classes.textbody}>
                        207 Nguyen Van Linh
                        </Typography>
                <Typography variant="h5" gutterBottom className={classes.title}>Name</Typography>
                <Typography variant="body1" gutterBottom className={classes.textbody}>
                       Nguyen Van Linh
                        </Typography>
                        {/* <Grid container spacing={0}>
                        <Grid item xs={6} sm={12} md={12} lg={12} >
                        <Typography variant="h5" gutterBottom className={classes.title}>Birthday</Typography>
                <Typography variant="body1" gutterBottom className={classes.textbody}>
                        1999-01-01
                        </Typography>
                        </Grid>
                        <Grid item xs={6} sm={12} md={12} lg={12}>
                        <Typography variant="h5" gutterBottom className={classes.title}>Gender</Typography>
                <Typography variant="body1" gutterBottom className={classes.textbody}>
                        Female
                        </Typography>
                        </Grid>
                        </Grid> */}
                
                
                {/* <Typography variant="h5" gutterBottom className={classes.title}>Contact</Typography>
                <Typography variant="body1" gutterBottom className={classes.textbody}>
                        012324
                        </Typography> */}
            </div>
            <Divider variant="middle" />
            {/* <div className={classes.description}>
            <Typography variant="h5" className={classes.title}>Problem Description</Typography>
            <Typography variant="body1" gutterBottom className={classes.textbody}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                        </Typography>
            </div> */}
        </CardContent>
        <CardActions className={classes.action} >
            <Button size="small" className={classes.selectBtn} onClick = {(id) => this.onClick(id)}>Show Details</Button>
        </CardActions>
    </Card>

    console.log(this.state.tasks)
        return (
            
            <div>
                <Navbar/>
                {this.state.loadingTasks ? 

                (skeleton)
                         : 
                 (<Grid container spacing={3}>
                     <Grid item xs={12} sm={6}  md={4} lg={3} className={classes.item}>
                         
                         
                         { 
                             (this.state.tasks !== undefined && this.state.tasks.length > 0) ?

                            (
                            
                             this.state.tasks.map((task) => 
                             
                             <Card className={classes.card} key={task.id}>
                                    <CardContent>
                                        <div className={classes.info}>
                                            <Typography variant="h5" gutterBottom className={classes.title}>Location</Typography>
                                                    <Typography variant="body1" gutterBottom className={classes.textbody}>
                                                    {task.location}
                                                    </Typography>
                                            <Typography variant="h5" gutterBottom className={classes.title}>Name</Typography>
                                            <Typography variant="body1" gutterBottom className={classes.textbody}>
                                                {task.ownerName}
                                                    </Typography>

                                        
                                        </div>
                                        <Divider variant="middle" />
                                    
                                    </CardContent>
                                    <CardActions className={classes.action} >
                                        <Button size="small" className={classes.selectBtn} onClick = {(id) => this.onClick(task.id)}>Show Details</Button>
                                    </CardActions>
                            </Card>
                            )
                            ) :
                            null
                        }
                        
                        
                     </Grid>
                 </Grid>)}
                 
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

