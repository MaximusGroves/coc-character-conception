import React, { FC } from 'react'

import Header from './components/Header'
import Home from './components/Home'

import { useAppContext } from './providers/AppContextProvider'
import './App.css'

const App: FC = () => {
  const { state } = useAppContext()
  const { appName } = state

  return (
    <div className="App">
      <Header appName={appName} />
      <Home />
    </div>
  )
}

export default App
