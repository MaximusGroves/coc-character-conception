import {
  Characteristic,
  OccupationName,
  SkillName,
  SkillNameKeys,
  ArchetypeName,
} from './types'

export type Skill = {
  name: SkillName
  startingValue: number
  requirement?: SkillRequirement
}

export enum SkillRequirement {
  MysticOnly = 'MysticOnly',
  Mythos = 'Mythos',
  HalfDex = 'HalfDex',
  EqualsEdu = 'EqualsEdu',
  CustomName = 'CustomName',
}

const makeSkill = (
  name: SkillName,
  startingValue: number,
  requirement?: SkillRequirement
): Skill => {
  return { name, startingValue, requirement }
}

const accounting = makeSkill(SkillName.Accounting, 5)
const appraise = makeSkill(SkillName.Appraise, 5)

const animalHandling = makeSkill(SkillName.AnimalHandling, 1)

const anthropology = makeSkill(SkillName.Anthropology, 1)
const archaeology = makeSkill(SkillName.Archaeology, 1)

const artCraftCustom = makeSkill(
  SkillName.ArtCraftCustom,
  5,
  SkillRequirement.CustomName
)
const artCraftActing = makeSkill(SkillName.ArtCraftActing, 5)
const artCraftPhotography = makeSkill(SkillName.ArtCraftPhotography, 5)

const artillery = makeSkill(SkillName.Artillery, 0)
const charm = makeSkill(SkillName.Charm, 15)
const climb = makeSkill(SkillName.Climb, 20)
const cryptography = makeSkill(SkillName.Cryptography, 0)
const computerUse = makeSkill(SkillName.ComputerUse, 0)
const creditRating = makeSkill(SkillName.CreditRating, 0)
const cthulhuMythos = makeSkill(
  SkillName.CthulhuMythos,
  0,
  SkillRequirement.Mythos
)
const demolitions = makeSkill(SkillName.Demolitions, 1)
const disguise = makeSkill(SkillName.Disguise, 5)
const diving = makeSkill(SkillName.Diving, 1)
const dodge = makeSkill(SkillName.Dodge, 0, SkillRequirement.HalfDex)
const driveAuto = makeSkill(SkillName.DriveAuto, 20)
const electricalRepair = makeSkill(SkillName.ElectricalRepair, 10)
const fastTalk = makeSkill(SkillName.FastTalk, 5)

const fightingCustom = makeSkill(
  SkillName.FightingCustom,
  25,
  SkillRequirement.CustomName
)
const fightingStriking = makeSkill(SkillName.FightingStriking, 25)
const fightingGrappling = makeSkill(SkillName.FightingGrappling, 25)
const fightingThrows = makeSkill(SkillName.FightingThrows, 25)
const fightingDirty = makeSkill(SkillName.FightingDirty, 25)
const fightingStreet = makeSkill(SkillName.FightingStreet, 25)

const axe = makeSkill(SkillName.Axe, 20)
const bow = makeSkill(SkillName.Bow, 15)
const chainsaw = makeSkill(SkillName.Chainsaw, 15)
const flail = makeSkill(SkillName.Flail, 15)
const garrote = makeSkill(SkillName.Garrote, 20)
const sword = makeSkill(SkillName.Sword, 15)
const whip = makeSkill(SkillName.Whip, 15)
const spear = makeSkill(SkillName.Spear, 15)

const firearmsCustom = makeSkill(
  SkillName.FirearmsCustom,
  15,
  SkillRequirement.CustomName
)
const firearmsHandgun = makeSkill(SkillName.FirearmsHandgun, 20)
const firearmsRifleShotgun = makeSkill(SkillName.FirearmsRifleShotgun, 25)
const firearmsSubmachineGun = makeSkill(SkillName.FirearmsSubmachineGun, 15)
const firearmsMachineGun = makeSkill(SkillName.FirearmsMachineGun, 10)
const firearmsFlamethrower = makeSkill(SkillName.FirearmsFlamethrower, 10)
const heavyWeapons = makeSkill(SkillName.HeavyWeapons, 10)

const firstAid = makeSkill(SkillName.FirstAid, 30)
const history = makeSkill(SkillName.History, 5)
const hypnosis = makeSkill(SkillName.Hypnosis, 1)
const intimidate = makeSkill(SkillName.Intimidate, 15)
const jump = makeSkill(SkillName.Jump, 20)

const languageOther = makeSkill(
  SkillName.LanguageOther,
  1,
  SkillRequirement.CustomName
)
const languageOwn = makeSkill(
  SkillName.LanguageOwn,
  5,
  SkillRequirement.EqualsEdu
)
const law = makeSkill(SkillName.Law, 5)
const libraryUse = makeSkill(SkillName.LibraryUse, 20)
const listen = makeSkill(SkillName.Listen, 20)
const locksmith = makeSkill(SkillName.Locksmith, 1)
const lore = makeSkill(SkillName.Lore, 1)
const mechanicalRepair = makeSkill(SkillName.MechanicalRepair, 10)
const medicine = makeSkill(SkillName.Medicine, 1)
const naturalWorld = makeSkill(SkillName.NaturalWorld, 10)
const navigate = makeSkill(SkillName.Navigate, 10)
const occult = makeSkill(SkillName.Occult, 5)
const heavyMachinery = makeSkill(SkillName.HeavyMachinery, 1)
const persuade = makeSkill(SkillName.Persuade, 10)
const pilot = makeSkill(SkillName.Pilot, 1)

const psychicClairvoyance = makeSkill(SkillName.PsychicClairvoyance, 1)
const psychicDivination = makeSkill(SkillName.PsychicDivination, 1)
const psychicMedium = makeSkill(SkillName.PsychicMedium, 1)
const psychicPsychometry = makeSkill(SkillName.PsychicPsychometry, 1)
const psychicTelekinesis = makeSkill(SkillName.PsychicTelekinesis, 1)

const psychoanalysis = makeSkill(SkillName.Psychoanalysis, 1)
const psychology = makeSkill(SkillName.Psychology, 10)

const readLips = makeSkill(SkillName.ReadLips, 1)
const ride = makeSkill(SkillName.Ride, 5)

const scienceCustom = makeSkill(
  SkillName.ScienceCustom,
  1,
  SkillRequirement.CustomName
)
const scienceAstronomy = makeSkill(SkillName.ScienceAstronomy, 1)
const scienceBiology = makeSkill(SkillName.ScienceBiology, 1)
const scienceChemistry = makeSkill(SkillName.ScienceChemistry, 1)
const sciencePhysics = makeSkill(SkillName.SciencePhysics, 1)
const scienceGeology = makeSkill(SkillName.ScienceGeology, 1)

const sleightOfHand = makeSkill(SkillName.SleightOfHand, 10)
const spotHidden = makeSkill(SkillName.SpotHidden, 25)
const stealth = makeSkill(SkillName.Stealth, 20)
const survival = makeSkill(SkillName.Survival, 10)
const swim = makeSkill(SkillName.Swim, 20)
const throwSkill = makeSkill(SkillName.Throw, 20)
const track = makeSkill(SkillName.Track, 10)

export const skills: {
  [key in keyof typeof SkillName]: Skill
} = {
  Accounting: accounting,
  Appraise: appraise,

  AnimalHandling: animalHandling,

  Anthropology: anthropology,
  Archaeology: archaeology,

  ArtCraftCustom: artCraftCustom,
  ArtCraftActing: artCraftActing,
  ArtCraftPhotography: artCraftPhotography,

  Artillery: artillery,
  Charm: charm,
  Climb: climb,
  Cryptography: cryptography,
  ComputerUse: computerUse,
  CreditRating: creditRating,
  CthulhuMythos: cthulhuMythos,
  Demolitions: demolitions,
  Disguise: disguise,
  Diving: diving,
  Dodge: dodge,
  DriveAuto: driveAuto,
  ElectricalRepair: electricalRepair,
  FastTalk: fastTalk,

  FightingCustom: fightingCustom,
  FightingStriking: fightingGrappling,
  FightingGrappling: fightingStriking,
  FightingThrows: fightingThrows,
  FightingDirty: fightingDirty,
  FightingStreet: fightingStreet,

  Axe: axe,
  Bow: bow,
  Chainsaw: chainsaw,
  Flail: flail,
  Garrote: garrote,
  Sword: sword,
  Whip: whip,
  Spear: spear,

  FirearmsCustom: firearmsCustom,
  FirearmsHandgun: firearmsHandgun,
  FirearmsRifleShotgun: firearmsRifleShotgun,
  FirearmsSubmachineGun: firearmsSubmachineGun,
  FirearmsMachineGun: firearmsMachineGun,
  FirearmsFlamethrower: firearmsFlamethrower,
  HeavyWeapons: heavyWeapons,

  FirstAid: firstAid,
  History: history,
  Hypnosis: hypnosis,
  Intimidate: intimidate,
  Jump: jump,

  LanguageOther: languageOther,
  LanguageOwn: languageOwn,

  Law: law,
  LibraryUse: libraryUse,
  Listen: listen,
  Locksmith: locksmith,
  Lore: lore,
  MechanicalRepair: mechanicalRepair,
  Medicine: medicine,
  NaturalWorld: naturalWorld,
  Navigate: navigate,
  Occult: occult,
  HeavyMachinery: heavyMachinery,
  Persuade: persuade,
  Pilot: pilot,
  PsychicClairvoyance: psychicClairvoyance,
  PsychicDivination: psychicDivination,
  PsychicMedium: psychicMedium,
  PsychicPsychometry: psychicPsychometry,
  PsychicTelekinesis: psychicTelekinesis,
  Psychoanalysis: psychoanalysis,
  Psychology: psychology,

  ReadLips: readLips,
  Ride: ride,

  ScienceCustom: scienceCustom,
  ScienceAstronomy: scienceAstronomy,
  ScienceBiology: scienceBiology,
  ScienceChemistry: scienceChemistry,
  SciencePhysics: sciencePhysics,
  ScienceGeology: scienceGeology,

  SleightOfHand: sleightOfHand,
  SpotHidden: spotHidden,
  Stealth: stealth,
  Survival: survival,
  Swim: swim,
  Throw: throwSkill,
  Track: track,
}

export const skillList = Object.values(skills).map((val) => {
  return val as Skill
})
