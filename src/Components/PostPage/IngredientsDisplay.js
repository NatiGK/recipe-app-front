import {
    Fab, 
    InputAdornment,
    TextField, 
    Typography,
    IconButton
} from '@material-ui/core';
import React,{useState, useEffect} from 'react';
import { Add, Delete } from '@material-ui/icons';
const IngredientsDisplay = props=>{
    const [ingredients, setIngredients] = useState([]);
    const classes = props.classes;
    const setRecipe = props.setRecipe;
    useEffect(()=>{
        if(props.recipe.ingredients){
            setIngredients(props.recipe.ingredients)
        }
    },[]);
    useEffect(()=>{
        setRecipe(recipe=>({...recipe,ingredients}));
    },[ingredients])
    const handleOnChange = (index)=>(event)=>{
        let newIngredients = [...ingredients];
        newIngredients[index] = event.target.value;
        setIngredients(newIngredients);
    }
    const handleAddIngredient = (event) =>{
        let newIngredients = [...ingredients];
        newIngredients.push("");
        setIngredients(newIngredients);
    }
    const handleDeleteIngredient = (index)=>(event)=>{
        let newIngredients = [...ingredients];
        newIngredients.splice(index,1);
        setIngredients(newIngredients);
    }
    return(
        <div>
            {ingredients.length===0&&
                <div className={classes.emptyBox}>
                <Typography variant="body2" className={classes.emptyText}>
                    Please add at least one ingredient
                </Typography>
                </div>
            }
            
            {ingredients.length!==0&&
                (ingredients.map((ingredient,index)=>{
                    return(
                        <TextField
                            key={index}
                            className = {classes.txtField}
                            size="small"
                            id="outlined-basic"
                            variant="outlined"
                            value={ingredient}
                            onChange={handleOnChange(index)}
                            InputProps={{
                                className: classes.input,
                                endAdornment:
                                <InputAdornment position="start" >
                                    <IconButton onClick={handleDeleteIngredient(index)}>
                                        <Delete className={classes.deleteR} />
                                    </IconButton>
                                </InputAdornment>,
                            }}
                        />
                    );
                }))
            }
            <Fab 
                
                aria-label="add" 
                className={classes.add}
                onClick={handleAddIngredient}
            >
                <Add/>
            </Fab>
        </div>
    );
};

export default IngredientsDisplay;