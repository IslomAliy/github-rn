import React from 'react';
import { View, Image } from 'react-native';
import { styles } from '../../screens/UserScreen/styles';
import InfoTextWrapper from '../../screens/UserScreen/InfoTextWrapper';

type userDataTypes = {
  userData: {
    avatar_url: string;
    followers: string;
    following: string;
    public_repos: string;
  };
};

const HeadSection = ({ userData }: userDataTypes) => {
  return (
    <View style={styles.headSection}>
      <Image
        source={{ uri: userData.avatar_url }}
        style={styles.userImage}
        alt="user"
      />
      <View style={styles.userInfo}>
        <InfoTextWrapper info={userData.followers} secondaryText="Followers" />
        <InfoTextWrapper info={userData.following} secondaryText="Following" />
        <InfoTextWrapper info={userData.public_repos} secondaryText="Repos" />
      </View>
    </View>
  );
};

export default HeadSection;
