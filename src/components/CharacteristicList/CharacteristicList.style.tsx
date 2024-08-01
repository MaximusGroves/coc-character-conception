import { makeStyles } from '@material-ui/core';

import { green, purple, darkPurple, deepGreen } from '../../providers/AppThemeProvider';

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
    textShadow: `1px 2px 4px ${purple}, 0px 3px 6px ${darkPurple}, 0px 0px 5px ${green}, 3px 3px 20px ${green}, -2px 1px 30px ${green}`

  },
  titleBottom: {
    fontFamily: 'Cthulhumbus-alt2',
    color: 'white',
    fontSize: 40,
    marginBottom: 20,
    textShadow: `1px 2px 4px ${purple}, 0px 3px 6px ${darkPurple}, 0px 0px 5px ${green}, 3px 3px 20px ${green}, -2px 1px 30px ${green}`
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

  sigil: {
    width: 80,
    height: 80,
    fill: green,
  },
  arrow: {
    width: 30,
    height: 30,
    fill: 'white'
  },
  spookyIcon: {
    // filter: `drop-shadow(1px 2px 4px ${purple}, 0px 3px 6px ${darkPurple}, 0px 0px 5px ${green}, 3px 3px 20px ${green}, -2px 1px 30px ${green})`
    // filter: 'drop-shadow(3px 5px 2px #000000) drop-shadow(3px 5px 2px #ff0000)'
    filter: `drop-shadow(1px 1px 1px ${darkPurple}) drop-shadow(1px 1px 1px ${purple}) drop-shadow(3px 3px 10px ${deepGreen}55)`,
  },

  speedDial: {
    position: 'absolute',
    left: 20,
    bottom: 20,
  },

  formula: {
    width: 400,
    height: 400,
    position: 'absolute',
    top: '50%',
    left: '75%',
    transform: 'translate(-50%, -50%)'
  },

  compass: {
    width: 100,
    height: 100,
    // position: 'absolute',
    // left: 90,
    // bottom: 75
    // left: 20,
    // bottom: 20,
  },

  fab: {
    width: 100,
    height: 100,
    backgroundColor: 'unset',
    '&:hover': {
      backgroundColor: 'unset',

    }
    // backgroundImage: 'url(/img/compass.png)', 
    // backgroundSize: '150px 150px', 
    // backgroundPosition: 'center center', 
    // backgroundRepeat: 'no-repeat' 
  },

  actions: {
    // height: 100,
    // paddingTop: 22,
    paddingBottom: 10
  },

  charName: {
    fontFamily: 'CthulhusCalling',
    fontSize: 40,
    color: 'white',
    position: 'absolute',
    top: 60,
    left: '75%',
    transform: 'translate(-50%, -50%)'
  }

}));

export default styles;
