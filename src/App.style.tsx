import { makeStyles } from '@material-ui/core'

const styles = makeStyles((theme) => ({
  splash: {
    margin: 0,
    backgroundColor: '#fafafa',
    width: '100vw',
    height: '100vh',
    background: 'url(/img/scene2tile.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    // '-webkit-transform': 'scaleX(-1)',
    // transform: 'scaleX(-1)',
  },
  app: {
    margin: 0,
    // backgroundColor: '#fafafa',
    width: '100vw',
    overflowY: 'auto',
    height: 'calc(100vh - 62px)',

    // background: 'url(/img/bg1.png)',
    // backgroundPosition: 'center center',
    // // backgroundSize: '100%',

    // [theme.breakpoints.down('sm')]: {
    //   height: '100vh',
    // },
  },
}))

export default styles
