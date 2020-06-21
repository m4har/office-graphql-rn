import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Card, List, Avatar, FAB, Text} from 'react-native-paper';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useQuery} from '@apollo/react-hooks';
import {GET_PROFILE, ALL_USER} from '../../graphql/tag';
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const Users = () => {
  const [render, setRender] = useState(false);
  const {profile} = useQuery(GET_PROFILE)?.data;
  const {loading, data} = useQuery(ALL_USER);
  useEffect(() => {
    setRender(true);
  }, []);
  const {navigate} = useNavigation();
  const {params} = useRoute();
  const keyExtractor = (_, index) => index.toLocaleString();
  const RenderItem = ({item}) => {
    return (
      <>
        <Card
          style={styles.card}
          onPress={() => navigate('detailuser', {id: item.id})}>
          <List.Item
            title={item.name}
            description={item.role}
            left={props => <Avatar.Image source={{uri: item.photo}} />}
          />
        </Card>
      </>
    );
  };
  if (!render) return <View />;
  if (loading) return <View />;
  return (
    <View style={styles.container}>
      <FlatList
        data={data.allUser}
        extraData={data}
        keyExtractor={keyExtractor}
        renderItem={RenderItem}
      />
      {/* <Text>{JSON.stringify(data?.allUser)}</Text> */}
      {profile?.role === 'super admin' && (
        <FAB
          style={styles.fab}
          icon="plus"
          onPress={() => navigate('addUser')}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flex: 1,
    marginVertical: 5,
    marginHorizontal: 15,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
export default Users;
