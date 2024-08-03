import {
  CharacteristicKey,
  charKeys,
  occKeys,
  OccupationKey,
  OccupationName,
  SkillKey,
  skillKeys,
  // ArchetypeName,
} from './types';

export type Occupation = {
  key: OccupationKey;
  name: OccupationName;
  skillFormula: Array<OccupationSkillFormula>;
  idealCharacteristics: Array<CharacteristicKey>;
  creditRatingMin: number;
  creditRatingMax: number;
  contacts: Array<string>;
  skills: Array<SkillKey>;
};

export enum OccupationSkillFormula {
  edu = 'edu',
  eduStr = 'eduStr',
  eduDex = 'eduDex',
  eduPow = 'eduPow',
  eduCon = 'eduCon',
  eduApp = 'eduApp',
  eduSiz = 'eduSiz',
  eduInt = 'eduInt',
}

/**
 * The associated characteristics determining total pts of occupational skills,
 * either EDU X 4 or 2 characteristics X 2 each
 */
export const occSkillChars: {
  [key in OccupationSkillFormula]: Array<CharacteristicKey>;
} = {
  edu: [charKeys.EDU],
  eduStr: [charKeys.EDU, charKeys.STR],
  eduDex: [charKeys.EDU, charKeys.DEX],
  eduPow: [charKeys.EDU, charKeys.POW],
  eduCon: [charKeys.EDU, charKeys.CON],
  eduApp: [charKeys.EDU, charKeys.APP],
  eduSiz: [charKeys.EDU, charKeys.SIZ],
  eduInt: [charKeys.EDU, charKeys.INT],
};

/**
 * Takes the array of occupation skill formulas and returns the array of ideal characteristics
 *
 * @param formulas the array of occupation skill formulas
 */
export const getIdealCharacteristics = (
  formulas: Array<OccupationSkillFormula>
): Array<CharacteristicKey> => {
  let occupationCharacteristics: Array<CharacteristicKey> = [];

  formulas.map((formula) => {
    occSkillChars[formula].map((char: CharacteristicKey) => {
      occupationCharacteristics.push(char);
      return true;
    });
    return true;
  });

  occupationCharacteristics = occupationCharacteristics.filter((char) => {
    return occupationCharacteristics.length === 1 || char !== charKeys.EDU;
  });

  return occupationCharacteristics;
};

const makeOccupation = (
  key: OccupationKey,
  name: OccupationName,
  skillFormula: Array<OccupationSkillFormula>,
  creditRatingMin: number,
  creditRatingMax: number,
  contacts: Array<string>,
  skills: Array<SkillKey>,
): Occupation => {
  const idealCharacteristics = getIdealCharacteristics(skillFormula);
  return {
    key,
    name,
    skillFormula,
    idealCharacteristics,
    creditRatingMin,
    creditRatingMax,
    contacts,
    skills,
  };
};

const actorFilm = makeOccupation(
  occKeys.ActorFilm,
  OccupationName.ActorFilm,
  [OccupationSkillFormula.eduApp],
  0,
  100,
  ['film industry', 'media critics', 'writers'],
  [
    skillKeys.CreditRating, skillKeys.ArtCraftActing, skillKeys.Disguise, skillKeys.DriveAuto, skillKeys.Charm, skillKeys.FastTalk, skillKeys.Intimidate, skillKeys.Persuade, skillKeys.Psychology,
  ],
);

const actorStageRadio = makeOccupation(
  occKeys.ActorStageRadio,
  OccupationName.ActorStageRadio,
  [OccupationSkillFormula.eduApp],
  0,
  100,
  ['theater industry', 'newspaper arts critics', 'actors guild/union'],
  [
    skillKeys.CreditRating, skillKeys.ArtCraftActing, skillKeys.Disguise, skillKeys.FightingCustom, skillKeys.History, skillKeys.Charm, skillKeys.FastTalk, skillKeys.Intimidate, skillKeys.Persuade, skillKeys.Psychology
  ],
);

const agencyDetective = makeOccupation(
  occKeys.AgencyDetective,
  OccupationName.AgencyDetective,
  [OccupationSkillFormula.eduStr, OccupationSkillFormula.eduDex],
  0,
  100,
  ['local law enforcement', 'clients'],
  [
    skillKeys.CreditRating, skillKeys.Charm, skillKeys.FastTalk, skillKeys.Intimidate, skillKeys.Persuade, skillKeys.FightingCustom, skillKeys.FirearmsCustom, skillKeys.Law, skillKeys.LibraryUse, skillKeys.Psychology, skillKeys.Stealth, skillKeys.Track
  ]
);

const archaeologist = makeOccupation(
  occKeys.Archaeologist,
  OccupationName.Archaeologist,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.Appraise, skillKeys.Archaeology, skillKeys.History, skillKeys.LanguageOther, skillKeys.LibraryUse, skillKeys.SpotHidden, skillKeys.MechanicalRepair, skillKeys.Navigate, skillKeys.ScienceCustom
  ]
);

const artist = makeOccupation(
  occKeys.Artist,
  OccupationName.Artist,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduPow],
  0,
  100,
  [
  ],
  [
    skillKeys.CreditRating, skillKeys.ArtCraftCustom, skillKeys.History, skillKeys.NaturalWorld, skillKeys.Charm, skillKeys.FastTalk, skillKeys.Intimidate, skillKeys.Persuade, skillKeys.LanguageOther, skillKeys.Psychology, skillKeys.SpotHidden
  ]
);

const athlete = makeOccupation(
  occKeys.Athlete,
  OccupationName.Athlete,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.Climb, skillKeys.Jump, skillKeys.FightingCustom, skillKeys.Ride, skillKeys.Charm, skillKeys.FastTalk, skillKeys.Intimidate, skillKeys.Persuade, skillKeys.Swim, skillKeys.Throw
  ]
);

const author = makeOccupation(
  occKeys.Author,
  OccupationName.Author,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.ArtCraftCustom, skillKeys.History, skillKeys.LibraryUse, skillKeys.NaturalWorld, skillKeys.Occult, skillKeys.LanguageOther, skillKeys.LanguageOwn, skillKeys.Psychology

  ]
);

const aviator = makeOccupation(
  occKeys.Aviator,
  OccupationName.Aviator,
  [OccupationSkillFormula.eduDex],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.Accounting, skillKeys.ElectricalRepair, skillKeys.Listen, skillKeys.MechanicalRepair, skillKeys.Navigate, skillKeys.Pilot, skillKeys.SpotHidden
  ]
);

const bankRobber = makeOccupation(
  occKeys.BankRobber,
  OccupationName.BankRobber,
  [OccupationSkillFormula.eduStr, OccupationSkillFormula.eduDex],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.DriveAuto, skillKeys.ElectricalRepair, skillKeys.MechanicalRepair, skillKeys.FightingCustom, skillKeys.FirearmsCustom, skillKeys.Intimidate, skillKeys.Locksmith, skillKeys.HeavyMachinery
  ]
);

const bartenderWaitress = makeOccupation(
  occKeys.BartenderWaitress,
  OccupationName.BartenderWaitress,
  [OccupationSkillFormula.eduApp],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.Accounting, skillKeys.Charm, skillKeys.FastTalk, skillKeys.Intimidate, skillKeys.Persuade, skillKeys.FightingCustom, skillKeys.Listen, skillKeys.Psychology, skillKeys.SpotHidden
  ]
);

const beatCop = makeOccupation(
  occKeys.BeatCop,
  OccupationName.BeatCop,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.FightingCustom, skillKeys.FirearmsCustom, skillKeys.FirstAid, skillKeys.Charm, skillKeys.FastTalk, skillKeys.Intimidate, skillKeys.Persuade, skillKeys.Law, skillKeys.Psychology, skillKeys.SpotHidden
  ]
);

const bigGameHunter = makeOccupation(
  occKeys.BigGameHunter,
  OccupationName.BigGameHunter,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.FirearmsCustom, skillKeys.Listen, skillKeys.SpotHidden, skillKeys.NaturalWorld, skillKeys.Navigate, skillKeys.LanguageOther, skillKeys.Survival, skillKeys.ScienceCustom, skillKeys.Stealth, skillKeys.Track
  ]
);

const bountyHunter = makeOccupation(
  occKeys.BountyHunter,
  OccupationName.BountyHunter,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.DriveAuto, skillKeys.MechanicalRepair, skillKeys.ElectricalRepair, skillKeys.FightingCustom, skillKeys.FirearmsCustom, skillKeys.FastTalk, skillKeys.Charm, skillKeys.Intimidate, skillKeys.Persuade, skillKeys.Law, skillKeys.Psychology, skillKeys.Track, skillKeys.Stealth
  ]
);

const boxerWrestler = makeOccupation(
  occKeys.BoxerWrestler,
  OccupationName.BoxerWrestler,
  [OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.Dodge, skillKeys.FightingCustom, skillKeys.Intimidate, skillKeys.Jump, skillKeys.Psychology, skillKeys.SpotHidden
  ]
);

const butler = makeOccupation(
  occKeys.Butler,
  OccupationName.Butler,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.Accounting, skillKeys.Appraise, skillKeys.ArtCraftCustom, skillKeys.FirstAid, skillKeys.Listen, skillKeys.LanguageOther, skillKeys.Psychology, skillKeys.SpotHidden
  ]
);

const catBurglar = makeOccupation(
  occKeys.CatBurglar,
  OccupationName.CatBurglar,
  [OccupationSkillFormula.eduDex],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.Appraise, skillKeys.Climb, skillKeys.ElectricalRepair, skillKeys.MechanicalRepair, skillKeys.Listen, skillKeys.Locksmith, skillKeys.SleightOfHand, skillKeys.Stealth, skillKeys.SpotHidden
  ]
);

const chauffeur = makeOccupation(
  occKeys.Chauffeur,
  OccupationName.Chauffeur,
  [OccupationSkillFormula.eduDex],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.DriveAuto, skillKeys.Charm, skillKeys.FastTalk, skillKeys.Intimidate, skillKeys.Persuade, skillKeys.Listen, skillKeys.MechanicalRepair, skillKeys.Navigate, skillKeys.SpotHidden
  ]
);

const confidenceTrickster = makeOccupation(
  occKeys.ConfidenceTrickster,
  OccupationName.ConfidenceTrickster,
  [OccupationSkillFormula.eduApp],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.Appraise, skillKeys.ArtCraftActing, skillKeys.Law, skillKeys.LanguageOther, skillKeys.Listen, skillKeys.Charm, skillKeys.Intimidate, skillKeys.FastTalk, skillKeys.Persuade, skillKeys.Psychology, skillKeys.SleightOfHand
  ]
);

const criminal = makeOccupation(
  occKeys.Criminal,
  OccupationName.Criminal,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduApp],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.ArtCraftCustom, skillKeys.Disguise, skillKeys.Appraise, skillKeys.Charm, skillKeys.FastTalk, skillKeys.Intimidate, skillKeys.FightingCustom, skillKeys.FirearmsCustom, skillKeys.Locksmith, skillKeys.MechanicalRepair, skillKeys.Stealth, skillKeys.Psychology, skillKeys.SpotHidden
  ]
);

const cultLeader = makeOccupation(
  occKeys.CultLeader,
  OccupationName.CultLeader,
  [OccupationSkillFormula.eduApp],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.Accounting, skillKeys.Charm, skillKeys.FastTalk, skillKeys.Intimidate, skillKeys.Persuade, skillKeys.Occult, skillKeys.Psychology, skillKeys.SpotHidden
  ]
);

const dilettante = makeOccupation(
  occKeys.Dilettante,
  OccupationName.Dilettante,
  [OccupationSkillFormula.eduApp],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.ArtCraftCustom, skillKeys.FirearmsCustom, skillKeys.LanguageOther, skillKeys.Ride, skillKeys.Charm, skillKeys.FastTalk, skillKeys.Intimidate, skillKeys.Persuade
  ]
);

const doctorOfMedicine = makeOccupation(
  occKeys.DoctorOfMedicine,
  OccupationName.DoctorOfMedicine,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.FirstAid, skillKeys.Medicine, skillKeys.LanguageOther, skillKeys.Psychology, skillKeys.ScienceCustom
  ]
);

const drifter = makeOccupation(
  occKeys.Drifter,
  OccupationName.Drifter,
  [
    OccupationSkillFormula.eduApp,
    OccupationSkillFormula.eduDex,
    OccupationSkillFormula.eduStr,
  ],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.Climb, skillKeys.Jump, skillKeys.Listen, skillKeys.Navigate, skillKeys.Charm, skillKeys.FastTalk, skillKeys.Intimidate, skillKeys.Persuade, skillKeys.Stealth
  ]
);

const electedOfficial = makeOccupation(
  occKeys.ElectedOfficial,
  OccupationName.ElectedOfficial,
  [OccupationSkillFormula.eduApp],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.Charm, skillKeys.History, skillKeys.Intimidate, skillKeys.FastTalk, skillKeys.Listen, skillKeys.LanguageOwn, skillKeys.Persuade, skillKeys.Psychology
  ]
);

const engineer = makeOccupation(
  occKeys.Engineer,
  OccupationName.Engineer,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.ArtCraftCustom, skillKeys.ElectricalRepair, skillKeys.LibraryUse, skillKeys.MechanicalRepair, skillKeys.HeavyMachinery, skillKeys.ScienceCustom
  ]
);

const entertainer = makeOccupation(
  occKeys.Entertainer,
  OccupationName.Entertainer,
  [OccupationSkillFormula.eduApp],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.ArtCraftCustom, skillKeys.Disguise, skillKeys.Charm, skillKeys.FastTalk, skillKeys.Intimidate, skillKeys.Persuade, skillKeys.Listen, skillKeys.Psychology
  ]
);

const exorcist = makeOccupation(
  occKeys.Exorcist,
  OccupationName.Exorcist,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.Anthropology, skillKeys.History, skillKeys.LibraryUse, skillKeys.Listen, skillKeys.Occult, skillKeys.LanguageOther, skillKeys.Psychology
  ]
);

const explorer = makeOccupation(
  occKeys.Explorer,
  OccupationName.Explorer,
  [
    OccupationSkillFormula.eduApp,
    OccupationSkillFormula.eduDex,
    OccupationSkillFormula.eduStr,
  ],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.Climb, skillKeys.Swim, skillKeys.FirearmsCustom, skillKeys.History, skillKeys.Jump, skillKeys.NaturalWorld, skillKeys.Navigate, skillKeys.LanguageOther, skillKeys.Survival
  ]
);

const federalAgent = makeOccupation(
  occKeys.FederalAgent,
  OccupationName.FederalAgent,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.DriveAuto, skillKeys.FightingCustom, skillKeys.FirearmsCustom, skillKeys.Law, skillKeys.Persuade, skillKeys.Stealth, skillKeys.SpotHidden
  ]
);

const gambler = makeOccupation(
  occKeys.Gambler,
  OccupationName.Gambler,
  [OccupationSkillFormula.eduApp, OccupationSkillFormula.eduDex],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.Accounting, skillKeys.ArtCraftActing, skillKeys.Charm, skillKeys.FastTalk, skillKeys.Intimidate, skillKeys.Persuade, skillKeys.Listen, skillKeys.Psychology, skillKeys.SleightOfHand, skillKeys.SpotHidden
  ]
);

const gangsterBoss = makeOccupation(
  occKeys.GangsterBoss,
  OccupationName.GangsterBoss,
  [OccupationSkillFormula.eduApp],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.FightingCustom, skillKeys.FirearmsCustom, skillKeys.Law, skillKeys.Listen, skillKeys.Charm, skillKeys.FastTalk, skillKeys.Intimidate, skillKeys.Persuade, skillKeys.Psychology, skillKeys.SpotHidden
  ]
);

const gangsterUnderling = makeOccupation(
  occKeys.GangsterUnderling,
  OccupationName.GangsterUnderling,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.DriveAuto, skillKeys.FightingCustom, skillKeys.FirearmsCustom, skillKeys.Charm, skillKeys.FastTalk, skillKeys.Intimidate, skillKeys.Persuade, skillKeys.Psychology
  ]
);

const getAwayDriver = makeOccupation(
  occKeys.GetAwayDriver,
  OccupationName.GetAwayDriver,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.Accounting, skillKeys.DriveAuto, skillKeys.Listen, skillKeys.Charm, skillKeys.FastTalk, skillKeys.Intimidate, skillKeys.Persuade, skillKeys.MechanicalRepair, skillKeys.Navigate, skillKeys.Psychology
  ]
);

const gunMoll = makeOccupation(
  occKeys.GunMoll,
  OccupationName.GunMoll,
  [OccupationSkillFormula.eduApp],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.ArtCraftCustom, skillKeys.Charm, skillKeys.Intimidate, skillKeys.FastTalk, skillKeys.Persuade, skillKeys.FightingCustom, skillKeys.FirearmsCustom, skillKeys.DriveAuto, skillKeys.Listen, skillKeys.Stealth
  ]
);

const gentlemanOrLady = makeOccupation(
  occKeys.GentlemanOrLady,
  OccupationName.GentlemanOrLady,
  [OccupationSkillFormula.eduApp],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.ArtCraftCustom, skillKeys.Charm, skillKeys.FastTalk, skillKeys.Intimidate, skillKeys.Persuade, skillKeys.FirearmsCustom, skillKeys.History, skillKeys.LanguageOther, skillKeys.Navigate, skillKeys.Ride
  ]
);

const hiredMuscle = makeOccupation(
  occKeys.HiredMuscle,
  OccupationName.HiredMuscle,
  [OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.DriveAuto, skillKeys.FightingCustom, skillKeys.FirearmsCustom, skillKeys.Charm, skillKeys.FastTalk, skillKeys.Intimidate, skillKeys.Persuade, skillKeys.Psychology, skillKeys.Stealth, skillKeys.SpotHidden
  ]
);

const hitMan = makeOccupation(
  occKeys.HitMan,
  OccupationName.HitMan,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.Disguise, skillKeys.ElectricalRepair, skillKeys.FightingCustom, skillKeys.FirearmsCustom, skillKeys.Locksmith, skillKeys.MechanicalRepair, skillKeys.Stealth, skillKeys.Psychology
  ]
);

const hobo = makeOccupation(
  occKeys.Hobo,
  OccupationName.Hobo,
  [OccupationSkillFormula.eduApp, OccupationSkillFormula.eduDex],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.ArtCraftCustom, skillKeys.Climb, skillKeys.Jump, skillKeys.Listen, skillKeys.Locksmith, skillKeys.SleightOfHand, skillKeys.Navigate, skillKeys.Stealth
  ]
);

const hooker = makeOccupation(
  occKeys.Hooker,
  OccupationName.Hooker,
  [OccupationSkillFormula.eduApp],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.ArtCraftCustom, skillKeys.Charm, skillKeys.FastTalk, skillKeys.Intimidate, skillKeys.Persuade, skillKeys.Dodge, skillKeys.Psychology, skillKeys.SleightOfHand, skillKeys.Stealth
  ]
);

const itinerantWorker = makeOccupation(
  occKeys.ItinerantWorker,
  OccupationName.ItinerantWorker,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.ArtCraftCustom, skillKeys.Climb, skillKeys.SleightOfHand, skillKeys.MechanicalRepair, skillKeys.NaturalWorld, skillKeys.Navigate
  ]
);

const investigativeJournalist = makeOccupation(
  occKeys.InvestigativeJournalist,
  OccupationName.InvestigativeJournalist,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.ArtCraftPhotography, skillKeys.Charm, skillKeys.FastTalk, skillKeys.Intimidate, skillKeys.Persuade, skillKeys.History, skillKeys.LibraryUse, skillKeys.LanguageOwn, skillKeys.Psychology
  ]
);

const laborer = makeOccupation(
  occKeys.Laborer,
  OccupationName.Laborer,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.DriveAuto, skillKeys.ElectricalRepair, skillKeys.FightingCustom, skillKeys.FirstAid, skillKeys.MechanicalRepair, skillKeys.HeavyMachinery, skillKeys.Throw
  ]
);

const librarian = makeOccupation(
  occKeys.Librarian,
  OccupationName.Librarian,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.Accounting, skillKeys.LibraryUse, skillKeys.LanguageOther, skillKeys.LanguageOwn
  ]
);

const mechanic = makeOccupation(
  occKeys.Mechanic,
  OccupationName.Mechanic,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.ArtCraftCustom, skillKeys.Climb, skillKeys.DriveAuto, skillKeys.ElectricalRepair, skillKeys.MechanicalRepair, skillKeys.HeavyMachinery
  ]
);

const militaryOfficer = makeOccupation(
  occKeys.MilitaryOfficer,
  OccupationName.MilitaryOfficer,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.Accounting, skillKeys.FirearmsCustom, skillKeys.Navigate, skillKeys.FirstAid, skillKeys.Charm, skillKeys.FastTalk, skillKeys.Intimidate, skillKeys.Persuade, skillKeys.Psychology
  ]
);

const missionary = makeOccupation(
  occKeys.Missionary,
  OccupationName.Missionary,
  [OccupationSkillFormula.eduApp],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.ArtCraftCustom, skillKeys.FirstAid, skillKeys.MechanicalRepair, skillKeys.Medicine, skillKeys.NaturalWorld, skillKeys.Charm, skillKeys.FastTalk, skillKeys.Intimidate, skillKeys.Persuade
  ]
);

const musician = makeOccupation(
  occKeys.Musician,
  OccupationName.Musician,
  [OccupationSkillFormula.eduApp, OccupationSkillFormula.eduDex],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.ArtCraftCustom, skillKeys.Charm, skillKeys.FastTalk, skillKeys.Intimidate, skillKeys.Persuade, skillKeys.Listen, skillKeys.Psychology
  ]
);

const nurse = makeOccupation(
  occKeys.Nurse,
  OccupationName.Nurse,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.FirstAid, skillKeys.Listen, skillKeys.Medicine, skillKeys.Charm, skillKeys.FastTalk, skillKeys.Intimidate, skillKeys.Persuade, skillKeys.Psychology, skillKeys.ScienceCustom, skillKeys.SpotHidden
  ]
);

const occultist = makeOccupation(
  occKeys.Occultist,
  OccupationName.Occultist,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.Anthropology, skillKeys.History, skillKeys.LibraryUse, skillKeys.Charm, skillKeys.FastTalk, skillKeys.Intimidate, skillKeys.Persuade, skillKeys.Occult, skillKeys.LanguageOther, skillKeys.ScienceAstronomy
  ]
);

const parapsychologist = makeOccupation(
  occKeys.Parapsychologist,
  OccupationName.Parapsychologist,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.Anthropology, skillKeys.ArtCraftPhotography, skillKeys.History, skillKeys.LibraryUse, skillKeys.Occult, skillKeys.LanguageOther, skillKeys.Psychology
  ]
);

const photographer = makeOccupation(
  occKeys.Photographer,
  OccupationName.Photographer,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.ArtCraftPhotography, skillKeys.Charm, skillKeys.FastTalk, skillKeys.Intimidate, skillKeys.Persuade, skillKeys.Psychology, skillKeys.ScienceChemistry, skillKeys.Stealth, skillKeys.SpotHidden
  ]
);

const policeDetective = makeOccupation(
  occKeys.PoliceDetective,
  OccupationName.PoliceDetective,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.ArtCraftActing, skillKeys.Disguise, skillKeys.FirearmsCustom, skillKeys.Law, skillKeys.Listen, skillKeys.Charm, skillKeys.FastTalk, skillKeys.Intimidate, skillKeys.Persuade, skillKeys.Psychology, skillKeys.SpotHidden
  ]
);

const priest = makeOccupation(
  occKeys.Priest,
  OccupationName.Priest,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.Accounting, skillKeys.History, skillKeys.LibraryUse, skillKeys.Listen, skillKeys.LanguageOther, skillKeys.Charm, skillKeys.FastTalk, skillKeys.Intimidate, skillKeys.Persuade, skillKeys.Psychology
  ]
);

const privateInvestigator = makeOccupation(
  occKeys.PrivateInvestigator,
  OccupationName.PrivateInvestigator,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.ArtCraftPhotography, skillKeys.Disguise, skillKeys.Law, skillKeys.LibraryUse, skillKeys.Charm, skillKeys.FastTalk, skillKeys.Intimidate, skillKeys.Persuade, skillKeys.Psychology, skillKeys.SpotHidden
  ]
);

const professor = makeOccupation(
  occKeys.Professor,
  OccupationName.Professor,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.LibraryUse, skillKeys.LanguageOther, skillKeys.LanguageOwn, skillKeys.Psychology
  ]
);

const ranger = makeOccupation(
  occKeys.Ranger,
  OccupationName.Ranger,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.FirearmsCustom, skillKeys.FirstAid, skillKeys.Listen, skillKeys.NaturalWorld, skillKeys.Navigate, skillKeys.SpotHidden, skillKeys.Survival, skillKeys.Track
  ]
);

const reporter = makeOccupation(
  occKeys.Reporter,
  OccupationName.Reporter,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.ArtCraftActing, skillKeys.ArtCraftPhotography, skillKeys.History, skillKeys.Listen, skillKeys.LanguageOwn, skillKeys.Charm, skillKeys.FastTalk, skillKeys.Intimidate, skillKeys.Persuade, skillKeys.Psychology, skillKeys.Stealth, skillKeys.SpotHidden
  ]
);

const sailor = makeOccupation(
  occKeys.Sailor,
  OccupationName.Sailor,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.ElectricalRepair, skillKeys.MechanicalRepair, skillKeys.FightingCustom, skillKeys.FirearmsCustom, skillKeys.FirstAid, skillKeys.Navigate, skillKeys.Pilot, skillKeys.Survival, skillKeys.Swim
  ]
);

const scientist = makeOccupation(
  occKeys.Scientist,
  OccupationName.Scientist,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.ScienceCustom, skillKeys.ComputerUse, skillKeys.LibraryUse, skillKeys.LanguageOther, skillKeys.LanguageOwn, skillKeys.Charm, skillKeys.FastTalk, skillKeys.Intimidate, skillKeys.Persuade, skillKeys.SpotHidden
  ]
);

const secretary = makeOccupation(
  occKeys.Secretary,
  OccupationName.Secretary,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduApp],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.Accounting, skillKeys.ArtCraftCustom, skillKeys.Charm, skillKeys.FastTalk, skillKeys.Intimidate, skillKeys.Persuade, skillKeys.LanguageOwn, skillKeys.LibraryUse, skillKeys.ComputerUse, skillKeys.Psychology
  ]
);

const soldier = makeOccupation(
  occKeys.Soldier,
  OccupationName.Soldier,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.Climb, skillKeys.Swim, skillKeys.Dodge, skillKeys.FightingCustom, skillKeys.FirearmsCustom, skillKeys.Stealth, skillKeys.Survival, skillKeys.FirstAid, skillKeys.MechanicalRepair, skillKeys.LanguageOther
  ]
);

const spy = makeOccupation(
  occKeys.Spy,
  OccupationName.Spy,
  [OccupationSkillFormula.eduApp, OccupationSkillFormula.eduDex],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.ArtCraftActing, skillKeys.Disguise, skillKeys.FirearmsCustom, skillKeys.Listen, skillKeys.LanguageOther, skillKeys.Charm, skillKeys.FastTalk, skillKeys.Intimidate, skillKeys.Persuade, skillKeys.Psychology, skillKeys.SleightOfHand, skillKeys.Stealth
  ]
);

const streetPunk = makeOccupation(
  occKeys.StreetPunk,
  OccupationName.StreetPunk,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.Climb, skillKeys.Charm, skillKeys.FastTalk, skillKeys.Intimidate, skillKeys.Persuade, skillKeys.FightingCustom, skillKeys.FirearmsCustom, skillKeys.Jump, skillKeys.SleightOfHand, skillKeys.Stealth, skillKeys.Throw
  ]
);

const studentIntern = makeOccupation(
  occKeys.StudentIntern,
  OccupationName.StudentIntern,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.LanguageOther, skillKeys.LanguageOwn, skillKeys.LibraryUse, skillKeys.Listen
  ]
);

const tribeMember = makeOccupation(
  occKeys.TribeMember,
  OccupationName.TribeMember,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.Climb, skillKeys.FightingCustom, skillKeys.Throw, skillKeys.Listen, skillKeys.NaturalWorld, skillKeys.Occult, skillKeys.SpotHidden, skillKeys.Swim, skillKeys.Survival
  ]
);

const unionActivist = makeOccupation(
  occKeys.UnionActivist,
  OccupationName.UnionActivist,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  [
    skillKeys.CreditRating, skillKeys.Accounting, skillKeys.Charm, skillKeys.FastTalk, skillKeys.Intimidate, skillKeys.Persuade, skillKeys.FightingCustom, skillKeys.Law, skillKeys.Listen, skillKeys.HeavyMachinery, skillKeys.Psychology
  ]
);

const yogi = makeOccupation(
  occKeys.Yogi,
  OccupationName.Yogi,
  [OccupationSkillFormula.edu],
  6,
  60,
  [],
  [
    skillKeys.CreditRating, skillKeys.FirstAid, skillKeys.History, skillKeys.Charm, skillKeys.FastTalk, skillKeys.Intimidate, skillKeys.Persuade, skillKeys.NaturalWorld, skillKeys.Occult, skillKeys.LanguageOther
  ]
);

const zealot = makeOccupation(
  occKeys.Zealot,
  OccupationName.Zealot,
  [OccupationSkillFormula.eduApp, OccupationSkillFormula.eduPow],
  0,
  30,
  [],
  [
    skillKeys.CreditRating, skillKeys.History, skillKeys.Charm, skillKeys.FastTalk, skillKeys.Intimidate, skillKeys.Persuade, skillKeys.Psychology, skillKeys.Stealth
  ]
);

export const occupations: {
  [key in keyof typeof OccupationName]: Occupation;
} = {
  ActorFilm: actorFilm,
  ActorStageRadio: actorStageRadio,
  AgencyDetective: agencyDetective,
  Archaeologist: archaeologist,
  Artist: artist,
  Athlete: athlete,
  Author: author,
  Aviator: aviator,
  BankRobber: bankRobber,
  BartenderWaitress: bartenderWaitress,
  BeatCop: beatCop,
  BigGameHunter: bigGameHunter,
  BountyHunter: bountyHunter,
  BoxerWrestler: boxerWrestler,
  Butler: butler,
  CatBurglar: catBurglar,
  Chauffeur: chauffeur,
  ConfidenceTrickster: confidenceTrickster,
  Criminal: criminal,
  CultLeader: cultLeader,
  Dilettante: dilettante,
  DoctorOfMedicine: doctorOfMedicine,
  Drifter: drifter,
  ElectedOfficial: electedOfficial,
  Engineer: engineer,
  Entertainer: entertainer,
  Exorcist: exorcist,
  Explorer: explorer,
  FederalAgent: federalAgent,
  Gambler: gambler,
  GangsterBoss: gangsterBoss,
  GangsterUnderling: gangsterUnderling,
  GetAwayDriver: getAwayDriver,
  GunMoll: gunMoll,
  GentlemanOrLady: gentlemanOrLady,
  HiredMuscle: hiredMuscle,
  HitMan: hitMan,
  Hobo: hobo,
  Hooker: hooker,
  ItinerantWorker: itinerantWorker,
  InvestigativeJournalist: investigativeJournalist,
  Laborer: laborer,
  Librarian: librarian,
  Mechanic: mechanic,
  MilitaryOfficer: militaryOfficer,
  Missionary: missionary,
  Musician: musician,
  Nurse: nurse,
  Occultist: occultist,
  Parapsychologist: parapsychologist,
  Photographer: photographer,
  PoliceDetective: policeDetective,
  Priest: priest,
  PrivateInvestigator: privateInvestigator,
  Professor: professor,
  Ranger: ranger,
  Reporter: reporter,
  Sailor: sailor,
  Scientist: scientist,
  Secretary: secretary,
  Soldier: soldier,
  Spy: spy,
  StreetPunk: streetPunk,
  StudentIntern: studentIntern,
  TribeMember: tribeMember,
  UnionActivist: unionActivist,
  Yogi: yogi,
  Zealot: zealot,
};

export const occupationList = Object.values(occupations).map((val) => {
  return val as Occupation;
});
