import React,{useState} from 'react';
import Link from '@material-ui/core/Link';
import {
    Divider, 
    IconButton,
    TextField,
    Grid,
    Button, 
    Typography,
    InputAdornment 
} from '@material-ui/core';
import useStyles from './AuthStyles';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import sideImg from './..//RectangleSid.png';

const AuthPage = props => {
    const classes = useStyles();
    const [isPageLogin, setIsPageLogin] = useState(true);
    const [isPageVerify, setIsPageVerify] = useState(false);
    const [isPsdVisible, setIsPsdVisible] = useState(false);

    const [password, setPassword] = useState("");
    const togglePsdvisibility = () =>{
        setIsPsdVisible(!isPsdVisible);
    }
    const psdChange =(event) =>{
        event.preventDefault();
        setPassword(event.target.value);
    }
    const toggleAuthView = (event)=>{
        event.preventDefault();
        setIsPageLogin(!isPageLogin);
    }

    const GetStarted = () =>{
        return(
            <div class={classes.registerRoot}>
                <Divider/>
                <Typography variant="h4" className={classes.center} color="primary">
                    GET STARTED
                </Typography>
                <Divider/>
                <TextField
                        className = {classes.txtFieldFirst}
                        size="small"
                        id="outlined-basic"
                        variant="outlined"
                        label="First Name"
                        InputProps={{
                            className: classes.input,
                        }}
                />
                <TextField
                        className = {classes.txtField}
                        size="small"
                        id="outlined-basic"
                        variant="outlined"
                        label="LastName"
                        InputProps={{
                            className: classes.input,
                        }}
                />
                <TextField
                        className = {classes.txtField}
                        size="small"
                        id="outlined-basic"
                        variant="outlined"
                        label="Your email"
                        InputProps={{
                            className: classes.input,
                        }}
                />
                <TextField
                        className = {classes.txtField}
                        size="small"
                        id="outlined-basic"
                        variant="outlined"
                        label="Password"
                        type="password"
                        InputProps={{
                            className: classes.input,
                        }}
                />
                <TextField
                        className = {classes.txtField}
                        size="small"
                        id="outlined-basic"
                        variant="outlined"
                        label="Confirm Password"
                        type="password"
                        InputProps={{
                            className: classes.input,
                        }}
                />
                <div className={classes.registerBottom}>
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        className={classes.rounded}>
                        Get Started
                    </Button>

                    {!isPageLogin &&!isPageVerify&& 
                        <Link 
                            href="#" 
                            onClick={toggleAuthView} 
                            className={classes.toggleLink}
                        >
                            Already have an account.
                        </Link>
                    }

                </div>
            </div>
        );
    }
    const LogIn = () =>{
        return(
            <div class={classes.registerRoot}>
                <Divider/>
                <Typography variant="h4" className={classes.center} color="primary">
                    LOG IN
                </Typography>
                <Divider/>
                <TextField
                        className = {classes.txtFieldFirst}
                        size="small"
                        id="outlined-basic"
                        variant="outlined"
                        label="Your email"
                        InputProps={{
                            className: classes.input,
                        }}
                />
                
                <TextField
                        className = {classes.txtField}
                        size="small"
                        id="outlined-basic"
                        variant="outlined"
                        label="Password"
                        type={isPsdVisible?'text':'password'}
                        value={password}
                        onChange={psdChange}
                        InputProps={{
                            endAdornment:
                                <InputAdornment position="start" >
                                    <IconButton 
                                        aria-label="show-password"
                                        onClick={togglePsdvisibility}
                                    >
                                        {isPsdVisible?
                                            <VisibilityIcon fontSize="small" />
                                            :<VisibilityOff fontSize="small" />
                                        }
                                    </IconButton>
                                </InputAdornment>,
                                className: classes.input,
                        }}
                />
                <div className={classes.registerBottom}>
                    <Button className={classes.rounded}variant="contained" color="secondary">
                        Log-in
                    </Button>

                    {isPageLogin &&!isPageVerify&& 
                        <Link 
                            href="#" 
                            onClick={toggleAuthView} 
                            color="red" 
                            className={classes.toggleLink}
                        >
                            Create an account.
                        </Link>
                    }

                </div>
            </div>
        );
    }
    
    return (
        <div>

            <div className={classes.root}>
                
                <div className={classes.left}>
                    <img  src={sideImg}/>
                </div>
                <div className={classes.fixFixed} style={{width:"25%"}}>
                </div>
                
                <div className={classes.right}>
                    {isPageLogin &&!isPageVerify&& <h1><LogIn/></h1>}
                    {!isPageLogin &&!isPageVerify&& <h1><GetStarted/></h1>}
                    {isPageVerify && <h1>Confirm</h1>}
                </div>
                
            </div>
        </div>
    );
};
export default AuthPage;


//overriding the text field label
{/* <TextField
        // ...omitting some props
        InputLabelProps={{
          shrink: true,
          FormLabelClasses: {
            root: classes.formLabelRoot,
            focused: classes.formLabelFocused,
          },
        }}
      /> */}