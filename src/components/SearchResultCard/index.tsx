import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';
type resultCardProps = {
  navigation: any;
  userData: {
    avatar_url: string;
    login: string;
    company: string;
  };
};

const SearchResultCard = ({
  userData,
  navigation,
}: resultCardProps): JSX.Element => {
  const handlePress = () => {
    if (navigation) {
      navigation.navigate('User', {userData});
    }
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <View style={styles.cardWrapper}>
        <Image source={{uri: userData.avatar_url}} style={styles.image} />
        <View style={styles.userInfo}>
          <Text style={styles.name}>{userData.login}</Text>
          <Text>{userData.company}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SearchResultCard;
