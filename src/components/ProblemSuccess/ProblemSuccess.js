import React, { Component } from 'react'
import style from './ProblemSuccessStyle.js';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux';
import {getAProblem, createTask} from '../../actions/anonymoususers/UserActions';
import CircularProgress from "@material-ui/core/CircularProgress";
const ColorCircularProgress = withStyles({
    root: {
      color: '#D4CE96'
      
    },
  })(CircularProgress);
class ProblemSuccess extends Component {
    constructor(props) {
        super(props);
        this.state = {
            problem: {},
            loadingTask:true,
            successTask: false
        } 
    }
    componentDidMount() {
        if (window.localStorage.getItem("problem_id") !== null ) {
            var id = window.localStorage.getItem("problem_id")
            this.props.getAProblem(id);
        }
    }



    componentDidUpdate(prevProps) {
        if (this.props.loadingTask !== prevProps.loadingTask) {
            this.setState({
                loadingTask: this.props.loadingTask
            })
        }
        if (this.props.successTask !== prevProps.successTask && this.props.successTask === true && this.props.loadingTask === false) {
            
            this.setState({
                successTask: this.props.successTask
            })
            
            setTimeout(() => this.success(this.props), 5000);
                
            
        }
        
    }
    success(props) {
        if (props !== undefined && props.history !== undefined) {
            props.history.push("/") 
        }
    }
    
    
 

    render() {
    const {classes} = this.props
    
        return (

            <div style={{textAlign: "center"}}>
                {this.state.loadingTask ? 
                (
                    <div>
                        <ColorCircularProgress variant="indeterminate" size={50} style={{marginTop: "150px"}}/>
                        <div>
                            <Typography className={classes.text} >
                                Your problem is processing. Please wait!
                            </Typography>
                        </div>

                    </div>
                )
                :
                (
                    <div>
                        <img src="images/mail.png" width="10%" height="10%" alt="Logo" style={{paddingTop :"150px"}}/>

                        <div>
                            <Typography className={classes.text} >
                                Thank you, your problem is well noted
                            
                            </Typography>
                            <Typography className={classes.text2}>
                                
                                You will be hearing from us soon!
                            </Typography>
                        </div>

                    </div>
                )
                }
                
                
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    getAProblem: (id) => dispatch(getAProblem(id)),
    createTask: (task) => dispatch(createTask(task))  
})
const mapStateToProps = state => ({
    problem: state.problem.problem,
    loadingTask: state.loadingTask.loadingTask,
    successTask: state.successTask.successTask
   
});
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(ProblemSuccess));
