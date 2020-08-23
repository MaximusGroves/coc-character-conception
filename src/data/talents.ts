
export type Talent = {
    roll: number,
    name: string,
    description: string
}

export type TalentList = {
    name: string
    talents: Array<Talent>
}

const physicalTalents: TalentList = {
    name: 'Physical Talents',
    talents: [
        { roll: 1, name: 'Keen Vision', description: 'gain a bonus to Spot Hidden rolls' },
        { roll: 2, name: 'Quick Healer', description: 'natural healing is increased to +3 hit points per day.' },
        { roll: 3, name: 'Night Vision', description: 'in darkness, reduce the difficulty level of Spot Hidden rolls' },
        { roll: 4, name: 'Endurance', description: 'gain a bonus die when making CON rolls (including to determine MOV rate for chases).' },
        { roll: 5, name: 'Power Lifter', description: 'gain a bonus die when making STR rolls to lift objects or people.' },
        { roll: 6, name: 'Iron Liver', description: 'may spend 5 Luck to avoid the effects of drinking excessive amounts of alcohol (negating penalty applied to skill rolls).' },
        { roll: 7, name: 'Stout Constitution', description: 'may spend 10 Luck to reduce poison or disease damage and effects by half.' },
        { roll: 8, name: 'Tough Guy', description: 'soaks up damage, may spend 10 Luck points to shrug off up to 5 hit points worth of damage taken in one combat round.' },
        { roll: 9, name: 'Keen Hearing', description: 'gain a bonus die to Listen rolls' },
        { roll: 10, name: 'Smooth Talker', description: 'gain a bonus die to Charm rolls' }
    ]
}

const mentalTalents: TalentList = {
    name: 'Mental Talents',
    talents: [
        { roll: 1, name: 'Hardened', description: 'ignores Sanity point loss from attacking other humans, viewing horrific injuries, or the deceased.' },
        { roll: 2, name: 'Resilient', description: 'may spend Luck points to shrug-off points of Sanity loss, on a one-for-one basis.' },
        { roll: 3, name: 'Strong Willed', description: 'gains a bonus die when making POW rolls.' },
        { roll: 4, name: 'Quick Study', description: 'halve the time required for Initial and Full Reading of Mythos tomes, as well as other books.' },
        { roll: 5, name: 'Linguist', description: 'able to determine what language is being spoken (or what is written); gains a bonus die to Language rolls.' },
        { roll: 6, name: 'Arcane Insight', description: 'halve the time required to learn spells and gains bonus die to spell casting rolls.' },
        { roll: 7, name: 'Photographic Memory', description: 'can remember many details; gains a bonus die when making Know rolls.' },
        { roll: 8, name: 'Lore', description: 'has knowledge of a lore specialization skill (e.g. Dream Lore, Vampire Lore, Werewolf Lore, etc.). Note that occupational and/or personal interest skill points should be invested in this skill.' },
        { roll: 9, name: 'Psychic Power', description: 'may choose one psychic power (Clairvoyance, Divination, Medium, Psychometry, or Telekinesis). Note that occupational and/or personal interest skill points should be invested in this skill (see Psychic Powers, page 83).' },
        { roll: 10, name: 'Sharp Witted', description: 'able to collate facts quickly; gain a bonus die when making Intelligence (but not Idea)' }
    ]
}

const combatTalents: TalentList = {
    name: 'Combat Talents',
    talents: [
        { roll: 1, name: 'Alert', description: 'never surprised in combat.' },
        { roll: 2, name: 'Heavy Hitter', description: 'may spend 10 Luck points to add an additional damage die when dealing out melee combat (die type depends on the weapon being used, e.g. 1D3 for unarmed combat, 1D6 for a sword, etc.)' },
        { roll: 3, name: 'Fast Load', description: 'choose a Firearm specialism; ignore penalty die for loading and firing in the same round.' },
        { roll: 4, name: 'Nimble', description: 'does not lose next action when “diving for cover” versus firearms.' },
        { roll: 5, name: 'Beady Eye', description: 'does not suffer penalty die when “aiming” at a small target (Build –2), and may also fire into melee without a penalty die.' },
        { roll: 6, name: 'Outmaneuver', description: 'character is considered to have one point higher Build when initiating a combat maneuver (e.g. Build 1 becomes Build 2 when comparing their hero to the target in a maneuver,reducing the likelihood of suffering a penalty on their Fighting roll).' },
        { roll: 7, name: 'Rapid Attack', description: 'may spend 10 Luck points to gain one further melee attack in a single combat round.' },
        { roll: 8, name: 'Fleet Footed', description: 'may spend 10 Luck to avoid being “outnumbered” in melee combat for one combat encounter.' },
        { roll: 9, name: 'Quick Draw', description: 'does not need to have their firearm “readied” to gain +50 DEX when determining position in the DEX order for combat.' },
        { roll: 10, name: 'Rapid Fire', description: 'ignores penalty die for multiple handgun shots.' }
    ]
}

const miscellaneousTalents: TalentList = {

    name: 'Miscellaneous Talents',
    talents: [
        { roll: 1, name: 'Scary', description: 'reduces difficulty by one level or gains bonus die (at the Keeper’s discretion) to Intimidate rolls.' },
        { roll: 2, name: 'Gadget', description: 'starts game with one weird science gadget (see Weird Science, page 86).' },
        { roll: 3, name: 'Lucky', description: 'regains an additional +1D10 Luck points when Luck Recovery rolls are made.' },
        { roll: 4, name: 'Mythos Knowledge', description: 'begins the game with a Cthulhu Mythos Skill of 10 points.' },
        { roll: 5, name: 'Weird Science', description: 'may build and repair weird science devices (see Weird Science, page 86).' },
        { roll: 6, name: 'Shadow', description: 'reduces difficulty by one level or gains bonus die (at the Keeper’s discretion) to Stealth rolls, and if currently unseen is able to make two surprise attacks before their location is discovered.' },
        { roll: 7, name: 'Handy', description: 'reduces difficulty by one level or gains bonus die (at the Keeper’s discretion) when making Electrical Repair, Mechanical Repair, and Operate Heavy Machinery rolls.' },
        { roll: 8, name: 'Animal Companion', description: 'starts game with a faithful animal companion (e.g. dog, cat, parrot) and gains a bonus die when making Animal Handling rolls.' },
        { roll: 9, name: 'Master of Disguise', description: 'may spend 10 Luck points to gain a bonus die to Disguise or Art/Craft (Acting) rolls; includes ventriloquism (able to throw voice over long distances so it appears that the sound is emanating from somewhere other than the hero). Note that if someone is trying to detect the disguise   their Spot Hidden or Psychology roll’s difficulty is raised to Hard.' },
        { roll: 10, name: 'Resourceful', description: 'always seems to have what they need to hand; may spend 10 Luck points (rather than make Luck roll) to find a certain useful piece of equipment (e.g. a flashlight, length of rope, a weapon, etc.) in their current location.' },
    ]
}

export const talentListSections = [physicalTalents, mentalTalents, combatTalents, miscellaneousTalents]