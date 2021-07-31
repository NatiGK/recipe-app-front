import React,{useState} from 'react';
import useStyles from './HomeStyles';
import Typography from '@material-ui/core/Typography';
import bg from './../bg.png';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import RecipeCardList from './../Components/Card/RecipeCardList';

//temp imports
import burger from './../img/burger.jpg';
import rack from './../img/rack.jpg';
import Heading from '../Components/Heading/Heading';

import { useSelector } from 'react-redux';


//recipes
const recipes = [
    {
        _id: 1,
        title: "Clasic Rack of Lamb",
        category: "DINNER",
        time: 45,
        image: rack,
        rating: 2.5,
    },
    {
        _id: 2,
        title: "Bison Burger",
        category: "DINNER",
        time: 45,
        image: burger,
        rating: 4,
    },
    {
        _id: 3,
        title: "Clasic Rack of Lamb",
        category: "DINNER",
        time: 45,
        image: rack,
        rating: 1.5,
    },
    {
        _id: 4,
        title: "Bison Burger",
        category: "DINNER",
        time: 45,
        image: burger,
        rating: 6,
    },
    {
        _id: 5,
        title: "Clasic Rack of Lamb",
        category: "DINNER",
        time: 45,
        image: rack,
        rating: 3,
    },
    {
        _id: 6,
        title: "Bison Burger",
        category: "DINNER",
        time: 45,
        image: burger,
        rating: 3,
    },
    {
        _id: 7,
        title: "Clasic Rack of Lamb",
        category: "DINNER",
        time: 45,
        image: rack,
        rating: 3,
    },
    {
        _id: 8,
        title: "Bison Burger",
        category: "DINNER",
        time: 45,
        image: burger,
        rating: 3,
    },

];
const HomePage = props => {
    const [filterState, setFilterState] = useState(undefined);
    const handleFilterClicked = (filter)=>()=>{
        setFilterState(filter);
    }
    
    const classes = useStyles();
    return (
        <div>
            {/* heading */}
            <Heading classes="heading"/>

            {/* filters */}
            <div className={classes.filterCont}>
                <Grid container className={classes.filter}>
                    <Grid item md={1} xs={3}>
                        <Button color="primary" onClick={handleFilterClicked(undefined)}>
                            ALL
                        </Button>
                    </Grid>
                    <Grid item md={1} xs={3}>
                        <Button color="primary" onClick={handleFilterClicked('BREAKFAST')}>
                            BREAKFAST
                        </Button>
                    </Grid>
                    <Grid item md={1} xs={3}>
                        <Button color="primary" onClick={handleFilterClicked('LUNCH')}>
                            LUNCHES 
                        </Button>
                    </Grid>
                    <Grid item md={1} xs={3}>
                        <Button color="primary" onClick={handleFilterClicked('DINNER')}>
                            DINNERS
                        </Button>
                    </Grid>
                    <Grid item md={1} xs={3}>
                        <Button color="primary" onClick={handleFilterClicked('DESSERT')}>
                            DESSERTS
                        </Button>
                    </Grid>
                    <Grid item md={1} xs={3}>
                        <Button color="primary" onClick={handleFilterClicked('SNACK')}>
                            SNACKS
                        </Button>
                    </Grid>
                    <Grid item md={1} xs={3}>
                        <Button color="primary" onClick={handleFilterClicked('DRINK')}>
                            DRINKS
                        </Button>
                    </Grid>
                </Grid>
            </div>

            {/* result card list */}
            {/* //title,category, img, time */}
            <RecipeCardList recipes={recipes} filter={filterState}/>
        </div>
    );
};
export default HomePage;