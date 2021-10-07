import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(({ palette, typography, shadows }) =>
  createStyles({
    '@global': {
      '*::-webkit-scrollbar': {
        width: '0px',
        background: 'transparent',
        scrollbarWidth: 'thin !important',
      },
    },
    chatMainContainer: {
      position: 'absolute',
      top: '70px',
      right: 0,
      height: 'calc(100% - 120px)',
      width: '40vw',
      minWidth: '350px',
      padding: '0px 4px',
      border: `1px bold ${palette.divider}`,
      background: 'rgb(213, 213, 213, .6);',
      transition: `all .3s ease-in-out`,
      zIndex: 10,
    },
    chatWorkflow: {
      position: 'sticky',
      padding: '5px',
      top: '90px',
      height: '80vh',
      border: `4px dotted ${palette.divider}`,
      borderRadius: '10px',
      overflow: 'auto',
    },
    messagesArea: {
      height: '78%',
      padding: '0px',
      overflowX: 'hidden',
      overflowY: 'scroll',
      scrollbarWidth: 'none',
    },
    enterTextArea: {
      padding: '0px',
      marginTop: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      bottom: '70px',
    },
    chatContainer: {
      padding: '10px 0',
      position: 'relative',
    },
    messageField: {
      display: 'flex',
      height: '100%',
      flexDirection: 'column',
      justifyContent: 'space-between',
      background: 'aliceblue',
      borderRadius: '4px',
      fontSize: '18px',
    },
    inputMessageField: {
      background: 'azure',
      borderRadius: '4px',
    },
    textSection: {
      overflowWrap: 'anywhere',
      height: '100%',
      background: palette.common.white,
      borderRadius: '4px',
      padding: '5px',
      fontSize: 'inherit',
      boxShadow: shadows[4],
    },
    usernameContainer: {
      display: 'flex',
      padding: '5px 0',
      alignItems: 'center',
    },
    dateSection: {
      fontWeight: typography.fontWeightBold,
      fontSize: '11px',
      fontStyle: 'italic',
      padding: '5px 10px',
      textAlign: 'right',
    },
    nameSection: {
      overflow: 'hidden',
      width: 'inherit',
      textOverflow: 'ellipsis',
      fontWeight: typography.fontWeightBold,
      fontStyle: 'italic',
      padding: '5px 10px',
      fontSize: '16px',
    },
    kickPlayer: {
      position: 'absolute',
      right: 0,
      top: 0,
    },
  })
);

export { useStyles };
