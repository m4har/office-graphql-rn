import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useLazyQuery} from '@apollo/react-hooks';
import {CardInfo} from './components';
import {GET_PROFILE} from '../../graphql/tag';
const Home = () => {
  const [getProfile, {data, loading, error}] = useLazyQuery(GET_PROFILE);
  useEffect(() => {
    getProfile();
    if (!loading) {
    }
  }, [loading]);
  return (
    <View style={styles.container}>
      <CardInfo />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
});
export default Home;
