import React, {memo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar, Subheading, Divider} from 'react-native-paper';
import {useResponsiveFontSize} from 'react-native-responsive-dimensions';
import {useQuery} from '@apollo/react-hooks';
import {GET_PROFILE} from '../../../graphql/tag';

export const MyPhoto = memo(() => {
  const {data, loading, error} = useQuery(GET_PROFILE);
  return (
    <>
      <View style={styles.container}>
        <Avatar.Image
          size={useResponsiveFontSize(10)}
          source={{
            uri: data?.profile?.photo || '',
          }}
        />
        <View style={styles.name}>
          <Subheading>{data?.profile?.name}</Subheading>
        </View>
      </View>
      <Divider />
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: 'row',
  },
  name: {
    justifyContent: 'center',
    marginLeft: 10,
  },
});
