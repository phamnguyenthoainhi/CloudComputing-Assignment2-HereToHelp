import React, { Component } from 'react'
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core';
import style from './TasksStyle.js';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Navbar from '../../Navbar/Navbar'
class Tasks extends Component {
    render() {
        const {classes} = this.props;
        var card = <Card className={classes.card} >
        <CardContent>
            <div className={classes.info}>
                <Typography variant="h5" gutterBottom className={classes.title}>Location</Typography>
                        <Typography variant="body1" gutterBottom className={classes.textbody}>
                        207 Nguyen Van Linh
                        </Typography>
                <Typography variant="h5" gutterBottom className={classes.title}>Name</Typography>
                <Typography variant="body1" gutterBottom className={classes.textbody}>
                       Nguyen Van Linh
                        </Typography>
                        <Grid container spacing={0}>
                        <Grid item xs={6} sm={12} md={12} lg={12} >
                        <Typography variant="h5" gutterBottom className={classes.title}>Birthday</Typography>
                <Typography variant="body1" gutterBottom className={classes.textbody}>
                        1999-01-01
                        </Typography>
                        </Grid>
                        <Grid item xs={6} sm={12} md={12} lg={12}>
                        <Typography variant="h5" gutterBottom className={classes.title}>Gender</Typography>
                <Typography variant="body1" gutterBottom className={classes.textbody}>
                        Female
                        </Typography>
                        </Grid>
                        </Grid>
                
                
                <Typography variant="h5" gutterBottom className={classes.title}>Contact</Typography>
                <Typography variant="body1" gutterBottom className={classes.textbody}>
                        012324
                        </Typography>
            </div>
            <Divider variant="middle" />
            <div className={classes.description}>
            <Typography variant="h5" className={classes.title}>Problem Description</Typography>
            <Typography variant="body1" gutterBottom className={classes.textbody}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                        </Typography>
            </div>
        </CardContent>
        <CardActions className={classes.action} >
            <Button size="small" className={classes.selectBtn}>Select</Button>
        </CardActions>
    </Card>
        return (
            <div>
                <Navbar/>
                 <Grid container spacing={3}>
                     <Grid item xs={12} sm={6}  md={4} lg={3} className={classes.item}>
                        {card}
                     </Grid>
                     <Grid item xs={12} sm={6}  md={4} lg={3} className={classes.item}>
                        {card}
                     </Grid>
                     <Grid item xs={12} sm={6}  md={4} lg={3} className={classes.item}>
                        {card}
                     </Grid>
                     <Grid item xs={12} sm={6}  md={4} lg={3} className={classes.item}>
                        {card}
                     </Grid>
                 </Grid>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    

  
})
const mapStateToProps = state => ({
   
});
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(Tasks));

