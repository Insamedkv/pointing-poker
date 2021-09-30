import { createStyles, makeStyles } from '@material-ui/core';
import { AdditionalColors } from 'utils/styleConstants';

const useStyles = makeStyles(({ typography, palette, transitions, shadows }) =>
  createStyles({
    selectSize: {
      maxWidth: '441px',
      minWidth: '350px',
    },
    selectField: {
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      fontSize: '24px',
      // border: `1px solid ${palette.divider}`,
      borderBottomLeftRadius: '10px',
      padding: '2px 10px',
      height: '42px',
      boxShadow: `inset ${shadows[4]}, ${shadows[4]}`,
      transition: 'all .2s ease-in-out',
      outline: 'none',
      // maxWidth: '420px',
      // minWidth: '350px',
    },
    selectFieldFocused: {
      border: `1px solid ${palette.primary.main}`,
    },
    gameSettingsContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
    label: {
      fontFamily: ['Ruda', 'serif'].join(','),
      color: palette.common.black,
      fontSize: '24px',
      fontWeight: typography.fontWeightBold,
      lineHeight: '30px',
      textAlign: 'left',
    },
    formControl: {
      margin: '0 0 0 16px',
      fontFamily: ['Ruda', 'serif'].join(','),
      color: palette.common.black,
      fontSize: '24px',
      fontWeight: typography.fontWeightBold,
      lineHeight: '30px',
      textAlign: 'left',
    },
    controlSize: {
      justifyContent: 'space-between',
      padding: '10px 0',
      minWidth: '540px',
      maxWidth: '750px',
    },
    switcherRoot: {
      width: 42,
      height: 26,
      padding: 0,
    },
    switcherBase: {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&$checked': {
        transform: 'translateX(16px)',
        color: palette.common.white,
        '& + $track': {
          backgroundColor: AdditionalColors.AV10,
          opacity: 1,
          border: 0,
        },
        '&$disabled + $track': {
          opacity: '.5',
        },
      },
      '&$disabled + thumb': {
        color: palette.grey[600],
      },
      '&$disabled + track': {
        opacity: '.7',
      },
    },
    checked: {
      transform: 'translateX(16px)',
      color: palette.common.white,
    },
    disabled: {
      opacity: '.2',
    },
    track: {
      borderRadius: 13,
      backgroundColor: palette.divider,
      opacity: 1,
      transition: transitions.create(['background-color'], {
        duration: 500,
      }),
    },
    thumb: {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
  })
);

export { useStyles };
