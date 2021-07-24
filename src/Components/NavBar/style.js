import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    textField: {
        color: "#E07A5F",
        width: "40%",
        minWidth: "150px",
        [theme.breakpoints.down('sm')]: {

        },
        [theme.breakpoints.up('md')]: {

        },
    },
    root: {
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        background: "#FAFAFA",
        boxShadow: "0px 2px 20px rgba(0,0,0,0.4)",
        zIndex: "1000",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    appBar: {
        padding: "15px",
        paddingLeft:"0px",
        paddingRight:"0px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "90%",
    },
    menuCont: {
        display: "flex",
        justifyContent: "space-between",
        minWidth: "450px",
        color: "#535774",
        [theme.breakpoints.down('sm')]: {
            display: "none",
        },
        [theme.breakpoints.up('lg')]: {
            display: "block",
        },
    },
    largeAvatar: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    title: {
        color: theme.palette.primary.main,
        fontWeight: "bold",
        [theme.breakpoints.down('sm')]: {
            display: "none",
        },
        [theme.breakpoints.up('lg')]: {
            display: "block",
        },
    },
    titleSm: {
        color: theme.palette.primary.main,
        fontWeight: "bold",
        [theme.breakpoints.down('sm')]: {
            display: "block",
        },
        [theme.breakpoints.up('md')]: {
            display: "none",
        },
    },
    smallMenu: {
        [theme.breakpoints.down('sm')]: {
            display: "block",
        },
        [theme.breakpoints.up('md')]: {
            display: "none",
        },
    },
    link: {
        color: "inherit",
        textDecoration: "none"
    },
    menuBtn:{
        margin:"18px",
        marginLeft:"0px",
    }
}));

export default useStyles;