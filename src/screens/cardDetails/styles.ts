import { StyleSheet } from 'react-native';

const textColor = '#fff';
const textShadowColor = '#000000aa';
const textShadowOffset = { width: 0.5, height: 0.5 };
const textShadowRadius = 1;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ececec',
    padding: 12,
  },
  horizontalContainer: {
    flexDirection: 'row',
  },
  leftSideText: {
    flex: 1,
    fontSize: 15,
    fontWeight: 'bold',
    color: textColor,
    textShadowColor,
    textShadowOffset,
    textShadowRadius,
  },
  rightSideText: {
    alignItems: 'flex-end',
    textAlign: 'right',
    justifyContent: 'flex-end',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 16,
    color: textColor,
    textShadowColor,
    textShadowOffset,
    textShadowRadius,
  },
  attrText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: textColor,
    textShadowColor,
    textShadowOffset,
    textShadowRadius,
    marginBottom: 8,
  },
  descText: {
    fontSize: 18,
    fontWeight: '500',
    color: textColor,
    textShadowColor,
    textShadowOffset,
    textShadowRadius,
    marginBottom: 8,
  },
  trapCard: {
    backgroundColor: '#BC5C8F67',
  },
  monsterCard: {
    backgroundColor: '#C1855E67',
  },
  spellCard: {
    backgroundColor: '#4AB5A667',
  },
  logo: {
    width: 160,
    height: 280,
    marginTop: 24,
    marginBottom: 24,
    alignSelf: 'center',
  },
  cardSpecsContainer: {
    flexDirection: 'row-reverse',
    marginTop: 8,
  },
  setsList: {
    flex: 1,
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: textColor,
    textShadowColor,
    textShadowOffset,
    textShadowRadius,
    marginBottom: 16,
  },
});
