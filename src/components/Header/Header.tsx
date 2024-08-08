import React, { FC } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import styles from './Header.style'
import { useAppContext } from '../../providers/AppContextProvider'
import CallOfCharacterTitle from '../CharacteristicList/CallOfCharacterTitle'

type HeaderProps = {
  appName: string
}

const Header: FC<HeaderProps> = (props) => {
  const classes = styles()
  const { state, api } = useAppContext()
  const { creatorStep } = state
  const { currentStepName } = api;

  if (creatorStep === 0) {
    return null
  } else {
    return (
      <AppBar position={'static'} className={classes.root}>
        <Toolbar>
          <div style={{ maxWidth: 2000, width: '100%', marginLeft: 'auto', marginRight: 'auto' }}>

            <CallOfCharacterTitle className={classes.headerTitleNudge} />
            {/* {state.coreAttribute && <Typography className={classes.charName}>{CharacteristicName[coreAttribute || 'APP']}</Typography>} */}
            <Typography className={classes.charName}>{currentStepName()}</Typography>
          </div>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Header
