import { makeStyles } from '@material-ui/core'

const styles = makeStyles({
  

  item2: {
    padding: 20,
    backgroundImage: 'url(/pulp3.jpg)',
    backgroundPosition: 'center top',
  },

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
  // item3: {
  //   // minWidth: 300,
  //   padding: 20,
  //   backgroundImage: 'url(/pulp4.jpg)',
  //   backgroundPosition: 'center top',
  // },
})

export default styles
