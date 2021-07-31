import { makeStyles } from "@material-ui/core";

//root,img,category,title, info, timeDisp
const useStyles = makeStyles((theme) => ({
    root: {
        width: "240px",
    },
    img: {
        width: "100%",
    },
    category: {
        color: "#555566",
        fontSize:"1.5rem",
        [theme.breakpoints.down('lg')]: {
            fontSize: '1rem',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '0.9rem',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.8rem',
        },
    },
    title: {
        color: theme.palette.primary.main,
    },
    info: {
        position:"relative",
        bottom:"10px",
        width: "88%",
        margin: "auto",
        marginBottom: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems:"center",
    },
    timeDisp: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: theme.palette.primary.main,
    },
    time:{
        color: "#555566",
        paddingLeft:"5px",
    },
    gridItem:{
        display:"flex",
        justifyContent:"center",
    }
}));

export default useStyles;