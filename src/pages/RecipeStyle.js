import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    rootRecipe:{
        width:"100%",
        display:"flex",
        justifyContent:"center",
        paddingTop:"7%",
    },
    container:{
        width:"90%",
    },
    usrInfo:{
        alignItems:"center",
        display:"flex",
        justifyContent:"space-between",
    },
    recipeHeading:{
        display:"flex",
        justifyContent:"space-between",
        backgroundColor:"#fff",
        borderRadius:"2px",
        boxShadow:"0px 0px 25px rgba(50,50,50,0.15)",
        padding:"10px",
    },
    rating:{
        alignItems:"center",
        //display:"flex",
        justifyContent:"space-between",
    },
    space:{
        margin:"10px",
    },
    info:{
        margin:"10px",
    },
    timeDisp:{
        display:"flex",
        justifyContent:"space-between",
        maxWidth:"500px"
    },
    blueHeading:{
        color:"#344599",
    },
    yellowHeading:{
        color:"#999945",
    },
    listItem:{
        margin:"15px"
    },
    method:{
        margin:"15px",
        marginTop:"40px",
        maxWidth:"600px",
    },
    methodBody:{
        margin:"15px"
    },
    methodImg:{
        width:"100%",
        marginTop:"5%"
    },
    paragraph:{
        display:"flex",
        justifyContent:"left"
    },
    lgRating:{
        margin:"10px",
        [theme.breakpoints.down('sm')]: {
            display:"none",
        },
    },
    smRating:{
        margin:"10px",
          [theme.breakpoints.up('md')]: {
            display:"none",
        },
    }
}));

export default useStyles;