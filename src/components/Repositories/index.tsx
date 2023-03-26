import React, {useRef} from 'react';
import {Text, Animated} from 'react-native';
import {styles} from './styles';

interface Repo {
  name: string;
  description: string;
  id: string;
  language: string;
}

interface Props {
  repos: Repo[];
}

type ItemType = {
  item: Repo;
  index: number;
};

const Repositories: React.FC<Props> = ({repos}) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const ITEM_SIZE = 70 + 20 * 3;
  const renderItem = ({item, index}: ItemType) => {
    const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)];
    const scale = scrollY.interpolate({inputRange, outputRange: [1, 1, 1, 0]});
    return (
      <Animated.View style={[styles.itemContainer, {transform: [{scale}]}]}>
        <Text style={styles.repoName}>{item.name}</Text>
        <Text style={styles.repoDescription}>{item.description}</Text>
        <Text style={styles.language}>{item.language}</Text>
      </Animated.View>
    );
  };

  return (
    <Animated.FlatList
      onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}], {
        useNativeDriver: true,
      })}
      data={repos}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  );
};

export default Repositories;
