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
    fontWeightBold: 700,
    button: {
      fontFamily: ['Ruda', 'serif'].join(','),
      fontWeight: 700,
      fontSize: '24px',
    },
  },
});

export { baseTheme };
