import React, {useRef, useEffect, useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {Card, TextInput, Button} from 'react-native-paper';
import {useQuery, useMutation} from '@apollo/react-hooks';
import {ADD_TENANT, MY_TENANT, GET_PROFILE} from '../../graphql/tag';
import isEmail from '../../utils/isEmail';
import {useNavigation} from '@react-navigation/native';

const data = {name: '', email: '', address: ''};
const AddTenant = () => {
  const [render, setRender] = useState(false);
  const [state, setStete] = useState({name: '', email: '', address: ''});
  useEffect(() => {
    setRender(true);
  }, []);
  const [newTenant, {loading}] = useMutation(ADD_TENANT, {
    variables: {...state, from: state.address},
  });
  const {goBack} = useNavigation();
  const tenant = useQuery(MY_TENANT);
  const profile = useQuery(GET_PROFILE);
  const onSetState = type => input =>
    setStete(prev => ({...prev, [type]: input}));
  const inputEmail = useRef(null);
  const inputAddress = useRef(null);
  const onNewTenant = async () => {
    if (state.name === '') return Alert.alert('', 'name is empety');
    if (!isEmail(state.email)) return Alert.alert('', 'email not valid');
    if (state.address === '') return Alert.alert('', 'address is empety');
    const addTenant = await newTenant();
    if (addTenant.data) {
      const [listTenant, myProfile] = await Promise.all([
        tenant.refetch(),
        profile.refetch(),
      ]);
      setStete(data);
      Alert.alert('', 'Tenant added', [{text: 'Ok', onPress: () => goBack()}]);
    }
  };
  if (!render) return <View />;
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <TextInput
          value={state.name}
          style={styles.input}
          returnKeyType="next"
          onSubmitEditing={() => inputEmail.current.focus()}
          label="Name"
          mode="outlined"
          onChangeText={onSetState('name')}
        />
        <TextInput
          value={state.email}
          ref={inputEmail}
          style={styles.input}
          returnKeyType="next"
          onSubmitEditing={() => inputAddress.current.focus()}
          label="Email"
          mode="outlined"
          onChangeText={onSetState('email')}
        />

        <TextInput
          value={state.address}
          ref={inputAddress}
          style={styles.input}
          label="address"
          multiline
          secureTextEntry
          mode="outlined"
          onChangeText={onSetState('address')}
        />
        <Button
          onPress={onNewTenant}
          style={styles.button}
          loading={loading}
          disabled={loading}
          mode="contained">
          Register
        </Button>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    marginHorizontal: 15,
    marginVertical: 10,
    padding: 10,
  },
  input: {
    marginTop: 5,
  },
  button: {
    marginTop: 10,
  },
});

export default AddTenant;
