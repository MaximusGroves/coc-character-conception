import React, { useState, createContext, FC } from 'react'
import { creatorSteps } from '../components/CreatorStepper/CreatorStepper'
import { Archetype } from '../data/archetypes'

export type ContextProps = {
  children: React.ReactNode
}

export type AppState = {
  appName: string
  creatorStep: number
  selectedArchetype?: Archetype
}

const defaultState: AppState = {
  appName: 'Pulp Cthulhu - Character Conception',
  creatorStep: 0,
}

export type AppFunctions = {
  setAppState: Function
  nextStep: Function
  prevStep: Function
  selectArchetype: Function
}

type ContextValues = {
  state: AppState
  api: AppFunctions
}

export const AppContext = createContext<ContextValues | undefined>(undefined)

const AppContextProvider: FC<ContextProps> = (props) => {
  const [state, setAppState] = useState<AppState>(defaultState)

  const { creatorStep, selectedArchetype } = state

  const nextStep = () => {
    if (creatorStep < creatorSteps.skills) {
      setAppState({ ...state, creatorStep: creatorStep + 1 })
    }
  }

  const prevStep = () => {
    if (creatorStep > creatorSteps.archetype) {
      setAppState({ ...state, creatorStep: creatorStep - 1 })
    }
  }

  const selectArchetype = (newSelection: Archetype) => {
    if (newSelection === selectedArchetype) {
      setAppState({ ...state, selectedArchetype: undefined })
    } else {
      setAppState({ ...state, selectedArchetype: newSelection })
    }
  }

  const api = { setAppState, nextStep, prevStep, selectArchetype }

  return (
    <AppContext.Provider value={{ state, api }}>
      {props.children}
    </AppContext.Provider>
  )
}

/****************************************************************
 * Allows us to skip some spammy TS code defining default values.
 * Must be used inside AppContextProvider
 ****************************************************************/
export const useAppContext = (): ContextValues => {
  const context = React.useContext(AppContext)
  if (context === undefined) {
    throw new Error('useAppContext must be used within a AppContextProvider')
  }
  return context as ContextValues
}

export default AppContextProvider
