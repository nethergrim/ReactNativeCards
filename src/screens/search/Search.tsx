import React, { useState } from 'react';
import {
  View, TextInput, ActivityIndicator, Animated, Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useCardsSearch } from '@api/useCardsSearch';

import { detectCardType } from '../../model/CardType';
import { Card } from '../../model/Card';

import { styles } from './styles';
import { SearchListItem } from './components/SearchListItem';

const keyExtractor = (item: any) => item.id;

const renderItem = ({ item }: { item: Card }) => {
  const cardType = detectCardType(item);
  return (
    <SearchListItem card={item} cardType={cardType} />
  );
};

export const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchRequest, setSearchRequest] = useState('');

  const onSearch = (text: string) => {
    setSearchInput(text);
  };

  const { cards, isLoading, isError } = useCardsSearch(searchRequest);

  const onSubmitEditing = () => {
    setSearchRequest(searchInput);
  };

  if (isError) {
    Alert.alert('Error', 'Network Error');
    setSearchRequest('');
  }

  if (cards && cards.error) {
    Alert.alert('Error', cards.error);
    setSearchRequest('');
  }

  const scrollY = React.useRef(new Animated.Value(0)).current;
  const diffClamp = Animated.diffClamp(scrollY, 0, 100);

  const translateY = diffClamp.interpolate({
    inputRange: [-40, 100],
    outputRange: [0, -100],
    extrapolate: 'clamp',
  });

  const marginTop = diffClamp.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -60],
    extrapolate: 'clamp',
  });

  const onScroll = (e: any) => {
    if (e.nativeEvent.contentOffset.y > 0) {
      scrollY.setValue(e.nativeEvent.contentOffset.y);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Animated.View
          style={[styles.searchBarContainer, {
            zIndex: 100,
            transform: [{ translateY }],
          }]}

        >
          <TextInput
            style={styles.searchBar}
            placeholder="Type card name here"
            onChangeText={onSearch}
            value={searchInput}
            autoFocus
            blurOnSubmit
            autoComplete="off"
            returnKeyLabel="search"
            returnKeyType="search"
            clearTextOnFocus
            clearButtonMode="while-editing"
            keyboardType="web-search"
            onSubmitEditing={onSubmitEditing}
          />
        </Animated.View>
        {(isLoading && searchRequest.length > 0)
          && <ActivityIndicator style={styles.loader} size="large" color="#BC5C8F" />}
        <Animated.FlatList
          data={cards ? cards.data : undefined}
          renderItem={renderItem}
          bounces={false}
          scrollEventThrottle={16}
          keyExtractor={keyExtractor}
          onScroll={onScroll}
          style={{ marginTop }}
          contentContainerStyle={styles.list}
        />
      </View>
    </SafeAreaView>
  );
};

