import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  Card,
  TextInput,
  Paragraph,
  Text,
  Divider,
  Button,
} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

const EditUser = () => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <TextInput
          style={styles.input}
          label="Name"
          mode="outlined"
          value="Mahardicka Nurachman"
        />
        <TextInput
          style={styles.input}
          label="Email"
          mode="outlined"
          value="mahardicka404@gmail.com"
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
        <Button style={styles.updateButton} mode="contained" onPress={() => {}}>
          Update
        </Button>
      </Card>
      <SafeAreaView />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 15,
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
  updateButton: {
    marginTop: 10,
  },
  input: {
    marginTop: 10,
  },
});

export default EditUser;
