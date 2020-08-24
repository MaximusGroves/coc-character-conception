import React, { FC } from 'react'

import Header from './components/Header/Header'
import Home from './components/Home/Home'
import { Hidden } from '@material-ui/core'
import { useAppContext } from './providers/AppContextProvider'
import './fonts.css'
import HomeMobile from './components/HomeMobile/HomeMobile'
import styles from './App.style'

const App: FC = () => {
  const { state } = useAppContext()
  const { appName } = state
  const classes = styles()

  return (
    <div className={classes.app}>
      <Header appName={appName} />
      <Hidden smDown>
        <Home />
      </Hidden>
      <Hidden mdUp>
        <HomeMobile />
      </Hidden>
    </div>
  )
}

export default App
