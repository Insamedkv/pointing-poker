import { createTheme } from '@material-ui/core/styles';
import { SiteColors } from './styleConstants';

const baseTheme = createTheme({
  palette: {
    primary: {
      main: SiteColors.MAIN_COLOR,
      light: SiteColors.THIRD_COLOR,
      dark: SiteColors.SECONDARY_COLOR,
      contrastText: '#fff',
    },
    secondary: {
      main: SiteColors.MAIN_COLOR,
      light: SiteColors.THIRD_COLOR,
      dark: SiteColors.SECONDARY_COLOR,
      contrastText: SiteColors.MAIN_COLOR,
    },
  },
  typography: {
    h1: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
    },
    h2: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
    },
    h3: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
    },
    h4: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
    },
    h5: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
    },
    h6: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
    },
    subtitle1: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
    },
    subtitle2: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
    },
    body1: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
    },
    body2: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
    },
    caption: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
    },
    button: {
      fontFamily: ['Ruda', 'serif'].join(','),
      fontWeight: 700,
      fontSize: '24px',
    },
    overline: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
    },
  },
});

export { baseTheme };
