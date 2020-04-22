import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core';
import style from './HomePageStyle';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
class HomePage extends Component {
    render() {
        const {classes} = this.props; 
        return (
            <div>
                <Navbar/>
                <Footer/>
            </div>
        )
    }
}
export default connect(null)(withStyles(style)(HomePage));
