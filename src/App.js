import React, { Component } from 'react';
import './App.css';
import  {Provider} from 'react-redux';
import store from './store';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route} from 'react-router-dom';
import themeFile from "./theme/theme";
import HomePage from './components/homepage/HomePage';
import "./Style.css"
import ProblemForm from './components/Problem/ProblemForm';
import RegisterForm from './components/Register/RegisterForm';
import AboutUs from './components/AboutUs/AboutUs';
class App extends Component {
  render () {
    const theme = createMuiTheme(themeFile);
    return (
      <BrowserRouter>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <div className="App">
                <Route exact path={'/'} render={(props) => < HomePage {...props} />} />
                <Route exact path={'/register'} render={(props) => <RegisterForm {...props} />} />
                <Route exact path={'/problem'} render={(props) => <ProblemForm {...props} />} />
                <Route exact path={'/about'} render={(props) => <AboutUs {...props} />} />

                </div>
            </ThemeProvider>
  
        </Provider>
      </BrowserRouter>
      
      
    );
  }
  
}

export default App;
