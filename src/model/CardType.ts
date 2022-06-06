
export enum CardType {
  Monster = 'Normal Monster',
  Spell = 'Spell Card',
  Trap = 'Trap Card',
}

export const detectCardType = (card) => {
  if (card.type.includes('Monster')) {
    return CardType.Monster;
  } if (card.type.includes('Spell')) {
    return CardType.Spell;
  } if (card.type.includes('Trap')) {
    return CardType.Trap;
  }

  return null;
};
