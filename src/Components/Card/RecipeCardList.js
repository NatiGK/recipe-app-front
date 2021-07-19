import React from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core";

import RecipeCard from './RecipeCard';

const useStyles = makeStyles((theme) => ({
    cardCont: {
        display: "flex",
        justifyContent: "center",
    },
    cardList: {
        display: "flex",
        alignContent: "center",
        width: "90%",
        marginTop: "80px",
        marginBottom: "80px",
    }
}));

const RecipeCardList = props => {
    const recipes = props.recipes;
    const classes = useStyles();
    return (
        <div className={classes.cardCont}>
            <Grid container spacing={3} className={classes.cardList}>
                {
                    recipes.map(recipe => {
                        return (
                            < RecipeCard
                                title={recipe.title}
                                category={recipe.category}
                                time={recipe.time}
                                image={recipe.image}
                                key={recipe.id}
                            />
                        )
                    })
                }
            </Grid>
        </div>
    )
};

export default RecipeCardList;

