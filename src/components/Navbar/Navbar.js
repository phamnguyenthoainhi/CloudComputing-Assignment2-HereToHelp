import React, { Component } from 'react'
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core';
import style from './NavbarStyle';

class Navbar extends Component {
    render() {
        const {classes} = this.props; 
        return (
            <div className='container-fluid'>
                <img src="images/a.jpg" width="30%" height="30%" alt="Logo"/>
                <nav className="navbar navbar-expand-lg navbar-light .bg-transparent" style={{textAlign:'center'}}>
                    <a className="navbar-brand" href="#">
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="nav justify-content-center">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" style={{color: 'black'}}>About us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Registration</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="#">Get Help</a>
                                </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
export default connect(null)(withStyles(style)(Navbar));
