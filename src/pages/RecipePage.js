import { Avatar, Divider, Grid, Typography } from '@material-ui/core';
import React from 'react'
import Heading from '../Components/Heading/Heading';
import Rating from '@material-ui/lab/Rating';

import useStyles from './RecipeStyle';

//Temporary imports
import img1 from './../bg.png';
import img2 from './../bg2.png';


const RecipeHeading = props =>{
    const classes = props.classes;
    return(
        <div className={classes.recipeHeading}>
            <div className={classes.usrInfo}>
                <Avatar className={classes.space}></Avatar>
                <div className={classes.info}>
                    <Typography variant="h6">
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
                    className={classes.space}
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
    const classes = props.classes;
    return(
        <Grid container className={classes.listItem}>
            <Grid item md={6} sm={12} spacing={3}>
                <Typography variant="body2">
                    {props.firstItemTxt}
                </Typography>
            </Grid>{
                props.secondItemTxt &&
                <Grid item md={6} sm={12} xs={12} spacing={6}>
                    <Typography variant="body2">
                        {props.secondItemTxt}
                    </Typography>
                </Grid>
            }
        </Grid>
    );
}

const MethodItem = props =>{
    const classes = props.classes;
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
                            return(
                                <img className={classes.methodImg} src={imgSrc} alt={props.title}/>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

const RecipePage = props => {
    const classes = useStyles();
    return (
        <div>
        <Heading classes="headingRecipe"/>
        <div class={classes.rootRecipe}>
            <div class={classes.container}>

                {/* recipe heading */}
                <RecipeHeading 
                    classes={classes}
                    userName="Temp User"
                    date={new Date()}
                    rating={4}
                    ratingAmount={1200}
                />

                {/* recipe title */}
                <div style={{margin:"15px",marginTop:"40px"}}>    
                    <Typography variant="h4" color="primary">
                        Crispy Baked Fish Sandwiches with Avocado Mayo and 
                        Pickled Onion
                    </Typography>
                </div>

                {/* recipe description */}
                <div style={{margin:"15px",marginTop:"20px"}}>
                    <Typography variant="body2">
                        Craving fried fish, but looking forsomething slightly
                        healthier? Try these crispy baked fish sandwiches with
                        avocado mayo and pickled onion. It's the creamy, crunchy
                        , tangy bite you've been looking for.
                    </Typography>
                </div>

                {/* recipe time */}
                <div className={classes.timeDisp} style={{margin:"15px",marginTop:"20px"}}>
                    <InfoDispBox color={classes.blueHeading} heading="PREP TIME" value="30 mins"/>
                    <InfoDispBox color={classes.blueHeading} heading="COOK TIME" value="10 mins"/>
                    <InfoDispBox color={classes.blueHeading} heading="TOTAL TIME" value="40 mins"/>
                </div>

                {/* servings */}
                <Divider />
                <div style={{margin:"15px",marginTop:"20px"}}>
                    <InfoDispBox  color={classes.yellowHeading} heading="SERVING" value="4 servings"/>
                </div>
                
                <Divider />
                {/* recipe ingredient list */}
                <div style={{margin:"15px",marginTop:"20px"}}>
                    <Typography variant="h4" style={{color:"#242424"}}>
                        Ingredients
                    </Typography>
                    <ListItem 
                        classes = {classes}
                        firstItemTxt="1/3 cup apple cider vingar"
                        secondItemTxt="1 tablespoon sugar"
                    />
                    <ListItem 
                        classes = {classes}
                        firstItemTxt="1 teaspoon kosher salt"
                        secondItemTxt="1/2 medium red onion, thinly sliced"
                    />
                    <ListItem 
                        classes = {classes}
                        firstItemTxt="1 teaspoon kosher salt"
                    />
                </div>

                <Divider />
                {/* recipe method */}
                <div className={classes.method}>
                    <Typography variant="h4" style={{color:"#242424"}}>
                        Method
                    </Typography>
                    <MethodItem
                        step={1}
                        classes={classes}
                        title="Preheat the oven, pickle the onions"
                        description="prealsdjflkajsdfkl sdldfkja sjlaskjf fjkajsd f
                                    asdfj alskjf kja sdfkja sldfj asjdf lsaj klfajs
                                    asff;lkja fjlaksjd fka;ksjd flkjasd fkja sdfkj d
                                    asfdkjas dfjlka sdffj asjdflfjas dfja sdjfkl ajd
                                    \n jaksdfj asdlfj alkjfd sdlkfj asjd fkajlsd f"
                        imgs={[img1,img2]}
                    />
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