import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {Card, Avatar, List, Divider, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useResponsiveFontSize} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';

const DetailUser = () => {
  const {navigate} = useNavigation();
  const iconSize = useResponsiveFontSize(4);
  const LeftIcon = icon => props => (
    <Icon name={icon} {...props} size={iconSize} />
  );
  const onDeleteUser = () => {
    Alert.alert('', 'Are you sure delete user ?', [
      {text: 'No'},
      {text: 'Yes', onPress: () => {}},
    ]);
  };
  const onEditUser = () => navigate('editUser');
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <View style={styles.image}>
          <Avatar.Image
            size={useResponsiveFontSize(20)}
            source={{
              uri:
                'https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14046.jpg',
            }}
          />
        </View>
        <List.Item title="Mahardicka Nurachman" left={LeftIcon('account')} />
        <Divider />
        <List.Item title="Operator" left={LeftIcon('worker')} />
        <Divider />
        <List.Item title="Mahardicka404@gmail.com" left={LeftIcon('email')} />
        <Divider />
        <View style={styles.viewButton}>
          <Button mode="contained" onPress={onEditUser} style={styles.button}>
            Edit User
          </Button>
          <Button mode="outlined" onPress={onDeleteUser} style={styles.button}>
            Delete user
          </Button>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flex: 1,
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
