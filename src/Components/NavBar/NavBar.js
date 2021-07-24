import React from 'react';
import { useEffect } from 'react';

import TextField from '@material-ui/core/Textfield';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import { Divider, Drawer, IconButton, List, ListItem, ListItemText, useTheme } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';

import useStyles from './style';

const DrawerItem = props => {
    const classes = props.classes;
    return (
        <ListItem>
            <Link className={classes.link} to={props.to} >
                <Button color="inherit">
                    {props.txt}
                </Button>
            </Link>
        </ListItem>
    );
}

const NavBar = () => {

    // drawer state
    const [drawerState, setDrawerState] = React.useState(false);
    const openDrawer = () => {
        setDrawerState(true);
    }
    const closeDrawer = () => {
        setDrawerState(false);
    }

    const classes = useStyles();
    return (

        <div className="navScrolled" style={{ height: "80px" }}>
            <div className="nav-scrolled" id="nav">
                <div className={classes.smallMenu}style={{maxWidth:"20px"}}>
                    <IconButton  className={classes.menuBtn}aria-label="delete" color="primary" onClick={openDrawer}>
                        <MenuIcon />
                    </IconButton>
                    <Drawer anchor="left" open={drawerState} onClose={closeDrawer}>
                        <List style={{ padding: "40px" }}>
                            <ListItemText>
                                <Link to="/" className={classes.link}>
                                    <Typography variant="h6" className={classes.titleSm}>
                                        RECIPES
                                    </Typography>
                                </Link>
                            </ListItemText>
                        </List>
                        <Divider />
                        <List>
                            <DrawerItem to="/" txt="ALL RECIPES" classes={classes} />
                            <DrawerItem to="/recipe/:id" txt="MY RECIPES" classes={classes} />
                            <DrawerItem to="/post" txt="POST RECIPE" classes={classes} />
                            <DrawerItem to="/about" txt="ABOUT US" classes={classes} />
                        </List>
                    </Drawer>
                </div>
                <div className={classes.appBar}>
                    {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton> */}

                    {/* icon link */}
                    {/* ////////////displayed for large/////////////////// */}
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
                    
                    {/* //////////////END displayed for large//////////////// */}

                    {/* /////////////displayed for small screen size////////////// */}
                    

                    {/* search */}
                    <TextField
                        size="small"
                        className={classes.textField}
                        id="outlined-basic"
                        variant="outlined"
                        InputProps={{
                            endAdornment:
                                <InputAdornment position="start" >

                                    <SearchIcon color="primary" />

                                </InputAdornment>,
                        }}
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
        </div>
    );
}

export default NavBar;
