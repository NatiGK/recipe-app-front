import React,{useState} from 'react';
import useStyles from './HomeStyles';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import RecipeCardList from './../Components/Card/RecipeCardList';

import Heading from '../Components/Heading/Heading';


//recipes

const HomePage = props => {
    const [filterState, setFilterState] = useState(undefined);
    const handleFilterClicked = (filter)=>()=>{
        setFilterState(filter);
    }
    const classes = useStyles();
    const Filter = menuProps=>{
        return(
            <Grid item md={1} xs={3}>
                <Button 
                    style={{
                        color:"#ee8833",
                        height:"80px",
                        width:"120px",
                        boxShadow:"0px 0px 4px rgba(45,45,45,0.05)",
                        borderRadius:"0px",
                    }}
                    onClick={handleFilterClicked(menuProps.filter)}
                >
                    {menuProps.children}
                </Button>
                {filterState===menuProps.filter&&
                    <div 
                        style={{
                            width:"120px", 
                            height:"10px",
                            backgroundColor:"#dd9955"
                        }}>
                    </div>
                }
            </Grid>
        )
    }
    return (
        <div>
            {/* heading */}
            <Heading classes="heading"/>

            {/* filters */}
            <div className={classes.filterCont}>
                <Grid container className={classes.filter}>
                    <Filter filter={undefined}>All</Filter>
                    <Filter filter="BREAKFAST">BREAKFAST</Filter>
                    <Filter filter="LUNCH">LUNCHES</Filter>
                    <Filter filter="DINNER">DINNERS</Filter>
                    <Filter filter="DESSERT">DESSERTS</Filter>
                    <Filter filter="DRINK">DRINKS</Filter>
                </Grid>
            </div>

            {/* result card list */}
            {/* //title,category, img, time */}
            <RecipeCardList filter={filterState}/>
        </div>
    );
};
export default HomePage;