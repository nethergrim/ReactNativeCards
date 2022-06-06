import React from 'react';
import { View, Image, Text } from 'react-native';

import { detectCardType, CardType } from '../../../model/CardType';

import { styles } from './styles';

export const SearchListItem = ({ card, cardType }) => {
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
  switch (detectCardType(card)) {
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
    <View style={[styles.card, backgroundStyle]}>
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

        { detectCardType(card) === CardType.Monster ? (
          <Text style={styles.levelText}>
            Level
            {' '}
            {card.level}
          </Text>
        ) : null }
      </View>
      {card.atk ? renderCardDetails() : renderRaceOnly()}
    </View>
  );
};
