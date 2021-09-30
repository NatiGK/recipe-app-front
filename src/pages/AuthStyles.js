import {makeStyles} from '@material-ui/core';
import { BorderColor } from '@material-ui/icons';

export default makeStyles((theme)=>({
    root:{
        display:"flex",
        justifyContent:"left",
    },
    registerRoot:{
        width:"100%",
        minWidth:"300px",
        maxWidth:"400px",
    },
    center:{
        textAlign:"center",
        margin:"10px"
    },
    txtField:{
        marginTop:"5px",
        marginBottom:"5px",
        width:"100%",
        BorderColor:"#343434"
    },
    txtFieldFirst:{
        marginTop:"10%",
        marginBottom:"5px",
        width:"100%"
    },
    registerBottom:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center"
    },
    toggleLink:{
        margin:"10px",
        fontSize:"14px",
        color:"#6688bb"
    },
    rounded:{
        borderRadius:"2px",
        color:"#343434",
        boxShadow:'none',
        fontWeight:'bold',
        height:"45px"
    },
    right:{
        padding:"4%",
        display:"flex",
        justifyContent:"center",
        width:"100%",
        justifyItems:"center",
    },
    fixed:{
        display:"none",
        position:"fixed",
        width:"20%",
        borderRight:"20px solid #e1e1e1",
        overflow:"hidden",
    },
    left:{
        display:"none",
        position:"fixed",
        width:"20%",
        borderRight:"20px solid #e1e1e1",
        overflow:"hidden",
        [theme.breakpoints.down('xs')]: {
            display:"none",
        },
    },
    fixFixed:{
        display:"none",
        display:"inline",
        [theme.breakpoints.down('xs')]: {
            display:"none",
        },
    },
    input:{
        color:"#443934",
    },
    formLabelFocused:{
        color:"rgba(0,0,0,0)",
        color:"20px"
    },
}));