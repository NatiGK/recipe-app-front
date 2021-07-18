import React from 'react';
import TextField from '@material-ui/core/Textfield';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import { useTheme } from '@material-ui/core';

import useStyles from './style';

const NavBar = () => {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <div className={classes.root}>
            <div className={classes.appBar}>
                {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton> */}

                {/* icon link */}
                <Link className={classes.link} to="/">
                    <Typography variant="h6" className={classes.title}>
                        RECIPES
                    </Typography>
                </Link>

                {/* menu */}
                <div className={classes.menuCont}>
                    <Link to="/" className={classes.link}>
                        <Button color="inherit">
                            ALL RECIPES
                        </Button>
                    </Link>
                    <Link className={classes.link} to="/recipe/:id">
                        <Button color="inherit">
                            MY RECIPES
                        </Button>
                    </Link>
                    <Link className={classes.link} to="/post">
                        <Button color="inherit">
                            POST RECIPE
                        </Button>
                    </Link>
                    <Link className={classes.link} to="/about">
                        <Button color="inherit">
                            ABOUT US
                        </Button>
                    </Link>
                </div>

                {/* search */}
                <TextField
                    size="small"
                    className={classes.textField}
                    id="outlined-basic"
                    variant="outlined"
                    startAdornment={
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    }
                />


                {/* avatar */}
                <Link className={classes.link} to="/auth">
                    <Avatar
                        className={classes.largeAvatar}
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                    />
                </Link>
            </div>
        </div >
    );
}

export default NavBar;