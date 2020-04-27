import React, { Component } from 'react'
import style from './ProblemSuccessStyle.js';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

class ProblemSuccess extends Component {
    render() {
        return (
            <div>
                <div>
                    <Typography>
                        Your problem is well noted
                       
                    </Typography>
                    <Typography>
                        
                        Please wait for email or phone call from our volunteer
                    </Typography>
                </div>
            </div>
        )
    }
}
export default (withStyles(style)(ProblemSuccess));
