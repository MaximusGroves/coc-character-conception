import { makeStyles } from '@material-ui/core'

const styles = makeStyles({
  title: {
    fontFamily: 'SFComicScript',

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
    marginLeft: -20,
    marginRight: -20,
    marginTop: 10,
    color: 'black',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },

  archetypeItem: {
    // padding: 20,
    backgroundImage: 'url(/pulp3.jpg)',
    backgroundPosition: 'center top',
    '&:hover': {
      boxShadow:
        '0px 7px 8px -4px rgba(22, 155, 30,0.4),0px 12px 17px 2px rgba(22, 155, 30,0.28),0px 5px 22px 4px rgba(22, 155, 30 ,0.24)',
      cursor: 'pointer',
    },
    userSelect: 'none',
  },

  archetypeSelected: {
    boxShadow:
      '0px 8px 9px -5px rgba(122, 40, 203,0.6),0px 15px 22px 2px rgba(122, 40, 203,0.42),0px 6px 28px 5px rgba(122, 40, 203,0.36)!important',
  },

  button: {
    padding: 20,
    textTransform: 'none',
    textAlign: 'left',
    flexDirection: 'column',
  },

  // item0: {
  //   // minWidth: 300,
  //   padding: 20,
  //   backgroundImage: 'url(/pulp1.jpg)',
  //   backgroundPosition: 'center top',
  // },
  // item1: {
  //   // minWidth: 300,
  //   padding: 20,
  //   backgroundImage: 'url(/pulp2.jpg)',
  //   backgroundPosition: 'center top',
  // },
  // item2: {
  //   padding: 20,
  //   backgroundImage: 'url(/pulp3.jpg)',
  //   backgroundPosition: 'center top',
  // },
  // item3: {
  //   // minWidth: 300,
  //   padding: 20,
  //   backgroundImage: 'url(/pulp4.jpg)',
  //   backgroundPosition: 'center top',
  // },
})

export default styles
