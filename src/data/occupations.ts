import {
  CharacteristicName,
  OccupationName,
  SkillName,
  ArchetypeName,
} from './names'

export type Occupation = {
  name: OccupationName
  skillFormula: Array<OccupationSkillFormula>,
  creditRatingMin: number
  creditRatingMax: number
  contacts: Array<string>
  skills: Array<SkillName>
}

export enum OccupationSkillFormula {
  edu = 'edu',
  eduDex = 'eduDex',
  eduPow = 'eduPow',
  eduCon = 'eduCon',
  eduApp = 'eduApp',
  eduSiz = 'eduSiz',
  eduInt = 'eduInt',
}

const makeOccupation = (
  name: OccupationName,
  skillFormula: Array<OccupationSkillFormula>,
  creditRatingMin: number,
  creditRatingMax: number,
  contacts: Array<string>,
  skills: Array<SkillName>
): Occupation => {
  return {
    name,
    skillFormula,
    creditRatingMin,
    creditRatingMax,
    contacts,
    skills,
  }
}
