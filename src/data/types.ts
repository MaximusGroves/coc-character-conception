// function keyList<T>(arg: T): Array<keyof typeof arg> {
//   return Object.keys(arg).map((val) => {
//     return val as keyof typeof arg
//   })
// }

// function keyObj<T>(arg: T): Record<keyof typeof arg, keyof typeof arg> {
//   const retVal: Partial<Record<string, keyof typeof arg>> = {}
//   Object.keys(arg).map((val) => (retVal[val] = val as keyof typeof arg))
//   return retVal as Record<keyof typeof arg, keyof typeof arg>
// }

function keyReference<T>(
  arg: T
): Record<keyof typeof arg, keyof typeof arg> &
  Record<'list', Array<keyof typeof arg>> {
  const retVal: Partial<
    Record<string, keyof typeof arg> & Record<'list', Array<keyof typeof arg>>
  > = {};
  Object.keys(arg).map((val) => (retVal[val] = val as keyof typeof arg));
  retVal['list'] = Object.keys(arg).map((val) => {
    return val as keyof typeof arg;
  });
  return retVal as Record<keyof typeof arg, keyof typeof arg> &
    Record<'list', Array<keyof typeof arg>>;
}

export enum CreatorSteps {
  archetype = 'Select Archetype',
  occupation = 'Select Occupation',
  talents = 'Select Talents (2)',
  characteristics = 'Roll Characteristics',
  skills = 'Allocate Skills',
}
export type CreatorStepKey = keyof typeof CreatorSteps;
export const stepKeys = keyReference(CreatorSteps);

export enum CharacteristicName {
  STR = 'Strength',
  CON = 'Constitution',
  SIZ = 'Size',
  DEX = 'Dexterity',
  APP = 'Appearance',
  INT = 'Intelligence',
  POW = 'Power',
  EDU = 'Education',
}
export type CharacteristicKey = keyof typeof CharacteristicName;
export const charKeys = keyReference(CharacteristicName);

export enum ArchetypeName {
  Adventurer = 'Adventurer',
  Beefcake = 'Beefcake',
  BonVivant = 'Bon Vivant',
  ColdBlooded = 'Cold Blooded',
  Dreamer = 'Dreamer',
  Egghead = 'Egghead',
  Explorer = 'Explorer',
  FemmeFatale = 'Femme Fatale',
  GreaseMonkey = 'Grease Monkey',
  HardBoiled = 'Hard Boiled',
  Harlequin = 'Harlequin',
  Hunter = 'Hunter',
  Mystic = 'Mystic',
  Outsider = 'Outsider',
  Rogue = 'Rogue',
  Scholar = 'Scholar',
  Seeker = 'Seeker',
  Sidekick = 'Sidekick',
  Steadfast = 'Steadfast',
  Swashbuckler = 'Swashbuckler',
  ThrillSeeker = 'Thrill Seeker',
  TwoFisted = 'Two-Fisted',
}
export type ArchetypeKey = keyof typeof ArchetypeName;
export const archKeys = keyReference(ArchetypeName);

export enum OccupationName {
  ActorFilm = 'Actor, Film',
  ActorStageRadio = 'Actor, Stage & Radio',
  AgencyDetective = 'Agency Detective',
  Archaeologist = 'Archaeologist',
  Artist = 'Artist',
  Athlete = 'Athlete',
  Author = 'Author',
  Aviator = 'Aviator',
  BankRobber = 'Bank Robber',
  BartenderWaitress = 'Bartender / Waitress',
  BeatCop = 'Beat Cop',
  BigGameHunter = 'Big Game Hunter',
  BountyHunter = 'Bounty Hunter',
  BoxerWrestler = 'Boxer / Wrestler',
  Butler = 'Butler',
  CatBurglar = 'Cat Burglar',
  Chauffeur = 'Chauffeur',
  ConfidenceTrickster = 'Confidence Trickster',
  Criminal = 'Criminal',
  CultLeader = 'Cult Leader',
  Dilettante = 'Dilettante',
  DoctorOfMedicine = 'Doctor of Medicine',
  Drifter = 'Drifter',
  ElectedOfficial = 'Elected Official',
  Engineer = 'Engineer',
  Entertainer = 'Entertainer',
  Exorcist = 'Exorcist',
  Explorer = 'Explorer',
  FederalAgent = 'Federal Agent',
  Gambler = 'Gambler',
  GangsterBoss = 'Gangster, Boss',
  GangsterUnderling = 'Gangster, Underling',
  GetAwayDriver = 'Get-Away Driver',
  GunMoll = 'Gun Moll',
  GentlemanOrLady = 'Gentleman / Lady',
  HiredMuscle = 'Hired Muscle',
  HitMan = 'Hit Man',
  Hobo = 'Hobo',
  Hooker = 'Hooker',
  ItinerantWorker = 'Itinerant Worker',
  InvestigativeJournalist = 'Investigative Journalist',
  Laborer = 'Laborer',
  Librarian = 'Librarian',
  Mechanic = 'Mechanic',
  MilitaryOfficer = 'Military Officer',
  Missionary = 'Missionary',
  Musician = 'Musician',
  Nurse = 'Nurse',
  Occultist = 'Occultist',
  Parapsychologist = 'Parapsychologist',
  Photographer = 'Photographer',
  PoliceDetective = 'Police Detective',
  Priest = 'Priest',
  PrivateInvestigator = 'Private Investigator',
  Professor = 'Professor',
  Ranger = 'Ranger',
  Reporter = 'Reporter',
  Sailor = 'Sailor',
  Scientist = 'Scientist',
  Secretary = 'Secretary',
  Soldier = 'Soldier',
  Spy = 'Spy',
  StreetPunk = 'Street Punk',
  StudentIntern = 'Student / Intern',
  TribeMember = 'Tribe Member',
  UnionActivist = 'Union Activist',
  Yogi = 'Yogi',
  Zealot = 'Zealot',
}
export type OccupationKey = keyof typeof OccupationName;
export const occKeys = keyReference(OccupationName);

export enum TalentName {
  KeenVision = 'Keen Vision',
  QuickHealer = 'Quick Healer',
  NightVision = 'Night Vision',
  Endurance = 'Endurance',
  PowerLifter = 'Power Lifter',
  IronLiver = 'Iron Liver',
  StoutConstitution = 'Stout Constitution',
  ToughGuy = 'Tough Guy',
  KeenHearing = 'Keen Hearing',
  SmoothTalker = 'Smooth Talker',
  Hardened = 'Hardened',
  Resilient = 'Resilient',
  StrongWilled = 'Strong Willed',
  QuickStudy = 'Quick Study',
  Linguist = 'Linguist',
  ArcaneInsight = 'Arcane Insight',
  PhotographicMemory = 'Photographic Memory',
  Lore = 'Lore',
  PsychicPower = 'Psychic Power',
  SharpWitted = 'Sharp Witted',
  Alert = 'Alert',
  HeavyHitter = 'Heavy Hitter',
  FastLoad = 'Fast Load',
  Nimble = 'Nimble',
  BeadyEye = 'Beady Eye',
  Outmaneuver = 'Outmaneuver',
  RapidAttack = 'Rapid Attack',
  FleetFooted = 'Fleet Footed',
  QuickDraw = 'Quick Draw',
  RapidFire = 'Rapid Fire',
  Scary = 'Scary',
  Gadget = 'Gadget',
  Lucky = 'Lucky',
  MythosKnowledge = 'Mythos Knowledge',
  WeirdScience = 'Weird Science',
  Shadow = 'Shadow',
  Handy = 'Handy',
  AnimalCompanion = 'Animal Companion',
  MasterOfDisguise = 'Master of Disguise',
  Resourceful = 'Resourceful',
}
export type TalentKey = keyof typeof TalentName;
export const talentKeys = keyReference(TalentName);

export const talentsPhysical: Array<TalentKey> = [
  talentKeys.KeenVision,
  talentKeys.QuickHealer,
  talentKeys.NightVision,
  talentKeys.Endurance,
  talentKeys.PowerLifter,
  talentKeys.IronLiver,
  talentKeys.StoutConstitution,
  talentKeys.ToughGuy,
  talentKeys.KeenHearing,
  talentKeys.SmoothTalker,
];

export const talentsMental: Array<TalentKey> = [
  talentKeys.Hardened,
  talentKeys.Resilient,
  talentKeys.StrongWilled,
  talentKeys.QuickStudy,
  talentKeys.Linguist,
  talentKeys.ArcaneInsight,
  talentKeys.PhotographicMemory,
  talentKeys.Lore,
  talentKeys.PsychicPower,
  talentKeys.SharpWitted,
];

export const talentsCombat: Array<TalentKey> = [
  talentKeys.Alert,
  talentKeys.HeavyHitter,
  talentKeys.FastLoad,
  talentKeys.Nimble,
  talentKeys.BeadyEye,
  talentKeys.Outmaneuver,
  talentKeys.RapidAttack,
  talentKeys.FleetFooted,
  talentKeys.QuickDraw,
  talentKeys.RapidFire,
];

export const talentsOther: Array<TalentKey> = [
  talentKeys.Scary,
  talentKeys.Gadget,
  talentKeys.Lucky,
  talentKeys.MythosKnowledge,
  talentKeys.WeirdScience,
  talentKeys.Shadow,
  talentKeys.Handy,
  talentKeys.AnimalCompanion,
  talentKeys.MasterOfDisguise,
  talentKeys.Resourceful,
];

export enum SkillName {
  Accounting = 'Accounting',
  Appraise = 'Appraise',

  AnimalHandling = 'Animal Handling',

  Anthropology = 'Anthropology',
  Archaeology = 'Archaeology',

  ArtCraftCustom = 'Art/Craft, Custom',
  ArtCraftActing = 'Art/Craft, Acting',
  ArtCraftPhotography = 'Art/Craft, Photography',

  Artillery = 'Artillery',
  Charm = 'Charm',
  Climb = 'Climb',
  Cryptography = 'Cryptography',
  ComputerUse = 'Computer Use',
  CreditRating = 'Credit Rating',
  CthulhuMythos = 'Cthulhu Mythos',
  Demolitions = 'Demolitions',
  Disguise = 'Disguise',
  Diving = 'Diving',
  Dodge = 'Dodge',
  DriveAuto = 'Drive Auto',
  ElectricalRepair = 'Electrical Repair',
  FastTalk = 'Fast Talk',

  FightingCustom = 'Fighting, Custom',
  FightingStriking = 'Fighting, Striking',
  FightingGrappling = 'Fighting, Grappling',
  FightingThrows = 'Fighting, Throws',
  FightingDirty = 'Fighting, Dirty',
  FightingStreet = 'Fighting, Street',

  Axe = 'Axe',
  Bow = 'Bow',
  Chainsaw = 'Chainsaw',
  Flail = 'Flail',
  Garrote = 'Garrote',
  Sword = 'Sword',
  Whip = 'Whip',
  Spear = 'Spear',

  FirearmsCustom = 'Firearms, Custom',
  FirearmsHandgun = 'Firearms, Handgun',
  FirearmsRifleShotgun = 'Firearms, Rifle/Shotgun',
  FirearmsSubmachineGun = 'Firearms, Submachine Gun',
  FirearmsMachineGun = 'Firearms, Machine Gun',
  FirearmsFlamethrower = 'Firearms, Flamethrower',
  HeavyWeapons = 'Heavy Weapons',

  FirstAid = 'First Aid',
  History = 'History',
  Hypnosis = 'Hypnosis',
  Intimidate = 'Intimidate',
  Jump = 'Jump',
  LanguageOther = 'Language, Other',
  LanguageOwn = 'Language, Own',
  Law = 'Law',
  LibraryUse = 'Library Use',
  Listen = 'Listen',
  Locksmith = 'Locksmith',
  Lore = 'Lore',
  MechanicalRepair = 'Mechanical Repair',
  Medicine = 'Medicine',
  NaturalWorld = 'Natural World',
  Navigate = 'Navigate',
  Occult = 'Occult',
  HeavyMachinery = 'Heavy Machinery',
  Persuade = 'Persuade',
  Pilot = 'Pilot',
  PsychicClairvoyance = 'Psychic, Clairvoyance', //requires psychic talent
  PsychicDivination = 'Psychic, Divination', //requires psychic talent
  PsychicMedium = 'Psychic, Medium', //requires psychic talent
  PsychicPsychometry = 'Psychic, Psychometry', //requires psychic talent
  PsychicTelekinesis = 'Psychic, Telekinesis', //requires psychic talent
  Psychoanalysis = 'Psychoanalysis',
  Psychology = 'Psychology',

  ReadLips = 'Read Lips',
  Ride = 'Ride',

  ScienceCustom = 'Science, Custom',
  ScienceAstronomy = 'Science, Astronomy',
  ScienceBiology = 'Science, Biology',
  ScienceChemistry = 'Science, Chemistry',
  SciencePhysics = 'Science, Physics',
  ScienceGeology = 'Science, Geology',

  SleightOfHand = 'Sleight of Hand',
  SpotHidden = 'Spot Hidden',
  Stealth = 'Stealth',
  Survival = 'Survival',
  Swim = 'Swim',
  Throw = 'Throw',
  Track = 'Track',
}
export type SkillKey = keyof typeof SkillName;
export const skillKeys = keyReference(SkillName);

export const skillsFighting: Array<SkillKey> = [
  skillKeys.FightingCustom,
  skillKeys.FightingGrappling,
  skillKeys.FightingStriking,
  skillKeys.FightingThrows,
  skillKeys.FightingDirty,
  skillKeys.FightingStreet,
];

export const skillsFirearms: Array<SkillKey> = [
  skillKeys.FirearmsCustom,
  skillKeys.FirearmsHandgun,
  skillKeys.FirearmsRifleShotgun,
  skillKeys.FirearmsSubmachineGun,
  skillKeys.FirearmsMachineGun,
  skillKeys.FirearmsFlamethrower,
];

export const skillsArtsCrafts: Array<SkillKey> = [
  skillKeys.ArtCraftCustom,
  skillKeys.ArtCraftActing,
  skillKeys.ArtCraftPhotography,
];

export const skillsScience: Array<SkillKey> = [
  skillKeys.ScienceCustom,
  skillKeys.ScienceAstronomy,
  skillKeys.ScienceBiology,
  skillKeys.ScienceChemistry,
  skillKeys.ScienceGeology,
  skillKeys.SciencePhysics,
];
