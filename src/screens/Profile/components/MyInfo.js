import React, {memo} from 'react';
import {View} from 'react-native';
import {List} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useResponsiveFontSize} from 'react-native-responsive-dimensions';
import {useQuery} from '@apollo/react-hooks';
import {GET_PROFILE} from '../../../graphql/tag';

export const MyInfo = memo(() => {
  const {data, loading, error} = useQuery(GET_PROFILE);
  const iconSize = useResponsiveFontSize(4);
  const LeftIcon = icon => props => (
    <Icon name={icon} {...props} size={iconSize} />
  );
  return (
    <View>
      <List.Item title={data?.profile?.role} left={LeftIcon('worker')} />
      <List.Item title={data?.profile?.email} left={LeftIcon('email')} />
    </View>
  );
});
