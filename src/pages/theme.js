import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    common: {
      light_red: "#FEF9E7"
    },
    primary: {
      main: "#FA8072"
    },
    secondary: {
      main: "#5D6D7E"
    }
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  }
});

export const colorGradient = {
  primary: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  secondary: 'linear-gradient(45deg, #EAEDED 30%, #D5D8DC  90%)'
}