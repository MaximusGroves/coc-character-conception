import React, { FC } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import styles from './Header.style'
import { useAppContext } from '../../providers/AppContextProvider'
import CallOfCharacterTitle from '../CharacteristicList/CallOfCharacterTitle'
import { CharacteristicName } from '../../data/types'

type HeaderProps = {
  appName: string
}

const Header: FC<HeaderProps> = (props) => {
  const classes = styles()
  const { appName } = props
  const { state } = useAppContext()
  const { creatorStep, coreAttribute } = state

  if (creatorStep === 0) {
    return null
  } else {
    return (
      <AppBar position={'static'} className={classes.root}>
        <Toolbar>
          <CallOfCharacterTitle style={{ paddingTop: 24 }} />
          {state.coreAttribute && <Typography className={classes.charName}>{CharacteristicName[coreAttribute || 'APP']}</Typography>}
        </Toolbar>
      </AppBar>
    )
  }
}

export default Header
