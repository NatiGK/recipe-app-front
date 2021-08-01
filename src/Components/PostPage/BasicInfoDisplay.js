import {
    TextField,
    Grid,
} from '@material-ui/core';
import React, {useState, useEffect, useCallback} from 'react';
const BasicInfoDisplay = props=>{
    const classes = props.classes;
    const setRecipe = props.setRecipe;
    const [basicInfo, setBasicInfo] = useState(
        {
            title:'',
            description:'',
            servings:'',
            prepTime:0,
            cookTime:0,
        }
    );
    useEffect(()=>{
            if(props.recipe){
                setBasicInfo({
                    title:props.recipe.title,
                    description: props.recipe.description,
                    servings: props.recipe.servings,
                    prepTime: props.recipe.prepTime,
                    cookTime: props.recipe.cookTime,
                })
            }    
    },[])
    useEffect(()=>{
        setRecipe(recipe=>({...recipe, ...basicInfo}));
    },[basicInfo])
    const handleTitleChange = (event) =>{
        setBasicInfo(basicInfo=>({...basicInfo,title: event.target.value}));
    }
    const handleDescriptionChange = (event) =>{
        setBasicInfo(basicInfo=>({...basicInfo,description: event.target.value}));
    }
    const handleServingsChange = (event) =>{
        setBasicInfo(basicInfo=>({...basicInfo,servings: parseInt(event.target.value)}));
    }
    const handlePrepTimeChange = (event) =>{
        setBasicInfo(basicInfo=>({...basicInfo,prepTime: parseInt(event.target.value)}));
    }
    const handleCookTimeChange = (event) =>{
        setBasicInfo(basicInfo=>({...basicInfo,cookTime: parseInt(event.target.value)}));
    }
    return(
        <div>
            <TextField
                className = {classes.txtFieldFirst}
                size="small"
                id="outlined-basic"
                variant="outlined"
                label="Recipe title"
                value={basicInfo.title}
                onChange={handleTitleChange}
                InputProps={{
                    className: classes.input,
                }}
            />
            <TextField
                className = {classes.txtField}
                label="Description"
                multiline
                rows={8}
                variant="outlined"
                value={basicInfo.description}
                onChange={handleDescriptionChange}
                InputProps={{
                    className: classes.input,
                }}
            />
            <Grid container spacing={1}>
                <Grid item sm="4" xs="12">
                    <TextField
                        className = {classes.txtField}
                        size="small"
                        id="outlined-basic"
                        variant="outlined"
                        label="Servings"
                        value={basicInfo.servings}
                        onChange={handleServingsChange}
                        InputProps={{
                            className: classes.input,
                        }}
                    />
                </Grid>
                <Grid item sm="4" xs="12">
                    <TextField
                        className = {classes.txtField}
                        size="small"
                        id="outlined-basic"
                        variant="outlined"
                        label="Prep time(min)"
                        onChange={handlePrepTimeChange}
                        value={basicInfo.prepTime||''}
                        InputProps={{
                            className: classes.input,
                        }}
                    />
                </Grid>
                <Grid item sm="4" xs="12">
                    <TextField
                        className = {classes.txtField}
                        size="small"
                        id="outlined-basic"
                        variant="outlined"
                        label="Cook time(min)"
                        onChange={handleCookTimeChange}
                        value={basicInfo.cookTime||''}
                        InputProps={{
                            className: classes.input,
                            
                        }}
                    />
                </Grid>  
            </Grid>
        </div>
    )
};
export default BasicInfoDisplay;