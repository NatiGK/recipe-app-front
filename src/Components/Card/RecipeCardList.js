import React from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {GET_ALL_RECIPES} from './../../API/query';

import RecipeCard from './RecipeCard';
import { AllRecipes } from '../../API/query';

const useStyles = makeStyles((theme) => ({
    cardCont: {
        width:"100%",
        display: "flex",
        justifyContent:"center",
    },
    cardList: {
        display: "flex",
        justifyContent: "left",
        width: "90%",
        marginTop: "80px",
        marginBottom: "80px",
    }
}));

const RecipeCardList = props => {
    const filter = props.filter;
    
    const handleRecipeClicked = (recipeId) =>() =>{
        history.push(`/recipe/${recipeId}`);
    }
    const {loading, error, data} = useQuery(GET_ALL_RECIPES,
        {
            variables:{
                features: {
                    filter:{
                        category:filter
                    }
                }
            }
        }
    );
    const history = useHistory();
    const classes = useStyles();
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error...{error.message}</p>
    const recipes = data.allRecipes;
    return (
        <div className={classes.cardCont}>
            <Grid container spacing={3} className={classes.cardList}>
                {
                    recipes.map(recipe => {
                        return (
                            < RecipeCard
                                handleRecipeClicked={handleRecipeClicked}
                                title={recipe.title}
                                category={recipe.category}
                                time={recipe.prepTime+recipe.cookTime}
                                image={recipe.image}
                                rating={recipe.ratingAverage}
                                _id={recipe._id}
                                key={recipe._id}
                            />
                        )
                    })
                }
            </Grid>
        </div>
    )
};

export default RecipeCardList;

