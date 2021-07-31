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
            prepTime:'',
            cookTime:'',
        }
    );
    useEffect(
        useCallback(()=>{
            if(props.recipe){
                setBasicInfo({
                    title:props.recipe.title,
                    description: props.recipe.description,
                    servings: props.recipe.servings,
                    prepTime: props.recipe.prepTime,
                    cookTime: props.recipe.cookTime,
                })
            }
    }),[props.recipe])
    const handleTitleChange = (event) =>{
        setBasicInfo({...basicInfo,title: event.target.value});
        setRecipe({...props.recipe, ...basicInfo});
    }
    const handleDescriptionChange = (event) =>{
        setBasicInfo({...basicInfo,description: event.target.value});
        setRecipe({...props.recipe, ...basicInfo});
    }
    const handleServingsChange = (event) =>{
        setBasicInfo({...basicInfo,servings: event.target.value});
        setRecipe({...props.recipe, ...basicInfo});
    }
    const handlePrepTimeChange = (event) =>{
        setBasicInfo({...basicInfo,prepTime: event.target.value});
        setRecipe({...props.recipe, ...basicInfo});
    }
    const handleCookTimeChange = (event) =>{
        setBasicInfo({...basicInfo,cookTime: event.target.value});
        setRecipe({...props.recipe, ...basicInfo});
    }
    return(
        <div>
            <TextField
                className = {classes.txtFieldFirst}
                size="small"
                id="outlined-basic"
                variant="outlined"
                label="Recipe title"
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
                onChange={handleDescriptionChange}
                //value={basicInfo.description||''}
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
                        onChange={handleServingsChange}
                        value={basicInfo.servings||''}
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