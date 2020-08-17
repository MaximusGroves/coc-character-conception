import {
  CharacteristicName,
  OccupationName,
  SkillName,
  ArchetypeName,
} from './names'

export type Skill = {
  name: SkillName
  startingValue: number
}

const makeSkill = (name: SkillName, startingValue: number): Skill => {
  return { name, startingValue }
}

