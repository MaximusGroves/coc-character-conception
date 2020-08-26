import { makeStyles } from '@material-ui/core'

const styles = makeStyles((theme) => ({
  app: {
    margin: 0,
    backgroundColor: '#fafafa',
    width: '100vw',
    overflowY: 'auto',
    height: 'calc(100vh - 62px)',
    [theme.breakpoints.down('sm')]: {
      height: '100vh',
    },
  },
}))

export default styles
