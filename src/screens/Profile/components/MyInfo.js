import React, {memo} from 'react';
import {View} from 'react-native';
import {List} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useResponsiveFontSize} from 'react-native-responsive-dimensions';

export const MyInfo = memo(() => {
  const iconSize = useResponsiveFontSize(4);
  const LeftIcon = icon => props => (
    <Icon name={icon} {...props} size={iconSize} />
  );
  return (
    <View>
      <List.Item title="Operator" left={LeftIcon('worker')} />
      <List.Item title="mahardicka404@gmail.com" left={LeftIcon('email')} />
    </View>
  );
});
