import React from 'react';
import {
  View, Image, Text, Pressable,
} from 'react-native';

import { Card } from '../../../model/Card';
import { CardType } from '../../../model/CardType';

import { styles } from './styles';

interface Props {
  card: Card;
  cardType: CardType | null;
  onCardPress: () => void;
}

export const SearchListItem = (
  { card, cardType, onCardPress }: Props,
) => {
  const smallImage = card.card_images[0].image_url_small;

  const renderRaceOnly = () => {
    return (
      <View style={styles.endOfCard}>
        <Text style={styles.raceText}>Race</Text>
        <Text style={styles.text}>{card.race}</Text>
      </View>
    );
  };

  const renderCardDetails = () => {
    return (
      <View style={styles.endOfCard}>
        <Text style={styles.raceText}>Race</Text>
        <Text style={styles.text}>{card.race}</Text>
        <Text style={styles.stats}>
          atk
          {card.atk}
        </Text>
        <Text style={styles.stats}>
          def
          {card.def}
        </Text>
      </View>
    );
  };

  let backgroundStyle;
  switch (cardType) {
    case CardType.Monster:
      backgroundStyle = styles.monsterCard;
      break;
    case CardType.Trap:
      backgroundStyle = styles.trapCard;
      break;
    case CardType.Spell:
      backgroundStyle = styles.spellCard;
      break;
    default:
      break;
  }

  return (
    <Pressable
      onPress={onCardPress}
      style={[styles.card, backgroundStyle]}
    >
      <Image
        style={styles.tinyLogo}
        source={{
          uri: smallImage,
        }}
        resizeMode="contain"
      />
      <View>

        <Text style={styles.cardType}>{card.type}</Text>
        <Text style={styles.title}>{card.name}</Text>

        { cardType === CardType.Monster ? (
          <Text style={styles.levelText}>
            Level
            {' '}
            {card.level}
          </Text>
        ) : null }
      </View>
      {card.atk ? renderCardDetails() : renderRaceOnly()}
    </Pressable>
  );
};
