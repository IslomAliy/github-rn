import React from 'react';
import {View, Text, Image, StyleSheet, TouchableHighlight} from 'react-native';

type resultCardProps = {
  name: string;
  img: string;
  company: string;
  navigation: any;
};

const SearchResultCard = ({
  name,
  img,
  company,
  navigation,
}: resultCardProps): JSX.Element => {
  const handlePress = () => {
    if (navigation) {
      navigation.navigate('User');
    }
  };

  return (
    <TouchableHighlight style={styles.card} onPress={handlePress}>
      <View style={styles.cardWrapper}>
        <Image source={{uri: img}} style={styles.image} />
        <View style={styles.userInfo}>
          <Text style={styles.name}>{name}</Text>
          <Text>{company}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
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

export default SearchResultCard;
