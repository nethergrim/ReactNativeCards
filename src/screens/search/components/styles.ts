import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 12,
    marginTop: 12,
    padding: 16,
    height: 100,
    borderRadius: 8,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#000',
    shadowOpacity: 0.2,
    flex: 1,
    flexDirection: 'row',
  },
  trapCard: {
    backgroundColor: '#BC5C8F77',
  },
  monsterCard: {
    backgroundColor: '#C1855E77',
  },
  spellCard: {
    backgroundColor: '#4AB5A677',
  },
  tinyLogo: {
    width: 60,
    height: 70,
    marginRight: 12,
  },
  cardType: {
    color: '#eee',
    fontSize: 11,
    marginTop: -2,
  },
  raceText: {
    color: '#eee',
    fontSize: 11,
    marginBottom: 4,
    marginTop: -2,
  },
  endOfCard: {
    alignItems: 'flex-end',
    flex: 1,
  },
  stats: {
    fontSize: 12,
    color: '#eee',
  },
  text: {
    color: '#fff',
  },
  levelText: {
    color: '#fff',
    marginTop: 4,
  },
  title: {
    color: '#fff',
    fontSize: 15,
    marginTop: 4,
    flexWrap: 'wrap',
    maxWidth: 160,
  },
});
