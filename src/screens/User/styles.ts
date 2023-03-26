import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  headSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    margin: 10,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
  },
  userImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
  },
  infoText: {
    fontSize: 17,
    fontWeight: '600',
  },
  secondaryText: {
    color: '#848587',
    marginTop: 2,
  },
});
