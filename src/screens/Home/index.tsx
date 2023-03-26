import React, {useEffect, useState, useLayoutEffect} from 'react';
import {Text, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  View,
} from 'react-native';
import {getUser} from '../../services/user';
import useDebounce from '../../hooks/useDebounce';
import SearchResultCard from '../../components/SearchResultCard';
import {styles} from './styles';
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
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce({value: search, delay: 500});
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
        setUserData({...res.data, status: res.status});
      })
      .catch(err => {
        console.log(err);
        setUserData(initialUserData);
      });
  }, [debouncedSearch]);
  return (
    <ScrollView
      contentContainerStyle={styles.content}
      contentInsetAdjustmentBehavior="automatic">
      {userData.status ? (
        <SearchResultCard navigation={navigation} userData={userData} />
      ) : search ? (
        <Text style={styles.noUserText}>No user found</Text>
      ) : (
        <View style={styles.defaultText}>
          <Text>Search user from github</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default Home;
