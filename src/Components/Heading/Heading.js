import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

import useStyles from './HeadingStyle';
const Heading = props =>{
    const loggedUser = useSelector(state=>state.login.logged);
    const classes = useStyles();
    const history = useHistory();
    const handleActionBtn = () =>{
        loggedUser?history.push("/post")
        :history.push("/auth")
    }
    // class name, btnTxt
    return(
        <div>
            {/* heading */}
            <div className={props.classes+" heading-common"} id="headingRecipe">
                <Grid container className={classes.content}>
                    <Grid item sm={6} xs={12} className={classes.textCont}>
                        <Typography
                            variant="p"
                            className={classes.topText}
                        >
                            AWARD WINNING
                        </Typography>
                        <Typography
                            variant="h3"
                            className={classes.bottomText}
                        >
                            COOK DELICIOUS MEALS WITH LESS STRESS AND MORE JOY
                        </Typography>
                    </Grid>
                    <Grid item sm={6} xs={12} className={classes.btnCont}>
                        <Button
                            className={classes.btn}
                            variant="contained"
                            color="primary"
                            onClick={handleActionBtn}
                        >
                            {!loggedUser?'Get Started':'Start Posting'}
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};
export default Heading;