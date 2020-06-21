import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {
  Card,
  TextInput,
  Paragraph,
  Text,
  Divider,
  Button,
} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useRoute, useNavigation} from '@react-navigation/native';
import {Roles} from '../../components';
import {useMutation, useQuery} from '@apollo/react-hooks';
import {EDIT_USER, ALL_USER} from '../../graphql/tag';

const EditUser = () => {
  const [actionEdit, {loading, error}] = useMutation(EDIT_USER);
  const users = useQuery(ALL_USER);
  const {
    params: {data},
  } = useRoute();
  const {navigate} = useNavigation();
  const [state, setState] = useState({
    id: data.id,
    name: data.name,
    email: data.email,
    role: data.role,
  });
  const onSetState = type => input =>
    setState(prev => ({...prev, [type]: input}));
  const onUpdateUser = () =>
    Alert.alert('', 'Sure edit user ?', [
      {text: 'No'},
      {
        text: 'Yes',
        onPress: async () => {
          const edit = await actionEdit({variables: state});
          if (edit.data) {
            await users.refetch();
            navigate('user');
          }
        },
      },
    ]);
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <TextInput
          style={styles.input}
          label="Name"
          mode="outlined"
          value={state.name}
          onChangeText={onSetState('name')}
        />
        <TextInput
          disabled
          style={styles.input}
          label="Email"
          mode="outlined"
          value={state.email}
          onChangeText={onSetState('email')}
        />
        <Roles value={state.role} onSelect={onSetState('role')} />
        <Button
          loading={loading}
          disabled={loading}
          style={styles.updateButton}
          mode="contained"
          onPress={onUpdateUser}>
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
