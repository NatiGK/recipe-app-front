import { 
    Button,
    Fab,
    TextField, 
    Typography,
    IconButton
} from '@material-ui/core';
import React,{useEffect, useRef, useState} from 'react';
import { Add, Delete } from '@material-ui/icons';

const MethodDisplay = props=>{
    const classes =  props.classes;
    const[methodSteps,setMethodSteps] = useState([]);
    const setRecipe = props.setRecipe;
    useEffect(()=>{
        if(props.recipe.method){
            setMethodSteps(props.recipe.method);
        }
    },[])
    useEffect(()=>{
        setRecipe(recipe=>({...recipe, method: methodSteps}));
    },[methodSteps]);
    const inputFile = useRef();
    const handleChange = (field, index)=>(event)=>{
        if(field==="title"){
            let newMethodSteps = [...methodSteps];
            newMethodSteps[index].stepTitle = event.target.value;
            setMethodSteps(newMethodSteps);
        }else if(field==="description"){
            let newMethodSteps = [...methodSteps];
            newMethodSteps[index].stepDescription = event.target.value;
            setMethodSteps(newMethodSteps);
        }
    }
    const handleAddStep = ()=>{
        let newMethodSteps = [...methodSteps];
        newMethodSteps.push({
            stepTitle:"",
            stepDescription:"",
            imgs:[],
            exts:[],
        });
        setMethodSteps(newMethodSteps);
    }
    const handleDeleteStep = (index)=>()=>{
        let newMethodSteps = [...methodSteps];
        newMethodSteps.splice(index,1);
        setMethodSteps(newMethodSteps);
    }
    const handleStepImgDelete = (index,iIndex) => ()=>{
        let newMethodSteps = [...methodSteps];
        newMethodSteps[index].imgs.splice(iIndex,1);
        setMethodSteps(newMethodSteps);
    }
    const [selectedStepIndex, setSelectedStepIndex] = useState(0);

    //executes when the add image button is clicked
    const handleAddStepImgClick = (index) => ()=>{
        inputFile.current.click();
    }
    const handleAddStepImg = (index)=>(event)=>{
        let newMethodSteps = [...methodSteps];
        let url;
        newMethodSteps[index].exts.push(event.target.value.split('.').pop());
        const fileReader = new FileReader();
        fileReader.onload = () =>{
            url=fileReader.result;
            // newMethodSteps[selectedStepIndex].imgs.push('image');
            newMethodSteps[index].imgs.push(url);
            setMethodSteps(newMethodSteps);
            setRecipe({...props.recipe, method: methodSteps});
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
                                    onChange={handleAddStepImg(index)}
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
};

export default MethodDisplay;