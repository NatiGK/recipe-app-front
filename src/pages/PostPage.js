import { 
    Button, 
    Divider,
    Step,
    StepLabel, 
    Stepper,
    Typography,
} from '@material-ui/core';
import React,{useState} from 'react';
import useStyles from './PostStyles';
import sideImg from './..//RectangleSid.png';

import BasicInfoDisplay from '../Components/PostPage/BasicInfoDisplay';
import IngredientsDisplay from '../Components/PostPage/IngredientsDisplay';
import MethodDisplay from '../Components/PostPage/MethodDisplay';

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

const PostPage = () => {
    const [recipe, setRecipe] = useState();
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
                            <BasicInfoDisplay classes={classes} recipe={recipe} setRecipe={setRecipe}/>
                        }
                        {activeStep===1&&
                            <IngredientsDisplay classes={classes} recipe={recipe} setRecipe={setRecipe}/>
                        }
                        {activeStep===2&&
                            <MethodDisplay classes={classes} recipe={recipe} setRecipe={setRecipe}/>
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