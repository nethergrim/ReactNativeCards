import React, { useState } from 'react';
import {
  View, TextInput, FlatList, ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useCardsSearch } from '@api/useCardsSearch';

import { detectCardType } from '../../model/CardType';

import { styles } from './styles';
import { SearchListItem } from './components/SearchListItem';

const keyExtractor = (item: any) => item.id;

const renderItem = ({ item }) => {
  const cardType = detectCardType(item);
  return (
    <SearchListItem card={item} cardType={cardType} />
  );
};

export const Search = () => {
  const [search, setSearch] = useState('');
  const [searchRequest, setSearchRequest] = useState('');

  const onSearch = (text: string) => {
    setSearch(text);
  };

  const { cards, isLoading, isError } = useCardsSearch(searchRequest);

  const onSubmitEditing = () => {
    setSearchRequest(search);
  };

  if (isError) {
    // return null;
    setSearchRequest('');
  }

  if (cards && cards.error) {
    // return null;
    setSearchRequest('');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          style={styles.searchBar}
          placeholder="Type card name here"
          onChangeText={onSearch}
          value={search}
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
        {isLoading && <ActivityIndicator size="large" color="#BC5C8F" />}
        <FlatList
          data={cards ? cards.data : undefined}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          contentContainerStyle={styles.list}
        />
      </View>
    </SafeAreaView>
  );
};

