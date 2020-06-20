import React, {useState, useCallback, useRef} from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {responsiveScreenHeight} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const [state, setState] = useState({email: '', password: ''});
  const {navigate} = useNavigation();
  const inputPass = useRef(null);
  const setEmail = useCallback(email => {
    setState(prev => ({...prev, email}));
  }, []);
  const setPassword = useCallback(password => {
    setState(prev => ({...prev, password}));
  }, []);
  const onNextPassword = () => {
    inputPass.current.focus();
  };
  const actionLogin = useCallback(() => {
    navigate('dashboard');
  }, []);
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
      />
      <Button
        testID="buttonlogin"
        mode="contained"
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
