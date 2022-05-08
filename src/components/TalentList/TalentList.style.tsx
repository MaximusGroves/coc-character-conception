import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  itemContainer: {
    paddingBottom: 80,
  },

  title: {
    backgroundColor: '#fde300',
    margin: -20,
    padding: 20,
    paddingBottom: 0,
    marginBottom: 0,
    // marginBottom: ,
  },

  fontScalar: {
    transform: 'scale(.7,1)',
    fontFamily: 'Indubitably',
    fontSize: 42,
    lineHeight: '44px',
    color: 'black',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  characteristic: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  charText: {
    fontWeight: 600,
  },
  flavorText: {
    fontFamily: 'Arial',
    paddingTop: 20,
  },
  divider: {
    marginLeft: -20,
    marginRight: -20,

    color: 'black',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },

  talentItem: {},

  //  backgroundPosition: 'center top',
  talentCard: {
    //    backgroundImage: 'url(/img/bizcard.png)',
    //    backgroundSize: "120% 120%",

    '&:hover': {
      boxShadow:
        '0px 7px 8px -4px rgba(22, 155, 30,0.4),0px 12px 17px 2px rgba(22, 155, 30,0.28),0px 5px 22px 4px rgba(22, 155, 30 ,0.24)',
      cursor: 'pointer',
    },
    userSelect: 'none',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },

  talentSection: {
    //    backgroundImage: 'url(/img/talentpaper.jpg)',
    //    backgroundPosition: 'center top',
    marginTop: '20px',
    marginBottom: '50px',

    transition: 'transform 0.3s, box-shadow 0.3s',
  },

  talentSelected: {
    boxShadow:
      '0px 8px 9px -5px rgba(122, 40, 203,0.6),0px 15px 22px 2px rgba(122, 40, 203,0.42),0px 6px 28px 5px rgba(122, 40, 203,0.36)!important',
    transform: 'scale(102%)',
  },

  button: {
    padding: 20,
    overflow: 'hidden',
    width: '100%',
    minHeight: 250,
    textTransform: 'none',
    textAlign: 'left',
    alignItems: 'flex-start',
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
    right: 12,
    bottom: 12,
  },
}));

export default styles;
