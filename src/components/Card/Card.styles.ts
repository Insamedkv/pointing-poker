import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import { BackgrCardColor, AdditionalColors } from '../../utils/styleConstants';

export const useStyles = makeStyles({
  cardStyles: {
    margin: '10px',
    width: '12%',
    minWidth: '125px',
    height: '40%',
    minHeight: '200px',
    boxShadow: `2px 2px 5px 2px ${grey.A200}`,
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px',
    fontSize: '1.2rem',
    borderRadius: '20px',
    fontWeight: 900,
    position: 'relative',
  },
  cardItem: {
    alignSelf: 'flex-start',
    cursor: 'default',
  },
  cardImage: {
    width: '80%',
    height: 'auto',
    borderRadius: '0',
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
});
