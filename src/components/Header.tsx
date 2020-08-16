import React, { FC } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import styles from './Header.style'

type HeaderProps = {
  appName: string
}

const Header: FC<HeaderProps> = (props) => {
  const classes = styles()
  const { appName } = props

  return (
    <AppBar position={'static'} className={classes.root}>
      <Toolbar>
        <Typography>{appName}</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
