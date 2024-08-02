import { makeStyles } from '@material-ui/core';

const styles = makeStyles({
  root: {

    position: 'relative',
    background: 'url(/img/bg1.png)',
    backgroundPosition: 'center center',
    // backgroundSize: 'contain',
    minHeight: 'calc( 100% - 126px )'

  },

  splash: {
    height: '100vh',
    width: '100vw'
  },

  container: {
    display: 'flex',
    padding: 24,
    flexDirection: 'column',
    maxWidth: 2000,
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',


  },

  drawerPaper: { overflow: 'hidden' },

  buttons: {
    position: 'absolute',
    bottom: 100,
  },
});

export default styles;
