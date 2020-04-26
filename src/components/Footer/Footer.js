import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import style from './FooterStyle';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core';
class Footer extends Component {
    render() {
        const {classes} = this.props; 
        return (
            <div class="footer">
                <Grid container spacing={2} className= {classes.grid}>
                    <Grid item xs>
                        <Grid container spacing={3}>
                            <Grid item xs={2} className={classes.social}>
                                <img src="images/facebook.png" width="30px" height="30px" alt="Facebook"/><br/>Facebook
                            </Grid>
                            <Grid item xs={2}>
                            <img src="images/instagram.png" width="30px" height="30px" alt="Instagram"/><br/>Instagram
                            </Grid>
                            <Grid item xs={2}>
                            <img src="images/twitter.png" width="30px" height="30px" alt="Twitter"/><br/>Twitter

                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs>
                       
                    </Grid>
                    <Grid item xs>
                        +84123456789<br/>
                        702 Nguyen Van Linh, District 7, HCM City<br/>
                        Copyright &copy; 2020
                    </Grid>
                   
                    

                </Grid>
                

            </div>
        )
    }
}
export default connect(null)(withStyles(style)(Footer));
