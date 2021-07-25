import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import useStyles from './HeadingStyle';
const Heading = props =>{
    const classes = useStyles();
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
                            color="primary">
                            Get Started
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};
export default Heading;