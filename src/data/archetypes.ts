import {
  CharacteristicName,
  OccupationName,
  SkillName,
  ArchetypeName,
} from './names'

export type Archetype = {
  name: ArchetypeName
  core: Array<CharacteristicName>
  occupations: Array<OccupationName>
  bonusSkills: Array<SkillName>
  talents: Array<string>
  traits: Array<string>
  description: string
}

const makeArchetypeOption = (
  name: ArchetypeName,
  core: Array<CharacteristicName>,
  occupations: Array<OccupationName>,
  bonusSkills: Array<SkillName>,
  traits: Array<string>,
  talents: Array<string>,
  description: string
): Archetype => {
  return { name, core, occupations, bonusSkills, traits, talents, description }
}

const adventurerOptions = makeArchetypeOption(
  ArchetypeName.Adventurer,
  [CharacteristicName.DEX, CharacteristicName.APP],
  [
    OccupationName.Actor,
    OccupationName.Archaeologist,
    OccupationName.Athlete,
    OccupationName.Aviator,
    OccupationName.BankRobber,
    OccupationName.BigGameHunter,
    OccupationName.CatBurglar,
    OccupationName.Dilettante,
    OccupationName.Drifter,
    OccupationName.Gambler,
    OccupationName.GangsterBoss,
    OccupationName.GangsterUnderling,
    OccupationName.Hobo,
    OccupationName.InvestigativeJournalist,
    OccupationName.Missionary,
    OccupationName.Nurse,
    OccupationName.Photographer,
    OccupationName.Ranger,
    OccupationName.Sailor,
    OccupationName.Soldier,
    OccupationName.TribeMember,
  ],
  [
    SkillName.Climb,
    SkillName.Diving,
    SkillName.DriveAuto,
    SkillName.FirstAid,
    SkillName.Fighting,
    SkillName.Firearms,
    SkillName.Jump,
    SkillName.LanguageOther,
    SkillName.MechanicalRepair,
    SkillName.Pilot,
    SkillName.Ride,
    SkillName.Stealth,
    SkillName.Survival,
    SkillName.Swim,
  ],
  ['easily bored', 'tenacious', 'glory hunter', 'egotistical'],
  [],
  'A life without adventure is not worth living. The world is a big place and there is much to experience and many chances for glory. Sitting behind a desk, working a job nine to five is a death sentence for such folk. The adventurer yearns for excitement, fun, and a challenge.'
)

const beefCakeOptions = makeArchetypeOption(
  ArchetypeName.Beefcake,
  [CharacteristicName.STR],
  [
    OccupationName.Athlete,
    OccupationName.BeatCop,
    OccupationName.BountyHunter,
    OccupationName.BoxerWrestler,
    OccupationName.Entertainer,
    OccupationName.GangsterBoss,
    OccupationName.GangsterUnderling,
    OccupationName.HiredMuscle,
    OccupationName.Hobo,
    OccupationName.ItinerantWorker,
    OccupationName.Laborer,
    OccupationName.Mechanic,
    OccupationName.Sailor,
    OccupationName.Soldier,
    OccupationName.StreetPunk,
    OccupationName.TribeMember,
  ],
  [
    SkillName.Climb,
    SkillName.Fighting,
    SkillName.Intimidate,
    SkillName.Listen,
    SkillName.MechanicalRepair,
    SkillName.Psychology,
    SkillName.Swim,
    SkillName.Throw,
  ],
  [
    'domineering',
    'brash',
    'quiet',
    'soft-centered',
    'slow to anger',
    'quick to anger',
  ],
  [],
  'Physical, muscular, and capable of handling themselves when the chips are down. Born that way or has worked hard in the pursuit of physical perfection. You won’t find these guys and gals in the library, but you might see their faces on a billboard. Beefcakes come in two varieties: the caring, silent type, or the brazen loud-mouth.'
)

const bonVivantOptions = makeArchetypeOption(
  ArchetypeName.BonVivant,
  [CharacteristicName.SIZ],
  [
    OccupationName.Actor,
    OccupationName.Artist,
    OccupationName.Butler,
    OccupationName.ConfidenceTrickster,
    OccupationName.CultLeader,
    OccupationName.Dilettante,
    OccupationName.ElectedOfficial,
    OccupationName.Entertainer,
    OccupationName.Gambler,
    OccupationName.GunMoll,
    OccupationName.GentlemanOrLady,
    OccupationName.MilitaryOfficer,
    OccupationName.Musician,
    OccupationName.Priest,
    OccupationName.Professor,
    OccupationName.Zealot,
  ],
  [
    SkillName.Appraise,
    SkillName.ArtOrCraft,
    SkillName.Charm,
    SkillName.FastTalk,
    SkillName.LanguageOther,
    SkillName.Listen,
    SkillName.SpotHidden,
    SkillName.Psychology,
  ],
  [
    'excessive',
    'greedy',
    'hoarder',
    'collector',
    'name dropper',
    'boastful',
    'attention seeking',
    'kind',
    'generous',
  ],
  [],
  'A bon vivant is “one who lives well,” but that doesn’t necessarily mean they are rich. While many are accustomed to wealth, the bon vivant is someone who could be said to enjoy life to the fullest and damn the consequences! Why wait until tomorrow when you can start living life today? Enjoying food and drink, as well as other pleasurable pursuits, is the key to a lifestyle where excess is the norm. Whether poor or rich, such a person puts little thought to saving for a rainy day, preferring to be the center of attention and a friend to all.'
)

const coldBloodedOptions = makeArchetypeOption(
  ArchetypeName.ColdBlooded,
  [CharacteristicName.INT],
  [],
  [],
  [],
  [],
  'A rationalist who is capable of just about anything. Cold blooded types may follow some twisted moral code, however, their view of humanity is cold and stark; you’re either good or bad. There are no shades of gray to navigate, just the harsh realities of life and death. Such people make effective killers as they have little self-doubt; they are ready to follow orders to the letter, or pursue some personal agenda for revenge. Such people may do anything to get the job done. They are rarely spontaneous people; instead, they embody ruthlessness and premeditation. Sometimes they will try to fool themselves into believing they have a “line” they will not cross, when in reality they are merciless and will go to any length to fulfill what they see as their goal.'
)

const dreamerOptions = makeArchetypeOption(
  ArchetypeName.Dreamer,
  [CharacteristicName.POW],
  [],
  [],
  [],
  [],
  'Whether an idealist or visionary, the dreamer has a strong and powerful mind. Such types tend to follow their own direction in life. The dreamer looks beyond the mundane realities of life, perhaps as a form of escapism or because they yearn for “what could be,” wishing to right wrongs or improve the world around them.'
)

const eggHeadOptions = makeArchetypeOption(
  ArchetypeName.Egghead,
  [CharacteristicName.INT, CharacteristicName.EDU],
  [],
  [],
  [],
  [],
  'Everything can be broken down and analyzed in order to understand how it works. Knowledge is a treasure and a joy—a puzzle to explore. Where the scholar is bookish, the egghead is practical and thoroughly enjoys getting their hands dirty. Whether it’s wires and gears, valves and computational engines, or blood and bones, the egghead likes to figure out what makes things tick. Perhaps an absent-minded genius or a razor-sharp virtuoso, the egghead can easily become absorbed in the problem before them, leaving them exposed and unaware of what is actually happening around them. Depending on the pulp level of your game, the egghead may be able to invent all manner of gizmos, useful or otherwise, see Weird Science on page 86 for details.'
)

const explorerOptions = makeArchetypeOption(
  ArchetypeName.Explorer,
  [CharacteristicName.DEX, CharacteristicName.POW],
  [],
  [],
  [],
  [],
  '“Don’t fence me in,” is the oft-heard cry of the explorer, who wishes for a more authentic and fulfilling life. Strong willed, virtually unshakeable, the explorer is ever questing for what lies over the horizon. Possibly at one with nature, such types are content to sleep where they fall, happily disdaining the soft comforts of urban life. Whether hacking through jungles, squeezing through caverns, or simply charting the hidden quarters of the city, the explorer is often a misfit who grows restless and annoyed by those they consider to be “weak” or “cowards.”'
)

const femmeFataleOptions = makeArchetypeOption(
  ArchetypeName.FemmeFatale,
  [CharacteristicName.APP, CharacteristicName.INT],
  [],
  [],
  [],
  [],
  'A deadly woman or man whose outward beauty usually masks a self-centered approach to life; one who is ever vigilant. By constructing an alluring and glamorous persona the femme fatale is akin to a spider. She draws others to her web in order to possess what she desires or destroy her target. Brave and cunning, the femme fatale is not shy of getting her hands dirty and is a capable foe. Neither is she foolhardy, and she will wait until her web is constructed before dealing out a sudden and well-timed assault (be it mental or physical). A classic pulp archetype, the femme fatale could as easily be termed homme fatale if so desired.'
)

const greaseMoneyOptions = makeArchetypeOption(
  ArchetypeName.GreaseMonkey,
  [CharacteristicName.INT],
  [],
  [],
  [],
  [],
  'The grease monkey is practically minded, able to make and repair all manner of things, be they useful inventions, machines, engines, or other devices. Grease Monkeys may be found lurking under the hood of a car, or playing with the telephone exchange wires. Such types have a “can do” attitude, able to make the most of what they have at hand, using their skills and experience to wow those around them. Depending on the pulp level of your game, the grease monkey may be able to “jury-rig” all manner of gizmos, useful or otherwise; see Weird Science on page 86 for details.'
)

const hardBoiledOptions = makeArchetypeOption(
  ArchetypeName.HardBoiled,
  [CharacteristicName.CON],
  [],
  [],
  [],
  [],
  'Tough and streetwise, someone who is hard boiled understands that to catch a thief you have to think like a thief. Usually, such a person isn’t above breaking the law in order to get the job done. They’ll use whatever tools are at their disposal and may crack a few skulls in the process. Often, at their core, they are honest souls who wish the world wasn’t so despicable and downright nasty; however, in order to fight for justice, they can be just as nasty as they need to be.'
)

const harlequinOptions = makeArchetypeOption(
  ArchetypeName.Harlequin,
  [CharacteristicName.APP],
  [],
  [],
  [],
  [],
  'While similar to the femme fatale, the harlequin does not like to get their hands dirty (if they can help it). Usually possessing a magnetic personality, although not necessarily classically beautiful, such types find enjoyment in manipulating others to do their bidding, and often hide their own agendas behind outright lies or subtle deceptions. Sometimes they are committed to a cause (personal or otherwise), or act like agents of chaos, delighting in watching how people react to the situations they construe.'
)

const hunterOptions = makeArchetypeOption(
  ArchetypeName.Hunter,
  [CharacteristicName.INT, CharacteristicName.CON],
  [],
  [],
  [],
  [],
  'Maybe it’s the thrill of the chase, the prize at the end, or just because they have an innate drive to master their environment, the hunter is relentless in pursuing their prey. Calm and calculated, the hunter is willing to wait for the most opportune moment, despising the reckless behavior of the unwary.'
)

const mysticOptions = makeArchetypeOption(
  ArchetypeName.Mystic,
  [CharacteristicName.POW],
  [],
  [],
  [],
  [],
  'A seeker of the hidden, explorer of the unseen realm; the mystic quests for secrets and the fundamental truth of existence. They may be book-learned academics, shamanistic healers, circus diviners, or visionaries, but all pursue knowledge and the experience of forces outside of the natural order, be it for personal gain or the betterment of mankind. With the Keeper’s permission, a mystic is able to tap into supernatural powers beyond the ken of average folk. Often they have been persecuted and hunted, hiding their “gifts” from those who would call them “witch,” while others are considered charlatans and little more than sideshow freaks. Such heroes must take the Psychic talent, allowing them to invest skill points in one or more psychic skills (see Psychic Powers, page 83).'
)

const outsiderOptions = makeArchetypeOption(
  ArchetypeName.Outsider,
  [CharacteristicName.INT, CharacteristicName.CON],
  [],
  [],
  [],
  [],
  'The outsider stands apart from the rest of society, either figuratively or literally. Such people may be alien to the environment in which they find themselves, perhaps from a different country or culture, or they are part of the society but find themselves at odds with it. The outsider is usually on some form of journey, physically or spiritually, and must complete their objective before they can return to, or at last feel part of, the greater whole. Often the outsider will have distinct skills or a different way of approaching things; utilizing forgotten, secret, or alien knowledge.'
)

const rogueOptions = makeArchetypeOption(
  ArchetypeName.Rogue,
  [CharacteristicName.DEX, CharacteristicName.APP],
  [],
  [],
  [],
  [],
  'The rogue disobeys rules of society, openly questioning the status quo and mocking those in authority. They delight in being non-conformists, acting on impulse and deriding conventional behavior. Laws are there to be broken or skirted around. Most rogues are not necessarily criminals or anarchists intent on spreading chaos, but rather they find amusement in pulling off stunts that will confound others. They are often sophisticated, governed by their own unique moral codes, loveable and careless.'
)

const scholarOptions = makeArchetypeOption(
  ArchetypeName.Scholar,
  [CharacteristicName.EDU],
  [],
  [],
  [],
  [],
  'Uses intelligence and analysis to understand the world around them. Normally quite happy sitting in the library with a book (rather than actually facing the realities of life). A seeker of knowledge, the scholar is not particularly action orientated; however, when it comes to the crunch, he or she might be the only person who knows what to do.'
)

const seekerOptions = makeArchetypeOption(
  ArchetypeName.Seeker,
  [CharacteristicName.INT],
  [],
  [],
  [],
  [],
  'Puzzles and riddles enthrall the seeker, who uses intelligence and reasoning to uncover mysteries and solve problems. They look for and enjoy mental challenges, always focused on finding the truth, no matter the consequences or tribulations they must face.'
)

const sidekickOptions = makeArchetypeOption(
  ArchetypeName.Sidekick,
  [CharacteristicName.DEX, CharacteristicName.CON],
  [],
  [],
  [],
  [],
  'The sidekick embodies aspects of the steadfast, rogue, and thrill seeker archetypes. Usually, a younger person who has yet to live up to their full potential, someone who seeks to learn from a mentor type figure, or those content not to be the center of attention. Alternatively, the sidekick wishes to belong, to be the hero but is overshadowed by their peers or mentor. Subordinate sidekicks can at times struggle against their (usually) self-imposed restraints, venturing off on flights of fancy that mostly just get them into trouble. Sidekicks usually possess a strong moral code of duty and responsibility.'
)

const steadfastOptions = makeArchetypeOption(
  ArchetypeName.Steadfast,
  [CharacteristicName.CON],
  [],
  [],
  [],
  [],
  'Moral righteousness runs thickly in the blood of the steadfast. They protect the weak, put the interests of the others before themselves, and would willingly sacrifice their life for another’s safety. Whether they follow a clear spiritual or religious path or some internal moral code, they do not stoop to the depths of others, fighting with honor and acting as role models to those around them. Whatever else they fight for, they also fight for justice.'
)

const swashbucklerOptions = makeArchetypeOption(
  ArchetypeName.Swashbuckler,
  [CharacteristicName.DEX, CharacteristicName.APP],
  [],
  [],
  [],
  [],
  'Passionate and idealistic souls who are always looking to rescue damsels in distress. Gallant and heroic, the swashbuckler is action-orientated and fights fairly, disdaining the use of firearms as the tools of cowards. Most likely boastful, noisy, and joyous, even when in the direst of situations. A romantic at heart, a swashbuckler possesses a strong code of honor but is prone to reckless behavior'
)

const thrillSeekerOptions = makeArchetypeOption(
  ArchetypeName.ThrillSeeker,
  [CharacteristicName.DEX, CharacteristicName.POW],
  [],
  [],
  [],
  [],
  'Some people are like moths to a flame. For them, the easy life is no life at all, and they must seek out adventure and danger in order to feel alive. The stakes are never high enough for thrill seekers, who are always ready to bet large in order to feel the rush of adrenaline pumping through their veins. Such daredevils are drawn to high-octane sports and activities, and for them, a mountain is a challenge to master. Foolhardy to a fault, they cannot understand why no one else is prepared to take the same risks as they do.'
)

const twoFistedOptions = makeArchetypeOption(
  ArchetypeName.TwoFisted,
  [CharacteristicName.STR, CharacteristicName.SIZ],
  [],
  [],
  [],
  [],
  '“Live fast, die hard” is the motto of the two-fisted. Such individuals are storehouses of energy, strong, tough, and very capable. Such types are inclined to resolve disputes with their fists rather than words. Usually hard-drinking and hardtalking, they like getting straight to the point and dislike pomp and ceremony. They do not suffer fools gladly. The two-fisted seem to live life in a hurry, quick to anger, contemptuous of authority, and ready to play as dirty as the next guy.'
)

export const archetypes = [
  adventurerOptions,
  beefCakeOptions,
  bonVivantOptions,
  coldBloodedOptions,
  dreamerOptions,
  eggHeadOptions,
  explorerOptions,
  femmeFataleOptions,
  greaseMoneyOptions,
  hardBoiledOptions,
  harlequinOptions,
  hunterOptions,
  mysticOptions,
  outsiderOptions,
  rogueOptions,
  scholarOptions,
  seekerOptions,
  sidekickOptions,
  steadfastOptions,
  swashbucklerOptions,
  thrillSeekerOptions,
  twoFistedOptions,
]
