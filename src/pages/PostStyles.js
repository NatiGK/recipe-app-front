import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme)=>({
    root:{
        display:"flex",
        justifyContent:"left",
    },
    right:{
        width:"100%",
        maxWidth:"650px",
        padding:"20px",
        display:"flex",
        justifyContent:"center",
    },
    fixed:{
        position:"fixed",
        width:"20%",
        borderRight:"20px solid #e1e1e1",
        overflow:"hidden",
    },
    left:{
        position:"fixed",
        width:"20%",
        borderRight:"20px solid #e1e1e1",
        overflow:"hidden",
        [theme.breakpoints.down('xs')]: {
            display:"none",
        },
    },
    formHeader:{
        textAlign:"center",
        margin:"10px",
    },
    input:{
        color:"#443934",
    },
    txtField:{
        marginTop:"5px",
        marginBottom:"5px",
        width:"100%"
    },
    txtFieldFirst:{
        marginTop:"10%",
        marginBottom:"5px",
        width:"100%"
    },
    stepperNxt:{
        display:"flex",
        justifyContent:"center",
    },
    formCont:{
        width:"100%",
    },
    add:{
        margin:"2%",
        color:"#bbe3e3",
        fontWeight:"bold",
        backgroundImage:"linear-gradient(-45deg, rgb(40,45,225),rgb(45,45,180))",
    },
    deleteR:{
        color:"#ac3434"
    },
    deleteM:{
        height:"45px",
        width:"45px",
        color:"#ac3434",
    },
    stepContainer:{
        display:"flex",
        justifyContent:"space-between",
        borderRadius:"7px",
        boxShadow:"2px 2px 5px rgba(0,0,0,0.2)",
        backgroundColor:"#fcfcfc",
        // backgroundImage:"linear-gradient(105deg,rgba(150,100,0,0.01),rgba(150,100,0,0.005))",
        margin:"15px",
        padding:"10px",
    },
    imgContainer:{
        display:"block",
    },
    stepperBox:{
        borderRadius:"7px",
        // boxShadow:"0px 2px 4px rgba(0,0,0,0.2)",
        border:"1px solid rgba(0,0,0,0.05)",
        backgroundImage:"linear-gradient(105deg,rgba(150,100,0,0.05),rgba(150,100,0,0.03))",
        margin:"15px",
       
    },
    emptyBox:{
        marginLeft:"10px",
        marginRight:"10px",
        padding:"10px",
        textAlign:"center",
        borderRadius:"7px",
        // boxShadow:"0px 2px 4px rgba(0,0,0,0.2)",
        border:"1px solid red",
        color:"#dd3333",
        margin:"8px",
    },
    emptyText:{
        color:"#dd3333",
    },
    stepContent:{
        width:"85%",
        maxWidth:"700px"
    },
    deleteMImg:{
        position:"absolute",
        top:"4px",
        right:"4px",
    },
    imgContainer:{
        paddingLeft:"20px",
        paddingRight:"20px",
        
    },
    methodImg:{
        width:"100%",
        // boxShadow:"2px 2px 5px rgba(0,0,0,0.2)",
    },
    methodImgContainer:{
        padding:"5px",
        borderRadius:"4px",
        border:"solid 0.5px #bbbbbb",
        border:"1px solid rgba(0,0,0,0.05)",
        backgroundImage:"linear-gradient(105deg,rgba(150,100,0,0.05),rgba(150,100,0,0.03))",
        margin:"5px",
    }
}));

export default useStyles;