import React, { useState, createContext, FC } from 'react'
import { CreatorStepKeys } from '../data/types'
import { Archetype } from '../data/archetypes'
import { Occupation } from '../data/occupations'
import { Talent } from '../data/talents'

export type ContextProps = {
  children: React.ReactNode
}

export type AppState = {
  appName: string
  creatorStep: number
  selectedArchetype?: Archetype
  selectedOccupation?: Occupation
  selectedTalent?: Array<Talent>
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
  selectTalent: Function
}

type ContextValues = {
  state: AppState
  api: AppFunctions
}

export const AppContext = createContext<ContextValues | undefined>(undefined)

const AppContextProvider: FC<ContextProps> = (props) => {
  const [state, setAppState] = useState<AppState>(defaultState)

  const { creatorStep, selectedArchetype, selectedOccupation, selectedTalent } = state

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

  const selectTalent = (newSelection: Talent) => {
    var _tempTalents = selectedTalent || new Array<Talent>(2)
    const _talent = _tempTalents.indexOf(newSelection)
    if (_talent === 0 || _talent === 1) {
      if (_tempTalents && _tempTalents[0] === newSelection) delete _tempTalents[0]
      if (_tempTalents && _tempTalents[1] === newSelection) delete _tempTalents[1]
    } else {
      if (_tempTalents && _tempTalents[0] === undefined && !(_tempTalents[1] && _tempTalents[1].type === newSelection.type)) _tempTalents[0] = newSelection
      else if (_tempTalents && _tempTalents[1] === undefined && !(_tempTalents[0] && _tempTalents[0].type === newSelection.type)) _tempTalents[1] = newSelection
    }
    setAppState({ ...state, selectedTalent: _tempTalents })
  }

  const api = {
    setAppState,
    nextStep,
    prevStep,
    selectArchetype,
    selectOccupation,
    selectTalent,
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
