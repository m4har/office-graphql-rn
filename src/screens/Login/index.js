import React, {useState, useCallback, useRef} from 'react';
import {View, StyleSheet, Text, Alert} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {responsiveScreenHeight} from 'react-native-responsive-dimensions';
import {useMutation} from '@apollo/react-hooks';
import {useStoreActions} from 'easy-peasy';
import {LOGIN_MUTATE} from '../../graphql/tag';

const LoginScreen = () => {
  const [state, setState] = useState({email: '', password: ''});
  const [mutateLogin, {loading, error}] = useMutation(LOGIN_MUTATE);
  const setToken = useStoreActions(ac => ac.auth.setToken);
  const inputPass = useRef(null);
  const setEmail = email => {
    setState(prev => ({...prev, email}));
  };
  const setPassword = password => {
    setState(prev => ({...prev, password}));
  };
  const onNextPassword = () => {
    inputPass.current.focus();
  };
  const actionLogin = async () => {
    try {
      const body = {email: state.email.toLowerCase(), password: state.password};
      const {data} = await mutateLogin({variables: body});
      setToken(data.loginUser.token);
    } catch (err) {
      Alert.alert('', error.graphQLErrors[0].message);
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        testID="inputEmail"
        label="Email"
        mode="outlined"
        keyboardType="email-address"
        returnKeyType="next"
        style={styles.input}
        value={state.email}
        onChangeText={setEmail}
        onSubmitEditing={onNextPassword}
        disabled={loading}
      />
      <TextInput
        testID="inputPassword"
        label="Password"
        mode="outlined"
        secureTextEntry
        style={styles.input}
        ref={inputPass}
        value={state.password}
        onChangeText={setPassword}
        disabled={loading}
      />
      <Button
        testID="buttonlogin"
        mode="contained"
        disabled={loading}
        loading={loading}
        style={styles.button}
        onPress={actionLogin}>
        LOGIN
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  input: {
    marginVertical: 5,
  },
  button: {
    marginVertical: 10,
    height: responsiveScreenHeight(6),
    justifyContent: 'center',
  },
});

export default LoginScreen;
