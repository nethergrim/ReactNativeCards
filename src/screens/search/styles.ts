import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ececec',
  },
  searchBar: {
    backgroundColor: '#ffffff',
    height: 40,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  searchBarContainer: {
    height: 40,
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    width: '94%',
  },
  list: {
    paddingTop: 58,
    paddingBottom: 50,
  },
  loader: {
    margin: 24,
  },
});
