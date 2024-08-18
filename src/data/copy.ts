import { stepArchetype, stepAttribute, stepOccupation, stepSkill, stepTalent } from "../providers/AppContextProvider";

export const msgSTR = "The means to shape the world with your hands, aligning reality with your forceful grasp... Strength will grant you the might to move mountains; will you carry the team or collapse under the weight of your ambition?";
export const msgCON = 'The fortitude to stand firm where others falter, enduring all that the world can throw at you... Constitution will make you an unyielding pillar, but can you outlast the storm that is coming?';
export const msgSIZ = "The presence to effortlessly dominate, commanding the focus of all from such great heights... Size lifts you above the rest, but beware, tall trees are the first to be cut down.";
export const msgDEX = 'The mastery to command body, weapons, and tools as extensions of your very self... Dexterity offers you unparalleled control, yet the pursuit of perfection comes with profound sacrifice.';
export const msgAPP = 'The allure to enchant and captivate, crushing hearts with just a glance... Appearance opens doors and launches ships, igniting a wildfire of passion. Try not to get burned, this power is skin-deep, and knives cut deeper.';
export const msgINT = 'The clarity to pierce the fog of deception, unravelling the deepest enigma by pure intuition alone... Intelligence will reveal the truth to you, though some truths are best left undiscovered.';
export const msgPOW = 'The spiritual might to bend fate to your desires with the sheer force of will... Power will flow through you like a river, but remember, the river can carve as well as drown.';
export const msgEDU = "The breadth of knowledge from geniuses past, standing on the shoulders of giants... Education will reveal every mystery of the universe, but beware, you'll discover that some secrets prefer to stay hidden.";
export const msgArchetype = "Your archetype is the essence of your character, the defining role you will play in this grand adventure. Whether you are a cunning mastermind, a daring hero, or a mysterious enigma, the archetype you choose will shape the narrative of your journey, carving your legend into the world. Your archetype taps into the innate talents of your heart, unlocking skills that mirror your true nature."
export const msgOccupation = 'Your occupation reflects the skills and perspectives honed in the everyday world, grounding you in reality. This familiar path will guide your first steps into the unknown, where your past becomes the bedrock of your future adventure. The talents honed in your occupation shape your current abilities, providing skills that give you strength today.';
export const msgAttributes = 'The essence of your being is forged in the fires of your attributes, the building blocks of your potential. Each one is a testament to the strength, cunning, and resolve that will guide you through every challenge and triumph. You may drag the name or value to whichever placement you chose, or lock them in place to randomize the rest.';
export const msgSkills = "Your skills are the agency you have over the world, the tools with which you shape your destiny. But beware—sharpen too few, and you may become a one-trick pony; adopt too many, and you'll be a master of none. You gain skill points from your archetype, occupation, and personal interests, all scaled by your current attributes, and they're selected in different sections below.";
export const msgTalents = 'Talents are the sparks of brilliance that ignite your uniqueness, the feats that make you truly extraordinary. These gifts will define the moments when you rise above the ordinary, turning the tide in your favor when it matters most. You may select two and they can be used once per encounter.';

export const labelArchetype = 'Select Archetype';
export const labelOccupation = 'Select Occupation';
export const labelTalents = 'Select Talents (2)';
export const labelAttributes = 'Roll Characteristics';
export const labelSkills = 'Allocate Skills';

const orderedLabels: Array<string> = [];
orderedLabels[stepArchetype - 1] = labelArchetype;
orderedLabels[stepOccupation - 1] = labelOccupation;
orderedLabels[stepTalent - 1] = labelTalents;
orderedLabels[stepAttribute - 1] = labelAttributes;
orderedLabels[stepSkill - 1] = labelSkills;

export const stepperLabels = orderedLabels;



export const msgs = { msgSTR, msgCON, msgSIZ, msgDEX, msgAPP, msgINT, msgPOW, msgEDU, msgArchetype, msgOccupation, msgAttributes, msgSkills, msgTalents }