import { Button, Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import React,{useState} from 'react';

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
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());
    const steps = getSteps();

    const handleNext = () =>{
        setActiveStep((prevActiveStep)=>prevActiveStep+1);
    }
    const handleBack = () =>{
        setActiveStep((prevActiveStep)=>prevActiveStep-1);
    }
    return (
        <div>
            <div>
                {activeStep===0&&<h4>Basic Information</h4>}
                {activeStep===1&&<h4>Ingredients</h4>}
                {activeStep===2&&<h4>Method</h4>}
            </div>
            <Stepper activeStep={activeStep}>
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
                <Typography>{getStepContent(activeStep)}</Typography>
                <div>
                    <Button disabled={activeStep===0} onClick={handleBack}>
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
    );
};
export default PostPage;