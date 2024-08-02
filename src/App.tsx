import React, { FC } from 'react'

import Header from './components/Header/Header'
import Home from './components/Home/Home'
import { Paper } from '@material-ui/core'
import { useAppContext } from './providers/AppContextProvider'
import './fonts.css'
import styles from './App.style'

const App: FC = () => {
  const { state } = useAppContext()
  const { appName, creatorStep } = state
  const classes = styles()


  return (
    <Paper className={creatorStep === 0 ? classes.splash : classes.app}>
      <Header appName={appName} />
      <Home />
    </Paper>
  )
}

export default App
