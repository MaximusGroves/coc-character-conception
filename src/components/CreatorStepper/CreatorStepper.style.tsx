import { makeStyles } from '@material-ui/core';
import { darkPurple, deepGreen, green, purple } from '../../providers/AppThemeProvider';

const styles = makeStyles((theme) => ({
  stepperRoot: {
    maxWidth: 2000,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  stepperParent: {
    width: 'calc(100% - 96px)',
  },

  stepper: {
    padding: '9px 24px 10px',

    minHeight: 42,
    [theme.breakpoints.down('md')]: {
      minHeight: 'unset',
    },
  },

  selectionStyle: {
    textAlign: 'left',
    lineHeight: '22px',
    fontSize: 25,
    marginLeft: -4,
    marginRight: 2,
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
  },

  sigil: {
    fill: green,
    position: 'absolute',
    top: -8,
    width: 60,
    height: 60,
    left: '42%',
    zIndex: -1,
    filter: `drop-shadow(1px 1px 1px ${darkPurple}) drop-shadow(1px 1px 1px ${purple}) drop-shadow(3px 3px 10px ${deepGreen}55)`,
  },

  titleShadow: {
    textShadow: `1px 2px 4px ${purple}, 0px 3px 6px ${darkPurple}, 0px 3px 10px ${green}, 3px 6px 20px ${green}`
  },

  pointText: {
    fontSize: 20,
    fontFamily: 'Cthulhumbus',
    color: 'white',
  },

  stepLabelBtn: {
    padding: 16,
    [theme.breakpoints.down('md')]: {
      padding: '16px 16px 5px'
    },

  },

  selectionStyleArchetype: {
    fontFamily: 'SFComicScript',
  },

  selectionStyleOccupation: {
    fontFamily: 'Diploma',
    textAlign: 'center',
  },

  selectionStyleTalent: {
    fontFamily: 'Playbill',
    fontSize: 16,
    textAlign: 'center',
  },

  btnLeft: {
    // marginLeft: 24,
  },

  btnRight: {
    // marginRight: 24,
  },

}));

export default styles;
