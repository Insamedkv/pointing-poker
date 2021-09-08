import { Theme } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { AdditionalColors } from '../../utils/styleConstants';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '250px',
      height: '64px',
      margin: '2px 0 14px 0',
      boxShadow: theme.shadows[4],
      transition: 'all .2s ease-in-out',
      '&:hover': {
        transform: 'scale(1.1)',
      },
      '&:hover .MuiSvgIcon-root': {
        opacity: '.6',
      },
    },
    currentIssue: {
      background: AdditionalColors.AV10,
    },
    cardBody: {
      width: '100%',
    },
    actionContainer: {
      display: 'flex',
      justifyContent: 'end',
      flexShrink: 2,
      padding: '0 8px 0 0',
    },
    controlElement: {
      cursor: 'pointer',
      opacity: '.2',
      transition: 'all .2s ease-in-out',
      '&:hover': {
        opacity: '1 !important',
        transform: 'scale(1.2)',
      },
      '&:active': {
        transform: 'scale(1)',
      },
    },
  })
);

export { useStyles };
