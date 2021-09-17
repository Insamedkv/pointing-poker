import { createStyles, makeStyles } from '@material-ui/core';
import { AdditionalColors } from 'utils/styleConstants';

const useStyles = makeStyles(({ typography, palette, transitions }) =>
  createStyles({
    gameSettingsContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
    label: {
      fontFamily: ['Ruda', 'serif'].join(','),
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
    switcherStyles: {
      width: 42,
      height: 26,
      padding: 0,
      '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
          transform: 'translateX(16px)',
          color: palette.common.white,
          '& + .MuiSwitch-track': {
            backgroundColor: AdditionalColors.AV10,
            opacity: 1,
            border: 0,
          },
          '&.Mui-disabled + .MuiSwitch-track': {
            opacity: 0.5,
          },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
          color: AdditionalColors.AV10,
          border: `6px solid ${palette.common.white}`,
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
          color: palette.grey[600],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.7,
        },
      },
      '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 22,
        height: 22,
      },
      '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: palette.divider,
        opacity: 1,
        transition: transitions.create(['background-color'], {
          duration: 500,
        }),
      },
    },
  })
);

export { useStyles };
