/* eslint-disable max-len */
import * as React from 'react';
import { render } from 'react-native-testing-library';

import { CardType } from '@model/CardType';

import { CardDetails } from '../CardDetails';

const testCard = {
  atk: 1150,
  attribute: 'LIGHT',
  card_images: [{ id: 58696829, image_url: 'https://storage.googleapis.com/ygoprodeck.com/pics/58696829.jpg', image_url_small: 'https://storage.googleapis.com/ygoprodeck.com/pics_small/58696829.jpg' }],
  card_prices: [{
    amazon_price: '0.79', cardmarket_price: '0.17', coolstuffinc_price: '0.25', ebay_price: '1.27', tcgplayer_price: '0.20',
  }],
  card_sets: [{
    set_code: 'LON-043', set_name: 'Labyrinth of Nightmare', set_price: '1.74', set_rarity: 'Common', set_rarity_code: '(C)',
  }, {
    set_code: 'LON-E043', set_name: 'Labyrinth of Nightmare', set_price: '1.81', set_rarity: 'Common', set_rarity_code: '(C)',
  }, {
    set_code: 'LON-EN043', set_name: 'Labyrinth of Nightmare', set_price: '2.45', set_rarity: 'Common', set_rarity_code: '(C)',
  }],
  def: 1000,
  desc: 'A mysterious priest created as a result of the latest advances in biotechnology.',
  id: 58696829,
  level: 3,
  name: 'Bio-Mage',
  race: 'Fairy',
  type: 'Normal Monster',
};

const props = {
  route: {
    params: {
      card: testCard,
    },
  },
};

describe('SearchListItem', () => {
  describe('render', () => {
    it('should render  SearchListItem', () => {
      expect(
        render(
          <CardDetails
            {...props}
          />,
        ).toJSON(),
      ).toMatchSnapshot();
    });
  });
});
