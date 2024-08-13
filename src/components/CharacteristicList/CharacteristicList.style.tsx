import { makeStyles } from '@material-ui/core';

import { green, purple, darkPurple, deepGreen } from '../../providers/AppThemeProvider';

const styles = makeStyles((theme) => ({


  compassRoot: {
    position: 'absolute',
    left: 15,
    top: 'calc( 100svh - 564px - 23px)',
    [theme.breakpoints.down('sm')]: {
      left: 'unset',
      right: 15
    }
  },

  titleRoot: {
    [theme.breakpoints.down('sm')]: {
      // '@media (max-width: 800px)': {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)'
    }
  },

  mainTitle: {
    zIndex: 1000,
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-53%)'
    }
  },


  attributeFlavorText: {
    maxWidth: '20vw',
    position: 'absolute',
    top: '47%',
    left: '30%',
    transform: 'translate(-50%, -50%)',
    padding: '30px 100px',
    transition: 'opacity 0.3s',
    background: '#ffffff22',
    borderRadius: 12,
    // zIndex: 2000,
    [theme.breakpoints.down('md')]: {
      padding: 30,
      maxWidth: '30vw',
    },
    [theme.breakpoints.down('sm')]: {
      // maxWidth: '20vw',
      left: 'calc( 50%)',
      width: 'calc( 95vw - 170px )',
      maxWidth: 'calc( 65vh - 170px)',
      // minHeight: '95vw',
      top: 'unset',
      bottom: '0',
      transform: 'translate(-50%, 0%)',
      // maxHeight: '65vh'

      '@media (max-height: 719px)': {
        top: '-13%!important',
        bottom: 'unset!important'
      }

    },
  },

  infobtn: {
    position: 'absolute',
    bottom: '15%',
    left: '50%',
    zIndex: 2000,
    transform: 'translateX(-50%)',
    filter: `drop-shadow(1px 1px 1px ${darkPurple}) drop-shadow(1px 1px 1px ${purple}) drop-shadow(3px 3px 10px ${deepGreen}55)`,
    [theme.breakpoints.down('xs')]: {
      bottom: '21%',
    }
  },

  flavorFont: {
    pointerEvents: 'none',
    fontFamily: 'Cthulhumbus',
    color: 'white',
    fontSize: 20,
    textShadow: `1px 2px 4px ${purple}, 0px 3px 6px ${darkPurple}, 0px 0px 5px ${green}, 3px 3px 20px ${green}, -2px 1px 30px ${green}`,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    },

    // '@media (min-width: 375px)': {
    //   fontSize: '1px!important'
    // }
  },

  fancyTitle: {
    fontFamily: 'Cthulhumbus',
    color: 'white',
    textShadow: `2px 2px 0px ${darkPurple}, -2px -1px 0px ${purple}, 0px 0px 6px ${green}`

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

  tooltipSpacer: {
    padding: '8px 100px 8px 90px',
    marginLeft: -100,
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      // '@media (max-width: 800px)': {
      padding: '8px 90px 8px 20px',
      marginLeft: 0,
      marginRight: -100
    }
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

  unsetTooltip: {
    // left: '0!important',
    backgroundColor: 'unset!important',
    boxShadow: 'none!important',
    [theme.breakpoints.down('sm')]: {
      // left: 'revert-layer',

    }
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
      // '@media (max-width: 800px)': {
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
    transition: 'opacity 0.2s',
    transform: 'translate(-50%, -50%)',
    [theme.breakpoints.down('sm')]: {
      // '@media (max-width: 800px)': {
      left: '50%',
      width: 'auto',
      height: '95vw',
      top: '47%',
      maxHeight: '65vh'
    }
  },

  blockPic: {
    background: '#00000000',
    border: 'none',
    width: '45vw',
    maxWidth: '82vh',
    minHeight: '45vw',
    maxHeight: '82vh',
    position: 'absolute',
    top: '47%',
    left: '75%',
    transition: 'opacity 0.2s',
    transform: 'translate(-50%, -50%)',
    [theme.breakpoints.down('sm')]: {
      // '@media (max-width: 800px)': {
      left: '50%',
      width: '95vw',
      maxWidth: '65vh',
      minHeight: '95vw',
      top: '47%',
      maxHeight: '65vh'
    }
  },

  xRay: {
    transition: 'unset!important',
  },

  residualPic: {
    transition: 'opacity 0.7s!important',
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
    backgroundColor: '#333!important'
  },

  promptText: {
    fontSize: 20,
    fontFamily: 'Cthulhumbus',
    color: 'white',
    textShadow: `1px 2px 4px ${purple}, 0px 3px 6px ${darkPurple}, 0px 0px 5px ${green}, 3px 3px 20px ${green}, -2px 1px 30px ${green}`

  },

  unselectable: {
    userSelect: 'none',
    '-webkit-user-select': 'none', /* disable selection/Copy of UIWebView */
    '-webkit-touch-callout': 'none', /* disable the IOS popup when long-press on a link */
  },

  leftText: {
    position: 'absolute',
    left: 135,
    top: 'calc( 100svh - 121px )',
    height: 100,

    [theme.breakpoints.down('sm')]: {
      left: 'unset',
      right: 135,
      paddingLeft: 0,
      textAlign: 'right',
      maxWidth: 'calc( 100vw - 128px )',
    },
    [theme.breakpoints.down('xs')]: {
      right: 122,
      textAlign: 'center',
    },

  },

  hiddenText: {
    [theme.breakpoints.down('sm')]: {
      // '@media (max-width: 800px)': {
      display: 'none!important',
    }
  },

  rightText: {
    textTransform: 'none',
    paddingRight: 6,
    marginTop: -8,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 15,
      paddingRight: 0,
    },
    [theme.breakpoints.down('xs')]: {
      width: 'calc( 100vw - 210px)',
      paddingRight: 0,
      paddingLeft: 0,
    }
  },

  absoluteRightBtn: {

    position: 'absolute',
    right: '0px !important',
    top: 'calc( 100svh - 117px ) !important',
    marginLeft: '100px !important',
    borderRadius: '1000 !important',
    maxWidth: 338,
    [theme.breakpoints.down('sm')]: {
      maxWidth: 325,
      right: 'unset',
      left: '0px!important',
      marginLeft: '0!important',
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: 'calc( 100vw - 110px )',
    },
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
      // '@media (max-width: 800px)': {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      top: 100

    }

  }

}));

export default styles;
