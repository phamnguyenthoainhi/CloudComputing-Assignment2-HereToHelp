import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import style from './AboutUsStyle.js';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Navbar from '../Navbar/Navbar.js'
class AboutUs extends Component {
    render() {
        const {classes} = this.props
        return (
            <div className={classes.container}>
                <Navbar />
                <div className={classes.img}>
                <Avatar alt="My face" src="images/avatar2.jpg" className={classes.avatar}/>

                </div>
                <div className= {classes.content}>
                    <Typography className={classes.name}>
                        Hi, my name is Pham Nguyen Thoai Nhi
                    </Typography>
                    <Typography className={classes.text}>
                        HereToHelp is one of my individual projects for Cloud Computing Course in RMIT Vietnam
                    </Typography>
                    <Typography className={classes.text}>
                        Since we're suffering from the pandemic and everyone is in quarentine, I believe contribution from everyone will help us get through this tough time.
                        
                    </Typography>
                    <Typography className={classes.text}>
                        So I make this website, hopefully to connect those in need and those wanting to help.
                    </Typography>
                    

                </div>
                
               
            </div>
        )
    }
}

export default (withStyles(style)(AboutUs));
