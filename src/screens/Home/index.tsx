import React, {useEffect, useState, useLayoutEffect} from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
import {getUser} from '../../services/user';
import useDebounce from '../../hooks/useDebounce';
import SearchResultCard from '../../components/SearchResultCard';

type userDataProps = {
  login: string;
  avatar_url: string;
  company: string;
  status: number;
};

const initialUserData = {
  login: '',
  avatar_url: '',
  company: '',
  status: 0,
};

const Home = (): JSX.Element => {
  const navigation = useNavigation();
  // const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce({value: search, delay: 700});
  const [userData, setUserData] = useState<userDataProps>(initialUserData);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLargeTitle: true,
      headerSearchBarOptions: {
        placeHolder: 'Search',
        onChangeText: (
          event: NativeSyntheticEvent<TextInputChangeEventData>,
        ) => {
          setSearch(event.nativeEvent.text);
        },
      },
    });
  }, [navigation]);

  useEffect(() => {
    getUser(debouncedSearch)
      .then(res => {
        console.log('users', res.status);
        setUserData({...res.data, status: res.status});
      })
      .catch(err => {
        console.log(err);
        setUserData(initialUserData);
      });
  }, [debouncedSearch]);

  console.log('userData', userData.status);

  return (
    <SafeAreaView style={styles.content}>
      {userData.status ? (
        <SearchResultCard
          navigation={navigation}
          name={userData.login}
          img={userData.avatar_url}
          company={userData.company}
        />
      ) : search ? (
        <Text>No user found</Text>
      ) : (
        <Text>Search user from github</Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    top: 0,
  },
  text: {
    display: 'flex',
    justifyContent: 'center',
    color: 'red',
    fontSize: 32,
  },
});

export default Home;
