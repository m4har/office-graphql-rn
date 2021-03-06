import React, {useCallback} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {useStoreActions} from 'easy-peasy';
import {useApolloClient, useLazyQuery} from '@apollo/react-hooks';
import {MyPhoto, MyInfo} from './components';

const Profile = () => {
  const client = useApolloClient();
  const setToken = useStoreActions(ac => ac.auth.setToken);
  const actionLogout = useCallback(() => {
    Alert.alert('', 'Are you sure want logout ?', [
      {
        text: 'No',
        onPress: () => {},
      },
      {
        text: 'Yes',
        onPress: () => {
          client.clearStore();
          setToken('');
        },
      },
    ]);
  }, []);
  return (
    <View style={styles.container}>
      <MyPhoto />
      <MyInfo />
      <Button
        testID="buttonLogout"
        mode="contained"
        style={styles.buttonLogout}
        onPress={actionLogout}>
        LOGOUT
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  buttonLogout: {
    marginVertical: 10,
  },
});
export default Profile;
