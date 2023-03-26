import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

type PropTypes = {
  info: string;
  secondaryText: string;
};

const InfoTextWrapper = ({info, secondaryText}: PropTypes) => {
  return (
    <View>
      <Text style={styles.infoText}>{info}</Text>
      <Text style={styles.secondaryText}>{secondaryText}</Text>
    </View>
  );
};

export default InfoTextWrapper;
