import { red } from '@material-ui/core/colors';
import { Theme } from '@material-ui/core/styles';
import { createStyles, makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // height: '120px',
      // width: '500px',
      boxShadow: '0px 1px 4px rgba(0, 0, 0, .25)',
      borderRadius: '4px',
    },
    personName: {
      width: '310px',
      whiteSpace: 'nowrap',
    },
    cardContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '18px 22px',
    },
    blockIcon: {
      fontSize: '48px',
      opacity: '.7',
      transition: 'all .2s ease-in-out',
      '&:hover': {
        cursor: 'pointer',
        color: red.A700,
        opacity: '1',
        transform: 'scale(1.1)',
      },
      '&:active': {
        cursor: 'pointer',
        color: red.A100,
        opacity: '.9',
        transform: 'scale(.9)',
      },
    },
    upperText: {
      padding: '0 5px',
      height: '14px',
      fontWeight: theme.typography.fontWeightBold,
    },
    lowerText: {
      padding: '0 5px',
      height: '11px',
    },
  })
);

export { useStyles };
