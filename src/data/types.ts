function keyList<T>(arg: T): Array<keyof typeof arg> {
  return Object.keys(arg).map((val) => {
    return val as keyof typeof arg
  })
}

export enum CreatorSteps {
  archetype = 'Select Archetype',
  occupation = 'Select Occupation',
  talents = 'Select Talents',
  characteristics = 'Roll Characteristics',
  skills = 'Allocate Skills',
}

export const CreatorStepKeys = keyList(CreatorSteps)

export enum Characteristic {
  STR = 'Strength',
  CON = 'Constitution',
  SIZ = 'Size',
  DEX = 'Dexterity',
  APP = 'Appearance',
  INT = 'Intelligence',
  POW = 'Power',
  EDU = 'Education',
}

export const CharacteristicKeys = keyList(Characteristic)

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

export const ArchetypeNameKeys = keyList(ArchetypeName)

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

export const OccupationNameKeys = keyList(OccupationName)

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
  ScienceBiology = 'Science, Geology',
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

export const SkillNameKeys = keyList(SkillName)

export const allFighting = (): Array<SkillName> => {
  return [
    SkillName.FightingCustom,
    SkillName.FightingGrappling,
    SkillName.FightingStriking,
    SkillName.FightingThrows,
    SkillName.FightingDirty,
    SkillName.FightingStreet,
  ]
}

export const allFirearms = (): Array<SkillName> => {
  return [
    SkillName.FirearmsCustom,
    SkillName.FirearmsHandgun,
    SkillName.FirearmsRifleShotgun,
    SkillName.FirearmsSubmachineGun,
    SkillName.FirearmsMachineGun,
    SkillName.FirearmsFlamethrower,
  ]
}

export const allArtsCrafts = (): Array<SkillName> => {
  return [
    SkillName.ArtCraftCustom,
    SkillName.ArtCraftActing,
    SkillName.ArtCraftPhotography,
  ]
}

export const allScience = (): Array<SkillName> => {
  return [
    SkillName.ScienceCustom,
    SkillName.ScienceAstronomy,
    SkillName.ScienceBiology,
    SkillName.ScienceChemistry,
    SkillName.ScienceGeology,
    SkillName.SciencePhysics,
  ]
}
