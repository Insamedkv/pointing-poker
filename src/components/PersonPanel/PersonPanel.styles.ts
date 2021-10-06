import { red } from '@material-ui/core/colors';
import { Theme } from '@material-ui/core/styles';
import { createStyles, makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      height: '132px',
      boxShadow: '0px 1px 4px rgba(0, 0, 0, .25)',
      borderRadius: '4px',
    },
    personName: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
    cardContent: {
      width: 'inherit',
      display: 'flex',
      justifyContent: 'space-between',
      height: '91px',
      alignItems: 'center',
      overflow: 'hidden',
    },
    blockIcon: {
      position: 'absolute',
      fontSize: '32px',
      opacity: '.3',
      top: '3px',
      right: '3px',
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
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
    textOverflow: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  })
);

export { useStyles };
