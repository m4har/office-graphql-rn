import React, {useRef} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  Card,
  TextInput,
  Paragraph,
  Text,
  Divider,
  Button,
} from 'react-native-paper';

const AddUser = () => {
  const inputEmail = useRef(null);
  const inputPass = useRef(null);
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
          label="Email"
          mode="outlined"
        />
        <Paragraph>Role</Paragraph>
        {['super', 'admin', 'operator', 'manager'].map((item, index) => {
          if (item === 'super') return <View key={index} />;
          return (
            <View key={index}>
              <TouchableOpacity
                disabled={item === 'super'}
                style={styles.radio}
                onPress={() => {}}>
                <View
                  value={item}
                  color="#000"
                  style={[
                    styles.radioCirle,
                    {
                      backgroundColor:
                        item === 'operator' ? '#102f4a' : 'transparent',
                    },
                  ]}
                />
                <Text>{item}</Text>
              </TouchableOpacity>
              <Divider />
            </View>
          );
        })}
        <TextInput
          style={styles.input}
          returnKeyType="next"
          onSubmitEditing={() => inputPass.current.focus()}
          label="Password"
          secureTextEntry
          mode="outlined"
        />
        <TextInput
          ref={inputPass}
          style={styles.input}
          label="Re Password"
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
  radio: {
    flexDirection: 'row',
    height: 25,
    marginTop: 5,
  },
  radioCirle: {
    borderRadius: 50,
    height: 20,
    width: 20,
    borderWidth: 0.5,
    marginHorizontal: 5,
  },
  input: {
    marginTop: 5,
  },
  button: {
    marginTop: 10,
  },
});

export default AddUser;
