import {
  CharacteristicKey,
  charKeys,
  occKeys,
  OccupationKey,
  OccupationName,
  SkillKey,
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
  skills: Array<SkillKey>
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
    //'Art/Craft (Acting), Disguise, Drive Auto, two interpersonal skills (Charm, Fast Talk,  Intimidate, or Persuade), Psychology,  any two other skills as personal or era specialties (e.g. Ride or Fighting).',
  ]
);

const actorStageRadio = makeOccupation(
  occKeys.ActorStageRadio,
  OccupationName.ActorStageRadio,
  [OccupationSkillFormula.eduApp],
  0,
  100,
  ['theater industry', 'newspaper arts critics', 'actors guild/union'],
  [
    //Art/Craft (Acting), Disguise, Fighting, History, two interpersonal skills (Charm, Fast Talk, Intimidate, or Persuade), Psychology, any one other skill as a personal or era specialty.
  ]
);

const agencyDetective = makeOccupation(
  occKeys.AgencyDetective,
  OccupationName.AgencyDetective,
  [OccupationSkillFormula.eduStr, OccupationSkillFormula.eduDex],
  0,
  100,
  ['local law enforcement', 'clients'],
  [
    /**
     * One interpersonal skill (Charm, Fast Talk, Intimidate,
or Persuade), Fighting (Brawl), Firearms, Law, Library Use,
Psychology, Stealth, Track.
     */
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
    /**
Appraise, Archaeology, History, Other Language (any), Library Use, Spot Hidden, Mechanical Repair, Navigate or Science (e.g. chemistry, physics, geology, etc.)
*/
  ]
);

const artist = makeOccupation(
  occKeys.Artist,
  OccupationName.Artist,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduPow],
  0,
  100,
  [],
  []
);

const athlete = makeOccupation(
  occKeys.Athlete,
  OccupationName.Athlete,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  []
);

const author = makeOccupation(
  occKeys.Author,
  OccupationName.Author,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  []
);

const aviator = makeOccupation(
  occKeys.Aviator,
  OccupationName.Aviator,
  [OccupationSkillFormula.eduDex],
  0,
  100,
  [],
  []
);

const bankRobber = makeOccupation(
  occKeys.BankRobber,
  OccupationName.BankRobber,
  [OccupationSkillFormula.eduStr, OccupationSkillFormula.eduDex],
  0,
  100,
  [],
  []
);

const bartenderWaitress = makeOccupation(
  occKeys.BartenderWaitress,
  OccupationName.BartenderWaitress,
  [OccupationSkillFormula.eduApp],
  0,
  100,
  [],
  []
);

const beatCop = makeOccupation(
  occKeys.BeatCop,
  OccupationName.BeatCop,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  []
);

const bigGameHunter = makeOccupation(
  occKeys.BigGameHunter,
  OccupationName.BigGameHunter,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  []
);

const bountyHunter = makeOccupation(
  occKeys.BountyHunter,
  OccupationName.BountyHunter,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  []
);

const boxerWrestler = makeOccupation(
  occKeys.BoxerWrestler,
  OccupationName.BoxerWrestler,
  [OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  []
);

const butler = makeOccupation(
  occKeys.Butler,
  OccupationName.Butler,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  []
);

const catBurglar = makeOccupation(
  occKeys.CatBurglar,
  OccupationName.CatBurglar,
  [OccupationSkillFormula.eduDex],
  0,
  100,
  [],
  []
);

const chauffeur = makeOccupation(
  occKeys.Chauffeur,
  OccupationName.Chauffeur,
  [OccupationSkillFormula.eduDex],
  0,
  100,
  [],
  []
);

const confidenceTrickster = makeOccupation(
  occKeys.ConfidenceTrickster,
  OccupationName.ConfidenceTrickster,
  [OccupationSkillFormula.eduApp],
  0,
  100,
  [],
  []
);

const criminal = makeOccupation(
  occKeys.Criminal,
  OccupationName.Criminal,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduApp],
  0,
  100,
  [],
  []
);

const cultLeader = makeOccupation(
  occKeys.CultLeader,
  OccupationName.CultLeader,
  [OccupationSkillFormula.eduApp],
  0,
  100,
  [],
  []
);

const dilettante = makeOccupation(
  occKeys.Dilettante,
  OccupationName.Dilettante,
  [OccupationSkillFormula.eduApp],
  0,
  100,
  [],
  []
);

const doctorOfMedicine = makeOccupation(
  occKeys.DoctorOfMedicine,
  OccupationName.DoctorOfMedicine,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  []
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
  []
);

const electedOfficial = makeOccupation(
  occKeys.ElectedOfficial,
  OccupationName.ElectedOfficial,
  [OccupationSkillFormula.eduApp],
  0,
  100,
  [],
  []
);

const engineer = makeOccupation(
  occKeys.Engineer,
  OccupationName.Engineer,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  []
);

const entertainer = makeOccupation(
  occKeys.Entertainer,
  OccupationName.Entertainer,
  [OccupationSkillFormula.eduApp],
  0,
  100,
  [],
  []
);

const exorcist = makeOccupation(
  occKeys.Exorcist,
  OccupationName.Exorcist,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  []
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
  []
);

const federalAgent = makeOccupation(
  occKeys.FederalAgent,
  OccupationName.FederalAgent,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  []
);

const gambler = makeOccupation(
  occKeys.Gambler,
  OccupationName.Gambler,
  [OccupationSkillFormula.eduApp, OccupationSkillFormula.eduDex],
  0,
  100,
  [],
  []
);

const gangsterBoss = makeOccupation(
  occKeys.GangsterBoss,
  OccupationName.GangsterBoss,
  [OccupationSkillFormula.eduApp],
  0,
  100,
  [],
  []
);

const gangsterUnderling = makeOccupation(
  occKeys.GangsterUnderling,
  OccupationName.GangsterUnderling,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  []
);

const getAwayDriver = makeOccupation(
  occKeys.GetAwayDriver,
  OccupationName.GetAwayDriver,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  []
);

const gunMoll = makeOccupation(
  occKeys.GunMoll,
  OccupationName.GunMoll,
  [OccupationSkillFormula.eduApp],
  0,
  100,
  [],
  []
);

const gentlemanOrLady = makeOccupation(
  occKeys.GentlemanOrLady,
  OccupationName.GentlemanOrLady,
  [OccupationSkillFormula.eduApp],
  0,
  100,
  [],
  []
);

const hiredMuscle = makeOccupation(
  occKeys.HiredMuscle,
  OccupationName.HiredMuscle,
  [OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  []
);

const hitMan = makeOccupation(
  occKeys.HitMan,
  OccupationName.HitMan,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  []
);

const hobo = makeOccupation(
  occKeys.Hobo,
  OccupationName.Hobo,
  [OccupationSkillFormula.eduApp, OccupationSkillFormula.eduDex],
  0,
  100,
  [],
  []
);

const hooker = makeOccupation(
  occKeys.Hooker,
  OccupationName.Hooker,
  [OccupationSkillFormula.eduApp],
  0,
  100,
  [],
  []
);

const itinerantWorker = makeOccupation(
  occKeys.ItinerantWorker,
  OccupationName.ItinerantWorker,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  []
);

const investigativeJournalist = makeOccupation(
  occKeys.InvestigativeJournalist,
  OccupationName.InvestigativeJournalist,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  []
);

const laborer = makeOccupation(
  occKeys.Laborer,
  OccupationName.Laborer,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  []
);

const librarian = makeOccupation(
  occKeys.Librarian,
  OccupationName.Librarian,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  []
);

const mechanic = makeOccupation(
  occKeys.Mechanic,
  OccupationName.Mechanic,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  []
);

const militaryOfficer = makeOccupation(
  occKeys.MilitaryOfficer,
  OccupationName.MilitaryOfficer,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  []
);

const missionary = makeOccupation(
  occKeys.Missionary,
  OccupationName.Missionary,
  [OccupationSkillFormula.eduApp],
  0,
  100,
  [],
  []
);

const musician = makeOccupation(
  occKeys.Musician,
  OccupationName.Musician,
  [OccupationSkillFormula.eduApp, OccupationSkillFormula.eduDex],
  0,
  100,
  [],
  []
);

const nurse = makeOccupation(
  occKeys.Nurse,
  OccupationName.Nurse,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  []
);

const occultist = makeOccupation(
  occKeys.Occultist,
  OccupationName.Occultist,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  []
);

const parapsychologist = makeOccupation(
  occKeys.Parapsychologist,
  OccupationName.Parapsychologist,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  []
);

const photographer = makeOccupation(
  occKeys.Photographer,
  OccupationName.Photographer,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  []
);

const policeDetective = makeOccupation(
  occKeys.PoliceDetective,
  OccupationName.PoliceDetective,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  []
);

const priest = makeOccupation(
  occKeys.Priest,
  OccupationName.Priest,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  []
);

const privateInvestigator = makeOccupation(
  occKeys.PrivateInvestigator,
  OccupationName.PrivateInvestigator,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  []
);

const professor = makeOccupation(
  occKeys.Professor,
  OccupationName.Professor,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  []
);

const ranger = makeOccupation(
  occKeys.Ranger,
  OccupationName.Ranger,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  []
);

const reporter = makeOccupation(
  occKeys.Reporter,
  OccupationName.Reporter,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  []
);

const sailor = makeOccupation(
  occKeys.Sailor,
  OccupationName.Sailor,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  []
);

const scientist = makeOccupation(
  occKeys.Scientist,
  OccupationName.Scientist,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  []
);

const secretary = makeOccupation(
  occKeys.Secretary,
  OccupationName.Secretary,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduApp],
  0,
  100,
  [],
  []
);

const soldier = makeOccupation(
  occKeys.Soldier,
  OccupationName.Soldier,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  []
);

const spy = makeOccupation(
  occKeys.Spy,
  OccupationName.Spy,
  [OccupationSkillFormula.eduApp, OccupationSkillFormula.eduDex],
  0,
  100,
  [],
  []
);

const streetPunk = makeOccupation(
  occKeys.StreetPunk,
  OccupationName.StreetPunk,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  []
);

const studentIntern = makeOccupation(
  occKeys.StudentIntern,
  OccupationName.StudentIntern,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  []
);

const tribeMember = makeOccupation(
  occKeys.TribeMember,
  OccupationName.TribeMember,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  []
);

const unionActivist = makeOccupation(
  occKeys.UnionActivist,
  OccupationName.UnionActivist,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  []
);

const yogi = makeOccupation(
  occKeys.Yogi,
  OccupationName.Yogi,
  [OccupationSkillFormula.edu],
  6,
  60,
  [],
  []
);

const zealot = makeOccupation(
  occKeys.Zealot,
  OccupationName.Zealot,
  [OccupationSkillFormula.eduApp, OccupationSkillFormula.eduPow],
  0,
  30,
  [],
  []
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
