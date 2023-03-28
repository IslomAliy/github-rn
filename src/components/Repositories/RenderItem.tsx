import React from 'react';
import {Text, Animated} from 'react-native';
import {styles} from './styles';

interface Repo {
  name: string;
  description: string;
  id: string;
  language: string;
}

interface Props {
  item: Repo;
  index: number;
  scrollY: Animated.Value;
}

const ITEM_SIZE = 70 + 20 * 3;

const RenderItem: React.FC<Props> = ({item, index, scrollY}) => {
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

export default RenderItem;
