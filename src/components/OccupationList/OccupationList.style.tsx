import { makeStyles } from '@material-ui/core'

const styles = makeStyles((theme) => ({
  title: {
    fontFamily: 'Diploma',
    // wordBreak: 'break-word',

    // textAlign: 'left',
  },
  characteristic: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  charText: {
    fontWeight: 600,
  },
  flavorText: {
    fontStyle: 'italic',
  },
  divider: {
    marginTop: 4,
    color: 'black',
    backgroundColor: 'rgba(0,0,0,0.3)',
    maxWidth: 'calc( 100% - 80px )',

    marginLeft: 'auto',
    marginRight: 'auto',
  },

  occupationItem: {
    // padding: 20,
    // backgroundImage: 'url(/img/pulp3.jpg)',
    // backgroundPosition: 'center top',
    textAlign: 'center',
    '&:hover': {
      boxShadow:
        '0px 7px 8px -4px rgba(22, 155, 30,0.4),0px 12px 17px 2px rgba(22, 155, 30,0.28),0px 5px 22px 4px rgba(22, 155, 30 ,0.24)',
      cursor: 'pointer',
    },
    userSelect: 'none',
    transition: 'transform 0.3s, box-shadow 0.3s',

    border: '15px solid transparent',
    borderImage: 'url(/img/diplomaBorder600.png) 50 round',
    backgroundColor: '#FFFDEB',
  },

  occupationSelected: {
    boxShadow:
      '0px 8px 9px -5px rgba(122, 40, 203,0.6),0px 15px 22px 2px rgba(122, 40, 203,0.42),0px 6px 28px 5px rgba(122, 40, 203,0.36)!important',
    transform: 'scale(102%)',
  },

  gridParent: {
    width: '100%',
  },

  button: {
    padding: 20,
    textTransform: 'none',
    textAlign: 'center',
    flexDirection: 'column',
    width: 'calc( 100% + 30px )',
    marginLeft: '-15px',
    marginRight: '-15px',
    marginTop: '-15px',
    marginBottom: '-15px',
  },

  ripple: {
    color: theme.palette.secondary.main,
  },

  rippleDeselect: {
    color: theme.palette.primary.main,
  },

  sigil: {
    width: 80,
    height: 80,
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    bottom: -8,
  },

  itemContainer: {
    position: 'relative',
    textAlign: 'center',
    paddingBottom: 80,
    // width: '100%',
  },

  // item0: {
  //   // minWidth: 300,
  //   padding: 20,
  //   backgroundImage: 'url(/img/pulp1.jpg)',
  //   backgroundPosition: 'center top',
  // },
  // item1: {
  //   // minWidth: 300,
  //   padding: 20,
  //   backgroundImage: 'url(/img/pulp2.jpg)',
  //   backgroundPosition: 'center top',
  // },
  // item2: {
  //   padding: 20,
  //   backgroundImage: 'url(/img/pulp3.jpg)',
  //   backgroundPosition: 'center top',
  // },
  // item3: {
  //   // minWidth: 300,
  //   padding: 20,
  //   backgroundImage: 'url(/img/pulp4.jpg)',
  //   backgroundPosition: 'center top',
  // },
}))

export default styles
