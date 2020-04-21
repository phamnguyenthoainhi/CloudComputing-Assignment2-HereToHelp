import React, { Component } from 'react';
import './App.css';
import  {Provider} from 'react-redux';
import store from './store';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route} from 'react-router-dom';
import themeFile from "./theme/theme";
import HomePage from './components/homepage/HomePage';
class App extends Component {
  render () {
    const theme = createMuiTheme(themeFile);
    return (
      <BrowserRouter>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <div className="App">
                <Route exact path={'/r'} render={(props) => < HomePage {...props} />} />

                </div>
            </ThemeProvider>
  
        </Provider>
      </BrowserRouter>
      
      
    );
  }
  
}

export default App;
