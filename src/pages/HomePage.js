import React from 'react';
import useStyles from './HomeStyles';
import Typography from '@material-ui/core/Typography';
import bg from './../bg.png';
import { Button } from '@material-ui/core';
const HomePage = () => {
    const classes = useStyles();
    return (
        <div>
            {/* heading */}
            <div className='top'>
                <div className={classes.content}>
                    <div className={classes.textCont}>
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
                    </div>
                    <div className={classes.btnCont}>
                        <Button
                            className={classes.btn}
                            variant="contained"
                            color="secondary">
                            Get Started
                        </Button>
                    </div>
                </div>
            </div>

            {/* filters */}
            <div className={classes.filterCont}>
                <div className={classes.filter}>
                    <Button className={classes.filterBtn}>
                        ALL
                    </Button>
                    <Button className={classes.filterBtn}>
                        BREAKFST
                    </Button>
                    <Button className={classes.filterBtn}>
                        LUNCHES
                    </Button>
                    <Button className={classes.filterBtn}>
                        DINNERS
                    </Button>
                    <Button className={classes.filterBtn}>
                        DESSERTS
                    </Button>
                    <Button className={classes.filterBtn}>
                        SNACKS AND APETIZERS
                    </Button>
                    <Button className={classes.filterBtn}>
                        DRINKS
                    </Button>
                </div>
            </div>
        </div>
    );
};
export default HomePage;