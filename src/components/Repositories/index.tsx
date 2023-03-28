import React, {useRef} from 'react';
import {Animated} from 'react-native';
import HeadSection from '../HeadSection/HeadSection';
import RenderItem from './RenderItem';

interface Repo {
  name: string;
  description: string;
  id: string;
  language: string;
}

interface userData {
  avatar_url: string;
  followers: string;
  following: string;
  public_repos: string;
}

interface Props {
  repos: Repo[];
  userData: userData;
}

type ItemType = {
  item: Repo;
  index: number;
};

const Repositories: React.FC<Props> = ({repos, userData}) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const renderItem = ({item, index}: ItemType) => {
    return <RenderItem item={item} index={index} scrollY={scrollY} />;
  };

  return (
    <Animated.FlatList
      onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}], {
        useNativeDriver: true,
      })}
      ListHeaderComponent={<HeadSection userData={userData} />}
      data={repos}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  );
};

export default Repositories;
