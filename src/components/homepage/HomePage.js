import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core';
import style from './HomePageStyle';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";

class HomePage extends Component {

    logout = () => {
        window.sessionStorage.removeItem('role');
        window.location.reload();
    }
    render() {
        const {classes} = this.props; 
        
        return (
            <div>
                 {(window.sessionStorage.getItem('role') !== null && window.sessionStorage.getItem('role') !== undefined) ? 
                 (<div className={classes.success} style={{display: 'block'}}>
                <Button className={classes.logout} onClick={() => this.logout()}>Logout</Button>
                <br/>
                 <Typography className={classes.successtext}>Hello again!</Typography>
                 {window.sessionStorage.getItem('role') === 'USER' ? 
                 (
                     <div>
                         <Button className={classes.successbtn} component={Link} to='/allTasks'>All Tasks</Button>
                        <Button className={classes.successbtn} component={Link} to='/taskboard'>My Task Board</Button>
                     </div>
                     
                 ) 
                 : 
                 (
                     <div>
                         <Button className={classes.successbtn} component={Link} to='/allTasks'>All Tasks</Button>                     
                        <Button className={classes.successbtn} component={Link} to='/admin'>Admin Task Board</Button>
                     </div>
                     
                     )
                }
                 
             </div>):null

                } 
                
                <Navbar/>
                <div className ={classes.contenthome}>
                    <Grid container spacing={0} className={classes.grid}>
                        <Grid item lg={6} className={classes.itemtopleft}>
                            <Box className={classes.containerword} style={{textAlign: "center"}}>
                                <Typography className={classes.welcome}>
                                    Welcome to HereToHelp
                                    </Typography>
                                    <Typography className={classes.content}>
                                    From an idea to help the quanrantined get over with Coronavirus that grown into this project.
                                    </Typography>
                                    <Button className={classes.problemBtn} component={Link} to = "/problem">Tell us your problem</Button>
                            </Box>
                               
                            
                        </Grid>
                        <Grid item lg={6} className={classes.itemtopright}>
                            <img src="images/goodnews.jpeg" width="100%" height="100%" alt="Logo"/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0} className={classes.gridmiddle}>
                        <Grid item lg={6} className={classes.itemmiddleleft}>
                            <img src="https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" width="100%" height="100%" alt="Logo"/>
                        </Grid>
                        <Grid item lg={6} className={classes.itemmiddleright} style={{textAlign: "center"}}>
                            <Box className={classes.containerwordmiddle}>
                                <Typography className={classes.welcome}>
                                    Make a true impact
                                    </Typography>
                                    <Typography className={classes.content}>
                                    Join our volunteer community to help other people
                                    </Typography>
                                    <Button  className={classes.registerBtn} component={Link} to = "/register" >Register</Button>
                            </Box>
                               
                            
                        </Grid> 
                    </Grid>
                </div>
                <Footer className={classes.footer}/>
            </div>
        )
    }
}
export default connect(null)(withStyles(style)(HomePage));
