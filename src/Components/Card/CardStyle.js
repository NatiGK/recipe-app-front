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
        color: theme.palette.secondary.main,
    },
    title: {
        color: theme.palette.primary.main,
    },
    info: {
        width: "88%",
        margin: "auto",
        marginBottom: "10px",
        display: "flex",
        justifyContent: "space-between",
    },
    timeDisp: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: theme.palette.primary.main,
    },
}));

export default useStyles;