import { common } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';
import { SiteColors } from './styleConstants';

const baseTheme = createTheme({
  palette: {
    primary: {
      main: SiteColors.MAIN_COLOR,
      light: SiteColors.THIRD_COLOR,
      dark: SiteColors.SECONDARY_COLOR,
      contrastText: common.white,
    },
    secondary: {
      main: SiteColors.MAIN_COLOR,
      light: SiteColors.THIRD_COLOR,
      dark: SiteColors.SECONDARY_COLOR,
      contrastText: SiteColors.MAIN_COLOR,
    },
  },
  typography: {
    h2: {
      fontSize: '48px',
    },
    subtitle2: {
      fontSize: '10px',
    },
    button: {
      fontFamily: ['Ruda', 'serif'].join(','),
      fontWeight: 700,
      fontSize: '24px',
    },
  },
});

export { baseTheme };
