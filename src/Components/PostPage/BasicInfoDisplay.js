import {
    TextField,
    Grid,
} from '@material-ui/core';
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
};
export default BasicInfoDisplay;