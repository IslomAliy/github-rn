import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  card: {
    width: '100%',
    paddingTop: 10,
    paddingRight: 16,
    paddingLeft: 16,
  },
  cardWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
  },
  image: {
    width: 45,
    height: 45,
  },
  userInfo: {
    gap: 3,
  },
  name: {
    fontSize: 18,
  },
});
