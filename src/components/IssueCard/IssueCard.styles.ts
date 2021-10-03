import { Theme } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { AdditionalColors } from '../../utils/styleConstants';

const useStyles = makeStyles(({ shadows, palette }: Theme) =>
  createStyles({
    root: {
      whiteSpace: 'nowrap',
      marginBottom: '10px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      minWidth: '215px',
      width: 'inherit',
      height: '64px',
      boxShadow: shadows[6],
      transition: 'all .2s ease-in-out',
      '&:hover .MuiSvgIcon-root': {
        opacity: '.6',
      },
    },
    currentIssue: {
      background: AdditionalColors.AV10,
      boxShadow: shadows[10],
    },
    cardBody: {
      width: 'inherit',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
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
    issueCreator: {
      cursor: 'pointer',
      '&:hover': {
        transform: 'scale(1.1)',
      },
      '&:active': {
        background: palette.divider,
      },
    },
    textOverflow: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  })
);

export { useStyles };
