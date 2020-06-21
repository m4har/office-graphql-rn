import React, {useRef, useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {Card, TextInput, Button} from 'react-native-paper';
import {Roles} from '../../components';
import isEmail from '../../utils/isEmail';
import {useMutation, useQuery} from '@apollo/react-hooks';
import {CREATE_USER, ALL_USER, GET_PROFILE} from '../../graphql/tag';
import {useNavigation} from '@react-navigation/native';

const AddUser = () => {
  const [newUser, {loading}] = useMutation(CREATE_USER);
  const allUser = useQuery(ALL_USER);
  const profile = useQuery(GET_PROFILE);
  const {goBack} = useNavigation();
  const [state, setState] = useState({
    name: '',
    email: '',
    role: '',
    password: '',
    rePassword: '',
  });
  const inputEmail = useRef(null);
  const inputPass = useRef(null);
  const onSetState = type => input =>
    setState(prev => ({...prev, [type]: input}));
  const onAddUser = async () => {
    try {
      if (state.name === '') return Alert.alert('', 'name is empety');
      if (!isEmail(state.email)) return Alert.alert('', 'email not valid');
      if (state.role === '') return Alert.alert('', 'role is empety');
      if (state.password === '') return Alert.alert('', 'password is empety');
      if (state.password !== state.rePassword)
        return Alert.alert('', 'password is not same');
      const users = await newUser({
        variables: {...state, password: state.password.toLowerCase()},
      });
      if (users.data) {
        await Promise.all([allUser.refetch(), profile.refetch()]);
        Alert.alert('', 'user added', [{text: 'OK', onPress: () => goBack()}]);
      }
    } catch (error) {
      Alert.alert('', error.graphQLErrors[0]?.message || 'network error');
    }
  };
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
          label="Email"
          keyboardType="email-address"
          mode="outlined"
          onChangeText={onSetState('email')}
        />
        <Roles onSelect={onSetState('role')} value={state.role} />
        <TextInput
          style={styles.input}
          value={state.password}
          returnKeyType="next"
          onSubmitEditing={() => inputPass.current.focus()}
          label="Password"
          secureTextEntry
          mode="outlined"
          onChangeText={onSetState('password')}
        />
        <TextInput
          value={state.rePassword}
          ref={inputPass}
          style={styles.input}
          label="Re Password"
          secureTextEntry
          mode="outlined"
          onChangeText={onSetState('rePassword')}
        />
        <Button
          disabled={loading}
          loading={loading}
          style={styles.button}
          onPress={onAddUser}
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

export default AddUser;
