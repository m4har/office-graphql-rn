import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CardInfo} from './components';
const Home = () => {
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
