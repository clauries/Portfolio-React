import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/purple';
// import green from '@material-ui/core/colors/green';
// import { yellow } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
        main: '#fecb24'
    },
    secondary: {
        main: '#dd7901'
    },
    warning: {
        main: '#c13301'
    },
    info: {
        main: '#005f75'
    },
    success: {
        main:'#002a38'
    },
    text: {
        primary: '#eee'
    },
  },
  status: {
    danger: orange,
  }
});

export default theme;