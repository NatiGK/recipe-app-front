import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    content: {
        width: "90%",
        display: "flex",
        justifyContent: "space-between",
    },
    textCont: {
        width: "50%"
    },
    topText: {
        color: "#E07A5F",
        fontSize: "22px",
        letterSpacing: "12px",
        [theme.breakpoints.down('sm')]: {
            fontSize: "15px",
        },
        [theme.breakpoints.up('md')]: {
            fontSize: "18px",
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: "22px",
        },
    },
    bottomText: {
        color: "#FAFAFA",
        fontWeight: "bold",
        [theme.breakpoints.down('sm')]: {
            fontSize: "20px",
        },
        [theme.breakpoints.up('md')]: {
            fontSize: "35px",
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: "40px",
        },
    },
    btnCont: {
        display: "flex",
        padding:"10px",
        justifyContent: "center",
        alignItems: "center",
    },
    btn: {
        color: "#FAFAFA",
        // backgroundColor:80b50,30,45)",

        boxShadow:"none",
        borderRadius:"5px",
        fontWeight:"bold",
        [theme.breakpoints.up('xs')]: {
            fontSize: "10px",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "15px",
        },
        [theme.breakpoints.up('md')]: {
            fontSize: "18px",
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: "23px",
        },
    },
}));

export default useStyles;