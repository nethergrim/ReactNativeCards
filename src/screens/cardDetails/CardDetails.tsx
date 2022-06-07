import React from 'react';
import {
  FlatList, Image, Text, View,
} from 'react-native';

import { CardType, detectCardType } from '../../model/CardType';

import { styles } from './styles';

export const CardDetails = ({ route }) => {
  const { card } = route.params;
  const cardType = detectCardType(card);
  const smallImage = card.card_images[0].image_url;

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

  const renderSetItem = ({ item }) => {
    return (
      <View>
        <Text style={styles.attrText}>
          {'• '}
          {item.set_name}
          {' '}
          {item.set_rarity_code}

        </Text>
      </View>
    );
  };

  return (
    <View style={[styles.container, backgroundStyle]}>

      <View style={styles.horizontalContainer}>

        {card.level && (
          <Text style={styles.leftSideText}>
            Level
            {' '}
            {card.level}
          </Text>
        )}

        <Text style={styles.rightSideText}>
          {card.type}
          {' - '}
          {card.race}
        </Text>
      </View>

      <Image
        style={styles.logo}
        source={{
          uri: smallImage,
        }}
        resizeMode="contain"
      />

      <Text style={styles.titleText}>
        {card.name}
      </Text>

      {card.attribute && (
        <Text style={styles.attrText}>
          {card.attribute}
        </Text>
      )}

      <Text style={styles.descText}>
        {card.desc}
      </Text>

      <View style={styles.cardSpecsContainer}>
        <Text style={styles.attrText}>
          Def:
          {' '}
          {card.def}
        </Text>
        <Text style={styles.attrText}>{' / '}</Text>
        <Text style={styles.attrText}>
          Atk:
          {' '}
          {card.atk}
        </Text>
      </View>

      <Text style={styles.attrText}>
        Sets:
      </Text>
      <FlatList
        style={styles.setsList}
        data={card.card_sets}
        keyExtractor={(item) => item.set_code}
        renderItem={renderSetItem}
      />

    </View>
  );
};
