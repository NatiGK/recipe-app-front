import { makeStyles } from "@material-ui/core";
import bg from './../bg.png';

const useStyles = makeStyles((theme) => ({
    img: {
        margin: "0px",
    },
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
        height: "100%",
        width: "40%",
        justifyContent: "center",
        alignItems: "center",
    },
    btn: {
        [theme.breakpoints.down('sm')]: {
            fontSize: "17px",
        },
        [theme.breakpoints.up('md')]: {
            fontSize: "20px",
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: "25px",
        },
    },
    filter: {
        width: "75%",
        display: "flex",
        justifyContent: "space-between",
    },
    filterCont: {
        paddingLeft: "10%",
        paddingRight: "10%",
        marginTop: "100px",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
    },
    filterBtn: {
        color: "#aaaa34",
        float: "left",
        [theme.breakpoints.down('sm')]: {
            fontSize: "10px",
        },
        [theme.breakpoints.up('md')]: {
            fontSize: "12px",
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: "13px",
        },
    }
}));

export default useStyles;