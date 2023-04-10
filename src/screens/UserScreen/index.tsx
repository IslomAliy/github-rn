import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { getUserRepos } from '../../services/user';
import Repositories from '../../components/Repositories';
import { UserProps } from '../../../App';

// type UserProps = {
//   route: {
//     params: UserRouteParams;
//   };
//   navigation: NavigationProp<ParamListBase>;
// };

const User = ({ route, navigation }: UserProps) => {
  const [repos, setRepos] = useState([]);
  const { userData } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: userData.name ?? userData.login,
    });
  }, [navigation, userData]);

  useEffect(() => {
    if (userData.login) {
      getUserRepos(userData.login)
        .then((res) => {
          setRepos(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [userData]);
  return (
    <View style={styles.scrollView}>
      <Repositories repos={repos} userData={userData} />
    </View>
  );
};

export default User;
