import { makeStyles } from '@material-ui/core/styles';
import { SiteColors, AdditionalColors } from '../../../../utils/styleConstants';

export const useStyles = makeStyles(({ palette }) => ({
  input: {
    width: 'auto',
    height: '40px',
  },
  wrapForBtn: {
    width: '100%',
    paddingTop: '15px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexGrow: 2,
  },
  cancelChages: {
    color: `${AdditionalColors.AV40}`,
    '&:hover': {
      transform: 'scale(1.4)',
    },
  },
  btnSubmit: {
    width: '100%',
    minWidth: '55px',
    fontSize: 'Medium',
    padding: '4px 6px',
    height: 'auto',
    background: `${SiteColors.MAIN_COLOR}`,
    color: palette.common.white,
    '&:hover': {
      background: `${SiteColors.SECONDARY_COLOR}`,
    },
  },
  btnCancel: {
    width: 'auto',
    minWidth: '55px',
    fontSize: 'Medium',
    padding: '4px 6px',
    height: 'auto',
    background: `${SiteColors.MAIN_COLOR}`,
    color: palette.common.white,
    '&:hover': {
      background: `${SiteColors.SECONDARY_COLOR}`,
    },
  },
  invisibleBTN: {
    display: 'none',
  },
}));
