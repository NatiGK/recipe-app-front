import { 
    Button, 
    Divider, 
    Fab, 
    Grid, 
    InputAdornment, 
    Step, 
    StepLabel, 
    Stepper, 
    TextField, 
    Typography,
    IconButton
} from '@material-ui/core';
import React,{useRef, useState} from 'react';
import useStyles from './PostStyles';
import sideImg from './..//RectangleSid.png';
import { Add, Delete } from '@material-ui/icons';

function getSteps(){
    return ['Basic Information','Add the Ingredients', 'Specify the method'];
}
function getStepContent(step){
    switch(step){
        case 0:
            return 'Add basic information about the recipe.';
        case 1:
            return 'Time to add the ingredients.';
        case 2:
            return 'One final step, plese specify the method.'
        default:
            return 'Unknown step';
    }
}
const BasicInfoDisplay = props=>{
    const classes = props.classes;
    return(
        <div>
            <TextField
                className = {classes.txtFieldFirst}
                size="small"
                id="outlined-basic"
                variant="outlined"
                label="Recipe title"
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
                        label="Serving"
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
                        InputProps={{
                            className: classes.input,
                            
                        }}
                    />
                </Grid>  
            </Grid>
        </div>
    )
}
const RecipesDisplay = props=>{
    const [ingredients, setIngredients] = useState([]);
    const classes = props.classes;

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
}
const MethodDisplay = props=>{
    const classes =  props.classes;
    const[methodSteps,setMethodSteps] = useState([]);
    const inputFile = useRef();
    const handleChange = (field, index)=>(event)=>{
        if(field==="title"){
            let newMethodSteps = [...methodSteps];
            newMethodSteps[index].title = event.target.value;
            setMethodSteps(newMethodSteps);
        }else if(field==="description"){
            let newMethodSteps = [...methodSteps];
            newMethodSteps[index].description = event.target.value;
            setMethodSteps(newMethodSteps);
        }
    }
    const handleAddStep = ()=>{
        let newMethodSteps = [...methodSteps];
        newMethodSteps.push({
            title:"",
            description:"",
            imgs:[],
            imgObjs:[],
        });
        setMethodSteps(newMethodSteps);
    }
    const handleDeleteStep = (index)=>()=>{
        let newMethodSteps = [...methodSteps];
        newMethodSteps.splice(index,1);
        setMethodSteps(newMethodSteps)
    }
    const handleStepImgDelete = (index,iIndex) => ()=>{
        let newMethodSteps = [...methodSteps];
        newMethodSteps[index].imgs.splice(iIndex,1);
        setMethodSteps(newMethodSteps);
    }
    const [selectedStepIndex, setSelectedStepIndex] = useState(0);
    const handleAddStepImgClick = (index) => ()=>{

        setSelectedStepIndex(index);
        inputFile.current.click();
    }
    const handleAddStepImg = (event)=>{
        let newMethodSteps = [...methodSteps];
        newMethodSteps[selectedStepIndex].imgObjs.push(event.target.files[0]);
        const fileReader = new FileReader();
        let url;
        fileReader.onload = () =>{
            url=fileReader.result;
            newMethodSteps[selectedStepIndex].imgs.push(url);
            setMethodSteps(newMethodSteps);
        }
        fileReader.readAsDataURL(event.target.files[0]);
    }
    return(
        <div>
            {/* displayed if there are no steps in the method */}
            {methodSteps.length===0&&
                <div className={classes.emptyBox}>
                    <Typography variant="body2"  className={classes.emptyText}>
                        we are waiting..., please click the add
                        button to tell us how to prepare the food.
                    </Typography>
                </div>
            }
            {/* displayed if there are 1 or more steps */}
            {methodSteps.length!==0&&

                // map each steps to a "step view"
                methodSteps.map((step,index)=>{
                    return(
                        <div key={index} className={classes.stepContainer}>
                            <Typography variant="body2" color="primary">
                                {(index+1)+'. '}
                            </Typography>
                            <div className={classes.stepContent}>
                                <TextField
                                    className = {classes.txtFieldFirst}
                                    size="small"
                                    id="outlined-basic"
                                    variant="outlined"
                                    label="Step title"
                                    value={step.title}
                                    onChange={handleChange("title",index)}
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
                                    value={step.description}
                                    onChange={handleChange("description",index)}
                                    InputProps={{
                                        className: classes.input,
                                    }}
                                />
                                <input 
                                    onChange={handleAddStepImg}
                                    type="file" 
                                    id="file" 
                                    ref={inputFile} 
                                    style={{display:"none"}}
                                    accept=".jpg,.png,.jpeg"
                                />
                                {/* map each images inside the step */}
                                <div className={classes.imgContainer}>
                                    {step.imgs.map((img,iIndex)=>{
                                        return(
                                            <div className={classes.methodImgContainer} key={iIndex}>
                                                {/* a delete icon for each images */}
                                                <img className={classes.methodImg} src={img} alt={img} />
                                                <IconButton 
                                                    className={classes.deleteMimg}
                                                    onClick={handleStepImgDelete(index,iIndex)}
                                                >
                                                    <Delete  fontSize="small"/>
                                                </IconButton>
                                            </div>
                                        );
                                    })}
                                    <Button onClick={handleAddStepImgClick(index)}variant="contained" color="secondary">
                                        + Add Image
                                    </Button>
                                </div>
                            </div>
                            {/* a delete icon for each steps */}
                            <IconButton 
                                className={classes.deleteM}
                                onClick = {handleDeleteStep(index)}
                            >
                                <Delete  />
                            </IconButton>
                        </div>
                    );
                })
            }
            <Fab 
                aria-label="add" 
                className={classes.add}
                onClick={handleAddStep}
            >
                <Add/>
            </Fab>
        </div>
    );
}
const PostPage = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();

    const handleNext = () =>{
        setActiveStep((prevActiveStep)=>prevActiveStep+1);
    }
    const handleBack = () =>{
        setActiveStep((prevActiveStep)=>prevActiveStep-1);
    }
    return (
            <div className={classes.root}>
                
                <div className={classes.left}>
                    <img  src={sideImg}/>
                </div>
                <div className={classes.fixFixed} style={{width:"25%"}}>
                </div>
                    
                <div className={classes.right}>
                    <div className={classes.formCont}>
                    <div className={classes.innerFormCont}>
                        <Divider/>
                            <Typography variant="h4" color="primary" className={classes.formHeader}>
                                POST RECIPE
                            </Typography>
                        <Divider/>
                        {activeStep===0&&
                            <BasicInfoDisplay classes={classes}/>
                        }
                        {activeStep===1&&
                            <RecipesDisplay classes={classes}/>
                        }
                        {activeStep===2&&
                            <MethodDisplay classes={classes}/>
                        }
                    </div>
                    <Stepper activeStep={activeStep} className={classes.stepperBox}>
                        {steps.map((label,index)=>{
                            return(
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            );
                        })
                        }
                    </Stepper>
                    <div>
                        <div className={classes.stepperNxt}>
                            <Button color="primary"variant="outlined"disabled={activeStep===0} onClick={handleBack}>
                                Back
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                            >
                                {activeStep === steps.length-1?'Finish':'Next'}
                            </Button>
                        </div>
                    </div>
                    </div>
                </div>
                
            </div>
    );
};
export default PostPage;