import { makeStyles } from '@material-ui/core';

import { green, purple, darkPurple, deepGreen } from '../../providers/AppThemeProvider';

const styles = makeStyles((theme) => ({


  compassRoot: {
    position: 'absolute',
    left: 15,
    top: 'calc( 100dvh - 564px - 23px)'
  },

  titleRoot: {
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)'
    }
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
    fill: 'white!important',
    marginBottom: 7,
  },
  spookyIcon: {
    // filter: `drop-shadow(1px 2px 4px ${purple}, 0px 3px 6px ${darkPurple}, 0px 0px 5px ${green}, 3px 3px 20px ${green}, -2px 1px 30px ${green})`
    // filter: 'drop-shadow(3px 5px 2px #000000) drop-shadow(3px 5px 2px #ff0000)'
    filter: `drop-shadow(1px 1px 1px ${darkPurple}) drop-shadow(1px 1px 1px ${purple}) drop-shadow(3px 3px 10px ${deepGreen}55)`,
  },



  normalPic: {
    width: 'auto',
    height: '32vw',
    maxHeight: '58vh',
    position: 'absolute',
    top: '47%',
    left: '75%',
    transform: 'translate(-50%, -50%)',
    [theme.breakpoints.down('sm')]: {
      left: '50%',
      width: 'auto',
      height: '70vw',
      top: '47%',
      maxHeight: '47vh'
    }
  },

  bigPic: {
    width: 'auto',
    height: '45vw',
    maxHeight: '82vh',
    position: 'absolute',
    top: '47%',
    left: '75%',
    transform: 'translate(-50%, -50%)',
    [theme.breakpoints.down('sm')]: {
      left: '50%',
      width: 'auto',
      height: '95vw',
      top: '47%',
      maxHeight: '65vh'
    }
  },



  compass: {
    width: 100,
    height: 100,
  },



  fab: {

    width: '100px!important',
    height: '100px!important',
    backgroundColor: 'unset!important',
    '&:hover': {
      backgroundColor: 'unset!important',
    },
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

  speedDialAction: {
    marginRight: 200
  },

  promptText: {
    fontSize: 20,
    fontFamily: 'Cthulhumbus',
    color: 'white',
    textShadow: `1px 2px 4px ${purple}, 0px 3px 6px ${darkPurple}, 0px 0px 5px ${green}, 3px 3px 20px ${green}, -2px 1px 30px ${green}`

  },

  leftText: {
    position: 'absolute',
    left: 135,
    top: 'calc( 100dvh - 89px )',
    [theme.breakpoints.down('xs')]: {
      left: 130
    }

  },

  rightText: {
    textTransform: 'none',
    paddingRight: 15,
    marginTop: -7,
    [theme.breakpoints.down('xs')]: {
      width: 'calc( 100vw - 270px)',
      paddingRight: 0,
    }
  },

  absoluteRightBtn: {

    position: 'absolute',
    right: '20px !important',
    top: 'calc( 100dvh - 117px ) !important',
    marginLeft: '100px !important',
    borderRadius: '1000 !important'

  },

  charName: {
    fontFamily: 'CthulhusCalling',
    fontSize: 40,
    color: 'white',
    position: 'absolute',
    top: 60,
    left: '75%',
    transform: 'translate(-50%, -50%)',
    filter: `drop-shadow(1px 1px 1px ${darkPurple}) drop-shadow(1px 1px 1px ${purple}) drop-shadow(3px 3px 1px ${deepGreen})`,

    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      top: 100

    }

  }

}));

export default styles;
