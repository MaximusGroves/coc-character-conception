import {
  Characteristic,
  OccupationName,
  SkillName,
  ArchetypeName,
} from './types'

export type Skill = {
  name: SkillName
  startingValue: number
}

const makeSkill = (name: SkillName, startingValue: number): Skill => {
  return { name, startingValue }
}
