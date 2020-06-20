import React, {useRef, useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Card, TextInput, Button} from 'react-native-paper';

const AddTenant = () => {
  const [render, setRender] = useState(false);
  useEffect(() => {
    setRender(true);
  }, []);
  const inputEmail = useRef(null);
  const inputAddress = useRef(null);
  if (!render) return <View />;
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <TextInput
          style={styles.input}
          returnKeyType="next"
          onSubmitEditing={() => inputEmail.current.focus()}
          label="Name"
          mode="outlined"
        />
        <TextInput
          ref={inputEmail}
          style={styles.input}
          returnKeyType="next"
          onSubmitEditing={() => inputAddress.current.focus()}
          label="Email"
          mode="outlined"
        />

        <TextInput
          ref={inputAddress}
          style={styles.input}
          label="address"
          multiline
          secureTextEntry
          mode="outlined"
        />
        <Button style={styles.button} mode="contained">
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
