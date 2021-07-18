import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/Textfield';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        background: "#FAFAFA",
        boxShadow: "0px 2px 20px rgba(0,0,0,0.4)"
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    appBar: {
        padding: "15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
    menuCont: {
        display: "flex",
        justifyContent: "space-between",
        minWidth: "450px",
        color: "#535774",
    },
    barMenu: {
        display: "flex",
        justifyContent: "space-around",
        width: "90%",
        alignItems: "center",
    },
    largeAvatar: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    title: {
        color: "#E07A5F",
        fontWeight: "bold"
    },
    link: {
        color: "inherit",
        textDecoration: "none"
    }
}));
const NavBar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.appBar}>
                <div className={classes.barMenu}>
                    {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton> */}
                    <Link className={classes.link} to="/"><Typography variant="h6" className={classes.title}>
                        RECIPES
                    </Typography></Link>
                    <div className={classes.menuCont}>
                        <Link className={classes.link} to="/"><Button color="inherit">ALL RECIPES</Button></Link>
                        <Link className={classes.link} to="/recipe/:id"><Button color="inherit">MY RECIPES</Button></Link>
                        <Link className={classes.link} to="/post"><Button color="inherit">POST RECIPE</Button></Link>
                        <Link className={classes.link} to="/about"><Button color="inherit">ABOUT US</Button></Link>
                    </div>
                    <TextField size="small" style={{ width: "300px" }} id="outlined-basic" label="Outlined" variant="outlined"
                        startAdornment={
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        }
                    />
                    <Link className={classes.link} to="/auth">
                        <Avatar
                            className={classes.largeAvatar}
                            alt="Remy Sharp"
                            src="/static/images/avatar/1.jpg"
                        />
                    </Link>
                </div>
            </div>
        </div >
    );
}

export default NavBar;