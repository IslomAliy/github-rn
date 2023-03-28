import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import {styles} from './styles';
import {getUserRepos} from '../../services/user';
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

type UserRouteProp = RouteProp<Record<string, UserRouteParams>, string>;

const User = () => {
  const [repos, setRepos] = useState([]);
  const route = useRoute<UserRouteProp>();
  const {userData} = route.params;
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
        })
        .catch(err => console.log(err));
    }
  }, [userData]);
  return (
    <View style={styles.scrollView}>
      <Repositories repos={repos} userData={userData} />
    </View>
  );
};

export default User;
