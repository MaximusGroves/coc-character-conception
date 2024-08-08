import React, { useState, createContext, FC } from 'react';
import { CharacteristicKey, SkillName, stepKeys } from '../data/types';
import { ArchetypeOption } from '../data/archetypes';
import { Occupation, OccupationSkillFormula } from '../data/occupations';
import { Talent } from '../data/talents';

export type ContextProps = {
  children: React.ReactNode;
};

export type Stats = {
  [key in CharacteristicKey]: number;
}

export type Rolls = Stats[];


export type AppState = {
  appName: string;
  creatorStep?: number;
  coreAttribute?: CharacteristicKey;
  selectedArchetype?: ArchetypeOption;
  selectedOccupation?: Occupation;
  selectedTalent?: Talent[];
  stats?: Stats;
  rolls?: Array<number[]>;
  // rolls?: Rolls;
  skillFormula?: OccupationSkillFormula;
  archPoints?: number;
  occPoints?: number;
  intPoints?: number;
  archSkills: Record<SkillName, number> | {};
  occSkills: Record<SkillName, number> | {};
  intSkills: Record<SkillName, number> | {};
  luck?: number[];
  smallNav: boolean;
};

const defaultState: AppState = {
  appName: 'Call of Character',
  creatorStep: 0,
  selectedTalent: [],
  archPoints: 100,
  archSkills: {},
  occSkills: {},
  intSkills: {},
  smallNav: false,
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
  setStats: Function;
  getMaxOccPoints: Function;
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

  const computeOccPoints = (occVal: OccupationSkillFormula, statVal: Record<CharacteristicKey, number>) => {
    switch (occVal) {
      case OccupationSkillFormula.edu:
        console.log(statVal?.EDU * 4)
        return (statVal?.EDU * 4);
      case OccupationSkillFormula.eduApp:
        return (statVal?.EDU * 2) + (statVal?.APP) * 2;
      case OccupationSkillFormula.eduCon:
        return (statVal?.EDU) * 2 + (statVal?.CON) * 2;
      case OccupationSkillFormula.eduDex:
        return (statVal?.EDU) * 2 + (statVal?.DEX) * 2;
      case OccupationSkillFormula.eduInt:
        return (statVal?.EDU) * 2 + (statVal?.INT) * 2;
      case OccupationSkillFormula.eduPow:
        return (statVal?.EDU) * 2 + (statVal?.POW) * 2;
      case OccupationSkillFormula.eduSiz:
        return (statVal?.EDU) * 2 + (statVal?.SIZ) * 2;
      case OccupationSkillFormula.eduStr:
        return (statVal?.EDU) * 2 + (statVal?.STR) * 2;
    }
  };

  const getMaxOccPoints = (occ: Occupation | undefined, stat: Stats | undefined) => {
    if (occ === undefined || stat === undefined) {
      return undefined;
    }

    let maxSkills = 0;
    occ.skillFormula.map(val => {
      const currentSkills = computeOccPoints(val, stat);
      console.log(val);
      console.log(currentSkills)
      if (currentSkills > maxSkills) {
        maxSkills = currentSkills;
      }
      return true;
    })
    return maxSkills;
  }


  const nextStep = () => {
    var el = document.getElementById("appRoot"); // Or whatever method to get the element
    try {
      //@ts-ignore
      el.scrollTop = 0;
    } catch (err) {
      console.log('root was null')
    }
    if (creatorStep === undefined) {
      setState({ creatorStep: 0 });
    } else if (creatorStep < stepKeys.list.length) {
      setState({ creatorStep: creatorStep + 1 });
    }
  };

  const prevStep = () => {
    var el = document.getElementById("appRoot"); // Or whatever method to get the element
    try {
      //@ts-ignore
      el.scrollTo(0, 0);
    } catch (err) {
      console.log('root was null')
    }
    if (creatorStep === undefined) {
      setState({ creatorStep: 0 });
    } else if (creatorStep > 0) {
      setState({ creatorStep: creatorStep - 1 });
    }
  };

  const setStep = (newStep: number | undefined) => {
    // if (newStep > 0 && newStep < stepKeys.list.length) {
    var el = document.getElementById("appRoot"); // 
    try {
      //@ts-ignore
      el.scrollTop = 0;
      console.log(el);
    } catch (err) {
      console.log('root was null')
    }
    // console.log('setStep', newStep);
    if (creatorStep !== undefined && creatorStep === newStep) {
      // setState({ creatorStep: undefined })
    } else {
      setState({ creatorStep: newStep });
    }

    // }
  };

  const selectCoreAttribute = (newSelection: CharacteristicKey) => {
    if (newSelection === coreAttribute) {
      setState({ coreAttribute: undefined, stats: undefined, rolls: undefined });
    } else {
      setState({ coreAttribute: newSelection, stats: undefined, rolls: undefined });
    }
  };

  const selectArchetype = (newSelection: ArchetypeOption) => {
    if (newSelection === selectedArchetype) {
      setState({ selectedArchetype: undefined, archPoints: 100, archSkills: {} });
    } else {
      setState({ selectedArchetype: newSelection, archPoints: 100, archSkills: {} });
    }
  };

  const selectOccupation = (newSelection: Occupation) => {
    if (newSelection === selectedOccupation) {
      setState({ selectedOccupation: undefined, occPoints: undefined, occSkills: {}, intSkills: {}, intPoints: state.stats ? state.stats.INT * 2 : undefined });
    } else {
      setState({ selectedOccupation: newSelection, occPoints: getMaxOccPoints(newSelection, state?.stats), occSkills: {}, intSkills: {}, intPoints: state.stats ? state.stats.INT * 2 : undefined });
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

  const setStats = (newStats, newRolls) => {
    const newOccPoints = getMaxOccPoints(selectedOccupation, newStats);
    api.setState({ stats: newStats, rolls: newRolls, intPoints: newStats.INT * 2, occPoints: newOccPoints, occSkills: {}, intSkills: {} });
  }

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
    setStats,
    getMaxOccPoints
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
