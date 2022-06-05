import React, { useEffect, useState } from 'react';
import {
  View, TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useCardsSearch } from '@api/useCardsSearch';

import { styles } from './styles';

export const Search = () => {
  const [search, setSearch] = useState('');
  const [searchRequest, setSearchRequest] = useState('');

  const onSearch = (text: string) => {
    setSearch(text);
  };

  const { cards, isLoading, isError } = useCardsSearch(searchRequest);
  console.log(cards, isLoading, isError);

  const onSubmitEditing = () => {
    setSearchRequest(search);
  };

  return (
    <SafeAreaView style={styles.container}>
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
      <View style={styles.card} />
      <View style={styles.card} />
      <View style={styles.card} />
      <View style={styles.card} />
    </SafeAreaView>
  );
};

