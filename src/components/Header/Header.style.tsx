import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  root: {},
  title: {
    fontFamily: 'SFComicScript',
    fontSize: 50,
    [theme.breakpoints.down('sm')]: {
      fontSize: 30,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 22,
    },
  },
  charName: {
    fontFamily: 'CthulhusCalling',
    fontSize: 40,
    color: 'white',
    position: 'absolute',
    top: 60,
    left: 'calc( 75% + 12px )',
    transform: 'translate(-50%, -50%)'
  }
}));

export default styles;
