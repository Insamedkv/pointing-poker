import { makeStyles } from '@material-ui/core/styles';
import { BackgrCardColor, AdditionalColors } from '../../../../utils/styleConstants';

export const useStyles = makeStyles(({ shadows }) => ({
  cardItem: {
    alignSelf: 'flex-start',
    cursor: 'default',
  },
  cardImage: {
    width: '80%',
    height: 'auto',
    borderRadius: '0',
  },
  cardIcon: {
    fontSize: '64px',
    fontWeight: 800,
    textShadow: '2px 2px 4px rgb(0, 0, 0, .4)',
    userSelect: 'none',
  },
  cardImageReverse: {
    transform: 'rotate(180deg)',
    alignSelf: 'flex-end',
    cursor: 'default',
  },
  cardStylesActive: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: `${BackgrCardColor.ACTIVE_CARD}`,
    top: 0,
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardStylesNotActive: {
    display: 'none',
  },
  backgrIcon: {
    background: `${AdditionalColors.AV10}`,
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  approveImage: {
    width: '100%',
    height: '100%',
    padding: '15px',
    boxSizing: 'border-box',
  },
}));
