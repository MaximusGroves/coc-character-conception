import React, { FC } from 'react'
import { Paper, Grid, Typography } from '@material-ui/core'
import styles from './Home.style'

const Header: FC = () => {
  const classes = styles()

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="space-around">
        <Grid item>
          <Paper className={classes.root} elevation={3}>
            <Typography variant="h3">This is my new app</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default Header
