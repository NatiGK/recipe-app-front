import React from 'react';
import useStyles from './HomeStyles';
import Typography from '@material-ui/core/Typography';
import bg from './../bg.png';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import RecipeCardList from './../Components/Card/RecipeCardList';

//temp imports
import burger from './../img/burger.jpg';
import rack from './../img/rack.jpg';


//recipes
const recipes = [
    {
        id: 1,
        title: "Clasic Rack of Lamb",
        category: "DINNER",
        time: 45,
        image: rack,
        rating: 2.5,
    },
    {
        id: 2,
        title: "Bison Burger",
        category: "DINNER",
        time: 45,
        image: burger,
        rating: 4,
    },
    {
        id: 3,
        title: "Clasic Rack of Lamb",
        category: "DINNER",
        time: 45,
        image: rack,
        rating: 1.5,
    },
    {
        id: 4,
        title: "Bison Burger",
        category: "DINNER",
        time: 45,
        image: burger,
        rating: 6,
    },
    {
        id: 5,
        title: "Clasic Rack of Lamb",
        category: "DINNER",
        time: 45,
        image: rack,
        rating: 3,
    },
    {
        id: 6,
        title: "Bison Burger",
        category: "DINNER",
        time: 45,
        image: burger,
        rating: 3,
    },
    {
        id: 7,
        title: "Clasic Rack of Lamb",
        category: "DINNER",
        time: 45,
        image: rack,
        rating: 3,
    },
    {
        id: 8,
        title: "Bison Burger",
        category: "DINNER",
        time: 45,
        image: burger,
        rating: 3,
    },

];
const HomePage = () => {
    const classes = useStyles();
    return (
        <div>
            {/* heading */}
            <div className='heading' id="heading">
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
                            color="secondary">
                            Get Started
                        </Button>
                    </Grid>
                </Grid>
            </div>

            {/* filters */}
            <div className={classes.filterCont}>
                <Grid container className={classes.filter}>
                    <Grid item md={1} xs={3}>
                        <Button color="primary">
                            ALL
                        </Button>
                    </Grid>
                    <Grid item md={1} xs={3}>
                        <Button color="primary">
                            BREAKFST
                        </Button>
                    </Grid>
                    <Grid item md={1} xs={3}>
                        <Button color="primary">
                            LUNCHES
                        </Button>
                    </Grid>
                    <Grid item md={1} xs={3}>
                        <Button color="primary">
                            DINNERS
                        </Button>
                    </Grid>
                    <Grid item md={1} xs={3}>
                        <Button color="primary">
                            DESSERTS
                        </Button>
                    </Grid>
                    <Grid item md={1} xs={3}>
                        <Button color="primary">
                            SNACKS
                        </Button>
                    </Grid>
                    <Grid item md={1} xs={3}>
                        <Button color="primary">
                            DRINKS
                        </Button>
                    </Grid>
                </Grid>
            </div>

            {/* result card list */}
            {/* //title,category, img, time */}
            <RecipeCardList recipes={recipes} />
        </div>
    );
};
export default HomePage;