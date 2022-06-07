import React, { useState } from 'react';
import {
  View, TextInput, ActivityIndicator, Animated, Alert,
} from 'react-native';

import { useCardsSearch } from '@api/useCardsSearch';

import { detectCardType } from '../../model/CardType';
import { Card } from '../../model/Card';

import { styles } from './styles';
import { SearchListItem } from './components/SearchListItem';

const keyExtractor = (item: any) => item.id;

export const Search = ({ navigation }) => {
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
    inputRange: [0, 100],
    outputRange: [0, -100],
    extrapolate: 'clamp',
  });

  const onScroll = (e: any) => {
    if (e.nativeEvent.contentOffset.y > 0) {
      scrollY.setValue(e.nativeEvent.contentOffset.y);
    }
  };

  const renderItem = ({ item }: { item: Card }) => {
    const cardType = detectCardType(item);
    const onCardPress = () => {
      navigation.navigate('CardDetails', { card: item });
    };
    return (
      <SearchListItem card={item} cardType={cardType} onCardPress={onCardPress} />
    );
  };

  return (
  // <SafeAreaView style={styles.container}>
    <View style={styles.container}>
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
          autoCorrect={false}
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
          // scrollEventThrottle={16}
        keyExtractor={keyExtractor}
        onScroll={onScroll}
          // style={{ marginTop }}
        contentContainerStyle={styles.list}
      />
    </View>
  // </SafeAreaView>
  );
};

