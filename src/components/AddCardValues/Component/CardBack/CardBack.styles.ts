import { makeStyles } from '@material-ui/core/styles';
import { SiteColors } from '../../../../utils/styleConstants';

export const useStyles = makeStyles(({ palette }) => ({
  input: {
    width: 'auto',
    height: '50px',
  },
  btn: {
    width: 'auto',
    height: '40px',
    background: `${SiteColors.MAIN_COLOR}`,
    color: palette.common.white,
    '&:hover': {
      background: `${SiteColors.SECONDARY_COLOR}`,
    },
  },
}));
