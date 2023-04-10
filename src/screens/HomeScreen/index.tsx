import React, { useEffect, useState, useLayoutEffect } from 'react';
import { Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  View,
} from 'react-native';
import { searchUser } from '../../services/user';
import useDebounce from '../../hooks/useDebounce';
import SearchResultCard from '../../components/SearchResultCard';
import { styles } from './styles';
import { PAGE, PAGE_LIMIT } from '../../constants/userScreen';

type userDataProps = {
  login: string;
  avatar_url: string;
  company: string;
  status: number;
  id: string;
};

type usersProps = {
  total: number;
  users: [userDataProps];
};

const initialUsersData: usersProps = {
  total: 0,
  users: [
    {
      login: '',
      avatar_url: '',
      company: '',
      status: 0,
      id: '',
    },
  ],
};

type ItemType = {
  item: userDataProps;
  index: number;
};

const Home = (): JSX.Element => {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce({ value: search, delay: 500 });
  const [users, setUsers] = useState(initialUsersData);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLargeTitle: true,
      headerSearchBarOptions: {
        placeHolder: 'Search',
        onChangeText: (
          event: NativeSyntheticEvent<TextInputChangeEventData>
        ) => {
          setSearch(event.nativeEvent.text);
        },
      },
    });
  }, [navigation]);

  const handleSearchUsers = (userPerPage: number, pageLimit: number) => {
    if (debouncedSearch) {
      searchUser(debouncedSearch, userPerPage, pageLimit)
        .then((res) => {
          setUsers({
            total: res.data.total_count,
            users: res.data.items,
          });
        })
        .catch((err) => console.log(err));
    } else {
      setUsers(initialUsersData);
    }
  };

  useEffect(() => {
    handleSearchUsers(PAGE, PAGE_LIMIT);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch]);

  const renderItem = ({ item }: ItemType) => {
    return <SearchResultCard userData={item} navigation={navigation} />;
  };

  const loadItems = () => {
    if (users?.total && users?.users.length < users.total) {
      const newPerPage = PAGE_LIMIT + 10;
      handleSearchUsers(PAGE, newPerPage);
    }
  };

  return (
    <View style={styles.content}>
      {users?.total ? (
        <FlatList
          data={users.users}
          keyExtractor={(item) => item.id}
          onEndReached={loadItems}
          renderItem={renderItem}
        />
      ) : search ? (
        <Text style={styles.noUserText}>No user found</Text>
      ) : (
        <View style={styles.defaultText}>
          <Text>Search user from github</Text>
        </View>
      )}
    </View>
  );
};

export default Home;
