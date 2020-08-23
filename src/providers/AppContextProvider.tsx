import React, { useState, createContext, FC } from 'react'
import { CreatorStepKeys } from '../data/types'
import { Archetype } from '../data/archetypes'
import { Occupation } from '../data/occupations'

export type ContextProps = {
  children: React.ReactNode
}

export type AppState = {
  appName: string
  creatorStep: number
  selectedArchetype?: Archetype
  selectedOccupation?: Occupation
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
  selectOccupation: Function
}

type ContextValues = {
  state: AppState
  api: AppFunctions
}

export const AppContext = createContext<ContextValues | undefined>(undefined)

const AppContextProvider: FC<ContextProps> = (props) => {
  const [state, setAppState] = useState<AppState>(defaultState)

  const { creatorStep, selectedArchetype, selectedOccupation } = state

  const nextStep = () => {
    if (creatorStep < CreatorStepKeys.length - 1) {
      setAppState({ ...state, creatorStep: creatorStep + 1 })
    }
  }

  const prevStep = () => {
    if (creatorStep > 0) {
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

  const selectOccupation = (newSelection: Occupation) => {
    if (newSelection === selectedOccupation) {
      setAppState({ ...state, selectedOccupation: undefined })
    } else {
      setAppState({ ...state, selectedOccupation: newSelection })
    }
  }

  const api = {
    setAppState,
    nextStep,
    prevStep,
    selectArchetype,
    selectOccupation,
  }

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
