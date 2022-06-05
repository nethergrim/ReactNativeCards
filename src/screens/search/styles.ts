import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f07',
    paddingHorizontal: 16,
  },
  searchBar: {
    backgroundColor: '#ffffff',
    height: 40,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    marginTop: 8,
    padding: 16,
    height: 80,
    borderRadius: 8,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#000',
    shadowOpacity: 0.2,
  },
});
