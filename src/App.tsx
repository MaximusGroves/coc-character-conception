import React, { FC } from 'react'

import Header from './components/Header/Header'
import Home from './components/Home/Home'
import { Paper } from '@material-ui/core'
import { stepCharacteristic, useAppContext } from './providers/AppContextProvider'
import './fonts.css'
import styles from './App.style'

const App: FC = () => {
  const { state } = useAppContext()
  const { appName, creatorStep } = state
  const classes = styles()

  // document.addEventListener("contextmenu", function(event) {
  //   event.preventDefault();
  // });

  // document.ontouchstart = function (event) {
  //   event.preventDefault();
  //   event.stopPropagation();
  //   return false;
  // };

  return (
    <Paper id="appRoot" className={creatorStep === stepCharacteristic ? classes.splash : classes.app}>
      <Header appName={appName} />
      <Home />
    </Paper>
  )
}

export default App
