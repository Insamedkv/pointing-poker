import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AdditionalColors } from '../../utils/styleConstants';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, .25)',
      fontWeight: theme.typography.fontWeightBold,
      textShadow: '0px 4x 4px rgba(0, 0, 0, .25)',
    },
    colorDefault: {
      backgroundColor: AdditionalColors.AV10,
    },
    medium: {
      fontSize: '40px',
      width: theme.spacing(7.75),
      height: theme.spacing(7.75),
    },
    large: {
      fontSize: '48px',
      width: theme.spacing(10.375),
      height: theme.spacing(10.375),
    },
  })
);

export { useStyles };
