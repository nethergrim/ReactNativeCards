import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ececec',
  },
  searchBar: {
    backgroundColor: '#ffffff',
    height: 40,
    marginTop: 16,
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
    paddingTop: 48,
    paddingBottom: 50,
  },
  loader: {
    marginTop: 100,
  },
});
