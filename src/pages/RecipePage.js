import { Avatar, Divider, Grid, Typography } from '@material-ui/core';
import React,{useState} from 'react'
import Heading from '../Components/Heading/Heading';
import Rating from '@material-ui/lab/Rating';
import {useQuery} from '@apollo/client';
import {GET_SINGLE_RECIPE} from './../API/query';

import { useParams } from 'react-router';

import useStyles from './RecipeStyle';

//Temporary imports



const RecipeHeading = props =>{
    const classes = props.classes;
    return(
        <div className={classes.recipeHeading}>
            <div className={classes.usrInfo}>
                <Avatar className={classes.space}></Avatar>
                <div className={classes.info}>
                    <Typography variant="body1">
                        {props.userName}
                    </Typography>
                    <Typography variant="body1">
                        {"Published "+ props.date.toISOString().split('T')[0]}
                    </Typography>
                </div>
            </div>

            <div className={classes.rating}>
                <Rating
                    name="read-only"
                    value={props.rating}
                    size="large"
                    readOnly
                    className={classes.lgRating}
                    precision={0.5}
                />
                <Rating
                    name="read-only"
                    value={props.rating}
                    size="small"
                    readOnly
                    className={classes.smRating}
                    precision={0.5}
                />
                <Typography variant="body2"className={classes.space}>
                    {props.ratingAmount + " ratings"}
                </Typography>
            </div>
        </div>
    );
};

const InfoDispBox = props =>{
    return (
        <div>
            <Typography variant="body2"  className={props.color}>
                {props.heading}
            </Typography>
            <Typography variant="body1">
                {props.value}
            </Typography>
        </div>
    );
}

const ListItem = props =>{
    return(
        <Grid item md={6} sm={12}>
            <Typography variant="body2">
                {props.itemTxt}
            </Typography>
        </Grid>
    );
}


/*
    Component Interface

*/
const MethodItem = props =>{
    const classes = props.classes;
    let count=0;
    return(
        <div className={classes.methodBody}>
            <div className={classes.paragraph}>
                <Typography variant="h5" color="primary" style={{marginRight:"2%"}}>
                    {props.step+"."}
                </Typography>
                <div>
                    <Typography variant="h5" style={{color:"#454545"}}>
                        {props.title}
                    </Typography>
                    <Typography variant="body2">
                        {props.description}
                    </Typography>
                
            
                    {
                        props.imgs.map(imgSrc=>{
                            count++;
                            return(
                                <img key={count}className={classes.methodImg} src={imgSrc} alt={props.title}/>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}


/*
    Component props
    {
        userName
        rating
        ratingAmount
        title
        description
        prepTime
        cookTime
        servings
        ingredients:["asdf","",""]
        method [{title, description, imgs:["",""]},{...},{..}])
    }
*/
const RecipePage = props => {
    let count=0;
    const classes = useStyles();
    const {loading, error, data} = useQuery(GET_SINGLE_RECIPE,
        {
            variables:{
                _id:useParams().id
            }
        }    
    );
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error... {error.message}</p>
    const recipe= data.recipe;
    console.log(recipe);
    return (
        <div>
        <Heading
            classes="headingRecipe" 
            rating={recipe.ratingAverage}
            ratingAmount={recipe.ratingAmount}
        />
        <div className={classes.rootRecipe}>
            <div className={classes.container}>

                {/* recipe heading */}
                <RecipeHeading 
                    classes={classes}
                    userName={"asdfasdf"}
                    date={new Date()}
                    rating={recipe.rating}
                    ratingAmount={recipe.ratingAmount}
                />

                {/* recipe title */}
                <div style={{margin:"15px",marginTop:"40px"}}>    
                    <Typography variant="h4" color="primary">
                        {recipe.title}
                    </Typography>
                </div>

                {/* recipe description */}
                <div style={{margin:"15px",marginTop:"20px"}}>
                    <Typography variant="body2">
                        {recipe.description}
                    </Typography>
                </div>
                <Divider />

                {/* recipe time */}
                <div className={classes.timeDisp} style={{margin:"15px",marginTop:"20px"}}>
                    <InfoDispBox color={classes.blueHeading} heading="PREP TIME" value={recipe.prepTime}/>
                    <InfoDispBox color={classes.blueHeading} heading="COOK TIME" value={recipe.cookTime}/>
                    <InfoDispBox color={classes.blueHeading} heading="TOTAL TIME" value={recipe.prepTime+recipe.cookTime}/>
                </div>

                {/* servings */}
                <div style={{margin:"15px",marginTop:"20px"}}>
                    <InfoDispBox  color={classes.yellowHeading} heading="SERVING" value={`${recipe.servings} servings`}/>
                </div>
                
                <Divider />
                {/* recipe ingredient list */}
                <div style={{margin:"15px",marginTop:"20px"}}>
                    <Typography variant="h4" style={{color:"#242424"}}>
                        Ingredients
                    </Typography>
                    <Grid container>
                        {
                            recipe.ingredients.map(ingredient=>{
                            count++;
                            return(
                                <ListItem key={count}itemTxt= {ingredient}/>
                            );
                        })}
                    </Grid>
                </div>

                <Divider />
                {/* recipe method */}
                <div className={classes.method}>
                    <Typography variant="h4" style={{color:"#242424"}}>
                        Method
                    </Typography>
                    {recipe.method.map(step=>{
                        count++;
                        return(
                            <MethodItem
                            key={count}
                            step={count-3}
                            classes={classes}
                            title={step.stepTitle}
                            description={step.stepDescription}
                            imgs={step.imgs}
                            />
                        );
                    })}
                </div>
                <Divider />
                
                {/* rate recipe */}
                <div style={{margin:"15px",marginTop:"20px",marginBottom:"5%"}}>
                    <Typography variant="h4"  style={{color:"#242424"}}>
                        Rate This Recipe
                    </Typography>
                    <Rating
                        name="rating"
                        size="large"
                    />
                </div>

            </div> 
        </div>
        </div>
    );
};
export default RecipePage;