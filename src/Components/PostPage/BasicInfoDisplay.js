import {
    TextField,
    Grid,
    Button
} from '@material-ui/core';
import React, {useState, useEffect,useRef, useCallback} from 'react';
const BasicInfoDisplay = props=>{
    const inputFile = useRef();
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
                    image: props.recipe.image,
                    ext: props.recipe.ext,
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
    const handleAddImage=(event)=>{
        const ext = event.target.value.split('.').pop();
        setBasicInfo(basicInfo=>({...basicInfo,ext}));
        const fileReader = new FileReader();
        fileReader.onload = () =>{
            let url=fileReader.result;
            setBasicInfo(basicInfo=>({...basicInfo,image: url}));
        }
        fileReader.readAsDataURL(event.target.files[0]);
    }
    const handleAddClicked=()=>{
        inputFile.current.click();
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
            <input 
                onChange={handleAddImage}
                type="file" 
                id="file" 
                ref={inputFile} 
                style={{display:"none"}}
                accept=".jpg,.png,.jpeg"
            />
            <img src={basicInfo.image}/>
            <Button onClick={handleAddClicked}color="secondary" variant="contained">Choose an image</Button>
        </div>
    )
};
export default BasicInfoDisplay;