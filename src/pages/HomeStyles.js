import { makeStyles } from "@material-ui/core";
import bg from './../bg.png';

const useStyles = makeStyles((theme) => ({
    filter: {
        width: "90%",
        maxWidth: "900px",
        display: "flex",
        justifyContent: "space-between",
    },
    filterCont: {
        padding: "auto",
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