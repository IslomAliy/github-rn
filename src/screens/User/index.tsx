import React, {useEffect, useState} from 'react';
import {Image, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {styles} from './styles';
import {getUserRepos} from '../../services/user';
import InfoTextWrapper from './InfoTextWrapper';
import Repositories from '../../components/Repositories';

interface UserRouteParams {
  userData: {
    avatar_url: string;
    name: string;
    company: string;
    public_repos: string;
    followers: string;
    following: string;
    login: string;
  };
}

const User = () => {
  const [repos, setRepos] = useState([]);
  const route = useRoute();
  const {userData} = route.params as UserRouteParams;
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: userData.name ?? userData.login,
    });
  }, [navigation, userData]);

  useEffect(() => {
    if (userData.login) {
      getUserRepos(userData.login)
        .then(res => {
          setRepos(res.data);
          console.log(res);
        })
        .catch(err => console.log(err));
    }
  }, [userData]);
  return (
    <View style={styles.scrollView}>
      <View style={styles.headSection}>
        <Image
          source={{uri: userData.avatar_url}}
          style={styles.userImage}
          alt="user"
        />
        <View style={styles.userInfo}>
          <InfoTextWrapper
            info={userData.followers}
            secondaryText="Followers"
          />
          <InfoTextWrapper
            info={userData.following}
            secondaryText="Following"
          />
          <InfoTextWrapper info={userData.public_repos} secondaryText="Repos" />
        </View>
      </View>
      <Repositories repos={repos} />
    </View>
  );
};

export default User;
