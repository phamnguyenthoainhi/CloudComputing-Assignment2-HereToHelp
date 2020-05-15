import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route} from 'react-router-dom';
import themeFile from "./theme/theme";
import HomePage from './components/homepage/HomePage';
import "./Style.css"
import ProblemForm from './components/Problem/ProblemForm';
import RegisterForm from './components/Register/RegisterForm';
import AboutUs from './components/AboutUs/AboutUs';
import ProblemSuccess from './components/ProblemSuccess/ProblemSuccess'
import Login from './components/Login/Login';
import Tasks from './components/Tasks/AllTasks/Tasks';
import VolunteerTasks from './components/Tasks/VolunteerTasks/VolunteerTasks';
import TaskDetails from './components/Tasks/TaskDetails/TaskDetails';
import AdminVerify from './components/Admin/AdminVerify';
import TaskBoard from './components/Tasks/TaskBoard/TaskBoard.js'
import {getTasks} from './actions/volunteers/VolunteeerActions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        tasks: [],
        loadingTasks: false
        
    }
}
componentDidMount() {
  this.props.getTasks()
}
componentDidUpdate(prevProps) {

  if (this.props.loadingTasks !== prevProps.loadingTasks) {
    this.setState({
        loadingTasks: this.props.loadingTasks
    })
}
    if (this.props.tasks !== prevProps.tasks) {
      this.setState({
          tasks: this.props.tasks
      })
  }

  

}

  render () {
    
    const theme = createMuiTheme(themeFile);
      let path = window.location.pathname.replace("/", "");
  
      let IdPath;
      
      let task = this.state.tasks.filter((p) => p.id === Number(path))
      for (let i = 0; i < task.length; i++) {
        if (task[i].id !== '' ) {
          task = task[i]
          IdPath = task.id
          break;
        }
        else IdPath = null;
      }
    
    
    return (
      
      <BrowserRouter>
       
            <ThemeProvider theme={theme}>
                <div className="App">
                <Route exact path={'/'} render={(props) => < HomePage {...props} />} />
                <Route exact path={'/register'} render={(props) => <RegisterForm {...props} />} />
                <Route exact path={'/problem'} render={(props) => <ProblemForm {...props} />} />
                <Route exact path={'/about'} render={(props) => <AboutUs {...props} />} />
                <Route exact path={'/successproblem'} render={(props) => <ProblemSuccess {...props} />} />
                <Route exact path={'/login'} render={(props) => <Login {...props} />} />
                <Route exact path={'/allTasks'} render={(props) => <Tasks {...props} />} />
                <Route exact path={'/myTasks'} render={(props) => <VolunteerTasks {...props} />} />
                <Route exact path={'/taskboard'} render={(props) => <TaskBoard {...props} />} />
                <Route exact path={`/`+IdPath} render={(props) => <TaskDetails 
                {...props} 
                task = {task}
                tasksLoading = {this.props.loadingTasks}

              
                />} />
                <Route exact path={'/admin'} render={(props) => <AdminVerify {...props} />} />



                </div>
            </ThemeProvider>
  
      </BrowserRouter>
      // </Provider>

      
      
    );
  }
  
}
const mapDispatchToProps = dispatch => ({
  getTasks: () => dispatch(getTasks())

  


})
const mapStateToProps = state => ({
  loadingTasks: state.taskReducer.loadingTasks,
  tasks: state.taskReducer.tasks
 
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

