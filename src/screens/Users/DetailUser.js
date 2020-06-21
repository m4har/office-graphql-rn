import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {
  Card,
  Avatar,
  List,
  Divider,
  Button,
  ActivityIndicator,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useQuery, useMutation} from '@apollo/react-hooks';
import {
  DETAIL_USER,
  DELETE_USER,
  ALL_USER,
  GET_PROFILE,
} from '../../graphql/tag';

const DetailUser = () => {
  const {params} = useRoute();
  const {navigate, goBack} = useNavigation();
  const [deleteUser, load] = useMutation(DELETE_USER, {
    variables: {id: params.id},
  });
  const {data, loading} = useQuery(DETAIL_USER, {
    variables: {id: params.id},
  });
  const allUser = useQuery(ALL_USER);
  const profile = useQuery(GET_PROFILE);
  const iconSize = responsiveFontSize(4);
  const LeftIcon = icon => props => (
    <Icon name={icon} {...props} size={iconSize} />
  );
  const onDeleteUser = () => {
    Alert.alert('', 'Are you sure delete user ?', [
      {text: 'No'},
      {
        text: 'Yes',
        onPress: async () => {
          const userDelete = await deleteUser();
          await Promise.all([allUser.refetch(), profile.refetch()]);
          if (userDelete.data) {
            goBack();
          }
        },
      },
    ]);
  };
  const onEditUser = () => navigate('editUser', {data: data.user});
  if (loading) return <ActivityIndicator />;
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <View style={styles.image}>
          <Avatar.Image
            size={responsiveFontSize(20)}
            source={{uri: data.user.photo}}
          />
        </View>
        <List.Item title={data.user.name} left={LeftIcon('account')} />
        <Divider />
        <List.Item title={data.user.role} left={LeftIcon('worker')} />
        <Divider />
        <List.Item title={data.user.email} left={LeftIcon('email')} />
        <Divider />
        {data.user.role !== 'super admin' && (
          <View style={styles.viewButton}>
            <Button
              mode="contained"
              disabled={load.loading}
              onPress={onEditUser}
              style={styles.button}>
              Edit User
            </Button>
            <Button
              disabled={load.loading}
              mode="outlined"
              onPress={onDeleteUser}
              style={styles.button}>
              Delete user
            </Button>
          </View>
        )}
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
  image: {
    width: '100%',
    alignItems: 'center',
  },
  viewButton: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 5,
  },
});
export default DetailUser;
