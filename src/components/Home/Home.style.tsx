import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({

  root: {
    position: 'relative',
    background: 'url(/img/bg1.png)',
    backgroundPosition: 'center top',
    // backgroundSize: '816px 1456px',
    backgroundSize: '408px 728px',
    // [theme.breakpoints.down('sm')]: {
    //   backgroundSize: '204px 364px',
    // },
    // [theme.breakpoints.down('sm')]: {
    //   backgroundSize: '25%',
    // },
    minHeight: 'calc( 100% - 126px )',
    backgroundColor: 'rgb(66, 66, 66)',
    [theme.breakpoints.down('sm')]: {
      minHeight: 'calc( 100% - 170px )',
    }

  },

  splash: {
    // backgroundColor: 'rgb(66, 66, 66)',
    height: '100dvh',
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

  drawerPaper: {
    overflow: 'hidden!important',
    height: 61,
    [theme.breakpoints.down('md')]: {
      overflow: 'hidden!important',
      height: 50,
    }
  },


  buttons: {
    position: 'absolute',
    bottom: 100,
  },

}));

export default styles;
