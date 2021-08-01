import React,{useState} from 'react';
import Link from '@material-ui/core/Link';
import {
    Divider, 
    IconButton,
    TextField,
    Button, 
    Typography,
    InputAdornment 
} from '@material-ui/core';

import * as Yup from 'yup';
import {FormikConsumer, useFormik} from 'formik'

import useStyles from './AuthStyles';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { useMutation } from '@apollo/client';
import { SIGN_IN, SIGN_UP } from '../API/mutations';

import sideImg from './..//RectangleSid.png';

import {login,logout} from './../actions';
import { useDispatch } from 'react-redux';

const AuthPage = props => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [isPageLogin, setIsPageLogin] = useState(true);
    const [isPageVerify, setIsPageVerify] = useState(false);
    

    
    const toggleAuthView = (event)=>{
        event.preventDefault();
        setIsPageLogin(!isPageLogin);
    }

    const GetStarted = () =>{

        const [signUpAPI,{data, loading, error}] = useMutation(SIGN_UP);
        const validationSchema = Yup.object({
            firstName: Yup
                .string('Enter your first name.')
                .trim()
                .required('First name is required'),
            lastName: Yup
                .string('Enter your last name.')
                .trim()
                .required('Last name is required'),
            email: Yup
                .string('Enter your email.')
                .email('Enter a valid email')
                .required("Email is required"),
            password: Yup
                .string('Enter your password')
                .min(8, 'Password should be of minimum 8 characters length')
                .required('Password is required.'),
            confirmPassword: Yup
                .string('Confirm password')
                .oneOf([Yup.ref('password'),null],"Passwords must matvh")
                .required('Please confirm your password.'),
        });

        const formik = useFormik({
            initialValues:{
                firstName:'',
                lastName:'',
                email:'',
                password:'',
                confirmPassword:'',
            },
            validationSchema: validationSchema,
            onSubmit: (values) =>{
                signUpAPI({
                    variables:{
                        user:{
                            name: values.firstName+' '+values.lastName,
                            email:values.email,
                            password:values.password,
                            passwordConfirm: values.confirmPassword,
                            avatar:"this.avatar.png"
                        }
                    }
                })
            }
        });
        if(error) return<p>Error...{error.message}</p>;
        if(loading) return <p>Loading...</p>
        if(data && data.signIn !==null) dispatch(login(data.signUp))
        return(
            <div class={classes.registerRoot}>
                <Divider/>
                <Typography variant="h4" className={classes.center} color="primary">
                    GET STARTED
                </Typography>
                <Divider/>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                            color="default"
                            id="firstName"
                            name="firstName"
                            label="First Name"
                            className= {classes.txtFieldFirst}
                            size="small"
                            variant="outlined"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                            helperText={formik.touched.firstName && formik.errors.firstName}
                            InputProps={{
                                className: classes.input,
                            }}
                            InputLabelProps={{
                                FormLabelClasses: {
                                  root: classes.formLabelRoot,
                                  focused: classes.formLabelFocused,
                                },
                            }}
                    />
                    <TextField
                            color="default"
                            id="lastName"
                            name="lastName"
                            label="LastName"
                            className = {classes.txtField}
                            size="small"
                            variant="outlined"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                            helperText={formik.touched.lastName && formik.errors.lastName}
                            InputProps={{
                                className: classes.input,
                            }}
                    />
                    <TextField
                            color="default"
                            id="email"
                            name="email"
                            label="Your email"
                            variant="outlined"
                            className = {classes.txtField}
                            size="small"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                            InputProps={{
                                className: classes.input,
                            }}
                    />
                    <TextField
                            color="default"
                            id="password"
                            name="password"
                            label="Password"
                            className = {classes.txtField}
                            size="small"
                            variant="outlined"
                            type="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                            InputProps={{
                                className: classes.input,
                            }}
                    />
                    <TextField
                            
                            id="confirmPassword"
                            name="confirmPassword"
                            label="Confirm Password"
                            className = {classes.txtField}
                            size="small"
                            variant="outlined"
                            type="password"
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                            InputProps={{
                                className: classes.input,
                            }}
                    />
                    <div className={classes.registerBottom}>
                        <Button 
                            variant="contained" 
                            color="secondary" 
                            className={classes.rounded}
                            type="submit"
                        >
                            Get Started
                        </Button>

                        {!isPageLogin &&!isPageVerify&& 
                            <Link 
                                href="#" 
                                onClick={toggleAuthView} 
                                className={classes.toggleLink}
                            >
                                Already have an account?
                            </Link>
                        }

                    </div>
                </form>
            </div>
        );
    }
    const LogIn = () =>{
        
        const [loginAPI,{data, loading, error}] = useMutation(SIGN_IN);
        const validationSchema = Yup.object({
            email: Yup
                .string('Enter your email')
                .email('Enter a valid email')
                .required('Email is required'),
            password: Yup
                .string('Enter your password')
                .required('Password is required'),
        });

        const formik = useFormik({
            initialValues:{
                email:'',
                password:'',
            },
            validationSchema:validationSchema,
            onSubmit: (values) =>{
                loginAPI({variables:
                    {
                        email: values.email,
                        password: values.password
                    }
                });
            },
        });
        const [isPsdVisible, setIsPsdVisible] = useState(false);
        const togglePsdvisibility = () =>{
            setIsPsdVisible(!isPsdVisible);
        }
        
        if(error) return<p>Error...{error.message}</p>;
        if(loading) return <p>Loading...</p>
        if(data && data.signIn !==null) dispatch(login(data.signIn))
        return(
            <div className={classes.registerRoot}>
                <Divider/>
                <Typography variant="h4" className={classes.center} color="primary">
                    LOG IN
                </Typography>
                <Divider/>
            
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                            id="email"
                            name="email"
                            label="Email"
                            className = {classes.txtFieldFirst}
                            size="small"
                            variant="outlined"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                            InputProps={{
                                className: classes.input,
                            }}
                    />
                    
                    <TextField
                            id="password"
                            name="password"
                            label="Password"
                            className = {classes.txtField}
                            size="small"
                            variant="outlined"
                            type={isPsdVisible?'text':'password'}
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
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
                        <Button 
                            type="submit" 
                            className={classes.rounded}
                            variant="contained" 
                            color="secondary"
                        >
                            Log-in
                        </Button>

                        {isPageLogin &&!isPageVerify&& 
                            <Link 
                                href="#" 
                                onClick={toggleAuthView} 
                                className={classes.toggleLink}
                            >
                                Create an account?
                            </Link>
                        }

                    </div>
                </form>
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