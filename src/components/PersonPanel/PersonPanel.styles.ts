import { red } from '@material-ui/core/colors';
import { Theme } from '@material-ui/core/styles';
import { createStyles, makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      height: '132px',
      // width: '500px',
      boxShadow: '0px 1px 4px rgba(0, 0, 0, .25)',
      borderRadius: '4px',
    },
    personName: {
      // width: '310px',
      whiteSpace: 'nowrap',
      textAlign: 'center',
    },
    cardContent: {
      display: 'flex',
      justifyContent: 'space-between',
      height: '91px',
      alignItems: 'center',
      padding: '18px 22px',
    },
    blockIcon: {
      position: 'absolute',
      fontSize: '32px',
      opacity: '.3',
      top: '10px',
      right: '15px',
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
      height: '14px',
      fontWeight: theme.typography.fontWeightBold,
      textAlign: 'left',
    },
    lowerText: {
      height: '11px',
      textAlign: 'right',
    },
  })
);

export { useStyles };
