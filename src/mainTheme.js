import { createTheme,useTheme } from '@material-ui/core/styles';
let themeR;

const theme = createTheme({
    palette: {
        primary: {
            main: "#E07A5F"
        },
        secondary: {
            main: "#FFD166"
        },
        info:{
          main:"#444499",
        }
    },
});
theme.typography.body2={
  fontSize: '0.8rem',
  color:'#333333',
  '@media (min-width:600px)': {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.2rem',
  },
}
theme.typography.h4={
  fontSize: '1.3rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.8rem',
  },
}

theme.typography.h5={
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.3rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.6rem',
  },
}
export default theme;