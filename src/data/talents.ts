import { TalentKey, TalentName, talentKeys } from './types';

export type TalentType = 'physical' | 'mental' | 'combat' | 'other';

export type Talent = {
  key: TalentKey;
  name: TalentName;
  description: string;
  type: TalentType;
};

const makeTalent = (
  key: TalentKey,
  name: TalentName,
  description: string,
  type: TalentType
): Talent => {
  return { key, name, description, type };
};

const keenVision = makeTalent(
  talentKeys.KeenVision,
  TalentName.KeenVision,
  'Natural healing is increased to +3 hit points per day',
  'physical'
);

const quickHealer = makeTalent(
  talentKeys.QuickHealer,
  TalentName.QuickHealer,
  'Gain a bonus to Spot Hidden rolls',
  'physical'
);

const nightVision = makeTalent(
  talentKeys.NightVision,
  TalentName.NightVision,
  'In darkness, reduce the difficulty level of Spot Hidden rolls',
  'physical'
);

const endurance = makeTalent(
  talentKeys.Endurance,
  TalentName.Endurance,
  'Gain a bonus die when making CON rolls (including to determine MOV rate for chases)',
  'physical'
);

const powerLifter = makeTalent(
  talentKeys.PowerLifter,
  TalentName.PowerLifter,
  'Gain a bonus die when making STR rolls to lift objects or people',
  'physical'
);

const ironLiver = makeTalent(
  talentKeys.IronLiver,
  TalentName.IronLiver,
  'May spend 5 Luck to avoid the effects of drinking excessive amounts of alcohol (negating penalty applied to skill rolls)',
  'physical'
);

const stoutConstitution = makeTalent(
  talentKeys.StoutConstitution,
  TalentName.StoutConstitution,
  'May spend 10 Luck to reduce poison or disease damage and effects by half',
  'physical'
);

const toughGuy = makeTalent(
  talentKeys.ToughGuy,
  TalentName.ToughGuy,
  'Soaks up damage, may spend 10 Luck points to shrug off up to 5 hit points worth of damage taken in one combat round',
  'physical'
);

const keenHearing = makeTalent(
  talentKeys.KeenHearing,
  TalentName.KeenHearing,
  'Gain a bonus die to Listen rolls',
  'physical'
);

const smoothTalker = makeTalent(
  talentKeys.SmoothTalker,
  TalentName.SmoothTalker,
  'Gain a bonus die to Charm rolls',
  'physical'
);

const hardened = makeTalent(
  talentKeys.Hardened,
  TalentName.Hardened,
  'Ignores Sanity point loss from attacking other humans, viewing horrific injuries, or the deceased',
  'mental'
);

const resilient = makeTalent(
  talentKeys.Resilient,
  TalentName.Resilient,
  'May spend Luck points to shrug-off points of Sanity loss, on a one-for-one basis',
  'mental'
);
const strongWilled = makeTalent(
  talentKeys.StrongWilled,
  TalentName.StrongWilled,
  'Gains a bonus die when making POW rolls',
  'mental'
);
const quickStudy = makeTalent(
  talentKeys.QuickStudy,
  TalentName.QuickStudy,
  'Halve the time required for Initial and Full Reading of Mythos tomes, as well as other books',
  'mental'
);
const linguist = makeTalent(
  talentKeys.Linguist,
  TalentName.Linguist,
  'Able to determine what language is being spoken (or what is written); gains a bonus die to Language rolls',
  'mental'
);
const arcaneInsight = makeTalent(
  talentKeys.ArcaneInsight,
  TalentName.ArcaneInsight,
  'Halve the time required to learn spells and gains bonus die to spell casting rolls',
  'mental'
);
const photographicMemory = makeTalent(
  talentKeys.PhotographicMemory,
  TalentName.PhotographicMemory,
  'Can remember many details; gains a bonus die when making Know rolls',
  'mental'
);
const lore = makeTalent(
  talentKeys.Lore,
  TalentName.Lore,
  'Has knowledge of a lore specialization skill (e.g. Dream Lore, Vampire Lore, Werewolf Lore, etc.) occupational and/or personal interest skill points should be invested in this skill',
  'mental'
);
const psychicPower = makeTalent(
  talentKeys.PsychicPower,
  TalentName.PsychicPower,
  'may choose one psychic power (Clairvoyance, Divination, Medium, Psychometry, or Telekinesis) note that occupational and/or personal interest skill points should be invested in this skill (see Psychic Powers, page 83)',
  'mental'
);
const sharpWitted = makeTalent(
  talentKeys.SharpWitted,
  TalentName.SharpWitted,
  'Able to collate facts quickly; gain a bonus die when making Intelligence (but not Idea)',
  'mental'
);

const alert = makeTalent(
  talentKeys.Alert,
  TalentName.Alert,
  'Never surprised in combat',
  'combat'
);

const heavyHitter = makeTalent(
  talentKeys.HeavyHitter,
  TalentName.HeavyHitter,
  'May spend 10 Luck points to add an additional damage die when dealing out melee combat (die type depends on the weapon being used, e.g. 1D3 for unarmed combat, 1D6 for a sword, etc)',
  'combat'
);

const fastLoad = makeTalent(
  talentKeys.FastLoad,
  TalentName.FastLoad,
  'Choose a Firearm specialism; ignore penalty die for loading and firing in the same round',
  'combat'
);

const nimble = makeTalent(
  talentKeys.Nimble,
  TalentName.Nimble,
  'Does not lose next action when “diving for cover” versus firearms',
  'combat'
);

const beadyEye = makeTalent(
  talentKeys.BeadyEye,
  TalentName.BeadyEye,
  'Does not suffer penalty die when “aiming” at a small target (Build –2), and may also fire into melee without a penalty die',
  'combat'
);

const outmaneuver = makeTalent(
  talentKeys.Outmaneuver,
  TalentName.Outmaneuver,
  'Character is considered to have one point higher Build when initiating a combat maneuver (e.g. Build 1 becomes Build 2 when comparing their hero to the target in a maneuver,reducing the likelihood of suffering a penalty on their Fighting roll)',
  'combat'
);

const rapidAttack = makeTalent(
  talentKeys.RapidAttack,
  TalentName.RapidAttack,
  'May spend 10 Luck points to gain one further melee attack in a single combat round',
  'combat'
);
const fleetFooted = makeTalent(
  talentKeys.FleetFooted,
  TalentName.FleetFooted,
  'May spend 10 Luck to avoid being “outnumbered” in melee combat for one combat encounter',
  'combat'
);

const quickDraw = makeTalent(
  talentKeys.QuickDraw,
  TalentName.QuickDraw,
  'Does not need to have their firearm “readied” to gain +50 DEX when determining position in the DEX order for combat',
  'combat'
);

const rapidFire = makeTalent(
  talentKeys.RapidFire,
  TalentName.RapidFire,
  'Ignores penalty die for multiple handgun shots',
  'combat'
);

const scary = makeTalent(
  talentKeys.Scary,
  TalentName.Scary,
  'Reduces difficulty by one level or gains bonus die (at the Keeper’s discretion) to Intimidate rolls',
  'other'
);

const gadget = makeTalent(
  talentKeys.Gadget,
  TalentName.Gadget,
  'Starts game with one weird science gadget (see Weird Science, page 86)',
  'other'
);

const lucky = makeTalent(
  talentKeys.Lucky,
  TalentName.Lucky,
  'Regains an additional +1D10 Luck points when Luck Recovery rolls are made',
  'other'
);

const mythosKnowledge = makeTalent(
  talentKeys.MythosKnowledge,
  TalentName.MythosKnowledge,
  'Begins the game with a Cthulhu Mythos Skill of 10 points',
  'other'
);

const weirdScience = makeTalent(
  talentKeys.WeirdScience,
  TalentName.WeirdScience,
  'May build and repair weird science devices (see Weird Science, page 86)',
  'other'
);

const shadow = makeTalent(
  talentKeys.Shadow,
  TalentName.Shadow,
  'Reduces difficulty by one level or gains bonus die (at the Keeper’s discretion) to Stealth rolls, and if currently unseen is able to make two surprise attacks before their location is discovered',
  'other'
);

const handy = makeTalent(
  talentKeys.Handy,
  TalentName.Handy,
  'Reduces difficulty by one level or gains bonus die (at the Keeper’s discretion) when making Electrical Repair, Mechanical Repair, and Operate Heavy Machinery rolls',
  'other'
);

const animalCompanion = makeTalent(
  talentKeys.AnimalCompanion,
  TalentName.AnimalCompanion,
  'Starts game with a faithful animal companion (e.g. dog, cat, parrot) and gains a bonus die when making Animal Handling rolls',
  'other'
);

const masterOfDisguise = makeTalent(
  talentKeys.MasterOfDisguise,
  TalentName.MasterOfDisguise,
  'May spend 10 Luck points to gain a bonus die to Disguise or Art/Craft (Acting) rolls; includes ventriloquism (able to throw voice over long distances so it appears that the sound is emanating from somewhere other than the hero). Note that if someone is trying to detect the disguise   their Spot Hidden or Psychology roll’s difficulty is raised to Hard',
  'other'
);

const resourceful = makeTalent(
  talentKeys.Resourceful,
  TalentName.Resourceful,
  'Always seems to have what they need to hand; may spend 10 Luck points (rather than make Luck roll) to find a certain useful piece of equipment (e.g. a flashlight, length of rope, a weapon, etc.) in their current location',
  'other'
);

export const talents: { [key in TalentKey]: Talent } = {
  KeenVision: keenVision,
  QuickHealer: quickHealer,
  NightVision: nightVision,
  Endurance: endurance,
  PowerLifter: powerLifter,
  IronLiver: ironLiver,
  StoutConstitution: stoutConstitution,
  ToughGuy: toughGuy,
  KeenHearing: keenHearing,
  SmoothTalker: smoothTalker,
  Hardened: hardened,
  Resilient: resilient,
  StrongWilled: strongWilled,
  QuickStudy: quickStudy,
  Linguist: linguist,
  ArcaneInsight: arcaneInsight,
  PhotographicMemory: photographicMemory,
  Lore: lore,
  PsychicPower: psychicPower,
  SharpWitted: sharpWitted,
  Alert: alert,
  HeavyHitter: heavyHitter,
  FastLoad: fastLoad,
  Nimble: nimble,
  BeadyEye: beadyEye,
  Outmaneuver: outmaneuver,
  RapidAttack: rapidAttack,
  FleetFooted: fleetFooted,
  QuickDraw: quickDraw,
  RapidFire: rapidFire,
  Scary: scary,
  Gadget: gadget,
  Lucky: lucky,
  MythosKnowledge: mythosKnowledge,
  WeirdScience: weirdScience,
  Shadow: shadow,
  Handy: handy,
  AnimalCompanion: animalCompanion,
  MasterOfDisguise: masterOfDisguise,
  Resourceful: resourceful,
};
export const talentList = Object.values(talents).map((val) => {
  return val as Talent;
});
