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
    },
    {
        id: 2,
        title: "Bison Burger",
        category: "DINNER",
        time: 45,
        image: burger,
    },
    {
        id: 3,
        title: "Clasic Rack of Lamb",
        category: "DINNER",
        time: 45,
        image: rack,
    },
    {
        id: 4,
        title: "Bison Burger",
        category: "DINNER",
        time: 45,
        image: burger,
    },
    {
        id: 5,
        title: "Clasic Rack of Lamb",
        category: "DINNER",
        time: 45,
        image: rack,
    },
    {
        id: 6,
        title: "Bison Burger",
        category: "DINNER",
        time: 45,
        image: burger,
    },
    {
        id: 7,
        title: "Clasic Rack of Lamb",
        category: "DINNER",
        time: 45,
        image: rack,
    },
    {
        id: 8,
        title: "Bison Burger",
        category: "DINNER",
        time: 45,
        image: burger,
    },

];
const HomePage = () => {
    const classes = useStyles();
    return (
        <div>
            {/* heading */}
            <div className='heading' id="heading">
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

            {/* result card list */}
            {/* //title,category, img, time */}

            <RecipeCardList recipes={recipes} />
        </div>
    );
};
export default HomePage;