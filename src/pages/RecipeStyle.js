import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    rootRecipe:{
        width:"100%",
        display:"flex",
        justifyContent:"center",
        paddingTop:"7%",
    },
    container:{
        width:"80%",
    },
    usrInfo:{
        alignItems:"center",
        display:"flex",
        justifyContent:"space-between",
    },
    recipeHeading:{
        display:"flex",
        justifyContent:"space-between",
        borderRadius:"25px 25px 0px 0px",
        backgroundColor:"#eeeeee",
        padding:"10px",
    },
    rating:{
        alignItems:"center",
        display:"flex",
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
    }
}));

export default useStyles;