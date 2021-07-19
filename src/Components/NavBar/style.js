import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    textField: {
        color: "#E07A5F",
        width: "300px",
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
    },
    largeAvatar: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    title: {
        color: theme.palette.primary.main,
        fontWeight: "bold"
    },
    link: {
        color: "inherit",
        textDecoration: "none"
    }
}));

export default useStyles;