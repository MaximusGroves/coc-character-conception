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
  requirement?: skillRequirement
}

export enum skillRequirement {
  MysticOnly = 'MysticOnly',
  Mythos = 'Mythos',
  HalfDex = 'HalfDex',
}

const makeSkill = (
  name: SkillName,
  startingValue: number,
  requirement?: skillRequirement
): Skill => {
  return { name, startingValue, requirement }
}

const accounting = makeSkill(SkillName.Accounting, 5)
const animalHandling = makeSkill(SkillName.AnimalHandling, 1)
const anthropology = makeSkill(SkillName.Anthropology, 1)
const appraise = makeSkill(SkillName.Appraise, 5)
const archaeology = makeSkill(SkillName.Archaeology, 1)
const artCraftCustom = makeSkill(SkillName.ArtCraftCustom, 5)
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
  skillRequirement.Mythos
)
const demolitions = makeSkill(SkillName.Demolitions, 1)
const disguise = makeSkill(SkillName.Disguise, 5)
const diving = makeSkill(SkillName.Diving, 1)
const dodge = makeSkill(SkillName.Dodge, 0, skillRequirement.HalfDex)
const driveAuto = makeSkill(SkillName.DriveAuto, 20)
const electricalRepair = makeSkill(SkillName.ElectricalRepair, 10)
const fastTalk = makeSkill(SkillName.FastTalk, 5)
const fightingCustom = makeSkill(SkillName.FightingCustom, 25)
const fightingGrappling = makeSkill(SkillName.FightingGrappling, 25)
const fightingStriking = makeSkill(SkillName.FightingStriking, 25)
const axe = makeSkill(SkillName.Axe, 5)
const bow = makeSkill(SkillName.Bow, 5)
const chainsaw = makeSkill(SkillName.Chainsaw, 5)
const flail = makeSkill(SkillName.Flail, 5)
const garrote = makeSkill(SkillName.Garrote, 5)
const sword = makeSkill(SkillName.Sword, 5)
const whip = makeSkill(SkillName.Whip, 5)
const firearmsCustom = makeSkill(SkillName.FirearmsCustom, 15)
const firearmsHandgun = makeSkill(SkillName.FirearmsHandgun, 20)
const firearmsRifleShotgun = makeSkill(SkillName.FirearmsRifleShotgun, 25)
const firearmSubmachineGun = makeSkill(SkillName.FirearmSubmachineGun, 15)
const flamethrower = makeSkill(SkillName.FirearmsFlamethrower, 5)
const heavyWeapons = makeSkill(SkillName.HeavyWeapons, 5)
const spear = makeSkill(SkillName.Spear, 5)
const firstAid = makeSkill(SkillName.FirstAid, 5)
const history = makeSkill(SkillName.History, 5)
const hypnosis = makeSkill(SkillName.Hypnosis, 5)
const intimidate = makeSkill(SkillName.Intimidate, 5)
const jump = makeSkill(SkillName.Jump, 5)
const languageOther = makeSkill(SkillName.LanguageOther, 5)
const languageOwn = makeSkill(SkillName.LanguageOwn, 5)
const law = makeSkill(SkillName.Law, 5)
const libraryUse = makeSkill(SkillName.LibraryUse, 5)
const listen = makeSkill(SkillName.Listen, 5)
const locksmith = makeSkill(SkillName.Locksmith, 5)
const lore = makeSkill(SkillName.Lore, 5)
const mechanicalRepair = makeSkill(SkillName.MechanicalRepair, 5)
const medicine = makeSkill(SkillName.Medicine, 5)
const naturalWorld = makeSkill(SkillName.NaturalWorld, 5)
const navigate = makeSkill(SkillName.Navigate, 5)
const occult = makeSkill(SkillName.Occult, 5)
const heavyMachinery = makeSkill(SkillName.HeavyMachinery, 5)
const persuade = makeSkill(SkillName.Persuade, 5)
const pilot = makeSkill(SkillName.Pilot, 5)
const psychicClairvoyance = makeSkill(SkillName.PsychicClairvoyance, 5)
const psychicDivination = makeSkill(SkillName.PsychicDivination, 5)
const psychicMedium = makeSkill(SkillName.PsychicMedium, 5)
const psychicPsychometry = makeSkill(SkillName.PsychicPsychometry, 5)
const psychicTelekinesis = makeSkill(SkillName.PsychicTelekinesis, 5)
const psychoanalysis = makeSkill(SkillName.Psychoanalysis, 5)
const psychology = makeSkill(SkillName.Psychology, 5)
const readLips = makeSkill(SkillName.ReadLips, 5)
const ride = makeSkill(SkillName.Ride, 5)
const scienceCustom = makeSkill(SkillName.ScienceCustom, 5)
const scienceAstronomy = makeSkill(SkillName.ScienceAstronomy, 5)
const scienceChemistry = makeSkill(SkillName.ScienceChemistry, 5)
const sciencePhysics = makeSkill(SkillName.SciencePhysics, 5)
const scienceGeology = makeSkill(SkillName.ScienceGeology, 5)
const sleightOfHand = makeSkill(SkillName.SleightOfHand, 5)
const spotHidden = makeSkill(SkillName.SpotHidden, 5)
const stealth = makeSkill(SkillName.Stealth, 5)
const survival = makeSkill(SkillName.Survival, 5)
const swim = makeSkill(SkillName.Swim, 5)
const throwSkill = makeSkill(SkillName.Throw, 5)
const track = makeSkill(SkillName.Track, 5)

export const skills = [
  accounting,
  animalHandling,
  anthropology,
  appraise,
  archaeology,
  artCraftCustom,
  artCraftActing,
  artCraftPhotography,
  artillery,
  charm,
  climb,
  cryptography,
  computerUse,
  creditRating,
  cthulhuMythos,
  demolitions,
  disguise,
  diving,
  dodge,
  driveAuto,
  electricalRepair,
  fastTalk,
  fightingCustom,
  fightingGrappling,
  fightingStriking,
  axe,
  bow,
  chainsaw,
  flail,
  garrote,
  sword,
  whip,
  firearmsCustom,
  firearmsHandgun,
  firearmsRifleShotgun,
  firearmSubmachineGun,
  flamethrower,
  heavyWeapons,
  spear,
  firstAid,
  history,
  hypnosis,
  intimidate,
  jump,
  languageOther,
  languageOwn,
  law,
  libraryUse,
  listen,
  locksmith,
  lore,
  mechanicalRepair,
  medicine,
  naturalWorld,
  navigate,
  occult,
  heavyMachinery,
  persuade,
  pilot,
  psychicClairvoyance,
  psychicDivination,
  psychicMedium,
  psychicPsychometry,
  psychicTelekinesis,
  psychoanalysis,
  psychology,
  readLips,
  ride,
  scienceCustom,
  scienceAstronomy,
  scienceChemistry,
  sciencePhysics,
  scienceGeology,
  sleightOfHand,
  spotHidden,
  stealth,
  survival,
  swim,
  throwSkill,
  track,
]
