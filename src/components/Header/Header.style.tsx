import { makeStyles } from '@material-ui/core'

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
}))

export default styles
