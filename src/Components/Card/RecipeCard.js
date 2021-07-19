import React from 'react';

import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Card from '@material-ui/core/Card';
import { CardActionArea, CardActions, CardContent, Grid, Typography } from '@material-ui/core';

import useStyles from './CardStyle';
import rack from './../../img/rack.jpg';
//title,category, img, time

//root,img,category,title, info, timeDisp
const RecipeCard = props => {
    const classes = useStyles();
    return (
        <Grid item lg={3} md={4} sm={6} xs={12}>
            <Card className={classes.root}>
                <CardActionArea>
                    <img src={props.image} className={classes.img} alt={props.title} />
                    <CardContent>
                        <Typography variant="body2" className={classes.category}>
                            {props.category}
                        </Typography>
                        <Typography variant="h5" className={classes.title}>
                            {props.title}
                        </Typography>
                    </CardContent>
                    <div className={classes.info}>
                        <div className={classes.timeDisp}>
                            <AccessTimeIcon color="secondary" />
                            <Typography variant="body2" className={classes.time}>
                                {props.time + " min"}
                            </Typography>
                        </div>
                        <div className={classes.rating}>
                            <Typography variant="body2" className={classes.time}>
                                Rating Soon
                            </Typography>
                        </div>
                    </div>
                </CardActionArea>
                {/* <CardActions>

                </CardActions> */}
            </Card>
        </Grid>
    );
};

export default RecipeCard;