import React, { Component } from 'react'
import style from './AdminStyle';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
class AdminVerify extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className= {classes.container}>
                <Card className={classes.root}>
                    <CardContent>
                        
                        <Typography className={classes.hello}>Hello Admin!</Typography>
                        <Typography className={classes.welcome}>Welcome back to Verify Volunteer Tasks</Typography>
                           
                        
                    </CardContent>
                </Card>
                <div>
                        <table class="table">
                                    <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">

                                        
                                        </th>
                                        <th scope="col">Problem Description</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row"><Avatar>
                                                        1
                                                    </Avatar></th>
                                        <td><List >
                                                <ListItem>
                                                    <ListItemAvatar>
                                                    <Avatar>
                                                        {/* <ImageIcon /> */}
                                                    </Avatar>
                                                    </ListItemAvatar>
                                                    <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                                                </ListItem>
                                                {/* <Divider variant="inset" component="li" /> */}
                                                <ListItem>
                                                    <ListItemAvatar>
                                                    <Avatar>
                                                        {/* <WorkIcon /> */}
                                                    </Avatar>
                                                    </ListItemAvatar>
                                                    <ListItemText primary="Work" secondary="Jan 7, 2014" />
                                                </ListItem>
                                                {/* <Divider variant="inset" component="li" /> */}
                                                
                                         </List></td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><Avatar>
                                                        1
                                                    </Avatar></th>
                                        <td><List >
                                                <ListItem>
                                                    <ListItemAvatar>
                                                    <Avatar>
                                                        {/* <ImageIcon /> */}
                                                    </Avatar>
                                                    </ListItemAvatar>
                                                    <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                                                </ListItem>
                                                {/* <Divider variant="inset" component="li" /> */}
                                                <ListItem>
                                                    <ListItemAvatar>
                                                    <Avatar>
                                                        {/* <WorkIcon /> */}
                                                    </Avatar>
                                                    </ListItemAvatar>
                                                    <ListItemText primary="Work" secondary="Jan 7, 2014" />
                                                </ListItem>
                                                {/* <Divider variant="inset" component="li" /> */}
                                                
                                         </List></td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>

                                    </tbody>
                        </table>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    // registerProblem: (problem) => dispatch(registerProblem(problem)),

    

  
})
const mapStateToProps = state => ({
    
    // loadingProblem: state.loadingProblem.loadingProblem,
    // successProblem: state.successProblem.successProblem
   
});
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(AdminVerify));
