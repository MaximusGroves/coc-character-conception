import { makeStyles } from '@material-ui/core';

import { green, purple, darkPurple } from '../../providers/AppThemeProvider';

const styles = makeStyles((theme) => ({
  characteristicRoot: {
    height: 'calc(100vh - 48px)',
    width: 'calc(100vw - 48px)',
    position: 'relative',
    padding: 24,
  },
  titleTop: {
    fontFamily: 'Cthulhumbus',
    color: 'white',
    fontSize: 40,
    marginLeft: 53,
    lineHeight: '22px',
    textShadow: `0px 1px 4px ${purple}, 0px 3px 6px ${darkPurple}, 0px 0px 5px ${green}, 3px 3px 20px ${green}, -2px 1px 30px ${green}`

  },
  titleBottom: {
    fontFamily: 'Cthulhumbus-alt2',
    color: 'white',
    fontSize: 40,
    marginBottom: 20,
    textShadow: `0px 1px 4px ${purple}, 0px 3px 6px ${darkPurple}, 0px 0px 5px ${green}, 3px 3px 20px ${green}, -2px 1px 30px ${green}`
  },
  title1: {
    fontFamily: 'Cthulhumbus',
    color: 'white',
    fontSize: 40,
  },
  titleAlt2: {
    fontFamily: 'Cthulhumbus-alt2',
    color: 'white',
    fontSize: 40,
  },

  titleEvenC: {
    fontFamily: 'Cthulhumbus-alt1',
  },

  titleBigC: {
    fontFamily: 'Cthulhumbus-alt2',
    paddingRight: 15,
  },

  titleBigR: {
  },

  compass: {
    width: 200,
    height: 200,
    position: 'absolute',
    left: 90,
    bottom: 75
  },

  formula: {
    width: 300,
    height: 300,
    position: 'absolute',
    right: 0,
    bottom: 0
  }

}));

export default styles;
