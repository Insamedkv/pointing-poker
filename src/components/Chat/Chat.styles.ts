import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(({ palette, typography, shadows }) =>
  createStyles({
    chatMainContainer: {
      position: 'absolute',
      top: 0,
      right: 0,
      height: 'inherit',
      width: '40vw',
      padding: '0px 4px',
      border: `1px bold ${palette.divider}`,
      background: palette.grey.A100,
      transition: `all .3s ease-in-out`,
    },
    chatWorkflow: {
      position: 'sticky',
      top: '70px',
      height: 'calc(100vh - 70px)',
      border: '1px dotted red',
      overflow: 'auto',
    },
  })
);

export { useStyles };
