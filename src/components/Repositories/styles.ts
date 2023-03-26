import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  itemContainer: {
    margin: 10,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.03,
    shadowRadius: 20,
  },
  repoName: {
    fontSize: 20,
  },
  repoDescription: {
    marginTop: 10,
    color: '#848587',
  },
  language: {
    color: '#0073DE',
    marginTop: 10,
  },
});
