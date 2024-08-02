import React, { useState, createContext, FC } from 'react';
import { CharacteristicKey, stepKeys } from '../data/types';
import { ArchetypeOption } from '../data/archetypes';
import { Occupation, OccupationSkillFormula } from '../data/occupations';
import { Talent } from '../data/talents';

export type ContextProps = {
  children: React.ReactNode;
};

export type AppState = {
  appName: string;
  creatorStep?: number;
  selectedArchetype?: ArchetypeOption;
  selectedOccupation?: Occupation;
  selectedTalent?: Array<Talent>;
  coreAttribute?: CharacteristicKey;
  stats?: Record<CharacteristicKey, number>;
  rolls?: Record<CharacteristicKey, number[]>;
  skillFormula?: OccupationSkillFormula;
  occPoints?: number;
};

const defaultState: AppState = {
  appName: 'Call of Character',
  creatorStep: 0,
  selectedTalent: [],
};

export type AppFunctions = {
  setState: Function;
  nextStep: Function;
  prevStep: Function;
  setStep: Function;
  selectCoreAttribute: Function;
  selectArchetype: Function;
  selectOccupation: Function;
  selectTalent: Function;
  currentStepName: Function;
};

type ContextValues = {
  state: AppState;
  api: AppFunctions;
};

export const AppContext = createContext<ContextValues | undefined>(undefined);

const AppContextProvider: FC<ContextProps> = (props) => {
  const [state, setAppState] = useState<AppState>(defaultState);

  const setState = (val: Partial<AppState>) => {
    setAppState({ ...state, ...val });
  };

  const {
    creatorStep,
    selectedArchetype,
    selectedOccupation,
    selectedTalent,
    coreAttribute
  } = state;


  const currentStepName = () => {
    switch (creatorStep) {
      case 0: return "Characteristic";
      case 1: return "Archetype";
      case 2: return "Occupation";
      case 3: return "Talent";
      case 4: return "Attributes";
      case 5: return "Skills";
    }
  }

  const nextStep = () => {
    if (creatorStep === undefined) {
      setState({ creatorStep: 0 });
    } else if (creatorStep < stepKeys.list.length) {
      setState({ creatorStep: creatorStep + 1 });
    }
  };

  const prevStep = () => {
    if (creatorStep === undefined) {
      setState({ creatorStep: 0 });
    } else if (creatorStep > 0) {
      setState({ creatorStep: creatorStep - 1 });
    }
  };

  const setStep = (newStep: number | undefined) => {
    // if (newStep > 0 && newStep < stepKeys.list.length) {
    console.log('setStep', newStep);
    if (creatorStep !== undefined && creatorStep === newStep) {
      // setState({ creatorStep: undefined })
    } else {
      setState({ creatorStep: newStep });
    }

    // }
  };

  const selectCoreAttribute = (newSelection: CharacteristicKey) => {
    if (newSelection === coreAttribute) {
      setState({ coreAttribute: undefined });
    } else {
      setState({ coreAttribute: newSelection });
    }
  };

  const selectArchetype = (newSelection: ArchetypeOption) => {
    if (newSelection === selectedArchetype) {
      setState({ selectedArchetype: undefined });
    } else {
      setState({ selectedArchetype: newSelection });
    }
  };

  const selectOccupation = (newSelection: Occupation) => {
    if (newSelection === selectedOccupation) {
      setState({ selectedOccupation: undefined });
    } else {
      setState({ selectedOccupation: newSelection });
    }
  };

  const selectTalent = (newSelection: Talent) => {
    const matchingIndex = selectedTalent?.indexOf(newSelection);
    if (matchingIndex === -1) {
      // new entry
      if (selectedTalent?.length === 2) {
        //deselect first element, add new one
        setState({ selectedTalent: [selectedTalent[1], newSelection] });
      } else {
        // just add new element
        setState({ selectedTalent: [...(selectedTalent || []), newSelection] });
      }
    } else {
      //deselect entry
      const newArr = selectedTalent?.filter(
        (val) => val.key !== newSelection.key
      );
      setState({ selectedTalent: newArr });
    }
  };

  const api = {
    setState,
    nextStep,
    prevStep,
    selectCoreAttribute,
    selectArchetype,
    selectOccupation,
    selectTalent,
    setStep,
    currentStepName,
  };

  return (
    <AppContext.Provider value={{ state, api }}>
      {props.children}
    </AppContext.Provider>
  );
};

/****************************************************************
 * Allows us to skip some spammy TS code defining default values.
 * Must be used inside AppContextProvider
 ****************************************************************/
export const useAppContext = (): ContextValues => {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within a AppContextProvider');
  }
  return context as ContextValues;
};

export default AppContextProvider;
